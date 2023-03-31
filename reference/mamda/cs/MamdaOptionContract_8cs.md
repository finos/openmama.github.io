---
title: Options/MamdaOptionContract.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Options/MamdaOptionContract.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOptionContract](classWombat_1_1MamdaOptionContract.html)** <br>A class that represents a single option contract. Instances of this object are typically created by the [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html). Applications may attach a custom object to each instance of [MamdaOptionContract]().  |




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

namespace Wombat
{
    public class MamdaOptionContract
    {
        public enum PutOrCall : byte
        {
            Unknown = (byte)'Z',
            Call    = (byte)'C',
            Put     = (byte)'P'
        }

        public enum ExerciseStyle : byte
        {
            Unknown  = (byte)'Z',
            American = (byte)'A',
            European = (byte)'E',
            Capped   = (byte)'C'
        }

        private MamdaOptionContract()
        {
            // Hide the default constructor.
        }

        public MamdaOptionContract(
            string      symbol,
            string      exchange,
            DateTime    expireDate,
            double      strikePrice,
            PutOrCall   putCall)
        {
            mSymbol        = symbol;
            mExchange      = exchange;
            mExpireDate    = expireDate;
            mStrikePrice   = strikePrice;
            mPutCall       = putCall;
        }

        public void setOpenInterest(long openInterest)
        {
            mOpenInterest = openInterest;
        }

        public void setExerciseStyle(ExerciseStyle exerciseStyle)
        {
            mExerciseStyle = exerciseStyle;
        }

        public string getSymbol()
        {
            return mSymbol;
        }

        public string getExchange()
        {
            return mExchange;
        }

        public DateTime getExpireDate()
        {
            return mExpireDate;
        }

        public string getExpireDateStr()
        {
            return mExpireFormat.Format(mExpireDate);
        }

        public double getStrikePrice()
        {
            return mStrikePrice;
        }

        public PutOrCall getPutCall()
        {
            return mPutCall;
        }

        public long getOpenInterest()
        {
            return mOpenInterest;
        }

        public ExerciseStyle getExerciseStyle()
        {
            return mExerciseStyle;
        }

        public void addTradeHandler(MamdaTradeHandler handler)
        {
            mTradeListener.addHandler(handler);
        }

        public void addQuoteHandler(MamdaQuoteHandler handler)
        {
            mQuoteListener.addHandler(handler);
        }

        public void addFundamentalHandler(MamdaFundamentalHandler handler)
        {
            mFundamentalListeners.addHandler(handler);
        }

        public void setCustomObject(object obj)
        {
            mCustomObject = obj;
        }

        public MamdaTradeRecap getTradeInfo()
        {
            return mTradeListener;
        }

        public MamdaQuoteRecap getQuoteInfo()
        {
            return mQuoteListener;
        }

        public MamdaFundamentals getFundamentalsInfo()
        {
            return mFundamentalListeners;
        }

        public object getCustomObject()
        {
            return mCustomObject;
        }

        public MamdaTradeListener getTradeListener()
        {
            return mTradeListener;
        }

        public MamdaQuoteListener getQuoteListener()
        {
            return mQuoteListener;
        }

        public MamdaFundamentalListener getFundamentalListener()
        {
            return mFundamentalListeners;
        }

        public void setInView(bool inView)
        {
            mInView = inView;
        }

        public bool getInView()
        {
            return mInView;
        }

        private string              mSymbol;
        private string              mExchange;
        private DateTime            mExpireDate    = DateTime.MinValue;
        private double              mStrikePrice   = 0.0;
        private PutOrCall           mPutCall       = PutOrCall.Unknown;
        private long                mOpenInterest;
        private ExerciseStyle       mExerciseStyle;
        private MamdaTradeListener  mTradeListener = new MamdaTradeListener();
        private MamdaQuoteListener  mQuoteListener = new MamdaQuoteListener();
        private MamdaFundamentalListener mFundamentalListeners = new MamdaFundamentalListener();
        private object              mCustomObject;
        private bool                mInView;
        private SimpleDateFormat    mExpireFormat = new SimpleDateFormat("MMMyy");
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:18 +0100
