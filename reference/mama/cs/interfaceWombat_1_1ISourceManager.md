---
title: Wombat::ISourceManager
summary: A container of MamaSource objects. Because each MamaSource can contain sub-sources (and so on), MamaSource is also a source manager and implements this interface. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::ISourceManager



A container of [MamaSource]() objects. Because each [MamaSource]() can contain sub-sources (and so on), [MamaSource]() is also a source manager and implements this interface. 

Inherits from IDisposable

Inherited by [Wombat.MamaSource](classWombat_1_1MamaSource.html), [Wombat.MamaSourceManager](classWombat_1_1MamaSourceManager.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamaSource](classWombat_1_1MamaSource.html) | **[create](interfaceWombat_1_1ISourceManager.html#function-create)**(string name)<br>Create a new [MamaSource]() and add it to the manager.  |
| [MamaSource](classWombat_1_1MamaSource.html) | **[findOrCreate](interfaceWombat_1_1ISourceManager.html#function-findorcreate)**(string name)<br>Locates an existing [MamaSource]() for the given name. If none exists creates and adds a new [MamaSource]().  |
| [MamaSource](classWombat_1_1MamaSource.html) | **[find](interfaceWombat_1_1ISourceManager.html#function-find)**(string name)<br>Locates an existing [MamaSource]() with the specified string 'name' identifier. Returns null if no source was located.  |
| void | **[add](interfaceWombat_1_1ISourceManager.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) source)<br>Add an existing [MamaSource](). The id of the source will be used instead of the name to uniquely identify the source within the manager.  |
| void | **[add](interfaceWombat_1_1ISourceManager.html#function-add)**(string name, [MamaSource](classWombat_1_1MamaSource.html) source)<br>Add an existing [MamaSource]() using the specified name as a unique identifier.  |

## Public Functions Documentation

### function create

```csharp
MamaSource create(
    string name
)
```

Create a new [MamaSource]() and add it to the manager. 

**Parameters**: 

  * **name** The string identifier for the [MamaSource](classWombat_1_1MamaSource.html).


**Return**: The created [MamaSource](classWombat_1_1MamaSource.html) object if execution is successful.

**Reimplemented by**: [Wombat::MamaSourceManager::create](classWombat_1_1MamaSourceManager.html#function-create), [Wombat::MamaSource::create](classWombat_1_1MamaSource.html#function-create)


### function findOrCreate

```csharp
MamaSource findOrCreate(
    string name
)
```

Locates an existing [MamaSource]() for the given name. If none exists creates and adds a new [MamaSource](). 

**Parameters**: 

  * **name** The string identifier for the [MamaSource](classWombat_1_1MamaSource.html)


**Return**: The [MamaSource](classWombat_1_1MamaSource.html) object if execution is successful.

**Reimplemented by**: [Wombat::MamaSourceManager::findOrCreate](classWombat_1_1MamaSourceManager.html#function-findorcreate), [Wombat::MamaSource::findOrCreate](classWombat_1_1MamaSource.html#function-findorcreate)


### function find

```csharp
MamaSource find(
    string name
)
```

Locates an existing [MamaSource]() with the specified string 'name' identifier. Returns null if no source was located. 

**Parameters**: 

  * **name** The string identifier for the required [MamaSource](classWombat_1_1MamaSource.html)


**Return**: The [MamaSource](classWombat_1_1MamaSource.html) object if found, or null if not found (if execution is successful)

**Reimplemented by**: [Wombat::MamaSourceManager::find](classWombat_1_1MamaSourceManager.html#function-find), [Wombat::MamaSource::find](classWombat_1_1MamaSource.html#function-find)


### function add

```csharp
void add(
    MamaSource source
)
```

Add an existing [MamaSource](). The id of the source will be used instead of the name to uniquely identify the source within the manager. 

**Parameters**: 

  * **source** The [MamaSource](classWombat_1_1MamaSource.html) being added


**Reimplemented by**: [Wombat::MamaSourceManager::add](classWombat_1_1MamaSourceManager.html#function-add), [Wombat::MamaSource::add](classWombat_1_1MamaSource.html#function-add)


### function add

```csharp
void add(
    string name,
    MamaSource source
)
```

Add an existing [MamaSource]() using the specified name as a unique identifier. 

**Parameters**: 

  * **name** The string identifier for the [MamaSource](classWombat_1_1MamaSource.html)
  * **source** The [MamaSource](classWombat_1_1MamaSource.html) being added


**Reimplemented by**: [Wombat::MamaSourceManager::add](classWombat_1_1MamaSourceManager.html#function-add), [Wombat::MamaSource::add](classWombat_1_1MamaSource.html#function-add)


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100