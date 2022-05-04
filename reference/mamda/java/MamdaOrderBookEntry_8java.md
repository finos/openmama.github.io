---
title: orderbook/MamdaOrderBookEntry.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# orderbook/MamdaOrderBookEntry.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda::orderbook](namespacecom_1_1wombat_1_1mamda_1_1orderbook.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::orderbook::MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)**  |




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

import com.wombat.mama.*;

import java.util.Iterator;

public class MamdaOrderBookEntry
{
    public static final char ACTION_ADD     = 'A';
    public static final char ACTION_UPDATE  = 'U';
    public static final char ACTION_DELETE  = 'D';
    public static final char ACTION_UNKNOWN = 'Z';

    private static boolean theStrictChecking = false;

    private String                     mId          = null;
    private String                     mUniqueId    = null;
    private double                     mSize        = 0;
    private MamdaOrderBookPriceLevel   mPriceLevel  = null;
    private MamdaOrderBookEntryManager mManager     = null;
    private MamaSourceDerivative       mSourceDeriv = null;
    private Object                     mClosure     = null;
    private short                      mQuality     = MamaQuality.QUALITY_OK;
    private char                       mAction      = 'A';
    private char                       mReason      = 'Z';
    private MamaDateTime               mTime        = null;
    private int                        mStatus      = 0;


    public MamdaOrderBookEntry ()
    {
    }

    public MamdaOrderBookEntry (MamdaOrderBookEntry copy)
    {
        mId          = copy.mId;
        mUniqueId    = copy.mUniqueId;
        mSize        = copy.mSize;
        mTime        = copy.mTime;
        mSourceDeriv = copy.mSourceDeriv;
        mClosure     = copy.mClosure;
        mQuality     = copy.mQuality;
        mAction      = copy.mAction;
        mReason      = copy.mReason;
        mStatus      = copy.mStatus;
    }

    public MamdaOrderBookEntry (String               entryId,
                                double               entrySize,
                                char                 action,
                                MamaDateTime         eventTime,
                                MamaSourceDerivative source)
    {
        mId          = entryId;
        mSize        = entrySize;
        mAction      = action;
        mTime        = eventTime;
        mSourceDeriv = source;
    }

    void clear ()
    {
        // First unhook ourselves from our manager using our "unique" ID:
        if (mManager != null)
        {
            mManager.removeEntry(getUniqueId());
        }

        // Now clear everything
        mId          = null;
        mUniqueId    = null;
        mSize        = 0;
        mTime.clear  ();
        mPriceLevel  = null;
        mManager     = null;
        mSourceDeriv = null;
        mClosure     = null;
        mQuality     = MamaQuality.QUALITY_OK;
        mAction      = ACTION_ADD;
        mReason      = MamdaOrderBookTypes.MAMDA_BOOK_REASON_UNKNOWN;
        mStatus      = 0;
    }


    public void copy (MamdaOrderBookEntry copy)
    {
        mId          = copy.mId;
        mUniqueId    = copy.mUniqueId;
        mSize        = copy.mSize;
        mPriceLevel  = null;
        mManager     = null;
        mSourceDeriv = copy.mSourceDeriv;
        mClosure     = copy.mClosure;
        mQuality     = copy.mQuality;
        mAction      = copy.mAction;
        mReason      = copy.mReason;
        mStatus      = copy.mStatus;

        if (null!=copy.mTime)
        {
            if (null == mTime)
                mTime=new MamaDateTime();
            mTime.copy(copy.mTime);
        }
        else
        {
            mTime = null;
        }
    }

    public void setId (String id)
    {
        mId = id;
    }

    public void setSize (double size)
    {
        mSize  = size;
    }

    public void setAction (char action)
    {
        mAction = action;
    }

    public void setReason (char reason)
    {
        mReason = reason;
    }

    public void setTime (MamaDateTime time)
    {
        if (null == mTime)
        {
            mTime = new MamaDateTime();
        }
        mTime.copy (time);
    }

    public void setDetails (MamdaOrderBookEntry copy)
    {
        mSize = copy.mSize;
        setTime (copy.mTime);
    }

    public void setDetails (MamdaBookAtomicLevelEntry  copy)
    {
      mSize = copy.getPriceLevelEntrySize();
      setTime (copy.getPriceLevelEntryTime());
    }
    
    public String getId ()
    {
        return mId;
    }

    public String getUniqueId ()
    {
        return mUniqueId != null ? mUniqueId : mId;
    }


    public double getSize ()
    {
        return mSize;
    }

    public char getAction ()
    {
        return mAction;
    }

    public char getReason ()
    {
        return mReason;
    } 

    public MamaDateTime getTime ()
    {
        return mTime;
    }

    public void setStatus (int value)
    {
        mStatus = value;
    }

    public int getStatus ()
    {
        return mStatus;
    }

    public double getPrice ()
    {
        if (mPriceLevel != null)
            return mPriceLevel.getPrice ().getValue ();
        else
            throw new MamdaOrderBookInvalidEntryException (
                this,
                "MamdaOrderBookEntry.getPrice()");
    }

    public char getSide ()
    {
        if (mPriceLevel != null)
            return mPriceLevel.getSide ();
        else
            throw new MamdaOrderBookInvalidEntryException (
                this,
                "MamdaOrderBookEntry.getSide()");
    }
    
    public int  getPosition (int  maxPos)
    {
        if (mPriceLevel == null)
            throw new MamdaOrderBookInvalidEntryException (this,
                                "MamdaOrderBookEntry.getPosition() (no level)");
        MamdaOrderBook  book = getOrderBook();
        assert (book != null);
        int  pos = 0;

        if (MamdaOrderBookPriceLevel.SIDE_BID == mPriceLevel.getSide())
        {
            Iterator i = book.bidIterator ();
            while (i.hasNext ())
            {
                MamdaOrderBookPriceLevel level =
                    (MamdaOrderBookPriceLevel) i.next ();
                if (level != mPriceLevel)
                {
                    // Not the level containing this entry
                    if (level.getPrice().getValue () <
                        mPriceLevel.getPrice().getValue ())
                    {
                        throw new MamdaOrderBookInvalidEntryException (this,
                                 "MamdaOrderBookEntry.getPosition() (bid)");
                    }
                    pos += level.getNumEntries();
                }
                else
                {
                    // Count the entries before this entry within the level
                    Iterator plIter = level.entryIterator ();
                    while (plIter.hasNext ())
                    {
                        if (plIter.next () == this)
                            return pos;
                        pos++;
                    }
                }
                if ((maxPos > 0) && (pos > maxPos))
                    return maxPos;
            }
        }
        else
        {
            Iterator i = book.askIterator ();
            while (i.hasNext ())
            {
                MamdaOrderBookPriceLevel level =
                    (MamdaOrderBookPriceLevel) i.next ();
                if (level != mPriceLevel)
                {
                    // Not the level containing this entry
                    if (level.getPrice().getValue () >
                        mPriceLevel.getPrice().getValue ())
                    {
                        throw new MamdaOrderBookInvalidEntryException (this,
                                 "MamdaOrderBookEntry.getPosition() (ask)");
                    }
                    pos += level.getNumEntries();
                }
                else
                {
                    // Count the entries before this entry within the level
                    Iterator plIter = level.entryIterator ();
                    while (plIter.hasNext ())
                    {
                        if (plIter.next () == this)
                            return pos;
                        pos++;
                    }
                }
                if ((maxPos > 0) && (pos > maxPos))
                    return maxPos;
            }
        }
        throw new MamdaOrderBookInvalidEntryException (this,
            "MamdaOrderBookEntry.getPosition() (not found)");
    }


    public long getEntryPositionInPriceLevel ()
    {
        if (mPriceLevel == null)
            return 0;

        return mPriceLevel.getEntryPositionInPriceLevel (mId);
    }

    public int hashCode ()
    {
        /* From Effective Java */
        int result = 17 + mId.hashCode ();
        result = 37*result + (int)mSize;
        result = 37*result + mAction;
        result = 37*result + mAction;
        return 37*result + mTime.hashCode ();
    }

    public boolean equals (Object obj)
    {
        if (obj instanceof MamdaOrderBookEntry)
        {
            MamdaOrderBookEntry entry = (MamdaOrderBookEntry) obj;
            return equalId (entry.mId) && (mSize == entry.mSize) &&
                   (mAction == entry.mAction) &&
                   (mTime.equals (entry.mTime));
        }
        return false;
    }

    public void setPriceLevel (MamdaOrderBookPriceLevel priceLevel)
    {
        mPriceLevel = priceLevel;
    }

    public MamdaOrderBookPriceLevel getPriceLevel ()
    {
        return mPriceLevel;
    }

    public MamdaOrderBook getOrderBook()
    {
        return mPriceLevel == null ? null : mPriceLevel.getOrderBook ();
    }

    public void setManager (MamdaOrderBookEntryManager  manager)
    {
        mManager = manager;
    }

    public MamdaOrderBookEntryManager getManager()
    {
        return mManager;
    }

    public String getSymbol ()
    {
        return mPriceLevel.getSymbol ();
    }

    public void setSourceDerivative (MamaSourceDerivative    source)
    {
        mSourceDeriv = source;
    }

    public MamaSourceDerivative  getSourceDerivative ()
    {
        return mSourceDeriv;
    }

    public MamaSource getSource ()
    {
        return mSourceDeriv != null ? mSourceDeriv.getBaseSource() : null;
    }

    public boolean getCheckSourceState ()
    {
        MamdaOrderBook  book = getOrderBook();
        return book != null && book.getCheckSourceState ();
    }

    public void setQuality (short  quality)
    {
        mQuality = quality;
    }

    public short getQuality ()
    {
        return mQuality;
    }

    public boolean isVisible ()
    {
        return getSourceState() == MamaSourceState.OK;
    }

    public void setClosure (Object  closure)
    {
        mClosure = closure;
    }

    public Object getClosure ()
    {
        return mClosure;
    }


    private MamaSourceState getSourceState ()
    {
        return mSourceDeriv != null ? mSourceDeriv.getState()
                                     : MamaSourceState.OK;
    }

    public void assertEqual (MamdaOrderBookEntry  rhs)
    {
        if (!(mId.equals (rhs.mId)))
        {
            throw new MamdaOrderBookException("entry IDs not equal");
        }
        if (mSize != rhs.mSize)
            throw new MamdaOrderBookException("entry size not equal");
        if (mAction != rhs.mAction)
            throw new MamdaOrderBookException("entry action not equal");
        if (mTime != null)
        {
            if ((rhs.mTime == null) || !mTime.equals (rhs.mTime))
                throw new MamdaOrderBookException("entry time not equal");
        } 
        else
        {
            if (rhs.mTime != null)
                throw new MamdaOrderBookException("entry time not equal");
        }            
    }

    public boolean equalId (String id)
    {
        if (mId != null)
            return mId.equals(id);
        else
            return id == null;
    }

    public static void setStrictChecking (boolean strict)
    {
        theStrictChecking = strict;
    }

    public void setUniqueId (String uniqueId)
    {
        mUniqueId = uniqueId;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
