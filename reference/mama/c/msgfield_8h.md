---
title: mama/msgfield.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/msgfield.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaMsgField_create](msgfield_8h.html#function-mamamsgfield-create)**(mamaMsgField * msgField) |
| MAMAExpDLL mama_status | **[mamaMsgField_destroy](msgfield_8h.html#function-mamamsgfield-destroy)**(mamaMsgField msgField) |
| MAMAExpDLL mama_status | **[mamaMsgField_getDescriptor](msgfield_8h.html#function-mamamsgfield-getdescriptor)**(const mamaMsgField msgField, mamaFieldDescriptor * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getFid](msgfield_8h.html#function-mamamsgfield-getfid)**(const mamaMsgField msgField, mama_fid_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getName](msgfield_8h.html#function-mamamsgfield-getname)**(const mamaMsgField msgField, const char ** result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getType](msgfield_8h.html#function-mamamsgfield-gettype)**(const mamaMsgField msgField, mamaFieldType * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getTypeName](msgfield_8h.html#function-mamamsgfield-gettypename)**(const mamaMsgField msgField, const char ** result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getBool](msgfield_8h.html#function-mamamsgfield-getbool)**(const mamaMsgField msgField, mama_bool_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getChar](msgfield_8h.html#function-mamamsgfield-getchar)**(const mamaMsgField msgField, char * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getI8](msgfield_8h.html#function-mamamsgfield-geti8)**(const mamaMsgField msgField, mama_i8_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getU8](msgfield_8h.html#function-mamamsgfield-getu8)**(const mamaMsgField msgField, mama_u8_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getI16](msgfield_8h.html#function-mamamsgfield-geti16)**(const mamaMsgField msgField, mama_i16_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getU16](msgfield_8h.html#function-mamamsgfield-getu16)**(const mamaMsgField msgField, mama_u16_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getI32](msgfield_8h.html#function-mamamsgfield-geti32)**(const mamaMsgField msgField, mama_i32_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getU32](msgfield_8h.html#function-mamamsgfield-getu32)**(const mamaMsgField msgField, mama_u32_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getI64](msgfield_8h.html#function-mamamsgfield-geti64)**(const mamaMsgField msgField, mama_i64_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getU64](msgfield_8h.html#function-mamamsgfield-getu64)**(const mamaMsgField msgField, mama_u64_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getF32](msgfield_8h.html#function-mamamsgfield-getf32)**(const mamaMsgField msgField, mama_f32_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getF64](msgfield_8h.html#function-mamamsgfield-getf64)**(const mamaMsgField msgField, mama_f64_t * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getString](msgfield_8h.html#function-mamamsgfield-getstring)**(const mamaMsgField msgField, const char ** result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getOpaque](msgfield_8h.html#function-mamamsgfield-getopaque)**(const mamaMsgField msgField, const void ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getDateTime](msgfield_8h.html#function-mamamsgfield-getdatetime)**(const mamaMsgField msgField, mamaDateTime result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getPrice](msgfield_8h.html#function-mamamsgfield-getprice)**(const mamaMsgField msgField, mamaPrice result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getMsg](msgfield_8h.html#function-mamamsgfield-getmsg)**(const mamaMsgField msgField, mamaMsg * result) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorBool](msgfield_8h.html#function-mamamsgfield-getvectorbool)**(const mamaMsgField msgField, const mama_bool_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorChar](msgfield_8h.html#function-mamamsgfield-getvectorchar)**(const mamaMsgField msgField, const char ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorI8](msgfield_8h.html#function-mamamsgfield-getvectori8)**(const mamaMsgField msgField, const mama_i8_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorU8](msgfield_8h.html#function-mamamsgfield-getvectoru8)**(const mamaMsgField msgField, const mama_u8_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorI16](msgfield_8h.html#function-mamamsgfield-getvectori16)**(const mamaMsgField msgField, const mama_i16_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorU16](msgfield_8h.html#function-mamamsgfield-getvectoru16)**(const mamaMsgField msgField, const mama_u16_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorI32](msgfield_8h.html#function-mamamsgfield-getvectori32)**(const mamaMsgField msgField, const mama_i32_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorU32](msgfield_8h.html#function-mamamsgfield-getvectoru32)**(const mamaMsgField msgField, const mama_u32_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorI64](msgfield_8h.html#function-mamamsgfield-getvectori64)**(const mamaMsgField msgField, const mama_i64_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorU64](msgfield_8h.html#function-mamamsgfield-getvectoru64)**(const mamaMsgField msgField, const mama_u64_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorF32](msgfield_8h.html#function-mamamsgfield-getvectorf32)**(const mamaMsgField msgField, const mama_f32_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorF64](msgfield_8h.html#function-mamamsgfield-getvectorf64)**(const mamaMsgField msgField, const mama_f64_t ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorString](msgfield_8h.html#function-mamamsgfield-getvectorstring)**(const mamaMsgField msgField, const char *** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getVectorMsg](msgfield_8h.html#function-mamamsgfield-getvectormsg)**(const mamaMsgField msgField, const mamaMsg ** result, mama_size_t * size) |
| MAMAExpDLL mama_status | **[mamaMsgField_getAsString](msgfield_8h.html#function-mamamsgfield-getasstring)**(const mamaMsgField field, char * buf, mama_size_t length) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateBool](msgfield_8h.html#function-mamamsgfield-updatebool)**(mamaMsgField field, mama_bool_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateChar](msgfield_8h.html#function-mamamsgfield-updatechar)**(mamaMsgField field, char value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateI8](msgfield_8h.html#function-mamamsgfield-updatei8)**(mamaMsgField field, mama_i8_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateU8](msgfield_8h.html#function-mamamsgfield-updateu8)**(mamaMsgField field, mama_u8_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateI16](msgfield_8h.html#function-mamamsgfield-updatei16)**(mamaMsgField field, mama_i16_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateU16](msgfield_8h.html#function-mamamsgfield-updateu16)**(mamaMsgField field, mama_u16_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateI32](msgfield_8h.html#function-mamamsgfield-updatei32)**(mamaMsgField field, mama_i32_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateU32](msgfield_8h.html#function-mamamsgfield-updateu32)**(mamaMsgField field, mama_u32_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateI64](msgfield_8h.html#function-mamamsgfield-updatei64)**(mamaMsgField field, mama_i64_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateU64](msgfield_8h.html#function-mamamsgfield-updateu64)**(mamaMsgField field, mama_u64_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateF32](msgfield_8h.html#function-mamamsgfield-updatef32)**(mamaMsgField field, mama_f32_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateF64](msgfield_8h.html#function-mamamsgfield-updatef64)**(mamaMsgField field, mama_f64_t value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updateDateTime](msgfield_8h.html#function-mamamsgfield-updatedatetime)**(mamaMsgField field, const mamaDateTime value) |
| MAMAExpDLL mama_status | **[mamaMsgField_updatePrice](msgfield_8h.html#function-mamamsgfield-updateprice)**(mamaMsgField field, const mamaPrice value) |


## Functions Documentation

### function mamaMsgField_create

```cpp
MAMAExpDLL mama_status mamaMsgField_create(
    mamaMsgField * msgField
)
```


**Parameters**: 

  * **msgField** A pointer to the result. 


Create a field.


### function mamaMsgField_destroy

```cpp
MAMAExpDLL mama_status mamaMsgField_destroy(
    mamaMsgField msgField
)
```


**Parameters**: 

  * **msgField** The field. 


Destroy a message and free any resources associated with it.


### function mamaMsgField_getDescriptor

```cpp
MAMAExpDLL mama_status mamaMsgField_getDescriptor(
    const mamaMsgField msgField,
    mamaFieldDescriptor * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get the field descriptor for this field.


### function mamaMsgField_getFid

```cpp
MAMAExpDLL mama_status mamaMsgField_getFid(
    const mamaMsgField msgField,
    mama_fid_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get the field ID for this field.


### function mamaMsgField_getName

```cpp
MAMAExpDLL mama_status mamaMsgField_getName(
    const mamaMsgField msgField,
    const char ** result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result. 


Get the field name for this field.


### function mamaMsgField_getType

```cpp
MAMAExpDLL mama_status mamaMsgField_getType(
    const mamaMsgField msgField,
    mamaFieldType * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get the field type for this field.


### function mamaMsgField_getTypeName

```cpp
MAMAExpDLL mama_status mamaMsgField_getTypeName(
    const mamaMsgField msgField,
    const char ** result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result. 


Get the type name for this field. This is a human readable representation of the type.


### function mamaMsgField_getBool

```cpp
MAMAExpDLL mama_status mamaMsgField_getBool(
    const mamaMsgField msgField,
    mama_bool_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a boolean field.


### function mamaMsgField_getChar

```cpp
MAMAExpDLL mama_status mamaMsgField_getChar(
    const mamaMsgField msgField,
    char * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a character field.


### function mamaMsgField_getI8

```cpp
MAMAExpDLL mama_status mamaMsgField_getI8(
    const mamaMsgField msgField,
    mama_i8_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a I8, signed 8 bit integer, field.


### function mamaMsgField_getU8

```cpp
MAMAExpDLL mama_status mamaMsgField_getU8(
    const mamaMsgField msgField,
    mama_u8_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a U8, unsigned 8 bit integer, field.


### function mamaMsgField_getI16

```cpp
MAMAExpDLL mama_status mamaMsgField_getI16(
    const mamaMsgField msgField,
    mama_i16_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a I16, signed 16 bit integer, field.


### function mamaMsgField_getU16

```cpp
MAMAExpDLL mama_status mamaMsgField_getU16(
    const mamaMsgField msgField,
    mama_u16_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a U16, unsigned 16 bit integer, field.


### function mamaMsgField_getI32

```cpp
MAMAExpDLL mama_status mamaMsgField_getI32(
    const mamaMsgField msgField,
    mama_i32_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a I32, signed 32 bit integer, field.


### function mamaMsgField_getU32

```cpp
MAMAExpDLL mama_status mamaMsgField_getU32(
    const mamaMsgField msgField,
    mama_u32_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a U32, unsigned 32 bit integer, field.


### function mamaMsgField_getI64

```cpp
MAMAExpDLL mama_status mamaMsgField_getI64(
    const mamaMsgField msgField,
    mama_i64_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a I64, signed 64 bit integer, field.


### function mamaMsgField_getU64

```cpp
MAMAExpDLL mama_status mamaMsgField_getU64(
    const mamaMsgField msgField,
    mama_u64_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a U64, unsigned 64 bit integer, field.


### function mamaMsgField_getF32

```cpp
MAMAExpDLL mama_status mamaMsgField_getF32(
    const mamaMsgField msgField,
    mama_f32_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a F32, floating point 32 bit integer, field.


### function mamaMsgField_getF64

```cpp
MAMAExpDLL mama_status mamaMsgField_getF64(
    const mamaMsgField msgField,
    mama_f64_t * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) Pointer to the result 


Get a F64, floating point 64 bit integer, field.


### function mamaMsgField_getString

```cpp
MAMAExpDLL mama_status mamaMsgField_getString(
    const mamaMsgField msgField,
    const char ** result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) the string value. 


Get a const char * field.


### function mamaMsgField_getOpaque

```cpp
MAMAExpDLL mama_status mamaMsgField_getOpaque(
    const mamaMsgField msgField,
    const void ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) The opaque value. 
  * **size** The size of the resulting opaque value. 


Get an opaque field.


### function mamaMsgField_getDateTime

```cpp
MAMAExpDLL mama_status mamaMsgField_getDateTime(
    const mamaMsgField msgField,
    mamaDateTime result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) the output value. 


Get a MAMA date/time field.


### function mamaMsgField_getPrice

```cpp
MAMAExpDLL mama_status mamaMsgField_getPrice(
    const mamaMsgField msgField,
    mamaPrice result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) the output value. 


Get a MAMA price field.


### function mamaMsgField_getMsg

```cpp
MAMAExpDLL mama_status mamaMsgField_getMsg(
    const mamaMsgField msgField,
    mamaMsg * result
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** (out) the mamaMsg output value. 


Get a MAMA submessage field.


### function mamaMsgField_getVectorBool

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorBool(
    const mamaMsgField msgField,
    const mama_bool_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of booleans.


### function mamaMsgField_getVectorChar

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorChar(
    const mamaMsgField msgField,
    const char ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of characters.


### function mamaMsgField_getVectorI8

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorI8(
    const mamaMsgField msgField,
    const mama_i8_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of signed 8 bit integers.


### function mamaMsgField_getVectorU8

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorU8(
    const mamaMsgField msgField,
    const mama_u8_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of unsigned 8 bit integers.


### function mamaMsgField_getVectorI16

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorI16(
    const mamaMsgField msgField,
    const mama_i16_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of signed 16 bit integers.


### function mamaMsgField_getVectorU16

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorU16(
    const mamaMsgField msgField,
    const mama_u16_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of unsigned 16 bit integers.


### function mamaMsgField_getVectorI32

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorI32(
    const mamaMsgField msgField,
    const mama_i32_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of signed 32 bit integers.


### function mamaMsgField_getVectorU32

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorU32(
    const mamaMsgField msgField,
    const mama_u32_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of unsigned 32 bit integers.


### function mamaMsgField_getVectorI64

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorI64(
    const mamaMsgField msgField,
    const mama_i64_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of signed 64 bit integers.


### function mamaMsgField_getVectorU64

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorU64(
    const mamaMsgField msgField,
    const mama_u64_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of unsigned 64 bit integers.


### function mamaMsgField_getVectorF32

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorF32(
    const mamaMsgField msgField,
    const mama_f32_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of 32 bit floating point numbers.


### function mamaMsgField_getVectorF64

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorF64(
    const mamaMsgField msgField,
    const mama_f64_t ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of 64 bit floating point numbers.


### function mamaMsgField_getVectorString

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorString(
    const mamaMsgField msgField,
    const char *** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The message field. 
  * **result** A pointer to the result. 
  * **size** An integer pointer that will contain the length of the result when the method returns.. 


Get a vector of strings (char*).


### function mamaMsgField_getVectorMsg

```cpp
MAMAExpDLL mama_status mamaMsgField_getVectorMsg(
    const mamaMsgField msgField,
    const mamaMsg ** result,
    mama_size_t * size
)
```


**Parameters**: 

  * **msgField** The field. 
  * **result** A pointer to the result. 
  * **size** A pointer for the length of the result. 


Get a vector of submessages.


### function mamaMsgField_getAsString

```cpp
MAMAExpDLL mama_status mamaMsgField_getAsString(
    const mamaMsgField field,
    char * buf,
    mama_size_t length
)
```


**Parameters**: 

  * **field** The field. 
  * **buf** Buffer where the result will be copied. 
  * **length** The length of the caller supplied buffer. 


Convert the value of the specified field to a string. Caller must provide a buffer for the value.


### function mamaMsgField_updateBool

```cpp
MAMAExpDLL mama_status mamaMsgField_updateBool(
    mamaMsgField field,
    mama_bool_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new bool value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type bool.


### function mamaMsgField_updateChar

```cpp
MAMAExpDLL mama_status mamaMsgField_updateChar(
    mamaMsgField field,
    char value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new char value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type char.


### function mamaMsgField_updateI8

```cpp
MAMAExpDLL mama_status mamaMsgField_updateI8(
    mamaMsgField field,
    mama_i8_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new I8 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type I8.


### function mamaMsgField_updateU8

```cpp
MAMAExpDLL mama_status mamaMsgField_updateU8(
    mamaMsgField field,
    mama_u8_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new U8 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type U8.


### function mamaMsgField_updateI16

```cpp
MAMAExpDLL mama_status mamaMsgField_updateI16(
    mamaMsgField field,
    mama_i16_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new I16 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type I16.


### function mamaMsgField_updateU16

```cpp
MAMAExpDLL mama_status mamaMsgField_updateU16(
    mamaMsgField field,
    mama_u16_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new U16 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type U16.


### function mamaMsgField_updateI32

```cpp
MAMAExpDLL mama_status mamaMsgField_updateI32(
    mamaMsgField field,
    mama_i32_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new I32 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type I32.


### function mamaMsgField_updateU32

```cpp
MAMAExpDLL mama_status mamaMsgField_updateU32(
    mamaMsgField field,
    mama_u32_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new U32 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type U32.


### function mamaMsgField_updateI64

```cpp
MAMAExpDLL mama_status mamaMsgField_updateI64(
    mamaMsgField field,
    mama_i64_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new I64 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type I64.


### function mamaMsgField_updateU64

```cpp
MAMAExpDLL mama_status mamaMsgField_updateU64(
    mamaMsgField field,
    mama_u64_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new U64 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type U64.


### function mamaMsgField_updateF32

```cpp
MAMAExpDLL mama_status mamaMsgField_updateF32(
    mamaMsgField field,
    mama_f32_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new F32 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type F32.


### function mamaMsgField_updateF64

```cpp
MAMAExpDLL mama_status mamaMsgField_updateF64(
    mamaMsgField field,
    mama_f64_t value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new F64 value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type F32.


### function mamaMsgField_updateDateTime

```cpp
MAMAExpDLL mama_status mamaMsgField_updateDateTime(
    mamaMsgField field,
    const mamaDateTime value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new MamaDateTime value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type F32.


### function mamaMsgField_updatePrice

```cpp
MAMAExpDLL mama_status mamaMsgField_updatePrice(
    mamaMsgField field,
    const mamaPrice value
)
```


**Parameters**: 

  * **field** The mamaMsgField to be updated. 
  * **value** The new value for the field.


**Return**: 

  * MAMA_STATUS_OK The function returned successfully. 
  * MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update function called. 
  * MAMA_STATUS_NULL_ARG The field passed to the function is NULL. 
  * MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new MamaDateTime value. Returns MAMA_WRONG_FIELD_TYPE if the existing field is not of type F32.




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

#ifndef MamaMsgFieldH__
#define MamaMsgFieldH__

#include <mama/types.h>
#include <mama/status.h>
#include <mama/fielddesc.h>
#include <stdlib.h>

#include "wombat/port.h"

#if defined(__cplusplus)
extern "C" {
#endif

MAMAExpDLL
extern mama_status
mamaMsgField_create (mamaMsgField*  msgField);

MAMAExpDLL
extern mama_status
mamaMsgField_destroy (mamaMsgField msgField);

MAMAExpDLL
extern mama_status
mamaMsgField_getDescriptor(
    const mamaMsgField    msgField,
    mamaFieldDescriptor*  result);

MAMAExpDLL
extern mama_status
mamaMsgField_getFid(
    const mamaMsgField  msgField,
    mama_fid_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getName(
    const mamaMsgField  msgField,
    const char**        result);

MAMAExpDLL
extern mama_status
mamaMsgField_getType(
    const mamaMsgField  msgField,
    mamaFieldType*      result);

MAMAExpDLL
extern mama_status
mamaMsgField_getTypeName(
    const mamaMsgField  msgField,
    const char**        result);


MAMAExpDLL
extern mama_status
mamaMsgField_getBool(
    const mamaMsgField  msgField,
    mama_bool_t*        result);

MAMAExpDLL
extern mama_status
mamaMsgField_getChar(
    const mamaMsgField  msgField,
    char*               result);

MAMAExpDLL
extern mama_status
mamaMsgField_getI8(
    const mamaMsgField  msgField,
    mama_i8_t*          result);

MAMAExpDLL
extern mama_status
mamaMsgField_getU8(
    const mamaMsgField  msgField,
    mama_u8_t*          result);

MAMAExpDLL
extern mama_status
mamaMsgField_getI16(
    const mamaMsgField  msgField,
    mama_i16_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getU16(
    const mamaMsgField  msgField,
    mama_u16_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getI32(
    const mamaMsgField  msgField,
    mama_i32_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getU32(
    const mamaMsgField  msgField,
    mama_u32_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getI64(
    const mamaMsgField  msgField,
    mama_i64_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getU64(
    const mamaMsgField  msgField,
    mama_u64_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getF32(
    const mamaMsgField  msgField,
    mama_f32_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getF64(
    const mamaMsgField  msgField,
    mama_f64_t*         result);

MAMAExpDLL
extern mama_status
mamaMsgField_getString(
    const mamaMsgField  msgField,
    const char**        result);

MAMAExpDLL
extern mama_status
mamaMsgField_getOpaque(
    const mamaMsgField  msgField,
    const void**        result,
    mama_size_t*        size);

MAMAExpDLL
extern mama_status
mamaMsgField_getDateTime(
    const mamaMsgField  msgField,
    mamaDateTime        result);

MAMAExpDLL
extern mama_status
mamaMsgField_getPrice(
    const mamaMsgField  msgField,
    mamaPrice           result);

MAMAExpDLL
extern mama_status
mamaMsgField_getMsg (
    const mamaMsgField msgField,
    mamaMsg*           result);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorBool (
    const mamaMsgField   msgField,
    const mama_bool_t**  result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorChar (
    const mamaMsgField   msgField,
    const char**         result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorI8 (
    const mamaMsgField   msgField,
    const mama_i8_t**    result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorU8 (
    const mamaMsgField   msgField,
    const mama_u8_t**    result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorI16 (
    const mamaMsgField   msgField,
    const mama_i16_t**   result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorU16 (
    const mamaMsgField   msgField,
    const mama_u16_t**   result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorI32 (
    const mamaMsgField   msgField,
    const mama_i32_t**   result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorU32 (
    const mamaMsgField   msgField,
    const mama_u32_t**   result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorI64 (
    const mamaMsgField   msgField,
    const mama_i64_t**   result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorU64 (
    const mamaMsgField   msgField,
    const mama_u64_t**   result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorF32 (
    const mamaMsgField   msgField,
    const mama_f32_t**   result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorF64 (
    const mamaMsgField   msgField,
    const mama_f64_t**   result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorString (
    const mamaMsgField   msgField,
    const char***        result,
    mama_size_t*         size);

MAMAExpDLL
extern mama_status
mamaMsgField_getVectorMsg (
    const mamaMsgField   msgField,
    const mamaMsg**      result,
    mama_size_t*         size);



MAMAExpDLL
extern mama_status
mamaMsgField_getAsString (
    const mamaMsgField  field,
    char*               buf,
    mama_size_t         length);

MAMAExpDLL
extern mama_status
mamaMsgField_updateBool (
    mamaMsgField  field,
    mama_bool_t   value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateChar (
    mamaMsgField  field,
    char          value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateI8 (
    mamaMsgField  field,
    mama_i8_t     value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateU8 (
    mamaMsgField  field,
    mama_u8_t     value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateI16 (
    mamaMsgField  field,
    mama_i16_t    value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateU16 (
    mamaMsgField  field,
    mama_u16_t    value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateI32 (
    mamaMsgField  field,
    mama_i32_t    value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateU32 (
    mamaMsgField  field,
    mama_u32_t    value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateI64 (
    mamaMsgField  field,
    mama_i64_t    value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateU64 (
    mamaMsgField  field,
    mama_u64_t    value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateF32 (
    mamaMsgField  field,
    mama_f32_t    value);


MAMAExpDLL
extern mama_status
mamaMsgField_updateF64 (
    mamaMsgField  field,
    mama_f64_t    value);

MAMAExpDLL
extern mama_status
mamaMsgField_updateDateTime (
    mamaMsgField        field,
    const mamaDateTime  value);

MAMAExpDLL
extern mama_status
mamaMsgField_updatePrice (
    mamaMsgField    field,
    const mamaPrice value);

#if defined(__cplusplus)
}
#endif

#endif /* MamaMsgFieldH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
