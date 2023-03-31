---
title: cs/MamdaSecurityStatus.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaSecurityStatus.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html)** <br>Security Status values  |




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

namespace Wombat
{
    public class MamdaSecurityStatus
    {
        public enum mamdaSecurityStatus
        {
            SECURITY_STATUS_NONE               = 0,
            SECURITY_STATUS_NORMAL             = 1,
            SECURITY_STATUS_CLOSED             = 2,
            SECURITY_STATUS_HALTED             = 3,
            SECURITY_STATUS_NOT_EXIST          = 4,
            SECURITY_STATUS_DELETED            = 5,
            SECURITY_STATUS_AUCTION            = 6,
            SECURITY_STATUS_CROSSING           = 7,
            SECURITY_STATUS_SUSPENDED          = 8,
            SECURITY_STATUS_AT_LAST            = 9,
            SECURITY_STATUS_INACTIVE           = 10,
            SECURITY_STATUS_UNKNOWN            = 99
        }

        private static string SECURITY_STATUS_STR_NONE        = "None";
        private static string SECURITY_STATUS_STR_NORMAL      = "Normal";
        private static string SECURITY_STATUS_STR_CLOSED      = "Closed";
        private static string SECURITY_STATUS_STR_HALTED      = "Halted";
        private static string SECURITY_STATUS_STR_NOT_EXIST   = "NotExists";
        private static string SECURITY_STATUS_STR_DELETED     = "Deleted";
        private static string SECURITY_STATUS_STR_AUCTION     = "Auction";
        private static string SECURITY_STATUS_STR_CROSSING    = "Crossing";
        private static string SECURITY_STATUS_STR_SUSPENDED   = "Suspended";
        private static string SECURITY_STATUS_STR_AT_LAST     = "AtLast";
        private static string SECURITY_STATUS_STR_INACTIVE    = "Inactive";
        private static string SECURITY_STATUS_STR_UNKNOWN     = "Unknown";

        public static string toString (MamdaSecurityStatus.mamdaSecurityStatus securityStatus)
        {
            switch (securityStatus)
            {
                case  mamdaSecurityStatus.SECURITY_STATUS_NONE:         return SECURITY_STATUS_STR_NONE;
                case  mamdaSecurityStatus.SECURITY_STATUS_NORMAL:       return SECURITY_STATUS_STR_NORMAL;
                case  mamdaSecurityStatus.SECURITY_STATUS_CLOSED:       return SECURITY_STATUS_STR_CLOSED;
                case  mamdaSecurityStatus.SECURITY_STATUS_HALTED:       return SECURITY_STATUS_STR_HALTED;
                case  mamdaSecurityStatus.SECURITY_STATUS_NOT_EXIST:    return SECURITY_STATUS_STR_NOT_EXIST;
                case  mamdaSecurityStatus.SECURITY_STATUS_DELETED:      return SECURITY_STATUS_STR_DELETED;
                case  mamdaSecurityStatus.SECURITY_STATUS_AUCTION:      return SECURITY_STATUS_STR_AUCTION;
                case  mamdaSecurityStatus.SECURITY_STATUS_CROSSING:     return SECURITY_STATUS_STR_CROSSING;
                case  mamdaSecurityStatus.SECURITY_STATUS_SUSPENDED:    return SECURITY_STATUS_STR_SUSPENDED;
                case  mamdaSecurityStatus.SECURITY_STATUS_AT_LAST:      return SECURITY_STATUS_STR_AT_LAST;
                case  mamdaSecurityStatus.SECURITY_STATUS_INACTIVE:     return SECURITY_STATUS_STR_INACTIVE;
                case  mamdaSecurityStatus.SECURITY_STATUS_UNKNOWN:
                default:
                    return "Unknown";
            }
        }

        public static MamdaSecurityStatus.mamdaSecurityStatus mamdaSecurityStatusFromString (string securityStatus)
        {
            if (securityStatus == null)
            {
                return mamdaSecurityStatus.SECURITY_STATUS_UNKNOWN;
            }

            if (securityStatus == SECURITY_STATUS_STR_NONE)
                return mamdaSecurityStatus.SECURITY_STATUS_NONE;
            if (securityStatus == SECURITY_STATUS_STR_NORMAL)
                return mamdaSecurityStatus.SECURITY_STATUS_NORMAL;
            if (securityStatus == SECURITY_STATUS_STR_CLOSED)
                return mamdaSecurityStatus.SECURITY_STATUS_CLOSED;
            if (securityStatus == SECURITY_STATUS_STR_HALTED)
                return mamdaSecurityStatus.SECURITY_STATUS_HALTED;
            if (securityStatus == SECURITY_STATUS_STR_NOT_EXIST)
                return mamdaSecurityStatus.SECURITY_STATUS_NOT_EXIST;
            if (securityStatus == SECURITY_STATUS_STR_DELETED)
                return mamdaSecurityStatus.SECURITY_STATUS_DELETED;
            if (securityStatus == SECURITY_STATUS_STR_AUCTION)
                return mamdaSecurityStatus.SECURITY_STATUS_AUCTION;
            if (securityStatus == SECURITY_STATUS_STR_CROSSING)
                return mamdaSecurityStatus.SECURITY_STATUS_CROSSING;
            if (securityStatus == SECURITY_STATUS_STR_SUSPENDED)
                return mamdaSecurityStatus.SECURITY_STATUS_SUSPENDED;
            if (securityStatus == SECURITY_STATUS_STR_AT_LAST)
                return mamdaSecurityStatus.SECURITY_STATUS_AT_LAST;
            if (securityStatus == SECURITY_STATUS_STR_INACTIVE)
                return mamdaSecurityStatus.SECURITY_STATUS_INACTIVE;
            if (securityStatus == SECURITY_STATUS_STR_UNKNOWN)
                return mamdaSecurityStatus.SECURITY_STATUS_UNKNOWN;

            if (securityStatus == "0")
                return mamdaSecurityStatus.SECURITY_STATUS_NONE;
            if (securityStatus == "1")
                return mamdaSecurityStatus.SECURITY_STATUS_NORMAL;
            if (securityStatus == "2")
                return mamdaSecurityStatus.SECURITY_STATUS_CLOSED;
            if (securityStatus == "3")
                return mamdaSecurityStatus.SECURITY_STATUS_HALTED;
            if (securityStatus == "4")
                return mamdaSecurityStatus.SECURITY_STATUS_NOT_EXIST;
            if (securityStatus == "5")
                return mamdaSecurityStatus.SECURITY_STATUS_DELETED;
            if (securityStatus == "6")
                return mamdaSecurityStatus.SECURITY_STATUS_AUCTION;
            if (securityStatus == "7")
                return mamdaSecurityStatus.SECURITY_STATUS_CROSSING;
            if (securityStatus == "8")
                return mamdaSecurityStatus.SECURITY_STATUS_SUSPENDED;
            if (securityStatus == "9")
                return mamdaSecurityStatus.SECURITY_STATUS_AT_LAST;
            if (securityStatus == "10")
                return mamdaSecurityStatus.SECURITY_STATUS_INACTIVE;
            if (securityStatus == "99")
                return mamdaSecurityStatus.SECURITY_STATUS_UNKNOWN;

            return mamdaSecurityStatus.SECURITY_STATUS_UNKNOWN;
        }
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
