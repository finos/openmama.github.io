---
title: mamda/MamdaBasicSubscription.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaBasicSubscription.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html)**  |




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

#ifndef MamdaBasicSubscriptionH
#define MamdaBasicSubscriptionH

#include <mamda/MamdaConfig.h>
#include <mama/subscriptiontype.h>
#include <mama/mamacpp.h>

namespace Wombat
{

    class MamaTransport;
    class MamaQueue;

    class MamdaBasicMsgListener;
    class MamdaBasicQualityListener;
    class MamdaBasicErrorListener;


    class MAMDAExpDLL MamdaBasicSubscription
    {
    public:

        MamdaBasicSubscription ();

        ~MamdaBasicSubscription ();

        void create (
            MamaTransport*   transport,
            MamaQueue*       queue,
            const char*      symbol,
            void*            closure = NULL);

        void setTimeout (double  timeout);

        void addMsgListener (MamdaBasicMsgListener*  listener);

        void addQualityListener (MamdaBasicQualityListener*  listener);

        void addErrorListener (MamdaBasicErrorListener*  listener);

        void activate ();

        void deactivate ();
        
        void setSymbol (const char* symbol);
        
        const char* getSymbol () const;

        void setClosure (void* closure);
        
        void* getClosure() const;

        void setTransport (MamaTransport* transport);

        MamaTransport* getTransport() const;

        void setQueue (MamaQueue* queue);
        
        MamaQueue* getQueue() const;

    private:
        struct MamdaBasicSubscriptionImpl;
        MamdaBasicSubscriptionImpl& mImpl;
    };

} // namespace

#endif // MamdaBasicSubscriptionH
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
