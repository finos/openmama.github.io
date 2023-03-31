---
title: com::wombat::mama::MamaQueueGroup
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaQueueGroup



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaQueueGroup](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-mamaqueuegroup)**(int numberOfQueues, [MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html) bridge) |
| int | **[getNumberOfQueues](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-getnumberofqueues)**() |
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-destroy)**() |
| void | **[destroyWait](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-destroywait)**() |
| void | **[destroyTimedWait](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-destroytimedwait)**(long timeout) |
| [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) | **[getNextQueue](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-getnextqueue)**() |
| [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) | **[getQueueByIndex](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-getqueuebyindex)**(int index) |
| void | **[stopDispatch](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-stopdispatch)**() |
| void | **[startDispatch](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-startdispatch)**() |

## Detailed Description

```java
class com::wombat::mama::MamaQueueGroup;
```


A simple class for distributing events across multiple queues in a round robin. 

## Public Functions Documentation

### function MamaQueueGroup

```java
inline MamaQueueGroup(
    int numberOfQueues,
    MamaBridge bridge
)
```


**Parameters**: 

  * **numberOfQueues** The number of queues to create. 


Create a `[MamaQueueGroup](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html)` with the specified number of `[MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html)`s. If the number of queues is 0, `[getNextQueue()](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html#function-getnextqueue)` returns the default queue for the bridge.


### function getNumberOfQueues

```java
inline int getNumberOfQueues()
```


Return number of queues in the array. C++ returns 0 if the array is empty and the default queue is being used. 


### function destroy

```java
inline void destroy()
```


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if there are open objects. 


Destroy the queue, this function should only be called if there are no open objects against the queue. Use one of the other destroy functions to block until all objects have been cleaned up.


### function destroyWait

```java
inline void destroyWait()
```


Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue. 


### function destroyTimedWait

```java
inline void destroyTimedWait(
    long timeout
)
```


**Parameters**: 

  * **timeout** The time to block for in milliseconds. 


**Exceptions**: 

  * **[MamaException](classcom_1_1wombat_1_1mama_1_1MamaException.html)** will be thrown if the timeout elapses. 


Destroy a queue. Note that the queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queue.


### function getNextQueue

```java
inline MamaQueue getNextQueue()
```


**Return**: The next queue. 

Return the next queue. The queues are returned in a round robin.


### function getQueueByIndex

```java
inline MamaQueue getQueueByIndex(
    int index
)
```


**Return**: The queue object 

Return the requested Queue based on the given index, or null if it is not a valid index.


### function stopDispatch

```java
inline void stopDispatch()
```


### function startDispatch

```java
inline void startDispatch()
```


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100