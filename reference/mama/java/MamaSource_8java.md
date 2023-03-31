---
title: mama/MamaSource.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSource.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaSource](classcom_1_1wombat_1_1mama_1_1MamaSource.html)**  |




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
import java.util.HashMap;
import java.util.Map;
import java.util.Collections;
public class MamaSource extends MamaSourceManager
{

    private  MamaSource       myParent;
    private  Map              mySubscriptionsMap;
    private  MamaSourceState  myState;
    /* Keep a reference to the transport here so we don't need
       to call down to C code */
    private  MamaTransport    myTransport;
    private  long             mamaSourcePointer_i = 0;
    static
    {
        initIDs();
    }

    public MamaSource ()
    {
        super ();
        createMamaSource ();
    }

    public MamaSource (final String sourceId, MamaTransport transport,
                       final String symbolNamespace)
    {
        super ();
        createMamaSource ();
        this.setId (sourceId);
        this.setTransport (transport);
        this.setSymbolNamespace (symbolNamespace);
    }

    public native void setId (final String sourceId);

    public native void setMappedId (final String mappedId);

    public native void setDisplayId (final String displayId);

    public native void setQuality (short quality);

    public void setState (MamaSourceState state)
    {
        this.myState = state;
    }

    public void setParent (MamaSource parent)
    {
        this.myParent = parent;
    }

    public native void setSymbolNamespace (final String symbolNamespace);

    public void setTransportName (final String transportName)
    {
        myTransport.setName (transportName);
        this._setTransportName (transportName);
    }

    private native void _setTransportName (final String transportName);

    public void setTransport (MamaTransport transport)
    {
        this.myTransport = transport;
        this._setTransport (transport);
    }

    private native void _setTransport (MamaTransport transport);

    public native final String getId ();

    public native final String getMappedId ();

    public native final String getDisplayId ();

    public native short getQuality ();

    public MamaSourceState getState ()
    {
        return myState;
    }
    public String getStateAsString ()
    {
        if (myState != null)
        return myState.toString();

        return MamaSourceState.UKNOWN.toString();
    }
    public MamaSource getParent ()
    {
        return myParent;
    }

    public native final String getSymbolNamespace ();

    public MamaTransport getTransport ()
    {
        return myTransport;
    }

    public void addSubscription (final String key,
                                 MamaSubscription subscription)
    {
        if (mySubscriptionsMap == null)
        {
            mySubscriptionsMap = Collections.synchronizedMap(
                new HashMap());
        }
        if (mySubscriptionsMap.containsKey (key))
        {
            throw new MamaException ("MamaSource: Duplicate found");
        }
        mySubscriptionsMap.put (key, subscription);
    }
    public MamaSubscription findSubscription (final String key)
    {
        if (null != mySubscriptionsMap)
        {
            return (MamaSubscription)mySubscriptionsMap.get (key);
        }
        else if (null != myParent)
        {
            return myParent.findSubscription (key);
        }
        else
        {
            return null;
        }
    }

    public boolean isPartOf (MamaSource source)
    {
        return this == source || myParent != null && myParent.isPartOf (source);
    }

    private native static void initIDs();

    private native void createMamaSource ();

    private native void destroyMamaSource ();

    public void destroy()
    {
        // Call the base class
        super.destroy();

        // Destroy the underlying object
        destroyMamaSource();
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
