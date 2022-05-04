---
title: com::wombat::mamda::MamdaUncrossPriceInd
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaUncrossPriceInd





## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html#function-tostring)**(short ind) |
| short | **[mamdaUncrossPriceIndFromString](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html#function-mamdauncrosspriceindfromstring)**(String uncrossPriceInd) |
| void | **[set](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html#function-set)**(short ind) |
| short | **[get](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html#function-get)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[UNCROSS_NONE](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html#variable-uncross-none)**  |
| final short | **[UNCROSS_INDICATIVE](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html#variable-uncross-indicative)**  |
| final short | **[UNCROSS_FIRM](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html#variable-uncross-firm)**  |
| final short | **[UNCROSS_INSUFFICIENT_VOL](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html#variable-uncross-insufficient-vol)**  |

## Public Functions Documentation

### function toString

```java
static inline String toString(
    short ind
)
```


**Parameters**: 

  * **ind** The price Ind as a short. 


Convert a [MamdaUncrossPriceInd](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html) to an appropriate, displayable string.


### function mamdaUncrossPriceIndFromString

```java
static inline short mamdaUncrossPriceIndFromString(
    String uncrossPriceInd
)
```


### function set

```java
inline void set(
    short ind
)
```


### function get

```java
inline short get()
```


## Public Attributes Documentation

### variable UNCROSS_NONE

```java
static final short UNCROSS_NONE = 0;
```


### variable UNCROSS_INDICATIVE

```java
static final short UNCROSS_INDICATIVE = 1;
```


### variable UNCROSS_FIRM

```java
static final short UNCROSS_FIRM = 2;
```


### variable UNCROSS_INSUFFICIENT_VOL

```java
static final short UNCROSS_INSUFFICIENT_VOL = 3;
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100