---
title: mamda/MamdaTradeRecap.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeRecap.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html)**  |




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
import com.wombat.mama.*;

public interface MamdaTradeRecap extends MamdaBasicRecap
{
    public MamaPrice  getLastPrice();

    public short  getLastPriceFieldState();

    public double getLastVolume();

    public short  getLastVolumeFieldState();

    public String getLastPartId();

    public short  getLastPartIdFieldState();

    public MamaDateTime getLastDate();

    public short  getLastDateFieldState();


    public char getShortSaleCircuitBreaker();  

    public short getShortSaleCircuitBreakerFieldState();  
    
    public MamaDateTime getLastTime();

    public short  getLastTimeFieldState();

    public MamaPrice  getIrregPrice();

    public short  getIrregPriceFieldState();

    public double getIrregVolume();

    public short  getIrregVolumeFieldState();

    public String getIrregPartId();

    public short  getIrregPartIdFieldState();

    public MamaDateTime getIrregTime();

    public short  getIrregTimeFieldState();

    public long   getTradeCount();

    public short  getTradeCountFieldState();

    public double  getAccVolume();

    public short  getAccVolumeFieldState();

    public double  getOffExAccVolume();

    public short  getOffExAccVolumeFieldState();

    public double  getOnExAccVolume();

    public short  getOnExAccVolumeFieldState();

    public MamaPrice getNetChange();

    public short  getNetChangeFieldState();

    public double getPctChange();

    public short  getPctChangeFieldState();

    public String getTradeDirection();

    public short  getTradeDirectionFieldState();
  
    public String getSide();

    public short  getSideFieldState();

    public MamaPrice getOpenPrice();

    public short  getOpenPriceFieldState();

    public MamaPrice getHighPrice();

    public short  getHighPriceFieldState();

    public MamaPrice getLowPrice();

    public short  getLowPriceFieldState();

    public MamaPrice getClosePrice();

    public short  getClosePriceFieldState();

    public MamaPrice getPrevClosePrice();

    public short  getPrevClosePriceFieldState();

    public MamaDateTime getPrevCloseDate();

    public short  getPrevCloseDateFieldState();

    public MamaPrice getAdjPrevClose();

    public short  getAdjPrevCloseFieldState();

    public long   getBlockCount();

    public short  getBlockCountFieldState();

    public double getBlockVolume();

    public short  getBlockVolumeFieldState();

    public double getVwap();

    public short  getVwapFieldState();

    public double getOffExVwap();

    public short  getOffExVwapFieldState();

    public double getOnExVwap();

    public short  getOnExVwapFieldState();

    public double getTotalValue();

    public short  getTotalValueFieldState();

    public double getOffExTotalValue();

    public short  getOffExTotalValueFieldState();

    public double getOnExTotalValue();

    public short  getOnExTotalValueFieldState();

    public double getStdDev();

    public short  getStdDevFieldState();

    public double getStdDevSum();

    public short  getStdDevSumFieldState();

    public double getStdDevSumSquares();

    public short  getStdDevSumSquaresFieldState();

    public long getOrderId ();

    public short  getOrderIdFieldState();

    public String getTradeExecVenue();

    public short  getTradeExecVenueFieldState();

    public MamaPrice  getOffExchangeTradePrice();

    public short  getOffExchangeTradePriceFieldState();

    public MamaPrice  getOnExchangeTradePrice();

    public short  getOnExchangeTradePriceFieldState();

    public String getTradeUnits ();

    public short  getTradeUnitsFieldState();
    
    public long getEventSeqNum ();

    public short  getEventSeqNumFieldState();
    
    public long getLastSeqNum ();

    public short  getLastSeqNumFieldState();

    public long getHighSeqNum ();

    public short  getHighSeqNumFieldState();

    public long getLowSeqNum ();

    public short  getLowSeqNumFieldState();

    public long getTotalVolumeSeqNum ();

    public short  getTotalVolumeSeqNumFieldState();

    public String getCurrencyCode ();

    public short  getCurrencyCodeFieldState();

    public MamaPrice getSettlePrice();

    public short  getSettlePriceFieldState();

    public MamaDateTime getSettleDate();
    
    public short  getSettleDateFieldState();
    
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:41 +0100
