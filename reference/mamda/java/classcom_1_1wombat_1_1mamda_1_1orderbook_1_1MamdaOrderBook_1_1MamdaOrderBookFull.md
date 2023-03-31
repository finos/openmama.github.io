---
title: com::wombat::mamda::orderbook::MamdaOrderBook::MamdaOrderBookFull
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBook::MamdaOrderBookFull





Inherits from com.wombat.mamda.orderbook.MamdaOrderBook.MamdaOrderBookImpl

## Public Functions

|                | Name           |
| -------------- | -------------- |
| boolean | **[isReadOnly](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-isreadonly)**() |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-clear)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[findOrCreateLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-findorcreatelevel)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[findLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-findlevel)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getMarketOrdersSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-getmarketordersside)**(char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getOrCreateMarketOrdersSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-getorcreatemarketordersside)**(char side) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-apply)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) deltaBook) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-apply)**([MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-apply)**([MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-apply)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[atomicUpdateToOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-atomicupdatetoorderbookpricelevel)**([MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[atomiclevelEntryToOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-atomiclevelentrytoorderbookentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[copy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-copy)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| long | **[getTotalNumLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-gettotalnumlevels)**() |
| int | **[getNumBidLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-getnumbidlevels)**() |
| int | **[getNumAskLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-getnumasklevels)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getLevelAtPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-getlevelatprice)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getLevelAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-getlevelatposition)**(long pos, char side) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getEntryAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-getentryatposition)**(long pos, char side) |
| void | **[addLevelSideNoCopy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-addlevelsidenocopy)**(TreeMap bookSide, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-addentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-addentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, double price, char side, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-updateentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-updateentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, double size, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[deleteEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-deleteentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[deleteEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-deleteentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[addEntriesFromBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-addentriesfrombook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book, [MamdaOrderBookEntryFilter](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryFilter.html) filter, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[addPriceLevelsFromBookAsEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-addpricelevelsfrombookasentries)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book, String source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[deleteEntriesFromSource](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-deleteentriesfromsource)**(MamaSource source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[detach](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-detach)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[addLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-addlevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[updateLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-updatelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[deleteLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-deletelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[generateDeltaMsgs](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-generatedeltamsgs)**(boolean publish) |
| void | **[addDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-adddelta)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level, double plDeltaSize, char plAction, char entryAction) |
| Iterator | **[bidIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-biditerator)**() |
| Iterator | **[askIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-askiterator)**() |
| void | **[setAsDeltaDifference](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-setasdeltadifference)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) lhs, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) rhs) |
| void | **[setAsDeltaDeleted](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-setasdeltadeleted)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) bookToDelete) |
| boolean | **[reevaluate](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-reevaluate)**() |
| int | **[hashCode](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookFull.html#function-hashcode)**() |

## Public Functions Documentation

### function isReadOnly

```java
inline boolean isReadOnly()
```


### function clear

```java
inline void clear()
```


### function findOrCreateLevel

```java
inline MamdaOrderBookPriceLevel findOrCreateLevel(
    double price,
    char side
)
```


### function findLevel

```java
inline MamdaOrderBookPriceLevel findLevel(
    double price,
    char side
)
```


### function getMarketOrdersSide

```java
inline MamdaOrderBookPriceLevel getMarketOrdersSide(
    char side
)
```


### function getOrCreateMarketOrdersSide

```java
inline MamdaOrderBookPriceLevel getOrCreateMarketOrdersSide(
    char side
)
```


### function apply

```java
inline void apply(
    MamdaOrderBook deltaBook
)
```


### function apply

```java
inline void apply(
    MamdaOrderBookBasicDelta delta
)
```


### function apply

```java
inline void apply(
    MamdaBookAtomicLevel level
)
```


### function apply

```java
inline void apply(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function atomicUpdateToOrderBookPriceLevel

```java
inline MamdaOrderBookPriceLevel atomicUpdateToOrderBookPriceLevel(
    MamdaBookAtomicLevel level
)
```


### function atomiclevelEntryToOrderBookEntry

```java
inline MamdaOrderBookEntry atomiclevelEntryToOrderBookEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function copy

```java
inline void copy(
    MamdaOrderBook book
)
```


### function getTotalNumLevels

```java
inline long getTotalNumLevels()
```


### function getNumBidLevels

```java
inline int getNumBidLevels()
```


### function getNumAskLevels

```java
inline int getNumAskLevels()
```


### function getLevelAtPrice

```java
inline MamdaOrderBookPriceLevel getLevelAtPrice(
    double price,
    char side
)
```


### function getLevelAtPosition

```java
inline MamdaOrderBookPriceLevel getLevelAtPosition(
    long pos,
    char side
)
```


### function getEntryAtPosition

```java
inline MamdaOrderBookEntry getEntryAtPosition(
    long pos,
    char side
)
```


### function addLevelSideNoCopy

```java
inline void addLevelSideNoCopy(
    TreeMap bookSide,
    MamdaOrderBookPriceLevel level
)
```


### function addEntry

```java
inline void addEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function addEntry

```java
inline void addEntry(
    MamdaOrderBookEntry entry,
    double price,
    char side,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
)
```


### function updateEntry

```java
inline void updateEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function updateEntry

```java
inline void updateEntry(
    MamdaOrderBookEntry entry,
    double size,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
)
```


### function deleteEntry

```java
inline void deleteEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function deleteEntry

```java
inline void deleteEntry(
    MamdaOrderBookEntry entry,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
)
```


### function addEntriesFromBook

```java
inline void addEntriesFromBook(
    MamdaOrderBook book,
    MamdaOrderBookEntryFilter filter,
    MamdaOrderBookBasicDeltaList delta
)
```


### function addPriceLevelsFromBookAsEntries

```java
inline void addPriceLevelsFromBookAsEntries(
    MamdaOrderBook book,
    String source,
    MamdaOrderBookBasicDeltaList delta
)
```


### function deleteEntriesFromSource

```java
inline void deleteEntriesFromSource(
    MamaSource source,
    MamdaOrderBookBasicDeltaList delta
)
```


### function detach

```java
inline void detach(
    MamdaOrderBookPriceLevel level
)
```


### function addLevel

```java
inline void addLevel(
    MamdaOrderBookPriceLevel level
)
```


### function updateLevel

```java
inline void updateLevel(
    MamdaOrderBookPriceLevel level
)
```


### function deleteLevel

```java
inline void deleteLevel(
    MamdaOrderBookPriceLevel level
)
```


### function generateDeltaMsgs

```java
inline void generateDeltaMsgs(
    boolean publish
)
```


### function addDelta

```java
inline void addDelta(
    MamdaOrderBookEntry entry,
    MamdaOrderBookPriceLevel level,
    double plDeltaSize,
    char plAction,
    char entryAction
)
```


### function bidIterator

```java
inline Iterator bidIterator()
```


### function askIterator

```java
inline Iterator askIterator()
```


### function setAsDeltaDifference

```java
inline void setAsDeltaDifference(
    MamdaOrderBook lhs,
    MamdaOrderBook rhs
)
```


### function setAsDeltaDeleted

```java
inline void setAsDeltaDeleted(
    MamdaOrderBook bookToDelete
)
```


### function reevaluate

```java
inline boolean reevaluate()
```


### function hashCode

```java
inline int hashCode()
```


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100