---
title: cs/MamdaTradeCorrection.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaTradeCorrection.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaTradeCorrection](interfaceWombat_1_1MamdaTradeCorrection.html)** <br>[MamdaTradeCorrection]() is an interface that provides access to fields related to trade corrections.  |




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
    public interface MamdaTradeCorrection : MamdaBasicEvent
    {
        long getOrigSeqNum();

        MamdaFieldState getOrigSeqNumFieldState();

        double getOrigPrice();

        MamdaFieldState getOrigPriceFieldState();

        long getOrigVolume();

        MamdaFieldState getOrigVolumeFieldState();

        string getOrigPartId();

        MamdaFieldState getOrigPartIdFieldState();

        string getOrigQual();

        MamdaFieldState getOrigQualFieldState();

        string getOrigQualNative();

        MamdaFieldState getOrigQualNativeFieldState();

        string getOrigCondition();

        MamdaFieldState getOrigConditionFieldState();

        long getOrigSellersSaleDays();

        MamdaFieldState getOrigSellersSaleDaysFieldState();

        char getOrigStopStock();

        MamdaFieldState getOrigStopStockFieldState();

        string getCorrTradeId();

        MamdaFieldState getCorrTradeIdFieldState();

        string getOrigTradeId();

        MamdaFieldState getOrigTradeIdFieldState();

        double getCorrPrice();

        MamdaFieldState getCorrPriceFieldState();

        long getCorrVolume();

        MamdaFieldState getCorrVolumeFieldState();

        string getCorrPartId();

        MamdaFieldState getCorrPartIdFieldState();

        string getCorrQual();

        MamdaFieldState getCorrQualFieldState();

        string getCorrQualNative();

        MamdaFieldState getCorrQualNativeFieldState();

        string getCorrCondition();

        MamdaFieldState getCorrConditionFieldState();

        long getCorrSellersSaleDays();

        MamdaFieldState getCorrSellersSaleDaysFieldState();

        char getCorrStopStock();

        MamdaFieldState getCorrStopStockFieldState();

         char getCorrShortSaleCircuitBreaker();

        MamdaFieldState getCorrShortSaleCircuitBreakerFieldState();

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
