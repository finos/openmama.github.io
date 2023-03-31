---
title: Wombat::MamaSourceManager
summary: A MamaSourceManager maintains information about a set of data sources, including the quality of the data coming from those sources. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceManager



A [MamaSourceManager]() maintains information about a set of data sources, including the quality of the data coming from those sources. 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), [Wombat.ISourceManager](interfaceWombat_1_1ISourceManager.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceManager](classWombat_1_1MamaSourceManager.html#function-mamasourcemanager)**()<br>Constructs **and** creates a new [MamaSourceManager](classWombat_1_1MamaSourceManager.html) object. M:Wombat.MamaWrapper.::ctor |
| void | **[destroy](classWombat_1_1MamaSourceManager.html#function-destroy)**()<br>Destroy the source manager. A synonym to the [MamaWrapper.Dispose]() method.  |
| [MamaSource](classWombat_1_1MamaSource.html) | **[create](classWombat_1_1MamaSourceManager.html#function-create)**(string name)<br>Implements [ISourceManager.create](interfaceWombat_1_1ISourceManager.html#function-create) |
| [MamaSource](classWombat_1_1MamaSource.html) | **[findOrCreate](classWombat_1_1MamaSourceManager.html#function-findorcreate)**(string name)<br>Implements [ISourceManager.findOrCreate](interfaceWombat_1_1ISourceManager.html#function-findorcreate) |
| [MamaSource](classWombat_1_1MamaSource.html) | **[find](classWombat_1_1MamaSourceManager.html#function-find)**(string name)<br>Implements [ISourceManager.find](interfaceWombat_1_1ISourceManager.html#function-find) |
| void | **[add](classWombat_1_1MamaSourceManager.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) source)<br>Implements [ISourceManager.add(MamaSource)](interfaceWombat_1_1ISourceManager.html#function-add) |
| void | **[add](classWombat_1_1MamaSourceManager.html#function-add)**(string name, [MamaSource](classWombat_1_1MamaSource.html) source)<br>Implements [ISourceManager.add(System.String, MamaSource)] |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaSourceManager.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]() |

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

### function MamaSourceManager

```csharp
MamaSourceManager()
```

Constructs **and** creates a new [MamaSourceManager](classWombat_1_1MamaSourceManager.html) object. M:Wombat.MamaWrapper.::ctor

### function destroy

```csharp
void destroy()
```

Destroy the source manager. A synonym to the [MamaWrapper.Dispose]() method. 

### function create

```csharp
MamaSource create(
    string name
)
```

Implements [ISourceManager.create](interfaceWombat_1_1ISourceManager.html#function-create)

**Reimplements**: [Wombat::ISourceManager::create](interfaceWombat_1_1ISourceManager.html#function-create)


### function findOrCreate

```csharp
MamaSource findOrCreate(
    string name
)
```

Implements [ISourceManager.findOrCreate](interfaceWombat_1_1ISourceManager.html#function-findorcreate)

**Reimplements**: [Wombat::ISourceManager::findOrCreate](interfaceWombat_1_1ISourceManager.html#function-findorcreate)


### function find

```csharp
MamaSource find(
    string name
)
```

Implements [ISourceManager.find](interfaceWombat_1_1ISourceManager.html#function-find)

**Reimplements**: [Wombat::ISourceManager::find](interfaceWombat_1_1ISourceManager.html#function-find)


### function add

```csharp
void add(
    MamaSource source
)
```

Implements [ISourceManager.add(MamaSource)](interfaceWombat_1_1ISourceManager.html#function-add)

**Reimplements**: [Wombat::ISourceManager::add](interfaceWombat_1_1ISourceManager.html#function-add)


### function add

```csharp
void add(
    string name,
    MamaSource source
)
```

Implements [ISourceManager.add(System.String, MamaSource)]

**Reimplements**: [Wombat::ISourceManager::add](interfaceWombat_1_1ISourceManager.html#function-add)


## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100