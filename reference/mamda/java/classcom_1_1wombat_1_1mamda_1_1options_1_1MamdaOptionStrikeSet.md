---
title: com::wombat::mamda::options::MamdaOptionStrikeSet
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionStrikeSet



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionStrikeSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionStrikeSet.html#function-mamdaoptionstrikeset)**(Date expireDate, double strikePrice) |
| [MamdaOptionContractSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html) | **[getCallSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionStrikeSet.html#function-getcallset)**() |
| [MamdaOptionContractSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html) | **[getPutSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionStrikeSet.html#function-getputset)**() |
| Date | **[getExpireDate](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionStrikeSet.html#function-getexpiredate)**() |
| String | **[getExpireDateStr](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionStrikeSet.html#function-getexpiredatestr)**() |
| double | **[getStrikePrice](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionStrikeSet.html#function-getstrikeprice)**() |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionStrikeSet;
```


A class that represents the call and put contract sets at a given strike price. 

## Public Functions Documentation

### function MamdaOptionStrikeSet

```java
inline MamdaOptionStrikeSet(
    Date expireDate,
    double strikePrice
)
```


### function getCallSet

```java
inline MamdaOptionContractSet getCallSet()
```


**Return**: [MamdaOptionContractSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html) Set of call contracts at the given strike price. 

Return a set of call option contracts at a given strike price. 


### function getPutSet

```java
inline MamdaOptionContractSet getPutSet()
```


**Return**: [MamdaOptionContractSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html) Set of put contracts at the given strike price. 

Return a set of put option contracts at a given strike price. 


### function getExpireDate

```java
inline Date getExpireDate()
```


**Return**: Date The expiration date. 

Return the expiration date for the contracts at the given strike price. 


### function getExpireDateStr

```java
inline String getExpireDateStr()
```


**Return**: String The expiration date. 

Return the expiration date as a string for the contracts at the given strike price. 


### function getStrikePrice

```java
inline double getStrikePrice()
```


**Return**: double The strike price. 

Return the strike price. 


-------------------------------

Updated on 2023-03-31 at 15:30:38 +0100