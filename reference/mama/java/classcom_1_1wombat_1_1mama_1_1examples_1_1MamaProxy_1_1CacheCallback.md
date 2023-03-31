---
title: com::wombat::mama::examples::MamaProxy::CacheCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaProxy::CacheCallback





Inherits from [com.wombat.mama.MamaSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html), [com.wombat.mama.MamaQueueEventCallback](interfacecom_1_1wombat_1_1mama_1_1MamaQueueEventCallback.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-oncreate)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onError](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-onerror)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, short wombatStatus, int platformError, String subject, Exception e) |
| void | **[onMsg](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-onmsg)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onQuality](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-onquality)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, short quality, short cause, Object platformInfo) |
| void | **[onRecapRequest](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-onrecaprequest)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onGap](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-ongap)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onDestroy](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-ondestroy)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onEvent](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-onevent)**([MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, Object closure) |
| void | **[setPublisher](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-setpublisher)**([MamaDQPublisher](classcom_1_1wombat_1_1mama_1_1MamaDQPublisher.html) dqPublisher) |
| void | **[sendRecap](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-sendrecap)**() |
| void | **[sendRecap](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1CacheCallback.html#function-sendrecap)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |

## Public Functions Documentation

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
    short wombatStatus,
    int platformError,
    String subject,
    Exception e
)
```


### function onMsg

```java
inline void onMsg(
    MamaSubscription subscription,
    MamaMsg msg
)
```


### function onQuality

```java
inline void onQuality(
    MamaSubscription subscription,
    short quality,
    short cause,
    Object platformInfo
)
```


### function onRecapRequest

```java
inline void onRecapRequest(
    MamaSubscription subscription
)
```


### function onGap

```java
inline void onGap(
    MamaSubscription subscription
)
```


### function onDestroy

```java
inline void onDestroy(
    MamaSubscription subscription
)
```


### function onEvent

```java
inline void onEvent(
    MamaQueue queue,
    Object closure
)
```


### function setPublisher

```java
inline void setPublisher(
    MamaDQPublisher dqPublisher
)
```


### function sendRecap

```java
inline void sendRecap()
```


### function sendRecap

```java
inline void sendRecap(
    MamaMsg msg
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100