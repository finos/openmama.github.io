---
title: orderbook/MamdaOrderBookCheckType.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/MamdaOrderBookCheckType.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::MamdaOrderBookCheckType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckType.html)**  |




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

import com.wombat.mamda.*;

public final class MamdaOrderBookCheckType
{
    private final String mStringValue;
    private final int    mValue;

    private MamdaOrderBookCheckType (String name, int value)
    {
        mStringValue = name;
        mValue       = value;
    }
    
    public String toString ()
    {
        return mStringValue;    
    }

    public static final MamdaOrderBookCheckType NONE = new MamdaOrderBookCheckType 
        ("NONE", 0);
    public static final MamdaOrderBookCheckType SNAPSHOT = new MamdaOrderBookCheckType
        ("SNAPSHOT", 0);
    public static final MamdaOrderBookCheckType APPLY_DELTA = new MamdaOrderBookCheckType
        ("APPLY_DELTA", 0);
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
