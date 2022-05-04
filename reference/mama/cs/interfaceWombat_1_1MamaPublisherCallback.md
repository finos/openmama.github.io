---
title: Wombat::MamaPublisherCallback
summary: Callbacks at the publisher level. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPublisherCallback



Callbacks at the publisher level. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](interfaceWombat_1_1MamaPublisherCallback.html#function-oncreate)**([MamaPublisher](classWombat_1_1MamaPublisher.html) publisher)<br>See interface remarks for details  |
| void | **[onError](interfaceWombat_1_1MamaPublisherCallback.html#function-onerror)**([MamaPublisher](classWombat_1_1MamaPublisher.html) publisher, [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status, string topic)<br>See interface remarks for details  |
| void | **[onSuccess](interfaceWombat_1_1MamaPublisherCallback.html#function-onsuccess)**([MamaPublisher](classWombat_1_1MamaPublisher.html) publisher, [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status, string topic)<br>See interface remarks for details  |
| void | **[onDestroy](interfaceWombat_1_1MamaPublisherCallback.html#function-ondestroy)**([MamaPublisher](classWombat_1_1MamaPublisher.html) publisher)<br>See interface remarks for details  |

## Public Functions Documentation

### function onCreate

```csharp
void onCreate(
    MamaPublisher publisher
)
```

See interface remarks for details 

### function onError

```csharp
void onError(
    MamaPublisher publisher,
    MamaStatus.mamaStatus status,
    string topic
)
```

See interface remarks for details 

### function onSuccess

```csharp
void onSuccess(
    MamaPublisher publisher,
    MamaStatus.mamaStatus status,
    string topic
)
```

See interface remarks for details 

### function onDestroy

```csharp
void onDestroy(
    MamaPublisher publisher
)
```

See interface remarks for details 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100