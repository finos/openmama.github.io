---
title: mamda/MamdaSecurityStatusUpdate.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaSecurityStatusUpdate.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaSecurityStatusUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html)**  |




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

import com.wombat.mama.MamaPrice;
import com.wombat.mama.MamaDateTime;

public interface MamdaSecurityStatusUpdate extends MamdaBasicEvent
{
    public long   getSecurityStatus();

    public short  getSecurityStatusFieldState();

    public short  getSecurityStatusEnum(); 

    public short  getSecurityStatusEnumFieldState();

    public long   getSecurityStatusQualifier();

    public short  getSecurityStatusQualifierFieldState();

    public short  getSecurityStatusQualifierEnum();

    public short  getSecurityStatusQualifierEnumFieldState();

    public String getSecurityStatusStr();

    public short  getSecurityStatusStrFieldState();

    public String getSecurityStatusQualifierStr();

    public short  getSecurityStatusQualifierStrFieldState();

    public String getSecurityStatusOrigStr();

    public short  getSecurityStatusOrigStrFieldState();

    public String getReason();

    public short  getReasonFieldState();
    
    public char getShortSaleCircuitBreaker();

    public short getShortSaleCircuitBreakerFieldState();

    public char getLuldIndicator();

    public short getLuldIndicatorFieldState();

    public MamaDateTime getLuldTime();

    public short getLuldTimeFieldState();

    public MamaPrice getLuldHighLimit();

    public short getLuldHighLimitFieldState();

    public MamaPrice getLuldLowLimit();

    public short getLuldLowLimitFieldState();

}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
