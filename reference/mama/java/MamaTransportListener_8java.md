---
title: mama/MamaTransportListener.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaTransportListener.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mama::MamaTransportListener](interfacecom_1_1wombat_1_1mama_1_1MamaTransportListener.html)**  |




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

public interface MamaTransportListener
{
    public void onDisconnect(short cause, final Object platformInfo);

    public void onReconnect(short cause, final Object platformInfo);

    public void onQuality (short cause, final Object platformInfo);

    public void onConnect (short cause, final Object platformInfo);

    public void onAccept (short cause, final Object platformInfo);

    public void onAcceptReconnect (short cause, final Object platformInfo);

    public void onPublisherDisconnect (short cause, final Object platformInfo);

    public void onNamingServiceConnect (short cause, final Object platformInfo);

    public void onNamingServiceDisconnect (short cause, final Object platformInfo);
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
