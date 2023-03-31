---
title: mama/statscollector.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/statscollector.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaStatsCollectorType](statscollector_8h.html#enum-mamastatscollectortype)** { MAMA_STATS_COLLECTOR_TYPE_QUEUE = 0, MAMA_STATS_COLLECTOR_TYPE_TRANSPORT = 1, MAMA_STATS_COLLECTOR_TYPE_USER = 2, MAMA_STATS_COLLECTOR_TYPE_GLOBAL = 3} |
| typedef enum mamaStatsCollectorType | **[mamaStatsCollectorType](statscollector_8h.html#typedef-mamastatscollectortype)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaStatsCollector_create](statscollector_8h.html#function-mamastatscollector-create)**(mamaStatsCollector * statsCollector, mamaStatsCollectorType type, const char * name, const char * middleware) |
| MAMAExpDLL mama_status | **[mamaStatsCollector_destroy](statscollector_8h.html#function-mamastatscollector-destroy)**(mamaStatsCollector statsCollector) |
| MAMAExpDLL mama_status | **[mamaStatsCollector_addStat](statscollector_8h.html#function-mamastatscollector-addstat)**(mamaStatsCollector statsCollector, mamaStat stat) |
| MAMAExpDLL mama_status | **[mamaStatsCollector_incrementStat](statscollector_8h.html#function-mamastatscollector-incrementstat)**(mamaStatsCollector statsCollector, mama_fid_t identifier) |
| MAMAExpDLL mama_status | **[mamaStatsCollector_setName](statscollector_8h.html#function-mamastatscollector-setname)**(mamaStatsCollector statsCollector, const char * name) |
| MAMAExpDLL mama_status | **[mamaStatsCollector_setPublish](statscollector_8h.html#function-mamastatscollector-setpublish)**(mamaStatsCollector statsCollector, int publish) |
| MAMAExpDLL int | **[mamaStatsCollector_getPublish](statscollector_8h.html#function-mamastatscollector-getpublish)**(mamaStatsCollector statsCollector) |
| MAMAExpDLL mama_status | **[mamaStatsCollector_setLog](statscollector_8h.html#function-mamastatscollector-setlog)**(mamaStatsCollector statsCollector, int log) |
| MAMAExpDLL int | **[mamaStatsCollector_getLog](statscollector_8h.html#function-mamastatscollector-getlog)**(mamaStatsCollector statsCollector) |
| MAMAExpDLL const char * | **[mamaStatsCollectorType_stringForType](statscollector_8h.html#function-mamastatscollectortype-stringfortype)**(mamaStatsCollectorType type) |

## Types Documentation

### enum mamaStatsCollectorType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_STATS_COLLECTOR_TYPE_QUEUE | 0|   |
| MAMA_STATS_COLLECTOR_TYPE_TRANSPORT | 1|   |
| MAMA_STATS_COLLECTOR_TYPE_USER | 2|   |
| MAMA_STATS_COLLECTOR_TYPE_GLOBAL | 3|   |




### typedef mamaStatsCollectorType

```cpp
typedef enum mamaStatsCollectorType mamaStatsCollectorType;
```



## Functions Documentation

### function mamaStatsCollector_create

```cpp
MAMAExpDLL mama_status mamaStatsCollector_create(
    mamaStatsCollector * statsCollector,
    mamaStatsCollectorType type,
    const char * name,
    const char * middleware
)
```


**Parameters**: 

  * **statsCollector** The stats collector object to create 


Create a mamaStatsCollector object


### function mamaStatsCollector_destroy

```cpp
MAMAExpDLL mama_status mamaStatsCollector_destroy(
    mamaStatsCollector statsCollector
)
```


**Parameters**: 

  * **statsCollector** The stats collector object to destroy 


Destroy a mamaStatsCollector object


### function mamaStatsCollector_addStat

```cpp
MAMAExpDLL mama_status mamaStatsCollector_addStat(
    mamaStatsCollector statsCollector,
    mamaStat stat
)
```


**Parameters**: 

  * **statscollector** The stats collector object to register with 
  * **stat** The stat object to register 


Register a stats object with the collector


### function mamaStatsCollector_incrementStat

```cpp
MAMAExpDLL mama_status mamaStatsCollector_incrementStat(
    mamaStatsCollector statsCollector,
    mama_fid_t identifier
)
```


**Parameters**: 

  * **statscollector** The stats collector object for which to increment the stat 
  * **identifier** FID of the stat to increment 


Increment the current interval value of the stat represented by FID identifier


### function mamaStatsCollector_setName

```cpp
MAMAExpDLL mama_status mamaStatsCollector_setName(
    mamaStatsCollector statsCollector,
    const char * name
)
```


**Parameters**: 

  * **statscollector** The stats collector object for which to set the name 
  * **name** The name to set for the stats collector 


Set the name of the stats collector object. By default, this will be the same as the associated queue, transport, or MAMA Application.


### function mamaStatsCollector_setPublish

```cpp
MAMAExpDLL mama_status mamaStatsCollector_setPublish(
    mamaStatsCollector statsCollector,
    int publish
)
```


**Parameters**: 

  * **statscollector** The stats collector object to set publishing for 
  * **publish** Whether or not to publish stats for this stats collector 


Set whether or not stats for this stats collector object should be published in stats messages.


### function mamaStatsCollector_getPublish

```cpp
MAMAExpDLL int mamaStatsCollector_getPublish(
    mamaStatsCollector statsCollector
)
```


**Parameters**: 

  * **statscollector** The stats collector object to get publishing for 


Get whether or not stats are being published for this stats collector.


### function mamaStatsCollector_setLog

```cpp
MAMAExpDLL mama_status mamaStatsCollector_setLog(
    mamaStatsCollector statsCollector,
    int log
)
```


**Parameters**: 

  * **statscollector** The stats collector object to set logging for 
  * **log** Whether or not to log stats for this stats collector 


Set whether or not stats for this stats collector object should be logged to the MAMA log.


### function mamaStatsCollector_getLog

```cpp
MAMAExpDLL int mamaStatsCollector_getLog(
    mamaStatsCollector statsCollector
)
```


**Parameters**: 

  * **statscollector** The stats collector object to get logging for. 


Get whether or not stats are being logged for this stats collector.


### function mamaStatsCollectorType_stringForType

```cpp
MAMAExpDLL const char * mamaStatsCollectorType_stringForType(
    mamaStatsCollectorType type
)
```


**Parameters**: 

  * **type** The stats collector type to return as a string 


Return a string representation of a mamaStatsCollectorType




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

#ifndef MamaStatsCollectorH__
#define MamaStatsCollectorH__

#include "mama/status.h"

#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaStatsCollectorType
{
    MAMA_STATS_COLLECTOR_TYPE_QUEUE     = 0,
    MAMA_STATS_COLLECTOR_TYPE_TRANSPORT = 1,
    MAMA_STATS_COLLECTOR_TYPE_USER      = 2,
    MAMA_STATS_COLLECTOR_TYPE_GLOBAL    = 3
} mamaStatsCollectorType;

MAMAExpDLL
extern mama_status
mamaStatsCollector_create (mamaStatsCollector* statsCollector, mamaStatsCollectorType type, const char* name, const char* middleware);

MAMAExpDLL
extern mama_status
mamaStatsCollector_destroy (mamaStatsCollector statsCollector);

MAMAExpDLL
extern mama_status
mamaStatsCollector_addStat (mamaStatsCollector statsCollector, mamaStat stat);

MAMAExpDLL
extern mama_status
mamaStatsCollector_incrementStat (mamaStatsCollector statsCollector, mama_fid_t identifier);

MAMAExpDLL
extern mama_status
mamaStatsCollector_setName (mamaStatsCollector statsCollector, const char* name);

MAMAExpDLL
extern mama_status
mamaStatsCollector_setPublish (mamaStatsCollector statsCollector, int publish);

MAMAExpDLL
extern int
mamaStatsCollector_getPublish (mamaStatsCollector statsCollector);

MAMAExpDLL
extern mama_status
mamaStatsCollector_setLog (mamaStatsCollector statsCollector, int log);

MAMAExpDLL
extern int
mamaStatsCollector_getLog (mamaStatsCollector statsCollector);

MAMAExpDLL
extern const char*
mamaStatsCollectorType_stringForType (mamaStatsCollectorType type);

#if defined(__cplusplus)
}
#endif

#endif /* MamaStatsCollectorH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
