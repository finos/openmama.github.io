---
title: com::wombat::mama::MamaQueueEventCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaQueueEventCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onEvent](interfacecom_1_1wombat_1_1mama_1_1MamaQueueEventCallback.html#function-onevent)**([MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, Object closure) |

## Detailed Description

```java
class com::wombat::mama::MamaQueueEventCallback;
```


Definition of the callback method for when a user added event fires. Concrete instances of this interface are registered with an event queue using the `MamaQueue.enqueueEvent()`. Currently only support by MAMA JNI using Wombat Middleware. 

## Public Functions Documentation

### function onEvent

```java
void onEvent(
    MamaQueue queue,
    Object closure
)
```


**Parameters**: 

  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) on which the event was enqueued. 
  * **closure** The user specified data associated with this event. 


Invoked when a user event, added by `MamaQueue.enqueueEvent()` fires.


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100