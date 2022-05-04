---
title: Wombat::MamaQueue::EnqueueCallbackForwarder
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueue::EnqueueCallbackForwarder





## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[EnqueueCallback](classWombat_1_1MamaQueue_1_1EnqueueCallbackForwarder.html#function-enqueuecallback)**(IntPtr queue, IntPtr closure) |
| | **[EnqueueCallbackForwarder](classWombat_1_1MamaQueue_1_1EnqueueCallbackForwarder.html#function-enqueuecallbackforwarder)**([MamaQueue](classWombat_1_1MamaQueue.html) sender, [MamaQueueEnqueueCallback](interfaceWombat_1_1MamaQueueEnqueueCallback.html) callback) |

## Public Functions Documentation

### function EnqueueCallback

```csharp
delegate void EnqueueCallback(
    IntPtr queue,
    IntPtr closure
)
```


### function EnqueueCallbackForwarder

```csharp
EnqueueCallbackForwarder(
    MamaQueue sender,
    MamaQueueEnqueueCallback callback
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100