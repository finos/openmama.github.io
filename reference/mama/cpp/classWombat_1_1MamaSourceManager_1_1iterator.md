---
title: Wombat::MamaSourceManager::iterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceManager::iterator





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[iterator](classWombat_1_1MamaSourceManager_1_1iterator.html#function-iterator)**() |
| | **[iterator](classWombat_1_1MamaSourceManager_1_1iterator.html#function-iterator)**(const [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & copy) |
| | **[~iterator](classWombat_1_1MamaSourceManager_1_1iterator.html#function-~iterator)**() |
| [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & | **[operator=](classWombat_1_1MamaSourceManager_1_1iterator.html#function-operator=)**(const [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & rhs) |
| const [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & | **[operator=](classWombat_1_1MamaSourceManager_1_1iterator.html#function-operator=)**(const [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & rhs) const |
| [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & | **[operator++](classWombat_1_1MamaSourceManager_1_1iterator.html#function-operator++)**() |
| const [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & | **[operator++](classWombat_1_1MamaSourceManager_1_1iterator.html#function-operator++)**() const |
| bool | **[operator==](classWombat_1_1MamaSourceManager_1_1iterator.html#function-operator==)**(const [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaSourceManager_1_1iterator.html#function-operator!=)**(const [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) & rhs) const |
| [MamaSource](classWombat_1_1MamaSource.html) * | **[operator*](classWombat_1_1MamaSourceManager_1_1iterator.html#function-operator*)**() |
| const [MamaSource](classWombat_1_1MamaSource.html) * | **[operator*](classWombat_1_1MamaSourceManager_1_1iterator.html#function-operator*)**() const |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[MamaSourceManager](classWombat_1_1MamaSourceManager_1_1iterator.html#friend-mamasourcemanager)**  |

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
MamaSource * operator*()
```


### function operator*

```cpp
const MamaSource * operator*() const
```


## Friends

### friend MamaSourceManager

```cpp
friend class MamaSourceManager;
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100