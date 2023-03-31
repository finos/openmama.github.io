---
title: Wombat::MamaFieldCache
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCache



 [More...](#detailed-description)


`#include <MamaFieldCache.h>`

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[const_iterator](classWombat_1_1MamaFieldCache_1_1const__iterator.html)**  |
| class | **[iterator](classWombat_1_1MamaFieldCache_1_1iterator.html)**  |
| class | **[MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCache](classWombat_1_1MamaFieldCache.html#function-mamafieldcache)**() |
| virtual | **[~MamaFieldCache](classWombat_1_1MamaFieldCache.html#function-~mamafieldcache)**() |
| virtual void | **[create](classWombat_1_1MamaFieldCache.html#function-create)**() |
| virtual void | **[clear](classWombat_1_1MamaFieldCache.html#function-clear)**() |
| virtual mama_size_t | **[getSize](classWombat_1_1MamaFieldCache.html#function-getsize)**() const |
| virtual void | **[setTrackModified](classWombat_1_1MamaFieldCache.html#function-settrackmodified)**(bool value) |
| virtual bool | **[getTrackModified](classWombat_1_1MamaFieldCache.html#function-gettrackmodified)**() const |
| virtual void | **[setUseFieldNames](classWombat_1_1MamaFieldCache.html#function-setusefieldnames)**(bool value) |
| virtual bool | **[getUseFieldNames](classWombat_1_1MamaFieldCache.html#function-getusefieldnames)**() const |
| virtual void | **[setUseLock](classWombat_1_1MamaFieldCache.html#function-setuselock)**(bool value) |
| virtual bool | **[getUseLock](classWombat_1_1MamaFieldCache.html#function-getuselock)**() const |
| virtual void | **[lock](classWombat_1_1MamaFieldCache.html#function-lock)**() |
| virtual void | **[unlock](classWombat_1_1MamaFieldCache.html#function-unlock)**() |
| virtual const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) * | **[find](classWombat_1_1MamaFieldCache.html#function-find)**(mama_fid_t fid, const char * name =NULL) const |
| virtual [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) * | **[find](classWombat_1_1MamaFieldCache.html#function-find)**(mama_fid_t fid, const char * name =NULL) |
| virtual void | **[setModified](classWombat_1_1MamaFieldCache.html#function-setmodified)**([MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) |
| virtual void | **[apply](classWombat_1_1MamaFieldCache.html#function-apply)**(const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & field) |
| virtual void | **[apply](classWombat_1_1MamaFieldCache.html#function-apply)**(const [MamaMsg](classWombat_1_1MamaMsg.html) & msg, const [MamaDictionary](classWombat_1_1MamaDictionary.html) * dict =NULL) |
| virtual void | **[apply](classWombat_1_1MamaFieldCache.html#function-apply)**(const [MamaFieldCacheRecord](classWombat_1_1MamaFieldCacheRecord.html) & record) |
| virtual void | **[getFullMessage](classWombat_1_1MamaFieldCache.html#function-getfullmessage)**([MamaMsg](classWombat_1_1MamaMsg.html) & msg) |
| virtual void | **[getDeltaMessage](classWombat_1_1MamaFieldCache.html#function-getdeltamessage)**([MamaMsg](classWombat_1_1MamaMsg.html) & msg) |
| virtual void | **[clearModifiedFields](classWombat_1_1MamaFieldCache.html#function-clearmodifiedfields)**() |
| virtual [const_iterator](classWombat_1_1MamaFieldCache_1_1const__iterator.html) | **[begin](classWombat_1_1MamaFieldCache.html#function-begin)**() const |
| virtual [iterator](classWombat_1_1MamaFieldCache_1_1iterator.html) | **[begin](classWombat_1_1MamaFieldCache.html#function-begin)**() |
| virtual [const_iterator](classWombat_1_1MamaFieldCache_1_1const__iterator.html) | **[end](classWombat_1_1MamaFieldCache.html#function-end)**() const |
| virtual [iterator](classWombat_1_1MamaFieldCache_1_1iterator.html) | **[end](classWombat_1_1MamaFieldCache.html#function-end)**() |

## Detailed Description

```cpp
class Wombat::MamaFieldCache;
```


The `[MamaFieldCache](classWombat_1_1MamaFieldCache.html)` class is a collection of unordered `[MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)` elements. This class provides methods for creating and finding fields, applying changes to the fields in the cache and populating a [MamaMsg](classWombat_1_1MamaMsg.html) with the fields in cache. 

## Public Functions Documentation

### function MamaFieldCache

```cpp
MamaFieldCache()
```


Constructor. Use `create` to create the actual cache. 


### function ~MamaFieldCache

```cpp
virtual ~MamaFieldCache()
```


Destructor. This is called automatically when an object is destroyed. This method will clean all the memory allocated. 


### function create

```cpp
virtual void create()
```


Create a [MamaFieldCache](classWombat_1_1MamaFieldCache.html). 


### function clear

```cpp
virtual void clear()
```


Clear the `[MamaFieldCache](classWombat_1_1MamaFieldCache.html)`. No fields will be present in the cache after this operation. The cache is ready to be used, as long as create has been called once. 


### function getSize

```cpp
virtual mama_size_t getSize() const
```


**Return**: The number of fields in cache. 

Return the number of fields in cache.


### function setTrackModified

```cpp
virtual void setTrackModified(
    bool value
)
```


**Parameters**: 

  * **value** Specify whether field modifications will be tracked. 


Set if field modifications are tracked when creating a delta message. See method `getDeltaMessage`. When modifications are not tracked, then calling `getDeltaMessage` is the same as calling `getFullMessage`.


### function getTrackModified

```cpp
virtual bool getTrackModified() const
```


**Return**: Whether tracking modifications is enabled or not. 

Return the value of the track modifications flag.


### function setUseFieldNames

```cpp
virtual void setUseFieldNames(
    bool value
)
```


**Parameters**: 

  * **value** Specify whether field names will be used. 


Set if field names are used when adding fields to [MamaMsg](classWombat_1_1MamaMsg.html). See methods `getDeltaMessage` and `getFullMessage`.


### function getUseFieldNames

```cpp
virtual bool getUseFieldNames() const
```


**Return**: Whether field names are enabled or not. 

Return the value of the use field names flag.


### function setUseLock

```cpp
virtual void setUseLock(
    bool value
)
```


**Parameters**: 

  * **value** Specify whether locking will be used. 


Set if the cache uses a lock when some methods are called for thread safety.


### function getUseLock

```cpp
virtual bool getUseLock() const
```


**Return**: Whether the cache is using a lock or not. 

Return the value of the locking flag.


### function lock

```cpp
virtual void lock()
```


Lock the cache. 


### function unlock

```cpp
virtual void unlock()
```


Unlock the cache. 


### function find

```cpp
virtual const MamaFieldCacheField * find(
    mama_fid_t fid,
    const char * name =NULL
) const
```


**Parameters**: 

  * **fid** Field id of the field to look up. 
  * **name** Field name of the field to look up. 


**Return**: The field in the cache (if present) 

Retrieve a field from the cache. Note that the field returned is a pointer to a reusable [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) field for the [MamaFieldCache](classWombat_1_1MamaFieldCache.html) which will be overwritten each time the function is called. If the field is not found then NULL is returned.


### function find

```cpp
virtual MamaFieldCacheField * find(
    mama_fid_t fid,
    const char * name =NULL
)
```


**Parameters**: 

  * **fid** Field id of the field to look up. 
  * **name** Field name of the field to look up. 


**Return**: The field in the cache (if present) 

Retrieve a field from the cache. Note that the field returned is a pointer to a reusable [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) field for the [MamaFieldCache](classWombat_1_1MamaFieldCache.html) which will be overwritten each time the function is called. If the field is not found then NULL is returned.


### function setModified

```cpp
virtual void setModified(
    MamaFieldCacheField & field
)
```


**Parameters**: 

  * **field** The field to set the modified flag to. 


Set the specified field as modified even if the value has not changed. 


### function apply

```cpp
virtual void apply(
    const MamaFieldCacheField & field
)
```


**Parameters**: 

  * **field** The field to use for updating the cache. 


Update the cache content with the field given. If the field is already present, it will be updated, otherwise it will be added to the cache.


### function apply

```cpp
virtual void apply(
    const MamaMsg & msg,
    const MamaDictionary * dict =NULL
)
```


**Parameters**: 

  * **msg** Reference to a `[MamaMsg](classWombat_1_1MamaMsg.html)` containing the fields to update in the cache. 
  * **dict** Reference to a `[MamaDictionary](classWombat_1_1MamaDictionary.html)` representing a data dictionary. 


Update the cache content with the data contained in the message.


### function apply

```cpp
virtual void apply(
    const MamaFieldCacheRecord & record
)
```


**Parameters**: 

  * **record** Reference to a `[MamaFieldCacheRecord](classWombat_1_1MamaFieldCacheRecord.html)` containing the fields to update in the cache. 


Update the cache content with the data contained in the record.


### function getFullMessage

```cpp
virtual void getFullMessage(
    MamaMsg & msg
)
```


**Parameters**: 

  * **msg** [MamaMsg](classWombat_1_1MamaMsg.html) which will be populated with the fields from the cache. 


Populate a [MamaMsg](classWombat_1_1MamaMsg.html) with all the fields present in the cache.


### function getDeltaMessage

```cpp
virtual void getDeltaMessage(
    MamaMsg & msg
)
```


**Parameters**: 

  * **msg** [MamaMsg](classWombat_1_1MamaMsg.html) which will be populated with the modified fields from the cache. 


Populate a [MamaMsg](classWombat_1_1MamaMsg.html) with all the fields currently modified in the cache. Note that this method also resets the modification state of the modified fields. If trackModifications flag is set to false, then this method is the same as `getFullMessage`.


### function clearModifiedFields

```cpp
virtual void clearModifiedFields()
```


Clear the list of all the modified fields and reset the modified flags for all the modified fields in the cache. 


### function begin

```cpp
virtual const_iterator begin() const
```


**Return**: An iterator to the first element in the cache. 

Return a constant iterator to the first field in the cache and allows to iterate over the fields in the cache.


### function begin

```cpp
virtual iterator begin()
```


**Return**: An iterator to the first element in the cache. 

Return an iterator to the first field in the cache and allows to iterate over the fields in the cache.


### function end

```cpp
virtual const_iterator end() const
```


**Return**: An iterator to the first element in the cache. 

Return a const iterator to an invalid element and allows to check if an iterator has arrived to the end (no more elements to iterate). The content of this iterator must not be accessed.


### function end

```cpp
virtual iterator end()
```


**Return**: An iterator to the first element in the cache. 

Return an iterator to an invalid element and allows to check if an iterator has arrived to the end (no more elements to iterate). The content of this iterator must not be accessed.


-------------------------------

Updated on 2023-03-31 at 15:29:24 +0100