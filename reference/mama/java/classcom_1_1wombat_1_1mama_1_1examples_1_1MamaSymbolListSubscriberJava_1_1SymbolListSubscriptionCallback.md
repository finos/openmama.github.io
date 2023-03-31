---
title: com::wombat::mama::examples::MamaSymbolListSubscriberJava::SymbolListSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaSymbolListSubscriberJava::SymbolListSubscriptionCallback





Inherits from [com.wombat.mama.MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onMsg](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaSymbolListSubscriberJava_1_1SymbolListSubscriptionCallback.html#function-onmsg)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onCreate](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaSymbolListSubscriberJava_1_1SymbolListSubscriptionCallback.html#function-oncreate)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onError](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaSymbolListSubscriberJava_1_1SymbolListSubscriptionCallback.html#function-onerror)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, short mamaStatus, int tibrvStatus, String subject, Exception e) |
| void | **[onQuality](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaSymbolListSubscriberJava_1_1SymbolListSubscriptionCallback.html#function-onquality)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, short quality, short cause, final Object platformInfo) |
| void | **[onGap](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaSymbolListSubscriberJava_1_1SymbolListSubscriptionCallback.html#function-ongap)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onRecapRequest](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaSymbolListSubscriberJava_1_1SymbolListSubscriptionCallback.html#function-onrecaprequest)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onDestroy](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaSymbolListSubscriberJava_1_1SymbolListSubscriptionCallback.html#function-ondestroy)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |

## Public Functions Documentation

### function onMsg

```java
inline void onMsg(
    MamaSubscription subscription,
    MamaMsg msg
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
    MamaSubscription subscription
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100