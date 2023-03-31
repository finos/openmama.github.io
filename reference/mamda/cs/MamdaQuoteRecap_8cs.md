---
title: cs/MamdaQuoteRecap.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaQuoteRecap.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html)** <br>[MamdaQuoteRecap]() is an interface that provides access to quote related fields.  |




## Source code

```csharp
/* $Id: MamdaQuoteRecap.cs,v 1.6.2.5 2012/08/24 16:12:11 clintonmcdowell Exp $
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
    public interface MamdaQuoteRecap : MamdaBasicRecap
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

        MamaPrice getQuoteMidPrice();

        long getQuoteCount();

        MamdaFieldState getQuoteCountFieldState();

        string getQuoteQual();

        MamdaFieldState getQuoteQualFieldState();

        string getQuoteQualNative ();

        MamdaFieldState getQuoteQualNativeFieldState();

        char getShortSaleCircuitBreaker ();

        MamdaFieldState getShortSaleCircuitBreakerFieldState();

        char getShortSaleBidTick ();

        MamdaFieldState getShortSaleBidTickFieldState();

        DateTime    getAskTime();
        DateTime    getBidTime();
        DateTime    getQuoteDate();
        string      getAskIndicator();
        string      getBidIndicator();
        long        getAskUpdateCount();
        long        getBidUpdateCount();
        double      getAskYield();
        double      getBidYield();

        MamdaFieldState    getAskTimeFieldState();
        MamdaFieldState    getBidTimeFieldState();
        MamdaFieldState    getQuoteDateFieldState();
        MamdaFieldState    getAskIndicatorFieldState();
        MamdaFieldState    getBidIndicatorFieldState();
        MamdaFieldState    getAskUpdateCountFieldState();
        MamdaFieldState    getBidUpdateCountFieldState();
        MamdaFieldState    getAskYieldFieldState();
        MamdaFieldState    getBidYieldFieldState();
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
