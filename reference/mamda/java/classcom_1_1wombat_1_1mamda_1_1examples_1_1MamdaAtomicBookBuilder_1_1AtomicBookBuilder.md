---
title: com::wombat::mamda::examples::MamdaAtomicBookBuilder::AtomicBookBuilder
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaAtomicBookBuilder::AtomicBookBuilder





Inherits from [com.wombat.mamda.orderbook.MamdaBookAtomicBookHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicBookHandler.html), [com.wombat.mamda.orderbook.MamdaBookAtomicLevelEntryHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntryHandler.html), [com.wombat.mamda.orderbook.MamdaBookAtomicLevelHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[AtomicBookBuilder](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-atomicbookbuilder)**(String symbol) |
| void | **[onBookAtomicBeginBook](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onbookatomicbeginbook)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, boolean isRecap) |
| void | **[onBookAtomicClear](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onbookatomicclear)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg) |
| void | **[onBookAtomicGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onbookatomicgap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicGap.html) event) |
| void | **[onBookAtomicEndBook](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onbookatomicendbook)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener) |
| void | **[onBookAtomicLevelRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onbookatomiclevelrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[onBookAtomicLevelDelta](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onbookatomicleveldelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[onBookAtomicLevelEntryRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onbookatomiclevelentryrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[onBookAtomicLevelEntryDelta](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onbookatomiclevelentrydelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[setShowMarketOrders](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-setshowmarketorders)**(boolean showMarketOrders) |
| void | **[prettyPrint](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-prettyprint)**(final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[prettyPrintLevels](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-prettyprintlevels)**(final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| void | **[prettyPrintEntries](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookBuilder_1_1AtomicBookBuilder.html#function-prettyprintentries)**(final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |

## Public Functions Documentation

### function AtomicBookBuilder

```java
inline AtomicBookBuilder(
    String symbol
)
```


### function onBookAtomicBeginBook

```java
inline void onBookAtomicBeginBook(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    boolean isRecap
)
```


### function onBookAtomicClear

```java
inline void onBookAtomicClear(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg
)
```


### function onBookAtomicGap

```java
inline void onBookAtomicGap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicGap event
)
```


### function onBookAtomicEndBook

```java
inline void onBookAtomicEndBook(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener
)
```


### function onBookAtomicLevelRecap

```java
inline void onBookAtomicLevelRecap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevel level
)
```


### function onBookAtomicLevelDelta

```java
inline void onBookAtomicLevelDelta(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevel level
)
```


### function onBookAtomicLevelEntryRecap

```java
inline void onBookAtomicLevelEntryRecap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function onBookAtomicLevelEntryDelta

```java
inline void onBookAtomicLevelEntryDelta(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevelEntry levelEntry
)
```


### function onError

```java
inline void onError(
    MamdaSubscription subscription,
    short severity,
    short errorCode,
    String errorStr
)
```


### function onStale

```java
inline void onStale(
    MamdaSubscription subscription,
    short quality
)
```


### function setShowMarketOrders

```java
inline void setShowMarketOrders(
    boolean showMarketOrders
)
```


### function prettyPrint

```java
inline void prettyPrint(
    final MamdaOrderBook book
)
```


### function prettyPrintLevels

```java
inline void prettyPrintLevels(
    final MamdaOrderBook book
)
```


### function prettyPrintEntries

```java
inline void prettyPrintEntries(
    final MamdaOrderBook book
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100