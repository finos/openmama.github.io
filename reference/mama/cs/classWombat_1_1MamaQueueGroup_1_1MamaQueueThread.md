---
title: Wombat::MamaQueueGroup::MamaQueueThread
summary: This class provides a MAMA queue as well as a thread to process it. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaQueueGroup::MamaQueueThread



This class provides a MAMA queue as well as a thread to process it. 

Inherits from IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaQueueThread](classWombat_1_1MamaQueueGroup_1_1MamaQueueThread.html#function-mamaqueuethread)**([MamaBridge](classWombat_1_1MamaBridge.html) bridge)<br>Construct initialises all member variables including createing the thread.  |
| void | **[Dispose](classWombat_1_1MamaQueueGroup_1_1MamaQueueThread.html#function-dispose)**()<br>Disposable implementation destroys the class and kills the queue without waiting.  |

## Public Functions Documentation

### function MamaQueueThread

```csharp
MamaQueueThread(
    MamaBridge bridge
)
```

Construct initialises all member variables including createing the thread. 

**Parameters**: 

  * **bridge** The MAMA bridge. 


### function Dispose

```csharp
void Dispose()
```

Disposable implementation destroys the class and kills the queue without waiting. 

-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100