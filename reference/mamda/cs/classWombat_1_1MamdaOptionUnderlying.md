---
title: Wombat::MamdaOptionUnderlying
summary: A class that represents the underlying for an option chain. Instances of this object are typically created by the MamdaOptionChain. Applications may attach a custom object to each instance of MamdaOptionUnderlying. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionUnderlying



A class that represents the underlying for an option chain. Instances of this object are typically created by the [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html). Applications may attach a custom object to each instance of [MamdaOptionUnderlying]().  [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionUnderlying](classWombat_1_1MamdaOptionUnderlying.html#function-mamdaoptionunderlying)**()<br>Constructor from expiration date, strike price, and put/call indicator.  |
| void | **[addTradeHandler](classWombat_1_1MamdaOptionUnderlying.html#function-addtradehandler)**([MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html) handler)<br>Add a [MamdaTradeHandler]() for handling trade updates to this underlying.  |
| void | **[addQuoteHandler](classWombat_1_1MamdaOptionUnderlying.html#function-addquotehandler)**([MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html) handler)<br>Add a [MamdaQuoteHandler]() for handling quote updates to this underlying.  |
| void | **[setCustomObject](classWombat_1_1MamdaOptionUnderlying.html#function-setcustomobject)**(object obj)<br>Add a custom object to this option underlying. Such an object might contain customer data for the underlying.  |
| object | **[getCustomObject](classWombat_1_1MamdaOptionUnderlying.html#function-getcustomobject)**()<br>Return the custom object.  |
| [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) | **[getTradeInfo](classWombat_1_1MamdaOptionUnderlying.html#function-gettradeinfo)**()<br>Return the current trade fields.  |
| [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) | **[getQuoteInfo](classWombat_1_1MamdaOptionUnderlying.html#function-getquoteinfo)**()<br>Return the current quote fields.  |

## Detailed Description

```csharp
class Wombat::MamdaOptionUnderlying;
```

A class that represents the underlying for an option chain. Instances of this object are typically created by the [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html). Applications may attach a custom object to each instance of [MamdaOptionUnderlying](). 

Note: It is possible to provide individual [MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html) and [MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html) handlers for trades and quotes, even though the [MamdaOptionChainHandler](interfaceWombat_1_1MamdaOptionChainHandler.html) also provides a general callback interface for updates to the underlying. 

## Public Functions Documentation

### function MamdaOptionUnderlying

```csharp
MamdaOptionUnderlying()
```

Constructor from expiration date, strike price, and put/call indicator. 

### function addTradeHandler

```csharp
void addTradeHandler(
    MamdaTradeHandler handler
)
```

Add a [MamdaTradeHandler]() for handling trade updates to this underlying. 

**Parameters**: 

  * **handler** 


### function addQuoteHandler

```csharp
void addQuoteHandler(
    MamdaQuoteHandler handler
)
```

Add a [MamdaQuoteHandler]() for handling quote updates to this underlying. 

**Parameters**: 

  * **handler** 


### function setCustomObject

```csharp
void setCustomObject(
    object obj
)
```

Add a custom object to this option underlying. Such an object might contain customer data for the underlying. 

**Parameters**: 

  * **obj** 


### function getCustomObject

```csharp
object getCustomObject()
```

Return the custom object. 

**Return**: 

### function getTradeInfo

```csharp
MamdaTradeRecap getTradeInfo()
```

Return the current trade fields. 

**Return**: 

### function getQuoteInfo

```csharp
MamdaQuoteRecap getQuoteInfo()
```

Return the current quote fields. 

**Return**: 

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100