---
title: Options/MamdaOptionChainView.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Options/MamdaOptionChainView.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOptionChainView](classWombat_1_1MamdaOptionChainView.html)** <br>A class that represents a "view" of a subset of an option chain. The view can be restricted to a percentage or number of strike prices around "the money" as well as to a maximum number of days into the future. The view will be adjusted to include strike prices within the range as the underlying price moves. This means that the range of strike prices will change over time. In order to avoid a "jitter" in the range of strike prices when the underlying price hovers right on the edge of a range boundary, the class also provides a "jitter margin" as some percentage of the underyling price (default is 0.5%).  |




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
using Wombat.Containers;

namespace Wombat
{
    public class MamdaOptionChainView : MamdaOptionChainHandler
    {
        public MamdaOptionChainView(MamdaOptionChain chain)
        {
            mChain = chain;
            resetRange();
        }

        public string getSymbol()
        {
            return mChain.getSymbol();
        }

        public void setAtTheMoneyType(MamdaOptionAtTheMoneyCompareType atTheMoneyType)
        {
            if (mAtTheMoneyType != atTheMoneyType)
            {
                mAtTheMoneyType = atTheMoneyType;
                resetRange();
            }
        }

        public void setStrikeRangePercent(double percentMargin)
        {
            if (mStrikeMargin != percentMargin)
            {
                mStrikeMargin = percentMargin;
                resetRange();
            }
        }

        public void setStrikeRangeNumber(int number)
        {
            if (mNumStrikes != number)
            {
                mNumStrikes = number;
                resetRange();
            }
        }

        public void setExpirationRangeDays(int expirationDays)
        {
            mExpirationDays = expirationDays;
            resetRange();
        }

        public void setNumberOfExpirations(int numExpirations)
        {
            mNumExpirations = numExpirations;
            resetRange();
        }

        public void setJitterMargin(double percentMargin)
        {
            mJitterMargin = percentMargin;
            resetRange();
        }

        public bool isVisible(MamdaOptionContract contract)
        {
            double strikePrice = contract.getStrikePrice();
            DateTime expireDate  = contract.getExpireDate();
            return ((mLowExpireDate <= expireDate) &&
                    (mHighExpireDate >= expireDate) &&
                    (mLowStrike <= strikePrice) &&
                    (strikePrice <= mHighStrike));
        }

        public Iterator expirationIterator()
        {
            return mExpirationDateSet.values().iterator();
        }

        public void onOptionChainRecap (
            MamdaSubscription         subscription,
            MamdaOptionChainListener  listener,
            MamaMsg                   msg,
            MamdaOptionChain          chain)
        {
            resetRange();
        }

        public void onOptionContractCreate (
            MamdaSubscription         subscription,
            MamdaOptionChainListener  listener,
            MamaMsg                   msg,
            MamdaOptionContract       contract,
            MamdaOptionChain          chain)
        {
            resetRange();
        }

        public void onOptionSeriesUpdate (
            MamdaSubscription         subscription,
            MamdaOptionChainListener  listener,
            MamaMsg                   msg,
            MamdaOptionSeriesUpdate   updateEvent,
            MamdaOptionChain          chain)
        {
            resetRange();
        }

        private void resetRange()
        {
            mExpirationDateSet = filterExpirations(mChain.getAllExpirations());
            filterStrikes(mExpirationDateSet);

            if ((mExpirationDateSet == null) || (mExpirationDateSet.size() == 0))
            {
                mLowExpireDate = DateTime.Today;
                mHighExpireDate = DateTime.Today.AddYears(1); // new Date(System.currentTimeMillis() + 366*24*60*60*1000);
            }
            else
            {
                mLowExpireDate = (DateTime)mExpirationDateSet.firstKey();
                mHighExpireDate = (DateTime)mExpirationDateSet.lastKey();
            }
        }

        private MamdaOptionExpirationDateSet filterExpirations(MamdaOptionExpirationDateSet initialSet)
        {
            if (mExpirationDays > 0)
            {
                // Find the subset of expirations between now and some
                // number of days into the future.
                System.Globalization.Calendar c = new System.Globalization.GregorianCalendar(System.Globalization.GregorianCalendarTypes.USEnglish);
                DateTime futureDate = c.AddDays(DateTime.Today, mExpirationDays);
                return initialSet.getExpirationsBefore(futureDate);
            }
            else if (mNumExpirations > 0)
            {
                // Explicit number of expiration dates.
                return initialSet.getExpirations(mNumExpirations);
            }
            else
            {
                // All expiration months.  We *copy* the initial set
                // because we may reduce the set to a particular range of
                // strike prices.
                return new MamdaOptionExpirationDateSet(initialSet);
            }
        }

        private void filterStrikes(MamdaOptionExpirationDateSet dateSet)
        {
            mLowStrike  = Double.MinValue;
            mHighStrike = Double.MaxValue;

            // First calculate the high/low strikes
            SortedSet strikeSet = mChain.getStrikesWithinPercent(mStrikeMargin, mAtTheMoneyType);

            if ((strikeSet == null) || (strikeSet.size() == 0))
            {
                strikeSet = mChain.getStrikesWithinRangeSize(mNumStrikes, mAtTheMoneyType);
            }

            if ((strikeSet == null) || (strikeSet.size() == 0))
            {
                return;
            }

            mLowStrike  = (double)strikeSet.first();
            mHighStrike = (double)strikeSet.last();

            Iterator expireIter = dateSet.values().iterator();
            while (expireIter.hasNext())
            {
                // Filter the strike prices for one expiration date
                MamdaOptionExpirationStrikes expireStrikes = (MamdaOptionExpirationStrikes)expireIter.next();
                expireStrikes.trimStrikes(strikeSet);
            }
        }

        private bool strikeInRange(double strikePrice)
        {
            // To be completed.
            return true;
        }

        private bool expirationInRange(string expirationDate)
        {
            // To be completed.
            return true;
        }

        private class UnderlyingQuoteHandler : MamdaQuoteHandler
        {
            public void onQuoteRecap(
                MamdaSubscription   sub,
                MamdaQuoteListener  listener,
                MamaMsg             msg,
                MamdaQuoteRecap     recap)
            {
            }

            public void onQuoteUpdate (
                MamdaSubscription   sub,
                MamdaQuoteListener  listener,
                MamaMsg             msg,
                MamdaQuoteUpdate    updateEvent,
                MamdaQuoteRecap     recap)
            {
            }

            public void onQuoteGap (
                MamdaSubscription   sub,
                MamdaQuoteListener  listener,
                MamaMsg             msg,
                MamdaQuoteGap       gapEvent,
                MamdaQuoteRecap     recap)
            {
            }

            public void onQuoteClosing (
                MamdaSubscription   sub,
                MamdaQuoteListener  listener,
                MamaMsg             msg,
                MamdaQuoteClosing   closingEvent,
                MamdaQuoteRecap     recap)
            {
            }
        }

        private class UnderlyingTradeHandler : MamdaTradeHandler
        {
            public void onTradeRecap(
                MamdaSubscription   sub,
                MamdaTradeListener  listener,
                MamaMsg             msg,
                MamdaTradeRecap     recap)
            {
            }

            public void onTradeReport (
                MamdaSubscription   sub,
                MamdaTradeListener  listener,
                MamaMsg             msg,
                MamdaTradeReport    trade,
                MamdaTradeRecap     recap)
            {
            }

            public void onTradeGap (
                MamdaSubscription   sub,
                MamdaTradeListener  listener,
                MamaMsg             msg,
                MamdaTradeGap       gapEvent,
                MamdaTradeRecap     recap)
            {
            }

            public void onTradeCancelOrError (
                MamdaSubscription        sub,
                MamdaTradeListener       listener,
                MamaMsg                  msg,
                MamdaTradeCancelOrError  cancelEvent,
                MamdaTradeRecap          recap)
            {
            }

            public void onTradeCorrection (
                MamdaSubscription        sub,
                MamdaTradeListener       listener,
                MamaMsg                  msg,
                MamdaTradeCorrection     correctionEvent,
                MamdaTradeRecap          recap)
            {
            }

            public void onTradeClosing (
                MamdaSubscription        sub,
                MamdaTradeListener       listener,
                MamaMsg                  msg,
                MamdaTradeClosing        closingEvent,
                MamdaTradeRecap          recap)
            {
            }
        }

        private readonly MamdaOptionChain           mChain;

        private const double DEFAULT_JITTER_MARGIN = 0.5; /* percent */

        private MamdaOptionAtTheMoneyCompareType mAtTheMoneyType = MamdaOptionAtTheMoneyCompareType.MID_QUOTE;
        private double    mStrikeMargin     = 0.0;
        private int       mNumStrikes       = 0;
        private int       mExpirationDays   = 0;
        private int       mNumExpirations   = 0;
        private double    mJitterMargin     = DEFAULT_JITTER_MARGIN;

        private MamdaOptionExpirationDateSet  mExpirationDateSet = null;
        private DateTime                      mLowExpireDate     = DateTime.MinValue;
        private DateTime                      mHighExpireDate    = DateTime.MinValue;
        private double                        mLowStrike         = 0.0;
        private double                        mHighStrike        = 0.0;

        // The following "underlying" handlers are used if/when we need to
        // check the strike range.  Which, if either, are active depends
        // on the value of mAtTheMoneyType.
        private readonly UnderlyingQuoteHandler mQuoteHandler = new UnderlyingQuoteHandler();
        private readonly UnderlyingTradeHandler mTradeHandler = new UnderlyingTradeHandler();
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
