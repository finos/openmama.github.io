---
title: options/MamdaOptionExpirationStrikes.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# options/MamdaOptionExpirationStrikes.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::options](namespacecom_1_1wombat_1_1mamda_1_1options.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::options::MamdaOptionExpirationStrikes](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationStrikes.html)**  |




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
import java.util.logging.*;
import java.util.SortedMap;
import java.util.SortedSet;
import java.util.TreeMap;

public class MamdaOptionExpirationStrikes extends TreeMap
{
    private static Logger mLogger = Logger.getLogger (
        "com.wombat.mamda.options.MamdaOptionExpirationStrikes");

    public MamdaOptionExpirationStrikes()
    {
    }

    public MamdaOptionExpirationStrikes (MamdaOptionExpirationStrikes copy)
    {
        // Shallow copy.
        super(copy);
    }

    public void trimStrikes (SortedSet strikeSet)
    {
        Double lowStrike = (Double) strikeSet.first();
        Double highStrike = (Double) strikeSet.last();
        highStrike = new Double(highStrike.doubleValue() + 0.0001);
        final TreeMap trimmedStrikes =
            new TreeMap(subMap(lowStrike,highStrike));
        clear();
        putAll(trimmedStrikes);
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100
