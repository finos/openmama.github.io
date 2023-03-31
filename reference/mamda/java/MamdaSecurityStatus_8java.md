---
title: mamda/MamdaSecurityStatus.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaSecurityStatus.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaSecurityStatus](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatus.html)**  |




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

public class MamdaSecurityStatus
{
    public static final short SECURITY_STATUS_NONE               = 0;
    public static final short SECURITY_STATUS_NORMAL             = 1;
    public static final short SECURITY_STATUS_CLOSED             = 2;
    public static final short SECURITY_STATUS_HALTED             = 3;
    public static final short SECURITY_STATUS_NOT_EXIST          = 4;
    public static final short SECURITY_STATUS_DELETED            = 5;
    public static final short SECURITY_STATUS_AUCTION            = 6;
    public static final short SECURITY_STATUS_CROSSING           = 7;
    public static final short SECURITY_STATUS_SUSPENDED          = 8;
    public static final short SECURITY_STATUS_AT_LAST            = 9;
    public static final short SECURITY_STATUS_INACTIVE           = 10;
    public static final short SECURITY_STATUS_UNKNOWN            = 99;
    
    //Only used internally
    private static final String SECURITY_STATUS_STR_NONE        = "None";
    private static final String SECURITY_STATUS_STR_NORMAL      = "Normal";
    private static final String SECURITY_STATUS_STR_CLOSED      = "Closed";
    private static final String SECURITY_STATUS_STR_HALTED      = "Halted";
    private static final String SECURITY_STATUS_STR_NOT_EXIST   = "NotExists";
    private static final String SECURITY_STATUS_STR_DELETED     = "Deleted";
    private static final String SECURITY_STATUS_STR_AUCTION     = "Auction";
    private static final String SECURITY_STATUS_STR_CROSSING    = "Crossing";
    private static final String SECURITY_STATUS_STR_SUSPENDED   = "Suspended";
    private static final String SECURITY_STATUS_STR_AT_LAST     = "AtLast";
    private static final String SECURITY_STATUS_STR_INACTIVE    = "Inactive";
    private static final String SECURITY_STATUS_STR_UNKNOWN     = "Unknown";

    public static String toString (short securityStatus)
    {
        switch (securityStatus)
        {
            case  SECURITY_STATUS_NONE:             return SECURITY_STATUS_STR_NONE;
            case  SECURITY_STATUS_NORMAL:           return SECURITY_STATUS_STR_NORMAL;
            case  SECURITY_STATUS_CLOSED:           return SECURITY_STATUS_STR_CLOSED;
            case  SECURITY_STATUS_HALTED:           return SECURITY_STATUS_STR_HALTED;
            case  SECURITY_STATUS_NOT_EXIST:        return SECURITY_STATUS_STR_NOT_EXIST;
            case  SECURITY_STATUS_DELETED:          return SECURITY_STATUS_STR_DELETED;
            case  SECURITY_STATUS_AUCTION:          return SECURITY_STATUS_STR_AUCTION;
            case  SECURITY_STATUS_CROSSING:         return SECURITY_STATUS_STR_CROSSING;
            case  SECURITY_STATUS_SUSPENDED:        return SECURITY_STATUS_STR_SUSPENDED;
            case  SECURITY_STATUS_AT_LAST:          return SECURITY_STATUS_STR_AT_LAST;
            case  SECURITY_STATUS_INACTIVE:         return SECURITY_STATUS_STR_INACTIVE;
            case  SECURITY_STATUS_UNKNOWN:
            default:
                return "Unknown";
        }
    }

    public static short mamdaSecurityStatusFromString (String securityStatus)
    {
        if (securityStatus == null)
        {
            return SECURITY_STATUS_UNKNOWN;
        }

        if (securityStatus.equals (SECURITY_STATUS_STR_NONE))
            return SECURITY_STATUS_NONE;
        if (securityStatus.equals (SECURITY_STATUS_STR_NORMAL))
            return SECURITY_STATUS_NORMAL;
        if (securityStatus.equals (SECURITY_STATUS_STR_CLOSED))
            return SECURITY_STATUS_CLOSED;
        if (securityStatus.equals (SECURITY_STATUS_STR_HALTED))
            return SECURITY_STATUS_HALTED;
        if (securityStatus.equals (SECURITY_STATUS_STR_NOT_EXIST))
            return SECURITY_STATUS_NOT_EXIST;
        if (securityStatus.equals (SECURITY_STATUS_STR_DELETED))
            return SECURITY_STATUS_DELETED;
        if (securityStatus.equals (SECURITY_STATUS_STR_AUCTION))
            return SECURITY_STATUS_AUCTION;
        if (securityStatus.equals (SECURITY_STATUS_STR_CROSSING))
            return SECURITY_STATUS_CROSSING;
        if (securityStatus.equals (SECURITY_STATUS_STR_SUSPENDED))
            return SECURITY_STATUS_SUSPENDED;
        if (securityStatus.equals (SECURITY_STATUS_STR_AT_LAST))
            return SECURITY_STATUS_AT_LAST;
        if (securityStatus.equals (SECURITY_STATUS_STR_INACTIVE))
            return SECURITY_STATUS_INACTIVE;
        if (securityStatus.equals (SECURITY_STATUS_STR_UNKNOWN))
            return SECURITY_STATUS_UNKNOWN;

        //A misconfigured FH might send numbers as strings
        if (securityStatus.equals ("0"))
            return SECURITY_STATUS_NONE;
        if (securityStatus.equals ("1"))
            return SECURITY_STATUS_NORMAL;
        if (securityStatus.equals ("2"))
            return SECURITY_STATUS_CLOSED;
        if (securityStatus.equals ("3"))
            return SECURITY_STATUS_HALTED;
        if (securityStatus.equals ("4"))
            return SECURITY_STATUS_NOT_EXIST;
        if (securityStatus.equals ("5"))
            return SECURITY_STATUS_DELETED;
        if (securityStatus.equals ("6"))
            return SECURITY_STATUS_AUCTION;
        if (securityStatus.equals ("7"))
            return SECURITY_STATUS_CROSSING;
        if (securityStatus.equals ("8"))
            return SECURITY_STATUS_SUSPENDED;
        if (securityStatus.equals ("9"))
            return SECURITY_STATUS_AT_LAST;
        if (securityStatus.equals ("10"))
            return SECURITY_STATUS_INACTIVE;
        if (securityStatus.equals ("99"))
            return SECURITY_STATUS_UNKNOWN;

        return SECURITY_STATUS_UNKNOWN;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
