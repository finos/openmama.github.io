---
title: Wombat::MamaPublisherCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPublisherCallback





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaPublisherCallback](classWombat_1_1MamaPublisherCallback.html#function-mamapublishercallback)**() |
| virtual | **[~MamaPublisherCallback](classWombat_1_1MamaPublisherCallback.html#function-~mamapublishercallback)**() |
| virtual void | **[onCreate](classWombat_1_1MamaPublisherCallback.html#function-oncreate)**([MamaPublisher](classWombat_1_1MamaPublisher.html) * publisher, void * closure) =0 |
| virtual void | **[onDestroy](classWombat_1_1MamaPublisherCallback.html#function-ondestroy)**([MamaPublisher](classWombat_1_1MamaPublisher.html) * publisher, void * closure) =0 |
| virtual void | **[onError](classWombat_1_1MamaPublisherCallback.html#function-onerror)**([MamaPublisher](classWombat_1_1MamaPublisher.html) * publisher, const [MamaStatus](classWombat_1_1MamaStatus.html) & status, const char * info, void * closure) =0 |
| virtual void | **[onSuccess](classWombat_1_1MamaPublisherCallback.html#function-onsuccess)**([MamaPublisher](classWombat_1_1MamaPublisher.html) * publisher, const [MamaStatus](classWombat_1_1MamaStatus.html) & status, const char * info, void * closure) =0 |

## Public Functions Documentation

### function MamaPublisherCallback

```cpp
inline MamaPublisherCallback()
```


### function ~MamaPublisherCallback

```cpp
inline virtual ~MamaPublisherCallback()
```


### function onCreate

```cpp
virtual void onCreate(
    MamaPublisher * publisher,
    void * closure
) =0
```


### function onDestroy

```cpp
virtual void onDestroy(
    MamaPublisher * publisher,
    void * closure
) =0
```


### function onError

```cpp
virtual void onError(
    MamaPublisher * publisher,
    const MamaStatus & status,
    const char * info,
    void * closure
) =0
```


### function onSuccess

```cpp
virtual void onSuccess(
    MamaPublisher * publisher,
    const MamaStatus & status,
    const char * info,
    void * closure
) =0
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100