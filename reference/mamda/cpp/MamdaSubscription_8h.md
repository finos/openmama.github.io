---
title: mamda/MamdaSubscription.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaSubscription.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaSubscription](classWombat_1_1MamdaSubscription.html)**  |




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

#ifndef MamdaSubscriptionH
#define MamdaSubscriptionH

#include <vector>

#include <mamda/MamdaConfig.h>
#include <mama/mamacpp.h>
#include <mama/marketdata.h>
#include <mamda/MamdaFieldState.h>

namespace Wombat
{

    class MamaSource;
    class MamaTransport;
    class MamaQueue;

    class MamdaMsgListener;
    class MamdaQualityListener;
    class MamdaErrorListener;

    class MAMDAExpDLL MamdaSubscription
    {
    public:
        MamdaSubscription ();

        virtual ~MamdaSubscription ();

        virtual MamdaSubscription* clone() const;

        void create (
            MamaQueue*            queue,
            MamaSource*           source,
            const char*           symbol,
            void*                 closure = NULL);
            
        void destroy ();

        bool isActive () const;

        void setSource (MamaSource*  source);

        void setSymbol (const char*  symbol);

        void setQueue (MamaQueue*  queue);

        void setMdDataType (mamaMdDataType  mdDataType);

        void setType (mamaSubscriptionType  type);

        void setServiceLevel (mamaServiceLevel  serviceLevel,
                              long              serviceLevelOpt = 0);

        void setRequireInitial (bool  require);

        void setTimeout (double  timeout);
        
        void setRecapTimeout (double  timeout);
        
        void setRetries (int  retries);

        void setClosure (void*  closure);

        void setGroupSizeHint (int groupSizeHint); 

        void setMamaSubscription (MamaSubscription*  subscription);

        void addMsgListener (MamdaMsgListener*  listener);

        void addQualityListener (MamdaQualityListener*  listener);

        void addErrorListener (MamdaErrorListener*  listener);
        
        std::vector<MamdaMsgListener*>& getMsgListeners ();
        
        void activate ();

        void deactivate ();

        void requestRecap ();

        MamaSource* getSource() const;

        const char* getSourceName() const;
        
        const char* getSymbol() const;
        
        const char* getExchange() const;

        MamaTransport* getTransport() const;

        MamaQueue* getQueue() const;

        MamaSubscription* getMamaSubscription();

        mamaSubscriptionType getType() const;

        mamaServiceLevel getServiceLevel() const;

        long getServiceLevelOpt() const;

        bool getRequireInitial() const;

        double getTimeout() const;

        double getRecapTimeout() const;

        int getRetries() const;
        
        void* getClosure() const;

        uint32_t getSeqNum() const;
        
        void setItemClosure (void* closure);

        void* getItemClosure (void);
        
        bool checkDebugLevel (MamaLogLevel  level) const;
           
    private:
        struct MamdaSubscriptionImpl;
        MamdaSubscriptionImpl& mImpl;
    };

} // namespace

#endif // MamdaSubscriptionH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
