---
title: options/MamdaOptionChainHandler.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# options/MamdaOptionChainHandler.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::options](namespacecom_1_1wombat_1_1mamda_1_1options.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[com::wombat::mamda::options::MamdaOptionChainHandler](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html)**  |




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

import com.wombat.mamda.*;
import com.wombat.mama.MamaMsg;

public interface MamdaOptionChainHandler
{
    void onOptionChainRecap (
        final MamdaSubscription         subscription,
        final MamdaOptionChainListener  listener,
        final MamaMsg                   msg,
        final MamdaOptionChain          chain);

    void onOptionContractCreate (
        final MamdaSubscription         subscription,
        final MamdaOptionChainListener  listener,
        final MamaMsg                   msg,
        final MamdaOptionContract       contract,
        final MamdaOptionChain          chain);

    void onOptionSeriesUpdate (
        final MamdaSubscription         subscription,
        final MamdaOptionChainListener  listener,
        final MamaMsg                   msg,
        final MamdaOptionSeriesUpdate   event,
        final MamdaOptionChain          chain);
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100
