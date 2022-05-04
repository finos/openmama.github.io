---
title: com::wombat::mamda::orderbook::MamdaOrderBookRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookRecap



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)

Inherited by [com.wombat.mamda.orderbook.MamdaOrderBookConcreteRecap](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html), [com.wombat.mamda.orderbook.MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookRecap.html#function-getorderbook)**() |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| String | **[getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)**() |
| short | **[getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**() |
| String | **[getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)**() |
| short | **[getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**() |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**() |
| MamaDateTime | **[getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)**() |
| short | **[getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**() |
| MamaDateTime | **[getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)**() |
| short | **[getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**() |


## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookRecap;
```


[MamdaOrderBookRecap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookRecap.html) is an interface that provides access to order book related fields. 

## Public Functions Documentation

### function getOrderBook

```java
MamdaOrderBook getOrderBook()
```


**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getorderbook), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getorderbook)


Returns a reference to the full orderbook if a full book is being maintained by the [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html). 


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100