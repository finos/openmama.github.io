---
title: com::wombat::mamda::options::MamdaOptionChain
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionChain



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-mamdaoptionchain)**(String symbol) |
| void | **[setSymbol](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-setsymbol)**(String symbol) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getsymbol)**() |
| void | **[setUnderlyingQuoteListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-setunderlyingquotelistener)**([MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) quoteListener) |
| void | **[setUnderlyingTradeListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-setunderlyingtradelistener)**([MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) tradeListener) |
| [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) | **[getUnderlyingQuoteListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getunderlyingquotelistener)**() |
| [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) | **[getUnderlyingTradeListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getunderlyingtradelistener)**() |
| [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) | **[getContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getcontract)**(String contractSymbol) |
| SortedSet | **[getExchanges](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getexchanges)**() |
| SortedSet | **[getStrikePrices](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getstrikeprices)**() |
| void | **[addContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-addcontract)**(String contractSymbol, [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract) |
| void | **[removeContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-removecontract)**(String contractSymbol) |
| double | **[getAtTheMoney](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getatthemoney)**(short compareType) |
| boolean | **[getIsPriceWithinPercentOfMoney](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getispricewithinpercentofmoney)**(double price, double percentage, short compareType) |
| SortedSet | **[getStrikesWithinPercent](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getstrikeswithinpercent)**(double percentage, short compareType) |
| SortedSet | **[getStrikesWithinRangeSize](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getstrikeswithinrangesize)**(int rangeLength, short compareType) |
| Iterator | **[callIterator](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-calliterator)**() |
| Iterator | **[putIterator](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-putiterator)**() |
| [MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html) | **[getAllExpirations](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-getallexpirations)**() |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html#function-dump)**() |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionChain;
```


[MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) is a specialized class to represent market data option chains. The class has capabilities to store the current state of an entire option chain, or a subset of the chain. 

## Public Functions Documentation

### function MamdaOptionChain

```java
inline MamdaOptionChain(
    String symbol
)
```


**Parameters**: 

  * **symbol** The underlying symbol. 


[MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) Constructor.


### function setSymbol

```java
inline void setSymbol(
    String symbol
)
```


**Parameters**: 

  * **symbol** The underlying symbol. 


Set the underlying symbol for the option chain.


### function getSymbol

```java
inline String getSymbol()
```


**Return**: String The underlying symbol for the option chain. 

Get the underlying symbol for the option chain.


### function setUnderlyingQuoteListener

```java
inline void setUnderlyingQuoteListener(
    MamdaQuoteListener quoteListener
)
```


**Parameters**: 

  * **quoteListener** The quote listener for the chain. 


Set the underlying quote listener information. [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) does not use this class itself, but related classes might (e.g., [MamdaOptionChainView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html)).


### function setUnderlyingTradeListener

```java
inline void setUnderlyingTradeListener(
    MamdaTradeListener tradeListener
)
```


**Parameters**: 

  * **tradeListener** The trade listener for the chain. 


Set the underlying trade listener information. [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) uses this class to implement the atTheMoney() method. Related classes might (e.g., [MamdaOptionChainView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html)) use it for other reasons.


### function getUnderlyingQuoteListener

```java
inline MamdaQuoteListener getUnderlyingQuoteListener()
```


**Return**: [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) The quote listener for the chain. 

Make the underlying quote listener available externally.


### function getUnderlyingTradeListener

```java
inline MamdaTradeListener getUnderlyingTradeListener()
```


**Return**: [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) The trade listener for the chain. 

Make the underlying trade listener available externally.


### function getContract

```java
inline MamdaOptionContract getContract(
    String contractSymbol
)
```


**Parameters**: 

  * **contractSymbol** The option symbol.


**Return**: [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) The contract object representing the option. 

Find an option contract by OPRA symbol.


### function getExchanges

```java
inline SortedSet getExchanges()
```


**Return**: SortedSet Set of regional exchange identifiers. 

Return the superset of regional exchange identifiers for any option in this chain. Each element in the set is a String object.


### function getStrikePrices

```java
inline SortedSet getStrikePrices()
```


**Return**: SortedSet Set of strike prices for the chain. 

Return the superset of strike prices for this chain. Each element in the set is a Double object.


### function addContract

```java
inline void addContract(
    String contractSymbol,
    MamdaOptionContract contract
)
```


**Parameters**: 

  * **contractSymbol** The option instrument symbol. 
  * **contract** The Mamda option contract representation. 


Add an option contract. This method would not normally be invoked by a user application. Rather, [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) would be most likely to call this method.


### function removeContract

```java
inline void removeContract(
    String contractSymbol
)
```


Remove an option contract. This method would not normally be invoked by a user application. Rather, [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) would be most likely to call this method. 


### function getAtTheMoney

```java
inline double getAtTheMoney(
    short compareType
)
```


**Parameters**: 

  * **compareType** The mode of calculation (`[MamdaOptionAtTheMoneyCompareType](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionAtTheMoneyCompareType.html)`)


**See**: [MamdaOptionAtTheMoneyCompareType](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionAtTheMoneyCompareType.html)

**Return**: double The price of the underlying.

Get the price of the option underlying. Determine the underlying price ("at the money"), based on the mode of calculation.


### function getIsPriceWithinPercentOfMoney

```java
inline boolean getIsPriceWithinPercentOfMoney(
    double price,
    double percentage,
    short compareType
)
```


**Parameters**: 

  * **price** The strike price to check. 
  * **percentage** What % to check the strike price against. 
  * **compareType** What price we are checking against (see `[MamdaOptionAtTheMoneyCompareType](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionAtTheMoneyCompareType.html)`)


**See**: [MamdaOptionAtTheMoneyCompareType](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionAtTheMoneyCompareType.html)

**Return**: boolean Whether the proce is within % of the money.

Return whether the price within a % of the money. Determine whether some price (e.g. a strike price) is within a given percentage range of the underlying (at the money) price.


### function getStrikesWithinPercent

```java
inline SortedSet getStrikesWithinPercent(
    double percentage,
    short compareType
)
```


**Parameters**: 

  * **percentage** The percentage range of the underlying price. 
  * **compareType** Which underlying price to compare to.


**See**: [MamdaOptionAtTheMoneyCompareType](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionAtTheMoneyCompareType.html)

**Return**: SortedSet Set of strike prices.

Determine the set of strike prices that are included in a given percentage range of the underlying price. If there are no strikes within the percentage range, then both strike prices are set to zero.


### function getStrikesWithinRangeSize

```java
inline SortedSet getStrikesWithinRangeSize(
    int rangeLength,
    short compareType
)
```


**Parameters**: 

  * **rangeLength** Number of strike prices to include in result. 
  * **compareType** What underlying price to use as a comparator.


**See**: [MamdaOptionAtTheMoneyCompareType](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionAtTheMoneyCompareType.html)

**Return**: SortedSet Resulting set of strike prices.

Determine the set of strike prices that are included in a given fixed size range of strikes surrounding the underlying price. If rangeLen is odd, then the strike price nearest to the underlying price is treated as a higher strike price. If rangeLen is even and the underlying price is exactly equal to a strike price, then that strike price is treated as a higher strike price.


### function callIterator

```java
inline Iterator callIterator()
```


**Return**: Iterator The iterator of call options. 

Return an iterator over all call option contracts. The type of object that Iterator.next() returns is `[MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html)`.


### function putIterator

```java
inline Iterator putIterator()
```


**Return**: Iterator The iterator of put options. 

Return an iterator over all put option contracts. The type of object that Iterator.next() returns is [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html).


### function getAllExpirations

```java
inline MamdaOptionExpirationDateSet getAllExpirations()
```


**Return**: [MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html) Set of expiration dates. 

Return a set of [MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html).


### function dump

```java
inline void dump()
```


Print the contents of the chain to standard out. 


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100