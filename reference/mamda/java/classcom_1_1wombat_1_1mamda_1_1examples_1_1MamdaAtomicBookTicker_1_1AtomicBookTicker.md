---
title: com::wombat::mamda::examples::MamdaAtomicBookTicker::AtomicBookTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaAtomicBookTicker::AtomicBookTicker





Inherits from [com.wombat.mamda.orderbook.MamdaBookAtomicBookHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicBookHandler.html), [com.wombat.mamda.orderbook.MamdaBookAtomicLevelHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelHandler.html), [com.wombat.mamda.orderbook.MamdaBookAtomicLevelEntryHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntryHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookAtomicLevelRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onbookatomiclevelrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[onBookAtomicBeginBook](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onbookatomicbeginbook)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, boolean isRecap) |
| void | **[onBookAtomicClear](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onbookatomicclear)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg) |
| void | **[onBookAtomicGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onbookatomicgap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicGap.html) event) |
| void | **[onBookAtomicEndBook](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onbookatomicendbook)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener) |
| void | **[onBookAtomicLevelEntryRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onbookatomiclevelentryrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[onBookAtomicLevelDelta](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onbookatomicleveldelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[onBookAtomicLevelEntryDelta](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onbookatomiclevelentrydelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[setShowMarketOrders](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAtomicBookTicker_1_1AtomicBookTicker.html#function-setshowmarketorders)**(boolean showMarketOrders) |

## Public Functions Documentation

### function onBookAtomicLevelRecap

```java
inline void onBookAtomicLevelRecap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevel level
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


### function onBookAtomicLevelEntryRecap

```java
inline void onBookAtomicLevelEntryRecap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevelEntry levelEntry
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


-------------------------------

Updated on 2023-03-31 at 15:30:36 +0100