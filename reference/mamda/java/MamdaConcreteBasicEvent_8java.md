---
title: mamda/MamdaConcreteBasicEvent.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaConcreteBasicEvent.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaConcreteBasicEvent](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html)**  |




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

import com.wombat.mama.MamaDateTime;

public class MamdaConcreteBasicEvent implements MamdaBasicEvent
{
    private MamaDateTime mSrcTime;
    private MamaDateTime mActivityTime;
    private MamaDateTime mEventTime;
    private long         mEventSeqNum;

    public MamaDateTime getSrcTime ()
    {
        return mSrcTime;
    }

    public short getSrcTimeFieldState ()
    {
        return MamdaFieldState.MODIFIED;
    }

    public void setSrcTime (MamaDateTime srcTime)
    {
        mSrcTime = srcTime;
    }

    public MamaDateTime getActivityTime ()
    {
        return mActivityTime;
    }

    public short getActivityTimeFieldState ()
    {
        return MamdaFieldState.MODIFIED;
    }

    public void setActivityTime (MamaDateTime activityTime)
    {
        mActivityTime = activityTime;
    }

    public MamaDateTime getEventTime ()
    {
        return mEventTime;
    }

    public short getEventTimeFieldState ()
    {
        return MamdaFieldState.MODIFIED;
    }

    public void setEventTime (MamaDateTime eventTime)
    {
        mEventTime = eventTime;
    }

    public long getEventSeqNum ()
    {
        return mEventSeqNum;
    }

    public short getEventSeqNumFieldState ()
    {
        return MamdaFieldState.MODIFIED;
    }

    public void setEventSeqNum (long eventSeqNum)
    {
        mEventSeqNum = eventSeqNum;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
