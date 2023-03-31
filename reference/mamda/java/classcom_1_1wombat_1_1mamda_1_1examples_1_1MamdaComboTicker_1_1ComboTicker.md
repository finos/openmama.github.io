---
title: com::wombat::mamda::examples::MamdaComboTicker::ComboTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaComboTicker::ComboTicker





Inherits from [com.wombat.mamda.MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html), [com.wombat.mamda.MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html), [com.wombat.mamda.MamdaSecurityStatusHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTradeRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-ontraderecap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeReport](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-ontradereport)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html) trade, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-ontradegap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html) event, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCancelOrError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-ontradecancelorerror)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeCancelOrError](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html) event, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCorrection](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-ontradecorrection)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeCorrection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html) event, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeClosing](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-ontradeclosing)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, final MamaMsg msg, final [MamdaTradeClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html) event, final [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onQuoteRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-onquoterecap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, final MamaMsg msg, final [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteUpdate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-onquoteupdate)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, final MamaMsg msg, final [MamdaQuoteUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html) event, final [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-onquotegap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, final MamaMsg msg, final [MamdaQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html) event, final [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteClosing](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-onquoteclosing)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, final MamaMsg msg, final [MamdaQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html) event, final [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onSecurityStatusRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-onsecuritystatusrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html) listener, MamaMsg msg, [MamdaSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html) recap) |
| void | **[onSecurityStatusUpdate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-onsecuritystatusupdate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html) listener, MamaMsg msg, [MamdaSecurityStatusUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html) event, [MamdaSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html) recap) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |
| void | **[prettyPrint](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaComboTicker_1_1ComboTicker.html#function-prettyprint)**(String what) |

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


### function onQuoteRecap

```java
inline void onQuoteRecap(
    final MamdaSubscription sub,
    final MamdaQuoteListener listener,
    final MamaMsg msg,
    final MamdaQuoteRecap recap
)
```


### function onQuoteUpdate

```java
inline void onQuoteUpdate(
    final MamdaSubscription sub,
    final MamdaQuoteListener listener,
    final MamaMsg msg,
    final MamdaQuoteUpdate event,
    final MamdaQuoteRecap recap
)
```


### function onQuoteGap

```java
inline void onQuoteGap(
    final MamdaSubscription sub,
    final MamdaQuoteListener listener,
    final MamaMsg msg,
    final MamdaQuoteGap event,
    final MamdaQuoteRecap recap
)
```


### function onQuoteClosing

```java
inline void onQuoteClosing(
    final MamdaSubscription sub,
    final MamdaQuoteListener listener,
    final MamaMsg msg,
    final MamdaQuoteClosing event,
    final MamdaQuoteRecap recap
)
```


### function onSecurityStatusRecap

```java
inline void onSecurityStatusRecap(
    MamdaSubscription subscription,
    MamdaSecurityStatusListener listener,
    MamaMsg msg,
    MamdaSecurityStatusRecap recap
)
```


### function onSecurityStatusUpdate

```java
inline void onSecurityStatusUpdate(
    MamdaSubscription subscription,
    MamdaSecurityStatusListener listener,
    MamaMsg msg,
    MamdaSecurityStatusUpdate event,
    MamdaSecurityStatusRecap recap
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


### function prettyPrint

```java
inline void prettyPrint(
    String what
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100