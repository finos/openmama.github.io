---
title: mamda/MamdaTradeCorrection.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeCorrection.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaTradeCorrection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html)**  |




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

public interface MamdaTradeCorrection extends MamdaBasicEvent
{
    public long    getOrigSeqNum();

    public short getOrigSeqNumFieldState();

    public double  getOrigPrice();

    public short getOrigPriceFieldState();

    public double  getOrigVolume();

    public short getOrigVolumeFieldState();

    public String  getOrigPartId();

    public short getOrigPartIdFieldState();

    public String  getOrigQual();

    public short getOrigQualFieldState();

    public String getOrigQualNative();

    public short getOrigQualNativeFieldState();

    public String  getOrigCondition();

    public short getOrigConditionFieldState();

    public long    getOrigSellersSaleDays();

    public short getOrigSellersSaleDaysFieldState();

    public char    getOrigStopStock();

    public short getOrigStopStockFieldState();

    public String getOrigTradeId(); 

    public short getOrigTradeIdFieldState();  

    public String  getCorrTradeId();

    public short getCorrTradeIdFieldState();

    public double  getCorrPrice();

    public short getCorrPriceFieldState();

    public double  getCorrVolume();

    public short getCorrVolumeFieldState();

    public String  getCorrPartId();

    public short getCorrPartIdFieldState();

    public String  getCorrQual();

    public short getCorrQualFieldState();

    public String getCorrQualNative();

    public short getCorrQualNativeFieldState();

    public String  getCorrCondition();

    public short getCorrConditionFieldState();

    public long    getCorrSellersSaleDays();

    public short getCorrSellersSaleDaysFieldState();

    public char    getCorrStopStock();

    public short getCorrStopStockFieldState();

    public char getCorrShortSaleCircuitBreaker();  

    public short getCorrShortSaleCircuitBreakerFieldState();    

}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
