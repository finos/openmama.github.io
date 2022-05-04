---
title: Wombat::MamdaFundamentalFields
summary: Maintains a cache of common fundamental field descriptors. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFundamentalFields



Maintains a cache of common fundamental field descriptors. 

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaFundamentalFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties)<br>Set the dictionary for common fundamental fields. Maintains a cache of MamaFieldDescriptors for common fundamental related fields. The  |
| bool | **[isSet](classWombat_1_1MamdaFundamentalFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaFundamentalFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SRC_TIME](classWombat_1_1MamdaFundamentalFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classWombat_1_1MamdaFundamentalFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[CORP_ACT_TYPE](classWombat_1_1MamdaFundamentalFields.html#variable-corp-act-type)**  |
| MamaFieldDescriptor | **[DIVIDEND_PRICE](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-price)**  |
| MamaFieldDescriptor | **[DIVIDEND_FREQ](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-freq)**  |
| MamaFieldDescriptor | **[DIVIDEND_EX_DATE](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-ex-date)**  |
| MamaFieldDescriptor | **[DIVIDEND_PAY_DATE](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-pay-date)**  |
| MamaFieldDescriptor | **[DIVIDEND_REC_DATE](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-rec-date)**  |
| MamaFieldDescriptor | **[DIVIDEND_CURRENCY](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-currency)**  |
| MamaFieldDescriptor | **[SHARES_OUT](classWombat_1_1MamdaFundamentalFields.html#variable-shares-out)**  |
| MamaFieldDescriptor | **[SHARES_FLOAT](classWombat_1_1MamdaFundamentalFields.html#variable-shares-float)**  |
| MamaFieldDescriptor | **[SHARES_AUTH](classWombat_1_1MamdaFundamentalFields.html#variable-shares-auth)**  |
| MamaFieldDescriptor | **[EARN_PER_SHARE](classWombat_1_1MamdaFundamentalFields.html#variable-earn-per-share)**  |
| MamaFieldDescriptor | **[VOLATILITY](classWombat_1_1MamdaFundamentalFields.html#variable-volatility)**  |
| MamaFieldDescriptor | **[PRICE_EARN_RATIO](classWombat_1_1MamdaFundamentalFields.html#variable-price-earn-ratio)**  |
| MamaFieldDescriptor | **[YIELD](classWombat_1_1MamdaFundamentalFields.html#variable-yield)**  |
| MamaFieldDescriptor | **[MRKT_SEGM_NATIVE](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-segm-native)**  |
| MamaFieldDescriptor | **[MRKT_SECT_NATIVE](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-sect-native)**  |
| MamaFieldDescriptor | **[MRKT_SEGMENT](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-segment)**  |
| MamaFieldDescriptor | **[MRKT_SECTOR](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-sector)**  |
| MamaFieldDescriptor | **[RISK_FREE_RATE](classWombat_1_1MamdaFundamentalFields.html#variable-risk-free-rate)**  |
| MamaFieldDescriptor | **[HIST_VOLATILITY](classWombat_1_1MamdaFundamentalFields.html#variable-hist-volatility)**  |

## Additional inherited members

**Protected Functions inherited from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)**

|                | Name           |
| -------------- | -------------- |
| string | **[lookupFieldName](classWombat_1_1MamdaFields.html#function-lookupfieldname)**(NameValueCollection properties, string defaultFieldName) |


## Public Functions Documentation

### function setDictionary

```csharp
static void setDictionary(
    MamaDictionary dictionary,
    NameValueCollection properties
)
```

Set the dictionary for common fundamental fields. Maintains a cache of MamaFieldDescriptors for common fundamental related fields. The 

**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary
  * **properties** A Properties object containing field mappings. (See [MamdaFields](classWombat_1_1MamdaFields.html) for more information)


`properties` parameter allows users of the API to map the common dictionary names to something else if they are beig published under different names.


### function isSet

```csharp
static bool isSet()
```


### function reset

```csharp
static void reset()
```


## Public Attributes Documentation

### variable SRC_TIME

```csharp
static MamaFieldDescriptor SRC_TIME = null;
```


### variable ACTIVITY_TIME

```csharp
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable CORP_ACT_TYPE

```csharp
static MamaFieldDescriptor CORP_ACT_TYPE = null;
```


### variable DIVIDEND_PRICE

```csharp
static MamaFieldDescriptor DIVIDEND_PRICE = null;
```


### variable DIVIDEND_FREQ

```csharp
static MamaFieldDescriptor DIVIDEND_FREQ = null;
```


### variable DIVIDEND_EX_DATE

```csharp
static MamaFieldDescriptor DIVIDEND_EX_DATE = null;
```


### variable DIVIDEND_PAY_DATE

```csharp
static MamaFieldDescriptor DIVIDEND_PAY_DATE = null;
```


### variable DIVIDEND_REC_DATE

```csharp
static MamaFieldDescriptor DIVIDEND_REC_DATE = null;
```


### variable DIVIDEND_CURRENCY

```csharp
static MamaFieldDescriptor DIVIDEND_CURRENCY = null;
```


### variable SHARES_OUT

```csharp
static MamaFieldDescriptor SHARES_OUT = null;
```


### variable SHARES_FLOAT

```csharp
static MamaFieldDescriptor SHARES_FLOAT = null;
```


### variable SHARES_AUTH

```csharp
static MamaFieldDescriptor SHARES_AUTH = null;
```


### variable EARN_PER_SHARE

```csharp
static MamaFieldDescriptor EARN_PER_SHARE = null;
```


### variable VOLATILITY

```csharp
static MamaFieldDescriptor VOLATILITY = null;
```


### variable PRICE_EARN_RATIO

```csharp
static MamaFieldDescriptor PRICE_EARN_RATIO = null;
```


### variable YIELD

```csharp
static MamaFieldDescriptor YIELD = null;
```


### variable MRKT_SEGM_NATIVE

```csharp
static MamaFieldDescriptor MRKT_SEGM_NATIVE = null;
```


### variable MRKT_SECT_NATIVE

```csharp
static MamaFieldDescriptor MRKT_SECT_NATIVE = null;
```


### variable MRKT_SEGMENT

```csharp
static MamaFieldDescriptor MRKT_SEGMENT = null;
```


### variable MRKT_SECTOR

```csharp
static MamaFieldDescriptor MRKT_SECTOR = null;
```


### variable RISK_FREE_RATE

```csharp
static MamaFieldDescriptor RISK_FREE_RATE = null;
```


### variable HIST_VOLATILITY

```csharp
static MamaFieldDescriptor HIST_VOLATILITY = null;
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100