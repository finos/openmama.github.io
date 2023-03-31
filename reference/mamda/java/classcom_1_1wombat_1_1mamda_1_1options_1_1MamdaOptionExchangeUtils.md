---
title: com::wombat::mamda::options::MamdaOptionExchangeUtils
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionExchangeUtils



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| boolean | **[isBbo](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExchangeUtils.html#function-isbbo)**(String exchange) |
| boolean | **[isWombatBbo](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExchangeUtils.html#function-iswombatbbo)**(String exchange) |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionExchangeUtils;
```


A class with static utility functions for dealing with exchanges. 

## Public Functions Documentation

### function isBbo

```java
static inline boolean isBbo(
    String exchange
)
```


Return whether the exchange ID is the one used to represent the best bid and offer. Currently hardcoded to match "", "BBO" and "Z". 


### function isWombatBbo

```java
static inline boolean isWombatBbo(
    String exchange
)
```


Return whether the exchange ID is the one used to represent the NYSE Technolgoies calculated best bid and offer. Currently hardcoded to match "BBO". 


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100