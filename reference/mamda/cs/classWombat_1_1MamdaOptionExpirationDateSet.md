---
title: Wombat::MamdaOptionExpirationDateSet
summary: A class that represents a set of expiration dates, each of which contains a set of strike prices (MamdaOptionStrikeSet), each of which contains a set of option contracts (MamdaOptionContractSet), each of which contains exchange-specific contracts. To access a set of strike prices for a given expiration date, use the get method (inherited from TreeMap). 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionExpirationDateSet



A class that represents a set of expiration dates, each of which contains a set of strike prices ([MamdaOptionStrikeSet]()), each of which contains a set of option contracts ([MamdaOptionContractSet](classWombat_1_1MamdaOptionContractSet.html)), each of which contains exchange-specific contracts. To access a set of strike prices for a given expiration date, use the get method (inherited from TreeMap). 

Inherits from [Wombat.Containers.TreeMap](classWombat_1_1Containers_1_1TreeMap.html), [Wombat.Containers.SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html), ICloneable, [Wombat.Containers.Map](interfaceWombat_1_1Containers_1_1Map.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionExpirationDateSet](classWombat_1_1MamdaOptionExpirationDateSet.html#function-mamdaoptionexpirationdateset)**() |
| | **[MamdaOptionExpirationDateSet](classWombat_1_1MamdaOptionExpirationDateSet.html#function-mamdaoptionexpirationdateset)**([MamdaOptionExpirationDateSet](classWombat_1_1MamdaOptionExpirationDateSet.html) copy) |
| [MamdaOptionExpirationDateSet](classWombat_1_1MamdaOptionExpirationDateSet.html) | **[getExpirationsBefore](classWombat_1_1MamdaOptionExpirationDateSet.html#function-getexpirationsbefore)**(DateTime date) |
| [MamdaOptionExpirationDateSet](classWombat_1_1MamdaOptionExpirationDateSet.html) | **[getExpirations](classWombat_1_1MamdaOptionExpirationDateSet.html#function-getexpirations)**(int numExpirations) |
| String | **[toString](classWombat_1_1MamdaOptionExpirationDateSet.html#function-tostring)**() |
| override string | **[ToString](classWombat_1_1MamdaOptionExpirationDateSet.html#function-tostring)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionExpirationDateSet](classWombat_1_1MamdaOptionExpirationDateSet.html#function-mamdaoptionexpirationdateset)**([SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) map) |

## Additional inherited members

**Public Functions inherited from [Wombat.Containers.TreeMap](classWombat_1_1Containers_1_1TreeMap.html)**

|                | Name           |
| -------------- | -------------- |
| | **[TreeMap](classWombat_1_1Containers_1_1TreeMap.html#function-treemap)**() |
| | **[TreeMap](classWombat_1_1Containers_1_1TreeMap.html#function-treemap)**([Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) c) |
| | **[TreeMap](classWombat_1_1Containers_1_1TreeMap.html#function-treemap)**([Map](interfaceWombat_1_1Containers_1_1Map.html) m) |
| | **[TreeMap](classWombat_1_1Containers_1_1TreeMap.html#function-treemap)**([SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) m) |
| [Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) | **[comparator](classWombat_1_1Containers_1_1TreeMap.html#function-comparator)**() |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[subMap](classWombat_1_1Containers_1_1TreeMap.html#function-submap)**(object fromKey, object toKey) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[headMap](classWombat_1_1Containers_1_1TreeMap.html#function-headmap)**(object toKey) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[tailMap](classWombat_1_1Containers_1_1TreeMap.html#function-tailmap)**(object fromKey) |
| object | **[firstKey](classWombat_1_1Containers_1_1TreeMap.html#function-firstkey)**() |
| object | **[lastKey](classWombat_1_1Containers_1_1TreeMap.html#function-lastkey)**() |
| int | **[size](classWombat_1_1Containers_1_1TreeMap.html#function-size)**() |
| bool | **[isEmpty](classWombat_1_1Containers_1_1TreeMap.html#function-isempty)**() |
| bool | **[containsKey](classWombat_1_1Containers_1_1TreeMap.html#function-containskey)**(object key) |
| bool | **[containsValue](classWombat_1_1Containers_1_1TreeMap.html#function-containsvalue)**(object value) |
| object | **[valueOf](classWombat_1_1Containers_1_1TreeMap.html#function-valueof)**(object key) |
| object | **[put](classWombat_1_1Containers_1_1TreeMap.html#function-put)**(object key, object value) |
| object | **[remove](classWombat_1_1Containers_1_1TreeMap.html#function-remove)**(object key) |
| void | **[putAll](classWombat_1_1Containers_1_1TreeMap.html#function-putall)**([Map](interfaceWombat_1_1Containers_1_1Map.html) m) |
| void | **[clear](classWombat_1_1Containers_1_1TreeMap.html#function-clear)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[keySet](classWombat_1_1Containers_1_1TreeMap.html#function-keyset)**() |
| [Collection](interfaceWombat_1_1Containers_1_1Collection.html) | **[values](classWombat_1_1Containers_1_1TreeMap.html#function-values)**() |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[entrySet](classWombat_1_1Containers_1_1TreeMap.html#function-entryset)**() |
| object | **[Clone](classWombat_1_1Containers_1_1TreeMap.html#function-clone)**() |

**Public Functions inherited from [Wombat.Containers.SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html)**

|                | Name           |
| -------------- | -------------- |
| [Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) | **[comparator](interfaceWombat_1_1Containers_1_1SortedMap.html#function-comparator)**() |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[subMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-submap)**(object from, object to) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[headMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-headmap)**(object toKey) |
| [SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html) | **[tailMap](interfaceWombat_1_1Containers_1_1SortedMap.html#function-tailmap)**(object fromKey) |
| object | **[firstKey](interfaceWombat_1_1Containers_1_1SortedMap.html#function-firstkey)**() |
| object | **[lastKey](interfaceWombat_1_1Containers_1_1SortedMap.html#function-lastkey)**() |

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

### function MamdaOptionExpirationDateSet

```csharp
MamdaOptionExpirationDateSet()
```


### function MamdaOptionExpirationDateSet

```csharp
MamdaOptionExpirationDateSet(
    MamdaOptionExpirationDateSet copy
)
```


### function getExpirationsBefore

```csharp
MamdaOptionExpirationDateSet getExpirationsBefore(
    DateTime date
)
```


### function getExpirations

```csharp
MamdaOptionExpirationDateSet getExpirations(
    int numExpirations
)
```


### function toString

```csharp
String toString()
```


### function ToString

```csharp
override string ToString()
```


## Protected Functions Documentation

### function MamdaOptionExpirationDateSet

```csharp
MamdaOptionExpirationDateSet(
    SortedMap map
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100