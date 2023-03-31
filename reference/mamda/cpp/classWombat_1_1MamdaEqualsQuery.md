---
title: Wombat::MamdaEqualsQuery
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaEqualsQuery





Inherits from [Wombat::MamdaQuery](classWombat_1_1MamdaQuery.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaEqualsQuery](classWombat_1_1MamdaEqualsQuery.html#function-mamdaequalsquery)**(const char * field, const char * val) |
| | **[MamdaEqualsQuery](classWombat_1_1MamdaEqualsQuery.html#function-mamdaequalsquery)**(const char * field, double val) |
| | **[MamdaEqualsQuery](classWombat_1_1MamdaEqualsQuery.html#function-mamdaequalsquery)**(const char * field, int val) |
| | **[MamdaEqualsQuery](classWombat_1_1MamdaEqualsQuery.html#function-mamdaequalsquery)**(const char * field, bool val) |
| bool | **[addItem](classWombat_1_1MamdaEqualsQuery.html#function-additem)**(const char * item) |
| bool | **[addItem](classWombat_1_1MamdaEqualsQuery.html#function-additem)**(double item) |
| bool | **[addItem](classWombat_1_1MamdaEqualsQuery.html#function-additem)**(int item) |
| bool | **[addItem](classWombat_1_1MamdaEqualsQuery.html#function-additem)**(bool item) |
| virtual bool | **[getXML](classWombat_1_1MamdaEqualsQuery.html#function-getxml)**(char * result) |
| virtual int | **[getDepth](classWombat_1_1MamdaEqualsQuery.html#function-getdepth)**() |

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

### function MamdaEqualsQuery

```cpp
MamdaEqualsQuery(
    const char * field,
    const char * val
)
```


### function MamdaEqualsQuery

```cpp
MamdaEqualsQuery(
    const char * field,
    double val
)
```


### function MamdaEqualsQuery

```cpp
MamdaEqualsQuery(
    const char * field,
    int val
)
```


### function MamdaEqualsQuery

```cpp
MamdaEqualsQuery(
    const char * field,
    bool val
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


### function addItem

```cpp
bool addItem(
    bool item
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

Updated on 2023-03-31 at 15:29:58 +0100