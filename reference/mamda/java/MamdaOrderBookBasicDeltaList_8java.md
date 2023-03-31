---
title: orderbook/MamdaOrderBookBasicDeltaList.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/MamdaOrderBookBasicDeltaList.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::MamdaOrderBookBasicDeltaList](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookBasicDeltaList.html)**  |




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
import java.io.PrintWriter;
import java.util.*;

public class MamdaOrderBookBasicDeltaList
{
    public static final int MOD_SIDES_NONE        = 0;
    public static final int MOD_SIDES_BID         = 1;
    public static final int MOD_SIDES_ASK         = 2;
    public static final int MOD_SIDES_BID_AND_ASK = 3;

    volatile LinkedList mDeltas;
    MamdaOrderBook      mBook;
    int                 mModSides;
    boolean             mKeepDeltas;

    public MamdaOrderBookBasicDeltaList ()
    {
        mDeltas     = new LinkedList ();
        mBook       = null;
        mModSides   = MOD_SIDES_NONE;
        mKeepDeltas = true;
    }

    public void clear ()
    {
        mDeltas.clear ();
        mBook     = null;
        mModSides = MOD_SIDES_NONE;
    }

    public void setKeepBasicDeltas (boolean keep)
    {
        mKeepDeltas = keep;
    }

    public int getModifiedSides ()
    {
        return mModSides;
    }

    public void add (MamdaOrderBookEntry      entry,
                     MamdaOrderBookPriceLevel level,
                     double                   plDeltaSize,
                     char                     plAction,
                     char                     entryAction)
    {
        if (mKeepDeltas)
        {
            MamdaOrderBookBasicDelta basicDelta =
                new MamdaOrderBookBasicDelta ();
            basicDelta.set (entry, level, plDeltaSize, plAction, entryAction);
            mDeltas.add (basicDelta);
        }
        checkSide (level);
    }

    void add (MamdaOrderBookBasicDelta delta)
    {
        if (mKeepDeltas)
        {
            MamdaOrderBookBasicDelta  basicDelta =
                new MamdaOrderBookBasicDelta (delta);
            mDeltas.add (basicDelta);
        }
        checkSide (delta.getPriceLevel());
    }

    void setOrderBook (MamdaOrderBook book)
    {
        mBook = book;
    }

    public MamdaOrderBook getOrderBook ()
    {
        return mBook;
    }

    public long getSize ()
    {
       return mDeltas.size ();
    }

    void fixPriceLevelActions ()
    {
        if (mDeltas.size () > 0)
        {
            // First change all actions where first is an add.
            MamdaOrderBookBasicDelta firstSamePlDelta = null;
            ListIterator i = mDeltas.listIterator (0);
            while (i.hasNext ())
            {
                MamdaOrderBookBasicDelta delta =
                    (MamdaOrderBookBasicDelta) i.next ();
                MamdaOrderBookPriceLevel pl = delta.getPriceLevel ();
                if (firstSamePlDelta != null &&
                    (pl == firstSamePlDelta.getPriceLevel ()))
                {
                    if (firstSamePlDelta.getPlDeltaAction () ==
                        MamdaOrderBookPriceLevel.ACTION_ADD)
                    {
                        delta.setPlDeltaAction (
                            MamdaOrderBookPriceLevel.ACTION_ADD);
                    }
                }
                else
                {
                    firstSamePlDelta = delta;
                }
            }
            // Next change all actions where last is aa delete.
            firstSamePlDelta = null;
            i = mDeltas.listIterator (mDeltas.size ());
            while (i.hasPrevious ())
            {
                MamdaOrderBookBasicDelta delta =
                    (MamdaOrderBookBasicDelta) i.previous ();
                MamdaOrderBookPriceLevel pl = delta.getPriceLevel ();
                if (firstSamePlDelta != null &&
                    (pl == firstSamePlDelta.getPriceLevel ()))
                {
                    if (firstSamePlDelta.getPlDeltaAction () ==
                        MamdaOrderBookPriceLevel.ACTION_DELETE)
                    {
                        delta.setPlDeltaAction (
                            MamdaOrderBookPriceLevel.ACTION_DELETE);
                    }
                }
                else
                {
                    firstSamePlDelta = delta;
                }
            }
        }
    }

    public void dump (OutputStream output)
    {
        PrintWriter out = new PrintWriter (output, true);
        out.println("ComplexUpdate:\n");
        if (mDeltas.size () > 0)
        {
            Iterator i = mDeltas.iterator ();
            while (i.hasNext ())
            {
                MamdaOrderBookBasicDelta delta =
                    (MamdaOrderBookBasicDelta) i.next ();
                out.print ( "  ");
                delta.dump(output);
            }
        }
    }

    public void dump ()
    {
        dump (System.out);
    }

    public Iterator iterator ()
    {
        return mDeltas.iterator ();
    }

    private void checkSide (MamdaOrderBookPriceLevel level)
    {
        if (level == null)
            return;
        if (level.getSide() == MamdaOrderBookPriceLevel.SIDE_BID)
        {
            switch (mModSides)
            {
                case MOD_SIDES_NONE:
                    mModSides = MOD_SIDES_BID;
                    break;
                case MOD_SIDES_ASK:
                    mModSides = MOD_SIDES_BID_AND_ASK;
                    break;
                default:
                    break;
            }
        }
        else
        {
            switch (mModSides)
            {
                case MOD_SIDES_NONE:
                    mModSides = MOD_SIDES_ASK;
                    break;
                case MOD_SIDES_BID:
                    mModSides = MOD_SIDES_BID_AND_ASK;
                    break;
                default:
                    break;
            }
        }
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
