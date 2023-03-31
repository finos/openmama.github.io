---
title: cs/MamdaFundamentalHandler.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaFundamentalHandler.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html)** <br>[MamdaFundamentalHandler]() is an interface for applications that want to have an easy way to access fundamental equity pricing/analysis attributes, indicators and ratios. The interface defines a single callback methods for for receiving updates on fundamental data.  |




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
    public interface MamdaFundamentalHandler
    {
        void onFundamentals (
            MamdaSubscription         subscription,
            MamdaFundamentalListener  listener,
            MamaMsg                   msg,
            MamdaFundamentals         fundamentals);
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
