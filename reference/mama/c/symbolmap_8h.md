---
title: mama/symbolmap.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/symbolmap.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef int(MAMACALLTYPE *)(void *closure, char *result, const char *symbol, size_t maxLen) | **[mamaSymbolMapFunc](symbolmap_8h.html#typedef-mamasymbolmapfunc)**  |

## Types Documentation

### typedef mamaSymbolMapFunc

```cpp
typedef int(MAMACALLTYPE * mamaSymbolMapFunc) (void *closure, char *result, const char *symbol, size_t maxLen);
```


**Parameters**: 

  * **closure** Caller supplied closure. 
  * **result** The resulting symbol after mapping. 
  * **symbol** The symbol to be mapped. 
  * **maxLen** The maximum length of the mapped symbol (i.e., "result"), including trailing NULL.


**Return**: Whether a mapping for the symbol was found. 

Prototype for symbol-mapping function.





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

#ifndef MamaSymbolMapH__
#define MamaSymbolMapH__

/* *************************************************** */
/* Includes. */
/* *************************************************** */
#include <mama/types.h>

#if defined( __cplusplus )
extern "C"
{
#endif

/* *************************************************** */
/* Type Defines. */
/* *************************************************** */

typedef int (MAMACALLTYPE *mamaSymbolMapFunc)(
    void *closure,
    char *result,
    const char *symbol,
    size_t maxLen); 

#if defined( __cplusplus )
}
#endif

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:17 +0100
