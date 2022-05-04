---
title: mamda/MamdaSecStatusListener.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaSecStatusListener.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html)**  |




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

#ifndef MamdaSecStatusListenerH
#define MamdaSecStatusListenerH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaMsgListener.h> 
#include <mamda/MamdaSecStatus.h>
#include <mamda/MamdaSecStatusRecap.h>
#include <mamda/MamdaSecurityStatus.h>
#include <mamda/MamdaSecurityStatusQual.h>

namespace Wombat
{

    class MamdaSecStatusHandler;

    class MAMDAExpDLL MamdaSecStatusListener 
        : public MamdaMsgListener
        , public MamdaSecStatus
        , public MamdaSecStatusRecap
    {
    public:

        MamdaSecStatusListener ();
        virtual ~MamdaSecStatusListener ();

        void        addHandler (MamdaSecStatusHandler* handler);

        // Inherited from MamdaBasicEvent
        const char*             getSymbol                       () const;
        const char*             getPartId                       () const;
        const MamaDateTime&     getSrcTime                      () const;
        const MamaDateTime&     getActivityTime                 () const;
        const MamaDateTime&     getLineTime                     () const;
        const MamaDateTime&     getSendTime                     () const;
        const MamaMsgQual&      getMsgQual                      () const;
        const MamaDateTime&     getEventTime                    () const;
        mama_seqnum_t           getEventSeqNum                  () const;
        const MamaDateTime&     getLuldTime                     () const;
        const char              getLuldIndicator                () const;
        const MamaPrice&        getLuldHighLimit                () const;
        const MamaPrice&        getLuldLowLimit                 () const;
        
        MamdaFieldState         getSymbolFieldState             () const;
        MamdaFieldState         getPartIdFieldState             () const;
        MamdaFieldState         getSrcTimeFieldState            () const;
        MamdaFieldState         getActivityTimeFieldState       () const;
        MamdaFieldState         getLineTimeFieldState           () const;
        MamdaFieldState         getSendTimeFieldState           () const;
        MamdaFieldState         getMsgQualFieldState            () const;
        MamdaFieldState         getEventTimeFieldState          () const;
        MamdaFieldState         getEventSeqNumFieldState        () const;
        MamdaFieldState         getLuldIndicatorFieldState      () const;
        MamdaFieldState         getLuldTimeFieldState           () const;
        MamdaFieldState         getLuldHighLimitFieldState      () const;
        MamdaFieldState         getLuldLowLimitFieldState       () const;


        const char*             getIssueSymbol                  () const;
        const char*             getReason                       () const;
        char                    getSecurityAction               () const;
        char                    getShortSaleCircuitBreaker      () const;
        const char*             getSecurityType                 () const;
        const char*             getSecurityStatus               () const;
        const char*             getSecurityStatusQual           () const; 
        const char*             getSecurityStatusNative         () const; 
        const char*             getSecurityStatusStr            () const;
        const char*             getSecurityStatusQualStr        () const;
        MamdaSecurityStatus     getSecurityStatusEnum           () const; 
        MamdaSecurityStatusQual getSecurityStatusQualifierEnum  () const; 
        const char*             getFreeText                     () const;
        
        MamdaFieldState         getIssueSymbolFieldState                 () const;
        MamdaFieldState         getReasonFieldState                      () const;
        MamdaFieldState         getSecurityActionFieldState              () const;
        MamdaFieldState         getShortSaleCircuitBreakerFieldState     () const;
        MamdaFieldState         getSecurityTypeFieldState                () const;
        MamdaFieldState         getSecurityStatusFieldState              () const;
        MamdaFieldState         getSecurityStatusQualFieldState          () const; 
        MamdaFieldState         getSecurityStatusNativeFieldState        () const; 
        MamdaFieldState         getSecurityStatusStrFieldState           () const;
        MamdaFieldState         getSecurityStatusQualStrFieldState       () const;
        MamdaFieldState         getSecurityStatusEnumFieldState          () const; 
        MamdaFieldState         getSecurityStatusQualifierEnumFieldState () const; 
        MamdaFieldState         getFreeTextFieldState                    () const;

        virtual void onMsg (MamdaSubscription*  subscription,
                            const MamaMsg&      msg,
                            short               msgType);

        struct MamdaSecStatusListenerImpl;

    private:
        MamdaSecStatusListenerImpl& mImpl;
    };

}

#endif // MamdaSecStatusListenerH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
