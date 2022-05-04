---
title: mama/timer.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/timer.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(MAMACALLTYPE *)(mamaTimer timer, void *closure) | **[mamaTimerCb](timer_8h.html#typedef-mamatimercb)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaTimer_create](timer_8h.html#function-mamatimer-create)**(mamaTimer * result, mamaQueue queue, mamaTimerCb action, mama_f64_t interval, void * closure) |
| MAMAExpDLL mama_status | **[mamaTimer_create2](timer_8h.html#function-mamatimer-create2)**(mamaTimer * result, mamaQueue queue, mamaTimerCb action, mamaTimerCb onTimerDestroyed, mama_f64_t interval, void * closure) |
| MAMAExpDLL mama_status | **[mamaTimer_allocate](timer_8h.html#function-mamatimer-allocate)**(mamaTimer * result, mamaQueue queue) |
| MAMAExpDLL mama_status | **[mamaTimer_allocate2](timer_8h.html#function-mamatimer-allocate2)**(mamaTimer * result, mamaQueue queue, mamaTimerCb onTimerDestroyed) |
| MAMAExpDLL mama_status | **[mamaTimer_start](timer_8h.html#function-mamatimer-start)**(mamaTimer result, mamaTimerCb action, mama_f64_t interval, void * closure) |
| MAMAExpDLL mama_status | **[mamaTimer_destroy](timer_8h.html#function-mamatimer-destroy)**(mamaTimer timer) |
| MAMAExpDLL mama_status | **[mamaTimer_reset](timer_8h.html#function-mamatimer-reset)**(mamaTimer timer) |
| MAMAExpDLL mama_status | **[mamaTimer_setInterval](timer_8h.html#function-mamatimer-setinterval)**(mamaTimer timer, mama_f64_t interval) |
| MAMAExpDLL mama_status | **[mamaTimer_getInterval](timer_8h.html#function-mamatimer-getinterval)**(const mamaTimer timer, mama_f64_t * interval) |
| MAMAExpDLL mama_status | **[mamaTimer_getQueue](timer_8h.html#function-mamatimer-getqueue)**(const mamaTimer timer, mamaQueue * queue) |

## Types Documentation

### typedef mamaTimerCb

```cpp
typedef void(MAMACALLTYPE * mamaTimerCb) (mamaTimer timer, void *closure);
```


**Parameters**: 

  * **timer** The timer handle. 
  * **closure** Caller supplied closure. 


Prototype for callback invoked by timer.



## Functions Documentation

### function mamaTimer_create

```cpp
MAMAExpDLL mama_status mamaTimer_create(
    mamaTimer * result,
    mamaQueue queue,
    mamaTimerCb action,
    mama_f64_t interval,
    void * closure
)
```


**Parameters**: 

  * **result** A pointer to the timer handle. 
  * **queue** The queue from which the timer event will be dispatched. 
  * **action** The callback to be invoked after the interval. 
  * **closure** The closure that is passed to the callback. 
  * **interval** The interval in seconds. 


Create a repeating timer. Since the mamaTimer relies on the timer mechanism of the underlying middleware, the resolution of the timer is also dependent on the middleware. Consult your middleware documentation for details.

The callback is invoked repeatedly at the specified interval until the timer is destroyed.


### function mamaTimer_create2

```cpp
MAMAExpDLL mama_status mamaTimer_create2(
    mamaTimer * result,
    mamaQueue queue,
    mamaTimerCb action,
    mamaTimerCb onTimerDestroyed,
    mama_f64_t interval,
    void * closure
)
```


**Parameters**: 

  * **result** A pointer to the timer handle. 
  * **queue** The queue from which the timer event will be dispatched. 
  * **action** The callback to be invoked after the interval. 
  * **onTimerDestroyed** This callback will be invoked whenever the timer is destroyed, can be NULL. 
  * **closure** The closure that is passed to the callback. 
  * **interval** The interval in seconds. 


Create a repeating timer. Since the mamaTimer relies on the timer mechanism of the underlying middleware, the resolution of the timer is also dependent on the middleware. Consult your middleware documentation for details.

The callback is invoked repeatedly at the specified interval until the timer is destroyed.


### function mamaTimer_allocate

```cpp
MAMAExpDLL mama_status mamaTimer_allocate(
    mamaTimer * result,
    mamaQueue queue
)
```


**Parameters**: 

  * **result** A pointer to the timer handle. 
  * **queue** The queue from which the timer event will be dispatched. 


Allocate a repeating timer.


### function mamaTimer_allocate2

```cpp
MAMAExpDLL mama_status mamaTimer_allocate2(
    mamaTimer * result,
    mamaQueue queue,
    mamaTimerCb onTimerDestroyed
)
```


**Parameters**: 

  * **result** A pointer to the timer handle. 
  * **queue** The queue from which the timer event will be dispatched. 
  * **onTimerDestroyed** Callback will be invoked whenever the timer has been completely destroyed. 


Allocate a repeating timer.


### function mamaTimer_start

```cpp
MAMAExpDLL mama_status mamaTimer_start(
    mamaTimer result,
    mamaTimerCb action,
    mama_f64_t interval,
    void * closure
)
```


**Parameters**: 

  * **result** The timer handle returned from allocate. 
  * **queue** The queue from which the timer event will be dispatched. 
  * **action** The callback to be invoked after the interval. 
  * **closure** The closure that is passed to the callback. 
  * **interval** The interval in seconds. 


Start a repeating timer created using allocate

The callback is invoked repeatedly at the specified interval until the timer is destroyed.


### function mamaTimer_destroy

```cpp
MAMAExpDLL mama_status mamaTimer_destroy(
    mamaTimer timer
)
```


**Parameters**: 

  * **timer** The mamaTimer to be destroyed. 


Destroy the timer. This function must be called from the same thread dispatching on the associated event queue unless both the default queue and dispatch queue are not actively dispatching. Note that this function is asynchronous and is only guaranteed to have finished whenever the onTimerDestroyed function passed to the mamaTimer_create2 has been called. 


### function mamaTimer_reset

```cpp
MAMAExpDLL mama_status mamaTimer_reset(
    mamaTimer timer
)
```


**Parameters**: 

  * **timer** The mamaTimer to be reset. 


Reset the timer to the beginning of the interval.


### function mamaTimer_setInterval

```cpp
MAMAExpDLL mama_status mamaTimer_setInterval(
    mamaTimer timer,
    mama_f64_t interval
)
```


**Parameters**: 

  * **timer** The mamaTimer to change the interval. 
  * **interval** The new interval for the timer. 


Set the timer to use a different interval (and reset to the beginning of that interval).


### function mamaTimer_getInterval

```cpp
MAMAExpDLL mama_status mamaTimer_getInterval(
    const mamaTimer timer,
    mama_f64_t * interval
)
```


**Parameters**: 

  * **timer** The mamaTimer. 
  * **interval** Address of the location where the interval will be written. 


Get the current timer interval.


### function mamaTimer_getQueue

```cpp
MAMAExpDLL mama_status mamaTimer_getQueue(
    const mamaTimer timer,
    mamaQueue * queue
)
```


**Parameters**: 

  * **timer** The timer. 
  * **queue** A pointer to hold the queue. 


Return the `mamaQueue` for this timer.




## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef WTimerH__
#define WTimerH__

#include <mama/status.h>
#include <mama/types.h>
#include <mama/queue.h>

#if defined( __cplusplus )
extern "C"
{
#endif /* defined( __cplusplus ) */

typedef void (MAMACALLTYPE *mamaTimerCb)(mamaTimer timer, void *closure); 

MAMAExpDLL
extern mama_status 
mamaTimer_create(mamaTimer*   result,
                 mamaQueue    queue,
                 mamaTimerCb  action, 
                 mama_f64_t   interval,
                 void*        closure);

MAMAExpDLL
extern mama_status
mamaTimer_create2(mamaTimer*   result,
                  mamaQueue    queue,
                  mamaTimerCb  action, 
                  mamaTimerCb  onTimerDestroyed, 
                  mama_f64_t   interval,
                  void*        closure);

MAMAExpDLL
extern mama_status 
mamaTimer_allocate(mamaTimer*   result,
                   mamaQueue    queue);

MAMAExpDLL
extern mama_status
mamaTimer_allocate2(mamaTimer*   result,
                    mamaQueue    queue,
                    mamaTimerCb  onTimerDestroyed);

MAMAExpDLL
extern mama_status
mamaTimer_start(mamaTimer   result,
                mamaTimerCb  action, 
                mama_f64_t   interval,
                void*        closure);
    
MAMAExpDLL
extern mama_status
mamaTimer_destroy(mamaTimer timer);

MAMAExpDLL
extern mama_status
mamaTimer_reset(mamaTimer timer);

MAMAExpDLL
extern mama_status
mamaTimer_setInterval(mamaTimer   timer,
                      mama_f64_t  interval);

MAMAExpDLL
extern mama_status
mamaTimer_getInterval(const mamaTimer   timer,
                      mama_f64_t*       interval);

MAMAExpDLL
extern mama_status 
mamaTimer_getQueue (const mamaTimer timer,
                    mamaQueue*      queue);
        
#if defined( __cplusplus )
}
#endif /* defined( __cplusplus ) */

#endif /* WTimerH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
