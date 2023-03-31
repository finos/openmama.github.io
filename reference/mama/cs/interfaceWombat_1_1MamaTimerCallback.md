---
title: Wombat::MamaTimerCallback
summary: Prototype for callback invoked by timer. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTimerCallback



Prototype for callback invoked by timer. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTimer](interfaceWombat_1_1MamaTimerCallback.html#function-ontimer)**([MamaTimer](classWombat_1_1MamaTimer.html) mamaTimer, object closure)<br>Prototype for callback invoked by timer.  |
| void | **[onDestroy](interfaceWombat_1_1MamaTimerCallback.html#function-ondestroy)**([MamaTimer](classWombat_1_1MamaTimer.html) mamaTimer, object closure)<br>This method is invoked when a timer has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this timer.  |

## Public Functions Documentation

### function onTimer

```csharp
void onTimer(
    MamaTimer mamaTimer,
    object closure
)
```

Prototype for callback invoked by timer. 

### function onDestroy

```csharp
void onDestroy(
    MamaTimer mamaTimer,
    object closure
)
```

This method is invoked when a timer has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this timer. 

**Parameters**: 

  * **mamaTimer** The mama timer. 
  * **closure** The closure passed to the create function. 


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100