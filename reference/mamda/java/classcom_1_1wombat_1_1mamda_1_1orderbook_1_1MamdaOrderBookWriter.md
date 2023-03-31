---
title: com::wombat::mamda::orderbook::MamdaOrderBookWriter
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookWriter





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookWriter](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-mamdaorderbookwriter)**() |
| void | **[BookWriterClear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-bookwriterclear)**() |
| void | **[populateMsg](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-populatemsg)**(MamaMsg msg, [MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html) delta) |
| void | **[populateMsg](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-populatemsg)**(MamaMsg msg, [MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html) delta) |
| void | **[populateMsg](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-populatemsg)**(MamaMsg msg, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[addSimpleDeltaFields](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-addsimpledeltafields)**(MamaMsg msg, [MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html) delta) |
| void | **[addComplexDeltaFields](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-addcomplexdeltafields)**(MamaMsg msg, [MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html) delta) |
| void | **[addBookLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-addbooklevel)**(MamaMsg msg, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level, double plDeltaSize, char plDeltaAction, MamaDateTime bookTime) |
| void | **[addBookLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-addbooklevels)**(MamaMsg msg, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[addBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-addbookentry)**(MamaMsg msg, [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, char entryDeltaAction, MamaDateTime plTime) |
| void | **[addBookLevelEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#function-addbooklevelentries)**(MamaMsg plMsg, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [BookMsgHolder](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1BookMsgHolder.html) | **[mPriceLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#variable-mpricelevels)**  |
| [BookMsgHolder](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1BookMsgHolder.html) | **[mEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#variable-mentries)**  |
| char | **[defaultPlAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#variable-defaultplaction)**  |
| char | **[defaultPlSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#variable-defaultplside)**  |
| char | **[defaultEntryAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#variable-defaultentryaction)**  |
| int | **[defaultNumEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#variable-defaultnumentries)**  |
| int | **[defaultNumAttachedEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookWriter.html#variable-defaultnumattachedentries)**  |

## Public Functions Documentation

### function MamdaOrderBookWriter

```java
inline MamdaOrderBookWriter()
```


### function BookWriterClear

```java
inline void BookWriterClear()
```


### function populateMsg

```java
inline void populateMsg(
    MamaMsg msg,
    MamdaOrderBookComplexDelta delta
)
```


### function populateMsg

```java
inline void populateMsg(
    MamaMsg msg,
    MamdaOrderBookSimpleDelta delta
)
```


### function populateMsg

```java
inline void populateMsg(
    MamaMsg msg,
    MamdaOrderBook book
)
```


### function addSimpleDeltaFields

```java
inline void addSimpleDeltaFields(
    MamaMsg msg,
    MamdaOrderBookSimpleDelta delta
)
```


### function addComplexDeltaFields

```java
inline void addComplexDeltaFields(
    MamaMsg msg,
    MamdaOrderBookComplexDelta delta
)
```


### function addBookLevel

```java
inline void addBookLevel(
    MamaMsg msg,
    MamdaOrderBookPriceLevel level,
    double plDeltaSize,
    char plDeltaAction,
    MamaDateTime bookTime
)
```


### function addBookLevels

```java
inline void addBookLevels(
    MamaMsg msg,
    MamdaOrderBook book
)
```


### function addBookEntry

```java
inline void addBookEntry(
    MamaMsg msg,
    MamdaOrderBookEntry entry,
    char entryDeltaAction,
    MamaDateTime plTime
)
```


### function addBookLevelEntries

```java
inline void addBookLevelEntries(
    MamaMsg plMsg,
    MamdaOrderBookPriceLevel level
)
```


## Public Attributes Documentation

### variable mPriceLevels

```java
BookMsgHolder mPriceLevels = null;
```


### variable mEntries

```java
BookMsgHolder mEntries = null;
```


### variable defaultPlAction

```java
static char defaultPlAction = MamdaOrderBookTypes.MAMDA_BOOK_ACTION_ADD;
```


### variable defaultPlSide

```java
static char defaultPlSide = MamdaOrderBookTypes.MAMDA_BOOK_SIDE_BID;
```


### variable defaultEntryAction

```java
static char defaultEntryAction = MamdaOrderBookTypes.MAMDA_BOOK_ACTION_DELETE;
```


### variable defaultNumEntries

```java
static int defaultNumEntries = 1;
```


### variable defaultNumAttachedEntries

```java
static int defaultNumAttachedEntries = 1;
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100