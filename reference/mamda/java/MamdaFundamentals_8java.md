---
title: mamda/MamdaFundamentals.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaFundamentals.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaFundamentals](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html)**  |




## Source code

```java
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2012 NYSE Technologies, Inc.
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

package com.wombat.mamda;

public interface MamdaFundamentals extends MamdaBasicRecap
{
    String getCorporateActionType();

    short getCorporateActionTypeFieldState();

    double getDividendPrice();

    short getDividendPriceFieldState();

    String getDividendFrequency();

    short getDividendFrequencyFieldState();

    String getDividendExDate();

    short getDividendExDateFieldState();

    String getDividendPayDate();

    short getDividendPayDateFieldState();

    String getDividendRecordDate();

    short getDividendRecordDateFieldState();

    String getDividendCurrency();

    short getDividendCurrencyFieldState();

    long   getSharesOut();
    short getSharesOutFieldState();

    long   getSharesFloat();

    short getSharesFloatFieldState();

    long   getSharesAuthorized();

    short getSharesAuthorizedFieldState();

    double getEarningsPerShare();

    short getEarningsPerShareFieldState();

    double getVolatility();

    short getVolatilityFieldState();

    double getPriceEarningsRatio();

    short getPriceEarningsRatioFieldState();

    double getYield();

    short getYieldFieldState();

    String getMarketSegmentNative();

    short getMarketSegmentNativeFieldState();

    String getMarketSectorNative();

    short getMarketSectorNativeFieldState();

    String getMarketSegment();

    short getMarketSegmentFieldState();

    String getMarketSector();

    short getMarketSectorFieldState();

    double getHistoricalVolatility();

    short getHistoricalVolatilityFieldState();

    double getRiskFreeRate();

    short getRiskFreeRateFieldState();

}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
