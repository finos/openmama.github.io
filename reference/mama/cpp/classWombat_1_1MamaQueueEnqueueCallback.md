---
title: Wombat::MamaQueueEnqueueCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueueEnqueueCallback



 [More...](#detailed-description)


`#include <MamaQueueEnqueueCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaQueueEnqueueCallback](classWombat_1_1MamaQueueEnqueueCallback.html#function-~mamaqueueenqueuecallback)**() |
| virtual void | **[onEventEnqueue](classWombat_1_1MamaQueueEnqueueCallback.html#function-oneventenqueue)**(void * closure) =0 |

## Detailed Description

```cpp
class Wombat::MamaQueueEnqueueCallback;
```


Callback interface for the [MamaQueue::setEnqueueCallback](classWombat_1_1MamaQueue.html#function-setenqueuecallback) () method. 

## Public Functions Documentation

### function ~MamaQueueEnqueueCallback

```cpp
inline virtual ~MamaQueueEnqueueCallback()
```


### function onEventEnqueue

```cpp
virtual void onEventEnqueue(
    void * closure
) =0
```


**Parameters**: 

  * **closure** Arbitrary user-supplied data passed to [MamaQueue::setEnqueueCallback](classWombat_1_1MamaQueue.html#function-setenqueuecallback) (); 


Called whenever an event is enqueued to the event queue.

LBM Bridge: NB! Users may not dispatch events from this method. The function is invoked from an LBM internal thread. Attempts to dispatch from here will result in a deadlock


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100