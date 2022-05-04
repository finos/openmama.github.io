---
title: com::wombat::mamda::examples::MamdaFundamentalTicker::FundamentalTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaFundamentalTicker::FundamentalTicker





Inherits from [com.wombat.mamda.MamdaFundamentalHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentalHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onFundamentals](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaFundamentalTicker_1_1FundamentalTicker.html#function-onfundamentals)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaFundamentalListener](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html) listener, MamaMsg msg, [MamdaFundamentals](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html) fundas) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaFundamentalTicker_1_1FundamentalTicker.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaFundamentalTicker_1_1FundamentalTicker.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |

## Public Functions Documentation

### function onFundamentals

```java
inline void onFundamentals(
    MamdaSubscription subscription,
    MamdaFundamentalListener listener,
    MamaMsg msg,
    MamdaFundamentals fundas
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

Updated on 2022-05-04 at 07:54:13 +0100