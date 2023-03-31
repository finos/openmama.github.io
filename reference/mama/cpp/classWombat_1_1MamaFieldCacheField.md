---
title: Wombat::MamaFieldCacheField
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCacheField



 [More...](#detailed-description)


`#include <MamaFieldCacheField.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html#function-mamafieldcachefield)**() |
| virtual | **[~MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html#function-~mamafieldcachefield)**() |
| | **[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html#function-mamafieldcachefield)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & rhs) |
| [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & | **[operator=](classWombat_1_1MamaFieldCacheField.html#function-operator=)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & rhs) |
| bool | **[operator==](classWombat_1_1MamaFieldCacheField.html#function-operator==)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaFieldCacheField.html#function-operator!=)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & rhs) const |
| virtual void | **[create](classWombat_1_1MamaFieldCacheField.html#function-create)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) & descriptor) |
| virtual void | **[create](classWombat_1_1MamaFieldCacheField.html#function-create)**(mama_fid_t fid, mamaFieldType type, const char * name =NULL) |
| virtual void | **[clear](classWombat_1_1MamaFieldCacheField.html#function-clear)**() |
| virtual mama_fid_t | **[getFid](classWombat_1_1MamaFieldCacheField.html#function-getfid)**() const |
| virtual mamaFieldType | **[getType](classWombat_1_1MamaFieldCacheField.html#function-gettype)**() const |
| const char * | **[getName](classWombat_1_1MamaFieldCacheField.html#function-getname)**() const |
| void | **[setDescriptor](classWombat_1_1MamaFieldCacheField.html#function-setdescriptor)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * descriptor) |
| const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[getDescriptor](classWombat_1_1MamaFieldCacheField.html#function-getdescriptor)**() const |
| virtual bool | **[isModified](classWombat_1_1MamaFieldCacheField.html#function-ismodified)**() const |
| virtual void | **[setPublish](classWombat_1_1MamaFieldCacheField.html#function-setpublish)**(bool value =true) |
| virtual bool | **[getPublish](classWombat_1_1MamaFieldCacheField.html#function-getpublish)**() const |
| virtual void | **[setCheckModified](classWombat_1_1MamaFieldCacheField.html#function-setcheckmodified)**(bool value =true) |
| virtual bool | **[getCheckModified](classWombat_1_1MamaFieldCacheField.html#function-getcheckmodified)**() const |
| virtual bool | **[isVector](classWombat_1_1MamaFieldCacheField.html#function-isvector)**() const |
| mamaFieldCacheField & | **[getCValue](classWombat_1_1MamaFieldCacheField.html#function-getcvalue)**() |
| const mamaFieldCacheField & | **[getCValue](classWombat_1_1MamaFieldCacheField.html#function-getcvalue)**() const |

## Detailed Description

```cpp
class Wombat::MamaFieldCacheField;
```


The `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)` class is used to store the information on the type of a field and its value(s). This class does not provide methods to set and get the value (check the specific types of fields such as `MamaFieldCacheFieldBool). `

## Public Functions Documentation

### function MamaFieldCacheField

```cpp
MamaFieldCacheField()
```


Constructor. Use `create` to create the actual field. 


### function ~MamaFieldCacheField

```cpp
virtual ~MamaFieldCacheField()
```


Destructor. This is called automatically when an object is destroyed. This method will clean all the memory allocated. 


### function MamaFieldCacheField

```cpp
MamaFieldCacheField(
    const MamaFieldCacheField & rhs
)
```


**Parameters**: 

  * **** 


Copy constructor.


### function operator=

```cpp
MamaFieldCacheField & operator=(
    const MamaFieldCacheField & rhs
)
```


**Parameters**: 

  * **rhs** The source MamaFielCacheField. 


**Return**: The [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) itself. 

Copy rhs into the current object.


### function operator==

```cpp
bool operator==(
    const MamaFieldCacheField & rhs
) const
```


**Parameters**: 

  * **rhs** The other field to check equality. 


**Return**: Whether the two fields are equal. 

Return if the current field is equal to the specified field.


### function operator!=

```cpp
bool operator!=(
    const MamaFieldCacheField & rhs
) const
```


**Parameters**: 

  * **rhs** The other field to check difference. 


**Return**: Whether the two fields are different. 

Return if the current field is different from the specified field.


### function create

```cpp
virtual void create(
    const MamaFieldDescriptor & descriptor
)
```


**Parameters**: 

  * **descriptor** Descriptor of the field to create. 


Create a [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html).


### function create

```cpp
virtual void create(
    mama_fid_t fid,
    mamaFieldType type,
    const char * name =NULL
)
```


**Parameters**: 

  * **fid** Field id of the field to create. 
  * **type** Field type of the field to create. 
  * **name** Name of the field to create. 


Create a [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html).


### function clear

```cpp
virtual void clear()
```


Clear the `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)`. The field is ready to be used, as long as create has been called once. 


### function getFid

```cpp
virtual mama_fid_t getFid() const
```


**Return**: The field id of the field. 

Return the field id. If the field is not valid, then 0 is returned.


### function getType

```cpp
virtual mamaFieldType getType() const
```


**Return**: The field type of the field. 

Return the field type. If the field is not valid, then MAMA_FIELD_TYPE_UNKNOWN is returned.


### function getName

```cpp
const char * getName() const
```


**Return**: 

Return the name of the field. If the name is not set, then NULL is returned. 


### function setDescriptor

```cpp
void setDescriptor(
    const MamaFieldDescriptor * descriptor
)
```


**Parameters**: 

  * **descriptor** Pointer to the descriptor of the field. 


Set the descriptor of the field.


### function getDescriptor

```cpp
const MamaFieldDescriptor * getDescriptor() const
```


**Return**: Pointer to the descriptor of the field. 

Return the descriptor of the field. If the descriptor is not set, NULL is returned.


### function isModified

```cpp
virtual bool isModified() const
```


**Return**: Whether the field is modified. 

Return whether the field has been modified or not.


### function setPublish

```cpp
virtual void setPublish(
    bool value =true
)
```


**Parameters**: 

  * **value** The publish flag. 


Set the publish flag of the field. If set to false, the field is never published.


### function getPublish

```cpp
virtual bool getPublish() const
```


**Return**: The publish flag. 

Return the always publish flag of the field.


### function setCheckModified

```cpp
virtual void setCheckModified(
    bool value =true
)
```


**Parameters**: 

  * **value** The checkModified flag. 


Set the checkModifed flag of a field. If set to true, the field will be checked for modification before publishing.


### function getCheckModified

```cpp
virtual bool getCheckModified() const
```


**Return**: The check modified flag. 

Return the checkModified flag of the field.


### function isVector

```cpp
virtual bool isVector() const
```


**Return**: If the field is a vector field. 

Return if the field is a vector (otherwise is a single-value field).


### function getCValue

```cpp
mamaFieldCacheField & getCValue()
```


### function getCValue

```cpp
const mamaFieldCacheField & getCValue() const
```


-------------------------------

Updated on 2023-03-31 at 15:29:24 +0100