---
title: Wombat::MamaFieldCacheFieldString
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCacheFieldString



 [More...](#detailed-description)


`#include <MamaFieldCacheFieldTypes.h>`

Inherits from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[set](classWombat_1_1MamaFieldCacheFieldString.html#function-set)**([MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, const char * value, mama_size_t len =0) |
| const char * | **[get](classWombat_1_1MamaFieldCacheFieldString.html#function-get)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[checkType](classWombat_1_1MamaFieldCacheFieldString.html#function-checktype)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) const |

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
class Wombat::MamaFieldCacheFieldString;
```


[MamaFieldCacheFieldString](classWombat_1_1MamaFieldCacheFieldString.html). Class used to set and get the value of a char* single-value `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)`. 

## Public Functions Documentation

### function set

```cpp
void set(
    MamaFieldCacheField & field,
    const char * value,
    mama_size_t len =0
)
```


**Parameters**: 

  * **field** The field to set the value to. 
  * **value** The new value of the field. 


Set the field value.


### function get

```cpp
const char * get(
    const MamaFieldCacheField & field
) const
```


**Parameters**: 

  * **field** The field to get the value from. 


**Return**: The value of the field. 

Return the value of the field.


## Protected Functions Documentation

### function checkType

```cpp
inline void checkType(
    const MamaFieldCacheField & field
) const
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100