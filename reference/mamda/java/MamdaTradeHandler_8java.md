---
title: mamda/MamdaTradeHandler.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeHandler.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html)**  |




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

import com.wombat.mama.MamaMsg;

public interface MamdaTradeHandler
{
    void onTradeRecap (
        MamdaSubscription   subscription,
        MamdaTradeListener  listener,
        MamaMsg             msg,
        MamdaTradeRecap     recap);

    void onTradeReport (
        MamdaSubscription   subscription,
        MamdaTradeListener  listener,
        MamaMsg             msg,
        MamdaTradeReport    event,
        MamdaTradeRecap     recap);

    void onTradeGap (
        MamdaSubscription   subscription,
        MamdaTradeListener  listener,
        MamaMsg             msg,
        MamdaTradeGap       event,
        MamdaTradeRecap     recap);

    void onTradeCancelOrError (
        MamdaSubscription        subscription,
        MamdaTradeListener       listener,
        MamaMsg                  msg,
        MamdaTradeCancelOrError  event,
        MamdaTradeRecap          recap);

    void onTradeCorrection (
        MamdaSubscription        subscription,
        MamdaTradeListener       listener,
        MamaMsg                  msg,
        MamdaTradeCorrection     event,
        MamdaTradeRecap          recap);

    void onTradeClosing (
        MamdaSubscription        subscription,
        MamdaTradeListener       listener,
        MamaMsg                  msg,
        MamdaTradeClosing        event,
        MamdaTradeRecap          recap);

}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
