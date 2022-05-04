---
title: mamda/MamdaDataException.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaDataException.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaDataException](classcom_1_1wombat_1_1mamda_1_1MamdaDataException.html)**  |




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

import java.io.Serializable;
import java.util.logging.Logger;

public class MamdaDataException extends RuntimeException implements Serializable
{
    private static final Logger logger = Logger.getLogger(
        "com.wombat.mamda.MamdaDataException");

    public MamdaDataException (final String message, final Throwable cause)
    {
        super (message, cause);
        logger.fine (message + " : " + cause);
    }

    public MamdaDataException (final Throwable cause)
    {
        this (null, cause);
    }

    public MamdaDataException (final String message)
    {
        this (message, null);
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
