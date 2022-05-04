---
title: orderbook/MamdaOrderBookBasicDelta.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/MamdaOrderBookBasicDelta.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::MamdaOrderBookBasicDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDelta.html)**  |




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

import java.io.OutputStream;
import java.io.PrintStream;

public class MamdaOrderBookBasicDelta
{

    private MamdaOrderBookPriceLevel mPriceLevel;
    private MamdaOrderBookEntry      mEntry;
    private double                   mPlDeltaSize;
    private char                     mPlAction;
    private char                     mEntryAction;

    public MamdaOrderBookBasicDelta ()
    {
        clear ();
    }

    public MamdaOrderBookBasicDelta (MamdaOrderBookBasicDelta source)
    {
        mPriceLevel  = source.mPriceLevel;
        mEntry       = source.mEntry;
        mPlDeltaSize = source.mPlDeltaSize;
        mPlAction    = source.mPlAction;
        mEntryAction = source.mEntryAction;                   
    }

    public void clear ()
    {
        mPriceLevel  = null;
        mEntry       = null;
        mPlDeltaSize = 0.0;
        mPlAction    = MamdaOrderBookEntry.ACTION_UNKNOWN;
        mEntryAction = MamdaOrderBookEntry.ACTION_UNKNOWN;
    }

    public void set (MamdaOrderBookEntry      entry,
                     MamdaOrderBookPriceLevel level,
                     double                   plDeltaSize,
                     char                     plAction,
                     char                     entryAction)
    {
        mPriceLevel  = level;
        mEntry       = entry;
        mPlDeltaSize = plDeltaSize;
        mPlAction    = plAction;
        mEntryAction = entryAction;
    }

    public void setPriceLevel (MamdaOrderBookPriceLevel level)
    {
        mPriceLevel = level;
    }

    public void setPlDeltaAction (char action)
    {
        mPlAction = action;
    }

    public MamdaOrderBookPriceLevel getPriceLevel ()
    {
        return mPriceLevel;
    }

    public MamdaOrderBookEntry getEntry ()
    {
        return mEntry;
    }

    public double getPlDeltaSize ()
    {
        return mPlDeltaSize;
    }

    public char getPlDeltaAction ()
    {
        return mPlAction;
    }

    public char getEntryDeltaAction ()
    {
        return mEntryAction;
    }

    public MamdaOrderBook getOrderBook ()
    {
        if (mPriceLevel != null)
            return mPriceLevel.getOrderBook();
        else
            return null;
    }

    public void dump (OutputStream output)
    {
        PrintStream out = new PrintStream (output, true);
        out.print ("Price=" + mPriceLevel.getPrice ());
        out.print (", Side=" + mPriceLevel.getSide ());
        out.print (", PlDeltaAction=" + mPlAction);
        out.print (", EntryId=" + ((mEntry == null) ? "null" : mEntry.getId ()));
        out.print (", EntryAction=" + mEntryAction + "\n");
    }

    public void dump ()
    {
        dump (System.out);
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
