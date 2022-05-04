---
title: Wombat::MamaFieldCacheRecord
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCacheRecord



 [More...](#detailed-description)


`#include <MamaFieldCacheRecord.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheRecord](classWombat_1_1MamaFieldCacheRecord.html#function-mamafieldcacherecord)**() |
| virtual | **[~MamaFieldCacheRecord](classWombat_1_1MamaFieldCacheRecord.html#function-~mamafieldcacherecord)**() |
| virtual void | **[create](classWombat_1_1MamaFieldCacheRecord.html#function-create)**() |
| virtual void | **[clear](classWombat_1_1MamaFieldCacheRecord.html#function-clear)**() |
| virtual [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & | **[add](classWombat_1_1MamaFieldCacheRecord.html#function-add)**(mama_fid_t fid, mamaFieldType type, const char * name =NULL) |
| virtual [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & | **[add](classWombat_1_1MamaFieldCacheRecord.html#function-add)**(const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) & descriptor) |
| virtual const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & | **[operator[]](classWombat_1_1MamaFieldCacheRecord.html#function-operator[])**(mama_size_t index) const |
| virtual [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & | **[operator[]](classWombat_1_1MamaFieldCacheRecord.html#function-operator[])**(mama_size_t index) |
| virtual const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & | **[find](classWombat_1_1MamaFieldCacheRecord.html#function-find)**(mama_fid_t fid, const char * name =NULL) const |
| virtual [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & | **[find](classWombat_1_1MamaFieldCacheRecord.html#function-find)**(mama_fid_t fid, const char * name =NULL) |
| virtual mama_size_t | **[getSize](classWombat_1_1MamaFieldCacheRecord.html#function-getsize)**() const |
| virtual mamaFieldCacheRecord | **[getCValue](classWombat_1_1MamaFieldCacheRecord.html#function-getcvalue)**() |
| virtual const mamaFieldCacheRecord | **[getCValue](classWombat_1_1MamaFieldCacheRecord.html#function-getcvalue)**() const |

## Detailed Description

```cpp
class Wombat::MamaFieldCacheRecord;
```


The `[MamaFieldCacheRecord](classWombat_1_1MamaFieldCacheRecord.html)` class is a collection of unordered `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)` elements. 

## Public Functions Documentation

### function MamaFieldCacheRecord

```cpp
MamaFieldCacheRecord()
```


Constructor. Use `create` to create the actual cache. 


### function ~MamaFieldCacheRecord

```cpp
virtual ~MamaFieldCacheRecord()
```


Destructor. This is called automatically when an object is destroyed. This method will clean all the memory allocated. 


### function create

```cpp
virtual void create()
```


Creates a `[MamaFieldCacheRecord](classWombat_1_1MamaFieldCacheRecord.html)`. 


### function clear

```cpp
virtual void clear()
```


Clear the `[MamaFieldCacheRecord](classWombat_1_1MamaFieldCacheRecord.html)`. No fields will be present in the record after this operation. The record is ready to be used, as long as create has been called once. 


### function add

```cpp
virtual MamaFieldCacheField & add(
    mama_fid_t fid,
    mamaFieldType type,
    const char * name =NULL
)
```


**Parameters**: 

  * **fid** Field id of the field to create. 
  * **type** Field type of the field to create. 
  * **name** Name of the field to create. 


**Return**: The new field created. 

Add and creates a `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)` to the record. The new field is then returned.


### function add

```cpp
virtual MamaFieldCacheField & add(
    const MamaFieldDescriptor & descriptor
)
```


**Parameters**: 

  * **descriptor** Descriptor of the field to create. 


**Return**: The new field created. 

Add and creates a `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)` to the record. The new field is then returned.


### function operator[]

```cpp
virtual const MamaFieldCacheField & operator[](
    mama_size_t index
) const
```


### function operator[]

```cpp
virtual MamaFieldCacheField & operator[](
    mama_size_t index
)
```


### function find

```cpp
virtual const MamaFieldCacheField & find(
    mama_fid_t fid,
    const char * name =NULL
) const
```


**Parameters**: 

  * **fid** Field id of the field to look up. 
  * **name** Field name of the field to look up. 


**Return**: The field in the record. 

Find a `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)` in the record.


### function find

```cpp
virtual MamaFieldCacheField & find(
    mama_fid_t fid,
    const char * name =NULL
)
```


**Parameters**: 

  * **fid** Field id of the field to look up. 
  * **name** Field name of the field to look up. 


**Return**: The field in the record. 

Find a `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)` in the record.


### function getSize

```cpp
virtual mama_size_t getSize() const
```


**Return**: Size of the record. 

Return the number of fields present in the record.


### function getCValue

```cpp
virtual mamaFieldCacheRecord getCValue()
```


### function getCValue

```cpp
virtual const mamaFieldCacheRecord getCValue() const
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100