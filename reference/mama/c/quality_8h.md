---
title: mama/quality.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/quality.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaQuality_](quality_8h.html#enum-mamaquality-)** { MAMA_QUALITY_OK =  0, MAMA_QUALITY_MAYBE_STALE =  1, MAMA_QUALITY_STALE =  2, MAMA_QUALITY_PARTIAL_STALE =  3, MAMA_QUALITY_FORCED_STALE =  4, MAMA_QUALITY_DUPLICATE =  5, MAMA_QUALITY_UNKNOWN = 99} |
| typedef enum mamaQuality_ | **[mamaQuality](quality_8h.html#typedef-mamaquality)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mamaQuality | **[mamaQuality_convertFromString](quality_8h.html#function-mamaquality-convertfromstring)**(const char * str) |
| const MAMAExpDLL char * | **[mamaQuality_convertToString](quality_8h.html#function-mamaquality-converttostring)**(mamaQuality quality) |

## Types Documentation

### enum mamaQuality_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_QUALITY_OK |  0|   |
| MAMA_QUALITY_MAYBE_STALE |  1|   |
| MAMA_QUALITY_STALE |  2|   |
| MAMA_QUALITY_PARTIAL_STALE |  3|   |
| MAMA_QUALITY_FORCED_STALE |  4|   |
| MAMA_QUALITY_DUPLICATE |  5|   |
| MAMA_QUALITY_UNKNOWN | 99|   |




### typedef mamaQuality

```cpp
typedef enum mamaQuality_ mamaQuality;
```



## Functions Documentation

### function mamaQuality_convertFromString

```cpp
MAMAExpDLL mamaQuality mamaQuality_convertFromString(
    const char * str
)
```


**Parameters**: 

  * **str** The str to convert. 


Convert a string to a mamaQuality value.


### function mamaQuality_convertToString

```cpp
const MAMAExpDLL char * mamaQuality_convertToString(
    mamaQuality quality
)
```


**Parameters**: 

  * **quality** The mamaQuality to convert. 


Convert a mamaQuality value to a string. Do no attempt to free the string result.




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

#ifndef MamaQualityH__
#define MamaQualityH__

#include "mama/config.h"


#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaQuality_
{
    MAMA_QUALITY_OK             =  0,
    MAMA_QUALITY_MAYBE_STALE    =  1,
    MAMA_QUALITY_STALE          =  2,
    MAMA_QUALITY_PARTIAL_STALE  =  3,
    MAMA_QUALITY_FORCED_STALE   =  4,
    MAMA_QUALITY_DUPLICATE      =  5,
    MAMA_QUALITY_UNKNOWN        = 99
} mamaQuality;

MAMAExpDLL
extern mamaQuality
mamaQuality_convertFromString (const char*  str);

MAMAExpDLL
extern const char*
mamaQuality_convertToString (mamaQuality  quality);


#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
