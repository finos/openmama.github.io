---
title: Wombat::MamaSourceGroupManager::iterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroupManager::iterator





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-iterator)**() |
| | **[iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-iterator)**(const [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & copy) |
| | **[~iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-~iterator)**() |
| [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & | **[operator=](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-operator=)**(const [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & rhs) |
| const [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & | **[operator=](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-operator=)**(const [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & rhs) const |
| [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & | **[operator++](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-operator++)**() |
| const [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & | **[operator++](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-operator++)**() const |
| bool | **[operator==](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-operator==)**(const [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-operator!=)**(const [iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html) & rhs) const |
| [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) * | **[operator*](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-operator*)**() |
| const [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) * | **[operator*](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#function-operator*)**() const |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager_1_1iterator.html#friend-mamasourcegroupmanager)**  |

## Public Functions Documentation

### function iterator

```cpp
iterator()
```


### function iterator

```cpp
iterator(
    const iterator & copy
)
```


### function ~iterator

```cpp
~iterator()
```


### function operator=

```cpp
iterator & operator=(
    const iterator & rhs
)
```


### function operator=

```cpp
const iterator & operator=(
    const iterator & rhs
) const
```


### function operator++

```cpp
iterator & operator++()
```


### function operator++

```cpp
const iterator & operator++() const
```


### function operator==

```cpp
bool operator==(
    const iterator & rhs
) const
```


### function operator!=

```cpp
bool operator!=(
    const iterator & rhs
) const
```


### function operator*

```cpp
MamaSourceGroup * operator*()
```


### function operator*

```cpp
const MamaSourceGroup * operator*() const
```


## Friends

### friend MamaSourceGroupManager

```cpp
friend class MamaSourceGroupManager;
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100