---
title: Wombat::MamaFieldCacheFieldDateTimeVector
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCacheFieldDateTimeVector



 [More...](#detailed-description)


`#include <MamaFieldCacheFieldTypes.h>`

Inherits from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html), [Wombat::MamaFieldCacheFieldVector< MamaDateTime >](classWombat_1_1MamaFieldCacheFieldVector.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[set](classWombat_1_1MamaFieldCacheFieldDateTimeVector.html#function-set)**([MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, const [MamaDateTime](classWombat_1_1MamaDateTime.html) * values, mama_size_t size) |
| void | **[get](classWombat_1_1MamaFieldCacheFieldDateTimeVector.html#function-get)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, const [MamaDateTime](classWombat_1_1MamaDateTime.html) *& values, mama_size_t & size) const |
| const [MamaDateTime](classWombat_1_1MamaDateTime.html) * | **[get](classWombat_1_1MamaFieldCacheFieldDateTimeVector.html#function-get)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, mama_size_t index) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[checkType](classWombat_1_1MamaFieldCacheFieldDateTimeVector.html#function-checktype)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) const |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html#function-~mamafieldcachefieldbase)**() |

**Protected Functions inherited from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html#function-mamafieldcachefieldbase)**() |

**Protected Functions inherited from [Wombat::MamaFieldCacheFieldVector< MamaDateTime >](classWombat_1_1MamaFieldCacheFieldVector.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheFieldVector](classWombat_1_1MamaFieldCacheFieldVector.html#function-mamafieldcachefieldvector)**() |
| | **[~MamaFieldCacheFieldVector](classWombat_1_1MamaFieldCacheFieldVector.html#function-~mamafieldcachefieldvector)**() |
| void | **[grow](classWombat_1_1MamaFieldCacheFieldVector.html#function-grow)**(mama_size_t newSize) const |

**Protected Attributes inherited from [Wombat::MamaFieldCacheFieldVector< MamaDateTime >](classWombat_1_1MamaFieldCacheFieldVector.html)**

|                | Name           |
| -------------- | -------------- |
| T * | **[mValues](classWombat_1_1MamaFieldCacheFieldVector.html#variable-mvalues)**  |
| mama_size_t | **[mSize](classWombat_1_1MamaFieldCacheFieldVector.html#variable-msize)**  |


## Detailed Description

```cpp
class Wombat::MamaFieldCacheFieldDateTimeVector;
```


[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html): DateTime vector field 

## Public Functions Documentation

### function set

```cpp
void set(
    MamaFieldCacheField & field,
    const MamaDateTime * values,
    mama_size_t size
)
```


**Parameters**: 

  * **field** The field to set the values to. 
  * **values** The new values of the field. 
  * **size** The number of fields in `values`. 


Set the values of MamDateTime vector field.


### function get

```cpp
void get(
    const MamaFieldCacheField & field,
    const MamaDateTime *& values,
    mama_size_t & size
) const
```


**Parameters**: 

  * **field** The field to get the values from. 
  * **values** A reference to the values to be returned. 
  * **size** A reference to the size of the vector to be returned. 


Return the values of a [MamaDateTime](classWombat_1_1MamaDateTime.html) vector field.


### function get

```cpp
const MamaDateTime * get(
    const MamaFieldCacheField & field,
    mama_size_t index
) const
```


**Parameters**: 

  * **field** The field to get the value from. 
  * **index** The index of the element of the vector to get the value from. 


**Return**: The value of the field. 

Return the value of a specific field of a [MamaDateTime](classWombat_1_1MamaDateTime.html) vector field.


## Protected Functions Documentation

### function checkType

```cpp
inline void checkType(
    const MamaFieldCacheField & field
) const
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100