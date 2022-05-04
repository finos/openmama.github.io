---
title: Options/MamdaOptionChain.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Options/MamdaOptionChain.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOptionChain](classWombat_1_1MamdaOptionChain.html)** <br>[MamdaOptionChain]() is a specialized class to represent market data option chains. The class has capabilities to store the current state of an entire option chain, or a subset of the chain.  |




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
    public class MamdaOptionChain
    {
        public MamdaOptionChain(string symbol)
        {
            setSymbol(symbol);
        }

        public void setSymbol(string symbol)
        {
            mSymbol = symbol;
        }

        public string getSymbol()
        {
            return mSymbol;
        }

        public void setUnderlyingQuoteListener(MamdaQuoteListener quoteListener)
        {
            mQuoteListener = quoteListener;
        }

        public void setUnderlyingTradeListener(MamdaTradeListener tradeListener)
        {
            mTradeListener = tradeListener;
        }

        public MamdaQuoteListener getUnderlyingQuoteListener()
        {
            return mQuoteListener;
        }

        public MamdaTradeListener getUnderlyingTradeListener()
        {
            return mTradeListener;
        }

        public MamdaOptionContract getContract(String contractSymbol)
        {
            return (MamdaOptionContract) mOptions.valueOf(contractSymbol);
        }

        public SortedSet getExchanges()
        {
            return mExchanges;
        }

        public SortedSet getStrikePrices()
        {
            return mStrikePrices;
        }

        public void addContract(
            string               contractSymbol,
            MamdaOptionContract  contract)
        {
            DateTime expireDate = contract.getExpireDate();
            double strikePrice  = contract.getStrikePrice();
            string exchange     = contract.getExchange();
            MamdaOptionContract.PutOrCall putCall = contract.getPutCall();

            mOptions.put(contractSymbol, contract);
            if (putCall == MamdaOptionContract.PutOrCall.Call)
            {
                mCallOptions.add(contract);
            }
            else
            {
                mPutOptions.add(contract);
            }

            // Add the contract to the expiration-by-strike set.
            MamdaOptionExpirationStrikes expireStrikes = (MamdaOptionExpirationStrikes)mExpirationSet.valueOf(expireDate);
            if (expireStrikes == null)
            {
                expireStrikes = new MamdaOptionExpirationStrikes();
                mExpirationSet.put(expireDate, expireStrikes);
            }
            MamdaOptionStrikeSet strikeSet = (MamdaOptionStrikeSet)expireStrikes.valueOf(strikePrice);
            if (strikeSet == null)
            {
                strikeSet = new MamdaOptionStrikeSet(expireDate, strikePrice);
                expireStrikes.put(strikePrice, strikeSet);
            }
            MamdaOptionContractSet contractSet = (putCall == MamdaOptionContract.PutOrCall.Call) ?
                strikeSet.getCallSet() : strikeSet.getPutSet();
            if (MamdaOptionExchangeUtils.isBbo(exchange))
            {
                contractSet.setBboContract(contract);
            }
            else if (MamdaOptionExchangeUtils.isWombatBbo(exchange))
            {
                contractSet.setWombatBboContract(contract);
            }
            else
            {
                contractSet.setExchangeContract(exchange, contract);
                mExchanges.add(exchange);
            }
            mStrikePrices.add(strikePrice);
        }

        public void removeContract(string contractSymbol)
        {
            /*TODO*/
        }

        public double getAtTheMoney(MamdaOptionAtTheMoneyCompareType compareType)
        {
            double atTheMoney = 0.0;
            switch (compareType)
            {
                case MamdaOptionAtTheMoneyCompareType.MID_QUOTE:
                    if (mQuoteListener == null) return 0.0;
                    atTheMoney = (mQuoteListener.getBidPrice().getValue() + mQuoteListener.getAskPrice().getValue()) / 2.0;
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

        public bool getIsPriceWithinPercentOfMoney(
            double                              price,
            double                              percentage,
            MamdaOptionAtTheMoneyCompareType    compareType)
        {
            double atTheMoney = getAtTheMoney(compareType);
            if (atTheMoney == 0.0)
                return false;

            return (((1.0 - percentage) <= price) || (price <= (1.0 + percentage)));
        }

        public SortedSet getStrikesWithinPercent(
            double  percentage,
            MamdaOptionAtTheMoneyCompareType compareType)
        {
            percentage /= 100.0;
            if (percentage <= 0.0)
                return null;

            double atTheMoney = getAtTheMoney(compareType);
            if (atTheMoney == 0.0)
                return null;

            double    lowPercent   = atTheMoney * (1.0 - percentage);
            double    highPercent  = atTheMoney * (1.0 + percentage);
            SortedSet strikeSubSet = mStrikePrices.subSet(lowPercent, highPercent);
            return strikeSubSet;
        }

        public SortedSet getStrikesWithinRangeSize (
            int                                 rangeLength,
            MamdaOptionAtTheMoneyCompareType    compareType)
        {
            if (rangeLength <= 0)
                return null;

            double atTheMoney  = getAtTheMoney(compareType);
            if (atTheMoney == 0.0)
                return null;

            int    countToMoney = 0;
            int    countFromMoney = 0;
            double halfRangeLength = rangeLength / 2.0;
            double lowerBound = Double.NaN;
            double upperBound = Double.NaN;

            // First loop determines the upper bound and count the number
            // of strikes that are less than the "money".
            Iterator strikeIter = mStrikePrices.iterator();
            while (strikeIter.hasNext())
            {
                double strikePrice = (double)strikeIter.next();
                if (strikePrice < atTheMoney)
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
                    upperBound = strikePrice + 0.00001;
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
                double strikePrice = (double)strikeIter.next();
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
            if (Double.IsNaN(lowerBound))
                lowerBound = 0.0;
            if (Double.IsNaN(upperBound))
                upperBound = Double.MaxValue;

            SortedSet result = mStrikePrices.subSet(lowerBound, upperBound);
            lowerBound = (double)result.first();
            upperBound = (double)result.last();

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

        public MamdaOptionExpirationDateSet getAllExpirations()
        {
            return mExpirationSet;
        }

        public void dump ()
        {
            Console.WriteLine("Dump chain: {0}", mSymbol);

            int i = 0;
            Iterator callIter = mCallOptions.iterator();
            Iterator putIter = mPutOptions.iterator();

            while (callIter.hasNext() || putIter.hasNext())
            {
                Console.WriteLine("{0} | ", i);
                if (callIter.hasNext())
                {
                    MamdaOptionContract callContract = (MamdaOptionContract)callIter.next();
                    dump(callContract);
                }
                else
                {
                    Console.Write("          ");
                }

                Console.Write(" | ");

                if (putIter.hasNext())
                {
                    MamdaOptionContract putContract = (MamdaOptionContract)putIter.next();
                    dump(putContract);
                }
                else
                {
                }
                Console.WriteLine();
                ++i;
            }
        }

        private void dump(MamdaOptionContract contract)
        {
            Console.Write("{0} {1}   {2}   {3}",
                contract.getSymbol(),
                contract.getExchange(),
                contract.getExpireDate(),
                contract.getStrikePrice());
        }

        private class ContractComparator : Comparator
        {
            /* Ascending expiration month, strike price, and exchange. */
            public int compare(object o1, object o2)
            {
                MamdaOptionContract contract1 = (MamdaOptionContract)o1;
                MamdaOptionContract contract2 = (MamdaOptionContract)o2;

                // Expiration month
                DateTime expiration1 = contract1.getExpireDate();
                DateTime expiration2 = contract2.getExpireDate();
                int comp = expiration1.CompareTo(expiration2);
                if (comp == 0)
                {
                    // Strike price
                    double strike1 = contract1.getStrikePrice();
                    double strike2 = contract2.getStrikePrice();
                    comp = strike1.CompareTo(strike2);
                }
                if (comp == 0)
                {
                    // Exchange
                    string exchange1 = contract1.getExchange();
                    string exchange2 = contract2.getExchange();
                    comp = exchange1.CompareTo(exchange2);
                }
                return comp;
            }

            public bool equals(object o1, object o2)
            {
                return (compare(o1, o2) == 0);
            }
        }

        private string                 mSymbol;
        private MamdaQuoteListener     mQuoteListener;
        private MamdaTradeListener     mTradeListener;

        private readonly HashMap mOptions    = new HashMap(1000);
        private readonly TreeSet mCallOptions= new TreeSet(new ContractComparator());
        private readonly TreeSet mPutOptions = new TreeSet(new ContractComparator());
        private readonly TreeSet mExchanges  = new TreeSet();
        private readonly TreeSet mStrikePrices = new TreeSet();
        private readonly MamdaOptionExpirationDateSet mExpirationSet = new MamdaOptionExpirationDateSet();
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
