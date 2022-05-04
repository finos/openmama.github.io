---
title: Wombat::MamdaDateQuery
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaDateQuery





Inherits from [Wombat::MamdaQuery](classWombat_1_1MamdaQuery.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaDateQuery](classWombat_1_1MamdaDateQuery.html#function-mamdadatequery)**(MamaDateTime & start, MamaDateTime & end) |
| virtual bool | **[getXML](classWombat_1_1MamdaDateQuery.html#function-getxml)**(char * result) |
| virtual int | **[getDepth](classWombat_1_1MamdaDateQuery.html#function-getdepth)**() |

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

### function MamdaDateQuery

```cpp
MamdaDateQuery(
    MamaDateTime & start,
    MamaDateTime & end
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