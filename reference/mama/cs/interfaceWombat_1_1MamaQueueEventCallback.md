---
title: Wombat::MamaQueueEventCallback
summary: Callbacks associated with MamaQueues 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueueEventCallback



Callbacks associated with MamaQueues 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onEvent](interfaceWombat_1_1MamaQueueEventCallback.html#function-onevent)**([MamaQueue](classWombat_1_1MamaQueue.html) mamaQueue, object closure)<br>Definition of the callback method for when a user added event fires. Concrete instances of this interface are registered with an event queue using the [MamaQueue.enqueueEvent()](classWombat_1_1MamaQueue.html#function-enqueueevent).  |

## Public Functions Documentation

### function onEvent

```csharp
void onEvent(
    MamaQueue mamaQueue,
    object closure
)
```

Definition of the callback method for when a user added event fires. Concrete instances of this interface are registered with an event queue using the [MamaQueue.enqueueEvent()](classWombat_1_1MamaQueue.html#function-enqueueevent). 

**Parameters**: 

  * **mamaQueue** The queue on which the event is being processed. 
  * **closure** Utility object passed into the enqueueEvent function. 


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100