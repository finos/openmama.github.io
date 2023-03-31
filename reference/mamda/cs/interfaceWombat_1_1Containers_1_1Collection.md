---
title: Wombat::Containers::Collection
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::Containers::Collection





Inherits from [Wombat.Containers.Iterable](interfaceWombat_1_1Containers_1_1Iterable.html)

Inherited by [Wombat.Containers.ArrayListCollection](classWombat_1_1Containers_1_1ArrayListCollection.html), [Wombat.Containers.Set](interfaceWombat_1_1Containers_1_1Set.html)

## Public Functions

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

## Additional inherited members

**Public Functions inherited from [Wombat.Containers.Iterable](interfaceWombat_1_1Containers_1_1Iterable.html)**

|                | Name           |
| -------------- | -------------- |
| [Iterator](interfaceWombat_1_1Containers_1_1Iterator.html) | **[iterator](interfaceWombat_1_1Containers_1_1Iterable.html#function-iterator)**() |


## Public Functions Documentation

### function size

```csharp
int size()
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::size](classWombat_1_1Containers_1_1ArrayListCollection.html#function-size), [Wombat::Containers::TreeSet::size](classWombat_1_1Containers_1_1TreeSet.html#function-size)


### function isEmpty

```csharp
bool isEmpty()
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::isEmpty](classWombat_1_1Containers_1_1ArrayListCollection.html#function-isempty), [Wombat::Containers::TreeSet::isEmpty](classWombat_1_1Containers_1_1TreeSet.html#function-isempty)


### function contains

```csharp
bool contains(
    object o
)
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::contains](classWombat_1_1Containers_1_1ArrayListCollection.html#function-contains), [Wombat::Containers::TreeSet::contains](classWombat_1_1Containers_1_1TreeSet.html#function-contains)


### function toArray

```csharp
object[] toArray()
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::toArray](classWombat_1_1Containers_1_1ArrayListCollection.html#function-toarray), [Wombat::Containers::TreeSet::toArray](classWombat_1_1Containers_1_1TreeSet.html#function-toarray)


### function add

```csharp
bool add(
    object o
)
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::add](classWombat_1_1Containers_1_1ArrayListCollection.html#function-add), [Wombat::Containers::TreeSet::add](classWombat_1_1Containers_1_1TreeSet.html#function-add)


### function remove

```csharp
bool remove(
    object o
)
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::remove](classWombat_1_1Containers_1_1ArrayListCollection.html#function-remove), [Wombat::Containers::TreeSet::remove](classWombat_1_1Containers_1_1TreeSet.html#function-remove)


### function containsAll

```csharp
bool containsAll(
    Collection c
)
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::containsAll](classWombat_1_1Containers_1_1ArrayListCollection.html#function-containsall), [Wombat::Containers::TreeSet::containsAll](classWombat_1_1Containers_1_1TreeSet.html#function-containsall)


### function addAll

```csharp
bool addAll(
    Collection c
)
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::addAll](classWombat_1_1Containers_1_1ArrayListCollection.html#function-addall), [Wombat::Containers::TreeSet::addAll](classWombat_1_1Containers_1_1TreeSet.html#function-addall)


### function removeAll

```csharp
bool removeAll(
    Collection c
)
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::removeAll](classWombat_1_1Containers_1_1ArrayListCollection.html#function-removeall), [Wombat::Containers::TreeSet::removeAll](classWombat_1_1Containers_1_1TreeSet.html#function-removeall)


### function retainAll

```csharp
bool retainAll(
    Collection c
)
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::retainAll](classWombat_1_1Containers_1_1ArrayListCollection.html#function-retainall), [Wombat::Containers::TreeSet::retainAll](classWombat_1_1Containers_1_1TreeSet.html#function-retainall)


### function clear

```csharp
void clear()
```


**Reimplemented by**: [Wombat::Containers::ArrayListCollection::clear](classWombat_1_1Containers_1_1ArrayListCollection.html#function-clear), [Wombat::Containers::TreeSet::clear](classWombat_1_1Containers_1_1TreeSet.html#function-clear)


-------------------------------

Updated on 2023-03-31 at 15:30:17 +0100