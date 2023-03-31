---
title: com::wombat::mama::MamaQueueMonitorCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaQueueMonitorCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onHighWatermarkExceeded](interfacecom_1_1wombat_1_1mama_1_1MamaQueueMonitorCallback.html#function-onhighwatermarkexceeded)**([MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, long size) |
| void | **[onLowWatermark](interfacecom_1_1wombat_1_1mama_1_1MamaQueueMonitorCallback.html#function-onlowwatermark)**([MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, long size) |

## Detailed Description

```java
class com::wombat::mama::MamaQueueMonitorCallback;
```


Definition of the callback methods enabling event queue monitoring. Receiving callbacks when either the high watermark or the low watermark are exceeded. Not all middlewares will support the concept of both high and low watermarks. Concrete instances of this interface are registered with an event queue using the `MamaQueue.setQueueMonitorCallback ()`. 

## Public Functions Documentation

### function onHighWatermarkExceeded

```java
void onHighWatermarkExceeded(
    MamaQueue queue,
    long size
)
```


**Parameters**: 

  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) for which the high watermark was exceeded. 
  * **size** The number of outstanding events on the event queue. 


Called when the specified high watermark threshold for the event queue has been exceeded.


### function onLowWatermark

```java
void onLowWatermark(
    MamaQueue queue,
    long size
)
```


**Parameters**: 

  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) for which the high watermark was exceeded. 
  * **size** The number of outstanding events on the event queue. 


Called when the number of events on the event queue go below the specified low watermark. This is currently only supported for the WombatTCP middleware.


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100