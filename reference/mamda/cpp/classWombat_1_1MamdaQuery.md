---
title: Wombat::MamdaQuery
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuery





Inherited by [Wombat::MamdaAndQuery](classWombat_1_1MamdaAndQuery.html), [Wombat::MamdaContainsAllQuery](classWombat_1_1MamdaContainsAllQuery.html), [Wombat::MamdaContainsQuery](classWombat_1_1MamdaContainsQuery.html), [Wombat::MamdaDateQuery](classWombat_1_1MamdaDateQuery.html), [Wombat::MamdaEqualsQuery](classWombat_1_1MamdaEqualsQuery.html), [Wombat::MamdaOrQuery](classWombat_1_1MamdaOrQuery.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual bool | **[getXML](classWombat_1_1MamdaQuery.html#function-getxml)**(char * result) =0 |
| bool | **[getQuery](classWombat_1_1MamdaQuery.html#function-getquery)**(char *& result) |
| virtual int | **[getDepth](classWombat_1_1MamdaQuery.html#function-getdepth)**() =0 |
| void | **[setSubscriptionInfo](classWombat_1_1MamdaQuery.html#function-setsubscriptioninfo)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscInfo) |
| [MamdaSubscription](classWombat_1_1MamdaSubscription.html) * | **[getSubscriptionInfo](classWombat_1_1MamdaQuery.html#function-getsubscriptioninfo)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaQuery](classWombat_1_1MamdaQuery.html#function-mamdaquery)**() |

## Public Functions Documentation

### function getXML

```cpp
virtual bool getXML(
    char * result
) =0
```


**Reimplemented by**: [Wombat::MamdaOrQuery::getXML](classWombat_1_1MamdaOrQuery.html#function-getxml), [Wombat::MamdaAndQuery::getXML](classWombat_1_1MamdaAndQuery.html#function-getxml), [Wombat::MamdaEqualsQuery::getXML](classWombat_1_1MamdaEqualsQuery.html#function-getxml), [Wombat::MamdaDateQuery::getXML](classWombat_1_1MamdaDateQuery.html#function-getxml), [Wombat::MamdaContainsAllQuery::getXML](classWombat_1_1MamdaContainsAllQuery.html#function-getxml), [Wombat::MamdaContainsQuery::getXML](classWombat_1_1MamdaContainsQuery.html#function-getxml)


### function getQuery

```cpp
bool getQuery(
    char *& result
)
```


### function getDepth

```cpp
virtual int getDepth() =0
```


**Reimplemented by**: [Wombat::MamdaOrQuery::getDepth](classWombat_1_1MamdaOrQuery.html#function-getdepth), [Wombat::MamdaAndQuery::getDepth](classWombat_1_1MamdaAndQuery.html#function-getdepth), [Wombat::MamdaEqualsQuery::getDepth](classWombat_1_1MamdaEqualsQuery.html#function-getdepth), [Wombat::MamdaDateQuery::getDepth](classWombat_1_1MamdaDateQuery.html#function-getdepth), [Wombat::MamdaContainsAllQuery::getDepth](classWombat_1_1MamdaContainsAllQuery.html#function-getdepth), [Wombat::MamdaContainsQuery::getDepth](classWombat_1_1MamdaContainsQuery.html#function-getdepth)


### function setSubscriptionInfo

```cpp
void setSubscriptionInfo(
    MamdaSubscription * subscInfo
)
```


### function getSubscriptionInfo

```cpp
MamdaSubscription * getSubscriptionInfo()
```


## Protected Functions Documentation

### function MamdaQuery

```cpp
MamdaQuery()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100