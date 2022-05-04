---
title: mama/MamaMdDataType.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaMdDataType.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaMdDataType](classcom_1_1wombat_1_1mama_1_1MamaMdDataType.html)**  |




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

public final class MamaMdDataType
{
    private final String myStringValue;
    private final int    myValue;

    public static final int            STANDARD_VALUE = 0;
    public static final MamaMdDataType STANDARD   = new MamaMdDataType
                             (valueToString (STANDARD_VALUE), STANDARD_VALUE);

    public static final int            ORDER_BOOK_VALUE = 1;
    public static final MamaMdDataType ORDER_BOOK = new MamaMdDataType
                             (valueToString (ORDER_BOOK_VALUE), ORDER_BOOK_VALUE);

    public static final int            NEWS_STORY_VALUE = 2;
    public static final MamaMdDataType NEWS_STORY = new MamaMdDataType
                             (valueToString (NEWS_STORY_VALUE), NEWS_STORY_VALUE);

    public static final int            WORLDVIEW_VALUE = 3;
    public static final MamaMdDataType WORLDVIEW = new MamaMdDataType
                             (valueToString (WORLDVIEW_VALUE), WORLDVIEW_VALUE);
    
    public static final int            PROPERTY_VALUE = 4;
    public static final MamaMdDataType PROPERTY = new MamaMdDataType
                             (valueToString (PROPERTY_VALUE), PROPERTY_VALUE);

    public static final int            USAGE_LOG_VALUE = 5;
    public static final MamaMdDataType USAGE_LOG = new MamaMdDataType
                             (valueToString (USAGE_LOG_VALUE), USAGE_LOG_VALUE);

    public static final int            NEWS_QUERY_VALUE = 6;
    public static final MamaMdDataType NEWS_QUERY = new MamaMdDataType
                             (valueToString (NEWS_QUERY_VALUE), NEWS_QUERY_VALUE);

    public static final int            TEMPLATE_VALUE = 7;
    public static final MamaMdDataType TEMPLATE = new MamaMdDataType
                             (valueToString (TEMPLATE_VALUE), TEMPLATE_VALUE);
    /* No publicly created instances allowed */
    private MamaMdDataType (String name, int value)
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

    public boolean equals (MamaMdDataType appDataType)
    {
        if (myValue==appDataType.myValue) return true;
        return false;
    }

    public static String valueToString (int value)
    {
        switch (value)
        {
            case STANDARD_VALUE:
                return "STANDARD";
            case ORDER_BOOK_VALUE:
                return "ORDER_BOOK";
            case NEWS_STORY_VALUE:
                return "NEWS_STORY";
            case WORLDVIEW_VALUE:
                return "WORLDVIEW";
            case PROPERTY_VALUE:
                return "PROPERTY";
            case USAGE_LOG_VALUE:
                return "USAGE_LOG";
            case NEWS_QUERY_VALUE:
                return "NEWS_QUERY";
            case TEMPLATE_VALUE:
                return "TEMPLATE";
            default:
                return "UNKNOWN";
        }
    }

    public static MamaMdDataType enumObjectForValue (int value)
    {
        switch (value)
        {
            case STANDARD_VALUE:
                return STANDARD;
            case ORDER_BOOK_VALUE:
                return ORDER_BOOK;
            case NEWS_STORY_VALUE:
                return NEWS_STORY;
            case WORLDVIEW_VALUE:
                return WORLDVIEW;
            case PROPERTY_VALUE:
                return PROPERTY;
            case USAGE_LOG_VALUE:
                return USAGE_LOG;
            case NEWS_QUERY_VALUE:
                return NEWS_QUERY;
            case TEMPLATE_VALUE:
                return TEMPLATE;
            default:
                return null;
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100
