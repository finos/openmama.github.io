---
title: mama/MamaQueue.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaQueue.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaQueue](classWombat_1_1MamaQueue.html)**  |




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

#ifndef MAMA_QUEUE_CPP_H__
#define MAMA_QUEUE_CPP_H__

#include <mama/mamacpp.h>
#include <mama/queue.h>

namespace Wombat 
{
 
    class MamaQueueEnqueueCallback;
    class MamaQueueMonitorCallback;
    class MamaQueueEventCallback;

    class MAMACPPExpDLL MamaQueue
    {   

    public:
        MamaQueue          (void);
        MamaQueue          (mamaQueue cQueue);
        virtual ~MamaQueue (void);

        virtual void create (
            mamaBridge  bridgeImpl);

        virtual void create (
            mamaBridge  bridgeImpl,
            void*       nativeQueue);

        virtual void dispatch ();

        virtual void timedDispatch (
            uint64_t  timeout);

        virtual void dispatchEvent ();


        virtual void enqueueEvent (
            MamaQueueEventCallback*  callback, 
            void*                    closure);
        
        virtual void enqueueEvent (
            MamaQueueEventCallback&  callback,
            void*                    closure);
        
        virtual void stopDispatch ();

        virtual size_t getEventCount ();

        virtual void setEnqueueCallback (
            MamaQueueEnqueueCallback*  cb,
            void*                      closure);

        virtual void setQueueMonitorCallback (
            MamaQueueMonitorCallback*  cb,
            void*                      closure);
        
        virtual void setHighWatermark (
            size_t  highWatermark);

        virtual size_t getHighWatermark (void) const;
       
        virtual void setLowWatermark (
            size_t  lowWatermark);

        virtual size_t getLowWatermark (void) const;
        
        virtual void setQueueName (
            const char*  name);

        virtual const char* getQueueName () const;

        virtual const char* getQueueBridgeName () const;

        virtual void destroy ();


        virtual void setClosure (
            void*  closure);

        virtual void* getClosure ();

        virtual void destroyTimedWait (
            long  timeout);

        virtual void destroyWait ();


        mamaQueue        getCValue ();
        const mamaQueue  getCValue () const;

        void setCValue (
            mamaQueue  cQueue);

        struct          MamaQueueImpl;
        MamaQueueImpl*  mPimpl;
    private:
        mamaQueue       mQueue;

        void destroyInternal (
            mama_status  status);
    };

} // namespace Wombat
#endif // MAMA_QUEUE_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
