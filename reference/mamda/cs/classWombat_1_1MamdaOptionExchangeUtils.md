---
title: Wombat::MamdaOptionExchangeUtils
summary: A class with static utility functions for dealing with exchanges. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionExchangeUtils



A class with static utility functions for dealing with exchanges. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[isBbo](classWombat_1_1MamdaOptionExchangeUtils.html#function-isbbo)**(string exchange)<br>Return whether the exchange ID is the one used to represent the best bid and offer. Currently hardcoded to match "", "BBO" and "Z".  |
| bool | **[isWombatBbo](classWombat_1_1MamdaOptionExchangeUtils.html#function-iswombatbbo)**(string exchange)<br>Return whether the exchange ID is the one used to represent the Wombat-calculated best bid and offer. Currently hardcoded to match "BBO".  |

## Public Functions Documentation

### function isBbo

```csharp
static bool isBbo(
    string exchange
)
```

Return whether the exchange ID is the one used to represent the best bid and offer. Currently hardcoded to match "", "BBO" and "Z". 

**Parameters**: 

  * **exchange** 


**Return**: 

### function isWombatBbo

```csharp
static bool isWombatBbo(
    string exchange
)
```

Return whether the exchange ID is the one used to represent the Wombat-calculated best bid and offer. Currently hardcoded to match "BBO". 

**Parameters**: 

  * **exchange** 


**Return**: 

-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100