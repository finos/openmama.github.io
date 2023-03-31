---
title: cs/MamdaTradeSide.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaTradeSide.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaTradeSide](classWombat_1_1MamdaTradeSide.html)**  |




## Source code

```csharp
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

using System;

namespace Wombat
{
public class MamdaTradeSide
{
public enum mamdaTradeSide
{
    TRADE_SIDE_UNKNOWN = 0,
    TRADE_SIDE_BUY     = 1,
    TRADE_SIDE_SELL    = 2
}

 private static string TRADE_SIDE_UNKNOWN_STR = "Unknown";
 private static string TRADE_SIDE_BUY_STR = "Buy";
 private static string TRADE_SIDE_SELL_STR ="Sell";

public static string toString(short tradeSide)
{
    switch (tradeSide)
    {
    case (short)mamdaTradeSide.TRADE_SIDE_BUY:    return TRADE_SIDE_BUY_STR;
    case (short)mamdaTradeSide.TRADE_SIDE_SELL:   return TRADE_SIDE_SELL_STR;
    case (short)mamdaTradeSide.TRADE_SIDE_UNKNOWN: return TRADE_SIDE_UNKNOWN_STR;
    }
    return TRADE_SIDE_UNKNOWN_STR;
}

public static MamdaTradeSide.mamdaTradeSide mamdaTradeSideFromString (string  tradeSide)
{
    if(tradeSide == null)
    {
        return mamdaTradeSide.TRADE_SIDE_UNKNOWN;
    }

    if (String.Compare(tradeSide,TRADE_SIDE_BUY_STR,false) == 0)
        return mamdaTradeSide.TRADE_SIDE_BUY;
    if (String.Compare(tradeSide,TRADE_SIDE_SELL_STR,false) == 0)
        return mamdaTradeSide.TRADE_SIDE_SELL;
    if (String.Compare(tradeSide,TRADE_SIDE_UNKNOWN_STR,false) == 0)
        return mamdaTradeSide.TRADE_SIDE_UNKNOWN;

    if (String.Compare(tradeSide,"0",false) == 0)
        return mamdaTradeSide.TRADE_SIDE_UNKNOWN;
    if (String.Compare(tradeSide,"1",false) == 0)
        return mamdaTradeSide.TRADE_SIDE_BUY;
    if (String.Compare(tradeSide,"2",false) == 0)
        return mamdaTradeSide.TRADE_SIDE_SELL;
    return mamdaTradeSide.TRADE_SIDE_UNKNOWN;
}

public void setState(short side)
{
    myTradeSide = (mamdaTradeSide)side;
}

public short getState()
{
   return (short)myTradeSide;
}

private mamdaTradeSide myTradeSide = mamdaTradeSide.TRADE_SIDE_UNKNOWN;

}

}
```


-------------------------------

Updated on 2023-03-31 at 15:30:20 +0100
