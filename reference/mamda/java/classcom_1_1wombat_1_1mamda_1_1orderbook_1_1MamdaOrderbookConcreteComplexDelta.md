---
title: com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html), [com.wombat.mamda.orderbook.MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-getsrctimefieldstate)**() |
| void | **[setSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-setsrctime)**(MamaDateTime srcTime) |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-getactivitytimefieldstate)**() |
| void | **[setActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-setactivitytime)**(MamaDateTime activityTime) |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-geteventtimefieldstate)**() |
| void | **[setEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-seteventtime)**(MamaDateTime eventTime) |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-geteventseqnumfieldstate)**() |
| void | **[setEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-seteventseqnum)**(long eventSeqNum) |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.orderbook.MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-mamdaorderbookbasicdeltalist)**() |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-clear)**() |
| void | **[setKeepBasicDeltas](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-setkeepbasicdeltas)**(boolean keep) |
| int | **[getModifiedSides](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-getmodifiedsides)**() |
| void | **[add](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-add)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level, double plDeltaSize, char plAction, char entryAction) |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-getorderbook)**() |
| long | **[getSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-getsize)**() |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-dump)**(OutputStream output) |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-dump)**() |
| Iterator | **[iterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-iterator)**() |

**Public Attributes inherited from [com.wombat.mamda.orderbook.MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html)**

|                | Name           |
| -------------- | -------------- |
| final int | **[MOD_SIDES_NONE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#variable-mod-sides-none)**  |
| final int | **[MOD_SIDES_BID](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#variable-mod-sides-bid)**  |
| final int | **[MOD_SIDES_ASK](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#variable-mod-sides-ask)**  |
| final int | **[MOD_SIDES_BID_AND_ASK](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#variable-mod-sides-bid-and-ask)**  |


## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta;
```


MamdaOrderBookConcreteComplexDelta is a class that saves information about a complex order book delta. A complex delta involves multiple entries and/or price levels. For example, a modified order may involve a price change that means moving an entry from one price level to another. A complex delta is made up of several simple deltas, which can be iterated over by methods provided in the class. 

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

Updated on 2022-05-04 at 07:54:13 +0100