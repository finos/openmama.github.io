---
title: mamda/MamdaErrorCode.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaErrorCode.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaErrorCode](classcom_1_1wombat_1_1mamda_1_1MamdaErrorCode.html)**  |




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

import com.wombat.mama.MamaMsgStatus;
import com.wombat.mama.MamaStatus;

public class MamdaErrorCode
{
    public static final short  MAMDA_NO_ERROR = 0;   // never sent

    public static final short MAMDA_ERROR_LINE_DOWN = 1;

    public static final short MAMDA_ERROR_NO_SUBSCRIBERS = 2;

    public static final short MAMDA_ERROR_BAD_SYMBOL = 3;

    public static final short MAMDA_ERROR_EXPIRED = 4;

    public static final short MAMDA_ERROR_TIMEOUT = 5;

    public static final short MAMDA_ERROR_MISC = 6;

    public static final short MAMDA_ERROR_STALE = 7;

    public static final short MAMDA_ERROR_PLATFORM_STATUS = 8;

    public static final short MAMDA_ERROR_NOT_ENTITLED = 9;

    public static final short MAMDA_ERROR_NOT_FOUND = 10;

    public static final short MAMDA_ERROR_POSSIBLY_STALE = 11;

    public static final short MAMDA_ERROR_NOT_PERMISSIONED = 12;

    public static final short MAMDA_ERROR_TOPIC_CHANGE = 13;

    public static final short MAMDA_ERROR_BANDWIDTH_EXCEEDED = 14;

    public static final short MAMDA_ERROR_DELETE = 17;

    public static final short MAMDA_ERROR_EXCEPTION = 999;


    public  static String stringForMamdaError( final int type )
    {
        switch ( type )
        {
        case MAMDA_NO_ERROR:                 return "OK";
        case MAMDA_ERROR_LINE_DOWN:          return "LINE_DOWN";
        case MAMDA_ERROR_NO_SUBSCRIBERS:     return "NO_SUBSCRIBERS";
        case MAMDA_ERROR_BAD_SYMBOL:         return "BAD_SYMBOL";
        case MAMDA_ERROR_EXPIRED:            return "EXPIRED";
        case MAMDA_ERROR_TIMEOUT:            return "TIMEOUT";
        case MAMDA_ERROR_MISC:               return "MISC";
        case MAMDA_ERROR_STALE:              return "STALE";
        case MAMDA_ERROR_PLATFORM_STATUS:    return "PLATFORM_SPECIFIC_MAMDA_ERROR";
        case MAMDA_ERROR_NOT_ENTITLED:       return "NOT_ENTITLED";
        case MAMDA_ERROR_NOT_FOUND:          return "NOT_FOUND";
        case MAMDA_ERROR_POSSIBLY_STALE:     return "POSSIBLY_STALE";
        case MAMDA_ERROR_NOT_PERMISSIONED:   return "NOT_PERMISSIONED";
        case MAMDA_ERROR_TOPIC_CHANGE:       return "TOPIC_CHANGE";
        case MAMDA_ERROR_BANDWIDTH_EXCEEDED: return "BANDWIDTH_EXCEEDED";
        case MAMDA_ERROR_EXCEPTION:          return "EXCEPTION PROCESSING MESSAGE";
        case MAMDA_ERROR_DELETE:          return "MESSAGE TYPE DELETE";
        default: return "UNKNOWN";
        }
    }

    @Deprecated public static short codeForMamaMsgStatus (short wombatStatus)
    {
        switch (wombatStatus)
        {
        case MamaMsgStatus.STATUS_OK:                   return MAMDA_NO_ERROR;
        case MamaMsgStatus.STATUS_LINE_DOWN:            return MAMDA_ERROR_LINE_DOWN;
        case MamaMsgStatus.STATUS_NO_SUBSCRIBERS:       return MAMDA_ERROR_NO_SUBSCRIBERS;
        case MamaMsgStatus.STATUS_BAD_SYMBOL:           return MAMDA_ERROR_BAD_SYMBOL;
        case MamaMsgStatus.STATUS_EXPIRED:              return MAMDA_ERROR_EXPIRED;
        case MamaMsgStatus.STATUS_TIMEOUT:              return MAMDA_ERROR_TIMEOUT;
        case MamaMsgStatus.STATUS_MISC:                 return MAMDA_ERROR_MISC;
        case MamaMsgStatus.STATUS_STALE:                return MAMDA_ERROR_STALE;
        case MamaMsgStatus.STATUS_PLATFORM_STATUS:      return MAMDA_ERROR_PLATFORM_STATUS;
        case MamaMsgStatus.STATUS_NOT_ENTITLED:         return MAMDA_ERROR_NOT_ENTITLED;
        case MamaMsgStatus.STATUS_NOT_FOUND:            return MAMDA_ERROR_NOT_FOUND;
        case MamaMsgStatus.STATUS_POSSIBLY_STALE:       return MAMDA_ERROR_POSSIBLY_STALE;
        case MamaMsgStatus.STATUS_NOT_PERMISSIONED:     return MAMDA_ERROR_NOT_PERMISSIONED;
        case MamaMsgStatus.STATUS_TOPIC_CHANGE:         return MAMDA_ERROR_TOPIC_CHANGE;
        case MamaMsgStatus.STATUS_BANDWIDTH_EXCEEDED:   return MAMDA_ERROR_BANDWIDTH_EXCEEDED;
        case MamaMsgStatus.STATUS_EXCEPTION:            return MAMDA_ERROR_EXCEPTION;
        case MamaMsgStatus.STATUS_DELETE:               return MAMDA_ERROR_DELETE;
        }

        return -1;
    }

    public static short codeForMamaStatus (short wombatStatus)
    {
        switch (wombatStatus)
        {

        case MamaStatus.MAMA_STATUS_OK:                 return MAMDA_NO_ERROR;
        case MamaStatus.MAMA_STATUS_NO_SUBSCRIBERS:     return MAMDA_ERROR_NO_SUBSCRIBERS;
        case MamaStatus.MAMA_STATUS_BAD_SYMBOL:         return MAMDA_ERROR_BAD_SYMBOL;
        case MamaStatus.MAMA_STATUS_EXPIRED:            return MAMDA_ERROR_EXPIRED;
        case MamaStatus.MAMA_STATUS_TIMEOUT:            return MAMDA_ERROR_TIMEOUT;
        case MamaStatus.MAMA_STATUS_PLATFORM:           return MAMDA_ERROR_PLATFORM_STATUS;
        case MamaStatus.MAMA_STATUS_NOT_ENTITLED:       return MAMDA_ERROR_NOT_ENTITLED;
        case MamaStatus.MAMA_STATUS_NOT_FOUND:          return MAMDA_ERROR_NOT_FOUND;
        case MamaStatus.MAMA_STATUS_NOT_PERMISSIONED:   return MAMDA_ERROR_NOT_PERMISSIONED;
        case MamaStatus.MAMA_STATUS_BANDWIDTH_EXCEEDED: return MAMDA_ERROR_BANDWIDTH_EXCEEDED;
        case MamaStatus.MAMA_STATUS_DELETE:             return MAMDA_ERROR_DELETE;
        }

        return -1;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
