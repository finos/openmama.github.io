---
title: mamda/MamdaFields.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaFields.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaFields](classcom_1_1wombat_1_1mamda_1_1MamdaFields.html)**  |




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

import java.util.logging.*;
import java.util.Properties;

public class MamdaFields
{
    private static Logger myLogger =
                           Logger.getLogger("com.wombat.mamda.MamdaFields");

    protected static String lookupFieldName (Properties  properties,
                                             String      defaultFieldName)
    {
        String result = defaultFieldName;
        if (properties != null)
        {
            String possibleFieldName = 
                properties.getProperty ("mamda.field." + defaultFieldName);
            if (possibleFieldName != null)
                result = possibleFieldName;
        }
        myLogger.fine ("mapped field: " + defaultFieldName + "=>" + result);
        return result;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
