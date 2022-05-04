---
title: com::wombat::mamda::orderbook::MamdaOrderBookBasicDeltaList
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookBasicDeltaList



 [More...](#detailed-description)

Inherited by [com.wombat.mamda.orderbook.MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-mamdaorderbookbasicdeltalist)**() |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-clear)**() |
| void | **[setKeepBasicDeltas](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-setkeepbasicdeltas)**(boolean keep) |
| int | **[getModifiedSides](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-getmodifiedsides)**() |
| void | **[add](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-add)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level, double plDeltaSize, char plAction, char entryAction) |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-getorderbook)**() |
| long | **[getSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-getsize)**() |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-dump)**(OutputStream output) |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-dump)**() |
| Iterator | **[iterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#function-iterator)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final int | **[MOD_SIDES_NONE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#variable-mod-sides-none)**  |
| final int | **[MOD_SIDES_BID](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#variable-mod-sides-bid)**  |
| final int | **[MOD_SIDES_ASK](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#variable-mod-sides-ask)**  |
| final int | **[MOD_SIDES_BID_AND_ASK](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html#variable-mod-sides-bid-and-ask)**  |

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookBasicDeltaList;
```


[MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) is a class that saves information about an order book delta that involves multiple entries and/or price levels. For example, a modified order may involve a price change that means moving an entry from one price level to another. A delta list is made up of several basic deltas, which can be iterated over by methods provided in the class. 

## Public Functions Documentation

### function MamdaOrderBookBasicDeltaList

```java
inline MamdaOrderBookBasicDeltaList()
```


### function clear

```java
inline void clear()
```


Clear the delta. 


### function setKeepBasicDeltas

```java
inline void setKeepBasicDeltas(
    boolean keep
)
```


**Parameters**: 

  * **keep** true if to keep the basic deltas. 


Set whether to actually keep the basic deltas. Many applications don't need the basic deltas and will iterate over part or all of the full book (with the deltas already applied). If this is set to true and an attempt is made to iterate over the basic deltas (by calling begin() or end()) then a [MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html) will be thrown. 


### function getModifiedSides

```java
inline int getModifiedSides()
```


**Return**: The modified side(s). 

Get which side(s) of the book have been modified by this complex update. This information may prevent the need for receivers of complex updates to iterate over one or other side of the book.


### function add

```java
inline void add(
    MamdaOrderBookEntry entry,
    MamdaOrderBookPriceLevel level,
    double plDeltaSize,
    char plAction,
    char entryAction
)
```


**Parameters**: 

  * **entry** the entry. 
  * **level** the level. 
  * **plDeltaSize** the delta size. 
  * **plAction** the price level action. 
  * **entryAction** the entry action. 


Add a basic delta. This method adds a [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) to the list. 


### function getOrderBook

```java
inline MamdaOrderBook getOrderBook()
```


**Return**: The order book related to this delta. 

Get the [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) object to which this delta belongs.


### function getSize

```java
inline long getSize()
```


**Return**: the number of deltas. 

Return the number of simple deltas in this complex delta. 


### function dump

```java
inline void dump(
    OutputStream output
)
```


**Parameters**: 

  * **output** The `OutputStream` to write the update to. 


Dump the complex update to the output stream.


### function dump

```java
inline void dump()
```


Dump the complex update to the output stream. 


### function iterator

```java
inline Iterator iterator()
```


## Public Attributes Documentation

### variable MOD_SIDES_NONE

```java
static final int MOD_SIDES_NONE = 0;
```


### variable MOD_SIDES_BID

```java
static final int MOD_SIDES_BID = 1;
```


### variable MOD_SIDES_ASK

```java
static final int MOD_SIDES_ASK = 2;
```


### variable MOD_SIDES_BID_AND_ASK

```java
static final int MOD_SIDES_BID_AND_ASK = 3;
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100