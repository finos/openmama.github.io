---
title: Wombat::MamaQueue
summary: MamaQueues allow applications to dispatch events in order with multiple threads. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueue



MamaQueues allow applications to dispatch events in order with multiple threads. 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaQueue](classWombat_1_1MamaQueue.html#function-mamaqueue)**([MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl)<br>Create a queue  |
| void | **[setHighWatermark](classWombat_1_1MamaQueue.html#function-sethighwatermark)**(int highWatermark)<br>Specify a high watermark for events on the queue. The behaviour for setting this value results in on the underlying middleware varies.  |
| int | **[getHighWatermark](classWombat_1_1MamaQueue.html#function-gethighwatermark)**()<br>Get the value of the high water mark for the specified queue. A value of 0 will be returned if no high water mark was previously specified.  |
| void | **[setLowWatermark](classWombat_1_1MamaQueue.html#function-setlowwatermark)**(int lowWatermark)<br>Set the low water mark for the queue. Only supported by [Wombat](namespaceWombat.html) TCP middleware.  |
| void | **[setQueueName](classWombat_1_1MamaQueue.html#function-setqueuename)**(string queueName)<br>Sets the name of the queue to the given name (for stats, OS naming etc).  |
| int | **[getLowWatermark](classWombat_1_1MamaQueue.html#function-getlowwatermark)**()<br>Get the value of the low water mark for the specified queue. A value of 1 will be returned if no low water mark was previously specified.  |
| int | **[getEventCount](classWombat_1_1MamaQueue.html#function-geteventcount)**() |
| string | **[getQueueBridgeName](classWombat_1_1MamaQueue.html#function-getqueuebridgename)**()<br>Get the name of the bridge associated with the queue - either "wmw", "lbm", or "tibrv".  |
| void | **[setQueueMonitorCallbacks](classWombat_1_1MamaQueue.html#function-setqueuemonitorcallbacks)**([MamaQueueMonitorCallback](interfaceWombat_1_1MamaQueueMonitorCallback.html) callback, object closure)<br>Specify a set of callbacks which may be invoked in response to certain conditions arising on the queue.  |
| void | **[setEnqueueCallback](classWombat_1_1MamaQueue.html#function-setenqueuecallback)**([MamaQueueEnqueueCallback](interfaceWombat_1_1MamaQueueEnqueueCallback.html) callback)<br>Register the specified callback function to receive a callback each time an event is enqueued on the specified [MamaQueue](classWombat_1_1MamaQueue.html) |
| void | **[enqueueEvent](classWombat_1_1MamaQueue.html#function-enqueueevent)**([MamaQueueEventCallback](interfaceWombat_1_1MamaQueueEventCallback.html) callback, object closure)<br>This function will enqueue an event on the mama queue.  |
| bool | **[canDestroy](classWombat_1_1MamaQueue.html#function-candestroy)**()<br>Check to see if a queue can be destroyed. The queue cannot be destroyed if there are currently open event objects on it.  |
| void | **[destroy](classWombat_1_1MamaQueue.html#function-destroy)**()<br>Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed.  |
| void | **[destroyWait](classWombat_1_1MamaQueue.html#function-destroywait)**()<br>Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue.  |
| void | **[destroyTimedWait](classWombat_1_1MamaQueue.html#function-destroytimedwait)**(long timeout)<br>Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue.  |
| void | **[dispatch](classWombat_1_1MamaQueue.html#function-dispatch)**()<br>Dispatch messages from the queue. This call blocks and dispatches until [stopDispatch()]() is called.  |
| void | **[dispatchEvent](classWombat_1_1MamaQueue.html#function-dispatchevent)**()<br>Dispatch a single event from the specified queue. If there is no event on the queue simply return and do nothing.  |
| void | **[stopDispatch](classWombat_1_1MamaQueue.html#function-stopdispatch)**()<br>Unblock the queue as soon as possible. This will cause mamaDispatchers to exit. Creating a new dispatcher will resume dispatching events.  |
| void | **[timedDispatch](classWombat_1_1MamaQueue.html#function-timeddispatch)**(long timeout)<br>Dispatch messages from the queue until timeout has elapsed. Some middleware implementations will always block until timeout (dispatching multiple times), whereas others will always unblock once the first event is dispatched or the timeout has elapsed - whichever comes first.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaQueue.html#function-destroynativepeer)**()<br>This function is called by the base class whenever the [MamaQueue](classWombat_1_1MamaQueue.html) is disposed, it will attempt to destroy the queue if this has not already been done. [MamaWrapper.DestroyNativePeer]() |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Public Functions Documentation

### function MamaQueue

```csharp
MamaQueue(
    MamaBridge bridgeImpl
)
```

Create a queue 

### function setHighWatermark

```csharp
void setHighWatermark(
    int highWatermark
)
```

Specify a high watermark for events on the queue. The behaviour for setting this value results in on the underlying middleware varies. 

LBM: LBM uses an unbounded event queue. Setting this values allows users of the API to receive a callback if the value is exceeded. ([MamaQueue.setQueueMonitorCallbacks](classWombat_1_1MamaQueue.html#function-setqueuemonitorcallbacks) for setting queue-related callbacks.) The default behaviour is for the queue to grow unbounded without notifications. 

The high watermark for LBM can be set for all queues at once by setting the mama.lbm.eventqueuemonitor.queue_size_warning property for the API. Calls to this function will override the value specified in mama.properties at runtime. Callbacks can be disabled by setting this value to 0 - effectively disabling high watermark checking.

RV: This will set a queue limit policy of TIBRVQUEUE_DISCARD_FIRST whereby the oldest events in the queue are discarded first. The discard amount will be set with a value of 1. I.e. events will be dropped from the queue one at a time. The default behaviour is an unlimited queue which does not discard events. 


### function getHighWatermark

```csharp
int getHighWatermark()
```

Get the value of the high water mark for the specified queue. A value of 0 will be returned if no high water mark was previously specified. 

### function setLowWatermark

```csharp
void setLowWatermark(
    int lowWatermark
)
```

Set the low water mark for the queue. Only supported by [Wombat](namespaceWombat.html) TCP middleware. 

The low watermark must be greater than 1 and less than highWaterMark otherwise this method returns MAMA_STATUS_INVALID_ARG. For this reason the high water mark must be set before invoking this method. 


### function setQueueName

```csharp
void setQueueName(
    string queueName
)
```

Sets the name of the queue to the given name (for stats, OS naming etc). 

### function getLowWatermark

```csharp
int getLowWatermark()
```

Get the value of the low water mark for the specified queue. A value of 1 will be returned if no low water mark was previously specified. 

### function getEventCount

```csharp
int getEventCount()
```


### function getQueueBridgeName

```csharp
string getQueueBridgeName()
```

Get the name of the bridge associated with the queue - either "wmw", "lbm", or "tibrv". 

### function setQueueMonitorCallbacks

```csharp
void setQueueMonitorCallbacks(
    MamaQueueMonitorCallback callback,
    object closure
)
```

Specify a set of callbacks which may be invoked in response to certain conditions arising on the queue. 

The behaviour here is middleware specific as not all will support all callbacks. 

LBM: When the high watermark is exceeded the mamaQueueHighWatermarkExceededCb callback will invoked each time an event on the queue is dispatched until such time as the number of events on the queue falls below the high watermark.

RV: Not currently supported.


### function setEnqueueCallback

```csharp
void setEnqueueCallback(
    MamaQueueEnqueueCallback callback
)
```

Register the specified callback function to receive a callback each time an event is enqueued on the specified [MamaQueue](classWombat_1_1MamaQueue.html)

### function enqueueEvent

```csharp
void enqueueEvent(
    MamaQueueEventCallback callback,
    object closure
)
```

This function will enqueue an event on the mama queue. 

**Parameters**: 

  * **callback** This callback will be invoked by the thread pumping the queue. 
  * **closure** Utility object that will be passed back to the callback. 


**Exceptions**: 

  * **ArgumentNullException** Thrown if the callback object is null. 


### function canDestroy

```csharp
bool canDestroy()
```

Check to see if a queue can be destroyed. The queue cannot be destroyed if there are currently open event objects on it. 

**Return**: True if the queue can be destroyed. 

### function destroy

```csharp
void destroy()
```

Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. 

**Exceptions**: 

  * **[MamaException](classWombat_1_1MamaException.html)** Thrown with a status code of MAMA_STATUS_QUEUE_OPEN_OBJECTS if there are still open objects against the queue. 


### function destroyWait

```csharp
void destroyWait()
```

Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue. 

### function destroyTimedWait

```csharp
void destroyTimedWait(
    long timeout
)
```

Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue. 

**Exceptions**: 

  * **[MamaException](classWombat_1_1MamaException.html)** Thrown with a status code of MAMA_STATUS_TIMEOUT if the time period elapses before the queue can be shutdown. 


### function dispatch

```csharp
void dispatch()
```

Dispatch messages from the queue. This call blocks and dispatches until [stopDispatch()]() is called. 

### function dispatchEvent

```csharp
void dispatchEvent()
```

Dispatch a single event from the specified queue. If there is no event on the queue simply return and do nothing. 

### function stopDispatch

```csharp
void stopDispatch()
```

Unblock the queue as soon as possible. This will cause mamaDispatchers to exit. Creating a new dispatcher will resume dispatching events. 

### function timedDispatch

```csharp
void timedDispatch(
    long timeout
)
```

Dispatch messages from the queue until timeout has elapsed. Some middleware implementations will always block until timeout (dispatching multiple times), whereas others will always unblock once the first event is dispatched or the timeout has elapsed - whichever comes first. 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

This function is called by the base class whenever the [MamaQueue](classWombat_1_1MamaQueue.html) is disposed, it will attempt to destroy the queue if this has not already been done. [MamaWrapper.DestroyNativePeer]()

**Return**: MAMA Status code

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100