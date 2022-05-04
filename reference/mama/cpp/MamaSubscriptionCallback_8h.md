---
title: mama/MamaSubscriptionCallback.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSubscriptionCallback.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html)**  |




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

#ifndef MAMA_SUBSCRIPTION_CALLBACK_CPP_H__
#define MAMA_SUBSCRIPTION_CALLBACK_CPP_H__

#include "mama/mamacpp.h"

namespace Wombat 
{
    class MamaSubscription;
    class MAMACPPExpDLL MamaSubscriptionCallback
    {
    public:
        virtual ~MamaSubscriptionCallback () 
        {};

        virtual void onCreate (MamaSubscription*  subscription) = 0;

        virtual void onError (MamaSubscription*  subscription,
                              const MamaStatus&  status,
                              const char*        symbol) = 0;

        virtual void onGap (MamaSubscription*  subscription) 
        {};

        virtual void onDestroy (MamaSubscription*  subscription) 
        {};

        virtual void onRecapRequest (MamaSubscription*  subscription) 
        {};    
            
            
        virtual void onMsg (MamaSubscription*  subscription, 
                            MamaMsg&           msg) = 0;

        virtual void onQuality (MamaSubscription*  subscription,
                                mamaQuality        quality,
                                const char*        symbol,
                                short              cause,
                                const void*        platformInfo) = 0;
       
        /* By default forward to MamaSubscription callback */
        virtual void onCreate (MamaBasicSubscription*  subscription)
        {
            onCreate ((MamaSubscription*)subscription);
        }

        virtual void onError (MamaBasicSubscription*  subscription,
                              const MamaStatus&       status,
                              const char*             symbol) 
        {
            onError ((MamaSubscription*)subscription, status, symbol);
        }

        virtual void onMsg (MamaBasicSubscription*  subscription, 
                            MamaMsg&                msg) 
        {
            onMsg ((MamaSubscription*)subscription, msg);
        }
    };

} // namespace Wombat
#endif // MAMA_SUBSCRIPTION_CALLBACK_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
