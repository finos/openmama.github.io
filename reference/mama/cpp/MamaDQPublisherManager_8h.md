---
title: mama/MamaDQPublisherManager.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaDQPublisherManager.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaPublishTopic](classWombat_1_1MamaPublishTopic.html)**  |
| class | **[Wombat::MamaDQPublisherManager](classWombat_1_1MamaDQPublisherManager.html)**  |




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

#ifndef MAMA_DQPUBLISHERMANAGER_CPP_H__
#define MAMA_DQPUBLISHERMANAGER_CPP_H__

#include "mama/MamaDQPublisherManagerCallback.h"
#include "mama/dqpublishermanager.h"

namespace Wombat 
{
class MamaDQPublisherManagerImpl;
class MamaSource;
class MamaTransport;
class MamaQueue;
class MamaMsg;



class MAMACPPExpDLL MamaPublishTopic
{
       public:
            friend struct MamaDQPublisherManagerImpl;
            const char*       mSymbol;
            MamaDQPublisher*  mPub;
            void*             mCache;
       protected:
            MamaPublishTopic(){};
            void set(mamaPublishTopic* pubInfo);
};

class MAMACPPExpDLL MamaDQPublisherManager
{
public: 
    virtual ~MamaDQPublisherManager (void);

    MamaDQPublisherManager (void);

     virtual void create (MamaTransport *transport, 
             MamaQueue*  queue,
             MamaDQPublisherManagerCallback*   callback,
             const char* sourcename,
             const char* root   = "_MD");

    virtual void addPublisher (const char *symbol, MamaDQPublisher* pub, void * cache);
    virtual MamaDQPublisher* removePublisher (const char *symbol);
      
    virtual MamaDQPublisher* createPublisher (const char *symbol, void * cache);
    virtual void destroyPublisher (const char *symbol);

    virtual const MamaDQPublisher* getPublisher (const char* symbol) const;

    virtual void destroy (void);

    virtual void setStatus (mamaMsgStatus  status);
    
    virtual void setSenderId (uint64_t  id);
    
    virtual void setSeqNum (mama_seqnum_t num);
       
    virtual void sendSyncRequest (mama_u16_t nummsg, mama_f64_t delay, mama_f64_t duration);
    
    virtual void sendNoSubscribers (const char *symbol);


private:
    MamaDQPublisherManagerImpl* mImpl;

};

}
#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
