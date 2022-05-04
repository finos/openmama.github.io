---
title: com::wombat::mama::MamaServiceLevel
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaServiceLevel



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaServiceLevel.html#function-tostring)**(short serviceLevel) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final short | **[REAL_TIME](classcom_1_1wombat_1_1mama_1_1MamaServiceLevel.html#variable-real-time)**  |
| final short | **[SNAPSHOT](classcom_1_1wombat_1_1mama_1_1MamaServiceLevel.html#variable-snapshot)**  |
| final short | **[REPEATING_SNAPSHOT](classcom_1_1wombat_1_1mama_1_1MamaServiceLevel.html#variable-repeating-snapshot)**  |
| final short | **[CONFLATED](classcom_1_1wombat_1_1mama_1_1MamaServiceLevel.html#variable-conflated)**  |
| final short | **[UNKNOWN](classcom_1_1wombat_1_1mama_1_1MamaServiceLevel.html#variable-unknown)**  |

## Detailed Description

```java
class com::wombat::mama::MamaServiceLevel;
```


Service level of a MAMA subscription. Provides an enumeration that represents the service level (a) requested by a subscribing application, or (b) provided by the publisher. In the future, the service level provided to the application might change dynamically, depending upon infrastructure capacity. So, even though the requested service level is "real time", if service deteriorates for any reason, the subscription may automatically switch to a conflated level (after notifying the application of the switch). 

## Public Functions Documentation

### function toString

```java
static inline String toString(
    short serviceLevel
)
```


Return a string representation of a MAMA service level. 


## Public Attributes Documentation

### variable REAL_TIME

```java
static final short REAL_TIME = 0;
```


### variable SNAPSHOT

```java
static final short SNAPSHOT = 1;
```


### variable REPEATING_SNAPSHOT

```java
static final short REPEATING_SNAPSHOT = 2;
```


### variable CONFLATED

```java
static final short CONFLATED = 5;
```


### variable UNKNOWN

```java
static final short UNKNOWN = 99;
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100