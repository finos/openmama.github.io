---
title: mama/dictionary.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/dictionary.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[mamaDictionaryCallbackSet](structmamaDictionaryCallbackSet.html)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(MAMACALLTYPE *)(mamaDictionary, void *) | **[mamaDictionary_completeCallback](dictionary_8h.html#typedef-mamadictionary-completecallback)**  |
| typedef void(MAMACALLTYPE *)(mamaDictionary, void *) | **[mamaDictionary_timeoutCallback](dictionary_8h.html#typedef-mamadictionary-timeoutcallback)**  |
| typedef void(MAMACALLTYPE *)(mamaDictionary, const char *, void *) | **[mamaDictionary_errorCallback](dictionary_8h.html#typedef-mamadictionary-errorcallback)**  |
| typedef struct [mamaDictionaryCallbackSet](structmamaDictionaryCallbackSet.html) | **[mamaDictionaryCallbackSet](dictionary_8h.html#typedef-mamadictionarycallbackset)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mama_createDictionary](dictionary_8h.html#function-mama-createdictionary)**(mamaDictionary * dictionary, mamaQueue queue, [mamaDictionaryCallbackSet](structmamaDictionaryCallbackSet.html) dictionaryCallbacks, mamaSource source, double timeout, int retries, void * closure) |
| MAMAExpDLL mama_status | **[mamaDictionary_create](dictionary_8h.html#function-mamadictionary-create)**(mamaDictionary * dictionary) |
| MAMAExpDLL mama_status | **[mamaDictionary_destroy](dictionary_8h.html#function-mamadictionary-destroy)**(mamaDictionary dictionary) |
| MAMAExpDLL mama_status | **[mamaDictionary_getFeedName](dictionary_8h.html#function-mamadictionary-getfeedname)**(mamaDictionary dictionary, const char ** result) |
| MAMAExpDLL mama_status | **[mamaDictionary_getFeedHost](dictionary_8h.html#function-mamadictionary-getfeedhost)**(mamaDictionary dictionary, const char ** result) |
| MAMAExpDLL mama_status | **[mamaDictionary_getFieldDescriptorByFid](dictionary_8h.html#function-mamadictionary-getfielddescriptorbyfid)**(mamaDictionary dictionary, mamaFieldDescriptor * result, mama_fid_t fid) |
| MAMAExpDLL mama_status | **[mamaDictionary_getFieldDescriptorByIndex](dictionary_8h.html#function-mamadictionary-getfielddescriptorbyindex)**(mamaDictionary dictionary, mamaFieldDescriptor * result, unsigned short index) |
| MAMAExpDLL mama_status | **[mamaDictionary_getFieldDescriptorByName](dictionary_8h.html#function-mamadictionary-getfielddescriptorbyname)**(mamaDictionary dictionary, mamaFieldDescriptor * result, const char * fname) |
| MAMAExpDLL mama_status | **[mamaDictionary_getFieldDescriptorByNameAll](dictionary_8h.html#function-mamadictionary-getfielddescriptorbynameall)**(mamaDictionary dictionary, const char * fname, mamaFieldDescriptor * descList, size_t * size) |
| MAMAExpDLL mama_status | **[mamaDictionary_getMaxFid](dictionary_8h.html#function-mamadictionary-getmaxfid)**(mamaDictionary dictionary, mama_fid_t * value) |
| MAMAExpDLL mama_status | **[mamaDictionary_getSize](dictionary_8h.html#function-mamadictionary-getsize)**(mamaDictionary dictionary, size_t * value) |
| MAMAExpDLL mama_status | **[mamaDictionary_hasDuplicates](dictionary_8h.html#function-mamadictionary-hasduplicates)**(mamaDictionary dictionary, int * value) |
| MAMAExpDLL mama_status | **[mamaDictionary_buildDictionaryFromMessage](dictionary_8h.html#function-mamadictionary-builddictionaryfrommessage)**(mamaDictionary dictionary, const mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaDictionary_getDictionaryMessage](dictionary_8h.html#function-mamadictionary-getdictionarymessage)**(mamaDictionary dictionary, mamaMsg * msg) |
| MAMAExpDLL mama_status | **[mamaDictionary_fillDictionaryMessage](dictionary_8h.html#function-mamadictionary-filldictionarymessage)**(mamaDictionary dictionary, mamaMsg * msg) |
| MAMAExpDLL mama_status | **[mamaDictionary_createFieldDescriptor](dictionary_8h.html#function-mamadictionary-createfielddescriptor)**(mamaDictionary dictionary, mama_fid_t fid, const char * name, mamaFieldType type, mamaFieldDescriptor * descriptor) |
| MAMAExpDLL mama_status | **[mamaDictionary_setMaxFid](dictionary_8h.html#function-mamadictionary-setmaxfid)**(mamaDictionary dictionary, mama_size_t maxFid) |
| MAMAExpDLL mama_status | **[mamaDictionary_writeToFile](dictionary_8h.html#function-mamadictionary-writetofile)**(mamaDictionary dictionary, const char * fileName) |
| MAMAExpDLL mama_status | **[mamaDictionary_populateFromFile](dictionary_8h.html#function-mamadictionary-populatefromfile)**(mamaDictionary dictionary, const char * fileName) |

## Types Documentation

### typedef mamaDictionary_completeCallback

```cpp
typedef void(MAMACALLTYPE * mamaDictionary_completeCallback) (mamaDictionary, void *);
```


The mamaDictionary class maps field identifiers (FIDs) to human readable strings. Any incoming mamaMsg might contain FIDs but no field names. The dictionary allows applications to determine the name associated with a given FID. Typedefs for the dictionary callbacks.



* mamaDictionary_setErrorCallback ()
* mamaDictionary_setCompleteCallback ()
* mamaDictionary_setTimeoutCallback () 


### typedef mamaDictionary_timeoutCallback

```cpp
typedef void(MAMACALLTYPE * mamaDictionary_timeoutCallback) (mamaDictionary, void *);
```


### typedef mamaDictionary_errorCallback

```cpp
typedef void(MAMACALLTYPE * mamaDictionary_errorCallback) (mamaDictionary, const char *, void *);
```


### typedef mamaDictionaryCallbackSet

```cpp
typedef struct mamaDictionaryCallbackSet mamaDictionaryCallbackSet;
```


A structure containing the callbacks for dictionary creation. 



## Functions Documentation

### function mama_createDictionary

```cpp
MAMAExpDLL mama_status mama_createDictionary(
    mamaDictionary * dictionary,
    mamaQueue queue,
    mamaDictionaryCallbackSet dictionaryCallbacks,
    mamaSource source,
    double timeout,
    int retries,
    void * closure
)
```


**Parameters**: 

  * **dictionary** A pointer for the dictionary being created. 
  * **queue** The mama queue. 
  * **dictionaryCallbacks** A [mamaDictionaryCallbackSet](structmamaDictionaryCallbackSet.html) with the callbacks for completion, errors and timeouts. 
  * **source** The mamaSource identifying the source of the dictionary. 
  * **timeout** the timeout 
  * **retries** number of retries 
  * **closure** A user supplied value passed to the callbacks. 


Create a data dictionary from a subscription.


### function mamaDictionary_create

```cpp
MAMAExpDLL mama_status mamaDictionary_create(
    mamaDictionary * dictionary
)
```


**Parameters**: 

  * **dictionary** The address to where the dictionary will be written 


Create an empty mamaDictionary so that can be populated at a later stage via a call to buildDictionaryFromMessage () or populated manually via calls to addFieldDescriptor ()


### function mamaDictionary_destroy

```cpp
MAMAExpDLL mama_status mamaDictionary_destroy(
    mamaDictionary dictionary
)
```


**Parameters**: 

  * **dictionary** The dictionary. 


Destroy this mamaDictionary object and free all its resources.


### function mamaDictionary_getFeedName

```cpp
MAMAExpDLL mama_status mamaDictionary_getFeedName(
    mamaDictionary dictionary,
    const char ** result
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **result** (out) points to the feed name 


Return the dictionary source feed name


### function mamaDictionary_getFeedHost

```cpp
MAMAExpDLL mama_status mamaDictionary_getFeedHost(
    mamaDictionary dictionary,
    const char ** result
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **result** (out) points to the feed host 


Return the dictionary source feed host


### function mamaDictionary_getFieldDescriptorByFid

```cpp
MAMAExpDLL mama_status mamaDictionary_getFieldDescriptorByFid(
    mamaDictionary dictionary,
    mamaFieldDescriptor * result,
    mama_fid_t fid
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **fid** The field id. 
  * **result** (out) points to the mamaFieldDescriptor (not a copy) 


Return the mamaFieldDescriptor with the specified field FID. This method is very efficient (constant time).


### function mamaDictionary_getFieldDescriptorByIndex

```cpp
MAMAExpDLL mama_status mamaDictionary_getFieldDescriptorByIndex(
    mamaDictionary dictionary,
    mamaFieldDescriptor * result,
    unsigned short index
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **index** The zero-based index. 
  * **result** The result. 


Return the field with the corresponding zero based index. This method is O (N) with respect to the size of the dictionary.


### function mamaDictionary_getFieldDescriptorByName

```cpp
MAMAExpDLL mama_status mamaDictionary_getFieldDescriptorByName(
    mamaDictionary dictionary,
    mamaFieldDescriptor * result,
    const char * fname
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **result** the result * or NULL if no such field 
  * **fname** The name of the field to search for. 


Return the descriptor of the field with the specified name. If there is more than one field with the same name, the one with the lowest field id is returned.


### function mamaDictionary_getFieldDescriptorByNameAll

```cpp
MAMAExpDLL mama_status mamaDictionary_getFieldDescriptorByNameAll(
    mamaDictionary dictionary,
    const char * fname,
    mamaFieldDescriptor * descList,
    size_t * size
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **fname** (in) The name to search dictionary for. 
  * **descList** (out) An array of mamaFieldDescriptor objects, which are not copies and should not be destroyed by the caller. 
  * **size** (out) The final number of entries in descList. The value should be intialised to the size allocated to decList. This will be modified to the actual number found on return, or will return once this value has been found. 


Return an array of mamaFieldDescriptor which includes every field in the dictionary with the specified name. The caller is responsible for allocating descList with room enough for all possible duplicate fields (use mamaDictionary_getSize () to be safe).


### function mamaDictionary_getMaxFid

```cpp
MAMAExpDLL mama_status mamaDictionary_getMaxFid(
    mamaDictionary dictionary,
    mama_fid_t * value
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **value** A pointer that will contain highest FID. 


Return the highest field identifier.


### function mamaDictionary_getSize

```cpp
MAMAExpDLL mama_status mamaDictionary_getSize(
    mamaDictionary dictionary,
    size_t * value
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **value** The number of entries in the dictionary. 


Return the number of fields in the dictionary.


### function mamaDictionary_hasDuplicates

```cpp
MAMAExpDLL mama_status mamaDictionary_hasDuplicates(
    mamaDictionary dictionary,
    int * value
)
```


**Parameters**: 

  * **dictionary** The dictionary. 
  * **value** 1 if there are duplicates, 0 otherwise. 


Return true if there are multiple fields with the same name.


### function mamaDictionary_buildDictionaryFromMessage

```cpp
MAMAExpDLL mama_status mamaDictionary_buildDictionaryFromMessage(
    mamaDictionary dictionary,
    const mamaMsg msg
)
```


**Parameters**: 

  * **dictionary** The dictionary 
  * **msg** A mamaMsg representing the contents of a data dictionary. 


Build a data dictionary from the specified message.


### function mamaDictionary_getDictionaryMessage

```cpp
MAMAExpDLL mama_status mamaDictionary_getDictionaryMessage(
    mamaDictionary dictionary,
    mamaMsg * msg
)
```


**Parameters**: 

  * **dictionary** The Dictionary 
  * **msg** The address of the mamaMsg where the result is to be written 


Get the underlying message for the data dictionary.

A new message instance is created each time this function is called. It is the responsibility for the caller to destroy the message when no longer required.


### function mamaDictionary_fillDictionaryMessage

```cpp
MAMAExpDLL mama_status mamaDictionary_fillDictionaryMessage(
    mamaDictionary dictionary,
    mamaMsg * msg
)
```


**Parameters**: 

  * **dictionary** The Dictionary 
  * **msg** The address of the mamaMsg where the result is to be written 


Fill a message with the data dictionary.

An existing mama message is populated fromt he data dictionary This allows the caller to create the message on a specifc payload


### function mamaDictionary_createFieldDescriptor

```cpp
MAMAExpDLL mama_status mamaDictionary_createFieldDescriptor(
    mamaDictionary dictionary,
    mama_fid_t fid,
    const char * name,
    mamaFieldType type,
    mamaFieldDescriptor * descriptor
)
```


**Parameters**: 

  * **dictionary** The dictionary to which the field is to be added. 
  * **fid** The fid for the new field descriptor. 
  * **name** The name for the new field descriptor. 
  * **type** The type for the new field descriptor. 
  * **descriptor** The newly created fieldDescriptor. NULL can be specified. 


Create a new field descriptor and add it to the dictionary. New fields can be added to an existing dictionary obtained from the MAMA infrastructure. This function can also be used to manually populate a new data dictionary.


### function mamaDictionary_setMaxFid

```cpp
MAMAExpDLL mama_status mamaDictionary_setMaxFid(
    mamaDictionary dictionary,
    mama_size_t maxFid
)
```


**Parameters**: 

  * **dictionary** The mamaDictionary. 
  * **maxFid** The probable maximum fid being added to the dictionary. 


Tell the dictionary what the probable maximum fid in the data dictionary may be. This is not necessary but will aid performance for manually creating a new dictionary or adding new fields to an existing dictionary.

Calling this function ensures that there is capacity in the dictionary for field descriptors with fids up to the max specified.

Fields with fids greater than specified can be added to the dictionary but this will incur the overhead of allocating more memory and copying dictionary elements.


### function mamaDictionary_writeToFile

```cpp
MAMAExpDLL mama_status mamaDictionary_writeToFile(
    mamaDictionary dictionary,
    const char * fileName
)
```


**Parameters**: 

  * **dictionary** The dictionary to serialize. 
  * **fileName** The name of the file to serialize the dictionary to. This can be a fully qualified name, relative or a file on the $WOMBAT_PATH 


Write the data dictionary to a file. The dictionary will be written in the form: fid|fieldName|fieldType


### function mamaDictionary_populateFromFile

```cpp
MAMAExpDLL mama_status mamaDictionary_populateFromFile(
    mamaDictionary dictionary,
    const char * fileName
)
```


**Parameters**: 

  * **dictionary** The dictionary to populate. 
  * **fileName** The file from which to populate the dictionary. This can be a fully qualified name, relative or a file on the $WOMBAT_PATH 


Populate a dictionary from the contents of a file. Can be used to add additional fields to an existing dictionary or to populate a new dictionary.




## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MamaDictionaryH__
#define MamaDictionaryH__


#if defined (__cplusplus)
extern "C" {
#endif

#include "mama/types.h"
#include "mama/fielddesc.h"


typedef void (MAMACALLTYPE *mamaDictionary_completeCallback)(mamaDictionary,void*);

typedef void (MAMACALLTYPE *mamaDictionary_timeoutCallback)(mamaDictionary,void*);

typedef void (MAMACALLTYPE *mamaDictionary_errorCallback)(mamaDictionary,const char*,void*);


typedef struct mamaDictionaryCallbackSet
{
    mamaDictionary_completeCallback onComplete;
    mamaDictionary_timeoutCallback  onTimeout;
    mamaDictionary_errorCallback    onError;
} mamaDictionaryCallbackSet;

MAMAExpDLL
extern mama_status
mama_createDictionary (
    mamaDictionary*            dictionary,
    mamaQueue                  queue,
    mamaDictionaryCallbackSet  dictionaryCallbacks,
    mamaSource                 source,
    double                     timeout,
    int                        retries,
    void*                      closure);

MAMAExpDLL
extern mama_status
mamaDictionary_create (
    mamaDictionary*  dictionary);


MAMAExpDLL
extern mama_status
mamaDictionary_destroy (
    mamaDictionary dictionary);

MAMAExpDLL
extern mama_status
mamaDictionary_getFeedName (
    mamaDictionary dictionary,
    const char** result);

MAMAExpDLL
extern mama_status
mamaDictionary_getFeedHost (
    mamaDictionary dictionary,
    const char** result);

MAMAExpDLL
extern mama_status
mamaDictionary_getFieldDescriptorByFid (
    mamaDictionary        dictionary,
    mamaFieldDescriptor*  result,
    mama_fid_t            fid);

MAMAExpDLL
extern mama_status
mamaDictionary_getFieldDescriptorByIndex (
    mamaDictionary        dictionary,
    mamaFieldDescriptor*  result,
    unsigned short        index);

MAMAExpDLL
extern mama_status
mamaDictionary_getFieldDescriptorByName (
    mamaDictionary        dictionary,
    mamaFieldDescriptor*  result,
    const char*           fname);

MAMAExpDLL
extern mama_status
mamaDictionary_getFieldDescriptorByNameAll (
    mamaDictionary        dictionary,
    const char*           fname,
    mamaFieldDescriptor*  descList,
    size_t*               size);

MAMAExpDLL
extern mama_status
mamaDictionary_getMaxFid (
    mamaDictionary  dictionary,
    mama_fid_t*     value);

MAMAExpDLL
extern mama_status
mamaDictionary_getSize (
    mamaDictionary  dictionary,
    size_t*         value);

MAMAExpDLL
extern mama_status
mamaDictionary_hasDuplicates (
    mamaDictionary  dictionary,
    int*            value);

MAMAExpDLL
extern mama_status
mamaDictionary_buildDictionaryFromMessage (
    mamaDictionary dictionary,
    const mamaMsg msg );

MAMAExpDLL
extern mama_status
mamaDictionary_getDictionaryMessage (
    mamaDictionary dictionary,
    mamaMsg* msg);

MAMAExpDLL
extern mama_status
mamaDictionary_fillDictionaryMessage (
    mamaDictionary dictionary,
    mamaMsg* msg);


MAMAExpDLL
extern mama_status
mamaDictionary_createFieldDescriptor (
        mamaDictionary       dictionary,
        mama_fid_t           fid,
        const char*          name,
        mamaFieldType        type,
        mamaFieldDescriptor* descriptor);

MAMAExpDLL
extern mama_status
mamaDictionary_setMaxFid (
        mamaDictionary       dictionary,
        mama_size_t          maxFid);

MAMAExpDLL
extern mama_status
mamaDictionary_writeToFile (
        mamaDictionary       dictionary,
        const char*          fileName);

MAMAExpDLL
extern mama_status
mamaDictionary_populateFromFile (
        mamaDictionary       dictionary,
        const char*          fileName);

#if defined (__cplusplus)
}
#endif

#endif /* MamaDictionaryH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
