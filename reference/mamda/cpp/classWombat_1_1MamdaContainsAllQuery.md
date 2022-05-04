---
title: Wombat::MamdaContainsAllQuery
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaContainsAllQuery





Inherits from [Wombat::MamdaQuery](classWombat_1_1MamdaQuery.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaContainsAllQuery](classWombat_1_1MamdaContainsAllQuery.html#function-mamdacontainsallquery)**(const char * field, const char * item) |
| | **[MamdaContainsAllQuery](classWombat_1_1MamdaContainsAllQuery.html#function-mamdacontainsallquery)**(const char * field, double item) |
| | **[MamdaContainsAllQuery](classWombat_1_1MamdaContainsAllQuery.html#function-mamdacontainsallquery)**(const char * field, int item) |
| bool | **[addItem](classWombat_1_1MamdaContainsAllQuery.html#function-additem)**(const char * item) |
| bool | **[addItem](classWombat_1_1MamdaContainsAllQuery.html#function-additem)**(double item) |
| bool | **[addItem](classWombat_1_1MamdaContainsAllQuery.html#function-additem)**(int item) |
| virtual bool | **[getXML](classWombat_1_1MamdaContainsAllQuery.html#function-getxml)**(char * result) |
| virtual int | **[getDepth](classWombat_1_1MamdaContainsAllQuery.html#function-getdepth)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaQuery](classWombat_1_1MamdaQuery.html)**

|                | Name           |
| -------------- | -------------- |
| bool | **[getQuery](classWombat_1_1MamdaQuery.html#function-getquery)**(char *& result) |
| void | **[setSubscriptionInfo](classWombat_1_1MamdaQuery.html#function-setsubscriptioninfo)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscInfo) |
| [MamdaSubscription](classWombat_1_1MamdaSubscription.html) * | **[getSubscriptionInfo](classWombat_1_1MamdaQuery.html#function-getsubscriptioninfo)**() |

**Protected Functions inherited from [Wombat::MamdaQuery](classWombat_1_1MamdaQuery.html)**

|                | Name           |
| -------------- | -------------- |
| | **[MamdaQuery](classWombat_1_1MamdaQuery.html#function-mamdaquery)**() |


## Public Functions Documentation

### function MamdaContainsAllQuery

```cpp
MamdaContainsAllQuery(
    const char * field,
    const char * item
)
```


### function MamdaContainsAllQuery

```cpp
MamdaContainsAllQuery(
    const char * field,
    double item
)
```


### function MamdaContainsAllQuery

```cpp
MamdaContainsAllQuery(
    const char * field,
    int item
)
```


### function addItem

```cpp
bool addItem(
    const char * item
)
```


### function addItem

```cpp
bool addItem(
    double item
)
```


### function addItem

```cpp
bool addItem(
    int item
)
```


### function getXML

```cpp
virtual bool getXML(
    char * result
)
```


**Reimplements**: [Wombat::MamdaQuery::getXML](classWombat_1_1MamdaQuery.html#function-getxml)


### function getDepth

```cpp
virtual int getDepth()
```


**Reimplements**: [Wombat::MamdaQuery::getDepth](classWombat_1_1MamdaQuery.html#function-getdepth)


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100