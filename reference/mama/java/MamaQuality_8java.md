---
title: mama/MamaQuality.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaQuality.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaQuality](classcom_1_1wombat_1_1mama_1_1MamaQuality.html)**  |




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

public class MamaQuality
{
    public static final short QUALITY_OK            = 0;

    public static final short QUALITY_MAYBE_STALE   = 1;

    public static final short QUALITY_STALE         = 2;

    public static final short QUALITY_PARTIAL_STALE = 3;
    
    public static final short QUALITY_FORCED_STALE  = 4;

    public static final short QUALITY_DUPLICATE     = 5; 
    
    public static final short QUALITY_UNKNOWN       = 99;

    public static String toString (short quality)
    {
        switch (quality)
        {
        case QUALITY_OK:            return "OK";
        case QUALITY_MAYBE_STALE:   return "MaybeStale";
        case QUALITY_STALE:         return "Stale";
        case QUALITY_PARTIAL_STALE: return "PartialStale";
        case QUALITY_FORCED_STALE:  return "ForcedStale";
        case QUALITY_DUPLICATE:     return "Duplicate";
        case QUALITY_UNKNOWN:       return "Quality Unknown";
        }
        return "Error";  // throw?
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
