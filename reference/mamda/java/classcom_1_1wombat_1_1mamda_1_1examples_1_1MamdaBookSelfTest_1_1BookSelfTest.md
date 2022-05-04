---
title: com::wombat::mamda::examples::MamdaBookSelfTest::BookSelfTest
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaBookSelfTest::BookSelfTest





Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookCheckerHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckerHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSuccess](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookSelfTest_1_1BookSelfTest.html#function-onsuccess)**([MamdaOrderBookCheckType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckType.html) checkType, final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) realTimeBook) |
| void | **[onInconclusive](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookSelfTest_1_1BookSelfTest.html#function-oninconclusive)**([MamdaOrderBookCheckType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckType.html) checkType, final String reason) |
| void | **[onFailure](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaBookSelfTest_1_1BookSelfTest.html#function-onfailure)**([MamdaOrderBookCheckType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckType.html) checkType, final String reason, final MamaMsg msg, final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) realTimeBook, final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) checkBook) |

## Public Functions Documentation

### function onSuccess

```java
inline void onSuccess(
    MamdaOrderBookCheckType checkType,
    final MamdaOrderBook realTimeBook
)
```


### function onInconclusive

```java
inline void onInconclusive(
    MamdaOrderBookCheckType checkType,
    final String reason
)
```


### function onFailure

```java
inline void onFailure(
    MamdaOrderBookCheckType checkType,
    final String reason,
    final MamaMsg msg,
    final MamdaOrderBook realTimeBook,
    final MamdaOrderBook checkBook
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100