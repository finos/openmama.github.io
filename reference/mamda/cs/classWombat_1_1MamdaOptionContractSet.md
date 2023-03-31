---
title: Wombat::MamdaOptionContractSet
summary: A class that represents a set of option contracts at a given strike price. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionContractSet



A class that represents a set of option contracts at a given strike price. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionContractSet](classWombat_1_1MamdaOptionContractSet.html#function-mamdaoptioncontractset)**() |
| void | **[setBboContract](classWombat_1_1MamdaOptionContractSet.html#function-setbbocontract)**([MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) contract)<br>Set the contract for the best bid and offer.  |
| void | **[setWombatBboContract](classWombat_1_1MamdaOptionContractSet.html#function-setwombatbbocontract)**([MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) contract)<br>Set the contract for the best bid and offer, as calculated by [Wombat](namespaceWombat.html).  |
| void | **[setExchangeContract](classWombat_1_1MamdaOptionContractSet.html#function-setexchangecontract)**(string exchange, [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) contract)<br>Set the contract for the particular exchange.  |
| [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) | **[getBboContract](classWombat_1_1MamdaOptionContractSet.html#function-getbbocontract)**()<br>Return the contract for the best bid and offer.  |
| [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) | **[getWombatBboContract](classWombat_1_1MamdaOptionContractSet.html#function-getwombatbbocontract)**()<br>Return the contract for the best bid and offer, as calculated by [Wombat](namespaceWombat.html).  |
| [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) | **[getExchangeContract](classWombat_1_1MamdaOptionContractSet.html#function-getexchangecontract)**(string exchange)<br>Return the contract for the particular exchange.  |
| [Collection](interfaceWombat_1_1Containers_1_1Collection.html) | **[getExchangeContracts](classWombat_1_1MamdaOptionContractSet.html#function-getexchangecontracts)**()<br>Return the set of individual regional exchange option contracts. The type of object in the set is a instance of [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html).  |
| [Set](interfaceWombat_1_1Containers_1_1Set.html) | **[getExchanges](classWombat_1_1MamdaOptionContractSet.html#function-getexchanges)**()<br>Return the set of individual regional exchange identifiers The type of object in the set is a instance of String.  |

## Public Functions Documentation

### function MamdaOptionContractSet

```csharp
MamdaOptionContractSet()
```


### function setBboContract

```csharp
void setBboContract(
    MamdaOptionContract contract
)
```

Set the contract for the best bid and offer. 

**Parameters**: 

  * **contract** 


### function setWombatBboContract

```csharp
void setWombatBboContract(
    MamdaOptionContract contract
)
```

Set the contract for the best bid and offer, as calculated by [Wombat](namespaceWombat.html). 

**Parameters**: 

  * **contract** 


### function setExchangeContract

```csharp
void setExchangeContract(
    string exchange,
    MamdaOptionContract contract
)
```

Set the contract for the particular exchange. 

**Parameters**: 

  * **exchange** 
  * **contract** 


### function getBboContract

```csharp
MamdaOptionContract getBboContract()
```

Return the contract for the best bid and offer. 

**Return**: 

### function getWombatBboContract

```csharp
MamdaOptionContract getWombatBboContract()
```

Return the contract for the best bid and offer, as calculated by [Wombat](namespaceWombat.html). 

**Return**: 

### function getExchangeContract

```csharp
MamdaOptionContract getExchangeContract(
    string exchange
)
```

Return the contract for the particular exchange. 

**Parameters**: 

  * **exchange** 


**Return**: 

### function getExchangeContracts

```csharp
Collection getExchangeContracts()
```

Return the set of individual regional exchange option contracts. The type of object in the set is a instance of [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html). 

**Return**: 

### function getExchanges

```csharp
Set getExchanges()
```

Return the set of individual regional exchange identifiers The type of object in the set is a instance of String. 

**Return**: 

-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100