---
title: Wombat::MamdaTradeSide
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeSide





## Public Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[mamdaTradeSide](classWombat_1_1MamdaTradeSide.html#enum-mamdatradeside)** { TRADE_SIDE_UNKNOWN = 0, TRADE_SIDE_BUY = 1, TRADE_SIDE_SELL = 2}<br>An enumeration representing trade side. The value 0 maps to Unknown. The value 1 maps to Buy. The value 2 maps to Sell.  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| string | **[toString](classWombat_1_1MamdaTradeSide.html#function-tostring)**(short tradeSide) |
| [MamdaTradeSide.mamdaTradeSide](classWombat_1_1MamdaTradeSide.html#enum-mamdatradeside) | **[mamdaTradeSideFromString](classWombat_1_1MamdaTradeSide.html#function-mamdatradesidefromstring)**(string tradeSide) |
| void | **[setState](classWombat_1_1MamdaTradeSide.html#function-setstate)**(short side) |
| short | **[getState](classWombat_1_1MamdaTradeSide.html#function-getstate)**() |

## Public Types Documentation

### enum mamdaTradeSide

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TRADE_SIDE_UNKNOWN | 0|   |
| TRADE_SIDE_BUY | 1|   |
| TRADE_SIDE_SELL | 2|   |



An enumeration representing trade side. The value 0 maps to Unknown. The value 1 maps to Buy. The value 2 maps to Sell. 

## Public Functions Documentation

### function toString

```csharp
static string toString(
    short tradeSide
)
```


### function mamdaTradeSideFromString

```csharp
static MamdaTradeSide.mamdaTradeSide mamdaTradeSideFromString(
    string tradeSide
)
```


### function setState

```csharp
void setState(
    short side
)
```


### function getState

```csharp
short getState()
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100