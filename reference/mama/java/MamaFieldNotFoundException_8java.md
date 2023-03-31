---
title: mama/MamaFieldNotFoundException.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaFieldNotFoundException.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaFieldNotFoundException](classcom_1_1wombat_1_1mama_1_1MamaFieldNotFoundException.html)**  |




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

import com.wombat.common.WombatException;

public class MamaFieldNotFoundException extends WombatException
{
    public MamaFieldNotFoundException( String message, Throwable cause )
    {
        super( message, cause );
    }

    public MamaFieldNotFoundException( Throwable cause )
    {
        super( cause );
    }

    public MamaFieldNotFoundException( String message )
    {
        super( message );
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:45 +0100
