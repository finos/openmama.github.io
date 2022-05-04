---
title: com::wombat::mama::MamaTimerCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaTimerCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTimer](interfacecom_1_1wombat_1_1mama_1_1MamaTimerCallback.html#function-ontimer)**([MamaTimer](classcom_1_1wombat_1_1mama_1_1MamaTimer.html) timer) |
| void | **[onDestroy](interfacecom_1_1wombat_1_1mama_1_1MamaTimerCallback.html#function-ondestroy)**([MamaTimer](classcom_1_1wombat_1_1mama_1_1MamaTimer.html) timer) |

## Detailed Description

```java
class com::wombat::mama::MamaTimerCallback;
```


Concrete instances of this interface are registered with the creation of a [MamaTimer](classcom_1_1wombat_1_1mama_1_1MamaTimer.html) and used for processing timer event notifications. 

## Public Functions Documentation

### function onTimer

```java
void onTimer(
    MamaTimer timer
)
```


**Parameters**: 

  * **timer** The [MamaTimer](classcom_1_1wombat_1_1mama_1_1MamaTimer.html) object which resulted in this callback being invoked. 


Invoked when an event for a timer which has fired is dispatched from the associated event queue.


### function onDestroy

```java
void onDestroy(
    MamaTimer timer
)
```


**Parameters**: 

  * **timer** The [MamaTimer](classcom_1_1wombat_1_1mama_1_1MamaTimer.html). 


This method is invoked when a timer has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this timer.


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100