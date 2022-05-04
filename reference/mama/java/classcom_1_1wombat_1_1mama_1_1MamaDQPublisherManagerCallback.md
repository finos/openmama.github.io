---
title: com::wombat::mama::MamaDQPublisherManagerCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDQPublisherManagerCallback





## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManagerCallback.html#function-oncreate)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager) |
| void | **[onNewRequest](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManagerCallback.html#function-onnewrequest)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager, String symbol, short subType, short msgType, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onRequest](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManagerCallback.html#function-onrequest)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager, MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic, short subType, short msgType, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onRefresh](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManagerCallback.html#function-onrefresh)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager, MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic, short subType, short msgType, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onError](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManagerCallback.html#function-onerror)**([MamaDQPublisherManager](classcom_1_1wombat_1_1mama_1_1MamaDQPublisherManager.html) publisherManager, int status, String error, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |

## Public Functions Documentation

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
    String error,
    MamaMsg msg
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100