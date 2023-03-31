---
title: mamda/MamdaQuoteRecap.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaQuoteRecap.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html)**  |




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

public interface MamdaQuoteRecap extends MamdaBasicRecap
{
    MamaPrice  getBidPrice();

     short  getBidPriceFieldState();

    double  getBidSize();

     short  getBidSizeFieldState();

    String  getBidPartId();

     short  getBidPartIdFieldState();

    MamaDateTime getEventDate();

     short  getEventDateFieldState();

    MamaDateTime getEventTime();

     short  getEventTimeFieldState();

    MamaPrice  getAskPrice();

     short  getAskPriceFieldState();

    double    getAskSize();

     short  getAskSizeFieldState();

    String  getAskPartId();

     short  getAskPartIdFieldState();

    MamaPrice  getQuoteMidPrice();

     short  getQuoteMidPriceFieldState();

    long    getQuoteCount();

     short  getQuoteCountFieldState();

    String  getQuoteQual();

     short  getQuoteQualFieldState();

    String getQuoteQualNative ();

     short  getQuoteQualNativeFieldState();

    char getShortSaleBidTick ();

     short  getShortSaleBidTickFieldState();

    public char getShortSaleCircuitBreaker();  

    public short getShortSaleCircuitBreakerFieldState();    

    MamaDateTime    getAskTime();
    short  getAskTimeFieldState();

    MamaDateTime    getBidTime();
    short  getBidTimeFieldState();

    String          getAskIndicator();
    short  getAskIndicatorFieldState();

    String          getBidIndicator();
    short  getBidIndicatorFieldState();

    long            getAskUpdateCount();
    short  getAskUpdateCountFieldState();
     
    long            getBidUpdateCount();
    short  getBidUpdateCountFieldState();
    
    double          getAskYield();
    short  getAskYieldFieldState();
    
    double          getBidYield();  
    short  getBidYieldFieldState();

    double getAskDepth();

    double getBidDepth();

    short getAskDepthFieldState();
    short getBidDepthFieldState();
     
    String          getBidSizesList();  
    short  getBidSizesListFieldState();
     
    String          getAskSizesList();  
    short  getAskSizesListFieldState();
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
