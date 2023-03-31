---
title: Wombat::MamaQueue
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueue



 [More...](#detailed-description)


`#include <MamaQueue.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaQueue](classWombat_1_1MamaQueue.html#function-mamaqueue)**(void ) |
| | **[MamaQueue](classWombat_1_1MamaQueue.html#function-mamaqueue)**(mamaQueue cQueue) |
| virtual | **[~MamaQueue](classWombat_1_1MamaQueue.html#function-~mamaqueue)**(void ) |
| virtual void | **[create](classWombat_1_1MamaQueue.html#function-create)**(mamaBridge bridgeImpl) |
| virtual void | **[create](classWombat_1_1MamaQueue.html#function-create)**(mamaBridge bridgeImpl, void * nativeQueue) |
| virtual void | **[dispatch](classWombat_1_1MamaQueue.html#function-dispatch)**() |
| virtual void | **[timedDispatch](classWombat_1_1MamaQueue.html#function-timeddispatch)**(uint64_t timeout) |
| virtual void | **[dispatchEvent](classWombat_1_1MamaQueue.html#function-dispatchevent)**() |
| virtual void | **[enqueueEvent](classWombat_1_1MamaQueue.html#function-enqueueevent)**([MamaQueueEventCallback](classWombat_1_1MamaQueueEventCallback.html) * callback, void * closure) |
| virtual void | **[enqueueEvent](classWombat_1_1MamaQueue.html#function-enqueueevent)**([MamaQueueEventCallback](classWombat_1_1MamaQueueEventCallback.html) & callback, void * closure) |
| virtual void | **[stopDispatch](classWombat_1_1MamaQueue.html#function-stopdispatch)**() |
| virtual size_t | **[getEventCount](classWombat_1_1MamaQueue.html#function-geteventcount)**() |
| virtual void | **[setEnqueueCallback](classWombat_1_1MamaQueue.html#function-setenqueuecallback)**([MamaQueueEnqueueCallback](classWombat_1_1MamaQueueEnqueueCallback.html) * cb, void * closure) |
| virtual void | **[setQueueMonitorCallback](classWombat_1_1MamaQueue.html#function-setqueuemonitorcallback)**([MamaQueueMonitorCallback](classWombat_1_1MamaQueueMonitorCallback.html) * cb, void * closure) |
| virtual void | **[setHighWatermark](classWombat_1_1MamaQueue.html#function-sethighwatermark)**(size_t highWatermark) |
| virtual size_t | **[getHighWatermark](classWombat_1_1MamaQueue.html#function-gethighwatermark)**(void ) const |
| virtual void | **[setLowWatermark](classWombat_1_1MamaQueue.html#function-setlowwatermark)**(size_t lowWatermark) |
| virtual size_t | **[getLowWatermark](classWombat_1_1MamaQueue.html#function-getlowwatermark)**(void ) const |
| virtual void | **[setQueueName](classWombat_1_1MamaQueue.html#function-setqueuename)**(const char * name) |
| virtual const char * | **[getQueueName](classWombat_1_1MamaQueue.html#function-getqueuename)**() const |
| virtual const char * | **[getQueueBridgeName](classWombat_1_1MamaQueue.html#function-getqueuebridgename)**() const |
| virtual void | **[destroy](classWombat_1_1MamaQueue.html#function-destroy)**() |
| virtual void | **[setClosure](classWombat_1_1MamaQueue.html#function-setclosure)**(void * closure) |
| virtual void * | **[getClosure](classWombat_1_1MamaQueue.html#function-getclosure)**() |
| virtual void | **[destroyTimedWait](classWombat_1_1MamaQueue.html#function-destroytimedwait)**(long timeout) |
| virtual void | **[destroyWait](classWombat_1_1MamaQueue.html#function-destroywait)**() |
| mamaQueue | **[getCValue](classWombat_1_1MamaQueue.html#function-getcvalue)**() |
| const mamaQueue | **[getCValue](classWombat_1_1MamaQueue.html#function-getcvalue)**() const |
| void | **[setCValue](classWombat_1_1MamaQueue.html#function-setcvalue)**(mamaQueue cQueue) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaQueueImpl * | **[mPimpl](classWombat_1_1MamaQueue.html#variable-mpimpl)**  |

## Detailed Description

```cpp
class Wombat::MamaQueue;
```


Queue allows applications to dispatch events in order with multiple threads using a single [MamaDispatcher](classWombat_1_1MamaDispatcher.html) for each queue. 

## Public Functions Documentation

### function MamaQueue

```cpp
MamaQueue(
    void 
)
```


### function MamaQueue

```cpp
MamaQueue(
    mamaQueue cQueue
)
```


### function ~MamaQueue

```cpp
virtual ~MamaQueue(
    void 
)
```


### function create

```cpp
virtual void create(
    mamaBridge bridgeImpl
)
```


**Return**: a pointer the queue. 

Create a queue. Queues allow applications to dispatch events in order with multiple threads using a single mamaDispatcher for each queue.

Callers should call delete queue when done.


### function create

```cpp
virtual void create(
    mamaBridge bridgeImpl,
    void * nativeQueue
)
```


### function dispatch

```cpp
virtual void dispatch()
```


Dispatch message. Blocks and dispatches messages until unblock is called. 


### function timedDispatch

```cpp
virtual void timedDispatch(
    uint64_t timeout
)
```


Dispatch messages from the queue until timeout has elapsed. Some middleware implementations will always block until timeout (dispatching multiple times), whereas others will always unblock once the first event is dispatched or the timeout has elapsed - whichever comes first. 


### function dispatchEvent

```cpp
virtual void dispatchEvent()
```


Dispatch a single event from the specified queue. If there is no event on the queue simply return and do nothing 


### function enqueueEvent

```cpp
virtual void enqueueEvent(
    MamaQueueEventCallback * callback,
    void * closure
)
```


**Parameters**: 

  * **callback** Instance of the [MamaQueueEventCallback](classWombat_1_1MamaQueueEventCallback.html) interface. [MamaQueueEventCallback.onEvent()](classWombat_1_1MamaQueueEventCallback.html#function-onevent) will be invoked when the event fires. 
  * **closure** Optional user supplied arbitrary closure data which will be passed back in the [MamaQueueEventCallback.onEvent](classWombat_1_1MamaQueueEventCallback.html#function-onevent)) callback 


**Exceptions**: 

  * **MamaException** Not currently implemented for pure Java API. 


Add a user event to a queue.


### function enqueueEvent

```cpp
virtual void enqueueEvent(
    MamaQueueEventCallback & callback,
    void * closure
)
```


### function stopDispatch

```cpp
virtual void stopDispatch()
```


stopDispatch the queue. 


### function getEventCount

```cpp
virtual size_t getEventCount()
```


**Return**: size_t The number of the events on the queue. 

Returns the number of events currently on the queue.


### function setEnqueueCallback

```cpp
virtual void setEnqueueCallback(
    MamaQueueEnqueueCallback * cb,
    void * closure
)
```


**Parameters**: 

  * **cb** Pointer to an instance of [MamaQueueEnqueueCallback](classWombat_1_1MamaQueueEnqueueCallback.html)
  * **closure** Arbitrary user supplied data. Passed back to onEventEnqueue() for each event enqueued. 


Set a callback which will be invoked as each event is added to the underlying event queue.


### function setQueueMonitorCallback

```cpp
virtual void setQueueMonitorCallback(
    MamaQueueMonitorCallback * cb,
    void * closure
)
```


**Parameters**: 

  * **cb** Reference to the object which will receive callbacks. 
  * **closure** User supplied data which will be returned as the callbacks are invoked. 


Register an object to receive callbacks for monitoring the behaviour of the [MamaQueue](classWombat_1_1MamaQueue.html).


### function setHighWatermark

```cpp
virtual void setHighWatermark(
    size_t highWatermark
)
```


Specify a high watermark for events on the queue.

The behaviour for setting this value varies depending on the underlying middleware.

LBM: LBM uses an unbounded event queue. Setting this values allows users of the API to receive a callback if the value is exceeded. (See mamaQueue_setQueueMonitorCallback() for setting queue related callbacks) the default behaviour is for the queue to grow unbounded without notifications. The high watermark for LBM can be set for all queues at once by setting the mama.lbm.eventqueuemonitor.queue_size_warning property for the API. Calls to this function will override the value specified in mama.properties.

RV: This will set a queue limit policy of TIBRVQUEUE_DISCARD_FIRST whereby the oldest events in the queue are discarded first. The discard amount will be set with a value of 1. i.e. events will be dropped from the queue one at a time. The default behaviour is an unlimited queue which does not discard events. 


### function getHighWatermark

```cpp
virtual size_t getHighWatermark(
    void 
) const
```


Return the high water mark as set via `setHighWaterMark()`


### function setLowWatermark

```cpp
virtual void setLowWatermark(
    size_t lowWatermark
)
```


**Parameters**: 

  * **lowWatermark** The low water mark. 


Set the low watermark. Only supported for Wombat TCP middleware. 


### function getLowWatermark

```cpp
virtual size_t getLowWatermark(
    void 
) const
```


Return the low water mark as set via `setLowWaterMark()`


### function setQueueName

```cpp
virtual void setQueueName(
    const char * name
)
```


**Parameters**: 

  * **name** The string name identifier for the queue. 


Associate a name identifier with the event queue. This will be used in queue related logging statements. The string is copied by the API.


### function getQueueName

```cpp
virtual const char * getQueueName() const
```


**Return**: The name identifier for the [MamaQueue](classWombat_1_1MamaQueue.html). 

Retrieve the string name identifier for the queue as specified from a call to `[setQueueName()](classWombat_1_1MamaQueue.html#function-setqueuename)`. If a name has not been specified via a call to`[setQueueName()](classWombat_1_1MamaQueue.html#function-setqueuename)` the queue will assume a default name of "NO_NAME"


### function getQueueBridgeName

```cpp
virtual const char * getQueueBridgeName() const
```


**Return**: The name identifier for the bridge: "wmw", "lbm", or "tibrv". 

Retrieve the string name identifier for the queue's bridge.


### function destroy

```cpp
virtual void destroy()
```


**Parameters**: 

  * **queue** The queue. 


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** with a code of MAMA_STATUS_QUEUE_OPEN_OBJECTS if there are still objects open against the queue. 


Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed.


### function setClosure

```cpp
virtual void setClosure(
    void * closure
)
```


### function getClosure

```cpp
virtual void * getClosure()
```


### function destroyTimedWait

```cpp
virtual void destroyTimedWait(
    long timeout
)
```


**Parameters**: 

  * **timeout** The time to block for in ms. 


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** with a code of MAMA_STATUS_TIMEOUT if the time elapsed. 


Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block for the specified time or until all of the objects have been destroyed and will then destroy the queue.


### function destroyWait

```cpp
virtual void destroyWait()
```


Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue. 


### function getCValue

```cpp
mamaQueue getCValue()
```


Access to C types for implementation of related classes. 


### function getCValue

```cpp
const mamaQueue getCValue() const
```


### function setCValue

```cpp
void setCValue(
    mamaQueue cQueue
)
```


This can only be set once and only if the c value is not already set - E.g. from calling [create()](classWombat_1_1MamaQueue.html#function-create)


## Public Attributes Documentation

### variable mPimpl

```cpp
MamaQueueImpl * mPimpl;
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100