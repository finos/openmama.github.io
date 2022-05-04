---
title: com::wombat::mamda::orderbook::MamdaOrderBookDuplicateEntryException
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookDuplicateEntryException





Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html), RuntimeException

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookDuplicateEntryException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookDuplicateEntryException.html#function-mamdaorderbookduplicateentryexception)**([MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) origEntry, [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) dupEntry) |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getOrigEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookDuplicateEntryException.html#function-getorigentry)**() |
| [MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html) | **[getDupEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookDuplicateEntryException.html#function-getdupentry)**() |

## Public Functions Documentation

### function MamdaOrderBookDuplicateEntryException

```java
inline MamdaOrderBookDuplicateEntryException(
    MamdaOrderBookEntry origEntry,
    MamdaOrderBookEntry dupEntry
)
```


### function getOrigEntry

```java
inline MamdaOrderBookEntry getOrigEntry()
```


### function getDupEntry

```java
inline MamdaOrderBookEntry getDupEntry()
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100