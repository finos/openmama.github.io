---
title: mama/mamautils.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/mamautils.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaUtils_readSymbolFile](mamautils_8h.html#function-mamautils-readsymbolfile)**(const char * symbolFile, const char ** level1SymbolList, mama_size_t level1SymbolListSize, mama_size_t * level1SymbolListCount, const char ** level2SymbolList, mama_size_t level2SymbolListSize, mama_size_t * level2SymbolListCount) |


## Functions Documentation

### function mamaUtils_readSymbolFile

```cpp
MAMAExpDLL mama_status mamaUtils_readSymbolFile(
    const char * symbolFile,
    const char ** level1SymbolList,
    mama_size_t level1SymbolListSize,
    mama_size_t * level1SymbolListCount,
    const char ** level2SymbolList,
    mama_size_t level2SymbolListSize,
    mama_size_t * level2SymbolListCount
)
```


**Parameters**: 

  * **symbolFile** The name of the symbol file to read in (format is expected to be a newline delimited ascii file with optional use of an additional pipe delimiter to parse level2 data (e.g. "level1sym|level2sym"). 
  * **level1SymbolList** Array of strings to populate with each symbol which is found. 
  * **level1SymbolListSize** The number of array slots available to populate in level1SymbolList. 
  * **level1SymbolListCount** If non-null, function will return the number of symbols inserted into level1SymbolList. 
  * **level2SymbolList** Array of strings to populate with each symbol which is found. If NULL is provided, no level2 parsing will be attempted. 
  * **level2SymbolListSize** The number of array slots available to populate in level2SymbolList. 
  * **level2SymbolListCount** If non-null, function will return the number of symbols inserted into level2SymbolList. 
  * **maxLen** The maximum length of the mapped symbol (i.e., "result"), including trailing NULL.


**Return**: Statis code indicating success of failure 

Reads a symbol file and populates provided arrays with strdup'd strings containing each topic found. Note that the caller is responsible for freeing the memory of the items returned and any arrays passed in should be NULL- initialized.




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

#ifndef MamaUtilsH__
#define MamaUtilsH__

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

MAMAExpDLL
extern mama_status
mamaUtils_readSymbolFile (const char*  symbolFile,
                          const char** level1SymbolList,
                          mama_size_t  level1SymbolListSize,
                          mama_size_t* level1SymbolListCount,
                          const char** level2SymbolList,
                          mama_size_t  level2SymbolListSize,
                          mama_size_t* level2SymbolListCount);

#if defined( __cplusplus )
}
#endif

#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
