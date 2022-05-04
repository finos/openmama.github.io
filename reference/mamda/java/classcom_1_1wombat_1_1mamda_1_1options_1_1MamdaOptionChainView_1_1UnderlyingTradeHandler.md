---
title: com::wombat::mamda::options::MamdaOptionChainView::UnderlyingTradeHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionChainView::UnderlyingTradeHandler





Inherits from [com.wombat.mamda.MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTradeRecap](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontraderecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeReport](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradereport)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html) trade, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeGap](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradegap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCancelOrError](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradecancelorerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeCancelOrError](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCorrection](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradecorrection)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeCorrection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeClosing](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradeclosing)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |

## Public Functions Documentation

### function onTradeRecap

```java
inline void onTradeRecap(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeRecap recap
)
```


### function onTradeReport

```java
inline void onTradeReport(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeReport trade,
    MamdaTradeRecap recap
)
```


### function onTradeGap

```java
inline void onTradeGap(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeGap event,
    MamdaTradeRecap recap
)
```


### function onTradeCancelOrError

```java
inline void onTradeCancelOrError(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeCancelOrError event,
    MamdaTradeRecap recap
)
```


### function onTradeCorrection

```java
inline void onTradeCorrection(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeCorrection event,
    MamdaTradeRecap recap
)
```


### function onTradeClosing

```java
inline void onTradeClosing(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeClosing event,
    MamdaTradeRecap recap
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100