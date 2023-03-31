---
title: Wombat::MamaSourceGroupManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroupManager



 [More...](#detailed-description)


`#include <MamaSourceGroupManager.h>`

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef const [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) | **[const_iterator](classWombat_1_1MamaSourceGroupManager.html#typedef-const-iterator)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html#function-mamasourcegroupmanager)**() |
| | **[~MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html#function-~mamasourcegroupmanager)**() |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) * | **[create](classWombat_1_1MamaSourceGroupManager.html#function-create)**(const char * groupName) |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) * | **[findOrCreate](classWombat_1_1MamaSourceGroupManager.html#function-findorcreate)**(const char * groupName) |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) * | **[find](classWombat_1_1MamaSourceGroupManager.html#function-find)**(const char * groupName) |
| const [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) * | **[find](classWombat_1_1MamaSourceGroupManager.html#function-find)**(const char * groupName) const |
| mama_size_t | **[size](classWombat_1_1MamaSourceGroupManager.html#function-size)**() const |
| [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) | **[begin](classWombat_1_1MamaSourceGroupManager.html#function-begin)**() |
| [const_iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) | **[begin](classWombat_1_1MamaSourceGroupManager.html#function-begin)**() const |
| [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) | **[end](classWombat_1_1MamaSourceGroupManager.html#function-end)**() |
| [const_iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) | **[end](classWombat_1_1MamaSourceGroupManager.html#function-end)**() const |

## Detailed Description

```cpp
class Wombat::MamaSourceGroupManager;
```


A MAMA source group manager monitors a set of MAMA source groups. 

## Public Types Documentation

### typedef const_iterator

```cpp
typedef const iterator Wombat::MamaSourceGroupManager::const_iterator;
```


## Public Functions Documentation

### function MamaSourceGroupManager

```cpp
MamaSourceGroupManager()
```


### function ~MamaSourceGroupManager

```cpp
~MamaSourceGroupManager()
```


### function create

```cpp
MamaSourceGroup * create(
    const char * groupName
)
```


### function findOrCreate

```cpp
MamaSourceGroup * findOrCreate(
    const char * groupName
)
```


### function find

```cpp
MamaSourceGroup * find(
    const char * groupName
)
```


### function find

```cpp
const MamaSourceGroup * find(
    const char * groupName
) const
```


### function size

```cpp
mama_size_t size() const
```


### function begin

```cpp
iterator begin()
```


### function begin

```cpp
const_iterator begin() const
```


### function end

```cpp
iterator end()
```


### function end

```cpp
const_iterator end() const
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100