---
title: Wombat::Containers::SortedMap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Containers::SortedMap





Inherits from [Wombat.Containers.Map](interfaceWombat_1_1Containers_1_1Map.html)

Inherited by [Wombat.Containers.RedBlackTree](classWombat_1_1Containers_1_1RedBlackTree.html), [Wombat.Containers.TreeMap](classWombat_1_1Containers_1_1TreeMap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) | **[comparator](interfaceWombat_1_1Containers_1_1SortedMap.html#function-comparator)**() |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[subMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-submap)**(object from, object to) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[headMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-headmap)**(object toKey) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[tailMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-tailmap)**(object fromKey) |
| object | **[firstKey](interfaceWombat_1_1Containers_1_1SortedMap.html#function-firstkey)**() |
| object | **[lastKey](interfaceWombat_1_1Containers_1_1SortedMap.html#function-lastkey)**() |

## Additional inherited members

**Public Functions inherited from [Wombat.Containers.Map](interfaceWombat_1_1Containers_1_1Map.html)**

|                | Name           |
| -------------- | -------------- |
| int | **[size](interfaceWombat_1_1Containers_1_1Map.html#function-size)**() |
| bool | **[isEmpty](interfaceWombat_1_1Containers_1_1Map.html#function-isempty)**() |
| bool | **[containsKey](interfaceWombat_1_1Containers_1_1Map.html#function-containskey)**(object key) |
| bool | **[containsValue](interfaceWombat_1_1Containers_1_1Map.html#function-containsvalue)**(object value) |
| object | **[valueOf](interfaceWombat_1_1Containers_1_1Map.html#function-valueof)**(object key) |
| object | **[put](interfaceWombat_1_1Containers_1_1Map.html#function-put)**(object key, object value) |
| object | **[remove](interfaceWombat_1_1Containers_1_1Map.html#function-remove)**(object key) |
| void | **[putAll](interfaceWombat_1_1Containers_1_1Map.html#function-putall)**([Map](interfaceWombat_1_1Containers_1_1Map.html) m) |
| void | **[clear](interfaceWombat_1_1Containers_1_1Map.html#function-clear)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[keySet](interfaceWombat_1_1Containers_1_1Map.html#function-keyset)**() |
| [Collection](interfaceWombat_1_1Containers_1_1Collection.html) | **[values](interfaceWombat_1_1Containers_1_1Map.html#function-values)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[entrySet](interfaceWombat_1_1Containers_1_1Map.html#function-entryset)**() |


## Public Functions Documentation

### function comparator

```csharp
Comparator comparator()
```


**Reimplemented by**: [Wombat::Containers::RedBlackTree::comparator](classWombat_1_1Containers_1_1RedBlackTree.html#function-comparator), [Wombat::Containers::TreeMap::comparator](classWombat_1_1Containers_1_1TreeMap.html#function-comparator)


### function subMap

```csharp
SortedMap subMap(
    object from,
    object to
)
```


**Reimplemented by**: [Wombat::Containers::RedBlackTree::subMap](classWombat_1_1Containers_1_1RedBlackTree.html#function-submap), [Wombat::Containers::TreeMap::subMap](classWombat_1_1Containers_1_1TreeMap.html#function-submap)


### function headMap

```csharp
SortedMap headMap(
    object toKey
)
```


**Reimplemented by**: [Wombat::Containers::RedBlackTree::headMap](classWombat_1_1Containers_1_1RedBlackTree.html#function-headmap), [Wombat::Containers::TreeMap::headMap](classWombat_1_1Containers_1_1TreeMap.html#function-headmap)


### function tailMap

```csharp
SortedMap tailMap(
    object fromKey
)
```


**Reimplemented by**: [Wombat::Containers::RedBlackTree::tailMap](classWombat_1_1Containers_1_1RedBlackTree.html#function-tailmap), [Wombat::Containers::TreeMap::tailMap](classWombat_1_1Containers_1_1TreeMap.html#function-tailmap)


### function firstKey

```csharp
object firstKey()
```


**Reimplemented by**: [Wombat::Containers::RedBlackTree::firstKey](classWombat_1_1Containers_1_1RedBlackTree.html#function-firstkey), [Wombat::Containers::TreeMap::firstKey](classWombat_1_1Containers_1_1TreeMap.html#function-firstkey)


### function lastKey

```csharp
object lastKey()
```


**Reimplemented by**: [Wombat::Containers::TreeMap::lastKey](classWombat_1_1Containers_1_1TreeMap.html#function-lastkey), [Wombat::Containers::RedBlackTree::lastKey](classWombat_1_1Containers_1_1RedBlackTree.html#function-lastkey)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100