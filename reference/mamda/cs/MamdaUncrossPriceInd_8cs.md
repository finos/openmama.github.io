---
title: cs/MamdaUncrossPriceInd.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaUncrossPriceInd.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaUncrossPriceInd](classWombat_1_1MamdaUncrossPriceInd.html)** <br>Security Status values  |




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
    public class MamdaUncrossPriceInd
    {
        public enum mamdaUncrossPriceInd
        {
            UNCROSS_NONE                = 0,
            UNCROSS_INDICATIVE          = 1,
            UNCROSS_FIRM                = 2,
            UNCROSS_INSUFFICIENT_VOL    = 3
        }

        private static string UNCROSS_NONE_STR              = "None";
        private static string UNCROSS_INDICATIVE_STR        = "I";
        private static string UNCROSS_FIRM_STR              = "F";
        private static string UNCROSS_INSUFFICIENT_VOL_STR  = "V";


        public static string toString (MamdaUncrossPriceInd.mamdaUncrossPriceInd priceInd)
        {
            switch (priceInd)
            {
                case  mamdaUncrossPriceInd.UNCROSS_INDICATIVE:          return UNCROSS_INDICATIVE_STR;
                case  mamdaUncrossPriceInd.UNCROSS_FIRM:                return UNCROSS_FIRM_STR;
                case  mamdaUncrossPriceInd.UNCROSS_INSUFFICIENT_VOL:    return UNCROSS_INSUFFICIENT_VOL_STR;
                default:
                    return "None";
            }
        }

        public static MamdaUncrossPriceInd.mamdaUncrossPriceInd mamdaAuctionPriceIndFromString (string priceInd)
        {
            if (priceInd == null)
            {
                return mamdaUncrossPriceInd.UNCROSS_NONE;
            }

            if (priceInd == UNCROSS_NONE_STR)
                return mamdaUncrossPriceInd.UNCROSS_NONE;
            if (priceInd == UNCROSS_INDICATIVE_STR)
                return mamdaUncrossPriceInd.UNCROSS_INDICATIVE;
            if (priceInd == UNCROSS_FIRM_STR)
                return mamdaUncrossPriceInd.UNCROSS_FIRM;
            if (priceInd == UNCROSS_INSUFFICIENT_VOL_STR)
                return mamdaUncrossPriceInd.UNCROSS_INSUFFICIENT_VOL;

            if (priceInd == "0")
                return mamdaUncrossPriceInd.UNCROSS_NONE;
            if (priceInd == "1")
                return mamdaUncrossPriceInd.UNCROSS_INDICATIVE;
            if (priceInd == "2")
                return mamdaUncrossPriceInd.UNCROSS_FIRM;
            if (priceInd == "3")
                return mamdaUncrossPriceInd.UNCROSS_INSUFFICIENT_VOL;


            return mamdaUncrossPriceInd.UNCROSS_NONE;
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
