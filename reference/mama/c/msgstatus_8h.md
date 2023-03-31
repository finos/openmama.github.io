---
title: mama/msgstatus.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/msgstatus.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaMsgStatus_](msgstatus_8h.html#enum-mamamsgstatus-)** { MAMA_MSG_STATUS_OK =   0, MAMA_MSG_STATUS_LINE_DOWN =   1, MAMA_MSG_STATUS_NO_SUBSCRIBERS =   2, MAMA_MSG_STATUS_BAD_SYMBOL =   3, MAMA_MSG_STATUS_EXPIRED =   4, MAMA_MSG_STATUS_TIMEOUT =   5, MAMA_MSG_STATUS_MISC =   6, MAMA_MSG_STATUS_STALE =   7, MAMA_MSG_STATUS_TIBRV_STATUS =   8, MAMA_MSG_STATUS_PLATFORM_STATUS =   8, MAMA_MSG_STATUS_NOT_ENTITLED =   9, MAMA_MSG_STATUS_NOT_FOUND =   10, MAMA_MSG_STATUS_POSSIBLY_STALE =   11, MAMA_MSG_STATUS_NOT_PERMISSIONED =   12, MAMA_MSG_STATUS_TOPIC_CHANGE =   13, MAMA_MSG_STATUS_BANDWIDTH_EXCEEDED =   14, MAMA_MSG_STATUS_DUPLICATE =   15, MAMA_MSG_STATUS_UNKNOWN =   99} |
| typedef enum mamaMsgStatus_ | **[mamaMsgStatus](msgstatus_8h.html#typedef-mamamsgstatus)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mamaMsgStatus | **[mamaMsgStatus_statusForMsg](msgstatus_8h.html#function-mamamsgstatus-statusformsg)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsgStatus_stringForMsg](msgstatus_8h.html#function-mamamsgstatus-stringformsg)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsgStatus_stringForStatus](msgstatus_8h.html#function-mamamsgstatus-stringforstatus)**(mamaMsgStatus type) |

## Types Documentation

### enum mamaMsgStatus_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_MSG_STATUS_OK |   0|  OK  |
| MAMA_MSG_STATUS_LINE_DOWN |   1|  The feed handler has detected a Line Down  |
| MAMA_MSG_STATUS_NO_SUBSCRIBERS |   2|  The feed handler does not have any subscribers to the subject  |
| MAMA_MSG_STATUS_BAD_SYMBOL |   3|  The symbol does not exist  |
| MAMA_MSG_STATUS_EXPIRED |   4|  Expired  |
| MAMA_MSG_STATUS_TIMEOUT |   5|  A time out occurred  |
| MAMA_MSG_STATUS_MISC |   6|  Miscellaneous status. Not an error  |
| MAMA_MSG_STATUS_STALE |   7|  The subject is stale. Messages may have been dropped  |
| MAMA_MSG_STATUS_TIBRV_STATUS |   8|   |
| MAMA_MSG_STATUS_PLATFORM_STATUS |   8|  Error in the underlying messaging API  |
| MAMA_MSG_STATUS_NOT_ENTITLED |   9|  Not entitled to a subject  |
| MAMA_MSG_STATUS_NOT_FOUND |   10|  Not found  |
| MAMA_MSG_STATUS_POSSIBLY_STALE |   11|  Messages may have been dropped  |
| MAMA_MSG_STATUS_NOT_PERMISSIONED |   12|  Not permissioned for the subject  |
| MAMA_MSG_STATUS_TOPIC_CHANGE |   13|  Topic renamed  |
| MAMA_MSG_STATUS_BANDWIDTH_EXCEEDED |   14|  Bandwidth exceeded  |
| MAMA_MSG_STATUS_DUPLICATE |   15|  Message with duplicate sequence number  |
| MAMA_MSG_STATUS_UNKNOWN |   99|  Unknown status  |




Utility class (enum) for interpreting message status. 


### typedef mamaMsgStatus

```cpp
typedef enum mamaMsgStatus_ mamaMsgStatus;
```


Utility class (enum) for interpreting message status. 



## Functions Documentation

### function mamaMsgStatus_statusForMsg

```cpp
MAMAExpDLL mamaMsgStatus mamaMsgStatus_statusForMsg(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


Extract the status from the supplied message.


### function mamaMsgStatus_stringForMsg

```cpp
MAMAExpDLL const char * mamaMsgStatus_stringForMsg(
    const mamaMsg msg
)
```


**Return**: The string. 

Return the status as a string given a message.


### function mamaMsgStatus_stringForStatus

```cpp
MAMAExpDLL const char * mamaMsgStatus_stringForStatus(
    mamaMsgStatus type
)
```


**Return**: The description. 

Return a text description of the message's status.




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

#ifndef MamaMsgStatusH__
#define MamaMsgStatusH__

#if defined(__cplusplus)
extern "C" {
#endif

#include <mama/msg.h>

typedef enum mamaMsgStatus_
{
    MAMA_MSG_STATUS_OK                  =   0,

    MAMA_MSG_STATUS_LINE_DOWN           =   1,

    MAMA_MSG_STATUS_NO_SUBSCRIBERS      =   2,

    MAMA_MSG_STATUS_BAD_SYMBOL          =   3,

    MAMA_MSG_STATUS_EXPIRED             =   4,

    MAMA_MSG_STATUS_TIMEOUT             =   5,

    MAMA_MSG_STATUS_MISC                =   6,

    MAMA_MSG_STATUS_STALE               =   7,

    MAMA_MSG_STATUS_TIBRV_STATUS        =   8,

    MAMA_MSG_STATUS_PLATFORM_STATUS     =   8,

    MAMA_MSG_STATUS_NOT_ENTITLED        =   9,

    MAMA_MSG_STATUS_NOT_FOUND           =   10,

    MAMA_MSG_STATUS_POSSIBLY_STALE      =   11,

    MAMA_MSG_STATUS_NOT_PERMISSIONED    =   12,

    MAMA_MSG_STATUS_TOPIC_CHANGE        =   13,

    MAMA_MSG_STATUS_BANDWIDTH_EXCEEDED  =   14,

    MAMA_MSG_STATUS_DUPLICATE           =   15,

    MAMA_MSG_STATUS_UNKNOWN             =   99

} mamaMsgStatus;

MAMAExpDLL
mamaMsgStatus
mamaMsgStatus_statusForMsg (const mamaMsg msg);

MAMAExpDLL
const char*
mamaMsgStatus_stringForMsg (const mamaMsg msg);

MAMAExpDLL
const char*
mamaMsgStatus_stringForStatus (mamaMsgStatus type);

#if defined(__cplusplus)
}
#endif

#endif  /* MAMA_MSG_STATUS_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
