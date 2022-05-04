---
title: com::wombat::mamda::orderbook::MamdaOrderBookPriceLevel
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookPriceLevel





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-mamdaorderbookpricelevel)**() |
| | **[MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-mamdaorderbookpricelevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) copy) |
| | **[MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-mamdaorderbookpricelevel)**(double price, char side) |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-clear)**() |
| void | **[copy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-copy)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) copy) |
| void | **[copy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-copy)**([MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) copy) |
| void | **[copy](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-copy)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) copy) |
| void | **[setPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setprice)**(MamaPrice price) |
| void | **[setPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setprice)**(double price) |
| void | **[setSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setsize)**(double size) |
| void | **[setSizeChange](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setsizechange)**(double size) |
| void | **[setNumEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setnumentries)**(double numEntries) |
| void | **[setSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setside)**(char side) |
| void | **[setAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setaction)**(char action) |
| void | **[setTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-settime)**(MamaDateTime time) |
| void | **[setOrderType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setordertype)**(char orderType) |
| char | **[getOrderType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getordertype)**() |
| boolean | **[empty](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-empty)**() |
| void | **[setDetails](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setdetails)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) level) |
| void | **[setDetails](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setdetails)**([MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[setDetails](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setdetails)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-addentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-addentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, long entryPosition) |
| void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-updateentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry) |
| void | **[updateEntryPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-updateentryposition)**(String entryId, long entryPosition) |
| void | **[updateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-updateentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[removeEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-removeentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry) |
| void | **[removeEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-removeentry)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| Iterator | **[entryIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-entryiterator)**() |
| void | **[checkNotExist](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-checknotexist)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry) |
| void | **[checkNotExist](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-checknotexist)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[markAllDeleted](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-markalldeleted)**() |
| void | **[setAsDifference](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setasdifference)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) lhs, [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) rhs) |
| MamaPrice | **[getPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getprice)**() |
| double | **[getSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getsize)**() |
| double | **[getSizeChange](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getsizechange)**() |
| double | **[getNumEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getnumentries)**() |
| int | **[getNumEntriesTotal](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getnumentriestotal)**() |
| char | **[getSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getside)**() |
| char | **[getAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getaction)**() |
| MamaDateTime | **[getTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-gettime)**() |
| void | **[assertEqual](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-assertequal)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) rhs) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getsymbol)**() |
| void | **[removeEntryById](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-removeentrybyid)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry) |
| void | **[removeEntryById](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-removeentrybyid)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[addEntriesFromLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-addentriesfromlevel)**([MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) bookLevel, [MamdaOrderBookEntryFilter](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryFilter.html) filter, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| void | **[deleteEntriesFromSource](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-deleteentriesfromsource)**(MamaSource source, [MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html) delta) |
| boolean | **[reevaluate](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-reevaluate)**() |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getEntryAtPosition](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getentryatposition)**(long pos) |
| long | **[getEntryPositionInPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getentrypositioninpricelevel)**(String entryId) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[findOrCreateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-findorcreateentry)**(String id) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[findOrCreateEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-findorcreateentry)**(String id, long entryPosition) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[findEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-findentry)**(String id) |
| void | **[setStrictChecking](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setstrictchecking)**(boolean strict) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-getorderbook)**() |
| void | **[setOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#function-setorderbook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final char | **[ACTION_ADD](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-action-add)**  |
| final char | **[ACTION_UPDATE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-action-update)**  |
| final char | **[ACTION_DELETE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-action-delete)**  |
| final char | **[ACTION_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-action-unknown)**  |
| final char | **[SIDE_BID](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-side-bid)**  |
| final char | **[SIDE_ASK](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-side-ask)**  |
| final char | **[SIDE_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-side-unknown)**  |
| final char | **[LEVEL_LIMIT](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-level-limit)**  |
| final char | **[LEVEL_MARKET](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-level-market)**  |
| final char | **[LEVEL_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html#variable-level-unknown)**  |

## Public Functions Documentation

### function MamdaOrderBookPriceLevel

```java
inline MamdaOrderBookPriceLevel()
```


Default constructor. 


### function MamdaOrderBookPriceLevel

```java
inline MamdaOrderBookPriceLevel(
    MamdaOrderBookPriceLevel copy
)
```


**Parameters**: 

  * **copy** The [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) to copy. 


Construct a price level object which is a shallow copy of the original.


### function MamdaOrderBookPriceLevel

```java
inline MamdaOrderBookPriceLevel(
    double price,
    char side
)
```


### function clear

```java
inline void clear()
```


Clear the pricelevel 


### function copy

```java
inline void copy(
    MamdaOrderBookPriceLevel copy
)
```


**Parameters**: 

  * **copy** The [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) to copy. 


Copy a price level object which is an exact and deep copy of the original.


### function copy

```java
inline void copy(
    MamdaBookAtomicLevel copy
)
```


**Parameters**: 

  * **copy** The [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) to copy. 


Copy an atomic price level object which is an exact and deep copy of the original.


### function copy

```java
inline void copy(
    MamdaBookAtomicLevelEntry copy
)
```


**Parameters**: 

  * **copy** The [MamdaOrderBookPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookPriceLevel.html) to copy. 


Copy a price level object which is an exact and deep copy of the original.


### function setPrice

```java
inline void setPrice(
    MamaPrice price
)
```


### function setPrice

```java
inline void setPrice(
    double price
)
```


### function setSize

```java
inline void setSize(
    double size
)
```


### function setSizeChange

```java
inline void setSizeChange(
    double size
)
```


### function setNumEntries

```java
inline void setNumEntries(
    double numEntries
)
```


### function setSide

```java
inline void setSide(
    char side
)
```


### function setAction

```java
inline void setAction(
    char action
)
```


### function setTime

```java
inline void setTime(
    MamaDateTime time
)
```


### function setOrderType

```java
inline void setOrderType(
    char orderType
)
```


### function getOrderType

```java
inline char getOrderType()
```


### function empty

```java
inline boolean empty()
```


**Return**: Whether there are no entries for this level. 

Return whether there are no entries for this level.


### function setDetails

```java
inline void setDetails(
    MamdaOrderBookPriceLevel level
)
```


**Parameters**: 

  * **level** The price level object from which the details are being obtained. 


Take the details from `level` and apply them to this level. This does not update entries within the level, only information pertaining to the level itself. It is intended that this method should not be used externally to the API.


### function setDetails

```java
inline void setDetails(
    MamdaBookAtomicLevel level
)
```


**Parameters**: 

  * **level** The atomic price level object from which the details are being obtained. 


Take the details from `atomic level` and apply them to this level. This does not update entries within the level, only information pertaining to the level itself. It is intended that this method should not be used externally to the API.


### function setDetails

```java
inline void setDetails(
    MamdaBookAtomicLevelEntry levelEntry
)
```


**Parameters**: 

  * **levelEntry** The atomic price levelEntry object from which the details are being obtained. 


Take the details from `atomic levelEntry` and apply them to this levelEntry. This update entries within the level. It is intended that this method should not be used externally to the API.


### function addEntry

```java
inline void addEntry(
    MamdaOrderBookEntry entry
)
```


**Parameters**: 

  * **entry** The new entry to be added to the level.


**See**: [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)

Add a new order book entry to the price level.


### function addEntry

```java
inline void addEntry(
    MamdaOrderBookEntry entry,
    long entryPosition
)
```


**Parameters**: 

  * **entry** The new entry to be added to the level. 
  * **entryPosition** The position (indexed from 1) where the entry should be added. 


**See**: [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)

Add a new order book entry to the price level at a specified position.


### function updateEntry

```java
inline void updateEntry(
    MamdaOrderBookEntry entry
)
```


**Parameters**: 

  * **entry** An instance of `[MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)` with the new details for the entry in the level.


**See**: [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)

Update the details of an existing entry in the level.


### function updateEntryPosition

```java
inline void updateEntryPosition(
    String entryId,
    long entryPosition
)
```


**Parameters**: 

  * **entry** An instance of `[MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)` with the new details for the entry in the level. 
  * **entryPosition** Position of the Entry within the Price Level.


**See**: [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)

Update the entry position of an existing entry in the level.


### function updateEntry

```java
inline void updateEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


**Parameters**: 

  * **levelEntry** An instance of `[MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html)` with the new details for the entry in the level.


**See**: [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)

Update the details of an existing entry in the level, where the update details are provied by an atomic levelEntry. 


### function removeEntry

```java
inline void removeEntry(
    MamdaOrderBookEntry entry
)
```


**Parameters**: 

  * **entry** The entry which is to be removed from the price level.


**See**: [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)

Remove an order book entry from the price level.


### function removeEntry

```java
inline void removeEntry(
    MamdaBookAtomicLevelEntry levelEntry
)
```


**Parameters**: 

  * **levelEntry** The entry which is to be removed from the price level.


**See**: [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)

Remove an order book entry from the price level, where the delete details are provied by an atomic levelEntry.


### function entryIterator

```java
inline Iterator entryIterator()
```


**Return**: Iterator The iterator for the price level entries 

Returns a `java.util.Iterator` for all entries within this level. Price Level entries are represented by the `[MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)` class.


### function checkNotExist

```java
inline void checkNotExist(
    MamdaOrderBookEntry entry
)
```


**Parameters**: 

  * **entry** The entry whose presence in the level is being determined.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** If the entry is found in the price level. 


If the provided order book entry exists in the price level a `[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)` exception is thrown. Otherwise the method simply returns.


### function checkNotExist

```java
inline void checkNotExist(
    MamdaBookAtomicLevelEntry levelEntry
)
```


**Parameters**: 

  * **levelEntry** The entry whose presence in the level is being determined.


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** If the entry is found in the price level. 


If the provided levelEntry entry exists in the price level, as a OrderBookEntry, a `[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)` exception is thrown. Otherwise the method simply returns.


### function markAllDeleted

```java
inline void markAllDeleted()
```


Mark everything in this price level as deleted, including entries. 


### function setAsDifference

```java
inline void setAsDifference(
    MamdaOrderBookPriceLevel lhs,
    MamdaOrderBookPriceLevel rhs
)
```


### function getPrice

```java
inline MamaPrice getPrice()
```


**Return**: The price for this level. 

Return the price for this level. 


### function getSize

```java
inline double getSize()
```


**Return**: The total size for this level. 

Return the total size (across all entries) for this level. 


### function getSizeChange

```java
inline double getSizeChange()
```


**Return**: The changed size for this level. 

Return the size change for this (presumably delta) level. This attribute is only of interest for delta order books. For full order books, this field will be equal to the size of the price level.


### function getNumEntries

```java
inline double getNumEntries()
```


**Return**: The actual number of entries for this level. 

Return the actual number of entries for this level. The actual number of entries may not equate to the number of entries that can be iterated over if: (a) the feed does not provide the actual entries, or (b) the price level is just a delta.


### function getNumEntriesTotal

```java
inline int getNumEntriesTotal()
```


### function getSide

```java
inline char getSide()
```


**Return**: The side of the book for this level. 

Return the side (bid/ask) of the book for this level. 


### function getAction

```java
inline char getAction()
```


**Return**: The action for this level. 

Return the action for this price level. All price levels for a full book are marked with ACTION_ADD.


### function getTime

```java
inline MamaDateTime getTime()
```


**Return**: The time stamp for when the price level was last updated. 

Return the time stamp for when the price level was last updated. 


### function assertEqual

```java
inline void assertEqual(
    MamdaOrderBookPriceLevel rhs
)
```


**Exceptions**: 

  * **[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html)** 


Order book price level equality verification. A [MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html) is thrown if the price levels are not equal, along with the reason for the inequality.


### function getSymbol

```java
inline String getSymbol()
```


### function removeEntryById

```java
inline void removeEntryById(
    MamdaOrderBookEntry entry
)
```


### function removeEntryById

```java
inline void removeEntryById(
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function addEntriesFromLevel

```java
inline void addEntriesFromLevel(
    MamdaOrderBookPriceLevel bookLevel,
    MamdaOrderBookEntryFilter filter,
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


### function reevaluate

```java
inline boolean reevaluate()
```


**Return**: Whether the book info changed based on the re-evaluation. 

Re-evaluate the price level. This would be performed after the status of sources and/or subsources of an "aggregated order
book" (i.e., a book built from multiple sources) have changed.


### function getEntryAtPosition

```java
inline MamdaOrderBookEntry getEntryAtPosition(
    long pos
)
```


**Parameters**: 

  * **pos** The position of the order book entry. 


**Return**: The order book entry or NULL if not found. 

Return the order book entry at position "pos" in the price level.


### function getEntryPositionInPriceLevel

```java
inline long getEntryPositionInPriceLevel(
    String entryId
)
```


**Parameters**: 

  * **EntryId** The position of the order book entry. 


**Return**: The position of the Entry in the Price Level. Indexed from 1. 

Return the position of an Entry within the Price Level.


### function findOrCreateEntry

```java
inline MamdaOrderBookEntry findOrCreateEntry(
    String id
)
```


### function findOrCreateEntry

```java
inline MamdaOrderBookEntry findOrCreateEntry(
    String id,
    long entryPosition
)
```


### function findEntry

```java
inline MamdaOrderBookEntry findEntry(
    String id
)
```


### function setStrictChecking

```java
static inline void setStrictChecking(
    boolean strict
)
```


Enforce strict checking of order book modifications (at the expense of some performance). This setting is automatically updated by [MamdaOrderBook::setStrictChecking()](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html#function-setstrictchecking). 


## Protected Functions Documentation

### function getOrderBook

```java
inline MamdaOrderBook getOrderBook()
```


### function setOrderBook

```java
inline void setOrderBook(
    MamdaOrderBook book
)
```


## Public Attributes Documentation

### variable ACTION_ADD

```java
static final char ACTION_ADD = 'A';
```


### variable ACTION_UPDATE

```java
static final char ACTION_UPDATE = 'U';
```


A new price level. 


### variable ACTION_DELETE

```java
static final char ACTION_DELETE = 'D';
```


Updated price level. 


### variable ACTION_UNKNOWN

```java
static final char ACTION_UNKNOWN = 'Z';
```


Deleted price level. 


### variable SIDE_BID

```java
static final char SIDE_BID = 'B';
```


Unknown action (error). 


### variable SIDE_ASK

```java
static final char SIDE_ASK = 'A';
```


Bid (buy) side. 


### variable SIDE_UNKNOWN

```java
static final char SIDE_UNKNOWN = 'Z';
```


Ask (sell) side. 


### variable LEVEL_LIMIT

```java
static final char LEVEL_LIMIT = 'L';
```


Unknown side (error). 


### variable LEVEL_MARKET

```java
static final char LEVEL_MARKET = 'M';
```


LIMIT order 


### variable LEVEL_UNKNOWN

```java
static final char LEVEL_UNKNOWN = 'U';
```


MARKET order 


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100