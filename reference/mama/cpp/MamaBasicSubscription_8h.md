---
title: mama/MamaBasicSubscription.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaBasicSubscription.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**  |




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

#ifndef MAMA_BASIC__SUBSCRIPTION_CPP_H__
#define MAMA_BASIC__SUBSCRIPTION_CPP_H__

#include "mama/mama.h"

namespace Wombat
{
class MamaStatus;
class MamaMsg;
class MamaQueue;
class MamaTransport;
class MamaBasicSubscriptionCallback;

struct MamaBasicSubscriptionImpl;
class MAMACPPExpDLL MamaBasicSubscription
{
public:

    virtual ~MamaBasicSubscription ();

    MamaBasicSubscription (void);

    virtual void createBasic (
        MamaTransport*                 transport,
        MamaQueue*                     queue,
        MamaBasicSubscriptionCallback* callback,
        const char*                    topic,
        void*                          closure = NULL);

    virtual void destroy ();

    virtual void destroyEx();

    virtual bool isActive (void) const;

    virtual const char*  getTopic (void) const;

    virtual MamaTransport* getTransport (void) const;

    virtual MamaBasicSubscriptionCallback* getBasicCallback (void) const;

    virtual MamaQueue* getQueue (void) const;

    virtual void setClosure (void*  closure);

    virtual void* getClosure (void) const;

    virtual void setDebugLevel (MamaLogLevel  level);

    virtual MamaLogLevel getDebugLevel () const;

    virtual bool checkDebugLevel (MamaLogLevel  level) const;

    virtual mamaSubscriptionState getState(void);

private:

    /* Private functions. */
    static void MAMACALLTYPE onSubscriptionCreate(mamaSubscription subsc, void *closure);
    static void MAMACALLTYPE onSubscriptionDestroy(mamaSubscription subscription, void *closure);
    static void MAMACALLTYPE onSubscriptionError(mamaSubscription subsc, mama_status status, void *platformError, const char *subject, void *closure);
    static void MAMACALLTYPE onSubscriptionMessage(mamaSubscription subsc, mamaMsg msg, void *closure, void *itemClosure);

    // The callback class passed to the create function
    MamaBasicSubscriptionCallback *mCallback;

    MamaBasicSubscriptionImpl*     mImpl;
protected:

    // The closure passed to the create function
    void *mClosure;

    // The queue passed to the create function
    MamaQueue *mQueue;

    // The underlying C subscription
    mamaSubscription mSubscription;

    // The transport passed to the create function
    MamaTransport *mTransport;
};

} // namespace Wombat
#endif // MAMA_BASIC__SUBSCRIPTION_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
