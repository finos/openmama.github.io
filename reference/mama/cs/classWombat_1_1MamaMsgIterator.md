---
title: Wombat::MamaMsgIterator
summary: Class for iterating through the fields in a MamaMsg
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsgIterator



Class for iterating through the fields in a [MamaMsg]()

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaMsgIterator](classWombat_1_1MamaMsgIterator.html#function-mamamsgiterator)**([MamaDictionary](classWombat_1_1MamaDictionary.html) dictionary)<br>Creates and iterator  |
| void | **[SetField](classWombat_1_1MamaMsgIterator.html#function-setfield)**(IntPtr pField) |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) | **[getField](classWombat_1_1MamaMsgIterator.html#function-getfield)**() |
| [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) | **[operator++](classWombat_1_1MamaMsgIterator.html#function-operator++)**([MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) rhs) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaMsgIterator.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]() |

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

### function MamaMsgIterator

```csharp
MamaMsgIterator(
    MamaDictionary dictionary
)
```

Creates and iterator 

**Parameters**: 

  * **dictionary** Dictionary to use when iterating through the fields. Pass 

```cpp
null
```

 is no dictionary is available


### function SetField

```csharp
void SetField(
    IntPtr pField
)
```


### function getField

```csharp
MamaMsgField getField()
```


### function operator++

```csharp
static MamaMsgIterator operator++(
    MamaMsgIterator rhs
)
```


## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100