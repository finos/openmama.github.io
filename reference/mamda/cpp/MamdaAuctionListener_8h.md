---
title: mamda/MamdaAuctionListener.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaAuctionListener.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html)**  |




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

#ifndef MamdaAuctionListenerH
#define MamdaAuctionListenerH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaSubscription.h>
#include <mamda/MamdaMsgListener.h>
#include <mamda/MamdaAuctionRecap.h>
#include <mamda/MamdaAuctionUpdate.h>
#include <mamda/MamdaUncrossPriceInd.h>

namespace Wombat
{

    class MamdaAuctionHandler;


    class MAMDAExpDLL MamdaAuctionListener : public MamdaMsgListener, public MamdaAuctionRecap, public MamdaAuctionUpdate
    {
    public:
        MamdaAuctionListener ();
        virtual ~MamdaAuctionListener ();

        void addHandler (MamdaAuctionHandler* handler);

        // Inherited from  MamdaBasicRecap
        const char*          getSymbol()        const;
        const char*          getPartId()        const;
        const MamaDateTime&  getSrcTime()       const;
        const MamaDateTime&  getActivityTime()  const;
        const MamaDateTime&  getLineTime()      const;
        const MamaDateTime&  getSendTime()      const;
        mama_seqnum_t        getEventSeqNum()   const;
        const MamaDateTime&  getEventTime()     const;
        const MamaMsgQual&   getMsgQual()       const;
        bool                 isInitialised()    const;

        MamdaFieldState     getSymbolFieldState()       const;
        MamdaFieldState     getPartIdFieldState()       const;
        MamdaFieldState     getSrcTimeFieldState()      const;
        MamdaFieldState     getActivityTimeFieldState() const;
        MamdaFieldState     getLineTimeFieldState()     const;
        MamdaFieldState     getSendTimeFieldState()     const;
        MamdaFieldState     getEventSeqNumFieldState()  const;
        MamdaFieldState     getEventTimeFieldState()    const;
        MamdaFieldState     getMsgQualFieldState()      const;

        // Inherited from MamdaAuction
        const MamaPrice&        getUncrossPrice()       const;
        mama_quantity_t         getUncrossVolume()      const;
        MamdaUncrossPriceInd    getUncrossPriceInd()    const;
        const MamaDateTime&     getAuctionTime()        const;

        MamdaFieldState    getUncrossPriceFieldState()      const;
        MamdaFieldState    getUncrossVolumeFieldState()     const;
        MamdaFieldState    getUncrossPriceIndFieldState()   const;
        MamdaFieldState    getAuctionTimeFieldState()       const;

        virtual void onMsg (MamdaSubscription*  subscription,
                            const MamaMsg&      msg,
                            short               msgType);

        struct MamdaAuctionListenerImpl;

    private:
        MamdaAuctionListenerImpl& mImpl;

    };

} // namespace

#endif // MamdaAuctionListenerH
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
