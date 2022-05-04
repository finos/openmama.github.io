---
title: com::wombat::mamda::MamdaTradeSide
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaTradeSide



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mamda_1_1MamdaTradeSide.html#function-tostring)**(short tradeSide) |
| short | **[mamdaTradeSideFromString](classcom_1_1wombat_1_1mamda_1_1MamdaTradeSide.html#function-mamdatradesidefromstring)**(String tradeSide) |
| void | **[setState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeSide.html#function-setstate)**(short side) |
| short | **[getState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeSide.html#function-getstate)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[TRADE_SIDE_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1MamdaTradeSide.html#variable-trade-side-unknown)**  |
| final short | **[TRADE_SIDE_BUY](classcom_1_1wombat_1_1mamda_1_1MamdaTradeSide.html#variable-trade-side-buy)**  |
| final short | **[TRADE_SIDE_SELL](classcom_1_1wombat_1_1mamda_1_1MamdaTradeSide.html#variable-trade-side-sell)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaTradeSide;
```


A class representing trade Side. 

## Public Functions Documentation

### function toString

```java
static inline String toString(
    short tradeSide
)
```


**Parameters**: 

  * **tradeSide** The tradeSide as a short. 


Convert a [MamdaTradeSide](classcom_1_1wombat_1_1mamda_1_1MamdaTradeSide.html) to an appropriate, displayable string.


### function mamdaTradeSideFromString

```java
static inline short mamdaTradeSideFromString(
    String tradeSide
)
```


### function setState

```java
inline void setState(
    short side
)
```


### function getState

```java
inline short getState()
```


## Public Attributes Documentation

### variable TRADE_SIDE_UNKNOWN

```java
static final short TRADE_SIDE_UNKNOWN = 0;
```


The Values of TradeSide: The value 0 maps to Unknown The value 1 maps to Buy The value 2 maps to Sell 


### variable TRADE_SIDE_BUY

```java
static final short TRADE_SIDE_BUY = 1;
```


### variable TRADE_SIDE_SELL

```java
static final short TRADE_SIDE_SELL = 2;
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100