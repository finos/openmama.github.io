---
title: Wombat::MamaSymbolMapFile
summary: A file-based symbol mapper 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSymbolMapFile



A file-based symbol mapper  [More...](#detailed-description)

Inherits from [Wombat.MamaWrapper](classWombat_1_1MamaWrapper.html), IDisposable

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html#function-mamasymbolmapfile)**()<br>M:Wombat.MamaWrapper.::ctor  |
| void | **[create](classWombat_1_1MamaSymbolMapFile.html#function-create)**()<br>Create the object  |
| void | **[load](classWombat_1_1MamaSymbolMapFile.html#function-load)**(string fileName)<br>(Re)Load the map for the file-based symbol mapper.  |
| void | **[addMap](classWombat_1_1MamaSymbolMapFile.html#function-addmap)**(string fromSymbol, string toSymbol)<br>Add additional individual symbology mapping.  |
| int | **[map](classWombat_1_1MamaSymbolMapFile.html#function-map)**(ref string result, string symbol, int maxLen)<br>Perform a mapping from the file-based symbol mapper.  |
| int | **[revMap](classWombat_1_1MamaSymbolMapFile.html#function-revmap)**(ref string result, string symbol, int maxLen)<br>Perform a reverse mapping from the file-based symbol mapper.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual override [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) | **[DestroyNativePeer](classWombat_1_1MamaSymbolMapFile.html#function-destroynativepeer)**()<br>Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]() |

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
class Wombat::MamaSymbolMapFile;
```

A file-based symbol mapper 

Use [MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html)[load()](classWombat_1_1MamaSymbolMapFile.html#function-load) to open the file. If the file exists, its contents should be a two columns of data, with the columns separated by white space. A matching symbol of the left column is mapped to the symbol in the right column. When performing the mapping, if the symbol does not match anything in the file (or the file cannot be found), then the original symbol is used (i.e. no mapping) 

## Public Functions Documentation

### function MamaSymbolMapFile

```csharp
MamaSymbolMapFile()
```

M:Wombat.MamaWrapper.::ctor 

### function create

```csharp
void create()
```

Create the object 

### function load

```csharp
void load(
    string fileName
)
```

(Re)Load the map for the file-based symbol mapper. 

### function addMap

```csharp
void addMap(
    string fromSymbol,
    string toSymbol
)
```

Add additional individual symbology mapping. 

### function map

```csharp
int map(
    ref string result,
    string symbol,
    int maxLen
)
```

Perform a mapping from the file-based symbol mapper. 

### function revMap

```csharp
int revMap(
    ref string result,
    string symbol,
    int maxLen
)
```

Perform a reverse mapping from the file-based symbol mapper. 

## Protected Functions Documentation

### function DestroyNativePeer

```csharp
virtual override MamaStatus.mamaStatus DestroyNativePeer()
```

Implements the destruction of the underlying peer object. [MamaWrapper.DestroyNativePeer]()

**Reimplements**: [Wombat::MamaWrapper::DestroyNativePeer](classWombat_1_1MamaWrapper.html#function-destroynativepeer)


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100