---
title: com::wombat::mamda::orderbook::MamdaOrderBookTypes
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookTypes





## Public Attributes

|                | Name           |
| -------------- | -------------- |
| final char | **[MAMDA_BOOK_ACTION_ADD](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-action-add)**  |
| final char | **[MAMDA_BOOK_ACTION_UPDATE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-action-update)**  |
| final char | **[MAMDA_BOOK_ACTION_DELETE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-action-delete)**  |
| final char | **[MAMDA_BOOK_ACTION_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-action-unknown)**  |
| final char | **[MAMDA_BOOK_SIDE_BID](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-side-bid)**  |
| final char | **[MAMDA_BOOK_SIDE_ASK](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-side-ask)**  |
| final char | **[MAMDA_BOOK_SIDE_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-side-unknown)**  |
| final char | **[MAMDA_BOOK_REASON_MODIFY](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-reason-modify)**  |
| final char | **[MAMDA_BOOK_REASON_CANCEL](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-reason-cancel)**  |
| final char | **[MAMDA_BOOK_REASON_TRADE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-reason-trade)**  |
| final char | **[MAMDA_BOOK_REASON_CLOSE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-reason-close)**  |
| final char | **[MAMDA_BOOK_REASON_DROP](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-reason-drop)**  |
| final char | **[MAMDA_BOOK_REASON_MISC](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-reason-misc)**  |
| final char | **[MAMDA_BOOK_REASON_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-reason-unknown)**  |
| final char | **[MAMDA_PROP_MSG_TYPE_UPDATE](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-prop-msg-type-update)**  |
| final char | **[MAMDA_PROP_MSG_TYPE_RECAP](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-prop-msg-type-recap)**  |
| final char | **[MAMDA_BOOK_LEVEL_LIMIT](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-level-limit)**  |
| final char | **[MAMDA_BOOK_LEVEL_MARKET](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-level-market)**  |
| final char | **[MAMDA_BOOK_LEVEL_UNKNOWN](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html#variable-mamda-book-level-unknown)**  |

## Public Attributes Documentation

### variable MAMDA_BOOK_ACTION_ADD

```java
static final char MAMDA_BOOK_ACTION_ADD = 'A';
```


An enumeration for actions on an order book. Note: price level actions differ from entry actions because, for example, a price level message with ACTION_UPDATE may consist of entries with ACTION_ADD, ACTION_UPDATE or ACTION_DELETE. 


### variable MAMDA_BOOK_ACTION_UPDATE

```java
static final char MAMDA_BOOK_ACTION_UPDATE = 'U';
```


A new price level. 


### variable MAMDA_BOOK_ACTION_DELETE

```java
static final char MAMDA_BOOK_ACTION_DELETE = 'D';
```


An updated price level. 


### variable MAMDA_BOOK_ACTION_UNKNOWN

```java
static final char MAMDA_BOOK_ACTION_UNKNOWN = 'Z';
```


A deleted price level. 


### variable MAMDA_BOOK_SIDE_BID

```java
static final char MAMDA_BOOK_SIDE_BID = 'B';
```


Erroneous action (should not occur). An enumeration for the side order book side. "Bid" (or "buy") orders occur on one side and "ask" (or "sell") orders occur on the other. 


### variable MAMDA_BOOK_SIDE_ASK

```java
static final char MAMDA_BOOK_SIDE_ASK = 'A';
```


A bid (buy) order. 


### variable MAMDA_BOOK_SIDE_UNKNOWN

```java
static final char MAMDA_BOOK_SIDE_UNKNOWN = 'Z';
```


An ask (sell) order. 


### variable MAMDA_BOOK_REASON_MODIFY

```java
static final char MAMDA_BOOK_REASON_MODIFY = 'M';
```


Erroneous side (should not occur). An enumeration for a reason for a change. Some of the values of Reason can mean the same thing, as far as their affect on the order book. If possible, a feed will send MODIFY, CANCEL or TRADE actions so that downstream applications that are interested in such data can handle it; other applications can treat such actions in the same way as an UPDATE action (or as a DELETE action if the size is zero). 


### variable MAMDA_BOOK_REASON_CANCEL

```java
static final char MAMDA_BOOK_REASON_CANCEL = 'C';
```


### variable MAMDA_BOOK_REASON_TRADE

```java
static final char MAMDA_BOOK_REASON_TRADE = 'T';
```


### variable MAMDA_BOOK_REASON_CLOSE

```java
static final char MAMDA_BOOK_REASON_CLOSE = 'c';
```


### variable MAMDA_BOOK_REASON_DROP

```java
static final char MAMDA_BOOK_REASON_DROP = 'N';
```


### variable MAMDA_BOOK_REASON_MISC

```java
static final char MAMDA_BOOK_REASON_MISC = 'm';
```


### variable MAMDA_BOOK_REASON_UNKNOWN

```java
static final char MAMDA_BOOK_REASON_UNKNOWN = 'Z';
```


### variable MAMDA_PROP_MSG_TYPE_UPDATE

```java
static final char MAMDA_PROP_MSG_TYPE_UPDATE = 'U';
```


When a message contains properties (ie. for order books). The properties may either be an update or a recap. The default when the type field is not present is UPDATE 


### variable MAMDA_PROP_MSG_TYPE_RECAP

```java
static final char MAMDA_PROP_MSG_TYPE_RECAP = 'R';
```


### variable MAMDA_BOOK_LEVEL_LIMIT

```java
static final char MAMDA_BOOK_LEVEL_LIMIT = 'L';
```


An enumeration for the type of level. "Limit" level orders are set at a specific price. "Market" level orders are set at the current market price. 


### variable MAMDA_BOOK_LEVEL_MARKET

```java
static final char MAMDA_BOOK_LEVEL_MARKET = 'M';
```


### variable MAMDA_BOOK_LEVEL_UNKNOWN

```java
static final char MAMDA_BOOK_LEVEL_UNKNOWN = 'U';
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100