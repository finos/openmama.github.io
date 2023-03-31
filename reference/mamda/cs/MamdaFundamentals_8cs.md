---
title: cs/MamdaFundamentals.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaFundamentals.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaFundamentals](interfaceWombat_1_1MamdaFundamentals.html)** <br>[MamdaFundamentals]() is an interface that provides access to the fundamental equity pricing/analysis attributes, indicators and ratios.  |




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
    public interface MamdaFundamentals
    {
        string getCorporateActionType();

        MamdaFieldState getCorporateActionTypeFieldState();

        double getDividendPrice();
        MamdaFieldState getDividendPriceFieldState();

        string getDividendFrequency();
        MamdaFieldState getDividendFrequencyFieldState();

        string getDividendExDate();

        MamdaFieldState getDividendExDateFieldState();

        string getDividendPayDate();

        MamdaFieldState getDividendPayDateFieldState();

        string getDividendRecordDate();

        MamdaFieldState getDividendRecordDateFieldState();

        string getDividendCurrency();

        MamdaFieldState getDividendCurrencyFieldState();

        long   getSharesOut();

        MamdaFieldState getSharesOutFieldState();

        long   getSharesFloat();

        MamdaFieldState getSharesFloatFieldState();

        long   getSharesAuthorized();

        MamdaFieldState getSharesAuthorizedFieldState();

        double getEarningsPerShare();

        MamdaFieldState getEarningsPerShareFieldState();

        double getVolatility();

        MamdaFieldState getVolatilityFieldState();

        double getPriceEarningsRatio();

        MamdaFieldState getPriceEarningsRatioFieldState();

        double getYield();

        MamdaFieldState getYieldFieldState();

        string getMarketSegmentNative();

        MamdaFieldState getMarketSegmentNativeFieldState();

        string getMarketSectorNative();

        MamdaFieldState getMarketSectorNativeFieldState();

        string getMarketSegment();

        MamdaFieldState getMarketSegmentFieldState();

        string getMarketSector();

        MamdaFieldState getMarketSectorFieldState();

        double getHistoricalVolatility();

        MamdaFieldState getHistoricalVolatilityFieldState();

        double getRiskFreeRate();

        MamdaFieldState getRiskFreeRateFieldState();

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
