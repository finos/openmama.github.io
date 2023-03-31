---
title: mamda/MamdaTradeReport.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeReport.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaTradeReport](classWombat_1_1MamdaTradeReport.html)**  |




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

#ifndef MamdaTradeReportH
#define MamdaTradeReportH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicEvent.h>
#include <mamda/MamdaFieldState.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaTradeReport : public MamdaBasicEvent
    {
    public:

        virtual const MamaPrice&  getTradePrice() const = 0;

        virtual mama_quantity_t  getTradeVolume() const = 0;

        virtual const char*  getTradePartId() const = 0;

        virtual const char*  getTradeQual() const = 0;

        virtual const char*  getTradeQualNative() const = 0;
        
        virtual const char*  getSide() const = 0;   
        
        virtual MamdaFieldState  getSideFieldState() const = 0; 

        virtual mama_u32_t  getTradeSellersSaleDays() const = 0;

        virtual char  getTradeStopStock() const = 0;

        virtual bool  getIsIrregular() const = 0;

        virtual mama_u64_t  getOrderId() const = 0;

        virtual const char*  getUniqueId() const = 0;

        virtual const char*  getTradeAction() const = 0;  
       
        virtual const char*  getTradeId() const = 0;

        virtual char  getShortSaleCircuitBreaker() const=0;


        /*  FieldState Accesors */

        virtual MamdaFieldState getTradePriceFieldState() const = 0;

        virtual MamdaFieldState  getTradeVolumeFieldState() const = 0;

        virtual MamdaFieldState  getTradePartIdFieldState() const = 0;

        virtual MamdaFieldState  getTradeQualFieldState() const = 0;

        virtual MamdaFieldState  getTradeQualNativeFieldState() const = 0;

        virtual MamdaFieldState  getTradeSellersSaleDaysFieldState() const = 0;

        virtual MamdaFieldState  getTradeStopStockFieldState() const = 0;

        virtual MamdaFieldState  getIsIrregularFieldState() const = 0;

        virtual MamdaFieldState  getOrderIdFieldState() const = 0;

        virtual MamdaFieldState  getUniqueIdFieldState() const = 0;

        virtual MamdaFieldState  getTradeActionFieldState() const = 0;

        virtual MamdaFieldState  getTradeIdFieldState() const = 0;
        
        virtual MamdaFieldState  getShortSaleCircuitBreakerFieldState() const = 0;      
        
        virtual ~MamdaTradeReport() {};
    };


} // namespace

#endif // MamdaTradeReportH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
