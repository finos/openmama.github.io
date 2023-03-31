---
title: com::wombat::mamda::examples::MamdaQuoteTicker::QuoteTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaQuoteTicker::QuoteTicker





Inherits from [com.wombat.mamda.MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onQuoteRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaQuoteTicker_1_1QuoteTicker.html#function-onquoterecap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, final MamaMsg msg, final [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteUpdate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaQuoteTicker_1_1QuoteTicker.html#function-onquoteupdate)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, final MamaMsg msg, final [MamdaQuoteUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html) event, final [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaQuoteTicker_1_1QuoteTicker.html#function-onquotegap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, final MamaMsg msg, final [MamdaQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html) event, final [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onQuoteClosing](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaQuoteTicker_1_1QuoteTicker.html#function-onquoteclosing)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) sub, final [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) listener, final MamaMsg msg, final [MamdaQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html) event, final [MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html) recap) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaQuoteTicker_1_1QuoteTicker.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaQuoteTicker_1_1QuoteTicker.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |

## Public Functions Documentation

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