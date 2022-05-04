---
title: com::wombat::mama::MamaQueue
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaQueue





## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-getpointerval)**() |
| | **[MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-mamaqueue)**() |
| native void | **[create](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-create)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| native void | **[createUsingNative](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-createusingnative)**([MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge, Object nativeQueue) |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-destroy)**() |
| native void | **[destroyWait](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-destroywait)**() |
| native void | **[destroyTimedWait](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-destroytimedwait)**(long timeout) |
| native void | **[dispatch](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-dispatch)**() |
| native void | **[stopDispatch](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-stopdispatch)**() |
| native void | **[enqueueEvent](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-enqueueevent)**([MamaQueueEventCallback](interfacecom_1_1wombat_1_1mama_1_1MamaQueueEventCallback.html) callback, Object closure) |
| native void | **[setQueueMonitorCallback](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-setqueuemonitorcallback)**([MamaQueueMonitorCallback](interfacecom_1_1wombat_1_1mama_1_1MamaQueueMonitorCallback.html) callback) |
| native void | **[setHighWatermark](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-sethighwatermark)**(long highWatermark) |
| native long | **[getHighwatermark](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-gethighwatermark)**() |
| native void | **[setLowWatermark](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-setlowwatermark)**(long lowWatermark) |
| native long | **[getLowWatermark](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-getlowwatermark)**() |
| native void | **[setQueueName](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-setqueuename)**(String queueName) |
| native String | **[getQueueName](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-getqueuename)**() |
| native String | **[getQueueBridgeName](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-getqueuebridgename)**() |
| native long | **[getEventCount](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#function-geteventcount)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) | **[reuseableMsg](classcom_1_1wombat_1_1mama_1_1MamaQueue.html#variable-reuseablemsg)**  |

## Public Functions Documentation

### function getPointerVal

```java
inline long getPointerVal()
```


### function MamaQueue

```java
inline MamaQueue()
```


### function create

```java
native void create(
    MamaBridge bridge
)
```


### function createUsingNative

```java
native void createUsingNative(
    MamaBridge bridge,
    Object nativeQueue
)
```


### function destroy

```java
native void destroy()
```


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if there are open objects. 


Destroy the queue, this function should only be called if there are no open objects against the queue. Use one of the other destroy functions to block until all objects have been cleaned up.


### function destroyWait

```java
native void destroyWait()
```


Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue. 


### function destroyTimedWait

```java
native void destroyTimedWait(
    long timeout
)
```


**Parameters**: 

  * **timeout** The time to block for in milliseconds. 


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the timeout elapses. 


Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue.


### function dispatch

```java
native void dispatch()
```


### function stopDispatch

```java
native void stopDispatch()
```


### function enqueueEvent

```java
native void enqueueEvent(
    MamaQueueEventCallback callback,
    Object closure
)
```


### function setQueueMonitorCallback

```java
native void setQueueMonitorCallback(
    MamaQueueMonitorCallback callback
)
```


### function setHighWatermark

```java
native void setHighWatermark(
    long highWatermark
)
```


### function getHighwatermark

```java
native long getHighwatermark()
```


### function setLowWatermark

```java
native void setLowWatermark(
    long lowWatermark
)
```


### function getLowWatermark

```java
native long getLowWatermark()
```


### function setQueueName

```java
native void setQueueName(
    String queueName
)
```


### function getQueueName

```java
native String getQueueName()
```


### function getQueueBridgeName

```java
native String getQueueBridgeName()
```


### function getEventCount

```java
native long getEventCount()
```


## Public Attributes Documentation

### variable reuseableMsg

```java
MamaMsg reuseableMsg = null;
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100