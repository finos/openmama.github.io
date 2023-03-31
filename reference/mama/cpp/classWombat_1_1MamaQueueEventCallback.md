---
title: Wombat::MamaQueueEventCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueueEventCallback



 [More...](#detailed-description)


`#include <MamaQueueEventCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaQueueEventCallback](classWombat_1_1MamaQueueEventCallback.html#function-~mamaqueueeventcallback)**() |
| virtual void | **[onEvent](classWombat_1_1MamaQueueEventCallback.html#function-onevent)**([MamaQueue](classWombat_1_1MamaQueue.html) & queue, void * closure) =0 |

## Detailed Description

```cpp
class Wombat::MamaQueueEventCallback;
```


Definition of the callback method for when a user added event fires. Concrete instances of this interface are registered with an event queue using the `[MamaQueue.enqueueEvent()](classWombat_1_1MamaQueue.html#function-enqueueevent)`. Currently only support by Wombat Middleware. 

## Public Functions Documentation

### function ~MamaQueueEventCallback

```cpp
inline virtual ~MamaQueueEventCallback()
```


### function onEvent

```cpp
virtual void onEvent(
    MamaQueue & queue,
    void * closure
) =0
```


**Parameters**: 

  * **queue** The [MamaQueue](classWombat_1_1MamaQueue.html) on which the event was enqueued. 
  * **closure** The user specified data associated with this event. 


Invoked when a user event, added by `[MamaQueue.enqueueEvent()](classWombat_1_1MamaQueue.html#function-enqueueevent)` fires.


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100