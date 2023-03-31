---
title: com::wombat::mamda::orderbook::MamdaOrderBook::MamdaOrderBookCopy
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBook::MamdaOrderBookCopy





Inherits from com.wombat.mamda.orderbook.MamdaOrderBook.MamdaOrderBookImpl

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookCopy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-mamdaorderbookcopy)**() |
| | **[MamdaOrderBookCopy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-mamdaorderbookcopy)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) copy) |
| boolean | **[isReadOnly](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-isreadonly)**() |
| void | **[copy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-copy)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-clear)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[findOrCreateLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-findorcreatelevel)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[findLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-findlevel)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getMarketOrdersSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getmarketordersside)**(char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getOrCreateMarketOrdersSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getorcreatemarketordersside)**(char side) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-apply)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) deltaBook) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-apply)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-apply)**([MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-apply)**([MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| long | **[getTotalNumLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-gettotalnumlevels)**() |
| int | **[getNumBidLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getnumbidlevels)**() |
| int | **[getNumAskLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getnumasklevels)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getBidMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getbidmarketorders)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getAskMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getaskmarketorders)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getLevelAtPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getlevelatprice)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getLevelAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getlevelatposition)**(long pos, char side) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getEntryAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-getentryatposition)**(long pos, char side) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-addentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[addLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-addlevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[updateLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-updatelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[deleteLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-deletelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-updateentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[deleteEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-deleteentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-addentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, double price, char side, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-updateentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, double size, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[deleteEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-deleteentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[addEntriesFromBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-addentriesfrombook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book, [MamdaOrderBookEntryFilter](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryFilter.html) filter, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[addPriceLevelsFromBookAsEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-addpricelevelsfrombookasentries)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book, String source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[generateDeltaMsgs](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-generatedeltamsgs)**(boolean publish) |
| void | **[addDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-adddelta)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level, double plDeltaSize, char plAction, char entryAction) |
| void | **[deleteEntriesFromSource](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-deleteentriesfromsource)**(MamaSource source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[detach](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-detach)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[setAsDeltaDifference](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-setasdeltadifference)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) lhs, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) rhs) |
| void | **[setAsDeltaDeleted](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-setasdeltadeleted)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) bookToDelete) |
| boolean | **[reevaluate](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-reevaluate)**() |
| int | **[hashCode](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-hashcode)**() |
| Iterator | **[bidIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-biditerator)**() |
| Iterator | **[askIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook_1_1MamdaOrderBookCopy.html#function-askiterator)**() |

## Public Functions Documentation

### function MamdaOrderBookCopy

```java
inline MamdaOrderBookCopy()
```


### function MamdaOrderBookCopy

```java
inline MamdaOrderBookCopy(
    MamdaOrderBook copy
)
```


### function isReadOnly

```java
inline boolean isReadOnly()
```


### function copy

```java
inline void copy(
    MamdaOrderBook book
)
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
    MamdaBookAtomicLevelEntry levelEntry
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
    MamdaOrderBookBasicDelta delta
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


### function getBidMarketOrders

```java
inline MamdaOrderBookPriceLevel getBidMarketOrders()
```


### function getAskMarketOrders

```java
inline MamdaOrderBookPriceLevel getAskMarketOrders()
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


### function addEntry

```java
inline void addEntry(
    MamdaBookAtomicLevelEntry levelEntry
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


### function updateEntry

```java
inline void updateEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function deleteEntry

```java
inline void deleteEntry(
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
    MamdaOrderBookEntry entry,
    double size,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
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


### function bidIterator

```java
inline Iterator bidIterator()
```


### function askIterator

```java
inline Iterator askIterator()
```


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100