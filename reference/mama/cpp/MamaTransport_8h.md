---
title: mama/MamaTransport.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaTransport.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaTransportTopicEventCallback](classWombat_1_1MamaTransportTopicEventCallback.html)**  |
| class | **[Wombat::MamaTransportCallback](classWombat_1_1MamaTransportCallback.html)**  |
| class | **[Wombat::MamaTransport](classWombat_1_1MamaTransport.html)**  |




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

#ifndef MAMA_TRANSPORT_CPP_H__
#define MAMA_TRANSPORT_CPP_H__

#include "mama/mama.h"

namespace Wombat
{

    class MamaSymbolMap;
    class MamaTransport;
    class MamaConnection;
    class MamaServerConnection;
    class MamaQueue;

    class MAMACPPExpDLL MamaTransportTopicEventCallback
    {
    public:
        virtual ~MamaTransportTopicEventCallback()
        {
        };
        virtual void onTopicSubscribe (MamaTransport* transport,
                                       const char* topic,
                                       const void* platformInfo)
        {
            return;
        }

        virtual void onTopicUnsubscribe (MamaTransport* transport,
                                         const char* topic,
                                         const void* platformInfo)
        {
            return;
        }

        virtual void onTopicPublishError (MamaTransport* transport,
                                          const char* topic,
                                          const void* platformInfo)
        {
            return;
        }

        virtual void onTopicPublishErrorNotEntitled (MamaTransport* transport,
                                                     const char* topic,
                                                     const void* platformInfo)
        {
            return;
        }

        virtual void onTopicPublishErrorBadSymbol (MamaTransport* transport,
                                                   const char* topic,
                                                   const void* platformInfo)
        {
            return;
        }

    };

    class MAMACPPExpDLL MamaTransportCallback
    {
    public:
        virtual ~MamaTransportCallback()
        {
        };

        virtual void onDisconnect (
            MamaTransport*  transport,
            const void*     platformInfo)
        {
            return;
        }

        virtual void onReconnect (
            MamaTransport*  transport,
            const void*     platformInfo)
        {
            return;
        }

        virtual void onQuality (
            MamaTransport*     transport,
            short              cause,
            const void*        platformInfo) = 0;

        virtual void onConnect (
            MamaTransport*  transport,
            const void*     platformInfo)
        {
            return;
        }

        virtual void onAccept (
            MamaTransport*   transport,
            const void*      platformInfo)
        {
            return;
        }

        virtual void onAcceptReconnect (
            MamaTransport*  transport,
            const void*     platformInfo)
        {
            return;
        }

        virtual void onPublisherDisconnect (
            MamaTransport*  transport,
            const void*     platformInfo)
        {
            return;
        }

        virtual void onNamingServiceConnect (
            MamaTransport*  transport,
            const void*     platformInfo)
        {
            return;
        }

        virtual void onNamingServiceDisconnect (
            MamaTransport*  transport,
            const void*     platformInfo)
        {
            return;
        }
    };

    class MAMACPPExpDLL MamaTransport
    {
    public:
        MamaTransport          ();
        virtual ~MamaTransport ();

        MamaTransport (
            mamaTransport  cTransport);

        void create (
            const char*  name,
            mamaBridge   bridgeImpl);

        void setName (
            const char* name);

        const char* getName () const;

        const char* getMiddleware() const;

        double getOutboundThrottle (
            mamaThrottleInstance instance = MAMA_THROTTLE_DEFAULT) const;

        void setOutboundThrottle (
            double               outboundThrottle,
            mamaThrottleInstance instance = MAMA_THROTTLE_DEFAULT);

        void setTransportTopicCallback (MamaTransportTopicEventCallback* callback);

        void getTransportCallbackQueue(MamaQueue* queue);

        MamaQueue* getTransportCallbackQueue();

        void setTransportCallback (
            MamaTransportCallback*  callback);

        void setSymbolMap (
            const MamaSymbolMap*  mapper);

        const MamaSymbolMap* getSymbolMap () const;

        void setDescription (
            const char*  description);

        const char* getDescription () const;

        /*
         * Find a connection for the specified IP address and port. If the port is 0
         * the first connection for the specified IP address is returned.
         *
         * The caller must delete() the returned value.
         */
        MamaConnection* findConnection (
            const char*  IpAddress,
            uint16_t     port);

        /*
         * Return a list of all connections.
         *
         * Note. The results (list and len) must be passed to freeAllConnections
         * to free the resources allocated by this call.
         */
        virtual void getAllConnections (
            MamaConnection**&  list,
            uint32_t&          len);

        /*
         * Free array returned by getAllConnections
         */
        virtual void freeAllConnections (
            MamaConnection**  list,
            uint32_t          len);

        /*
         * Return a list of all server connections.
         *
         * Note. The results (list and len) must be passed to
         * freeAllServerConnections to free the resources allocated by this call.
         */
        virtual void getAllServerConnections (
            MamaServerConnection**&  list,
            uint32_t&                len);

        /*
         * Free array returned by getAllServerConnections.
         */
        virtual void freeAllServerConnections (
            MamaServerConnection**  list,
            uint32_t&               len);

        void setInvokeQualityForAllSubscs (
            bool  invokeQualityForAllSubscs);

        bool getInvokeQualityForAllSubscs () const;

        mamaQuality getQuality () const;

        void requestConflation () const;

        void requestEndConflation () const;

        MamaQueue* getTransportCallbackQueue() const;

        void setTransportCallbackQueue(MamaQueue* queue);

        // Access to C types for implementation of related classes.
        mamaTransport        getCValue    ();
        const mamaTransport  getCValue    () const;

        void* getNativeTransport (
            int  index);

        void disableRefresh (
            bool  disable);

        struct              MamaTransportImpl;
        MamaTransportImpl*  mPimpl;

    private:
        mamaTransport       mTransport;
        MamaQueue*          mQueue;        // used for transport callbacks
    };

} // namespace Wombat

#endif // MAMA_TRANSPORT_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:27 +0100
