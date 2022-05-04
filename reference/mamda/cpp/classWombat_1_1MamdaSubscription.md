---
title: Wombat::MamdaSubscription
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSubscription



 [More...](#detailed-description)


`#include <MamdaSubscription.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSubscription](classWombat_1_1MamdaSubscription.html#function-mamdasubscription)**() |
| virtual | **[~MamdaSubscription](classWombat_1_1MamdaSubscription.html#function-~mamdasubscription)**() |
| virtual [MamdaSubscription](classWombat_1_1MamdaSubscription.html) * | **[clone](classWombat_1_1MamdaSubscription.html#function-clone)**() const |
| void | **[create](classWombat_1_1MamdaSubscription.html#function-create)**(MamaQueue * queue, MamaSource * source, const char * symbol, void * closure =NULL) |
| void | **[destroy](classWombat_1_1MamdaSubscription.html#function-destroy)**() |
| bool | **[isActive](classWombat_1_1MamdaSubscription.html#function-isactive)**() const |
| void | **[setSource](classWombat_1_1MamdaSubscription.html#function-setsource)**(MamaSource * source) |
| void | **[setSymbol](classWombat_1_1MamdaSubscription.html#function-setsymbol)**(const char * symbol) |
| void | **[setQueue](classWombat_1_1MamdaSubscription.html#function-setqueue)**(MamaQueue * queue) |
| void | **[setMdDataType](classWombat_1_1MamdaSubscription.html#function-setmddatatype)**(mamaMdDataType mdDataType) |
| void | **[setType](classWombat_1_1MamdaSubscription.html#function-settype)**(mamaSubscriptionType type) |
| void | **[setServiceLevel](classWombat_1_1MamdaSubscription.html#function-setservicelevel)**(mamaServiceLevel serviceLevel, long serviceLevelOpt =0) |
| void | **[setRequireInitial](classWombat_1_1MamdaSubscription.html#function-setrequireinitial)**(bool require) |
| void | **[setTimeout](classWombat_1_1MamdaSubscription.html#function-settimeout)**(double timeout) |
| void | **[setRecapTimeout](classWombat_1_1MamdaSubscription.html#function-setrecaptimeout)**(double timeout) |
| void | **[setRetries](classWombat_1_1MamdaSubscription.html#function-setretries)**(int retries) |
| void | **[setClosure](classWombat_1_1MamdaSubscription.html#function-setclosure)**(void * closure) |
| void | **[setGroupSizeHint](classWombat_1_1MamdaSubscription.html#function-setgroupsizehint)**(int groupSizeHint) |
| void | **[setMamaSubscription](classWombat_1_1MamdaSubscription.html#function-setmamasubscription)**(MamaSubscription * subscription) |
| void | **[addMsgListener](classWombat_1_1MamdaSubscription.html#function-addmsglistener)**([MamdaMsgListener](classWombat_1_1MamdaMsgListener.html) * listener) |
| void | **[addQualityListener](classWombat_1_1MamdaSubscription.html#function-addqualitylistener)**([MamdaQualityListener](classWombat_1_1MamdaQualityListener.html) * listener) |
| void | **[addErrorListener](classWombat_1_1MamdaSubscription.html#function-adderrorlistener)**([MamdaErrorListener](classWombat_1_1MamdaErrorListener.html) * listener) |
| std::vector< [MamdaMsgListener](classWombat_1_1MamdaMsgListener.html) * > & | **[getMsgListeners](classWombat_1_1MamdaSubscription.html#function-getmsglisteners)**() |
| void | **[activate](classWombat_1_1MamdaSubscription.html#function-activate)**() |
| void | **[deactivate](classWombat_1_1MamdaSubscription.html#function-deactivate)**() |
| void | **[requestRecap](classWombat_1_1MamdaSubscription.html#function-requestrecap)**() |
| MamaSource * | **[getSource](classWombat_1_1MamdaSubscription.html#function-getsource)**() const |
| const char * | **[getSourceName](classWombat_1_1MamdaSubscription.html#function-getsourcename)**() const |
| const char * | **[getSymbol](classWombat_1_1MamdaSubscription.html#function-getsymbol)**() const |
| const char * | **[getExchange](classWombat_1_1MamdaSubscription.html#function-getexchange)**() const |
| MamaTransport * | **[getTransport](classWombat_1_1MamdaSubscription.html#function-gettransport)**() const |
| MamaQueue * | **[getQueue](classWombat_1_1MamdaSubscription.html#function-getqueue)**() const |
| MamaSubscription * | **[getMamaSubscription](classWombat_1_1MamdaSubscription.html#function-getmamasubscription)**() |
| mamaSubscriptionType | **[getType](classWombat_1_1MamdaSubscription.html#function-gettype)**() const |
| mamaServiceLevel | **[getServiceLevel](classWombat_1_1MamdaSubscription.html#function-getservicelevel)**() const |
| long | **[getServiceLevelOpt](classWombat_1_1MamdaSubscription.html#function-getservicelevelopt)**() const |
| bool | **[getRequireInitial](classWombat_1_1MamdaSubscription.html#function-getrequireinitial)**() const |
| double | **[getTimeout](classWombat_1_1MamdaSubscription.html#function-gettimeout)**() const |
| double | **[getRecapTimeout](classWombat_1_1MamdaSubscription.html#function-getrecaptimeout)**() const |
| int | **[getRetries](classWombat_1_1MamdaSubscription.html#function-getretries)**() const |
| void * | **[getClosure](classWombat_1_1MamdaSubscription.html#function-getclosure)**() const |
| uint32_t | **[getSeqNum](classWombat_1_1MamdaSubscription.html#function-getseqnum)**() const |
| void | **[setItemClosure](classWombat_1_1MamdaSubscription.html#function-setitemclosure)**(void * closure) |
| void * | **[getItemClosure](classWombat_1_1MamdaSubscription.html#function-getitemclosure)**(void ) |
| bool | **[checkDebugLevel](classWombat_1_1MamdaSubscription.html#function-checkdebuglevel)**(MamaLogLevel level) const |

## Detailed Description

```cpp
class Wombat::MamdaSubscription;
```


A [MamdaSubscription](classWombat_1_1MamdaSubscription.html) is used to register interest in a particular symbol and source. A MamaSource object is required to actually activate the subscription.

Multiple listeners can be added to the [MamdaSubscription](classWombat_1_1MamdaSubscription.html). In this way, an application can make use of more than one of the specialized value added MAMDA listeners, such as [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) and [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html).

The queue argument may be null to use Mama's internal queue. 

## Public Functions Documentation

### function MamdaSubscription

```cpp
MamdaSubscription()
```


Default constructor. Use the [create()](classWombat_1_1MamdaSubscription.html#function-create) method to create and activate the subscription. 


### function ~MamdaSubscription

```cpp
virtual ~MamdaSubscription()
```


Destructor. 


### function clone

```cpp
virtual MamdaSubscription * clone() const
```


Clone this [MamdaSubscription](classWombat_1_1MamdaSubscription.html). Allocate an inactive [MamdaSubscription](classWombat_1_1MamdaSubscription.html) object that is initialized as a duplicate of this one. The purpose of this facility is to enable a "template" of a [MamdaSubscription](classWombat_1_1MamdaSubscription.html) for use with many subscriptions. The following subscription attributes are copied: source, symbol, queue, subscription type, service level, requires initial and timeout. 


### function create

```cpp
void create(
    MamaQueue * queue,
    MamaSource * source,
    const char * symbol,
    void * closure =NULL
)
```


Create and activate a subscription. Set any subscription properties prior to calling this method. 


### function destroy

```cpp
void destroy()
```


Destroy a subscription. 


### function isActive

```cpp
bool isActive() const
```


Return whether subscription is active. 


### function setSource

```cpp
void setSource(
    MamaSource * source
)
```


Set the data source name. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setSymbol

```cpp
void setSymbol(
    const char * symbol
)
```


Set the symbol. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setQueue

```cpp
void setQueue(
    MamaQueue * queue
)
```


Set the MAMA queue. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setMdDataType

```cpp
void setMdDataType(
    mamaMdDataType mdDataType
)
```


Set the market data type. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setType

```cpp
void setType(
    mamaSubscriptionType type
)
```


Set the subscription type. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setServiceLevel

```cpp
void setServiceLevel(
    mamaServiceLevel serviceLevel,
    long serviceLevelOpt =0
)
```


Set the MAMA service level. 


### function setRequireInitial

```cpp
void setRequireInitial(
    bool require
)
```


Set whether an initial value is required. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setTimeout

```cpp
void setTimeout(
    double timeout
)
```


Set the subscription initial timeout (in seconds). Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setRecapTimeout

```cpp
void setRecapTimeout(
    double timeout
)
```


Set the subscription recap timeout (in seconds). Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setRetries

```cpp
void setRetries(
    int retries
)
```


Set the subscription retries. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setClosure

```cpp
void setClosure(
    void * closure
)
```


Set the closure. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setGroupSizeHint

```cpp
void setGroupSizeHint(
    int groupSizeHint
)
```


Set the group size hint. Do this before calling [activate()](classWombat_1_1MamdaSubscription.html#function-activate). 


### function setMamaSubscription

```cpp
void setMamaSubscription(
    MamaSubscription * subscription
)
```


Set the MamaSubscription. This is normally done automatically. 


### function addMsgListener

```cpp
void addMsgListener(
    MamdaMsgListener * listener
)
```


Add a listener for regular messages. 


### function addQualityListener

```cpp
void addQualityListener(
    MamdaQualityListener * listener
)
```


Add a listener for changes in quality status. 


### function addErrorListener

```cpp
void addErrorListener(
    MamdaErrorListener * listener
)
```


Add a listener for error events. 


### function getMsgListeners

```cpp
std::vector< MamdaMsgListener * > & getMsgListeners()
```


**Return**: Vector of message listeners registered with the object. 

Return the vector of message listeners.


### function activate

```cpp
void activate()
```


Activate the subscription. Until this method is invoked, no updates will be received. The parameters for the subscription should have been specified using the "set" methods. 


### function deactivate

```cpp
void deactivate()
```


Deactivate the subscription. No more updates will be received for this subscription (unless [activate()](classWombat_1_1MamdaSubscription.html#function-activate) is invoked again).

This function must be called from the same thread dispatching on the associated event queue unless both the default queue and dispatch queue are not actively dispatching. 


### function requestRecap

```cpp
void requestRecap()
```


Deprecated. This method is now a no-op. 


### function getSource

```cpp
MamaSource * getSource() const
```


Return the source. Note: When using managed subscriptions this currently returns NULL 


### function getSourceName

```cpp
const char * getSourceName() const
```


Return the publisher source name. 


### function getSymbol

```cpp
const char * getSymbol() const
```


Return the symbol. 


### function getExchange

```cpp
const char * getExchange() const
```


Return the exchange. 


### function getTransport

```cpp
MamaTransport * getTransport() const
```


Return the transport. 


### function getQueue

```cpp
MamaQueue * getQueue() const
```


Return the queue. 


### function getMamaSubscription

```cpp
MamaSubscription * getMamaSubscription()
```


Return the MamaSubscription object. 


### function getType

```cpp
mamaSubscriptionType getType() const
```


Return the subscription type. 


### function getServiceLevel

```cpp
mamaServiceLevel getServiceLevel() const
```


Return the service level. 


### function getServiceLevelOpt

```cpp
long getServiceLevelOpt() const
```


Return the service level option. 


### function getRequireInitial

```cpp
bool getRequireInitial() const
```


Return whether an initial is required. 


### function getTimeout

```cpp
double getTimeout() const
```


Return the timeout (seconds). 


### function getRecapTimeout

```cpp
double getRecapTimeout() const
```


Return the recap timeout (seconds). 


### function getRetries

```cpp
int getRetries() const
```


Return the retries. 


### function getClosure

```cpp
void * getClosure() const
```


Get the additional object passed as the closure to the [create()](classWombat_1_1MamdaSubscription.html#function-create) method. 


### function getSeqNum

```cpp
uint32_t getSeqNum() const
```


Get the message-level sequence number. This number is normally sequential although there are some exceptions. Erroneous exceptions are reported via the "quality listener" interface. 


### function setItemClosure

```cpp
void setItemClosure(
    void * closure
)
```


Set the item closure for group subscriptions.

Setting the item closure for a non-group subscription provides a second closure. 


### function getItemClosure

```cpp
void * getItemClosure(
    void 
)
```


Get the item closure for group subscriptions. 


### function checkDebugLevel

```cpp
bool checkDebugLevel(
    MamaLogLevel level
) const
```


**Parameters**: 

  * **level** The debug level to check. 


**Return**: whether the level equals or exceeds the set level for this subscription. 

Return whether the debug level for this subscription equals or exceeds some level.


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100