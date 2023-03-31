---
title: Wombat::MamaDispatcher
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDispatcher



 [More...](#detailed-description)


`#include <MamaDispatcher.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~MamaDispatcher](classWombat_1_1MamaDispatcher.html#function-~mamadispatcher)**(void ) |
| | **[MamaDispatcher](classWombat_1_1MamaDispatcher.html#function-mamadispatcher)**(void ) |
| void | **[create](classWombat_1_1MamaDispatcher.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue) |
| void | **[destroy](classWombat_1_1MamaDispatcher.html#function-destroy)**(void ) |

## Detailed Description

```cpp
class Wombat::MamaDispatcher;
```


The dispatcher dispatches events from a queue until it is destroyed or MamaQueue->stopDispatch () is called. 

## Public Functions Documentation

### function ~MamaDispatcher

```cpp
~MamaDispatcher(
    void 
)
```


### function MamaDispatcher

```cpp
MamaDispatcher(
    void 
)
```


### function create

```cpp
void create(
    MamaQueue * queue
)
```


**Parameters**: 

  * **queue** The [MamaQueue](classWombat_1_1MamaQueue.html). 


Create a mamaDispatcher. The dispatcher spawns a thread to dispatch events from a queue. It will continue to dispatch events until it is destroyed or mamaQueue_stopDispatch is called.

Only a single dispatcher can be created for a given queue. Attempting to create multiple dispatchers for a queue will result in and error. Dispatching message from a single queue with multiple threads results in messages arriving out of order and sequence number gaps for market data subscriptions.


### function destroy

```cpp
void destroy(
    void 
)
```


Destroy the dispatcher; 


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100