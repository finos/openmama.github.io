---
title: com::wombat::mama::MamaSourceState
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSourceState



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[toString](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html#function-tostring)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final [MamaSourceState](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html) | **[OFF](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html#variable-off)**  |
| final [MamaSourceState](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html) | **[OK](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html#variable-ok)**  |
| final [MamaSourceState](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html) | **[UKNOWN](classcom_1_1wombat_1_1mama_1_1MamaSourceState.html#variable-uknown)**  |

## Detailed Description

```java
class com::wombat::mama::MamaSourceState;
```


[MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html) state class implemented with typesafe enumeration. 

## Public Functions Documentation

### function toString

```java
inline String toString()
```


## Public Attributes Documentation

### variable OFF

```java
static final MamaSourceState OFF = new MamaSourceState("OFF");
```


### variable OK

```java
static final MamaSourceState OK = new MamaSourceState("OK");
```


### variable UKNOWN

```java
static final MamaSourceState UKNOWN = new MamaSourceState ("UKNOWN");
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100