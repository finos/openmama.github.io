---
title: mamda/MamdaAuctionFields.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaAuctionFields.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaAuctionFields](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionFields.html)**  |




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

import com.wombat.mama.MamaFieldDescriptor;
import com.wombat.mama.MamaDictionary;

import java.util.Properties;

public class MamdaAuctionFields extends MamdaFields
{
    public static MamaFieldDescriptor  UNCROSS_PRICE        = null;
    public static MamaFieldDescriptor  UNCROSS_VOLUME       = null;
    public static MamaFieldDescriptor  UNCROSS_PRICE_IND    = null;

    public static int  MAX_FID = 0;    
    private static boolean initialised = false;

    public static void setDictionary (MamaDictionary  dictionary,
                                      Properties      properties)
    {
        // already initialised
        if (initialised)
        {
            return;
        }
        MamdaCommonFields.setDictionary (dictionary, null);

        UNCROSS_PRICE       = lookupField (dictionary, properties, "wUncrossPrice");
        UNCROSS_VOLUME      = lookupField (dictionary, properties, "wUncrossVolume");
        UNCROSS_PRICE_IND   = lookupField (dictionary, properties, "wUncrossPriceInd");     
        
        MAX_FID = dictionary.getMaxFid();        
        initialised = true;
    }

    private static MamaFieldDescriptor lookupField (MamaDictionary dictionary,
                                                    Properties     properties,
                                                    String         name)
    {
        return dictionary.getFieldByName (lookupFieldName (properties, name));
    }

    public static boolean isSet ()
    {
        return initialised;
    }
    
    public static void reset ()
    {
        if (MamdaCommonFields.isSet())
        {
            MamdaCommonFields.reset ();
        }
        
        MAX_FID             = 0;
        UNCROSS_PRICE       = null;
        UNCROSS_VOLUME      = null;
        UNCROSS_PRICE_IND   = null;

        initialised         = false;
    }

    public static int getMaxFid ()
    {
        return MAX_FID;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
