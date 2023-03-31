---
title: com::wombat::mamda::MamdaOrderImbalanceFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaOrderImbalanceFields



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#function-setdictionary)**(MamaDictionary dictionary, Properties properties) |
| int | **[getMaxFid](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#function-getmaxfid)**() |
| boolean | **[isSet](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#function-isset)**() |
| void | **[reset](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[HIGH_INDICATION_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-high-indication-price)**  |
| MamaFieldDescriptor | **[LOW_INDICATION_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-low-indication-price)**  |
| MamaFieldDescriptor | **[INDICATION_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-indication-price)**  |
| MamaFieldDescriptor | **[BUY_VOLUME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-buy-volume)**  |
| MamaFieldDescriptor | **[SELL_VOLUME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-sell-volume)**  |
| MamaFieldDescriptor | **[MATCH_VOLUME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-match-volume)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_QUAL](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-security-status-qual)**  |
| MamaFieldDescriptor | **[INSIDE_MATCH_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-inside-match-price)**  |
| MamaFieldDescriptor | **[FAR_CLEARING_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-far-clearing-price)**  |
| MamaFieldDescriptor | **[NEAR_CLEARING_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-near-clearing-price)**  |
| MamaFieldDescriptor | **[NO_CLEARING_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-no-clearing-price)**  |
| MamaFieldDescriptor | **[PRICE_VAR_IND](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-price-var-ind)**  |
| MamaFieldDescriptor | **[CROSS_TYPE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-cross-type)**  |
| MamaFieldDescriptor | **[SRC_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[SEND_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-send-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[MSG_TYPE](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-msg-type)**  |
| MamaFieldDescriptor | **[ISSUE_SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-issue-symbol)**  |
| MamaFieldDescriptor | **[PART_ID](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-symbol)**  |
| MamaFieldDescriptor | **[SEQ_NUM](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-seq-num)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_ORIG](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-security-status-orig)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-security-status-time)**  |
| MamaFieldDescriptor | **[AUCTION_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-auction-time)**  |
| int | **[MAX_FID](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceFields.html#variable-max-fid)**  |

## Additional inherited members

**Protected Functions inherited from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| String | **[lookupFieldName](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html#function-lookupfieldname)**(Properties properties, String defaultFieldName) |


## Detailed Description

```java
class com::wombat::mamda::MamdaOrderImbalanceFields;
```


Utility cache of `MamaFieldDescriptor`s which are used internally by the API when accessing imbalance related fields from update messages. This class should be initialized prior to using the `[MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html)` by calling setDictionary() with a valid dictionary object which contains imbalance related fields. 

## Public Functions Documentation

### function setDictionary

```java
static inline void setDictionary(
    MamaDictionary dictionary,
    Properties properties
)
```


### function getMaxFid

```java
static inline int getMaxFid()
```


### function isSet

```java
static inline boolean isSet()
```


### function reset

```java
static inline void reset()
```


Reset the dictionary for order imbalance update fields. 


## Public Attributes Documentation

### variable HIGH_INDICATION_PRICE

```java
static MamaFieldDescriptor HIGH_INDICATION_PRICE = null;
```


### variable LOW_INDICATION_PRICE

```java
static MamaFieldDescriptor LOW_INDICATION_PRICE = null;
```


### variable INDICATION_PRICE

```java
static MamaFieldDescriptor INDICATION_PRICE = null;
```


### variable BUY_VOLUME

```java
static MamaFieldDescriptor BUY_VOLUME = null;
```


### variable SELL_VOLUME

```java
static MamaFieldDescriptor SELL_VOLUME = null;
```


### variable MATCH_VOLUME

```java
static MamaFieldDescriptor MATCH_VOLUME = null;
```


### variable SECURITY_STATUS_QUAL

```java
static MamaFieldDescriptor SECURITY_STATUS_QUAL = null;
```


### variable INSIDE_MATCH_PRICE

```java
static MamaFieldDescriptor INSIDE_MATCH_PRICE = null;
```


### variable FAR_CLEARING_PRICE

```java
static MamaFieldDescriptor FAR_CLEARING_PRICE = null;
```


### variable NEAR_CLEARING_PRICE

```java
static MamaFieldDescriptor NEAR_CLEARING_PRICE = null;
```


### variable NO_CLEARING_PRICE

```java
static MamaFieldDescriptor NO_CLEARING_PRICE = null;
```


### variable PRICE_VAR_IND

```java
static MamaFieldDescriptor PRICE_VAR_IND = null;
```


### variable CROSS_TYPE

```java
static MamaFieldDescriptor CROSS_TYPE = null;
```


### variable SRC_TIME

```java
static MamaFieldDescriptor SRC_TIME = null;
```


### variable ACTIVITY_TIME

```java
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable SEND_TIME

```java
static MamaFieldDescriptor SEND_TIME = null;
```


### variable LINE_TIME

```java
static MamaFieldDescriptor LINE_TIME = null;
```


### variable MSG_TYPE

```java
static MamaFieldDescriptor MSG_TYPE = null;
```


### variable ISSUE_SYMBOL

```java
static MamaFieldDescriptor ISSUE_SYMBOL = null;
```


### variable PART_ID

```java
static MamaFieldDescriptor PART_ID = null;
```


### variable SYMBOL

```java
static MamaFieldDescriptor SYMBOL = null;
```


### variable SEQ_NUM

```java
static MamaFieldDescriptor SEQ_NUM = null;
```


### variable SECURITY_STATUS_ORIG

```java
static MamaFieldDescriptor SECURITY_STATUS_ORIG = null;
```


### variable SECURITY_STATUS_TIME

```java
static MamaFieldDescriptor SECURITY_STATUS_TIME = null;
```


### variable AUCTION_TIME

```java
static MamaFieldDescriptor AUCTION_TIME = null;
```


### variable MAX_FID

```java
static int MAX_FID = 0;
```


-------------------------------

Updated on 2023-03-31 at 15:30:33 +0100