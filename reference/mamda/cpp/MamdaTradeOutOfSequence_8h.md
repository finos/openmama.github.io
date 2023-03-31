---
title: mamda/MamdaTradeOutOfSequence.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeOutOfSequence.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaTradeOutOfSequence](classWombat_1_1MamdaTradeOutOfSequence.html)**  |




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

#ifndef MamdaTradeOutOfSequenceH
#define MamdaTradeOutOfSequenceH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicEvent.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaTradeOutOfSequence : public MamdaBasicEvent
    {
    public:
        virtual const MamaPrice&  getTradePrice() const = 0;

        virtual MamdaFieldState  getTradePriceFieldState() const = 0;

        virtual mama_quantity_t  getTradeVolume() const = 0;

        virtual MamdaFieldState  getTradeVolumeFieldState() const = 0;

        virtual const char*  getTradePartId() const = 0;

        virtual MamdaFieldState  getTradePartIdFieldState() const = 0;

        virtual const char*  getTradeQual() const = 0;

        virtual MamdaFieldState  getTradeQualFieldState() const = 0;

        virtual const char*  getTradeQualNative() const = 0;

        virtual MamdaFieldState  getTradeQualNativeFieldState() const = 0;

        virtual mama_u32_t  getTradeSellersSaleDays() const = 0;

        virtual MamdaFieldState  getTradeSellersSaleDaysFieldState() const = 0;

        virtual char  getTradeStopStock() const = 0;

        virtual MamdaFieldState  getTradeStopStockFieldState() const = 0;

        virtual bool  getIsIrregular() const = 0;

        virtual MamdaFieldState getIsIrregularFieldState() const = 0;

        virtual mama_u64_t  getOrderId() const = 0;

        virtual MamdaFieldState  getOrderIdFieldState() const = 0;

        virtual ~MamdaTradeOutOfSequence() {};
    };

} // namespace

#endif // MamdaTradeOutOfSequenceH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
