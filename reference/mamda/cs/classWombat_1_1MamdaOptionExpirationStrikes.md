---
title: Wombat::MamdaOptionExpirationStrikes
summary: A class that represents a set of strike prices at a particlar expiration date. Each strike price of which contains a set of option contracts, each of which contains exchange-specific contracts. To access a contract set for a given strike price, use the get method (inherited from TreeMap). 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionExpirationStrikes



A class that represents a set of strike prices at a particlar expiration date. Each strike price of which contains a set of option contracts, each of which contains exchange-specific contracts. To access a contract set for a given strike price, use the get method (inherited from TreeMap). 

Inherits from [Wombat.Containers.TreeMap](classWombat_1_1Containers_1_1TreeMap.html), [Wombat.Containers.SortedMap](interfaceWombat_1_1Containers_1_1SortedMap.html), ICloneable, [Wombat.Containers.Map](interfaceWombat_1_1Containers_1_1Map.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionExpirationStrikes](classWombat_1_1MamdaOptionExpirationStrikes.html#function-mamdaoptionexpirationstrikes)**() |
| | **[MamdaOptionExpirationStrikes](classWombat_1_1MamdaOptionExpirationStrikes.html#function-mamdaoptionexpirationstrikes)**([MamdaOptionExpirationStrikes](classWombat_1_1MamdaOptionExpirationStrikes.html) copy) |
| void | **[trimStrikes](classWombat_1_1MamdaOptionExpirationStrikes.html#function-trimstrikes)**([SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) strikeSet)<br>Trim the current set of strike prices to the given set.  |

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

### function MamdaOptionExpirationStrikes

```csharp
MamdaOptionExpirationStrikes()
```


### function MamdaOptionExpirationStrikes

```csharp
MamdaOptionExpirationStrikes(
    MamdaOptionExpirationStrikes copy
)
```


### function trimStrikes

```csharp
void trimStrikes(
    SortedSet strikeSet
)
```

Trim the current set of strike prices to the given set. 

**Parameters**: 

  * **strikeSet** 


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100