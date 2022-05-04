---
title: Wombat::MamaFieldCacheFieldVector
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaFieldCacheFieldVector



 [More...](#detailed-description)

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaFieldCacheFieldVector](classWombat_1_1MamaFieldCacheFieldVector.html#function-mamafieldcachefieldvector)**() |
| | **[~MamaFieldCacheFieldVector](classWombat_1_1MamaFieldCacheFieldVector.html#function-~mamafieldcachefieldvector)**() |
| void | **[grow](classWombat_1_1MamaFieldCacheFieldVector.html#function-grow)**(mama_size_t newSize) const |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| T * | **[mValues](classWombat_1_1MamaFieldCacheFieldVector.html#variable-mvalues)**  |
| mama_size_t | **[mSize](classWombat_1_1MamaFieldCacheFieldVector.html#variable-msize)**  |

## Detailed Description

```cpp
template <typename T >
class Wombat::MamaFieldCacheFieldVector;
```

## Protected Functions Documentation

### function MamaFieldCacheFieldVector

```cpp
inline MamaFieldCacheFieldVector()
```


### function ~MamaFieldCacheFieldVector

```cpp
inline ~MamaFieldCacheFieldVector()
```


### function grow

```cpp
inline void grow(
    mama_size_t newSize
) const
```


## Protected Attributes Documentation

### variable mValues

```cpp
T * mValues;
```


### variable mSize

```cpp
mama_size_t mSize;
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100