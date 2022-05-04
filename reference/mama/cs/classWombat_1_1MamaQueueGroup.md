---
title: Wombat::MamaQueueGroup
summary: A class for distributing events across multiple queues in a round robin fashion. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueueGroup



A class for distributing events across multiple queues in a round robin fashion. 

Inherits from IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaQueueGroup](classWombat_1_1MamaQueueGroup.html#function-mamaqueuegroup)**([MamaBridge](classWombat_1_1MamaBridge.html) bridgeImpl, int queueCount)<br>Construct a queue manager with given number of queues/threads  |
| void | **[destroy](classWombat_1_1MamaQueueGroup.html#function-destroy)**()<br>Destroy the queue group and destroy all the queues without waiting, this is equivalent to disposing the class.  |
| void | **[destroyWait](classWombat_1_1MamaQueueGroup.html#function-destroywait)**()<br>Destroy the queue group and destroy all the queues waiting on each queue, this is equivalent to disposing the class.  |
| void | **[Dispose](classWombat_1_1MamaQueueGroup.html#function-dispose)**()<br>Dispose managed and unmanaged resources. This will destroy all the queues without waiting for them to shutdown.  |
| void | **[start](classWombat_1_1MamaQueueGroup.html#function-start)**()<br>Start dispatching on all queues.  |
| void | **[stop](classWombat_1_1MamaQueueGroup.html#function-stop)**()<br>Stop dispatching on all queues.  |
| [MamaQueue](classWombat_1_1MamaQueue.html) | **[getNextQueue](classWombat_1_1MamaQueueGroup.html#function-getnextqueue)**()<br>This function will return the next queue since it was called last or the first queue in the group if this is the first time that it has been called. Note that when all queues have been returned it will go back to the start of the array.  |

## Public Functions Documentation

### function MamaQueueGroup

```csharp
MamaQueueGroup(
    MamaBridge bridgeImpl,
    int queueCount
)
```

Construct a queue manager with given number of queues/threads 

**Parameters**: 

  * **bridgeImpl** The mama bridge. 
  * **queueCount** The number of queues in the group. 


### function destroy

```csharp
void destroy()
```

Destroy the queue group and destroy all the queues without waiting, this is equivalent to disposing the class. 

### function destroyWait

```csharp
void destroyWait()
```

Destroy the queue group and destroy all the queues waiting on each queue, this is equivalent to disposing the class. 

### function Dispose

```csharp
void Dispose()
```

Dispose managed and unmanaged resources. This will destroy all the queues without waiting for them to shutdown. 

### function start

```csharp
void start()
```

Start dispatching on all queues. 

### function stop

```csharp
void stop()
```

Stop dispatching on all queues. 

### function getNextQueue

```csharp
MamaQueue getNextQueue()
```

This function will return the next queue since it was called last or the first queue in the group if this is the first time that it has been called. Note that when all queues have been returned it will go back to the start of the array. 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100