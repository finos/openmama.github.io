---
title: Wombat::MamdaOrderImbalanceType
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceType





## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[OrderImbalanceType_](classWombat_1_1MamdaOrderImbalanceType.html#enum-orderimbalancetype-)** { MARKET_IMBALANCE_BUY_VALUE = 16, MARKET_IMBALANCE_SELL_VALUE, NO_MARKET_IMBALANCE_VALUE, MOC_IMBALANCE_BUY_VALUE, MOC_IMBALANCE_SELL_VALUE, NO_MOC_IMBALANCE_VALUE, ORDER_IMB_VALUE, ORDER_INF_VALUE, ORDER_IMBALANCE_BUY_VALUE, ORDER_IMBALANCE_SELL_VALUE, NO_ORDER_IMBALANCE_VALUE, UNKNOWN = -99} |
| typedef enum [Wombat::MamdaOrderImbalanceType::OrderImbalanceType_](classWombat_1_1MamdaOrderImbalanceType.html#enum-orderimbalancetype-) | **[OrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html#typedef-orderimbalancetype)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[valueToString](classWombat_1_1MamdaOrderImbalanceType.html#function-valuetostring)**(const int value) |
| const int | **[stringToValue](classWombat_1_1MamdaOrderImbalanceType.html#function-stringtovalue)**(const char * type) |
| bool | **[isMamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html#function-ismamdaorderimbalancetype)**(const int value) |
| bool | **[isMamdaImbalanceOrder](classWombat_1_1MamdaOrderImbalanceType.html#function-ismamdaimbalanceorder)**(const int value) |

## Public Types Documentation

### enum OrderImbalanceType_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MARKET_IMBALANCE_BUY_VALUE | 16|  MARKET_IMBALANCE_BUY  |
| MARKET_IMBALANCE_SELL_VALUE | |  MARKET_IMBALANCE_SELL  |
| NO_MARKET_IMBALANCE_VALUE | |  NO_MARKET_IMBALANCE  |
| MOC_IMBALANCE_BUY_VALUE | |  MOC_IMBALANCE_BUY  |
| MOC_IMBALANCE_SELL_VALUE | |  MOC_IMBALANCE_SELL  |
| NO_MOC_IMBALANCE_VALUE | |  NO_MOC_IMBALANCE  |
| ORDER_IMB_VALUE | |  ORDER_IMB  |
| ORDER_INF_VALUE | |  ORDER_INF  |
| ORDER_IMBALANCE_BUY_VALUE | |  ORDER_IMBALANCE_BUY_VALUE  |
| ORDER_IMBALANCE_SELL_VALUE | |  ORDER_IMBALANCE_SELL_VALUE  |
| NO_ORDER_IMBALANCE_VALUE | |  NO_ORDER_IMBALANCE  |
| UNKNOWN | -99|  UKNOWN  |




### typedef OrderImbalanceType

```cpp
typedef enum Wombat::MamdaOrderImbalanceType::OrderImbalanceType_ Wombat::MamdaOrderImbalanceType::OrderImbalanceType;
```


## Public Functions Documentation

### function valueToString

```cpp
static const char * valueToString(
    const int value
)
```


### function stringToValue

```cpp
static const int stringToValue(
    const char * type
)
```


### function isMamdaOrderImbalanceType

```cpp
static bool isMamdaOrderImbalanceType(
    const int value
)
```


**Parameters**: 

  * **value** 


**Return**: bool 

Determines if the value is of type order imbalance 


### function isMamdaImbalanceOrder

```cpp
static bool isMamdaImbalanceOrder(
    const int value
)
```


**Parameters**: 

  * **value** 


**Return**: bool 

Determines if the value is of an order imbalance 


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100