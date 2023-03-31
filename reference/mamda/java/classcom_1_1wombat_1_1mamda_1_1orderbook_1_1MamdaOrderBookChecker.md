---
title: com::wombat::mamda::orderbook::MamdaOrderBookChecker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookChecker





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookChecker](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookChecker.html#function-mamdaorderbookchecker)**(MamaTransport transport, MamaQueue queue, [MamdaOrderBookCheckerHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckerHandler.html) handler, final String source, final String symbol, double intervalSeconds) |
| | **[MamdaOrderBookChecker](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookChecker.html#function-mamdaorderbookchecker)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) realTimeSubsc, [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) realTimeListener, [MamdaOrderBookCheckerHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckerHandler.html) handler, double intervalSeconds) |
| long | **[getSuccessCount](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookChecker.html#function-getsuccesscount)**() |
| long | **[getInconclusiveCount](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookChecker.html#function-getinconclusivecount)**() |
| long | **[getFailureCount](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookChecker.html#function-getfailurecount)**() |
| void | **[checkSnapShotNow](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookChecker.html#function-checksnapshotnow)**() |

## Public Functions Documentation

### function MamdaOrderBookChecker

```java
inline MamdaOrderBookChecker(
    MamaTransport transport,
    MamaQueue queue,
    MamdaOrderBookCheckerHandler handler,
    final String source,
    final String symbol,
    double intervalSeconds
)
```


### function MamdaOrderBookChecker

```java
inline MamdaOrderBookChecker(
    final MamdaSubscription realTimeSubsc,
    MamdaOrderBookListener realTimeListener,
    MamdaOrderBookCheckerHandler handler,
    double intervalSeconds
)
```


### function getSuccessCount

```java
inline long getSuccessCount()
```


### function getInconclusiveCount

```java
inline long getInconclusiveCount()
```


### function getFailureCount

```java
inline long getFailureCount()
```


### function checkSnapShotNow

```java
inline void checkSnapShotNow()
```


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100