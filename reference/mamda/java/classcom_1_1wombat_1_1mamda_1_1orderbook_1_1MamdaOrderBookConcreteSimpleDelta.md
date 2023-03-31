---
title: com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html), [com.wombat.mamda.orderbook.MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-getsrctimefieldstate)**() |
| void | **[setSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-setsrctime)**(MamaDateTime srcTime) |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-getactivitytimefieldstate)**() |
| void | **[setActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-setactivitytime)**(MamaDateTime activityTime) |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-geteventtimefieldstate)**() |
| void | **[setEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-seteventtime)**(MamaDateTime eventTime) |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-geteventseqnumfieldstate)**() |
| void | **[setEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-seteventseqnum)**(long eventSeqNum) |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.orderbook.MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html#function-mamdaorderbooksimpledelta)**() |
| | **[MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html#function-mamdaorderbooksimpledelta)**([MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html) copy) |

**Public Functions inherited from [com.wombat.mamda.orderbook.MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-mamdaorderbookbasicdelta)**() |
| | **[MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-mamdaorderbookbasicdelta)**([MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) source) |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-clear)**() |
| void | **[set](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-set)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level, double plDeltaSize, char plAction, char entryAction) |
| void | **[setPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-setpricelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[setPlDeltaAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-setpldeltaaction)**(char action) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-getpricelevel)**() |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-getentry)**() |
| double | **[getPlDeltaSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-getpldeltasize)**() |
| char | **[getPlDeltaAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-getpldeltaaction)**() |
| char | **[getEntryDeltaAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-getentrydeltaaction)**() |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-getorderbook)**() |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-dump)**(OutputStream output) |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html#function-dump)**() |


## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta;
```


[MamdaOrderBookConcreteSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html) is a class that saves information about a simple order book delta. A simple delta is one that affects a single order book entry. 

## Public Functions Documentation

### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


return Source time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function setSrcTime

```java
inline void setSrcTime(
    MamaDateTime srcTime
)
```


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


return Activity time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function setActivityTime

```java
inline void setActivityTime(
    MamaDateTime activityTime
)
```


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


return event time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function setEventTime

```java
inline void setEventTime(
    MamaDateTime eventTime
)
```


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


return source sequence number Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function setEventSeqNum

```java
inline void setEventSeqNum(
    long eventSeqNum
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100