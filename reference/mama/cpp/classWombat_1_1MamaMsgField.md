---
title: Wombat::MamaMsgField
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsgField



 [More...](#detailed-description)


`#include <MamaMsgField.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~MamaMsgField](classWombat_1_1MamaMsgField.html#function-~mamamsgfield)**() |
| | **[MamaMsgField](classWombat_1_1MamaMsgField.html#function-mamamsgfield)**(void ) |
| | **[MamaMsgField](classWombat_1_1MamaMsgField.html#function-mamamsgfield)**(mamaMsgField field) |
| | **[MamaMsgField](classWombat_1_1MamaMsgField.html#function-mamamsgfield)**(const [MamaMsgField](classWombat_1_1MamaMsgField.html) & field) |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) & | **[operator=](classWombat_1_1MamaMsgField.html#function-operator=)**(const [MamaMsgField](classWombat_1_1MamaMsgField.html) & field) |
| void | **[clear](classWombat_1_1MamaMsgField.html#function-clear)**() |
| void | **[set](classWombat_1_1MamaMsgField.html#function-set)**(mamaMsgField field) |
| const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[getDescriptor](classWombat_1_1MamaMsgField.html#function-getdescriptor)**() const |
| mama_fid_t | **[getFid](classWombat_1_1MamaMsgField.html#function-getfid)**() const |
| const char * | **[getName](classWombat_1_1MamaMsgField.html#function-getname)**() const |
| mamaFieldType | **[getType](classWombat_1_1MamaMsgField.html#function-gettype)**() const |
| const char * | **[getTypeName](classWombat_1_1MamaMsgField.html#function-gettypename)**() const |
| mama_bool_t | **[getBool](classWombat_1_1MamaMsgField.html#function-getbool)**() const |
| char | **[getChar](classWombat_1_1MamaMsgField.html#function-getchar)**() const |
| mama_i8_t | **[getI8](classWombat_1_1MamaMsgField.html#function-geti8)**() const |
| mama_u8_t | **[getU8](classWombat_1_1MamaMsgField.html#function-getu8)**() const |
| mama_i16_t | **[getI16](classWombat_1_1MamaMsgField.html#function-geti16)**() const |
| mama_u16_t | **[getU16](classWombat_1_1MamaMsgField.html#function-getu16)**() const |
| mama_i32_t | **[getI32](classWombat_1_1MamaMsgField.html#function-geti32)**() const |
| mama_u32_t | **[getU32](classWombat_1_1MamaMsgField.html#function-getu32)**() const |
| mama_i64_t | **[getI64](classWombat_1_1MamaMsgField.html#function-geti64)**() const |
| mama_u64_t | **[getU64](classWombat_1_1MamaMsgField.html#function-getu64)**() const |
| mama_f32_t | **[getF32](classWombat_1_1MamaMsgField.html#function-getf32)**() const |
| mama_f64_t | **[getF64](classWombat_1_1MamaMsgField.html#function-getf64)**() const |
| const char * | **[getString](classWombat_1_1MamaMsgField.html#function-getstring)**() const |
| const void * | **[getOpaque](classWombat_1_1MamaMsgField.html#function-getopaque)**(mama_size_t & size) const |
| void | **[getDateTime](classWombat_1_1MamaMsgField.html#function-getdatetime)**([MamaDateTime](classWombat_1_1MamaDateTime.html) & result) const |
| void | **[getPrice](classWombat_1_1MamaMsgField.html#function-getprice)**([MamaPrice](classWombat_1_1MamaPrice.html) & result) const |
| void | **[getMsg](classWombat_1_1MamaMsgField.html#function-getmsg)**([MamaMsg](classWombat_1_1MamaMsg.html) & result) const |
| void | **[getVectorBool](classWombat_1_1MamaMsgField.html#function-getvectorbool)**(const mama_bool_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorChar](classWombat_1_1MamaMsgField.html#function-getvectorchar)**(const char *& result, mama_size_t & resultLen) const |
| void | **[getVectorI8](classWombat_1_1MamaMsgField.html#function-getvectori8)**(const mama_i8_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorU8](classWombat_1_1MamaMsgField.html#function-getvectoru8)**(const mama_u8_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorI16](classWombat_1_1MamaMsgField.html#function-getvectori16)**(const mama_i16_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorU16](classWombat_1_1MamaMsgField.html#function-getvectoru16)**(const mama_u16_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorI32](classWombat_1_1MamaMsgField.html#function-getvectori32)**(const mama_i32_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorU32](classWombat_1_1MamaMsgField.html#function-getvectoru32)**(const mama_u32_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorI64](classWombat_1_1MamaMsgField.html#function-getvectori64)**(const mama_i64_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorU64](classWombat_1_1MamaMsgField.html#function-getvectoru64)**(const mama_u64_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorF32](classWombat_1_1MamaMsgField.html#function-getvectorf32)**(const mama_f32_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorF64](classWombat_1_1MamaMsgField.html#function-getvectorf64)**(const mama_f64_t *& result, mama_size_t & resultLen) const |
| void | **[getVectorString](classWombat_1_1MamaMsgField.html#function-getvectorstring)**(const char **& result, mama_size_t & resultLen) const |
| void | **[getVectorMsg](classWombat_1_1MamaMsgField.html#function-getvectormsg)**(const [MamaMsg](classWombat_1_1MamaMsg.html) **& result, mama_size_t & resultLen) const |
| void | **[getVectorMsgDetached](classWombat_1_1MamaMsgField.html#function-getvectormsgdetached)**(const [MamaMsg](classWombat_1_1MamaMsg.html) **& result, mama_size_t & resultLen) const |
| void | **[getAsString](classWombat_1_1MamaMsgField.html#function-getasstring)**(char * result, mama_size_t maxResultLen) const |
| void | **[updateBool](classWombat_1_1MamaMsgField.html#function-updatebool)**(mama_bool_t value) |
| void | **[updateChar](classWombat_1_1MamaMsgField.html#function-updatechar)**(char value) |
| void | **[updateI8](classWombat_1_1MamaMsgField.html#function-updatei8)**(mama_i8_t value) |
| void | **[updateU8](classWombat_1_1MamaMsgField.html#function-updateu8)**(mama_u8_t value) |
| void | **[updateI16](classWombat_1_1MamaMsgField.html#function-updatei16)**(mama_i16_t value) |
| void | **[updateU16](classWombat_1_1MamaMsgField.html#function-updateu16)**(mama_u16_t value) |
| void | **[updateI32](classWombat_1_1MamaMsgField.html#function-updatei32)**(mama_i32_t value) |
| void | **[updateU32](classWombat_1_1MamaMsgField.html#function-updateu32)**(mama_u32_t value) |
| void | **[updateI64](classWombat_1_1MamaMsgField.html#function-updatei64)**(mama_i64_t value) |
| void | **[updateU64](classWombat_1_1MamaMsgField.html#function-updateu64)**(mama_u64_t value) |
| void | **[updateF32](classWombat_1_1MamaMsgField.html#function-updatef32)**(mama_f32_t value) |
| void | **[updateF64](classWombat_1_1MamaMsgField.html#function-updatef64)**(mama_f64_t value) |
| void | **[updateDateTime](classWombat_1_1MamaMsgField.html#function-updatedatetime)**(const mamaDateTime value) |
| void | **[updateDateTime](classWombat_1_1MamaMsgField.html#function-updatedatetime)**(const [MamaDateTime](classWombat_1_1MamaDateTime.html) value) |
| void | **[updatePrice](classWombat_1_1MamaMsgField.html#function-updateprice)**(const mamaPrice value) |
| void | **[updatePrice](classWombat_1_1MamaMsgField.html#function-updateprice)**(const [MamaPrice](classWombat_1_1MamaPrice.html) value) |
| bool | **[operator==](classWombat_1_1MamaMsgField.html#function-operator==)**(const [MamaMsgField](classWombat_1_1MamaMsgField.html) & ) const |
| bool | **[operator!=](classWombat_1_1MamaMsgField.html#function-operator!=)**(const [MamaMsgField](classWombat_1_1MamaMsgField.html) & ) const |

## Detailed Description

```cpp
class Wombat::MamaMsgField;
```


[MamaMsg](classWombat_1_1MamaMsg.html) field representation. 

## Public Functions Documentation

### function ~MamaMsgField

```cpp
~MamaMsgField()
```


### function MamaMsgField

```cpp
MamaMsgField(
    void 
)
```


### function MamaMsgField

```cpp
MamaMsgField(
    mamaMsgField field
)
```


### function MamaMsgField

```cpp
MamaMsgField(
    const MamaMsgField & field
)
```


### function operator=

```cpp
MamaMsgField & operator=(
    const MamaMsgField & field
)
```


### function clear

```cpp
void clear()
```


Clear the field. 


### function set

```cpp
void set(
    mamaMsgField field
)
```


Set this field to a different MAMA C API field. 


### function getDescriptor

```cpp
const MamaFieldDescriptor * getDescriptor() const
```


### function getFid

```cpp
mama_fid_t getFid() const
```


**Return**: The fid. 

Return the field identifier.


### function getName

```cpp
const char * getName() const
```


**Return**: The name. 

Return the field name.


### function getType

```cpp
mamaFieldType getType() const
```


**Return**: The type. 

Return the field type.


### function getTypeName

```cpp
const char * getTypeName() const
```


**Return**: The type name. 

Return the field type name. The type name is a human readable representation of the type.


### function getBool

```cpp
mama_bool_t getBool() const
```


**Return**: The boolean value. 

Get as a boolean field. 


### function getChar

```cpp
char getChar() const
```


**Return**: The character value. 

Get as a character field. 


### function getI8

```cpp
mama_i8_t getI8() const
```


**Return**: The integer value. 

Get as a I8 field. 


### function getU8

```cpp
mama_u8_t getU8() const
```


**Return**: The integer value. 

Get as a U8 field. 


### function getI16

```cpp
mama_i16_t getI16() const
```


**Return**: The integer value. 

Get as a I16 field. 


### function getU16

```cpp
mama_u16_t getU16() const
```


**Return**: The integer value. 

Get as a U16 field. 


### function getI32

```cpp
mama_i32_t getI32() const
```


**Return**: The integer value. 

Get as a I32 field. 


### function getU32

```cpp
mama_u32_t getU32() const
```


**Return**: The integer value. 

Get as a U32 field. 


### function getI64

```cpp
mama_i64_t getI64() const
```


**Return**: The field value as a long. 

Get as a I64 field. 


### function getU64

```cpp
mama_u64_t getU64() const
```


**Return**: The field value as a long. 

Get as a U64 field. 


### function getF32

```cpp
mama_f32_t getF32() const
```


**Return**: The field value as a 32 bit floating point number. 

Get as a f32 field. 


### function getF64

```cpp
mama_f64_t getF64() const
```


**Return**: The field value as a 64 bit floating point number. 

Get as a f64 field. 


### function getString

```cpp
const char * getString() const
```


**Return**: the string value. 

Get as a const char* field. 


### function getOpaque

```cpp
const void * getOpaque(
    mama_size_t & size
) const
```


**Return**: The opaque value. 

Get as a const void* field 


### function getDateTime

```cpp
void getDateTime(
    MamaDateTime & result
) const
```


**Parameters**: 

  * **result** The date/time value. 


Get as a [MamaDateTime](classWombat_1_1MamaDateTime.html) field 


### function getPrice

```cpp
void getPrice(
    MamaPrice & result
) const
```


**Parameters**: 

  * **result** The price value. 


Get as a [MamaPrice](classWombat_1_1MamaPrice.html) field 


### function getMsg

```cpp
void getMsg(
    MamaMsg & result
) const
```


**Parameters**: 

  * **result** The msg value. 


Get as a [MamaMsg](classWombat_1_1MamaMsg.html) field 


### function getVectorBool

```cpp
void getVectorBool(
    const mama_bool_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of boolean. 


### function getVectorChar

```cpp
void getVectorChar(
    const char *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of characters. 


### function getVectorI8

```cpp
void getVectorI8(
    const mama_i8_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of signed 8-bit integers. 


### function getVectorU8

```cpp
void getVectorU8(
    const mama_u8_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of unsigned 8-bit integers. 


### function getVectorI16

```cpp
void getVectorI16(
    const mama_i16_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of signed 16-bit integers. 


### function getVectorU16

```cpp
void getVectorU16(
    const mama_u16_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of unsigned 16-bit integers. 


### function getVectorI32

```cpp
void getVectorI32(
    const mama_i32_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of signed 32-bit integers. 


### function getVectorU32

```cpp
void getVectorU32(
    const mama_u32_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of unsigned 32-bit integers. 


### function getVectorI64

```cpp
void getVectorI64(
    const mama_i64_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of signed 64-bit integers. 


### function getVectorU64

```cpp
void getVectorU64(
    const mama_u64_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of unsigned 64-bit integers. 


### function getVectorF32

```cpp
void getVectorF32(
    const mama_f32_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of 32-bit floats. 


### function getVectorF64

```cpp
void getVectorF64(
    const mama_f64_t *& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of 64-bit floats. 


### function getVectorString

```cpp
void getVectorString(
    const char **& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) the vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of strings. 


### function getVectorMsg

```cpp
void getVectorMsg(
    const MamaMsg **& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of submessages field. Note: The vector is only valid for the lifetime of the field object which, when iterating over fields in a message is only as long as the individual callback itself. Use getVectorMsgDetached if it is necessary to keep the vector of messages longer than the lifetime of the field. 


### function getVectorMsgDetached

```cpp
void getVectorMsgDetached(
    const MamaMsg **& result,
    mama_size_t & resultLen
) const
```


**Parameters**: 

  * **result** (out) vector. 
  * **resultLen** (out) the size of the vector. 


Get a vector of submessages field. Deallocating the memory allocated for array and it members will become the responsibility of the caller. 


### function getAsString

```cpp
void getAsString(
    char * result,
    mama_size_t maxResultLen
) const
```


**Parameters**: 

  * **result** Buffer to put result. 
  * **maxResultLen** Maximum size of buffer to put result. 


Return a string representation the field with the given fid. 


### function updateBool

```cpp
void updateBool(
    mama_bool_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new bool value.


### function updateChar

```cpp
void updateChar(
    char value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new char value.


### function updateI8

```cpp
void updateI8(
    mama_i8_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new i8 value.


### function updateU8

```cpp
void updateU8(
    mama_u8_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new u8 value.


### function updateI16

```cpp
void updateI16(
    mama_i16_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new i16 value.


### function updateU16

```cpp
void updateU16(
    mama_u16_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new u16 value.


### function updateI32

```cpp
void updateI32(
    mama_i32_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new i32 value.


### function updateU32

```cpp
void updateU32(
    mama_u32_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new u32 value.


### function updateI64

```cpp
void updateI64(
    mama_i64_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new i64 value.


### function updateU64

```cpp
void updateU64(
    mama_u64_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new u64 value.


### function updateF32

```cpp
void updateF32(
    mama_f32_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new f32 value.


### function updateF64

```cpp
void updateF64(
    mama_f64_t value
)
```


**Parameters**: 

  * **value** The new value for the field.


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new f64 value.


### function updateDateTime

```cpp
void updateDateTime(
    const mamaDateTime value
)
```


**Parameters**: 

  * **value** The new value for the field (mamaDateTime object).


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new date/time value.


### function updateDateTime

```cpp
void updateDateTime(
    const MamaDateTime value
)
```


**Parameters**: 

  * **value** The new value for the field ([MamaDateTime](classWombat_1_1MamaDateTime.html) object).


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new date/time value.


### function updatePrice

```cpp
void updatePrice(
    const mamaPrice value
)
```


**Parameters**: 

  * **value** The new value for the field (mamaPrice object).


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new price value.


### function updatePrice

```cpp
void updatePrice(
    const MamaPrice value
)
```


**Parameters**: 

  * **value** The new value for the field ([MamaPrice](classWombat_1_1MamaPrice.html) object).


**Exceptions**: 

  * **[MamaStatus](classWombat_1_1MamaStatus.html)** exception with the following possible status values. MAMA_STATUS_WRONG_FIELD_TYPE The existing field type does not match the type of the update method called. MAMA_STATUS_NULL_ARG The field passed to the C function is NULL. MAMA_STATUS_INVALID_ARG The underlying bridge field is NULL. 


Update the specified field with a new price value.


### function operator==

```cpp
bool operator==(
    const MamaMsgField & 
) const
```


### function operator!=

```cpp
bool operator!=(
    const MamaMsgField & 
) const
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100