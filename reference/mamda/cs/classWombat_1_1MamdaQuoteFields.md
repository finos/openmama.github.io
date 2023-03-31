---
title: Wombat::MamdaQuoteFields
summary: Cache of common Quote related field descriptors. This is required to be populated if using the MamdaQuoteListener. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteFields



Cache of common Quote related field descriptors. This is required to be populated if using the [MamdaQuoteListener](). 

Inherits from [Wombat.MamdaFields](classWombat_1_1MamdaFields.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDictionary](classWombat_1_1MamdaQuoteFields.html#function-setdictionary)**(MamaDictionary dictionary, NameValueCollection properties)<br>Set the dictionary for common quote fields. Maintains a cache of MamaFieldDescriptors for common quote related fields. The  |
| int | **[getMaxFid](classWombat_1_1MamdaQuoteFields.html#function-getmaxfid)**() |
| bool | **[isSet](classWombat_1_1MamdaQuoteFields.html#function-isset)**() |
| void | **[reset](classWombat_1_1MamdaQuoteFields.html#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaFieldDescriptor | **[SYMBOL](classWombat_1_1MamdaQuoteFields.html#variable-symbol)**  |
| MamaFieldDescriptor | **[ISSUE_SYMBOL](classWombat_1_1MamdaQuoteFields.html#variable-issue-symbol)**  |
| MamaFieldDescriptor | **[PART_ID](classWombat_1_1MamdaQuoteFields.html#variable-part-id)**  |
| MamaFieldDescriptor | **[SRC_TIME](classWombat_1_1MamdaQuoteFields.html#variable-src-time)**  |
| MamaFieldDescriptor | **[ACTIVITY_TIME](classWombat_1_1MamdaQuoteFields.html#variable-activity-time)**  |
| MamaFieldDescriptor | **[LINE_TIME](classWombat_1_1MamdaQuoteFields.html#variable-line-time)**  |
| MamaFieldDescriptor | **[SEND_TIME](classWombat_1_1MamdaQuoteFields.html#variable-send-time)**  |
| MamaFieldDescriptor | **[PUB_ID](classWombat_1_1MamdaQuoteFields.html#variable-pub-id)**  |
| MamaFieldDescriptor | **[BID_PRICE](classWombat_1_1MamdaQuoteFields.html#variable-bid-price)**  |
| MamaFieldDescriptor | **[BID_SIZE](classWombat_1_1MamdaQuoteFields.html#variable-bid-size)**  |
| MamaFieldDescriptor | **[BID_PART_ID](classWombat_1_1MamdaQuoteFields.html#variable-bid-part-id)**  |
| MamaFieldDescriptor | **[BID_DEPTH](classWombat_1_1MamdaQuoteFields.html#variable-bid-depth)**  |
| MamaFieldDescriptor | **[BID_CLOSE_PRICE](classWombat_1_1MamdaQuoteFields.html#variable-bid-close-price)**  |
| MamaFieldDescriptor | **[BID_CLOSE_DATE](classWombat_1_1MamdaQuoteFields.html#variable-bid-close-date)**  |
| MamaFieldDescriptor | **[BID_PREV_CLOSE_PRICE](classWombat_1_1MamdaQuoteFields.html#variable-bid-prev-close-price)**  |
| MamaFieldDescriptor | **[BID_PREV_CLOSE_DATE](classWombat_1_1MamdaQuoteFields.html#variable-bid-prev-close-date)**  |
| MamaFieldDescriptor | **[BID_HIGH](classWombat_1_1MamdaQuoteFields.html#variable-bid-high)**  |
| MamaFieldDescriptor | **[BID_LOW](classWombat_1_1MamdaQuoteFields.html#variable-bid-low)**  |
| MamaFieldDescriptor | **[ASK_PRICE](classWombat_1_1MamdaQuoteFields.html#variable-ask-price)**  |
| MamaFieldDescriptor | **[ASK_SIZE](classWombat_1_1MamdaQuoteFields.html#variable-ask-size)**  |
| MamaFieldDescriptor | **[ASK_PART_ID](classWombat_1_1MamdaQuoteFields.html#variable-ask-part-id)**  |
| MamaFieldDescriptor | **[ASK_DEPTH](classWombat_1_1MamdaQuoteFields.html#variable-ask-depth)**  |
| MamaFieldDescriptor | **[ASK_CLOSE_PRICE](classWombat_1_1MamdaQuoteFields.html#variable-ask-close-price)**  |
| MamaFieldDescriptor | **[ASK_CLOSE_DATE](classWombat_1_1MamdaQuoteFields.html#variable-ask-close-date)**  |
| MamaFieldDescriptor | **[ASK_PREV_CLOSE_PRICE](classWombat_1_1MamdaQuoteFields.html#variable-ask-prev-close-price)**  |
| MamaFieldDescriptor | **[ASK_PREV_CLOSE_DATE](classWombat_1_1MamdaQuoteFields.html#variable-ask-prev-close-date)**  |
| MamaFieldDescriptor | **[ASK_HIGH](classWombat_1_1MamdaQuoteFields.html#variable-ask-high)**  |
| MamaFieldDescriptor | **[ASK_LOW](classWombat_1_1MamdaQuoteFields.html#variable-ask-low)**  |
| MamaFieldDescriptor | **[QUOTE_SEQ_NUM](classWombat_1_1MamdaQuoteFields.html#variable-quote-seq-num)**  |
| MamaFieldDescriptor | **[QUOTE_TIME](classWombat_1_1MamdaQuoteFields.html#variable-quote-time)**  |
| MamaFieldDescriptor | **[QUOTE_DATE](classWombat_1_1MamdaQuoteFields.html#variable-quote-date)**  |
| MamaFieldDescriptor | **[QUOTE_QUAL](classWombat_1_1MamdaQuoteFields.html#variable-quote-qual)**  |
| MamaFieldDescriptor | **[QUOTE_QUAL_NATIVE](classWombat_1_1MamdaQuoteFields.html#variable-quote-qual-native)**  |
| MamaFieldDescriptor | **[QUOTE_COUNT](classWombat_1_1MamdaQuoteFields.html#variable-quote-count)**  |
| MamaFieldDescriptor | **[CONFLATE_COUNT](classWombat_1_1MamdaQuoteFields.html#variable-conflate-count)**  |
| MamaFieldDescriptor | **[SHORT_SALE_BID_TICK](classWombat_1_1MamdaQuoteFields.html#variable-short-sale-bid-tick)**  |
| MamaFieldDescriptor | **[BID_TICK](classWombat_1_1MamdaQuoteFields.html#variable-bid-tick)**  |
| MamaFieldDescriptor | **[ASK_TIME](classWombat_1_1MamdaQuoteFields.html#variable-ask-time)**  |
| MamaFieldDescriptor | **[BID_TIME](classWombat_1_1MamdaQuoteFields.html#variable-bid-time)**  |
| MamaFieldDescriptor | **[ASK_INDICATOR](classWombat_1_1MamdaQuoteFields.html#variable-ask-indicator)**  |
| MamaFieldDescriptor | **[BID_INDICATOR](classWombat_1_1MamdaQuoteFields.html#variable-bid-indicator)**  |
| MamaFieldDescriptor | **[ASK_UPDATE_COUNT](classWombat_1_1MamdaQuoteFields.html#variable-ask-update-count)**  |
| MamaFieldDescriptor | **[BID_UPDATE_COUNT](classWombat_1_1MamdaQuoteFields.html#variable-bid-update-count)**  |
| MamaFieldDescriptor | **[ASK_YIELD](classWombat_1_1MamdaQuoteFields.html#variable-ask-yield)**  |
| MamaFieldDescriptor | **[BID_YIELD](classWombat_1_1MamdaQuoteFields.html#variable-bid-yield)**  |
| MamaFieldDescriptor | **[SHORT_SALE_CIRCUIT_BREAKER](classWombat_1_1MamdaQuoteFields.html#variable-short-sale-circuit-breaker)**  |
| int | **[MAX_FID](classWombat_1_1MamdaQuoteFields.html#variable-max-fid)**  |

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

Set the dictionary for common quote fields. Maintains a cache of MamaFieldDescriptors for common quote related fields. The 

**Parameters**: 

  * **dictionary** A reference to a valid MamaDictionary
  * **properties** A NameValueCollection object containing field mappings. (See [MamdaFields](classWombat_1_1MamdaFields.html) for more information)


`properties` parameter allows users of the API to map the common dictionary names to something else if they are beig published under different names.


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


### variable BID_PRICE

```csharp
static MamaFieldDescriptor BID_PRICE = null;
```


### variable BID_SIZE

```csharp
static MamaFieldDescriptor BID_SIZE = null;
```


### variable BID_PART_ID

```csharp
static MamaFieldDescriptor BID_PART_ID = null;
```


### variable BID_DEPTH

```csharp
static MamaFieldDescriptor BID_DEPTH = null;
```


### variable BID_CLOSE_PRICE

```csharp
static MamaFieldDescriptor BID_CLOSE_PRICE = null;
```


### variable BID_CLOSE_DATE

```csharp
static MamaFieldDescriptor BID_CLOSE_DATE = null;
```


### variable BID_PREV_CLOSE_PRICE

```csharp
static MamaFieldDescriptor BID_PREV_CLOSE_PRICE = null;
```


### variable BID_PREV_CLOSE_DATE

```csharp
static MamaFieldDescriptor BID_PREV_CLOSE_DATE = null;
```


### variable BID_HIGH

```csharp
static MamaFieldDescriptor BID_HIGH = null;
```


### variable BID_LOW

```csharp
static MamaFieldDescriptor BID_LOW = null;
```


### variable ASK_PRICE

```csharp
static MamaFieldDescriptor ASK_PRICE = null;
```


### variable ASK_SIZE

```csharp
static MamaFieldDescriptor ASK_SIZE = null;
```


### variable ASK_PART_ID

```csharp
static MamaFieldDescriptor ASK_PART_ID = null;
```


### variable ASK_DEPTH

```csharp
static MamaFieldDescriptor ASK_DEPTH = null;
```


### variable ASK_CLOSE_PRICE

```csharp
static MamaFieldDescriptor ASK_CLOSE_PRICE = null;
```


### variable ASK_CLOSE_DATE

```csharp
static MamaFieldDescriptor ASK_CLOSE_DATE = null;
```


### variable ASK_PREV_CLOSE_PRICE

```csharp
static MamaFieldDescriptor ASK_PREV_CLOSE_PRICE = null;
```


### variable ASK_PREV_CLOSE_DATE

```csharp
static MamaFieldDescriptor ASK_PREV_CLOSE_DATE = null;
```


### variable ASK_HIGH

```csharp
static MamaFieldDescriptor ASK_HIGH = null;
```


### variable ASK_LOW

```csharp
static MamaFieldDescriptor ASK_LOW = null;
```


### variable QUOTE_SEQ_NUM

```csharp
static MamaFieldDescriptor QUOTE_SEQ_NUM = null;
```


### variable QUOTE_TIME

```csharp
static MamaFieldDescriptor QUOTE_TIME = null;
```


### variable QUOTE_DATE

```csharp
static MamaFieldDescriptor QUOTE_DATE = null;
```


### variable QUOTE_QUAL

```csharp
static MamaFieldDescriptor QUOTE_QUAL = null;
```


### variable QUOTE_QUAL_NATIVE

```csharp
static MamaFieldDescriptor QUOTE_QUAL_NATIVE = null;
```


### variable QUOTE_COUNT

```csharp
static MamaFieldDescriptor QUOTE_COUNT = null;
```


### variable CONFLATE_COUNT

```csharp
static MamaFieldDescriptor CONFLATE_COUNT = null;
```


### variable SHORT_SALE_BID_TICK

```csharp
static MamaFieldDescriptor SHORT_SALE_BID_TICK = null;
```


### variable BID_TICK

```csharp
static MamaFieldDescriptor BID_TICK = null;
```


### variable ASK_TIME

```csharp
static MamaFieldDescriptor ASK_TIME = null;
```


### variable BID_TIME

```csharp
static MamaFieldDescriptor BID_TIME = null;
```


### variable ASK_INDICATOR

```csharp
static MamaFieldDescriptor ASK_INDICATOR = null;
```


### variable BID_INDICATOR

```csharp
static MamaFieldDescriptor BID_INDICATOR = null;
```


### variable ASK_UPDATE_COUNT

```csharp
static MamaFieldDescriptor ASK_UPDATE_COUNT = null;
```


### variable BID_UPDATE_COUNT

```csharp
static MamaFieldDescriptor BID_UPDATE_COUNT = null;
```


### variable ASK_YIELD

```csharp
static MamaFieldDescriptor ASK_YIELD = null;
```


### variable BID_YIELD

```csharp
static MamaFieldDescriptor BID_YIELD = null;
```


### variable SHORT_SALE_CIRCUIT_BREAKER

```csharp
static MamaFieldDescriptor SHORT_SALE_CIRCUIT_BREAKER = null;
```


### variable MAX_FID

```csharp
static int MAX_FID = 0;
```


-------------------------------

Updated on 2023-03-31 at 15:30:13 +0100