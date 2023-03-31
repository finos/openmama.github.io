---
title: mama/servicelevel.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/servicelevel.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaServiceLevel_](servicelevel_8h.html#enum-mamaservicelevel-)** { MAMA_SERVICE_LEVEL_REAL_TIME = 0, MAMA_SERVICE_LEVEL_SNAPSHOT = 1, MAMA_SERVICE_LEVEL_REPEATING_SNAPSHOT = 2, MAMA_SERVICE_LEVEL_CONFLATED = 5, MAMA_SERVICE_LEVEL_UNKNOWN = 99} |
| typedef enum mamaServiceLevel_ | **[mamaServiceLevel](servicelevel_8h.html#typedef-mamaservicelevel)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mamaServiceLevel | **[mamaServiceLevel_getFromMsg](servicelevel_8h.html#function-mamaservicelevel-getfrommsg)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaServiceLevel_getFromMsgAsString](servicelevel_8h.html#function-mamaservicelevel-getfrommsgasstring)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaServiceLevel_toString](servicelevel_8h.html#function-mamaservicelevel-tostring)**(mamaServiceLevel type) |

## Types Documentation

### enum mamaServiceLevel_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SERVICE_LEVEL_REAL_TIME | 0|  Real time updates.  |
| MAMA_SERVICE_LEVEL_SNAPSHOT | 1|  Single snapshot image only.  |
| MAMA_SERVICE_LEVEL_REPEATING_SNAPSHOT | 2|  Repeating snapshot image. When creating subscriptions, the serviceLevelOpt parameter should be set to the number of milliseconds representing the interval between snapshots. The first snapshot will be obtained within some random period between zero and the interval. Only one snapshot request will be allowed to be outstanding at a time.  |
| MAMA_SERVICE_LEVEL_CONFLATED | 5|  Conflated updates (future).  |
| MAMA_SERVICE_LEVEL_UNKNOWN | 99|  Unknown level.  |




mamaServiceLevel is an enumeration that represents the service level (a) requested by a subscribing application, or (b) provided by the publisher. In the future, the service level provided to the application might change dynamically, depending upon infrastructure capacity. So, even though the requested service level is "real
time", if service deteriorates for any reason, the subscription may automatically switch to a conflated level (after notifying the application of the switch). 


### typedef mamaServiceLevel

```cpp
typedef enum mamaServiceLevel_ mamaServiceLevel;
```


mamaServiceLevel is an enumeration that represents the service level (a) requested by a subscribing application, or (b) provided by the publisher. In the future, the service level provided to the application might change dynamically, depending upon infrastructure capacity. So, even though the requested service level is "real
time", if service deteriorates for any reason, the subscription may automatically switch to a conflated level (after notifying the application of the switch). 



## Functions Documentation

### function mamaServiceLevel_getFromMsg

```cpp
MAMAExpDLL mamaServiceLevel mamaServiceLevel_getFromMsg(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


Extract the subscription service level from a message.


### function mamaServiceLevel_getFromMsgAsString

```cpp
MAMAExpDLL const char * mamaServiceLevel_getFromMsgAsString(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


Extract the subscription service level as a string from a message.


### function mamaServiceLevel_toString

```cpp
MAMAExpDLL const char * mamaServiceLevel_toString(
    mamaServiceLevel type
)
```


**Parameters**: 

  * **type** The mamaServiceLevel. 


Convert a mamaServiceLevel to a string.




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

#ifndef MamaServiceLevelH_
#define MamaServiceLevelH_

/* 
 * This file provides MAMA subscription service level information.
 */

#include "mama/types.h"

#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaServiceLevel_
{
    MAMA_SERVICE_LEVEL_REAL_TIME = 0,

    MAMA_SERVICE_LEVEL_SNAPSHOT = 1,

    MAMA_SERVICE_LEVEL_REPEATING_SNAPSHOT = 2,

    MAMA_SERVICE_LEVEL_CONFLATED = 5,

    MAMA_SERVICE_LEVEL_UNKNOWN = 99

} mamaServiceLevel;


MAMAExpDLL
extern mamaServiceLevel 
mamaServiceLevel_getFromMsg (const mamaMsg msg);

MAMAExpDLL
extern const char* 
mamaServiceLevel_getFromMsgAsString (const mamaMsg msg);

MAMAExpDLL
extern const char* 
mamaServiceLevel_toString (mamaServiceLevel type);

#if defined(__cplusplus)
}
#endif

#endif  /* MamaServiceLevelH_ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
