---
title: mamda/MamdaTradeReport.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeReport.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html)**  |




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

public interface MamdaTradeReport extends MamdaBasicEvent
{
    public MamaPrice  getTradePrice();

    public short  getTradePriceFieldState();
        
    public double   getTradeVolume();
    
    public short  getTradeVolumeFieldState();

    public String  getTradePartId();

    public short  getTradePartIdFieldState();      
  
    public String getSide();

    public short getSideFieldState();

    public String  getTradeId();

    public short  getTradeIdFieldState();

    public String  getTradeQual();

    public short  getTradeQualFieldState();    

    public String getTradeQualNativeStr();

    public short  getTradeQualNativeStrFieldState();
        
    public String  getTradeCondition();

    public short  getTradeConditionFieldState();    

    public long    getTradeSellersSaleDays();

    public short  getTradeSellersSaleDaysFieldState();
        
    public char    getTradeStopStock();

    public short  getTradeStopStockFieldState();
        
    public boolean getIsIrregular();
    
    public short  getIsIrregularFieldState();

    public char getShortSaleCircuitBreaker();

    public short getShortSaleCircuitBreakerFieldState();
        
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:41 +0100
