---
title: mama/mama.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/mama.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[mamaEntitlementCallbacks_](structmamaEntitlementCallbacks__.html)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[sessionDisconnectReason](mama_8h.html#enum-sessiondisconnectreason)** { SESSION_DISCONNECT_REASON_ADMIN = 0, SESSION_DISCONNECT_REASON_NEW_CONNECTION = 1, SESSION_DISCONNECT_REASON_ENTITLEMENTS_UPDATE = 2, SESSION_DISCONNECT_REASON_INVALID = 101} |
| typedef void(MAMACALLTYPE *)(mama_status status) | **[mamaStartCB](mama_8h.html#typedef-mamastartcb)**  |
| typedef void(MAMACALLTYPE *)(mama_status) | **[mamaStopCB](mama_8h.html#typedef-mamastopcb)**  |
| typedef void(MAMACALLTYPE *)(mama_status, mamaBridge, void *) | **[mamaStopCBEx](mama_8h.html#typedef-mamastopcbex)**  |
| typedef void(MAMACALLTYPE *)(const sessionDisconnectReason reason, const char *userId, const char *host, const char *appName) | **[onSessionDisconnectCB](mama_8h.html#typedef-onsessiondisconnectcb)**  |
| typedef void(MAMACALLTYPE *)(void) | **[onEntitlementUpdateCB](mama_8h.html#typedef-onentitlementupdatecb)**  |
| typedef void(MAMACALLTYPE *)(const int isEntitlementCheckingDisabled) | **[onEntitlementCheckingSwitchCB](mama_8h.html#typedef-onentitlementcheckingswitchcb)**  |
| typedef struct [mamaEntitlementCallbacks_](structmamaEntitlementCallbacks__.html) | **[mamaEntitlementCallbacks](mama_8h.html#typedef-mamaentitlementcallbacks)**  |
| typedef void(MAMACALLTYPE *)(mamaBridge bridgeImpl, const char *message) | **[bridgeInfoCallback](mama_8h.html#typedef-bridgeinfocallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| mama_status | **[mama_setDefaultPayload](mama_8h.html#function-mama-setdefaultpayload)**(char id) |
| MAMAExpDLL mama_status | **[mama_loadBridge](mama_8h.html#function-mama-loadbridge)**(mamaBridge * impl, const char * middleware) |
| MAMAExpDLL mama_status | **[mama_loadPayloadBridge](mama_8h.html#function-mama-loadpayloadbridge)**(mamaPayloadBridge * bridge, const char * payloadName) |
| MAMAExpDLL mama_status | **[mama_loadBridgeWithPath](mama_8h.html#function-mama-loadbridgewithpath)**(mamaBridge * impl, const char * middleware, const char * path) |
| MAMAExpDLL mama_status | **[mama_open](mama_8h.html#function-mama-open)**(void ) |
| MAMAExpDLL mama_status | **[mama_openCount](mama_8h.html#function-mama-opencount)**(unsigned int * count) |
| MAMAExpDLL mama_status | **[mama_openWithProperties](mama_8h.html#function-mama-openwithproperties)**(const char * path, const char * filename) |
| MAMAExpDLL mama_status | **[mama_openWithPropertiesCount](mama_8h.html#function-mama-openwithpropertiescount)**(const char * path, const char * filename, unsigned int * count) |
| MAMAExpDLL mama_status | **[mama_setProperty](mama_8h.html#function-mama-setproperty)**(const char * name, const char * value) |
| MAMAExpDLL mama_status | **[mama_setPropertiesFromFile](mama_8h.html#function-mama-setpropertiesfromfile)**(const char * path, const char * filename) |
| const MAMAExpDLL char * | **[mama_getProperty](mama_8h.html#function-mama-getproperty)**(const char * name) |
| MAMAExpDLL mama_status | **[mama_close](mama_8h.html#function-mama-close)**(void ) |
| MAMAExpDLL mama_status | **[mama_closeCount](mama_8h.html#function-mama-closecount)**(unsigned int * count) |
| const MAMAExpDLL char * | **[mama_getVersion](mama_8h.html#function-mama-getversion)**(mamaBridge bridgeImpl) |
| MAMAExpDLL mama_status | **[mama_start](mama_8h.html#function-mama-start)**(mamaBridge bridgeImpl) |
| MAMAExpDLL mama_status | **[mama_startBackground](mama_8h.html#function-mama-startbackground)**(mamaBridge bridgeImpl, mamaStartCB callback) |
| MAMAExpDLL mama_status | **[mama_startBackgroundEx](mama_8h.html#function-mama-startbackgroundex)**(mamaBridge bridgeImpl, mamaStopCBEx callback, void * closure) |
| MAMAExpDLL mama_status | **[mama_stop](mama_8h.html#function-mama-stop)**(mamaBridge bridgeImpl) |
| MAMAExpDLL mama_status | **[mama_stopAll](mama_8h.html#function-mama-stopall)**(void ) |
| MAMAExpDLL mama_status | **[mama_setApplicationName](mama_8h.html#function-mama-setapplicationname)**(const char * applicationName) |
| MAMAExpDLL mama_status | **[mama_setApplicationClassName](mama_8h.html#function-mama-setapplicationclassname)**(const char * className) |
| MAMAExpDLL mama_status | **[mama_registerEntitlementCallbacks](mama_8h.html#function-mama-registerentitlementcallbacks)**(const [mamaEntitlementCallbacks](structmamaEntitlementCallbacks__.html) * entitlementCallbacks) |
| MAMAExpDLL mama_status | **[mama_getApplicationName](mama_8h.html#function-mama-getapplicationname)**(const char ** applicationName) |
| MAMAExpDLL mama_status | **[mama_getApplicationClassName](mama_8h.html#function-mama-getapplicationclassname)**(const char ** className) |
| MAMAExpDLL mama_status | **[mama_getUserName](mama_8h.html#function-mama-getusername)**(const char ** userName) |
| MAMAExpDLL mama_status | **[mama_getHostName](mama_8h.html#function-mama-gethostname)**(const char ** hostName) |
| MAMAExpDLL mama_status | **[mama_getIpAddress](mama_8h.html#function-mama-getipaddress)**(const char ** ipAddress) |
| MAMAExpDLL mama_status | **[mama_getDefaultEventQueue](mama_8h.html#function-mama-getdefaulteventqueue)**(mamaBridge bridgeImpl, mamaQueue * defaultQueue) |
| MAMAExpDLL void | **[mama_setLastError](mama_8h.html#function-mama-setlasterror)**(mamaError error) |
| MAMAExpDLL mamaError | **[mama_getLastErrorCode](mama_8h.html#function-mama-getlasterrorcode)**(void ) |
| const MAMAExpDLL char * | **[mama_getLastErrorText](mama_8h.html#function-mama-getlasterrortext)**(void ) |
| MAMAExpDLL mama_status | **[mama_setBridgeInfoCallback](mama_8h.html#function-mama-setbridgeinfocallback)**(mamaBridge bridgeImpl, bridgeInfoCallback callback) |
| MAMAExpDLL mama_status | **[mama_addStatsCollector](mama_8h.html#function-mama-addstatscollector)**(mamaStatsCollector statsCollector) |
| MAMAExpDLL mama_status | **[mama_removeStatsCollector](mama_8h.html#function-mama-removestatscollector)**(mamaStatsCollector statsCollector) |
| MAMAExpDLL int | **[mama_getGenerateTransportStats](mama_8h.html#function-mama-getgeneratetransportstats)**(void ) |
| MAMAExpDLL mama_status | **[mama_getMiddlewareBridge](mama_8h.html#function-mama-getmiddlewarebridge)**(mamaBridge * bridge, const char * middlewareName) |
| MAMAExpDLL mama_status | **[mama_getPayloadBridge](mama_8h.html#function-mama-getpayloadbridge)**(mamaPayloadBridge * payloadBridge, const char * payloadName) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAMA_OPEN_MD](mama_8h.html#define-mama-open-md)**  |
|  | **[MAMA_OPEN_PUB_SUB](mama_8h.html#define-mama-open-pub-sub)**  |
|  | **[MAMA_DEFAULT_THROTTLE_RATE](mama_8h.html#define-mama-default-throttle-rate)**  |
|  | **[MAMA_DEFAULT_RECAP_THROTTLE_RATE](mama_8h.html#define-mama-default-recap-throttle-rate)**  |
|  | **[MAMA_DEFAULT_RETRIES](mama_8h.html#define-mama-default-retries)**  |
|  | **[MAMA_DEFAULT_TIMEOUT](mama_8h.html#define-mama-default-timeout)**  |
|  | **[MAMA_MAX_SYMBOL_LEN](mama_8h.html#define-mama-max-symbol-len)**  |
|  | **[MAMA_MAX_ROOT_LEN](mama_8h.html#define-mama-max-root-len)**  |
|  | **[MAMA_MAX_SOURCE_LEN](mama_8h.html#define-mama-max-source-len)**  |
|  | **[MAMA_MAX_TRANSPORT_LEN](mama_8h.html#define-mama-max-transport-len)**  |
|  | **[MAMA_MAX_TOTAL_SYMBOL_LEN](mama_8h.html#define-mama-max-total-symbol-len)**  |
|  | **[MAMA_LINK_BRIDGE](mama_8h.html#define-mama-link-bridge)**(implIdentifier, impl)  |
|  | **[MAMA_CREATE_BRIDGE](mama_8h.html#define-mama-create-bridge)**(implIdentifier, impl)  |

## Types Documentation

### enum sessionDisconnectReason

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SESSION_DISCONNECT_REASON_ADMIN | 0|   |
| SESSION_DISCONNECT_REASON_NEW_CONNECTION | 1|   |
| SESSION_DISCONNECT_REASON_ENTITLEMENTS_UPDATE | 2|   |
| SESSION_DISCONNECT_REASON_INVALID | 101|   |




Entitlement disconnect status codes 


### typedef mamaStartCB

```cpp
typedef void(MAMACALLTYPE * mamaStartCB) (mama_status status);
```


The callback invoked if an error occurs calling mama_startBackground() or when mama_startBackground() exits normally in which case status will be MAMA_STATUS_OK. 


### typedef mamaStopCB

```cpp
typedef void(MAMACALLTYPE * mamaStopCB) (mama_status);
```


Callback invoked when default thread for middleware has finished processing. 


### typedef mamaStopCBEx

```cpp
typedef void(MAMACALLTYPE * mamaStopCBEx) (mama_status, mamaBridge, void *);
```


Extended stop callback that improves on mamaStopCB by including a bridge impl pointer and closure in the signature. 


### typedef onSessionDisconnectCB

```cpp
typedef void( MAMACALLTYPE * onSessionDisconnectCB) (const sessionDisconnectReason reason, const char *userId, const char *host, const char *appName);
```


**Parameters**: 

  * **reason** Reason disconnect request was sent 
  * **userId** ID of user who initiated the disconnection, either by attempting to initiate a new connection or an admin user explicitly issuing a disconnect 
  * **host** Hostname/IP address of the site server or where userId is attempting to connect from 
  * **appName** "site server" or application name of application that userId is using to connect (possibly NULL) 


Callback passed to registerEntitlementCallbacks(). Will be invoked when a disconnect request is recevied from the entitlements server 


### typedef onEntitlementUpdateCB

```cpp
typedef void( MAMACALLTYPE * onEntitlementUpdateCB) (void);
```


Callback invoked after dynamic entitlements update has occurred 


### typedef onEntitlementCheckingSwitchCB

```cpp
typedef void( MAMACALLTYPE * onEntitlementCheckingSwitchCB) (const int isEntitlementCheckingDisabled);
```


**Parameters**: 

  * **isEntitlementsCheckingDisabled** Holds 1 if entitlements checking has been switched to disabled, otherwise 0. 


Callback invoked when entitlements checking has been switched, for example, from enabled to disabled. 


### typedef mamaEntitlementCallbacks

```cpp
typedef struct mamaEntitlementCallbacks_ mamaEntitlementCallbacks;
```


Convenience structure for registering entitlement callbacks to MAMA 


### typedef bridgeInfoCallback

```cpp
typedef void(MAMACALLTYPE * bridgeInfoCallback) (mamaBridge bridgeImpl, const char *message);
```


Callback passed to mama_setBridgeInfoCallback (). This will be invoked when info messages are logged at the bridge level. Currently only invoked for LBM log messages. 



## Functions Documentation

### function mama_setDefaultPayload

```cpp
mama_status mama_setDefaultPayload(
    char id
)
```


The `Mama` data type provides methods global initialization and manipulating global options. 

Related `Mama` functions also provide means for creating transports, dictionaries, and subscriptions. 


### function mama_loadBridge

```cpp
MAMAExpDLL mama_status mama_loadBridge(
    mamaBridge * impl,
    const char * middleware
)
```


**Parameters**: 

  * **impl** The bridge object 
  * **middleware** The middleware string. Can be "wmw", "lbm" or "tibrv". 


**Return**: mama_status Whether the call was successful or not. 

Load the bridge specified by middleware string. If the bridge has already been loaded then the existing bridge instance will be returned. 


### function mama_loadPayloadBridge

```cpp
MAMAExpDLL mama_status mama_loadPayloadBridge(
    mamaPayloadBridge * bridge,
    const char * payloadName
)
```


### function mama_loadBridgeWithPath

```cpp
MAMAExpDLL mama_status mama_loadBridgeWithPath(
    mamaBridge * impl,
    const char * middleware,
    const char * path
)
```


**Parameters**: 

  * **impl** The bridge object 
  * **middleware** The middleware string. Can be "wmw", "lbm" or "tibrv". 
  * **path** The path to the bridge library 


**Return**: mama_status Whether the call was successful or not. 

Load the bridge specified by middleware string using the path specified by the user. If the bridge has already been loaded then the existing bridge instance will be returned. 


### function mama_open

```cpp
MAMAExpDLL mama_status mama_open(
    void 
)
```


Initialize MAMA.

MAMA employs a reference count to track multiple calls to mama_open() and mama_close(). The count is incremented every time mama_open() is called and decremented when mama_close() is called. The resources are not actually released until the count reaches zero. 


### function mama_openCount

```cpp
MAMAExpDLL mama_status mama_openCount(
    unsigned int * count
)
```


**Parameters**: 

  * **count** The reference count for the MAMA library after opening once. This will be non-zero and will match the amount of times a mama_open() variant has been called. 


Initialize MAMA.

MAMA employs a reference count to track multiple calls to mama_open() and mama_close(). The count is incremented every time mama_open() is called and decremented when mama_close() is called. The resources are not actually released until the count reaches zero.


### function mama_openWithProperties

```cpp
MAMAExpDLL mama_status mama_openWithProperties(
    const char * path,
    const char * filename
)
```


**Parameters**: 

  * **path** Fully qualified path to the directory containing the properties file 
  * **filename** The name of the file containing MAMA properties.


**Return**: mama_status Whether the call was successful or not. 

Initialize MAMA.

Allows users of the API to override the default behavior of mama_open() where a file mama.properties is required to be located in the directory specified by $WOMBAT_PATH.

The properties file must have the same structure as a standard mama.properties file.

If null is passed as the path the API will look for the properties file on the $WOMBAT_PATH.

If null is passed as the filename the API will look for the default filename of mama.properties.

MAMA employs a reference count to track multiple calls to mama_open() and mama_close(). The count is incremented every time mama_open() is called and decremented when mama_close() is called. The resources are not actually released until the count reaches zero.


### function mama_openWithPropertiesCount

```cpp
MAMAExpDLL mama_status mama_openWithPropertiesCount(
    const char * path,
    const char * filename,
    unsigned int * count
)
```


**Parameters**: 

  * **path** Fully qualified path to the directory containing the properties file 
  * **filename** The name of the file containing MAMA properties. 
  * **count** The reference count for the MAMA library after opening once. This will be non-zero and will match the amount of times a mama_open() variant has been called.


**Return**: mama_status Whether the call was successful or not. 

Initialize MAMA.

Allows users of the API to override the default behavior of mama_open() where a file mama.properties is required to be located in the directory specified by $WOMBAT_PATH.

The properties file must have the same structure as a standard mama.properties file.

If null is passed as the path the API will look for the properties file on the $WOMBAT_PATH.

If null is passed as the filename the API will look for the default filename of mama.properties.

MAMA employs a reference count to track multiple calls to mama_open() and mama_close(). The count is incremented every time mama_open() is called and decremented when mama_close() is called. The resources are not actually released until the count reaches zero.


### function mama_setProperty

```cpp
MAMAExpDLL mama_status mama_setProperty(
    const char * name,
    const char * value
)
```


**Parameters**: 

  * **name** The name of the property being set. 
  * **value** The value of the property being set.


**Return**: MAMA_STATUS_NULL_ARG is either name or value is null. MAMA_STATUS_OK if the function completed successfully. 

Set a specific property for the API.

If the property being set has already been given a value from a properties file that value will be replaced.

See the example mama.properties provided with the distribution for examples of property formatting. The properties set via this function should be formatted in the same manner as those specified in mama.properties.

The strings passed to the function are copied.


### function mama_setPropertiesFromFile

```cpp
MAMAExpDLL mama_status mama_setPropertiesFromFile(
    const char * path,
    const char * filename
)
```


**Parameters**: 

  * **path** Fully qualified path to the directory containing the properties file 
  * **filename** The name of the file containing properties.


**Return**: MAMA_STATUS_NULL_ARG is either name or value is null. MAMA_STATUS_OK if the function completed successfully. 

Load a set of properties through the API.

If the property being set has already been given a value from a properties file that value will be replaced.

The properties file must have the same structure as a standard mama.properties file.

If null is passed as the path the API will look for the properties file on the $WOMBAT_PATH.


### function mama_getProperty

```cpp
const MAMAExpDLL char * mama_getProperty(
    const char * name
)
```


**Parameters**: 

  * **name** The name of the property to retrieve.


**Return**: the value of the property or NULL if unset. 

Retrieve a specific property from the API.

If the property has not been set, a NULL value will be returned.


### function mama_close

```cpp
MAMAExpDLL mama_status mama_close(
    void 
)
```


**Return**: mama_status Whether the call was successful or not. 

Close MAMA and free all associated resources if no more references exist (e.g.if open has been called 3 times then it will require 3 calls to close in order for all resources to be freed).


### function mama_closeCount

```cpp
MAMAExpDLL mama_status mama_closeCount(
    unsigned int * count
)
```


**Parameters**: 

  * **count** The reference count for the MAMA library after closing once. If this is zero then MAMA and all resources will have been freed.


**Return**: mama_status Whether the call was successful or not. 

Close MAMA and free all associated resources if no more references exist (e.g.if open has been called 3 times then it will require 3 calls to close in order for all resources to be freed).


### function mama_getVersion

```cpp
const MAMAExpDLL char * mama_getVersion(
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 


Return the version information for the library. The version of the underlying transport follows in parens.


### function mama_start

```cpp
MAMAExpDLL mama_status mama_start(
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 


Start processing messages on the internal queue. This starts Mama's internal throttle, refresh logic, and other internal Mama processes as well as dispatching messages from the internal queue. 

mama_start( ) blocks until an invocation of mama_stop() occurs.


### function mama_startBackground

```cpp
MAMAExpDLL mama_status mama_startBackground(
    mamaBridge bridgeImpl,
    mamaStartCB callback
)
```


**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 
  * **callback** The callback for asynchronous status. 


**Return**: MAMA_STATUS_OK if successful. 

Start Mama in the background. This method invokes mama_start() in a separate thread.

This API uses the deprecated mamaStartCB callback type. mama_startBackgroundEx uses the replacement type mamaStopCBEx. To retain backward compatability mama_startBackground casts callback to mamaStopCB for further processing.


### function mama_startBackgroundEx

```cpp
MAMAExpDLL mama_status mama_startBackgroundEx(
    mamaBridge bridgeImpl,
    mamaStopCBEx callback,
    void * closure
)
```


**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 
  * **callback** The extended callback for asynchronous status. 


**Return**: MAMA_STATUS_OK if successful. 

Start Mama in the background, with extended parameters.

This method performs the same functionality as mama_startBackground accept it provides the facility to pass in a closure. The C++ wrapper layer uses this version of the function, and stores the MamaStartCallback object in the closure.


### function mama_stop

```cpp
MAMAExpDLL mama_status mama_stop(
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **bridgeImpl** The bridge specific structure. 


Stop dispatching on the default event queue for the specified bridge.


### function mama_stopAll

```cpp
MAMAExpDLL mama_status mama_stopAll(
    void 
)
```


Stop dispatching on the default event queue for all bridges. 


### function mama_setApplicationName

```cpp
MAMAExpDLL mama_status mama_setApplicationName(
    const char * applicationName
)
```


**Parameters**: 

  * **applicationName** 


mama_setApplicationName - sets the mama application name This should be called before mama_open 


### function mama_setApplicationClassName

```cpp
MAMAExpDLL mama_status mama_setApplicationClassName(
    const char * className
)
```


**Parameters**: 

  * **className** 


mama_setApplicationClass - sets the mama class name This should be called before mama_open 


### function mama_registerEntitlementCallbacks

```cpp
MAMAExpDLL mama_status mama_registerEntitlementCallbacks(
    const mamaEntitlementCallbacks * entitlementCallbacks
)
```


**Parameters**: 

  * **entitlementCallbacks** Structure containing functions to be invoked when disconnect request is received from the entitlement server or dynamic entitlement update has occurred 


mama_registerEntitlementCallbacks - Registers the callback method to be called whenever the user is disconnected from the entitlement server 


### function mama_getApplicationName

```cpp
MAMAExpDLL mama_status mama_getApplicationName(
    const char ** applicationName
)
```


**Parameters**: 

  * **applicationName** address of where to put applicationName 


mama_getApplicationName - gets the mama application name 


### function mama_getApplicationClassName

```cpp
MAMAExpDLL mama_status mama_getApplicationClassName(
    const char ** className
)
```


**Parameters**: 

  * **className** address of where to put className 


mama_getApplicationClass - sets the mama class name 


### function mama_getUserName

```cpp
MAMAExpDLL mama_status mama_getUserName(
    const char ** userName
)
```


**Parameters**: 

  * **userName** address of where to put user name 


mama_getUserName - gets the user name 


### function mama_getHostName

```cpp
MAMAExpDLL mama_status mama_getHostName(
    const char ** hostName
)
```


**Parameters**: 

  * **hostName** address of where to put host name 


mama_getHostName - gets the host name 


### function mama_getIpAddress

```cpp
MAMAExpDLL mama_status mama_getIpAddress(
    const char ** ipAddress
)
```


**Parameters**: 

  * **ipAddress** address of where to put IP address 


mama_getIpAddressName - gets the IP Address 


### function mama_getDefaultEventQueue

```cpp
MAMAExpDLL mama_status mama_getDefaultEventQueue(
    mamaBridge bridgeImpl,
    mamaQueue * defaultQueue
)
```


**Parameters**: 

  * **bridgeImpl** The middleware for which the default event queue is being obtained. 
  * **defaultQueue** Address to which the defaultQueue is to be written.


**Return**: MAMA_STATUS_OK if the function returns successfully. 

Get a reference to the internal default event queue in use for the specified middleware.


### function mama_setLastError

```cpp
MAMAExpDLL void mama_setLastError(
    mamaError error
)
```


**Parameters**: 

  * **error** The code of the last error to have occured in this thread. 


Set the last error to occur in Mama. Each thread will have its own last error.

This function is for internal usage only.


### function mama_getLastErrorCode

```cpp
MAMAExpDLL mamaError mama_getLastErrorCode(
    void 
)
```


**Parameters**: 

  * **error** The code of the last error to have occured in this thread. 


Get the code of the last error to have occurred in Mama. Each thread will have its own last error.


### function mama_getLastErrorText

```cpp
const MAMAExpDLL char * mama_getLastErrorText(
    void 
)
```


**Parameters**: 

  * **error** The text of the last error to have occured in this thread. 


Get the text of the last error to have occurred in Mama. Each thread will have its own last error.


### function mama_setBridgeInfoCallback

```cpp
MAMAExpDLL mama_status mama_setBridgeInfoCallback(
    mamaBridge bridgeImpl,
    bridgeInfoCallback callback
)
```


Sets a callback to be invoked whenever an information message is logged at the bridge level. Messages returned vary depending on the underlying middleware. Currently only implemented for LBM bridges. 


### function mama_addStatsCollector

```cpp
MAMAExpDLL mama_status mama_addStatsCollector(
    mamaStatsCollector statsCollector
)
```


Add a user stats collector 


### function mama_removeStatsCollector

```cpp
MAMAExpDLL mama_status mama_removeStatsCollector(
    mamaStatsCollector statsCollector
)
```


Remove a user stats collector 


### function mama_getGenerateTransportStats

```cpp
MAMAExpDLL int mama_getGenerateTransportStats(
    void 
)
```


### function mama_getMiddlewareBridge

```cpp
MAMAExpDLL mama_status mama_getMiddlewareBridge(
    mamaBridge * bridge,
    const char * middlewareName
)
```


**Parameters**: 

  * **bridge** Pointer to a mamaBridge object. 
  * **middlewareName** String denoting the middleware to return 


**Return**: mama_status MAMA_STATUS_OK if successful. MAMA_STATUS_NULL_ARG if one of the arguments is NULL. MAMA_STATUS_NOT_FOUND if no bridge available. 

Get Middleware Bridge by middleware name


### function mama_getPayloadBridge

```cpp
MAMAExpDLL mama_status mama_getPayloadBridge(
    mamaPayloadBridge * payloadBridge,
    const char * payloadName
)
```


**Parameters**: 

  * **payloadBridge** Pointer to the mamaPayloadBridge object. 
  * **payloadName** String denoting the payload to return 


**Return**: mama_status MAMA_STATUS_OK if successful MAMA_STATUS_NULL_ARG if one of the arguments is NULL. MAMA_STATUS_NOT_FOUND if no payload available. 

Get Payload bridge by payload name




## Macros Documentation

### define MAMA_OPEN_MD

```cpp
#define MAMA_OPEN_MD ((uint32_t)(0x00000001))
```


### define MAMA_OPEN_PUB_SUB

```cpp
#define MAMA_OPEN_PUB_SUB ((uint32_t)(0x00000002))
```


### define MAMA_DEFAULT_THROTTLE_RATE

```cpp
#define MAMA_DEFAULT_THROTTLE_RATE 500
```


### define MAMA_DEFAULT_RECAP_THROTTLE_RATE

```cpp
#define MAMA_DEFAULT_RECAP_THROTTLE_RATE 250
```


### define MAMA_DEFAULT_RETRIES

```cpp
#define MAMA_DEFAULT_RETRIES 2
```


### define MAMA_DEFAULT_TIMEOUT

```cpp
#define MAMA_DEFAULT_TIMEOUT 30.0f
```


### define MAMA_MAX_SYMBOL_LEN

```cpp
#define MAMA_MAX_SYMBOL_LEN 128
```


### define MAMA_MAX_ROOT_LEN

```cpp
#define MAMA_MAX_ROOT_LEN 5
```


### define MAMA_MAX_SOURCE_LEN

```cpp
#define MAMA_MAX_SOURCE_LEN 64
```


### define MAMA_MAX_TRANSPORT_LEN

```cpp
#define MAMA_MAX_TRANSPORT_LEN 64
```


### define MAMA_MAX_TOTAL_SYMBOL_LEN

```cpp
#define MAMA_MAX_TOTAL_SYMBOL_LEN                                     (MAMA_MAX_SYMBOL_LEN + MAMA_MAX_SOURCE_LEN + \
                                    MAMA_MAX_ROOT_LEN + 2)
```


### define MAMA_LINK_BRIDGE

```cpp
#define MAMA_LINK_BRIDGE(
    implIdentifier,
    impl
)
    do                                                              \
    {                                                               \
        implIdentifier ## Bridge_createImpl (impl);                 \
    }                                                               \
    while(0)                                                        \
```


### define MAMA_CREATE_BRIDGE

```cpp
#define MAMA_CREATE_BRIDGE(
    implIdentifier,
    impl
)
    do                                                              \
    {                                                               \
        if (MAMA_LINK_##implIdentifier)                             \
        {                                                           \
            implIdentifier##Bridge_createImpl (impl);               \
        }                                                           \
        else                                                        \
        {                                                           \
            mama_loadBridge (impl, "##implIdentifier##");           \
        }                                                           \
    }                                                               \
    while(0)                                                        \
```


## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MamaH__
#define MamaH__

#include "mama/config.h"
#include <mama/log.h>
#include <mama/error.h>
#include <mama/types.h>
#include <mama/datetime.h>
#include <mama/servicelevel.h>
#include <mama/status.h>
#include <mama/msgstatus.h>
#include <mama/msgtype.h>
#include <mama/msgfield.h>
#include <mama/dictionary.h>
#include <mama/transport.h>
#include <mama/msg.h>
#include <mama/middleware.h>
#include <mama/price.h>
#include <mama/publisher.h>
#include <mama/reservedfields.h>
#include <mama/inbox.h>
#include <mama/timer.h>
#include <mama/queue.h>
#include <mama/senderId.h>
#include <mama/symbolmap.h>
#include <mama/symbolmapfile.h>
#include <mama/timezone.h>
#include <mama/source.h>
#include <mama/subscriptiontype.h>
#include <mama/quality.h>
#include <mama/ft.h>
#include <mama/entitlement.h>

#if defined(__cplusplus)
extern "C"
{
#endif

#define MAMA_OPEN_MD      ((uint32_t)(0x00000001))
#define MAMA_OPEN_PUB_SUB ((uint32_t)(0x00000002))

#define MAMA_DEFAULT_THROTTLE_RATE 500
#define MAMA_DEFAULT_RECAP_THROTTLE_RATE 250

#define MAMA_DEFAULT_RETRIES       2
#define MAMA_DEFAULT_TIMEOUT       30.0f
#define MAMA_MAX_SYMBOL_LEN        128
#define MAMA_MAX_ROOT_LEN          5 // e.g. _MDDD
#define MAMA_MAX_SOURCE_LEN        64
#define MAMA_MAX_TRANSPORT_LEN     64
// This is source + symbol + root + 2 delimiting periods
#define MAMA_MAX_TOTAL_SYMBOL_LEN  (MAMA_MAX_SYMBOL_LEN + MAMA_MAX_SOURCE_LEN + \
                                    MAMA_MAX_ROOT_LEN + 2)

    mama_status
    mama_setDefaultPayload (char id);

    MAMAExpDLL
    extern mama_status
    mama_loadBridge (mamaBridge* impl, const char*  middleware);

    MAMAExpDLL
    extern mama_status
    mama_loadPayloadBridge (mamaPayloadBridge*  bridge,  const char* payloadName);


    MAMAExpDLL
    extern mama_status
    mama_loadBridgeWithPath (mamaBridge* impl, const char*  middleware, const char* path);

    #define MAMA_LINK_BRIDGE(implIdentifier, impl)                  \
    do                                                              \
    {                                                               \
        implIdentifier ## Bridge_createImpl (impl);                 \
    }                                                               \
    while(0)                                                        \

    #define MAMA_CREATE_BRIDGE(implIdentifier, impl)                \
    do                                                              \
    {                                                               \
        if (MAMA_LINK_##implIdentifier)                             \
        {                                                           \
            implIdentifier##Bridge_createImpl (impl);               \
        }                                                           \
        else                                                        \
        {                                                           \
            mama_loadBridge (impl, "##implIdentifier##");           \
        }                                                           \
    }                                                               \
    while(0)                                                        \

    /******** End of multi-impl section   ********/

    /******************************************************************************
     * Global initialization and configuration.
     */

    MAMAExpDLL
    extern mama_status
    mama_open (void);

    MAMAExpDLL
    extern mama_status
    mama_openCount (unsigned int* count);

    MAMAExpDLL
    extern mama_status
    mama_openWithProperties (const char*    path,
                             const char*    filename);

    MAMAExpDLL
    extern mama_status
    mama_openWithPropertiesCount (const char*    path,
                                  const char*    filename,
                                  unsigned int*  count);

    MAMAExpDLL
    extern mama_status
    mama_setProperty (const char* name,
                      const char* value);

    MAMAExpDLL
    extern mama_status
    mama_setPropertiesFromFile (const char *path,
                                const char *filename);

    MAMAExpDLL
    extern const char *
    mama_getProperty (const char* name);

    MAMAExpDLL
    extern mama_status
    mama_close (void);

    MAMAExpDLL
    extern mama_status
    mama_closeCount (unsigned int* count);

    MAMAExpDLL
    extern const char*
    mama_getVersion (mamaBridge bridgeImpl);


    MAMAExpDLL
    extern mama_status
    mama_start (mamaBridge bridgeImpl);

    typedef void (MAMACALLTYPE *mamaStartCB) (mama_status status);

    typedef void (MAMACALLTYPE *mamaStopCB) (mama_status);

    MAMAExpDLL
    extern mama_status
    mama_startBackground (mamaBridge    bridgeImpl,
                          mamaStartCB   callback);
    typedef void (MAMACALLTYPE *mamaStopCBEx) (mama_status, mamaBridge, void*);

    MAMAExpDLL
    extern mama_status mama_startBackgroundEx (mamaBridge   bridgeImpl,
                                               mamaStopCBEx callback,
                                               void*        closure);

    MAMAExpDLL
    extern mama_status
    mama_stop (mamaBridge bridgeImpl);

    MAMAExpDLL
    extern mama_status
    mama_stopAll (void);

    MAMAExpDLL
    mama_status
    mama_setApplicationName (const char* applicationName);

    MAMAExpDLL
    mama_status
    mama_setApplicationClassName (const char* className);

    typedef enum
    {
        /*Disconnection request sent by administrator via site server GUI*/
        SESSION_DISCONNECT_REASON_ADMIN               = 0,
        /*Disconnection request sent due to user reaching concurrent access limit*/
        SESSION_DISCONNECT_REASON_NEW_CONNECTION      = 1,
        /*Disconnection request sent due to an entitlements modification resulting in user now exceeding concurrent access limit*/
        SESSION_DISCONNECT_REASON_ENTITLEMENTS_UPDATE = 2,

        SESSION_DISCONNECT_REASON_INVALID             = 101
    } sessionDisconnectReason;

    typedef void (
    MAMACALLTYPE
    *onSessionDisconnectCB) (const sessionDisconnectReason reason,
                                           const char* userId,
                                           const char* host,
                                           const char* appName);

    typedef void (
    MAMACALLTYPE
    *onEntitlementUpdateCB) (void);

    typedef void (
    MAMACALLTYPE
    *onEntitlementCheckingSwitchCB) (const int isEntitlementCheckingDisabled);
    typedef struct mamaEntitlementCallbacks_
    {
        onSessionDisconnectCB       onSessionDisconnect;
        onEntitlementUpdateCB       onEntitlementUpdate;
        onEntitlementCheckingSwitchCB onEntitlementCheckingSwitch;
    } mamaEntitlementCallbacks;

    MAMAExpDLL
    mama_status
    mama_registerEntitlementCallbacks (const mamaEntitlementCallbacks* entitlementCallbacks);

    MAMAExpDLL
    mama_status
    mama_getApplicationName (const char** applicationName);

    MAMAExpDLL
    mama_status
    mama_getApplicationClassName (const char**  className);

    MAMAExpDLL
    mama_status
    mama_getUserName (const char** userName);

    MAMAExpDLL
    mama_status
    mama_getHostName (const char** hostName);

    MAMAExpDLL
    mama_status
    mama_getIpAddress (const char** ipAddress);

    MAMAExpDLL
    mama_status
    mama_getDefaultEventQueue (mamaBridge bridgeImpl,
                               mamaQueue* defaultQueue);

    MAMAExpDLL
    extern void
    mama_setLastError (mamaError error);

    MAMAExpDLL
    extern mamaError
    mama_getLastErrorCode (void);

    MAMAExpDLL
    extern const char*
    mama_getLastErrorText (void);

    typedef void (MAMACALLTYPE *bridgeInfoCallback) (mamaBridge bridgeImpl, const char* message);

    MAMAExpDLL
    extern mama_status
    mama_setBridgeInfoCallback (mamaBridge         bridgeImpl,
                                bridgeInfoCallback callback);
    MAMAExpDLL
    extern mama_status
    mama_addStatsCollector (mamaStatsCollector  statsCollector);

    MAMAExpDLL
    extern mama_status
    mama_removeStatsCollector (mamaStatsCollector  statsCollector);

    MAMAExpDLL int mama_getGenerateTransportStats(void);

    MAMAExpDLL
    extern mama_status
    mama_getMiddlewareBridge (mamaBridge *bridge, const char *middlewareName);

    MAMAExpDLL
    extern mama_status
    mama_getPayloadBridge (mamaPayloadBridge *payloadBridge,
                           const char        *payloadName);

#if defined(__cplusplus)
}
#endif

#endif /* MamaH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
