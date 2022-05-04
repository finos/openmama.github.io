---
title: mama/MamaDateTimeHints.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaDateTimeHints.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaDateTimeHints](classcom_1_1wombat_1_1mama_1_1MamaDateTimeHints.html)**  |




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

public class MamaDateTimeHints
{
    public static final short HAS_DATE    = 0x01;
    public static final short HAS_TIME    = 0x02;
    public static final short NO_TIMEZONE = 0x04;

    short myHints = 0;

    public MamaDateTimeHints (short hints)
    {
        myHints = hints;
    }

    public short getHints ()
    {
        return myHints;
    }

    public boolean hasHints (MamaDateTimeHints hints)
    {
        return (hints.myHints & myHints) == hints.myHints;
    }

    public boolean hasDate ()
    {
        return (myHints & HAS_DATE) == HAS_DATE;
    }

    public boolean hasTime ()
    {
        return (myHints & HAS_TIME) == HAS_TIME;
    }

    public boolean hasNoTimeZone ()
    {
        return (myHints & NO_TIMEZONE) == NO_TIMEZONE;
    }

    public void setHints (short hints)
    {
        myHints = hints;
    }

    public void setHasTime (boolean set)
    {
        if (set)
        {
            myHints |= HAS_TIME;
        }
        else
        {
            myHints &= ~HAS_TIME;
        }
    }

    public void setHasDate (boolean set)
    {
        if (set)
        {
            myHints |= HAS_DATE;
        }
        else
        {
            myHints &= ~HAS_DATE;
        }
    }

    public void setNoTimezone (boolean set)
    {
        if (set)
        {
            myHints |= NO_TIMEZONE;
        }
        else
        {
            myHints &= ~NO_TIMEZONE;
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
