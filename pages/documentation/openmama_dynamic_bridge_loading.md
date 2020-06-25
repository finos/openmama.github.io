---
title: Dynamic Bridge Loading
sidebar: openmama_sidebar
permalink: openmama_dynamic_bridge_loading.html
folder: openmama
toc: true
---
_NOTE: Bridge loading functionality was changed as of OpenMAMA version 2.4.0 and Publisher Events have been added. The following changes must be implemented for middleware and payload bridges to remain compatible with OpenMAMA going forward._

## Summary of Changes
Previously, it was the responsibility of the bridge developer to handle the allocation and clean-up of loaded
bridges. This has been deprecated in favour of dynamic bridge loading which provides a more flexible mechanism
going forward. This release will also include Publisher Events which requires further bridge changes. All the
mandatory changes for this release are listed here.

Note that in additional to the rules listed below, you should also make a conscious effort to remove all dependencies on the mamaPayloadType data type and *avoid any direct access to the bridge payload object*.

## Migration Summary Example

### Middleware Bridge

To remain compatible with OpenMAMA, each third party bridge needs to:

* Add a new function `_init` which carries out all initialization previously done in _create **except allocating the bridge**.
* Inside the init function, share with the runtime MAMA instance the version of MAMA which the bridge was compiled against using the new MAMA_SET_BRIDGE_COMPILE_TIME_VERSION macro.

```
mama_status qpidBridge_init (mamaBridge bridgeImpl)
{
    mama_status status = MAMA_STATUS_OK;

    MAMA_SET_BRIDGE_COMPILE_TIME_VERSION("qpid");

    /* Do whatever other initialization is required */

    return status;
}
```

* Ensure all bridge functions are defined with `MAMAExpBridgeDLL` macro:

```
MAMAExpDLL                  #<-- Add decorator here for all functions to be loaded from the shared object.
extern mama_status
qpidBridge_open (mamaBridge bridgeImpl);
``` 

* Remove the implementation for `BridgeMamaPublisher_create` - it has been deprecated in this release
* Modify the `BridgeMamaPublisher_createByIndex` method in your implementation to match the new prototype:

```
MAMAExpDLL
extern mama_status
qpidBridgeMamaPublisher_createByIndex (
                               publisherBridge*  result,
                               mamaTransport     tport,
                               int               tportIndex,
                               const char*       topic,
                               const char*       source,
                               const char*       root,
                               // <--- There was a native queue argument here - now removed
                               mamaPublisher     parent);
```

* Ensure that the bridge's `Bridge_close()` method **does not free up the bridge implementation itself**
* (Optional) Add a new implementation for the new publisher event callbacks

```
typedef mama_status
<bridgename>BridgeMamaPublisher_setUserCallbacks (publisherBridge         publisher,
                                                  mamaQueue               queue,
                                                  mamaPublisherCallbacks* cb,
                                                  void*                   closure);
```

### Payload Bridge

* Add a `_init` function which carries out anything previously done in `_create` **except for allocating the bridge**.
* Inside the init function, share with the runtime MAMA instance the version of MAMA which the bridge was compiled against using the new `MAMA_SET_BRIDGE_COMPILE_TIME_VERSION` macro.

```
mama_status
qpidmsgPayload_init (mamaPayloadBridge bridge, char* identifier)
{
    *identifier = (char)MAMA_PAYLOAD_QPID;

    /* Will set the bridge's compile time MAMA version */
    MAMA_SET_BRIDGE_COMPILE_TIME_VERSION("qpidmsg");

    return MAMA_STATUS_OK;
}
```

* Ensure all bridge functions are defined with `MAMAExpBridgeDLL` macro:

```
MAMAExpBridgeDLL            #<-- Add decorator here for all functions to be loaded from the shared object.  
mama_status
qpidmsgPayload_create      (mamaPayloadBridge* result, char* identifier);
```

## Code Walkthrough

### MAMA level behaviour

#### Middleware

- `mama_loadBridge()` will search for a shared object named `mama[MIDDLEWARE_NAME]impl.so` on the path and load it.
- At this time, the shared object will be searched for a function definition named `[MIDDLEWARE_NAME]_init()`. If this is not found loading will fail.
- If the _init function is found, **OpenMAMA will allocate a allocate a middleware bridge struct** and place it in the global searchable table
  `gImpl.middlewares` (as well as append it onto a convenience list `gImpl.middlewares.byIndex`). Note that in reality the bridge struct is wrapped in 
   a `mamaMiddlewareLib` struct. This is so that additional information (such as the default payload to use) can be associated with a loaded middleware
   bridge.
- Once the bridge has been successfully loaded, mama will query it for the default payload id to associate it with (stored internally in the entitlementLib object).
  This will be done by a call to `BridgeGetDefaultPayloadId` which should be implemented by the bridge. 
- Finally, [`mamaInternal_registerMiddlewareFunctions`](https://github.com/OpenMAMA/OpenMAMA/blob/next/mama/c_cpp/src/c/registerfunctions.c#L31) will be called 
  to register function pointers used by mama to map to bridge implementation functions in the shared object. This function definition  is a good reference for 
  which functions must be implemented in a middleware bridge and which are optional.

#### Payload

Similarly to middleware bridges above:

- Payload bridges are allocated by mama.
- A shared object named  `mama[PAYLOAD_NAME]impl.so` is searched for and loaded.
- A `[PAYLOAD_NAME]Payload_init()` function is searched for in the .so and called.
- [`mamaInternal_registerPayloadFunctions`](https://github.com/OpenMAMA/OpenMAMA/blob/next/mama/c_cpp/src/c/registerfunctions.c#L154) is called to map
  function definitions (again, this is a good reference for which payload bridge implementations are mandatory and optional).

This will automatically be done for each of the default payload's specified for each loaded middleware. Alternatively a payload may be loaded using the `mama_loadPayload()` function.

### Bridge Level Behaviour

#### Middleware Bridge

##### Legacy bridge initialisation 

The older 'legacy' method for loading the qpid bridge was done using ['qpidBridge_createImpl'](https://github.com/OpenMAMA/OpenMAMA/blob/next/mama/c_cpp/src/c/bridge/qpid/bridge.c#L64)
It was responsible for allocating the memory for the bridge implementation:

```
    /* Create the wrapping MAMA bridge */
    bridge = (mamaBridgeImpl*) calloc (1, sizeof (mamaBridgeImpl));
    if (NULL == bridge)
    {
        mama_log (MAMA_LOG_LEVEL_SEVERE, "qpidBridge_createImpl(): "
                "Could not allocate memory for MAMA bridge implementation.");
        *result = NULL;
        return;
    }
```

... registering the bridge function pointers (done through the macro call):

```
    /* Populate the bridge impl structure with the function pointers */
    INITIALIZE_BRIDGE (bridge, qpid);
```

... and finally setting the (now allocated) bridge struct to the (returned) global bridge object.

```
    /* Return the newly created bridge */
    *result = (mamaBridge) bridge;
}
```

##### Dynamic Loading bridge initialisation

Now, simply by adding a [`qpidBridge_init`](https://github.com/OpenMAMA/OpenMAMA/blob/next/mama/c_cpp/src/c/bridge/qpid/bridge.c#L92) method, we change the qpid bridge to be managed by OpenMAMA (note the code below also contains some information on how to version handshake with the runtime MAMA version):

```
mama_status qpidBridge_init (mamaBridge bridgeImpl)
{
    mama_status status         = MAMA_STATUS_OK;
    const char* runtimeVersion = NULL;

    /* Reusable buffer to populate with property values */
    char propString[MAX_INTERNAL_PROP_LEN];
    versionInfo rtVer;

    /* Will set the bridge's compile time MAMA version */
    MAMA_SET_BRIDGE_COMPILE_TIME_VERSION(QPID_BRIDGE_NAME);

    /* Ensure that the qpid bridge is defined as not deferring entitlements */
    status = mamaBridgeImpl_setReadOnlyProperty (bridgeImpl,
                                                 MAMA_PROP_BARE_ENT_DEFERRED,
                                                 "false");

    /* Get the runtime version of MAMA and parse into version struct */
    runtimeVersion = mamaInternal_getMetaProperty (MAMA_PROP_MAMA_RUNTIME_VER);
    strToVersionInfo (runtimeVersion, &rtVer);

    /* NB checks are runtime only - assume build system will prevent accidental
     * compilation against incompatible versions. This is a demonstration to
     * show how you could do runtime version checking. */
    if (1 == rtVer.mMajor)
    {
        mama_log (MAMA_LOG_LEVEL_SEVERE, "qpidBridge_init(): "
                  "This version of the bridge (%s) cannot be used with MAMA %s.",
                  QPID_BRIDGE_VERSION,
                  runtimeVersion);
        return MAMA_STATUS_NOT_IMPLEMENTED;
    }

    return status;
}
```

In practical terms, anything that was formerly carried out in the `_create` method **with the exception of allocating the bridge object**
should be moved into  `_init` as **`_create` will no longer be called**. There is also a mandatory macro in there as well to ensure that the bridge reports its compile time version to MAMA, so that MAMA can choose to discard incompatible bridges (i.e. where MAJOR.MINOR versions do not match).

##### Function exports

For compatibility with windows, all functions being mapped in the bridge need to be properly exported. This is done through the use of the `MAMAExpBridgeDLL` macro e.g.

```
MAMAExpDLL /* NB: MAMAExpDLL now required for all exported bridge functions */
extern mama_status
qpidBridge_init (mamaBridge bridgeImpl);
```

#### Payload Bridge

##### Legacy bridge initialisation
Similarly to the middleware bridge, [`qpidmsgPayload_createImpl`](https://github.com/OpenMAMA/OpenMAMA/blob/next/mama/c_cpp/src/c/payload/qpidmsg/payload.c#L506) was responsible for allocating the payload bridge:

```
    mamaPayloadBridgeImpl* impl = NULL;

    impl = (mamaPayloadBridgeImpl*) calloc (1, sizeof (mamaPayloadBridgeImpl));
```

...  registering the function pointers:

```
    /* Initialize the virtual function table (see payloadbridge.h) */
    INITIALIZE_PAYLOAD_BRIDGE (impl, qpidmsg);
```

... and returning the allocated bridge object:

```
    *result     = (mamaPayloadBridge)impl;
```

It also was responsible for setting the identifying character used for the payload:

```
    *result     = (mamaPayloadBridge)impl;
```

##### Dynamic Loading bridge initialisation

Now, to port this functionality to our new dynamic loading mechanism, we add a [`qpidmsgPayload_init`](https://github.com/OpenMAMA/OpenMAMA/blob/next/mama/c_cpp/src/c/payload/qpidmsg/payload.c#L532) function:

```
mama_status
qpidmsgPayload_init (mamaPayloadBridge bridge, char* identifier)
{
    *identifier = (char)MAMA_PAYLOAD_QPID;

    /* Will set the bridge's compile time MAMA version */
    MAMA_SET_BRIDGE_COMPILE_TIME_VERSION("qpidmsg");

    return MAMA_STATUS_OK;
}
```

Again, the main functionality to implement here is the population of the identifying char, as **OpenMAMA will carry out the bridge allocation and population**. As with the middleware bridge, there is also a mandatory macro in there as well to ensure that the payload bridge reports its compile time version to MAMA, so that MAMA can choose to discard incompatible bridges (i.e. where MAJOR.MINOR versions do not match).

##### Function exports

Similarly to the middleware bridges, any function being loaded from the shared objects should use the `MAMAExpBridgeDLL` macro to ensure proper loading across all platforms e.g.

```
MAMAExpBridgeDLL            #<-- Add decorator here for all functions to be loaded from the shared object.
mama_status
qpidmsgPayload_init (mamaPayloadBridge bridge, char* identifier);
```