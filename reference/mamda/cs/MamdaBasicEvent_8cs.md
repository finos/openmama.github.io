---
title: cs/MamdaBasicEvent.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaBasicEvent.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)** <br>[MamdaBasicEvent]() is a superclass interface that provides access to common event related fields. Events types include trades, quotes, order book updates, closing summaries, etc. See the individual subclasses for specific information about each event type.  |




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
    public interface MamdaBasicEvent
    {
        DateTime getSrcTime();

        MamdaFieldState getSrcTimeFieldState();

        DateTime getActivityTime();

        MamdaFieldState getActivityTimeFieldState();

        long getEventSeqNum();

        MamdaFieldState getEventSeqNumFieldState();

        DateTime getEventTime();

        MamdaFieldState getEventTimeFieldState();

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
