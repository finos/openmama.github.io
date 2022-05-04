---
title: com::wombat::mama::MamaDateTimePrecision
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDateTimePrecision





## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[getForInt](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#function-getforint)**(int value) |
| short | **[getShortValue](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#function-getshortvalue)**() |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#function-tostring)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[PREC_SECONDS](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#variable-prec-seconds)**  |
| final [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[PREC_DECISECONDS](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#variable-prec-deciseconds)**  |
| final [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[PREC_CENTISECONDS](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#variable-prec-centiseconds)**  |
| final [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[PREC_MILLISECONDS](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#variable-prec-milliseconds)**  |
| final [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[PREC_MICROSECONDS](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#variable-prec-microseconds)**  |
| final [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[PREC_DAYS](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#variable-prec-days)**  |
| final [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[PREC_MINUTES](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#variable-prec-minutes)**  |
| final [MamaDateTimePrecision](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html) | **[PREC_UNKNOWN](classcom_1_1wombat_1_1mama_1_1MamaDateTimePrecision.html#variable-prec-unknown)**  |

## Public Functions Documentation

### function getForInt

```java
static inline MamaDateTimePrecision getForInt(
    int value
)
```


Return the precision from the int value. 


### function getShortValue

```java
inline short getShortValue()
```


### function toString

```java
inline String toString()
```


## Public Attributes Documentation

### variable PREC_SECONDS

```java
static final MamaDateTimePrecision PREC_SECONDS =
        new MamaDateTimePrecision ((short) 0, "seconds");
```


### variable PREC_DECISECONDS

```java
static final MamaDateTimePrecision PREC_DECISECONDS =
        new MamaDateTimePrecision ((short) 1, "deciseconds");
```


### variable PREC_CENTISECONDS

```java
static final MamaDateTimePrecision PREC_CENTISECONDS =
        new MamaDateTimePrecision ((short) 2, "centiseconds");
```


### variable PREC_MILLISECONDS

```java
static final MamaDateTimePrecision PREC_MILLISECONDS =
        new MamaDateTimePrecision ((short) 3, "milliseconds");
```


### variable PREC_MICROSECONDS

```java
static final MamaDateTimePrecision PREC_MICROSECONDS =
        new MamaDateTimePrecision ((short) 6, "microseconds");
```


### variable PREC_DAYS

```java
static final MamaDateTimePrecision PREC_DAYS =
        new MamaDateTimePrecision ((short) 10, "days");
```


### variable PREC_MINUTES

```java
static final MamaDateTimePrecision PREC_MINUTES =
        new MamaDateTimePrecision ((short) 12, "minutes");
```


### variable PREC_UNKNOWN

```java
static final MamaDateTimePrecision PREC_UNKNOWN =
        new MamaDateTimePrecision ((short) 15, "unknown");
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100