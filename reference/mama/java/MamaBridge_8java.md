---
title: mama/MamaBridge.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaBridge.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaBridge](classcom_1_1wombat_1_1mama_1_1MamaBridge.html)**  |




## Source code

```java
/* $Id$
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

/*
* MamaBridge
*/
public class MamaBridge
{

    static
    {
        initIDs();
    }

    protected MamaBridge()
    {
        /* nothing to do */
    }
    
    /*
    A long holding the C pointer value to
    the underlying mamaBridge C structure
    */
    private long bridgePointer_i = 0;
   
    /*Used to cache ids for callback methods/fields*/
    private static native void initIDs();
}/*end class*/
```


-------------------------------

Updated on 2023-03-31 at 15:29:45 +0100
