---
title: mama/MamaBasicSubscription.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaBasicSubscription.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html)**  |




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
* Wrapper class for the native C basic subscription structure
*/
public class MamaBasicSubscription
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
    /* Private Member Variables. */
    /* ************************************************** */

    // The closure must be held in java as it may be a java object
    private Object myClosure;

    /* A long value containing a pointer to the underlying C subscription structure */
    private long basicSubscriptionPointer_i = 0;

    /* ************************************************** */
    /* Construction and Finalization. */
    /* ************************************************** */

    public MamaBasicSubscription()
    {
        // Allocate the underlying C subscription
        allocateSubscription();
    }

    protected void finalize() throws Throwable
    {
        try
        {
            // Only deallocate the subscription if the native pointer is valid
            if(basicSubscriptionPointer_i != 0)
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

    public void createBasicSubscription(
        final MamaBasicSubscriptionCallback  callback,
        final MamaTransport                  transport,
        final MamaQueue                      queue,
        final String                         topic,
        final Object                         closure)
    {
        // Save the closure as well
        myClosure = closure;

        // Create the native subscription
        createNativeSubscription(
            callback,
            transport,
            queue,
            topic,
            null);
    }

   /*
    * Create a basic wildcard subscription.
    *
    * The topic must be a valid wildcard topic for the underlying middleware.
    *
    * For WMW a source with a NULL symbol parameter creates a "transport"
    * subscription that receives all messages on the transport and bypasses the
    * naming service. A publishing transport can be assigned a name with the
    * publish_name property.
    *
    * @param callbacks The mamaMsgCallbacks structure containing the callback
    *                   functions.
    * @param transport The transport to use.
    * @param queue The mama queue.
    * @param source The source name of the feed handler to provide the
    *                   subscription.
    * @param topic The symbol name.
    * @param closure The closure will be passed to subsequent callback
    *                   invocations for this subscription.
    */
    public void createBasicWildCardSubscription(
        final MamaBasicWildCardSubscriptionCallback callback,
        final MamaTransport                         transport,
        final MamaQueue                             queue,
        final String                                source,
        final String                                topic,
        final Object                                closure)
    {
        // Save the closure as well
        myClosure = closure;

        // Create the native subscription
        createNativeWildCardSubscription(
            callback,
            transport,
            queue,
            source,
            topic,
            null);
    }

    public Object getClosure()
    {
        return myClosure;
    }

    public long getPointerVal()
    {
        return basicSubscriptionPointer_i;
    }

    public MamaSubscriptionState getState()
    {
        // Get the native value
        int state = getSubscriptionState();

        // Convert to a state object
        return MamaSubscriptionState.getSubscriptionState(state);
    }

    /* ************************************************** */
    /* Public Native Functions, all entries here must be fully
     * documented. */
    /* ************************************************** */

    public native void deallocate();

    public native void destroy();

    public native void destroyEx();

    public native String getSymbol();

    /* ************************************************** */
    /* Private Native Functions. */
    /* ************************************************** */
    private native void allocateSubscription();

    private native void createNativeSubscription(
        final MamaBasicSubscriptionCallback  callback,
        final MamaTransport                  transport,
        final MamaQueue                      queue,
        final String                         topic,
        final Object                         closure);

    private native int getSubscriptionState();
    private static native void initIDs();

    private native void createNativeWildCardSubscription(
        final MamaBasicWildCardSubscriptionCallback callback,
        final MamaTransport                         transport,
        final MamaQueue                             queue,
        final String                                source,
        final String                                topic,
        final Object                                closure);


}/*End class*/
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
