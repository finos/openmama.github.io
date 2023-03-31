---
title: com::wombat::mamda::orderbook::MamdaOrderBookListener::SimpleDeltaImpl
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookListener::SimpleDeltaImpl





Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html), [com.wombat.mamda.orderbook.MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1SimpleDeltaImpl.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1SimpleDeltaImpl.html#function-getactivitytime)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1SimpleDeltaImpl.html#function-geteventseqnum)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1SimpleDeltaImpl.html#function-geteventtime)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1SimpleDeltaImpl.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1SimpleDeltaImpl.html#function-getactivitytimefieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1SimpleDeltaImpl.html#function-geteventseqnumfieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener_1_1SimpleDeltaImpl.html#function-geteventtimefieldstate)**() |

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