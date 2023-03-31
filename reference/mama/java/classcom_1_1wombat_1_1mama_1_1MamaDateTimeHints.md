---
title: com::wombat::mama::MamaDateTimeHints
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaDateTimeHints



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamaDateTimeHints](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-mamadatetimehints)**(short hints) |
| short | **[getHints](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-gethints)**() |
| boolean | **[hasHints](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-hashints)**([MamaDateTimeHints](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html) hints) |
| boolean | **[hasDate](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-hasdate)**() |
| boolean | **[hasTime](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-hastime)**() |
| boolean | **[hasNoTimeZone](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-hasnotimezone)**() |
| void | **[setHints](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-sethints)**(short hints) |
| void | **[setHasTime](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-sethastime)**(boolean set) |
| void | **[setHasDate](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-sethasdate)**(boolean set) |
| void | **[setNoTimezone](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#function-setnotimezone)**(boolean set) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[HAS_DATE](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#variable-has-date)**  |
| final short | **[HAS_TIME](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#variable-has-time)**  |
| final short | **[NO_TIMEZONE](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html#variable-no-timezone)**  |

## Detailed Description

```java
class com::wombat::mama::MamaDateTimeHints;
```


Bit masks for hints. 

## Public Functions Documentation

### function MamaDateTimeHints

```java
inline MamaDateTimeHints(
    short hints
)
```


**Parameters**: 

  * **hints** 


Create hints with the specified mask.


### function getHints

```java
inline short getHints()
```


**Return**: The mask. 

Return the hints mask. 


### function hasHints

```java
inline boolean hasHints(
    MamaDateTimeHints hints
)
```


Return true if mask matches supplied hints 


### function hasDate

```java
inline boolean hasDate()
```


Return true if HAS_DATE bit set. 


### function hasTime

```java
inline boolean hasTime()
```


Return true if has time bit set. 


### function hasNoTimeZone

```java
inline boolean hasNoTimeZone()
```


Return true if no timezone bit set. 


### function setHints

```java
inline void setHints(
    short hints
)
```


Set mask 


### function setHasTime

```java
inline void setHasTime(
    boolean set
)
```


Set or unset the HAS_TIME bit. 


### function setHasDate

```java
inline void setHasDate(
    boolean set
)
```


Set or unset the HAS_DATE bit. 


### function setNoTimezone

```java
inline void setNoTimezone(
    boolean set
)
```


Set or unset the NO_TIMEZONE bit. 


## Public Attributes Documentation

### variable HAS_DATE

```java
static final short HAS_DATE = 0x01;
```


### variable HAS_TIME

```java
static final short HAS_TIME = 0x02;
```


### variable NO_TIMEZONE

```java
static final short NO_TIMEZONE = 0x04;
```


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100