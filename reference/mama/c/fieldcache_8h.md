---
title: fieldcache/fieldcache.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/fieldcache.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaFieldCache_create](fieldcache_8h.html#function-mamafieldcache-create)**(mamaFieldCache * fieldCache) |
| MAMAExpDLL mama_status | **[mamaFieldCache_destroy](fieldcache_8h.html#function-mamafieldcache-destroy)**(mamaFieldCache fieldCache) |
| MAMAExpDLL mama_status | **[mamaFieldCache_clear](fieldcache_8h.html#function-mamafieldcache-clear)**(mamaFieldCache fieldCache) |
| MAMAExpDLL mama_status | **[mamaFieldCache_getSize](fieldcache_8h.html#function-mamafieldcache-getsize)**(mamaFieldCache fieldCache, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCache_find](fieldcache_8h.html#function-mamafieldcache-find)**(mamaFieldCache fieldCache, mama_fid_t fid, const char * name, mamaFieldCacheField * field) |
| MAMAExpDLL mama_status | **[mamaFieldCache_findOrAdd](fieldcache_8h.html#function-mamafieldcache-findoradd)**(mamaFieldCache fieldCache, mama_fid_t fid, mamaFieldType type, const char * name, mamaFieldCacheField * field, mama_bool_t * existing) |
| MAMAExpDLL mama_status | **[mamaFieldCache_setModified](fieldcache_8h.html#function-mamafieldcache-setmodified)**(mamaFieldCache fieldCache, mamaFieldCacheField field) |
| MAMAExpDLL mama_status | **[mamaFieldCache_applyField](fieldcache_8h.html#function-mamafieldcache-applyfield)**(mamaFieldCache fieldCache, const mamaFieldCacheField field) |
| MAMAExpDLL mama_status | **[mamaFieldCache_applyMessage](fieldcache_8h.html#function-mamafieldcache-applymessage)**(mamaFieldCache fieldCache, const mamaMsg message, mamaDictionary dictionary) |
| MAMAExpDLL mama_status | **[mamaFieldCache_applyRecord](fieldcache_8h.html#function-mamafieldcache-applyrecord)**(mamaFieldCache fieldCache, const mamaFieldCacheRecord record) |
| MAMAExpDLL mama_status | **[mamaFieldCache_getFullMessage](fieldcache_8h.html#function-mamafieldcache-getfullmessage)**(mamaFieldCache fieldCache, mamaMsg message) |
| MAMAExpDLL mama_status | **[mamaFieldCache_getDeltaMessage](fieldcache_8h.html#function-mamafieldcache-getdeltamessage)**(mamaFieldCache fieldCache, mamaMsg message) |
| MAMAExpDLL mama_status | **[mamaFieldCache_clearModifiedFields](fieldcache_8h.html#function-mamafieldcache-clearmodifiedfields)**(mamaFieldCache fieldCache) |
| MAMAExpDLL mama_status | **[mamaFieldCache_setTrackModified](fieldcache_8h.html#function-mamafieldcache-settrackmodified)**(mamaFieldCache fieldCache, mama_bool_t trackModified) |
| MAMAExpDLL mama_status | **[mamaFieldCache_getTrackModified](fieldcache_8h.html#function-mamafieldcache-gettrackmodified)**(mamaFieldCache fieldCache, mama_bool_t * trackModified) |
| MAMAExpDLL mama_status | **[mamaFieldCache_setUseFieldNames](fieldcache_8h.html#function-mamafieldcache-setusefieldnames)**(mamaFieldCache fieldCache, mama_bool_t useFieldNames) |
| MAMAExpDLL mama_status | **[mamaFieldCache_getUseFieldNames](fieldcache_8h.html#function-mamafieldcache-getusefieldnames)**(mamaFieldCache fieldCache, mama_bool_t * useFieldNames) |
| MAMAExpDLL mama_status | **[mamaFieldCache_setUseLock](fieldcache_8h.html#function-mamafieldcache-setuselock)**(mamaFieldCache fieldCache, mama_bool_t enable) |
| MAMAExpDLL mama_status | **[mamaFieldCache_getUseLock](fieldcache_8h.html#function-mamafieldcache-getuselock)**(mamaFieldCache fieldCache, mama_bool_t * lockEnabled) |
| MAMAExpDLL mama_status | **[mamaFieldCache_lock](fieldcache_8h.html#function-mamafieldcache-lock)**(mamaFieldCache fieldCache) |
| MAMAExpDLL mama_status | **[mamaFieldCache_unlock](fieldcache_8h.html#function-mamafieldcache-unlock)**(mamaFieldCache fieldCache) |


## Functions Documentation

### function mamaFieldCache_create

```cpp
MAMAExpDLL mama_status mamaFieldCache_create(
    mamaFieldCache * fieldCache
)
```


**Parameters**: 

  * **fieldCache** (out) To return the field cache. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will create the field cache and allocate all associated memory. If this function succeeds then the cache should be destroyed by calling mamaFieldCache_destroy.


### function mamaFieldCache_destroy

```cpp
MAMAExpDLL mama_status mamaFieldCache_destroy(
    mamaFieldCache fieldCache
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache to destroy. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will destroy a field cache previously allocated by a call to mamaFieldCache_create.


### function mamaFieldCache_clear

```cpp
MAMAExpDLL mama_status mamaFieldCache_clear(
    mamaFieldCache fieldCache
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache to clear. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will clear the field cache. The result is that the cache will be empty (no fields).


### function mamaFieldCache_getSize

```cpp
MAMAExpDLL mama_status mamaFieldCache_getSize(
    mamaFieldCache fieldCache,
    mama_size_t * size
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **size** (out) The number of fields in the cache. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will return the number of fields in the cache.


### function mamaFieldCache_find

```cpp
MAMAExpDLL mama_status mamaFieldCache_find(
    mamaFieldCache fieldCache,
    mama_fid_t fid,
    const char * name,
    mamaFieldCacheField * field
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **fid** (in) The field id to look up. 
  * **name** (in) The field name. 
  * **field** (out) The field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_NOT_FOUND MAMA_STATUS_OK Other error codes from the mama functions. 

This function will retrieve a field from the cache. If the field is not found, the output parameter will be set to NULL and MAMA_STATUS_NOT_FOUND is returned.


### function mamaFieldCache_findOrAdd

```cpp
MAMAExpDLL mama_status mamaFieldCache_findOrAdd(
    mamaFieldCache fieldCache,
    mama_fid_t fid,
    mamaFieldType type,
    const char * name,
    mamaFieldCacheField * field,
    mama_bool_t * existing
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **fid** (in) The field id to look up. 
  * **type** (in) The field type. 
  * **name** (in) The field name. 
  * **field** (out) The existing field, if found or new one, if not found. 
  * **existing** (out) Flag to indicate whether the field was already present in the cache. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_NOMEM MAMA_STATUS_OK Other error codes from the mama functions. 

This function will retrieve a field from the cache. If it does not exist, a new one is created, added to the cache and returned.


### function mamaFieldCache_setModified

```cpp
MAMAExpDLL mama_status mamaFieldCache_setModified(
    mamaFieldCache fieldCache,
    mamaFieldCacheField field
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **field** (in) The field to set to modified. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will set the modified flag for a field in the cache even if the value has not changed. The field must be present in the cache (No automatic check is performed).


### function mamaFieldCache_applyField

```cpp
MAMAExpDLL mama_status mamaFieldCache_applyField(
    mamaFieldCache fieldCache,
    const mamaFieldCacheField field
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **field** (in) The field to get the content to update in the cache. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

Update the cache content with the field given. If the field is already present, it will be updated, otherwise it will be added to the cache.


### function mamaFieldCache_applyMessage

```cpp
MAMAExpDLL mama_status mamaFieldCache_applyMessage(
    mamaFieldCache fieldCache,
    const mamaMsg message,
    mamaDictionary dictionary
)
```


### function mamaFieldCache_applyRecord

```cpp
MAMAExpDLL mama_status mamaFieldCache_applyRecord(
    mamaFieldCache fieldCache,
    const mamaFieldCacheRecord record
)
```


### function mamaFieldCache_getFullMessage

```cpp
MAMAExpDLL mama_status mamaFieldCache_getFullMessage(
    mamaFieldCache fieldCache,
    mamaMsg message
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache to obtain the fields from. 
  * **message** (in) This `mamaMsg` will be populated with all the fields. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK Other mama return codes. 

This function will return all the fields in the cache by updating the provided mamaMsg with the fields. With this function the provided message will be fully populated with all the fields in the cache.


### function mamaFieldCache_getDeltaMessage

```cpp
MAMAExpDLL mama_status mamaFieldCache_getDeltaMessage(
    mamaFieldCache fieldCache,
    mamaMsg message
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache to obtain the modified fields from. 
  * **message** (in) This `mamMsg` will be populated with the modified fields. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK Other mama return codes. 

This function will return the set of fields that have changed since the last time this function was called. With this function the provided message will be fully populated with only the modified fields in the cache.


### function mamaFieldCache_clearModifiedFields

```cpp
MAMAExpDLL mama_status mamaFieldCache_clearModifiedFields(
    mamaFieldCache fieldCache
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will clear the list of all the modified fields and reset the modified flags for all the modified fields in the cache.


### function mamaFieldCache_setTrackModified

```cpp
MAMAExpDLL mama_status mamaFieldCache_setTrackModified(
    mamaFieldCache fieldCache,
    mama_bool_t trackModified
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **trackModified** (in) The track mod state flag, this should be non-zero to turn tracking on. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will set the value of the track modification state flag; if this flag is set then changes to field values will be monitored. See the documentation for more information on the operation of the track modification state flag.


### function mamaFieldCache_getTrackModified

```cpp
MAMAExpDLL mama_status mamaFieldCache_getTrackModified(
    mamaFieldCache fieldCache,
    mama_bool_t * trackModified
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **trackModified** (out) To return the track mod state flag, this will be non-zero if tracking is turned on. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will return the value of the track modification state flag.


### function mamaFieldCache_setUseFieldNames

```cpp
MAMAExpDLL mama_status mamaFieldCache_setUseFieldNames(
    mamaFieldCache fieldCache,
    mama_bool_t useFieldNames
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **useFieldNames** (in) The use field names state flag, this should be non-zero to turn tracking on. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will set the value of the use-field-names state flag; if this flag is set then... See the documentation for more information on the operation of the use-field-names state flag.


### function mamaFieldCache_getUseFieldNames

```cpp
MAMAExpDLL mama_status mamaFieldCache_getUseFieldNames(
    mamaFieldCache fieldCache,
    mama_bool_t * useFieldNames
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **useFieldNames** (out) To return the use-field-names state flag, this will be non-zero if use-field-names is turned on. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will return the value of the use-field-names state flag.


### function mamaFieldCache_setUseLock

```cpp
MAMAExpDLL mama_status mamaFieldCache_setUseLock(
    mamaFieldCache fieldCache,
    mama_bool_t enable
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **enable** (in) The flag for enabling/disabling locking. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will enable/disable cache locking.


### function mamaFieldCache_getUseLock

```cpp
MAMAExpDLL mama_status mamaFieldCache_getUseLock(
    mamaFieldCache fieldCache,
    mama_bool_t * lockEnabled
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache. 
  * **locked** (out) Indicates whether the cache is using locking or not. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will determine whether the cache is using locking or not.


### function mamaFieldCache_lock

```cpp
MAMAExpDLL mama_status mamaFieldCache_lock(
    mamaFieldCache fieldCache
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache to lock. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will lock the cache.


### function mamaFieldCache_unlock

```cpp
MAMAExpDLL mama_status mamaFieldCache_unlock(
    mamaFieldCache fieldCache
)
```


**Parameters**: 

  * **fieldCache** (in) The field cache to unlock. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will unlock the cache.




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

#ifndef MamaFieldCacheH__
#define MamaFieldCacheH__

#include <mama/config.h>
#include <mama/fielddesc.h>
#include <mama/status.h>
#include <mama/types.h>
#include <mama/fieldcache/fieldcachetypes.h>

#if defined(__cplusplus)
extern "C" {
#endif

MAMAExpDLL
extern mama_status
mamaFieldCache_create(mamaFieldCache* fieldCache);

MAMAExpDLL
extern mama_status
mamaFieldCache_destroy(mamaFieldCache fieldCache);

MAMAExpDLL
extern mama_status
mamaFieldCache_clear(mamaFieldCache fieldCache);

MAMAExpDLL
extern mama_status
mamaFieldCache_getSize(mamaFieldCache fieldCache, mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCache_find(mamaFieldCache fieldCache,
                    mama_fid_t fid,
                    const char* name,
                    mamaFieldCacheField* field);

MAMAExpDLL
extern mama_status
mamaFieldCache_findOrAdd(mamaFieldCache fieldCache,
                         mama_fid_t fid,
                         mamaFieldType type,
                         const char* name,
                         mamaFieldCacheField* field,
                         mama_bool_t* existing);

MAMAExpDLL
extern mama_status
mamaFieldCache_setModified(mamaFieldCache fieldCache,
                           mamaFieldCacheField field);

MAMAExpDLL
extern mama_status
mamaFieldCache_applyField(mamaFieldCache fieldCache,
                          const mamaFieldCacheField field);
/*
 * This function will automatically populate the field cache from the contents
 * of the supplied message. Fields within the messages will be added to the cache
 * if not already present. If the field is already present then the data will be
 * updated.
 *
 * @param fieldCache (in) The field cache to populate.
 * @param message (in) The <code>mamaMsg</code> to use to populate the cache.
 * @param dictionary (in) The dictionary (optional: can be NULL).
 * @return Resulting status of the call which can be
 *      MAMA_STATUS_NULL_ARG
 *      MAMA_STATUS_OK
 *      Other error codes from the mama functions.
 */
MAMAExpDLL
extern mama_status
mamaFieldCache_applyMessage(mamaFieldCache fieldCache,
                            const mamaMsg message,
                            mamaDictionary dictionary);

/*
 * This function will automatically populate the field cache from the contents
 * of the supplied mamaFieldCacheRecord. Fields within the record will be added
 * to the cache if not already present. If the field is already present then the
 * data will be updated.
 *
 * @param fieldCache (in) The field cache to populate.
 * @param record (in) The <code>mamaFieldCacheRecord</code> to use to populate the cache.
 * @return Resulting status of the call which can be
 *      MAMA_STATUS_NULL_ARG
 *      MAMA_STATUS_INVALID_ARG
 *      MAMA_STATUS_OK
 *      Other error codes from the mama functions.
 */
MAMAExpDLL
extern mama_status
mamaFieldCache_applyRecord(mamaFieldCache fieldCache,
                           const mamaFieldCacheRecord record);

MAMAExpDLL
extern mama_status
mamaFieldCache_getFullMessage(mamaFieldCache fieldCache,mamaMsg message);

MAMAExpDLL
extern mama_status
mamaFieldCache_getDeltaMessage(mamaFieldCache fieldCache, mamaMsg message);

MAMAExpDLL
extern mama_status
mamaFieldCache_clearModifiedFields(mamaFieldCache fieldCache);


MAMAExpDLL
extern mama_status
mamaFieldCache_setTrackModified(mamaFieldCache fieldCache, mama_bool_t trackModified);

MAMAExpDLL
extern mama_status
mamaFieldCache_getTrackModified(mamaFieldCache fieldCache, mama_bool_t *trackModified);

MAMAExpDLL
extern mama_status
mamaFieldCache_setUseFieldNames(mamaFieldCache fieldCache, mama_bool_t useFieldNames);

MAMAExpDLL
extern mama_status
mamaFieldCache_getUseFieldNames(mamaFieldCache fieldCache, mama_bool_t *useFieldNames);

MAMAExpDLL
extern mama_status
mamaFieldCache_setUseLock(mamaFieldCache fieldCache, mama_bool_t enable);

MAMAExpDLL
extern mama_status
mamaFieldCache_getUseLock(mamaFieldCache fieldCache, mama_bool_t* lockEnabled);

MAMAExpDLL
extern mama_status
mamaFieldCache_lock(mamaFieldCache fieldCache);

MAMAExpDLL
extern mama_status
mamaFieldCache_unlock(mamaFieldCache fieldCache);

#if defined(__cplusplus)
}
#endif

#endif /* MamaFieldCacheH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
