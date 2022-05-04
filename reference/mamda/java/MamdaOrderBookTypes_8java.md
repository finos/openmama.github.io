---
title: orderbook/MamdaOrderBookTypes.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/MamdaOrderBookTypes.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::MamdaOrderBookTypes](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookTypes.html)**  |




## Source code

```java
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2012 NYSE Technologies, Inc.
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

package com.wombat.mamda.orderbook;


public class MamdaOrderBookTypes
{
    public static final char MAMDA_BOOK_ACTION_ADD     = 'A';    
    public static final char MAMDA_BOOK_ACTION_UPDATE  = 'U';    
    public static final char MAMDA_BOOK_ACTION_DELETE  = 'D';    
    public static final char MAMDA_BOOK_ACTION_UNKNOWN = 'Z';    
    public static final char MAMDA_BOOK_SIDE_BID      = 'B';    
    public static final char MAMDA_BOOK_SIDE_ASK      = 'A';    
    public static final char MAMDA_BOOK_SIDE_UNKNOWN  = 'Z';    
    public static final char MAMDA_BOOK_REASON_MODIFY  = 'M';
    public static final char MAMDA_BOOK_REASON_CANCEL  = 'C';
    public static final char MAMDA_BOOK_REASON_TRADE   = 'T';
    public static final char MAMDA_BOOK_REASON_CLOSE   = 'c';
    public static final char MAMDA_BOOK_REASON_DROP    = 'N';   // dropped out of top-N
    public static final char MAMDA_BOOK_REASON_MISC    = 'm';
    public static final char MAMDA_BOOK_REASON_UNKNOWN = 'Z';

    public static final char MAMDA_PROP_MSG_TYPE_UPDATE = 'U';
    public static final char MAMDA_PROP_MSG_TYPE_RECAP  = 'R';
    
    public static final char MAMDA_BOOK_LEVEL_LIMIT    = 'L';
    public static final char MAMDA_BOOK_LEVEL_MARKET   = 'M';
    public static final char MAMDA_BOOK_LEVEL_UNKNOWN  = 'U';

}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
