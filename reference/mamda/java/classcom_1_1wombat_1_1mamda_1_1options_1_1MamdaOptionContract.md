---
title: com::wombat::mamda::options::MamdaOptionContract
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionContract



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-mamdaoptioncontract)**(String symbol, String exchange, Date expireDate, double strikePrice, char putCall) |
| void | **[setOpenInterest](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-setopeninterest)**(long openInterest) |
| void | **[setExerciseStyle](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-setexercisestyle)**(char exerciseStyle) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getsymbol)**() |
| String | **[getExchange](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getexchange)**() |
| Date | **[getExpireDate](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getexpiredate)**() |
| String | **[getExpireDateStr](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getexpiredatestr)**() |
| double | **[getStrikePrice](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getstrikeprice)**() |
| char | **[getPutCall](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getputcall)**() |
| long | **[getOpenInterest](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getopeninterest)**() |
| char | **[getExerciseStyle](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getexercisestyle)**() |
| void | **[addTradeHandler](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-addtradehandler)**([MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) handler) |
| void | **[addQuoteHandler](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-addquotehandler)**([MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) handler) |
| void | **[addFundamentalHandler](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-addfundamentalhandler)**([MamdaFundamentalHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentalHandler.html) handler) |
| void | **[setCustomObject](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-setcustomobject)**(Object object) |
| [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) | **[getTradeInfo](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-gettradeinfo)**() |
| [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) | **[getQuoteInfo](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getquoteinfo)**() |
| [MamdaFundamentals](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html) | **[getFundamentalsInfo](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getfundamentalsinfo)**() |
| Object | **[getCustomObject](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getcustomobject)**() |
| [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) | **[getTradeListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-gettradelistener)**() |
| [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) | **[getQuoteListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getquotelistener)**() |
| [MamdaFundamentalListener](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html) | **[getFundamentalListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getfundamentallistener)**() |
| void | **[setInView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-setinview)**(boolean inView) |
| boolean | **[getInView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#function-getinview)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final char | **[PC_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#variable-pc-unknown)**  |
| final char | **[PC_CALL](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#variable-pc-call)**  |
| final char | **[PC_PUT](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#variable-pc-put)**  |
| final char | **[EXERCISE_STYLE_AMERICAN](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#variable-exercise-style-american)**  |
| final char | **[EXERCISE_STYLE_EUROPEAN](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#variable-exercise-style-european)**  |
| final char | **[EXERCISE_STYLE_CAPPED](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#variable-exercise-style-capped)**  |
| final char | **[EXERCISE_STYLE_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html#variable-exercise-style-unknown)**  |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionContract;
```


A class that represents a single option contract. Instances of this object are typically created by the [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html). Applications may attach a custom object to each instance of [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html).

Note: User applications can be notified of creation of [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) instances via the MamdaOptionChainListener.onOptionContractCreate() method. 
Note: It is possible to provide individual [MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) and [MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) handlers for trades and quotes, even though the [MamdaOptionChainHandler](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html) also provides a general callback interface for updates to individual contracts. 

## Public Functions Documentation

### function MamdaOptionContract

```java
inline MamdaOptionContract(
    String symbol,
    String exchange,
    Date expireDate,
    double strikePrice,
    char putCall
)
```


Constructor from expiration date, strike price, and put/call indicator. 


### function setOpenInterest

```java
inline void setOpenInterest(
    long openInterest
)
```


Set the open interest size. 


### function setExerciseStyle

```java
inline void setExerciseStyle(
    char exerciseStyle
)
```


Set the exercise style. 


### function getSymbol

```java
inline String getSymbol()
```


Return the OPRA contract symbol. 


### function getExchange

```java
inline String getExchange()
```


Return the exchange. 


### function getExpireDate

```java
inline Date getExpireDate()
```


Return the expiration date. 


### function getExpireDateStr

```java
inline String getExpireDateStr()
```


Return the expiration date as a commonly formatted string (MMMyy). 


### function getStrikePrice

```java
inline double getStrikePrice()
```


Return the strike price. 


### function getPutCall

```java
inline char getPutCall()
```


Return the put/call indicator. 


### function getOpenInterest

```java
inline long getOpenInterest()
```


Return the open interest. 


### function getExerciseStyle

```java
inline char getExerciseStyle()
```


Return the exercise style. 


### function addTradeHandler

```java
inline void addTradeHandler(
    MamdaTradeHandler handler
)
```


Add a [MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) for handling trade updates to this option contract. 


### function addQuoteHandler

```java
inline void addQuoteHandler(
    MamdaQuoteHandler handler
)
```


Add a [MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) for handling quote updates to this option contract. 


### function addFundamentalHandler

```java
inline void addFundamentalHandler(
    MamdaFundamentalHandler handler
)
```


Add a [MamdaFundamentalHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentalHandler.html) for handling fundamental updates to this option contract. 


### function setCustomObject

```java
inline void setCustomObject(
    Object object
)
```


Add a custom object to this option contract. Such an object might contain customer per-contract data. 


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


### function getFundamentalsInfo

```java
inline MamdaFundamentals getFundamentalsInfo()
```


Return the current fundamental fields. 


### function getCustomObject

```java
inline Object getCustomObject()
```


Return the custom object. 


### function getTradeListener

```java
inline MamdaTradeListener getTradeListener()
```


Return the trade listener. 


### function getQuoteListener

```java
inline MamdaQuoteListener getQuoteListener()
```


Return the current quote listener. 


### function getFundamentalListener

```java
inline MamdaFundamentalListener getFundamentalListener()
```


Return the current fundamental listener. 


### function setInView

```java
inline void setInView(
    boolean inView
)
```


**See**: [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html)

Set whether this contract is in the "view" within the option chain. 


### function getInView

```java
inline boolean getInView()
```


**See**: [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html)

Return whether this contract is in the "view" within the option chain. 


## Public Attributes Documentation

### variable PC_UNKNOWN

```java
static final char PC_UNKNOWN = ' ';
```


### variable PC_CALL

```java
static final char PC_CALL = 'C';
```


### variable PC_PUT

```java
static final char PC_PUT = 'P';
```


### variable EXERCISE_STYLE_AMERICAN

```java
static final char EXERCISE_STYLE_AMERICAN = 'A';
```


### variable EXERCISE_STYLE_EUROPEAN

```java
static final char EXERCISE_STYLE_EUROPEAN = 'E';
```


### variable EXERCISE_STYLE_CAPPED

```java
static final char EXERCISE_STYLE_CAPPED = 'C';
```


### variable EXERCISE_STYLE_UNKNOWN

```java
static final char EXERCISE_STYLE_UNKNOWN = 'Z';
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100