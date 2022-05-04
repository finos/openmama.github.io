---
title: mama/MamaQueueGroup.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaQueueGroup.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaQueueGroup](classcom_1_1wombat_1_1mama_1_1MamaQueueGroup.html)**  |




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

public class MamaQueueGroup
{
    private final MamaQueue [] myQueues;
    private final MamaDispatcher[] myDispatchers;
    private int myCurQueue = 0;

    private MamaBridge myBridge = null;

    public MamaQueueGroup (int numberOfQueues, MamaBridge bridge)
    {
        if (numberOfQueues > 0)
        {
            myQueues = new MamaQueue[numberOfQueues];
            myDispatchers = new MamaDispatcher[numberOfQueues];
            for ( int i = 0; i < myQueues.length; i++ )
            {
                myQueues[i] = new MamaQueue ();
                myQueues[i].create (bridge);
                myDispatchers[i] = new MamaDispatcher( );
                myDispatchers[i].create (myQueues[i]);
            }
        }
        else
        {
            myQueues = null;
            myDispatchers = null;
        }
        myBridge = bridge;
    }

    public int getNumberOfQueues() { return myQueues == null ? 0 : myQueues.length; }

    public void destroy()
    {
        if(myQueues != null)
        {
            for ( int nextQueue = 0; nextQueue < myQueues.length; nextQueue++ )
            {
                myQueues[nextQueue].destroy();
            }
        }
    }

    public void destroyWait()
    {
        if(myQueues != null)
        {
            for ( int nextQueue = 0; nextQueue < myQueues.length; nextQueue++ )
            {
                myQueues[nextQueue].destroyWait();
            }
        }
    }

    public void destroyTimedWait(long timeout)
    {
        if(myQueues != null)
        {
            for ( int nextQueue = 0; nextQueue < myQueues.length; nextQueue++ )
            {
                myQueues[nextQueue].destroyTimedWait(timeout);
            }
        }
    }

    public MamaQueue getNextQueue()
    {
        return myQueues == null ? Mama.getDefaultQueue (myBridge)
                                : myQueues[myCurQueue++ % myQueues.length];
    }


    public void stopDispatch ()
    {
        if(myQueues != null)
        {
            for ( int i = 0; i < myQueues.length; i++ )
            {
                if (myDispatchers[i]!= null)
                {
                    myDispatchers[i].destroy();
                    myDispatchers[i]=null;
                }
            }
        }
    }


    public void startDispatch ()
    {
        if(myQueues != null)
        {
            for ( int i = 0; i < myQueues.length; i++ )
            {
                if (myDispatchers[i]== null)
                {
                    myDispatchers[i] = new MamaDispatcher( );
                    myDispatchers[i].create (myQueues[i]);
                }
            }
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
