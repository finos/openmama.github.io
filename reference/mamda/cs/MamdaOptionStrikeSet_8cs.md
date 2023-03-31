---
title: Options/MamdaOptionStrikeSet.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Options/MamdaOptionStrikeSet.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOptionStrikeSet](classWombat_1_1MamdaOptionStrikeSet.html)** <br>A class that represents the call and put contract sets at a given strike price.  |




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
    public class MamdaOptionStrikeSet
    {
        public MamdaOptionStrikeSet(
            DateTime    expireDate,
            double      strikePrice)
        {
            mExpireDate  = expireDate.Date; // cut the time
            mStrikePrice = strikePrice;
        }

        public MamdaOptionContractSet getCallSet()
        {
            return mCallSet;
        }

        public MamdaOptionContractSet getPutSet()
        {
            return mPutSet;
        }

        public DateTime getExpireDate ()
        {
            return mExpireDate;
        }

        public string getExpireDateStr()
        {
            return mDateFormat.Format(mExpireDate);
        }

        public double getStrikePrice ()
        {
            return mStrikePrice;
        }

        private readonly MamdaOptionContractSet mCallSet = new MamdaOptionContractSet();
        private readonly MamdaOptionContractSet mPutSet = new MamdaOptionContractSet();
        private readonly SimpleDateFormat mDateFormat = new SimpleDateFormat("MMMyy");
        private readonly DateTime mExpireDate;
        private readonly double mStrikePrice;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:18 +0100
