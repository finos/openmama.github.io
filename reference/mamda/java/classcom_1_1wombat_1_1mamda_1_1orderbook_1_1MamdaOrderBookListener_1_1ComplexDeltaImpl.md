---
title: com::wombat::mamda::orderbook::MamdaOrderBookListener::ComplexDeltaImpl
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookListener::ComplexDeltaImpl





Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html), [com.wombat.mamda.orderbook.MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1ComplexDeltaImpl.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1ComplexDeltaImpl.html#function-getactivitytime)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1ComplexDeltaImpl.html#function-geteventseqnum)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1ComplexDeltaImpl.html#function-geteventtime)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1ComplexDeltaImpl.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1ComplexDeltaImpl.html#function-getactivitytimefieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1ComplexDeltaImpl.html#function-geteventseqnumfieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1ComplexDeltaImpl.html#function-geteventtimefieldstate)**() |

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


## Public Functions Documentation

### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100