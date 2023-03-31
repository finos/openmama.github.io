---
title: mama/MamaMsgQualifier.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaMsgQualifier.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mama](namespacecom_1_1wombat_1_1mama.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mama::MamaMsgQualifier](classcom_1_1wombat_1_1mama_1_1MamaMsgQualifier.html)**  |




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

public class MamaMsgQualifier
{
    public static final MamaMsgQualifier POSSIBLY_DUPLICATE   = new MamaMsgQualifier ((short) 0x0001);

    public static final MamaMsgQualifier DEFINITELY_DUPLICATE = new MamaMsgQualifier ((short) 0x0002);

    public static final MamaMsgQualifier POSSIBLY_DELAYED     = new MamaMsgQualifier ((short) 0x0004);

    public static final MamaMsgQualifier DEFINITELY_DELAYED   = new MamaMsgQualifier ((short) 0x0008);

    public static final MamaMsgQualifier OUT_OF_SEQUENCE      = new MamaMsgQualifier ((short) 0x0010);

    public static final MamaMsgQualifier INVALID              = new MamaMsgQualifier ((short) 0x1000);

    private short myValue = 0x0000;

    public MamaMsgQualifier()
    {
        myValue = INVALID.myValue;
    }

    MamaMsgQualifier (short value)
    {
        myValue = value;
    }

    public MamaMsgQualifier (MamaMsgQualifier qualifierFilter)
    {
        myValue = qualifierFilter.myValue;
    }

    public boolean getIsDefinitelyDuplicate ()
    {
        return (myValue & INVALID.myValue) == 0 && (myValue & DEFINITELY_DUPLICATE.myValue) != 0;
    }

    public boolean getIsPossiblyDuplicate ()
    {
        return (myValue & INVALID.myValue) == 0 && (myValue & POSSIBLY_DUPLICATE.myValue) != 0;
    }

    public boolean getIsPossiblyDelayed ()
    {
        return (myValue & INVALID.myValue) == 0 && (myValue & POSSIBLY_DELAYED.myValue) != 0;
    }

    public boolean getIsDefinitelyDelayed ()
    {
        return (myValue & INVALID.myValue) == 0 && (myValue & DEFINITELY_DELAYED.myValue) != 0;
    }

    public boolean getIsOutOfSequence ()
    {
        return (myValue & INVALID.myValue) == 0 && (myValue & OUT_OF_SEQUENCE.myValue) != 0;
    }

    public boolean isValid ()
    {
        return (myValue & INVALID.myValue) == 0;
    }
    public void setIsDefinitelyDuplicate (boolean value)
    {
        if (value)
            setBits (DEFINITELY_DUPLICATE.myValue);
        else
            unsetBits (DEFINITELY_DUPLICATE.myValue);
    }

    public void setIsPossiblyDuplicate (boolean value)
    {
        if (value)
            setBits (POSSIBLY_DUPLICATE.myValue);
        else
            unsetBits (POSSIBLY_DUPLICATE.myValue);
    }

    public void setIsPossiblyDelayed (boolean value)
    {
        if (value)
            setBits (POSSIBLY_DELAYED.myValue);
        else
            unsetBits (POSSIBLY_DELAYED.myValue);
    }

    public void setIsDefinitelyDelayed (boolean value)
    {
        if (value)
            setBits (DEFINITELY_DELAYED.myValue);
        else
            unsetBits (DEFINITELY_DELAYED.myValue);
    }

    public void setOutOfSequence (boolean value)
    {
        if (value)
            setBits (OUT_OF_SEQUENCE.myValue);
        else
            unsetBits (OUT_OF_SEQUENCE.myValue);
    }

    public void setInvalid (boolean value)
    {
        if (value)
            setBits (INVALID.myValue);
        else
            unsetBits (INVALID.myValue);
    }

    private void setBits (short bits)
    {
        myValue |= bits;
    }

    private void unsetBits (short bits)
    {
        myValue &= ~bits;
    }

    public boolean filter (short value)
    {
        return 0 != (myValue & value);
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:46 +0100
