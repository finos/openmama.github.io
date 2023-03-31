---
title: cs/MamaSubscriptionCallback.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaSubscriptionCallback.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamaSubscriptionCallback](interfaceWombat_1_1MamaSubscriptionCallback.html)** <br>This interface should be implemented by clients wish to create a MAMA subscription, it contains callback functions that will be invoked whenever specific events occur.  |




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
    /* ************************************************************** */
    #region mamaQuality Enumeration

    public enum mamaQuality
    {
        MAMA_QUALITY_OK,
        MAMA_QUALITY_MAYBE_STALE,
        MAMA_QUALITY_STALE,
        MAMA_QUALITY_PARTIAL_STALE,
        MAMA_QUALITY_FORCED_STALE,
        MAMA_QUALITY_DUPLICATE,
        MAMA_QUALITY_UNKNOWN
    }

    #endregion

    /* ************************************************************** */
    #region MamaSubscriptionCallback Interface

    public interface MamaSubscriptionCallback
    {
        void onCreate(MamaSubscription subscription);

        void onError(MamaSubscription subscription, MamaStatus.mamaStatus status, string subject);

        void onGap(MamaSubscription subscription);

        void onMsg(MamaSubscription subscription, MamaMsg message);

        void onQuality(MamaSubscription subscription, mamaQuality quality, string symbol);

        void onRecapRequest(MamaSubscription subscription);

        void onDestroy(MamaSubscription subscription);
    }

    #endregion
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:34 +0100
