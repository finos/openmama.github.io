---
title: Wombat::MamaSubscription
summary: Subscription class, derives from a basic subscription. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSubscription



Subscription class, derives from a basic subscription. 

Inherits from [Wombat.MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html), [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSubscription](classWombat_1_1MamaSubscription.html#function-mamasubscription)**()<br>Allocate memory for a new subscription. The subscription is not actually created until a call to one of the [create()]() functions is made. Memory must be freed using the [deallocate()](classWombat_1_1MamaBasicSubscription.html#function-deallocate) |
| void | **[activate](classWombat_1_1MamaSubscription.html#function-activate)**()<br>Activate a subscription that has been set up by calling the setup function. Subscription creation actually occurs on the throttle queue. An individual subscription cannot be assumed to be fully created until its onCreate callback has been successfully invoked. The subscription rate can be governed via the [MamaTransport.setOutboundThrottle]() function. Any subscription properties should be set prior to calling this function.  |
| void | **[create](classWombat_1_1MamaSubscription.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callback, [MamaSource](classWombat_1_1MamaSource.html) source, string symbol)<br>Set up and activate a subscriber using the throttle queue. This method is equivalent to calling [setup()]() followed by [activate()](classWombat_1_1MamaSubscription.html#function-activate).  |
| void | **[create](classWombat_1_1MamaSubscription.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callback, [MamaSource](classWombat_1_1MamaSource.html) source, string symbol, object closure)<br>Set up and activate a subscriber using the throttle queue. This method is equivalent to calling [setup()]() followed by [activate()](classWombat_1_1MamaSubscription.html#function-activate).  |
| void | **[createBasic](classWombat_1_1MamaSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callback, string symbol)<br>This function will create the basic subscription without marketdata semantics. To pass a closure use the overload. This overload provides access to the basic subscription with the [MamaSubscriptionCallback]() rather than the [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) interface. Instantiating the base class directly will provide better performance.  |
| void | **[createBasic](classWombat_1_1MamaSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callback, string symbol, object closure)<br>This function will create the basic subscription without marketdata semantics. This overload provides access to the basic subscription with the [MamaSubscriptionCallback]() rather than the [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) interface. Instantiating the base class directly will provide better performance.  |
| void | **[deactivate](classWombat_1_1MamaSubscription.html#function-deactivate)**()<br>Deactivate an active subscription. The onDestroy callback will be invoked whenever the subscription has been fully deactivated.  |
| int | **[getPreInitialCacheSize](classWombat_1_1MamaSubscription.html#function-getpreinitialcachesize)**()<br>Return the initial value cache size.  |
| bool | **[getReceivedInitial](classWombat_1_1MamaSubscription.html#function-getreceivedinitial)**()<br>Whether an Initial has been received for the specified subscription. Returns true if initial has been received.  |
| void | **[setPreInitialCacheSize](classWombat_1_1MamaSubscription.html#function-setpreinitialcachesize)**(int cacheSize)<br>Set the number of messages to cache for each symbol before the initial value arrives. This allows the subscription to recover when the initial value arrives late (after a subsequent trade or quote already arrived). For group subscription, a separate cache is used for each group member. The default is 10.  |
| void | **[setRecoverGaps](classWombat_1_1MamaSubscription.html#function-setrecovergaps)**(bool recover)<br>If this flag is set then the subscription will attempt to recover from a sequence number gap.  |
| void | **[setRequiresInitial](classWombat_1_1MamaSubscription.html#function-setrequiresinitial)**(bool requiresInitial)<br>Whether an initial value is required for the specified subscription. This only applies to market data subscriptions and not to basic subscriptions. Default value of true indicating that initial values are required.  |
| void | **[setRetries](classWombat_1_1MamaSubscription.html#function-setretries)**(int retries)<br>Set the number of retries when requesting recaps.  |
| void | **[setServiceLevel](classWombat_1_1MamaSubscription.html#function-setservicelevel)**([mamaServiceLevel](namespaceWombat.html#enum-mamaservicelevel) svcLevel)<br>Set the service level without any other options. This method must be invoked before [create()](classWombat_1_1MamaSubscription.html#function-create).  |
| void | **[setServiceLevel](classWombat_1_1MamaSubscription.html#function-setservicelevel)**([mamaServiceLevel](namespaceWombat.html#enum-mamaservicelevel) svcLevel, int serviceLevelOpt)<br>Set the service level and an passes an optional service level parameter. This method must be invoked before [create()](classWombat_1_1MamaSubscription.html#function-create).  |
| void | **[setSubscriptionType](classWombat_1_1MamaSubscription.html#function-setsubscriptiontype)**([mamaSubscriptionType](namespaceWombat.html#enum-mamasubscriptiontype) type)<br>Set the subscription type for the subscription being created. If not called the subscription type defaults to MAMA_SUBSC_TYPE_NORMAL. See mamaSubscriptionType enum for valid values.  |
| void | **[setTimeout](classWombat_1_1MamaSubscription.html#function-settimeout)**(double timeout)<br>Set the timeout for this subscription. The timeout is used for requesting recaps.  |
| void | **[setup](classWombat_1_1MamaSubscription.html#function-setup)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaTransport](classWombat_1_1MamaTransport.html) transport, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callback, string sourceName, string symbol, object closure)<br>Set the parameters for a subscription that may be actually activated later. Activate the subscription using [MamaSubscription.activate()](classWombat_1_1MamaSubscription.html#function-activate).  |
| void | **[setup](classWombat_1_1MamaSubscription.html#function-setup)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callback, [MamaSource](classWombat_1_1MamaSource.html) source, string symbol, object closure)<br>Set the parameters for a subscription that may be actually activated later. Activate the subscription using [MamaSubscription.activate()](classWombat_1_1MamaSubscription.html#function-activate).  |
| void | **[setup](classWombat_1_1MamaSubscription.html#function-setup)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html) callback, [MamaSource](classWombat_1_1MamaSource.html) source, string symbol)<br>Set the parameters for a subscription that may be actually activated later. Activate the subscription using [MamaSubscription.activate()](classWombat_1_1MamaSubscription.html#function-activate). This overload passes a null value for the closure.  |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| string | **[subscSource](classWombat_1_1MamaSubscription.html#property-subscsource)** <br>Read only property returns the subscription source.  |

## Additional inherited members

**Protected Classes inherited from [Wombat.MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| class | **[MamaBasicSubscriptionImpl](classWombat_1_1MamaBasicSubscription_1_1MamaBasicSubscriptionImpl.html)** <br>This impl will perform the work of invoking user supplied callbacks, it is held to ensure that the user can destroy and recreate the parent subscription during the callbacks.  |
| struct | **[NativeMethods](structWombat_1_1MamaBasicSubscription_1_1NativeMethods.html)**  |

**Public Functions inherited from [Wombat.MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html#function-mamabasicsubscription)**()<br>Constructor constructs a new basic subscription including creating the underlying native subscription.  |
| void | **[deallocate](classWombat_1_1MamaBasicSubscription.html#function-deallocate)**()<br>Free the memory for a mamaSubscription which was allocated via a call to constructor. This function will call [destroy()]() if the subscription has not already been destroyed. Calling this function will reduce time during finalization.  |
| void | **[destroy](classWombat_1_1MamaBasicSubscription.html#function-destroy)**()<br>This function will destroy the subscription, it must be called from the same thread that is processing the queue for the subscription. Use destroyEx to destroy the subscription from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received.  |
| void | **[destroyEx](classWombat_1_1MamaBasicSubscription.html#function-destroyex)**()<br>Destroy the subscription. This function is another option to destroy the resources associated with the subscription It will schedule the [destroy()](classWombat_1_1MamaBasicSubscription.html#function-destroy) of the subscription on the queue on which it dispatches. This function does not free the memory associated with the subscription. create() can be called again after this function has been called. After the Subscription is effectively destroyed, the OnDestroy callback will be triggered for it.  |

**Protected Functions inherited from [Wombat.MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| delegate void | **[OnSubscriptionCreateDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptioncreatedelegate)**(IntPtr nativeHandle, IntPtr closure)<br>This delegate describes that native callback function that is invoked whenever the subscription has been created.  |
| delegate void | **[OnSubscriptionDestroyDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptiondestroydelegate)**(IntPtr nativeHandle, IntPtr closure)<br>This delegate describes the native function invoked whenever the subscription has been either destroyed or deactivated.  |
| delegate void | **[OnSubscriptionErrorDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptionerrordelegate)**(IntPtr nativeHandle, int status, IntPtr platformError, string subject, IntPtr closure)<br>This delegate describes the native function invoked if an error occurs during prior to subscription creation or if the subscription receives a message for an un-entitled subject. If the status is MAMA_MSG_STATUS_NOT_ENTITTLED the subject parameter is the specific unentitled subject. If the subscription subject contains wildcards, the subscription may still receive messages for other entitled subjects. Note wildcard subscriptions are not supported on all platforms.  |
| delegate void | **[OnSubscriptionGapDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptiongapdelegate)**(IntPtr nativeHandle, IntPtr closure)<br>This delegate describes the native function invoked when a sequence number gap is detected. At this point the topic is considered stale and the subscription will not receive further messages until the feed handler satisfies a recap request.  |
| delegate void | **[OnSubscriptionMessageDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptionmessagedelegate)**(IntPtr nativeHandle, IntPtr msg, IntPtr closure, IntPtr itemClosure)<br>This delegate describes the native function that is invoked whenever a message arrives.  |
| delegate void | **[OnSubscriptionQualityDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptionqualitydelegate)**(IntPtr nativeHandle, int quality, string symbol, short cause, string platforminfo, IntPtr closure)<br>This delegate describes the native function invoked to indicate a data quality event.  |
| delegate void | **[OnSubscriptionRecapRequestDelegate](classWombat_1_1MamaBasicSubscription.html#function-onsubscriptionrecaprequestdelegate)**(IntPtr nativeHandle, IntPtr closure)<br>This delegate describes the native function invoked when a recap is requested upon detecting a sequence number gap.  |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaBasicSubscription.html#function-destroynativepeer)**()<br>This will be called by the base class to de-allocate the native subscription. [MamaWrapper.DestroyNativePeer]() |

**Public Properties inherited from [Wombat.MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| [mamaSubscriptionState](namespaceWombat.html#enum-mamasubscriptionstate) | **[State](classWombat_1_1MamaBasicSubscription.html#property-state)** <br>This read only property returns the current state of the subscription, this function should be used in preference to the mamaSubscription_isActive or mamaSubscription_isValid functions. function is thread-safe. The state will be one of the mamaSubscriptionState enumeration values.  |
| object | **[subscClosure](classWombat_1_1MamaBasicSubscription.html#property-subscclosure)** <br>Read only property returns the closure passed to the create function.  |
| [MamaQueue](classWombat_1_1MamaQueue.html) | **[subscQueue](classWombat_1_1MamaBasicSubscription.html#property-subscqueue)** <br>Read only property returns the queue.  |
| string | **[subscSymbol](classWombat_1_1MamaBasicSubscription.html#property-subscsymbol)** <br>Read only property returns the symbol for this subscription.  |

**Protected Attributes inherited from [Wombat.MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| object | **[mClosure](classWombat_1_1MamaBasicSubscription.html#variable-mclosure)** <br>The closure passed to the create function. This member is declared as protected as there is a public read only property to access it.  |
| [MamaQueue](classWombat_1_1MamaQueue.html) | **[mQueue](classWombat_1_1MamaBasicSubscription.html#variable-mqueue)** <br>The queue passed to the create function. This member is declared as protected as there is a public read only property to access it.  |
| [MamaTransport](classWombat_1_1MamaTransport.html) | **[mTransport](classWombat_1_1MamaBasicSubscription.html#variable-mtransport)** <br>The transport passed to the create function. This member is declared as protected as there is a public read only property to access it.  |
| [NativeMethods.SubscriptionCallbacks](structWombat_1_1MamaBasicSubscription_1_1NativeMethods_1_1SubscriptionCallbacks.html) | **[mCallbackDelegates](classWombat_1_1MamaBasicSubscription.html#variable-mcallbackdelegates)** <br>This structure holds all of the callback delegates, it is initialised in the static constructor.  |

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual abstract [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)**() =0<br>Subclasses must do whatever is necessary with the native handle in the overridden method in order to destroy the native peer object. If the destruction went successfully, the overridden method must return [MamaStatus.mamaStatus.MAMA_STATUS_OK](classWombat_1_1MamaStatus.html#enumvalue-mama-status-ok), or a suitable error code otherwise  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Public Functions Documentation

### function MamaSubscription

```csharp
MamaSubscription()
```

Allocate memory for a new subscription. The subscription is not actually created until a call to one of the [create()]() functions is made. Memory must be freed using the [deallocate()](classWombat_1_1MamaBasicSubscription.html#function-deallocate)

### function activate

```csharp
void activate()
```

Activate a subscription that has been set up by calling the setup function. Subscription creation actually occurs on the throttle queue. An individual subscription cannot be assumed to be fully created until its onCreate callback has been successfully invoked. The subscription rate can be governed via the [MamaTransport.setOutboundThrottle]() function. Any subscription properties should be set prior to calling this function. 

### function create

```csharp
void create(
    MamaQueue queue,
    MamaSubscriptionCallback callback,
    MamaSource source,
    string symbol
)
```

Set up and activate a subscriber using the throttle queue. This method is equivalent to calling [setup()]() followed by [activate()](classWombat_1_1MamaSubscription.html#function-activate). 

**Parameters**: 

  * **queue** The mama queue. 
  * **callback** The callback. 
  * **source** The [MamaSource](classWombat_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **symbol** The symbol for the listener. 


### function create

```csharp
void create(
    MamaQueue queue,
    MamaSubscriptionCallback callback,
    MamaSource source,
    string symbol,
    object closure
)
```

Set up and activate a subscriber using the throttle queue. This method is equivalent to calling [setup()]() followed by [activate()](classWombat_1_1MamaSubscription.html#function-activate). 

**Parameters**: 

  * **queue** The mama queue. 
  * **callback** The callback. 
  * **source** The [MamaSource](classWombat_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **symbol** The symbol for the listener. 
  * **closure** The caller supplied closure. 


### function createBasic

```csharp
void createBasic(
    MamaTransport transport,
    MamaQueue queue,
    MamaSubscriptionCallback callback,
    string symbol
)
```

This function will create the basic subscription without marketdata semantics. To pass a closure use the overload. This overload provides access to the basic subscription with the [MamaSubscriptionCallback]() rather than the [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) interface. Instantiating the base class directly will provide better performance. 

**Parameters**: 

  * **transport** The [MamaTransport](classWombat_1_1MamaTransport.html). 
  * **queue** The [MamaQueue](classWombat_1_1MamaQueue.html). 
  * **callback** Provide callback function implementations to be informed of events on the subscription. 
  * **symbol** The symbol to subscribe to. 


### function createBasic

```csharp
void createBasic(
    MamaTransport transport,
    MamaQueue queue,
    MamaSubscriptionCallback callback,
    string symbol,
    object closure
)
```

This function will create the basic subscription without marketdata semantics. This overload provides access to the basic subscription with the [MamaSubscriptionCallback]() rather than the [MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html) interface. Instantiating the base class directly will provide better performance. 

**Parameters**: 

  * **transport** The [MamaTransport](classWombat_1_1MamaTransport.html). 
  * **queue** The [MamaQueue](classWombat_1_1MamaQueue.html). 
  * **callback** Provide callback function implementations to be informed of events on the subscription. 
  * **symbol** The symbol to subscribe to. 
  * **closure** The closure that will be passed back with the callback functions. 


### function deactivate

```csharp
void deactivate()
```

Deactivate an active subscription. The onDestroy callback will be invoked whenever the subscription has been fully deactivated. 

### function getPreInitialCacheSize

```csharp
int getPreInitialCacheSize()
```

Return the initial value cache size. 

**Return**: The cache size. 

### function getReceivedInitial

```csharp
bool getReceivedInitial()
```

Whether an Initial has been received for the specified subscription. Returns true if initial has been received. 

**Return**: True if an initial has been received for this subscription. 

### function setPreInitialCacheSize

```csharp
void setPreInitialCacheSize(
    int cacheSize
)
```

Set the number of messages to cache for each symbol before the initial value arrives. This allows the subscription to recover when the initial value arrives late (after a subsequent trade or quote already arrived). For group subscription, a separate cache is used for each group member. The default is 10. 

**Parameters**: 

  * **cacheSize** The cache size to set. 


### function setRecoverGaps

```csharp
void setRecoverGaps(
    bool recover
)
```

If this flag is set then the subscription will attempt to recover from a sequence number gap. 

**Parameters**: 

  * **recover** True to attempt recovery. 


### function setRequiresInitial

```csharp
void setRequiresInitial(
    bool requiresInitial
)
```

Whether an initial value is required for the specified subscription. This only applies to market data subscriptions and not to basic subscriptions. Default value of true indicating that initial values are required. 

**Parameters**: 

  * **requiresInitial** True if the subscription requires an initial. 


### function setRetries

```csharp
void setRetries(
    int retries
)
```

Set the number of retries when requesting recaps. 

**Parameters**: 

  * **retries** The number of retries. 


### function setServiceLevel

```csharp
void setServiceLevel(
    mamaServiceLevel svcLevel
)
```

Set the service level without any other options. This method must be invoked before [create()](classWombat_1_1MamaSubscription.html#function-create). 

**Parameters**: 

  * **svcLevel** The service level to set. 


### function setServiceLevel

```csharp
void setServiceLevel(
    mamaServiceLevel svcLevel,
    int serviceLevelOpt
)
```

Set the service level and an passes an optional service level parameter. This method must be invoked before [create()](classWombat_1_1MamaSubscription.html#function-create). 

**Parameters**: 

  * **svcLevel** The service level to set. 
  * **serviceLevelOpt** The service level options. 


### function setSubscriptionType

```csharp
void setSubscriptionType(
    mamaSubscriptionType type
)
```

Set the subscription type for the subscription being created. If not called the subscription type defaults to MAMA_SUBSC_TYPE_NORMAL. See mamaSubscriptionType enum for valid values. 

**Parameters**: 

  * **type** The type to set. 


### function setTimeout

```csharp
void setTimeout(
    double timeout
)
```

Set the timeout for this subscription. The timeout is used for requesting recaps. 

**Parameters**: 

  * **timeout** The timeout value in seconds. 


### function setup

```csharp
void setup(
    MamaQueue queue,
    MamaTransport transport,
    MamaSubscriptionCallback callback,
    string sourceName,
    string symbol,
    object closure
)
```

Set the parameters for a subscription that may be actually activated later. Activate the subscription using [MamaSubscription.activate()](classWombat_1_1MamaSubscription.html#function-activate). 

**Parameters**: 

  * **transport** The MAMA transport. 
  * **queue** The MAMA queue. 
  * **callback** The callback interface. 
  * **sourceName** The name of the source identifying the publisher for this symbol. 
  * **symbol** The symbol for the listener. 
  * **closure** The caller supplied closure. 


### function setup

```csharp
void setup(
    MamaQueue queue,
    MamaSubscriptionCallback callback,
    MamaSource source,
    string symbol,
    object closure
)
```

Set the parameters for a subscription that may be actually activated later. Activate the subscription using [MamaSubscription.activate()](classWombat_1_1MamaSubscription.html#function-activate). 

**Parameters**: 

  * **queue** The mama queue. 
  * **callback** The callback. 
  * **source** The [MamaSource](classWombat_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **symbol** The symbol for the listener. 
  * **closure** The caller supplied closure. 


### function setup

```csharp
void setup(
    MamaQueue queue,
    MamaSubscriptionCallback callback,
    MamaSource source,
    string symbol
)
```

Set the parameters for a subscription that may be actually activated later. Activate the subscription using [MamaSubscription.activate()](classWombat_1_1MamaSubscription.html#function-activate). This overload passes a null value for the closure. 

**Parameters**: 

  * **queue** The mama queue. 
  * **callback** The callback. 
  * **source** The [MamaSource](classWombat_1_1MamaSource.html) identifying the publisher for this symbol.
  * **symbol** The symbol for the listener. 


## Public Property Documentation

### property subscSource

```csharp
string subscSource;
```

Read only property returns the subscription source. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100