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


`#include <MamaQueueMonitorCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaQueueMonitorCallback](classWombat_1_1MamaQueueMonitorCallback.html#function-~mamaqueuemonitorcallback)**() |
| virtual void | **[onHighWatermarkExceeded](classWombat_1_1MamaQueueMonitorCallback.html#function-onhighwatermarkexceeded)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue, size_t size, void * closure) =0 |
| virtual void | **[onLowWatermark](classWombat_1_1MamaQueueMonitorCallback.html#function-onlowwatermark)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue, size_t size, void * closure) =0 |

## Detailed Description

```cpp
class Wombat::MamaQueueMonitorCallback;
```


Receive callbacks when certain conditions for the [MamaQueue](classWombat_1_1MamaQueue.html) are met.

Currently only one callback is defined which is invoked when the specified size limit on the [MamaQueue](classWombat_1_1MamaQueue.html) is exceeded. 

## Public Functions Documentation

### function ~MamaQueueMonitorCallback

```cpp
inline virtual ~MamaQueueMonitorCallback()
```


### function onHighWatermarkExceeded

```cpp
virtual void onHighWatermarkExceeded(
    MamaQueue * queue,
    size_t size,
    void * closure
) =0
```


**Parameters**: 

  * **queue** Pointer to the queue for which this callback was invoked. 
  * **size** The number of events on the queue if supported; otherwise 0. 
  * **closure** User supplied data when the callback object was registered. 


Callback invoked if an upper size limit has been specified for a queue and that limit has been exceeded.


### function onLowWatermark

```cpp
virtual void onLowWatermark(
    MamaQueue * queue,
    size_t size,
    void * closure
) =0
```


**Parameters**: 

  * **queue** Pointer to the queue for which this callback was invoked. 
  * **size** The number of events on the queue. 
  * **closure** User supplied data when the callback object was registered. 


Callback when low water mark is reached. Only supported by Wombat TCP middleware.


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100