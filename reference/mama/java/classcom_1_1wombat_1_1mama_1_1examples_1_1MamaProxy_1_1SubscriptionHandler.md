---
title: com::wombat::mama::examples::MamaProxy::SubscriptionHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::examples::MamaProxy::SubscriptionHandler





Inherits from [com.wombat.mama.MamaDQPublisherManagerCallback](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManagerCallback.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SubscriptionHandler](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1SubscriptionHandler.html#function-subscriptionhandler)**([MamaProxy](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy.html) proxy) |
| void | **[onCreate](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1SubscriptionHandler.html#function-oncreate)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager) |
| void | **[onNewRequest](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1SubscriptionHandler.html#function-onnewrequest)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager, String symbol, short subType, short msgType, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onRequest](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1SubscriptionHandler.html#function-onrequest)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager, MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic, short subType, short msgType, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onRefresh](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1SubscriptionHandler.html#function-onrefresh)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager, MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic, short subType, short msgType, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onError](classcom_1_1wombat_1_1mama_1_1examples_1_1MamaProxy_1_1SubscriptionHandler.html#function-onerror)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager, int status, String errorTxt, Object platformInfo) |

## Public Functions Documentation

### function SubscriptionHandler

```java
inline SubscriptionHandler(
    MamaProxy proxy
)
```


### function onCreate

```java
inline void onCreate(
    MamaDQPublisherManager publisherManager
)
```


### function onNewRequest

```java
inline void onNewRequest(
    MamaDQPublisherManager publisherManager,
    String symbol,
    short subType,
    short msgType,
    MamaMsg msg
)
```


### function onRequest

```java
inline void onRequest(
    MamaDQPublisherManager publisherManager,
    MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic,
    short subType,
    short msgType,
    MamaMsg msg
)
```


### function onRefresh

```java
inline void onRefresh(
    MamaDQPublisherManager publisherManager,
    MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic,
    short subType,
    short msgType,
    MamaMsg msg
)
```


### function onError

```java
inline void onError(
    MamaDQPublisherManager publisherManager,
    int status,
    String errorTxt,
    Object platformInfo
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100