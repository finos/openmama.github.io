---
title: mama/timezone.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/timezone.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mamaTimeZone | **[mamaTimeZone_local](timezone_8h.html#function-mamatimezone-local)**(void ) |
| MAMAExpDLL mamaTimeZone | **[mamaTimeZone_utc](timezone_8h.html#function-mamatimezone-utc)**(void ) |
| MAMAExpDLL mamaTimeZone | **[mamaTimeZone_usEastern](timezone_8h.html#function-mamatimezone-useastern)**(void ) |
| MAMAExpDLL mama_status | **[mamaTimeZone_create](timezone_8h.html#function-mamatimezone-create)**(mamaTimeZone * timeZone) |
| MAMAExpDLL mama_status | **[mamaTimeZone_createFromTz](timezone_8h.html#function-mamatimezone-createfromtz)**(mamaTimeZone * timeZone, const char * tzId) |
| MAMAExpDLL mama_status | **[mamaTimeZone_createCopy](timezone_8h.html#function-mamatimezone-createcopy)**(mamaTimeZone * timeZone, const mamaTimeZone timeZoneCopy) |
| MAMAExpDLL mama_status | **[mamaTimeZone_destroy](timezone_8h.html#function-mamatimezone-destroy)**(mamaTimeZone timeZone) |
| MAMAExpDLL mama_status | **[mamaTimeZone_copy](timezone_8h.html#function-mamatimezone-copy)**(mamaTimeZone timeZone, const mamaTimeZone timeZoneCopy) |
| MAMAExpDLL mama_status | **[mamaTimeZone_set](timezone_8h.html#function-mamatimezone-set)**(mamaTimeZone timeZone, const char * tzId) |
| MAMAExpDLL mama_status | **[mamaTimeZone_clear](timezone_8h.html#function-mamatimezone-clear)**(mamaTimeZone timeZone) |
| MAMAExpDLL mama_status | **[mamaTimeZone_getTz](timezone_8h.html#function-mamatimezone-gettz)**(const mamaTimeZone timeZone, const char ** result) |
| MAMAExpDLL mama_status | **[mamaTimeZone_getOffset](timezone_8h.html#function-mamatimezone-getoffset)**(const mamaTimeZone timeZone, mama_i32_t * result) |
| MAMAExpDLL mama_status | **[mamaTimeZone_check](timezone_8h.html#function-mamatimezone-check)**(mamaTimeZone timeZone) |
| MAMAExpDLL void | **[mamaTimeZone_setScanningInterval](timezone_8h.html#function-mamatimezone-setscanninginterval)**(mama_f64_t seconds) |
| MAMAExpDLL void | **[mamaTimeZone_cleanUp](timezone_8h.html#function-mamatimezone-cleanup)**(void ) |


## Functions Documentation

### function mamaTimeZone_local

```cpp
MAMAExpDLL mamaTimeZone mamaTimeZone_local(
    void 
)
```


Return a pointer to a mamaTimeZone corresponding to the local time zone. 


### function mamaTimeZone_utc

```cpp
MAMAExpDLL mamaTimeZone mamaTimeZone_utc(
    void 
)
```


Return a pointer to a mamaTimeZone corresponding to the UTC time zone. 


### function mamaTimeZone_usEastern

```cpp
MAMAExpDLL mamaTimeZone mamaTimeZone_usEastern(
    void 
)
```


Return a pointer to a mamaTimeZone corresponding to the US Eastern time zone. 


### function mamaTimeZone_create

```cpp
MAMAExpDLL mama_status mamaTimeZone_create(
    mamaTimeZone * timeZone
)
```


Create an instance of a mamaTimeZone. 


### function mamaTimeZone_createFromTz

```cpp
MAMAExpDLL mama_status mamaTimeZone_createFromTz(
    mamaTimeZone * timeZone,
    const char * tzId
)
```


Create an instance of a mamaTimeZone with a standard TZ identifier (NULL identifier is equivalent to the local time zone) 


### function mamaTimeZone_createCopy

```cpp
MAMAExpDLL mama_status mamaTimeZone_createCopy(
    mamaTimeZone * timeZone,
    const mamaTimeZone timeZoneCopy
)
```


Create an instance of a mamaTimeZone by copying from another instance. 


### function mamaTimeZone_destroy

```cpp
MAMAExpDLL mama_status mamaTimeZone_destroy(
    mamaTimeZone timeZone
)
```


Destroy an instance of a mamaTimeZone. 


### function mamaTimeZone_copy

```cpp
MAMAExpDLL mama_status mamaTimeZone_copy(
    mamaTimeZone timeZone,
    const mamaTimeZone timeZoneCopy
)
```


Copy an instance of a mamaTimeZone (to a previously-created instance). 


### function mamaTimeZone_set

```cpp
MAMAExpDLL mama_status mamaTimeZone_set(
    mamaTimeZone timeZone,
    const char * tzId
)
```


Set an existing instance of a mamaTimeZone to a new time zone. 


### function mamaTimeZone_clear

```cpp
MAMAExpDLL mama_status mamaTimeZone_clear(
    mamaTimeZone timeZone
)
```


Clear the time zone (but not destroyed). 


### function mamaTimeZone_getTz

```cpp
MAMAExpDLL mama_status mamaTimeZone_getTz(
    const mamaTimeZone timeZone,
    const char ** result
)
```


Get the time zone ID string. 


### function mamaTimeZone_getOffset

```cpp
MAMAExpDLL mama_status mamaTimeZone_getOffset(
    const mamaTimeZone timeZone,
    mama_i32_t * result
)
```


Get the offset from UTC (in seconds). Can be positive or negative, depending upon the direction. 


### function mamaTimeZone_check

```cpp
MAMAExpDLL mama_status mamaTimeZone_check(
    mamaTimeZone timeZone
)
```


Check (recalculate) the UTC offset in case it has changed due to daylight savings adjustments. 


### function mamaTimeZone_setScanningInterval

```cpp
MAMAExpDLL void mamaTimeZone_setScanningInterval(
    mama_f64_t seconds
)
```


Set the interval of the thread updating each MamaTimeZone instance offset. 


### function mamaTimeZone_cleanUp

```cpp
MAMAExpDLL void mamaTimeZone_cleanUp(
    void 
)
```


If you used any timezone functions, you'll need to call this function to clean up any memory they will have allocated, but hung onto to avoid constant re-allocation of resources on the critical path. 




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

#include <mama/config.h>
#include <mama/status.h>
#include <mama/types.h>
#include "wombat/port.h"

#ifndef MamaTimeZoneH__
#define MamaTimeZoneH__




#if defined(__cplusplus)
extern "C" {
#endif

MAMAExpDLL
extern mamaTimeZone mamaTimeZone_local(void);

MAMAExpDLL
extern mamaTimeZone mamaTimeZone_utc(void);

MAMAExpDLL
extern mamaTimeZone mamaTimeZone_usEastern(void);

MAMAExpDLL
extern mama_status
mamaTimeZone_create (mamaTimeZone*  timeZone);

MAMAExpDLL
extern mama_status
mamaTimeZone_createFromTz (mamaTimeZone*  timeZone,
                           const char*    tzId);

MAMAExpDLL
extern mama_status
mamaTimeZone_createCopy (mamaTimeZone*        timeZone,
                         const mamaTimeZone   timeZoneCopy);

MAMAExpDLL
extern mama_status
mamaTimeZone_destroy (mamaTimeZone  timeZone);

MAMAExpDLL
extern mama_status
mamaTimeZone_copy (mamaTimeZone        timeZone,
                   const mamaTimeZone  timeZoneCopy);

MAMAExpDLL
extern mama_status
mamaTimeZone_set (mamaTimeZone  timeZone,
                  const char*   tzId);

MAMAExpDLL
extern mama_status
mamaTimeZone_clear (mamaTimeZone  timeZone);

MAMAExpDLL
extern mama_status
mamaTimeZone_getTz (const mamaTimeZone  timeZone,
                    const char**        result);

MAMAExpDLL
extern mama_status
mamaTimeZone_getOffset (const mamaTimeZone  timeZone,
                        mama_i32_t*         result);

MAMAExpDLL
extern mama_status
mamaTimeZone_check (mamaTimeZone  timeZone);

MAMAExpDLL
extern void
mamaTimeZone_setScanningInterval (mama_f64_t  seconds);

MAMAExpDLL
extern void
mamaTimeZone_cleanUp (void);


#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
