---
title: com::wombat::mamda::orderbook::MamdaOrderBookException
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookException



 [More...](#detailed-description)

Inherits from RuntimeException

Inherited by [com.wombat.mamda.orderbook.MamdaOrderBookDuplicateEntryException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookDuplicateEntryException.html), [com.wombat.mamda.orderbook.MamdaOrderBookInvalidEntryException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookInvalidEntryException.html), [com.wombat.mamda.orderbook.MamdaOrderBookMissingEntryException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookMissingEntryException.html)

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookException;
```


[MamdaOrderBookException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookException.html) gets thrown when there is an inconsistency in the order book. This may be due to various reasons, including: the feed sending inconsistent data, undetected missed data , the program manipulating the order book independently of the [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html). 

-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100