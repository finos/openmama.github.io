---
title: com::wombat::mamda::MamdaErrorSeverity
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaErrorSeverity



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| short | **[severityForErrorCode](classcom_1_1wombat_1_1mamda_1_1MamdaErrorSeverity.html#function-severityforerrorcode)**(short code) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[MAMDA_SEVERITY_OK](classcom_1_1wombat_1_1mamda_1_1MamdaErrorSeverity.html#variable-mamda-severity-ok)**  |
| final short | **[MAMDA_SEVERITY_LOW](classcom_1_1wombat_1_1mamda_1_1MamdaErrorSeverity.html#variable-mamda-severity-low)**  |
| final short | **[MAMDA_SEVERITY_HIGH](classcom_1_1wombat_1_1mamda_1_1MamdaErrorSeverity.html#variable-mamda-severity-high)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaErrorSeverity;
```


[MamdaErrorSeverity](classcom_1_1wombat_1_1mamda_1_1MamdaErrorSeverity.html) defines MAMDA error severities. The severity is a hint that can be used to determine what action to take (e.g., destroy the subscription). 

## Public Functions Documentation

### function severityForErrorCode

```java
static inline short severityForErrorCode(
    short code
)
```


## Public Attributes Documentation

### variable MAMDA_SEVERITY_OK

```java
static final short MAMDA_SEVERITY_OK = 0;
```


### variable MAMDA_SEVERITY_LOW

```java
static final short MAMDA_SEVERITY_LOW = 1;
```


### variable MAMDA_SEVERITY_HIGH

```java
static final short MAMDA_SEVERITY_HIGH = 2;
```


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100