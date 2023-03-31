---
title: mama/MamaSubscription.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSubscription.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSubscription](classWombat_1_1MamaSubscription.html)**  |




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

#ifndef MAMA_SUBSCRIPTION_CPP_H__
#define MAMA_SUBSCRIPTION_CPP_H__

#include "mama/MamaBasicSubscription.h"
#include "mama/subscription.h"

namespace Wombat 
{
    class MamaSubscriptionCallback;
    class MamaSource;
    class MamaSourceDerivative;
    class MamaTransport;

    struct MamaSubscriptionImpl;
    class MAMACPPExpDLL MamaSubscription : public MamaBasicSubscription
    {
    public:
        virtual ~MamaSubscription ();

        /* Construct a MamaSubscription. MamaSubscription::createXXX() must be
         * called to activate the subscription.
         */
        MamaSubscription (void);

        virtual void              setCSubscription (mamaSubscription subscription);
        virtual mamaSubscription  getCSubscription ();
            
         virtual void setup (MamaTransport*              transport,
                             MamaQueue*                  queue,
                             MamaSubscriptionCallback*   callback,
                             const char*                 source,
                             const char*                 symbol,
                             void*                       closure     = NULL);

         virtual void setup (MamaQueue*                  queue,
                             MamaSubscriptionCallback*   callback,
                             MamaSource*                 source,
                             const char*                 symbol,
                             void*                       closure     = NULL);

         virtual void activate ();

         virtual void deactivate ();


         virtual void create (MamaTransport*              transport,
                              MamaQueue*                  queue,
                              MamaSubscriptionCallback*   callback,
                              const char*                 source,
                              const char*                 symbol,
                              void*                       closure     = NULL);

         virtual void create (MamaQueue*                  queue,
                              MamaSubscriptionCallback*   callback,
                              MamaSource*                 source,
                              const char*                 symbol,
                              void*                       closure     = NULL);

        virtual void createSnapshot (MamaTransport*               transport,
                                     MamaQueue*                   queue,
                                     MamaSubscriptionCallback*    callback,
                                     const char*                  source,
                                     const char*                  symbol,
                                     void*                        closure = NULL);

        virtual void setRequiresInitial (bool requiresInitial);

        virtual bool getRequiresInitial (void);

        virtual bool getReceivedInitial (void);

        virtual void setRetries (int retries);

        virtual int getRetries (void);

        virtual void setSubscriptionType (mamaSubscriptionType type);

        virtual mamaSubscriptionType getSubscriptionType (void);

        virtual long getServiceLevelOpt (void);

        virtual void setServiceLevel (mamaServiceLevel svcLevel,
                                      long             svcLevelOpt);

        virtual mamaServiceLevel getServiceLevel (void);

        virtual const char*  getSymbol (void) const;

        virtual MamaSubscriptionCallback*   getCallback (void) const;

        virtual void setSymbol (const char* symbol);

        virtual const MamaSourceDerivative*  getSourceDerivative (void) const;

        virtual MamaSourceDerivative*  getSourceDerivative (void);

        virtual const MamaSource*  getSource (void) const;

        virtual const char*  getSubscSource (void) const;

        virtual void setTimeout (double timeout);

        virtual double getTimeout (void);

        virtual void setRecapTimeout (double timeout);

        virtual double getRecapTimeout (void);

        virtual void setRecoverGaps (bool recover);

        virtual bool getRecoverGaps (void) const;

        virtual void setAppDataType (uint8_t dataType);

        virtual uint8_t getAppDataType () const;

        virtual void setGroupSizeHint (int groupSizeHint);

        virtual void setItemClosure (void*  closure);

        virtual void* getItemClosure (void);

        virtual void setPreInitialCacheSize (int cacheSize);

        virtual int getPreInitialCacheSize (void);

        virtual void setMsgQualifierFilter (bool ignoreDefinitelyDuplicate,
                                            bool ignorePossiblyDuplicate,
                                            bool ignoreDefinitelyDelyaed,
                                            bool ignorePossiblyDelayed,
                                            bool ignoreOutOfSequence);

        virtual void getMsgQualifierFilter (bool &ignoreDefinitelyDuplicate,
                                            bool &ignorePossiblyDuplicate,
                                            bool &ignoreDefinitelyDelyaed,
                                            bool &ignorePossiblyDelayed,
                                            bool &ignoreOutOfSequence) const;

        virtual void destroy ();

        virtual void destroyEx();

    private:

        /* Private functions. */
        static void MAMACALLTYPE onSubscriptionCreate       (mamaSubscription subscription,
                                                             void             *closure);

        static void MAMACALLTYPE onSubscriptionDestroy      (mamaSubscription subscription,
                                                             void             *closure);

        static void MAMACALLTYPE onSubscriptionError        (mamaSubscription subscription,
                                                             mama_status      status,
                                                             void             *platformError,
                                                             const char       *subject,
                                                             void             *closure);

        static void MAMACALLTYPE onSubscriptionGap          (mamaSubscription subscription,
                                                             void*            closure);

        static void MAMACALLTYPE onSubscriptionMessage      (mamaSubscription subscription,
                                                             mamaMsg          msg,
                                                             void             *closure,
                                                             void             *topicClosure);

        static void MAMACALLTYPE onSubscriptionQuality      (mamaSubscription subscription,
                                                             mamaQuality      quality,
                                                             const char       *symbol,
                                                             short            cause,
                                                             const void       *platformInfo,
                                                             void             *closure);

        static void MAMACALLTYPE onSubscriptionRecapRequest (mamaSubscription subscription,
                                                             void*            closure);

        // The callback class passed to the create function
        MamaSubscriptionCallback *mCallback;

        // The source derivative
        MamaSourceDerivative *mSourceDeriv;
        MamaSubscriptionImpl    *mImpl;
    };

} // namespace Wombat
#endif // MAMA_SUBSCRIPTION_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
