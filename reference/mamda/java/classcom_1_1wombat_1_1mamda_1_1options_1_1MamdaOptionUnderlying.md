---
title: com::wombat::mamda::options::MamdaOptionUnderlying
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionUnderlying



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionUnderlying](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html#function-mamdaoptionunderlying)**() |
| void | **[addTradeHandler](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html#function-addtradehandler)**([MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) handler) |
| void | **[addQuoteHandler](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html#function-addquotehandler)**([MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) handler) |
| void | **[setCustomObject](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html#function-setcustomobject)**(Object object) |
| [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) | **[getTradeInfo](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html#function-gettradeinfo)**() |
| [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) | **[getQuoteInfo](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html#function-getquoteinfo)**() |
| Object | **[getCustomObject](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html#function-getcustomobject)**() |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionUnderlying;
```


A class that represents the underlying for an option chain. Instances of this object are typically created by the [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html). Applications may attach a custom object to each instance of [MamdaOptionUnderlying](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html).

Note: It is possible to provide individual [MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) and [MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) handlers for trades and quotes, even though the [MamdaOptionChainHandler](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html) also provides a general callback interface for updates to the underlying. 

## Public Functions Documentation

### function MamdaOptionUnderlying

```java
inline MamdaOptionUnderlying()
```


Constructor from expiration date, strike price, and put/call indicator. 


### function addTradeHandler

```java
inline void addTradeHandler(
    MamdaTradeHandler handler
)
```


Add a [MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) for handling trade updates to this underlying. 


### function addQuoteHandler

```java
inline void addQuoteHandler(
    MamdaQuoteHandler handler
)
```


Add a [MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) for handling quote updates to this underlying. 


### function setCustomObject

```java
inline void setCustomObject(
    Object object
)
```


Add a custom object to this option underlying. Such an object might contain customer data for the underlying. 


### function getTradeInfo

```java
inline MamdaTradeRecap getTradeInfo()
```


Return the current trade fields. 


### function getQuoteInfo

```java
inline MamdaQuoteRecap getQuoteInfo()
```


Return the current quote fields. 


### function getCustomObject

```java
inline Object getCustomObject()
```


Return the custom object. 


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100