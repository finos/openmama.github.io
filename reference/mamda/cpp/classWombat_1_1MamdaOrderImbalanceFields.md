---
title: Wombat::MamdaOrderImbalanceFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceFields



 [More...](#detailed-description)


`#include <MamdaOrderImbalanceFields.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaOrderImbalanceFields.html#function-setdictionary)**(const MamaDictionary & dictionary) |
| void | **[reset](classWombat_1_1MamdaOrderImbalanceFields.html#function-reset)**() |
| uint16_t | **[getMaxFid](classWombat_1_1MamdaOrderImbalanceFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaOrderImbalanceFields.html#function-isset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const MamaFieldDescriptor * | **[HIGH_INDICATION_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-high-indication-price)**  |
| const MamaFieldDescriptor * | **[LOW_INDICATION_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-low-indication-price)**  |
| const MamaFieldDescriptor * | **[INDICATION_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-indication-price)**  |
| const MamaFieldDescriptor * | **[BUY_VOLUME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-buy-volume)**  |
| const MamaFieldDescriptor * | **[SELL_VOLUME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-sell-volume)**  |
| const MamaFieldDescriptor * | **[MATCH_VOLUME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-match-volume)**  |
| const MamaFieldDescriptor * | **[SECURITY_STATUS_QUAL](classWombat_1_1MamdaOrderImbalanceFields.html#variable-security-status-qual)**  |
| const MamaFieldDescriptor * | **[INSIDE_MATCH_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-inside-match-price)**  |
| const MamaFieldDescriptor * | **[FAR_CLEARING_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-far-clearing-price)**  |
| const MamaFieldDescriptor * | **[NEAR_CLEARING_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-near-clearing-price)**  |
| const MamaFieldDescriptor * | **[NO_CLEARING_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-no-clearing-price)**  |
| const MamaFieldDescriptor * | **[PRICE_VAR_IND](classWombat_1_1MamdaOrderImbalanceFields.html#variable-price-var-ind)**  |
| const MamaFieldDescriptor * | **[CROSS_TYPE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-cross-type)**  |
| const MamaFieldDescriptor * | **[SRC_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-src-time)**  |
| const MamaFieldDescriptor * | **[ACTIVITY_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-activity-time)**  |
| const MamaFieldDescriptor * | **[MSG_TYPE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-msg-type)**  |
| const MamaFieldDescriptor * | **[ISSUE_SYMBOL](classWombat_1_1MamdaOrderImbalanceFields.html#variable-issue-symbol)**  |
| const MamaFieldDescriptor * | **[PART_ID](classWombat_1_1MamdaOrderImbalanceFields.html#variable-part-id)**  |
| const MamaFieldDescriptor * | **[SEQ_NUM](classWombat_1_1MamdaOrderImbalanceFields.html#variable-seq-num)**  |
| const MamaFieldDescriptor * | **[SECURITY_STATUS_ORIG](classWombat_1_1MamdaOrderImbalanceFields.html#variable-security-status-orig)**  |
| const MamaFieldDescriptor * | **[SECURITY_STATUS_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-security-status-time)**  |
| const MamaFieldDescriptor * | **[AUCTION_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-auction-time)**  |
| const MamaFieldDescriptor * | **[LINE_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-line-time)**  |
| const MamaFieldDescriptor * | **[SEND_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-send-time)**  |

## Detailed Description

```cpp
class Wombat::MamdaOrderImbalanceFields;
```


Utility cache of `MamaFieldDescriptor`s which are used internally by the API when accessing imbalance related fields from update messages. This class should be initialized prior to using the `[MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html)` by calling setDictionary() with a valid dictionary object which contains imbalance related fields. 

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


Reset the dictionary for order imbalance update fields 


### function getMaxFid

```cpp
static uint16_t getMaxFid()
```


### function isSet

```cpp
static bool isSet()
```


## Public Attributes Documentation

### variable HIGH_INDICATION_PRICE

```cpp
static const MamaFieldDescriptor * HIGH_INDICATION_PRICE;
```


### variable LOW_INDICATION_PRICE

```cpp
static const MamaFieldDescriptor * LOW_INDICATION_PRICE;
```


### variable INDICATION_PRICE

```cpp
static const MamaFieldDescriptor * INDICATION_PRICE;
```


### variable BUY_VOLUME

```cpp
static const MamaFieldDescriptor * BUY_VOLUME;
```


### variable SELL_VOLUME

```cpp
static const MamaFieldDescriptor * SELL_VOLUME;
```


### variable MATCH_VOLUME

```cpp
static const MamaFieldDescriptor * MATCH_VOLUME;
```


### variable SECURITY_STATUS_QUAL

```cpp
static const MamaFieldDescriptor * SECURITY_STATUS_QUAL;
```


### variable INSIDE_MATCH_PRICE

```cpp
static const MamaFieldDescriptor * INSIDE_MATCH_PRICE;
```


### variable FAR_CLEARING_PRICE

```cpp
static const MamaFieldDescriptor * FAR_CLEARING_PRICE;
```


### variable NEAR_CLEARING_PRICE

```cpp
static const MamaFieldDescriptor * NEAR_CLEARING_PRICE;
```


### variable NO_CLEARING_PRICE

```cpp
static const MamaFieldDescriptor * NO_CLEARING_PRICE;
```


### variable PRICE_VAR_IND

```cpp
static const MamaFieldDescriptor * PRICE_VAR_IND;
```


### variable CROSS_TYPE

```cpp
static const MamaFieldDescriptor * CROSS_TYPE;
```


### variable SRC_TIME

```cpp
static const MamaFieldDescriptor * SRC_TIME;
```


### variable ACTIVITY_TIME

```cpp
static const MamaFieldDescriptor * ACTIVITY_TIME;
```


### variable MSG_TYPE

```cpp
static const MamaFieldDescriptor * MSG_TYPE;
```


### variable ISSUE_SYMBOL

```cpp
static const MamaFieldDescriptor * ISSUE_SYMBOL;
```


### variable PART_ID

```cpp
static const MamaFieldDescriptor * PART_ID;
```


### variable SEQ_NUM

```cpp
static const MamaFieldDescriptor * SEQ_NUM;
```


### variable SECURITY_STATUS_ORIG

```cpp
static const MamaFieldDescriptor * SECURITY_STATUS_ORIG;
```


### variable SECURITY_STATUS_TIME

```cpp
static const MamaFieldDescriptor * SECURITY_STATUS_TIME;
```


### variable AUCTION_TIME

```cpp
static const MamaFieldDescriptor * AUCTION_TIME;
```


### variable LINE_TIME

```cpp
static const MamaFieldDescriptor * LINE_TIME;
```


### variable SEND_TIME

```cpp
static const MamaFieldDescriptor * SEND_TIME;
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100