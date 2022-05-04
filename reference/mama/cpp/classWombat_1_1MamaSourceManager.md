---
title: Wombat::MamaSourceManager
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceManager



 [More...](#detailed-description)


`#include <MamaSourceManager.h>`

Inherited by [Wombat::MamaSource](classWombat_1_1MamaSource.html)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[iterator](classWombat_1_1MamaSourceManager_1_1iterator.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceManager](classWombat_1_1MamaSourceManager.html#function-mamasourcemanager)**() |
| virtual | **[~MamaSourceManager](classWombat_1_1MamaSourceManager.html#function-~mamasourcemanager)**() |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[create](classWombat_1_1MamaSourceManager.html#function-create)**(const char * sourceName) |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[findOrCreate](classWombat_1_1MamaSourceManager.html#function-findorcreate)**(const char * sourceName) |
| virtual [MamaSource](classWombat_1_1MamaSource.html) * | **[find](classWombat_1_1MamaSourceManager.html#function-find)**(const char * sourceName) |
| virtual const [MamaSource](classWombat_1_1MamaSource.html) * | **[find](classWombat_1_1MamaSourceManager.html#function-find)**(const char * sourceName) const |
| virtual void | **[add](classWombat_1_1MamaSourceManager.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) * source) |
| virtual void | **[add](classWombat_1_1MamaSourceManager.html#function-add)**(const char * sourceName, [MamaSource](classWombat_1_1MamaSource.html) * source) |
| mama_size_t | **[size](classWombat_1_1MamaSourceManager.html#function-size)**() const |
| [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[begin](classWombat_1_1MamaSourceManager.html#function-begin)**() |
| const_iterator | **[begin](classWombat_1_1MamaSourceManager.html#function-begin)**() const |
| [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[end](classWombat_1_1MamaSourceManager.html#function-end)**() |
| const_iterator | **[end](classWombat_1_1MamaSourceManager.html#function-end)**() const |
| mamaSourceManager | **[getCValue](classWombat_1_1MamaSourceManager.html#function-getcvalue)**() |
| const mamaSourceManager | **[getCValue](classWombat_1_1MamaSourceManager.html#function-getcvalue)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const typedef [iterator](classWombat_1_1MamaSourceManager_1_1iterator.html) | **[const_iterator](classWombat_1_1MamaSourceManager.html#variable-const-iterator)**  |

## Detailed Description

```cpp
class Wombat::MamaSourceManager;
```


A MAMA source manager maintains information about a set of data sources, including the quality of the data coming from those sources. 

## Public Functions Documentation

### function MamaSourceManager

```cpp
MamaSourceManager()
```


### function ~MamaSourceManager

```cpp
virtual ~MamaSourceManager()
```


### function create

```cpp
virtual MamaSource * create(
    const char * sourceName
)
```


### function findOrCreate

```cpp
virtual MamaSource * findOrCreate(
    const char * sourceName
)
```


### function find

```cpp
virtual MamaSource * find(
    const char * sourceName
)
```


**Reimplemented by**: [Wombat::MamaSourceDerivative::find](classWombat_1_1MamaSourceDerivative.html#function-find)


### function find

```cpp
virtual const MamaSource * find(
    const char * sourceName
) const
```


**Reimplemented by**: [Wombat::MamaSourceDerivative::find](classWombat_1_1MamaSourceDerivative.html#function-find)


### function add

```cpp
virtual void add(
    MamaSource * source
)
```


### function add

```cpp
virtual void add(
    const char * sourceName,
    MamaSource * source
)
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


### function getCValue

```cpp
inline mamaSourceManager getCValue()
```


### function getCValue

```cpp
inline const mamaSourceManager getCValue() const
```


## Public Attributes Documentation

### variable const_iterator

```cpp
const typedef iterator const_iterator;
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100