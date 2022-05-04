---
title: mama/MamaTransportTopicListener.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaTransportTopicListener.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaTransportTopicListener](classcom_1_1wombat_1_1mama_1_1MamaTransportTopicListener.html)**  |




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

public class MamaTransportTopicListener
{
    public void onTopicSubscribe(String topic, final Object platformInfo)
    {
        return;
    }

    public void onTopicUnsubscribe(String topic, final Object platformInfo)
    {
        return;
    }

    public void onTopicPublishError(String topic, final Object platformInfo)
    {
        return;
    }

    public void onTopicPublishErrorNotEntitled(String topic, final Object platformInfo)
    {
        return;
    }

    public void onTopicPublishErrorBadSymbol(String topic, final Object platformInfo)
    {
        return;
    }

    /*  Original callbacks for backward compatibility  */
    @Deprecated public void onTopicSubscribe(short cause, final Object platformInfo)
    {
        return;
    }

    @Deprecated public void onTopicUnsubscribe(short cause, final Object platformInfo)
    {
        return;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
