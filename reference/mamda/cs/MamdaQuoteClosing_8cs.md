---
title: cs/MamdaQuoteClosing.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaQuoteClosing.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaQuoteClosing](interfaceWombat_1_1MamdaQuoteClosing.html)** <br>[MamdaQuoteClosing]() is an interface that provides access to quote closing related fields.  |




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
    public interface MamdaQuoteClosing : MamdaBasicEvent
    {
        MamaPrice getBidPrice();

        MamdaFieldState getBidPriceFieldState();

        long getBidSize();

        MamdaFieldState getBidSizeFieldState();

        string getBidPartId();

        MamdaFieldState getBidPartIdFieldState();

        MamaPrice getAskPrice();

        MamdaFieldState getAskPriceFieldState();

        long getAskSize();

        MamdaFieldState getAskSizeFieldState();

        string getAskPartId();

        MamdaFieldState getAskPartIdFieldState();

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
