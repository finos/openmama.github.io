---
title: Wombat::MamaDictionary::NativeMethods
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDictionary::NativeMethods





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[mama_createDictionary](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mama-createdictionary)**(ref IntPtr dictionary, IntPtr queue, Callbacks callbacks, IntPtr source, double timeout, int retries, IntPtr closure) |
| int | **[mamaDictionary_create](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-create)**(ref IntPtr dictionary) |
| int | **[mamaDictionary_destroy](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-destroy)**(IntPtr dictionary) |
| int | **[mamaDictionary_getFeedName](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-getfeedname)**(IntPtr dictionary, ref string feedName) |
| int | **[mamaDictionary_getFeedHost](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-getfeedhost)**(IntPtr dictionary, ref string feedHost) |
| int | **[mamaDictionary_getFieldDescriptorByName](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-getfielddescriptorbyname)**(IntPtr dictionary, ref IntPtr result, string fname) |
| int | **[mamaDictionary_getMaxFid](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-getmaxfid)**(IntPtr dictionary, ref ushort value) |
| int | **[mamaDictionary_writeToFile](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-writetofile)**(IntPtr dictionary, string fileName) |
| int | **[mamaDictionary_populateFromFile](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-populatefromfile)**(IntPtr dictionary, string fileName) |
| int | **[mamaDictionary_getSize](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-getsize)**(IntPtr dictionary, ref int value) |
| int | **[mamaDictionary_getFieldDescriptorByFid](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-getfielddescriptorbyfid)**(IntPtr dictionary, ref IntPtr result, int fid) |
| int | **[mamaDictionary_getFieldDescriptorByIndex](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-getfielddescriptorbyindex)**(IntPtr dictionary, ref IntPtr result, int index) |
| int | **[mamaDictionary_buildDictionaryFromMessage](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-builddictionaryfrommessage)**(IntPtr dictionary, IntPtr mamaMsg) |
| int | **[mamaDictionary_getDictionaryMessage](structWombat_1_1MamaDictionary_1_1NativeMethods.html#function-mamadictionary-getdictionarymessage)**(IntPtr dictionary, ref IntPtr mamamsg) |

## Public Functions Documentation

### function mama_createDictionary

```csharp
int mama_createDictionary(
    ref IntPtr dictionary,
    IntPtr queue,
    Callbacks callbacks,
    IntPtr source,
    double timeout,
    int retries,
    IntPtr closure
)
```


### function mamaDictionary_create

```csharp
int mamaDictionary_create(
    ref IntPtr dictionary
)
```


### function mamaDictionary_destroy

```csharp
int mamaDictionary_destroy(
    IntPtr dictionary
)
```


### function mamaDictionary_getFeedName

```csharp
int mamaDictionary_getFeedName(
    IntPtr dictionary,
    ref string feedName
)
```


### function mamaDictionary_getFeedHost

```csharp
int mamaDictionary_getFeedHost(
    IntPtr dictionary,
    ref string feedHost
)
```


### function mamaDictionary_getFieldDescriptorByName

```csharp
int mamaDictionary_getFieldDescriptorByName(
    IntPtr dictionary,
    ref IntPtr result,
    string fname
)
```


### function mamaDictionary_getMaxFid

```csharp
int mamaDictionary_getMaxFid(
    IntPtr dictionary,
    ref ushort value
)
```


### function mamaDictionary_writeToFile

```csharp
int mamaDictionary_writeToFile(
    IntPtr dictionary,
    string fileName
)
```


### function mamaDictionary_populateFromFile

```csharp
int mamaDictionary_populateFromFile(
    IntPtr dictionary,
    string fileName
)
```


### function mamaDictionary_getSize

```csharp
int mamaDictionary_getSize(
    IntPtr dictionary,
    ref int value
)
```


### function mamaDictionary_getFieldDescriptorByFid

```csharp
int mamaDictionary_getFieldDescriptorByFid(
    IntPtr dictionary,
    ref IntPtr result,
    int fid
)
```


### function mamaDictionary_getFieldDescriptorByIndex

```csharp
int mamaDictionary_getFieldDescriptorByIndex(
    IntPtr dictionary,
    ref IntPtr result,
    int index
)
```


### function mamaDictionary_buildDictionaryFromMessage

```csharp
int mamaDictionary_buildDictionaryFromMessage(
    IntPtr dictionary,
    IntPtr mamaMsg
)
```


### function mamaDictionary_getDictionaryMessage

```csharp
int mamaDictionary_getDictionaryMessage(
    IntPtr dictionary,
    ref IntPtr mamamsg
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100