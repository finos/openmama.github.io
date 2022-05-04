---
title: orderbook/MamdaOrderBookConcreteSimpleDelta.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/MamdaOrderBookConcreteSimpleDelta.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html)**  |




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

package com.wombat.mamda.orderbook;

import com.wombat.mamda.MamdaConcreteBasicEvent;
import com.wombat.mamda.orderbook.MamdaOrderBookSimpleDelta;
import com.wombat.mama.MamaDateTime;

public class MamdaOrderBookConcreteSimpleDelta
    extends MamdaOrderBookSimpleDelta
{
    private final MamdaConcreteBasicEvent mMamdaConcreteBasicEvent =
        new MamdaConcreteBasicEvent ();

    public MamaDateTime getSrcTime ()
    {
        return mMamdaConcreteBasicEvent.getSrcTime ();
    }

    public short getSrcTimeFieldState ()
    {
        return mMamdaConcreteBasicEvent.getSrcTimeFieldState ();
    }

    public void setSrcTime (MamaDateTime srcTime)
    {
        mMamdaConcreteBasicEvent.setSrcTime (srcTime);
    }

    public MamaDateTime getActivityTime ()
    {
        return mMamdaConcreteBasicEvent.getActivityTime ();
    }

    public short getActivityTimeFieldState ()
    {
        return mMamdaConcreteBasicEvent.getActivityTimeFieldState ();
    }

    public void setActivityTime (MamaDateTime activityTime)
    {
        mMamdaConcreteBasicEvent.setActivityTime (activityTime);
    }

    public MamaDateTime getEventTime ()
    {
        return mMamdaConcreteBasicEvent.getEventTime ();
    }

    public short getEventTimeFieldState ()
    {
        return mMamdaConcreteBasicEvent.getEventTimeFieldState ();
    }
    
    public void setEventTime (MamaDateTime eventTime)
    {
        mMamdaConcreteBasicEvent.setEventTime (eventTime);
    }

    public long getEventSeqNum ()
    {
        return mMamdaConcreteBasicEvent.getEventSeqNum ();
    }

    public short getEventSeqNumFieldState ()
    {
        return mMamdaConcreteBasicEvent.getEventSeqNumFieldState ();
    }

    public void setEventSeqNum (long eventSeqNum)
    {
        mMamdaConcreteBasicEvent.setEventSeqNum (eventSeqNum);
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
