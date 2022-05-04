---
title: Wombat::MamaFieldDescriptor
summary: A class that describes a field in a MamaMsg
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldDescriptor



A class that describes a field in a [MamaMsg]()

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html#function-mamafielddescriptor)**(int fid, [mamaFieldType](namespaceWombat.html#enum-mamafieldtype) type, string name, bool trackModState) |
| | **[MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html#function-mamafielddescriptor)**(int fid, [mamaFieldType](namespaceWombat.html#enum-mamafieldtype) type, string name) |
| void | **[destroy](classWombat_1_1MamaFieldDescriptor.html#function-destroy)**()<br>Destroy a [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html) |
| string | **[getName](classWombat_1_1MamaFieldDescriptor.html#function-getname)**()<br>Return the human readable name of the field.  |
| int | **[getFid](classWombat_1_1MamaFieldDescriptor.html#function-getfid)**()<br>Return the field identifier  |
| [mamaFieldType](namespaceWombat.html#enum-mamafieldtype) | **[getType](classWombat_1_1MamaFieldDescriptor.html#function-gettype)**()<br>Return the data type  |
| string | **[getTypeName](classWombat_1_1MamaFieldDescriptor.html#function-gettypename)**()<br>Return a human readable string for mamaMsgType  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaFieldDescriptor.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object  |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[trackModState](classWombat_1_1MamaFieldDescriptor.html#property-trackmodstate)** <br>Track the modification state  |
| object | **[closure](classWombat_1_1MamaFieldDescriptor.html#property-closure)** <br>User-supplied data that is associated with the field descriptor  |
| string? | **[pubName](classWombat_1_1MamaFieldDescriptor.html#property-pubname)** <br>Publish name for the field  |

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


## Public Functions Documentation

### function MamaFieldDescriptor

```csharp
MamaFieldDescriptor(
    int fid,
    mamaFieldType type,
    string name,
    bool trackModState
)
```


### function MamaFieldDescriptor

```csharp
MamaFieldDescriptor(
    int fid,
    mamaFieldType type,
    string name
)
```


### function destroy

```csharp
void destroy()
```

Destroy a [MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html)

### function getName

```csharp
string getName()
```

Return the human readable name of the field. 

### function getFid

```csharp
int getFid()
```

Return the field identifier 

### function getType

```csharp
mamaFieldType getType()
```

Return the data type 

### function getTypeName

```csharp
string getTypeName()
```

Return a human readable string for mamaMsgType 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object 

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


## Public Property Documentation

### property trackModState

```csharp
bool trackModState;
```

Track the modification state 

### property closure

```csharp
object closure;
```

User-supplied data that is associated with the field descriptor 

### property pubName

```csharp
string? pubName;
```

Publish name for the field 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100