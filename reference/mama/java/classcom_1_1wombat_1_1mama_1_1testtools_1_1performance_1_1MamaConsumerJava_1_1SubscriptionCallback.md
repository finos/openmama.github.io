---
title: com::wombat::mama::testtools::performance::MamaConsumerJava::SubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::testtools::performance::MamaConsumerJava::SubscriptionCallback





Inherits from [com.wombat.mama.MamaBasicSubscriptionCallback](interfacecom_1_1wombat_1_1mama_1_1MamaBasicSubscriptionCallback.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava_1_1SubscriptionCallback.html#function-oncreate)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription) |
| void | **[onError](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava_1_1SubscriptionCallback.html#function-onerror)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription, short status, int platformError, String subject) |
| void | **[onDestroy](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava_1_1SubscriptionCallback.html#function-ondestroy)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription) |
| void | **[onMsg](classcom_1_1wombat_1_1mama_1_1testtools_1_1performance_1_1MamaConsumerJava_1_1SubscriptionCallback.html#function-onmsg)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |

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


### function onDestroy

```java
inline void onDestroy(
    MamaBasicSubscription subscription
)
```


### function onMsg

```java
inline void onMsg(
    MamaBasicSubscription subscription,
    MamaMsg msg
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100