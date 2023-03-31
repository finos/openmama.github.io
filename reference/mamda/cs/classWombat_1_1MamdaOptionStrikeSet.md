---
title: Wombat::MamdaOptionStrikeSet
summary: A class that represents the call and put contract sets at a given strike price. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionStrikeSet



A class that represents the call and put contract sets at a given strike price. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionStrikeSet](classWombat_1_1MamdaOptionStrikeSet.html#function-mamdaoptionstrikeset)**(DateTime expireDate, double strikePrice) |
| [MamdaOptionContractSet](classWombat_1_1MamdaOptionContractSet.html) | **[getCallSet](classWombat_1_1MamdaOptionStrikeSet.html#function-getcallset)**()<br>Return a set of call option contracts at a given strike price.  |
| [MamdaOptionContractSet](classWombat_1_1MamdaOptionContractSet.html) | **[getPutSet](classWombat_1_1MamdaOptionStrikeSet.html#function-getputset)**()<br>Return a set of put option contracts at a given strike price.  |
| DateTime | **[getExpireDate](classWombat_1_1MamdaOptionStrikeSet.html#function-getexpiredate)**()<br>Return the expiration date for the contracts at the given strike price.  |
| string | **[getExpireDateStr](classWombat_1_1MamdaOptionStrikeSet.html#function-getexpiredatestr)**()<br>Return the expiration date as a string for the contracts at the given strike price.  |
| double | **[getStrikePrice](classWombat_1_1MamdaOptionStrikeSet.html#function-getstrikeprice)**()<br>Return the strike price.  |

## Public Functions Documentation

### function MamdaOptionStrikeSet

```csharp
MamdaOptionStrikeSet(
    DateTime expireDate,
    double strikePrice
)
```


### function getCallSet

```csharp
MamdaOptionContractSet getCallSet()
```

Return a set of call option contracts at a given strike price. 

**Return**: Set of call contracts at the given strike price.

### function getPutSet

```csharp
MamdaOptionContractSet getPutSet()
```

Return a set of put option contracts at a given strike price. 

**Return**: [MamdaOptionContractSet](classWombat_1_1MamdaOptionContractSet.html) Set of put contracts at the given strike price.

### function getExpireDate

```csharp
DateTime getExpireDate()
```

Return the expiration date for the contracts at the given strike price. 

**Return**: The expiration date.

### function getExpireDateStr

```csharp
string getExpireDateStr()
```

Return the expiration date as a string for the contracts at the given strike price. 

**Return**: The expiration date.

### function getStrikePrice

```csharp
double getStrikePrice()
```

Return the strike price. 

**Return**: The strike price.

-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100