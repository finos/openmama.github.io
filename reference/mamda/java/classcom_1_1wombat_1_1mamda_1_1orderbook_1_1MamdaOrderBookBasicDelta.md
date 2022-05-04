---
title: com::wombat::mamda::orderbook::MamdaOrderBookBasicDelta
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookBasicDelta



 [More...](#detailed-description)

Inherited by [com.wombat.mamda.orderbook.MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html)

## Public Functions

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

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookBasicDelta;
```


[MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) is a class that saves information about a basic order book delta. A basic delta is one that affects a single order book entry. 

## Public Functions Documentation

### function MamdaOrderBookBasicDelta

```java
inline MamdaOrderBookBasicDelta()
```


### function MamdaOrderBookBasicDelta

```java
inline MamdaOrderBookBasicDelta(
    MamdaOrderBookBasicDelta source
)
```


### function clear

```java
inline void clear()
```


Clear the delta. 


### function set

```java
inline void set(
    MamdaOrderBookEntry entry,
    MamdaOrderBookPriceLevel level,
    double plDeltaSize,
    char plAction,
    char entryAction
)
```


**Parameters**: 

  * **entry** The entry 
  * **level** The level 
  * **plDeltaSize** The delta size 
  * **plAction** The price level action 
  * **entryAction** The entry action 


Set the delta info. 


### function setPriceLevel

```java
inline void setPriceLevel(
    MamdaOrderBookPriceLevel level
)
```


**Parameters**: 

  * **level** The price level to be associated with. 


Set the [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) object to which this entry belongs. This method is invoked internally, by the MAMDA API, when an entry is added to a price level.


### function setPlDeltaAction

```java
inline void setPlDeltaAction(
    char action
)
```


**Parameters**: 

  * **action** The price level action. 


Set the delta action with respect to the price level.


### function getPriceLevel

```java
inline MamdaOrderBookPriceLevel getPriceLevel()
```


**Return**: The price level. 

Get the [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) object related to this basic delta.


### function getEntry

```java
inline MamdaOrderBookEntry getEntry()
```


**Return**: The entry. 

Get the [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) object related to this basic delta.


### function getPlDeltaSize

```java
inline double getPlDeltaSize()
```


**Return**: The price level size delta. 

Get the difference in size for the price level.


### function getPlDeltaAction

```java
inline char getPlDeltaAction()
```


**Return**: The price level action. 

Get the delta action with respect to the price level.


### function getEntryDeltaAction

```java
inline char getEntryDeltaAction()
```


**Return**: The entry action. 

Get the delta action with respect to the entry.


### function getOrderBook

```java
inline MamdaOrderBook getOrderBook()
```


**Return**: The order book related to this delta. 

Get the [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) object to which this delta belongs.


### function dump

```java
inline void dump(
    OutputStream output
)
```


**Parameters**: 

  * **output** The `OutputStream` to write the update to. 


Dump the simple update to the output stream.


### function dump

```java
inline void dump()
```


Dump the simple update to the output stream. 


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100