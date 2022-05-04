---
title: mama/MamaBasicWildCardSubscription.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaBasicWildCardSubscription.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html)**  |




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

#ifndef MAMA_BASIC_WILD_CARD__SUBSCRIPTION_CPP_H__
#define MAMA_BASIC_WILD_CARD__SUBSCRIPTION_CPP_H__

#include "mama/mama.h"
#include "mama/MamaBasicSubscription.h"

namespace Wombat 
{
class MamaStatus;
class MamaMsg;
class MamaQueue;
class MamaTransport;
class MamaBasicWildCardSubscriptionCallback;

class MAMACPPExpDLL MamaBasicWildCardSubscription : public MamaBasicSubscription
{
public:

    virtual ~MamaBasicWildCardSubscription ();
   
    MamaBasicWildCardSubscription (void);
    
    virtual void create (
        MamaTransport*                 transport,
        MamaQueue*                     queue,
        MamaBasicWildCardSubscriptionCallback* callback,
        const char*                    source,
        const char*                    topic,
        void*                          closure = NULL);

    virtual const char*  getSymbol (void) const;
    
    virtual const char*  getSource (void) const;

    virtual void* getTopicClosure() const;

    virtual void setTopicClosure (void *closure);

    virtual void muteCurrentTopic (void);

    virtual MamaBasicWildCardSubscriptionCallback* getBasicWildCardCallback (void) const;

private:

    /* Private functions. */    
    static void MAMACALLTYPE onSubscriptionCreate(mamaSubscription subsc, void *closure);    
    static void MAMACALLTYPE onSubscriptionDestroy(mamaSubscription subscription, void *closure);
    static void MAMACALLTYPE onSubscriptionError(mamaSubscription subsc, mama_status status, void *platformError, const char *subject, void *closure);
    static void MAMACALLTYPE onSubscriptionMessage(mamaSubscription subsc, mamaMsg msg, const char *topic, void *closure, void *topicClosure);

    // The callback class passed to the create function
    MamaBasicWildCardSubscriptionCallback *mCallback;
};

} // namespace Wombat
#endif // MAMA_BASIC_WILD_CARD__SUBSCRIPTION_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
