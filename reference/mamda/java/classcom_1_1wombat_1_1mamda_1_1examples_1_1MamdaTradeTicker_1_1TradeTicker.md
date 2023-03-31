---
title: com::wombat::mamda::examples::MamdaTradeTicker::TradeTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaTradeTicker::TradeTicker





Inherits from [com.wombat.mamda.MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTradeRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaTradeTicker_1_1TradeTicker.html#function-ontraderecap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeReport](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaTradeTicker_1_1TradeTicker.html#function-ontradereport)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html) trade, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaTradeTicker_1_1TradeTicker.html#function-ontradegap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html) event, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCancelOrError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaTradeTicker_1_1TradeTicker.html#function-ontradecancelorerror)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeCancelOrError](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html) event, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCorrection](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaTradeTicker_1_1TradeTicker.html#function-ontradecorrection)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeCorrection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html) event, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeClosing](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaTradeTicker_1_1TradeTicker.html#function-ontradeclosing)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html) event, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaTradeTicker_1_1TradeTicker.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaTradeTicker_1_1TradeTicker.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |

## Public Functions Documentation

### function onTradeRecap

```java
inline void onTradeRecap(
    final MamdaSubscription sub,
    final MamdaTradeListener listener,
    final MamaMsg msg,
    final MamdaTradeRecap recap
)
```


### function onTradeReport

```java
inline void onTradeReport(
    final MamdaSubscription sub,
    final MamdaTradeListener listener,
    final MamaMsg msg,
    final MamdaTradeReport trade,
    final MamdaTradeRecap recap
)
```


### function onTradeGap

```java
inline void onTradeGap(
    final MamdaSubscription sub,
    final MamdaTradeListener listener,
    final MamaMsg msg,
    final MamdaTradeGap event,
    final MamdaTradeRecap recap
)
```


### function onTradeCancelOrError

```java
inline void onTradeCancelOrError(
    final MamdaSubscription sub,
    final MamdaTradeListener listener,
    final MamaMsg msg,
    final MamdaTradeCancelOrError event,
    final MamdaTradeRecap recap
)
```


### function onTradeCorrection

```java
inline void onTradeCorrection(
    final MamdaSubscription sub,
    final MamdaTradeListener listener,
    final MamaMsg msg,
    final MamdaTradeCorrection event,
    final MamdaTradeRecap recap
)
```


### function onTradeClosing

```java
inline void onTradeClosing(
    final MamdaSubscription sub,
    final MamdaTradeListener listener,
    final MamaMsg msg,
    final MamdaTradeClosing event,
    final MamdaTradeRecap recap
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

Updated on 2023-03-31 at 15:30:37 +0100