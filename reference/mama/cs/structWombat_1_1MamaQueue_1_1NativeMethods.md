---
title: Wombat::MamaQueue::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueue::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mamaQueue_create](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-create)**(ref IntPtr result, IntPtr bridgeImpl) |
| int | **[mamaQueue_canDestroy](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-candestroy)**(IntPtr nativeHandle) |
| int | **[mamaQueue_destroy](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-destroy)**(IntPtr nativeHandle) |
| int | **[mamaQueue_destroyWait](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-destroywait)**(IntPtr nativeHandle) |
| int | **[mamaQueue_destroyTimedWait](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-destroytimedwait)**(IntPtr nativeHandle, long timeout) |
| int | **[mamaQueue_setHighWatermark](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-sethighwatermark)**(IntPtr nativeHandle, int highWatermark) |
| int | **[mamaQueue_getHighWatermark](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-gethighwatermark)**(IntPtr nativeHandle, ref int highWatermark) |
| int | **[mamaQueue_setLowWatermark](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-setlowwatermark)**(IntPtr nativeHandle, int lowWatermark) |
| int | **[mamaQueue_getLowWatermark](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-getlowwatermark)**(IntPtr nativeHandle, ref int lowWatermark) |
| int | **[mamaQueue_getEventCount](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-geteventcount)**(IntPtr nativeHandle, ref int eventCount) |
| int | **[mamaQueue_getQueueBridgeName](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-getqueuebridgename)**(IntPtr nativeHandle, ref IntPtr name) |
| int | **[mamaQueue_setQueueMonitorCallbacks](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-setqueuemonitorcallbacks)**(IntPtr nativeHandle, ref WatermarkCallbacks queueMonitorCallbacks, IntPtr closure) |
| int | **[mamaQueue_dispatch](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-dispatch)**(IntPtr nativeHandle) |
| int | **[mamaQueue_dispatchEvent](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-dispatchevent)**(IntPtr nativeHandle) |
| int | **[mamaQueue_stopDispatch](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-stopdispatch)**(IntPtr nativeHandle) |
| int | **[mamaQueue_timedDispatch](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-timeddispatch)**(IntPtr nativeHandle, ulong timeout) |
| int | **[mamaQueue_setEnqueueCallback](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-setenqueuecallback)**(IntPtr nativeHandle, EnqueueCallbackForwarder.EnqueueCallback callback, IntPtr closure) |
| int | **[mamaQueue_enqueueEvent](structWombat_1_1MamaQueue_1_1NativeMethods.html#function-mamaqueue-enqueueevent)**(IntPtr nativeHandle, EnqueueEventForwarder.EnqueueCallback callback, IntPtr closure)<br>Add an user event to a queue. Currently only supported using [Wombat](namespaceWombat.html) Middleware.  |

## Public Functions Documentation

### function mamaQueue_create

```csharp
int mamaQueue_create(
    ref IntPtr result,
    IntPtr bridgeImpl
)
```


### function mamaQueue_canDestroy

```csharp
int mamaQueue_canDestroy(
    IntPtr nativeHandle
)
```


### function mamaQueue_destroy

```csharp
int mamaQueue_destroy(
    IntPtr nativeHandle
)
```


### function mamaQueue_destroyWait

```csharp
int mamaQueue_destroyWait(
    IntPtr nativeHandle
)
```


### function mamaQueue_destroyTimedWait

```csharp
int mamaQueue_destroyTimedWait(
    IntPtr nativeHandle,
    long timeout
)
```


### function mamaQueue_setHighWatermark

```csharp
int mamaQueue_setHighWatermark(
    IntPtr nativeHandle,
    int highWatermark
)
```


### function mamaQueue_getHighWatermark

```csharp
int mamaQueue_getHighWatermark(
    IntPtr nativeHandle,
    ref int highWatermark
)
```


### function mamaQueue_setLowWatermark

```csharp
int mamaQueue_setLowWatermark(
    IntPtr nativeHandle,
    int lowWatermark
)
```


### function mamaQueue_getLowWatermark

```csharp
int mamaQueue_getLowWatermark(
    IntPtr nativeHandle,
    ref int lowWatermark
)
```


### function mamaQueue_getEventCount

```csharp
int mamaQueue_getEventCount(
    IntPtr nativeHandle,
    ref int eventCount
)
```


### function mamaQueue_getQueueBridgeName

```csharp
int mamaQueue_getQueueBridgeName(
    IntPtr nativeHandle,
    ref IntPtr name
)
```


### function mamaQueue_setQueueMonitorCallbacks

```csharp
int mamaQueue_setQueueMonitorCallbacks(
    IntPtr nativeHandle,
    ref WatermarkCallbacks queueMonitorCallbacks,
    IntPtr closure
)
```


### function mamaQueue_dispatch

```csharp
int mamaQueue_dispatch(
    IntPtr nativeHandle
)
```


### function mamaQueue_dispatchEvent

```csharp
int mamaQueue_dispatchEvent(
    IntPtr nativeHandle
)
```


### function mamaQueue_stopDispatch

```csharp
int mamaQueue_stopDispatch(
    IntPtr nativeHandle
)
```


### function mamaQueue_timedDispatch

```csharp
int mamaQueue_timedDispatch(
    IntPtr nativeHandle,
    ulong timeout
)
```


### function mamaQueue_setEnqueueCallback

```csharp
int mamaQueue_setEnqueueCallback(
    IntPtr nativeHandle,
    EnqueueCallbackForwarder.EnqueueCallback callback,
    IntPtr closure
)
```


### function mamaQueue_enqueueEvent

```csharp
int mamaQueue_enqueueEvent(
    IntPtr nativeHandle,
    EnqueueEventForwarder.EnqueueCallback callback,
    IntPtr closure
)
```

Add an user event to a queue. Currently only supported using [Wombat](namespaceWombat.html) Middleware. 

**Parameters**: 

  * **nativeHandle** The queue to which the event is to be added 
  * **callback** The function to be invoked when the event fires. 
  * **closure** Optional arbitrary user supplied data. Passed back to callback function. 


**Return**: MAMA_STATUS_OK if the function succeeds. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100