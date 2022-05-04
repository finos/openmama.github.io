---
title: Wombat::MamaDQPublisherManagerCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDQPublisherManagerCallback





## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaDQPublisherManagerCallback](classWombat_1_1MamaDQPublisherManagerCallback.html#function-~mamadqpublishermanagercallback)**() |
| virtual void | **[onCreate](classWombat_1_1MamaDQPublisherManagerCallback.html#function-oncreate)**([MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html) * publisherManager) =0 |
| virtual void | **[onNewRequest](classWombat_1_1MamaDQPublisherManagerCallback.html#function-onnewrequest)**([MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html) * publisherManager, const char * symbol, short subType, short msgType, [MamaMsg](classWombat_1_1MamaMsg.html) & msg) =0 |
| virtual void | **[onRequest](classWombat_1_1MamaDQPublisherManagerCallback.html#function-onrequest)**([MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html) * publisherManager, const [MamaPublishTopic](classWombat_1_1MamaPublishTopic.html) & publishTopicInfo, short subType, short msgType, [MamaMsg](classWombat_1_1MamaMsg.html) & msg) =0 |
| virtual void | **[onRefresh](classWombat_1_1MamaDQPublisherManagerCallback.html#function-onrefresh)**([MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html) * publisherManager, const [MamaPublishTopic](classWombat_1_1MamaPublishTopic.html) & publishTopicInfo, short subType, short msgType, [MamaMsg](classWombat_1_1MamaMsg.html) & msg) =0 |
| virtual void | **[onError](classWombat_1_1MamaDQPublisherManagerCallback.html#function-onerror)**([MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html) * publisher, const [MamaStatus](classWombat_1_1MamaStatus.html) & status, const char * errortxt, [MamaMsg](classWombat_1_1MamaMsg.html) * msg) =0 |
| virtual void | **[onMsg](classWombat_1_1MamaDQPublisherManagerCallback.html#function-onmsg)**([MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html) * publisher, [MamaMsg](classWombat_1_1MamaMsg.html) & msg) |

## Public Functions Documentation

### function ~MamaDQPublisherManagerCallback

```cpp
inline virtual ~MamaDQPublisherManagerCallback()
```


### function onCreate

```cpp
virtual void onCreate(
    MamaDQPublisherManager * publisherManager
) =0
```


### function onNewRequest

```cpp
virtual void onNewRequest(
    MamaDQPublisherManager * publisherManager,
    const char * symbol,
    short subType,
    short msgType,
    MamaMsg & msg
) =0
```


### function onRequest

```cpp
virtual void onRequest(
    MamaDQPublisherManager * publisherManager,
    const MamaPublishTopic & publishTopicInfo,
    short subType,
    short msgType,
    MamaMsg & msg
) =0
```


### function onRefresh

```cpp
virtual void onRefresh(
    MamaDQPublisherManager * publisherManager,
    const MamaPublishTopic & publishTopicInfo,
    short subType,
    short msgType,
    MamaMsg & msg
) =0
```


### function onError

```cpp
virtual void onError(
    MamaDQPublisherManager * publisher,
    const MamaStatus & status,
    const char * errortxt,
    MamaMsg * msg
) =0
```


### function onMsg

```cpp
inline virtual void onMsg(
    MamaDQPublisherManager * publisher,
    MamaMsg & msg
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100