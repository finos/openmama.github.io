---
title: mama/MamaError.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaError.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaError](classcom_1_1wombat_1_1mama_1_1MamaError.html)**  |




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

public class MamaError
{
    public static final int ERROR_DEFAULT         = 0;

    public static final int ERROR_INITIAL_TIMEOUT = 1;

    public static final int ERROR_RECAP_TIMEOUT   = 2;
    
    public static final int ERROR_NOT_ENTITLED    = 3;
    
    public static final int ERROR_NO_RESOLVER     = 4;
    
    public static final int ERROR_UNKNOWN         = 999;

    public static String toString (int error)
    {
        switch (error)
        {
        case ERROR_DEFAULT:         return "DEFAULT";
        case ERROR_INITIAL_TIMEOUT: return "INITIAL_TIMEOUT";
        case ERROR_RECAP_TIMEOUT:   return "RECAP_TIMEOUT";
        case ERROR_NOT_ENTITLED:    return "NOT_ENTITLED";
        case ERROR_NO_RESOLVER:     return "NO_RESOLVER";
        case ERROR_UNKNOWN:         return "UNKNOWN";
        }
        return "Error";  // throw?
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
