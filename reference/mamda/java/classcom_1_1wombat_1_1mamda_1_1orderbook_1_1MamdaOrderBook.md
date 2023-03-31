---
title: com::wombat::mamda::orderbook::MamdaOrderBook
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBook



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-mamdaorderbook)**() |
| | **[MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-mamdaorderbook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) copy) |
| | **[MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-mamdaorderbook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) copy, boolean writeable) |
| boolean | **[isReadOnly](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-isreadonly)**() |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-clear)**() |
| void | **[setSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setsymbol)**(String symbol) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getsymbol)**() |
| void | **[setPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setpartid)**(String PartId) |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getpartid)**() |
| boolean | **[hasPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-haspartid)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[findOrCreateLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-findorcreatelevel)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[findLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-findlevel)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getMarketOrdersSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getmarketordersside)**(char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getOrCreateMarketOrdersSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getorcreatemarketordersside)**(char side) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-apply)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) deltaBook) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-apply)**([MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-apply)**([MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-apply)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[apply](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-apply)**([MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) deltaList) |
| void | **[copy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-copy)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[copyReadOnly](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-copyreadonly)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[setAsDeltaDeleted](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setasdeltadeleted)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) bookToDelete) |
| void | **[setAsDeltaDifference](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setasdeltadifference)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) lhs, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) rhs) |
| long | **[getTotalNumLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-gettotalnumlevels)**() |
| int | **[getNumBidLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getnumbidlevels)**() |
| int | **[getNumAskLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getnumasklevels)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getBidMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getbidmarketorders)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getAskMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getaskmarketorders)**() |
| MamaDateTime | **[getBookTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getbooktime)**() |
| void | **[setBookTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setbooktime)**(MamaDateTime value) |
| void | **[setSourceDerivative](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setsourcederivative)**(MamaSourceDerivative value) |
| MamaSourceDerivative | **[getSourceDerivative](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getsourcederivative)**() |
| MamaSource | **[getSource](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getsource)**() |
| void | **[setQuality](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setquality)**(short quality) |
| short | **[getQuality](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getquality)**() |
| void | **[setClosure](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setclosure)**(Object closure) |
| Object | **[getClosure](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getclosure)**() |
| int | **[hashCode](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-hashcode)**() |
| boolean | **[equals](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-equals)**(Object obj) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-addentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, double price, char side, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-addentry)**(String entryId, long entrySize, double price, char side, MamaDateTime eventTime, MamaSourceDerivative source, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[addLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-addlevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[updateLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-updatelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| boolean | **[populateDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-populatedelta)**(MamaMsg msg) |
| void | **[populateRecap](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-populaterecap)**(MamaMsg msg) |
| void | **[deleteLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-deletelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| boolean | **[reevaluate](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-reevaluate)**() |
| void | **[setNeedsReevaluation](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setneedsreevaluation)**(boolean need) |
| boolean | **[getNeedsReevaluation](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getneedsreevaluation)**() |
| void | **[setCheckSourceState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setchecksourcestate)**(boolean check) |
| boolean | **[getCheckSourceState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getchecksourcestate)**() |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getLevelAtPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getlevelatprice)**(double price, char side) |
| [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) | **[getLevelAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getlevelatposition)**(long pos, char side) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getEntryAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getentryatposition)**(long pos, char side) |
| void | **[assertEqual](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-assertequal)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) rhs) |
| void | **[assertEqual](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-assertequal)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) lhsLevel, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) rhsLevel) |
| void | **[setIsConsistent](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setisconsistent)**(boolean isConsistent) |
| boolean | **[getIsConsistent](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getisconsistent)**() |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-dump)**() |
| void | **[dump](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-dump)**(OutputStream outputStream) |
| void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-updateentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, double size, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[deleteEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-deleteentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, MamaDateTime eventTime, [MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html) delta) |
| void | **[addEntriesFromBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-addentriesfrombook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book, [MamdaOrderBookEntryFilter](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryFilter.html) filter, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[addPriceLevelsFromBookAsEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-addpricelevelsfrombookasentries)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book, String source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[deleteEntriesFromSource](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-deleteentriesfromsource)**(MamaSource source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[generateDeltaMsgs](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-generatedeltamsgs)**(boolean publish) |
| boolean | **[getGenerateDeltaMsgs](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-getgeneratedeltamsgs)**() |
| void | **[clearDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-cleardeltalist)**() |
| void | **[addDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-adddelta)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level, double plDeltaSize, char plAction, char entryAction) |
| void | **[detach](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-detach)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry) |
| void | **[detach](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-detach)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| Iterator | **[bidEntryIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-bidentryiterator)**() |
| Iterator | **[bidIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-biditerator)**() |
| Iterator | **[askIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-askiterator)**() |
| Iterator | **[askEntryIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-askentryiterator)**() |
| void | **[cleanupDetached](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-cleanupdetached)**() |
| void | **[setStrictChecking](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setstrictchecking)**(boolean strict) |

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBook;
```


[MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) is a class that provides order book functionality, including iterators over price levels and entries within price levels.

An order book may be read only or writeable. Copying into a read only book is faster than creating a writeable book. Calling methods that attempt to edit the book structure on a read only book will throw a [MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html). 

## Public Functions Documentation

### function MamdaOrderBook

```java
inline MamdaOrderBook()
```


Construct a new order book object. Contains no price levels upon construction. This book will be writeable. 


### function MamdaOrderBook

```java
inline MamdaOrderBook(
    MamdaOrderBook copy
)
```


**Parameters**: 

  * **copy** The book to copy. 


Construct a copy of the supplied orderbook.


### function MamdaOrderBook

```java
inline MamdaOrderBook(
    MamdaOrderBook copy,
    boolean writeable
)
```


**Parameters**: 

  * **copy** The book to copy. 
  * **writeable** is this copy writable. false creates a read only copy 


Construct a copy of the supplied orderbook.


### function isReadOnly

```java
inline boolean isReadOnly()
```


**Return**: true if this book is read only. 

If this book is read only. 


### function clear

```java
inline void clear()
```


Clear all levels from the order book. Clears both the bid and ask side levels from the order book. 


### function setSymbol

```java
inline void setSymbol(
    String symbol
)
```


**Parameters**: 

  * **symbol** the symbol. 


The order book subscription symbol. 


### function getSymbol

```java
inline String getSymbol()
```


**Return**: the symbol. 

The order book subscription symbol. 


### function setPartId

```java
inline void setPartId(
    String PartId
)
```


### function getPartId

```java
inline String getPartId()
```


### function hasPartId

```java
inline boolean hasPartId()
```


### function findOrCreateLevel

```java
inline MamdaOrderBookPriceLevel findOrCreateLevel(
    double price,
    char side
)
```


**Parameters**: 

  * **price** The price of the price level to find/create. 
  * **side** The side of the book of the price level to find/create.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** When an error is encountered during book processing. 


**Return**: The found or newly create price level.

Create a price level in the orderbook for the given price/size. The price level is initially empty and marked as "not used". The "not used" status changes automatically when entries are added to the price level.


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


**Parameters**: 

  * **deltaBook** The delta to apply to the order book.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Apply a delta to this (presumably) full book.


### function apply

```java
inline void apply(
    MamdaOrderBookBasicDelta delta
)
```


**Parameters**: 

  * **delta** The delta to apply.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Apply a `[MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html)` to this book.


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


### function apply

```java
inline void apply(
    MamdaOrderBookBasicDeltaList deltaList
)
```


**Parameters**: 

  * **deltaList** The deltas to apply.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Apply a `[MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html)` to this book.


### function copy

```java
inline void copy(
    MamdaOrderBook book
)
```


**Parameters**: 

  * **book** The order book to copy. 


Make a writeable deep copy of a book.


### function copyReadOnly

```java
inline void copyReadOnly(
    MamdaOrderBook book
)
```


**Parameters**: 

  * **book** The order book to copy. 


Make a read only deep copy of a book. This method is faster than the copy ([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) method.


### function setAsDeltaDeleted

```java
inline void setAsDeltaDeleted(
    MamdaOrderBook bookToDelete
)
```


**Parameters**: 

  * **bookToDelete** The book to be deleted.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Set this order book to be a delta that would, when applied, delete all of the fields in the bookToDelete.


### function setAsDeltaDifference

```java
inline void setAsDeltaDifference(
    MamdaOrderBook lhs,
    MamdaOrderBook rhs
)
```


**Parameters**: 

  * **lhs** An order book. 
  * **rhs** An order book.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Set this order book to be a delta that would, when applied, be the difference between to other books.


### function getTotalNumLevels

```java
inline long getTotalNumLevels()
```


**Return**: The total number of level in the order book. 

Get the total number of price levels (both sides of order book).


### function getNumBidLevels

```java
inline int getNumBidLevels()
```


**Return**: the number of bid levels. 

Get the number of bid levels.


### function getNumAskLevels

```java
inline int getNumAskLevels()
```


**Return**: the number of ask levels. 

Get the number of ask levels. 


### function getBidMarketOrders

```java
inline MamdaOrderBookPriceLevel getBidMarketOrders()
```


### function getAskMarketOrders

```java
inline MamdaOrderBookPriceLevel getAskMarketOrders()
```


### function getBookTime

```java
inline MamaDateTime getBookTime()
```


**Return**: return the book time. 

Return the book time. 


### function setBookTime

```java
inline void setBookTime(
    MamaDateTime value
)
```


**Parameters**: 

  * **value** The SourceDerivative. 


Set The SourceDerivative for this book. 


### function setSourceDerivative

```java
inline void setSourceDerivative(
    MamaSourceDerivative value
)
```


**Parameters**: 

  * **value** The SourceDerivative. 


Set The SourceDerivative for this book. 


### function getSourceDerivative

```java
inline MamaSourceDerivative getSourceDerivative()
```


**Return**: the SourceDerivative. 

Return the SourceDerivative for this book. 


### function getSource

```java
inline MamaSource getSource()
```


**Return**: The source. 

Get the MamaSource for this order book.


### function setQuality

```java
inline void setQuality(
    short quality
)
```


**Parameters**: 

  * **quality** The new quality. 


Set the mamaQuality for this order book.


### function getQuality

```java
inline short getQuality()
```


**Return**: The quality. 

Get the mamaQuality for this order book.


### function setClosure

```java
inline void setClosure(
    Object closure
)
```


**Parameters**: 

  * **closure** The closure. 


Set the order book closure handle.


### function getClosure

```java
inline Object getClosure()
```


**Return**: The orderbook closure. 

Get the order book closure handle.


### function hashCode

```java
inline int hashCode()
```


### function equals

```java
inline boolean equals(
    Object obj
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


**Parameters**: 

  * **entry** the entry 
  * **price** the price 
  * **side** the side (bid or ask) 
  * **eventTime** the event time. 
  * **delta** the delta.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Add an entry to the order book and (if "delta" is not NULL) record information about the delta related to this action.


### function addEntry

```java
inline MamdaOrderBookEntry addEntry(
    String entryId,
    long entrySize,
    double price,
    char side,
    MamaDateTime eventTime,
    MamaSourceDerivative source,
    MamdaOrderBookBasicDelta delta
)
```


**Parameters**: 

  * **price** the price 
  * **side** the side (bid or ask) 
  * **eventTime** the event time. 
  * **delta** the delta. 
  * **entryId** The id. 
  * **entrySize** the size 
  * **source** the MamaSourceDerivative. 


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


**Return**: the new entry.

Add an entry to the order book and (if "delta" is not NULL) record information about the delta related to this action. The new entry is returned. 


### function addLevel

```java
inline void addLevel(
    MamdaOrderBookPriceLevel level
)
```


**Parameters**: 

  * **level** The price level to add to the orderbook. 


Add a price level to the orderbook. 


### function updateLevel

```java
inline void updateLevel(
    MamdaOrderBookPriceLevel level
)
```


**Parameters**: 

  * **level** The details of the price level to update.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** When an error is encountered during book processing. 


Update an existing level in the orderbook.


### function populateDelta

```java
inline boolean populateDelta(
    MamaMsg msg
)
```


**Parameters**: 

  * **msg** A MamaMsg ref containing all changes to the current book. 


Populate a MamaMsg of the changes to this order book. This will include the changes from the last time this function was called or all changes from the initial state. 


### function populateRecap

```java
inline void populateRecap(
    MamaMsg msg
)
```


**Parameters**: 

  * **msg** A MamaMsg containing all book, price and entry (if applicable) details of the current book. 


Populate a MamaMsg with the current state of this order book. 


### function deleteLevel

```java
inline void deleteLevel(
    MamdaOrderBookPriceLevel level
)
```


**Parameters**: 

  * **level** The price level to delete from the orderbook.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** When an error is encountered during book processing. 


Delete a price level from the orderbook.


### function reevaluate

```java
inline boolean reevaluate()
```


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


**Return**: Whether the book info changed based on the re-evaluation.

Re-evaluate the order book. This would be performed after the status of sources and/or subsources of an "aggregated order
book" (i.e., a book built from multiple sources) have changed.


### function setNeedsReevaluation

```java
inline void setNeedsReevaluation(
    boolean need
)
```


**Parameters**: 

  * **need** true if books requires re-evaluation. 


Set whether this book needs a re-evaluation. 


### function getNeedsReevaluation

```java
inline boolean getNeedsReevaluation()
```


**Return**: true if the book needs re-evaluation. 

Get whether this book needs a re-evaluation. 


### function setCheckSourceState

```java
inline void setCheckSourceState(
    boolean check
)
```


**Parameters**: 

  * **check** true to check the MamaSourceState. 


Set whether to check the MamaSourceState when adding/deleting/re-evaluating entries in the book.


### function getCheckSourceState

```java
inline boolean getCheckSourceState()
```


**Return**: true if checking the MamaSourceState 

Get whether to check the MamaSourceState when adding/deleting/re-evaluating entries in the book. 


### function getLevelAtPrice

```java
inline MamdaOrderBookPriceLevel getLevelAtPrice(
    double price,
    char side
)
```


**Parameters**: 

  * **price** The price of the order book price level. 
  * **side** The side of the order book to search. 


**Return**: The order book price level or NULL if not found. 

Return the order book price level at "price" on "side" of the order book.


### function getLevelAtPosition

```java
inline MamdaOrderBookPriceLevel getLevelAtPosition(
    long pos,
    char side
)
```


**Parameters**: 

  * **pos** The position of the order book price level. 
  * **side** The side of the order book to search. 


**Return**: The order book price level or NULL if not found. 

Return the order book price level at position "pos" in the order book.


### function getEntryAtPosition

```java
inline MamdaOrderBookEntry getEntryAtPosition(
    long pos,
    char side
)
```


**Parameters**: 

  * **pos** The position of the order book entry. 
  * **side** The side of the order book to search. 


**Return**: The order book entry or NULL if not found. 

Return the order book entry at position "pos" in the order book.


### function assertEqual

```java
inline void assertEqual(
    MamdaOrderBook rhs
)
```


**Parameters**: 

  * **rhs** The order book to compare to the current book.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** The two books are not equal. 


Order book equality verification. A [MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html) is thrown if the books are not equal, along with the reason for the inequality.


### function assertEqual

```java
inline void assertEqual(
    MamdaOrderBookPriceLevel lhsLevel,
    MamdaOrderBookPriceLevel rhsLevel
)
```


**Parameters**: 

  * **lhsLevel** Left hand side price level to compare. 
  * **rhsLevel** Right hand side price level to compare.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** The two books are not equal. 


Order book level equality verification. A [MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html) is thrown if the books are not equal, along with the reason for the inequality.


### function setIsConsistent

```java
inline void setIsConsistent(
    boolean isConsistent
)
```


**Parameters**: 

  * **isConsistent** Whether the book is consistent. 


Set whether the order book is in a consistent or an an inconsistent state.


### function getIsConsistent

```java
inline boolean getIsConsistent()
```


**Return**: boolean Whether the book is in a consistent state. 

Get whether the order book is in a consistent or an an inconsistent state. The orderbook will be marked as inconsistent if a gap is detected by the Listener. The book will be marked consistent again once a full recap for the book has been obtained from the feed.


### function dump

```java
inline void dump()
```


Dump the order book to standard out. 


### function dump

```java
inline void dump(
    OutputStream outputStream
)
```


**Parameters**: 

  * **outputStream** the `OutputStream`


Dump the order book to an `OutputStream`. 


### function updateEntry

```java
inline void updateEntry(
    MamdaOrderBookEntry entry,
    double size,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
)
```


**Parameters**: 

  * **entry** the entry 
  * **size** the size 
  * **eventTime** the event time 
  * **delta** the delta.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Update an entry in the order book and (if "delta" is not NULL) record information about the delta related to this action. If the entry is not internally "wired" to the order book, a MamdaOrderBookInvalidEntry exception is thrown. 


### function deleteEntry

```java
inline void deleteEntry(
    MamdaOrderBookEntry entry,
    MamaDateTime eventTime,
    MamdaOrderBookBasicDelta delta
)
```


**Parameters**: 

  * **entry** the entry to detete. 
  * **eventTime** the event time. 
  * **delta** the delta


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Delete an entry in the order book and (if "delta" is not NULL) record information about the delta related to this action. If the entry is not internally "wired" to the order book, a MamdaOrderBookInvalidEntry exception is thrown. 


### function addEntriesFromBook

```java
inline void addEntriesFromBook(
    MamdaOrderBook book,
    MamdaOrderBookEntryFilter filter,
    MamdaOrderBookBasicDeltaList delta
)
```


**Parameters**: 

  * **book** The source book to add. 
  * **filter** If not NULL, a filter to apply to each entry. 
  * **delta** An optional delta to collect the added entries.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Add all entries from another book into this book.


### function addPriceLevelsFromBookAsEntries

```java
inline void addPriceLevelsFromBookAsEntries(
    MamdaOrderBook book,
    String source,
    MamdaOrderBookBasicDeltaList delta
)
```


**Parameters**: 

  * **book** The source book to add. 
  * **source** The name to use as the entry ID. 
  * **delta** An optional delta to collect the added entries.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Add all price levels from another book as entries (one per price level) into this book using "source" as the entryId for each entry.


### function deleteEntriesFromSource

```java
inline void deleteEntriesFromSource(
    MamaSource source,
    MamdaOrderBookBasicDeltaList delta
)
```


**Parameters**: 

  * **source** The source to match. 
  * **delta** An optional delta to collect the deleted entries.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Delete all entries in this book that have "source" as its MamaSource.


### function generateDeltaMsgs

```java
inline void generateDeltaMsgs(
    boolean publish
)
```


**Parameters**: 

  * **publish** Whether book delta generation is enabled. 


Enable the generation of book deltas for this book. When delta generation is enabled changes to the book are saved and can be popultaed to MamaMsgs. 


### function getGenerateDeltaMsgs

```java
inline boolean getGenerateDeltaMsgs()
```


**Return**: Whether book delta generation is enabled. 

Get whether book delta generation is enabled 


### function clearDeltaList

```java
inline void clearDeltaList()
```


clear the delta list using for storing generated deltas 


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


**Parameters**: 

  * **entry** [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) where change occurred. 
  * **level** [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) where change occurred. 
  * **plDeltaSize** Pricelevel size change. 
  * **plAction** Pricelevel action. 
  * **entryAction** Entry action. 


For book delta generation. Add a delta to the order book delta list for the publishing of order book data 


### function detach

```java
inline void detach(
    MamdaOrderBookEntry entry
)
```


**Parameters**: 

  * **entry** the entry to detach. 


NOOP FOR JAVA Adds the entry to the list of entries to be detached. 


### function detach

```java
inline void detach(
    MamdaOrderBookPriceLevel level
)
```


**Parameters**: 

  * **level** the level to detach.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** if called on a read only order book 


Detach a price level. 


### function bidEntryIterator

```java
inline Iterator bidEntryIterator()
```


**Return**: the iterator. 

Iterator for all the bid side entries in the book. 


### function bidIterator

```java
inline Iterator bidIterator()
```


**Return**: Iterator java.util.Iterator for the bid side price levels in the order book. 

Allows an application to iterate over all the bid side price levels in the order book.


### function askIterator

```java
inline Iterator askIterator()
```


**Return**: Iterator java.util.Iterator for the ask side price levels in the order book. 

Allows an application to iterate over all ask side price levels in the order book.


### function askEntryIterator

```java
inline Iterator askEntryIterator()
```


**Return**: the iterator. 

Iterator for all the ask side entries in the book. 


### function cleanupDetached

```java
inline void cleanupDetached()
```


### function setStrictChecking

```java
static inline void setStrictChecking(
    boolean strict
)
```


**Parameters**: 

  * **strict** the value for strict checking. 


Enforce strict checking of order book modifications (at the expense of some performance). This setting is passed on to the [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) and [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) classes. 


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100