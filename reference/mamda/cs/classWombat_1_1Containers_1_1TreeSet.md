---
title: Wombat::Containers::TreeSet
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Containers::TreeSet





Inherits from [Wombat.Containers.SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html), ICloneable, [Wombat.Containers.Set](interfaceWombat_1_1Containers_1_1Set.html), [Wombat.Containers.Collection](interfaceWombat_1_1Containers_1_1Collection.html), [Wombat.Containers.Iterable](interfaceWombat_1_1Containers_1_1Iterable.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[TreeSet](classWombat_1_1Containers_1_1TreeSet.html#function-treeset)**() |
| | **[TreeSet](classWombat_1_1Containers_1_1TreeSet.html#function-treeset)**([Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) c) |
| | **[TreeSet](classWombat_1_1Containers_1_1TreeSet.html#function-treeset)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| | **[TreeSet](classWombat_1_1Containers_1_1TreeSet.html#function-treeset)**([SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) s) |
| [Comparator](interfaceWombat_1_1Containers_1_1Comparator.html) | **[comparator](classWombat_1_1Containers_1_1TreeSet.html#function-comparator)**() |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[subSet](classWombat_1_1Containers_1_1TreeSet.html#function-subset)**(object from, object to) |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[headSet](classWombat_1_1Containers_1_1TreeSet.html#function-headset)**(object to) |
| [SortedSet](interfaceWombat_1_1Containers_1_1SortedSet.html) | **[tailSet](classWombat_1_1Containers_1_1TreeSet.html#function-tailset)**(object from) |
| object | **[first](classWombat_1_1Containers_1_1TreeSet.html#function-first)**() |
| object | **[last](classWombat_1_1Containers_1_1TreeSet.html#function-last)**() |
| int | **[size](classWombat_1_1Containers_1_1TreeSet.html#function-size)**() |
| bool | **[isEmpty](classWombat_1_1Containers_1_1TreeSet.html#function-isempty)**() |
| bool | **[contains](classWombat_1_1Containers_1_1TreeSet.html#function-contains)**(object o) |
| object[] | **[toArray](classWombat_1_1Containers_1_1TreeSet.html#function-toarray)**() |
| bool | **[add](classWombat_1_1Containers_1_1TreeSet.html#function-add)**(object o) |
| bool | **[remove](classWombat_1_1Containers_1_1TreeSet.html#function-remove)**(object o) |
| bool | **[containsAll](classWombat_1_1Containers_1_1TreeSet.html#function-containsall)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| bool | **[addAll](classWombat_1_1Containers_1_1TreeSet.html#function-addall)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| bool | **[removeAll](classWombat_1_1Containers_1_1TreeSet.html#function-removeall)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| bool | **[retainAll](classWombat_1_1Containers_1_1TreeSet.html#function-retainall)**([Collection](interfaceWombat_1_1Containers_1_1Collection.html) c) |
| void | **[clear](classWombat_1_1Containers_1_1TreeSet.html#function-clear)**() |
| [Iterator](interfaceWombat_1_1Containers_1_1Iterator.html) | **[iterator](classWombat_1_1Containers_1_1TreeSet.html#function-iterator)**() |
| object | **[Clone](classWombat_1_1Containers_1_1TreeSet.html#function-clone)**()<br>Creates a deep clone of this [TreeSet](classWombat_1_1Containers_1_1TreeSet.html) |

## Public Functions Documentation

### function TreeSet

```csharp
TreeSet()
```


### function TreeSet

```csharp
TreeSet(
    Comparator c
)
```


### function TreeSet

```csharp
TreeSet(
    Collection c
)
```


### function TreeSet

```csharp
TreeSet(
    SortedSet s
)
```


### function comparator

```csharp
Comparator comparator()
```


**Reimplements**: [Wombat::Containers::SortedSet::comparator](interfaceWombat_1_1Containers_1_1SortedSet.html#function-comparator)


### function subSet

```csharp
SortedSet subSet(
    object from,
    object to
)
```


**Reimplements**: [Wombat::Containers::SortedSet::subSet](interfaceWombat_1_1Containers_1_1SortedSet.html#function-subset)


### function headSet

```csharp
SortedSet headSet(
    object to
)
```


**Reimplements**: [Wombat::Containers::SortedSet::headSet](interfaceWombat_1_1Containers_1_1SortedSet.html#function-headset)


### function tailSet

```csharp
SortedSet tailSet(
    object from
)
```


**Reimplements**: [Wombat::Containers::SortedSet::tailSet](interfaceWombat_1_1Containers_1_1SortedSet.html#function-tailset)


### function first

```csharp
object first()
```


**Reimplements**: [Wombat::Containers::SortedSet::first](interfaceWombat_1_1Containers_1_1SortedSet.html#function-first)


### function last

```csharp
object last()
```


**Reimplements**: [Wombat::Containers::SortedSet::last](interfaceWombat_1_1Containers_1_1SortedSet.html#function-last)


### function size

```csharp
int size()
```


**Reimplements**: [Wombat::Containers::Collection::size](interfaceWombat_1_1Containers_1_1Collection.html#function-size)


### function isEmpty

```csharp
bool isEmpty()
```


**Reimplements**: [Wombat::Containers::Collection::isEmpty](interfaceWombat_1_1Containers_1_1Collection.html#function-isempty)


### function contains

```csharp
bool contains(
    object o
)
```


**Reimplements**: [Wombat::Containers::Collection::contains](interfaceWombat_1_1Containers_1_1Collection.html#function-contains)


### function toArray

```csharp
object[] toArray()
```


**Reimplements**: [Wombat::Containers::Collection::toArray](interfaceWombat_1_1Containers_1_1Collection.html#function-toarray)


### function add

```csharp
bool add(
    object o
)
```


**Reimplements**: [Wombat::Containers::Collection::add](interfaceWombat_1_1Containers_1_1Collection.html#function-add)


### function remove

```csharp
bool remove(
    object o
)
```


**Reimplements**: [Wombat::Containers::Collection::remove](interfaceWombat_1_1Containers_1_1Collection.html#function-remove)


### function containsAll

```csharp
bool containsAll(
    Collection c
)
```


**Reimplements**: [Wombat::Containers::Collection::containsAll](interfaceWombat_1_1Containers_1_1Collection.html#function-containsall)


### function addAll

```csharp
bool addAll(
    Collection c
)
```


**Reimplements**: [Wombat::Containers::Collection::addAll](interfaceWombat_1_1Containers_1_1Collection.html#function-addall)


### function removeAll

```csharp
bool removeAll(
    Collection c
)
```


**Reimplements**: [Wombat::Containers::Collection::removeAll](interfaceWombat_1_1Containers_1_1Collection.html#function-removeall)


### function retainAll

```csharp
bool retainAll(
    Collection c
)
```


**Reimplements**: [Wombat::Containers::Collection::retainAll](interfaceWombat_1_1Containers_1_1Collection.html#function-retainall)


### function clear

```csharp
void clear()
```


**Reimplements**: [Wombat::Containers::Collection::clear](interfaceWombat_1_1Containers_1_1Collection.html#function-clear)


### function iterator

```csharp
Iterator iterator()
```


**Reimplements**: [Wombat::Containers::Iterable::iterator](interfaceWombat_1_1Containers_1_1Iterable.html#function-iterator)


### function Clone

```csharp
object Clone()
```

Creates a deep clone of this [TreeSet](classWombat_1_1Containers_1_1TreeSet.html)

**Return**: 

-------------------------------

Updated on 2023-03-31 at 15:30:18 +0100