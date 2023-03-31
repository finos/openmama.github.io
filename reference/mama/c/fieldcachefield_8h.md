---
title: fieldcache/fieldcachefield.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/fieldcachefield.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_bool_t | **[mamaFieldCacheField_isSupported](fieldcachefield_8h.html#function-mamafieldcachefield-issupported)**(mamaFieldType type) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_create](fieldcachefield_8h.html#function-mamafieldcachefield-create)**(mamaFieldCacheField * field, mama_fid_t fid, mamaFieldType type, const char * name) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_destroy](fieldcachefield_8h.html#function-mamafieldcachefield-destroy)**(mamaFieldCacheField field) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_copy](fieldcachefield_8h.html#function-mamafieldcachefield-copy)**(const mamaFieldCacheField field, mamaFieldCacheField copy) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getFid](fieldcachefield_8h.html#function-mamafieldcachefield-getfid)**(mamaFieldCacheField field, mama_fid_t * fid) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getType](fieldcachefield_8h.html#function-mamafieldcachefield-gettype)**(mamaFieldCacheField field, mamaFieldType * type) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getName](fieldcachefield_8h.html#function-mamafieldcachefield-getname)**(mamaFieldCacheField field, const char ** name) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setDescriptor](fieldcachefield_8h.html#function-mamafieldcachefield-setdescriptor)**(mamaFieldCacheField field, const mamaFieldDescriptor desc) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getDescriptor](fieldcachefield_8h.html#function-mamafieldcachefield-getdescriptor)**(mamaFieldCacheField field, const mamaFieldDescriptor * desc) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_isModified](fieldcachefield_8h.html#function-mamafieldcachefield-ismodified)**(mamaFieldCacheField field, mama_bool_t * modified) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setPublish](fieldcachefield_8h.html#function-mamafieldcachefield-setpublish)**(mamaFieldCacheField field, mama_bool_t publish) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getPublish](fieldcachefield_8h.html#function-mamafieldcachefield-getpublish)**(mamaFieldCacheField field, mama_bool_t * publish) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setCheckModified](fieldcachefield_8h.html#function-mamafieldcachefield-setcheckmodified)**(mamaFieldCacheField field, mama_bool_t check) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getCheckModified](fieldcachefield_8h.html#function-mamafieldcachefield-getcheckmodified)**(mamaFieldCacheField field, mama_bool_t * check) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getBool](fieldcachefield_8h.html#function-mamafieldcachefield-getbool)**(const mamaFieldCacheField field, mama_bool_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getChar](fieldcachefield_8h.html#function-mamafieldcachefield-getchar)**(const mamaFieldCacheField field, char * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getI8](fieldcachefield_8h.html#function-mamafieldcachefield-geti8)**(const mamaFieldCacheField field, mama_i8_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getU8](fieldcachefield_8h.html#function-mamafieldcachefield-getu8)**(const mamaFieldCacheField field, mama_u8_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getI16](fieldcachefield_8h.html#function-mamafieldcachefield-geti16)**(const mamaFieldCacheField field, mama_i16_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getU16](fieldcachefield_8h.html#function-mamafieldcachefield-getu16)**(const mamaFieldCacheField field, mama_u16_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getI32](fieldcachefield_8h.html#function-mamafieldcachefield-geti32)**(const mamaFieldCacheField field, mama_i32_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getU32](fieldcachefield_8h.html#function-mamafieldcachefield-getu32)**(const mamaFieldCacheField field, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getI64](fieldcachefield_8h.html#function-mamafieldcachefield-geti64)**(const mamaFieldCacheField field, mama_i64_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getU64](fieldcachefield_8h.html#function-mamafieldcachefield-getu64)**(const mamaFieldCacheField field, mama_u64_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getF32](fieldcachefield_8h.html#function-mamafieldcachefield-getf32)**(const mamaFieldCacheField field, mama_f32_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getF64](fieldcachefield_8h.html#function-mamafieldcachefield-getf64)**(const mamaFieldCacheField field, mama_f64_t * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getString](fieldcachefield_8h.html#function-mamafieldcachefield-getstring)**(const mamaFieldCacheField field, const char ** result, mama_size_t * len) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getPrice](fieldcachefield_8h.html#function-mamafieldcachefield-getprice)**(const mamaFieldCacheField field, const mamaPrice * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getDateTime](fieldcachefield_8h.html#function-mamafieldcachefield-getdatetime)**(const mamaFieldCacheField field, const mamaDateTime * result) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getBoolVector](fieldcachefield_8h.html#function-mamafieldcachefield-getboolvector)**(const mamaFieldCacheField field, const mama_bool_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getCharVector](fieldcachefield_8h.html#function-mamafieldcachefield-getcharvector)**(const mamaFieldCacheField field, const char ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getI8Vector](fieldcachefield_8h.html#function-mamafieldcachefield-geti8vector)**(const mamaFieldCacheField field, const mama_i8_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getU8Vector](fieldcachefield_8h.html#function-mamafieldcachefield-getu8vector)**(const mamaFieldCacheField field, const mama_u8_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getI16Vector](fieldcachefield_8h.html#function-mamafieldcachefield-geti16vector)**(const mamaFieldCacheField field, const mama_i16_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getU16Vector](fieldcachefield_8h.html#function-mamafieldcachefield-getu16vector)**(const mamaFieldCacheField field, const mama_u16_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getI32Vector](fieldcachefield_8h.html#function-mamafieldcachefield-geti32vector)**(const mamaFieldCacheField field, const mama_i32_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getU32Vector](fieldcachefield_8h.html#function-mamafieldcachefield-getu32vector)**(const mamaFieldCacheField field, const mama_u32_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getI64Vector](fieldcachefield_8h.html#function-mamafieldcachefield-geti64vector)**(const mamaFieldCacheField field, const mama_i64_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getU64Vector](fieldcachefield_8h.html#function-mamafieldcachefield-getu64vector)**(const mamaFieldCacheField field, const mama_u64_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getF32Vector](fieldcachefield_8h.html#function-mamafieldcachefield-getf32vector)**(const mamaFieldCacheField field, const mama_f32_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getF64Vector](fieldcachefield_8h.html#function-mamafieldcachefield-getf64vector)**(const mamaFieldCacheField field, const mama_f64_t ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getStringVector](fieldcachefield_8h.html#function-mamafieldcachefield-getstringvector)**(const mamaFieldCacheField field, const char *** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getPriceVector](fieldcachefield_8h.html#function-mamafieldcachefield-getpricevector)**(const mamaFieldCacheField field, const mamaPrice ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_getDateTimeVector](fieldcachefield_8h.html#function-mamafieldcachefield-getdatetimevector)**(const mamaFieldCacheField field, const mamaDateTime ** values, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setBool](fieldcachefield_8h.html#function-mamafieldcachefield-setbool)**(mamaFieldCacheField field, mama_bool_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setChar](fieldcachefield_8h.html#function-mamafieldcachefield-setchar)**(mamaFieldCacheField field, char value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setI8](fieldcachefield_8h.html#function-mamafieldcachefield-seti8)**(mamaFieldCacheField field, mama_i8_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setU8](fieldcachefield_8h.html#function-mamafieldcachefield-setu8)**(mamaFieldCacheField field, mama_u8_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setI16](fieldcachefield_8h.html#function-mamafieldcachefield-seti16)**(mamaFieldCacheField field, mama_i16_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setU16](fieldcachefield_8h.html#function-mamafieldcachefield-setu16)**(mamaFieldCacheField field, mama_u16_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setI32](fieldcachefield_8h.html#function-mamafieldcachefield-seti32)**(mamaFieldCacheField field, mama_i32_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setU32](fieldcachefield_8h.html#function-mamafieldcachefield-setu32)**(mamaFieldCacheField field, mama_u32_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setI64](fieldcachefield_8h.html#function-mamafieldcachefield-seti64)**(mamaFieldCacheField field, mama_i64_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setU64](fieldcachefield_8h.html#function-mamafieldcachefield-setu64)**(mamaFieldCacheField field, mama_u64_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setF32](fieldcachefield_8h.html#function-mamafieldcachefield-setf32)**(mamaFieldCacheField field, mama_f32_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setF64](fieldcachefield_8h.html#function-mamafieldcachefield-setf64)**(mamaFieldCacheField field, mama_f64_t value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setString](fieldcachefield_8h.html#function-mamafieldcachefield-setstring)**(const mamaFieldCacheField field, const char * value, mama_size_t len) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setPrice](fieldcachefield_8h.html#function-mamafieldcachefield-setprice)**(const mamaFieldCacheField field, const mamaPrice value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setDateTime](fieldcachefield_8h.html#function-mamafieldcachefield-setdatetime)**(const mamaFieldCacheField field, const mamaDateTime value) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setBoolVector](fieldcachefield_8h.html#function-mamafieldcachefield-setboolvector)**(const mamaFieldCacheField field, const mama_bool_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setCharVector](fieldcachefield_8h.html#function-mamafieldcachefield-setcharvector)**(const mamaFieldCacheField field, const char * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setI8Vector](fieldcachefield_8h.html#function-mamafieldcachefield-seti8vector)**(const mamaFieldCacheField field, const mama_i8_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setU8Vector](fieldcachefield_8h.html#function-mamafieldcachefield-setu8vector)**(const mamaFieldCacheField field, const mama_u8_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setI16Vector](fieldcachefield_8h.html#function-mamafieldcachefield-seti16vector)**(const mamaFieldCacheField field, const mama_i16_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setU16Vector](fieldcachefield_8h.html#function-mamafieldcachefield-setu16vector)**(const mamaFieldCacheField field, const mama_u16_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setI32Vector](fieldcachefield_8h.html#function-mamafieldcachefield-seti32vector)**(const mamaFieldCacheField field, const mama_i32_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setU32Vector](fieldcachefield_8h.html#function-mamafieldcachefield-setu32vector)**(const mamaFieldCacheField field, const mama_u32_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setI64Vector](fieldcachefield_8h.html#function-mamafieldcachefield-seti64vector)**(const mamaFieldCacheField field, const mama_i64_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setU64Vector](fieldcachefield_8h.html#function-mamafieldcachefield-setu64vector)**(const mamaFieldCacheField field, const mama_u64_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setF32Vector](fieldcachefield_8h.html#function-mamafieldcachefield-setf32vector)**(const mamaFieldCacheField field, const mama_f32_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setF64Vector](fieldcachefield_8h.html#function-mamafieldcachefield-setf64vector)**(const mamaFieldCacheField field, const mama_f64_t * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setStringVector](fieldcachefield_8h.html#function-mamafieldcachefield-setstringvector)**(const mamaFieldCacheField field, const char ** values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setPriceVector](fieldcachefield_8h.html#function-mamafieldcachefield-setpricevector)**(const mamaFieldCacheField field, const mamaPrice * values, mama_size_t size) |
| MAMAExpDLL mama_status | **[mamaFieldCacheField_setDateTimeVector](fieldcachefield_8h.html#function-mamafieldcachefield-setdatetimevector)**(const mamaFieldCacheField field, const mamaDateTime * values, mama_size_t size) |


## Functions Documentation

### function mamaFieldCacheField_isSupported

```cpp
MAMAExpDLL mama_bool_t mamaFieldCacheField_isSupported(
    mamaFieldType type
)
```


**Parameters**: 

  * **type** (in) The mamaFieldType to check. 


**Return**: Whether the type can be used to create a mamaFieldCache field. 

This function will check if a specific mama field type can be used to create a `mamaFieldCacheField`.


### function mamaFieldCacheField_create

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_create(
    mamaFieldCacheField * field,
    mama_fid_t fid,
    mamaFieldType type,
    const char * name
)
```


**Parameters**: 

  * **field** (out) The mamaFieldCacheField to create. 
  * **fid** (in) The field id of the new field. 
  * **type** (in) The type of the new field. 
  * **type** (in) The name of the new field (optional: can be NULL). 


**Return**: Resulting status of the call which can be MAMA_STATUS_NOMEM MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will create a mamaFieldCacheField that can be stored in a mamaFieldCache.


### function mamaFieldCacheField_destroy

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_destroy(
    mamaFieldCacheField field
)
```


**Parameters**: 

  * **field** (in) The field to destroy. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will destroy a `mamaFieldCacheField` previously allocated by a call to `mamaFieldCacheField_create`.


### function mamaFieldCacheField_copy

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_copy(
    const mamaFieldCacheField field,
    mamaFieldCacheField copy
)
```


**Parameters**: 

  * **field** (in) The source field to copy from. 
  * **copy** (out) The destination field to copy to. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will copy a `mamaFieldCacheField` into another one.


### function mamaFieldCacheField_getFid

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getFid(
    mamaFieldCacheField field,
    mama_fid_t * fid
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **fid** (out) The field id of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will get the field id of a `mamaFieldCacheField`.


### function mamaFieldCacheField_getType

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getType(
    mamaFieldCacheField field,
    mamaFieldType * type
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **type** (out) The type of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will get the field type of a `mamaFieldCacheField`.


### function mamaFieldCacheField_getName

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getName(
    mamaFieldCacheField field,
    const char ** name
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **name** (out) The descriptor of the field (can be NULL). 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will get the descriptor of a `mamaFieldCacheField`, if present.


### function mamaFieldCacheField_setDescriptor

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setDescriptor(
    mamaFieldCacheField field,
    const mamaFieldDescriptor desc
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **desc** (in) The `mamaFieldDescriptor` of the field (can be NULL). 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will set the descriptor of a `mamaFieldCacheField`.


### function mamaFieldCacheField_getDescriptor

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getDescriptor(
    mamaFieldCacheField field,
    const mamaFieldDescriptor * desc
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **desc** (out) The `mamaFieldDescriptor` of the field (can be NULL). 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will get the descriptor of a `mamaFieldCacheField`.


### function mamaFieldCacheField_isModified

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_isModified(
    mamaFieldCacheField field,
    mama_bool_t * modified
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **modified** (out) The modified state of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will return whether the field has been modified.


### function mamaFieldCacheField_setPublish

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setPublish(
    mamaFieldCacheField field,
    mama_bool_t publish
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **publish** (in) The publish flag of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will set the publish flag of a `mamaFieldCacheField`. If set to false, the field will never be published.


### function mamaFieldCacheField_getPublish

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getPublish(
    mamaFieldCacheField field,
    mama_bool_t * publish
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **publish** (out) The publish flag of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will get the publish flag of a `mamaFieldCacheField`.


### function mamaFieldCacheField_setCheckModified

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setCheckModified(
    mamaFieldCacheField field,
    mama_bool_t check
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **check** (in) The checkModified flag. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

This function will set the checkModifed flag of a `mamaFieldCacheField`. If set to true, the field will be published only if modified.


### function mamaFieldCacheField_getCheckModified

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getCheckModified(
    mamaFieldCacheField field,
    mama_bool_t * check
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **check** (out) The checkModified flag of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

The function will get the checkModified flag of a `mamaFieldCacheField`.


### function mamaFieldCacheField_getBool

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getBool(
    const mamaFieldCacheField field,
    mama_bool_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type BOOL.


### function mamaFieldCacheField_getChar

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getChar(
    const mamaFieldCacheField field,
    char * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type CHAR.


### function mamaFieldCacheField_getI8

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getI8(
    const mamaFieldCacheField field,
    mama_i8_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type I8.


### function mamaFieldCacheField_getU8

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getU8(
    const mamaFieldCacheField field,
    mama_u8_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type U8.


### function mamaFieldCacheField_getI16

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getI16(
    const mamaFieldCacheField field,
    mama_i16_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type I16.


### function mamaFieldCacheField_getU16

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getU16(
    const mamaFieldCacheField field,
    mama_u16_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type U16.


### function mamaFieldCacheField_getI32

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getI32(
    const mamaFieldCacheField field,
    mama_i32_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type I32.


### function mamaFieldCacheField_getU32

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getU32(
    const mamaFieldCacheField field,
    mama_u32_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type U32.


### function mamaFieldCacheField_getI64

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getI64(
    const mamaFieldCacheField field,
    mama_i64_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type I64.


### function mamaFieldCacheField_getU64

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getU64(
    const mamaFieldCacheField field,
    mama_u64_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type U64.


### function mamaFieldCacheField_getF32

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getF32(
    const mamaFieldCacheField field,
    mama_f32_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type F32.


### function mamaFieldCacheField_getF64

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getF64(
    const mamaFieldCacheField field,
    mama_f64_t * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type F64.


### function mamaFieldCacheField_getString

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getString(
    const mamaFieldCacheField field,
    const char ** result,
    mama_size_t * len
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 
  * **len** (out) The length of the string. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type STRING.


### function mamaFieldCacheField_getPrice

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getPrice(
    const mamaFieldCacheField field,
    const mamaPrice * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type PRICE.


### function mamaFieldCacheField_getDateTime

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getDateTime(
    const mamaFieldCacheField field,
    const mamaDateTime * result
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **result** (out) The value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type TIME.


### function mamaFieldCacheField_getBoolVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getBoolVector(
    const mamaFieldCacheField field,
    const mama_bool_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type Bool vector.


### function mamaFieldCacheField_getCharVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getCharVector(
    const mamaFieldCacheField field,
    const char ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type Char vector.


### function mamaFieldCacheField_getI8Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getI8Vector(
    const mamaFieldCacheField field,
    const mama_i8_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type I8 vector.


### function mamaFieldCacheField_getU8Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getU8Vector(
    const mamaFieldCacheField field,
    const mama_u8_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type U8 vector.


### function mamaFieldCacheField_getI16Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getI16Vector(
    const mamaFieldCacheField field,
    const mama_i16_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type I16 vector.


### function mamaFieldCacheField_getU16Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getU16Vector(
    const mamaFieldCacheField field,
    const mama_u16_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type U16 vector.


### function mamaFieldCacheField_getI32Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getI32Vector(
    const mamaFieldCacheField field,
    const mama_i32_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type I32 vector.


### function mamaFieldCacheField_getU32Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getU32Vector(
    const mamaFieldCacheField field,
    const mama_u32_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type U32 vector.


### function mamaFieldCacheField_getI64Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getI64Vector(
    const mamaFieldCacheField field,
    const mama_i64_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type I64 vector.


### function mamaFieldCacheField_getU64Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getU64Vector(
    const mamaFieldCacheField field,
    const mama_u64_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the values a `mamaFieldCacheField` of type U64 vector.


### function mamaFieldCacheField_getF32Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getF32Vector(
    const mamaFieldCacheField field,
    const mama_f32_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type F32 vector.


### function mamaFieldCacheField_getF64Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getF64Vector(
    const mamaFieldCacheField field,
    const mama_f64_t ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type F64 vector.


### function mamaFieldCacheField_getStringVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getStringVector(
    const mamaFieldCacheField field,
    const char *** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type STRING vector.


### function mamaFieldCacheField_getPriceVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getPriceVector(
    const mamaFieldCacheField field,
    const mamaPrice ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type PRICE vector.


### function mamaFieldCacheField_getDateTimeVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_getDateTimeVector(
    const mamaFieldCacheField field,
    const mamaDateTime ** values,
    mama_size_t * size
)
```


**Parameters**: 

  * **field** (in) The field. 
  * **values** (out) The array of values of the field. 
  * **size** (out) The number of values. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will get the value a `mamaFieldCacheField` of type TIME vector.


### function mamaFieldCacheField_setBool

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setBool(
    mamaFieldCacheField field,
    mama_bool_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type BOOL.


### function mamaFieldCacheField_setChar

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setChar(
    mamaFieldCacheField field,
    char value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type CHAR.


### function mamaFieldCacheField_setI8

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setI8(
    mamaFieldCacheField field,
    mama_i8_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type I8.


### function mamaFieldCacheField_setU8

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setU8(
    mamaFieldCacheField field,
    mama_u8_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type U8.


### function mamaFieldCacheField_setI16

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setI16(
    mamaFieldCacheField field,
    mama_i16_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type I16.


### function mamaFieldCacheField_setU16

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setU16(
    mamaFieldCacheField field,
    mama_u16_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type U16.


### function mamaFieldCacheField_setI32

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setI32(
    mamaFieldCacheField field,
    mama_i32_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type I32.


### function mamaFieldCacheField_setU32

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setU32(
    mamaFieldCacheField field,
    mama_u32_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type U32.


### function mamaFieldCacheField_setI64

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setI64(
    mamaFieldCacheField field,
    mama_i64_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type I64.


### function mamaFieldCacheField_setU64

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setU64(
    mamaFieldCacheField field,
    mama_u64_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type U64.


### function mamaFieldCacheField_setF32

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setF32(
    mamaFieldCacheField field,
    mama_f32_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type F32.


### function mamaFieldCacheField_setF64

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setF64(
    mamaFieldCacheField field,
    mama_f64_t value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type F64.


### function mamaFieldCacheField_setString

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setString(
    const mamaFieldCacheField field,
    const char * value,
    mama_size_t len
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 
  * **len** (in) The length of the string. Can be 0. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type STRING. If parameter len is 0 then the length of the string is automatically computed using `strlen`.


### function mamaFieldCacheField_setPrice

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setPrice(
    const mamaFieldCacheField field,
    const mamaPrice value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type PRICE.


### function mamaFieldCacheField_setDateTime

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setDateTime(
    const mamaFieldCacheField field,
    const mamaDateTime value
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the value of a `mamaFieldCacheField` of type TIME.


### function mamaFieldCacheField_setBoolVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setBoolVector(
    const mamaFieldCacheField field,
    const mama_bool_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type Bool vector.


### function mamaFieldCacheField_setCharVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setCharVector(
    const mamaFieldCacheField field,
    const char * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type Char vector.


### function mamaFieldCacheField_setI8Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setI8Vector(
    const mamaFieldCacheField field,
    const mama_i8_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type I8 vector.


### function mamaFieldCacheField_setU8Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setU8Vector(
    const mamaFieldCacheField field,
    const mama_u8_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type U8 vector.


### function mamaFieldCacheField_setI16Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setI16Vector(
    const mamaFieldCacheField field,
    const mama_i16_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type I16 vector.


### function mamaFieldCacheField_setU16Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setU16Vector(
    const mamaFieldCacheField field,
    const mama_u16_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type U16 vector.


### function mamaFieldCacheField_setI32Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setI32Vector(
    const mamaFieldCacheField field,
    const mama_i32_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type I32 vector.


### function mamaFieldCacheField_setU32Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setU32Vector(
    const mamaFieldCacheField field,
    const mama_u32_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type U32 vector.


### function mamaFieldCacheField_setI64Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setI64Vector(
    const mamaFieldCacheField field,
    const mama_i64_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type I64 vector.


### function mamaFieldCacheField_setU64Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setU64Vector(
    const mamaFieldCacheField field,
    const mama_u64_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type U64 vector.


### function mamaFieldCacheField_setF32Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setF32Vector(
    const mamaFieldCacheField field,
    const mama_f32_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type F32 vector.


### function mamaFieldCacheField_setF64Vector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setF64Vector(
    const mamaFieldCacheField field,
    const mama_f64_t * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type F64 vector.


### function mamaFieldCacheField_setStringVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setStringVector(
    const mamaFieldCacheField field,
    const char ** values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type STRING vector.


### function mamaFieldCacheField_setPriceVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setPriceVector(
    const mamaFieldCacheField field,
    const mamaPrice * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type PRICE vector.


### function mamaFieldCacheField_setDateTimeVector

```cpp
MAMAExpDLL mama_status mamaFieldCacheField_setDateTimeVector(
    const mamaFieldCacheField field,
    const mamaDateTime * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** (in) The field to set the value to. 
  * **value** (in) The new value of the field. 


**Return**: Resulting status of the call which can be MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 

This function will set the values of a `mamaFieldCacheField` of type TIME vector.




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

#ifndef MamaFieldCacheFieldH__
#define MamaFieldCacheFieldH__

#include <mama/config.h>
#include <mama/fielddesc.h>
#include <mama/types.h>
#include <mama/status.h>
#include <mama/fieldcache/fieldcachetypes.h>

#if defined(__cplusplus)
extern "C" {
#endif /* defined(__cplusplus) */

MAMAExpDLL
extern mama_bool_t
mamaFieldCacheField_isSupported(mamaFieldType type);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_create(mamaFieldCacheField* field,
                           mama_fid_t fid,
                           mamaFieldType type,
                           const char* name);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_destroy(mamaFieldCacheField field);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_copy(const mamaFieldCacheField field, mamaFieldCacheField copy);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getFid(mamaFieldCacheField field, mama_fid_t* fid);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getType(mamaFieldCacheField field, mamaFieldType* type);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getName(mamaFieldCacheField field, const char** name);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setDescriptor(mamaFieldCacheField field,
                                  const mamaFieldDescriptor desc);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getDescriptor(mamaFieldCacheField field,
                                  const mamaFieldDescriptor* desc);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_isModified(mamaFieldCacheField field, mama_bool_t* modified);


MAMAExpDLL
extern mama_status
mamaFieldCacheField_setPublish(mamaFieldCacheField field, mama_bool_t publish);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getPublish(mamaFieldCacheField field, mama_bool_t* publish);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setCheckModified(mamaFieldCacheField field, mama_bool_t check);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getCheckModified(mamaFieldCacheField field, mama_bool_t* check);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getBool (const mamaFieldCacheField field, mama_bool_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getChar(const mamaFieldCacheField field, char* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getI8(const mamaFieldCacheField field, mama_i8_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getU8(const mamaFieldCacheField field, mama_u8_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getI16(const mamaFieldCacheField field, mama_i16_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getU16(const mamaFieldCacheField field, mama_u16_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getI32(const mamaFieldCacheField field, mama_i32_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getU32(const mamaFieldCacheField field, mama_u32_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getI64(const mamaFieldCacheField field, mama_i64_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getU64(const mamaFieldCacheField field, mama_u64_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getF32(const mamaFieldCacheField field, mama_f32_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getF64(const mamaFieldCacheField field, mama_f64_t* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getString(const mamaFieldCacheField field,
                              const char** result,
                              mama_size_t* len);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getPrice(const mamaFieldCacheField field,
                             const mamaPrice* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getDateTime(const mamaFieldCacheField field,
                                const mamaDateTime* result);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getBoolVector(const mamaFieldCacheField field,
                                  const mama_bool_t** values,
                                  mama_size_t* size);
MAMAExpDLL
extern mama_status
mamaFieldCacheField_getCharVector(const mamaFieldCacheField field,
                                  const char** values,
                                  mama_size_t* size);


MAMAExpDLL
extern mama_status
mamaFieldCacheField_getI8Vector(const mamaFieldCacheField field,
                                const mama_i8_t** values,
                                mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getU8Vector(const mamaFieldCacheField field,
                                const mama_u8_t** values,
                                mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getI16Vector(const mamaFieldCacheField field,
                                 const mama_i16_t** values,
                                 mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getU16Vector(const mamaFieldCacheField field,
                                 const mama_u16_t** values,
                                 mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getI32Vector(const mamaFieldCacheField field,
                                 const mama_i32_t** values,
                                 mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getU32Vector(const mamaFieldCacheField field,
                                 const mama_u32_t** values,
                                 mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getI64Vector(const mamaFieldCacheField field,
                                 const mama_i64_t** values,
                                 mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getU64Vector(const mamaFieldCacheField field,
                                 const mama_u64_t** values,
                                 mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getF32Vector(const mamaFieldCacheField field,
                                 const mama_f32_t** values,
                                 mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getF64Vector(const mamaFieldCacheField field,
                                 const mama_f64_t** values,
                                 mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getStringVector(const mamaFieldCacheField field,
                                    const char*** values,
                                    mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getPriceVector(const mamaFieldCacheField field,
                                   const mamaPrice** values,
                                   mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_getDateTimeVector(const mamaFieldCacheField field,
                                      const mamaDateTime** values,
                                      mama_size_t* size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setBool(mamaFieldCacheField field, mama_bool_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setChar(mamaFieldCacheField field, char value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setI8(mamaFieldCacheField field, mama_i8_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setU8(mamaFieldCacheField field, mama_u8_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setI16(mamaFieldCacheField field, mama_i16_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setU16(mamaFieldCacheField field, mama_u16_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setI32(mamaFieldCacheField field, mama_i32_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setU32(mamaFieldCacheField field, mama_u32_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setI64(mamaFieldCacheField field, mama_i64_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setU64(mamaFieldCacheField field, mama_u64_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setF32(mamaFieldCacheField field, mama_f32_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setF64(mamaFieldCacheField field, mama_f64_t value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setString(const mamaFieldCacheField field,
                              const char* value,
                              mama_size_t len);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setPrice(const mamaFieldCacheField field, const mamaPrice value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setDateTime(const mamaFieldCacheField field,
                                const mamaDateTime value);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setBoolVector(const mamaFieldCacheField field,
                                  const mama_bool_t* values,
                                  mama_size_t size);
MAMAExpDLL
extern mama_status
mamaFieldCacheField_setCharVector(const mamaFieldCacheField field,
                                  const char* values,
                                  mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setI8Vector(const mamaFieldCacheField field,
                                const mama_i8_t* values,
                                mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setU8Vector(const mamaFieldCacheField field,
                                const mama_u8_t* values,
                                mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setI16Vector(const mamaFieldCacheField field,
                                 const mama_i16_t* values,
                                 mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setU16Vector(const mamaFieldCacheField field,
                                 const mama_u16_t* values,
                                 mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setI32Vector(const mamaFieldCacheField field,
                                 const mama_i32_t* values,
                                 mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setU32Vector(const mamaFieldCacheField field,
                                 const mama_u32_t* values,
                                 mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setI64Vector(const mamaFieldCacheField field,
                                 const mama_i64_t* values,
                                 mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setU64Vector(const mamaFieldCacheField field,
                                 const mama_u64_t* values,
                                 mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setF32Vector(const mamaFieldCacheField field,
                                 const mama_f32_t* values,
                                 mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setF64Vector(const mamaFieldCacheField field,
                                 const mama_f64_t* values,
                                 mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setStringVector(const mamaFieldCacheField field,
                                    const char** values,
                                    mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setPriceVector(const mamaFieldCacheField field,
                                   const mamaPrice* values,
                                   mama_size_t size);

MAMAExpDLL
extern mama_status
mamaFieldCacheField_setDateTimeVector(const mamaFieldCacheField field,
                                      const mamaDateTime* values,
                                      mama_size_t size);

#if defined(__cplusplus)
}
#endif /* defined(__cplusplus) */

#endif /* MamaFieldCacheFieldH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
