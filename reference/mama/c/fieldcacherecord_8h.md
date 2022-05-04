---
title: fieldcache/fieldcacherecord.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/fieldcacherecord.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaFieldCacheRecord_create](fieldcacherecord_8h.html#function-mamafieldcacherecord-create)**(mamaFieldCacheRecord * record) |
| MAMAExpDLL mama_status | **[mamaFieldCacheRecord_destroy](fieldcacherecord_8h.html#function-mamafieldcacherecord-destroy)**(mamaFieldCacheRecord record) |
| MAMAExpDLL mama_status | **[mamaFieldCacheRecord_clear](fieldcacherecord_8h.html#function-mamafieldcacherecord-clear)**(mamaFieldCacheRecord record) |
| MAMAExpDLL mama_status | **[mamaFieldCacheRecord_getSize](fieldcacherecord_8h.html#function-mamafieldcacherecord-getsize)**(mamaFieldCacheRecord record, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheRecord_add](fieldcacherecord_8h.html#function-mamafieldcacherecord-add)**(mamaFieldCacheRecord record, mama_fid_t fid, mamaFieldType type, const char * name, mamaFieldCacheField * field) |
| MAMAExpDLL mama_status | **[mamaFieldCacheRecord_getField](fieldcacherecord_8h.html#function-mamafieldcacherecord-getfield)**(mamaFieldCacheRecord record, mama_size_t index, mamaFieldCacheField * field) |
| MAMAExpDLL mama_status | **[mamaFieldCacheRecord_find](fieldcacherecord_8h.html#function-mamafieldcacherecord-find)**(mamaFieldCacheRecord record, mama_fid_t fid, const char * name, mamaFieldCacheField * field) |


## Functions Documentation

### function mamaFieldCacheRecord_create

```cpp
MAMAExpDLL mama_status mamaFieldCacheRecord_create(
    mamaFieldCacheRecord * record
)
```


**Parameters**: 

  * **record** (in) The record to create. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will create a mamaFieldCacheRecord.


### function mamaFieldCacheRecord_destroy

```cpp
MAMAExpDLL mama_status mamaFieldCacheRecord_destroy(
    mamaFieldCacheRecord record
)
```


**Parameters**: 

  * **record** (in) The record to destroy. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will destroy a `mamaFieldCacheRecord` previously allocated by a call to `mamaFieldCacheRecord_create`. Note that all the fields contained in the record will be destroyed.


### function mamaFieldCacheRecord_clear

```cpp
MAMAExpDLL mama_status mamaFieldCacheRecord_clear(
    mamaFieldCacheRecord record
)
```


**Parameters**: 

  * **record** (in) The record to destroy. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will clear a `mamaFieldCacheRecord`. Note that all the fields contained in the record will be destroyed.


### function mamaFieldCacheRecord_getSize

```cpp
MAMAExpDLL mama_status mamaFieldCacheRecord_getSize(
    mamaFieldCacheRecord record,
    mama_size_t * size
)
```


**Parameters**: 

  * **record** (in) The field to destroy. 
  * **size** (out) The size of the record. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will return the number of fields stored in a record.


### function mamaFieldCacheRecord_add

```cpp
MAMAExpDLL mama_status mamaFieldCacheRecord_add(
    mamaFieldCacheRecord record,
    mama_fid_t fid,
    mamaFieldType type,
    const char * name,
    mamaFieldCacheField * field
)
```


**Parameters**: 

  * **record** (in) The record to add the field to. 
  * **fid** (in) The field id of the field to create and add to the record. 
  * **type** (in) The type of the field to create and add to the record. 
  * **name** (in) The name of the field to create and add to the record. 
  * **field** (out) The new field added to the record. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will create and add a field to the record; the new field is returned. The field will be destroyed when the record is destroyed.


### function mamaFieldCacheRecord_getField

```cpp
MAMAExpDLL mama_status mamaFieldCacheRecord_getField(
    mamaFieldCacheRecord record,
    mama_size_t index,
    mamaFieldCacheField * field
)
```


**Parameters**: 

  * **record** (in) The record to get the field from. 
  * **index** (in) The index of the field to get from the record. 
  * **field** (out) The field, if found. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will retrieve a field from the record using a position in the Record as in a normal C array. This can be useful when iterating the fields of the record in a loop. Note that position is not significative in a `mamaFieldCacheRecord`.


### function mamaFieldCacheRecord_find

```cpp
MAMAExpDLL mama_status mamaFieldCacheRecord_find(
    mamaFieldCacheRecord record,
    mama_fid_t fid,
    const char * name,
    mamaFieldCacheField * field
)
```


**Parameters**: 

  * **record** (in) The record to get the field from. 
  * **fid** (in) The field id of the field. 
  * **field** (out) The field, if found. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_NOT_FOUND MAMA_STATUS_OK 

This function will retrieve a field from the record using the field id of the field to get.




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

#ifndef MamaFieldCacheRecordH__
#define MamaFieldCacheRecordH__

#include <mama/config.h>
#include <mama/fielddesc.h>
#include <mama/types.h>
#include <mama/status.h>
#include <mama/fieldcache/fieldcachetypes.h>
#include <mama/fieldcache/fieldcachefield.h>

#if defined(__cplusplus)
extern "C" {
#endif /* defined(__cplusplus) */

MAMAExpDLL
extern mama_status
mamaFieldCacheRecord_create(mamaFieldCacheRecord* record);

MAMAExpDLL
extern mama_status
mamaFieldCacheRecord_destroy(mamaFieldCacheRecord record);

MAMAExpDLL
extern mama_status
mamaFieldCacheRecord_clear(mamaFieldCacheRecord record);

MAMAExpDLL
extern mama_status
mamaFieldCacheRecord_getSize(mamaFieldCacheRecord record, mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheRecord_add(mamaFieldCacheRecord record,
                         mama_fid_t fid,
                         mamaFieldType type,
                         const char* name,
                         mamaFieldCacheField* field);

MAMAExpDLL
extern mama_status
mamaFieldCacheRecord_getField(mamaFieldCacheRecord record,
                              mama_size_t index,
                              mamaFieldCacheField* field);

MAMAExpDLL
extern mama_status
mamaFieldCacheRecord_find(mamaFieldCacheRecord record,
                          mama_fid_t fid,
                          const char* name,
                          mamaFieldCacheField* field);

#if defined(__cplusplus)
}
#endif /* defined(__cplusplus) */

#endif /* MamaFieldCacheRecordH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
