---
title: cs/MamdaSecurityStatusFields.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaSecurityStatusFields.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaSecurityStatusFields](classWombat_1_1MamdaSecurityStatusFields.html)** <br>Maintains a cache of common security status related FieldDescriptors.  |




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
    public class MamdaSecurityStatusFields : MamdaFields
    {
        public static void setDictionary(
            MamaDictionary dictionary,
            NameValueCollection properties)
        {
            if (mInitialised)
            {
                return;
            }

            string wSrcTime = lookupFieldName(properties, "wSrcTime");
            string wActivityTime = lookupFieldName(properties, "wActivityTime");
            string wSecurityStatus = lookupFieldName(properties, "wSecurityStatus");
            string wSecStatusQual = lookupFieldName(properties, "wSecStatusQual");
            string wSecurityStatusTime = lookupFieldName(properties, "wSecurityStatusTime");
            string wSecurityStatusOrig = lookupFieldName(properties, "wSecurityStatusOrig");
            string wShortSaleCircuitBreaker = lookupFieldName(properties,"wShortSaleCircuitBreaker");
            string wSeqNum = lookupFieldName(properties, "wSeqNum");
            string wReason = lookupFieldName(properties, "wReason");
            string wLuldIndicator = lookupFieldName(properties, "wLuldIndicator");
            string wLuldTime = lookupFieldName(properties, "wLuldTime");
            string wLuldHighLimit = lookupFieldName(properties, "wHighLimit");
            string wLuldLowLimit = lookupFieldName(properties, "wLowLimit");

            SRC_TIME                    = dictionary.getFieldByName(wSrcTime);
            ACTIVITY_TIME               = dictionary.getFieldByName(wActivityTime);
            SECURITY_STATUS             = dictionary.getFieldByName(wSecurityStatus);
            SECURITY_STATUS_QUAL        = dictionary.getFieldByName(wSecStatusQual);
            SECURITY_STATUS_TIME        = dictionary.getFieldByName(wSecurityStatusTime);
            SECURITY_STATUS_ORIG        = dictionary.getFieldByName(wSecurityStatusOrig);
            SHORT_SALE_CIRCUIT_BREAKER  = dictionary.getFieldByName(wShortSaleCircuitBreaker);
            SEQNUM                      = dictionary.getFieldByName(wSeqNum);
            REASON                      = dictionary.getFieldByName(wReason);
            LULDINDICATOR               = dictionary.getFieldByName(wLuldIndicator);
            LULDTIME                    = dictionary.getFieldByName(wLuldTime);
            LULDHIGHLIMIT               = dictionary.getFieldByName(wLuldHighLimit);
            LULDLOWLIMIT                = dictionary.getFieldByName(wLuldLowLimit);

            MAX_FID = dictionary.getMaxFid();
            mInitialised = true;
        }

        public static int getMaxFid()
        {
            return MAX_FID;
        }

        public static bool isSet()
        {
            return mInitialised;
        }

        public static void reset ()
        {
            if (MamdaCommonFields.isSet())
            {
                MamdaCommonFields.reset();
            }
            mInitialised                = false;
            MAX_FID                 = 0;
            SRC_TIME                = null;
            ACTIVITY_TIME           = null;
            SECURITY_STATUS         = null;
            SECURITY_STATUS_QUAL    = null;
            SECURITY_STATUS_TIME    = null;
            SECURITY_STATUS_ORIG    = null;
            SHORT_SALE_CIRCUIT_BREAKER = null;
            SEQNUM                  = null;
            REASON                  = null;
            LULDINDICATOR           = null;
            LULDTIME                = null;
            LULDHIGHLIMIT          = null;
            LULDLOWLIMIT           = null;
        }

        public static MamaFieldDescriptor  SRC_TIME               = null;
        public static MamaFieldDescriptor  ACTIVITY_TIME          = null;
        public static MamaFieldDescriptor  SECURITY_STATUS        = null;
        public static MamaFieldDescriptor  SECURITY_STATUS_QUAL   = null;
        public static MamaFieldDescriptor  SECURITY_STATUS_TIME   = null;
        public static MamaFieldDescriptor  SECURITY_STATUS_ORIG   = null;
        public static MamaFieldDescriptor  SHORT_SALE_CIRCUIT_BREAKER = null;
        public static MamaFieldDescriptor  SEQNUM                 = null;
        public static MamaFieldDescriptor  REASON                 = null;
        public static MamaFieldDescriptor  LULDINDICATOR          = null;
        public static MamaFieldDescriptor  LULDTIME               = null;
        public static MamaFieldDescriptor  LULDHIGHLIMIT          = null;
        public static MamaFieldDescriptor  LULDLOWLIMIT           = null;
        public static int  MAX_FID = 0;
        private static bool mInitialised = false;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
