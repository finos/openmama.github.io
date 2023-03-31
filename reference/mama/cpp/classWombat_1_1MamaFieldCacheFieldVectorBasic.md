---
title: Wombat::MamaFieldCacheFieldVectorBasic
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCacheFieldVectorBasic



 [More...](#detailed-description)


`#include <MamaFieldCacheFieldTypes.h>`

Inherits from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[set](classWombat_1_1MamaFieldCacheFieldVectorBasic.html#function-set)**([MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, const T * values, mama_size_t size) |
| void | **[get](classWombat_1_1MamaFieldCacheFieldVectorBasic.html#function-get)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, const T *& values, mama_size_t & size) const |
| const T & | **[get](classWombat_1_1MamaFieldCacheFieldVectorBasic.html#function-get)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, mama_size_t index) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[checkType](classWombat_1_1MamaFieldCacheFieldVectorBasic.html#function-checktype)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) const |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html#function-~mamafieldcachefieldbase)**() |

**Protected Functions inherited from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html#function-mamafieldcachefieldbase)**() |


## Detailed Description

```cpp
template <typename T ,
mamaFieldType fieldType>
class Wombat::MamaFieldCacheFieldVectorBasic;
```


[MamaFieldCacheFieldVectorBasic](classWombat_1_1MamaFieldCacheFieldVectorBasic.html). Base class for basic vector types. Allows to set and get the value of the field. 

## Public Functions Documentation

### function set

```cpp
void set(
    MamaFieldCacheField & field,
    const T * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** The field to set the values to. 
  * **values** The new values of the field. 
  * **size** The number of fields in `values`. 


Set the field value.


### function get

```cpp
void get(
    const MamaFieldCacheField & field,
    const T *& values,
    mama_size_t & size
) const
```


**Parameters**: 

  * **field** The field to get the values from. 
  * **values** A reference to the values to be returned. 
  * **size** A reference to the size of the vector to be returned. 


Return the field values.


### function get

```cpp
const T & get(
    const MamaFieldCacheField & field,
    mama_size_t index
) const
```


**Parameters**: 

  * **field** The field to get the value from. 
  * **index** The index of the element of the vector to get the value from. 


**Return**: The value of the field. 

Return the value of a specific field of a vector field.


## Protected Functions Documentation

### function checkType

```cpp
inline void checkType(
    const MamaFieldCacheField & field
) const
```


-------------------------------

Updated on 2023-03-31 at 15:29:24 +0100