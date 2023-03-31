---
title: com::wombat::mamda::orderbook::MamdaOrderBookSimpleDelta
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookSimpleDelta



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.orderbook.MamdaOrderBookConcreteSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html#function-mamdaorderbooksimpledelta)**() |
| | **[MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html#function-mamdaorderbooksimpledelta)**([MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html) copy) |

## Additional inherited members

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

**Public Functions inherited from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() |
| long | **[getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() |
| MamaDateTime | **[getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() |


## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookSimpleDelta;
```


[MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html) is a class that saves information about a simple order book delta. A simple delta is one that affects a single order book entry. 

## Public Functions Documentation

### function MamdaOrderBookSimpleDelta

```java
inline MamdaOrderBookSimpleDelta()
```


### function MamdaOrderBookSimpleDelta

```java
inline MamdaOrderBookSimpleDelta(
    MamdaOrderBookSimpleDelta copy
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100