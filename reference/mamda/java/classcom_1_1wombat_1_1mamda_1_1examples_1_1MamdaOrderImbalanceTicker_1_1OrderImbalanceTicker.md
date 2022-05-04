---
title: com::wombat::mamda::examples::MamdaOrderImbalanceTicker::OrderImbalanceTicker
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaOrderImbalanceTicker::OrderImbalanceTicker





Inherits from [com.wombat.mamda.MamdaOrderImbalanceHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onOrderImbalance](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOrderImbalanceTicker_1_1OrderImbalanceTicker.html#function-onorderimbalance)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html) listener, final MamaMsg msg, [MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html) imbalance, [MamdaOrderImbalanceUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html) update) |
| void | **[onNoOrderImbalance](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOrderImbalanceTicker_1_1OrderImbalanceTicker.html#function-onnoorderimbalance)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html) listener, final MamaMsg msg, [MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html) imbalance, [MamdaOrderImbalanceUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html) update) |
| void | **[onOrderImbalanceRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOrderImbalanceTicker_1_1OrderImbalanceTicker.html#function-onorderimbalancerecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html) listener, final MamaMsg msg, [MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html) imbalance) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOrderImbalanceTicker_1_1OrderImbalanceTicker.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOrderImbalanceTicker_1_1OrderImbalanceTicker.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |

## Public Functions Documentation

### function onOrderImbalance

```java
inline void onOrderImbalance(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    final MamaMsg msg,
    MamdaOrderImbalanceRecap imbalance,
    MamdaOrderImbalanceUpdate update
)
```


### function onNoOrderImbalance

```java
inline void onNoOrderImbalance(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    final MamaMsg msg,
    MamdaOrderImbalanceRecap imbalance,
    MamdaOrderImbalanceUpdate update
)
```


### function onOrderImbalanceRecap

```java
inline void onOrderImbalanceRecap(
    MamdaSubscription subscription,
    MamdaOrderImbalanceListener listener,
    final MamaMsg msg,
    MamdaOrderImbalanceRecap imbalance
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