---
title: cs/MamdaAuctionUpdate.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaAuctionUpdate.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaAuctionUpdate](interfaceWombat_1_1MamdaAuctionUpdate.html)** <br>[MamdaAuctionUpdate]() is an interface that provides access to fields related to quote updates.  |




## Source code

```csharp
/* $Id: MamdaAuctionUpdate.cs,v 1.1.4.5 2012/09/07 07:44:57 ianbell Exp $
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
    public interface MamdaAuctionUpdate : MamdaBasicEvent
    {
        MamaPrice getUncrossPrice();

        MamdaFieldState getUncrossPriceFieldState();

        double getUncrossVolume();

        MamdaFieldState getUncrossVolumeFieldState();

        long getUncrossPriceInd();

        MamdaFieldState getUncrossPriceIndFieldState();
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
