---
title: mama/MamaTransport.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaTransport.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html)**  |




## Source code

```java
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

package com.wombat.mama;

/*
* A wrapper class for the underlying C transport structure
*/
public class MamaTransport
{
    /* ****************************************************** */
    /* Nested Classes. */
    /* ****************************************************** */

    /* This class implements a transport listener which will be set up
     * whenever the transport is allocated and used to route events
     * back to any client listener installed.
     */
    private class InternalTransportListener implements MamaTransportListener
    {
        /* ****************************************************** */
        /* Private Member Variables. */
        /* ****************************************************** */

        // The client listener
        private MamaTransportListener mClientListener;

        /* ****************************************************** */
        /* Construction and Finalization. */
        /* ****************************************************** */

        public void InternalTransportListener()
        {
            // Ensure that the listeners are null
            mClientListener = null;
        }

        /* ****************************************************** */
        /* Interface Implementations. */
        /* ****************************************************** */

        public void onDisconnect(short cause, final Object platformInfo)
        {
            if (mClientListener != null)
            {
                mClientListener.onDisconnect(cause, platformInfo);
            }
        }

        public void onReconnect(short cause, final Object platformInfo)
        {
            if (mClientListener != null)
            {
                mClientListener.onReconnect(cause, platformInfo);
            }
        }

        public void onQuality(short cause, final Object platformInfo)
        {
            if(mClientListener != null)
            {
                mClientListener.onQuality(cause, platformInfo);
            }
        }

        public void onConnect(short cause, final Object platformInfo)
        {
            if(mClientListener != null)
            {
                mClientListener.onConnect(cause, platformInfo);
            }
        }

        public void onAccept(short cause, final Object platformInfo)
        {
            if(mClientListener != null)
            {
                mClientListener.onAccept(cause, platformInfo);
            }
        }

        public void onAcceptReconnect(short cause, final Object platformInfo)
        {
            if(mClientListener != null)
            {
                mClientListener.onAcceptReconnect(cause, platformInfo);
            }
        }

        public void onPublisherDisconnect(short cause, final Object platformInfo)
        {
            if(mClientListener != null)
            {
                mClientListener.onPublisherDisconnect(cause, platformInfo);
            }
        }

        public void onNamingServiceConnect(short cause, final Object platformInfo)
        {
            if(mClientListener != null)
            {
                mClientListener.onNamingServiceConnect(cause, platformInfo);
            }
        }

        public void onNamingServiceDisconnect(short cause, final Object platformInfo)
        {
            if(mClientListener != null)
            {
                mClientListener.onNamingServiceDisconnect(cause, platformInfo);
            }
        }

        /* ****************************************************** */
        /* Public Functions. */
        /* ****************************************************** */

        public void setClientListener(MamaTransportListener clientListener)
        {
            /* Save argument in the member variable. */
            mClientListener = clientListener;
        }
    }

    /* This class implements a transport topic listener which will be set up
     * whenever the transport is allocated and used to route events
     * back to any client listener installed.
     */
    private class InternalTopicListener extends MamaTransportTopicListener
    {
        /* ****************************************************** */
        /* Private Member Variables. */
        /* ****************************************************** */

        // The client topic listener
        private MamaTransportTopicListener mClientTopicListener;

        /* ****************************************************** */
        /* Construction and Finalization. */
        /* ****************************************************** */

        public void InternalTopicListener()
        {
            // Ensure that the listeners are null
            mClientTopicListener = null;
        }

        /* ****************************************************** */
        /* Interface Implementations. */
        /* ****************************************************** */

        public void onTopicSubscribe(String topic, final Object platformInfo)
        {
            /* Call the client topic listener if it has been provided. */
            if(null != mClientTopicListener)
            {
                mClientTopicListener.onTopicSubscribe(topic, platformInfo);
            }
        }

        public void onTopicUnsubscribe(String topic, final Object platformInfo)
        {
            /* Call the client topic listener if it has been provided. */
            if(null != mClientTopicListener)
            {
                mClientTopicListener.onTopicUnsubscribe(topic, platformInfo);
            }
        }

        @SuppressWarnings("deprecation")
        public void onTopicSubscribe(short cause, final Object platformInfo)
        {
            /* Call the client topic listener if it has been provided. */
            if(null != mClientTopicListener)
            {
                mClientTopicListener.onTopicSubscribe(cause, platformInfo);
            }
        }

        @SuppressWarnings("deprecation")
        public void onTopicUnsubscribe(short cause, final Object platformInfo)
        {
            /* Call the client topic listener if it has been provided. */
            if(null != mClientTopicListener)
            {
                mClientTopicListener.onTopicUnsubscribe(cause, platformInfo);
            }
        }

        public void onTopicPublishError(String topic, final Object platformInfo)
        {
            /* Call the client topic listener if it has been provided. */
            if(null != mClientTopicListener)
            {
                mClientTopicListener.onTopicPublishError(topic, platformInfo);
            }
        }

        public void onTopicPublishErrorNotEntitled(String topic, final Object platformInfo)
        {
            /* Call the client topic listener if it has been provided. */
            if(null != mClientTopicListener)
            {
                mClientTopicListener.onTopicPublishErrorNotEntitled(topic, platformInfo);
            }
        }

        public void onTopicPublishErrorBadSymbol(String topic, final Object platformInfo)
        {
            /* Call the client topic listener if it has been provided. */
            if(null != mClientTopicListener)
            {
                mClientTopicListener.onTopicPublishErrorBadSymbol(topic, platformInfo);
            }
        }


        /* ****************************************************** */
        /* Public Functions. */
        /* ****************************************************** */

        public void setClientTopicListener(MamaTransportTopicListener clientTopicListener)
        {
            /* Save argument in the member variable. */
            mClientTopicListener = clientTopicListener;
        }
    }

    /* ****************************************************** */
    /* Static Functions. */
    /* ****************************************************** */

    static
    {
        initIDs();
    }

    /* ****************************************************** */
    /* Private Member Variables. */
    /* ****************************************************** */

    /* This value contains a pointer to a utility structure passed as closure
     * to the transport. It is  created in the underlying JNI C layer but must
     * be stored here for each transport.
     */
    private long closurePointer_i   =   0;

    /* The re-usable connection object is passed back up into the transport
     * and topic listeners by the JNI C layer. It is created in Java to avoid
     * bugs in the JVM.
     */
    private MamaConnection mConnection;

    /* The Mama bridge. */
    private MamaBridge myBridge;

    /* Queue for callbacks */
    private MamaQueue myQueue = null;

    /* The re-usable transport listener. */
    InternalTransportListener mListener;

    /* The re-usable transport topic listener. */
    private InternalTopicListener mTopicListener;

    /* This value contains a pointer to the underlying mamaTransport. This object
     * is created in the underlying JNI C layer but must be stored here for each
     * transport.
     */
    private long transportPointer_i =   0;

    /* ****************************************************** */
    /* Construction and Finalization. */
    /* ****************************************************** */

    public MamaTransport()
    {
        /* Create the re-usable connection object using the default constructor
         * so an underlying native object won't be created.
         */
        mConnection = new MamaConnection();

        // Allocate the transport
        allocateTransport(mConnection);
    }

    /* ****************************************************** */
    /* Private Functions. */
    /* ****************************************************** */

    private native void allocateTransport(MamaConnection connection);

    private native void nativeAddListener(MamaTransportListener listener);

    private native void nativeAddTopicListener(MamaTransportTopicListener topicListener );

    private native void nativeSetTransportCallbackQueue(MamaQueue queue);

    /* ****************************************************** */
    /* Public Functions. */
    /* ****************************************************** */

    public void setTransportCallbackQueue(MamaQueue queue)
    {
        myQueue = queue;
        nativeSetTransportCallbackQueue(queue);
    }

    MamaQueue getTransportCallbackQueue()
    {
        return myQueue;
    }

    public void addTransportListener(MamaTransportListener transportListener)
    {
        // If this internal listener hasn't been created then do so now.
        if(mListener == null)
        {
            // Allocate the listener
            mListener = new InternalTransportListener();

            // Set it in the native layer
            nativeAddListener(mListener);
        }

        /* Set the client's listener inside the re-usable object. */
        mListener.setClientListener(transportListener);
    }

    public void addTransportTopicListener(MamaTransportTopicListener transportTopicListener)
    {
        // If this internal listener hasn't been created then do so now.
        if(null == mTopicListener)
        {
            // Allocate the listener
            mTopicListener = new InternalTopicListener();

            // Set it in the native layer
            nativeAddTopicListener(mTopicListener);
        }

        /* Set the client's listener inside the re-usable object. */
        mTopicListener.setClientTopicListener(transportTopicListener);
    }

    public void removeTransportListener(MamaTransportListener transportListener)
    {
        // Note that the listener will only be created if it has been set once
        if(mListener != null)
        {
            /* Set both listeners to null. */
            mListener.setClientListener(null);
        }
    }

    public void removeTransportTopicListener()
    {
        // Note that the listener will only be created if it has been set once
        if(null != mTopicListener)
        {
            /* Set the current topic listener to null. */
            mTopicListener.setClientTopicListener(null);
        }
    }

    public long getPointerVal()
    {
        return transportPointer_i;
    }

    protected void setPointerVal(long pointerVal)
    {
        transportPointer_i = pointerVal;
    }

    public void create (MamaBridge bridge)
    {
        myBridge = bridge;
        _create (bridge);
    }
    public native void _create (MamaBridge bridge);


    public void create (String name, MamaBridge bridge)
    {
        myBridge = bridge;
        _create (name,bridge);
    }

    public native void _create (String name, MamaBridge bridge);

    /* Destroy the transport. */
    public native void destroy();

    /* Return the outbound throttle rate in messages/second. */
    private native double getOutboundThrottle (int throttleInstance);

    /* Return the outbound throttle rate in messages/second. */
    public double getOutboundThrottle (MamaThrottleInstance throttleInstance)
    {
        final String METHOD_NAME = "getOutboundThrottle(): ";

        if (null==throttleInstance) throw new
                        MamaException(METHOD_NAME + "NULL Throttle instance");

        return getOutboundThrottle (throttleInstance.getValue());
    }

    /*We need this overloaded version to satisify the pure Java samples*/
    public double getOutboundThrottle ()
    {
        return getOutboundThrottle (MamaThrottleInstance.INITIAL_THROTTLE);
    }

    /* Set the throttle rate for outbound message. */
    private native void setOutboundThrottle (int throttleInstance, double outboundThrottle);

    /* Set the throttle rate for outbound message. */
    public void setOutboundThrottle (MamaThrottleInstance throttleInstance,
                                     double outboundThrottle)
    {
        final String METHOD_NAME = "setOutboundThrottle(): ";

        if (null==throttleInstance) throw new MamaException(
                METHOD_NAME + "NULL Throttle instance");

        setOutboundThrottle (throttleInstance.getValue(), outboundThrottle);
    }

    /*We need this overloaded version to satisify the pure Java samples*/
    public void setOutboundThrottle (double outboundThrottle)
    {
         setOutboundThrottle (MamaThrottleInstance.INITIAL_THROTTLE,
                              outboundThrottle);
    }

    public native void setDescription (String description);

    public native String getDescription ();

    /*
        Set whether to invoke the quality callback for all subscriptions
        whenever a data quality event occurs (the default), or whether to
        invoke the quality callback only when data subsequently arrives for a
        subscription.
    */
    public native void setInvokeQualityForAllSubscs (
                        boolean invokeQualityForAllSubscs);

    /*
        Get whether the transport has been set to invoke the quality callback
        for all subscriptions whenever a data quality event occurs.
    */
    public native boolean getInvokeQualityForAllSubscs();

    /*
        Get the quality of the transport.
    */
    public native short getQuality();

    /*Used to cache ids for callback methods/fields*/
    private static native void initIDs();

    public MamaBridge getBridge()
    {
        return myBridge;
    }

    /*Request conflation*/
    public native void requestConflation();

    /*Request end conflation*/
    public native void requestEndConflation();

    /*Get transport name*/
    public native String getName();

    /*The String name for the transport*/
    public native void setName(String name);

}/*end class*/
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
