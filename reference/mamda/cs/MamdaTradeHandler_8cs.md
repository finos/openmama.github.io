---
title: cs/MamdaTradeHandler.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaTradeHandler.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html)** <br>[MamdaTradeHandler]() is an interface for applications that want to have an easy way to handle trade updates. The interface defines callback methods for different types of trade-related events: trades, errors/cancels, corrections, recaps and closing reports.  |




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
    public interface MamdaTradeHandler
    {
        void onTradeRecap(
            MamdaSubscription   subscription,
            MamdaTradeListener  listener,
            MamaMsg             msg,
            MamdaTradeRecap     recap);

        void onTradeReport(
            MamdaSubscription   subscription,
            MamdaTradeListener  listener,
            MamaMsg             msg,
            MamdaTradeReport    reportEvent,
            MamdaTradeRecap     recap);

        void onTradeGap(
            MamdaSubscription   subscription,
            MamdaTradeListener  listener,
            MamaMsg             msg,
            MamdaTradeGap       gapEvent,
            MamdaTradeRecap     recap);

        void onTradeCancelOrError(
            MamdaSubscription        subscription,
            MamdaTradeListener       listener,
            MamaMsg                  msg,
            MamdaTradeCancelOrError  cancelOrErrorEvent,
            MamdaTradeRecap          recap);

        void onTradeCorrection(
            MamdaSubscription        subscription,
            MamdaTradeListener       listener,
            MamaMsg                  msg,
            MamdaTradeCorrection     correctionEvent,
            MamdaTradeRecap          recap);

        void onTradeClosing(
            MamdaSubscription        subscription,
            MamdaTradeListener       listener,
            MamaMsg                  msg,
            MamdaTradeClosing        closingEvent,
            MamdaTradeRecap          recap);
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
