---
title: com::wombat::mama::MamaLogFilePolicy
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaLogFilePolicy





## Public Functions

|                | Name           |
| -------------- | -------------- |
| int | **[getValue](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html#function-getvalue)**() |
| [MamaLogFilePolicy](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html) | **[tryStringToLogPolicy](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html#function-trystringtologpolicy)**(String policy) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final [MamaLogFilePolicy](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html) | **[UNBOUNDED](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html#variable-unbounded)**  |
| final [MamaLogFilePolicy](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html) | **[ROLL](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html#variable-roll)**  |
| final [MamaLogFilePolicy](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html) | **[OVERWRITE](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html#variable-overwrite)**  |
| final [MamaLogFilePolicy](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html) | **[USER](classcom_1_1wombat_1_1mama_1_1MamaLogFilePolicy.html#variable-user)**  |

## Public Functions Documentation

### function getValue

```java
inline int getValue()
```


### function tryStringToLogPolicy

```java
static inline MamaLogFilePolicy tryStringToLogPolicy(
    String policy
)
```


## Public Attributes Documentation

### variable UNBOUNDED

```java
static final MamaLogFilePolicy UNBOUNDED = new MamaLogFilePolicy(1);
```


### variable ROLL

```java
static final MamaLogFilePolicy ROLL = new MamaLogFilePolicy(2);
```


### variable OVERWRITE

```java
static final MamaLogFilePolicy OVERWRITE = new MamaLogFilePolicy(3);
```


### variable USER

```java
static final MamaLogFilePolicy USER = new MamaLogFilePolicy(4);
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100