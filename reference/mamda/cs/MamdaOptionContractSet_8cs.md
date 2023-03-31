---
title: Options/MamdaOptionContractSet.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Options/MamdaOptionContractSet.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOptionContractSet](classWombat_1_1MamdaOptionContractSet.html)** <br>A class that represents a set of option contracts at a given strike price.  |




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
using Wombat.Containers;

namespace Wombat
{
    public class MamdaOptionContractSet
    {
        public MamdaOptionContractSet()
        {
            mExchangeContracts = new TreeMap();
        }

        public void setBboContract(MamdaOptionContract contract)
        {
            mBboContract = contract;
        }

        public void setWombatBboContract(MamdaOptionContract contract)
        {
            mWombatmBboContract = contract;
        }

        public void setExchangeContract(
            string               exchange,
            MamdaOptionContract  contract)
        {
            mExchangeContracts.put(exchange, contract);
        }

        public MamdaOptionContract getBboContract()
        {
            return mBboContract;
        }

        public MamdaOptionContract getWombatBboContract()
        {
            return mWombatmBboContract;
        }

        public MamdaOptionContract getExchangeContract(string exchange)
        {
            return (MamdaOptionContract)mExchangeContracts.valueOf(exchange);
        }

        public Collection getExchangeContracts()
        {
            return mExchangeContracts.values();
        }

        public Set getExchanges()
        {
            return mExchangeContracts.keySet();
        }

        private MamdaOptionContract  mBboContract       = null;
        private MamdaOptionContract  mWombatmBboContract = null;
        private TreeMap              mExchangeContracts = null;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:18 +0100
