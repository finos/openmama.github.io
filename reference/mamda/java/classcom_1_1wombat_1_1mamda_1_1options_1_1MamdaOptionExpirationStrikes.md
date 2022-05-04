---
title: com::wombat::mamda::options::MamdaOptionExpirationStrikes
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionExpirationStrikes



 [More...](#detailed-description)

Inherits from TreeMap

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionExpirationStrikes](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationStrikes.html#function-mamdaoptionexpirationstrikes)**() |
| | **[MamdaOptionExpirationStrikes](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationStrikes.html#function-mamdaoptionexpirationstrikes)**([MamdaOptionExpirationStrikes](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationStrikes.html) copy) |
| void | **[trimStrikes](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationStrikes.html#function-trimstrikes)**(SortedSet strikeSet) |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionExpirationStrikes;
```


A class that represents a set of strike prices at a particular expiration date. Each strike price of which contains a set of option contracts, each of which contains exchange-specific contracts. To access a contract set for a given strike price, use the get method (inherited from TreeMap). 

## Public Functions Documentation

### function MamdaOptionExpirationStrikes

```java
inline MamdaOptionExpirationStrikes()
```


### function MamdaOptionExpirationStrikes

```java
inline MamdaOptionExpirationStrikes(
    MamdaOptionExpirationStrikes copy
)
```


### function trimStrikes

```java
inline void trimStrikes(
    SortedSet strikeSet
)
```


Trim the current set of strike prices to the given set. 


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100