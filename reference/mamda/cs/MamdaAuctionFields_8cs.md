---
title: cs/MamdaAuctionFields.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaAuctionFields.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::Collections::Specialized](namespaceSystem_1_1Collections_1_1Specialized.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaAuctionFields](classWombat_1_1MamdaAuctionFields.html)** <br>Cache of common Quote related field descriptors. This is required to be populated if using the [MamdaQuoteListener]().  |




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
using System.Collections.Specialized;

namespace Wombat
{
    public class MamdaAuctionFields : MamdaFields
    {
        public static void setDictionary(
            MamaDictionary      dictionary,
            NameValueCollection properties)
        {
            if (initialised)
            {
                return;
            }

            string wUncrossPrice    = lookupFieldName (properties, "wUncrossPrice");
            string wUncrossVolume   = lookupFieldName (properties, "wUncrossVolume");
            string wUncrossPriceInd = lookupFieldName (properties, "wUncrossPriceInd");
            

            UNCROSS_PRICE       = dictionary.getFieldByName (wUncrossPrice);
            UNCROSS_VOLUME      = dictionary.getFieldByName (wUncrossVolume);
            UNCROSS_PRICE_IND   = dictionary.getFieldByName (wUncrossPriceInd);
            
            MAX_FID = dictionary.getMaxFid();
            initialised = true;
        }

        public static int getMaxFid()
        {
            return MAX_FID;
        }

        public static bool isSet()
        {
            return initialised;
        }

        public static void reset ()
        {
            if (MamdaCommonFields.isSet())
            {
                MamdaCommonFields.reset();
            }
            initialised           = false;
            MAX_FID               = 0;
        
            UNCROSS_PRICE         = null;
            UNCROSS_VOLUME        = null;
            UNCROSS_PRICE_IND     = null;
            
        }
        
        public static MamaFieldDescriptor  UNCROSS_PRICE        = null;
        public static MamaFieldDescriptor  UNCROSS_VOLUME       = null;
        public static MamaFieldDescriptor  UNCROSS_PRICE_IND    = null;

        public  static int      MAX_FID     = 0;
        private static bool     initialised = false;
    }

}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
