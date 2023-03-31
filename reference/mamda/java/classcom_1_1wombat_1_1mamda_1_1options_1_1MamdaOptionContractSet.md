---
title: com::wombat::mamda::options::MamdaOptionContractSet
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionContractSet



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionContractSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-mamdaoptioncontractset)**() |
| void | **[setBboContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-setbbocontract)**([MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract) |
| void | **[setWombatBboContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-setwombatbbocontract)**([MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract) |
| void | **[setExchangeContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-setexchangecontract)**(String exchange, [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract) |
| [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) | **[getBboContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-getbbocontract)**() |
| [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) | **[getWombatBboContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-getwombatbbocontract)**() |
| [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) | **[getExchangeContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-getexchangecontract)**(String exchange) |
| Collection | **[getExchangeContracts](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-getexchangecontracts)**() |
| Set | **[getExchanges](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html#function-getexchanges)**() |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionContractSet;
```


A class that represents a set of option contracts at a given strike price. 

## Public Functions Documentation

### function MamdaOptionContractSet

```java
inline MamdaOptionContractSet()
```


### function setBboContract

```java
inline void setBboContract(
    MamdaOptionContract contract
)
```


Set the contract for the best bid and offer. 


### function setWombatBboContract

```java
inline void setWombatBboContract(
    MamdaOptionContract contract
)
```


Set the contract for the best bid and offer, as calculated by NYSE Technologies. 


### function setExchangeContract

```java
inline void setExchangeContract(
    String exchange,
    MamdaOptionContract contract
)
```


Set the contract for the particular exchange. 


### function getBboContract

```java
inline MamdaOptionContract getBboContract()
```


Return the contract for the best bid and offer. 


### function getWombatBboContract

```java
inline MamdaOptionContract getWombatBboContract()
```


Return the contract for the best bid and offer, as calculated by NYSE Technologies. 


### function getExchangeContract

```java
inline MamdaOptionContract getExchangeContract(
    String exchange
)
```


Return the contract for the particular exchange. 


### function getExchangeContracts

```java
inline Collection getExchangeContracts()
```


Return the set of individual regional exchange option contracts. The type of object in the set is a instance of [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html). 


### function getExchanges

```java
inline Set getExchanges()
```


Return the set of individual regional exchange identifiers. The type of object in the set is a instance of String. 


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100