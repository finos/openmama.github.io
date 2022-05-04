---
title: Wombat::MamdaOrderImbalanceFields
summary: Utility cache of 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceFields



Utility cache of  [More...](#detailed-description)

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaOrderImbalanceFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties) |
| int | **[getMaxFid](classWombat_1_1MamdaOrderImbalanceFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaOrderImbalanceFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaOrderImbalanceFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[HIGH_INDICATION_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-high-indication-price)**  |
| MamaFieldDescriptor | **[LOW_INDICATION_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-low-indication-price)**  |
| MamaFieldDescriptor | **[INDICATION_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-indication-price)**  |
| MamaFieldDescriptor | **[BUY_VOLUME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-buy-volume)**  |
| MamaFieldDescriptor | **[SELL_VOLUME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-sell-volume)**  |
| MamaFieldDescriptor | **[MATCH_VOLUME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-match-volume)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_QUAL](classWombat_1_1MamdaOrderImbalanceFields.html#variable-security-status-qual)**  |
| MamaFieldDescriptor | **[INSIDE_MATCH_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-inside-match-price)**  |
| MamaFieldDescriptor | **[FAR_CLEARING_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-far-clearing-price)**  |
| MamaFieldDescriptor | **[NEAR_CLEARING_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-near-clearing-price)**  |
| MamaFieldDescriptor | **[NO_CLEARING_PRICE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-no-clearing-price)**  |
| MamaFieldDescriptor | **[PRICE_VAR_IND](classWombat_1_1MamdaOrderImbalanceFields.html#variable-price-var-ind)**  |
| MamaFieldDescriptor | **[CROSS_TYPE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-cross-type)**  |
| MamaFieldDescriptor | **[SRC_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[MSG_TYPE](classWombat_1_1MamdaOrderImbalanceFields.html#variable-msg-type)**  |
| MamaFieldDescriptor | **[ISSUE_SYMBOL](classWombat_1_1MamdaOrderImbalanceFields.html#variable-issue-symbol)**  |
| MamaFieldDescriptor | **[SYMBOL](classWombat_1_1MamdaOrderImbalanceFields.html#variable-symbol)**  |
| MamaFieldDescriptor | **[PART_ID](classWombat_1_1MamdaOrderImbalanceFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SEQ_NUM](classWombat_1_1MamdaOrderImbalanceFields.html#variable-seq-num)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_ORIG](classWombat_1_1MamdaOrderImbalanceFields.html#variable-security-status-orig)**  |
| MamaFieldDescriptor | **[SECURITY_STATUS_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-security-status-time)**  |
| MamaFieldDescriptor | **[AUCTION_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-auction-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[SEND_TIME](classWombat_1_1MamdaOrderImbalanceFields.html#variable-send-time)**  |
| int | **[MAX_FID](classWombat_1_1MamdaOrderImbalanceFields.html#variable-max-fid)**  |

## Additional inherited members

**Protected Functions inherited from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| string | **[lookupFieldName](classWombat_1_1MamdaFields.html#function-lookupfieldname)**(NameValueCollection properties, string defaultFieldName) |


## Detailed Description

```csharp
class Wombat::MamdaOrderImbalanceFields;
```

Utility cache of 

`MamaFieldDescriptor`s which are used internally by the API when accessing imbalance related fields from update messages. This class should be initialized prior to using the `[MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html)` by calling setDictionary() with a valid dictionary object which contains imbalance related fields.

## Public Functions Documentation

### function setDictionary

```csharp
static void setDictionary(
    MamaDictionary dictionary,
    NameValueCollection properties
)
```


### function getMaxFid

```csharp
static int getMaxFid()
```


### function isSet

```csharp
static bool isSet()
```


### function reset

```csharp
static void reset()
```


## Public Attributes Documentation

### variable HIGH_INDICATION_PRICE

```csharp
static MamaFieldDescriptor HIGH_INDICATION_PRICE = null;
```


### variable LOW_INDICATION_PRICE

```csharp
static MamaFieldDescriptor LOW_INDICATION_PRICE = null;
```


### variable INDICATION_PRICE

```csharp
static MamaFieldDescriptor INDICATION_PRICE = null;
```


### variable BUY_VOLUME

```csharp
static MamaFieldDescriptor BUY_VOLUME = null;
```


### variable SELL_VOLUME

```csharp
static MamaFieldDescriptor SELL_VOLUME = null;
```


### variable MATCH_VOLUME

```csharp
static MamaFieldDescriptor MATCH_VOLUME = null;
```


### variable SECURITY_STATUS_QUAL

```csharp
static MamaFieldDescriptor SECURITY_STATUS_QUAL = null;
```


### variable INSIDE_MATCH_PRICE

```csharp
static MamaFieldDescriptor INSIDE_MATCH_PRICE = null;
```


### variable FAR_CLEARING_PRICE

```csharp
static MamaFieldDescriptor FAR_CLEARING_PRICE = null;
```


### variable NEAR_CLEARING_PRICE

```csharp
static MamaFieldDescriptor NEAR_CLEARING_PRICE = null;
```


### variable NO_CLEARING_PRICE

```csharp
static MamaFieldDescriptor NO_CLEARING_PRICE = null;
```


### variable PRICE_VAR_IND

```csharp
static MamaFieldDescriptor PRICE_VAR_IND = null;
```


### variable CROSS_TYPE

```csharp
static MamaFieldDescriptor CROSS_TYPE = null;
```


### variable SRC_TIME

```csharp
static MamaFieldDescriptor SRC_TIME = null;
```


### variable ACTIVITY_TIME

```csharp
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable MSG_TYPE

```csharp
static MamaFieldDescriptor MSG_TYPE = null;
```


### variable ISSUE_SYMBOL

```csharp
static MamaFieldDescriptor ISSUE_SYMBOL = null;
```


### variable SYMBOL

```csharp
static MamaFieldDescriptor SYMBOL = null;
```


### variable PART_ID

```csharp
static MamaFieldDescriptor PART_ID = null;
```


### variable SEQ_NUM

```csharp
static MamaFieldDescriptor SEQ_NUM = null;
```


### variable SECURITY_STATUS_ORIG

```csharp
static MamaFieldDescriptor SECURITY_STATUS_ORIG = null;
```


### variable SECURITY_STATUS_TIME

```csharp
static MamaFieldDescriptor SECURITY_STATUS_TIME = null;
```


### variable AUCTION_TIME

```csharp
static MamaFieldDescriptor AUCTION_TIME = null;
```


### variable LINE_TIME

```csharp
static MamaFieldDescriptor LINE_TIME = null;
```


### variable SEND_TIME

```csharp
static MamaFieldDescriptor SEND_TIME = null;
```


### variable MAX_FID

```csharp
static int MAX_FID = 0;
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100