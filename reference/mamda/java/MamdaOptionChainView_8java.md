---
title: options/MamdaOptionChainView.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# options/MamdaOptionChainView.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::options](namespacecom_1_1wombat_1_1mamda_1_1options.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::options::MamdaOptionChainView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html)**  |




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

package com.wombat.mamda.options;

import com.wombat.mamda.*;
import com.wombat.mama.*;
import java.util.logging.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Iterator;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

public class MamdaOptionChainView implements MamdaOptionChainHandler
{
    private final MamdaOptionChain            mChain;

    private MamdaOptionChainViewRangeHandler  mRangeHandler = null;

    private static final double DEFAULT_JITTER_MARGIN = 0.5; /* percent */

    private short     mAtTheMoneyType   = MamdaOptionAtTheMoneyCompareType.MID_QUOTE;
    private double    mStrikeMargin     = 0.0;
    private int       mNumStrikes       = 0;
    private int       mExpirationDays   = 0;
    private int       mNumExpirations   = 0;
    private double    mJitterMargin     = DEFAULT_JITTER_MARGIN;

    private MamdaOptionExpirationDateSet  mExpirationDateSet = null;
    private Date                          mLowExpireDate     = null;
    private Date                          mHighExpireDate    = null;
    private double                        mLowStrike         = 0.0;
    private double                        mHighStrike        = 0.0;

    // The following "underlying" handlers are used if/when we need to
    // check the strike range.  Which, if either, are active depends
    // on the value of mAtTheMoneyType.
    private final UnderlyingQuoteHandler  mQuoteHandler = new UnderlyingQuoteHandler();
    private final UnderlyingTradeHandler  mTradeHandler = new UnderlyingTradeHandler();

    private static Logger mLogger = Logger.getLogger (
        "com.wombat.mamda.options.MamdaOptionChainView");

    public MamdaOptionChainView (MamdaOptionChain chain)
    {
        mChain = chain;
        resetRange ();
    }

    public String getSymbol ()
    {
        return mChain.getSymbol();
    }

    public void setAtTheMoneyType (short  atTheMoneyType)
    {
        if (mAtTheMoneyType != atTheMoneyType)
        {
            mAtTheMoneyType = atTheMoneyType;
            resetRange();
        }
    }

    public void setStrikeRangePercent (double  percentMargin)
    {
        if (mStrikeMargin != percentMargin)
        {
            mStrikeMargin = percentMargin;
            resetRange();
        }
    }

    public void setStrikeRangeNumber (int  number)
    {
        if (mNumStrikes != number)
        {
            mNumStrikes = number;
            resetRange();
        }
    }

    public void setExpirationRangeDays (int  expirationDays)
    {
        mExpirationDays = expirationDays;
        resetRange();
    }

    public void setNumberOfExpirations (int  numExpirations)
    {
        mNumExpirations = numExpirations;
        resetRange();
    }

    public void setJitterMargin (double  percentMargin)
    {
        mJitterMargin = percentMargin;
        resetRange();
    }

    public boolean isVisible (MamdaOptionContract  contract)
    {
        double strikePrice = contract.getStrikePrice();
        Date   expireDate  = contract.getExpireDate();
        return ((mLowExpireDate.compareTo(expireDate) <= 0) &&
                (mHighExpireDate.compareTo(expireDate) >= 0) &&
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
        MamdaOptionSeriesUpdate   event,
        MamdaOptionChain          chain)
    {
        resetRange();
    }

    private void resetRange ()
    {
        mExpirationDateSet = filterExpirations (mChain.getAllExpirations());
        filterStrikes (mExpirationDateSet);
        mLogger.fine ("resetRange: dateSet=" + mExpirationDateSet);

        if ((mExpirationDateSet == null) ||
            (mExpirationDateSet.size() == 0))
        {
            mLowExpireDate = new Date(0);
            mHighExpireDate = new Date(System.currentTimeMillis() +
                                        366*24*60*60*1000);
        }
        else
        {
            mLowExpireDate = (Date)mExpirationDateSet.firstKey();
            mHighExpireDate = (Date)mExpirationDateSet.lastKey();
        }
    }

    private MamdaOptionExpirationDateSet filterExpirations (
        MamdaOptionExpirationDateSet  initialSet)
    {
        if (mExpirationDays > 0)
        {
            // Find the subset of expirations between now and some
            // number of days into the future.
            GregorianCalendar futureDate = new GregorianCalendar();
            futureDate.add (Calendar.DATE, mExpirationDays);
            return initialSet.getExpirationsBefore (futureDate.getTime());
        }
        else if (mNumExpirations > 0)
        {
            // Explicit number of expiration dates.
            return initialSet.getExpirations (mNumExpirations);
        }
        else
        {
            // All expiration months.  We *copy* the initial set
            // because we may reduce the set to a particular range of
            // strike prices.
            return new MamdaOptionExpirationDateSet (initialSet);
        }
    }

    private void filterStrikes (MamdaOptionExpirationDateSet  dateSet)
    {
        mLowStrike  = Double.MIN_VALUE;
        mHighStrike = Double.MAX_VALUE;

        // First calculate the high/low strikes
        SortedSet strikeSet =
            mChain.getStrikesWithinPercent(mStrikeMargin, mAtTheMoneyType);

        if ((strikeSet == null) || (strikeSet.size() == 0))
        {
            strikeSet = mChain.getStrikesWithinRangeSize (mNumStrikes,
                                                          mAtTheMoneyType);
        }

        if ((strikeSet == null) || (strikeSet.size() == 0))
        {
            mLogger.fine ("filterStrikes: no strikes or underlying (yet?)");
            return;
        }
        else
        {
            mLogger.fine ("filterStrikes: got " + strikeSet.size() + " in range");
        }

        Double lowStrike  = (Double)strikeSet.first();
        Double highStrike = (Double)strikeSet.last();
        mLowStrike        = lowStrike.doubleValue();
        mHighStrike       = highStrike.doubleValue();

        Iterator expireIter = dateSet.values().iterator();
        while (expireIter.hasNext())
        {
            // Filter the strike prices for one expiration date
            MamdaOptionExpirationStrikes expireStrikes =
                (MamdaOptionExpirationStrikes) expireIter.next();
            expireStrikes.trimStrikes (strikeSet);
        }
    }

    private boolean strikeInRange (double strikePrice)
    {
        return true;
    }

    private boolean expirationInRange (String expirationDate)
    {
        return true;
    }

    private class UnderlyingQuoteHandler implements MamdaQuoteHandler
    {
        public void onQuoteRecap (
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
            MamdaQuoteUpdate    event,
            MamdaQuoteRecap     recap)
        {
        }

        public void onQuoteGap (
            MamdaSubscription   sub,
            MamdaQuoteListener  listener,
            MamaMsg             msg,
            MamdaQuoteGap       event,
            MamdaQuoteRecap     recap)
        {
        }

        public void onQuoteClosing (
            MamdaSubscription   sub,
            MamdaQuoteListener  listener,
            MamaMsg             msg,
            MamdaQuoteClosing   event,
            MamdaQuoteRecap     recap)
        {
        }
    }

    private class UnderlyingTradeHandler implements MamdaTradeHandler
    {
        public void onTradeRecap (
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
            MamdaTradeGap       event,
            MamdaTradeRecap     recap)
        {
        }

        public void onTradeCancelOrError (
            MamdaSubscription        sub,
            MamdaTradeListener       listener,
            MamaMsg                  msg,
            MamdaTradeCancelOrError  event,
            MamdaTradeRecap          recap)
        {
        }

        public void onTradeCorrection (
            MamdaSubscription        sub,
            MamdaTradeListener       listener,
            MamaMsg                  msg,
            MamdaTradeCorrection     event,
            MamdaTradeRecap          recap)
        {
        }

        public void onTradeClosing (
            MamdaSubscription        sub,
            MamdaTradeListener       listener,
            MamaMsg                  msg,
            MamdaTradeClosing        event,
            MamdaTradeRecap          recap)
        {
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
