---
title: mamda/MamdaOrderImbalanceSide.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaOrderImbalanceSide.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html)**  |




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

package com.wombat.mamda;

import com.wombat.mama.*;
import java.util.*;
import java.util.logging.*;
import java.io.*;

/***************************************************************
 *class Imbalance Side
 ***************************************************************/
public final class MamdaOrderImbalanceSide
{
    /* The imbalance side could be either the buy or sell side
       i.e. bid/ask. 0 and 1 representation will be used for
       bid/ask respectively.
    */
    private final int    mValue ;
    private final String mDescription ;

    public final static int BID_SIDE_VALUE = 0;
    public final static MamdaOrderImbalanceSide BID_SIDE = new 
    MamdaOrderImbalanceSide (valueToString (BID_SIDE_VALUE), BID_SIDE_VALUE);
    
    public final static int ASK_SIDE_VALUE = 1; 
    public final static MamdaOrderImbalanceSide ASK_SIDE = new
    MamdaOrderImbalanceSide (valueToString (ASK_SIDE_VALUE), ASK_SIDE_VALUE);

    public final static int NO_IMBALANCE_VALUE = 2;
    public final static MamdaOrderImbalanceSide NO_IMBALANCE_SIDE = new
    MamdaOrderImbalanceSide (valueToString (NO_IMBALANCE_VALUE), NO_IMBALANCE_VALUE);

    public String toString ()
    {
        return mDescription;
    }

    public int getValue ()
    {
        return mValue;
    }

    public boolean equals (MamdaOrderImbalanceSide imbalanceSide)
    {
        if (mValue == imbalanceSide.mValue) 
            return true;
        return false;
    }

    private MamdaOrderImbalanceSide (String desc, int value)
    {
        mDescription = desc;
        mValue       = value;
    }

    public static String valueToString (int value)
    {
        switch (value)
        {
            case ASK_SIDE_VALUE:        return "ASK_SIDE";
            case BID_SIDE_VALUE:        return "BID_SIDE";
            case NO_IMBALANCE_VALUE:    return "NO_IMBALANCE";
            default:                    return "UNKNOWN";
        }
    }

    public static MamdaOrderImbalanceSide enumObjectForValue (int value)
    {
        switch (value)
        {
            case ASK_SIDE_VALUE:        return ASK_SIDE;
            case BID_SIDE_VALUE:        return BID_SIDE;
            case NO_IMBALANCE_VALUE:    return NO_IMBALANCE_SIDE;
            default:                    return null;
        }
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
