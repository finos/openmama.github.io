---
title: cs/MamdaTradeRecap.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaTradeRecap.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html)** <br>[MamdaTradeRecap]() is an interface that provides access to trade related fields.  |




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
    public interface MamdaTradeRecap : MamdaBasicEvent
    {
        MamaPrice getLastPrice();

        MamdaFieldState getLastPriceFieldState();

        long getLastVolume();

        MamdaFieldState getLastVolumeFieldState();

        string getLastPartId();

        MamdaFieldState getLastPartIdFieldState();

        DateTime getLastTime();

        MamdaFieldState getLastTimeFieldState();

        MamaPrice getIrregPrice();

        MamdaFieldState getIrregPriceFieldState();

        long getIrregVolume();

        MamdaFieldState getIrregVolumeFieldState();

        string getIrregPartId();

        MamdaFieldState getIrregPartIdFieldState();

        DateTime getIrregTime();

        MamdaFieldState getIrregTimeFieldState();

        DateTime getTradeDate();

        MamdaFieldState getTradeDateFieldState();

        long getTradeCount();

        MamdaFieldState getTradeCountFieldState();

        long getAccVolume();

        MamdaFieldState getAccVolumeFieldState();

        long getOffExAccVolume();

        MamdaFieldState getOffExAccVolumeFieldState();

        long getOnExAccVolume();

        MamdaFieldState getOnExAccVolumeFieldState();

        MamaPrice getNetChange();

        MamdaFieldState getNetChangeFieldState();

        double getPctChange();

        MamdaFieldState getPctChangeFieldState();

        string getTradeDirection();

        MamdaFieldState getTradeDirectionFieldState();

        string getSide();

        MamdaFieldState getSideFieldState();

        MamaPrice getOpenPrice();

        MamdaFieldState getOpenPriceFieldState();

        MamaPrice getHighPrice();

        MamdaFieldState getHighPriceFieldState();

        MamaPrice getLowPrice();

        MamdaFieldState getLowPriceFieldState();

        MamaPrice getClosePrice();

        MamdaFieldState getClosePriceFieldState();

        MamaPrice getPrevClosePrice();

        MamdaFieldState getPrevClosePriceFieldState();

        DateTime getPrevCloseDate();

        MamdaFieldState getPrevCloseDateFieldState();

        MamaPrice getAdjPrevClose();

        MamdaFieldState getAdjPrevCloseFieldState();

        long getBlockCount();

        MamdaFieldState getBlockCountFieldState();

        long getBlockVolume();

        MamdaFieldState getBlockVolumeFieldState();

        double getVwap();

        MamdaFieldState getVwapFieldState();

        double getOffExVwap();

        MamdaFieldState getOffExVwapFieldState();

        double getOnExVwap();

        MamdaFieldState getOnExVwapFieldState();

        double getTotalValue();

        MamdaFieldState getTotalValueFieldState();

        double getOffExTotalValue();

        MamdaFieldState getOffExTotalValueFieldState();

        double getOnExTotalValue();

        MamdaFieldState getOnExTotalValueFieldState();

        double getStdDev();

        MamdaFieldState getStdDevFieldState();

        double getStdDevSum();

        MamdaFieldState getStdDevSumFieldState();

        double getStdDevSumSquares();

        MamdaFieldState getStdDevSumSquaresFieldState();

        long getOrderId ();

        MamdaFieldState getOrderIdFieldState();

        MamaPrice getSettlePrice();

        MamdaFieldState getSettlePriceFieldState();

        DateTime getSettleDate();

        MamdaFieldState getSettleDateFieldState();

        string getTradeExecVenue();

        MamdaFieldState getTradeExecVenueFieldState();

        MamaPrice getOffExchangeTradePrice();

        MamdaFieldState getOffExchangeTradePriceFieldState();

        MamaPrice getOnExchangeTradePrice();

        MamdaFieldState getOnExchangeTradePriceFieldState();

        string getTradeUnits();

        MamdaFieldState getTradeUnitsFieldState();

        long getLastSeqNum();

        MamdaFieldState getLastSeqNumFieldState();

        long getHighSeqNum();

        MamdaFieldState getHighSeqNumFieldState();

        long getLowSeqNum();

        MamdaFieldState getLowSeqNumFieldState();

        long getTotalVolumeSeqNum();

        MamdaFieldState getTotalVolumeSeqNumFieldState();

        string getCurrencyCode();

        MamdaFieldState getCurrencyCodeFieldState();

        char getShortSaleCircuitBreaker();

        MamdaFieldState getShortSaleCircuitBreakerFieldState();
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
