---
title: mamda/MamdaFundamentalListener.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaFundamentalListener.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html)**  |




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

#ifndef MamdaFundamentalListenerH
#define MamdaFundamentalListenerH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaSubscription.h>
#include <mamda/MamdaMsgListener.h>
#include <mamda/MamdaFundamentals.h>

namespace Wombat
{

    class MamdaFundamentalHandler;

    class MAMDAExpDLL MamdaFundamentalListener 
        : public MamdaMsgListener
        , public MamdaFundamentals
    {
    public:
        MamdaFundamentalListener ();
        virtual ~MamdaFundamentalListener ();

        void addHandler (MamdaFundamentalHandler* handler);

        // Inherited from  MamdaBasicRecap
        const char*          getSymbol()       const;
        const char*          getPartId()       const;
        const MamaDateTime&  getSrcTime()      const;
        const MamaDateTime&  getActivityTime() const;
        const MamaDateTime&  getLineTime()     const;
        const MamaDateTime&  getSendTime()     const;
        
        MamdaFieldState     getSymbolFieldState()       const;
        MamdaFieldState     getPartIdFieldState()       const;
        MamdaFieldState     getSrcTimeFieldState()      const;
        MamdaFieldState     getActivityTimeFieldState() const;
        MamdaFieldState     getLineTimeFieldState()     const;
        MamdaFieldState     getSendTimeFieldState()     const;


        // Inherited from MamdaFundamentals
        const char* getCorporateActionType()  const;
        double      getDividendPrice()        const;
        const char* getDividendFrequency()    const;
        const char* getDividendExDate()       const;
        const char* getDividendPayDate()      const;  
        const char* getDividendRecordDate()   const;  
        const char* getDividendCurrency()     const;  
        long        getSharesOut()            const;
        long        getSharesFloat()          const;
        long        getSharesAuthorized()     const;
        double      getEarningsPerShare()     const;
        double      getVolatility()           const;
        double      getPriceEarningsRatio()   const;
        double      getYield()                const;
        const char* getMarketSegmentNative()  const;
        const char* getMarketSectorNative()   const;
        const char* getMarketSegment()        const;
        const char* getMarketSector()         const;
        double      getHistoricalVolatility() const;  
        double      getRiskFreeRate()         const;
        mama_u64_t  getSharesOutEx()          const;
        mama_u64_t  getSharesFloatEx()        const;
        mama_u64_t  getSharesAuthorizedEx()   const;

        MamdaFieldState     getCorporateActionTypeFieldState()  const;
        MamdaFieldState     getDividendPriceFieldState()        const;
        MamdaFieldState     getDividendFrequencyFieldState()    const;
        MamdaFieldState     getDividendExDateFieldState()       const;
        MamdaFieldState     getDividendPayDateFieldState()      const;  
        MamdaFieldState     getDividendRecordDateFieldState()   const;  
        MamdaFieldState     getDividendCurrencyFieldState()     const;  
        MamdaFieldState     getSharesOutFieldState()            const;
        MamdaFieldState     getSharesFloatFieldState()          const;
        MamdaFieldState     getSharesAuthorizedFieldState()     const;
        MamdaFieldState     getEarningsPerShareFieldState()     const;
        MamdaFieldState     getVolatilityFieldState()           const;
        MamdaFieldState     getPriceEarningsRatioFieldState()   const;
        MamdaFieldState     getYieldFieldState()                const;
        MamdaFieldState     getMarketSegmentNativeFieldState()  const;
        MamdaFieldState     getMarketSectorNativeFieldState()   const;
        MamdaFieldState     getMarketSegmentFieldState()        const;
        MamdaFieldState     getMarketSectorFieldState()         const;
        MamdaFieldState     getHistoricalVolatilityFieldState() const;  
        MamdaFieldState     getRiskFreeRateFieldState()         const;
        virtual void onMsg (MamdaSubscription*  subscription,
                            const MamaMsg&      msg,
                            short               msgType);

        struct MamdaFundamentalListenerImpl;
    private:
        MamdaFundamentalListenerImpl& mImpl;

    };

} // namespace

#endif // MamdaFundamentalListenerH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
