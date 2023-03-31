---
title: com::wombat::mama::examples::MamaListenCached::SubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaListenCached::SubscriptionCallback





Inherits from [com.wombat.mama.MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SubscriptionCallback](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached_1_1SubscriptionCallback.html#function-subscriptioncallback)**([MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, String symbol) |
| void | **[onMsg](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached_1_1SubscriptionCallback.html#function-onmsg)**(final [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, final [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onCreate](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached_1_1SubscriptionCallback.html#function-oncreate)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onError](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached_1_1SubscriptionCallback.html#function-onerror)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, short mamaStatus, int tibrvStatus, String subject, Exception e) |
| void | **[onQuality](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached_1_1SubscriptionCallback.html#function-onquality)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, short quality, short cause, final Object platformInfo) |
| void | **[onGap](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached_1_1SubscriptionCallback.html#function-ongap)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onRecapRequest](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached_1_1SubscriptionCallback.html#function-onrecaprequest)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onDestroy](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaListenCached_1_1SubscriptionCallback.html#function-ondestroy)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) mamaSub) |

## Public Functions Documentation

### function SubscriptionCallback

```java
inline SubscriptionCallback(
    MamaQueue queue,
    String symbol
)
```


### function onMsg

```java
inline void onMsg(
    final MamaSubscription subscription,
    final MamaMsg msg
)
```


### function onCreate

```java
inline void onCreate(
    MamaSubscription subscription
)
```


### function onError

```java
inline void onError(
    MamaSubscription subscription,
    short mamaStatus,
    int tibrvStatus,
    String subject,
    Exception e
)
```


### function onQuality

```java
inline void onQuality(
    MamaSubscription subscription,
    short quality,
    short cause,
    final Object platformInfo
)
```


### function onGap

```java
inline void onGap(
    MamaSubscription subscription
)
```


### function onRecapRequest

```java
inline void onRecapRequest(
    MamaSubscription subscription
)
```


### function onDestroy

```java
inline void onDestroy(
    MamaSubscription mamaSub
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100