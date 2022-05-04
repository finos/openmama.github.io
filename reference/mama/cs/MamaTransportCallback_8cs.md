---
title: cs/MamaTransportCallback.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaTransportCallback.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamaTransportCallback](interfaceWombat_1_1MamaTransportCallback.html)** <br>Callbacks associated with MamaTransports  |




## Source code

```csharp
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

using System;

namespace Wombat
{
    using System;

    public interface MamaTransportCallback
    {
        void onDisconnect(MamaTransport transport);

        void onReconnect(MamaTransport transport);

        void onQuality(MamaTransport transport);

        void onConnect(MamaTransport transport);

        void onAcceptConnect(MamaTransport transport);

        void onAcceptReconnect(MamaTransport transport);

        void onPublisherDisconnect(MamaTransport transport);

        void onNamingServiceConnect(MamaTransport transport);

        void onNamingServiceDisconnect(MamaTransport transport);
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
