---
title: Wombat::MamaFieldCache::const_iterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCache::const_iterator



 [More...](#detailed-description)


`#include <MamaFieldCache.h>`

Inherits from [Wombat::MamaFieldCache::MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html)

## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::input_iterator_tag | **[iterator_category](classWombat_1_1MamaFieldCache_1_1const__iterator.html#typedef-iterator-category)**  |
| typedef [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) | **[value_type](classWombat_1_1MamaFieldCache_1_1const__iterator.html#typedef-value-type)**  |
| typedef std::iterator_traits< [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) > | **[difference_type](classWombat_1_1MamaFieldCache_1_1const__iterator.html#typedef-difference-type)**  |
| typedef const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) * | **[pointer](classWombat_1_1MamaFieldCache_1_1const__iterator.html#typedef-pointer)**  |
| typedef const [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) & | **[reference](classWombat_1_1MamaFieldCache_1_1const__iterator.html#typedef-reference)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[const_iterator](classWombat_1_1MamaFieldCache_1_1const__iterator.html#function-const-iterator)**(const [iterator](classWombat_1_1MamaFieldCache_1_1iterator.html) & it) |
| [reference](classWombat_1_1MamaFieldCacheField.html) | **[operator*](classWombat_1_1MamaFieldCache_1_1const__iterator.html#function-operator*)**() |
| [pointer](classWombat_1_1MamaFieldCacheField.html) | **[operator->](classWombat_1_1MamaFieldCache_1_1const__iterator.html#function-operator->)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[const_iterator](classWombat_1_1MamaFieldCache_1_1const__iterator.html#function-const-iterator)**(mamaFieldCache fieldCache) |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[MamaFieldCache](classWombat_1_1MamaFieldCache_1_1const__iterator.html#friend-mamafieldcache)**  |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaFieldCache::MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-mamafieldcacheiterator)**(const [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & ) |
| | **[~MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-~mamafieldcacheiterator)**() |
| [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & | **[operator=](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-operator=)**(const [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & rhs) |
| bool | **[operator==](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-operator==)**(const [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & rhs) const |
| bool | **[operator!=](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-operator!=)**(const [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & rhs) const |
| [MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html) & | **[operator++](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-operator++)**() |

**Protected Functions inherited from [Wombat::MamaFieldCache::MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#function-mamafieldcacheiterator)**(mamaFieldCache fieldCache) |

**Protected Attributes inherited from [Wombat::MamaFieldCache::MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html)**

|                | Name           |
| -------------- | -------------- |
| mamaFieldCacheIterator | **[mIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#variable-miterator)**  |
| [MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html) | **[mField](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html#variable-mfield)**  |


## Detailed Description

```cpp
class Wombat::MamaFieldCache::const_iterator;
```


Iterator type used to iterate over the fields contained in the cache. This iterator does not allow modification of fields in the cache. 

## Public Types Documentation

### typedef iterator_category

```cpp
typedef std::input_iterator_tag Wombat::MamaFieldCache::const_iterator::iterator_category;
```


### typedef value_type

```cpp
typedef MamaFieldCacheField Wombat::MamaFieldCache::const_iterator::value_type;
```


### typedef difference_type

```cpp
typedef std::iterator_traits<MamaFieldCacheField> Wombat::MamaFieldCache::const_iterator::difference_type;
```


### typedef pointer

```cpp
typedef const MamaFieldCacheField* Wombat::MamaFieldCache::const_iterator::pointer;
```


### typedef reference

```cpp
typedef const MamaFieldCacheField& Wombat::MamaFieldCache::const_iterator::reference;
```


## Public Functions Documentation

### function const_iterator

```cpp
const_iterator(
    const iterator & it
)
```


### function operator*

```cpp
reference operator*()
```


### function operator->

```cpp
pointer operator->()
```


## Protected Functions Documentation

### function const_iterator

```cpp
const_iterator(
    mamaFieldCache fieldCache
)
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