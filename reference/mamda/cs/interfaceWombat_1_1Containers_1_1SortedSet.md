---
title: Wombat::Containers::SortedSet
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Containers::SortedSet





Inherits from [Wombat.Containers.Set](interfaceWombat_1_1Containers_1_1Set.html), [Wombat.Containers.Collection](interfaceWombat_1_1Containers_1_1Collection.html), [Wombat.Containers.Iterable](interfaceWombat_1_1Containers_1_1Iterable.html)

Inherited by [Wombat.Containers.TreeSet](classWombat_1_1Containers_1_1TreeSet.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) | **[comparator](interfaceWombat_1_1Containers_1_1SortedSet.html#function-comparator)**() |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[subSet](interfaceWombat_1_1Containers_1_1SortedSet.html#function-subset)**(object from, object to) |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[headSet](interfaceWombat_1_1Containers_1_1SortedSet.html#function-headset)**(object to) |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[tailSet](interfaceWombat_1_1Containers_1_1SortedSet.html#function-tailset)**(object from) |
| object | **[first](interfaceWombat_1_1Containers_1_1SortedSet.html#function-first)**() |
| object | **[last](interfaceWombat_1_1Containers_1_1SortedSet.html#function-last)**() |

## Additional inherited members

**Public Functions inherited from [Wombat.Containers.Collection](interfaceWombat_1_1Containers_1_1Collection.html)**

|                | Name           |
| -------------- | -------------- |
| int | **[size](interfaceWombat_1_1Containers_1_1Collection.html#function-size)**() |
| bool | **[isEmpty](interfaceWombat_1_1Containers_1_1Collection.html#function-isempty)**() |
| bool | **[contains](interfaceWombat_1_1Containers_1_1Collection.html#function-contains)**(object o) |
| object[] | **[toArray](interfaceWombat_1_1Containers_1_1Collection.html#function-toarray)**() |
| bool | **[add](interfaceWombat_1_1Containers_1_1Collection.html#function-add)**(object o) |
| bool | **[remove](interfaceWombat_1_1Containers_1_1Collection.html#function-remove)**(object o) |
| bool | **[containsAll](interfaceWombat_1_1Containers_1_1Collection.html#function-containsall)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| bool | **[addAll](interfaceWombat_1_1Containers_1_1Collection.html#function-addall)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| bool | **[removeAll](interfaceWombat_1_1Containers_1_1Collection.html#function-removeall)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| bool | **[retainAll](interfaceWombat_1_1Containers_1_1Collection.html#function-retainall)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| void | **[clear](interfaceWombat_1_1Containers_1_1Collection.html#function-clear)**() |

**Public Functions inherited from [Wombat.Containers.Iterable](interfaceWombat_1_1Containers_1_1Iterable.html)**

|                | Name           |
| -------------- | -------------- |
| [Iterator](interfaceWombat_1_1Containers_1_1Iterator.html) | **[iterator](interfaceWombat_1_1Containers_1_1Iterable.html#function-iterator)**() |


## Public Functions Documentation

### function comparator

```csharp
Comparator comparator()
```


**Reimplemented by**: [Wombat::Containers::TreeSet::comparator](classWombat_1_1Containers_1_1TreeSet.html#function-comparator)


### function subSet

```csharp
SortedSet subSet(
    object from,
    object to
)
```


**Reimplemented by**: [Wombat::Containers::TreeSet::subSet](classWombat_1_1Containers_1_1TreeSet.html#function-subset)


### function headSet

```csharp
SortedSet headSet(
    object to
)
```


**Reimplemented by**: [Wombat::Containers::TreeSet::headSet](classWombat_1_1Containers_1_1TreeSet.html#function-headset)


### function tailSet

```csharp
SortedSet tailSet(
    object from
)
```


**Reimplemented by**: [Wombat::Containers::TreeSet::tailSet](classWombat_1_1Containers_1_1TreeSet.html#function-tailset)


### function first

```csharp
object first()
```


**Reimplemented by**: [Wombat::Containers::TreeSet::first](classWombat_1_1Containers_1_1TreeSet.html#function-first)


### function last

```csharp
object last()
```


**Reimplemented by**: [Wombat::Containers::TreeSet::last](classWombat_1_1Containers_1_1TreeSet.html#function-last)


-------------------------------

Updated on 2023-03-31 at 15:30:18 +0100