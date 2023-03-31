---
title: mamda/MamdaTradeRecap.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeRecap.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html)**  |




## Source code

```cpp
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

#ifndef MamdaTradeRecapH
#define MamdaTradeRecapH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicRecap.h>
#include <mamda/MamdaTradeDirection.h>
#include <mamda/MamdaTradeExecVenue.h>
#include <mamda/MamdaFieldState.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaTradeRecap : public MamdaBasicRecap
    {
    public:

        virtual const MamaPrice&  getLastPrice() const = 0;

        virtual mama_quantity_t  getLastVolume() const = 0;

        virtual const char*  getLastPartId() const = 0;

        virtual const MamaDateTime&  getLastTime() const = 0;

        virtual const MamaPrice&  getIrregPrice() const = 0;

        virtual mama_quantity_t  getIrregVolume() const = 0;

        virtual const char*  getIrregPartId() const = 0;

        virtual const MamaDateTime&  getIrregTime() const = 0;

        virtual const MamaDateTime&  getTradeDate() const = 0;

        virtual mama_u32_t  getTradeCount() const = 0;

        virtual mama_quantity_t  getAccVolume() const = 0;

        virtual mama_quantity_t  getOffExAccVolume() const = 0;

        virtual mama_quantity_t  getOnExAccVolume() const = 0;

        virtual const MamaPrice&  getNetChange() const = 0;

        virtual double  getPctChange() const = 0;

        virtual MamdaTradeDirection  getTradeDirection() const = 0;

        virtual const MamaPrice&  getOpenPrice() const = 0;

        virtual const MamaPrice&  getHighPrice() const = 0;

        virtual const MamaPrice&  getLowPrice() const = 0;

        virtual const MamaPrice&  getClosePrice() const = 0;

        virtual const MamaPrice&  getPrevClosePrice() const = 0;

        virtual const MamaPrice&  getAdjPrevClosePrice() const = 0;

        virtual const MamaDateTime&  getPrevCloseDate() const = 0;

        virtual mama_u32_t  getBlockCount() const = 0;

        virtual mama_quantity_t  getBlockVolume() const = 0;

        virtual double  getVwap() const = 0;

        virtual double  getOffExVwap() const = 0;

        virtual double  getOnExVwap() const = 0;

        virtual double  getTotalValue() const = 0;

        virtual double  getOffExTotalValue() const = 0;
        
        virtual double  getOnExTotalValue() const = 0;
        
        virtual double  getStdDev() const = 0;

        virtual double  getStdDevSum() const = 0;

        virtual double  getStdDevSumSquares() const = 0;

        virtual const char*  getTradeUnits() const = 0;  

        virtual mama_seqnum_t  getLastSeqNum() const = 0;

        virtual mama_seqnum_t  getHighSeqNum() const = 0;

        virtual mama_seqnum_t  getLowSeqNum() const = 0;

         virtual mama_seqnum_t  getEventSeqNum() const = 0;

         virtual mama_seqnum_t  getTotalVolumeSeqNum() const = 0;

        virtual const char*  getCurrencyCode() const = 0;

        virtual const MamaPrice&  getSettlePrice() const = 0;

        virtual const MamaDateTime&  getSettleDate() const = 0;

        virtual MamdaTradeExecVenue  getTradeExecVenue() const = 0;

        virtual const MamaPrice&  getOffExchangeTradePrice() const = 0;

        virtual const MamaPrice&  getOnExchangeTradePrice() const = 0;

        virtual const char*  getSide() const = 0;

        virtual char  getShortSaleCircuitBreaker() const=0;


        /*  FieldState Accessors    */
        
        virtual MamdaFieldState  getLastPriceFieldState() const = 0;

        virtual MamdaFieldState  getLastVolumeFieldState() const = 0;

        virtual MamdaFieldState  getLastPartIdFieldState() const = 0;

        virtual MamdaFieldState  getLastTimeFieldState() const = 0;

        virtual MamdaFieldState  getIrregPriceFieldState() const = 0;

        virtual MamdaFieldState  getIrregVolumeFieldState() const = 0;

        virtual MamdaFieldState  getIrregPartIdFieldState() const = 0;

        virtual MamdaFieldState  getIrregTimeFieldState() const = 0;

        virtual MamdaFieldState  getTradeDateFieldState() const = 0;

        virtual MamdaFieldState  getTradeCountFieldState() const = 0;

        virtual MamdaFieldState  getAccVolumeFieldState() const = 0;

        virtual MamdaFieldState  getOffExAccVolumeFieldState() const = 0;

        virtual MamdaFieldState  getOnExAccVolumeFieldState() const = 0;

        virtual MamdaFieldState  getNetChangeFieldState() const = 0;

        virtual MamdaFieldState  getPctChangeFieldState() const = 0;

        virtual MamdaFieldState  getTradeDirectionFieldState() const = 0;

        virtual MamdaFieldState  getOpenPriceFieldState() const = 0;

        virtual MamdaFieldState  getHighPriceFieldState() const = 0;

        virtual MamdaFieldState  getLowPriceFieldState() const = 0;

        virtual MamdaFieldState  getClosePriceFieldState() const = 0;

        virtual MamdaFieldState  getPrevClosePriceFieldState() const = 0;

        virtual MamdaFieldState  getAdjPrevClosePriceFieldState() const = 0;

        virtual MamdaFieldState  getPrevCloseDateFieldState() const = 0;

        virtual MamdaFieldState  getBlockCountFieldState() const = 0;

        virtual MamdaFieldState  getBlockVolumeFieldState() const = 0;

        virtual MamdaFieldState  getVwapFieldState() const = 0;

        virtual MamdaFieldState  getOffExVwapFieldState() const = 0;

        virtual MamdaFieldState  getOnExVwapFieldState() const = 0;

        virtual MamdaFieldState  getTotalValueFieldState() const = 0;

        virtual MamdaFieldState  getOffExTotalValueFieldState() const = 0;
        
        virtual MamdaFieldState  getOnExTotalValueFieldState() const = 0;
        
        virtual MamdaFieldState  getStdDevFieldState() const = 0;

        virtual MamdaFieldState  getStdDevSumFieldState() const = 0;

        virtual MamdaFieldState  getStdDevSumSquaresFieldState() const = 0;

        virtual MamdaFieldState  getTradeUnitsFieldState() const = 0;  

        virtual MamdaFieldState  getLastSeqNumFieldState() const = 0;

        virtual MamdaFieldState  getHighSeqNumFieldState() const = 0;

        virtual MamdaFieldState  getLowSeqNumFieldState() const = 0;

        virtual MamdaFieldState  getEventSeqNumFieldState() const = 0;
         
        virtual MamdaFieldState  getTotalVolumeSeqNumFieldState() const = 0;

        virtual MamdaFieldState  getCurrencyCodeFieldState() const = 0;
         
        virtual MamdaFieldState  getSettlePriceFieldState() const = 0;

        virtual MamdaFieldState  getSettleDateFieldState() const = 0;

        virtual MamdaFieldState  getOffExchangeTradePriceFieldState() const = 0;

        virtual MamdaFieldState  getOnExchangeTradePriceFieldState() const = 0;
        
        virtual MamdaFieldState  getSideFieldState() const = 0; 
        
        virtual MamdaFieldState  getShortSaleCircuitBreakerFieldState() const = 0;  
        
        virtual ~MamdaTradeRecap() {};
    };

} // namespace

#endif // MamdaTradeRecapH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
