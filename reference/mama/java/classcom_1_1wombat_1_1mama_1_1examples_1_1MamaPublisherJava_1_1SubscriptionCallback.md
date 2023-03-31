---
title: com::wombat::mama::examples::MamaPublisherJava::SubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaPublisherJava::SubscriptionCallback





Inherits from [com.wombat.mama.MamaBasicSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaBasicSubscriptionCallback.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava_1_1SubscriptionCallback.html#function-oncreate)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription) |
| void | **[onError](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava_1_1SubscriptionCallback.html#function-onerror)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription, short status, int platformError, String subject) |
| void | **[onMsg](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava_1_1SubscriptionCallback.html#function-onmsg)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onDestroy](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaPublisherJava_1_1SubscriptionCallback.html#function-ondestroy)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription) |

## Public Functions Documentation

### function onCreate

```java
inline void onCreate(
    MamaBasicSubscription subscription
)
```


### function onError

```java
inline void onError(
    MamaBasicSubscription subscription,
    short status,
    int platformError,
    String subject
)
```


### function onMsg

```java
inline void onMsg(
    MamaBasicSubscription subscription,
    MamaMsg msg
)
```


### function onDestroy

```java
inline void onDestroy(
    MamaBasicSubscription subscription
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100