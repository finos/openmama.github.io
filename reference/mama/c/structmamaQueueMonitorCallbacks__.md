---
title: mamaQueueMonitorCallbacks_
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamaQueueMonitorCallbacks_



 [More...](#detailed-description)


`#include <queue.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| mamaQueueHighWatermarkExceededCb | **[onQueueHighWatermarkExceeded](structmamaQueueMonitorCallbacks__.html#variable-onqueuehighwatermarkexceeded)**  |
| mamaQueueLowWatermarkCb | **[onQueueLowWatermark](structmamaQueueMonitorCallbacks__.html#variable-onqueuelowwatermark)**  |

## Detailed Description

```cpp
struct mamaQueueMonitorCallbacks_;
```


callbacks which may be invoked in response to certain conditions on the specified queue being met. 

## Public Attributes Documentation

### variable onQueueHighWatermarkExceeded

```cpp
mamaQueueHighWatermarkExceededCb onQueueHighWatermarkExceeded;
```


### variable onQueueLowWatermark

```cpp
mamaQueueLowWatermarkCb onQueueLowWatermark;
```


-------------------------------

Updated on 2023-03-31 at 15:29:15 +0100