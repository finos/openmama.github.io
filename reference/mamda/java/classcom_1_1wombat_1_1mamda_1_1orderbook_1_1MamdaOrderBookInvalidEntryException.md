---
title: com::wombat::mamda::orderbook::MamdaOrderBookInvalidEntryException
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookInvalidEntryException





Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html), RuntimeException

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookInvalidEntryException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookInvalidEntryException.html#function-mamdaorderbookinvalidentryexception)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) entry, String s) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getInvalidEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookInvalidEntryException.html#function-getinvalidentry)**() |
| | **[MamdaOrderBookInvalidEntryException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookInvalidEntryException.html#function-mamdaorderbookinvalidentryexception)**([MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry, String s) |
| [MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) | **[getInvalidLevelEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookInvalidEntryException.html#function-getinvalidlevelentry)**() |

## Public Functions Documentation

### function MamdaOrderBookInvalidEntryException

```java
inline MamdaOrderBookInvalidEntryException(
    MamdaOrderBookEntry entry,
    String s
)
```


### function getInvalidEntry

```java
inline MamdaOrderBookEntry getInvalidEntry()
```


### function MamdaOrderBookInvalidEntryException

```java
inline MamdaOrderBookInvalidEntryException(
    MamdaBookAtomicLevelEntry levelEntry,
    String s
)
```


### function getInvalidLevelEntry

```java
inline MamdaBookAtomicLevelEntry getInvalidLevelEntry()
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100