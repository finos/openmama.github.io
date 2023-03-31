---
title: com::wombat::mamda::orderbook::MamdaOrderBookEntryManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookEntryManager





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookEntryManager](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html#function-mamdaorderbookentrymanager)**(int approxCount) |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html#function-clear)**() |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html#function-clear)**(String symbol) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html#function-addentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry) |
| void | **[addEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html#function-addentry)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, String entryId) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[findEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html#function-findentry)**(String entryId, boolean mustExist) |
| void | **[removeEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html#function-removeentry)**(String entryId) |

## Public Functions Documentation

### function MamdaOrderBookEntryManager

```java
inline MamdaOrderBookEntryManager(
    int approxCount
)
```


**Parameters**: 

  * **approxCount** Approximate number of entries. 


Default constructor. Create an empty order book entry manager. 


### function clear

```java
inline void clear()
```


Clear all entries from the manager. 


### function clear

```java
inline void clear(
    String symbol
)
```


**Parameters**: 

  * **symbol** the symbol. 


Clear all entries for a particular symbol from the manager. 


### function addEntry

```java
inline void addEntry(
    MamdaOrderBookEntry entry
)
```


**Parameters**: 

  * **entry** the entry to add. 


Add an entry to the manager. This method may throw a MamdaOrderBookDuplicateEntry exception. 


### function addEntry

```java
inline void addEntry(
    MamdaOrderBookEntry entry,
    String entryId
)
```


**Parameters**: 

  * **entry** the entry to add. 
  * **entryId** the entry id to use. 


Add an entry to the manager using a specific entry ID, which may be different from the entry's entry ID. This method may throw a MamdaOrderBookDuplicateEntry exception. 


### function findEntry

```java
inline MamdaOrderBookEntry findEntry(
    String entryId,
    boolean mustExist
)
```


**Parameters**: 

  * **entryId** The entry id to search for. 
  * **mustExist** true if the entry must exist. 


**Return**: the entry if found. 

Find an entry in the manager. If no entry matches the unique entry ID and "mustExist" is true then a [MamdaOrderBookMissingEntryException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookMissingEntryException.html) exception is thrown, otherwise it returns NULL. 


### function removeEntry

```java
inline void removeEntry(
    String entryId
)
```


**Parameters**: 

  * **entryId** the id for the entry to be removed. 


Remove an entry from the manager. This method does not actually delete the [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) object itself. 


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100