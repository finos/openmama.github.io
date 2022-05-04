---
title: Wombat::MamaClientProfile
summary: A class containing various information about the MAMA client 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaClientProfile



A class containing various information about the MAMA client 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaClientProfile](classWombat_1_1MamaClientProfile.html#function-mamaclientprofile)**() |
| void | **[create](classWombat_1_1MamaClientProfile.html#function-create)**()<br>Create a mamaClientProfile object. Attribute data will be copied into allocated memory.  |
| void | **[createNoCopyData](classWombat_1_1MamaClientProfile.html#function-createnocopydata)**()<br>Create a mamaClientProfile object. The attribute data will not be copied, only the user supplied pointers to the attributes be stored.  |
| bool | **[getCopyData](classWombat_1_1MamaClientProfile.html#function-getcopydata)**()<br>Return whether or not the profile copies attribute data.  |
| void | **[clear](classWombat_1_1MamaClientProfile.html#function-clear)**()<br>Clear a mamaClientProfile object.  |
| void | **[setInterfaceVersion](classWombat_1_1MamaClientProfile.html#function-setinterfaceversion)**(byte id)<br>Set the ID of a mamaClientProfile object.  |
| byte | **[getInterfaceVersion](classWombat_1_1MamaClientProfile.html#function-getinterfaceversion)**()<br>Get the ID of a mamaClientProfile object.  |
| void | **[setUserName](classWombat_1_1MamaClientProfile.html#function-setusername)**(string userName)<br>Set the user name.  |
| string | **[getUserName](classWombat_1_1MamaClientProfile.html#function-getusername)**()<br>Get the user name.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaClientProfile.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]() |

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

### function MamaClientProfile

```csharp
MamaClientProfile()
```


### function create

```csharp
void create()
```

Create a mamaClientProfile object. Attribute data will be copied into allocated memory. 

### function createNoCopyData

```csharp
void createNoCopyData()
```

Create a mamaClientProfile object. The attribute data will not be copied, only the user supplied pointers to the attributes be stored. 

### function getCopyData

```csharp
bool getCopyData()
```

Return whether or not the profile copies attribute data. 

### function clear

```csharp
void clear()
```

Clear a mamaClientProfile object. 

### function setInterfaceVersion

```csharp
void setInterfaceVersion(
    byte id
)
```

Set the ID of a mamaClientProfile object. 

### function getInterfaceVersion

```csharp
byte getInterfaceVersion()
```

Get the ID of a mamaClientProfile object. 

### function setUserName

```csharp
void setUserName(
    string userName
)
```

Set the user name. 

### function getUserName

```csharp
string getUserName()
```

Get the user name. 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100