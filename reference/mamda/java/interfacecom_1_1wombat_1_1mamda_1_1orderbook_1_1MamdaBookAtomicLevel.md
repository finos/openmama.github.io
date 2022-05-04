---
title: com::wombat::mamda::orderbook::MamdaBookAtomicLevel
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaBookAtomicLevel



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)

Inherited by [com.wombat.mamda.orderbook.MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getPriceLevelNumLevels](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumlevels)**() |
| long | **[getPriceLevelNum](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelnum)**() |
| double | **[getPriceLevelPrice](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelprice)**() |
| MamaPrice | **[getPriceLevelMamaPrice](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelmamaprice)**() |
| double | **[getPriceLevelSize](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelsize)**() |
| long | **[getPriceLevelSizeChange](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelsizechange)**() |
| char | **[getPriceLevelAction](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelaction)**() |
| char | **[getPriceLevelSide](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelside)**() |
| MamaDateTime | **[getPriceLevelTime](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpriceleveltime)**() |
| double | **[getPriceLevelNumEntries](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumentries)**() |
| Iterator | **[entryIterator](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-entryiterator)**() |

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
class com::wombat::mamda::orderbook::MamdaBookAtomicLevel;
```


[MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) is an interface that provides access to trade related fields. 

## Public Functions Documentation

### function getPriceLevelNumLevels

```java
long getPriceLevelNumLevels()
```


**Return**: The number of price levels. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelNumLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelnumlevels)


Return the number of price levels in the order book update.


### function getPriceLevelNum

```java
long getPriceLevelNum()
```


**Return**: The position of this level in the update received. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelnum)


Return at which position this level is within an update containing a number of levels. (i.e. level m of n levels in the update)


### function getPriceLevelPrice

```java
double getPriceLevelPrice()
```


**Return**: The price level price. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelprice)


Return the price for this price level.


### function getPriceLevelMamaPrice

```java
MamaPrice getPriceLevelMamaPrice()
```


**Return**: The price level price. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelMamaPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelmamaprice)


Return the MamaPrice for this price level.


### function getPriceLevelSize

```java
double getPriceLevelSize()
```


**Return**: The number of entries in this price level. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelsize)


Return the number of order entries comprising this price level. 

 Not supported for V5 entry book updates.


### function getPriceLevelSizeChange

```java
long getPriceLevelSizeChange()
```


**Return**: The aggregate size at the current price level. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelSizeChange](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelsizechange)


Aggregate size at current price level. 

 Not supported for V5 entry book updates.


### function getPriceLevelAction

```java
char getPriceLevelAction()
```


**Return**: The price level action. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelaction)


The action to apply to the orderbook for this price level. Can have a value of: 

* A : Add a new price level 
* U : Update an existing price level 
* D : Delete an existing price level 
* C : Closing information for price level (often treat the same as Update). 
Not supported for V5 entry book updates.


### function getPriceLevelSide

```java
char getPriceLevelSide()
```


**Return**: The price level side. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelside)


Side of book at current price level.



* B : Bid side. Same as 'buy' side. 
* A : Ask side. Same as 'sell' side. 


### function getPriceLevelTime

```java
MamaDateTime getPriceLevelTime()
```


**Return**: The time of the orderbook price level. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpriceleveltime)


Time of order book price level.


### function getPriceLevelNumEntries

```java
double getPriceLevelNumEntries()
```


**Return**: The number of entries at the current price level. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelNumEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelnumentries)


Number of order book entries at current price level. 

 Not supported for V5 entry book updates.


### function entryIterator

```java
Iterator entryIterator()
```


**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::entryIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-entryiterator)


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100