---
title: Wombat::MamaFieldCacheFieldBasic
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCacheFieldBasic



 [More...](#detailed-description)


`#include <MamaFieldCacheFieldTypes.h>`

Inherits from [Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaFieldCacheFieldBasic](classWombat_1_1MamaFieldCacheFieldBasic.html#function-~mamafieldcachefieldbasic)**() |
| void | **[set](classWombat_1_1MamaFieldCacheFieldBasic.html#function-set)**([MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field, const T & value) |
| T | **[get](classWombat_1_1MamaFieldCacheFieldBasic.html#function-get)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[checkType](classWombat_1_1MamaFieldCacheFieldBasic.html#function-checktype)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) const |

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
class Wombat::MamaFieldCacheFieldBasic;
```


[MamaFieldCacheFieldBasic](classWombat_1_1MamaFieldCacheFieldBasic.html). Base class for basic single-value types. Allows to set and get the value of the field. 

## Public Functions Documentation

### function ~MamaFieldCacheFieldBasic

```cpp
inline virtual ~MamaFieldCacheFieldBasic()
```


### function set

```cpp
void set(
    MamaFieldCacheField & field,
    const T & value
)
```


**Parameters**: 

  * **field** The field to set the value to. 
  * **value** The new value of the field. 


Set the field value.


### function get

```cpp
T get(
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