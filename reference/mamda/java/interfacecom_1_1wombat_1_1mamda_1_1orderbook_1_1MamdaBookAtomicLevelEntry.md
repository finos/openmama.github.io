---
title: com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)

Inherited by [com.wombat.mamda.orderbook.MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| double | **[getPriceLevelPrice](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelprice)**() |
| MamaPrice | **[getPriceLevelMamaPrice](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelmamaprice)**() |
| double | **[getPriceLevelSize](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelsize)**() |
| char | **[getPriceLevelAction](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelaction)**() |
| char | **[getPriceLevelSide](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelside)**() |
| MamaDateTime | **[getPriceLevelTime](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpriceleveltime)**() |
| double | **[getPriceLevelNumEntries](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelnumentries)**() |
| long | **[getPriceLevelActNumEntries](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelactnumentries)**() |
| char | **[getPriceLevelEntryAction](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryaction)**() |
| char | **[getPriceLevelEntryReason](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryreason)**() |
| String | **[getPriceLevelEntryId](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryid)**() |
| long | **[getPriceLevelEntrySize](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentrysize)**() |
| MamaDateTime | **[getPriceLevelEntryTime](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentrytime)**() |
| Iterator | **[entryIterator](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-entryiterator)**() |
| boolean | **[isVisible](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-isvisible)**() |

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
class com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry;
```


[MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) is an interface that provides access to Price Level and Price Level Entry fields 

## Public Functions Documentation

### function getPriceLevelPrice

```java
double getPriceLevelPrice()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelPrice()](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelprice)

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelprice)


### function getPriceLevelMamaPrice

```java
MamaPrice getPriceLevelMamaPrice()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelMamaPrice()](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelmamaprice)

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelMamaPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelmamaprice)


### function getPriceLevelSize

```java
double getPriceLevelSize()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelSize()](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelsize)

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelsize)


### function getPriceLevelAction

```java
char getPriceLevelAction()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelAction()](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelaction)

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelaction)


### function getPriceLevelSide

```java
char getPriceLevelSide()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelSide()](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelside)

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelside)


### function getPriceLevelTime

```java
MamaDateTime getPriceLevelTime()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelTime()](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpriceleveltime)

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpriceleveltime)


### function getPriceLevelNumEntries

```java
double getPriceLevelNumEntries()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelNumEntries()](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumentries)

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelNumEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelnumentries)


### function getPriceLevelActNumEntries

```java
long getPriceLevelActNumEntries()
```


**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelActNumEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelactnumentries)


### function getPriceLevelEntryAction

```java
char getPriceLevelEntryAction()
```


**Return**: The orderbook entry action. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelEntryAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentryaction)


Order book entry action to apply to the full order book.

A : Add entry to the price level. U : Update existing entry in the price level. D : Delete existing entry from the price level.


### function getPriceLevelEntryReason

```java
char getPriceLevelEntryReason()
```


**Return**: The orderbook entry reason. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelEntryReason](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentryreason)


Reason for order book entry.


### function getPriceLevelEntryId

```java
String getPriceLevelEntryId()
```


**Return**: The entry id 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelEntryId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentryid)


Order book entry Id. (order ID, participant ID, etc.)


### function getPriceLevelEntrySize

```java
long getPriceLevelEntrySize()
```


**Return**: Order book entry size 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelEntrySize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentrysize)


Return the order book entry size


### function getPriceLevelEntryTime

```java
MamaDateTime getPriceLevelEntryTime()
```


**Return**: Time of order book entry update. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPriceLevelEntryTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentrytime)


Return the time of order book entry update.


### function entryIterator

```java
Iterator entryIterator()
```


**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::entryIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-entryiterator)


### function isVisible

```java
boolean isVisible()
```


**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaBookAtomicListener::isVisible](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-isvisible)


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100