---
title: Wombat::MamaTimer
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTimer



 [More...](#detailed-description)


`#include <MamaTimer.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaTimer](classWombat_1_1MamaTimer.html#function-mamatimer)**(void ) |
| virtual | **[~MamaTimer](classWombat_1_1MamaTimer.html#function-~mamatimer)**(void ) |
| virtual void | **[create](classWombat_1_1MamaTimer.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaTimerCallback](classWombat_1_1MamaTimerCallback.html) * callback, mama_f64_t interval, void * closure =NULL) |
| virtual void | **[destroy](classWombat_1_1MamaTimer.html#function-destroy)**() |
| virtual bool | **[isActive](classWombat_1_1MamaTimer.html#function-isactive)**() const |
| virtual void | **[reset](classWombat_1_1MamaTimer.html#function-reset)**() |
| virtual void | **[setInterval](classWombat_1_1MamaTimer.html#function-setinterval)**(mama_f64_t intervalSeconds) |
| virtual mama_f64_t | **[getInterval](classWombat_1_1MamaTimer.html#function-getinterval)**() const |
| virtual [MamaTimerCallback](classWombat_1_1MamaTimerCallback.html) * | **[getCallback](classWombat_1_1MamaTimer.html#function-getcallback)**() const |
| virtual void * | **[getClosure](classWombat_1_1MamaTimer.html#function-getclosure)**() const |
| mamaTimer | **[getCValue](classWombat_1_1MamaTimer.html#function-getcvalue)**() |
| const mamaTimer | **[getCValue](classWombat_1_1MamaTimer.html#function-getcvalue)**() const |

## Detailed Description

```cpp
class Wombat::MamaTimer;
```


A repeating timer. The callback will be repeatedly called at the specified interval until the timer is destroyed. To restart the timer after destroying it if [destroy()](classWombat_1_1MamaTimer.html#function-destroy), use [create()](classWombat_1_1MamaTimer.html#function-create). To reset the timer to the beginning of the given interval, use [reset()](classWombat_1_1MamaTimer.html#function-reset). To set the timer to a different interval, use [setInterval()](classWombat_1_1MamaTimer.html#function-setinterval).

The MAMA timer relies on underlying middleware so its resolution is also dependent on the middleware. 

## Public Functions Documentation

### function MamaTimer

```cpp
MamaTimer(
    void 
)
```


### function ~MamaTimer

```cpp
virtual ~MamaTimer(
    void 
)
```


### function create

```cpp
virtual void create(
    MamaQueue * queue,
    MamaTimerCallback * callback,
    mama_f64_t interval,
    void * closure =NULL
)
```


**Parameters**: 

  * **queue** The queue. 
  * **callback** The callback. 
  * **interval** The interval in seconds. 
  * **closure** The caller supplied closure. 


Create a repeating timer. The interval is in seconds.

The queue is the queue from which the timer event will be dispatched.


### function destroy

```cpp
virtual void destroy()
```


Destroy (stop) the timer. 

 This function must be called from the same thread dispatching on the associated event queue unless both the default queue and dispatch queue are not actively dispatching. 


### function isActive

```cpp
virtual bool isActive() const
```


Return whether the timer is active. 


### function reset

```cpp
virtual void reset()
```


Reset the timer to the beginning of the interval. 


### function setInterval

```cpp
virtual void setInterval(
    mama_f64_t intervalSeconds
)
```


Set the timer to use a different interval (and reset to the beginning of that interval). 


### function getInterval

```cpp
virtual mama_f64_t getInterval() const
```


Get the current timer interval. 


### function getCallback

```cpp
virtual MamaTimerCallback * getCallback() const
```


**Return**: the callback. 

Return the callback for the timer.


### function getClosure

```cpp
virtual void * getClosure() const
```


**Return**: the closure. 

Return the closure for the timer.


### function getCValue

```cpp
mamaTimer getCValue()
```


### function getCValue

```cpp
const mamaTimer getCValue() const
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100