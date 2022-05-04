---
title: mamda/MamdaTradeCancelOrError.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeCancelOrError.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaTradeCancelOrError](classWombat_1_1MamdaTradeCancelOrError.html)**  |




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

#ifndef MamdaTradeCancelOrErrorH
#define MamdaTradeCancelOrErrorH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicEvent.h>
#include <mamda/MamdaFieldState.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaTradeCancelOrError : public MamdaBasicEvent
    {
    public:
        virtual bool  getIsCancel() const = 0;

        virtual mama_seqnum_t  getOrigSeqNum() const = 0;

        virtual MamdaFieldState  getOrigSeqNumFieldState() const = 0;

        virtual const MamaPrice&  getOrigPrice() const = 0;

        virtual MamdaFieldState  getOrigPriceFieldState() const = 0;

        virtual mama_quantity_t  getOrigVolume() const = 0;

        virtual MamdaFieldState  getOrigVolumeFieldState() const = 0;

        virtual const char*  getOrigPartId() const = 0;

        virtual MamdaFieldState  getOrigPartIdFieldState() const = 0;

        virtual const char*  getOrigQual() const = 0;

        virtual MamdaFieldState  getOrigQualFieldState() const = 0;

        virtual const char*  getOrigQualNative() const = 0;

        virtual MamdaFieldState  getOrigQualNativeFieldState() const = 0;

        virtual mama_u32_t  getOrigSellersSaleDays() const = 0;

        virtual MamdaFieldState  getOrigSellersSaleDaysFieldState() const = 0;

        virtual char  getOrigStopStock() const = 0;

        virtual MamdaFieldState  getOrigStopStockFieldState() const = 0;

        virtual const char* getTradeQual() const = 0;

        virtual MamdaFieldState  getTradeQualFieldState() const = 0;

        virtual bool  getIsIrregular() const = 0;

        virtual MamdaFieldState  getIsIrregularFieldState() const = 0;

        // Used by some feeds to indicate that a cancel or correction was for an unknown trade
        virtual bool            getGenericFlag()           const = 0;
        virtual MamdaFieldState getGenericFlagFieldState() const = 0;

        virtual const char*     getOrigTradeId()           const = 0;
        virtual MamdaFieldState getOrigTradeIdFieldState() const = 0;

        virtual char  getOrigShortSaleCircuitBreaker() const = 0;
        
        virtual MamdaFieldState  getOrigShortSaleCircuitBreakerFieldState() const = 0;   
        
        virtual ~MamdaTradeCancelOrError() {};
    };


} // namespace

#endif // MamdaTradeCancelOrErrorH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
