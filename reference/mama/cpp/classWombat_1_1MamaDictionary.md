---
title: Wombat::MamaDictionary
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDictionary



 [More...](#detailed-description)


`#include <MamaDictionary.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaDictionary](classWombat_1_1MamaDictionary.html#function-~mamadictionary)**() |
| | **[MamaDictionary](classWombat_1_1MamaDictionary.html#function-mamadictionary)**(void ) |
| virtual void | **[create](classWombat_1_1MamaDictionary.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaDictionaryCallback](classWombat_1_1MamaDictionaryCallback.html) * callback, [MamaSource](classWombat_1_1MamaSource.html) * source, int retries =MAMA_DEFAULT_RETRIES, double timeout =MAMA_DEFAULT_TIMEOUT, void * closure =NULL) |
| virtual const char * | **[getFeedName](classWombat_1_1MamaDictionary.html#function-getfeedname)**() |
| virtual const char * | **[getFeedHost](classWombat_1_1MamaDictionary.html#function-getfeedhost)**() |
| virtual [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[getFieldByFid](classWombat_1_1MamaDictionary.html#function-getfieldbyfid)**(mama_fid_t fid) |
| virtual const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[getFieldByFid](classWombat_1_1MamaDictionary.html#function-getfieldbyfid)**(mama_fid_t fid) const |
| virtual [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[getFieldByIndex](classWombat_1_1MamaDictionary.html#function-getfieldbyindex)**(size_t index) |
| virtual const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[getFieldByIndex](classWombat_1_1MamaDictionary.html#function-getfieldbyindex)**(size_t index) const |
| virtual [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[getFieldByName](classWombat_1_1MamaDictionary.html#function-getfieldbyname)**(const char * name) |
| virtual const [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[getFieldByName](classWombat_1_1MamaDictionary.html#function-getfieldbyname)**(const char * name) const |
| virtual mama_fid_t | **[getMaxFid](classWombat_1_1MamaDictionary.html#function-getmaxfid)**(void ) const |
| virtual size_t | **[getSize](classWombat_1_1MamaDictionary.html#function-getsize)**(void ) const |
| virtual bool | **[hasDuplicates](classWombat_1_1MamaDictionary.html#function-hasduplicates)**(void ) const |
| virtual [MamaDictionaryCallback](classWombat_1_1MamaDictionaryCallback.html) * | **[getCallback](classWombat_1_1MamaDictionary.html#function-getcallback)**(void ) const |
| virtual void | **[setCallback](classWombat_1_1MamaDictionary.html#function-setcallback)**([MamaDictionaryCallback](classWombat_1_1MamaDictionaryCallback.html) * callback) |
| virtual mamaDictionary | **[getDictC](classWombat_1_1MamaDictionary.html#function-getdictc)**() |
| virtual const mamaDictionary | **[getDictC](classWombat_1_1MamaDictionary.html#function-getdictc)**() const |
| virtual void * | **[getClosure](classWombat_1_1MamaDictionary.html#function-getclosure)**(void ) const |
| virtual [MamaMsg](classWombat_1_1MamaMsg.html) * | **[getDictionaryMessage](classWombat_1_1MamaDictionary.html#function-getdictionarymessage)**() const |
| virtual void | **[buildDictionaryFromMessage](classWombat_1_1MamaDictionary.html#function-builddictionaryfrommessage)**([MamaMsg](classWombat_1_1MamaMsg.html) & msg) |
| virtual [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) * | **[createFieldDescriptor](classWombat_1_1MamaDictionary.html#function-createfielddescriptor)**(mama_fid_t fid, const char * name, mamaFieldType type) |
| virtual void | **[setMaxFid](classWombat_1_1MamaDictionary.html#function-setmaxfid)**(mama_size_t maxFid) |
| virtual void | **[writeToFile](classWombat_1_1MamaDictionary.html#function-writetofile)**(const char * fileName) |
| virtual void | **[populateFromFile](classWombat_1_1MamaDictionary.html#function-populatefromfile)**(const char * fileName) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| DictionaryImpl * | **[mPimpl](classWombat_1_1MamaDictionary.html#variable-mpimpl)**  |

## Detailed Description

```cpp
class Wombat::MamaDictionary;
```


The `[MamaDictionary](classWombat_1_1MamaDictionary.html)` class maps field identifiers (FIDs) to human readable strings. Incoming `[MamaMsg](classWombat_1_1MamaMsg.html)`s may contain FIDs but no field names. The dictionary allows applications to determine the name associated with a given FID. On some platforms, the inbound messages may have names, but not fids in which case the dictionary can map names to fids. 

## Public Functions Documentation

### function ~MamaDictionary

```cpp
virtual ~MamaDictionary()
```


### function MamaDictionary

```cpp
MamaDictionary(
    void 
)
```


### function create

```cpp
virtual void create(
    MamaQueue * queue,
    MamaDictionaryCallback * callback,
    MamaSource * source,
    int retries =MAMA_DEFAULT_RETRIES,
    double timeout =MAMA_DEFAULT_TIMEOUT,
    void * closure =NULL
)
```


**Parameters**: 

  * **queue** The mama queue. 
  * **callback** The dictionary callback. 
  * **source** The dictionary source. Depends upon feed handler configuration. See feed handler documentation for details 
  * **timeout** The timeout in seconds. 
  * **retries** The number of times to retry before failing. 
  * **closure** The caller supplied closure. 


Create a dictionary subscription. The caller supplied `DictionaryCallback.onComplete` will be invoked after the dictionary is fully constructed.

If there is an error creating the dictionary [Mama](classWombat_1_1Mama.html) invokes the `onError` callback, and the returned dictionary is not valid. In the event of a timeout, [Mama](classWombat_1_1Mama.html) invokes the `onTimeout` callback. This method uses the default timeout and retry values (`SubscriptionBridge.DEFAULT_TIMEOUT` and `SubscriptionBridge.DEFAULT_RETRIES`.


### function getFeedName

```cpp
virtual const char * getFeedName()
```


**Parameters**: 

  * **dictionary** The dictionary. 


**Return**: the feed name 

Return the dictionary source feed name


### function getFeedHost

```cpp
virtual const char * getFeedHost()
```


**Parameters**: 

  * **dictionary** The dictionary. 


**Return**: the feed host 

Return the dictionary source feed host


### function getFieldByFid

```cpp
virtual MamaFieldDescriptor * getFieldByFid(
    mama_fid_t fid
)
```


**Parameters**: 

  * **fid** The field id. 


**Return**: The field. 

Return the field with the specified field FID. This method is very efficient.


### function getFieldByFid

```cpp
virtual const MamaFieldDescriptor * getFieldByFid(
    mama_fid_t fid
) const
```


**Parameters**: 

  * **fid** The field id. 


**Return**: The field. 

Return the field with the specified field FID. This method is very efficient.


### function getFieldByIndex

```cpp
virtual MamaFieldDescriptor * getFieldByIndex(
    size_t index
)
```


**Parameters**: 

  * **index** The index. 


**Return**: The field. 

Return the field with the corresponding zero based index. This method is O (N) with respect to the size of the dictionary.


### function getFieldByIndex

```cpp
virtual const MamaFieldDescriptor * getFieldByIndex(
    size_t index
) const
```


**Parameters**: 

  * **index** The index. 


**Return**: The field. 

Return the field with the corresponding zero based index. This method is O (N) with respect to the size of the dictionary.


### function getFieldByName

```cpp
virtual MamaFieldDescriptor * getFieldByName(
    const char * name
)
```


**Parameters**: 

  * **name** The name of the field. 


**Return**: The field with the specified name or null if there is no such field. 

Return the field with the specified name. If there is more than one field with the same name, the one with the lowest field id is returned.


### function getFieldByName

```cpp
virtual const MamaFieldDescriptor * getFieldByName(
    const char * name
) const
```


**Parameters**: 

  * **name** The name of the field. 


**Return**: The field with the specified name or null if there is no such field. 

Return the field with the specified name. If there is more than one field with the same name, the one with the lowest field id is returned.


### function getMaxFid

```cpp
virtual mama_fid_t getMaxFid(
    void 
) const
```


**Return**: The highest FID. 

Return the highest field identifier. 


### function getSize

```cpp
virtual size_t getSize(
    void 
) const
```


**Return**: The number of entries in the dictionary. 

Return the number of fields in the dictionary.


### function hasDuplicates

```cpp
virtual bool hasDuplicates(
    void 
) const
```


**Return**: true if there are duplicates. 

Return true if there are multiple fields with the same name.


### function getCallback

```cpp
virtual MamaDictionaryCallback * getCallback(
    void 
) const
```


**See**: [MamaDictionaryCallback](classWombat_1_1MamaDictionaryCallback.html)

**Return**: The callback 

Return the callback.


### function setCallback

```cpp
virtual void setCallback(
    MamaDictionaryCallback * callback
)
```


**Parameters**: 

  * **callback** The callback. 


Set the callback to receive notifications when creation is complete or an error occurs.


### function getDictC

```cpp
virtual mamaDictionary getDictC()
```


Return the underlying C mamaDictionary. 


### function getDictC

```cpp
virtual const mamaDictionary getDictC() const
```


Return the underlying C mamaDictionary. 


### function getClosure

```cpp
virtual void * getClosure(
    void 
) const
```


**Return**: the closure. 

Return the closure for the dictionary.


### function getDictionaryMessage

```cpp
virtual MamaMsg * getDictionaryMessage() const
```


**Return**: Pointer to a new [MamaMsg](classWombat_1_1MamaMsg.html) for the dictionary. 

Returns a [MamaMsg](classWombat_1_1MamaMsg.html) representing the data dictionary. This message can be published or used to create a new [MamaDictionary](classWombat_1_1MamaDictionary.html) object. A new [MamaMsg](classWombat_1_1MamaMsg.html) is created for each invocation of the method. It is the responsibility of the caller to delete the message when no longer needed.


### function buildDictionaryFromMessage

```cpp
virtual void buildDictionaryFromMessage(
    MamaMsg & msg
)
```


**Parameters**: 

  * **msg** Reference to a [MamaMsg](classWombat_1_1MamaMsg.html) representing a data dictionary. 


Recreate a data dictionary from the [MamaMsg](classWombat_1_1MamaMsg.html) supplied. The [MamaMsg](classWombat_1_1MamaMsg.html) is copied and can therefore be deleted after the method has returned.


### function createFieldDescriptor

```cpp
virtual MamaFieldDescriptor * createFieldDescriptor(
    mama_fid_t fid,
    const char * name,
    mamaFieldType type
)
```


**Parameters**: 

  * **fid** The fid for the new field descriptor. 
  * **name** The name for the new field descriptor. 
  * **type** The type for the new field descriptor. 


Add a new field descriptor to a dictionary. New fields can be added to an existing dictionary obtained from the MAMA infrastructure. This function can also be used to manually build a data dictionary.


### function setMaxFid

```cpp
virtual void setMaxFid(
    mama_size_t maxFid
)
```


**Parameters**: 

  * **maxFid** The probable maximum fid being added to the dictionary. 


Tell the dictionary what the probable maximum fid in the data dictionary may be. This is not necessary but will aid performance for manually creating a new dictionary or adding new fields to an existing dictionary.

Calling this function ensures that there is capacity in the dictionary for field descriptors with fids up to the maximum specified.

Fields with fids greater than specified can be added to the dictionary but this will incur the overhead of allocating more memory and copying dictionary elements.


### function writeToFile

```cpp
virtual void writeToFile(
    const char * fileName
)
```


**Parameters**: 

  * **fileName** The name of the file to serialize the dictionary to. This can be a fully qualified name, relative or a file on the $WOMBAT_PATH 


Write the data dictionary to a file. The dictionary will be written in the form: fid|fieldName|fieldType


### function populateFromFile

```cpp
virtual void populateFromFile(
    const char * fileName
)
```


**Parameters**: 

  * **fileName** The file from which to populate the dictionary. This can be a fully qualified name, relative or a file on the $WOMBAT_PATH 


Populate a dictionary from the contents of a file. Can be used to add additional fields to an existing dictionary or to populate a new dictionary.


## Public Attributes Documentation

### variable mPimpl

```cpp
DictionaryImpl * mPimpl;
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100