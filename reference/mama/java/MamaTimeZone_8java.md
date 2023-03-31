---
title: mama/MamaTimeZone.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaTimeZone.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaTimeZone](classcom_1_1wombat_1_1mama_1_1MamaTimeZone.html)**  |




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

import java.util.TimeZone;
import java.util.Calendar;

public class MamaTimeZone
{
    private static MamaTimeZone myLocalTz     = new MamaTimeZone (TimeZone.getDefault ());
    private static MamaTimeZone myUtcTz       = new MamaTimeZone (TimeZone.getTimeZone ("UTC"));
    private static MamaTimeZone myUsEastern   = new MamaTimeZone (TimeZone.getTimeZone ("US/Eastern"));

    private TimeZone myTimeZone;

    private MamaTimeZone (TimeZone timeZone)
    {
        myTimeZone = timeZone;
    }

    public static MamaTimeZone local ()
    {
        return myLocalTz;
    }

    public static MamaTimeZone utc ()
    {
        return myUtcTz;
    }

    public static MamaTimeZone usEastern ()
    {
        return myUsEastern;
    }

    public MamaTimeZone ()
    {
        myTimeZone = TimeZone.getDefault ();
    }


    public MamaTimeZone (String tz)
    {
        myTimeZone = TimeZone.getTimeZone (tz);
    }

    public MamaTimeZone (MamaTimeZone  copy)
    {
        myTimeZone = copy.myTimeZone;
    }

    public boolean equals (Object obj)
    {
        if (obj instanceof MamaTimeZone)
        {
            return tz().equals ( ( (MamaTimeZone)obj).tz ());
        }
        return false;
    }

    public int hashCode ()
    {
        /* Consistent with equals() */
        return tz ().hashCode ();
    }

    public void set (String tz)
    {
        myTimeZone = TimeZone.getTimeZone (tz);
    }

    public String tz ()
    {
        return myTimeZone.getID ();
    }

    public int offset ()
    {
        return myTimeZone.getOffset (System.currentTimeMillis ())/1000;
    }

    public TimeZone getJavaTimzone ()
    {
        return myTimeZone;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
