---
title: Wombat::MamdaFundamentalFields
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFundamentalFields





## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaFundamentalFields.html#function-setdictionary)**(const MamaDictionary & dictionary) |
| void | **[reset](classWombat_1_1MamdaFundamentalFields.html#function-reset)**() |
| uint16_t | **[getMaxFid](classWombat_1_1MamdaFundamentalFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaFundamentalFields.html#function-isset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const MamaFieldDescriptor * | **[CORP_ACT_TYPE](classWombat_1_1MamdaFundamentalFields.html#variable-corp-act-type)**  |
| const MamaFieldDescriptor * | **[DIVIDEND_PRICE](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-price)**  |
| const MamaFieldDescriptor * | **[DIVIDEND_FREQ](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-freq)**  |
| const char * | **[DIV_FREQ_NONE](classWombat_1_1MamdaFundamentalFields.html#variable-div-freq-none)**  |
| const char * | **[DIV_FREQ_MONTHLY](classWombat_1_1MamdaFundamentalFields.html#variable-div-freq-monthly)**  |
| const char * | **[DIV_FREQ_QUARTERLY](classWombat_1_1MamdaFundamentalFields.html#variable-div-freq-quarterly)**  |
| const char * | **[DIV_FREQ_SEMI_ANNUALLY](classWombat_1_1MamdaFundamentalFields.html#variable-div-freq-semi-annually)**  |
| const char * | **[DIV_FREQ_ANNUALLY](classWombat_1_1MamdaFundamentalFields.html#variable-div-freq-annually)**  |
| const char * | **[DIV_FREQ_SPECIAL](classWombat_1_1MamdaFundamentalFields.html#variable-div-freq-special)**  |
| const char * | **[DIV_FREQ_IRREGULAR](classWombat_1_1MamdaFundamentalFields.html#variable-div-freq-irregular)**  |
| const char * | **[DIV_FREQ_INVALID](classWombat_1_1MamdaFundamentalFields.html#variable-div-freq-invalid)**  |
| const MamaFieldDescriptor * | **[DIVIDEND_EX_DATE](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-ex-date)**  |
| const MamaFieldDescriptor * | **[DIVIDEND_PAY_DATE](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-pay-date)**  |
| const MamaFieldDescriptor * | **[DIVIDEND_REC_DATE](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-rec-date)**  |
| const MamaFieldDescriptor * | **[DIVIDEND_CURRENCY](classWombat_1_1MamdaFundamentalFields.html#variable-dividend-currency)**  |
| const MamaFieldDescriptor * | **[SHARES_OUT](classWombat_1_1MamdaFundamentalFields.html#variable-shares-out)**  |
| const MamaFieldDescriptor * | **[SHARES_FLOAT](classWombat_1_1MamdaFundamentalFields.html#variable-shares-float)**  |
| const MamaFieldDescriptor * | **[SHARES_AUTH](classWombat_1_1MamdaFundamentalFields.html#variable-shares-auth)**  |
| const MamaFieldDescriptor * | **[EARN_PER_SHARE](classWombat_1_1MamdaFundamentalFields.html#variable-earn-per-share)**  |
| const MamaFieldDescriptor * | **[VOLATILITY](classWombat_1_1MamdaFundamentalFields.html#variable-volatility)**  |
| const MamaFieldDescriptor * | **[PRICE_EARN_RATIO](classWombat_1_1MamdaFundamentalFields.html#variable-price-earn-ratio)**  |
| const MamaFieldDescriptor * | **[YIELD](classWombat_1_1MamdaFundamentalFields.html#variable-yield)**  |
| const MamaFieldDescriptor * | **[MRKT_SEGM_NATIVE](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-segm-native)**  |
| const MamaFieldDescriptor * | **[MRKT_SECT_NATIVE](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-sect-native)**  |
| const MamaFieldDescriptor * | **[MRKT_SEGMENT](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-segment)**  |
| const char * | **[MRKT_SEGMENT_NONE](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-segment-none)**  |
| const char * | **[MRKT_SEGMENT_EMPTY](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-segment-empty)**  |
| const MamaFieldDescriptor * | **[MRKT_SECTOR](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-sector)**  |
| const char * | **[MRKT_SECTOR_NONE](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-sector-none)**  |
| const char * | **[MRKT_SECTOR_EMPTY](classWombat_1_1MamdaFundamentalFields.html#variable-mrkt-sector-empty)**  |
| const MamaFieldDescriptor * | **[RISK_FREE_RATE](classWombat_1_1MamdaFundamentalFields.html#variable-risk-free-rate)**  |
| const MamaFieldDescriptor * | **[HIST_VOLATILITY](classWombat_1_1MamdaFundamentalFields.html#variable-hist-volatility)**  |

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


Reset the dictionary for fundamental update fields 


### function getMaxFid

```cpp
static uint16_t getMaxFid()
```


### function isSet

```cpp
static bool isSet()
```


## Public Attributes Documentation

### variable CORP_ACT_TYPE

```cpp
static const MamaFieldDescriptor * CORP_ACT_TYPE;
```


### variable DIVIDEND_PRICE

```cpp
static const MamaFieldDescriptor * DIVIDEND_PRICE;
```


### variable DIVIDEND_FREQ

```cpp
static const MamaFieldDescriptor * DIVIDEND_FREQ;
```


### variable DIV_FREQ_NONE

```cpp
static const char * DIV_FREQ_NONE;
```


### variable DIV_FREQ_MONTHLY

```cpp
static const char * DIV_FREQ_MONTHLY;
```


### variable DIV_FREQ_QUARTERLY

```cpp
static const char * DIV_FREQ_QUARTERLY;
```


### variable DIV_FREQ_SEMI_ANNUALLY

```cpp
static const char * DIV_FREQ_SEMI_ANNUALLY;
```


### variable DIV_FREQ_ANNUALLY

```cpp
static const char * DIV_FREQ_ANNUALLY;
```


### variable DIV_FREQ_SPECIAL

```cpp
static const char * DIV_FREQ_SPECIAL;
```


### variable DIV_FREQ_IRREGULAR

```cpp
static const char * DIV_FREQ_IRREGULAR;
```


### variable DIV_FREQ_INVALID

```cpp
static const char * DIV_FREQ_INVALID;
```


### variable DIVIDEND_EX_DATE

```cpp
static const MamaFieldDescriptor * DIVIDEND_EX_DATE;
```


### variable DIVIDEND_PAY_DATE

```cpp
static const MamaFieldDescriptor * DIVIDEND_PAY_DATE;
```


### variable DIVIDEND_REC_DATE

```cpp
static const MamaFieldDescriptor * DIVIDEND_REC_DATE;
```


### variable DIVIDEND_CURRENCY

```cpp
static const MamaFieldDescriptor * DIVIDEND_CURRENCY;
```


### variable SHARES_OUT

```cpp
static const MamaFieldDescriptor * SHARES_OUT;
```


### variable SHARES_FLOAT

```cpp
static const MamaFieldDescriptor * SHARES_FLOAT;
```


### variable SHARES_AUTH

```cpp
static const MamaFieldDescriptor * SHARES_AUTH;
```


### variable EARN_PER_SHARE

```cpp
static const MamaFieldDescriptor * EARN_PER_SHARE;
```


### variable VOLATILITY

```cpp
static const MamaFieldDescriptor * VOLATILITY;
```


### variable PRICE_EARN_RATIO

```cpp
static const MamaFieldDescriptor * PRICE_EARN_RATIO;
```


### variable YIELD

```cpp
static const MamaFieldDescriptor * YIELD;
```


### variable MRKT_SEGM_NATIVE

```cpp
static const MamaFieldDescriptor * MRKT_SEGM_NATIVE;
```


### variable MRKT_SECT_NATIVE

```cpp
static const MamaFieldDescriptor * MRKT_SECT_NATIVE;
```


### variable MRKT_SEGMENT

```cpp
static const MamaFieldDescriptor * MRKT_SEGMENT;
```


### variable MRKT_SEGMENT_NONE

```cpp
static const char * MRKT_SEGMENT_NONE;
```


### variable MRKT_SEGMENT_EMPTY

```cpp
static const char * MRKT_SEGMENT_EMPTY;
```


### variable MRKT_SECTOR

```cpp
static const MamaFieldDescriptor * MRKT_SECTOR;
```


### variable MRKT_SECTOR_NONE

```cpp
static const char * MRKT_SECTOR_NONE;
```


### variable MRKT_SECTOR_EMPTY

```cpp
static const char * MRKT_SECTOR_EMPTY;
```


### variable RISK_FREE_RATE

```cpp
static const MamaFieldDescriptor * RISK_FREE_RATE;
```


### variable HIST_VOLATILITY

```cpp
static const MamaFieldDescriptor * HIST_VOLATILITY;
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100