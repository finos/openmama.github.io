---
title: mama/msgtype.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/msgtype.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaMsgType](msgtype_8h.html#enum-mamamsgtype)** { MAMA_MSG_TYPE_UPDATE =   0, MAMA_MSG_TYPE_INITIAL =   1, MAMA_MSG_TYPE_CANCEL =   2, MAMA_MSG_TYPE_ERROR =   3, MAMA_MSG_TYPE_CORRECTION =   4, MAMA_MSG_TYPE_CLOSING =   5, MAMA_MSG_TYPE_RECAP =   6, MAMA_MSG_TYPE_DELETE =   7, MAMA_MSG_TYPE_EXPIRE =   8, MAMA_MSG_TYPE_SNAPSHOT =   9, MAMA_MSG_TYPE_PREOPENING =   12, MAMA_MSG_TYPE_QUOTE =   13, MAMA_MSG_TYPE_TRADE =   14, MAMA_MSG_TYPE_ORDER =   15, MAMA_MSG_TYPE_BOOK_INITIAL =   16, MAMA_MSG_TYPE_BOOK_UPDATE =   17, MAMA_MSG_TYPE_BOOK_CLEAR =   18, MAMA_MSG_TYPE_BOOK_RECAP =   19, MAMA_MSG_TYPE_BOOK_SNAPSHOT =   20, MAMA_MSG_TYPE_NOT_PERMISSIONED =   21, MAMA_MSG_TYPE_NOT_FOUND =   22, MAMA_MSG_TYPE_END_OF_INITIALS =   23, MAMA_MSG_TYPE_WOMBAT_REQUEST =   24, MAMA_MSG_TYPE_WOMBAT_CALC =   25, MAMA_MSG_TYPE_SEC_STATUS =   26, MAMA_MSG_TYPE_DDICT_SNAPSHOT =   50, MAMA_MSG_TYPE_MISC =   100, MAMA_MSG_TYPE_TIBRV =   101, MAMA_MSG_TYPE_FEATURE_SET =   150, MAMA_MSG_TYPE_SYNC_REQUEST =   170, MAMA_MSG_TYPE_REFRESH =   171, MAMA_MSG_TYPE_WORLD_VIEW =   172, MAMA_MSG_TYPE_NEWS_QUERY =   173, MAMA_MSG_TYPE_NULL =   175, MAMA_MSG_TYPE_ENTITLEMENTS_REFRESH =   176, MAMA_MSG_TYPE_UNKNOWN =   199} |
| typedef enum mamaMsgType | **[mamaMsgType](msgtype_8h.html#typedef-mamamsgtype)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mamaMsgType | **[mamaMsgType_typeForMsg](msgtype_8h.html#function-mamamsgtype-typeformsg)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsgType_stringForMsg](msgtype_8h.html#function-mamamsgtype-stringformsg)**(const mamaMsg msg) |
| MAMAExpDLL const char * | **[mamaMsgType_stringForType](msgtype_8h.html#function-mamamsgtype-stringfortype)**(mamaMsgType type) |

## Types Documentation

### enum mamaMsgType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_MSG_TYPE_UPDATE |   0|  General update (includes, funds). For direct feeds, the handler sends more specific message types for stocks and order books; however, aggregated feeds will send MAMA_MSG_TYPE_UPDATE for stocks and order books as well.  |
| MAMA_MSG_TYPE_INITIAL |   1|  Initial value. The initial image (full record) for normal subscriptions. The initial value is the first message (several messages for multi-part initialvalues) to arrive with all of the information in the cache. Multi-part initial values only occur on Mama for TIBRV. If the requiresInitial parameter to createSubscription is 0, no initial value is sent.  |
| MAMA_MSG_TYPE_CANCEL |   2|  Trade cancel.  |
| MAMA_MSG_TYPE_ERROR |   3|  An error occurred .  |
| MAMA_MSG_TYPE_CORRECTION |   4|  Trade correction.  |
| MAMA_MSG_TYPE_CLOSING |   5|  Closing summary.  |
| MAMA_MSG_TYPE_RECAP |   6|  Refresh/recap of some/all fields. When the client detects a sequence number gap, it requests a recap from the feed handler. The feed handler may also send recaps in the event of a correction or other event that requires publishing the full record.  |
| MAMA_MSG_TYPE_DELETE |   7|  The feed handler will not send any more updates for the symbol, to the client in question.  |
| MAMA_MSG_TYPE_EXPIRE |   8|  Expired option or future.  |
| MAMA_MSG_TYPE_SNAPSHOT |   9|  A snapshot is the same as an initial value; however, the client will not receive any subsequent updates. Clients request snapshots by creating snapshot subscriptions.  |
| MAMA_MSG_TYPE_PREOPENING |   12|  Pre-opening summary (e.g. morning "roll").  |
| MAMA_MSG_TYPE_QUOTE |   13|  Quote updates.  |
| MAMA_MSG_TYPE_TRADE |   14|  Trade updates.  |
| MAMA_MSG_TYPE_ORDER |   15|  Order updates.  |
| MAMA_MSG_TYPE_BOOK_INITIAL |   16|  Order book initial value. This message is sent rather than MAMA_MSG_TYPE_INITIAL for order books.  |
| MAMA_MSG_TYPE_BOOK_UPDATE |   17|  Order book update. Sent for order books rather than MAMA_MSG_TYPE_UPDATE.  |
| MAMA_MSG_TYPE_BOOK_CLEAR |   18|  Order book clear. All the entries should be removed from the book.  |
| MAMA_MSG_TYPE_BOOK_RECAP |   19|  Order book recap. Sent rather than MAMA_MSG_TYPE_RECAP for order books  |
| MAMA_MSG_TYPE_BOOK_SNAPSHOT |   20|  Order book recap. Sent rather than MAMA_MSG_TYPE_SNAPSHOT for order books  |
| MAMA_MSG_TYPE_NOT_PERMISSIONED |   21|  Not permissioned on the feed  |
| MAMA_MSG_TYPE_NOT_FOUND |   22|  The symbols was not found but may show up later. This indicates that the symbol is not currently in the feed handler's cache, but may get added later. The feed handler must be configured with OrderBookNotFoundAction and RecordNotFoundAction set to not_found to enable this behavior.  |
| MAMA_MSG_TYPE_END_OF_INITIALS |   23|  End of group of initial values. Marks the last initial value for group subscriptions.  |
| MAMA_MSG_TYPE_WOMBAT_REQUEST |   24|  A service request  |
| MAMA_MSG_TYPE_WOMBAT_CALC |   25|  A calculated result.  |
| MAMA_MSG_TYPE_SEC_STATUS |   26|  Security status update  |
| MAMA_MSG_TYPE_DDICT_SNAPSHOT |   50|  Data dictionary. This message contains the data dictionary.  |
| MAMA_MSG_TYPE_MISC |   100|  Miscellaneous  |
| MAMA_MSG_TYPE_TIBRV |   101|  Returned if an RV error is encountered the MsgStatus will be the tibrv_status  |
| MAMA_MSG_TYPE_FEATURE_SET |   150|  MAMA applications do NOT need to process the following message types. These are all internal messages. The set of features and related params for a particular publisher.  |
| MAMA_MSG_TYPE_SYNC_REQUEST |   170|  Subscription synchronization request.  |
| MAMA_MSG_TYPE_REFRESH |   171|  Subscription refresh.  |
| MAMA_MSG_TYPE_WORLD_VIEW |   172|  World View request.  |
| MAMA_MSG_TYPE_NEWS_QUERY |   173|  News query.  |
| MAMA_MSG_TYPE_NULL |   175|  Keep alive message.  |
| MAMA_MSG_TYPE_ENTITLEMENTS_REFRESH |   176|   |
| MAMA_MSG_TYPE_UNKNOWN |   199|  Unknown, not covered by any of the above.  |




### typedef mamaMsgType

```cpp
typedef enum mamaMsgType mamaMsgType;
```



## Functions Documentation

### function mamaMsgType_typeForMsg

```cpp
MAMAExpDLL mamaMsgType mamaMsgType_typeForMsg(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


Extract the type from the message


### function mamaMsgType_stringForMsg

```cpp
MAMAExpDLL const char * mamaMsgType_stringForMsg(
    const mamaMsg msg
)
```


**Parameters**: 

  * **msg** The message. 


Extract the type as a string from a message.


### function mamaMsgType_stringForType

```cpp
MAMAExpDLL const char * mamaMsgType_stringForType(
    mamaMsgType type
)
```


**Parameters**: 

  * **type** The mamaMsgType. 


Convert a mamaMsgType to a string.




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

#ifndef MamaMsgTypeH__
#define MamaMsgTypeH__

/*
 * This file provides MAMA message type information.
 */

#include "mama/types.h"

#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaMsgType
{
    MAMA_MSG_TYPE_UPDATE            =   0,

    MAMA_MSG_TYPE_INITIAL           =   1,

    MAMA_MSG_TYPE_CANCEL            =   2,

    MAMA_MSG_TYPE_ERROR             =   3,

    MAMA_MSG_TYPE_CORRECTION        =   4,

    MAMA_MSG_TYPE_CLOSING           =   5,

    MAMA_MSG_TYPE_RECAP             =   6,

    MAMA_MSG_TYPE_DELETE            =   7,

    MAMA_MSG_TYPE_EXPIRE            =   8,

    MAMA_MSG_TYPE_SNAPSHOT          =   9,

    MAMA_MSG_TYPE_PREOPENING        =   12,

    MAMA_MSG_TYPE_QUOTE             =   13,

    MAMA_MSG_TYPE_TRADE             =   14,

    MAMA_MSG_TYPE_ORDER             =   15,

    MAMA_MSG_TYPE_BOOK_INITIAL      =   16, 

    MAMA_MSG_TYPE_BOOK_UPDATE       =   17,

    MAMA_MSG_TYPE_BOOK_CLEAR        =   18,

    MAMA_MSG_TYPE_BOOK_RECAP        =   19,

    MAMA_MSG_TYPE_BOOK_SNAPSHOT     =   20,

    MAMA_MSG_TYPE_NOT_PERMISSIONED  =   21,

    MAMA_MSG_TYPE_NOT_FOUND         =   22,

    MAMA_MSG_TYPE_END_OF_INITIALS   =   23,

    MAMA_MSG_TYPE_WOMBAT_REQUEST    =   24,

    MAMA_MSG_TYPE_WOMBAT_CALC       =   25,

    MAMA_MSG_TYPE_SEC_STATUS        =   26,

    MAMA_MSG_TYPE_DDICT_SNAPSHOT    =   50,

    MAMA_MSG_TYPE_MISC              =   100,

    MAMA_MSG_TYPE_TIBRV             =   101,

    MAMA_MSG_TYPE_FEATURE_SET           =   150,

    MAMA_MSG_TYPE_SYNC_REQUEST          =   170,

    MAMA_MSG_TYPE_REFRESH               =   171,

    MAMA_MSG_TYPE_WORLD_VIEW            =   172,

    MAMA_MSG_TYPE_NEWS_QUERY            =   173,

    MAMA_MSG_TYPE_NULL                  =   175,

    MAMA_MSG_TYPE_ENTITLEMENTS_REFRESH  =   176,

    MAMA_MSG_TYPE_UNKNOWN               =   199
} mamaMsgType;

MAMAExpDLL
extern mamaMsgType
mamaMsgType_typeForMsg (const mamaMsg msg);

MAMAExpDLL
extern const char*
mamaMsgType_stringForMsg (const mamaMsg msg);


MAMAExpDLL
extern const char*
mamaMsgType_stringForType (mamaMsgType type);

#if defined(__cplusplus)
}
#endif

#endif  /* MamaMsgTypeH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
