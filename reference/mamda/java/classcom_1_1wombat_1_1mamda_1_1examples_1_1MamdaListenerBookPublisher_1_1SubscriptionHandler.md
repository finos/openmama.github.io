---
title: com::wombat::mamda::examples::MamdaListenerBookPublisher::SubscriptionHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaListenerBookPublisher::SubscriptionHandler





Inherits from MamaDQPublisherManagerCallback

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1SubscriptionHandler.html#function-oncreate)**(MamaDQPublisherManager publisherManager) |
| void | **[onNewRequest](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1SubscriptionHandler.html#function-onnewrequest)**(MamaDQPublisherManager publisherManager, String symbol, short subType, short msgType, MamaMsg msg) |
| void | **[onRequest](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1SubscriptionHandler.html#function-onrequest)**(MamaDQPublisherManager publisherManager, MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic, short subType, short msgType, MamaMsg msg) |
| void | **[onRefresh](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1SubscriptionHandler.html#function-onrefresh)**(MamaDQPublisherManager publisherManager, MamaDQPublisherManager.MamaPublishTopic mamaPublishTopic, short subType, short msgType, MamaMsg msg) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaListenerBookPublisher_1_1SubscriptionHandler.html#function-onerror)**(MamaDQPublisherManager publisherManager, int status, String errorTxt, MamaMsg msg) |

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
    String errorTxt,
    MamaMsg msg
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100