---
title: mama/stat.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/stat.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaStatType](stat_8h.html#enum-mamastattype)** { MAMA_STAT_TYPE_INITIALS =  105, MAMA_STAT_TYPE_RECAPS =  106, MAMA_STAT_TYPE_NUM_MESSAGES =  107, MAMA_STAT_TYPE_FT_TAKEOVERS =  108, MAMA_STAT_TYPE_QUEUE_SIZE =  109, MAMA_STAT_TYPE_SUBSCRIPTIONS =  110, MAMA_STAT_TYPE_TIMEOUTS =  111, MAMA_STAT_TYPE_MSG_INDEX =  112, MAMA_STAT_TYPE_NAK_PACKETS_SENT =  113, MAMA_STAT_TYPE_NAKS_SENT =  114, MAMA_STAT_TYPE_MSGS_LOST =  115, MAMA_STAT_TYPE_NCFS_IGNORE =  116, MAMA_STAT_TYPE_NCFS_SHED =  117, MAMA_STAT_TYPE_NCFS_RX_DELAY =  118, MAMA_STAT_TYPE_NCFS_UNKNOWN =  119, MAMA_STAT_TYPE_DUPLICATE_MSGS =  120, MAMA_STAT_TYPE_UNRECOVERABLE_WINDOW_ADVANCE =  121, MAMA_STAT_TYPE_UNRECOVERABLE_TIMEOUT =  122, MAMA_STAT_TYPE_LBM_MSGS_RECEIVED_NO_TOPIC =  123, MAMA_STAT_TYPE_LBM_REQUESTS_RECEIVED =  124, MAMA_STAT_TYPE_WOMBAT_MSGS =  125, MAMA_STAT_TYPE_RV_MSGS =  126, MAMA_STAT_TYPE_FAST_MSGS =  127, MAMA_STAT_TYPE_UNKNOWN_MSGS =  128, MAMA_STAT_TYPE_PUBLISHER_SEND =  129, MAMA_STAT_TYPE_PUBLISHER_INBOX_SEND =  130, MAMA_STAT_TYPE_PUBLISHER_REPLY_SEND =  131, MAMA_STAT_TYPE_UNKNOWN =  999} |
| typedef enum mamaStatType | **[mamaStatType](stat_8h.html#typedef-mamastattype)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaStat_create](stat_8h.html#function-mamastat-create)**(mamaStat * stat, mamaStatsCollector collector, int lockable, const char * name, mama_fid_t type) |
| MAMAExpDLL mama_status | **[mamaStat_destroy](stat_8h.html#function-mamastat-destroy)**(mamaStat stat) |
| MAMAExpDLL mama_status | **[mamaStat_increment](stat_8h.html#function-mamastat-increment)**(mamaStat stat) |
| MAMAExpDLL mama_status | **[mamaStat_decrement](stat_8h.html#function-mamastat-decrement)**(mamaStat stat) |
| MAMAExpDLL mama_status | **[mamaStat_reset](stat_8h.html#function-mamastat-reset)**(mamaStat stat) |
| MAMAExpDLL mama_status | **[mamaStat_add](stat_8h.html#function-mamastat-add)**(mamaStat stat, int value) |
| MAMAExpDLL mama_status | **[mamaStat_subtract](stat_8h.html#function-mamastat-subtract)**(mamaStat stat, int value) |
| MAMAExpDLL mama_status | **[mamaStat_setIntervalValue](stat_8h.html#function-mamastat-setintervalvalue)**(mamaStat stat, int value) |
| MAMAExpDLL mama_fid_t | **[mamaStat_getFid](stat_8h.html#function-mamastat-getfid)**(mamaStat stat) |
| MAMAExpDLL int | **[mamaStat_getIntervalValue](stat_8h.html#function-mamastat-getintervalvalue)**(mamaStat stat) |
| MAMAExpDLL int | **[mamaStat_getMaxValue](stat_8h.html#function-mamastat-getmaxvalue)**(mamaStat stat) |
| MAMAExpDLL int | **[mamaStat_getTotalValue](stat_8h.html#function-mamastat-gettotalvalue)**(mamaStat stat) |
| MAMAExpDLL void | **[mamaStat_getStats](stat_8h.html#function-mamastat-getstats)**(mamaStat stat, mama_i32_t * intervalValue, mama_u32_t * maxValue, mama_u32_t * totalValue) |
| MAMAExpDLL const char * | **[mamaStat_getName](stat_8h.html#function-mamastat-getname)**(mamaStat stat) |
| MAMAExpDLL mama_status | **[mamaStat_setLog](stat_8h.html#function-mamastat-setlog)**(mamaStat stat, int log) |
| MAMAExpDLL int | **[mamaStat_getLog](stat_8h.html#function-mamastat-getlog)**(mamaStat stat) |
| MAMAExpDLL mama_status | **[mamaStat_setPublish](stat_8h.html#function-mamastat-setpublish)**(mamaStat stat, int publish) |
| MAMAExpDLL int | **[mamaStat_getPublish](stat_8h.html#function-mamastat-getpublish)**(mamaStat stat) |
| MAMAExpDLL mamaStatType | **[mamaStatType_fromString](stat_8h.html#function-mamastattype-fromstring)**(const char * statTypeString) |
| MAMAExpDLL const char * | **[mamaStatType_toString](stat_8h.html#function-mamastattype-tostring)**(mamaStatType statType) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAMA_STAT_NOT_LOCKABLE](stat_8h.html#define-mama-stat-not-lockable)**  |
|  | **[MAMA_STAT_LOCKABLE](stat_8h.html#define-mama-stat-lockable)**  |

## Types Documentation

### enum mamaStatType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_STAT_TYPE_INITIALS |  105|   |
| MAMA_STAT_TYPE_RECAPS |  106|   |
| MAMA_STAT_TYPE_NUM_MESSAGES |  107|   |
| MAMA_STAT_TYPE_FT_TAKEOVERS |  108|   |
| MAMA_STAT_TYPE_QUEUE_SIZE |  109|   |
| MAMA_STAT_TYPE_SUBSCRIPTIONS |  110|   |
| MAMA_STAT_TYPE_TIMEOUTS |  111|   |
| MAMA_STAT_TYPE_MSG_INDEX |  112|   |
| MAMA_STAT_TYPE_NAK_PACKETS_SENT |  113|   |
| MAMA_STAT_TYPE_NAKS_SENT |  114|   |
| MAMA_STAT_TYPE_MSGS_LOST |  115|   |
| MAMA_STAT_TYPE_NCFS_IGNORE |  116|   |
| MAMA_STAT_TYPE_NCFS_SHED |  117|   |
| MAMA_STAT_TYPE_NCFS_RX_DELAY |  118|   |
| MAMA_STAT_TYPE_NCFS_UNKNOWN |  119|   |
| MAMA_STAT_TYPE_DUPLICATE_MSGS |  120|   |
| MAMA_STAT_TYPE_UNRECOVERABLE_WINDOW_ADVANCE |  121|   |
| MAMA_STAT_TYPE_UNRECOVERABLE_TIMEOUT |  122|   |
| MAMA_STAT_TYPE_LBM_MSGS_RECEIVED_NO_TOPIC |  123|   |
| MAMA_STAT_TYPE_LBM_REQUESTS_RECEIVED |  124|   |
| MAMA_STAT_TYPE_WOMBAT_MSGS |  125|   |
| MAMA_STAT_TYPE_RV_MSGS |  126|   |
| MAMA_STAT_TYPE_FAST_MSGS |  127|   |
| MAMA_STAT_TYPE_UNKNOWN_MSGS |  128|   |
| MAMA_STAT_TYPE_PUBLISHER_SEND |  129|   |
| MAMA_STAT_TYPE_PUBLISHER_INBOX_SEND |  130|   |
| MAMA_STAT_TYPE_PUBLISHER_REPLY_SEND |  131|   |
| MAMA_STAT_TYPE_UNKNOWN |  999|   |




### typedef mamaStatType

```cpp
typedef enum mamaStatType mamaStatType;
```



## Functions Documentation

### function mamaStat_create

```cpp
MAMAExpDLL mama_status mamaStat_create(
    mamaStat * stat,
    mamaStatsCollector collector,
    int lockable,
    const char * name,
    mama_fid_t type
)
```


**Parameters**: 

  * **stat** The location of a mamaStats to store the result 


Create a mamaStats object


### function mamaStat_destroy

```cpp
MAMAExpDLL mama_status mamaStat_destroy(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stats object to destroy 


Destroy a mamaStats object


### function mamaStat_increment

```cpp
MAMAExpDLL mama_status mamaStat_increment(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stats object to increment 


Increment the stats object counter


### function mamaStat_decrement

```cpp
MAMAExpDLL mama_status mamaStat_decrement(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stats object to decrement 


Decrement the stats object counter


### function mamaStat_reset

```cpp
MAMAExpDLL mama_status mamaStat_reset(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stat object to reset 


Reset the stats object counter


### function mamaStat_add

```cpp
MAMAExpDLL mama_status mamaStat_add(
    mamaStat stat,
    int value
)
```


**Parameters**: 

  * **stat** The stats object to added 
  * **value** The value to be added to be stat 


Adds the stats object counter with the value


### function mamaStat_subtract

```cpp
MAMAExpDLL mama_status mamaStat_subtract(
    mamaStat stat,
    int value
)
```


**Parameters**: 

  * **stat** The stats object to subtracted 
  * **value** the value to be subtracted from stat 


Subtract the stats object counter with the value


### function mamaStat_setIntervalValue

```cpp
MAMAExpDLL mama_status mamaStat_setIntervalValue(
    mamaStat stat,
    int value
)
```


**Parameters**: 

  * **stat** The stats object to be changed 
  * **value** the value to be used 


set the Interval value


### function mamaStat_getFid

```cpp
MAMAExpDLL mama_fid_t mamaStat_getFid(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stat object from which to get the FID 


Get the FID used when publishing the stat via the stats logger


### function mamaStat_getIntervalValue

```cpp
MAMAExpDLL int mamaStat_getIntervalValue(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stat object from which to get the invterval value 


Get the value of the stat for the current interval


### function mamaStat_getMaxValue

```cpp
MAMAExpDLL int mamaStat_getMaxValue(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stat object from which to get the maximum value 


Get the maximum value of the stat


### function mamaStat_getTotalValue

```cpp
MAMAExpDLL int mamaStat_getTotalValue(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stat object from which to get the total value 


Get the total value of the stat


### function mamaStat_getStats

```cpp
MAMAExpDLL void mamaStat_getStats(
    mamaStat stat,
    mama_i32_t * intervalValue,
    mama_u32_t * maxValue,
    mama_u32_t * totalValue
)
```


**Parameters**: 

  * **stat** The stat object from which to get the values 
  * **intervalValue** Address to which the interval value will be written 
  * **maxValue** Address to which the maximum value will be written 
  * **totalValue** Address to which the total value will be written 


Get the interval, maximum, and total values for the stat


### function mamaStat_getName

```cpp
MAMAExpDLL const char * mamaStat_getName(
    mamaStat stat
)
```


**Parameters**: 

  * **The** stat object from which to get the name 


Get the name of the stat


### function mamaStat_setLog

```cpp
MAMAExpDLL mama_status mamaStat_setLog(
    mamaStat stat,
    int log
)
```


**Parameters**: 

  * **stat** The stat object to set logging for 
  * **log** Whether or not to log the stat 


Set whether or not this stat should be logged in the MAMA log.


### function mamaStat_getLog

```cpp
MAMAExpDLL int mamaStat_getLog(
    mamaStat stat
)
```


**Parameters**: 

  * **The** stat object to get logging for 


Returns whether or not the stat is currently being logged to the MAMA log.


### function mamaStat_setPublish

```cpp
MAMAExpDLL mama_status mamaStat_setPublish(
    mamaStat stat,
    int publish
)
```


Set whether or not to publish this stat.

@parameter stat The stat object to set publishing for @paramter publish Whether or not to publish the stat 


### function mamaStat_getPublish

```cpp
MAMAExpDLL int mamaStat_getPublish(
    mamaStat stat
)
```


**Parameters**: 

  * **stat** The stat object to check whether or not it is being published 


Returns whether or not the stat is currently being published.


### function mamaStatType_fromString

```cpp
MAMAExpDLL mamaStatType mamaStatType_fromString(
    const char * statTypeString
)
```


**Parameters**: 

  * **statTypeString** The stat type as a string 


Returns a mamaStatType from a string.


### function mamaStatType_toString

```cpp
MAMAExpDLL const char * mamaStatType_toString(
    mamaStatType statType
)
```


**Parameters**: 

  * **statType** The statType to return as a string 


Returns a string representation of a mamaStatType.




## Macros Documentation

### define MAMA_STAT_NOT_LOCKABLE

```cpp
#define MAMA_STAT_NOT_LOCKABLE 0
```


### define MAMA_STAT_LOCKABLE

```cpp
#define MAMA_STAT_LOCKABLE 1
```


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

#ifndef MamaStatsH__
#define MamaStatsH__

#include "mama/status.h"

#if defined(__cplusplus)
extern "C" {
#endif

#define MAMA_STAT_NOT_LOCKABLE 0
#define MAMA_STAT_LOCKABLE     1

typedef enum mamaStatType
{
    MAMA_STAT_TYPE_INITIALS                      =  105,
    MAMA_STAT_TYPE_RECAPS                        =  106,
    MAMA_STAT_TYPE_NUM_MESSAGES                  =  107,
    MAMA_STAT_TYPE_FT_TAKEOVERS                  =  108,
    MAMA_STAT_TYPE_QUEUE_SIZE                    =  109,
    MAMA_STAT_TYPE_SUBSCRIPTIONS                 =  110,
    MAMA_STAT_TYPE_TIMEOUTS                      =  111,
    MAMA_STAT_TYPE_MSG_INDEX                     =  112,
    MAMA_STAT_TYPE_NAK_PACKETS_SENT              =  113,
    MAMA_STAT_TYPE_NAKS_SENT                     =  114,
    MAMA_STAT_TYPE_MSGS_LOST                     =  115,
    MAMA_STAT_TYPE_NCFS_IGNORE                   =  116,
    MAMA_STAT_TYPE_NCFS_SHED                     =  117,
    MAMA_STAT_TYPE_NCFS_RX_DELAY                 =  118,
    MAMA_STAT_TYPE_NCFS_UNKNOWN                  =  119,
    MAMA_STAT_TYPE_DUPLICATE_MSGS                =  120,
    MAMA_STAT_TYPE_UNRECOVERABLE_WINDOW_ADVANCE  =  121,
    MAMA_STAT_TYPE_UNRECOVERABLE_TIMEOUT         =  122,
    MAMA_STAT_TYPE_LBM_MSGS_RECEIVED_NO_TOPIC    =  123,
    MAMA_STAT_TYPE_LBM_REQUESTS_RECEIVED         =  124,
    MAMA_STAT_TYPE_WOMBAT_MSGS                   =  125,
    MAMA_STAT_TYPE_RV_MSGS                       =  126,
    MAMA_STAT_TYPE_FAST_MSGS                     =  127,
    MAMA_STAT_TYPE_UNKNOWN_MSGS                  =  128,
    MAMA_STAT_TYPE_PUBLISHER_SEND                =  129,
    MAMA_STAT_TYPE_PUBLISHER_INBOX_SEND          =  130,
    MAMA_STAT_TYPE_PUBLISHER_REPLY_SEND          =  131,
    MAMA_STAT_TYPE_UNKNOWN                       =  999
}mamaStatType;

MAMAExpDLL
extern mama_status
mamaStat_create (mamaStat* stat, mamaStatsCollector collector, int lockable, const char* name, mama_fid_t type);

MAMAExpDLL
extern mama_status
mamaStat_destroy (mamaStat stat);

MAMAExpDLL
extern mama_status
mamaStat_increment (mamaStat stat);

MAMAExpDLL
extern mama_status
mamaStat_decrement (mamaStat stat);

MAMAExpDLL
extern mama_status
mamaStat_reset (mamaStat stat);
MAMAExpDLL
extern mama_status
mamaStat_add (mamaStat stat, int value);

MAMAExpDLL
extern mama_status
mamaStat_subtract (mamaStat stat, int value);

MAMAExpDLL
extern mama_status
mamaStat_setIntervalValue (mamaStat stat, int value);

MAMAExpDLL
extern mama_fid_t
mamaStat_getFid (mamaStat stat);

MAMAExpDLL
extern int
mamaStat_getIntervalValue (mamaStat stat);

MAMAExpDLL
extern int
mamaStat_getMaxValue (mamaStat stat);

MAMAExpDLL
extern int
mamaStat_getTotalValue (mamaStat stat);

MAMAExpDLL
extern void
mamaStat_getStats (mamaStat stat, mama_i32_t* intervalValue, mama_u32_t* maxValue, mama_u32_t* totalValue);

MAMAExpDLL
extern const char*
mamaStat_getName (mamaStat stat);

MAMAExpDLL
extern mama_status
mamaStat_setLog (mamaStat stat, int log);

MAMAExpDLL
extern int
mamaStat_getLog (mamaStat stat);

MAMAExpDLL
extern mama_status
mamaStat_setPublish (mamaStat stat, int publish);

MAMAExpDLL
extern int
mamaStat_getPublish (mamaStat stat);

MAMAExpDLL
extern mamaStatType
mamaStatType_fromString (const char* statTypeString);

MAMAExpDLL
extern const char*
mamaStatType_toString (mamaStatType statType);

#if defined(__cplusplus)
}
#endif

#endif /* MamaStatsH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
