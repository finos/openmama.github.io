---
title: mamda/MamdaFieldState.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaFieldState.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html)**  |




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

public class MamdaFieldState
{
    public static final short   NOT_INITIALISED           = 0;
    public static final short   NOT_MODIFIED              = 1;
    public static final short   MODIFIED                  = 2;

    private static final String NOT_INITIALISED_STR   = "Not Initialised";
    private static final String NOT_MODIFIED_STR      = "Not Modified";
    private static final String MODIFIED_STR          = "Modified";


    public static String toString (short fieldState)
    {
        switch (fieldState)
        {
            case  NOT_INITIALISED:   return NOT_INITIALISED_STR;
            case  NOT_MODIFIED:      return NOT_MODIFIED_STR;
            case  MODIFIED:          return MODIFIED_STR;

            default:
                return "Not Initialised";
        }
    }

    public void setState(short state)
    {
        mState = state;
    }

    public short getState ()
    {
        return mState;
    }

    private short mState = 0;
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
