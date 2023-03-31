---
title: Wombat::MamaFieldCache::MamaFieldCacheIterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCache::MamaFieldCacheIterator



 [More...](#detailed-description)


`#include <MamaFieldCache.h>`

Inherited by [Wombat::MamaFieldCache::const_iterator](classWombat_1_1MamaFieldCache_1_1const__iterator.html), [Wombat::MamaFieldCache::iterator](classWombat_1_1MamaFieldCache_1_1iterator.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-mamafieldcacheiterator)**(const [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & ) |
| | **[~MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-~mamafieldcacheiterator)**() |
| [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & | **[operator=](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-operator=)**(const [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & rhs) |
| bool | **[operator==](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-operator==)**(const [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-operator!=)**(const [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & rhs) const |
| [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & | **[operator++](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-operator++)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-mamafieldcacheiterator)**(mamaFieldCache fieldCache) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| mamaFieldCacheIterator | **[mIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#variable-miterator)**  |
| [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) | **[mField](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#variable-mfield)**  |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[MamaFieldCache](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#friend-mamafieldcache)**  |

## Detailed Description

```cpp
class Wombat::MamaFieldCache::MamaFieldCacheIterator;
```


The `[MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html)` class provides a way to iterate over the fields contained in the cache. Two iterators are provided: one const and one non-const. To use it use the standard C++ notation `[MamaFieldCache::iterator](classWombat_1_1MamaFieldCache_1_1iterator.html)`. 

## Public Functions Documentation

### function MamaFieldCacheIterator

```cpp
MamaFieldCacheIterator(
    const MamaFieldCacheIterator & 
)
```


### function ~MamaFieldCacheIterator

```cpp
~MamaFieldCacheIterator()
```


### function operator=

```cpp
MamaFieldCacheIterator & operator=(
    const MamaFieldCacheIterator & rhs
)
```


### function operator==

```cpp
bool operator==(
    const MamaFieldCacheIterator & rhs
) const
```


### function operator!=

```cpp
bool operator!=(
    const MamaFieldCacheIterator & rhs
) const
```


### function operator++

```cpp
MamaFieldCacheIterator & operator++()
```


## Protected Functions Documentation

### function MamaFieldCacheIterator

```cpp
MamaFieldCacheIterator(
    mamaFieldCache fieldCache
)
```


## Protected Attributes Documentation

### variable mIterator

```cpp
mamaFieldCacheIterator mIterator;
```


### variable mField

```cpp
MamaFieldCacheField mField;
```


## Friends

### friend MamaFieldCache

```cpp
friend class MamaFieldCache(
    MamaFieldCache 
);
```


-------------------------------

Updated on 2023-03-31 at 15:29:24 +0100