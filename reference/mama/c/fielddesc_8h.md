---
title: mama/fielddesc.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/fielddesc.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaFieldType_](fielddesc_8h.html#enum-mamafieldtype-)** { MAMA_FIELD_TYPE_MSG =    1, MAMA_FIELD_TYPE_OPAQUE =    7, MAMA_FIELD_TYPE_STRING =    8, MAMA_FIELD_TYPE_BOOL =    9, MAMA_FIELD_TYPE_CHAR =   10, MAMA_FIELD_TYPE_I8 =   14, MAMA_FIELD_TYPE_U8 =   15, MAMA_FIELD_TYPE_I16 =   16, MAMA_FIELD_TYPE_U16 =   17, MAMA_FIELD_TYPE_I32 =   18, MAMA_FIELD_TYPE_U32 =   19, MAMA_FIELD_TYPE_I64 =   20, MAMA_FIELD_TYPE_U64 =   21, MAMA_FIELD_TYPE_F32 =   24, MAMA_FIELD_TYPE_F64 =   25, MAMA_FIELD_TYPE_TIME =   26, MAMA_FIELD_TYPE_PRICE =   27, MAMA_FIELD_TYPE_VECTOR_BOOL =   29, MAMA_FIELD_TYPE_VECTOR_CHAR =   30, MAMA_FIELD_TYPE_VECTOR_I8 =   34, MAMA_FIELD_TYPE_VECTOR_U8 =   35, MAMA_FIELD_TYPE_VECTOR_I16 =   36, MAMA_FIELD_TYPE_VECTOR_U16 =   37, MAMA_FIELD_TYPE_VECTOR_I32 =   38, MAMA_FIELD_TYPE_VECTOR_U32 =   39, MAMA_FIELD_TYPE_VECTOR_I64 =   40, MAMA_FIELD_TYPE_VECTOR_U64 =   41, MAMA_FIELD_TYPE_VECTOR_F32 =   44, MAMA_FIELD_TYPE_VECTOR_F64 =   45, MAMA_FIELD_TYPE_VECTOR_STRING =   46, MAMA_FIELD_TYPE_VECTOR_MSG =   47, MAMA_FIELD_TYPE_VECTOR_TIME =   48, MAMA_FIELD_TYPE_VECTOR_PRICE =   49, MAMA_FIELD_TYPE_QUANTITY =   50, MAMA_FIELD_TYPE_COLLECTION =   99, MAMA_FIELD_TYPE_UNKNOWN =  100} |
| typedef enum mamaFieldType_ | **[mamaFieldType](fielddesc_8h.html#typedef-mamafieldtype)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const MAMAExpDLL char * | **[mamaFieldTypeToString](fielddesc_8h.html#function-mamafieldtypetostring)**(mamaFieldType type) |
| MAMAExpDLL mamaFieldType | **[stringToMamaFieldType](fielddesc_8h.html#function-stringtomamafieldtype)**(const char * str) |
| MAMAExpDLL mama_status | **[mamaFieldDescriptor_create](fielddesc_8h.html#function-mamafielddescriptor-create)**(mamaFieldDescriptor * descriptor, mama_fid_t fid, mamaFieldType type, const char * name) |
| MAMAExpDLL mama_status | **[mamaFieldDescriptor_destroy](fielddesc_8h.html#function-mamafielddescriptor-destroy)**(mamaFieldDescriptor descriptor) |
| MAMAExpDLL mama_fid_t | **[mamaFieldDescriptor_getFid](fielddesc_8h.html#function-mamafielddescriptor-getfid)**(const mamaFieldDescriptor descriptor) |
| MAMAExpDLL mamaFieldType | **[mamaFieldDescriptor_getType](fielddesc_8h.html#function-mamafielddescriptor-gettype)**(const mamaFieldDescriptor descriptor) |
| const MAMAExpDLL char * | **[mamaFieldDescriptor_getName](fielddesc_8h.html#function-mamafielddescriptor-getname)**(const mamaFieldDescriptor descriptor) |
| const MAMAExpDLL char * | **[mamaFieldDescriptor_getTypeName](fielddesc_8h.html#function-mamafielddescriptor-gettypename)**(const mamaFieldDescriptor descriptor) |
| MAMAExpDLL mama_status | **[mamaFieldDescriptor_setClosure](fielddesc_8h.html#function-mamafielddescriptor-setclosure)**(mamaFieldDescriptor descriptor, void * closure) |
| MAMAExpDLL mama_status | **[mamaFieldDescriptor_getClosure](fielddesc_8h.html#function-mamafielddescriptor-getclosure)**(mamaFieldDescriptor descriptor, void ** closure) |

## Types Documentation

### enum mamaFieldType_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_FIELD_TYPE_MSG |    1|  Sub message  |
| MAMA_FIELD_TYPE_OPAQUE |    7|  Opaque binary  |
| MAMA_FIELD_TYPE_STRING |    8|  String  |
| MAMA_FIELD_TYPE_BOOL |    9|  Boolean  |
| MAMA_FIELD_TYPE_CHAR |   10|  Character  |
| MAMA_FIELD_TYPE_I8 |   14|  Signed 8 bit integer  |
| MAMA_FIELD_TYPE_U8 |   15|  Unsigned byte  |
| MAMA_FIELD_TYPE_I16 |   16|  Signed 16 bit integer  |
| MAMA_FIELD_TYPE_U16 |   17|  Unsigned 16 bit integer  |
| MAMA_FIELD_TYPE_I32 |   18|  Signed 32 bit integer  |
| MAMA_FIELD_TYPE_U32 |   19|  Unsigned 32 bit integer  |
| MAMA_FIELD_TYPE_I64 |   20|  Signed 64 bit integer  |
| MAMA_FIELD_TYPE_U64 |   21|  Unsigned 64 bit integer  |
| MAMA_FIELD_TYPE_F32 |   24|  32 bit float  |
| MAMA_FIELD_TYPE_F64 |   25|  64 bit float  |
| MAMA_FIELD_TYPE_TIME |   26|  64 bit MAMA time  |
| MAMA_FIELD_TYPE_PRICE |   27|  MAMA price  |
| MAMA_FIELD_TYPE_VECTOR_BOOL |   29|  Array type support  |
| MAMA_FIELD_TYPE_VECTOR_CHAR |   30|   |
| MAMA_FIELD_TYPE_VECTOR_I8 |   34|   |
| MAMA_FIELD_TYPE_VECTOR_U8 |   35|   |
| MAMA_FIELD_TYPE_VECTOR_I16 |   36|   |
| MAMA_FIELD_TYPE_VECTOR_U16 |   37|   |
| MAMA_FIELD_TYPE_VECTOR_I32 |   38|   |
| MAMA_FIELD_TYPE_VECTOR_U32 |   39|   |
| MAMA_FIELD_TYPE_VECTOR_I64 |   40|   |
| MAMA_FIELD_TYPE_VECTOR_U64 |   41|   |
| MAMA_FIELD_TYPE_VECTOR_F32 |   44|   |
| MAMA_FIELD_TYPE_VECTOR_F64 |   45|   |
| MAMA_FIELD_TYPE_VECTOR_STRING |   46|   |
| MAMA_FIELD_TYPE_VECTOR_MSG |   47|   |
| MAMA_FIELD_TYPE_VECTOR_TIME |   48|   |
| MAMA_FIELD_TYPE_VECTOR_PRICE |   49|   |
| MAMA_FIELD_TYPE_QUANTITY |   50|   |
| MAMA_FIELD_TYPE_COLLECTION |   99|  Collection  |
| MAMA_FIELD_TYPE_UNKNOWN |  100|  Unknown  |




The mamaFieldDescriptor class represents a field in a mamaMsg. 


### typedef mamaFieldType

```cpp
typedef enum mamaFieldType_ mamaFieldType;
```


The mamaFieldDescriptor class represents a field in a mamaMsg. 



## Functions Documentation

### function mamaFieldTypeToString

```cpp
const MAMAExpDLL char * mamaFieldTypeToString(
    mamaFieldType type
)
```


**Parameters**: 

  * **type** The type.


**Return**: The type as a string. 

Return the field type as a string.


### function stringToMamaFieldType

```cpp
MAMAExpDLL mamaFieldType stringToMamaFieldType(
    const char * str
)
```


**Parameters**: 

  * **str** The string to transform.


**Return**: The field type. 

Return the string as a field type.


### function mamaFieldDescriptor_create

```cpp
MAMAExpDLL mama_status mamaFieldDescriptor_create(
    mamaFieldDescriptor * descriptor,
    mama_fid_t fid,
    mamaFieldType type,
    const char * name
)
```


**Parameters**: 

  * **descriptor** The descriptor. 
  * **fid** The field identifier. 
  * **type** The type. 
  * **name** The field name.


**Return**: mama_status code 

Create a mamaFieldDescriptor


### function mamaFieldDescriptor_destroy

```cpp
MAMAExpDLL mama_status mamaFieldDescriptor_destroy(
    mamaFieldDescriptor descriptor
)
```


**Parameters**: 

  * **descriptor** The descriptor. 


**Return**: mama_status code 

Destroy a mamaFieldDescriptor


### function mamaFieldDescriptor_getFid

```cpp
MAMAExpDLL mama_fid_t mamaFieldDescriptor_getFid(
    const mamaFieldDescriptor descriptor
)
```


**Parameters**: 

  * **descriptor** The descriptor. 


**Return**: The fid. 

Return the field identifier. 0 indicates no fid.


### function mamaFieldDescriptor_getType

```cpp
MAMAExpDLL mamaFieldType mamaFieldDescriptor_getType(
    const mamaFieldDescriptor descriptor
)
```


**Return**: The type. 

Return the data type.


### function mamaFieldDescriptor_getName

```cpp
const MAMAExpDLL char * mamaFieldDescriptor_getName(
    const mamaFieldDescriptor descriptor
)
```


**Parameters**: 

  * **descriptor** The descriptor. 


**Return**: The name. 

Return the human readable name of the field.


### function mamaFieldDescriptor_getTypeName

```cpp
const MAMAExpDLL char * mamaFieldDescriptor_getTypeName(
    const mamaFieldDescriptor descriptor
)
```


**Parameters**: 

  * **descriptor** The descriptor. 


return a human readable representation of the type name.


### function mamaFieldDescriptor_setClosure

```cpp
MAMAExpDLL mama_status mamaFieldDescriptor_setClosure(
    mamaFieldDescriptor descriptor,
    void * closure
)
```


**Parameters**: 

  * **descriptor** The field descriptor on which the closure is being set. 
  * **closure** The arbitrary user supplied data.


**Return**: mama_status MAMA_STATUS_OK if the call was successful. 

Associate some user supplied data with this field descriptor.


### function mamaFieldDescriptor_getClosure

```cpp
MAMAExpDLL mama_status mamaFieldDescriptor_getClosure(
    mamaFieldDescriptor descriptor,
    void ** closure
)
```


**Parameters**: 

  * **descriptor** The field descriptor from which the closure is being obtained. 
  * **closure** The location to where the user supplied data will be written.


**Return**: mama_status MAMA_STATUS_OK if the call was successful. 

Return the user supplied data with this field descriptor. Returns NULL if no data was associated with this field descriptor.




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

#ifndef MamaFieldDescriptorH__
#define MamaFieldDescriptorH__

#include <mama/status.h>
#include <mama/types.h>
#include <stdlib.h>

#include "wombat/port.h"

#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaFieldType_
{
    MAMA_FIELD_TYPE_MSG           =    1,

    MAMA_FIELD_TYPE_OPAQUE        =    7,

    MAMA_FIELD_TYPE_STRING        =    8,

    MAMA_FIELD_TYPE_BOOL          =    9,

    MAMA_FIELD_TYPE_CHAR          =   10,

    MAMA_FIELD_TYPE_I8            =   14,

    MAMA_FIELD_TYPE_U8            =   15,

    MAMA_FIELD_TYPE_I16           =   16,

    MAMA_FIELD_TYPE_U16           =   17,

    MAMA_FIELD_TYPE_I32           =   18,

    MAMA_FIELD_TYPE_U32           =   19,

    MAMA_FIELD_TYPE_I64           =   20,

    MAMA_FIELD_TYPE_U64           =   21,

    MAMA_FIELD_TYPE_F32           =   24,

    MAMA_FIELD_TYPE_F64           =   25,

    MAMA_FIELD_TYPE_TIME          =   26,

    MAMA_FIELD_TYPE_PRICE         =   27,

    MAMA_FIELD_TYPE_VECTOR_BOOL   =   29,
    MAMA_FIELD_TYPE_VECTOR_CHAR   =   30,
    MAMA_FIELD_TYPE_VECTOR_I8     =   34,
    MAMA_FIELD_TYPE_VECTOR_U8     =   35,
    MAMA_FIELD_TYPE_VECTOR_I16    =   36,
    MAMA_FIELD_TYPE_VECTOR_U16    =   37,
    MAMA_FIELD_TYPE_VECTOR_I32    =   38,
    MAMA_FIELD_TYPE_VECTOR_U32    =   39,
    MAMA_FIELD_TYPE_VECTOR_I64    =   40,
    MAMA_FIELD_TYPE_VECTOR_U64    =   41,
    MAMA_FIELD_TYPE_VECTOR_F32    =   44,
    MAMA_FIELD_TYPE_VECTOR_F64    =   45,
    MAMA_FIELD_TYPE_VECTOR_STRING =   46,
    MAMA_FIELD_TYPE_VECTOR_MSG    =   47,
    MAMA_FIELD_TYPE_VECTOR_TIME   =   48,
    MAMA_FIELD_TYPE_VECTOR_PRICE  =   49,
    MAMA_FIELD_TYPE_QUANTITY      =   50,

    MAMA_FIELD_TYPE_COLLECTION    =   99,

    MAMA_FIELD_TYPE_UNKNOWN       =  100

} mamaFieldType;

MAMAExpDLL
extern const char*
mamaFieldTypeToString (mamaFieldType type);

MAMAExpDLL
extern mamaFieldType
stringToMamaFieldType (const char*  str);

MAMAExpDLL
extern mama_status
mamaFieldDescriptor_create(
    mamaFieldDescriptor*  descriptor,
    mama_fid_t            fid,
    mamaFieldType         type,
    const char*           name);

MAMAExpDLL
extern mama_status
mamaFieldDescriptor_destroy(
    mamaFieldDescriptor  descriptor);

MAMAExpDLL
mama_fid_t
mamaFieldDescriptor_getFid(
    const mamaFieldDescriptor  descriptor);

MAMAExpDLL
mamaFieldType
mamaFieldDescriptor_getType(
    const mamaFieldDescriptor  descriptor);

MAMAExpDLL
const char*
mamaFieldDescriptor_getName(
    const mamaFieldDescriptor  descriptor);

MAMAExpDLL
const char*
mamaFieldDescriptor_getTypeName(
    const mamaFieldDescriptor  descriptor);

MAMAExpDLL
mama_status
mamaFieldDescriptor_setClosure(
            mamaFieldDescriptor  descriptor,
            void*                closure);

MAMAExpDLL
mama_status
mamaFieldDescriptor_getClosure(
        mamaFieldDescriptor  descriptor,
        void**               closure);

#if defined(__cplusplus)
}
#endif

#endif /* MamaFieldDescriptorH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
