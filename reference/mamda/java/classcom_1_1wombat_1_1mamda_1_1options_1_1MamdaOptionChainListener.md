---
title: com::wombat::mamda::options::MamdaOptionChainListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionChainListener



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.options.MamdaOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-mamdaoptionchainlistener)**(String underlyingSymbol) |
| | **[MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-mamdaoptionchainlistener)**([MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-addhandler)**([MamdaOptionChainHandler](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html) handler) |
| [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) | **[getOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getoptionchain)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, MamaMsg msg, short msgType) |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getactivitytime)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-geteventseqnum)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-geteventtime)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getactivitytimefieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-geteventseqnumfieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-geteventtimefieldstate)**() |
| [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) | **[getOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getoptioncontract)**() |
| char | **[getOptionAction](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getoptionaction)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final char | **[ACTION_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#variable-action-unknown)**  |
| final char | **[ACTION_ADD](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#variable-action-add)**  |
| final char | **[ACTION_DELETE](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#variable-action-delete)**  |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionChainListener;
```


[MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) is a class that specializes in handling and managing option chain updates. Developers provide their own implementation of the [MamdaOptionChainHandler](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html) interface and will be delivered notifications for various types of options-related events. 

## Public Functions Documentation

### function MamdaOptionChainListener

```java
inline MamdaOptionChainListener(
    String underlyingSymbol
)
```


Create a specialized option chain listener. This listener handles option chain updates. 


### function MamdaOptionChainListener

```java
inline MamdaOptionChainListener(
    MamdaOptionChain chain
)
```


Create a specialized option chain listener. This listener handles option chain updates. 


### function addHandler

```java
inline void addHandler(
    MamdaOptionChainHandler handler
)
```


Add a specialized option chain handler. Currently, only one handler can (and must) be registered. 


### function getOptionChain

```java
inline MamdaOptionChain getOptionChain()
```


Return the option chain associated with this listener. 


### function onMsg

```java
inline void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    short msgType
)
```


**Reimplements**: [com::wombat::mamda::MamdaMsgListener::onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


return Source time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


return Activity time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


return source sequence number Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


return event time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getOptionContract

```java
inline MamdaOptionContract getOptionContract()
```


**Return**: The option contract to which the most recent event applies. If the contract is new, it will have already been added to the chain. If it is being removed, it will have already been removed from the chain. 

**Reimplements**: [com::wombat::mamda::options::MamdaOptionSeriesUpdate::getOptionContract](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html#function-getoptioncontract)


Get the option contract to which the most recent event applies. 


### function getOptionAction

```java
inline char getOptionAction()
```


**Return**: The action related to the last series update message. 

**Reimplements**: [com::wombat::mamda::options::MamdaOptionSeriesUpdate::getOptionAction](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html#function-getoptionaction)


Get the most recent action. 


## Public Attributes Documentation

### variable ACTION_UNKNOWN

```java
static final char ACTION_UNKNOWN = ' ';
```


### variable ACTION_ADD

```java
static final char ACTION_ADD = 'A';
```


### variable ACTION_DELETE

```java
static final char ACTION_DELETE = 'D';
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100