---
title: Wombat::MamaSubscription
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSubscription



 [More...](#detailed-description)


`#include <MamaSubscription.h>`

Inherits from [Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSubscription](classWombat_1_1MamaSubscription.html#function-~mamasubscription)**() |
| | **[MamaSubscription](classWombat_1_1MamaSubscription.html#function-mamasubscription)**(void ) |
| virtual void | **[setCSubscription](classWombat_1_1MamaSubscription.html#function-setcsubscription)**(mamaSubscription subscription) |
| virtual mamaSubscription | **[getCSubscription](classWombat_1_1MamaSubscription.html#function-getcsubscription)**() |
| virtual void | **[setup](classWombat_1_1MamaSubscription.html#function-setup)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) * callback, const char * source, const char * symbol, void * closure =NULL) |
| virtual void | **[setup](classWombat_1_1MamaSubscription.html#function-setup)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) * callback, [MamaSource](classWombat_1_1MamaSource.html) * source, const char * symbol, void * closure =NULL) |
| virtual void | **[activate](classWombat_1_1MamaSubscription.html#function-activate)**() |
| virtual void | **[deactivate](classWombat_1_1MamaSubscription.html#function-deactivate)**() |
| virtual void | **[create](classWombat_1_1MamaSubscription.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) * callback, const char * source, const char * symbol, void * closure =NULL) |
| virtual void | **[create](classWombat_1_1MamaSubscription.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) * callback, [MamaSource](classWombat_1_1MamaSource.html) * source, const char * symbol, void * closure =NULL) |
| virtual void | **[createSnapshot](classWombat_1_1MamaSubscription.html#function-createsnapshot)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) * callback, const char * source, const char * symbol, void * closure =NULL) |
| virtual void | **[setRequiresInitial](classWombat_1_1MamaSubscription.html#function-setrequiresinitial)**(bool requiresInitial) |
| virtual bool | **[getRequiresInitial](classWombat_1_1MamaSubscription.html#function-getrequiresinitial)**(void ) |
| virtual bool | **[getReceivedInitial](classWombat_1_1MamaSubscription.html#function-getreceivedinitial)**(void ) |
| virtual void | **[setRetries](classWombat_1_1MamaSubscription.html#function-setretries)**(int retries) |
| virtual int | **[getRetries](classWombat_1_1MamaSubscription.html#function-getretries)**(void ) |
| virtual void | **[setSubscriptionType](classWombat_1_1MamaSubscription.html#function-setsubscriptiontype)**(mamaSubscriptionType type) |
| virtual mamaSubscriptionType | **[getSubscriptionType](classWombat_1_1MamaSubscription.html#function-getsubscriptiontype)**(void ) |
| virtual long | **[getServiceLevelOpt](classWombat_1_1MamaSubscription.html#function-getservicelevelopt)**(void ) |
| virtual void | **[setServiceLevel](classWombat_1_1MamaSubscription.html#function-setservicelevel)**(mamaServiceLevel svcLevel, long svcLevelOpt) |
| virtual mamaServiceLevel | **[getServiceLevel](classWombat_1_1MamaSubscription.html#function-getservicelevel)**(void ) |
| virtual const char * | **[getSymbol](classWombat_1_1MamaSubscription.html#function-getsymbol)**(void ) const |
| virtual [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) * | **[getCallback](classWombat_1_1MamaSubscription.html#function-getcallback)**(void ) const |
| virtual void | **[setSymbol](classWombat_1_1MamaSubscription.html#function-setsymbol)**(const char * symbol) |
| virtual const [MamaSourceDerivative](classWombat_1_1MamaSourceDerivative.html) * | **[getSourceDerivative](classWombat_1_1MamaSubscription.html#function-getsourcederivative)**(void ) const |
| virtual [MamaSourceDerivative](classWombat_1_1MamaSourceDerivative.html) * | **[getSourceDerivative](classWombat_1_1MamaSubscription.html#function-getsourcederivative)**(void ) |
| virtual const [MamaSource](classWombat_1_1MamaSource.html) * | **[getSource](classWombat_1_1MamaSubscription.html#function-getsource)**(void ) const |
| virtual const char * | **[getSubscSource](classWombat_1_1MamaSubscription.html#function-getsubscsource)**(void ) const |
| virtual void | **[setTimeout](classWombat_1_1MamaSubscription.html#function-settimeout)**(double timeout) |
| virtual double | **[getTimeout](classWombat_1_1MamaSubscription.html#function-gettimeout)**(void ) |
| virtual void | **[setRecapTimeout](classWombat_1_1MamaSubscription.html#function-setrecaptimeout)**(double timeout) |
| virtual double | **[getRecapTimeout](classWombat_1_1MamaSubscription.html#function-getrecaptimeout)**(void ) |
| virtual void | **[setRecoverGaps](classWombat_1_1MamaSubscription.html#function-setrecovergaps)**(bool recover) |
| virtual bool | **[getRecoverGaps](classWombat_1_1MamaSubscription.html#function-getrecovergaps)**(void ) const |
| virtual void | **[setAppDataType](classWombat_1_1MamaSubscription.html#function-setappdatatype)**(uint8_t dataType) |
| virtual uint8_t | **[getAppDataType](classWombat_1_1MamaSubscription.html#function-getappdatatype)**() const |
| virtual void | **[setGroupSizeHint](classWombat_1_1MamaSubscription.html#function-setgroupsizehint)**(int groupSizeHint) |
| virtual void | **[setItemClosure](classWombat_1_1MamaSubscription.html#function-setitemclosure)**(void * closure) |
| virtual void * | **[getItemClosure](classWombat_1_1MamaSubscription.html#function-getitemclosure)**(void ) |
| virtual void | **[setPreInitialCacheSize](classWombat_1_1MamaSubscription.html#function-setpreinitialcachesize)**(int cacheSize) |
| virtual int | **[getPreInitialCacheSize](classWombat_1_1MamaSubscription.html#function-getpreinitialcachesize)**(void ) |
| virtual void | **[setMsgQualifierFilter](classWombat_1_1MamaSubscription.html#function-setmsgqualifierfilter)**(bool ignoreDefinitelyDuplicate, bool ignorePossiblyDuplicate, bool ignoreDefinitelyDelyaed, bool ignorePossiblyDelayed, bool ignoreOutOfSequence) |
| virtual void | **[getMsgQualifierFilter](classWombat_1_1MamaSubscription.html#function-getmsgqualifierfilter)**(bool & ignoreDefinitelyDuplicate, bool & ignorePossiblyDuplicate, bool & ignoreDefinitelyDelyaed, bool & ignorePossiblyDelayed, bool & ignoreOutOfSequence) const |
| virtual void | **[destroy](classWombat_1_1MamaSubscription.html#function-destroy)**() |
| virtual void | **[destroyEx](classWombat_1_1MamaSubscription.html#function-destroyex)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html#function-~mamabasicsubscription)**() |
| | **[MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html#function-mamabasicsubscription)**(void ) |
| virtual void | **[createBasic](classWombat_1_1MamaBasicSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html) * callback, const char * topic, void * closure =NULL) |
| virtual void | **[createBasic](classWombat_1_1MamaBasicSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) * callback, const char * topic, void * closure =NULL) |
| virtual bool | **[isActive](classWombat_1_1MamaBasicSubscription.html#function-isactive)**(void ) const |
| virtual const char * | **[getTopic](classWombat_1_1MamaBasicSubscription.html#function-gettopic)**(void ) const |
| virtual [MamaTransport](classWombat_1_1MamaTransport.html) * | **[getTransport](classWombat_1_1MamaBasicSubscription.html#function-gettransport)**(void ) const |
| virtual [MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html) * | **[getBasicCallback](classWombat_1_1MamaBasicSubscription.html#function-getbasiccallback)**(void ) const |
| virtual [MamaQueue](classWombat_1_1MamaQueue.html) * | **[getQueue](classWombat_1_1MamaBasicSubscription.html#function-getqueue)**(void ) const |
| virtual void | **[setClosure](classWombat_1_1MamaBasicSubscription.html#function-setclosure)**(void * closure) |
| virtual void * | **[getClosure](classWombat_1_1MamaBasicSubscription.html#function-getclosure)**(void ) const |
| virtual void | **[setDebugLevel](classWombat_1_1MamaBasicSubscription.html#function-setdebuglevel)**(MamaLogLevel level) |
| virtual MamaLogLevel | **[getDebugLevel](classWombat_1_1MamaBasicSubscription.html#function-getdebuglevel)**() const |
| virtual bool | **[checkDebugLevel](classWombat_1_1MamaBasicSubscription.html#function-checkdebuglevel)**(MamaLogLevel level) const |
| virtual mamaSubscriptionState | **[getState](classWombat_1_1MamaBasicSubscription.html#function-getstate)**(void ) |

**Protected Attributes inherited from [Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| void * | **[mClosure](classWombat_1_1MamaBasicSubscription.html#variable-mclosure)**  |
| [MamaQueue](classWombat_1_1MamaQueue.html) * | **[mQueue](classWombat_1_1MamaBasicSubscription.html#variable-mqueue)**  |
| mamaSubscription | **[mSubscription](classWombat_1_1MamaBasicSubscription.html#variable-msubscription)**  |
| [MamaTransport](classWombat_1_1MamaTransport.html) * | **[mTransport](classWombat_1_1MamaBasicSubscription.html#variable-mtransport)**  |


## Detailed Description

```cpp
class Wombat::MamaSubscription;
```


The `[MamaSubscription](classWombat_1_1MamaSubscription.html)` interface represents a subscription to a topic. It provides transparent market data semantics and functionality including initial value requests, recap requests, subscription management and data quality. 

## Public Functions Documentation

### function ~MamaSubscription

```cpp
virtual ~MamaSubscription()
```


### function MamaSubscription

```cpp
MamaSubscription(
    void 
)
```


### function setCSubscription

```cpp
virtual void setCSubscription(
    mamaSubscription subscription
)
```


### function getCSubscription

```cpp
virtual mamaSubscription getCSubscription()
```


### function setup

```cpp
virtual void setup(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaSubscriptionCallback * callback,
    const char * source,
    const char * symbol,
    void * closure =NULL
)
```


**Parameters**: 

  * **callback** The callback. 
  * **transport** The transport. 
  * **queue** The mama queue. 
  * **source** The data source name for the listener. 
  * **symbol** The symbol for the listener. 
  * **closure** The caller supplied closure. 


Set up a subscription.


### function setup

```cpp
virtual void setup(
    MamaQueue * queue,
    MamaSubscriptionCallback * callback,
    MamaSource * source,
    const char * symbol,
    void * closure =NULL
)
```


**Parameters**: 

  * **queue** The mama queue. 
  * **callback** The callback. 
  * **source** The [MamaSource](classWombat_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **symbol** The symbol for the listener. 
  * **closure** The caller supplied closure. 


Set up a subscription.


### function activate

```cpp
virtual void activate()
```


Activate a subscriber using the throttle queue. This method places a request to create a subscriber on the throttle queue which dispatches tasks that produce messages at a controlled rate. The rate is determined by the outbound throttle rate of the underlying `[MamaTransport](classWombat_1_1MamaTransport.html)`.

In the event that listener creation fails as the result of an messaging related error the callback is invoked with information regarding the error.

If entitlements are enabled, and the caller is not entitled to the requested symbol, the first invocation of the callback will invoked with status "MamaMsgStatus.NOT_ENTITLED".

As an added convenience, callers may implement the `onComplete` and `onError` members of `[MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html)`. `onComplete` is invoked prior to the arrival of any initial message signalling the successful creation of the listener. `onError` is invoked if a TIBRV or entitlement error occurs prior to listener creation.

It is also possible for an entitlement error to occur after a listener is created. This occurs when the entitlement information is included in the initial message sent by the feed handler as is often the case.

If an error occurs during listener creation. `destroy` is called automatically. 


### function deactivate

```cpp
virtual void deactivate()
```


Deactivate a subscriber. The subscription can be reactivated using [activate()](classWombat_1_1MamaSubscription.html#function-activate). 


### function create

```cpp
virtual void create(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaSubscriptionCallback * callback,
    const char * source,
    const char * symbol,
    void * closure =NULL
)
```


**Parameters**: 

  * **transport** The transport. 
  * **queue** The mama queue. 
  * **callback** The callback. 
  * **source** The data source name for the listener. 
  * **symbol** The symbol for the listener. 
  * **closure** The caller supplied closure. 


Set up and activate a subscriber using the throttle queue. This method is equivalent to calling [setup()](classWombat_1_1MamaSubscription.html#function-setup) followed by [activate()](classWombat_1_1MamaSubscription.html#function-activate).


### function create

```cpp
virtual void create(
    MamaQueue * queue,
    MamaSubscriptionCallback * callback,
    MamaSource * source,
    const char * symbol,
    void * closure =NULL
)
```


**Parameters**: 

  * **queue** The mama queue. 
  * **callback** The callback. 
  * **source** The [MamaSource](classWombat_1_1MamaSource.html) identifying the publisher for this symbol. 
  * **symbol** The symbol for the listener. 
  * **closure** The caller supplied closure. 


Set up and activate a subscriber using the throttle queue. This method is equivalent to calling [setup()](classWombat_1_1MamaSubscription.html#function-setup) followed by [activate()](classWombat_1_1MamaSubscription.html#function-activate).


### function createSnapshot

```cpp
virtual void createSnapshot(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaSubscriptionCallback * callback,
    const char * source,
    const char * symbol,
    void * closure =NULL
)
```


**Parameters**: 

  * **transport** The transport. 
  * **queue** The mama queue. 
  * **callback** The callback. 
  * **source** The data source name for the listener. 
  * **symbol** The symbol for the listener. 
  * **closure** The caller supplied closure. 


Set up and activate a snapshot subscriber using the throttle queue. This method is equivalent to calling [setup()](classWombat_1_1MamaSubscription.html#function-setup) followed by setServiceLevel(MAMA_SERVICE_LEVEL_SNAPSHOT,0) followed by [activate()](classWombat_1_1MamaSubscription.html#function-activate).


### function setRequiresInitial

```cpp
virtual void setRequiresInitial(
    bool requiresInitial
)
```


**Parameters**: 

  * **requiresInitial** True if an initial value is required 


Determines whether the subscription requires an initial value. Must be set before calling createXXX(). Default is true. Not applicable for snapshot subscriptions as they simply request an initial value.


### function getRequiresInitial

```cpp
virtual bool getRequiresInitial(
    void 
)
```


Return true if the subscription requires an initial value. 


### function getReceivedInitial

```cpp
virtual bool getReceivedInitial(
    void 
)
```


Return true if the subscription has received an initial. 


### function setRetries

```cpp
virtual void setRetries(
    int retries
)
```


**Parameters**: 

  * **retries** The number of time to retry the initial value request. 


Set the number of retries for initial value requests and recap requests. This must called before createXXX() to affect the initial value requests. Calling it after createXXX() only affects recap requests. The default is MAMA_DEFAULT_RETRIES.


### function getRetries

```cpp
virtual int getRetries(
    void 
)
```


Return the retries. 


### function setSubscriptionType

```cpp
virtual void setSubscriptionType(
    mamaSubscriptionType type
)
```


**Parameters**: 

  * **type** The type of subscription (normal, group, order book, etc.). 


Set the subscription type. The default is normal.


### function getSubscriptionType

```cpp
virtual mamaSubscriptionType getSubscriptionType(
    void 
)
```


Return the subscription type. 


### function getServiceLevelOpt

```cpp
virtual long getServiceLevelOpt(
    void 
)
```


Return the service level option. 


### function setServiceLevel

```cpp
virtual void setServiceLevel(
    mamaServiceLevel svcLevel,
    long svcLevelOpt
)
```


**Parameters**: 

  * **svcLevel** The service level of the subscription (real time, snapshot, etc.). The default is real time. 
  * **svcLevelOpt** An optional argument for certain service levels. 


Set the service level. This method must be invoked before createXXX().


### function getServiceLevel

```cpp
virtual mamaServiceLevel getServiceLevel(
    void 
)
```


Return the service level. 


### function getSymbol

```cpp
virtual const char * getSymbol(
    void 
) const
```


**Return**: The topic. 

Return the symbol for this subscription.


### function getCallback

```cpp
virtual MamaSubscriptionCallback * getCallback(
    void 
) const
```


### function setSymbol

```cpp
virtual void setSymbol(
    const char * symbol
)
```


Sets the symbol for this subscription. Should generally only be used for updating symbology mappings. 


### function getSourceDerivative

```cpp
virtual const MamaSourceDerivative * getSourceDerivative(
    void 
) const
```


**Return**: The source derivative. 

Return the (subscription-specific) MAMA source derivative for this subscription.


### function getSourceDerivative

```cpp
virtual MamaSourceDerivative * getSourceDerivative(
    void 
)
```


**Return**: The source derivative. 

Return the (subscription-specific) MAMA source derivative for this subscription.


### function getSource

```cpp
virtual const MamaSource * getSource(
    void 
) const
```


**Return**: The source. 

Return the MAMA source for this subscription.


### function getSubscSource

```cpp
virtual const char * getSubscSource(
    void 
) const
```


**Return**: The source. 

Return the source for this subscription.


### function setTimeout

```cpp
virtual void setTimeout(
    double timeout
)
```


**Parameters**: 

  * **timeout** The timeout in seconds. 


Set the timeout for this subscription. The timeout is used for requesting initial values.


### function getTimeout

```cpp
virtual double getTimeout(
    void 
)
```


Return the timeout. 


### function setRecapTimeout

```cpp
virtual void setRecapTimeout(
    double timeout
)
```


**Parameters**: 

  * **timeout** The timeout in seconds. 


Set the timeout for this subscription. The timeout is used for requesting recaps.


### function getRecapTimeout

```cpp
virtual double getRecapTimeout(
    void 
)
```


Return the recap timeout. 


### function setRecoverGaps

```cpp
virtual void setRecoverGaps(
    bool recover
)
```


**Parameters**: 

  * **recover** true enables recovery attempts. 


Attempt to recover from sequence number gaps by requesting a recap.


### function getRecoverGaps

```cpp
virtual bool getRecoverGaps(
    void 
) const
```


**Return**: true if gap recover is enabled. 

Returns true if listener is configure to recover from sequence number gaps by requesting a recap.


### function setAppDataType

```cpp
virtual void setAppDataType(
    uint8_t dataType
)
```


**Parameters**: 

  * **dataType** The application-specific data type (e.g., market data). 


Set the application data type. The default is 0.


### function getAppDataType

```cpp
virtual uint8_t getAppDataType() const
```


**Return**: The application-specific data type (e.g., market data). 

Get the application data type. The default is 0.


### function setGroupSizeHint

```cpp
virtual void setGroupSizeHint(
    int groupSizeHint
)
```


**Parameters**: 

  * **groupSizeHint** Approximate expected group size 


Set a hint to the size of groups when making group subscriptions.


### function setItemClosure

```cpp
virtual void setItemClosure(
    void * closure
)
```


Set the item closure for group subscriptions.

Group subscriptions receive updates for multiple symbols. This method allows calls to set a per-symbol closure which will be passed as the fourth argument to subsequent calls to the onMsg callback. This method may only be called during the onMsg callback.

Setting the item closure for a non-group subscription provides a second closure. 


### function getItemClosure

```cpp
virtual void * getItemClosure(
    void 
)
```


Get the item closure for group subscriptions. See setItemClosure. When invoked during an onMsg callback this method returns the closure for the current item in a group subscription. When invoked outside an onMsg callback, it returns the closure from the most recent callback. 


### function setPreInitialCacheSize

```cpp
virtual void setPreInitialCacheSize(
    int cacheSize
)
```


**Parameters**: 

  * **cacheSize** The size of the cache. 


Set the number of messages to cache for each symbol before the initial value arrives. This allows the subscription to recover when the initial value arrives late (after a subsequent trade or quote already arrived).

For group subscription, a separate cache is used for each group member.

The default is 10.


### function getPreInitialCacheSize

```cpp
virtual int getPreInitialCacheSize(
    void 
)
```


**Return**: The cache size. 

Return the initial value cache size.


### function setMsgQualifierFilter

```cpp
virtual void setMsgQualifierFilter(
    bool ignoreDefinitelyDuplicate,
    bool ignorePossiblyDuplicate,
    bool ignoreDefinitelyDelyaed,
    bool ignorePossiblyDelayed,
    bool ignoreOutOfSequence
)
```


**Parameters**: 

  * **ignoreDefinitelyDuplicate** If true callbacks will not be invoked for messages where [MamaMsg::getIsDefinitelyDuplicate](classWombat_1_1MamaMsg.html#function-getisdefinitelyduplicate) returns true.
  * **ignorePossiblyDuplicate** If true callbacks will not be invoked for messages where [MamaMsg::getIsPossiblyDuplicate](classWombat_1_1MamaMsg.html#function-getispossiblyduplicate) returns true.
  * **ignoreDefinitelyDelyaed** If true callbacks will not be invoked for messages where [MamaMsg::getIsDefinitelyDelayed](classWombat_1_1MamaMsg.html#function-getisdefinitelydelayed) returns true.
  * **ignorePossiblyDelayed** If true callbacks will not be invoked for messages where [MamaMsg::getIsPossiblyDelayed](classWombat_1_1MamaMsg.html#function-getispossiblydelayed) returns true.
  * **ignoreOutOfSequence** If true callbacks will not be invoked for messages where [MamaMsg::getIsOutOfSequence](classWombat_1_1MamaMsg.html#function-getisoutofsequence) returns true. 


Set a filter to discard messages.


### function getMsgQualifierFilter

```cpp
virtual void getMsgQualifierFilter(
    bool & ignoreDefinitelyDuplicate,
    bool & ignorePossiblyDuplicate,
    bool & ignoreDefinitelyDelyaed,
    bool & ignorePossiblyDelayed,
    bool & ignoreOutOfSequence
) const
```


**Parameters**: 

  * **ignoreDefinitelyDuplicate** If true callbacks will not be invoked for messages where [MamaMsg::getIsDefinitelyDuplicate](classWombat_1_1MamaMsg.html#function-getisdefinitelyduplicate) returns true.
  * **ignorePossiblyDuplicate** If true callbacks will not be invoked for messages where [MamaMsg::getIsPossiblyDuplicate](classWombat_1_1MamaMsg.html#function-getispossiblyduplicate) returns true.
  * **ignoreDefinitelyDelayed** If true callbacks will not be invoked for messages where [MamaMsg::getIsDefinitelyDelayed](classWombat_1_1MamaMsg.html#function-getisdefinitelydelayed) returns true.
  * **ignorePossiblyDelayed** If true callbacks will not be invoked for messages where [MamaMsg::getIsPossiblyDelayed](classWombat_1_1MamaMsg.html#function-getispossiblydelayed) returns true.
  * **ignoreOutOfSequence** If true callbacks will not be invoked for messages where [MamaMsg::getIsOutOfSequence](classWombat_1_1MamaMsg.html#function-getisoutofsequence) returns true. 


Get the filters that discard message according to the message qualifier.


### function destroy

```cpp
virtual void destroy()
```


**Reimplements**: [Wombat::MamaBasicSubscription::destroy](classWombat_1_1MamaBasicSubscription.html#function-destroy)


Destroy the subscription. 

Destroys the underlying subscription. The subscription can be recreated via a subsequent call to [create()](classWombat_1_1MamaSubscription.html#function-create)


### function destroyEx

```cpp
virtual void destroyEx()
```


**Reimplements**: [Wombat::MamaBasicSubscription::destroyEx](classWombat_1_1MamaBasicSubscription.html#function-destroyex)


This function will destroy the subscription and can be called from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received from the [MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html) interface. To destroy from the dispatching thread the destroy function should be used in preference. 


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100