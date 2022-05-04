---
title: mama/MamaThrottleInstance.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaThrottleInstance.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaThrottleInstance](classcom_1_1wombat_1_1mama_1_1MamaThrottleInstance.html)**  |




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

public final class MamaThrottleInstance
{
    private final String myStringValue;
    private final int    myValue;

    public static final int           DEFAULT_THROTTLE_VALUE = 0;
    public static final MamaThrottleInstance DEFAULT_THROTTLE       = 
            new MamaThrottleInstance (valueToString (DEFAULT_THROTTLE_VALUE), 
                                      DEFAULT_THROTTLE_VALUE);
    
    public static final int           INITIAL_THROTTLE_VALUE = 1;
    public static final MamaThrottleInstance INITIAL_THROTTLE       = 
            new MamaThrottleInstance (valueToString (INITIAL_THROTTLE_VALUE), 
                                      INITIAL_THROTTLE_VALUE);

    public static final int           RECAP_THROTTLE_VALUE = 2;
    public static final MamaThrottleInstance RECAP_THROTTLE       = 
            new MamaThrottleInstance (valueToString (RECAP_THROTTLE_VALUE), 
                                      RECAP_THROTTLE_VALUE);
    
    /* No publicly created instances allowed */
    private MamaThrottleInstance (String name, int value) 
    {
        myStringValue = name;
        myValue       = value;
    }

    public String toString ()
    {
        return myStringValue;
    }

    public int getValue ()
    {
        return myValue;
    }

    public boolean equals (MamaThrottleInstance throttleInstance)
    {
        if (myValue==throttleInstance.myValue) return true;
        return false;
    }

    public static String valueToString (int value)
    {
        switch (value)
        {
            case DEFAULT_THROTTLE_VALUE:
                return "DEFAULT_THROTTLE";
            case INITIAL_THROTTLE_VALUE:
                return "INITIAL_THROTTLE";
            case RECAP_THROTTLE_VALUE:
                return "RECAP_THROTTLE";
            default:
                return "UNKNOWN";
        }
    }

    public static MamaThrottleInstance enumObjectForValue (int value)
    {
        switch (value)
        {
            case DEFAULT_THROTTLE_VALUE:
                return DEFAULT_THROTTLE;
            case INITIAL_THROTTLE_VALUE:
                return INITIAL_THROTTLE;
            case RECAP_THROTTLE_VALUE:
                return RECAP_THROTTLE;
            default:
                return null;
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
