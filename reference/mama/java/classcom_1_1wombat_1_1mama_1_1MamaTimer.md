---
title: com::wombat::mama::MamaTimer
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaTimer





## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getPointerVal](classcom_1_1wombat_1_1mama_1_1MamaTimer.html#function-getpointerval)**() |
| native void | **[create](classcom_1_1wombat_1_1mama_1_1MamaTimer.html#function-create)**([MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaTimerCallback](interfacecom_1_1wombat_1_1mama_1_1MamaTimerCallback.html) callback, double interval) |
| void | **[create](classcom_1_1wombat_1_1mama_1_1MamaTimer.html#function-create)**([MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaTimerCallback](interfacecom_1_1wombat_1_1mama_1_1MamaTimerCallback.html) callback, double interval, Object closure) |
| native void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaTimer.html#function-destroy)**() |
| native void | **[resetInterval](classcom_1_1wombat_1_1mama_1_1MamaTimer.html#function-resetinterval)**(double interval) |
| native double | **[getInterval](classcom_1_1wombat_1_1mama_1_1MamaTimer.html#function-getinterval)**() |
| native void | **[reset](classcom_1_1wombat_1_1mama_1_1MamaTimer.html#function-reset)**() |
| Object | **[getClosure](classcom_1_1wombat_1_1mama_1_1MamaTimer.html#function-getclosure)**() |

## Public Functions Documentation

### function getPointerVal

```java
inline long getPointerVal()
```


### function create

```java
native void create(
    MamaQueue queue,
    MamaTimerCallback callback,
    double interval
)
```


**Parameters**: 

  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **callback** The object implementing the callback functions. 
  * **interval** The timer interval in seconds. 


Create a timer.


### function create

```java
inline void create(
    MamaQueue queue,
    MamaTimerCallback callback,
    double interval,
    Object closure
)
```


**Parameters**: 

  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **callback** The object implementing the callback functions. 
  * **interval** The timer interval in seconds. 
  * **closure** The closure will be passed to subsequent callback invocations for this subscription. 


Create a timer.


### function destroy

```java
native void destroy()
```


### function resetInterval

```java
native void resetInterval(
    double interval
)
```


### function getInterval

```java
native double getInterval()
```


### function reset

```java
native void reset()
```


### function getClosure

```java
inline Object getClosure()
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100