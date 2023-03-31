---
title: OrderBook/MamdaOrderBook.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# OrderBook/MamdaOrderBook.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::IO](namespaceSystem_1_1IO.html)**  |
| **[TreeMap](namespaceTreeMap.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderBook](classWombat_1_1MamdaOrderBook.html)** <br>[MamdaOrderBook]() is a class that provides order book functionality, including iterators over price levels and entries within price levels.  |

## Types

|                | Name           |
| -------------- | -------------- |
| using System.Collections.SortedList | **[TreeMap](MamdaOrderBook_8cs.html#using-treemap)**  |

## Types Documentation

### using TreeMap

```csharp
using TreeMap =  System.Collections.SortedList;
```





## Source code

```csharp
/* $Id: MamdaOrderBook.cs,v 1.4.32.6 2012/08/24 16:12:13 clintonmcdowell Exp $
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
using System.IO;
using System.Collections;
using TreeMap = System.Collections.SortedList;

namespace Wombat
{
    public class MamdaOrderBook
    {
        public MamdaOrderBook()
        {
            mBidLevels = new TreeMap(new BidComparer());
            mAskLevels = new TreeMap(new AskCompare());
        }

        public void clear ()
        {
            mBidLevels.Clear();
            mAskLevels.Clear();
        }

        public void setSymbol(string symbol)
        {
            mSymbol = symbol;
        }

        public String getSymbol ()
        {
            return mSymbol;
        }

        public void setBookTime(DateTime time)
        {
            mBookTime = time;
        }

        public DateTime getBookTime ()
        {
            return mBookTime;
        }

        public void addLevel(MamdaOrderBookPriceLevel level)
        {
            switch (level.getSide())
            {
                case MamdaOrderBookPriceLevel.Sides.Bid:
                    addLevelSide(level, mBidLevels);
                    break;
                case MamdaOrderBookPriceLevel.Sides.Ask:
                    addLevelSide(level, mAskLevels);
                    break;
            }
        }

        public void updateLevel(MamdaOrderBookPriceLevel level)
        {
            switch (level.getSide())
            {
                case MamdaOrderBookPriceLevel.Sides.Bid:
                    updateLevelSide(level, mBidLevels);
                    break;
                case MamdaOrderBookPriceLevel.Sides.Ask:
                    updateLevelSide(level, mAskLevels);
                    break;
            }
        }

        public void deleteLevel(MamdaOrderBookPriceLevel level)
        {
            switch (level.getSide())
            {
                case MamdaOrderBookPriceLevel.Sides.Bid:
                    deleteLevelSide(level, mBidLevels);
                    break;
                case MamdaOrderBookPriceLevel.Sides.Ask:
                    deleteLevelSide(level, mAskLevels);
                    break;
            }
        }

        public void apply(MamdaOrderBook deltaBook)
        {
            apply(deltaBook.getBidLevels());
            apply(deltaBook.getAskLevels());
        }

        public void copy(MamdaOrderBook book)
        {
            clear();
            apply(book);
        }

        public void deepCopy(MamdaOrderBook book)
        {
            clear();
            deepCopy(book.getBidLevels());
            deepCopy(book.getAskLevels());
        }

        public void setAsDeltaDeleted(MamdaOrderBook bookToDelete)
        {
            copy(bookToDelete);
            markAllDeleted(mBidLevels);
            markAllDeleted(mAskLevels);
        }

        public void setAsDeltaDifference(
            MamdaOrderBook lhs,
            MamdaOrderBook rhs)
        {
            clear();
            determineDiffs(mBidLevels, lhs.mBidLevels, rhs.mBidLevels, false);
            determineDiffs(mAskLevels, lhs.mAskLevels, rhs.mAskLevels, true);
        }

        public long getTotalNumLevels ()
        {
            return mBidLevels.Count + mAskLevels.Count;
        }

        public void assertEqual (MamdaOrderBook  rhs)
        {
            if (mSymbol != rhs.mSymbol)
            {
                throw new MamdaOrderBookException(
                    "different symbols: " + mSymbol + "/" + rhs.mSymbol);
            }
            assertEqual(mBidLevels, rhs.mBidLevels);
            assertEqual(mAskLevels, rhs.mAskLevels);
        }

        public IEnumerable getBidLevels()
        {
            return mBidLevels.Values;
        }

        public IEnumerable getAskLevels()
        {
            return mAskLevels.Values;
        }

        public void setIsConsistent (bool isConsistent)
        {
            mIsConsistent = isConsistent;
        }

        public bool getIsConsistent()
        {
            return mIsConsistent;
        }

        public void dump()
        {
            dump(Console.Out);
        }

        public void dump(Stream stream)
        {
            using (StreamWriter writer = new StreamWriter(stream))
            {
                dump(writer);
            }
        }

        public void dump(TextWriter writer)
        {
            writer.WriteLine("Dump book: {0}", mSymbol);
            int i = 0;
            IEnumerator bidEnum = mBidLevels.Values.GetEnumerator();
            IEnumerator askEnum = mAskLevels.Values.GetEnumerator();

            bool bidHasNext = bidEnum.MoveNext();
            bool askHasNext = askEnum.MoveNext();

            while (bidHasNext || askHasNext)
            {
                if (bidHasNext)
                {
                    dump(writer, (MamdaOrderBookPriceLevel)bidEnum.Current, i);
                    bidHasNext = bidEnum.MoveNext();
                }
                else
                {
                    writer.Write("          ");
                }
                if (askHasNext)
                {
                    dump(writer, (MamdaOrderBookPriceLevel)askEnum.Current, i);
                    askHasNext = askEnum.MoveNext();
                }
                writer.WriteLine();
                ++i;
            }
        }

        public static void setStrictChecking(bool strict)
        {
            MamdaOrderBookPriceLevel.setStrictChecking(strict);
            MamdaOrderBookEntry.setStrictChecking(strict);
        }


        #region Implementation details

        private void apply(IEnumerable deltaBookLevels)
        {
            foreach (MamdaOrderBookPriceLevel deltaLevel in deltaBookLevels)
            {
                switch (deltaLevel.getAction())
                {
                    case MamdaOrderBookPriceLevel.Actions.Add:
                        addLevel(deltaLevel);
                        break;
                    case MamdaOrderBookPriceLevel.Actions.Update:
                        updateLevel(deltaLevel);
                        break;
                    case MamdaOrderBookPriceLevel.Actions.Delete:
                        deleteLevel(deltaLevel);
                        break;
                }
            }
        }

        private void deepCopy(IEnumerable bookLevels)
        {
            foreach (MamdaOrderBookPriceLevel bookLevel in bookLevels)
            {
                MamdaOrderBookPriceLevel level = new MamdaOrderBookPriceLevel();
                level.copy(bookLevel);
                switch (level.getAction())
                {
                    case MamdaOrderBookPriceLevel.Actions.Add:
                        addLevel(level);
                        break;
                    case MamdaOrderBookPriceLevel.Actions.Update:
                        updateLevel(level);
                        break;
                    case MamdaOrderBookPriceLevel.Actions.Delete:
                        deleteLevel(level);
                        break;
                }
            }
        }

        private void assertEqual(
            TreeMap lhsLevels,
            TreeMap rhsLevels)
        {
            if (lhsLevels.Count != rhsLevels.Count)
            {
                throw new MamdaOrderBookException(
                    "number of price levels do not add up (" + lhsLevels.Count +
                    "/" + rhsLevels.Count);
            }

            IEnumerator lhsEnum = lhsLevels.Values.GetEnumerator();
            IEnumerator rhsEnum = rhsLevels.Values.GetEnumerator();

            while (lhsEnum.MoveNext() && rhsEnum.MoveNext())
            {
                MamdaOrderBookPriceLevel lhsLevel =
                    (MamdaOrderBookPriceLevel)lhsEnum.Current;
                MamdaOrderBookPriceLevel rhsLevel =
                    (MamdaOrderBookPriceLevel)rhsEnum.Current;
                lhsLevel.assertEqual(rhsLevel);
            }
        }

        private void dump(TextWriter writer, MamdaOrderBookPriceLevel level, int index)
        {
            string title = level.getSide() == MamdaOrderBookPriceLevel.Sides.Ask ? "Ask" : "Bid";
            writer.WriteLine("{0} {1} | price={2} size={3} action={4} entries={5} time={6}",
                title,
                index,
                level.getPrice(),
                level.getSize(),
                level.getAction(),
                level.getNumEntries(),
                level.hasTime() ? level.getTime().ToString() : "null");

            foreach (MamdaOrderBookEntry entry in level)
            {
                writer.WriteLine("      |    id={0} size={1} action={2} time={3}",
                    entry.getId(),
                    entry.getSize(),
                    entry.getAction(),
                    entry.hasTime() ? entry.getTime().ToString() : "null");
            }
        }

        private void addLevelSide(
            MamdaOrderBookPriceLevel level,
            TreeMap bookSide)
        {
            MamaPrice price = level.getPrice();
            if (!bookSide.ContainsKey(price))
            {
                bookSide.Add(price, level);
            }
            else
            {
                bookSide[price] = level; // Overwrite it anyway
            }
        }

        private void updateLevelSide(
            MamdaOrderBookPriceLevel level,
            TreeMap bookSide)
        {
            MamaPrice price = level.getPrice();
            if (bookSide.ContainsKey(price))
            {
                MamdaOrderBookPriceLevel fullBookLevel =
                    bookSide[price] as MamdaOrderBookPriceLevel;

                /*Iterate over the entries in the update and apply them to the
                 * full book level according to action*/
                foreach (MamdaOrderBookEntry deltaEntry in level)
                {
                    switch (deltaEntry.getAction())
                    {
                        case MamdaOrderBookEntry.Actions.Add:
                            fullBookLevel.addEntry(deltaEntry);
                            break;
                        case MamdaOrderBookEntry.Actions.Update:
                            fullBookLevel.updateEntry(deltaEntry);
                            break;
                        case MamdaOrderBookEntry.Actions.Delete:
                            fullBookLevel.removeEntry(deltaEntry);
                            break;
                        case MamdaOrderBookEntry.Actions.Unknown:
                            /*Do nothing*/
                            break;
                        default:
                            /*Do nothing*/
                            break;
                    }
                }
                /*Update the details for the level itself*/
                fullBookLevel.setDetails(level);
            }
            else
            {
                bookSide.Add(price, level); // Add it anyway
            }
        }

        private void deleteLevelSide(
            MamdaOrderBookPriceLevel level,
            TreeMap bookSide)
        {
            MamaPrice price = level.getPrice();
            if (bookSide.ContainsKey(price))
            {
                /* We actually need to process this properly because the
                 * update may not contain all entries, just updated
                 * ones. */
                bookSide.Remove(price);
            }
        }

        private void markAllDeleted(TreeMap bookSide)
        {
            foreach (MamdaOrderBookPriceLevel level in bookSide.Values)
            {
                level.markAllDeleted();
            }
        }

        private bool doubleEquals(
            double lhs,
            double rhs)
        {
            return (Math.Abs(lhs-rhs) < Math.Abs(lhs * 0.00000000001D));
        }

        private TreeMap determineDiffs(
            TreeMap resultSide,
            TreeMap lhs,
            TreeMap rhs,
            bool ascending)
        {
            IEnumerator lhsEnum = lhs.Values.GetEnumerator();
            IEnumerator rhsEnum = rhs.Values.GetEnumerator();
            bool lhsHasNext = lhsEnum.MoveNext();
            bool rhsHasNext = rhsEnum.MoveNext();

            while (lhsHasNext || rhsHasNext)
            {
                MamdaOrderBookPriceLevel lhsLevel = null;
                MamdaOrderBookPriceLevel rhsLevel = null;
                double    lhsPrice = double.MinValue;
                double    rhsPrice = double.MinValue;
                long      lhsSize  = 0;
                long      rhsSize  = 0;

                if (lhsHasNext)
                {
                    lhsLevel = (MamdaOrderBookPriceLevel)lhsEnum.Current;
                    lhsPrice = lhsLevel.getPrice().getValue();
                    lhsSize  = lhsLevel.getSize();
                }
                if (rhsHasNext)
                {
                    rhsLevel = (MamdaOrderBookPriceLevel)rhsEnum.Current;
                    rhsPrice = rhsLevel.getPrice().getValue();
                    rhsSize  = rhsLevel.getSize();
                }

                // Compare two doubles using an epsilon
                if ((doubleEquals(lhsPrice, rhsPrice)) && (lhsSize == rhsSize))
                {
                    // Usual scenario: both levels are the same
                    lhsHasNext = lhsEnum.MoveNext();
                    rhsHasNext = rhsEnum.MoveNext();
                    continue;
                }

                if (doubleEquals(lhsPrice, rhsPrice))
                {
                    // Same price, different size.  Need to determine the
                    // different entries.
                    MamdaOrderBookPriceLevel diffLevel = new MamdaOrderBookPriceLevel();
                    diffLevel.setAsDifference(lhsLevel, rhsLevel);
                    resultSide.Add(lhsLevel.getPrice(), diffLevel);
                    lhsHasNext = lhsEnum.MoveNext();
                    rhsHasNext = rhsEnum.MoveNext();
                    continue;
                }

                if (ascending)
                {
                    if (((lhsPrice > rhsPrice) && (rhsPrice != double.MinValue)) || (lhsPrice == double.MinValue))
                    {
                        // RHS has an additional price level
                        MamdaOrderBookPriceLevel diffLevel = new MamdaOrderBookPriceLevel(rhsLevel);
                        resultSide.Add(rhsLevel.getPrice(), diffLevel);
                        rhsHasNext = rhsEnum.MoveNext();
                        continue;
                    }
                    else
                    {
                        // RHS does not have a price level that is on the LHS.
                        // Copy the LHS level and mark all as deleted.
                        MamdaOrderBookPriceLevel diffLevel = new MamdaOrderBookPriceLevel(lhsLevel);
                        resultSide.Add(lhsLevel.getPrice(), diffLevel);
                        lhsHasNext = lhsEnum.MoveNext();
                        continue;
                    }
                }
                else
                {
                    if (((lhsPrice > rhsPrice) && (lhsPrice != double.MinValue)) || (rhsPrice == double.MinValue))
                    {
                        // LHS has an additional price level
                        MamdaOrderBookPriceLevel diffLevel = new MamdaOrderBookPriceLevel(lhsLevel);
                        resultSide.Add(lhsLevel.getPrice(), diffLevel); // CHECK: use indexer?
                        lhsHasNext = lhsEnum.MoveNext();
                        continue;
                    }
                    else
                    {
                        // LHS does not have a price level that is on the RHS.
                        // Copy the RHS level and mark all as deleted.
                        MamdaOrderBookPriceLevel diffLevel = new MamdaOrderBookPriceLevel(rhsLevel);
                        resultSide.Add(rhsLevel.getPrice(), diffLevel); // CHECK: use indexer?
                        rhsHasNext = rhsEnum.MoveNext();
                        continue;
                    }
                }
            }
            return resultSide;
        }

        private class BidComparer : IComparer
        {
            /* Descending order prices (MamaPrice) */
            public int Compare(object o1, object o2)
            {
                return ((MamaPrice)o2).CompareTo((MamaPrice)o1);
            }
        }

        private class AskCompare : IComparer
        {
            /* Ascending order prices (MamaPrice) */
            public int Compare(object o1, object o2)
            {
                return ((MamaPrice)o1).CompareTo((MamaPrice)o2);
            }
        }

        private String   mSymbol       = null;
        private TreeMap  mBidLevels    = null;
        private TreeMap  mAskLevels    = null;
        private bool     mIsConsistent  = true;
        private DateTime mBookTime     = DateTime.MinValue;

        #endregion Implementation details

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:18 +0100
