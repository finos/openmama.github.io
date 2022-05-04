---
title: Wombat::MamaQueueEnqueueCallback
summary: Callbacks associated with MamaQueues 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueueEnqueueCallback



Callbacks associated with MamaQueues 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onEnqueue](interfaceWombat_1_1MamaQueueEnqueueCallback.html#function-onenqueue)**([MamaQueue](classWombat_1_1MamaQueue.html) mamaQueue)<br>Method which is invoked when an event is enqueued on the queue for which this function was registered.  |

## Public Functions Documentation

### function onEnqueue

```csharp
void onEnqueue(
    MamaQueue mamaQueue
)
```

Method which is invoked when an event is enqueued on the queue for which this function was registered. 

**Parameters**: 

  * **mamaQueue** The queue on which the event is being processed. 


LBM Bridge: NB! Users may not dispatch events from this function. The function is invoked from an LBM internal thread. Attempts to dispatch from here will result in a deadlock.


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100