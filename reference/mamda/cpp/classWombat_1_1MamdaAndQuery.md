---
title: Wombat::MamdaAndQuery
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAndQuery





Inherits from [Wombat::MamdaQuery](classWombat_1_1MamdaQuery.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaAndQuery](classWombat_1_1MamdaAndQuery.html#function-mamdaandquery)**([MamdaQuery](classWombat_1_1MamdaQuery.html) * query1, [MamdaQuery](classWombat_1_1MamdaQuery.html) * query2) |
| virtual bool | **[getXML](classWombat_1_1MamdaAndQuery.html#function-getxml)**(char * result) |
| virtual int | **[getDepth](classWombat_1_1MamdaAndQuery.html#function-getdepth)**() |
| void | **[addQuery](classWombat_1_1MamdaAndQuery.html#function-addquery)**([MamdaQuery](classWombat_1_1MamdaQuery.html) * query1) |

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

### function MamdaAndQuery

```cpp
MamdaAndQuery(
    MamdaQuery * query1,
    MamdaQuery * query2
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


### function addQuery

```cpp
void addQuery(
    MamdaQuery * query1
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100