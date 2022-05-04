---
title: cs/MamdaOrderImbalanceRecap.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaOrderImbalanceRecap.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaOrderImbalanceRecap](interfaceWombat_1_1MamdaOrderImbalanceRecap.html)** <br>[MamdaOrderImbalanceRecap]() is an interface that provides access to order imbalance related fields.  |




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
    public interface MamdaOrderImbalanceRecap : MamdaBasicRecap
    {
        DateTime getAuctionTime();

        MamdaFieldState getAuctionTimeFieldState();

        long getBuyVolume();

        MamdaFieldState getBuyVolumeFieldState();

        char getCrossType();

        MamdaFieldState getCrossTypeFieldState();

        long getEventSeqNum();

        MamdaFieldState getEventSeqNumFieldState();

        DateTime getEventTime();

        MamdaFieldState getEventTimeFieldState();

        MamaPrice getFarClearingPrice();

        MamdaFieldState getFarClearingPriceFieldState();

        MamaPrice getHighIndicationPrice();

        MamdaFieldState getHighIndicationPriceFieldState();

        MamaPrice getImbalancePrice ();

        MamdaFieldState getImbalancePriceFieldState();

        MamaPrice getMatchPrice();

        MamdaFieldState getMatchPriceFieldState();

        string getIssueSymbol();

        MamdaFieldState getIssueSymbolFieldState();

        MamaPrice getLowIndicationPrice();

        MamdaFieldState getLowIndicationPriceFieldState();

        long getMatchVolume();

        MamdaFieldState getMatchVolumeFieldState();

        int getMsgType();

        MamdaFieldState getMsgTypeFieldState();

        MamaPrice getNearClearingPrice();

        MamdaFieldState getNearClearingPriceFieldState();

        char getNoClearingPrice();

        MamdaFieldState getNoClearingPriceFieldState();

        char getPriceVarInd();

        MamdaFieldState getPriceVarIndFieldState();

        string getSecurityStatusOrig();

        MamdaFieldState getSecurityStatusOrigFieldState();

        string getImbalanceState();

        MamdaFieldState getImbalanceStateFieldState();

        DateTime getSecurityStatusTime();

        MamdaFieldState getSecurityStatusTimeFieldState();

        long getSellVolume();

        MamdaFieldState getSellVolumeFieldState();

        int getSeqNum();

        MamdaFieldState getSeqNumFieldState();

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
