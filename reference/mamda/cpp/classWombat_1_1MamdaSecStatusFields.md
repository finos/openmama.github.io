---
title: Wombat::MamdaSecStatusFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecStatusFields



 [More...](#detailed-description)


`#include <MamdaSecStatusFields.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaSecStatusFields.html#function-setdictionary)**(const MamaDictionary & dictionary) |
| void | **[reset](classWombat_1_1MamdaSecStatusFields.html#function-reset)**() |
| uint16_t | **[getMaxFid](classWombat_1_1MamdaSecStatusFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaSecStatusFields.html#function-isset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const MamaFieldDescriptor * | **[PUB_CLASS](classWombat_1_1MamdaSecStatusFields.html#variable-pub-class)**  |
| const MamaFieldDescriptor * | **[REASON](classWombat_1_1MamdaSecStatusFields.html#variable-reason)**  |
| const MamaFieldDescriptor * | **[SECURITY_ACTION](classWombat_1_1MamdaSecStatusFields.html#variable-security-action)**  |
| const MamaFieldDescriptor * | **[SECURITY_TYPE](classWombat_1_1MamdaSecStatusFields.html#variable-security-type)**  |
| const MamaFieldDescriptor * | **[SECURITY_STATUS](classWombat_1_1MamdaSecStatusFields.html#variable-security-status)**  |
| const MamaFieldDescriptor * | **[SECURITY_STATUS_QUAL](classWombat_1_1MamdaSecStatusFields.html#variable-security-status-qual)**  |
| const MamaFieldDescriptor * | **[SECURITY_STATUS_NATIVE](classWombat_1_1MamdaSecStatusFields.html#variable-security-status-native)**  |
| const MamaFieldDescriptor * | **[SECURITY_STATUS_TIME](classWombat_1_1MamdaSecStatusFields.html#variable-security-status-time)**  |
| const MamaFieldDescriptor * | **[EVENT_SEQ_NUM](classWombat_1_1MamdaSecStatusFields.html#variable-event-seq-num)**  |
| const MamaFieldDescriptor * | **[FREE_TEXT](classWombat_1_1MamdaSecStatusFields.html#variable-free-text)**  |
| const MamaFieldDescriptor * | **[SHORT_SALE_CIRCUIT_BREAKER](classWombat_1_1MamdaSecStatusFields.html#variable-short-sale-circuit-breaker)**  |
| const MamaFieldDescriptor * | **[LULDINDICATOR](classWombat_1_1MamdaSecStatusFields.html#variable-luldindicator)**  |
| const MamaFieldDescriptor * | **[LULDTIME](classWombat_1_1MamdaSecStatusFields.html#variable-luldtime)**  |
| const MamaFieldDescriptor * | **[LULDHIGHLIMIT](classWombat_1_1MamdaSecStatusFields.html#variable-luldhighlimit)**  |
| const MamaFieldDescriptor * | **[LULDLOWLIMIT](classWombat_1_1MamdaSecStatusFields.html#variable-luldlowlimit)**  |

## Detailed Description

```cpp
class Wombat::MamdaSecStatusFields;
```


Utility cache of `MamaFieldDescriptor`s which are used internally by the API when accessing security status related fields from update messages. This class should be initialized prior to using the `MamdaSecurityStatusListener` by calling `MamdaSecStatusListener.setDictionary()` with a valid dictionary object which contains security status related fields. 

## Public Functions Documentation

### function setDictionary

```cpp
static void setDictionary(
    const MamaDictionary & dictionary
)
```


### function reset

```cpp
static void reset()
```


Reset the dictionary for security status update fields 


### function getMaxFid

```cpp
static uint16_t getMaxFid()
```


### function isSet

```cpp
static bool isSet()
```


## Public Attributes Documentation

### variable PUB_CLASS

```cpp
static const MamaFieldDescriptor * PUB_CLASS;
```


### variable REASON

```cpp
static const MamaFieldDescriptor * REASON;
```


### variable SECURITY_ACTION

```cpp
static const MamaFieldDescriptor * SECURITY_ACTION;
```


### variable SECURITY_TYPE

```cpp
static const MamaFieldDescriptor * SECURITY_TYPE;
```


### variable SECURITY_STATUS

```cpp
static const MamaFieldDescriptor * SECURITY_STATUS;
```


### variable SECURITY_STATUS_QUAL

```cpp
static const MamaFieldDescriptor * SECURITY_STATUS_QUAL;
```


### variable SECURITY_STATUS_NATIVE

```cpp
static const MamaFieldDescriptor * SECURITY_STATUS_NATIVE;
```


### variable SECURITY_STATUS_TIME

```cpp
static const MamaFieldDescriptor * SECURITY_STATUS_TIME;
```


### variable EVENT_SEQ_NUM

```cpp
static const MamaFieldDescriptor * EVENT_SEQ_NUM;
```


### variable FREE_TEXT

```cpp
static const MamaFieldDescriptor * FREE_TEXT;
```


### variable SHORT_SALE_CIRCUIT_BREAKER

```cpp
static const MamaFieldDescriptor * SHORT_SALE_CIRCUIT_BREAKER;
```


### variable LULDINDICATOR

```cpp
static const MamaFieldDescriptor * LULDINDICATOR;
```


### variable LULDTIME

```cpp
static const MamaFieldDescriptor * LULDTIME;
```


### variable LULDHIGHLIMIT

```cpp
static const MamaFieldDescriptor * LULDHIGHLIMIT;
```


### variable LULDLOWLIMIT

```cpp
static const MamaFieldDescriptor * LULDLOWLIMIT;
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100