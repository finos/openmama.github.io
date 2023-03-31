---
title: mama/MamaDQCause.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaDQCause.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaDQCause](classcom_1_1wombat_1_1mama_1_1MamaDQCause.html)**  |




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

public class MamaDQCause
{
    public static final short DQ_SUBSCRIBER  = 7;
    public static final short DQ_PUBLISHER   = 8;
    public static final short DQ_NETWORK     = 9;
    public static final short DQ_UNKNOWN     = 10;
    public static final short DQ_DISCONNECT  = 12;
    public static final short DQ_CONNECT     = 13;

    public static String toString (short cause)
    {
        switch (cause)
        {
        case DQ_SUBSCRIBER: return "Data Quality Subscriber";
        case DQ_PUBLISHER:  return "Data Quality Publisher";
        case DQ_NETWORK:    return "Data Quality Network";
        case DQ_UNKNOWN:    return "Data Quality Unknown";
        case DQ_DISCONNECT: return "Data Quality Disconnect";
        case DQ_CONNECT:    return "Data Quality Connect";
        }
        return "Error";
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:45 +0100
