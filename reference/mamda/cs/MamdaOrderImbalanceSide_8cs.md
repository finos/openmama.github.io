---
title: cs/MamdaOrderImbalanceSide.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaOrderImbalanceSide.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html)**  |




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
    public class MamdaOrderImbalanceSide
    {
        /*The imbalance side could be either the buy or sell side
          i.e. bid/ask. 0 and 1 representation will be used for
          bid/ask respectively.
        */
        private int mValue;
        private string mDescription;

        public const int BID_SIDE_VALUE = 0;
        public static readonly MamdaOrderImbalanceSide BID_SIDE =
            new MamdaOrderImbalanceSide(valueToString(BID_SIDE_VALUE), BID_SIDE_VALUE);

        public const int ASK_SIDE_VALUE = 1;
        public static readonly MamdaOrderImbalanceSide ASK_SIDE =
            new MamdaOrderImbalanceSide(valueToString(ASK_SIDE_VALUE), ASK_SIDE_VALUE);

        public const int NO_IMBALANCE_VALUE = 2;
        public static readonly MamdaOrderImbalanceSide NO_IMBALANCE_SIDE =
            new MamdaOrderImbalanceSide(valueToString(NO_IMBALANCE_VALUE), NO_IMBALANCE_VALUE);

        public override string ToString()
        {
            return mDescription;
        }

        public string toString()
        {
            return ToString();
        }

        public int getValue()
        {
            return mValue;
        }

        public bool equals(MamdaOrderImbalanceSide imbalanceSide)
        {
            return mValue == imbalanceSide.mValue;
        }

        public override bool Equals(object obj)
        {
            return (obj is MamdaOrderImbalanceSide) && equals((MamdaOrderImbalanceSide)obj);
        }

        public override int GetHashCode()
        {
            return mValue.GetHashCode();
        }

        public static bool operator==(MamdaOrderImbalanceSide left, MamdaOrderImbalanceSide right)
        {
            return Object.ReferenceEquals(left, right) || (left != null && left.equals(right));
        }

        public static bool operator!=(MamdaOrderImbalanceSide left, MamdaOrderImbalanceSide right)
        {
            return !(left == right);
        }

        private MamdaOrderImbalanceSide(string desc, int value)
        {
            mDescription = desc;
            mValue       = value;
        }

        public static String valueToString (int value)
        {
            switch (value)
            {
                case ASK_SIDE_VALUE:
                    return "ASK_SIDE";
                case BID_SIDE_VALUE:
                    return "BID_SIDE";
                case NO_IMBALANCE_VALUE:
                    return "NO_IMBALANCE";
                default:
                    return "UNKNOWN";
            }
        }

        public static MamdaOrderImbalanceSide enumObjectForValue(int value)
        {
            switch (value)
            {
                case ASK_SIDE_VALUE:
                    return ASK_SIDE;
                case BID_SIDE_VALUE:
                    return BID_SIDE;
                case NO_IMBALANCE_VALUE:
                    return NO_IMBALANCE_SIDE;
                default:
                    return null;
            }
        }

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
