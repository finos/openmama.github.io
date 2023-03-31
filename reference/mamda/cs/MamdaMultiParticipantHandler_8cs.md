---
title: cs/MamdaMultiParticipantHandler.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaMultiParticipantHandler.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaMultiParticipantHandler](interfaceWombat_1_1MamdaMultiParticipantHandler.html)** <br>The [MamdaMultiParticipantHandler]() class is an interface that allows a developer to be notified dynamically when new partipant updates are received on the underlying subscription. This is useful for handling information such as NYSE, AMEX and NASDAQ listed securities (including NQDS). Access to consolidated information (i.e., best bid and offer and consolidated trade info) is also available.  |




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
    public interface MamdaMultiParticipantHandler
    {
        void onConsolidatedCreate(
            MamdaSubscription              subscription,
            MamdaMultiParticipantManager  manager);

        void onParticipantCreate (
            MamdaSubscription             subscription,
            MamdaMultiParticipantManager  manager,
            string                        particpantId,
            NullableBool                  isPrimary);
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
