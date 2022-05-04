---
title: Wombat::MamaSourceGroupManager
summary: A MamaSourceGroupManager monitors a set of MamaSourceGroups 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroupManager



A [MamaSourceGroupManager]() monitors a set of [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html)s 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html#function-mamasourcegroupmanager)**()<br>Constructs **and** creates a new source group manager object. M:Wombat.MamaWrapper.::ctor |
| void | **[destroy](classWombat_1_1MamaSourceGroupManager.html#function-destroy)**()<br>Destroy the source. A synonym to the [MamaWrapper.Dispose]() method.  |
| IEnumerator | **[GetEnumerator](classWombat_1_1MamaSourceGroupManager.html#function-getenumerator)**()<br>Provides an enumerator over the source groups  |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) | **[create](classWombat_1_1MamaSourceGroupManager.html#function-create)**(string name)<br>Create a new mamaSourceGroup and add it to the manager.  |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) | **[findOrCreate](classWombat_1_1MamaSourceGroupManager.html#function-findorcreate)**(string name)<br>Locates an existing mamaSourceGroup for the given name. If none exists creates a new mamaSource and adds to the sourceGroupManager.  |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) | **[find](classWombat_1_1MamaSourceGroupManager.html#function-find)**(string name)<br>Locates an existing mamaSourceGroup in the specified sourceGroupManager with the specified string 'name' identifier. Returns the source, or null if no source was located in the source group manager.  |
| void | **[add](classWombat_1_1MamaSourceGroupManager.html#function-add)**([MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) sourceGroup)<br>Add an existing [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) to the specified mamaSourceGroupManager. The name of the sourceGroup will be used to uniquely identify the sourceGroup within the manager.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaSourceGroupManager.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) | **[this[string sourceGroupName]](classWombat_1_1MamaSourceGroupManager.html#property-this[string-sourcegroupname])** <br>Helper, utilizing find and add  |
| int | **[size](classWombat_1_1MamaSourceGroupManager.html#property-size)** <br>Returns the number of source groups in the source group manager  |

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

### function MamaSourceGroupManager

```csharp
MamaSourceGroupManager()
```

Constructs **and** creates a new source group manager object. M:Wombat.MamaWrapper.::ctor

### function destroy

```csharp
void destroy()
```

Destroy the source. A synonym to the [MamaWrapper.Dispose]() method. 

### function GetEnumerator

```csharp
IEnumerator GetEnumerator()
```

Provides an enumerator over the source groups 

### function create

```csharp
MamaSourceGroup create(
    string name
)
```

Create a new mamaSourceGroup and add it to the manager. 

**Parameters**: 

  * **name** The string identifier for the mamaSourceGroup.


**Return**: The added source group

### function findOrCreate

```csharp
MamaSourceGroup findOrCreate(
    string name
)
```

Locates an existing mamaSourceGroup for the given name. If none exists creates a new mamaSource and adds to the sourceGroupManager. 

**Parameters**: 

  * **name** The string identifier for the mamaSourceGroup


**Return**: The found (or added) source group

### function find

```csharp
MamaSourceGroup find(
    string name
)
```

Locates an existing mamaSourceGroup in the specified sourceGroupManager with the specified string 'name' identifier. Returns the source, or null if no source was located in the source group manager. 

**Parameters**: 

  * **name** The string identifier for the required mamaSourceGroup.


**Return**: 

### function add

```csharp
void add(
    MamaSourceGroup sourceGroup
)
```

Add an existing [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) to the specified mamaSourceGroupManager. The name of the sourceGroup will be used to uniquely identify the sourceGroup within the manager. 

**Parameters**: 

  * **sourceGroup** The mamaSourceGroup being added to the specified [MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html)


## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


## Public Property Documentation

### property this[string sourceGroupName]

```csharp
MamaSourceGroup this[string sourceGroupName];
```

Helper, utilizing find and add 

### property size

```csharp
int size;
```

Returns the number of source groups in the source group manager 

-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100