---
title: mamda/MamdaOrderImbalanceType.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaOrderImbalanceType.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaOrderImbalanceType](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceType.html)**  |




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

public final class MamdaOrderImbalanceType
{
    private final int    mValue;
    private final String mDescription;
    public static final int MARKET_IMBALANCE_BUY_VALUE = 16;
    public final static MamdaOrderImbalanceType  MARKET_IMBALANCE_BUY =
    new MamdaOrderImbalanceType (valueToString (MARKET_IMBALANCE_BUY_VALUE),
                                 MARKET_IMBALANCE_BUY_VALUE);

    public static final int MARKET_IMBALANCE_SELL_VALUE =17;
    public final static MamdaOrderImbalanceType  MARKET_IMBALANCE_SELL =
    new MamdaOrderImbalanceType (valueToString (MARKET_IMBALANCE_SELL_VALUE),
                                 MARKET_IMBALANCE_SELL_VALUE);

    public final static int NO_MARKET_IMBALANCE_VALUE = 18;
    public final static MamdaOrderImbalanceType  NO_MARKET_IMBALANCE =
    new MamdaOrderImbalanceType (valueToString (NO_MARKET_IMBALANCE_VALUE),
                                 NO_MARKET_IMBALANCE_VALUE);

    public final static int MOC_IMBALANCE_BUY_VALUE = 19;
    public final static MamdaOrderImbalanceType  MOC_IMBALANCE_BUY =
    new MamdaOrderImbalanceType (valueToString (MOC_IMBALANCE_BUY_VALUE),
                                 MOC_IMBALANCE_BUY_VALUE);

    public final static int MOC_IMBALANCE_SELL_VALUE = 20;
    public final static MamdaOrderImbalanceType  MOC_IMBALANCE_SELL =
    new MamdaOrderImbalanceType (valueToString (MOC_IMBALANCE_SELL_VALUE),
                                 MOC_IMBALANCE_SELL_VALUE);

    public final static int NO_MOC_IMBALANCE_VALUE = 21;
    public final static MamdaOrderImbalanceType  NO_MOC_IMBALANCE =
    new MamdaOrderImbalanceType (valueToString (NO_MOC_IMBALANCE_VALUE),
                                 NO_MOC_IMBALANCE_VALUE);

    public final static int ORDER_IMB_VALUE = 22;
    public final static MamdaOrderImbalanceType ORDER_IMB =
    new MamdaOrderImbalanceType (valueToString (ORDER_IMB_VALUE),
                                 ORDER_IMB_VALUE);

    public final static int ORDER_INF_VALUE = 23;
    public final static MamdaOrderImbalanceType ORDER_INF =
    new MamdaOrderImbalanceType (valueToString (ORDER_INF_VALUE),
                                 ORDER_INF_VALUE);

    public final static int ORDER_IMBALANCE_BUY_VALUE = 24;
    public final static MamdaOrderImbalanceType  ORDER_IMBALANCE_BUY =
    new MamdaOrderImbalanceType (valueToString (ORDER_IMBALANCE_BUY_VALUE),
                                 ORDER_IMBALANCE_BUY_VALUE);
    public final static int ORDER_IMBALANCE_SELL_VALUE = 25;
    public final static MamdaOrderImbalanceType ORDER_IMBALANCE_SELL =
    new MamdaOrderImbalanceType (valueToString (ORDER_IMBALANCE_SELL_VALUE),
                                 ORDER_IMBALANCE_SELL_VALUE);

    public final static int NO_ORDER_IMBALANCE_VALUE = 26;
    public final static MamdaOrderImbalanceType  NO_ORDER_IMBALANCE =
    new MamdaOrderImbalanceType(valueToString (NO_ORDER_IMBALANCE_VALUE),
                                NO_ORDER_IMBALANCE_VALUE);

    public final static int UNKNOWN = -99;
    public final static MamdaOrderImbalanceType TYPE_UNKNOWN =
    new MamdaOrderImbalanceType(valueToString (UNKNOWN),
                                UNKNOWN);


    
    private  MamdaOrderImbalanceType (String type, int value)
    {
        mValue       = value;
        mDescription = type;
    }

    public int getValue ()
    {
        return mValue;
    }

    public String toString()
    {
        return mDescription;
    }

    public static MamdaOrderImbalanceType enumObjectForValue (int value)
    {
        switch (value)
        {
            case MARKET_IMBALANCE_BUY_VALUE:    return MARKET_IMBALANCE_BUY;
            case MARKET_IMBALANCE_SELL_VALUE:   return MARKET_IMBALANCE_SELL;
            case NO_MARKET_IMBALANCE_VALUE:     return NO_MARKET_IMBALANCE;
            case MOC_IMBALANCE_BUY_VALUE:       return MOC_IMBALANCE_BUY;
            case MOC_IMBALANCE_SELL_VALUE:      return MOC_IMBALANCE_SELL;
            case NO_MOC_IMBALANCE_VALUE:        return NO_MOC_IMBALANCE;
            case ORDER_IMB_VALUE:               return ORDER_IMB;
            case ORDER_INF_VALUE:               return ORDER_INF;
            case ORDER_IMBALANCE_BUY_VALUE:     return ORDER_IMBALANCE_BUY;
            case ORDER_IMBALANCE_SELL_VALUE:    return ORDER_IMBALANCE_SELL;
            case NO_ORDER_IMBALANCE_VALUE:      return NO_ORDER_IMBALANCE;
            default:                            return null;
        }
    }

    public static String valueToString (int value)
    {
        switch (value)
        {
            case MARKET_IMBALANCE_BUY_VALUE:    return "MktImbBuy";
            case MARKET_IMBALANCE_SELL_VALUE:   return "MktImbSell";
            case NO_MARKET_IMBALANCE_VALUE:     return "NoMktImb";
            case MOC_IMBALANCE_BUY_VALUE:       return "MocImbBuy";
            case MOC_IMBALANCE_SELL_VALUE:      return "MocImbSell";
            case NO_MOC_IMBALANCE_VALUE:        return "NoMocImb";
            case ORDER_IMB_VALUE:               return "OrderImb";
            case ORDER_INF_VALUE:               return "OrderInf";
            case ORDER_IMBALANCE_BUY_VALUE:     return "OrderImbBuy";
            case ORDER_IMBALANCE_SELL_VALUE:    return "OrderImbSell";
            case NO_ORDER_IMBALANCE_VALUE:      return "OrderImbNone";
            default:                            return "UNKNOWN";
        }
    
    }
    
    public static int stringToValue (String type)
    {
        if (type.compareTo (MARKET_IMBALANCE_BUY.toString())==0)
            return MARKET_IMBALANCE_BUY_VALUE;

        if (type.compareTo (MARKET_IMBALANCE_SELL.toString())==0)
            return MARKET_IMBALANCE_SELL_VALUE;

        if (type.compareTo (NO_MARKET_IMBALANCE.toString ())==0)
            return NO_MARKET_IMBALANCE_VALUE;

        if (type.compareTo (MOC_IMBALANCE_BUY.toString ())==0)
            return MOC_IMBALANCE_BUY_VALUE;

        if (type.compareTo (MOC_IMBALANCE_SELL.toString ())==0)
            return MOC_IMBALANCE_SELL_VALUE;

        if (type.compareTo (NO_MOC_IMBALANCE.toString ())==0)
            return NO_MOC_IMBALANCE_VALUE;

        if (type.compareTo (ORDER_IMB.toString ())== 0)
            return ORDER_IMB_VALUE;

        if (type.compareTo (ORDER_INF.toString ())==0)
            return ORDER_INF_VALUE;

        if (type.compareTo (ORDER_IMBALANCE_BUY.toString ())==0)
            return ORDER_IMBALANCE_BUY_VALUE;

        if (type.compareTo (ORDER_IMBALANCE_SELL.toString ())== 0)
            return ORDER_IMBALANCE_SELL_VALUE;

        if (type.compareTo (NO_ORDER_IMBALANCE.toString ()) ==0)
            return NO_ORDER_IMBALANCE_VALUE;

        /*for fh configured as int */
        if (type.compareTo (String.valueOf (
                                MARKET_IMBALANCE_BUY_VALUE)) == 0)
            return MARKET_IMBALANCE_BUY_VALUE;

        if (type.compareTo (String.valueOf (
                                MARKET_IMBALANCE_SELL_VALUE)) == 0)
            return MARKET_IMBALANCE_SELL_VALUE;

        if (type.compareTo (String.valueOf (
                                NO_MARKET_IMBALANCE_VALUE)) == 0)
            return NO_MARKET_IMBALANCE_VALUE;

        if (type.compareTo (String.valueOf (
                                MOC_IMBALANCE_BUY_VALUE)) == 0)
            return MOC_IMBALANCE_BUY_VALUE;

        if (type.compareTo (String.valueOf (
                                MOC_IMBALANCE_SELL_VALUE)) == 0)
            return MOC_IMBALANCE_SELL_VALUE;

        if (type.compareTo (String.valueOf (
                                NO_MOC_IMBALANCE_VALUE)) == 0)
            return NO_MOC_IMBALANCE_VALUE;

        if (type.compareTo (String.valueOf (
                                ORDER_IMB_VALUE)) == 0)
            return ORDER_IMB_VALUE;

        if (type.compareTo (String.valueOf (
                                ORDER_INF_VALUE)) == 0)
            return ORDER_INF_VALUE;

        if (type.compareTo (String.valueOf( 
                            ORDER_IMBALANCE_BUY_VALUE)) == 0)
            return ORDER_IMBALANCE_BUY_VALUE;

        if (type.compareTo (String.valueOf (
                                ORDER_IMBALANCE_SELL_VALUE))==0)
            return ORDER_IMBALANCE_SELL_VALUE;

        if (type.compareTo (String.valueOf (
                                NO_ORDER_IMBALANCE_VALUE)) == 0)
            return NO_ORDER_IMBALANCE_VALUE;
    
        return UNKNOWN;
    }

    public static boolean isMamdaOrderImbalanceType (int value)
    {
        boolean imbalanceType  = false;
        switch (value)
        {
            case MARKET_IMBALANCE_BUY_VALUE:
            case MARKET_IMBALANCE_SELL_VALUE:
            case MOC_IMBALANCE_BUY_VALUE:
            case MOC_IMBALANCE_SELL_VALUE:
            case ORDER_IMB_VALUE:
            case ORDER_INF_VALUE:
            case ORDER_IMBALANCE_BUY_VALUE:
            case ORDER_IMBALANCE_SELL_VALUE:
            case NO_MARKET_IMBALANCE_VALUE:
            case NO_MOC_IMBALANCE_VALUE: 
            case NO_ORDER_IMBALANCE_VALUE:
                imbalanceType = true;
                break;
            default:
                imbalanceType = false;
                break;
        }
        return imbalanceType;  
    }

    public static boolean isMamdaImbalanceOrder (int value)
    {
        boolean imbalanceOrder  = false;
        switch (value)
        {
            case MARKET_IMBALANCE_BUY_VALUE:
            case MARKET_IMBALANCE_SELL_VALUE:
            case MOC_IMBALANCE_BUY_VALUE:
            case MOC_IMBALANCE_SELL_VALUE:
            case ORDER_IMB_VALUE:
            case ORDER_INF_VALUE:
            case ORDER_IMBALANCE_BUY_VALUE:
            case ORDER_IMBALANCE_SELL_VALUE:
                imbalanceOrder = true;
                break;
            case NO_MARKET_IMBALANCE_VALUE:
            case NO_MOC_IMBALANCE_VALUE: 
            case NO_ORDER_IMBALANCE_VALUE:
                imbalanceOrder = false;
                break;
            default:
                imbalanceOrder = false;
        }
        return imbalanceOrder;  
    } 

    public boolean equals (MamdaOrderImbalanceType imbDataType)
    {
        if (mValue == imbDataType.mValue) 
            return true;
        return false;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
