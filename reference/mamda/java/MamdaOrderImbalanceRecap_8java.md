---
title: mamda/MamdaOrderImbalanceRecap.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaOrderImbalanceRecap.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html)**  |




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

import com.wombat.mama.*;
public interface MamdaOrderImbalanceRecap extends MamdaBasicRecap
{
    public MamaDateTime getActivityTime();

    public short getActivityTimeFieldState();

    public MamaDateTime getAuctionTime();

    public short getAuctionTimeFieldState();

    public long getBuyVolume(); 

    public short getBuyVolumeFieldState();

    public char getCrossType(); 

    public short getCrossTypeFieldState();

    public long getEventSeqNum(); 

    public short getEventSeqNumFieldState();

    public MamaDateTime getEventTime(); 

    public short getEventTimeFieldState();

    public MamaPrice getFarClearingPrice(); 

    public short getFarClearingPriceFieldState();

    public MamaPrice getHighIndicationPrice(); 

    public short getHighIndicationPriceFieldState();

    public MamaPrice getImbalancePrice ();

    public short getImbalancePriceFieldState();

    public MamaPrice getMatchPrice(); 

    public short getMatchPriceFieldState();

    public String getIssueSymbol(); 

    public short getIssueSymbolFieldState();

    public MamaPrice getLowIndicationPrice(); 

    public short getLowIndicationPriceFieldState();

    public long getMatchVolume(); 

    public short getMatchVolumeFieldState();

    public int getMsgType(); 

    public short getMsgTypeFieldState();

    public MamaPrice getNearClearingPrice(); 

    public short getNearClearingPriceFieldState();

    public char getNoClearingPrice(); 

    public short getNoClearingPriceFieldState();

    public String getPartId(); 

    public short getPartIdFieldState();

    public char getPriceVarInd();

    public short getPriceVarIndFieldState();

    public String getSecurityStatusOrig(); 

    public short getSecurityStatusOrigFieldState();

    public String getImbalanceState();

    public short getImbalanceStateFieldState();

    public MamaDateTime getSecurityStatusTime(); 

    public short getSecurityStatusTimeFieldState();

    public long getSellVolume(); 

    public short getSellVolumeFieldState();

    public int getSeqNum(); 

    public short getSeqNumFieldState();
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
