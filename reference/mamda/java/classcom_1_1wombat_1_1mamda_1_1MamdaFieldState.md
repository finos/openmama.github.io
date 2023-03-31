---
title: com::wombat::mamda::MamdaFieldState
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaFieldState



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html#function-tostring)**(short fieldState) |
| void | **[setState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html#function-setstate)**(short state) |
| short | **[getState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html#function-getstate)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[NOT_INITIALISED](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html#variable-not-initialised)**  |
| final short | **[NOT_MODIFIED](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html#variable-not-modified)**  |
| final short | **[MODIFIED](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html#variable-modified)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaFieldState;
```


An enumeration representing field state. MODIFIED (0) value indicates the field was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (2) value indicates that the field has never been updated 

## Public Functions Documentation

### function toString

```java
static inline String toString(
    short fieldState
)
```


**Parameters**: 

  * **fieldState** The Field State as a short. 


Convert a [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) to an appropriate, displayable string.


### function setState

```java
inline void setState(
    short state
)
```


### function getState

```java
inline short getState()
```


## Public Attributes Documentation

### variable NOT_INITIALISED

```java
static final short NOT_INITIALISED = 0;
```


### variable NOT_MODIFIED

```java
static final short NOT_MODIFIED = 1;
```


### variable MODIFIED

```java
static final short MODIFIED = 2;
```


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100