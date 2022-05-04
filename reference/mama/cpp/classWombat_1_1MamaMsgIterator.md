---
title: Wombat::MamaMsgIterator
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaMsgIterator



 [More...](#detailed-description)


`#include <MamaMsg.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaMsgIterator](classWombat_1_1MamaMsgIterator.html#function-mamamsgiterator)**(const [MamaDictionary](classWombat_1_1MamaDictionary.html) * dictionary) |
| | **[MamaMsgIterator](classWombat_1_1MamaMsgIterator.html#function-mamamsgiterator)**() |
| | **[MamaMsgIterator](classWombat_1_1MamaMsgIterator.html#function-mamamsgiterator)**(const [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) & copy) |
| | **[~MamaMsgIterator](classWombat_1_1MamaMsgIterator.html#function-~mamamsgiterator)**() |
| void | **[SetDict](classWombat_1_1MamaMsgIterator.html#function-setdict)**(const [MamaDictionary](classWombat_1_1MamaDictionary.html) * dictionary) |
| [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) & | **[operator=](classWombat_1_1MamaMsgIterator.html#function-operator=)**(const [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) & ) |
| bool | **[operator==](classWombat_1_1MamaMsgIterator.html#function-operator==)**(const [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) & ) const |
| bool | **[operator!=](classWombat_1_1MamaMsgIterator.html#function-operator!=)**(const [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) & ) const |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) & | **[operator*](classWombat_1_1MamaMsgIterator.html#function-operator*)**() |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) * | **[operator->](classWombat_1_1MamaMsgIterator.html#function-operator->)**() |
| [MamaMsgIterator](classWombat_1_1MamaMsgIterator.html) & | **[operator++](classWombat_1_1MamaMsgIterator.html#function-operator++)**() |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| mamaMsgIterator | **[myImpl](classWombat_1_1MamaMsgIterator.html#variable-myimpl)**  |
| [MamaMsgField](classWombat_1_1MamaMsgField.html) | **[mMsgField](classWombat_1_1MamaMsgIterator.html#variable-mmsgfield)**  |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[MamaMsg](classWombat_1_1MamaMsgIterator.html#friend-mamamsg)**  |

## Detailed Description

```cpp
class Wombat::MamaMsgIterator;
```


Iterator class for mamaMsg

Once an iterator has been created it can be set to the beginning of a mamaMsg and used to iterate over the MamaMsgFields.

An iterator can only be used with one message at a time, and only one iterator can be on one message at a time

Only forward iterating is supported

The dictionary to be used with the fields can be set in the iterator 

## Public Functions Documentation

### function MamaMsgIterator

```cpp
MamaMsgIterator(
    const MamaDictionary * dictionary
)
```


### function MamaMsgIterator

```cpp
MamaMsgIterator()
```


### function MamaMsgIterator

```cpp
MamaMsgIterator(
    const MamaMsgIterator & copy
)
```


### function ~MamaMsgIterator

```cpp
~MamaMsgIterator()
```


### function SetDict

```cpp
void SetDict(
    const MamaDictionary * dictionary
)
```


### function operator=

```cpp
MamaMsgIterator & operator=(
    const MamaMsgIterator & 
)
```


### function operator==

```cpp
bool operator==(
    const MamaMsgIterator & 
) const
```


### function operator!=

```cpp
bool operator!=(
    const MamaMsgIterator & 
) const
```


### function operator*

```cpp
MamaMsgField & operator*()
```


### function operator->

```cpp
MamaMsgField * operator->()
```


### function operator++

```cpp
MamaMsgIterator & operator++()
```


## Protected Attributes Documentation

### variable myImpl

```cpp
mamaMsgIterator myImpl;
```


### variable mMsgField

```cpp
MamaMsgField mMsgField;
```


## Friends

### friend MamaMsg

```cpp
friend class MamaMsg;
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100