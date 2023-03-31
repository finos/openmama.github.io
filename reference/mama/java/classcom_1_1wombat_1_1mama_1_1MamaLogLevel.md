---
title: com::wombat::mama::MamaLogLevel
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaLogLevel





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[getValue](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#function-getvalue)**() |
| [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[tryStringToLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#function-trystringtologlevel)**(String level) |
| [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[getMamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#function-getmamaloglevel)**(int level) |
| [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[getMamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#function-getmamaloglevel)**(Level level) |
| Level | **[getLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#function-getlevel)**([MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) mamalevel) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[OFF](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#variable-off)**  |
| final [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[SEVERE](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#variable-severe)**  |
| final [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[ERROR](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#variable-error)**  |
| final [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[WARN](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#variable-warn)**  |
| final [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[NORMAL](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#variable-normal)**  |
| final [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[FINE](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#variable-fine)**  |
| final [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[FINER](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#variable-finer)**  |
| final [MamaLogLevel](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html) | **[FINEST](classcom_1_1wombat_1_1mama_1_1MamaLogLevel.html#variable-finest)**  |

## Public Functions Documentation

### function getValue

```java
inline int getValue()
```


### function tryStringToLogLevel

```java
static inline MamaLogLevel tryStringToLogLevel(
    String level
)
```


### function getMamaLogLevel

```java
static inline MamaLogLevel getMamaLogLevel(
    int level
)
```


### function getMamaLogLevel

```java
static inline MamaLogLevel getMamaLogLevel(
    Level level
)
```


### function getLevel

```java
static inline Level getLevel(
    MamaLogLevel mamalevel
)
```


## Public Attributes Documentation

### variable OFF

```java
static final MamaLogLevel OFF = new MamaLogLevel(0);
```


### variable SEVERE

```java
static final MamaLogLevel SEVERE = new MamaLogLevel(1);
```


### variable ERROR

```java
static final MamaLogLevel ERROR = new MamaLogLevel(2);
```


### variable WARN

```java
static final MamaLogLevel WARN = new MamaLogLevel(3);
```


### variable NORMAL

```java
static final MamaLogLevel NORMAL = new MamaLogLevel(4);
```


### variable FINE

```java
static final MamaLogLevel FINE = new MamaLogLevel(5);
```


### variable FINER

```java
static final MamaLogLevel FINER = new MamaLogLevel(6);
```


### variable FINEST

```java
static final MamaLogLevel FINEST = new MamaLogLevel(7);
```


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100