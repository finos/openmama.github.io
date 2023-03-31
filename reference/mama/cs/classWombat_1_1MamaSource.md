---
title: Wombat::MamaSource
summary: A MamaSource maintains information about a data source, including the quality of the data coming from that source 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSource



A [MamaSource]() maintains information about a data source, including the quality of the data coming from that source 

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), [Wombat.ISourceManager](interfaceWombat_1_1ISourceManager.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSource](classWombat_1_1MamaSource.html#function-mamasource)**()<br>Constructs **and** creates a new source object. M:Wombat.MamaWrapper.::ctor |
| void | **[destroy](classWombat_1_1MamaSource.html#function-destroy)**()<br>Destroy the source. A synonym to the [MamaWrapper.Dispose]() method.  |
| void | **[clear](classWombat_1_1MamaSource.html#function-clear)**()<br>Clear the source  |
| [MamaSource](classWombat_1_1MamaSource.html) | **[create](classWombat_1_1MamaSource.html#function-create)**(string name)<br>Implements [ISourceManager.create](interfaceWombat_1_1ISourceManager.html#function-create) |
| [MamaSource](classWombat_1_1MamaSource.html) | **[findOrCreate](classWombat_1_1MamaSource.html#function-findorcreate)**(string name)<br>Implements [ISourceManager.findOrCreate](interfaceWombat_1_1ISourceManager.html#function-findorcreate) |
| [MamaSource](classWombat_1_1MamaSource.html) | **[find](classWombat_1_1MamaSource.html#function-find)**(string name)<br>Implements [ISourceManager.find](interfaceWombat_1_1ISourceManager.html#function-find) |
| void | **[add](classWombat_1_1MamaSource.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) source)<br>Implements [ISourceManager.add(MamaSource)](interfaceWombat_1_1ISourceManager.html#function-add) |
| void | **[add](classWombat_1_1MamaSource.html#function-add)**(string name, [MamaSource](classWombat_1_1MamaSource.html) source)<br>Implements [ISourceManager.add(System.String, MamaSource)] |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaSource.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| string | **[id](classWombat_1_1MamaSource.html#property-id)** <br>Gets or sets the ID of the source  |
| string | **[displayId](classWombat_1_1MamaSource.html#property-displayid)** <br>Gets or sets the display ID of the source  |
| string | **[mappedId](classWombat_1_1MamaSource.html#property-mappedid)** <br>Gets or sets the mapped ID of the source The mapped ID is the ID that parent source mManager has mapped this source as.  |
| [mamaQuality](namespaceWombat.html#enum-mamaquality) | **[quality](classWombat_1_1MamaSource.html#property-quality)** <br>Gets or sets the quality of the source  |
| [mamaSourceState](namespaceWombat.html#enum-mamasourcestate) | **[state](classWombat_1_1MamaSource.html#property-state)** <br>Gets or sets the state of the source  |
| string | **[stateAsString](classWombat_1_1MamaSource.html#property-stateasstring)** <br>Get the stringified representation of the source state.  |
| [MamaSource](classWombat_1_1MamaSource.html) | **[parent](classWombat_1_1MamaSource.html#property-parent)** <br>Gets or sets the parent for the source. When the parent is set the source is added to the parent source mManager.  |
| string | **[symbolNamespace](classWombat_1_1MamaSource.html#property-symbolnamespace)** <br>Gets or sets the publisher specific source name for this source. E.g. This could be "NASDAQ" for a UTP PAPA publisher.  |
| string | **[transportName](classWombat_1_1MamaSource.html#property-transportname)** <br>Gets or sets the name of the [MamaTransport]() on which this describes a valid source of  |
| [MamaTransport](classWombat_1_1MamaTransport.html) | **[transport](classWombat_1_1MamaSource.html#property-transport)** <br>Returns or associates a transport object with the source.  |

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

### function MamaSource

```csharp
MamaSource()
```

Constructs **and** creates a new source object. M:Wombat.MamaWrapper.::ctor

### function destroy

```csharp
void destroy()
```

Destroy the source. A synonym to the [MamaWrapper.Dispose]() method. 

### function clear

```csharp
void clear()
```

Clear the source 

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

Implements the destruction of the underlying peer object [MamaWrapper.DestroyNativePeer]()

**Return**: MAMA Status code

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


## Public Property Documentation

### property id

```csharp
string id;
```

Gets or sets the ID of the source 

### property displayId

```csharp
string displayId;
```

Gets or sets the display ID of the source 

### property mappedId

```csharp
string mappedId;
```

Gets or sets the mapped ID of the source The mapped ID is the ID that parent source mManager has mapped this source as. 

### property quality

```csharp
mamaQuality quality;
```

Gets or sets the quality of the source 

### property state

```csharp
mamaSourceState state;
```

Gets or sets the state of the source 

### property stateAsString

```csharp
string stateAsString;
```

Get the stringified representation of the source state. 

### property parent

```csharp
MamaSource parent;
```

Gets or sets the parent for the source. When the parent is set the source is added to the parent source mManager. 

### property symbolNamespace

```csharp
string symbolNamespace;
```

Gets or sets the publisher specific source name for this source. E.g. This could be "NASDAQ" for a UTP PAPA publisher. 

### property transportName

```csharp
string transportName;
```

Gets or sets the name of the [MamaTransport]() on which this describes a valid source of 

### property transport

```csharp
MamaTransport transport;
```

Returns or associates a transport object with the source. 

-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100