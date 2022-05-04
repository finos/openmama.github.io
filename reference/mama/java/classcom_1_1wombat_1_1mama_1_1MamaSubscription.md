---
title: com::wombat::mama::MamaSubscription
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSubscription





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-mamasubscription)**() |
| void | **[createSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-createsubscription)**([MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html) callback, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source, String symbol, Object closure) |
| [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) | **[createDictionarySubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-createdictionarysubscription)**([MamaDictionaryCallback](interfacecom_1_1wombat_1_1mama_1_1MamaDictionaryCallback.html) callback, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source) |
| [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) | **[createDictionarySubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-createdictionarysubscription)**([MamaDictionaryCallback](interfacecom_1_1wombat_1_1mama_1_1MamaDictionaryCallback.html) callback, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source, double timeout, int retries) |
| void | **[createSnapshotSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-createsnapshotsubscription)**([MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html) callback, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source, String symbol, Object closure) |
| Object | **[getClosure](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getclosure)**() |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getpointerval)**() |
| [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) | **[getSource](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getsource)**() |
| [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) | **[getState](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getstate)**() |
| void | **[setupSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setupsubscription)**([MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html) callback, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) source, String symbol, Object closure) |
| void | **[setAppDataType](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setappdatatype)**([MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) type) |
| [MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html) | **[getAppDataType](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getappdatatype)**() |
| void | **[setDebugLevel](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setdebuglevel)**(Level level) |
| void | **[setMessageQualifierFilter](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setmessagequalifierfilter)**([MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) qualifier) |
| [MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html) | **[getMessageQualifierFilter](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getmessagequalifierfilter)**() |
| void | **[setSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setsubscriptiontype)**([MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) type) |
| [MamaSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionType.html) | **[getSubscriptionType](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getsubscriptiontype)**() |
| [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) | **[getTransport](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-gettransport)**() |
| native void | **[activate](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-activate)**() |
| native void | **[deactivate](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-deactivate)**() |
| native void | **[deallocate](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-deallocate)**() |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-destroy)**() |
| native void | **[destroyEx](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-destroyex)**() |
| native boolean | **[getReceivedInitial](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getreceivedinitial)**() |
| native String | **[getSubscSource](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getsubscsource)**() |
| native String | **[getSymbol](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getsymbol)**() |
| native double | **[getTimeout](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-gettimeout)**() |
| native boolean | **[isActive](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-isactive)**() |
| native boolean | **[isValid](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-isvalid)**() |
| native void | **[setRequiresInitial](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setrequiresinitial)**(boolean value) |
| native void | **[setTimeout](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-settimeout)**(double timeout) |
| native Object | **[getItemClosure](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getitemclosure)**() |
| native int | **[getPreInitialCacheSize](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getpreinitialcachesize)**() |
| native boolean | **[getRecoverGaps](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getrecovergaps)**() |
| native boolean | **[getRequiresInitital](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getrequiresinitital)**() |
| native int | **[getRetries](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getretries)**() |
| native short | **[getServiceLevel](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getservicelevel)**() |
| native long | **[getServiceLevelOptions](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-getserviceleveloptions)**() |
| native void | **[setPreInitialCacheSize](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setpreinitialcachesize)**(int size) |
| native void | **[setItemClosure](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setitemclosure)**(Object closure) |
| native void | **[setRecoverGaps](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setrecovergaps)**(boolean recover) |
| native void | **[setServiceLevel](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setservicelevel)**(short level, long options) |
| native void | **[setRetries](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-setretries)**(int retries) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[finalize](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-finalize)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final int | **[DEFAULT_RETRIES](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#variable-default-retries)**  |
| final double | **[DEFAULT_TIMEOUT](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#variable-default-timeout)**  |

## Public Functions Documentation

### function MamaSubscription

```java
inline MamaSubscription()
```


The constructor allocates the underlying C subscription. 


### function createSubscription

```java
inline void createSubscription(
    MamaSubscriptionCallback callback,
    MamaQueue queue,
    MamaSource source,
    String symbol,
    Object closure
)
```


**Parameters**: 

  * **callback** The object implementing the callback functions. 
  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **source** The [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription. 


Create and activate subscription. This is effectively a pair of calls to mamaSubscription_setup() and mamaSubscription_activate().


### function createDictionarySubscription

```java
inline MamaDictionary createDictionarySubscription(
    MamaDictionaryCallback callback,
    MamaQueue queue,
    MamaSource source
)
```


**Parameters**: 

  * **callback** The object implementing the callback functions, this can also be an instance of MamaSubscriptionCallbackEx to be notified when the subscription has been destroyed. 
  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **source** The [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) identifying the publisher for this symbol. 


Create a dictionary subscription using default values for the timeout and number of retries.


### function createDictionarySubscription

```java
inline MamaDictionary createDictionarySubscription(
    MamaDictionaryCallback callback,
    MamaQueue queue,
    MamaSource source,
    double timeout,
    int retries
)
```


**Parameters**: 

  * **callback** The object implementing the callback functions. 
  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **source** The [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **timeout** The timeout value in seconds. 
  * **retries** The number of retries. 


Create a dictionary subscription using default values for the timeout and number of retries.


### function createSnapshotSubscription

```java
inline void createSnapshotSubscription(
    MamaSubscriptionCallback callback,
    MamaQueue queue,
    MamaSource source,
    String symbol,
    Object closure
)
```


**Parameters**: 

  * **callback** The object implementing the callback functions. 
  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **source** The [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription. 


Create a snapshot subscription for initial value only (no updates). This function is equivalent to mamaSubscription_create () with svcLevel set to MAMA_SERVICE_LEVEL_SNAPSHOT and default arguments for type, svcLevelOpt, requiresInitial, retries, timeout.


### function getClosure

```java
inline Object getClosure()
```


**Return**: The closure object. 

This function returns the closure supplied to the createSubscription function.


### function getPointerVal

```java
inline long getPointerVal()
```


**Return**: The pointer. 

This function returns the pointer to the underlying C subscription. 


### function getSource

```java
inline MamaSource getSource()
```


**Return**: The [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) object. 

Return the source associated with the subscription.


### function getState

```java
inline MamaSubscriptionState getState()
```


**Return**: The [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) that represents the current state of the subscription. 

This function returns the current state of the subscription as one of the [MamaSubscriptionState](classcom_1_1wombat_1_1mama_1_1MamaSubscriptionState.html) instances, see this class for more information.


### function setupSubscription

```java
inline void setupSubscription(
    MamaSubscriptionCallback callback,
    MamaQueue queue,
    MamaSource source,
    String symbol,
    Object closure
)
```


**Parameters**: 

  * **callback** The object implementing the callback functions. 
  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **source** The [MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **symbol** The symbol name. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription. 


Setup a basic subscription without marketdata semantics. Note that activate must still be called.


### function setAppDataType

```java
inline void setAppDataType(
    MamaMdDataType type
)
```


### function getAppDataType

```java
inline MamaMdDataType getAppDataType()
```


### function setDebugLevel

```java
inline void setDebugLevel(
    Level level
)
```


### function setMessageQualifierFilter

```java
inline void setMessageQualifierFilter(
    MamaMsgQualifier qualifier
)
```


### function getMessageQualifierFilter

```java
inline MamaMsgQualifier getMessageQualifierFilter()
```


### function setSubscriptionType

```java
inline void setSubscriptionType(
    MamaSubscriptionType type
)
```


### function getSubscriptionType

```java
inline MamaSubscriptionType getSubscriptionType()
```


### function getTransport

```java
inline MamaTransport getTransport()
```


### function activate

```java
native void activate()
```


Activate a subscription that has been set up by calling MamaSubscription.setup. Subscription creation actually occurs on the throttle queue. An individual subscription cannot be assumed to be fully created until its onCreate() callback has been successfully invoked. The subscription rate can be governed via the MamaTransport.setOutboundThrottle () function. Any subscription properties should be set prior to calling this function. 


### function deactivate

```java
native void deactivate()
```


Deactivate a subscription. The subscription can be reactivated if desired using [MamaSubscription.activate()](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html#function-activate). Note that the subscription will not be fully deactivated until the onDestroy callback is received. 


### function deallocate

```java
native void deallocate()
```


De-allocates the underlying C subscription. This can be used to reduce time during finalization. 


### function destroy

```java
native void destroy()
```


This function will destroy the subscription, it must be called from the same thread that is processing the queue for the subscription. Use destroyEx to destroy the subscription from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received. 


### function destroyEx

```java
native void destroyEx()
```


This function will destroy the subscription and can be called from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received. To destroy from the dispatching thread the destroy function should be used in preference. 


### function getReceivedInitial

```java
native boolean getReceivedInitial()
```


**Return**: True if an initial has been received. 

Get whether we have received an Initial.


### function getSubscSource

```java
native String getSubscSource()
```


**Return**: The source string. 

Return the source for this subscription.


### function getSymbol

```java
native String getSymbol()
```


**Return**: The symbol string. 

Return the symbol for this subscription.


### function getTimeout

```java
native double getTimeout()
```


**Return**: The timeout in seconds. 

To return the subscription timeout.


### function isActive

```java
native boolean isActive()
```


**Return**: whether the subscription is valid. 

Returns whether the subscription is valid, note that this function has been deprecated, use mamaSubscription_getState instead.


### function isValid

```java
native boolean isValid()
```


**Return**: whether the subscription is valid. 

Returns whether the subscription is valid, note that this function has been deprecated, use mamaSubscription_getState instead.


### function setRequiresInitial

```java
native void setRequiresInitial(
    boolean value
)
```


**Parameters**: 

  * **value** True if the subscription needs an initial. 


Set whether subscriptoin requires initial value.


### function setTimeout

```java
native void setTimeout(
    double timeout
)
```


**Parameters**: 

  * **timeout** The timeout in seconds. 


Set the timeout for this subscription.


### function getItemClosure

```java
native Object getItemClosure()
```


### function getPreInitialCacheSize

```java
native int getPreInitialCacheSize()
```


### function getRecoverGaps

```java
native boolean getRecoverGaps()
```


### function getRequiresInitital

```java
native boolean getRequiresInitital()
```


### function getRetries

```java
native int getRetries()
```


### function getServiceLevel

```java
native short getServiceLevel()
```


### function getServiceLevelOptions

```java
native long getServiceLevelOptions()
```


### function setPreInitialCacheSize

```java
native void setPreInitialCacheSize(
    int size
)
```


### function setItemClosure

```java
native void setItemClosure(
    Object closure
)
```


### function setRecoverGaps

```java
native void setRecoverGaps(
    boolean recover
)
```


### function setServiceLevel

```java
native void setServiceLevel(
    short level,
    long options
)
```


### function setRetries

```java
native void setRetries(
    int retries
)
```


## Protected Functions Documentation

### function finalize

```java
inline void finalize()
```


**Exceptions**: 

  * **Throwable** A [MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html) will be thrown if the underlying subscription could not be de-allocated. 


The finalizer deallocates the underlying C subscription. 


## Public Attributes Documentation

### variable DEFAULT_RETRIES

```java
static final int DEFAULT_RETRIES = 2;
```


### variable DEFAULT_TIMEOUT

```java
static final double DEFAULT_TIMEOUT = 10.0;
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100