---
title: fieldcache/fieldcacheiterator.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/fieldcacheiterator.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaFieldCacheIterator_create](fieldcacheiterator_8h.html#function-mamafieldcacheiterator-create)**(mamaFieldCacheIterator * iterator, mamaFieldCache fieldCache) |
| MAMAExpDLL mama_status | **[mamaFieldCacheIterator_destroy](fieldcacheiterator_8h.html#function-mamafieldcacheiterator-destroy)**(mamaFieldCacheIterator iterator) |
| MAMAExpDLL mamaFieldCacheField | **[mamaFieldCacheIterator_next](fieldcacheiterator_8h.html#function-mamafieldcacheiterator-next)**(mamaFieldCacheIterator iterator) |
| MAMAExpDLL mama_bool_t | **[mamaFieldCacheIterator_hasNext](fieldcacheiterator_8h.html#function-mamafieldcacheiterator-hasnext)**(mamaFieldCacheIterator iterator) |
| MAMAExpDLL mamaFieldCacheField | **[mamaFieldCacheIterator_begin](fieldcacheiterator_8h.html#function-mamafieldcacheiterator-begin)**(mamaFieldCacheIterator iterator) |


## Functions Documentation

### function mamaFieldCacheIterator_create

```cpp
MAMAExpDLL mama_status mamaFieldCacheIterator_create(
    mamaFieldCacheIterator * iterator,
    mamaFieldCache fieldCache
)
```


**Parameters**: 

  * **iterator** (out) The iterator to create. 
  * **fieldCache** (in) The cache to use to iterate. 


**Return**: Resulting status of the call which can be MAMA_STATUS_INVALID_ARG MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will create an iterator to the given field cache and allocate all associated memory. If this function succeeds then the iterator should be destroyed by calling mamaFieldCacheIterator_destroy.


### function mamaFieldCacheIterator_destroy

```cpp
MAMAExpDLL mama_status mamaFieldCacheIterator_destroy(
    mamaFieldCacheIterator iterator
)
```


**Parameters**: 

  * **iterator** (in) The iterator to destroy. 


**Return**: Resulting status of the call which can be MAMA_STATUS_INVALID_ARG MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will destroy a field cache iterator previously allocated by a call to mamaFieldCacheIterator_create.


### function mamaFieldCacheIterator_next

```cpp
MAMAExpDLL mamaFieldCacheField mamaFieldCacheIterator_next(
    mamaFieldCacheIterator iterator
)
```


**Parameters**: 

  * **iterator** (in) The iterator to get the field from. 


**Return**: A mamaFieldCacheField pointing to the next field. 

This function will return the next field in the cache. If no other fields are present it will return NULL.


### function mamaFieldCacheIterator_hasNext

```cpp
MAMAExpDLL mama_bool_t mamaFieldCacheIterator_hasNext(
    mamaFieldCacheIterator iterator
)
```


**Parameters**: 

  * **iterator** (in) The iterator to check for other fields. 


**Return**: A flag indicating if there are other fields to iterate. 

This function will return a flag indicating if there are remaining fields to iterate.


### function mamaFieldCacheIterator_begin

```cpp
MAMAExpDLL mamaFieldCacheField mamaFieldCacheIterator_begin(
    mamaFieldCacheIterator iterator
)
```


**Parameters**: 

  * **iterator** (in) The iterator to get the first field from. 


**Return**: The first field in cache. 

This function will return the first field in the cache. If the cache is empty, a NULL field is returned.




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

#ifndef MamaFieldCacheIteratorH__
#define MamaFieldCacheIteratorH__

#include <mama/config.h>
#include <mama/status.h>
#include <mama/types.h>
#include <mama/fieldcache/fieldcachetypes.h>

#if defined(__cplusplus)
extern "C" {
#endif /* defined(__cplusplus) */

MAMAExpDLL
extern mama_status
mamaFieldCacheIterator_create(mamaFieldCacheIterator* iterator,
                              mamaFieldCache fieldCache);

MAMAExpDLL
extern mama_status
mamaFieldCacheIterator_destroy(mamaFieldCacheIterator iterator);

MAMAExpDLL
extern mamaFieldCacheField
mamaFieldCacheIterator_next(mamaFieldCacheIterator iterator);

MAMAExpDLL
extern mama_bool_t
mamaFieldCacheIterator_hasNext(mamaFieldCacheIterator iterator);

MAMAExpDLL
extern mamaFieldCacheField
mamaFieldCacheIterator_begin(mamaFieldCacheIterator iterator);

#if defined(__cplusplus)
}
#endif /* defined(__cplusplus) */

#endif /* MamaFieldCacheIteratorH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
