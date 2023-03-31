---
title: cs/MamaBasicSubscriptionCallback.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaBasicSubscriptionCallback.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamaBasicSubscriptionCallback](interfaceWombat_1_1MamaBasicSubscriptionCallback.html)** <br>This interface should be implemented by clients wish to create a MAMA Basic subscription, it contains callback functions that will be invoked whenever specific events occur.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| ﻿using | **[System](MamaBasicSubscriptionCallback_8cs.html#variable-system)**  |



## Attributes Documentation

### variable System

```csharp
﻿using System;
```



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

﻿using System;

namespace Wombat
{
    /* ************************************************************** */
    #region MamaBasicSubscriptionCallback Interface

    public interface MamaBasicSubscriptionCallback
    {
        void onCreate(MamaBasicSubscription subscription);

        void onError(MamaBasicSubscription subscription, MamaStatus.mamaStatus status, string subject);

        void onMsg(MamaBasicSubscription subscription, MamaMsg message);

        void onDestroy(MamaBasicSubscription subscription, object closure);
    }

#endregion
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
