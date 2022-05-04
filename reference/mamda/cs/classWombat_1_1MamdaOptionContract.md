---
title: Wombat::MamdaOptionContract
summary: A class that represents a single option contract. Instances of this object are typically created by the MamdaOptionChainListener. Applications may attach a custom object to each instance of MamdaOptionContract. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionContract



A class that represents a single option contract. Instances of this object are typically created by the [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html). Applications may attach a custom object to each instance of [MamdaOptionContract]().  [More...](#detailed-description)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum class byte | **[PutOrCall](classWombat_1_1MamdaOptionContract.html#enum-putorcall)** { Unknown = (byte)'Z', Call = (byte)'C', Put = (byte)'P'} |
| enum class byte | **[ExerciseStyle](classWombat_1_1MamdaOptionContract.html#enum-exercisestyle)** { Unknown = (byte)'Z', American = (byte)'A', European = (byte)'E', Capped = (byte)'C'} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionContract](classWombat_1_1MamdaOptionContract.html#function-mamdaoptioncontract)**(string symbol, string exchange, DateTime expireDate, double strikePrice, PutOrCall putCall)<br>Constructor from expiration date, strike price, and put/call indicator.  |
| void | **[setOpenInterest](classWombat_1_1MamdaOptionContract.html#function-setopeninterest)**(long openInterest)<br>Set the open interest size.  |
| void | **[setExerciseStyle](classWombat_1_1MamdaOptionContract.html#function-setexercisestyle)**(ExerciseStyle exerciseStyle)<br>Set the exercise style.  |
| string | **[getSymbol](classWombat_1_1MamdaOptionContract.html#function-getsymbol)**()<br>Return the OPRA contract symbol.  |
| string | **[getExchange](classWombat_1_1MamdaOptionContract.html#function-getexchange)**()<br>Return the exchange.  |
| DateTime | **[getExpireDate](classWombat_1_1MamdaOptionContract.html#function-getexpiredate)**()<br>Return the expiration date.  |
| string | **[getExpireDateStr](classWombat_1_1MamdaOptionContract.html#function-getexpiredatestr)**()<br>Return the expiration date as a commonly formatted string (MMyy).  |
| double | **[getStrikePrice](classWombat_1_1MamdaOptionContract.html#function-getstrikeprice)**()<br>Return the strike price.  |
| PutOrCall | **[getPutCall](classWombat_1_1MamdaOptionContract.html#function-getputcall)**()<br>Return the put/call indicator.  |
| long | **[getOpenInterest](classWombat_1_1MamdaOptionContract.html#function-getopeninterest)**()<br>Return the open interest.  |
| ExerciseStyle | **[getExerciseStyle](classWombat_1_1MamdaOptionContract.html#function-getexercisestyle)**()<br>Return the exercise style.  |
| void | **[addTradeHandler](classWombat_1_1MamdaOptionContract.html#function-addtradehandler)**([MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html) handler)<br>Add a [MamdaTradeHandler]() for handling trade updates to this option contract.  |
| void | **[addQuoteHandler](classWombat_1_1MamdaOptionContract.html#function-addquotehandler)**([MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html) handler)<br>Add a [MamdaQuoteHandler]() for handling quote updates to this option contract.  |
| void | **[addFundamentalHandler](classWombat_1_1MamdaOptionContract.html#function-addfundamentalhandler)**([MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html) handler)<br>Add a [MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html) for handling fundamental updates to this option contract.  |
| void | **[setCustomObject](classWombat_1_1MamdaOptionContract.html#function-setcustomobject)**(object obj)<br>Add a custom object to this option contract. Such an object might contain customer per-contract data.  |
| [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) | **[getTradeInfo](classWombat_1_1MamdaOptionContract.html#function-gettradeinfo)**()<br>Return the current trade fields.  |
| [MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html) | **[getQuoteInfo](classWombat_1_1MamdaOptionContract.html#function-getquoteinfo)**()<br>Return the current quote fields.  |
| [MamdaFundamentals](interfaceWombat_1_1MamdaFundamentals.html) | **[getFundamentalsInfo](classWombat_1_1MamdaOptionContract.html#function-getfundamentalsinfo)**()<br>Return the current fundamental fields.  |
| object | **[getCustomObject](classWombat_1_1MamdaOptionContract.html#function-getcustomobject)**()<br>Return the custom object.  |
| [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) | **[getTradeListener](classWombat_1_1MamdaOptionContract.html#function-gettradelistener)**()<br>Return the trade listener.  |
| [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) | **[getQuoteListener](classWombat_1_1MamdaOptionContract.html#function-getquotelistener)**()<br>Return the current quote listener.  |
| [MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html) | **[getFundamentalListener](classWombat_1_1MamdaOptionContract.html#function-getfundamentallistener)**()<br>Return the current fundamental listener.  |
| void | **[setInView](classWombat_1_1MamdaOptionContract.html#function-setinview)**(bool inView)<br>Set whether this contract is in the "view" within the option chain. [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) |
| bool | **[getInView](classWombat_1_1MamdaOptionContract.html#function-getinview)**()<br>Return whether this contract is in the "view" within the option chain. [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) |

## Detailed Description

```csharp
class Wombat::MamdaOptionContract;
```

A class that represents a single option contract. Instances of this object are typically created by the [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html). Applications may attach a custom object to each instance of [MamdaOptionContract](). 

Note: User applications can be notified of creation of [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) instances via the MamdaOptionChainListener.onOptionContractCreate() method. 

## Public Types Documentation

### enum PutOrCall

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | (byte)'Z'|   |
| Call | (byte)'C'|   |
| Put | (byte)'P'|   |




### enum ExerciseStyle

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Unknown | (byte)'Z'|   |
| American | (byte)'A'|   |
| European | (byte)'E'|   |
| Capped | (byte)'C'|   |




## Public Functions Documentation

### function MamdaOptionContract

```csharp
MamdaOptionContract(
    string symbol,
    string exchange,
    DateTime expireDate,
    double strikePrice,
    PutOrCall putCall
)
```

Constructor from expiration date, strike price, and put/call indicator. 

**Parameters**: 

  * **symbol** 
  * **exchange** 
  * **expireDate** 
  * **strikePrice** 
  * **putCall** 


### function setOpenInterest

```csharp
void setOpenInterest(
    long openInterest
)
```

Set the open interest size. 

**Parameters**: 

  * **openInterest** 


### function setExerciseStyle

```csharp
void setExerciseStyle(
    ExerciseStyle exerciseStyle
)
```

Set the exercise style. 

**Parameters**: 

  * **exerciseStyle** 


### function getSymbol

```csharp
string getSymbol()
```

Return the OPRA contract symbol. 

**Return**: 

### function getExchange

```csharp
string getExchange()
```

Return the exchange. 

**Return**: 

### function getExpireDate

```csharp
DateTime getExpireDate()
```

Return the expiration date. 

**Return**: 

### function getExpireDateStr

```csharp
string getExpireDateStr()
```

Return the expiration date as a commonly formatted string (MMyy). 

**Return**: 

### function getStrikePrice

```csharp
double getStrikePrice()
```

Return the strike price. 

**Return**: 

### function getPutCall

```csharp
PutOrCall getPutCall()
```

Return the put/call indicator. 

**Return**: 

### function getOpenInterest

```csharp
long getOpenInterest()
```

Return the open interest. 

**Return**: 

### function getExerciseStyle

```csharp
ExerciseStyle getExerciseStyle()
```

Return the exercise style. 

**Return**: 

### function addTradeHandler

```csharp
void addTradeHandler(
    MamdaTradeHandler handler
)
```

Add a [MamdaTradeHandler]() for handling trade updates to this option contract. 

**Parameters**: 

  * **handler** 


### function addQuoteHandler

```csharp
void addQuoteHandler(
    MamdaQuoteHandler handler
)
```

Add a [MamdaQuoteHandler]() for handling quote updates to this option contract. 

**Parameters**: 

  * **handler** 


### function addFundamentalHandler

```csharp
void addFundamentalHandler(
    MamdaFundamentalHandler handler
)
```

Add a [MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html) for handling fundamental updates to this option contract. 

**Parameters**: 

  * **handler** 


### function setCustomObject

```csharp
void setCustomObject(
    object obj
)
```

Add a custom object to this option contract. Such an object might contain customer per-contract data. 

**Parameters**: 

  * **obj** 


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

### function getFundamentalsInfo

```csharp
MamdaFundamentals getFundamentalsInfo()
```

Return the current fundamental fields. 

**Return**: 

### function getCustomObject

```csharp
object getCustomObject()
```

Return the custom object. 

**Return**: 

### function getTradeListener

```csharp
MamdaTradeListener getTradeListener()
```

Return the trade listener. 

**Return**: 

### function getQuoteListener

```csharp
MamdaQuoteListener getQuoteListener()
```

Return the current quote listener. 

**Return**: 

### function getFundamentalListener

```csharp
MamdaFundamentalListener getFundamentalListener()
```

Return the current fundamental listener. 

**Return**: 

### function setInView

```csharp
void setInView(
    bool inView
)
```

Set whether this contract is in the "view" within the option chain. [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html)

**Parameters**: 

  * **inView** 


### function getInView

```csharp
bool getInView()
```

Return whether this contract is in the "view" within the option chain. [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html)

**Return**: 

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100