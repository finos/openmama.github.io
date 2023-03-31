---
title: mama/queuegroup.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/queuegroup.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaQueueGroup_create](queuegroup_8h.html#function-mamaqueuegroup-create)**(mamaQueueGroup * queueGroup, int numberOfQueues, mamaBridge bridgeImpl) |
| MAMAExpDLL mama_status | **[mamaQueueGroup_destroy](queuegroup_8h.html#function-mamaqueuegroup-destroy)**(mamaQueueGroup queueGroup) |
| MAMAExpDLL mama_status | **[mamaQueueGroup_getNextQueue](queuegroup_8h.html#function-mamaqueuegroup-getnextqueue)**(mamaQueueGroup queueGroup, mamaQueue * queue) |
| MAMAExpDLL mama_status | **[mamaQueueGroup_getQueueByIndex](queuegroup_8h.html#function-mamaqueuegroup-getqueuebyindex)**(mamaQueueGroup queueGroup, mamaQueue * queue, int index) |
| MAMAExpDLL mama_status | **[mamaQueueGroup_getNumberOfQueues](queuegroup_8h.html#function-mamaqueuegroup-getnumberofqueues)**(mamaQueueGroup queueGroup, int * count) |
| MAMAExpDLL mama_status | **[mamaQueueGroup_stopDispatch](queuegroup_8h.html#function-mamaqueuegroup-stopdispatch)**(mamaQueueGroup queueGroup) |
| MAMAExpDLL mama_status | **[mamaQueueGroup_startDispatch](queuegroup_8h.html#function-mamaqueuegroup-startdispatch)**(mamaQueueGroup queueGroup) |
| MAMAExpDLL mama_status | **[mamaQueueGroup_destroyWait](queuegroup_8h.html#function-mamaqueuegroup-destroywait)**(mamaQueueGroup queueGroup) |


## Functions Documentation

### function mamaQueueGroup_create

```cpp
MAMAExpDLL mama_status mamaQueueGroup_create(
    mamaQueueGroup * queueGroup,
    int numberOfQueues,
    mamaBridge bridgeImpl
)
```


**Parameters**: 

  * **queueGroup** A pointer which will be populated with a handle to this queue group on successful invocation. 
  * **numberOfQueues** The number of queues which this queue group will encapsulate. 
  * **bridgeImpl** Handle to the underlying MAMA bridge whose queue implementation this queue group will be built using. 


**Return**: A mama_status value to reflect if this operation was successful. 

Creates a MAMA Queue Group. A MAMA Queue Group provides a convenient way to define a series of queues which can then be used for strategic load balancing and locality of context. 


### function mamaQueueGroup_destroy

```cpp
MAMAExpDLL mama_status mamaQueueGroup_destroy(
    mamaQueueGroup queueGroup
)
```


**Parameters**: 

  * **queueGroup** A handle to the queue group to be destroyed 


**Return**: A mama_status value to reflect if this operation was successful. 

Destroys a given queue group along with underlying queues and dispatchers. 


### function mamaQueueGroup_getNextQueue

```cpp
MAMAExpDLL mama_status mamaQueueGroup_getNextQueue(
    mamaQueueGroup queueGroup,
    mamaQueue * queue
)
```


**Parameters**: 

  * **queueGroup** A handle to the queue group to be interrogated 
  * **queue** A queue pointer to populate with the result on successful execution 


**Return**: A mama_status value to reflect if this operation was successful. 

Returns the next queue to be selected when doing round robin dispatching. 


### function mamaQueueGroup_getQueueByIndex

```cpp
MAMAExpDLL mama_status mamaQueueGroup_getQueueByIndex(
    mamaQueueGroup queueGroup,
    mamaQueue * queue,
    int index
)
```


**Parameters**: 

  * **queueGroup** A handle to the queue group to be interrogated 
  * **queue** A queue pointer to populate with the result on successful execution 
  * **index** The queue index to request 


**Return**: A mama_status value to reflect if this operation was successful. 

Returns the specifically requested queue based on its index. 


### function mamaQueueGroup_getNumberOfQueues

```cpp
MAMAExpDLL mama_status mamaQueueGroup_getNumberOfQueues(
    mamaQueueGroup queueGroup,
    int * count
)
```


**Parameters**: 

  * **queueGroup** A handle to the queue group to be interrogated 
  * **count** A pointer to the result to populate with the number of queues on successful execution 


**Return**: A mama_status value to reflect if this operation was successful. 

Gather up the number of queues contained within this queue group. 


### function mamaQueueGroup_stopDispatch

```cpp
MAMAExpDLL mama_status mamaQueueGroup_stopDispatch(
    mamaQueueGroup queueGroup
)
```


**Parameters**: 

  * **queueGroup** The queue group to stop dispatching on 


**Return**: A mama_status value to reflect if this operation was successful. 

This will stop dispatching for all queues in the given queue group 


### function mamaQueueGroup_startDispatch

```cpp
MAMAExpDLL mama_status mamaQueueGroup_startDispatch(
    mamaQueueGroup queueGroup
)
```


**Parameters**: 

  * **queueGroup** The queue group to start dispatching on 


**Return**: A mama_status value to reflect if this operation was successful. 

This will start dispatching for all queues in the given queue group 


### function mamaQueueGroup_destroyWait

```cpp
MAMAExpDLL mama_status mamaQueueGroup_destroyWait(
    mamaQueueGroup queueGroup
)
```


**Parameters**: 

  * **queueGroup** The queue group to destroy. 


**Return**: A mama_status value to reflect if this operation was successful. 

This will destroy the given queue group by stopping dispatch, and waiting until queue is empty before returning. Note that mamaQueueGroup_destroy will still need to be called after this to destroy the underlying mamaQueueGroup handle. 




## Source code

```cpp
#ifndef MamaQueueGroupH__
#define MamaQueueGroupH__

#if defined(__cplusplus)
extern "C"
{
#endif

#include <mama/config.h>
#include <mama/status.h>
#include <mama/types.h>
#include <mama/queue.h>


MAMAExpDLL
extern mama_status
mamaQueueGroup_create (
        mamaQueueGroup* queueGroup,
        int numberOfQueues,
        mamaBridge bridgeImpl);

MAMAExpDLL
extern mama_status
mamaQueueGroup_destroy (
        mamaQueueGroup queueGroup);

MAMAExpDLL
extern mama_status
mamaQueueGroup_getNextQueue (
        mamaQueueGroup queueGroup,
        mamaQueue* queue);

MAMAExpDLL
extern mama_status
mamaQueueGroup_getQueueByIndex (
        mamaQueueGroup queueGroup,
        mamaQueue* queue,
        int index);

MAMAExpDLL
extern mama_status
mamaQueueGroup_getNumberOfQueues (
        mamaQueueGroup queueGroup,
        int* count);

MAMAExpDLL
extern mama_status
mamaQueueGroup_stopDispatch (
        mamaQueueGroup queueGroup);

MAMAExpDLL
extern mama_status
mamaQueueGroup_startDispatch (
        mamaQueueGroup queueGroup);

MAMAExpDLL
extern mama_status
mamaQueueGroup_destroyWait(
        mamaQueueGroup queueGroup);


#if defined(__cplusplus)
}
#endif

#endif /* MamaQueueGroupH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
