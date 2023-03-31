---
title: cs/MamdaSubscription.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaSubscription.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaSubscription](classWombat_1_1MamdaSubscription.html)** <br>A [MamdaSubscription]() is used to register interest in a particular symbol and source. A MamaTransport is required to actually activate the subscription.  |




## Source code

```csharp
/* $Id: MamdaSubscription.cs,v 1.7.2.7 2012/08/24 16:12:11 clintonmcdowell Exp $
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

using System;
using System.Collections;

namespace Wombat
{
    public class MamdaSubscription : MamdaResourceContainer
    {
        public MamdaSubscription() : base()
        {
        }

        public void create(
            MamaTransport         transport,
            MamaQueue             queue,
            string                source,
            string                symbol,
            object                closure)
        {
            setSource(source);
            setSymbol(symbol);
            setTransport(transport);
            setQueue(queue);
            setClosure(closure);
            activate();
        }

        public void setSource(string source)
        {
            mSource = source;
        }

        public void setSymbol(string symbol)
        {
            mSymbol = symbol;
        }

        public void setTransport(MamaTransport transport)
        {
            mTransport = transport;
        }

        public void setQueue(MamaQueue  queue)
        {
            mQueue = queue;
        }

        public void setType(mamaSubscriptionType type)
        {
            mType = type;
        }

        public void setServiceLevel(
            mamaServiceLevel serviceLevel,
            int serviceLevelOpt)
        {
            mServiceLevel    = serviceLevel;
            mServiceLevelOpt = serviceLevelOpt;
        }

        public void setRequireInitial(bool require)
        {
            mRequireInitial = require;
        }

        public void setTimeout(double timeout)
        {
            mTimeout = timeout;
        }

        public void setRetries(int retries)
        {
            mRetries = retries;
        }

        public void setClosure (Object  closure)
        {
            mClosure = closure;
        }

        public void addMsgListener(MamdaMsgListener listener)
        {
            if (!mMsgListeners.Contains(listener))
            {
                mMsgListeners.Add(listener);
            }
        }

        public ArrayList getMsgListeners()
        {
          return mMsgListeners;
        }

        public void addStaleListener(MamdaStaleListener listener)
        {
            if (!mStaleListeners.Contains(listener))
            {
                mStaleListeners.Add(listener);
            }
        }

        public void addErrorListener(MamdaErrorListener listener)
        {
            if (!mErrorListeners.Contains(listener))
            {
                mErrorListeners.Add(listener);
            }
        }

        public void activate()
        {
            if (mSubscription != null) return;

            mSubscription = new MamaSubscription();

            mSubscription.setSubscriptionType(mType);
            mSubscription.setServiceLevel(mServiceLevel, mServiceLevelOpt);
            mSubscription.setRequiresInitial(mRequireInitial);
            mSubscription.setRetries(mRetries);
            mSubscription.setTimeout(mTimeout);

            mMamaSource.transport = mTransport;
            mMamaSource.symbolNamespace = mSource;

            mSubscription.create(
                mQueue,
                new MamdaSubscriptionCallback(this),
                mMamaSource,
                mSymbol,
                null);
        }

        public void deactivate ()
        {
            if (mSubscription != null)
            {
                mSubscription.destroyEx();
            }
        }

        public void requestRecap ()
        {
        }

        public string getSource()
        {
            return mSource;
        }

        public double getTimout()
        {
            return mTimeout;
        }

        public int getRetries()
        {
            return mRetries;
        }

        public string getSymbol()
        {
            return mSymbol;
        }

        public MamaQueue getQueue()
        {
            return mQueue;
        }

        public MamaTransport getTransport()
        {
            return mTransport;
        }

        public Object getClosure()
        {
            return mClosure;
        }

        public MamaSubscription getMamaSubscription()
        {
            return mSubscription;
        }

        #region Mamda subscription callback

        private class MamdaSubscriptionCallback : MamaSubscriptionCallback
        {
            private MamdaSubscription mSubscription = null;

            public MamdaSubscriptionCallback(MamdaSubscription subscription)
            {
                mSubscription = subscription;
            }

            public void onMsg(
                MamaSubscription subscription,
                MamaMsg msg)
            {
                mamaMsgType msgType = msg.typeForMsg();
                mamaMsgStatus msgStatus = msg.getStatus();

                switch (msgType)
                {
                    case mamaMsgType.MAMA_MSG_TYPE_DELETE:
                    case mamaMsgType.MAMA_MSG_TYPE_EXPIRE:
                        subscription.deallocate();
                        return;
                }

                switch (msgStatus)
                {
                    case mamaMsgStatus.MAMA_MSG_STATUS_BAD_SYMBOL:
                    case mamaMsgStatus.MAMA_MSG_STATUS_EXPIRED:
                    case mamaMsgStatus.MAMA_MSG_STATUS_TIMEOUT:
                        subscription.deallocate();
                        return;
                }

                for (int i=0;i<mSubscription.mMsgListeners.Count;i++)
                {
                    MamdaMsgListener listener = (MamdaMsgListener) mSubscription.mMsgListeners[i];
                    listener.onMsg(mSubscription, msg, msgType);
                }
            }

            public void onCreate(MamaSubscription subscription)
            {
                lock (mSubscription)
                {
                    mSubscription.mSubscription = subscription;
                }
            }

            public void onError(
                MamaSubscription subscription,
                MamaStatus.mamaStatus status,
                string subject)
            {
                MamdaErrorSeverity  severity = MamdaErrorSeverity.MAMDA_SEVERITY_OK;
                MamdaErrorCode      code     = MamdaErrorCode.MAMDA_NO_ERROR;
                    
                switch (status)
                {
                    case MamaStatus.mamaStatus.MAMA_STATUS_BAD_SYMBOL:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_BAD_SYMBOL;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_TIMEOUT:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_TIMEOUT;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_NOT_ENTITLED:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_NOT_ENTITLED;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_NOT_FOUND:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_NOT_FOUND;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_NO_SUBSCRIBERS:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_NO_SUBSCRIBERS;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_EXPIRED:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_EXPIRED;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_NOT_PERMISSIONED:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_NOT_PERMISSIONED;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_BANDWIDTH_EXCEEDED:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_BANDWIDTH_EXCEEDED;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_DELETE:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_DELETE;
                        break;
                    case MamaStatus.mamaStatus.MAMA_STATUS_PLATFORM:
                    default:
                        severity = MamdaErrorSeverity.MAMDA_SEVERITY_HIGH;
                        code     = MamdaErrorCode.MAMDA_ERROR_PLATFORM_STATUS;
                        break;
                }

                for (int i=0;i<mSubscription.mErrorListeners.Count;i++)
                {
                    MamdaErrorListener listener = (MamdaErrorListener) mSubscription.mErrorListeners[i];
                    listener.onError(
                        mSubscription,
                        severity,
                        code,
                        MamdaErrorCodes.stringForMamdaError(code));
                }
            }

            public void onQuality(
                MamaSubscription subscription,
                mamaQuality quality,
                string symbol)
            {
                for (int i=0;i<mSubscription.mStaleListeners.Count;i++)
                {
                    MamdaStaleListener listener = (MamdaStaleListener) mSubscription.mStaleListeners[i];
                    listener.onStale(mSubscription, quality);
                }
            }

            public void onGap (
                MamaSubscription  subscription)
            {
            }

            public void onDestroy (
                MamaSubscription  subscription)
            {
                subscription.deallocate ();
                mSubscription = null;
            }

            public void onRecapRequest
                (MamaSubscription subscription)
            {
            }
        }

        #endregion Mamda subscription callback

        #region Implementation details

        private string                  mSymbol                 = null;
        private string                  mSource                 = null;
        private MamaTransport           mTransport              = null;
        private MamaQueue               mQueue                  = null;
        private object                  mClosure                = null;
        private bool                    mRequireInitial         = true;
        private double                  mTimeout                = 10;
        private int                     mRetries                = 3;
        internal ArrayList              mMsgListeners           = new ArrayList();
        internal ArrayList              mStaleListeners         = new ArrayList();
        internal ArrayList              mErrorListeners         = new ArrayList();
        private MamaSubscription        mSubscription           = null;
        private mamaSubscriptionType    mType                   = mamaSubscriptionType.MAMA_SUBSC_TYPE_NORMAL;
        private mamaServiceLevel        mServiceLevel           = mamaServiceLevel.MAMA_SERVICE_LEVEL_REAL_TIME;
        private int                     mServiceLevelOpt        = 0;
        private MamaSource              mMamaSource             = new MamaSource();

        #endregion Implementation details
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
