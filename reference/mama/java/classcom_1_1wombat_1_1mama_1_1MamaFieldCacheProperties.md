---
title: com::wombat::mama::MamaFieldCacheProperties
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaFieldCacheProperties



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheProperties](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-mamafieldcacheproperties)**(int hashSize) |
| | **[MamaFieldCacheProperties](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-mamafieldcacheproperties)**() |
| | **[MamaFieldCacheProperties](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-mamafieldcacheproperties)**([MamaFieldCacheProperties](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html) source) |
| void | **[clear](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-clear)**() |
| void | **[clearAndDelete](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-clearanddelete)**() |
| void | **[add](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-add)**([MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) field) |
| void | **[addIfModified](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-addifmodified)**([MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) field) |
| void | **[clearAndUnregisterAll](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-clearandunregisterall)**() |
| void | **[registerProperty](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-registerproperty)**(int fid, [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) field) |
| boolean | **[apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-apply)**([MamaMsgField](classcom_1_1wombat_1_1mama_1_1MamaMsgField.html) value) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[find](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-find)**(String name) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[find](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-find)**(int fid) |
| [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) | **[find](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-find)**([MamaFieldDescriptor](classcom_1_1wombat_1_1mama_1_1MamaFieldDescriptor.html) desc) |
| int | **[size](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-size)**() |
| boolean | **[empty](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-empty)**() |
| Iterator | **[getIterator](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-getiterator)**() |
| void | **[registerProperties](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-registerproperties)**(int[] fids, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) theDictionary) |
| void | **[apply](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-apply)**([MamaFieldCacheFieldList](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheFieldList.html) fields) |
| void | **[dump](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-dump)**() |
| void | **[dump](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-dump)**(OutputStream outputStream) |

## Detailed Description

```java
class com::wombat::mama::MamaFieldCacheProperties;
```


The [MamaFieldCacheProperties](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html) class is used for MamdaOrderBookProperties.

This class maintains a collection of [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) objects mapped to fids. A field will only be added to or updated in the cache if its fid matches a fid previously registed with the `registerField` method. 

## Public Functions Documentation

### function MamaFieldCacheProperties

```java
inline MamaFieldCacheProperties(
    int hashSize
)
```


### function MamaFieldCacheProperties

```java
inline MamaFieldCacheProperties()
```


### function MamaFieldCacheProperties

```java
inline MamaFieldCacheProperties(
    MamaFieldCacheProperties source
)
```


### function clear

```java
inline void clear()
```


This method clears the fields but does not unregister the properteis. 


### function clearAndDelete

```java
inline void clearAndDelete()
```


### function add

```java
inline void add(
    MamaFieldCacheField field
)
```


**Parameters**: 

  * **field** The field to add. 


Add a field to the cache. If it is not already a property it will be added with its fid.


### function addIfModified

```java
inline void addIfModified(
    MamaFieldCacheField field
)
```


**Parameters**: 

  * **field** The field to add. 


Add a field to the cache. If it is not already a property it will be added with its fid. The field only gets added if the supplied field is modified.


### function clearAndUnregisterAll

```java
inline void clearAndUnregisterAll()
```


Clear the cache and unregister all the properties. 


### function registerProperty

```java
inline void registerProperty(
    int fid,
    MamaFieldCacheField field
)
```


**Parameters**: 

  * **fid** The fid 
  * **field** The field. 


Adds a property. The [MamaFieldCacheField](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheField.html) will not appear in iterations until an `[apply()](classcom_1_1wombat_1_1mama_1_1MamaFieldCacheProperties.html#function-apply)` for that field occurs.


### function apply

```java
inline boolean apply(
    MamaMsgField value
)
```


**Parameters**: 

  * **value** The new value 


**Return**: true if a the field was found and updated. 

Apply the field to the cache. If the field does not exist as a property the cache does not change. 


### function find

```java
inline MamaFieldCacheField find(
    String name
)
```


**Parameters**: 

  * **name** The field name. 


**Return**: The field or null. 

Find a field by name. This is less efficient than find by Fid or field descriptor.


### function find

```java
inline MamaFieldCacheField find(
    int fid
)
```


**Parameters**: 

  * **fid** The fid 


**Return**: the field or null. 

Find a field by fid. 


### function find

```java
inline MamaFieldCacheField find(
    MamaFieldDescriptor desc
)
```


**Parameters**: 

  * **desc** The descriptor. 


**Return**: the field or null. 

Find by field descriptor. This method uses the fid from the descriptor. 


### function size

```java
inline int size()
```


**Return**: the size. 

Return the number of properties in the cache. 


### function empty

```java
inline boolean empty()
```


**Return**: true if the cache contains no properties. 

Return true if the cache is empty.


### function getIterator

```java
inline Iterator getIterator()
```


**Return**: the iterator. 

Returns an iterator that only iterates over the properties that have had values applied. 


### function registerProperties

```java
inline void registerProperties(
    int[] fids,
    MamaDictionary theDictionary
)
```


### function apply

```java
inline void apply(
    MamaFieldCacheFieldList fields
)
```


**Parameters**: 

  * **fields** The fields to apply. 


Apply all the fields in the supplied list for which there are properties. 


### function dump

```java
inline void dump()
```


Dump the order book to standard out. 


### function dump

```java
inline void dump(
    OutputStream outputStream
)
```


**Parameters**: 

  * **outputStream** the `OutputStream`


Dump the properties to an `OutputStream`. 


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100