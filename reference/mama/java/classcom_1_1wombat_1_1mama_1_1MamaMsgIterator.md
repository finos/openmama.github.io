---
title: com::wombat::mama::MamaMsgIterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaMsgIterator





Inherits from Iterator

## Public Functions

|                | Name           |
| -------------- | -------------- |
| native void | **[iteratorCreate](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-iteratorcreate)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dictionary) |
| native void | **[iteratorAssociate](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-iteratorassociate)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dictionary) |
| native void | **[iteratorNext](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-iteratornext)**() |
| native boolean | **[iteratorHasNext](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-iteratorhasnext)**() |
| | **[MamaMsgIterator](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-mamamsgiterator)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) parent, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dictionary) |
| void | **[reset](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-reset)**([MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) parent, [MamaDictionary](classcom_1_1wombat_1_1mama_1_1MamaDictionary.html) dictionary) |
| Object | **[next](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-next)**() |
| boolean | **[hasNext](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-hasnext)**() |
| void | **[remove](classcom_1_1wombat_1_1mama_1_1MamaMsgIterator.html#function-remove)**() |

## Public Functions Documentation

### function iteratorCreate

```java
native void iteratorCreate(
    MamaMsg msg,
    MamaDictionary dictionary
)
```


### function iteratorAssociate

```java
native void iteratorAssociate(
    MamaMsg msg,
    MamaDictionary dictionary
)
```


### function iteratorNext

```java
native void iteratorNext()
```


### function iteratorHasNext

```java
native boolean iteratorHasNext()
```


### function MamaMsgIterator

```java
inline MamaMsgIterator(
    MamaMsg parent,
    MamaDictionary dictionary
)
```


### function reset

```java
inline void reset(
    MamaMsg parent,
    MamaDictionary dictionary
)
```


### function next

```java
inline Object next()
```


### function hasNext

```java
inline boolean hasNext()
```


### function remove

```java
inline void remove()
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100