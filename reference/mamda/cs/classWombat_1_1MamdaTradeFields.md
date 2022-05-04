---
title: Wombat::MamdaTradeFields
summary: Cache of common trade related field descriptors. This is required to be populated if using the MamdaTradeListener. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeFields



Cache of common trade related field descriptors. This is required to be populated if using the [MamdaTradeListener](). 

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaTradeFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties)<br>Set the dictionary for common trade fields. Maintains a cache of MamaFieldDescriptors for common trade related fields. The  |
| int | **[getMaxFid](classWombat_1_1MamdaTradeFields.html#function-getmaxfid)**()<br>Returns the maximum field descriptor identifier in the dictionary  |
| bool | **[isSet](classWombat_1_1MamdaTradeFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaTradeFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SYMBOL](classWombat_1_1MamdaTradeFields.html#variable-symbol)**  |
| MamaFieldDescriptor | **[ISSUE_SYMBOL](classWombat_1_1MamdaTradeFields.html#variable-issue-symbol)**  |
| MamaFieldDescriptor | **[PART_ID](classWombat_1_1MamdaTradeFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SRC_TIME](classWombat_1_1MamdaTradeFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classWombat_1_1MamdaTradeFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classWombat_1_1MamdaTradeFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[SEND_TIME](classWombat_1_1MamdaTradeFields.html#variable-send-time)**  |
| MamaFieldDescriptor | **[PUB_ID](classWombat_1_1MamdaTradeFields.html#variable-pub-id)**  |
| MamaFieldDescriptor | **[TRADE_PRICE](classWombat_1_1MamdaTradeFields.html#variable-trade-price)**  |
| MamaFieldDescriptor | **[TRADE_DATE](classWombat_1_1MamdaTradeFields.html#variable-trade-date)**  |
| MamaFieldDescriptor | **[TRADE_TIME](classWombat_1_1MamdaTradeFields.html#variable-trade-time)**  |
| MamaFieldDescriptor | **[TRADE_DIRECTION](classWombat_1_1MamdaTradeFields.html#variable-trade-direction)**  |
| MamaFieldDescriptor | **[LAST_PRICE](classWombat_1_1MamdaTradeFields.html#variable-last-price)**  |
| MamaFieldDescriptor | **[LAST_VOLUME](classWombat_1_1MamdaTradeFields.html#variable-last-volume)**  |
| MamaFieldDescriptor | **[LAST_PART_ID](classWombat_1_1MamdaTradeFields.html#variable-last-part-id)**  |
| MamaFieldDescriptor | **[LAST_TIME](classWombat_1_1MamdaTradeFields.html#variable-last-time)**  |
| MamaFieldDescriptor | **[NET_CHANGE](classWombat_1_1MamdaTradeFields.html#variable-net-change)**  |
| MamaFieldDescriptor | **[PCT_CHANGE](classWombat_1_1MamdaTradeFields.html#variable-pct-change)**  |
| MamaFieldDescriptor | **[TRADE_SIZE](classWombat_1_1MamdaTradeFields.html#variable-trade-size)**  |
| MamaFieldDescriptor | **[TOTAL_VOLUME](classWombat_1_1MamdaTradeFields.html#variable-total-volume)**  |
| MamaFieldDescriptor | **[OFF_EXCHANGE_TOTAL_VOLUME](classWombat_1_1MamdaTradeFields.html#variable-off-exchange-total-volume)**  |
| MamaFieldDescriptor | **[ON_EXCHANGE_TOTAL_VOLUME](classWombat_1_1MamdaTradeFields.html#variable-on-exchange-total-volume)**  |
| MamaFieldDescriptor | **[TRADE_UNITS](classWombat_1_1MamdaTradeFields.html#variable-trade-units)**  |
| MamaFieldDescriptor | **[HIGH_PRICE](classWombat_1_1MamdaTradeFields.html#variable-high-price)**  |
| MamaFieldDescriptor | **[LOW_PRICE](classWombat_1_1MamdaTradeFields.html#variable-low-price)**  |
| MamaFieldDescriptor | **[OPEN_PRICE](classWombat_1_1MamdaTradeFields.html#variable-open-price)**  |
| MamaFieldDescriptor | **[CLOSE_PRICE](classWombat_1_1MamdaTradeFields.html#variable-close-price)**  |
| MamaFieldDescriptor | **[CLOSE_DATE](classWombat_1_1MamdaTradeFields.html#variable-close-date)**  |
| MamaFieldDescriptor | **[PREV_CLOSE_PRICE](classWombat_1_1MamdaTradeFields.html#variable-prev-close-price)**  |
| MamaFieldDescriptor | **[PREV_CLOSE_DATE](classWombat_1_1MamdaTradeFields.html#variable-prev-close-date)**  |
| MamaFieldDescriptor | **[ADJ_PREV_CLOSE](classWombat_1_1MamdaTradeFields.html#variable-adj-prev-close)**  |
| MamaFieldDescriptor | **[PREV_VOLUME](classWombat_1_1MamdaTradeFields.html#variable-prev-volume)**  |
| MamaFieldDescriptor | **[TRADE_SEQNUM](classWombat_1_1MamdaTradeFields.html#variable-trade-seqnum)**  |
| MamaFieldDescriptor | **[TRADE_QUALIFIER](classWombat_1_1MamdaTradeFields.html#variable-trade-qualifier)**  |
| MamaFieldDescriptor | **[TRADE_PART_ID](classWombat_1_1MamdaTradeFields.html#variable-trade-part-id)**  |
| MamaFieldDescriptor | **[AGGRESSOR_SIDE](classWombat_1_1MamdaTradeFields.html#variable-aggressor-side)**  |
| MamaFieldDescriptor | **[TRADE_SIDE](classWombat_1_1MamdaTradeFields.html#variable-trade-side)**  |
| MamaFieldDescriptor | **[TOTAL_VALUE](classWombat_1_1MamdaTradeFields.html#variable-total-value)**  |
| MamaFieldDescriptor | **[OFF_EXCHANGE_TOTAL_VALUE](classWombat_1_1MamdaTradeFields.html#variable-off-exchange-total-value)**  |
| MamaFieldDescriptor | **[ON_EXCHANGE_TOTAL_VALUE](classWombat_1_1MamdaTradeFields.html#variable-on-exchange-total-value)**  |
| MamaFieldDescriptor | **[VWAP](classWombat_1_1MamdaTradeFields.html#variable-vwap)**  |
| MamaFieldDescriptor | **[OFF_EXCHANGE_VWAP](classWombat_1_1MamdaTradeFields.html#variable-off-exchange-vwap)**  |
| MamaFieldDescriptor | **[ON_EXCHANGE_VWAP](classWombat_1_1MamdaTradeFields.html#variable-on-exchange-vwap)**  |
| MamaFieldDescriptor | **[STD_DEV](classWombat_1_1MamdaTradeFields.html#variable-std-dev)**  |
| MamaFieldDescriptor | **[STD_DEV_SUM](classWombat_1_1MamdaTradeFields.html#variable-std-dev-sum)**  |
| MamaFieldDescriptor | **[STD_DEV_SUM_SQUARES](classWombat_1_1MamdaTradeFields.html#variable-std-dev-sum-squares)**  |
| MamaFieldDescriptor | **[ORDER_ID](classWombat_1_1MamdaTradeFields.html#variable-order-id)**  |
| MamaFieldDescriptor | **[SETTLE_PRICE](classWombat_1_1MamdaTradeFields.html#variable-settle-price)**  |
| MamaFieldDescriptor | **[SETTLE_DATE](classWombat_1_1MamdaTradeFields.html#variable-settle-date)**  |
| MamaFieldDescriptor | **[SALE_CONDITION](classWombat_1_1MamdaTradeFields.html#variable-sale-condition)**  |
| MamaFieldDescriptor | **[SELLERS_SALE_DAYS](classWombat_1_1MamdaTradeFields.html#variable-sellers-sale-days)**  |
| MamaFieldDescriptor | **[STOP_STOCK_IND](classWombat_1_1MamdaTradeFields.html#variable-stop-stock-ind)**  |
| MamaFieldDescriptor | **[TRADE_EXEC_VENUE](classWombat_1_1MamdaTradeFields.html#variable-trade-exec-venue)**  |
| MamaFieldDescriptor | **[OFF_EXCHANGE_TRADE_PRICE](classWombat_1_1MamdaTradeFields.html#variable-off-exchange-trade-price)**  |
| MamaFieldDescriptor | **[ON_EXCHANGE_TRADE_PRICE](classWombat_1_1MamdaTradeFields.html#variable-on-exchange-trade-price)**  |
| MamaFieldDescriptor | **[IS_IRREGULAR](classWombat_1_1MamdaTradeFields.html#variable-is-irregular)**  |
| MamaFieldDescriptor | **[IRREG_PART_ID](classWombat_1_1MamdaTradeFields.html#variable-irreg-part-id)**  |
| MamaFieldDescriptor | **[IRREG_PRICE](classWombat_1_1MamdaTradeFields.html#variable-irreg-price)**  |
| MamaFieldDescriptor | **[IRREG_SIZE](classWombat_1_1MamdaTradeFields.html#variable-irreg-size)**  |
| MamaFieldDescriptor | **[IRREG_TIME](classWombat_1_1MamdaTradeFields.html#variable-irreg-time)**  |
| MamaFieldDescriptor | **[ORIG_PART_ID](classWombat_1_1MamdaTradeFields.html#variable-orig-part-id)**  |
| MamaFieldDescriptor | **[ORIG_PRICE](classWombat_1_1MamdaTradeFields.html#variable-orig-price)**  |
| MamaFieldDescriptor | **[ORIG_SIZE](classWombat_1_1MamdaTradeFields.html#variable-orig-size)**  |
| MamaFieldDescriptor | **[ORIG_SEQNUM](classWombat_1_1MamdaTradeFields.html#variable-orig-seqnum)**  |
| MamaFieldDescriptor | **[ORIG_TRADE_QUALIFIER](classWombat_1_1MamdaTradeFields.html#variable-orig-trade-qualifier)**  |
| MamaFieldDescriptor | **[ORIG_SALE_CONDITION](classWombat_1_1MamdaTradeFields.html#variable-orig-sale-condition)**  |
| MamaFieldDescriptor | **[ORIG_SELLERS_SALE_DAYS](classWombat_1_1MamdaTradeFields.html#variable-orig-sellers-sale-days)**  |
| MamaFieldDescriptor | **[ORIG_STOP_STOCK_IND](classWombat_1_1MamdaTradeFields.html#variable-orig-stop-stock-ind)**  |
| MamaFieldDescriptor | **[CORR_PART_ID](classWombat_1_1MamdaTradeFields.html#variable-corr-part-id)**  |
| MamaFieldDescriptor | **[CORR_PRICE](classWombat_1_1MamdaTradeFields.html#variable-corr-price)**  |
| MamaFieldDescriptor | **[CORR_SIZE](classWombat_1_1MamdaTradeFields.html#variable-corr-size)**  |
| MamaFieldDescriptor | **[CORR_TRADE_QUALIFIER](classWombat_1_1MamdaTradeFields.html#variable-corr-trade-qualifier)**  |
| MamaFieldDescriptor | **[CORR_SALE_CONDITION](classWombat_1_1MamdaTradeFields.html#variable-corr-sale-condition)**  |
| MamaFieldDescriptor | **[CORR_SELLERS_SALE_DAYS](classWombat_1_1MamdaTradeFields.html#variable-corr-sellers-sale-days)**  |
| MamaFieldDescriptor | **[CORR_STOP_STOCK_IND](classWombat_1_1MamdaTradeFields.html#variable-corr-stop-stock-ind)**  |
| MamaFieldDescriptor | **[CORR_TIME](classWombat_1_1MamdaTradeFields.html#variable-corr-time)**  |
| MamaFieldDescriptor | **[CANCEL_TIME](classWombat_1_1MamdaTradeFields.html#variable-cancel-time)**  |
| MamaFieldDescriptor | **[TRADE_ID](classWombat_1_1MamdaTradeFields.html#variable-trade-id)**  |
| MamaFieldDescriptor | **[ORIG_TRADE_ID](classWombat_1_1MamdaTradeFields.html#variable-orig-trade-id)**  |
| MamaFieldDescriptor | **[CORR_TRADE_ID](classWombat_1_1MamdaTradeFields.html#variable-corr-trade-id)**  |
| MamaFieldDescriptor | **[PRIMARY_EXCH](classWombat_1_1MamdaTradeFields.html#variable-primary-exch)**  |
| MamaFieldDescriptor | **[TRADE_COUNT](classWombat_1_1MamdaTradeFields.html#variable-trade-count)**  |
| MamaFieldDescriptor | **[BLOCK_COUNT](classWombat_1_1MamdaTradeFields.html#variable-block-count)**  |
| MamaFieldDescriptor | **[BLOCK_VOLUME](classWombat_1_1MamdaTradeFields.html#variable-block-volume)**  |
| MamaFieldDescriptor | **[UPDATE_AS_TRADE](classWombat_1_1MamdaTradeFields.html#variable-update-as-trade)**  |
| MamaFieldDescriptor | **[LAST_SEQNUM](classWombat_1_1MamdaTradeFields.html#variable-last-seqnum)**  |
| MamaFieldDescriptor | **[HIGH_SEQNUM](classWombat_1_1MamdaTradeFields.html#variable-high-seqnum)**  |
| MamaFieldDescriptor | **[LOW_SEQNUM](classWombat_1_1MamdaTradeFields.html#variable-low-seqnum)**  |
| MamaFieldDescriptor | **[TOTAL_VOLUME_SEQNUM](classWombat_1_1MamdaTradeFields.html#variable-total-volume-seqnum)**  |
| MamaFieldDescriptor | **[CURRENCY_CODE](classWombat_1_1MamdaTradeFields.html#variable-currency-code)**  |
| MamaFieldDescriptor | **[CONFLATE_COUNT](classWombat_1_1MamdaTradeFields.html#variable-conflate-count)**  |
| MamaFieldDescriptor | **[SHORT_SALE_CIRCUIT_BREAKER](classWombat_1_1MamdaTradeFields.html#variable-short-sale-circuit-breaker)**  |
| MamaFieldDescriptor | **[ORIG_SHORT_SALE_CIRCUIT_BREAKER](classWombat_1_1MamdaTradeFields.html#variable-orig-short-sale-circuit-breaker)**  |
| MamaFieldDescriptor | **[CORR_SHORT_SALE_CIRCUIT_BREAKER](classWombat_1_1MamdaTradeFields.html#variable-corr-short-sale-circuit-breaker)**  |
| int | **[MAX_FID](classWombat_1_1MamdaTradeFields.html#variable-max-fid)**  |

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

Set the dictionary for common trade fields. Maintains a cache of MamaFieldDescriptors for common trade related fields. The 

**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary
  * **properties** A NameValueCollection object containing field mappings. (See [MamdaFields](classWombat_1_1MamdaFields.html) for further details)


`properties` parameter allows users of the API to map the common dictionary names to something else if they are being published under different names.


### function getMaxFid

```csharp
static int getMaxFid()
```

Returns the maximum field descriptor identifier in the dictionary 

**Return**: 

### function isSet

```csharp
static bool isSet()
```


### function reset

```csharp
static void reset()
```


## Public Attributes Documentation

### variable SYMBOL

```csharp
static MamaFieldDescriptor SYMBOL = null;
```


### variable ISSUE_SYMBOL

```csharp
static MamaFieldDescriptor ISSUE_SYMBOL = null;
```


### variable PART_ID

```csharp
static MamaFieldDescriptor PART_ID = null;
```


### variable SRC_TIME

```csharp
static MamaFieldDescriptor SRC_TIME = null;
```


### variable ACTIVITY_TIME

```csharp
static MamaFieldDescriptor ACTIVITY_TIME = null;
```


### variable LINE_TIME

```csharp
static MamaFieldDescriptor LINE_TIME = null;
```


### variable SEND_TIME

```csharp
static MamaFieldDescriptor SEND_TIME = null;
```


### variable PUB_ID

```csharp
static MamaFieldDescriptor PUB_ID = null;
```


### variable TRADE_PRICE

```csharp
static MamaFieldDescriptor TRADE_PRICE = null;
```


### variable TRADE_DATE

```csharp
static MamaFieldDescriptor TRADE_DATE = null;
```


### variable TRADE_TIME

```csharp
static MamaFieldDescriptor TRADE_TIME = null;
```


### variable TRADE_DIRECTION

```csharp
static MamaFieldDescriptor TRADE_DIRECTION = null;
```


### variable LAST_PRICE

```csharp
static MamaFieldDescriptor LAST_PRICE = null;
```


### variable LAST_VOLUME

```csharp
static MamaFieldDescriptor LAST_VOLUME = null;
```


### variable LAST_PART_ID

```csharp
static MamaFieldDescriptor LAST_PART_ID = null;
```


### variable LAST_TIME

```csharp
static MamaFieldDescriptor LAST_TIME = null;
```


### variable NET_CHANGE

```csharp
static MamaFieldDescriptor NET_CHANGE = null;
```


### variable PCT_CHANGE

```csharp
static MamaFieldDescriptor PCT_CHANGE = null;
```


### variable TRADE_SIZE

```csharp
static MamaFieldDescriptor TRADE_SIZE = null;
```


### variable TOTAL_VOLUME

```csharp
static MamaFieldDescriptor TOTAL_VOLUME = null;
```


### variable OFF_EXCHANGE_TOTAL_VOLUME

```csharp
static MamaFieldDescriptor OFF_EXCHANGE_TOTAL_VOLUME = null;
```


### variable ON_EXCHANGE_TOTAL_VOLUME

```csharp
static MamaFieldDescriptor ON_EXCHANGE_TOTAL_VOLUME = null;
```


### variable TRADE_UNITS

```csharp
static MamaFieldDescriptor TRADE_UNITS = null;
```


### variable HIGH_PRICE

```csharp
static MamaFieldDescriptor HIGH_PRICE = null;
```


### variable LOW_PRICE

```csharp
static MamaFieldDescriptor LOW_PRICE = null;
```


### variable OPEN_PRICE

```csharp
static MamaFieldDescriptor OPEN_PRICE = null;
```


### variable CLOSE_PRICE

```csharp
static MamaFieldDescriptor CLOSE_PRICE = null;
```


### variable CLOSE_DATE

```csharp
static MamaFieldDescriptor CLOSE_DATE = null;
```


### variable PREV_CLOSE_PRICE

```csharp
static MamaFieldDescriptor PREV_CLOSE_PRICE = null;
```


### variable PREV_CLOSE_DATE

```csharp
static MamaFieldDescriptor PREV_CLOSE_DATE = null;
```


### variable ADJ_PREV_CLOSE

```csharp
static MamaFieldDescriptor ADJ_PREV_CLOSE = null;
```


### variable PREV_VOLUME

```csharp
static MamaFieldDescriptor PREV_VOLUME = null;
```


### variable TRADE_SEQNUM

```csharp
static MamaFieldDescriptor TRADE_SEQNUM = null;
```


### variable TRADE_QUALIFIER

```csharp
static MamaFieldDescriptor TRADE_QUALIFIER = null;
```


### variable TRADE_PART_ID

```csharp
static MamaFieldDescriptor TRADE_PART_ID = null;
```


### variable AGGRESSOR_SIDE

```csharp
static MamaFieldDescriptor AGGRESSOR_SIDE = null;
```


### variable TRADE_SIDE

```csharp
static MamaFieldDescriptor TRADE_SIDE = null;
```


### variable TOTAL_VALUE

```csharp
static MamaFieldDescriptor TOTAL_VALUE = null;
```


### variable OFF_EXCHANGE_TOTAL_VALUE

```csharp
static MamaFieldDescriptor OFF_EXCHANGE_TOTAL_VALUE = null;
```


### variable ON_EXCHANGE_TOTAL_VALUE

```csharp
static MamaFieldDescriptor ON_EXCHANGE_TOTAL_VALUE = null;
```


### variable VWAP

```csharp
static MamaFieldDescriptor VWAP = null;
```


### variable OFF_EXCHANGE_VWAP

```csharp
static MamaFieldDescriptor OFF_EXCHANGE_VWAP = null;
```


### variable ON_EXCHANGE_VWAP

```csharp
static MamaFieldDescriptor ON_EXCHANGE_VWAP = null;
```


### variable STD_DEV

```csharp
static MamaFieldDescriptor STD_DEV = null;
```


### variable STD_DEV_SUM

```csharp
static MamaFieldDescriptor STD_DEV_SUM = null;
```


### variable STD_DEV_SUM_SQUARES

```csharp
static MamaFieldDescriptor STD_DEV_SUM_SQUARES = null;
```


### variable ORDER_ID

```csharp
static MamaFieldDescriptor ORDER_ID = null;
```


### variable SETTLE_PRICE

```csharp
static MamaFieldDescriptor SETTLE_PRICE = null;
```


### variable SETTLE_DATE

```csharp
static MamaFieldDescriptor SETTLE_DATE = null;
```


### variable SALE_CONDITION

```csharp
static MamaFieldDescriptor SALE_CONDITION = null;
```


### variable SELLERS_SALE_DAYS

```csharp
static MamaFieldDescriptor SELLERS_SALE_DAYS = null;
```


### variable STOP_STOCK_IND

```csharp
static MamaFieldDescriptor STOP_STOCK_IND = null;
```


### variable TRADE_EXEC_VENUE

```csharp
static MamaFieldDescriptor TRADE_EXEC_VENUE = null;
```


### variable OFF_EXCHANGE_TRADE_PRICE

```csharp
static MamaFieldDescriptor OFF_EXCHANGE_TRADE_PRICE = null;
```


### variable ON_EXCHANGE_TRADE_PRICE

```csharp
static MamaFieldDescriptor ON_EXCHANGE_TRADE_PRICE = null;
```


### variable IS_IRREGULAR

```csharp
static MamaFieldDescriptor IS_IRREGULAR = null;
```


### variable IRREG_PART_ID

```csharp
static MamaFieldDescriptor IRREG_PART_ID = null;
```


### variable IRREG_PRICE

```csharp
static MamaFieldDescriptor IRREG_PRICE = null;
```


### variable IRREG_SIZE

```csharp
static MamaFieldDescriptor IRREG_SIZE = null;
```


### variable IRREG_TIME

```csharp
static MamaFieldDescriptor IRREG_TIME = null;
```


### variable ORIG_PART_ID

```csharp
static MamaFieldDescriptor ORIG_PART_ID = null;
```


### variable ORIG_PRICE

```csharp
static MamaFieldDescriptor ORIG_PRICE = null;
```


### variable ORIG_SIZE

```csharp
static MamaFieldDescriptor ORIG_SIZE = null;
```


### variable ORIG_SEQNUM

```csharp
static MamaFieldDescriptor ORIG_SEQNUM = null;
```


### variable ORIG_TRADE_QUALIFIER

```csharp
static MamaFieldDescriptor ORIG_TRADE_QUALIFIER = null;
```


### variable ORIG_SALE_CONDITION

```csharp
static MamaFieldDescriptor ORIG_SALE_CONDITION = null;
```


### variable ORIG_SELLERS_SALE_DAYS

```csharp
static MamaFieldDescriptor ORIG_SELLERS_SALE_DAYS = null;
```


### variable ORIG_STOP_STOCK_IND

```csharp
static MamaFieldDescriptor ORIG_STOP_STOCK_IND = null;
```


### variable CORR_PART_ID

```csharp
static MamaFieldDescriptor CORR_PART_ID = null;
```


### variable CORR_PRICE

```csharp
static MamaFieldDescriptor CORR_PRICE = null;
```


### variable CORR_SIZE

```csharp
static MamaFieldDescriptor CORR_SIZE = null;
```


### variable CORR_TRADE_QUALIFIER

```csharp
static MamaFieldDescriptor CORR_TRADE_QUALIFIER = null;
```


### variable CORR_SALE_CONDITION

```csharp
static MamaFieldDescriptor CORR_SALE_CONDITION = null;
```


### variable CORR_SELLERS_SALE_DAYS

```csharp
static MamaFieldDescriptor CORR_SELLERS_SALE_DAYS = null;
```


### variable CORR_STOP_STOCK_IND

```csharp
static MamaFieldDescriptor CORR_STOP_STOCK_IND = null;
```


### variable CORR_TIME

```csharp
static MamaFieldDescriptor CORR_TIME = null;
```


### variable CANCEL_TIME

```csharp
static MamaFieldDescriptor CANCEL_TIME = null;
```


### variable TRADE_ID

```csharp
static MamaFieldDescriptor TRADE_ID = null;
```


### variable ORIG_TRADE_ID

```csharp
static MamaFieldDescriptor ORIG_TRADE_ID = null;
```


### variable CORR_TRADE_ID

```csharp
static MamaFieldDescriptor CORR_TRADE_ID = null;
```


### variable PRIMARY_EXCH

```csharp
static MamaFieldDescriptor PRIMARY_EXCH = null;
```


### variable TRADE_COUNT

```csharp
static MamaFieldDescriptor TRADE_COUNT = null;
```


### variable BLOCK_COUNT

```csharp
static MamaFieldDescriptor BLOCK_COUNT = null;
```


### variable BLOCK_VOLUME

```csharp
static MamaFieldDescriptor BLOCK_VOLUME = null;
```


### variable UPDATE_AS_TRADE

```csharp
static MamaFieldDescriptor UPDATE_AS_TRADE = null;
```


### variable LAST_SEQNUM

```csharp
static MamaFieldDescriptor LAST_SEQNUM = null;
```


### variable HIGH_SEQNUM

```csharp
static MamaFieldDescriptor HIGH_SEQNUM = null;
```


### variable LOW_SEQNUM

```csharp
static MamaFieldDescriptor LOW_SEQNUM = null;
```


### variable TOTAL_VOLUME_SEQNUM

```csharp
static MamaFieldDescriptor TOTAL_VOLUME_SEQNUM = null;
```


### variable CURRENCY_CODE

```csharp
static MamaFieldDescriptor CURRENCY_CODE = null;
```


### variable CONFLATE_COUNT

```csharp
static MamaFieldDescriptor CONFLATE_COUNT = null;
```


### variable SHORT_SALE_CIRCUIT_BREAKER

```csharp
static MamaFieldDescriptor SHORT_SALE_CIRCUIT_BREAKER = null;
```


### variable ORIG_SHORT_SALE_CIRCUIT_BREAKER

```csharp
static MamaFieldDescriptor ORIG_SHORT_SALE_CIRCUIT_BREAKER = null;
```


### variable CORR_SHORT_SALE_CIRCUIT_BREAKER

```csharp
static MamaFieldDescriptor CORR_SHORT_SALE_CIRCUIT_BREAKER = null;
```


### variable MAX_FID

```csharp
static int MAX_FID = 0;
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100