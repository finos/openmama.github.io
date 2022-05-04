---
title: Wombat::MamaFieldCacheFieldPrice
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCacheFieldPrice



 [More...](#detailed-description)


`#include <MamaFieldCacheFieldTypes.h>`

Inherits from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[set](classWombat_1_1MamaFieldCacheFieldPrice.html#function-set)**([MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, const [MamaPrice](classWombat_1_1MamaPrice.html) & value) |
| const [MamaPrice](classWombat_1_1MamaPrice.html) & | **[get](classWombat_1_1MamaFieldCacheFieldPrice.html#function-get)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[checkType](classWombat_1_1MamaFieldCacheFieldPrice.html#function-checktype)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) const |

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
class Wombat::MamaFieldCacheFieldPrice;
```


[MamaFieldCacheFieldPrice](classWombat_1_1MamaFieldCacheFieldPrice.html). Class used to set and get the value of a [MamaPrice](classWombat_1_1MamaPrice.html) single-value `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)`. 

## Public Functions Documentation

### function set

```cpp
void set(
    MamaFieldCacheField & field,
    const MamaPrice & value
)
```


**Parameters**: 

  * **field** The field to set the value to. 
  * **value** The new value of the field. 


Set the field value.


### function get

```cpp
const MamaPrice & get(
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