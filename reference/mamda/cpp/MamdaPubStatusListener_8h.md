---
title: mamda/MamdaPubStatusListener.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaPubStatusListener.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html)**  |




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

#ifndef MamdaPubStatusListenerH
#define MamdaPubStatusListenerH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaMsgListener.h>  // MamdaMsgListener Interface
#include <mamda/MamdaPubStatus.h>
#include <mamda/MamdaFieldState.h>

namespace Wombat
{

    class MamdaPubStatusHandler;

    class MAMDAExpDLL MamdaPubStatusListener 
        : public MamdaMsgListener
        , public MamdaPubStatus
    {
    public:
        MamdaPubStatusListener ();
        virtual ~MamdaPubStatusListener ();

        void  addHandler        (MamdaPubStatusHandler* handler);
        void  updateFieldStates ();

        const char*        getSymbol                  () const;
        const char*        getActivityTime            () const;
        const char*        getActivityDate            () const;
        const char*        getPubId                   () const;
        const char*        getPubClass                () const;
        const char*        getPubHostName             () const;

        MamdaFieldState    getSymbolFieldState        () const;
        MamdaFieldState    getActivityTimeFieldState  () const;
        MamdaFieldState    getActivityDateFieldState  () const;
        MamdaFieldState    getPubIdFieldState         () const;
        MamdaFieldState    getPubClassFieldState      () const;
        MamdaFieldState    getPubHostNameFieldState   () const;

        const char*        getStatusMsgType           () const;
        MamdaFieldState    getStatusMsgTypeFieldState () const;

        const char*        getPubFtMode               () const; // HB FT -- -- --
        const char*        getPubMhMode               () const; // HB -- -- MH --
        const char*        getLineStatus              () const; // HB -- LS -- --
        long               getStatusSeqNum            () const; // HB -- -- -- --      
        long               getBeginGapSeqNum          () const; // -- -- -- -- GP
        long               getEndGapSeqNum            () const; // -- -- -- -- GP
        long               getPubCacheSize            () const; // HB -- -- -- --
        const char*        getFreeText                () const; // HB FT LS MH GP
        
        MamdaFieldState    getPubFtModeFieldState     () const;
        MamdaFieldState    getPubMhModeFieldState     () const;
        MamdaFieldState    getLineStatusFieldState    () const;
        MamdaFieldState    getStatusSeqNumFieldState  () const;
        MamdaFieldState    getBeginGapSeqNumFieldState() const;
        MamdaFieldState    getEndGapSeqNumFieldState  () const;
        MamdaFieldState    getPubCacheSizeFieldState  () const;
        MamdaFieldState    getFreeTextFieldState      () const;

        virtual  void onMsg (MamdaSubscription*  subscription,
                             const MamaMsg&      msg,
                             short               msgType);

        struct MamdaPubStatusListenerImpl;

    private:
        MamdaPubStatusListenerImpl& mImpl;
    };

}

#endif // MamdaPubStatusListenerH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
