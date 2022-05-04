---
title: orderbook/MamdaOrderBookDuplicateEntryException.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/MamdaOrderBookDuplicateEntryException.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::MamdaOrderBookDuplicateEntryException](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookDuplicateEntryException.html)**  |




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

public class MamdaOrderBookDuplicateEntryException
    extends MamdaOrderBookException
{
    private MamdaOrderBookEntry mOrigEntry;
    private MamdaOrderBookEntry mDupEntry;

    public MamdaOrderBookDuplicateEntryException (
        MamdaOrderBookEntry origEntry,
        MamdaOrderBookEntry dupEntry)
    {
        super ("duplicate entry ID");
        mOrigEntry = origEntry;
        mDupEntry = dupEntry;
    }

    public MamdaOrderBookEntry getOrigEntry ()
    {
        return mOrigEntry;
    }

    public MamdaOrderBookEntry getDupEntry ()
    {
        return mDupEntry;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
