---
title: Wombat::Containers::RedBlackTree
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Containers::RedBlackTree





Inherits from [Wombat.Containers.SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html), [Wombat.Containers.Map](interfaceWombat_1_1Containers_1_1Map.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[RedBlackTree](classWombat_1_1Containers_1_1RedBlackTree.html#function-redblacktree)**() |
| | **[RedBlackTree](classWombat_1_1Containers_1_1RedBlackTree.html#function-redblacktree)**([Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) comparator) |
| [Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) | **[comparator](classWombat_1_1Containers_1_1RedBlackTree.html#function-comparator)**() |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[subMap](classWombat_1_1Containers_1_1RedBlackTree.html#function-submap)**(object fromKey, object toKey) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[headMap](classWombat_1_1Containers_1_1RedBlackTree.html#function-headmap)**(object toKey) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[tailMap](classWombat_1_1Containers_1_1RedBlackTree.html#function-tailmap)**(object fromKey) |
| object | **[firstKey](classWombat_1_1Containers_1_1RedBlackTree.html#function-firstkey)**() |
| object | **[lastKey](classWombat_1_1Containers_1_1RedBlackTree.html#function-lastkey)**() |
| int | **[size](classWombat_1_1Containers_1_1RedBlackTree.html#function-size)**() |
| bool | **[isEmpty](classWombat_1_1Containers_1_1RedBlackTree.html#function-isempty)**() |
| bool | **[containsKey](classWombat_1_1Containers_1_1RedBlackTree.html#function-containskey)**(object key) |
| bool | **[containsValue](classWombat_1_1Containers_1_1RedBlackTree.html#function-containsvalue)**(object value) |
| object | **[valueOf](classWombat_1_1Containers_1_1RedBlackTree.html#function-valueof)**(object key) |
| object | **[put](classWombat_1_1Containers_1_1RedBlackTree.html#function-put)**(object key, object value) |
| object | **[remove](classWombat_1_1Containers_1_1RedBlackTree.html#function-remove)**(object key) |
| void | **[putAll](classWombat_1_1Containers_1_1RedBlackTree.html#function-putall)**([Map](interfaceWombat_1_1Containers_1_1Map.html) m) |
| void | **[clear](classWombat_1_1Containers_1_1RedBlackTree.html#function-clear)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[keySet](classWombat_1_1Containers_1_1RedBlackTree.html#function-keyset)**() |
| [Collection](interfaceWombat_1_1Containers_1_1Collection.html) | **[values](classWombat_1_1Containers_1_1RedBlackTree.html#function-values)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[entrySet](classWombat_1_1Containers_1_1RedBlackTree.html#function-entryset)**() |

## Public Functions Documentation

### function RedBlackTree

```csharp
RedBlackTree()
```


### function RedBlackTree

```csharp
RedBlackTree(
    Comparator comparator
)
```


### function comparator

```csharp
Comparator comparator()
```


**Reimplements**: [Wombat::Containers::SortedMap::comparator](interfaceWombat_1_1Containers_1_1SortedMap.html#function-comparator)


### function subMap

```csharp
SortedMap subMap(
    object fromKey,
    object toKey
)
```


**Reimplements**: [Wombat::Containers::SortedMap::subMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-submap)


### function headMap

```csharp
SortedMap headMap(
    object toKey
)
```


**Reimplements**: [Wombat::Containers::SortedMap::headMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-headmap)


### function tailMap

```csharp
SortedMap tailMap(
    object fromKey
)
```


**Reimplements**: [Wombat::Containers::SortedMap::tailMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-tailmap)


### function firstKey

```csharp
object firstKey()
```


**Reimplements**: [Wombat::Containers::SortedMap::firstKey](interfaceWombat_1_1Containers_1_1SortedMap.html#function-firstkey)


### function lastKey

```csharp
object lastKey()
```


**Reimplements**: [Wombat::Containers::SortedMap::lastKey](interfaceWombat_1_1Containers_1_1SortedMap.html#function-lastkey)


### function size

```csharp
int size()
```


**Reimplements**: [Wombat::Containers::Map::size](interfaceWombat_1_1Containers_1_1Map.html#function-size)


### function isEmpty

```csharp
bool isEmpty()
```


**Reimplements**: [Wombat::Containers::Map::isEmpty](interfaceWombat_1_1Containers_1_1Map.html#function-isempty)


### function containsKey

```csharp
bool containsKey(
    object key
)
```


**Reimplements**: [Wombat::Containers::Map::containsKey](interfaceWombat_1_1Containers_1_1Map.html#function-containskey)


### function containsValue

```csharp
bool containsValue(
    object value
)
```


**Reimplements**: [Wombat::Containers::Map::containsValue](interfaceWombat_1_1Containers_1_1Map.html#function-containsvalue)


### function valueOf

```csharp
object valueOf(
    object key
)
```


**Reimplements**: [Wombat::Containers::Map::valueOf](interfaceWombat_1_1Containers_1_1Map.html#function-valueof)


### function put

```csharp
object put(
    object key,
    object value
)
```


**Reimplements**: [Wombat::Containers::Map::put](interfaceWombat_1_1Containers_1_1Map.html#function-put)


### function remove

```csharp
object remove(
    object key
)
```


**Reimplements**: [Wombat::Containers::Map::remove](interfaceWombat_1_1Containers_1_1Map.html#function-remove)


### function putAll

```csharp
void putAll(
    Map m
)
```


**Reimplements**: [Wombat::Containers::Map::putAll](interfaceWombat_1_1Containers_1_1Map.html#function-putall)


### function clear

```csharp
void clear()
```


**Reimplements**: [Wombat::Containers::Map::clear](interfaceWombat_1_1Containers_1_1Map.html#function-clear)


### function keySet

```csharp
Set keySet()
```


**Reimplements**: [Wombat::Containers::Map::keySet](interfaceWombat_1_1Containers_1_1Map.html#function-keyset)


### function values

```csharp
Collection values()
```


**Reimplements**: [Wombat::Containers::Map::values](interfaceWombat_1_1Containers_1_1Map.html#function-values)


### function entrySet

```csharp
Set entrySet()
```


**Reimplements**: [Wombat::Containers::Map::entrySet](interfaceWombat_1_1Containers_1_1Map.html#function-entryset)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100