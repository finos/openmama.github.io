---
title: Wombat::MamaTimer
summary: A repeating timer 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTimer



A repeating timer 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| delegate void | **[OnTimerTickDelegate](classWombat_1_1MamaTimer.html#function-ontimertickdelegate)**(IntPtr timer, IntPtr closure)<br>This delegate describes the native callback functions invoked for timer tick and destroy events.  |
| | **[MamaTimer](classWombat_1_1MamaTimer.html#function-mamatimer)**()<br>Construct a timer object.  |
| | **[MamaTimer](classWombat_1_1MamaTimer.html#function-mamatimer)**(IntPtr nativeHandle)<br>Construct a timer object using a precreated native timer.  |
| void | **[create](classWombat_1_1MamaTimer.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaTimerCallback](interfaceWombat_1_1MamaTimerCallback.html) action, double interval)<br>Create a repeating timer. Since the [MamaTimer](classWombat_1_1MamaTimer.html) relies on the timer mechanism of the underlying middleware, the resolution of the timer is also dependent on the middleware. Consult your middleware documentation for details. The callback is invoked repeatedly at the specified interval until the timer is destroyed. A null value for the queue uses the default mama queue.  |
| void | **[create](classWombat_1_1MamaTimer.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaTimerCallback](interfaceWombat_1_1MamaTimerCallback.html) action, double interval, object closure)<br>Create a repeating timer. Since the [MamaTimer](classWombat_1_1MamaTimer.html) relies on the timer mechanism of the underlying middleware, the resolution of the timer is also dependent on the middleware. Consult your middleware documentation for details. The callback is invoked repeatedly at the specified interval until the timer is destroyed. A null value for the queue uses the default mama queue.  |
| void | **[destroy](classWombat_1_1MamaTimer.html#function-destroy)**()<br>Destroy the timer. This function must be called from the same thread dispatching on the associated event queue unless both the default queue and dispatch queue are not actively dispatching. This is functionally equivalent to disposing the instance.  |
| double | **[getInterval](classWombat_1_1MamaTimer.html#function-getinterval)**()<br>Get the current timer interval.  |
| void | **[reset](classWombat_1_1MamaTimer.html#function-reset)**()<br>Reset the timer to the beginning of the interval.  |
| void | **[setInterval](classWombat_1_1MamaTimer.html#function-setinterval)**(double interval)<br>Set the timer to use a different interval (and reset to the beginning of that interval).  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaTimer.html#function-destroynativepeer)**()<br>This will be called by the base class to destroy the native timer. [MamaWrapper.DestroyNativePeer]() |

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

### function OnTimerTickDelegate

```csharp
delegate void OnTimerTickDelegate(
    IntPtr timer,
    IntPtr closure
)
```

This delegate describes the native callback functions invoked for timer tick and destroy events. 

**Parameters**: 

  * **timer** The native timer object. 
  * **closure** The closure passed to the timer create function. 


### function MamaTimer

```csharp
MamaTimer()
```

Construct a timer object. 

### function MamaTimer

```csharp
MamaTimer(
    IntPtr nativeHandle
)
```

Construct a timer object using a precreated native timer. 

**Parameters**: 

  * **nativeHandle** The native timer handle. 


### function create

```csharp
void create(
    MamaQueue queue,
    MamaTimerCallback action,
    double interval
)
```

Create a repeating timer. Since the [MamaTimer](classWombat_1_1MamaTimer.html) relies on the timer mechanism of the underlying middleware, the resolution of the timer is also dependent on the middleware. Consult your middleware documentation for details. The callback is invoked repeatedly at the specified interval until the timer is destroyed. A null value for the queue uses the default mama queue. 

**Parameters**: 

  * **queue** The queue from which the timer event will be dispatched. 
  * **action** The callback to be invoked after the interval 
  * **interval** The interval in seconds. 


### function create

```csharp
void create(
    MamaQueue queue,
    MamaTimerCallback action,
    double interval,
    object closure
)
```

Create a repeating timer. Since the [MamaTimer](classWombat_1_1MamaTimer.html) relies on the timer mechanism of the underlying middleware, the resolution of the timer is also dependent on the middleware. Consult your middleware documentation for details. The callback is invoked repeatedly at the specified interval until the timer is destroyed. A null value for the queue uses the default mama queue. 

**Parameters**: 

  * **queue** The queue from which the timer event will be dispatched. 
  * **action** The callback to be invoked after the interval 
  * **interval** The interval in seconds. 
  * **closure** Closure data for timer. 


### function destroy

```csharp
void destroy()
```

Destroy the timer. This function must be called from the same thread dispatching on the associated event queue unless both the default queue and dispatch queue are not actively dispatching. This is functionally equivalent to disposing the instance. 

### function getInterval

```csharp
double getInterval()
```

Get the current timer interval. 

**Return**: The interval in seconds. 

### function reset

```csharp
void reset()
```

Reset the timer to the beginning of the interval. 

### function setInterval

```csharp
void setInterval(
    double interval
)
```

Set the timer to use a different interval (and reset to the beginning of that interval). 

**Parameters**: 

  * **interval** The interval in settings. 


## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

This will be called by the base class to destroy the native timer. [MamaWrapper.DestroyNativePeer]()

**Return**: MAMA Status code 

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100