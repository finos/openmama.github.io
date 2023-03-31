---
title: mama/MamaSubscription.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSubscription.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html)**  |




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
import java.util.logging.*;

/*
 * Wrapper class for the native C subscription structure
 */
public class MamaSubscription
{
    /* ************************************************** */
    /* Static Initialisation. */
    /* ************************************************** */
    static
    {
        // Setup all the native function pointers
        initIDs();
    }

    /* ************************************************** */
    /* Constants. */
    /* ************************************************** */
    // Default number of connection retries when obtaining the dictionary
    public static final int DEFAULT_RETRIES = 2;

    // The default timeout when creating the dictionary
    public static final double DEFAULT_TIMEOUT = 10.0;

    /* ************************************************** */
    /* Private Member Variables. */
    /* ************************************************** */

    /* A long value containing a pointer to the underlying C subscription structure */
    private long  subscriptionPointer_i = 0;

    /* The closure must be held in Java as it may be a Java object */
    private Object myClosure;

    /* We maintain this reference to facilitate getSource()  - easier than
     * returning it from the C code.
     */
    private MamaSource mySource = null;

    /* The type of the subscription. */
    private MamaSubscriptionType mySubType = MamaSubscriptionType.NORMAL;

    private MamaQueue mQueue = null;

    /* ************************************************** */
    /* Construction and Finalization. */
    /* ************************************************** */

    public MamaSubscription()
    {
        // Allocate the underlying C subscription
        allocateSubscription();
    }

    protected void finalize() throws Throwable
    {
        try
        {
            // Only deallocate the subscription if the native pointer is valid
            if(subscriptionPointer_i != 0)
            {
                deallocate();
            }
        }

        finally
        {
            // Call the base class finalizer
            super.finalize();
        }
    }

    /* ************************************************** */
    /* Public Functions. */
    /* ************************************************** */

    public void createSubscription(
        MamaSubscriptionCallback  callback,
        MamaQueue                 queue,
        MamaSource                source,
        String                    symbol,
        Object                    closure)
    {
        // Save the source in the Java layer to prevent a context switch to C
        mySource = source;

        // Save the closure as well
        myClosure = closure;

        // Save the queue
        mQueue = queue;

        // Create the native subscription
        createNativeSubscription(
            callback,
            queue,
            source,
            symbol,
            null);
    }

    public MamaDictionary createDictionarySubscription(
        MamaDictionaryCallback  callback,
        MamaQueue               queue,
        MamaSource              source)
    {
        // Save the queue
        mQueue = queue;

        // Simply call the overload
        return createDictionarySubscription (
                callback,
                queue,
                source,
                DEFAULT_TIMEOUT,
                DEFAULT_RETRIES);
    }

    public MamaDictionary createDictionarySubscription(
        MamaDictionaryCallback  callback,
        MamaQueue               queue,
        MamaSource              source,
        double                  timeout,
        int                     retries)
    {
        // Save the source to prevent additional context switches into C
        mySource = source;

        // Save the queue
        mQueue = queue;

        // Create the native dictionary subscription
        return createNativeDictionarySubscription(callback, queue, source, timeout, retries);
    }

    public void createSnapshotSubscription(
        MamaSubscriptionCallback  callback,
        MamaQueue                 queue,
        MamaSource                source,
        String                    symbol,
        Object                    closure)
    {
        // Set the type and service level before the subscription is created
        setSubscriptionType (MamaSubscriptionType.NORMAL);
        setServiceLevel     (MamaServiceLevel.SNAPSHOT,0);
        setRequiresInitial  (true);

        // Save the source in the Java layer to prevent a context switch to C
        mySource = source;

        // Save the closure
        myClosure = closure;

        // Save the queue
        mQueue = queue;

        // Create the native subscription
        createNativeSubscription(
            callback,
            queue,
            source,
            symbol,
            null);
    }

    public Object getClosure()
    {
        return myClosure;
    }

    public long getPointerVal()
    {
        return subscriptionPointer_i;
    }

    public MamaSource getSource ()
    {
        return mySource;
    }

    public MamaQueue getQueue () {
        return mQueue;
    }

    public MamaSubscriptionState getState()
    {
        // Get the native value
        int state = getSubscriptionState();

        // Convert to a state object
        return MamaSubscriptionState.getSubscriptionState(state);
    }

    public void setupSubscription(
        MamaSubscriptionCallback  callback,
        MamaQueue                 queue,
        MamaSource                source,
        String                    symbol,
        Object                    closure)
    {
        // Save the source in the Java layer to prevent a context switch to C
        mySource = source;

        // Save the closure
        myClosure = closure;

        // Save the queue
        mQueue = queue;

        // Create the native subscription
        setupNativeSubscription(
            callback,
            queue,
            source,
            symbol,
            null);
    }

    public void setAppDataType (MamaMdDataType type)
    {
          // Set the MD Data Type as an integer
          setTheAppDataType (type.getValue());
    }

    public MamaMdDataType getAppDataType ()
    {
        // Get the native value
        int my_AppDataType = getTheAppDataType();

        // Convert to a MamaMdDataType object
        return MamaMdDataType.enumObjectForValue(my_AppDataType);
    }

    public void setDebugLevel (Level level)
    {
        final String METHOD_NAME = "setDebugLevel(): ";
        throw new MamaException(METHOD_NAME+"Not yet supported");
    }
    public void setMessageQualifierFilter (MamaMsgQualifier qualifier)
    {
        final String METHOD_NAME = "setMessageQualifierFilter(): ";
        throw new MamaException(METHOD_NAME+"Not yet supported");
    }

    public MamaMsgQualifier getMessageQualifierFilter ()
    {
        final String METHOD_NAME = "getMessageQualifierFilter(): ";
        throw new MamaException(METHOD_NAME+"Not yet supported");
    }

    public void setSubscriptionType (MamaSubscriptionType type)
    {
        mySubType = type;
        _setSubscriptionType (mySubType.getValue());
    }
    public MamaSubscriptionType getSubscriptionType ()
    {
        return mySubType;
    }

    /* Return the <code>MamaTransport</code> for this subscription. */
    public MamaTransport getTransport ()
    {
        return mySource.getTransport ();
    }

    /* ************************************************** */
    /* Public Native Functions, all entries here must be fully
     * documented. */
    /* ************************************************** */
    private native void setTheAppDataType(int value);
    private native int getTheAppDataType();

    public native void activate();

    public native void deactivate ();

    public native void deallocate();

    public native void destroy();

    public native void destroyEx();

    public native boolean getReceivedInitial ();

    public native String getSubscSource();

    public native String getSymbol();

    public native double getTimeout ();

    public native boolean isActive();

    public native boolean isValid();

    public native void setRequiresInitial (boolean value);

    public native void setTimeout (double timeout);

    /* This are still to be commented. */
    public native Object getItemClosure();
    public native int getPreInitialCacheSize ();
    public native boolean getRecoverGaps();
    public native boolean getRequiresInitital();
    public native int getRetries ();
    public native short getServiceLevel ();
    public native long getServiceLevelOptions ();
    public native void setPreInitialCacheSize (int size);
    public native void setItemClosure(Object closure);
    public native void setRecoverGaps( boolean recover );

     /*Set the service level and options for the subscription*/
    public native void setServiceLevel (short level, long options);

    /* Set the number of retries when requesting initial values and recaps. */
    public native void setRetries (int retries);

    /* ************************************************** */
    /* Private Native Functions. */
    /* ************************************************** */

    private native void allocateSubscription();
    private native MamaDictionary createNativeDictionarySubscription(
        MamaDictionaryCallback  callback,
        MamaQueue               queue,
        MamaSource              source,
        double                  timeout,
        int                     retries);
    private native void createNativeSubscription(
        final MamaSubscriptionCallback  callback,
        final MamaQueue                 queue,
        final MamaSource                source,
        final String                    symbol,
        final Object                    closure);
    private native int getSubscriptionState();
    private static native void initIDs();
    private native void _setSubscriptionType (short value);
    private native void setupNativeSubscription(
        final MamaSubscriptionCallback  callback,
        final MamaQueue                 queue,
        final MamaSource                source,
        final String                    symbol,
        final Object                    closure);

}/*End class*/
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
