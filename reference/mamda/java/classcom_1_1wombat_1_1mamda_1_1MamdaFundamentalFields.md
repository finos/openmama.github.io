---
title: com::wombat::mamda::MamdaFundamentalFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaFundamentalFields



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#function-setdictionary)**(MamaDictionary dictionary, Properties properties) |
| boolean | **[isSet](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#function-isset)**() |
| void | **[reset](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SRC_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[SEND_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-send-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[PART_ID](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SYMBOL](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-symbol)**  |
| MamaFieldDescriptor | **[CORP_ACT_TYPE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-corp-act-type)**  |
| MamaFieldDescriptor | **[DIVIDEND_PRICE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-dividend-price)**  |
| MamaFieldDescriptor | **[DIVIDEND_FREQ](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-dividend-freq)**  |
| MamaFieldDescriptor | **[DIVIDEND_EX_DATE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-dividend-ex-date)**  |
| MamaFieldDescriptor | **[DIVIDEND_PAY_DATE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-dividend-pay-date)**  |
| MamaFieldDescriptor | **[DIVIDEND_REC_DATE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-dividend-rec-date)**  |
| MamaFieldDescriptor | **[DIVIDEND_CURRENCY](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-dividend-currency)**  |
| MamaFieldDescriptor | **[SHARES_OUT](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-shares-out)**  |
| MamaFieldDescriptor | **[SHARES_FLOAT](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-shares-float)**  |
| MamaFieldDescriptor | **[SHARES_AUTH](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-shares-auth)**  |
| MamaFieldDescriptor | **[EARN_PER_SHARE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-earn-per-share)**  |
| MamaFieldDescriptor | **[VOLATILITY](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-volatility)**  |
| MamaFieldDescriptor | **[PRICE_EARN_RATIO](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-price-earn-ratio)**  |
| MamaFieldDescriptor | **[YIELD](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-yield)**  |
| MamaFieldDescriptor | **[MRKT_SEGM_NATIVE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-mrkt-segm-native)**  |
| MamaFieldDescriptor | **[MRKT_SECT_NATIVE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-mrkt-sect-native)**  |
| MamaFieldDescriptor | **[MRKT_SEGMENT](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-mrkt-segment)**  |
| MamaFieldDescriptor | **[MRKT_SECTOR](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-mrkt-sector)**  |
| MamaFieldDescriptor | **[RISK_FREE_RATE](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-risk-free-rate)**  |
| MamaFieldDescriptor | **[HIST_VOLATILITY](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalFields.html#variable-hist-volatility)**  |

## Additional inherited members

**Protected Functions inherited from [com.wombat.mamda.MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| String | **[lookupFieldName](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html#function-lookupfieldname)**(Properties properties, String defaultFieldName) |


## Detailed Description

```java
class com::wombat::mamda::MamdaFundamentalFields;
```


Maintains a cache of common fundamental field descriptors. 

## Public Functions Documentation

### function setDictionary

```java
static inline void setDictionary(
    MamaDictionary dictionary,
    Properties properties
)
```


**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary 
  * **properties** A Properties object containing field mappings. (See [MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html) for more information) 


Set the dictionary for common fundamental fields. Maintains a cache of MamaFieldDescriptors for common fundamental related fields. The `properties` parameter allows users of the API to map the common dictionary names to something else if they are being published under different names.


### function isSet

```java
static inline boolean isSet()
```


### function reset

```java
static inline void reset()
```


Reset the dictionary for fundamental update fields. 


## Public Attributes Documentation

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


### variable PART_ID

```java
static MamaFieldDescriptor PART_ID = null;
```


### variable SYMBOL

```java
static MamaFieldDescriptor SYMBOL = null;
```


### variable CORP_ACT_TYPE

```java
static MamaFieldDescriptor CORP_ACT_TYPE = null;
```


### variable DIVIDEND_PRICE

```java
static MamaFieldDescriptor DIVIDEND_PRICE = null;
```


### variable DIVIDEND_FREQ

```java
static MamaFieldDescriptor DIVIDEND_FREQ = null;
```


### variable DIVIDEND_EX_DATE

```java
static MamaFieldDescriptor DIVIDEND_EX_DATE = null;
```


### variable DIVIDEND_PAY_DATE

```java
static MamaFieldDescriptor DIVIDEND_PAY_DATE = null;
```


### variable DIVIDEND_REC_DATE

```java
static MamaFieldDescriptor DIVIDEND_REC_DATE = null;
```


### variable DIVIDEND_CURRENCY

```java
static MamaFieldDescriptor DIVIDEND_CURRENCY = null;
```


### variable SHARES_OUT

```java
static MamaFieldDescriptor SHARES_OUT = null;
```


### variable SHARES_FLOAT

```java
static MamaFieldDescriptor SHARES_FLOAT = null;
```


### variable SHARES_AUTH

```java
static MamaFieldDescriptor SHARES_AUTH = null;
```


### variable EARN_PER_SHARE

```java
static MamaFieldDescriptor EARN_PER_SHARE = null;
```


### variable VOLATILITY

```java
static MamaFieldDescriptor VOLATILITY = null;
```


### variable PRICE_EARN_RATIO

```java
static MamaFieldDescriptor PRICE_EARN_RATIO = null;
```


### variable YIELD

```java
static MamaFieldDescriptor YIELD = null;
```


### variable MRKT_SEGM_NATIVE

```java
static MamaFieldDescriptor MRKT_SEGM_NATIVE = null;
```


### variable MRKT_SECT_NATIVE

```java
static MamaFieldDescriptor MRKT_SECT_NATIVE = null;
```


### variable MRKT_SEGMENT

```java
static MamaFieldDescriptor MRKT_SEGMENT = null;
```


### variable MRKT_SECTOR

```java
static MamaFieldDescriptor MRKT_SECTOR = null;
```


### variable RISK_FREE_RATE

```java
static MamaFieldDescriptor RISK_FREE_RATE = null;
```


### variable HIST_VOLATILITY

```java
static MamaFieldDescriptor HIST_VOLATILITY = null;
```


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100