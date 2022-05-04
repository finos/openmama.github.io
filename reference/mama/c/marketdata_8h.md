---
title: mama/marketdata.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/marketdata.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaMdDataType](marketdata_8h.html#enum-mamamddatatype)** { MAMA_MD_DATA_TYPE_STANDARD = 0, MAMA_MD_DATA_TYPE_ORDER_BOOK = 1, MAMA_MD_DATA_TYPE_NEWS_STORY = 2, MAMA_MD_DATA_TYPE_WORLDVIEW = 3, MAMA_MD_DATA_TYPE_PROPERTY = 4, MAMA_MD_DATA_TYPE_USAGE_LOG = 5, MAMA_MD_DATA_TYPE_NEWS_QUERY = 6, MAMA_MD_DATA_TYPE_TEMPLATE = 7} |
| enum| **[mamaMdMsgType](marketdata_8h.html#enum-mamamdmsgtype)** { MAMA_MD_MSG_TYPE_GENERAL = 0, MAMA_MD_MSG_TYPE_CANCEL = 2, MAMA_MD_MSG_TYPE_ERROR = 3, MAMA_MD_MSG_TYPE_CORRECTION = 4, MAMA_MD_MSG_TYPE_CLOSING = 5, MAMA_MD_MSG_TYPE_SYMBOL_DELETE = 7, MAMA_MD_MSG_TYPE_SYMBOL_ACTION = 8, MAMA_MD_MSG_TYPE_PREOPENING = 12, MAMA_MD_MSG_TYPE_QUOTE = 13, MAMA_MD_MSG_TYPE_TRADE = 14, MAMA_MD_MSG_TYPE_BOOK_UPDATE = 15, MAMA_MD_MSG_TYPE_BOOK_INITIAL = 16, MAMA_MD_MSG_TYPE_BOOK_CLEAR = 18, MAMA_MD_MSG_TYPE_IMBALANCE = 22, MAMA_MD_MSG_TYPE_SECURITY_STATUS = 23, MAMA_MD_MSG_TYPE_NEWS_HEADLINE = 24, MAMA_MD_MSG_TYPE_NEWS_STORY = 25, MAMA_MD_MSG_TYPE_NEWS_QUERY = 26, MAMA_MD_MSG_TYPE_MISC = 100} |
| typedef enum mamaMdDataType | **[mamaDataType](marketdata_8h.html#typedef-mamadatatype)**  |
| typedef enum mamaMdMsgType | **[mamaMdMsgType](marketdata_8h.html#typedef-mamamdmsgtype)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mamaMdMsgType | **[mamaMdMsgType_typeForMsg](marketdata_8h.html#function-mamamdmsgtype-typeformsg)**(const mamaMsg msg) |
| const MAMAExpDLL char * | **[mamaMdMsgType_stringForMsg](marketdata_8h.html#function-mamamdmsgtype-stringformsg)**(const mamaMsg msg) |
| const MAMAExpDLL char * | **[mamaMdMsgType_stringForType](marketdata_8h.html#function-mamamdmsgtype-stringfortype)**(mamaMdMsgType type) |
| MAMAExpDLL mamaMsgType | **[mamaMdMsgType_compatMsgType](marketdata_8h.html#function-mamamdmsgtype-compatmsgtype)**(mamaMdMsgType type) |

## Types Documentation

### enum mamaMdDataType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_MD_DATA_TYPE_STANDARD | 0|   |
| MAMA_MD_DATA_TYPE_ORDER_BOOK | 1|   |
| MAMA_MD_DATA_TYPE_NEWS_STORY | 2|   |
| MAMA_MD_DATA_TYPE_WORLDVIEW | 3|   |
| MAMA_MD_DATA_TYPE_PROPERTY | 4|   |
| MAMA_MD_DATA_TYPE_USAGE_LOG | 5|   |
| MAMA_MD_DATA_TYPE_NEWS_QUERY | 6|   |
| MAMA_MD_DATA_TYPE_TEMPLATE | 7|   |




### enum mamaMdMsgType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_MD_MSG_TYPE_GENERAL | 0|  General update (indices, funds)  |
| MAMA_MD_MSG_TYPE_CANCEL | 2|  Trade cancellation.  |
| MAMA_MD_MSG_TYPE_ERROR | 3|  Trade error  |
| MAMA_MD_MSG_TYPE_CORRECTION | 4|  Trade correction.  |
| MAMA_MD_MSG_TYPE_CLOSING | 5|  Closing summary  |
| MAMA_MD_MSG_TYPE_SYMBOL_DELETE | 7|  Symbol deleted  |
| MAMA_MD_MSG_TYPE_SYMBOL_ACTION | 8|  Action related to this symbol, such as a name change or symbol deletion due to option/future expiration, etc.  |
| MAMA_MD_MSG_TYPE_PREOPENING | 12|  Pre-opening summary (e.g. morning "roll")  |
| MAMA_MD_MSG_TYPE_QUOTE | 13|  Quote update.  |
| MAMA_MD_MSG_TYPE_TRADE | 14|  Trade update.  |
| MAMA_MD_MSG_TYPE_BOOK_UPDATE | 15|  Orderbook update  |
| MAMA_MD_MSG_TYPE_BOOK_INITIAL | 16|  Order book initial value. This message is sent rather than MAMA_MD_MSG_TYPE_INITIAL for order books.  |
| MAMA_MD_MSG_TYPE_BOOK_CLEAR | 18|  Orderbook clear  |
| MAMA_MD_MSG_TYPE_IMBALANCE | 22|  Order imbalance or noimbalance update  |
| MAMA_MD_MSG_TYPE_SECURITY_STATUS | 23|  Security status update  |
| MAMA_MD_MSG_TYPE_NEWS_HEADLINE | 24|  News headline  |
| MAMA_MD_MSG_TYPE_NEWS_STORY | 25|  News Story  |
| MAMA_MD_MSG_TYPE_NEWS_QUERY | 26|  News query  |
| MAMA_MD_MSG_TYPE_MISC | 100|  Miscellaneous.  |




### typedef mamaDataType

```cpp
typedef enum mamaMdDataType mamaDataType;
```


### typedef mamaMdMsgType

```cpp
typedef enum mamaMdMsgType mamaMdMsgType;
```



## Functions Documentation

### function mamaMdMsgType_typeForMsg

```cpp
MAMAExpDLL mamaMdMsgType mamaMdMsgType_typeForMsg(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


Extract the market data message type from the message.


### function mamaMdMsgType_stringForMsg

```cpp
const MAMAExpDLL char * mamaMdMsgType_stringForMsg(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


Extract the market data message type as a string from a message.


### function mamaMdMsgType_stringForType

```cpp
const MAMAExpDLL char * mamaMdMsgType_stringForType(
    mamaMdMsgType type
)
```


**Parameters**: 

  * **type** The mamaMdMsgType. 


Convert a mamaMdMsgType to a string.


### function mamaMdMsgType_compatMsgType

```cpp
MAMAExpDLL mamaMsgType mamaMdMsgType_compatMsgType(
    mamaMdMsgType type
)
```


**Parameters**: 

  * **type** The mamaMdMsgType. 


Convert a mamaMdMsgType to a reasonable backward-compatible mamaMsgType.




## Source code

```cpp
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2011 NYSE Technologies, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA
 */

#ifndef MamaMartketDataH__
#define MamaMartketDataH__

/* 
 * This file provides type definitions and function declarations for
 * MAMA types related to market data applications.
 */

#include "mama/config.h"
#include "mama/types.h"
#include "mama/msgtype.h"

#if defined(__cplusplus)
extern "C" {
#endif


typedef enum mamaMdDataType
{
    MAMA_MD_DATA_TYPE_STANDARD   = 0,
    MAMA_MD_DATA_TYPE_ORDER_BOOK = 1,
    MAMA_MD_DATA_TYPE_NEWS_STORY = 2,
    MAMA_MD_DATA_TYPE_WORLDVIEW  = 3,
    MAMA_MD_DATA_TYPE_PROPERTY   = 4,
    MAMA_MD_DATA_TYPE_USAGE_LOG  = 5,
    MAMA_MD_DATA_TYPE_NEWS_QUERY = 6,
    MAMA_MD_DATA_TYPE_TEMPLATE   = 7
} mamaDataType;


typedef enum mamaMdMsgType
{
    MAMA_MD_MSG_TYPE_GENERAL            = 0,

    MAMA_MD_MSG_TYPE_CANCEL             = 2,  

    MAMA_MD_MSG_TYPE_ERROR              = 3,  

    MAMA_MD_MSG_TYPE_CORRECTION         = 4,  

    MAMA_MD_MSG_TYPE_CLOSING            = 5,  

    MAMA_MD_MSG_TYPE_SYMBOL_DELETE      = 7,

    MAMA_MD_MSG_TYPE_SYMBOL_ACTION      = 8,  

    MAMA_MD_MSG_TYPE_PREOPENING         = 12, 

    MAMA_MD_MSG_TYPE_QUOTE              = 13, 

    MAMA_MD_MSG_TYPE_TRADE              = 14, 

    MAMA_MD_MSG_TYPE_BOOK_UPDATE        = 15,

    MAMA_MD_MSG_TYPE_BOOK_INITIAL       = 16,

    MAMA_MD_MSG_TYPE_BOOK_CLEAR         = 18,

    MAMA_MD_MSG_TYPE_IMBALANCE          = 22,
    
    MAMA_MD_MSG_TYPE_SECURITY_STATUS    = 23,

    MAMA_MD_MSG_TYPE_NEWS_HEADLINE      = 24,

    MAMA_MD_MSG_TYPE_NEWS_STORY         = 25,

    MAMA_MD_MSG_TYPE_NEWS_QUERY         = 26,
    
    MAMA_MD_MSG_TYPE_MISC               = 100

} mamaMdMsgType;


MAMAExpDLL
extern mamaMdMsgType 
mamaMdMsgType_typeForMsg (const mamaMsg msg);

MAMAExpDLL
extern const char* 
mamaMdMsgType_stringForMsg (const mamaMsg msg);

MAMAExpDLL
extern const char* 
mamaMdMsgType_stringForType (mamaMdMsgType type);

MAMAExpDLL
extern mamaMsgType
mamaMdMsgType_compatMsgType (mamaMdMsgType type);

#if defined(__cplusplus)
}
#endif

#endif  /* MamaMartketDataH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
