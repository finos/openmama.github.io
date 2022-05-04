---
title: Wombat::MamaQueueMonitorCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueueMonitorCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[HighWatermarkExceeded](interfaceWombat_1_1MamaQueueMonitorCallback.html#function-highwatermarkexceeded)**([MamaQueue](classWombat_1_1MamaQueue.html) mamaQueue, int size, object closure)<br>Callback invoked if an upper size limit has been specified for a queue and that limit has been exceeded.  |
| void | **[LowWatermark](interfaceWombat_1_1MamaQueueMonitorCallback.html#function-lowwatermark)**([MamaQueue](classWombat_1_1MamaQueue.html) mamaQueue, int size, object closure)<br>Callback invoked when the queue size returns to the lower limit specified. Only [Wombat](namespaceWombat.html) TCP middleware supports low water mark callbacks.  |

## Detailed Description

```csharp
class Wombat::MamaQueueMonitorCallback;
```


Callback interface to receive notifications regarding [MamaQueue](classWombat_1_1MamaQueue.html) events 

## Public Functions Documentation

### function HighWatermarkExceeded

```csharp
void HighWatermarkExceeded(
    MamaQueue mamaQueue,
    int size,
    object closure
)
```

Callback invoked if an upper size limit has been specified for a queue and that limit has been exceeded. 

### function LowWatermark

```csharp
void LowWatermark(
    MamaQueue mamaQueue,
    int size,
    object closure
)
```

Callback invoked when the queue size returns to the lower limit specified. Only [Wombat](namespaceWombat.html) TCP middleware supports low water mark callbacks. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100