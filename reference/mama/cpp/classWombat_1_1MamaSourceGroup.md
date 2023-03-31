---
title: Wombat::MamaSourceGroup
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceGroup



 [More...](#detailed-description)


`#include <MamaSourceGroup.h>`

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef const [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) | **[const_iterator](classWombat_1_1MamaSourceGroup.html#typedef-const-iterator)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaSourceGroup](classWombat_1_1MamaSourceGroup.html#function-mamasourcegroup)**(const char * name) |
| | **[~MamaSourceGroup](classWombat_1_1MamaSourceGroup.html#function-~mamasourcegroup)**() |
| const char * | **[getName](classWombat_1_1MamaSourceGroup.html#function-getname)**() const |
| [MamaSource](classWombat_1_1MamaSource.html) * | **[find](classWombat_1_1MamaSourceGroup.html#function-find)**(const char * sourceName) |
| const [MamaSource](classWombat_1_1MamaSource.html) * | **[find](classWombat_1_1MamaSourceGroup.html#function-find)**(const char * sourceName) const |
| void | **[add](classWombat_1_1MamaSourceGroup.html#function-add)**([MamaSource](classWombat_1_1MamaSource.html) * source, mama_u32_t weight) |
| void | **[add](classWombat_1_1MamaSourceGroup.html#function-add)**(const char * sourceName, mama_u32_t weight, [MamaSource](classWombat_1_1MamaSource.html) * source) |
| void | **[setWeight](classWombat_1_1MamaSourceGroup.html#function-setweight)**(const char * sourceName, mama_u32_t weight) |
| mama_u32_t | **[getWeight](classWombat_1_1MamaSourceGroup.html#function-getweight)**(const char * sourceName) const |
| mama_size_t | **[size](classWombat_1_1MamaSourceGroup.html#function-size)**() const |
| void | **[registerStateChangeCallback](classWombat_1_1MamaSourceGroup.html#function-registerstatechangecallback)**([MamaSourceStateChangeCallback](classWombat_1_1MamaSourceStateChangeCallback.html) & cb) |
| void | **[unregisterStateChangeCallback](classWombat_1_1MamaSourceGroup.html#function-unregisterstatechangecallback)**([MamaSourceStateChangeCallback](classWombat_1_1MamaSourceStateChangeCallback.html) & cb) |
| bool | **[reevaluate](classWombat_1_1MamaSourceGroup.html#function-reevaluate)**() |
| [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) | **[begin](classWombat_1_1MamaSourceGroup.html#function-begin)**() |
| [const_iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) | **[begin](classWombat_1_1MamaSourceGroup.html#function-begin)**() const |
| [iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) | **[end](classWombat_1_1MamaSourceGroup.html#function-end)**() |
| [const_iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html) | **[end](classWombat_1_1MamaSourceGroup.html#function-end)**() const |

## Detailed Description

```cpp
class Wombat::MamaSourceGroup;
```


A MAMA source group monitors a set of MAMA sources that presumably provide a duplicate set of data. Each member of the group is given a priority and the member with the highest priority is given the mamaSourceState, MAMA_SOURCE_STATE_OK; the other members of the group are given the state, MAMA_SOURCE_STATE_OFF. 

## Public Types Documentation

### typedef const_iterator

```cpp
typedef const iterator Wombat::MamaSourceGroup::const_iterator;
```


## Public Functions Documentation

### function MamaSourceGroup

```cpp
MamaSourceGroup(
    const char * name
)
```


### function ~MamaSourceGroup

```cpp
~MamaSourceGroup()
```


### function getName

```cpp
const char * getName() const
```


### function find

```cpp
MamaSource * find(
    const char * sourceName
)
```


### function find

```cpp
const MamaSource * find(
    const char * sourceName
) const
```


### function add

```cpp
void add(
    MamaSource * source,
    mama_u32_t weight
)
```


### function add

```cpp
void add(
    const char * sourceName,
    mama_u32_t weight,
    MamaSource * source
)
```


### function setWeight

```cpp
void setWeight(
    const char * sourceName,
    mama_u32_t weight
)
```


### function getWeight

```cpp
mama_u32_t getWeight(
    const char * sourceName
) const
```


### function size

```cpp
mama_size_t size() const
```


### function registerStateChangeCallback

```cpp
void registerStateChangeCallback(
    MamaSourceStateChangeCallback & cb
)
```


**Parameters**: 

  * **cb** callback to register 


Applications interested in event notifications can register for events. 


### function unregisterStateChangeCallback

```cpp
void unregisterStateChangeCallback(
    MamaSourceStateChangeCallback & cb
)
```


**Parameters**: 

  * **cb** callback to unregister 


Applications interested in event notifications can unregister for events. 


### function reevaluate

```cpp
bool reevaluate()
```


Re-evaluate the group by checking all of the relative weights and changing the state of each [MamaSource](classWombat_1_1MamaSource.html) in the group as appropriate. Returns true if any states were changed; otherwise false. 


### function begin

```cpp
iterator begin()
```


### function begin

```cpp
const_iterator begin() const
```


### function end

```cpp
iterator end()
```


### function end

```cpp
const_iterator end() const
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100