---
title: com::wombat::mamda::examples::MamdaAuctionTicker::AuctionTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaAuctionTicker::AuctionTicker





Inherits from [com.wombat.mamda.MamdaAuctionHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onAuctionRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAuctionTicker_1_1AuctionTicker.html#function-onauctionrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html) listener, MamaMsg msg, [MamdaAuctionRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html) recap) |
| void | **[onAuctionUpdate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAuctionTicker_1_1AuctionTicker.html#function-onauctionupdate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html) listener, MamaMsg msg, [MamdaAuctionRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html) recap, [MamdaAuctionUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionUpdate.html) update) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAuctionTicker_1_1AuctionTicker.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaAuctionTicker_1_1AuctionTicker.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |

## Public Functions Documentation

### function onAuctionRecap

```java
inline void onAuctionRecap(
    MamdaSubscription subscription,
    MamdaAuctionListener listener,
    MamaMsg msg,
    MamdaAuctionRecap recap
)
```


### function onAuctionUpdate

```java
inline void onAuctionUpdate(
    MamdaSubscription subscription,
    MamdaAuctionListener listener,
    MamaMsg msg,
    MamdaAuctionRecap recap,
    MamdaAuctionUpdate update
)
```


### function onStale

```java
inline void onStale(
    MamdaSubscription subscription,
    short quality
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


-------------------------------

Updated on 2023-03-31 at 15:30:36 +0100