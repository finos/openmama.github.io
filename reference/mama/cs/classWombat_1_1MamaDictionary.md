---
title: Wombat::MamaDictionary
summary: Maps field identifiers (FIDs) to human-readable strings 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaDictionary



Maps field identifiers (FIDs) to human-readable strings  [More...](#detailed-description)

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaDictionary](classWombat_1_1MamaDictionary.html#function-mamadictionary)**()<br>Default constructor  |
| void | **[create](classWombat_1_1MamaDictionary.html#function-create)**([MamaQueue](classWombat_1_1MamaQueue.html) queue, [MamaDictionaryCallback](interfaceWombat_1_1MamaDictionaryCallback.html) callback, [MamaSource](classWombat_1_1MamaSource.html) source, int retries, double timeout)<br>Create a data dictionary from a subscription  |
| void | **[create](classWombat_1_1MamaDictionary.html#function-create)**(string filename) |
| void | **[writeToFile](classWombat_1_1MamaDictionary.html#function-writetofile)**(string filename) |
| string | **[getFeedName](classWombat_1_1MamaDictionary.html#function-getfeedname)**() |
| string | **[getFeedHost](classWombat_1_1MamaDictionary.html#function-getfeedhost)**() |
| [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[getFieldByName](classWombat_1_1MamaDictionary.html#function-getfieldbyname)**(string fieldName)<br>Return the descriptor of the field with the specified name.  |
| int | **[getMaxFid](classWombat_1_1MamaDictionary.html#function-getmaxfid)**()<br>Returns the highest field identifier.  |
| int | **[getSize](classWombat_1_1MamaDictionary.html#function-getsize)**()<br>Returns the the number of entries in the dictionary.  |
| [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[getFieldByFid](classWombat_1_1MamaDictionary.html#function-getfieldbyfid)**(int fid)<br>Return the field with the specified field FID. This method is very efficient.  |
| [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) | **[getFieldByIndex](classWombat_1_1MamaDictionary.html#function-getfieldbyindex)**(int index)<br>Return the field with the corresponding zero based index. This method is O (N) with respect to the size of the dictionary.  |
| void | **[buildDictionaryFromMessage](classWombat_1_1MamaDictionary.html#function-builddictionaryfrommessage)**([MamaMsg](classWombat_1_1MamaMsg.html) msg)<br>Recreate a data dictionary from the [MamaMsg]() supplied. The [MamaMsg]() is copied and can therefore be deleted after the method has returned.  |
| [MamaMsg](classWombat_1_1MamaMsg.html) | **[getDictionaryMessage](classWombat_1_1MamaDictionary.html#function-getdictionarymessage)**()<br>Returns a [MamaMsg]() representing the data dictionary. This message can be published or used to create a new [MamaDictionary](classWombat_1_1MamaDictionary.html) object. A new [MamaMsg]() is created for each invocation of the method. It is the responsibility of the caller to delete the message when no longer needed.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaDictionary.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**()<br>Destroys the underlying peer object and unbinds the wrapper from it.  |
| void | **[setNativeHandle](classWombat_1_1MamaWrapper.html#function-setnativehandle)**(IntPtr nHandle)<br>Sets the native handle of the native peer object. Should only be used by subclasses and in the same assembly.  |

**Protected Functions inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**()<br>Constructs a new wrapper object but doesn't create it. If the object is not explicitly disposed it will remain registered for finalization and will attempt the destroy the native peer object when finalized.  |
| | **[MamaWrapper](classWombat_1_1MamaWrapper.html#function-mamawrapper)**(IntPtr nativeHandle)<br>Constructs a managed wrapper from an existing native peer. The peer object will not be automatically finalized  |
| virtual void | **[Dispose](classWombat_1_1MamaWrapper.html#function-dispose)**(bool disposing, bool destroyNativeHandle =true)<br>The actual implementation of Dispose - called by both the Dispose method and the finalizer.  |
| virtual void | **[OnDispose](classWombat_1_1MamaWrapper.html#function-ondispose)**() |

**Protected Attributes inherited from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html)**

|                | Name           |
| -------------- | -------------- |
| IntPtr | **[nativeHandle](classWombat_1_1MamaWrapper.html#variable-nativehandle)** <br>the handle to the native peer object  |


## Detailed Description

```csharp
class Wombat::MamaDictionary;
```

Maps field identifiers (FIDs) to human-readable strings 

Any incoming [MamaMsg](classWombat_1_1MamaMsg.html) might contain FIDs but no field names. The dictionary allows applications to determine the name associated with a given FID. 

## Public Functions Documentation

### function MamaDictionary

```csharp
MamaDictionary()
```

Default constructor 

### function create

```csharp
void create(
    MamaQueue queue,
    MamaDictionaryCallback callback,
    MamaSource source,
    int retries,
    double timeout
)
```

Create a data dictionary from a subscription 

### function create

```csharp
void create(
    string filename
)
```


### function writeToFile

```csharp
void writeToFile(
    string filename
)
```


### function getFeedName

```csharp
string getFeedName()
```


### function getFeedHost

```csharp
string getFeedHost()
```


### function getFieldByName

```csharp
MamaFieldDescriptor getFieldByName(
    string fieldName
)
```

Return the descriptor of the field with the specified name. 

If there is more than one field with the same name, the one with the lowest field id is returned. 


### function getMaxFid

```csharp
int getMaxFid()
```

Returns the highest field identifier. 

### function getSize

```csharp
int getSize()
```

Returns the the number of entries in the dictionary. 

### function getFieldByFid

```csharp
MamaFieldDescriptor getFieldByFid(
    int fid
)
```

Return the field with the specified field FID. This method is very efficient. 

### function getFieldByIndex

```csharp
MamaFieldDescriptor getFieldByIndex(
    int index
)
```

Return the field with the corresponding zero based index. This method is O (N) with respect to the size of the dictionary. 

### function buildDictionaryFromMessage

```csharp
void buildDictionaryFromMessage(
    MamaMsg msg
)
```

Recreate a data dictionary from the [MamaMsg]() supplied. The [MamaMsg]() is copied and can therefore be deleted after the method has returned. 

### function getDictionaryMessage

```csharp
MamaMsg getDictionaryMessage()
```

Returns a [MamaMsg]() representing the data dictionary. This message can be published or used to create a new [MamaDictionary](classWombat_1_1MamaDictionary.html) object. A new [MamaMsg]() is created for each invocation of the method. It is the responsibility of the caller to delete the message when no longer needed. 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object 

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100