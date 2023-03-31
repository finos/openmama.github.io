---
title: orderbook/MamdaOrderBookEntryManager.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/MamdaOrderBookEntryManager.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::MamdaOrderBookEntryManager](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntryManager.html)**  |




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

package com.wombat.mamda.orderbook;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Iterator;

public class MamdaOrderBookEntryManager
{
    private HashMap mEntries = null;

    public MamdaOrderBookEntryManager (int  approxCount)
    {
        mEntries = new HashMap (approxCount);
    }

    public void clear ()
    {
        mEntries.clear ();
    }

    public void clear (String  symbol)
    {
        Iterator i = mEntries.entrySet ().iterator ();
        while (i.hasNext ())
        {
            String key            = (String) i.next ();
            MamdaOrderBookEntry e = (MamdaOrderBookEntry) mEntries.get (key);

            if (symbol.equals (e.getSymbol ()))
            {
                mEntries.remove (key);
            }
        }
    }

    public void addEntry (MamdaOrderBookEntry  entry)
    {
        addEntry (entry, entry.getId ());
    }

    public void addEntry (MamdaOrderBookEntry  entry,
                          String               entryId)
    {
        MamdaOrderBookEntry existEntry =
            (MamdaOrderBookEntry) mEntries.get (entryId);

        if (existEntry != null)
        {
            throw new MamdaOrderBookDuplicateEntryException (existEntry, entry);
        }
        mEntries.put (entryId, entry);
    }

    public MamdaOrderBookEntry findEntry (String       entryId,
                                          boolean      mustExist)
    {
        MamdaOrderBookEntry result =
            (MamdaOrderBookEntry) mEntries.get (entryId);
        if (mustExist && result == null)
            throw new MamdaOrderBookMissingEntryException (entryId);
        else
            return result;
    }

    public void removeEntry (String  entryId)
    {
        mEntries.remove (entryId);
    }

    void removeEntry (MamdaOrderBookEntry entry)
    {
        if (entry != null)
        {
            removeEntry (entry.getId ());
        }
    }

    void dump (OutputStream output)
    {
        PrintWriter out = new PrintWriter (output, true);
        out.println ("MamdaOrderBookEntryManager: dump:");
        Iterator i = mEntries.keySet ().iterator ();
        while (i.hasNext ())
        {
            String              key   = (String) i.next ();
            MamdaOrderBookEntry entry = (MamdaOrderBookEntry)mEntries.get(key);
            out.print   (key + ":");
            out.print   ("symbol="  + entry.getSymbol());
            out.print   (", price=" + entry.getPrice());
            out.print   (", side="  + entry.getSide());
            out.print   (", id="    + entry.getId());
            out.println (", size="  + entry.getSize());
        }
    }

    void dump ()
    {
        dump (System.out);
    }

}
```


-------------------------------

Updated on 2023-03-31 at 15:30:40 +0100
