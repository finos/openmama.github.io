---
title: mama/MamaServiceLevel.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaServiceLevel.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaServiceLevel](classcom_1_1wombat_1_1mama_1_1MamaServiceLevel.html)**  |




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

public class MamaServiceLevel
{
    public static final short REAL_TIME          = 0;
    public static final short SNAPSHOT           = 1;
    public static final short REPEATING_SNAPSHOT = 2;
    public static final short CONFLATED          = 5;
    public static final short UNKNOWN            = 99;

    public static String toString (short serviceLevel)
    {
        switch (serviceLevel)
        {
        case REAL_TIME:            return "real time";
        case SNAPSHOT:             return "snapshot";
        case REPEATING_SNAPSHOT:   return "repeating snapshot";
        case CONFLATED:            return "conflated";
        default:                   return "Unknown";
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
