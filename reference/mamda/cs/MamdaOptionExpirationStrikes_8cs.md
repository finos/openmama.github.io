---
title: Options/MamdaOptionExpirationStrikes.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Options/MamdaOptionExpirationStrikes.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOptionExpirationStrikes](classWombat_1_1MamdaOptionExpirationStrikes.html)** <br>A class that represents a set of strike prices at a particlar expiration date. Each strike price of which contains a set of option contracts, each of which contains exchange-specific contracts. To access a contract set for a given strike price, use the get method (inherited from TreeMap).  |




## Source code

```csharp
/* $Id: MamdaOptionExpirationStrikes.cs,v 1.2.38.5 2012/08/24 16:12:12 clintonmcdowell Exp $
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
using Wombat.Containers;

namespace Wombat
{
    public class MamdaOptionExpirationStrikes : TreeMap
    {
        public MamdaOptionExpirationStrikes()
        {
        }

        public MamdaOptionExpirationStrikes(MamdaOptionExpirationStrikes copy) : base(copy)
        {
            // Shallow copy.
        }

        public void trimStrikes(SortedSet strikeSet)
        {
            double lowStrike = (double)strikeSet.first();
            double highStrike = (double)strikeSet.last();
            highStrike = highStrike + 0.0001;
            TreeMap trimmedStrikes = new TreeMap(subMap(lowStrike, highStrike));
            clear();
            putAll(trimmedStrikes);
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
