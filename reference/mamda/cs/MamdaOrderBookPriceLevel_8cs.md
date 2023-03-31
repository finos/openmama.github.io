---
title: OrderBook/MamdaOrderBookPriceLevel.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# OrderBook/MamdaOrderBookPriceLevel.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderBookPriceLevel](classWombat_1_1MamdaOrderBookPriceLevel.html)**  |




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
using System.Collections;

namespace Wombat
{
    public class MamdaOrderBookPriceLevel : IEnumerable // IEnumerable<MamdaOrderBookEntry> if C# 2.0
    {
        public MamdaOrderBookPriceLevel()
        {
        }

        public MamdaOrderBookPriceLevel(MamdaOrderBookPriceLevel copy)
        {
            mPrice      = copy.mPrice;
            mSize       = copy.mSize;
            mSizeChange = copy.mSizeChange;
            mNumEntries = copy.mNumEntries;
            mSide       = copy.mSide;
            mAction     = copy.mAction;
            mTime       = copy.mTime;

            for (int i = 0; i < copy.mEntries.Count; i++)
            {
                MamdaOrderBookEntry entry = new MamdaOrderBookEntry(
                    (MamdaOrderBookEntry)copy.mEntries[i]);
                mEntries.Add(entry);
            }
        }

        public void copy(MamdaOrderBookPriceLevel copy)
        {
            setPrice(copy.mPrice);
            setSize(copy.mSize);
            setSizeChange(copy.mSizeChange);
            setNumEntries(copy.mNumEntries);
            setSide(copy.mSide);
            setAction(copy.mAction);
            setTime(copy.mTime); // always deep copied

            for (int i = 0; i < copy.mEntries.Count; i++)
            {
                MamdaOrderBookEntry entry = new MamdaOrderBookEntry();
                entry.copy((MamdaOrderBookEntry)copy.mEntries[i]);
                mEntries.Add(entry);
            }
        }

        public void setPrice(MamaPrice price)
        {
            if (mPrice == null)
            {
                if (price != null)
                {
                    mPrice = new MamaPrice(price); // copy
                }
            }
            else
            {
                if (price == null)
                {
                    mPrice.destroy();
                    mPrice = null;
                }
                else
                {
                    mPrice.copy(price);
                }
            }
        }

        public void setSize(long size)
        {
            mSize  = size;
        }

        public void setSizeChange(long size)
        {
            mSizeChange  = size;
        }

        public void setNumEntries(int numEntries)
        {
            mNumEntries = numEntries;
        }

        public void setSide(Sides side)
        {
            mSide  = side;
        }

        public void setAction(Actions action)
        {
            mAction = action;
        }

        public void setTime(DateTime time)
        {
            mTime = time;
        }

        public void setDetails(MamdaOrderBookPriceLevel level)
        {
            this.mSizeChange = level.mSize - this.mSize;
            this.mSize       = level.mSize;
            this.mNumEntries = level.mNumEntries;
            this.mTime       = level.mTime;
        }

        public void addEntry(MamdaOrderBookEntry  entry)
        {
            if (mStrictChecking)
            {
                checkNotExist(entry);
            }
            mEntries.Add(entry);
        }

        public void updateEntry(MamdaOrderBookEntry  entry)
        {
            for (int i = 0; i < mEntries.Count; i++)
            {
                MamdaOrderBookEntry existingEntry =
                    (MamdaOrderBookEntry)mEntries[i];
                if (existingEntry.equalId(entry.getId()))
                {
                    existingEntry.setDetails(entry);
                    return;
                }
            }
            if (mStrictChecking)
            {
                throw new MamdaOrderBookException(
                    "attempted to update a non-existent entry: " + entry.getId());
            }
        }

        public void removeEntry(MamdaOrderBookEntry  entry)
        {
            for (int i = 0; i < mEntries.Count; i++)
            {
                MamdaOrderBookEntry existingEntry =
                    (MamdaOrderBookEntry)mEntries[i];
                if (existingEntry.equalId(entry.getId()))
                {
                    mEntries.RemoveAt(i);
                    return;
                }
            }
            if (mStrictChecking)
            {
                throw new MamdaOrderBookException (
                    "attempted to delete a non-existent entry: " + entry.getId());
            }
        }

        public IEnumerator GetEnumerator()
        {
            return mEntries.GetEnumerator();
        }

        public void checkNotExist(MamdaOrderBookEntry  entry)
        {
            for (int i = 0; i < mEntries.Count; i++)
            {
                MamdaOrderBookEntry existingEntry =
                    (MamdaOrderBookEntry)mEntries[i];
                if (existingEntry.equalId(entry.getId()))
                {
                    throw new MamdaOrderBookException(
                        "attempted to add am existent entry: " + entry.getId());
                }
            }
        }

        public void markAllDeleted()
        {
            setSizeChange(-getSize());
            setSize(0);
            setNumEntries(0);
            setAction(Actions.Delete);

            for (int i = 0; i < mEntries.Count; i++)
            {
                MamdaOrderBookEntry entry = (MamdaOrderBookEntry)mEntries[i];
                entry.setSize(0);
                entry.setAction(MamdaOrderBookEntry.Actions.Delete);
            }
        }

        public void setAsDifference(
            MamdaOrderBookPriceLevel lhs,
            MamdaOrderBookPriceLevel rhs)
        {
            int lhsBookSize = lhs.mEntries.Count;
            int rhsBookSize = rhs.mEntries.Count;
            int lhsIndex = 0;
            int rhsIndex = 0;

            while ((lhsIndex < lhsBookSize) && (rhsIndex < rhsBookSize))
            {
                string  lhsId                = null;
                string  rhsId                = null;
                long    lhsSize              = 0;
                long    rhsSize              = 0;
                MamdaOrderBookEntry lhsEntry = null;
                MamdaOrderBookEntry rhsEntry = null;

                if (lhsIndex < lhsBookSize)
                {
                    lhsEntry = (MamdaOrderBookEntry)lhs.mEntries[lhsIndex];
                    lhsId    = lhsEntry.getId();
                    lhsSize  = lhsEntry.getSize();
                }
                if (rhsIndex < rhsBookSize)
                {
                    rhsEntry = (MamdaOrderBookEntry)rhs.mEntries[rhsIndex];
                    rhsId    = rhsEntry.getId();
                    rhsSize  = rhsEntry.getSize();
                }

                if ((lhsId != null) && (rhsId != null))
                {
                    if (lhsId == rhsId)
                    {
                        // Same ID, maybe different size.
                        if (lhsSize != rhsSize)
                        {
                            MamdaOrderBookEntry updateEntry = new MamdaOrderBookEntry(rhsEntry);
                            updateEntry.setAction(MamdaOrderBookEntry.Actions.Update);
                            addEntry(updateEntry);
                        }
                        lhsIndex++;
                        rhsIndex++;
                        continue;
                    }
                    else
                    {
                        // Different ID (either something exists on the LHS
                        // and not on RHS or vice versa).
                        int rhsFound = findEntryAfter(rhs.mEntries, rhsIndex, lhsId);
                        if (rhsFound != rhsSize)
                        {
                            // The ID from the LHS was found on the RHS, so
                            // there must have been additional entries on the
                            // RHS, which we now need to add.
                            do
                            {
                                addEntry((MamdaOrderBookEntry)rhs.mEntries[rhsIndex]);
                                rhsIndex++;
                            }
                            while (rhsIndex < rhsFound);
                        }
                        else
                        {
                            // The ID from the LHS was not present on the RHS,
                            // so add the LHS entry.  Note: it would probably
                            // be faster to iterate over the LHS side rather
                            // than begin the loop again.
                            addEntry((MamdaOrderBookEntry)lhs.mEntries[lhsIndex]);
                            lhsIndex++;
                        }
                    }
                }
            }
            if (mPrice != null && rhs.getPrice() != null)
            {
                mPrice.destroy();
            }
            mPrice = rhs.getPrice();
            setSizeChange(rhs.getSize() - lhs.getSize());
            setSize(rhs.getSize());
            setNumEntries(rhs.getNumEntries());
            setAction(Actions.Update);
            mTime = rhs.getTime();
            setSide(rhs.getSide());
        }

        public MamaPrice getPrice()
        {
            return mPrice;
        }

        public long getSize()
        {
            return mSize;
        }

        public long getSizeChange()
        {
            return mSizeChange;
        }

        public int getNumEntries()
        {
            return mNumEntries;
        }

        public Sides getSide()
        {
            return mSide;
        }

        public Actions getAction ()
        {
            return mAction;
        }

        public bool hasTime()
        {
            return mTime != DateTime.MinValue;
        }

        public DateTime getTime ()
        {
            return mTime;
        }

        public void assertEqual(MamdaOrderBookPriceLevel  rhs)
        {
            if ((mPrice != null) != (rhs.mPrice != null))
                throwError("price not equal");
            if (!mPrice.equals(rhs.mPrice))
                throwError("price not equal");
            if (mSize != rhs.mSize)
                throwError("size not equal");
            if (mNumEntries != rhs.mNumEntries)
                throwError("number of entries not equal");
            if (mSide != rhs.mSide)
                throwError("side not equal");
            if (mAction != rhs.mAction)
                throwError("action not equal");
            if (mTime != rhs.mTime)
                throwError ("time not equal");

            if (mEntries.Count != rhs.mEntries.Count)
            {
                throwError ("entries size mismatch (" + mEntries.Count +
                    "!=" + rhs.mEntries.Count);
            }
            for (int i = 0; i < mEntries.Count; i++)
            {
                MamdaOrderBookEntry  lhsEntry = (MamdaOrderBookEntry)mEntries[i];
                MamdaOrderBookEntry  rhsEntry = (MamdaOrderBookEntry)rhs.mEntries[i];
                lhsEntry.assertEqual (rhsEntry);
            }
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

        public enum Sides : sbyte
        {
            Bid     = (sbyte)'B',
            Ask     = (sbyte)'A',
            Unknown = (sbyte)'U'
        }

        #region Implementation details

        private int findEntryAfter(
            ArrayList entries,
            int start,
            string id)
        {
            int i;
            int size = entries.Count;
            for (i = start; i < size; i++)
            {
                MamdaOrderBookEntry entry = (MamdaOrderBookEntry)entries[i];
                if (entry.equalId(id))
                {
                    return i;
                }
            }
            return i;
        }

        private void throwError(string context)
        {
            throw new MamdaOrderBookException(context + "(price=" + mPrice +
                ", size=" + mSide);
        }

        private MamaPrice    mPrice      = null;
        private long         mSize       = 0;
        private long         mSizeChange = 0;
        private int          mNumEntries = 0;
        private Sides        mSide       = Sides.Unknown;
        private Actions      mAction     = Actions.Unknown;
        private DateTime     mTime       = DateTime.MinValue;
        private ArrayList    mEntries    = new ArrayList();

        private static bool mStrictChecking = false;

        #endregion Implementation details

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
