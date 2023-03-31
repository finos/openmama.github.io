---
title: com::wombat::mamda::examples::MamdaListenerBookPublisher::BookTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaListenerBookPublisher::BookTicker





Inherits from [com.wombat.mamda.orderbook.MamdaOrderBookHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[callMamdaOnMsg](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1BookTicker.html#function-callmamdaonmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, MamaMsg msg) |
| void | **[onBookDelta](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1BookTicker.html#function-onbookdelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html) delta, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[onBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1BookTicker.html#function-onbookcomplexdelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html) delta, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[onBookClear](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1BookTicker.html#function-onbookclear)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookClear](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookClear.html) event, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[onBookRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1BookTicker.html#function-onbookrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html) delta, [MamdaOrderBookRecap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookRecap.html) event, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[onBookGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1BookTicker.html#function-onbookgap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) listener, MamaMsg msg, [MamdaOrderBookGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookGap.html) event, [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) fullBook) |

## Public Functions Documentation

### function callMamdaOnMsg

```java
inline void callMamdaOnMsg(
    MamdaSubscription sub,
    MamaMsg msg
)
```


### function onBookDelta

```java
inline void onBookDelta(
    MamdaSubscription sub,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookSimpleDelta delta,
    MamdaOrderBook book
)
```


### function onBookComplexDelta

```java
inline void onBookComplexDelta(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookComplexDelta delta,
    MamdaOrderBook book
)
```


### function onBookClear

```java
inline void onBookClear(
    MamdaSubscription subscription,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookClear event,
    MamdaOrderBook book
)
```


### function onBookRecap

```java
inline void onBookRecap(
    MamdaSubscription sub,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookComplexDelta delta,
    MamdaOrderBookRecap event,
    MamdaOrderBook book
)
```


### function onBookGap

```java
inline void onBookGap(
    MamdaSubscription sub,
    MamdaOrderBookListener listener,
    MamaMsg msg,
    MamdaOrderBookGap event,
    MamdaOrderBook fullBook
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100