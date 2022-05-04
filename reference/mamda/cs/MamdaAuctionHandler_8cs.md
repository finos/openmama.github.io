---
title: cs/MamdaAuctionHandler.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaAuctionHandler.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaAuctionHandler](interfaceWombat_1_1MamdaAuctionHandler.html)** <br>[MamdaAuctionHandler]() is an interface for applications that want to have an easy way to handle Auction updates. The interface defines callback methods for different types of Auction-related events:  |




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
    public interface MamdaAuctionHandler
    {
        void onAuctionRecap(
            MamdaSubscription       subscription,
            MamdaAuctionListener    listener,
            MamaMsg                 msg,
            MamdaAuctionRecap       recap);

        void onAuctionUpdate(
            MamdaSubscription       subscription,
            MamdaAuctionListener    listener,
            MamaMsg                 msg,
            MamdaAuctionUpdate      update,
            MamdaAuctionRecap       recap);

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
