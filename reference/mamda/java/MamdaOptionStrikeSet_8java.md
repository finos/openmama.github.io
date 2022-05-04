---
title: options/MamdaOptionStrikeSet.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# options/MamdaOptionStrikeSet.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::options](namespacecom_1_1wombat_1_1mamda_1_1options.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::options::MamdaOptionStrikeSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionStrikeSet.html)**  |




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

package com.wombat.mamda.options;

import java.text.SimpleDateFormat;
import java.util.Date;

public class MamdaOptionStrikeSet
{
    private final MamdaOptionContractSet mCallSet       = new MamdaOptionContractSet();
    private final MamdaOptionContractSet mPutSet        = new MamdaOptionContractSet();
    private final SimpleDateFormat       mExpireFormat  = new SimpleDateFormat ("MMMyy");
    private final Date                   mExpireDate;
    private final double                 mStrikePrice;

    public MamdaOptionStrikeSet (Date    expireDate,
                                 double  strikePrice)
    {
        mExpireDate  = expireDate;
        mStrikePrice = strikePrice;
    }

    public MamdaOptionContractSet getCallSet()
    {
        return mCallSet;
    }

    public MamdaOptionContractSet getPutSet()
    {
        return mPutSet;
    }

    public Date getExpireDate ()
    {
        return mExpireDate;
    }

    public String getExpireDateStr ()
    {
        return mExpireFormat.format(mExpireDate);
    }

    public double getStrikePrice ()
    {
        return mStrikePrice;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
