---
title: options/MamdaOptionUnderlying.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# options/MamdaOptionUnderlying.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::options](namespacecom_1_1wombat_1_1mamda_1_1options.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::options::MamdaOptionUnderlying](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionUnderlying.html)**  |




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

package com.wombat.mamda.options;

import com.wombat.mamda.*;

public class MamdaOptionUnderlying
{
    private MamdaTradeListener  mTradeListener = new MamdaTradeListener();
    private MamdaQuoteListener  mQuoteListener = new MamdaQuoteListener();
    private Object              mCustomObject  = null;

    public MamdaOptionUnderlying ()
    {
    }

    public void addTradeHandler (MamdaTradeHandler handler)
    {
        mTradeListener.addHandler(handler);
    }

    public void addQuoteHandler (MamdaQuoteHandler handler)
    {
        mQuoteListener.addHandler(handler);
    }

    public void setCustomObject (Object object)
    {
        mCustomObject = object;
    }

    public MamdaTradeRecap getTradeInfo ()
    {
        return mTradeListener;
    }

    public MamdaQuoteRecap getQuoteInfo ()
    {
        return mQuoteListener;
    }

    public Object getCustomObject ()
    {
        return mCustomObject;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
