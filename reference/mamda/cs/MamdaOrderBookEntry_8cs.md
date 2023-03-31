---
title: OrderBook/MamdaOrderBookEntry.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# OrderBook/MamdaOrderBookEntry.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderBookEntry](classWombat_1_1MamdaOrderBookEntry.html)** <br>[MamdaOrderBookEntry]() is a class that provides/implements order book functionality.  |




## Source code

```csharp
/* $Id: MamdaOrderBookEntry.cs,v 1.1.40.6 2012/08/24 16:12:13 clintonmcdowell Exp $
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
    public class MamdaOrderBookEntry
    {
        public MamdaOrderBookEntry()
        {
        }

        public MamdaOrderBookEntry(MamdaOrderBookEntry copy)
        {
            this.copy(copy);
        }

        public void copy(MamdaOrderBookEntry copy)
        {
            mId = copy.mId;
            mSize = copy.mSize;
            mAction = copy.mAction;
            mTime = copy.mTime;
        }

        public void setId(string id)
        {
            mId = id;
        }

        public void setSize(long size)
        {
            mSize = size;
        }

        public void setAction(Actions action)
        {
            mAction = action;
        }

        public void setTime(DateTime time)
        {
            mTime = time;
        }

        public void setDetails(MamdaOrderBookEntry copy)
        {
            mSize = copy.mSize;
            mTime = copy.mTime;
        }

        public string getId()
        {
            return mId;
        }

        public long getSize()
        {
            return mSize;
        }

        public Actions getAction ()
        {
            return mAction;
        }

        public DateTime getTime ()
        {
            return mTime;
        }

        public bool hasTime()
        {
            return mTime != DateTime.MinValue;
        }

        public void assertEqual(MamdaOrderBookEntry rhs)
        {
            if (mId != rhs.mId)
                throw new MamdaOrderBookException("entry IDs not equal");
            if (mSize != rhs.mSize)
                throw new MamdaOrderBookException("entry size not equal");
            if (mAction != rhs.mAction)
                throw new MamdaOrderBookException("entry action not equal");
            if (mTime != rhs.mTime)
                throw new MamdaOrderBookException("entry time not equal");
        }

        public bool equalId(string id)
        {
            return mId == id;
        }

        public static void setStrictChecking(bool strict)
        {
            mStrictChecking = strict;
        }

        public enum Actions : sbyte
        {
            Add     = (sbyte)'A',
            Update  = (sbyte)'U',
            Delete  = (sbyte)'D',
            Unknown = (sbyte)'Z'
        }


        #region Implementation details

        private string      mId         = "";
        private long        mSize       = 0;
        private Actions     mAction     = Actions.Add;
        private DateTime    mTime       = DateTime.MinValue;

        private static bool mStrictChecking = false;

        #endregion

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:18 +0100
