---
title: com::wombat::mamda::options::MamdaOptionExpirationDateSet
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionExpirationDateSet



 [More...](#detailed-description)

Inherits from TreeMap

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html#function-mamdaoptionexpirationdateset)**() |
| | **[MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html#function-mamdaoptionexpirationdateset)**([MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html) copy) |
| [MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html) | **[getExpirationsBefore](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html#function-getexpirationsbefore)**(Date date) |
| [MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html) | **[getExpirations](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html#function-getexpirations)**(int numExpirations) |
| String | **[toString](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html#function-tostring)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionExpirationDateSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationDateSet.html#function-mamdaoptionexpirationdateset)**(SortedMap map) |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionExpirationDateSet;
```


A class that represents a set of expiration dates, each of which contains a set of strike prices ([MamdaOptionStrikeSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionStrikeSet.html)), each of which contains a set of option contracts ([MamdaOptionContractSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html)), each of which contains exchange-specific contracts. To access a set of strike prices for a given expiration date, use the get method (inherited from TreeMap). 

## Public Functions Documentation

### function MamdaOptionExpirationDateSet

```java
inline MamdaOptionExpirationDateSet()
```


### function MamdaOptionExpirationDateSet

```java
inline MamdaOptionExpirationDateSet(
    MamdaOptionExpirationDateSet copy
)
```


### function getExpirationsBefore

```java
inline MamdaOptionExpirationDateSet getExpirationsBefore(
    Date date
)
```


### function getExpirations

```java
inline MamdaOptionExpirationDateSet getExpirations(
    int numExpirations
)
```


### function toString

```java
inline String toString()
```


## Protected Functions Documentation

### function MamdaOptionExpirationDateSet

```java
inline MamdaOptionExpirationDateSet(
    SortedMap map
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100