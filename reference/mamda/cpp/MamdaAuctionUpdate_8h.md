---
title: mamda/MamdaAuctionUpdate.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaAuctionUpdate.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaAuctionUpdate](classWombat_1_1MamdaAuctionUpdate.html)**  |




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

#ifndef MamdaAuctionUpdateH
#define MamdaAuctionUpdateH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicEvent.h>
#include <mamda/MamdaFieldState.h>
#include <mamda/MamdaUncrossPriceInd.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaAuctionUpdate : public MamdaBasicEvent
    {
    public:
        virtual const MamaPrice&  getUncrossPrice()  const = 0;

        virtual mama_quantity_t  getUncrossVolume()  const = 0;

        virtual MamdaUncrossPriceInd  getUncrossPriceInd()  const = 0;

        virtual const MamaDateTime&  getAuctionTime()  const = 0;

        virtual MamdaFieldState   getUncrossPriceFieldState()  const = 0;


         virtual MamdaFieldState   getUncrossVolumeFieldState()  const = 0;

         virtual MamdaFieldState   getUncrossPriceIndFieldState()  const = 0;

         virtual MamdaFieldState   getAuctionTimeFieldState()  const = 0;

        virtual ~MamdaAuctionUpdate() {};
    };

} // namespace

#endif // MamdaAuctionH
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
