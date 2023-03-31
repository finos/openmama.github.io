---
title: mama/MamaReservedFields.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaReservedFields.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaReservedFields](classcom_1_1wombat_1_1mama_1_1MamaReservedFields.html)**  |




## Source code

```java
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

package com.wombat.mama;

public class MamaReservedFields
{
    public static final MamaReservedFields MsgType =
         new MamaReservedFields( "MdMsgType", 1);
    public static final MamaReservedFields MsgStatus =
         new MamaReservedFields( "MdMsgStatus", 2 );
    public static final MamaReservedFields FieldIndex =
         new MamaReservedFields( "MdFieldIndex", 3 );
    public static final MamaReservedFields MsgFields =
       new MamaReservedFields( "MdMsgFields", 4 );
    public static final MamaReservedFields SubscMsgTypeOld =
        new MamaReservedFields( "MdSubscType", 5 );
    public static final MamaReservedFields SubscMsgSubjectOld =
         new MamaReservedFields( "MdSubscSubject", 6 );
    public static final MamaReservedFields MsgNum =
         new MamaReservedFields( "MdMsgNum", 7 );
    public static final MamaReservedFields MsgTotal =
         new MamaReservedFields( "MdMsgTotal", 8 );
    public static final MamaReservedFields TibrvResult =
        new MamaReservedFields( "MdTibrvResult", 9 );
    public static final MamaReservedFields SeqNum =
        new MamaReservedFields( "MdSeqNum", 10);
    public static final MamaReservedFields FeedName =
        new MamaReservedFields( "MdFeedName", 11);
    public static final MamaReservedFields FeedHost =
        new MamaReservedFields( "MdFeedHost", 12);
    public static final MamaReservedFields SyncPattern =
        new MamaReservedFields( "MdSyncPattern", 14 );

    public static final MamaReservedFields ItemSeqNum =
        new MamaReservedFields ("MdItemSeq", 15);

    public static final MamaReservedFields SendTime =
        new MamaReservedFields ("MamaSendTime", 16);

    public static final MamaReservedFields AppDataType =
        new MamaReservedFields ("MamaAppDataType", 17);

    public static final MamaReservedFields AppMsgType =
        new MamaReservedFields ("MamaAppMsgType", 18);

    public static final MamaReservedFields SenderId =
        new MamaReservedFields ("MamaSenderId", 20);

    public static final MamaReservedFields MsgQualifier =
        new MamaReservedFields ("wMsgQual", 21);

    /* For Elvin, we put the "source" as a separate field (it's a
 * doublecheck for the other field whose *name* acts as efficient
 * content-based filter). */
    public static final MamaReservedFields ElvinSource =
        new MamaReservedFields( "MdElvinSource", 55 );
    public static final MamaReservedFields ElvinSourceOld =
        new MamaReservedFields( "MdSubscSource", 64 );

    public static MamaReservedFields SubscriptionType =
        new MamaReservedFields( "MdSubscriptionType", 60);

    public static final MamaReservedFields SubscMsgType =
        new MamaReservedFields( "MdSubscMsgType", 61 );

    public static final MamaReservedFields SubscSourceHost =
        new MamaReservedFields( "MdSubscSourceHost", 63 );

    public static MamaReservedFields SubscSourceApp =
        new MamaReservedFields( "MdSubscSourceApp", 64);

    public static final MamaReservedFields SubscSourceUser =
        new MamaReservedFields( "MdSubscSourceUser", 65 );

    public static final MamaReservedFields SubscSymbol =
        new MamaReservedFields( "MdSubscSymbol", 71 );

    public static final MamaReservedFields SymbolList =
        new MamaReservedFields( "MamaSymbolList", 81 );

    public static final MamaReservedFields EntitleCode =
        new MamaReservedFields ( "wEntitleCode", 496);

    private final String name;
    private final int id;
    public static final short MAX_RESERVED_FID = 100;

    public MamaReservedFields( String name, int id )
    {
        this.name = name;
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public int getId()
    {
        return id;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
