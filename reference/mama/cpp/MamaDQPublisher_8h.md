---
title: mama/MamaDQPublisher.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaDQPublisher.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaDQPublisher](classWombat_1_1MamaDQPublisher.html)**  |




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

#ifndef MAMA_DQPUBLISHER_CPP_H__
#define MAMA_DQPUBLISHER_CPP_H__

#include "mama/msgstatus.h"

namespace Wombat 
{

class MamaDQPublisherImpl;
class MamaSource;
class MamaTransport;
class MamaQueue;
class MamaMsg;

class MAMACPPExpDLL MamaDQPublisher
{
public: 
    friend class MamaDQPublisherManagerImpl;
    virtual ~MamaDQPublisher (void);

    MamaDQPublisher (void);

    virtual void create (
        MamaTransport*     transport,
        const char*             topic);

    virtual void send (MamaMsg* msg);
   
    virtual void sendReply (const MamaMsg& request, MamaMsg* reply) const;
    virtual void sendReply (mamaMsgReply replyHandle, MamaMsg *reply) const;

    virtual void destroy (void);
    
    virtual void setStatus (mamaMsgStatus  status);
    
    virtual void setSenderId (uint64_t  id);
    
    virtual void setSeqNum (mama_seqnum_t num);
    
    virtual void* getCache (void);
    virtual void setCache (void* cache);

protected:
    MamaDQPublisherImpl* mImpl;
};

}

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
