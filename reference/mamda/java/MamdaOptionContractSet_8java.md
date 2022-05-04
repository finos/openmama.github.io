---
title: options/MamdaOptionContractSet.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# options/MamdaOptionContractSet.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::options](namespacecom_1_1wombat_1_1mamda_1_1options.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::options::MamdaOptionContractSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html)**  |




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

import java.util.Collection;
import java.util.Set;
import java.util.TreeMap;

public class MamdaOptionContractSet
{
    private MamdaOptionContract  mBboContract       = null;
    private MamdaOptionContract  mWombatBboContract = null;
    private TreeMap              mExchangeContracts = null;

    public MamdaOptionContractSet()
    {
        mExchangeContracts = new TreeMap();
    }

    public void setBboContract (MamdaOptionContract  contract)
    {
        mBboContract = contract;
    }

    public void setWombatBboContract (MamdaOptionContract  contract)
    {
        mWombatBboContract = contract;
    }

    public void setExchangeContract (String               exchange,
                                     MamdaOptionContract  contract)
    {
        mExchangeContracts.put (exchange, contract);
    }

    public MamdaOptionContract getBboContract ()
    {
        return mBboContract;
    }

    public MamdaOptionContract getWombatBboContract ()
    {
        return mWombatBboContract;
    }

    public MamdaOptionContract getExchangeContract (String exchange)
    {
        return (MamdaOptionContract) mExchangeContracts.get (exchange);
    }

    public Collection getExchangeContracts()
    {
        return mExchangeContracts.values();
    }

    public Set getExchanges()
    {
        return mExchangeContracts.keySet();
    }

}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
