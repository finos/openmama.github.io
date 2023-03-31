---
title: mama/middleware.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/middleware.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaMiddleware_](middleware_8h.html#enum-mamamiddleware-)** { MAMA_MIDDLEWARE_WMW = 0, MAMA_MIDDLEWARE_LBM = 1, MAMA_MIDDLEWARE_TIBRV = 2, MAMA_MIDDLEWARE_AVIS = 3, MAMA_MIDDLEWARE_TICK42BLP = 4, MAMA_MIDDLEWARE_SOLACE = 5, MAMA_MIDDLEWARE_RAI = 6, MAMA_MIDDLEWARE_QPID = 7, MAMA_MIDDLEWARE_EXEGY = 8, MAMA_MIDDLEWARE_IBMWFO = 9, MAMA_MIDDLEWARE_ACTIV = 10, MAMA_MIDDLEWARE_TICK42RMDS = 11, MAMA_MIDDLEWARE_UMS = 12, MAMA_MIDDLEWARE_VULCAN = 13, MAMA_MIDDLEWARE_INRUSH = 14, MAMA_MIDDLEWARE_LBMKOMODO = 15, MAMA_MIDDLEWARE_UMDSKOMODO = 16, MAMA_MIDDLEWARE_HMS = 17, MAMA_MIDDLEWARE_REFLECT = 18, MAMA_MIDDLEWARE_MAX = 19, MAMA_MIDDLEWARE_UNKNOWN = 99} |
| typedef enum mamaMiddleware_ | **[mamaMiddleware](middleware_8h.html#typedef-mamamiddleware)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mamaMiddleware | **[mamaMiddleware_convertFromString](middleware_8h.html#function-mamamiddleware-convertfromstring)**(const char * str) |
| MAMAExpDLL const char * | **[mamaMiddleware_convertToString](middleware_8h.html#function-mamamiddleware-converttostring)**(mamaMiddleware middleware) |

## Types Documentation

### enum mamaMiddleware_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_MIDDLEWARE_WMW | 0|   |
| MAMA_MIDDLEWARE_LBM | 1|   |
| MAMA_MIDDLEWARE_TIBRV | 2|   |
| MAMA_MIDDLEWARE_AVIS | 3|   |
| MAMA_MIDDLEWARE_TICK42BLP | 4|   |
| MAMA_MIDDLEWARE_SOLACE | 5|   |
| MAMA_MIDDLEWARE_RAI | 6|   |
| MAMA_MIDDLEWARE_QPID | 7|   |
| MAMA_MIDDLEWARE_EXEGY | 8|   |
| MAMA_MIDDLEWARE_IBMWFO | 9|   |
| MAMA_MIDDLEWARE_ACTIV | 10|   |
| MAMA_MIDDLEWARE_TICK42RMDS | 11|   |
| MAMA_MIDDLEWARE_UMS | 12|   |
| MAMA_MIDDLEWARE_VULCAN | 13|   |
| MAMA_MIDDLEWARE_INRUSH | 14|   |
| MAMA_MIDDLEWARE_LBMKOMODO | 15|   |
| MAMA_MIDDLEWARE_UMDSKOMODO | 16|   |
| MAMA_MIDDLEWARE_HMS | 17|   |
| MAMA_MIDDLEWARE_REFLECT | 18|   |
| MAMA_MIDDLEWARE_MAX | 19|   |
| MAMA_MIDDLEWARE_UNKNOWN | 99|   |




Enum to reference the available MAMA middlewares. MAMA_MIDDLEWARE_MAX will be incremented when new middlewares become available 


### typedef mamaMiddleware

```cpp
typedef enum mamaMiddleware_ mamaMiddleware;
```


Enum to reference the available MAMA middlewares. MAMA_MIDDLEWARE_MAX will be incremented when new middlewares become available 



## Functions Documentation

### function mamaMiddleware_convertFromString

```cpp
MAMAExpDLL mamaMiddleware mamaMiddleware_convertFromString(
    const char * str
)
```


**Parameters**: 

  * **str** The str to convert. 


Convert a string to a mamaMiddleware value.


### function mamaMiddleware_convertToString

```cpp
MAMAExpDLL const char * mamaMiddleware_convertToString(
    mamaMiddleware middleware
)
```


**Parameters**: 

  * **middleware** The mamaMiddleware to convert. 


Convert a mamaMiddleware value to a string. Do no attempt to free the string result.




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

#ifndef MamaMiddlewareH__
#define MamaMiddlewareH__

#include <mama/config.h>

#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaMiddleware_
{
    MAMA_MIDDLEWARE_WMW     = 0,
    MAMA_MIDDLEWARE_LBM     = 1,
    MAMA_MIDDLEWARE_TIBRV   = 2,
    MAMA_MIDDLEWARE_AVIS    = 3,
    MAMA_MIDDLEWARE_TICK42BLP = 4,
    MAMA_MIDDLEWARE_SOLACE  = 5,
    MAMA_MIDDLEWARE_RAI     = 6,
    MAMA_MIDDLEWARE_QPID    = 7,
    MAMA_MIDDLEWARE_EXEGY   = 8,
    MAMA_MIDDLEWARE_IBMWFO  = 9,
    MAMA_MIDDLEWARE_ACTIV   = 10,
    MAMA_MIDDLEWARE_TICK42RMDS = 11,
    MAMA_MIDDLEWARE_UMS     = 12,
    MAMA_MIDDLEWARE_VULCAN  = 13,
    MAMA_MIDDLEWARE_INRUSH  = 14,
    MAMA_MIDDLEWARE_LBMKOMODO = 15,
    MAMA_MIDDLEWARE_UMDSKOMODO = 16,
    MAMA_MIDDLEWARE_HMS     = 17,
    MAMA_MIDDLEWARE_REFLECT = 18,
    MAMA_MIDDLEWARE_MAX     = 19,
    MAMA_MIDDLEWARE_UNKNOWN = 99
} mamaMiddleware;

MAMAExpDLL
extern mamaMiddleware
mamaMiddleware_convertFromString (const char*  str);

MAMAExpDLL
extern const char*
mamaMiddleware_convertToString (mamaMiddleware middleware);


#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
