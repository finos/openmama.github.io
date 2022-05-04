---
title: Wombat::MamdaOrderImbalanceSide
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceSide





## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[OrderImbalanceSide_](classWombat_1_1MamdaOrderImbalanceSide.html#enum-orderimbalanceside-)** { ASK_SIDE_IMBALANCE_VALUE = 0, BUY_SIDE_IMBALANCE_VALUE, NO_IMBALANCE_SIDE_VALUE} |
| typedef enum [Wombat::MamdaOrderImbalanceSide::OrderImbalanceSide_](classWombat_1_1MamdaOrderImbalanceSide.html#enum-orderimbalanceside-) | **[OrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html#typedef-orderimbalanceside)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html#function-mamdaorderimbalanceside)**() |
| | **[~MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html#function-~mamdaorderimbalanceside)**() |
| const char * | **[valueToString](classWombat_1_1MamdaOrderImbalanceSide.html#function-valuetostring)**(const int value) |

## Public Types Documentation

### enum OrderImbalanceSide_

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ASK_SIDE_IMBALANCE_VALUE | 0|  ASK_SIDE_IMBALANCE  |
| BUY_SIDE_IMBALANCE_VALUE | |  BID_SIDE_IMBALANCE  |
| NO_IMBALANCE_SIDE_VALUE | |  NO_IMBALANCE  |




### typedef OrderImbalanceSide

```cpp
typedef enum Wombat::MamdaOrderImbalanceSide::OrderImbalanceSide_ Wombat::MamdaOrderImbalanceSide::OrderImbalanceSide;
```


## Public Functions Documentation

### function MamdaOrderImbalanceSide

```cpp
inline MamdaOrderImbalanceSide()
```


### function ~MamdaOrderImbalanceSide

```cpp
~MamdaOrderImbalanceSide()
```


### function valueToString

```cpp
const char * valueToString(
    const int value
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100