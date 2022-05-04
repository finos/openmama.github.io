---
title: mamda/MamdaSubscription.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaSubscription.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html)**  |




## Source code

```java
/* $Id$
 *
 * OpenMAMA: The open middleware agnostic messaging API
 * Copyright (C) 2012 NYSE Technologies, Inc.
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

package com.wombat.mamda;

import com.wombat.mama.*;
import java.util.logging.Logger;
import java.util.Vector;

public class MamdaSubscription
{
    private static String CLASS_NAME = MamdaSubscription.class.getName();
    private static Logger mLogger   = Logger.getLogger(CLASS_NAME);

    private String            mSymbol           = null;
    private String            mSource           = null;
    private MamaTransport     mTransport        = null;
    private MamaQueue         mQueue            = null;
    private Object            mClosure          = null;
    private boolean           mRequireInitial   = true;
    private double            mTimeout          = 10;
    private int               mRetries          = 3;
    private Vector            mMsgListeners     = new Vector();
    private Vector            mStaleListeners   = new Vector();
    private Vector            mErrorListeners   = new Vector();
    private MamaSubscription  mSubscription     = null;
    private MamaSubscriptionType mType          = MamaSubscriptionType.NORMAL;
    private short             mServiceLevel     = MamaServiceLevel.REAL_TIME;
    private short             mServiceLevelOpt  = 0;
    private MamaSource        mMamaSource       = new MamaSource ();
    private MamaMsg           mLatestMsg;
    private boolean           mValid            = true;

    public MamdaSubscription (){}

    public void create (MamaTransport         transport,
                        MamaQueue             queue,
                        String                source,
                        String                symbol,
                        Object                closure)
    {
        setSource    (source);
        setSymbol    (symbol);
        setTransport (transport);
        setQueue     (queue);
        setClosure   (closure);
        activate     ();
    }
    
    public void setSource (String  source)
    {
        mSource = source;
    }

    public void setSymbol (String  symbol)
    {
        mSymbol = symbol;
    }

    public void setTransport (MamaTransport  transport)
    {
        mTransport = transport;
    }

    public void setQueue (MamaQueue  queue)
    {
        mQueue = queue;
    }

    public void setType (MamaSubscriptionType  type)
    {
        mType = type;
    }

    public void setServiceLevel (short  serviceLevel,
                                 short  serviceLevelOpt)
    {
        mServiceLevel    = serviceLevel;
        mServiceLevelOpt = serviceLevelOpt;
    }

    public void setRequireInitial (boolean  require)
    {
        mRequireInitial = require;
    }

    public void setTimeout (double  timeout)
    {
        mTimeout = timeout;
    }
    
    public void setRetries (int retries)
    {
        mRetries = retries;
    }
    
    public void setClosure (Object  closure)
    {
        mClosure = closure;
    }
     
    public void addMsgListener (MamdaMsgListener  listener)
    {
        if (mMsgListeners.contains(listener))
            return;

        mMsgListeners.addElement(listener);
    }

    public Vector getMsgListeners()
    {
        return mMsgListeners;
    }

    public void addStaleListener (MamdaStaleListener  listener)
    {
        if (mStaleListeners.contains(listener))
            return;

        mStaleListeners.addElement(listener);
    }

    public void addErrorListener (MamdaErrorListener  listener)
    {
        if (mErrorListeners.contains(listener))
            return;

        mErrorListeners.addElement(listener);
    }

    public synchronized void activate ()
    {
        /*Already activated if not null*/
        if (mSubscription != null) 
        {
            MamaSubscriptionState state = mSubscription.getState();

            if((state == MamaSubscriptionState.MAMA_SUBSCRIPTION_DEACTIVATING) ||
                (state == MamaSubscriptionState.MAMA_SUBSCRIPTION_DEACTIVATED))
            {
                mSubscription.activate ();
                return;
            }
        }
        else
        {         
            mSubscription = new MamaSubscription ();
        }

        mSubscription.setSubscriptionType (mType);
        mSubscription.setServiceLevel     (mServiceLevel,mServiceLevelOpt);
        mSubscription.setRequiresInitial  (mRequireInitial);
        mSubscription.setRetries          (mRetries); /* MAMA_DEFAULT_RETRIES, */
        mSubscription.setTimeout          (mTimeout);

        mMamaSource.setTransport          (mTransport);
        mMamaSource.setSymbolNamespace    (mSource);

        mSubscription.createSubscription (
            new MamdaSubscriptionCallback(this),
            mQueue,
            mMamaSource,
            mSymbol,
            null);

        mValid = true;        
    }

    public void deactivate ()
    {
        if( mSubscription != null )
        {
            mSubscription.destroyEx();
        }
        mValid = false;
    }  

    public MamaSubscriptionType getSubscriptionType ()
    {
        return mSubscription.getSubscriptionType();
    }

    public short getServiceLevel ()
    {
        return mSubscription.getServiceLevel();
    }

    public long getServiceLevelOpt ()
    {
        return mSubscription.getServiceLevelOptions();
    }

    public void setRequiresInitial (boolean  requiresInitial)
    {
        mSubscription.setRequiresInitial(requiresInitial);
    }

    public boolean getRequiresInitial ()
    {
        return mSubscription.getRequiresInitital();
    }

    public void setAppDataType (MamaMdDataType appDataType)
    {
        mSubscription.setAppDataType (appDataType);
    }

    public MamaMdDataType getAppDataType ()
    {            
        return mSubscription.getAppDataType();
    }

    public void setRecoverGaps (boolean doesRecover)
    {
        if (mSubscription != null)
        {
            mSubscription.setRecoverGaps (doesRecover);
        }
    }

    public boolean getRecoverGaps ()
    {
        return mSubscription.getRecoverGaps();
    }

    public void setPreInitialCacheSize (int cacheSize)
    {
        if (mSubscription != null)
        {
            mSubscription.setPreInitialCacheSize (cacheSize);
        }
    }

    public int getPreInitialCacheSize ()
    {
        return mSubscription.getPreInitialCacheSize();
    }

    public MamaMsgQualifier getMsgQualifier()
    {   
        return mSubscription.getMessageQualifierFilter();
    }

    public void requestRecap ()
    {
    }

    public int getRetries()
    {
        return mRetries;
    }
    
    public double getTimeout()
    {
        return mTimeout;
    }

    public String getSource()
    {
        return mSource;
    }
    
    public String getSymbol()
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

    public long getSeqNum ()
    {
        if (mLatestMsg != null)
            return mLatestMsg.getSeqNum();
        return 0;
    }

    public MamaSubscription getMamaSubscription ()
    {
        return mSubscription;
    }

    private class MamdaSubscriptionCallback implements MamaSubscriptionCallback
    {
        private MamdaSubscription mSubscription = null;

        public MamdaSubscriptionCallback (MamdaSubscription  subscription)
        {
            mSubscription = subscription;
        }  

        public void onMsg (final MamaSubscription subscription,
                           final MamaMsg          msg)
        {
            short msgType   = MamaMsgType.typeForMsg     (msg);
            int   msgStatus = MamaMsgStatus.statusForMsg (msg);
            mLatestMsg      = msg;
            short mywombatStatus  = 17;
            int myplatformError  = 0;

            switch (msgType)
            {
                case MamaMsgType.TYPE_DELETE:
                    onError (subscription, mywombatStatus, myplatformError, "Message Type Delete", new Exception());
                    return;
                case MamaMsgType.TYPE_EXPIRE:
                    subscription.destroy();
                    mLatestMsg = null;
                    return;
            }

            switch (msgStatus)
            {
                case MamaMsgStatus.STATUS_BAD_SYMBOL:
                case MamaMsgStatus.STATUS_EXPIRED:
                case MamaMsgStatus.STATUS_TIMEOUT:
                    subscription.destroy();
                    mLatestMsg = null;
                    return;
            }

            Vector listeners = mMsgListeners;

            int size = listeners.size();
            if (size == 0)
            {
                mLatestMsg = null;
                return;
            }

            if (mSubscription == null)
            {
                return;
            }
            for (int i = 0; i < size; ++i)
            {
                if (mValid)
                {
                    MamdaMsgListener listener = (MamdaMsgListener)listeners.elementAt(i);
                    listener.onMsg (mSubscription, msg, msgType);
                }
            }
            mLatestMsg = null;
        }

        public void onCreate (MamaSubscription subscription)
        {
            synchronized( MamdaSubscription.this )
            {
                MamdaSubscription.this.mSubscription = subscription;
            }
        }

        public void onError (MamaSubscription  subscription,
                             short             wombatStatus,
                             int               platformError,
                             String            subject, 
                             Exception         e)
        {
            Vector listeners = mErrorListeners;

            int size = listeners.size();
            if (size == 0)
            {
                return;
            }

            for (int i = 0; i < size; ++i)
            {
                /* NOTE: This assumes that the MamaMsgStatus values correspond
                 * dirrectly to the MamdaErrorCode values.
                 */
                MamdaErrorListener listener =
                    (MamdaErrorListener)listeners.elementAt(i);
                short errorCode = MamdaErrorCode.codeForMamaStatus (wombatStatus);
                listener.onError (
                    mSubscription,
                    MamdaErrorSeverity.severityForErrorCode (errorCode),
                    errorCode,
                    MamdaErrorCode.stringForMamdaError (errorCode));
            }
        }

        public void onQuality (MamaSubscription subscription,
                               short            quality,
                               short            cause,
                               final Object     opaque)
        {
            Vector listeners = mStaleListeners;

            int size = listeners.size();
            if (size == 0)
            {
                return;
            }

            for (int i = 0; i < size; ++i)
            {
                MamdaStaleListener listener =
                    (MamdaStaleListener)listeners.elementAt(i);
                listener.onStale (mSubscription, quality);
            }
        }
        
        public void onRecapRequest (MamaSubscription subscription)            
        {
            // Do nothing
        }
        
        public void onGap (MamaSubscription subscription)            
        {
            // Do nothing
        }

        public void onDestroy (MamaSubscription subscription)            
        {
            subscription.deallocate ();
            mSubscription = null;
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
