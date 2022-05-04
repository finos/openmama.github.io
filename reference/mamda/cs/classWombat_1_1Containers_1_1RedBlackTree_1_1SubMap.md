---
title: Wombat::Containers::RedBlackTree::SubMap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Containers::RedBlackTree::SubMap





Inherits from [Wombat.Containers.SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html), [Wombat.Containers.Map](interfaceWombat_1_1Containers_1_1Map.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SubMap](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-submap)**([SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) source, bool fromStart, object fromKey, bool toEnd, object toKey) |
| [Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) | **[comparator](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-comparator)**() |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[subMap](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-submap)**(object from, object to) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[headMap](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-headmap)**(object toKey) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[tailMap](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-tailmap)**(object fromKey) |
| object | **[firstKey](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-firstkey)**() |
| object | **[lastKey](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-lastkey)**() |
| int | **[size](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-size)**() |
| bool | **[isEmpty](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-isempty)**() |
| bool | **[containsKey](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-containskey)**(object key) |
| bool | **[containsValue](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-containsvalue)**(object value) |
| object | **[valueOf](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-valueof)**(object key) |
| object | **[put](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-put)**(object key, object value) |
| object | **[remove](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-remove)**(object key) |
| void | **[putAll](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-putall)**([Map](interfaceWombat_1_1Containers_1_1Map.html) m) |
| void | **[clear](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-clear)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[keySet](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-keyset)**() |
| [Collection](interfaceWombat_1_1Containers_1_1Collection.html) | **[values](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-values)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[entrySet](classWombat_1_1Containers_1_1RedBlackTree_1_1SubMap.html#function-entryset)**() |

## Public Functions Documentation

### function SubMap

```csharp
SubMap(
    SortedMap source,
    bool fromStart,
    object fromKey,
    bool toEnd,
    object toKey
)
```


### function comparator

```csharp
Comparator comparator()
```


### function subMap

```csharp
SortedMap subMap(
    object from,
    object to
)
```


### function headMap

```csharp
SortedMap headMap(
    object toKey
)
```


### function tailMap

```csharp
SortedMap tailMap(
    object fromKey
)
```


### function firstKey

```csharp
object firstKey()
```


### function lastKey

```csharp
object lastKey()
```


### function size

```csharp
int size()
```


### function isEmpty

```csharp
bool isEmpty()
```


### function containsKey

```csharp
bool containsKey(
    object key
)
```


### function containsValue

```csharp
bool containsValue(
    object value
)
```


### function valueOf

```csharp
object valueOf(
    object key
)
```


### function put

```csharp
object put(
    object key,
    object value
)
```


### function remove

```csharp
object remove(
    object key
)
```


### function putAll

```csharp
void putAll(
    Map m
)
```


### function clear

```csharp
void clear()
```


### function keySet

```csharp
Set keySet()
```


### function values

```csharp
Collection values()
```


### function entrySet

```csharp
Set entrySet()
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100