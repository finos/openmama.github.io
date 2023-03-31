---
title: mama/MamaPublisher.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaPublisher.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaPublisher](classWombat_1_1MamaPublisher.html)**  |




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

#ifndef MAMA_PUBLISHER_CPP_H__
#define MAMA_PUBLISHER_CPP_H__

#include "mama/mamacpp.h"
#include "mama/MamaSendCompleteCallback.h"

namespace Wombat
{
    class MamaInbox;
    class MamaPublisherImpl;
    class MamaSendCompleteCallback;
    class MamaPublisherCallback;

    class MAMACPPExpDLL MamaPublisher
    {
    public:
        virtual ~MamaPublisher (void);

        MamaPublisher (void);

        virtual void create (
            MamaTransport*  transport,
            const char*     topic,
            const char*     source = NULL,
            const char*     root   = NULL);

        virtual void createWithCallbacks (
            MamaTransport*  transport,
            MamaQueue*      queue,
            MamaPublisherCallback* cb,
            void*           closure,
            const char*     topic,
            const char*     source = NULL,
            const char*     root   = NULL);

        virtual void send (
            MamaMsg*  msg) const;

        virtual void sendWithThrottle (
            MamaMsg*                   msg,
            MamaSendCompleteCallback*  cb,
            void*                      closure) const ;

        virtual void sendFromInbox (
            MamaInbox*  inbox,
            MamaMsg*    msg) const;

        virtual void sendFromInboxWithThrottle(
            MamaInbox*                 inbox,
            MamaMsg*                   msg,
            MamaSendCompleteCallback*  cb,
            void*                      closure) const;

        virtual void sendReplyToInbox (
            const MamaMsg&  request,
            MamaMsg*        reply) const;

        virtual void sendReplyToInbox (
            mamaMsgReply  replyHandle,
            MamaMsg*      reply) const;

        virtual void destroy (void);

        virtual void destroyEx (void);

        virtual MamaTransport* getTransport (void) const;

        virtual mamaPublisherState getState() const;

        virtual const char* stringForState(mamaPublisherState state) const;

        virtual const char* getRoot () const;

        virtual const char* getSource () const;

        virtual const char* getSymbol () const;

        virtual MamaPublisherCallback* getCallback() const;

    protected:
        MamaTransport*      mTransport;

    private:
        MamaPublisher (MamaPublisherImpl* impl);
        MamaPublisherImpl*      mPimpl;
        MamaPublisherCallback* mCallback;
        bool destroyed;
    };

} // namespace Wombat
#endif // MAMA_PUBLISHER_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
