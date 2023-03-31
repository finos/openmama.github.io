---
title: Wombat::MamaSourceGroup::iterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroup::iterator





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-iterator)**() |
| | **[iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-iterator)**(const [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & copy) |
| | **[~iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-~iterator)**() |
| [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & | **[operator=](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-operator=)**(const [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & rhs) |
| const [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & | **[operator=](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-operator=)**(const [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & rhs) const |
| [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & | **[operator++](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-operator++)**() |
| const [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & | **[operator++](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-operator++)**() const |
| bool | **[operator==](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-operator==)**(const [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-operator!=)**(const [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) & rhs) const |
| [MamaSource](classWombat_1_1MamaSource.html) * | **[operator*](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-operator*)**() |
| const [MamaSource](classWombat_1_1MamaSource.html) * | **[operator*](classWombat_1_1MamaSourceGroup_1_1iterator.html#function-operator*)**() const |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[MamaSourceGroup](classWombat_1_1MamaSourceGroup_1_1iterator.html#friend-mamasourcegroup)**  |

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

### friend MamaSourceGroup

```cpp
friend class MamaSourceGroup(
    MamaSourceGroup 
);
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100