---
title: Wombat::MamaQueueGroup
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueueGroup



 [More...](#detailed-description)


`#include <MamaQueueGroup.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaQueueGroup](classWombat_1_1MamaQueueGroup.html#function-~mamaqueuegroup)**() |
| | **[MamaQueueGroup](classWombat_1_1MamaQueueGroup.html#function-mamaqueuegroup)**(int numberOfQueues, mamaBridge bridgeImpl) |
| virtual void | **[destroyWait](classWombat_1_1MamaQueueGroup.html#function-destroywait)**() |
| virtual [MamaQueue](classWombat_1_1MamaQueue.html) * | **[getNextQueue](classWombat_1_1MamaQueueGroup.html#function-getnextqueue)**() |
| [MamaQueue](classWombat_1_1MamaQueue.html) * | **[getQueueByIndex](classWombat_1_1MamaQueueGroup.html#function-getqueuebyindex)**(int index) |
| virtual int | **[getNumberOfQueues](classWombat_1_1MamaQueueGroup.html#function-getnumberofqueues)**() |
| virtual void | **[stopDispatch](classWombat_1_1MamaQueueGroup.html#function-stopdispatch)**() |
| virtual void | **[startDispatch](classWombat_1_1MamaQueueGroup.html#function-startdispatch)**() |

## Detailed Description

```cpp
class Wombat::MamaQueueGroup;
```


A simple class for allocating subscriptions amongst multiple queues in a round robin. This class creates dispatchers for the queues as well. 

## Public Functions Documentation

### function ~MamaQueueGroup

```cpp
virtual ~MamaQueueGroup()
```


### function MamaQueueGroup

```cpp
MamaQueueGroup(
    int numberOfQueues,
    mamaBridge bridgeImpl
)
```


If numberOfQueues == 0, getNextQueue returns the default queue for the bridge 


### function destroyWait

```cpp
virtual void destroyWait()
```


Destroy all the queues. Note that a queue can only be destroyed if all of the objects created on it, (timers, subscriptions etc), have been destroyed. This function will block until all of the objects have been destroyed and will then destroy the queues. 


### function getNextQueue

```cpp
virtual MamaQueue * getNextQueue()
```


Return the next available queue from the queue group. Queues are returned in a round robin fashion. 


### function getQueueByIndex

```cpp
MamaQueue * getQueueByIndex(
    int index
)
```


**Return**: pointer to queue object 

Return the requested Queue based on the given index, or NULL if it is not a valid index. 


### function getNumberOfQueues

```cpp
virtual int getNumberOfQueues()
```


Return the number of MamaQueues currently managed by this queue group. 


### function stopDispatch

```cpp
virtual void stopDispatch()
```


Stop dispatching on queues in the queue group. 


### function startDispatch

```cpp
virtual void startDispatch()
```


Start dispatching on all queues in a group. NOTE: This only should be used after a previous call to stopDispatch. Dispatching on a queue is started hwen it is created 


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100