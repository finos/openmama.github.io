---
title: mama/queue.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/queue.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[mamaQueueMonitorCallbacks_](structmamaQueueMonitorCallbacks__.html)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(MAMACALLTYPE *)(mamaQueue queue, size_t size, void *closure) | **[mamaQueueHighWatermarkExceededCb](queue_8h.html#typedef-mamaqueuehighwatermarkexceededcb)**  |
| typedef void(MAMACALLTYPE *)(mamaQueue queue, size_t size, void *closure) | **[mamaQueueLowWatermarkCb](queue_8h.html#typedef-mamaqueuelowwatermarkcb)**  |
| typedef struct [mamaQueueMonitorCallbacks_](structmamaQueueMonitorCallbacks__.html) | **[mamaQueueMonitorCallbacks](queue_8h.html#typedef-mamaqueuemonitorcallbacks)**  |
| typedef void(MAMACALLTYPE *)(mamaQueue queue, void *closure) | **[mamaQueueEnqueueCB](queue_8h.html#typedef-mamaqueueenqueuecb)**  |
| typedef void(MAMACALLTYPE *)(mamaQueue queue, void *closure) | **[mamaQueueEventCB](queue_8h.html#typedef-mamaqueueeventcb)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaQueue_create](queue_8h.html#function-mamaqueue-create)**(mamaQueue * queue, mamaBridge bridgeImpl) |
| MAMAExpDLL mama_status | **[mamaQueue_create_usingNative](queue_8h.html#function-mamaqueue-create-usingnative)**(mamaQueue * queue, mamaBridge bridgeImpl, void * nativeQueue) |
| MAMAExpDLL mama_status | **[mamaQueue_canDestroy](queue_8h.html#function-mamaqueue-candestroy)**(mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaQueue_destroy](queue_8h.html#function-mamaqueue-destroy)**(mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaQueue_destroyWait](queue_8h.html#function-mamaqueue-destroywait)**(mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaQueue_destroyTimedWait](queue_8h.html#function-mamaqueue-destroytimedwait)**(mamaQueue queue, long timeout) |
| MAMAExpDLL mama_status | **[mamaQueue_setHighWatermark](queue_8h.html#function-mamaqueue-sethighwatermark)**(mamaQueue queue, size_t highWatermark) |
| MAMAExpDLL mama_status | **[mamaQueue_getHighWatermark](queue_8h.html#function-mamaqueue-gethighwatermark)**(mamaQueue queue, size_t * highWatermark) |
| MAMAExpDLL mama_status | **[mamaQueue_setLowWatermark](queue_8h.html#function-mamaqueue-setlowwatermark)**(mamaQueue queue, size_t lowWatermark) |
| MAMAExpDLL mama_status | **[mamaQueue_getLowWatermark](queue_8h.html#function-mamaqueue-getlowwatermark)**(mamaQueue queue, size_t * lowWatermark) |
| MAMAExpDLL mama_status | **[mamaQueue_setQueueMonitorCallbacks](queue_8h.html#function-mamaqueue-setqueuemonitorcallbacks)**(mamaQueue queue, [mamaQueueMonitorCallbacks](structmamaQueueMonitorCallbacks__.html) * queueMonitorCallbacks, void * closure) |
| MAMAExpDLL mama_status | **[mamaQueue_getEventCount](queue_8h.html#function-mamaqueue-geteventcount)**(mamaQueue queue, size_t * count) |
| MAMAExpDLL mama_status | **[mamaQueue_setQueueName](queue_8h.html#function-mamaqueue-setqueuename)**(mamaQueue queue, const char * name) |
| MAMAExpDLL mama_status | **[mamaQueue_getQueueName](queue_8h.html#function-mamaqueue-getqueuename)**(mamaQueue queue, const char ** name) |
| MAMAExpDLL mama_status | **[mamaQueue_getQueueBridgeName](queue_8h.html#function-mamaqueue-getqueuebridgename)**(mamaQueue queue, const char ** name) |
| MAMAExpDLL mama_status | **[mamaQueue_dispatch](queue_8h.html#function-mamaqueue-dispatch)**(mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaQueue_timedDispatch](queue_8h.html#function-mamaqueue-timeddispatch)**(mamaQueue queue, uint64_t timeout) |
| MAMAExpDLL mama_status | **[mamaQueue_dispatchEvent](queue_8h.html#function-mamaqueue-dispatchevent)**(mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaQueue_enqueueEvent](queue_8h.html#function-mamaqueue-enqueueevent)**(mamaQueue queue, mamaQueueEventCB callback, void * closure) |
| MAMAExpDLL mama_status | **[mamaQueue_stopDispatch](queue_8h.html#function-mamaqueue-stopdispatch)**(mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaQueue_setEnqueueCallback](queue_8h.html#function-mamaqueue-setenqueuecallback)**(mamaQueue queue, mamaQueueEnqueueCB callback, void * closure) |
| MAMAExpDLL mama_status | **[mamaQueue_removeEnqueueCallback](queue_8h.html#function-mamaqueue-removeenqueuecallback)**(mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaQueue_getNativeHandle](queue_8h.html#function-mamaqueue-getnativehandle)**(mamaQueue queue, void ** nativeHandle) |
| MAMAExpDLL mama_status | **[mamaDispatcher_create](queue_8h.html#function-mamadispatcher-create)**(mamaDispatcher * result, mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaDispatcher_getQueue](queue_8h.html#function-mamadispatcher-getqueue)**(mamaDispatcher dispatcher, mamaQueue * result) |
| MAMAExpDLL mama_status | **[mamaQueue_enableStats](queue_8h.html#function-mamaqueue-enablestats)**(mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaDispatcher_destroy](queue_8h.html#function-mamadispatcher-destroy)**(mamaDispatcher dispatcher) |
| MAMAExpDLL mama_status | **[mamaQueue_getClosure](queue_8h.html#function-mamaqueue-getclosure)**(mamaQueue queue, void ** closure) |
| MAMAExpDLL mama_status | **[mamaQueue_setClosure](queue_8h.html#function-mamaqueue-setclosure)**(mamaQueue queue, void * closure) |

## Types Documentation

### typedef mamaQueueHighWatermarkExceededCb

```cpp
typedef void(MAMACALLTYPE * mamaQueueHighWatermarkExceededCb) (mamaQueue queue, size_t size, void *closure);
```


**Parameters**: 

  * **queue** The mamaQueue for which the size limit has been exceeded. NULL if the queue is the default internal MAMA queue. 
  * **size** The current number of events outstanding on the queue (if supported on the underlying middleware) 
  * **closure** User supplied data set when the callback was registered. NULL in the case of the default MAMA queue as no closure can be specified when registering the data quality callbacks. 


Callback invoked if an upper size limit has been specified for a queue and that limit has been exceeded.


### typedef mamaQueueLowWatermarkCb

```cpp
typedef void(MAMACALLTYPE * mamaQueueLowWatermarkCb) (mamaQueue queue, size_t size, void *closure);
```


Callback invoked when the queue size returns to the lower limit specified. Only Wombat TCP middleware supports low water mark callbacks. 


### typedef mamaQueueMonitorCallbacks

```cpp
typedef struct mamaQueueMonitorCallbacks_ mamaQueueMonitorCallbacks;
```


callbacks which may be invoked in response to certain conditions on the specified queue being met. 


### typedef mamaQueueEnqueueCB

```cpp
typedef void(MAMACALLTYPE * mamaQueueEnqueueCB) (mamaQueue queue, void *closure);
```


**Parameters**: 

  * **queue** The mamaQueue on which the function was registered. 
  * **closure** The user data supplied in the call to setEnqueueCallback. 


Function invoked when an event is enqueued on the queue for which this function was registered.

LBM Bridge: NB! Users may not dispatch events from this function when using with mamaQueue_setEnqueueCallback() The function is invoked from an LBM internal thread. Attempts to dispatch from here will result in a deadlock.


### typedef mamaQueueEventCB

```cpp
typedef void(MAMACALLTYPE * mamaQueueEventCB) (mamaQueue queue, void *closure);
```


**Parameters**: 

  * **queue** The MamaQueue on which the event was enqueued. 
  * **closure** The user specified data associated with this event. 


Function invoked when a user added event fires. Events are added to a queue using the `mamaQuque_enqueueEvent()`. 



## Functions Documentation

### function mamaQueue_create

```cpp
MAMAExpDLL mama_status mamaQueue_create(
    mamaQueue * queue,
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **queue** A pointer to the resulting queue. 
  * **bridgeImpl** A valid bridge implementation for which this queue is being created. 


**Return**: 

  * MAMA_STATUS_OK if the call succeeds. 
  * MAMA_STATUS_NO_BRIDGE_IMPL if the bridgeImpl parameter is not valid. 


Create a queue. Queues allow applications to dispatch events in order with multiple threads using a single mamaDispatcher for each queue. A queue must be associated with a particular middleware.


### function mamaQueue_create_usingNative

```cpp
MAMAExpDLL mama_status mamaQueue_create_usingNative(
    mamaQueue * queue,
    mamaBridge bridgeImpl,
    void * nativeQueue
)
```


### function mamaQueue_canDestroy

```cpp
MAMAExpDLL mama_status mamaQueue_canDestroy(
    mamaQueue queue
)
```


**Parameters**: 

  * **queue** The queue. 


**Return**: MAMA_STATUS_OK if the queue can be destroyed. MAMA_STATUS_QUEUE_OPEN_OBJECTS if there are still objects open against the queue. MAMA_STATUS_NULL_ARG 

Check to see if a queue can be destroyed. The queue cannot be destroyed if there are currently open event objects on it.


### function mamaQueue_destroy

```cpp
MAMAExpDLL mama_status mamaQueue_destroy(
    mamaQueue queue
)
```


**Parameters**: 

  * **queue** The queue. 


**Return**: MAMA_STATUS_OK if the call is successful. MAMA_STATUS_QUEUE_OPEN_OBJECTS if there are still objects open against the queue. 

Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed.


### function mamaQueue_destroyWait

```cpp
MAMAExpDLL mama_status mamaQueue_destroyWait(
    mamaQueue queue
)
```


**Parameters**: 

  * **queue** The queue. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue.


### function mamaQueue_destroyTimedWait

```cpp
MAMAExpDLL mama_status mamaQueue_destroyTimedWait(
    mamaQueue queue,
    long timeout
)
```


**Parameters**: 

  * **queue** The queue. 
  * **timeout** The time to block for in ms. 


**Return**: MAMA_STATUS_OK if the call is successful. MAMA_STATUS_TIMEOUT if the time elapsed. 

Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block for the specified time or until all of the objects have been destroyed and will then destroy the queue.


### function mamaQueue_setHighWatermark

```cpp
MAMAExpDLL mama_status mamaQueue_setHighWatermark(
    mamaQueue queue,
    size_t highWatermark
)
```


**Parameters**: 

  * **queue** The mamaQueue for which the high watermark is being set. 
  * **highWatermark** The size of the queue, beyond which, results in notification of activity. 


**Return**: MAMA_STATUS_OK if the function returns successfully. 

Specify a high watermark for events on the queue.

The behaviour for setting this value varies depending on the underlying middleware.

LBM: LBM uses an unbounded event queue. Setting this values allows users of the API to receive a callback if the value is exceeded. (See mamaQueue_setQueueMonitorCallback() for setting queue related callbacks) The default behaviour is for the queue to grow unbounded without notifications. The high watermark for LBM can be set for all queues at once by setting the mama.lbm.eventqueuemonitor.queue_size_warning property for the API. Calls to this function will override the value specified in mama.properties at runtime. Callbacks can be disabled by setting this value to 0, effectively disabling high watermark checking.

RV: This will set a queue limit policy of TIBRVQUEUE_DISCARD_FIRST whereby the oldest events in the queue are discarded first. The discard amount will be set with a value of 1, i.e. events will be dropped from the queue one at a time. The default behaviour is an unlimited queue which does not discard events.


### function mamaQueue_getHighWatermark

```cpp
MAMAExpDLL mama_status mamaQueue_getHighWatermark(
    mamaQueue queue,
    size_t * highWatermark
)
```


**Parameters**: 

  * **queue** The mamaQueue for which the high water mark is being retrieved 
  * **highWatermark** Address to which the high water mark will be written. 


Get the value of the high water mark for the specified queue. A value of 0 will be returned if no high water mark was previously specified.


### function mamaQueue_setLowWatermark

```cpp
MAMAExpDLL mama_status mamaQueue_setLowWatermark(
    mamaQueue queue,
    size_t lowWatermark
)
```


**Parameters**: 

  * **queue** The queue. 
  * **lowWatermark** the low watermark. 


Set the low water mark for the queue. Only supported by Wombat TCP middleware.

The low watermark must be >1 and < highWaterMark otherwise this method returns MAMA_STATUS_INVALID_ARG. For this reason the high water mark must be set before invoking this method.


### function mamaQueue_getLowWatermark

```cpp
MAMAExpDLL mama_status mamaQueue_getLowWatermark(
    mamaQueue queue,
    size_t * lowWatermark
)
```


**Parameters**: 

  * **queue** The mamaQueue for which the low water mark is being retrieved. 
  * **lowWatermark** Address to which the low water mark will be written. 


Get the value of the low water mark for the specified queue. A value of 1 will be returned if no low water mark was previously specified.


### function mamaQueue_setQueueMonitorCallbacks

```cpp
MAMAExpDLL mama_status mamaQueue_setQueueMonitorCallbacks(
    mamaQueue queue,
    mamaQueueMonitorCallbacks * queueMonitorCallbacks,
    void * closure
)
```


Specify a set of callbacks which may be invoked in response to certain conditions arising on the queue.

The behaviour here is middleware specific as not all will support all callbacks.

LBM: When the high watermark is exceeded the mamaQueueHighWatermarkExceededCb callback will invoked each time an event on the queue is dispatched until such time as the number of events on the queue falls below the high watermark. 


### function mamaQueue_getEventCount

```cpp
MAMAExpDLL mama_status mamaQueue_getEventCount(
    mamaQueue queue,
    size_t * count
)
```


**Parameters**: 

  * **queue** The queue. 
  * **count** Address to where the number of events on the queue will be written 


**Return**: MAMA_STATUS_OK if the call is successful. 

Writes the number of events currently on the specified queue to the address specified by count.


### function mamaQueue_setQueueName

```cpp
MAMAExpDLL mama_status mamaQueue_setQueueName(
    mamaQueue queue,
    const char * name
)
```


**Parameters**: 

  * **queue** The event queue for which the name is being specified. 
  * **name** The string identifier for the queue. 


**Return**: 

  * MAMA_STATUS_OK The function call succeeded. 
  * MAMA_STATUS_NULL_ARG The queue parameter is NULL 
  * MAMA_STATUS_INVALID_ARG The name parameter is NULL 
  * MAMA_STATUS_NO_MEM The name could not be copied. 


Associate a name identifier with the event queue. This will be used in queue related logging statements. The string is copied by the API.


### function mamaQueue_getQueueName

```cpp
MAMAExpDLL mama_status mamaQueue_getQueueName(
    mamaQueue queue,
    const char ** name
)
```


**Parameters**: 

  * **queue** The event queue for which the name is being sought. 
  * **name** Address to which the name will be written. 


**Return**: 

  * MAMA_STATUS_OK The function call succeeded. 
  * MAMA_STATUS_NULL_ARG The queue parameter was NULL 
  * MAMA_STATUS_INVALID_ARG The name parameter was NULL 


Get the string name identifier for the specified event queue.


### function mamaQueue_getQueueBridgeName

```cpp
MAMAExpDLL mama_status mamaQueue_getQueueBridgeName(
    mamaQueue queue,
    const char ** name
)
```


**Parameters**: 

  * **queue** The event queue for which the bridge name is being sought. 
  * **name** Address to which the name will be written. 


**Return**: 

  * MAMA_STATUS_OK The function call succeeded. 
  * MAMA_STATUS_NULL_ARG The queue parameter was NULL 


Get the string name identifier of the bridge for the specified event queue. Name will be either "wmw", "tibrv", or "lbm".


### function mamaQueue_dispatch

```cpp
MAMAExpDLL mama_status mamaQueue_dispatch(
    mamaQueue queue
)
```


**Parameters**: 

  * **queue** The queue. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Dispatch messages from the queue. This call blocks and dispatches until mamaQueue_stopDispatch() is called.


### function mamaQueue_timedDispatch

```cpp
MAMAExpDLL mama_status mamaQueue_timedDispatch(
    mamaQueue queue,
    uint64_t timeout
)
```


**Parameters**: 

  * **queue** The queue. 
  * **timeout** The maximum number of milliseconds to block for before the function returns. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Dispatch messages from the queue until timeout has elapsed. Some middleware implementations will always block until timeout (dispatching multiple times), whereas others will always unblock once the first event is dispatched or the timeout has elapsed - whichever comes first.


### function mamaQueue_dispatchEvent

```cpp
MAMAExpDLL mama_status mamaQueue_dispatchEvent(
    mamaQueue queue
)
```


**Parameters**: 

  * **queue** The queue from which to dispatch the event. 


**Return**: MAMA_STATUS_OK if the function succeeds. 

Dispatch a single event from the specified queue. If there is no event on the queue simply return and do nothing.


### function mamaQueue_enqueueEvent

```cpp
MAMAExpDLL mama_status mamaQueue_enqueueEvent(
    mamaQueue queue,
    mamaQueueEventCB callback,
    void * closure
)
```


**Parameters**: 

  * **queue** The queue to which the event is to be added 
  * **callback** The function to be invoked when the event fires. 
  * **closure** Optional arbitrary user supplied data. Passed back to callback function. 


**Return**: MAMA_STATUS_OK if the function succeeds. 

Add an user event to a queue. Currently only supported using Wombat Middleware.


### function mamaQueue_stopDispatch

```cpp
MAMAExpDLL mama_status mamaQueue_stopDispatch(
    mamaQueue queue
)
```


**Parameters**: 

  * **queue** The queue. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Unblock the queue as soon as possible. This will cause mamaDispatchers to exit. Creating a new dispatcher will resume dispatching events.


### function mamaQueue_setEnqueueCallback

```cpp
MAMAExpDLL mama_status mamaQueue_setEnqueueCallback(
    mamaQueue queue,
    mamaQueueEnqueueCB callback,
    void * closure
)
```


**Parameters**: 

  * **queue** The mamaQueue on which the callback should be registered. 
  * **callback** The function which should be invoked for each enqueue operation 
  * **closure** Optional arbitrary user supplied data. Passed back to callback function.


**Return**: MAMA_STATUS_OK if the call is successful. 

Register the specified callback function to receive a callback each time an event is enqueued on the specified mamaQueue


### function mamaQueue_removeEnqueueCallback

```cpp
MAMAExpDLL mama_status mamaQueue_removeEnqueueCallback(
    mamaQueue queue
)
```


**Parameters**: 

  * **queue** The mamaQueue for which the callback function should be removed. 


**Return**: MAMA_STATUS_OK if the call is successful. 

If the specified queue has a registered enqueue callback it is unregistered and the previously supplied callback function will no longer receive callbacks for enqueue events.


### function mamaQueue_getNativeHandle

```cpp
MAMAExpDLL mama_status mamaQueue_getNativeHandle(
    mamaQueue queue,
    void ** nativeHandle
)
```


**Parameters**: 

  * **queue** The mamaQueue for which the native handle is requested. 
  * **nativeHandle** The resulting native handle. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Get the native middleware implementation queue handle (if applicable for the implementation). This function is for internal use only.


### function mamaDispatcher_create

```cpp
MAMAExpDLL mama_status mamaDispatcher_create(
    mamaDispatcher * result,
    mamaQueue queue
)
```


**Parameters**: 

  * **result** A pointer to the resulting mamaDispatcher. 
  * **queue** The queue. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Create a mamaDispatcher. The dispatcher spawns a thread to dispatch events from a queue. It will continue to dispatch events until it is destroyed or mamaQueue_stopDispatch is called.

Only a single dispatcher can be created for a given queue. Attempting to create multiple dispatchers for a queue will result in and error. Dispatching message from a single queue with multiple threads results in messages arriving out of order and sequence number gaps for market data subscriptions.


### function mamaDispatcher_getQueue

```cpp
MAMAExpDLL mama_status mamaDispatcher_getQueue(
    mamaDispatcher dispatcher,
    mamaQueue * result
)
```


**Parameters**: 

  * **dispatcher** The dispatcher. 
  * **result** The queue. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Return the queue associated with the dispatcher.


### function mamaQueue_enableStats

```cpp
MAMAExpDLL mama_status mamaQueue_enableStats(
    mamaQueue queue
)
```


**Parameters**: 

  * **queue** The queue. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Enable stats logging on queue


### function mamaDispatcher_destroy

```cpp
MAMAExpDLL mama_status mamaDispatcher_destroy(
    mamaDispatcher dispatcher
)
```


**Parameters**: 

  * **dispatcher** The dispatcher. 


**Return**: MAMA_STATUS_OK if the call is successful. 

Destroy the dispatcher and stop dispatching events. If mamaDispatcher_createQueue() was used then the underlying queue will be destroyed as well.


### function mamaQueue_getClosure

```cpp
MAMAExpDLL mama_status mamaQueue_getClosure(
    mamaQueue queue,
    void ** closure
)
```


### function mamaQueue_setClosure

```cpp
MAMAExpDLL mama_status mamaQueue_setClosure(
    mamaQueue queue,
    void * closure
)
```




## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MamaQueueH__
#define MamaQueueH__

#include <mama/mama.h>
#include <mama/types.h>
#include <mama/status.h>

#if defined(__cplusplus)
extern "C" {
#endif

typedef void (MAMACALLTYPE *mamaQueueHighWatermarkExceededCb) (mamaQueue queue,
                                                               size_t    size,
                                                               void*     closure);

typedef void (MAMACALLTYPE *mamaQueueLowWatermarkCb) (mamaQueue queue,
                                                      size_t    size,
                                                      void*     closure);

typedef struct mamaQueueMonitorCallbacks_
{
    mamaQueueHighWatermarkExceededCb onQueueHighWatermarkExceeded;
    mamaQueueLowWatermarkCb          onQueueLowWatermark;
} mamaQueueMonitorCallbacks;

typedef void (MAMACALLTYPE *mamaQueueEnqueueCB)(mamaQueue queue, void* closure);

typedef void (MAMACALLTYPE *mamaQueueEventCB)(mamaQueue queue, void* closure);

MAMAExpDLL
extern mama_status
mamaQueue_create (mamaQueue* queue, mamaBridge bridgeImpl);


MAMAExpDLL
extern mama_status
mamaQueue_create_usingNative (mamaQueue* queue, mamaBridge bridgeImpl, void* nativeQueue);

MAMAExpDLL
extern mama_status
mamaQueue_canDestroy(mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaQueue_destroy (mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaQueue_destroyWait(mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaQueue_destroyTimedWait(mamaQueue queue, long timeout);

MAMAExpDLL
extern mama_status
mamaQueue_setHighWatermark (mamaQueue queue,
                            size_t highWatermark);

MAMAExpDLL
extern mama_status
mamaQueue_getHighWatermark (mamaQueue queue,
                            size_t*   highWatermark);

MAMAExpDLL
extern mama_status
mamaQueue_setLowWatermark (mamaQueue queue,
                           size_t lowWatermark);

MAMAExpDLL
extern mama_status
mamaQueue_getLowWatermark (mamaQueue queue,
                           size_t*   lowWatermark);

MAMAExpDLL
extern mama_status
mamaQueue_setQueueMonitorCallbacks (
                        mamaQueue                   queue,
                        mamaQueueMonitorCallbacks*  queueMonitorCallbacks,
                        void*                       closure);

MAMAExpDLL
extern mama_status
mamaQueue_getEventCount (mamaQueue queue, size_t* count);

MAMAExpDLL
extern mama_status
mamaQueue_setQueueName (mamaQueue queue, const char* name);

MAMAExpDLL
extern mama_status
mamaQueue_getQueueName (mamaQueue queue, const char** name);

MAMAExpDLL
extern mama_status
mamaQueue_getQueueBridgeName (mamaQueue queue, const char** name);


MAMAExpDLL
extern mama_status
mamaQueue_dispatch (mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaQueue_timedDispatch (mamaQueue queue, uint64_t timeout);

MAMAExpDLL
extern mama_status
mamaQueue_dispatchEvent (mamaQueue queue);


MAMAExpDLL
extern mama_status
mamaQueue_enqueueEvent  (mamaQueue          queue,
                         mamaQueueEventCB   callback,
                         void*              closure);

MAMAExpDLL
extern mama_status
mamaQueue_stopDispatch (mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaQueue_setEnqueueCallback (mamaQueue          queue,
                              mamaQueueEnqueueCB callback,
                              void*              closure);

MAMAExpDLL
extern mama_status
mamaQueue_removeEnqueueCallback (mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaQueue_getNativeHandle (mamaQueue queue,
                           void**    nativeHandle);

MAMAExpDLL
extern mama_status
mamaDispatcher_create (mamaDispatcher* result, mamaQueue queue);

MAMAExpDLL
extern mama_status
mamaDispatcher_getQueue (mamaDispatcher dispatcher, mamaQueue* result);

MAMAExpDLL
extern mama_status
mamaQueue_enableStats(mamaQueue queue);


MAMAExpDLL
extern mama_status
mamaDispatcher_destroy (mamaDispatcher dispatcher);

MAMAExpDLL
extern mama_status
mamaQueue_getClosure (mamaQueue queue, void** closure);

MAMAExpDLL
extern mama_status
mamaQueue_setClosure (mamaQueue queue, void* closure);
#if defined(__cplusplus)
}
#endif

#endif /*MamaQueueH__*/
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
