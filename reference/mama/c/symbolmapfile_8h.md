---
title: mama/symbolmapfile.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/symbolmapfile.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void * | **[mamaSymbolMapFile](symbolmapfile_8h.html#typedef-mamasymbolmapfile)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL void | **[mamaSymbolMapFile_addMap](symbolmapfile_8h.html#function-mamasymbolmapfile-addmap)**(mamaSymbolMapFile fileMap, const char * fromSymbol, const char * toSymbol) |
| MAMAExpDLL mama_status | **[mamaSymbolMapFile_create](symbolmapfile_8h.html#function-mamasymbolmapfile-create)**(mamaSymbolMapFile * fileMap) |
| MAMAExpDLL mama_status | **[mamaSymbolMapFile_destroy](symbolmapfile_8h.html#function-mamasymbolmapfile-destroy)**(mamaSymbolMapFile fileMap) |
| MAMAExpDLL mama_status | **[mamaSymbolMapFile_load](symbolmapfile_8h.html#function-mamasymbolmapfile-load)**(mamaSymbolMapFile fileMap, const char * fileName) |
| MAMAExpDLL int | **[mamaSymbolMapFile_map](symbolmapfile_8h.html#function-mamasymbolmapfile-map)**(mamaSymbolMapFile fileMap, char * result, const char * symbol, size_t maxLen) |
| MAMAExpDLL int | **[mamaSymbolMapFile_revMap](symbolmapfile_8h.html#function-mamasymbolmapfile-revmap)**(mamaSymbolMapFile fileMap, char * result, const char * symbol, size_t maxLen) |

## Types Documentation

### typedef mamaSymbolMapFile

```cpp
typedef void* mamaSymbolMapFile;
```



## Functions Documentation

### function mamaSymbolMapFile_addMap

```cpp
MAMAExpDLL void mamaSymbolMapFile_addMap(
    mamaSymbolMapFile fileMap,
    const char * fromSymbol,
    const char * toSymbol
)
```


**Parameters**: 

  * **fileMap** Handle to the file-map to destroy. 
  * **fromSymbol** The from symbol. 
  * **toSymbol** The to symbol. 


Add additional individual symbology mapping.


### function mamaSymbolMapFile_create

```cpp
MAMAExpDLL mama_status mamaSymbolMapFile_create(
    mamaSymbolMapFile * fileMap
)
```


**Parameters**: 

  * **fileMap** The initialized file-map handle.


**Return**: mama_status return value can be one of MAMA_STATUS_NOMEM MAMA_STATUS_OK 

Create a file-based symbol mapper. Use mamaSymbolMapFile_load() to open the file. If the file exists, its contents should be a two columns of data, with the columns separated by white space. A matching symbol of the left column is mapped to the symbol in the right column. when performing the mapping, if the symbol does not match anything in the file (or the file cannot be found), then the original symbol is used (i.e., no mapping).


### function mamaSymbolMapFile_destroy

```cpp
MAMAExpDLL mama_status mamaSymbolMapFile_destroy(
    mamaSymbolMapFile fileMap
)
```


**Parameters**: 

  * **fileMap** Handle to the file-map to destroy.


**Return**: mama_status return value can be one of MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

Destroy the file-based symbol mapper.


### function mamaSymbolMapFile_load

```cpp
MAMAExpDLL mama_status mamaSymbolMapFile_load(
    mamaSymbolMapFile fileMap,
    const char * fileName
)
```


**Parameters**: 

  * **fileMap** Handle to the file-map to destroy. 
  * **fileName** The name of the file containing symbols to map.


**Return**: mama_status return value can be one of MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

(Re)Load the map for the file-based symbol mapper.


### function mamaSymbolMapFile_map

```cpp
MAMAExpDLL int mamaSymbolMapFile_map(
    mamaSymbolMapFile fileMap,
    char * result,
    const char * symbol,
    size_t maxLen
)
```


**Parameters**: 

  * **fileMap** Handle to the file-map. 
  * **result** Returned "toSymbol" (feed side). 
  * **symbol** "fromSymbol" (client side). 
  * **maxLen** Max buffer length of result.


**Return**: 1 if a symbol could be mapped else 0. 

Perform a mapping from the file-based symbol mapper.


### function mamaSymbolMapFile_revMap

```cpp
MAMAExpDLL int mamaSymbolMapFile_revMap(
    mamaSymbolMapFile fileMap,
    char * result,
    const char * symbol,
    size_t maxLen
)
```


**Parameters**: 

  * **fileMap** Handle to the file-map. 
  * **result** Returned "fromSymbol" (client side). 
  * **symbol** "toSymbol" (feed side). 
  * **maxLen** Max buffer length of result. 


Perform a reverse mapping from the file-based symbol mapper.




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

#ifndef MamaSymbolMapFileH__
#define MamaSymbolMapFileH__

#if defined(__cplusplus)
extern "C" {
#endif

/* *************************************************** */
/* Includes. */
/* *************************************************** */
#include "mama/mama.h"

/* *************************************************** */
/* Forward declarations. */
/* *************************************************** */

/* The symbol map file impl. */
typedef void* mamaSymbolMapFile;

/* *************************************************** */
/* Public Function Prototypes. */
/* *************************************************** */

MAMAExpDLL
extern void
mamaSymbolMapFile_addMap (
    mamaSymbolMapFile  fileMap,
    const char*        fromSymbol,
    const char*        toSymbol);

MAMAExpDLL
extern mama_status
mamaSymbolMapFile_create (
    mamaSymbolMapFile*  fileMap);

MAMAExpDLL
extern mama_status
mamaSymbolMapFile_destroy (
    mamaSymbolMapFile   fileMap);

MAMAExpDLL
extern mama_status
mamaSymbolMapFile_load(
    mamaSymbolMapFile   fileMap,
    const char*         fileName);

MAMAExpDLL
extern int
mamaSymbolMapFile_map (
    mamaSymbolMapFile  fileMap,
    char*              result,
    const char*        symbol,
    size_t             maxLen);

MAMAExpDLL
extern int
mamaSymbolMapFile_revMap (
    mamaSymbolMapFile  fileMap,
    char*              result,
    const char*        symbol,
    size_t             maxLen);


#if defined(__cplusplus)
}
#endif

#endif /* MamaSymbolMapFileH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
