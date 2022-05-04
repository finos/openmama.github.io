---
title: mama/MamaMsgStatus.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaMsgStatus.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaMsgStatus](classcom_1_1wombat_1_1mama_1_1MamaMsgStatus.html)**  |




## Source code

```java
/* $Id:
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

package com.wombat.mama;

public class MamaMsgStatus
{
    // Message Status
    //

    public static final short STATUS_OK = 0;

    public static final short STATUS_LINE_DOWN = 1;

    public static final short STATUS_NO_SUBSCRIBERS = 2;

    public static final short STATUS_BAD_SYMBOL = 3;

    public static final short STATUS_EXPIRED = 4;

    public static final short STATUS_TIMEOUT = 5;

    public static final short STATUS_MISC = 6;

    public static final short STATUS_STALE = 7;

    public static final short STATUS_TIBRV_STATUS = 8;

    public static final short STATUS_PLATFORM_STATUS = 8;

    public static final short STATUS_NOT_ENTITLED = 9;

    public static final short STATUS_NOT_FOUND = 10;

    public static final short STATUS_POSSIBLY_STALE = 11;

    public static final short STATUS_NOT_PERMISSIONED = 12;

    public static final short STATUS_TOPIC_CHANGE = 13;

    public static final short STATUS_BANDWIDTH_EXCEEDED = 14;

    public static final short STATUS_DUPLICATE = 15;

    public static final short STATUS_DELETE = 17;


    public static final short STATUS_EXCEPTION = 999;

    public static int statusForMsg( final MamaMsg msg )
    {
        try
        {
            return msg.getI32 ( MamaReservedFields.MsgStatus.getName(),
                                MamaReservedFields.MsgStatus.getId() );
        }
        catch( Exception e )
        {
            // no status available.
            return MamaMsgStatus.STATUS_NOT_FOUND;
        }
    }

    public static  String stringForStatus( final MamaMsg msg )
    {
        return stringForStatus( statusForMsg( msg ) ) ;
    }

    public  static String stringForStatus( final int type )
    {
        switch ( type )
        {
        case STATUS_OK:                 return "OK";
        case STATUS_LINE_DOWN:          return "LINE_DOWN";
        case STATUS_NO_SUBSCRIBERS:     return "NO_SUBSCRIBERS";
        case STATUS_BAD_SYMBOL:         return "BAD_SYMBOL";
        case STATUS_EXPIRED:            return "EXPIRED";
        case STATUS_TIMEOUT:            return "TIMEOUT";
        case STATUS_MISC:               return "MISC";
        case STATUS_STALE:              return "STALE";
        case STATUS_TIBRV_STATUS:       return "PLATFORM_SPECIFIC_STATUS";
        case STATUS_NOT_ENTITLED:       return "NOT_ENTITLED";
        case STATUS_NOT_FOUND:          return "NOT_FOUND";
        case STATUS_POSSIBLY_STALE:     return "POSSIBLY_STALE";
        case STATUS_NOT_PERMISSIONED:   return "NOT_PERMISSIONED";
        case STATUS_TOPIC_CHANGE:       return "TOPIC_CHANGE";
        case STATUS_BANDWIDTH_EXCEEDED: return "BANDWIDTH_EXCEEDED";
        case STATUS_DUPLICATE:          return "DUPLICATE";
        case STATUS_DELETE:             return "DELETE";
        case STATUS_EXCEPTION:          return "EXCEPTION PROCESSING MSG";
        default: return "UNKNOWN";
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
