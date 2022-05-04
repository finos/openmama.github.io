---
title: com::wombat::mamda::MamdaSubscription
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaSubscription



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-mamdasubscription)**() |
| void | **[create](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-create)**(MamaTransport transport, MamaQueue queue, String source, String symbol, Object closure) |
| void | **[setSource](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setsource)**(String source) |
| void | **[setSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setsymbol)**(String symbol) |
| void | **[setTransport](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-settransport)**(MamaTransport transport) |
| void | **[setQueue](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setqueue)**(MamaQueue queue) |
| void | **[setType](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-settype)**(MamaSubscriptionType type) |
| void | **[setServiceLevel](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setservicelevel)**(short serviceLevel, short serviceLevelOpt) |
| void | **[setRequireInitial](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setrequireinitial)**(boolean require) |
| void | **[setTimeout](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-settimeout)**(double timeout) |
| void | **[setRetries](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setretries)**(int retries) |
| void | **[setClosure](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setclosure)**(Object closure) |
| void | **[addMsgListener](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-addmsglistener)**([MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) listener) |
| Vector | **[getMsgListeners](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getmsglisteners)**() |
| void | **[addStaleListener](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-addstalelistener)**([MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html) listener) |
| void | **[addErrorListener](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-adderrorlistener)**([MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html) listener) |
| synchronized void | **[activate](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate)**() |
| void | **[deactivate](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-deactivate)**() |
| MamaSubscriptionType | **[getSubscriptionType](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getsubscriptiontype)**() |
| short | **[getServiceLevel](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getservicelevel)**() |
| long | **[getServiceLevelOpt](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getservicelevelopt)**() |
| void | **[setRequiresInitial](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setrequiresinitial)**(boolean requiresInitial) |
| boolean | **[getRequiresInitial](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getrequiresinitial)**() |
| void | **[setAppDataType](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setappdatatype)**(MamaMdDataType appDataType) |
| MamaMdDataType | **[getAppDataType](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getappdatatype)**() |
| void | **[setRecoverGaps](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setrecovergaps)**(boolean doesRecover) |
| boolean | **[getRecoverGaps](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getrecovergaps)**() |
| void | **[setPreInitialCacheSize](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-setpreinitialcachesize)**(int cacheSize) |
| int | **[getPreInitialCacheSize](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getpreinitialcachesize)**() |
| MamaMsgQualifier | **[getMsgQualifier](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getmsgqualifier)**() |
| void | **[requestRecap](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-requestrecap)**() |
| int | **[getRetries](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getretries)**() |
| double | **[getTimeout](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-gettimeout)**() |
| String | **[getSource](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getsource)**() |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getsymbol)**() |
| MamaQueue | **[getQueue](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getqueue)**() |
| MamaTransport | **[getTransport](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-gettransport)**() |
| Object | **[getClosure](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getclosure)**() |
| long | **[getSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getseqnum)**() |
| MamaSubscription | **[getMamaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-getmamasubscription)**() |

## Detailed Description

```java
class com::wombat::mamda::MamdaSubscription;
```


A [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) is used to register interest in a particular symbol and source. A MamaTransport is required to actually activate the subscription.

Multiple listeners can be added to the [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html). In this way, an application can make use of more than one of the specialized value added MAMDA listeners, such as [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) and [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html). 

## Public Functions Documentation

### function MamdaSubscription

```java
inline MamdaSubscription()
```


Default constructor. The subscription is not created until either [create()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-create) or [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate) is called. 


### function create

```java
inline void create(
    MamaTransport transport,
    MamaQueue queue,
    String source,
    String symbol,
    Object closure
)
```


Create and activate a subscription. Any properties for the subscription should be set prior to calling this method. 


### function setSource

```java
inline void setSource(
    String source
)
```


Set the data source name. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). 


### function setSymbol

```java
inline void setSymbol(
    String symbol
)
```


Set the symbol. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). 


### function setTransport

```java
inline void setTransport(
    MamaTransport transport
)
```


Set the MAMA transport. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). 


### function setQueue

```java
inline void setQueue(
    MamaQueue queue
)
```


Set the MAMA queue. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). 


### function setType

```java
inline void setType(
    MamaSubscriptionType type
)
```


Set the subscrption type. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). Default is `MamaSubscriptionType.NORMAL`


### function setServiceLevel

```java
inline void setServiceLevel(
    short serviceLevel,
    short serviceLevelOpt
)
```


Set the MAMA service level. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). Default value is `MamaServiceLevel.REAL_TIME` and 0 


### function setRequireInitial

```java
inline void setRequireInitial(
    boolean require
)
```


Set whether an initial value is required. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). Default is `true`


### function setTimeout

```java
inline void setTimeout(
    double timeout
)
```


Set the timeout (in seconds) for this subscription. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). Default is 10 seconds. 


### function setRetries

```java
inline void setRetries(
    int retries
)
```


Set the retries for this subscirption. Do this before calling activate. Default is 3 


### function setClosure

```java
inline void setClosure(
    Object closure
)
```


Set the closure. Do this before calling [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate). 


### function addMsgListener

```java
inline void addMsgListener(
    MamdaMsgListener listener
)
```


Add a listener for regular messages. 


### function getMsgListeners

```java
inline Vector getMsgListeners()
```


### function addStaleListener

```java
inline void addStaleListener(
    MamdaStaleListener listener
)
```


Add a listener for changes in stale status. 


### function addErrorListener

```java
inline void addErrorListener(
    MamdaErrorListener listener
)
```


Add a listener for error events. 


### function activate

```java
inline synchronized void activate()
```


Activate the subscription. Until this method is invoked, no updates will be received. 


### function deactivate

```java
inline void deactivate()
```


Deactivate the subscription. No more updates will be received for this subscription (unless [activate()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-activate) is invoked again).

This function must be called from the same thread dispatching on the associated event queue unless both the default queue and dispatch queue are not actively dispatching. 


### function getSubscriptionType

```java
inline MamaSubscriptionType getSubscriptionType()
```


Returns the underlying `MamaSubscriptionType` for the specified Subscription. 


### function getServiceLevel

```java
inline short getServiceLevel()
```


Get the service level for the specified Subscription. 


### function getServiceLevelOpt

```java
inline long getServiceLevelOpt()
```


**Return**: serviceLevel 

Get the service level options for the specified subscription.


### function setRequiresInitial

```java
inline void setRequiresInitial(
    boolean requiresInitial
)
```


**Parameters**: 

  * **requiresInitial** [true|false] Whether to request an initial value or not. 


Whether an initial value is required for the specified Subscription. This only applies to market data subscriptions and not to basic subscriptions. Default value of true indicating that initial values are required. 


### function getRequiresInitial

```java
inline boolean getRequiresInitial()
```


**Return**: boolean 

Returns a value of true or false indicating whether this Subscription is interested in initial values.


### function setAppDataType

```java
inline void setAppDataType(
    MamaMdDataType appDataType
)
```


**Parameters**: 

  * **appDataType** The application-specific data type. 


Set the application-specific data type.


### function getAppDataType

```java
inline MamaMdDataType getAppDataType()
```


**Return**: appDataType . 

Retrieve the application-specific data type.


### function setRecoverGaps

```java
inline void setRecoverGaps(
    boolean doesRecover
)
```


**Parameters**: 

  * **doesRecover** indicates not to recover. true The Subscription will attempt to recover via a recap request. 


Whether a Subscription should attempt to recover from sequence number gaps.


### function getRecoverGaps

```java
inline boolean getRecoverGaps()
```


**Return**: boolean - false does not recoever true - does attempt to recover 

Whether the specified subscription will attempt to recover from sequence number gaps.


### function setPreInitialCacheSize

```java
inline void setPreInitialCacheSize(
    int cacheSize
)
```


**Parameters**: 

  * **cacheSize** The size of the cache. 


Set the number of messages to cache for each symbol before the initial value arrives. This allows the Subscription to recover when the initial value arrives late (after a subsequent trade or quote already arrived).

For group subscription, a separate cache is used for each group member.

The default is 10. 


### function getPreInitialCacheSize

```java
inline int getPreInitialCacheSize()
```


**Return**: cacheSize 

Return the initial value cache size


### function getMsgQualifier

```java
inline MamaMsgQualifier getMsgQualifier()
```


**Return**: MamaMsgQualifier 

Return the MamaMsgQualifier 


### function requestRecap

```java
inline void requestRecap()
```


Force a recap request to be sent for this subscription. 


### function getRetries

```java
inline int getRetries()
```


### function getTimeout

```java
inline double getTimeout()
```


### function getSource

```java
inline String getSource()
```


### function getSymbol

```java
inline String getSymbol()
```


### function getQueue

```java
inline MamaQueue getQueue()
```


### function getTransport

```java
inline MamaTransport getTransport()
```


### function getClosure

```java
inline Object getClosure()
```


Get the additional object passed as the closure to the [create()](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html#function-create) method. 


### function getSeqNum

```java
inline long getSeqNum()
```


### function getMamaSubscription

```java
inline MamaSubscription getMamaSubscription()
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100