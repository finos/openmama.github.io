---
title: fieldcache/fieldcachetypes.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/fieldcachetypes.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct mamaFieldCacheImpl_ * | **[mamaFieldCache](fieldcachetypes_8h.html#typedef-mamafieldcache)**  |
| typedef struct mamaFieldCacheFieldImpl_ * | **[mamaFieldCacheField](fieldcachetypes_8h.html#typedef-mamafieldcachefield)**  |
| typedef struct mamaFieldCacheRecordImpl_ * | **[mamaFieldCacheRecord](fieldcachetypes_8h.html#typedef-mamafieldcacherecord)**  |
| typedef struct mamaFieldCacheIteratorImpl_ * | **[mamaFieldCacheIterator](fieldcachetypes_8h.html#typedef-mamafieldcacheiterator)**  |

## Types Documentation

### typedef mamaFieldCache

```cpp
typedef struct mamaFieldCacheImpl_* mamaFieldCache;
```


This structure contains the information of a field cache. 


### typedef mamaFieldCacheField

```cpp
typedef struct mamaFieldCacheFieldImpl_* mamaFieldCacheField;
```


This structure contains the information of a field that can be stored in a field cache. 


### typedef mamaFieldCacheRecord

```cpp
typedef struct mamaFieldCacheRecordImpl_* mamaFieldCacheRecord;
```


This structure contains the information to store a set of fields. 


### typedef mamaFieldCacheIterator

```cpp
typedef struct mamaFieldCacheIteratorImpl_* mamaFieldCacheIterator;
```


This structure allows to iterate through a field cache. 





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

#ifndef MamaFieldCacheTypesH__
#define MamaFieldCacheTypesH__

#include <wombat/wConfig.h>

#if defined(__cplusplus)
extern "C" {
#endif /* defined(__cplusplus) */

typedef struct mamaFieldCacheImpl_* mamaFieldCache;

typedef struct mamaFieldCacheFieldImpl_* mamaFieldCacheField;

typedef struct mamaFieldCacheRecordImpl_* mamaFieldCacheRecord;

typedef struct mamaFieldCacheIteratorImpl_* mamaFieldCacheIterator;

#if defined(__cplusplus)
}
#endif /* defined(__cplusplus) */

#endif /* MamaFieldCacheTypesH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
