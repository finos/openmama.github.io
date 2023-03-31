---
title: Wombat::MamaFieldDescriptor
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldDescriptor



 [More...](#detailed-description)


`#include <MamaFieldDescriptor.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html#function-~mamafielddescriptor)**() |
| | **[MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html#function-mamafielddescriptor)**(mamaFieldDescriptor field) |
| | **[MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html#function-mamafielddescriptor)**(mama_fid_t fid, mamaFieldType type, const char * name) |
| mama_fid_t | **[getFid](classWombat_1_1MamaFieldDescriptor.html#function-getfid)**(void ) const |
| mamaFieldType | **[getType](classWombat_1_1MamaFieldDescriptor.html#function-gettype)**(void ) const |
| const char * | **[getName](classWombat_1_1MamaFieldDescriptor.html#function-getname)**(void ) const |
| const char * | **[getTypeName](classWombat_1_1MamaFieldDescriptor.html#function-gettypename)**(void ) const |
| void | **[setClosure](classWombat_1_1MamaFieldDescriptor.html#function-setclosure)**(void * closure) |
| void * | **[getClosure](classWombat_1_1MamaFieldDescriptor.html#function-getclosure)**() const |
| void | **[setTrackModState](classWombat_1_1MamaFieldDescriptor.html#function-settrackmodstate)**(bool on) |
| bool | **[getTrackModState](classWombat_1_1MamaFieldDescriptor.html#function-gettrackmodstate)**() const |
| void | **[setPubName](classWombat_1_1MamaFieldDescriptor.html#function-setpubname)**(const char * pubName) |
| const char * | **[getPubName](classWombat_1_1MamaFieldDescriptor.html#function-getpubname)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| FieldDescriptorImpl * | **[mPimpl](classWombat_1_1MamaFieldDescriptor.html#variable-mpimpl)**  |

## Detailed Description

```cpp
class Wombat::MamaFieldDescriptor;
```


**See**: 

  * [MamaDictionary](classWombat_1_1MamaDictionary.html)
  * [MamaMsg](classWombat_1_1MamaMsg.html)


The `[MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html)` class describes a field within a `[MamaDictionary](classWombat_1_1MamaDictionary.html)`

## Public Functions Documentation

### function ~MamaFieldDescriptor

```cpp
virtual ~MamaFieldDescriptor()
```


### function MamaFieldDescriptor

```cpp
MamaFieldDescriptor(
    mamaFieldDescriptor field
)
```


### function MamaFieldDescriptor

```cpp
MamaFieldDescriptor(
    mama_fid_t fid,
    mamaFieldType type,
    const char * name
)
```


**Parameters**: 

  * **fid** The field id. 
  * **type** The field type. 
  * **name** The field name. 


Create a new field descriptor based on supplied info.


### function getFid

```cpp
mama_fid_t getFid(
    void 
) const
```


**Return**: The fid. 

Return the field identifier.


### function getType

```cpp
mamaFieldType getType(
    void 
) const
```


**Return**: The type. 

Return the data type.


### function getName

```cpp
const char * getName(
    void 
) const
```


**Return**: The name. 

Return the human readable name of the field.


### function getTypeName

```cpp
const char * getTypeName(
    void 
) const
```


Return a human readable string for mamaMsgType. 


### function setClosure

```cpp
void setClosure(
    void * closure
)
```


**Parameters**: 

  * **closure** The user supplied data to associate with the field descriptor. 


Associate user supplied data with the field descriptor.


### function getClosure

```cpp
void * getClosure() const
```


**Return**: The user supplied data associated with the field descriptor. 

Return the user supplied data associated with the field descriptor.


### function setTrackModState

```cpp
void setTrackModState(
    bool on
)
```


Track the modification state of the field. 


### function getTrackModState

```cpp
bool getTrackModState() const
```


Track the modification state of the field? 


### function setPubName

```cpp
void setPubName(
    const char * pubName
)
```


Set the publish name for this field 


### function getPubName

```cpp
const char * getPubName() const
```


Get the publish name for this field 


## Public Attributes Documentation

### variable mPimpl

```cpp
FieldDescriptorImpl * mPimpl;
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100