---
title: Wombat::MamdaOptionChain
summary: MamdaOptionChain is a specialized class to represent market data option chains. The class has capabilities to store the current state of an entire option chain, or a subset of the chain. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionChain



[MamdaOptionChain]() is a specialized class to represent market data option chains. The class has capabilities to store the current state of an entire option chain, or a subset of the chain. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionChain](classWombat_1_1MamdaOptionChain.html#function-mamdaoptionchain)**(string symbol)<br>[MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) Constructor.  |
| void | **[setSymbol](classWombat_1_1MamdaOptionChain.html#function-setsymbol)**(string symbol)<br>Set the underlying symbol for the option chain.  |
| string | **[getSymbol](classWombat_1_1MamdaOptionChain.html#function-getsymbol)**()<br>Get the underlying symbol for the option chain.  |
| void | **[setUnderlyingQuoteListener](classWombat_1_1MamdaOptionChain.html#function-setunderlyingquotelistener)**([MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) quoteListener)<br>Set the underlying quote listener information. [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) does not use this class itself, but related classes might (e.g., [MamdaOptionChainView]()).  |
| void | **[setUnderlyingTradeListener](classWombat_1_1MamdaOptionChain.html#function-setunderlyingtradelistener)**([MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) tradeListener)<br>Set the underlying trade listener information. [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) uses this class to implement the atTheMoney() method. Related classes might (e.g., [MamdaOptionChainView]()) use it for other reasons.  |
| [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) | **[getUnderlyingQuoteListener](classWombat_1_1MamdaOptionChain.html#function-getunderlyingquotelistener)**()<br>Make the underlying quote listener available externally.  |
| [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) | **[getUnderlyingTradeListener](classWombat_1_1MamdaOptionChain.html#function-getunderlyingtradelistener)**()<br>Make the underlying trade listener available externally.  |
| [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) | **[getContract](classWombat_1_1MamdaOptionChain.html#function-getcontract)**(String contractSymbol)<br>Find an option contract by OPRA symbol.  |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[getExchanges](classWombat_1_1MamdaOptionChain.html#function-getexchanges)**()<br>Return the superset of regional exchange identifiers for any option in this chain. Each element in the set is a String object.  |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[getStrikePrices](classWombat_1_1MamdaOptionChain.html#function-getstrikeprices)**()<br>Return the superset of strike prices for this chain. Each element in the set is a Double object.  |
| void | **[addContract](classWombat_1_1MamdaOptionChain.html#function-addcontract)**(string contractSymbol, [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) contract)<br>Add an option contract. This method would not normally be invoked by a user application. Rather, [MamdaOptionChainListener]() would be most likely to call this method.  |
| void | **[removeContract](classWombat_1_1MamdaOptionChain.html#function-removecontract)**(string contractSymbol)<br>Remove an option contract. This method would not normally be invoked by a user application. Rather, [MamdaOptionChainListener]() would be most likely to call this method.  |
| double | **[getAtTheMoney](classWombat_1_1MamdaOptionChain.html#function-getatthemoney)**(MamdaOptionAtTheMoneyCompareType compareType)<br>Get the price of the option underlying. Determine the underlying price ("at the money"), based on the mode of calculation.  |
| bool | **[getIsPriceWithinPercentOfMoney](classWombat_1_1MamdaOptionChain.html#function-getispricewithinpercentofmoney)**(double price, double percentage, MamdaOptionAtTheMoneyCompareType compareType)<br>Return whether the price is within a % of the money. Determine whether some price (e.g. a strike price) is within a given percentage range of the underlying (at the money) price.  |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[getStrikesWithinPercent](classWombat_1_1MamdaOptionChain.html#function-getstrikeswithinpercent)**(double percentage, MamdaOptionAtTheMoneyCompareType compareType)<br>Determine the set of strike prices that are included in a given percentage range of the underlying price. If there are no strikes within the percentage range, then both strike prices are set to zero. MamdaOptionAtTheMoneyCompareType  |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[getStrikesWithinRangeSize](classWombat_1_1MamdaOptionChain.html#function-getstrikeswithinrangesize)**(int rangeLength, MamdaOptionAtTheMoneyCompareType compareType)<br>Determine the set of strike prices that are included in a given fixed size range of strikes surrounding the underlying price. If rangeLen is odd, then the strike price nearest to the underlying price is treated as a higher strike price. If rangeLen is even and the underlying price is exactly equal to a strike price, then that strike price is treated as a higher strike price. MamdaOptionAtTheMoneyCompareType  |
| [Iterator](interfaceWombat_1_1Containers_1_1Iterator.html) | **[callIterator](classWombat_1_1MamdaOptionChain.html#function-calliterator)**()<br>Return an iterator over all call option contracts. The type of object that Iterator.next() returns is  |
| [Iterator](interfaceWombat_1_1Containers_1_1Iterator.html) | **[putIterator](classWombat_1_1MamdaOptionChain.html#function-putiterator)**()<br>Return an iterator over all put option contracts. The type of object that Iterator.next() returns is [MamdaOptionContract]().  |
| [MamdaOptionExpirationDateSet](classWombat_1_1MamdaOptionExpirationDateSet.html) | **[getAllExpirations](classWombat_1_1MamdaOptionChain.html#function-getallexpirations)**()<br>Return a set of [MamdaOptionExpirationDateSet]().  |
| void | **[dump](classWombat_1_1MamdaOptionChain.html#function-dump)**()<br>Print the contents of the chain to standard out.  |

## Public Functions Documentation

### function MamdaOptionChain

```csharp
MamdaOptionChain(
    string symbol
)
```

[MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) Constructor. 

**Parameters**: 

  * **symbol** The underlying symbol.


### function setSymbol

```csharp
void setSymbol(
    string symbol
)
```

Set the underlying symbol for the option chain. 

**Parameters**: 

  * **symbol** The underlying symbol.


### function getSymbol

```csharp
string getSymbol()
```

Get the underlying symbol for the option chain. 

**Return**: The underlying symbol for the option chain.

### function setUnderlyingQuoteListener

```csharp
void setUnderlyingQuoteListener(
    MamdaQuoteListener quoteListener
)
```

Set the underlying quote listener information. [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) does not use this class itself, but related classes might (e.g., [MamdaOptionChainView]()). 

**Parameters**: 

  * **quoteListener** The quote listener for the chain.


### function setUnderlyingTradeListener

```csharp
void setUnderlyingTradeListener(
    MamdaTradeListener tradeListener
)
```

Set the underlying trade listener information. [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) uses this class to implement the atTheMoney() method. Related classes might (e.g., [MamdaOptionChainView]()) use it for other reasons. 

**Parameters**: 

  * **tradeListener** The trade listener for the chain.


### function getUnderlyingQuoteListener

```csharp
MamdaQuoteListener getUnderlyingQuoteListener()
```

Make the underlying quote listener available externally. 

**Return**: The quote listener for the chain.

### function getUnderlyingTradeListener

```csharp
MamdaTradeListener getUnderlyingTradeListener()
```

Make the underlying trade listener available externally. 

**Return**: The trade listener for the chain.

### function getContract

```csharp
MamdaOptionContract getContract(
    String contractSymbol
)
```

Find an option contract by OPRA symbol. 

**Parameters**: 

  * **contractSymbol** 


**Return**: [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) The contract object representing the option.

### function getExchanges

```csharp
SortedSet getExchanges()
```

Return the superset of regional exchange identifiers for any option in this chain. Each element in the set is a String object. 

**Return**: Set of regional exchange identifiers.

### function getStrikePrices

```csharp
SortedSet getStrikePrices()
```

Return the superset of strike prices for this chain. Each element in the set is a Double object. 

**Return**: Set of strike prices for the chain.

### function addContract

```csharp
void addContract(
    string contractSymbol,
    MamdaOptionContract contract
)
```

Add an option contract. This method would not normally be invoked by a user application. Rather, [MamdaOptionChainListener]() would be most likely to call this method. 

**Parameters**: 

  * **contractSymbol** The option instrument symbol.
  * **contract** The Mamda option contract representation.


### function removeContract

```csharp
void removeContract(
    string contractSymbol
)
```

Remove an option contract. This method would not normally be invoked by a user application. Rather, [MamdaOptionChainListener]() would be most likely to call this method. 

**Parameters**: 

  * **contractSymbol** 


### function getAtTheMoney

```csharp
double getAtTheMoney(
    MamdaOptionAtTheMoneyCompareType compareType
)
```

Get the price of the option underlying. Determine the underlying price ("at the money"), based on the mode of calculation. 

**Parameters**: 

  * **compareType** The mode of calculation [(MamdaOptionAtTheMoneyCompareType)]


**Return**: The price of the underlying.

### function getIsPriceWithinPercentOfMoney

```csharp
bool getIsPriceWithinPercentOfMoney(
    double price,
    double percentage,
    MamdaOptionAtTheMoneyCompareType compareType
)
```

Return whether the price is within a % of the money. Determine whether some price (e.g. a strike price) is within a given percentage range of the underlying (at the money) price. 

**Parameters**: 

  * **price** The strike price to check.
  * **percentage** What % to check the strike price against.
  * **compareType** What price we are checking against [(see MamdaOptionAtTheMoneyCompareType)]


**Return**: Whether the price is within % of the money.

### function getStrikesWithinPercent

```csharp
SortedSet getStrikesWithinPercent(
    double percentage,
    MamdaOptionAtTheMoneyCompareType compareType
)
```

Determine the set of strike prices that are included in a given percentage range of the underlying price. If there are no strikes within the percentage range, then both strike prices are set to zero. MamdaOptionAtTheMoneyCompareType 

**Parameters**: 

  * **percentage** The percentage range of the underlying price.
  * **compareType** Which underlying price to compare to.


**Return**: Set of strike prices.

### function getStrikesWithinRangeSize

```csharp
SortedSet getStrikesWithinRangeSize(
    int rangeLength,
    MamdaOptionAtTheMoneyCompareType compareType
)
```

Determine the set of strike prices that are included in a given fixed size range of strikes surrounding the underlying price. If rangeLen is odd, then the strike price nearest to the underlying price is treated as a higher strike price. If rangeLen is even and the underlying price is exactly equal to a strike price, then that strike price is treated as a higher strike price. MamdaOptionAtTheMoneyCompareType 

**Parameters**: 

  * **rangeLength** Number of strike prices to include in result. 
  * **compareType** What underlying price to use as a comparator.


**Return**: Resulting set of strike prices.

### function callIterator

```csharp
Iterator callIterator()
```

Return an iterator over all call option contracts. The type of object that Iterator.next() returns is 

**Return**: The iterator of call options.

`[MamdaOptionContract](classWombat_1_1MamdaOptionContract.html)`.


### function putIterator

```csharp
Iterator putIterator()
```

Return an iterator over all put option contracts. The type of object that Iterator.next() returns is [MamdaOptionContract](). 

**Return**: 

### function getAllExpirations

```csharp
MamdaOptionExpirationDateSet getAllExpirations()
```

Return a set of [MamdaOptionExpirationDateSet](). 

**Return**: Set of expiration dates.

### function dump

```csharp
void dump()
```

Print the contents of the chain to standard out. 

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100