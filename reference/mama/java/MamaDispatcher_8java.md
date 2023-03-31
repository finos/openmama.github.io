---
title: mama/MamaDispatcher.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaDispatcher.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaDispatcher](classcom_1_1wombat_1_1mama_1_1MamaDispatcher.html)**  |




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

/*
* MamaDispatcher
*/
public class MamaDispatcher
{
    static
    {
        initIDs();
    }

    /*
    A long holding the C pointer value to
    the underlying MamaDispatcher C structure
    */
    private long dispatcherPointer_i = 0;

    public long getPointerVal()
    {
        return dispatcherPointer_i;
    }

    public native void  create (MamaQueue queue);

    public native boolean isDispatching();

    public native void destroy();
    
    /*Used to cache ids for callback methods/fields*/
    private static native void initIDs();
}/*end class*/
```


-------------------------------

Updated on 2023-03-31 at 15:29:45 +0100
