---
title: Wombat::MamaQueue::EnqueueEventForwarder
summary: This class is used to forward messages from the enqueueEvent function to the instance of the MamaQueueCallback class that the client originally supplied. Note that multiple events may be enqueued before any of them are processed. To avoid the managed objects being collected references are stored in a Dictionary object. These are then removed whenever the relevant callback fires. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueue::EnqueueEventForwarder



This class is used to forward messages from the enqueueEvent function to the instance of the MamaQueueCallback class that the client originally supplied. Note that multiple events may be enqueued before any of them are processed. To avoid the managed objects being collected references are stored in a Dictionary object. These are then removed whenever the relevant callback fires. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[EnqueueCallback](classWombat_1_1MamaQueue_1_1EnqueueEventForwarder.html#function-enqueuecallback)**(IntPtr queue, IntPtr closure)<br>This delegate is passed to the underlying C layer to act as the callback to mamaQueue_enqueueEvent.  |
| | **[EnqueueEventForwarder](classWombat_1_1MamaQueue_1_1EnqueueEventForwarder.html#function-enqueueeventforwarder)**([MamaQueueEventCallback](interfaceWombat_1_1MamaQueueEventCallback.html) callback, object closure, [MamaQueue](classWombat_1_1MamaQueue.html) sender)<br>Constructor initialises all member variables.  |
| int | **[ForwardEvent](classWombat_1_1MamaQueue_1_1EnqueueEventForwarder.html#function-forwardevent)**([MamaQueueEventCallback](interfaceWombat_1_1MamaQueueEventCallback.html) callback, object closure, IntPtr nativeHandle, [MamaQueue](classWombat_1_1MamaQueue.html) sender) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| EnqueueCallback | **[NativeCallback](classWombat_1_1MamaQueue_1_1EnqueueEventForwarder.html#property-nativecallback)** <br>Read only property returns the native callback delegate.  |

## Public Functions Documentation

### function EnqueueCallback

```csharp
delegate void EnqueueCallback(
    IntPtr queue,
    IntPtr closure
)
```

This delegate is passed to the underlying C layer to act as the callback to mamaQueue_enqueueEvent. 

**Parameters**: 

  * **queue** The queue. 
  * **closure** Utility object passed to mamaQueue_enqueueEvent. 


### function EnqueueEventForwarder

```csharp
EnqueueEventForwarder(
    MamaQueueEventCallback callback,
    object closure,
    MamaQueue sender
)
```

Constructor initialises all member variables. 

**Parameters**: 

  * **callback** The callback object that will be invoked whenever an event is processed. 
  * **closure** Utility object. 
  * **sender** The queue. 


### function ForwardEvent

```csharp
static int ForwardEvent(
    MamaQueueEventCallback callback,
    object closure,
    IntPtr nativeHandle,
    MamaQueue sender
)
```


## Public Property Documentation

### property NativeCallback

```csharp
EnqueueCallback NativeCallback;
```

Read only property returns the native callback delegate. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100