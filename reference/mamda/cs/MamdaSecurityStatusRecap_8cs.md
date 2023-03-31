---
title: cs/MamdaSecurityStatusRecap.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaSecurityStatusRecap.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::MamdaSecurityStatusRecap](interfaceWombat_1_1MamdaSecurityStatusRecap.html)** <br>[MamdaSecurityStatusRecap]() is an interface that provides access to security status related fields.  |




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
    public interface MamdaSecurityStatusRecap
    {
        long getSecurityStatus();

        MamdaFieldState getSecurityStatusFieldState();

        long getSecurityStatusQualifier();

        MamdaFieldState getSecurityStatusQualifierFieldState();

        MamdaSecurityStatus.mamdaSecurityStatus getSecurityStatusEnum();

        MamdaFieldState getSecurityStatusEnumFieldState();

        MamdaSecurityStatusQual.mamdaSecurityStatusQual getSecurityStatusQualifierEnum();

        MamdaFieldState getSecurityStatusQualifierEnumFieldState();

        string getSecurityStatusStr();

        MamdaFieldState getSecurityStatusStrFieldState();

        string getSecurityStatusQualifierStr();

        MamdaFieldState getSecurityStatusQualifierStrFieldState();

        string getSecurityStatusOrigStr();

        MamdaFieldState getSecurityStatusOrigStrFieldState();

        string getReason();

        MamdaFieldState getReasonFieldState();

        char getShortSaleCircuitBreaker();

        MamdaFieldState getShortSaleCircuitBreakerFieldState();

        DateTime getLuldTime();

         MamdaFieldState getLuldTimeFieldState();

        char getLuldIndicator();

         MamdaFieldState getLuldIndicatorFieldState();

        MamaPrice getLuldHighLimit();

         MamdaFieldState getLuldHighLimitFieldState();

        MamaPrice getLuldLowLimit();

         MamdaFieldState getLuldLowLimitFieldState();


    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
