---
title: mamda/MamdaOrderImbalanceRecap.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaOrderImbalanceRecap.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html)**  |




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

#ifndef MamdaOrderImbalanceRecapH
#define MamdaOrderImbalanceRecapH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicRecap.h>
#include <mamda/MamdaFieldState.h>
#include <mama/mamacpp.h>
#include <stdio.h>
#include <string.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaOrderImbalanceRecap : MamdaBasicRecap
    {
    public:

        virtual const  MamaDateTime& getAuctionTime() const = 0;

        virtual MamdaFieldState getAuctionTimeFieldState() const = 0;

        virtual int64_t getBuyVolume() const = 0;

        virtual MamdaFieldState getBuyVolumeFieldState() const = 0;

        virtual  char getCrossType() const = 0;

        virtual MamdaFieldState getCrossTypeFieldState() const = 0;

        virtual mama_seqnum_t getEventSeqNum() const = 0 ;

        virtual MamdaFieldState getEventSeqNumFieldState() const = 0;

        virtual const MamaDateTime& getEventTime() const = 0;

        virtual MamdaFieldState getEventTimeFieldState() const = 0;

        virtual const MamaPrice& getFarClearingPrice() const = 0;

        virtual MamdaFieldState getFarClearingPriceFieldState() const = 0;

        virtual const MamaPrice& getHighIndicationPrice() const = 0;

        virtual MamdaFieldState getHighIndicationPriceFieldState() const = 0;

        virtual const MamaPrice& getImbalancePrice () const = 0;

        virtual MamdaFieldState getImbalancePriceFieldState() const = 0;

        virtual const MamaPrice& getMatchPrice() const = 0;

        virtual MamdaFieldState getMatchPriceFieldState() const = 0;

        virtual const char* getIssueSymbol() const = 0;

        virtual MamdaFieldState getIssueSymbolFieldState() const = 0;

        virtual const MamaPrice& getLowIndicationPrice() const = 0;

        virtual MamdaFieldState getLowIndicationPriceFieldState() const = 0;

        virtual int64_t getMatchVolume() const = 0;

        virtual MamdaFieldState getMatchVolumeFieldState() const = 0;

        virtual int32_t getMsgType() const = 0;

        virtual MamdaFieldState getMsgTypeFieldState() const = 0;

        virtual const MamaPrice& getNearClearingPrice() const = 0;

        virtual MamdaFieldState getNearClearingPriceFieldState() const = 0;

        virtual char getNoClearingPrice() const = 0;

        virtual MamdaFieldState getNoClearingPriceFieldState() const = 0;

        virtual const char* getPartId() const = 0;

        virtual MamdaFieldState getPartIdFieldState() const = 0;

        virtual char getPriceVarInd() const = 0;

        virtual MamdaFieldState getPriceVarIndFieldState() const = 0;

        virtual const char* getSecurityStatusOrig() const = 0;

        virtual MamdaFieldState getSecurityStatusOrigFieldState() const = 0;

        virtual const char* getImbalanceState() const = 0;

        virtual MamdaFieldState getImbalanceStateFieldState() const = 0;

        virtual const MamaDateTime& getSecurityStatusTime() const = 0;

        virtual MamdaFieldState getSecurityStatusTimeFieldState() const = 0;

        virtual int64_t getSellVolume() const = 0;

        virtual MamdaFieldState getSellVolumeFieldState() const = 0;

        virtual mama_seqnum_t getSeqNum() const = 0;

        virtual MamdaFieldState getSeqNumFieldState() const = 0;

        virtual ~MamdaOrderImbalanceRecap () {};

    };//class

}//namespace
#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
