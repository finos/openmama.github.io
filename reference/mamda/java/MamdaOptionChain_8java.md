---
title: options/MamdaOptionChain.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# options/MamdaOptionChain.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::options](namespacecom_1_1wombat_1_1mamda_1_1options.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::options::MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html)**  |




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
import java.util.logging.*;
import java.util.Comparator;
import java.util.Date;
import java.util.Iterator;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.HashMap;
import java.util.SortedSet;
import java.util.Collection;

public class MamdaOptionChain
{
    private String                 mSymbol             = null;
    private MamdaQuoteListener     mQuoteListener      = null;
    private MamdaTradeListener     mTradeListener      = null;

    private final HashMap          mOptions            = new HashMap (1000);
    private final TreeSet          mCallOptions        = new TreeSet (new ContractComparator());
    private final TreeSet          mPutOptions         = new TreeSet (new ContractComparator());
    private final TreeSet          mExchanges          = new TreeSet ();
    private final TreeSet          mStrikePrices       = new TreeSet ();
    private final MamdaOptionExpirationDateSet mExpirationSet =
        new MamdaOptionExpirationDateSet();

    private static Logger mLogger = Logger.getLogger (
        "com.wombat.mamda.options.MamdaOptionChain");

    public MamdaOptionChain (String symbol)
    {
        setSymbol (symbol);
    }

    public void setSymbol (String symbol)
    {
        mSymbol = symbol;
    }

    public String getSymbol ()
    {
        return mSymbol;
    }

    public void setUnderlyingQuoteListener (
        MamdaQuoteListener  quoteListener)
    {
        mQuoteListener = quoteListener;
    }

    public void setUnderlyingTradeListener (
        MamdaTradeListener  tradeListener)
    {
        mTradeListener = tradeListener;
    }

    public MamdaQuoteListener  getUnderlyingQuoteListener ()
    {
        return mQuoteListener;
    }

    public MamdaTradeListener  getUnderlyingTradeListener ()
    {
        return mTradeListener;
    }

    public MamdaOptionContract getContract (String contractSymbol)
    {
        return (MamdaOptionContract) mOptions.get(contractSymbol);
    }

    public SortedSet getExchanges()
    {
        return mExchanges;
    }

    public SortedSet getStrikePrices()
    {
        return mStrikePrices;
    }

    public void addContract (String               contractSymbol,
                             MamdaOptionContract  contract)
    {
        Date   expireDate  = contract.getExpireDate();
        Double strikePrice = new Double(contract.getStrikePrice());
        String exchange    = contract.getExchange();
        char   putCall     = contract.getPutCall();

        mLogger.fine ("adding contract: " + contractSymbol + " " + 
                       exchange + " " + strikePrice);
        mOptions.put (contractSymbol, contract);

        if (contract.getPutCall() == MamdaOptionContract.PC_CALL)
        {
            mCallOptions.add (contract);
        }
        else
        {
            mPutOptions.add (contract);
        }

        // Add the contract to the expiration-by-strike set.
        MamdaOptionExpirationStrikes expireStrikes =
            (MamdaOptionExpirationStrikes) mExpirationSet.get (expireDate);

        if (expireStrikes == null)
        {
            expireStrikes = new MamdaOptionExpirationStrikes();
            mExpirationSet.put (expireDate, expireStrikes);
        }

        MamdaOptionStrikeSet strikeSet =
            (MamdaOptionStrikeSet) expireStrikes.get (strikePrice);

        if (strikeSet == null)
        {
            strikeSet = new MamdaOptionStrikeSet (expireDate,
                                                  strikePrice.doubleValue());
            expireStrikes.put (strikePrice, strikeSet);
        }

        MamdaOptionContractSet contractSet =
            (putCall == MamdaOptionContract.PC_CALL) ?
                strikeSet.getCallSet() : strikeSet.getPutSet();

        if (MamdaOptionExchangeUtils.isBbo(exchange))
        {
            contractSet.setBboContract (contract);
        }
        else if (MamdaOptionExchangeUtils.isWombatBbo(exchange))
        {
            contractSet.setWombatBboContract (contract);
        }
        else
        {
            contractSet.setExchangeContract (exchange, contract);
            mExchanges.add (exchange);
        }

        mStrikePrices.add (strikePrice);
        mLogger.fine ("number of expirations: " + mExpirationSet.size());
    }

    public void removeContract (String contractSymbol) 
    {
    }

    public double getAtTheMoney (
        short  compareType)
    {
        double atTheMoney = 0.0;
        switch (compareType)
        {
            case MamdaOptionAtTheMoneyCompareType.MID_QUOTE:
                if (mQuoteListener == null) return 0.0;
                atTheMoney = (mQuoteListener.getBidPrice().getValue() +
                              mQuoteListener.getAskPrice().getValue()) / 2.0;
                break;

            case MamdaOptionAtTheMoneyCompareType.BID:
                if (mQuoteListener == null) return 0.0;
                atTheMoney = mQuoteListener.getBidPrice().getValue();
                break;

            case MamdaOptionAtTheMoneyCompareType.ASK:
                if (mQuoteListener == null) return 0.0;
                atTheMoney = mQuoteListener.getAskPrice().getValue();
                break;

            case MamdaOptionAtTheMoneyCompareType.LAST_TRADE:
                if (mTradeListener == null) return 0.0;
                atTheMoney = mTradeListener.getLastPrice().getValue();
                break;
        }
        return atTheMoney;
    }

    public boolean getIsPriceWithinPercentOfMoney (
        double    price,
        double    percentage,
        short     compareType)
    {
        double atTheMoney  = getAtTheMoney(compareType);
        if (atTheMoney == 0.0)
            return false;

        return (((1.0 - percentage) <= price) ||
                (price <= (1.0 + percentage)));
    }

    public SortedSet getStrikesWithinPercent (
        double    percentage,
        short     compareType)
    {
        percentage /= 100.0;
        if (percentage <= 0.0)
            return null;

        double atTheMoney  = getAtTheMoney(compareType);
        if (atTheMoney == 0.0)
            return null;

        Double    lowPercent   = new Double (atTheMoney * (1.0 - percentage));
        Double    highPercent  = new Double (atTheMoney * (1.0 + percentage));
        SortedSet strikeSubSet = mStrikePrices.subSet (lowPercent,
                                                       highPercent);
        return strikeSubSet;
    }

    public SortedSet getStrikesWithinRangeSize (
        int       rangeLength,
        short     compareType)
    {
        if (rangeLength <= 0)
            return null;

        double atTheMoney  = getAtTheMoney(compareType);
        if (atTheMoney == 0.0)
            return null;

        int     countToMoney    = 0;
        int     countFromMoney  = 0;
        double  halfRangeLength = rangeLength / 2.0;
        Double  lowerBound      = null;
        Double  upperBound      = null;

        // First loop determines the upper bound and count the number
        // of strikes that are less than the "money".
        Iterator strikeIter = mStrikePrices.iterator();
        while (strikeIter.hasNext())
        {
            Double strikePrice = (Double) strikeIter.next();
            if (strikePrice.doubleValue() < atTheMoney)
            {
                // We're still less than the "money", so keep counting up.
                countToMoney++;
            }
            else
            {
                // Check the upper bound. Take a price that is
                // slightly higher than this strike price because we
                // want to include it (Set.subSet excludes the
                // toElement).
                countFromMoney++;
                upperBound = new Double(strikePrice.doubleValue()+0.00001);
                if (countFromMoney >= halfRangeLength)
                {
                    // We've passed the upper end of the range
                    break;
                }
            }
        }

        // Second loop determines the lower bound.
        int targetCount = countToMoney - (rangeLength - countFromMoney);
        strikeIter = mStrikePrices.iterator();
        while (strikeIter.hasNext())
        {
            Double strikePrice = (Double) strikeIter.next();
            if (targetCount > 0)
            {
                // We have not yet hit the lowerBound.
                targetCount--;
            }
            else
            {
                lowerBound = strikePrice;
                break;
            }
        }
        if (lowerBound == null)
            lowerBound = new Double(0.0);
        if (upperBound == null)
            upperBound = new Double(Double.MAX_VALUE);

        SortedSet result = mStrikePrices.subSet(lowerBound,upperBound);
        lowerBound = (Double) result.first();
        upperBound = (Double) result.last();
        mLogger.finer ("getStrikesWithinRangeSize: lowerBound=" + lowerBound +
                       " atTheMoney=" + atTheMoney +
                       " upperBound=" + upperBound);
        return result;
    }

    public Iterator callIterator()
    {
        return mCallOptions.iterator();
    }

    public Iterator putIterator()
    {
        return mPutOptions.iterator();
    }

    public MamdaOptionExpirationDateSet getAllExpirations ()
    {
        return mExpirationSet;
    }

    public void dump ()
    {
        System.out.println ("Dump chain: " + mSymbol);

        int      i        = 0;
        Iterator callIter = mCallOptions.iterator();
        Iterator putIter  = mPutOptions.iterator();

        while (callIter.hasNext() || putIter.hasNext())
        {
            System.out.print ("" + i + " | ");
            if (callIter.hasNext())
            {
                MamdaOptionContract callContract =
                    (MamdaOptionContract)callIter.next();
                System.out.print ("" + callContract.getSymbol() + " " +
                                  callContract.getExchange() + "   " +
                                  callContract.getExpireDate() + "   " +
                                  callContract.getStrikePrice());
            }
            else
            {
                System.out.print ("          ");
            }

            System.out.print (" | ");

            if (putIter.hasNext())
            {
                MamdaOptionContract putContract =
                    (MamdaOptionContract)putIter.next();
                System.out.print ("" + putContract.getSymbol() + " " +
                                  putContract.getExchange() + "   " +
                                  putContract.getExpireDate() + "   " +
                                  putContract.getStrikePrice());
            }
            else
            {
            }
            System.out.println();
            ++i;
        }
    }

    private class ContractComparator implements Comparator
    {
        /* Ascending expiration month, strike price, and exchange. */
        public int compare (Object o1, Object o2)
        {
            MamdaOptionContract contract1 = (MamdaOptionContract)o1;
            MamdaOptionContract contract2 = (MamdaOptionContract)o2;

            // Expiration month
            Date expiration1 = contract1.getExpireDate();
            Date expiration2 = contract2.getExpireDate();
            int comp = expiration1.compareTo(expiration2);
            if (comp == 0)
            {
                // Strike price
                Double strike1 = new Double(contract1.getStrikePrice());
                Double strike2 = new Double(contract2.getStrikePrice());
                comp = strike1.compareTo(strike2);
            }
            if (comp == 0)
            {
                // Exchange
                String exchange1 = contract1.getExchange();
                String exchange2 = contract2.getExchange();
                comp = exchange1.compareTo(exchange2);
            }
            return comp;
        }
        public boolean equals (Object o1, Object o2)
        { 
            return (compare(o1,o2) == 0);
        }
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100
