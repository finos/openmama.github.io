---
title: com::wombat::mama::MamaDayOfWeek
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDayOfWeek





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#function-mamadayofweek)**(short day, String name) |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#function-tostring)**() |
| short | **[getValue](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#function-getvalue)**() |
| [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[getDayForValue](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#function-getdayforvalue)**(short value) |
| [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[getDayForJavaDay](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#function-getdayforjavaday)**(int javaDay) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[SUNDAY](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#variable-sunday)**  |
| final [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[MONDAY](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#variable-monday)**  |
| final [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[TUESDAY](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#variable-tuesday)**  |
| final [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[WEDNESDAY](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#variable-wednesday)**  |
| final [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[THURSDAY](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#variable-thursday)**  |
| final [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[FRIDAY](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#variable-friday)**  |
| final [MamaDayOfWeek](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html) | **[SATURDAY](classcom_1_1wombat_1_1mama_1_1MamaDayOfWeek.html#variable-saturday)**  |

## Public Functions Documentation

### function MamaDayOfWeek

```java
inline MamaDayOfWeek(
    short day,
    String name
)
```


### function toString

```java
inline String toString()
```


### function getValue

```java
inline short getValue()
```


### function getDayForValue

```java
static inline MamaDayOfWeek getDayForValue(
    short value
)
```


### function getDayForJavaDay

```java
static inline MamaDayOfWeek getDayForJavaDay(
    int javaDay
)
```


## Public Attributes Documentation

### variable SUNDAY

```java
static final MamaDayOfWeek SUNDAY =
        new MamaDayOfWeek ((short) 0, "Sunday");
```


### variable MONDAY

```java
static final MamaDayOfWeek MONDAY =
        new MamaDayOfWeek ((short) 1, "Monday");
```


### variable TUESDAY

```java
static final MamaDayOfWeek TUESDAY =
        new MamaDayOfWeek ((short) 2, "Tuesday");
```


### variable WEDNESDAY

```java
static final MamaDayOfWeek WEDNESDAY =
        new MamaDayOfWeek ((short) 3, "Wednesday");
```


### variable THURSDAY

```java
static final MamaDayOfWeek THURSDAY =
        new MamaDayOfWeek ((short) 4, "Thursday");
```


### variable FRIDAY

```java
static final MamaDayOfWeek FRIDAY =
        new MamaDayOfWeek ((short) 5, "Friday");
```


### variable SATURDAY

```java
static final MamaDayOfWeek SATURDAY =
        new MamaDayOfWeek ((short) 6, "Saturday");
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100