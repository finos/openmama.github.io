---
title: mama/MamaMdMsgType.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaMdMsgType.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaMdMsgType](classcom_1_1wombat_1_1mama_1_1MamaMdMsgType.html)**  |




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

public final class MamaMdMsgType
{
    private final String myStringValue;
    private final int    myValue;

    public static final int           CANCEL_VALUE = 2;
    public static final MamaMdMsgType CANCEL   = new MamaMdMsgType
                         (valueToString (CANCEL_VALUE), 
                          CANCEL_VALUE);

    public static final int           ERROR_VALUE = 3;
    public static final MamaMdMsgType ERROR = new MamaMdMsgType
                         (valueToString (ERROR_VALUE), 
                          ERROR_VALUE);

    public static final int           CORRECTION_VALUE = 4;
    public static final MamaMdMsgType CORRECTION = new MamaMdMsgType
                         (valueToString (CORRECTION_VALUE), 
                          CORRECTION_VALUE);

    public static final int           CLOSING_VALUE = 5;
    public static final MamaMdMsgType CLOSING = new MamaMdMsgType
                         (valueToString (CLOSING_VALUE), 
                          CLOSING_VALUE);

    public static final int           SYMBOL_ACTION_VALUE = 8;
    public static final MamaMdMsgType SYMBOL_ACTION = new MamaMdMsgType
                         (valueToString (SYMBOL_ACTION_VALUE), 
                          SYMBOL_ACTION_VALUE);

    public static final int           PREOPENING_VALUE = 12;
    public static final MamaMdMsgType PREOPENING = new MamaMdMsgType
                         (valueToString (PREOPENING_VALUE), 
                          PREOPENING_VALUE);

    public static final int           QUOTE_VALUE = 13;
    public static final MamaMdMsgType QUOTE = new MamaMdMsgType
                         (valueToString (QUOTE_VALUE), 
                          QUOTE_VALUE);

    public static final int           TRADE_VALUE = 14;
    public static final MamaMdMsgType TRADE = new MamaMdMsgType
                         (valueToString (TRADE_VALUE), 
                          TRADE_VALUE);

    public static final int           BOOK_INITIAL_VALUE = 16;
    public static final MamaMdMsgType BOOK_INITIAL = new MamaMdMsgType
                         (valueToString (BOOK_INITIAL_VALUE),
                          BOOK_INITIAL_VALUE);

    public static final int           IMBALANCE_VALUE = 17;
    public static final MamaMdMsgType IMBALANCE = new MamaMdMsgType
                         (valueToString (IMBALANCE_VALUE),
                          IMBALANCE_VALUE);
    
    public static final int           SECURITY_STATUS_VALUE = 18;
    public static final MamaMdMsgType SECURITY_STATUS = new MamaMdMsgType
                         (valueToString (SECURITY_STATUS_VALUE),
                          SECURITY_STATUS_VALUE);

    public static final int           MISC_VALUE = 100;
    public static final MamaMdMsgType MISC = new MamaMdMsgType
                         (valueToString (MISC_VALUE), 
                          MISC_VALUE);

    /* No publicly created instances allowed */
    private MamaMdMsgType (String name, int value) 
    {
        myStringValue = name;
        myValue       = value;
    }

    public String toString ()
    {
        return myStringValue;
    }

    public int getValue ()
    {
        return myValue;
    }

    public boolean equals (MamaMdMsgType appDataType)
    {
        if (myValue==appDataType.myValue) return true;
        return false;
    }

    public static MamaMdMsgType typeForMsg (final MamaMsg msg)
    {
        short msgType = -1;
        
        msgType = msg.getU8 (MamaReservedFields.AppMsgType.getName(),
                             MamaReservedFields.AppMsgType.getId(),
                             (short)-1/*Default return value*/);

        return enumObjectForValue (msgType);
    }

    public static String stringForMsg (final MamaMsg msg)
    {
        return typeForMsg (msg).toString();
    }

    public static short compatMsgType (MamaMdMsgType mdMsgType)
    {
        int value  = mdMsgType.getValue();
        switch (value)
        {
            case CANCEL_VALUE:
                return MamaMsgType.TYPE_UPDATE;
            case ERROR_VALUE:
                return MamaMsgType.TYPE_ERROR;
            case CORRECTION_VALUE:
                return MamaMsgType.TYPE_CORRECTION;
            case CLOSING_VALUE:
                return MamaMsgType.TYPE_CLOSING;
            case PREOPENING_VALUE:
                return MamaMsgType.TYPE_PREOPENING;
            case QUOTE_VALUE:
                return MamaMsgType.TYPE_QUOTE;
            case TRADE_VALUE:
                return MamaMsgType.TYPE_TRADE;
            case BOOK_INITIAL_VALUE:
                return MamaMsgType.TYPE_BOOK_INITIAL;
            case MISC_VALUE:
                return MamaMsgType.TYPE_MISC;
            default:
                return MamaMsgType.TYPE_MISC;
        }
    }

    public static String valueToString (int value)
    {
        switch (value)
        {
            case CANCEL_VALUE:
                return "CANCEL";
            case ERROR_VALUE:
                return "ERROR";
            case CORRECTION_VALUE:
                return "CORRECTION";
            case CLOSING_VALUE:
                return "CLOSING";
            case SYMBOL_ACTION_VALUE:
                return "SYMBOL_ACTION";
            case PREOPENING_VALUE:
                return "PREOPENING";
            case QUOTE_VALUE:
                return "QUOTE";
            case TRADE_VALUE:
                return "TRADE";
            case BOOK_INITIAL_VALUE:
                return "BOOK_INITIAL";
            case IMBALANCE_VALUE:
                return "IMBALANCE";
            case SECURITY_STATUS_VALUE:
                return "SECURITY_STATUS";
            case MISC_VALUE:
                return "MISC";
            default:
                return "UNKNOWN";
        }
    }

    public static MamaMdMsgType enumObjectForValue (int value)
    {
        switch (value)
        {
            case CANCEL_VALUE:
                return CANCEL;
            case ERROR_VALUE:
                return ERROR;
            case CORRECTION_VALUE:
                return CORRECTION;
            case CLOSING_VALUE:
                return CLOSING;
            case SYMBOL_ACTION_VALUE:
                return SYMBOL_ACTION;
            case PREOPENING_VALUE:
                return PREOPENING;
            case QUOTE_VALUE:
                return QUOTE;
            case TRADE_VALUE:
                return TRADE;
            case BOOK_INITIAL_VALUE:
                return BOOK_INITIAL;
            case IMBALANCE_VALUE:
                return IMBALANCE;
            case SECURITY_STATUS_VALUE:
                return SECURITY_STATUS;
            case MISC_VALUE:
                return MISC;
            default:
                return null;
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
