---
title: Wombat::MamaQueue::WatermarkCallbackForwarder
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueue::WatermarkCallbackForwarder





## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[HighWatermarkExceededCallback](classWombat_1_1MamaQueue_1_1WatermarkCallbackForwarder.html#function-highwatermarkexceededcallback)**(IntPtr queue, int size, IntPtr closure) |
| delegate void | **[LowWatermarkCallback](classWombat_1_1MamaQueue_1_1WatermarkCallbackForwarder.html#function-lowwatermarkcallback)**(IntPtr queue, int size, IntPtr closure) |
| | **[WatermarkCallbackForwarder](classWombat_1_1MamaQueue_1_1WatermarkCallbackForwarder.html#function-watermarkcallbackforwarder)**([MamaQueue](classWombat_1_1MamaQueue.html) sender, [MamaQueueMonitorCallback](interfaceWombat_1_1MamaQueueMonitorCallback.html) callback, object closure) |

## Public Functions Documentation

### function HighWatermarkExceededCallback

```csharp
delegate void HighWatermarkExceededCallback(
    IntPtr queue,
    int size,
    IntPtr closure
)
```


### function LowWatermarkCallback

```csharp
delegate void LowWatermarkCallback(
    IntPtr queue,
    int size,
    IntPtr closure
)
```


### function WatermarkCallbackForwarder

```csharp
WatermarkCallbackForwarder(
    MamaQueue sender,
    MamaQueueMonitorCallback callback,
    object closure
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100