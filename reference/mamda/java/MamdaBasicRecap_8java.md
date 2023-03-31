---
title: mamda/MamdaBasicRecap.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaBasicRecap.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)**  |




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

import com.wombat.mama.*;

public interface MamdaBasicRecap
{
    public String getSymbol();

    public short  getSymbolFieldState();

    public String getPartId();

    public short  getPartIdFieldState();

    public MamaDateTime getSrcTime();

    public short  getSrcTimeFieldState();

    public MamaDateTime getActivityTime();

    public short  getActivityTimeFieldState();

    public MamaDateTime  getLineTime();

    public short  getLineTimeFieldState();

    public MamaDateTime getSendTime();

    public short  getSendTimeFieldState();

}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
