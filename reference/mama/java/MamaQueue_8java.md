---
title: mama/MamaQueue.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaQueue.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html)**  |




## Source code

```java
/* $Id:
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
* MamaQueue
*/
public class MamaQueue
{

    static
    {
        initIDs();
    }

    /*A long holding the C pointer value to the underlying
      MamaQueue C structure */
    private long queuePointer_i = 0;

    /*Used to store pointer to the C closure used for queue monitoring*/
    private long monitorClosure_i  = 0;

    public MamaMsg  reuseableMsg = null;
    public long getPointerVal()
    {
        return queuePointer_i;
    }

    public MamaQueue () {
        reuseableMsg = new MamaMsg(false);
    };

    public native void create (MamaBridge bridge);

    public native void createUsingNative (MamaBridge bridge, Object nativeQueue);

    public native void destroy();

    public native void destroyWait();

    public native void destroyTimedWait(long timeout);

    public native void dispatch();

    public native void stopDispatch();

    public native void enqueueEvent (MamaQueueEventCallback callback,
                                     Object closure);

    public native void setQueueMonitorCallback (
                                        MamaQueueMonitorCallback callback);

    public native void setHighWatermark (long highWatermark);

    public native long getHighwatermark ();

    public native void setLowWatermark (long lowWatermark);

    public native long getLowWatermark ();

    public native void setQueueName (String queueName);

    public native String getQueueName ();

    public native String getQueueBridgeName ();

    public native long getEventCount ();

    /*Used to cache ids for callback methods/fields*/
    private static native void initIDs();
}/*end class*/
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
