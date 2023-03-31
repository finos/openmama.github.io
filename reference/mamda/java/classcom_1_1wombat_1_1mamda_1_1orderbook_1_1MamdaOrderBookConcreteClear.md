---
title: com::wombat::mamda::orderbook::MamdaOrderBookConcreteClear
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookConcreteClear



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaConcreteBasicEvent](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html), [com.wombat.mamda.orderbook.MamdaOrderBookClear](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookClear.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteClear.html#function-getorderbook)**() |
| void | **[setOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteClear.html#function-setorderbook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) orderBook) |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.MamdaConcreteBasicEvent](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getsrctimefieldstate)**() |
| void | **[setSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-setsrctime)**(MamaDateTime srcTime) |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getactivitytimefieldstate)**() |
| void | **[setActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-setactivitytime)**(MamaDateTime activityTime) |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventtimefieldstate)**() |
| void | **[setEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-seteventtime)**(MamaDateTime eventTime) |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventseqnumfieldstate)**() |
| void | **[setEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-seteventseqnum)**(long eventSeqNum) |

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
class com::wombat::mamda::orderbook::MamdaOrderBookConcreteClear;
```


[MamdaOrderBookConcreteClear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteClear.html) is a class that saves information about a full order book image. 

## Public Functions Documentation

### function getOrderBook

```java
inline MamdaOrderBook getOrderBook()
```


**Return**: The full order book. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaOrderBookClear::getOrderBook](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookClear.html#function-getorderbook)


Returns the full orderbook related to this clear event.


### function setOrderBook

```java
inline void setOrderBook(
    MamdaOrderBook orderBook
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100