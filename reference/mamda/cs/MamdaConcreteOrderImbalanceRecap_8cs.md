---
title: cs/MamdaConcreteOrderImbalanceRecap.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaConcreteOrderImbalanceRecap.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaConcreteOrderImbalanceRecap](classWombat_1_1MamdaConcreteOrderImbalanceRecap.html)**  |




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
    public class MamdaConcreteOrderImbalanceRecap
    {
        public MamdaConcreteOrderImbalanceRecap()
        {
        }

        public void clear()
        {
            mHighIndicationPrice = null;
            mLowIndicationPrice  = null;
            mIndicationPrice     = null;
            mBuyVolume           = 0;
            mSellVolume          = 0;
            mMatchVolume         = 0;
            mSecurityStatusQual  = null;
            mInsideMatchPrice    = null;
            mFarClearingPrice    = null;
            mNearClearingPrice   = null;
            mNoClearingPrice     = '\0';
            mPriceVarInd         = '\0';
            mCrossType           = '\0';
            mEventTime           = DateTime.MinValue;
            mEventSeqNum         = 0;
            mSrcTime             = DateTime.MinValue;
            mActTime             = DateTime.MinValue;
            mMsgType             = 0;
            mIssueSymbol         = null;
            mPartId              = null;
            mSeqNum              = 0;
            mSecurityStatusOrig  = null;
            mSecurityStatusTime  = DateTime.MinValue;
            mAuctionTime         = DateTime.MinValue;
            mSymbol              = null;
        }

        public DateTime getActivityTime()
        {
            return mActTime;
        }

        public MamdaFieldState getActivityTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setActivityTime(DateTime actTime)
        {
            if (actTime != DateTime.MinValue)
                this.mActTime = actTime;
        }

        public DateTime getLineTime()
        {
            return mLineTime;
        }

        public MamdaFieldState getLineTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setLineTime(DateTime lineTime)
        {
            if (lineTime != DateTime.MinValue)
                this.mLineTime = lineTime;
        }

        public DateTime getSendTime()
        {
            return mSendTime;
        }

        public MamdaFieldState getSendTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSendTime(DateTime sendTime)
        {
            if (sendTime != DateTime.MinValue)
                this.mSendTime = sendTime;
        }

        public DateTime getAuctionTime()
        {
            return mAuctionTime;
        }

        public MamdaFieldState getAuctionTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setAuctionTime(DateTime auctionTime)
        {
            if (auctionTime != DateTime.MinValue)
                this.mAuctionTime = auctionTime;
        }

        public long getBuyVolume()
        {
            return mBuyVolume;
        }

        public MamdaFieldState getBuyVolumeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setBuyVolume(long buyVolume)
        {
            this.mBuyVolume = buyVolume;
        }

        public char getCrossType()
        {
            return mCrossType;
        }

        public MamdaFieldState getCrossTypeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setCrossType(char crossType)
        {
            this.mCrossType = crossType;
        }

        public long getEventSeqNum()
        {
            return mEventSeqNum;
        }

        public MamdaFieldState getEventSeqNumFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setEventSeqNum(long eventSeqNum)
        {
            this.mEventSeqNum = eventSeqNum;
        }

        public DateTime getEventTime()
        {
            return mEventTime;
        }

        public MamdaFieldState getEventTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setEventTime(DateTime eventTime)
        {
            if (mEventTime != DateTime.MinValue)
                this.mEventTime = eventTime;
        }

        public MamaPrice getFarClearingPrice()
        {
            return mFarClearingPrice;
        }

        public MamdaFieldState getFarClearingPriceFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setFarClearingPrice(MamaPrice farClearingPrice)
        {
            if (null != farClearingPrice)
                this.mFarClearingPrice = new MamaPrice(farClearingPrice);
        }

        public MamaPrice getHighIndicationPrice()
        {
            return mHighIndicationPrice;
        }

        public MamdaFieldState getHighIndicationPriceFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setHighIndicationPrice(MamaPrice highIndicationPrice)
        {
            if (null != highIndicationPrice)
                this.mHighIndicationPrice = new MamaPrice(highIndicationPrice);
        }

        public MamaPrice getImbalancePrice()
        {
            return mIndicationPrice;
        }

        public MamdaFieldState getImbalancePriceFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setImbalancePrice(MamaPrice indicationPrice)
        {
            if (null != indicationPrice)
                this.mIndicationPrice = new MamaPrice(indicationPrice);
        }


        public MamaPrice getMatchPrice()
        {
            return mInsideMatchPrice;
        }

        public MamdaFieldState getMatchPriceFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setMatchPrice(MamaPrice insideMatchPrice)
        {
            if (null != insideMatchPrice)
                this.mInsideMatchPrice = new MamaPrice(insideMatchPrice);
        }

        public string getIssueSymbol()
        {
            return mIssueSymbol;
        }

        public MamdaFieldState getIssueSymbolFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setIssueSymbol(String issueSymbol)
        {
            if (issueSymbol != null)
                this.mIssueSymbol = issueSymbol;
        }

        public string getSymbol()
        {
            return mSymbol;
        }

        public MamdaFieldState getSymbolFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSymbol(String symbol)
        {
            if (symbol != null)
                this.mSymbol = symbol;
        }

        public MamaPrice getLowIndicationPrice()
        {
            return mLowIndicationPrice;
        }

        public MamdaFieldState getLowIndicationPriceFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setLowIndicationPrice(MamaPrice lowIndicationPrice)
        {
            if (null != lowIndicationPrice)
                this.mLowIndicationPrice = new MamaPrice(lowIndicationPrice);
        }

        public long getMatchVolume()
        {
            return mMatchVolume;
        }

        public MamdaFieldState getMatchVolumeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setMatchVolume(long matchVolume)
        {
            this.mMatchVolume = matchVolume;
        }

        public int getMsgType()
        {
            return mMsgType;
        }

        public MamdaFieldState getMsgTypeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setMsgType(int msgType)
        {
            this.mMsgType = msgType;
        }

        public MamaPrice getNearClearingPrice()
        {
            return mNearClearingPrice;
        }

        public MamdaFieldState getNearClearingPriceFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setNearClearingPrice(MamaPrice nearClearingPrice)
        {
            if (null != nearClearingPrice)
                this.mNearClearingPrice = new MamaPrice(nearClearingPrice);
        }

        public char getNoClearingPrice()
        {
            return mNoClearingPrice;
        }

        public MamdaFieldState getNoClearingPriceFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setNoClearingPrice(char noClearingPrice)
        {
            this.mNoClearingPrice = noClearingPrice;
        }

        public string getPartId()
        {
            return mPartId;
        }

        public MamdaFieldState getPartIdFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setPartId(String partId)
        {
            if (null != mPartId)
                this.mPartId = partId;
        }

        public char getPriceVarInd()
        {
            return mPriceVarInd;
        }

        public MamdaFieldState getPriceVarIndFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setPriceVarInd(char priceVarInd)
        {
            this.mPriceVarInd = priceVarInd;
        }

        public String getSecurityStatusOrig()
        {
            return mSecurityStatusOrig;
        }

        public MamdaFieldState getSecurityStatusOrigFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSecurityStatusOrig(string securityStatusOrig)
        {
            if (null != securityStatusOrig)
                this.mSecurityStatusOrig = securityStatusOrig;
        }

        public string getImbalanceState()
        {
            return mSecurityStatusQual;
        }

        public MamdaFieldState getImbalanceStateFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setImbalanceState(string securityStatusQual)
        {
            if (null != securityStatusQual)
                this.mSecurityStatusQual = securityStatusQual;
        }

        public DateTime getSecurityStatusTime()
        {
            return mSecurityStatusTime;
        }

        public MamdaFieldState getSecurityStatusTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSecurityStatusTime(DateTime securityStatusTime)
        {
            if (mSecurityStatusTime != DateTime.MinValue)
                this.mSecurityStatusTime = securityStatusTime;
        }

        public long getSellVolume()
        {
            return mSellVolume;
        }

        public MamdaFieldState getSellVolumeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSellVolume(long sellVolume)
        {
            this.mSellVolume = sellVolume;
        }

        public int getSeqNum()
        {
            return mSeqNum;
        }

        public MamdaFieldState getSeqNumFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSeqNum(int seqNum)
        {
            this.mSeqNum = seqNum;
        }

        public DateTime getSrcTime()
        {
            return mSrcTime;
        }

        public MamdaFieldState getSrcTimeFieldState()
        {
          return MamdaFieldState.MODIFIED;
        }

        public void setSrcTime(DateTime srcTime)
        {
            if (mSrcTime != DateTime.MinValue)
                this.mSrcTime = srcTime;
        }

        #region State

        private MamaPrice    mHighIndicationPrice = null;
        private MamaPrice    mLowIndicationPrice  = null;
        private MamaPrice    mIndicationPrice     = null;
        private long         mBuyVolume;
        private long         mSellVolume;
        private long         mMatchVolume;
        private String       mSecurityStatusQual;
        private MamaPrice    mInsideMatchPrice    = null;
        private MamaPrice    mFarClearingPrice    = null;
        private MamaPrice    mNearClearingPrice   = null;
        private char         mNoClearingPrice;
        private char         mPriceVarInd;
        private char         mCrossType;
        private DateTime     mEventTime           = DateTime.MinValue;
        private long         mEventSeqNum;
        private DateTime     mSrcTime             = DateTime.MinValue;
        private DateTime     mActTime             = DateTime.MinValue;
        private DateTime     mSendTime            = DateTime.MinValue;
        private DateTime     mLineTime            = DateTime.MinValue;

        private int          mMsgType;
        private String       mIssueSymbol         = null;
        private String       mSymbol              = null;
        private String       mPartId              = null;
        private int          mSeqNum;
        private String       mSecurityStatusOrig  = null;
        private DateTime     mSecurityStatusTime  = DateTime.MinValue;
        private DateTime     mAuctionTime         = DateTime.MinValue;

        #endregion State
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
