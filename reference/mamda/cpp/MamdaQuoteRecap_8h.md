---
title: mamda/MamdaQuoteRecap.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaQuoteRecap.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html)**  |




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

#ifndef MamdaQuoteRecapH
#define MamdaQuoteRecapH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicRecap.h>
#include <mamda/MamdaFieldState.h>
#include <mama/types.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaQuoteRecap : public MamdaBasicRecap
    {
    public:

        virtual const MamaPrice&  getBidPrice() const = 0;
        
        virtual mama_quantity_t  getBidSize() const = 0;

        virtual mama_quantity_t  getBidDepth() const = 0;

        virtual const char*  getBidPartId() const = 0;

        virtual const MamaPrice&  getBidClosePrice() const = 0;

        virtual const MamaDateTime&  getBidCloseDate() const = 0;

        virtual const MamaPrice&  getBidPrevClosePrice() const = 0;

        virtual const MamaDateTime&  getBidPrevCloseDate() const = 0;

        virtual const MamaPrice&  getBidHigh() const = 0;

        virtual const MamaPrice&  getBidLow() const = 0;

        virtual const MamaPrice&  getAskPrice() const = 0;

        virtual mama_quantity_t  getAskSize() const = 0;

        virtual mama_quantity_t  getAskDepth() const = 0;

        virtual const char*  getAskPartId() const = 0;

        virtual const MamaPrice&  getAskClosePrice() const = 0;

        virtual const MamaDateTime&  getAskCloseDate() const = 0;

        virtual const MamaPrice&  getAskPrevClosePrice() const = 0;

        virtual const MamaDateTime&  getAskPrevCloseDate() const = 0;

        virtual const MamaPrice&  getAskHigh() const = 0;

        virtual const MamaPrice&  getAskLow() const = 0;

        virtual const MamaPrice&  getQuoteMidPrice() const = 0;

        virtual mama_u32_t  getQuoteCount() const = 0;

        virtual const char*  getQuoteQualStr() const = 0;

        virtual const char*  getQuoteQualNative() const = 0;

        virtual char  getShortSaleBidTick() const = 0;
        
        virtual const MamaDateTime&  getAskTime() const = 0;
        
        virtual const MamaDateTime&  getBidTime() const = 0;
        
        virtual const MamaDateTime&  getQuoteDate() const = 0;
        
        virtual const char*  getAskIndicator() const = 0;
        
        virtual const char*  getBidIndicator() const = 0;
        
        virtual mama_u32_t  getAskUpdateCount() const = 0;
        
        virtual mama_u32_t  getBidUpdateCount() const = 0;
        
        virtual double  getAskYield() const = 0;
        
        virtual double  getBidYield() const = 0;

        virtual const char*  getAskSizesList() const = 0;

        virtual const char*  getBidSizesList() const = 0;

        virtual char  getShortSaleCircuitBreaker() const = 0;


        /* FieldState Accessors ******/
       
        virtual MamdaFieldState  getBidPriceFieldState() const = 0;
        
        virtual MamdaFieldState  getBidSizeFieldState() const = 0;

        virtual MamdaFieldState  getBidDepthFieldState() const = 0;

        virtual MamdaFieldState  getBidPartIdFieldState() const = 0;

        virtual MamdaFieldState  getAskPriceFieldState() const = 0;

        virtual MamdaFieldState  getAskSizeFieldState() const = 0;

        virtual MamdaFieldState  getAskDepthFieldState() const = 0;

        virtual MamdaFieldState  getAskPartIdFieldState() const = 0;

        virtual MamdaFieldState  getQuoteMidPriceFieldState() const = 0;

        virtual MamdaFieldState  getQuoteQualStrFieldState() const = 0;

        virtual MamdaFieldState  getQuoteQualNativeFieldState() const = 0;

        virtual MamdaFieldState  getShortSaleBidTickFieldState() const = 0;
        
        virtual MamdaFieldState  getAskTimeFieldState() const = 0;
        
        virtual MamdaFieldState  getBidTimeFieldState() const = 0;
        
        virtual MamdaFieldState  getQuoteDateFieldState() const = 0;
        
        virtual MamdaFieldState  getAskIndicatorFieldState() const = 0;
        
        virtual MamdaFieldState  getBidIndicatorFieldState() const = 0;
        
        virtual MamdaFieldState  getAskUpdateCountFieldState() const = 0;
        
        virtual MamdaFieldState  getBidUpdateCountFieldState() const = 0;
        
        virtual MamdaFieldState  getAskYieldFieldState() const = 0;
        
        virtual MamdaFieldState  getBidYieldFieldState() const = 0;     

        virtual MamdaFieldState  getAskSizesListFieldState() const = 0;

        virtual MamdaFieldState  getBidSizesListFieldState() const = 0;
        
        virtual MamdaFieldState  getShortSaleCircuitBreakerFieldState() const = 0;
        
        virtual ~MamdaQuoteRecap() {};

    };

} // namespace

#endif // MamdaQuoteRecapH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
