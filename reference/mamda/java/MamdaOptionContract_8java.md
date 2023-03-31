---
title: options/MamdaOptionContract.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# options/MamdaOptionContract.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::options](namespacecom_1_1wombat_1_1mamda_1_1options.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::options::MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html)**  |




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
import java.text.SimpleDateFormat;
import java.util.Date;

public class MamdaOptionContract
{
    public static final char PC_UNKNOWN              = ' ';
    public static final char PC_CALL                 = 'C';
    public static final char PC_PUT                  = 'P';

    public static final char EXERCISE_STYLE_AMERICAN = 'A';
    public static final char EXERCISE_STYLE_EUROPEAN = 'E';
    public static final char EXERCISE_STYLE_CAPPED   = 'C';
    public static final char EXERCISE_STYLE_UNKNOWN  = 'Z';

    private String                   mSymbol                = null;
    private String                   mExchange              = null;
    private Date                     mExpireDate            = null;
    private double                   mStrikePrice           = 0.0;
    private char                     mPutCall               = PC_UNKNOWN;
    private long                     mOpenInterest          = 0;
    private char                     mExerciseStyle         = EXERCISE_STYLE_UNKNOWN;
    private boolean                  mInScope               = false;
    private MamdaTradeListener       mTradeListener         = new MamdaTradeListener();
    private MamdaQuoteListener       mQuoteListener         = new MamdaQuoteListener();
    private MamdaFundamentalListener mFundamentalListener   = new MamdaFundamentalListener();
    private Object                   mCustomObject          = null;
    private boolean                  mInView                = false;
    private SimpleDateFormat         mExpireFormat          = new SimpleDateFormat("MMMyy");

    private MamdaOptionContract()
    {
        // Hide the default constructor.
    }

    public MamdaOptionContract (String  symbol,
                                String  exchange,
                                Date    expireDate,
                                double  strikePrice,
                                char    putCall)
    {
        mSymbol        = symbol;
        mExchange      = exchange;
        mExpireDate    = expireDate;
        mStrikePrice   = strikePrice;
        mPutCall       = putCall;
    }

    public void setOpenInterest (long  openInterest)
    {
        mOpenInterest = openInterest;
    }

    public void setExerciseStyle (char  exerciseStyle)
    {
        mExerciseStyle = exerciseStyle;
    }

    public String getSymbol ()
    {
        return mSymbol;
    }

    public String getExchange ()
    {
        return mExchange;
    }

    public Date getExpireDate ()
    {
        return mExpireDate;
    }

    public String getExpireDateStr ()
    {
        return mExpireFormat.format(mExpireDate);
    }

    public double getStrikePrice ()
    {
        return mStrikePrice;
    }

    public char getPutCall ()
    {
        return mPutCall;
    }

    public long getOpenInterest ()
    {
        return mOpenInterest;
    }

    public char getExerciseStyle ()
    {
        return mExerciseStyle;
    }

    public void addTradeHandler (MamdaTradeHandler handler)
    {
        mTradeListener.addHandler(handler);
    }

    public void addQuoteHandler (MamdaQuoteHandler handler)
    {
        mQuoteListener.addHandler(handler);
    }

    public void addFundamentalHandler (MamdaFundamentalHandler handler)
    {
        mFundamentalListener.addHandler(handler);
    }

    public void setCustomObject (Object object)
    {
        mCustomObject = object;
    }

    public MamdaTradeRecap getTradeInfo ()
    {
        return mTradeListener;
    }

    public MamdaQuoteRecap getQuoteInfo ()
    {
        return mQuoteListener;
    }

    public MamdaFundamentals getFundamentalsInfo ()
    {
        return mFundamentalListener;
    }

    public Object getCustomObject ()
    {
        return mCustomObject;
    }

    public MamdaTradeListener getTradeListener ()
    {
        return mTradeListener;
    }

    public MamdaQuoteListener getQuoteListener ()
    {
        return mQuoteListener;
    }

    public MamdaFundamentalListener getFundamentalListener ()
    {
        return mFundamentalListener;
    }

    public void setInView (boolean inView)
    {
        mInView = inView;
    }

    public boolean getInView ()
    {
        return mInView;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100
