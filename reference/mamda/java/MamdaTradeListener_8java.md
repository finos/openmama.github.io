---
title: mamda/MamdaTradeListener.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeListener.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |
| **[java::lang](namespacejava_1_1lang.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html)**  |
| class | **[com::wombat::mamda::MamdaTradeListener::TradeLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener_1_1TradeLineTime.html)**  |
| class | **[com::wombat::mamda::MamdaTradeListener::TradeSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener_1_1TradeSendTime.html)**  |




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

package com.wombat.mamda;

import com.wombat.mama.*;
import java.util.logging.Logger;
import java.util.Iterator;
import java.util.LinkedList;
import java.io.*;
import java.lang.*;

public class MamdaTradeListener implements MamdaMsgListener, 
                                           MamdaTradeRecap,
                                           MamdaTradeReport,
                                           MamdaTradeGap,
                                           MamdaTradeCancelOrError,
                                           MamdaTradeCorrection,
                                           MamdaTradeClosing
{
    private static Logger mLogger =
            Logger.getLogger("com.wombat.mamda.MamdaTradeListener");

    // We only need a single instance for use accross all Listener instances.
    // Each updater instance maintains no state.
    private static TradeUpdate  mUpdaters []        = null;
    private static boolean      mUpdatersComplete   = false;
    private static Object       mUpdatersLock       = new Object ();

    private final LinkedList    mHandlers           = new LinkedList();

    // Whether we should try to identify updates as trades.
    // This is true by default. Any feed wishing to not have updates processed
    // as trades will send a flag in the initial value indicating the fact.
    private MamaBoolean mProcessUpdateAsTrade =  new MamaBoolean();

    // The following fields are used for caching the offical last
    // price and related fields.  These fields can be used by
    // applications for reference and will be passed for recaps.
    protected final MamdaTradeCache mTradeCache =
                new MamdaTradeCache ();

    private boolean mIgnoreUpdate = false;

    private class MamdaTradeCache 
    {
        public MamdaTradeCache ()
        {
            int ii = 0;
            mIrregFieldStates[ii++] = mIrregPriceFieldState;
            mIrregFieldStates[ii++] = mIrregVolumeFieldState;
            mIrregFieldStates[ii++] = mIrregPartIdFieldState;
            mIrregFieldStates[ii++] = mIrregTimeFieldState;
        }

        public boolean IsIrregular ()
        {
            boolean result = false;

            // Use the wIsIrregular field if present
            if (MamdaFieldState.MODIFIED == mIsIrregularFieldState.getState ())
            {
                result = mIsIrregular.getValue ();
            }
            else
            {
                // An Irreg field implies that the Trade is irregular
                for (int ii = 0 ; ( !result && (ii < mIrregFieldStates.length)) ; ++ii)
                {
                    result = (MamdaFieldState.MODIFIED == mIrregFieldStates[ii].getState ());
                }
            }

            return result;
        }

        // The following fields are used for caching the offical last
        // price and related fields.  These fields can be used by
        // applications for reference and will be passed for recaps.
        public MamaString       mSymbol            = new MamaString();     
        public MamaString       mIssueSymbol       = new MamaString();
        public MamaString       mPartId            = new MamaString();
        public MamaDateTime     mSrcTime           = new MamaDateTime();
        public MamaDateTime     mActTime           = new MamaDateTime();
        public MamaDateTime     mLineTime          = new MamaDateTime();
        public MamaDateTime     mSendTime          = new MamaDateTime();
        public MamaString       mPubId             = new MamaString();
        public MamaString       mTradeId           = new MamaString ();
        public MamaString       mOrigTradeId       = new MamaString ();
        public MamaString       mCorrTradeId       = new MamaString ();
        public MamaBoolean      mIsIrregular       = new MamaBoolean();
        public MamaPrice        mLastPrice         = new MamaPrice();
        public MamaDouble       mLastVolume        = new MamaDouble();
        public MamaString       mLastPartId        = new MamaString();
        public MamaDateTime     mLastDate          = new MamaDateTime();
        public MamaDateTime     mLastTime          = new MamaDateTime();
        public MamaPrice        mIrregPrice        = new MamaPrice();
        public MamaDouble       mIrregVolume       = new MamaDouble();
        public MamaString       mIrregPartId       = new MamaString();
        public MamaDateTime     mIrregTime         = new MamaDateTime();
        public MamaDouble       mAccVolume         = new MamaDouble();
        public MamaDouble       mOffExAccVolume    = new MamaDouble();
        public MamaDouble       mOnExAccVolume     = new MamaDouble();
        public MamaString       mTradeDirection    = new MamaString ();
        public MamaChar         mTmpChar           = new MamaChar();     
        public MamdaTradeSide   mTmpSide           = new MamdaTradeSide();
        public MamaPrice        mNetChange         = new MamaPrice();
        public MamaDouble       mPctChange         = new MamaDouble();
        public MamaPrice        mOpenPrice         = new MamaPrice();
        public MamaPrice        mHighPrice         = new MamaPrice();
        public MamaPrice        mLowPrice          = new MamaPrice();
        public MamaPrice        mClosePrice        = new MamaPrice();
        public MamaPrice        mPrevClosePrice    = new MamaPrice();
        public MamaDateTime     mPrevCloseDate     = new MamaDateTime();
        public MamaPrice        mAdjPrevClose      = new MamaPrice();
        public long             mTradeCount        = 0;
        public MamaDouble       mBlockVolume       = new MamaDouble();
        public MamaLong         mBlockCount        = new MamaLong();
        public MamaDouble       mVwap              = new MamaDouble();
        public MamaDouble       mOffExVwap         = new MamaDouble();
        public MamaDouble       mOnExVwap          = new MamaDouble();
        public MamaDouble       mTotalValue        = new MamaDouble();
        public MamaDouble       mOffExTotalValue   = new MamaDouble();
        public MamaDouble       mOnExTotalValue    = new MamaDouble();
        public MamaDouble       mStdDev            = new MamaDouble();
        public MamaDouble       mStdDevSum         = new MamaDouble();
        public MamaDouble       mStdDevSumSquares  = new MamaDouble();
        public MamaLong         mOrderId           = new MamaLong();
        public MamaPrice        mSettlePrice       = new MamaPrice();
        public MamaDateTime     mSettleDate        = new MamaDateTime();
        public MamaChar         mShortSaleCircuitBreaker = new MamaChar();
        

        // The following fields are used for caching the last reported
        // trade, which might have been out of order.  The reason for
        // cahcing these values is to allow a configuration that passes
        // the minimum amount of data  (unchanged fields not sent).
        public MamaLong         mEventSeqNum       = new MamaLong();
        public MamaDateTime     mEventTime         = new MamaDateTime ();
        public MamaPrice        mTradePrice        = new MamaPrice();
        public MamaDouble       mTradeVolume       = new MamaDouble();       
        public MamaString       mTradePartId       = new MamaString ();
        public MamaString       mTradeQualStr      = new MamaString ();
        public MamaString       mTradeQualNativeStr = new MamaString ();
        public MamaLong         mSellersSaleDays   = new MamaLong();
        public MamaChar         mStopStockInd      = new MamaChar ();

        public MamaString       mTradeExecVenue    = new MamaString();
        public MamaPrice        mOffExTradePrice   = new MamaPrice();
        public MamaPrice        mOnExTradePrice    = new MamaPrice();

        //mTmpTradeCount ~ see below

        // Additional fields for cancels/error/corrections:
        public boolean          mIsCancel          = false;
        public MamaLong         mOrigSeqNum        = new MamaLong();
        public MamaPrice        mOrigPrice         = new MamaPrice();
        public MamaDouble       mOrigVolume        = new MamaDouble();
        public MamaString       mOrigPartId        = new MamaString ();
        public MamaString       mOrigQualStr       = new MamaString ();
        public MamaString       mOrigQualNativeStr = new MamaString ();
        public MamaLong         mOrigSellersSaleDays = new MamaLong();
        public MamaChar         mOrigStopStockInd  = new MamaChar ();
        public MamaChar         mOrigShortSaleCircuitBreaker = new MamaChar();
        public MamaPrice        mCorrPrice         = new MamaPrice();
        public MamaDouble       mCorrVolume        = new MamaDouble();
        public MamaString       mCorrPartId        = new MamaString ();
        public MamaString       mCorrQualStr       = new MamaString ();
        public MamaString       mCorrQualNativeStr = new MamaString ();
        public MamaLong         mCorrSellersSaleDays = new MamaLong();
        public MamaChar         mCorrStopStockInd  = new MamaChar ();
        public MamaDateTime     mCorrTime          = new MamaDateTime ();
        public MamaDateTime     mCancelTime        = new MamaDateTime ();
        public MamaString       mTradeUnits        = new MamaString ();
        public MamaLong         mLastSeqNum        = new MamaLong();
        public MamaLong         mHighSeqNum        = new MamaLong();
        public MamaLong         mLowSeqNum         = new MamaLong();
        public MamaLong         mTotalVolumeSeqNum = new MamaLong();
        public MamaString       mCurrencyCode      = new MamaString ();

        // Not in C++.
        public MamaString       mTradeCondStr      = new MamaString ();
        public MamaString       mOrigCondStr       = new MamaString ();
        public MamaString       mCorrCondStr       = new MamaString ();

        // This is an aggreggated field for aggressorside and trade side.
        public String           mSide              = new String ();

        public MamaLong         mConflateCount     = new MamaLong();

        public boolean          mGotPartId         = false;
        public boolean          mLastGenericMsgWasTrade = false;
        public boolean          mGotTradeTime      = false;
        public boolean          mGotTradePrice     = false;
        public boolean          mGotTradeSize      = false;
        public boolean          mGotTradeCount     = false;
        public boolean          mGotIssueSymbol    = false;
        

        /*      FieldState          */     
        public MamdaFieldState  mSymbolFieldState            = new MamdaFieldState();
        public MamdaFieldState  mIssueSymbolFieldState       = new MamdaFieldState();
        public MamdaFieldState  mPartIdFieldState            = new MamdaFieldState();
        public MamdaFieldState  mSrcTimeFieldState           = new MamdaFieldState();
        public MamdaFieldState  mActTimeFieldState           = new MamdaFieldState();
        public MamdaFieldState  mLineTimeFieldState          = new MamdaFieldState();
        public MamdaFieldState  mSendTimeFieldState          = new MamdaFieldState();
        public MamdaFieldState  mPubIdFieldState             = new MamdaFieldState();
        public MamdaFieldState  mIsIrregularFieldState       = new MamdaFieldState();
        public MamdaFieldState  mLastPriceFieldState         = new MamdaFieldState();
        public MamdaFieldState  mLastVolumeFieldState        = new MamdaFieldState();
        public MamdaFieldState  mLastPartIdFieldState        = new MamdaFieldState();
        public MamdaFieldState  mLastDateFieldState          = new MamdaFieldState();
        public MamdaFieldState  mLastTimeFieldState          = new MamdaFieldState();
        public MamdaFieldState  mIrregPriceFieldState        = new MamdaFieldState();
        public MamdaFieldState  mIrregVolumeFieldState       = new MamdaFieldState();
        public MamdaFieldState  mIrregPartIdFieldState       = new MamdaFieldState();
        public MamdaFieldState  mIrregTimeFieldState         = new MamdaFieldState();
        public MamdaFieldState  mAccVolumeFieldState         = new MamdaFieldState();
        public MamdaFieldState  mOffExAccVolumeFieldState    = new MamdaFieldState();
        public MamdaFieldState  mOnExAccVolumeFieldState     = new MamdaFieldState();
        public MamdaFieldState  mTradeDirectionFieldState    = new MamdaFieldState ();    
        public MamdaFieldState  mSideFieldState              = new MamdaFieldState();   
        public MamdaFieldState  mNetChangeFieldState         = new MamdaFieldState();
        public MamdaFieldState  mPctChangeFieldState         = new MamdaFieldState();
        public MamdaFieldState  mOpenPriceFieldState         = new MamdaFieldState();
        public MamdaFieldState  mHighPriceFieldState         = new MamdaFieldState();
        public MamdaFieldState  mLowPriceFieldState          = new MamdaFieldState();
        public MamdaFieldState  mClosePriceFieldState        = new MamdaFieldState();
        public MamdaFieldState  mPrevClosePriceFieldState    = new MamdaFieldState();
        public MamdaFieldState  mPrevCloseDateFieldState     = new MamdaFieldState();
        public MamdaFieldState  mAdjPrevCloseFieldState      = new MamdaFieldState();
        public MamdaFieldState  mTradeCountFieldState        = new MamdaFieldState();
        public MamdaFieldState  mBlockVolumeFieldState       = new MamdaFieldState();
        public MamdaFieldState  mBlockCountFieldState        = new MamdaFieldState();
        public MamdaFieldState  mVwapFieldState              = new MamdaFieldState();
        public MamdaFieldState  mOffExVwapFieldState         = new MamdaFieldState();
        public MamdaFieldState  mOnExVwapFieldState          = new MamdaFieldState();
        public MamdaFieldState  mTotalValueFieldState        = new MamdaFieldState();
        public MamdaFieldState  mOffExTotalValueFieldState   = new MamdaFieldState();
        public MamdaFieldState  mOnExTotalValueFieldState    = new MamdaFieldState();
        public MamdaFieldState  mStdDevFieldState            = new MamdaFieldState();
        public MamdaFieldState  mStdDevSumFieldState         = new MamdaFieldState();
        public MamdaFieldState  mStdDevSumSquaresFieldState  = new MamdaFieldState();
        public MamdaFieldState  mOrderIdFieldState           = new MamdaFieldState();
        public MamdaFieldState  mSettlePriceFieldState       = new MamdaFieldState();
        public MamdaFieldState  mSettleDateFieldState        = new MamdaFieldState();
        public MamdaFieldState  mShortSaleCircuitBreakerFieldState  = new MamdaFieldState();

        // The following fields are used for caching the last reported
        // trade, which might have been out of order.  The reason for
        // cahcing these values is to allow a configuration that passes
        // the minimum amount of data  (unchanged fields not sent).
        public MamdaFieldState  mEventSeqNumFieldState       = new MamdaFieldState();
        public MamdaFieldState  mEventTimeFieldState         = new MamdaFieldState ();
        public MamdaFieldState  mTradePriceFieldState        = new MamdaFieldState();
        public MamdaFieldState  mTradeVolumeFieldState       = new MamdaFieldState();
        public MamdaFieldState  mTradePartIdFieldState       = new MamdaFieldState ();
        public MamdaFieldState  mTradeIdFieldState           = new MamdaFieldState ();
        public MamdaFieldState  mOrigTradeIdFieldState       = new MamdaFieldState ();
        public MamdaFieldState  mCorrTradeIdFieldState       = new MamdaFieldState ();
        public MamdaFieldState  mTradeQualStrFieldState      = new MamdaFieldState ();
        public MamdaFieldState  mTradeQualNativeStrFieldState = new MamdaFieldState ();
        public MamdaFieldState  mSellersSaleDaysFieldState   = new MamdaFieldState();
        public MamdaFieldState  mStopStockIndFieldState      = new MamdaFieldState ();

        public MamdaFieldState  mTradeExecVenueFieldState    = new MamdaFieldState();
        public MamdaFieldState  mOffExTradePriceFieldState   = new MamdaFieldState();
        public MamdaFieldState  mOnExTradePriceFieldState    = new MamdaFieldState();

        //mTmpTradeCount ~ see below

        // Additional fields for cancels/error/corrections:
        public MamdaFieldState  mIsCancelFieldState          = new MamdaFieldState();
        public MamdaFieldState  mOrigSeqNumFieldState        = new MamdaFieldState();
        public MamdaFieldState  mOrigPriceFieldState         = new MamdaFieldState();
        public MamdaFieldState  mOrigVolumeFieldState        = new MamdaFieldState();
        public MamdaFieldState  mOrigPartIdFieldState        = new MamdaFieldState ();
        public MamdaFieldState  mOrigQualStrFieldState       = new MamdaFieldState ();
        public MamdaFieldState  mOrigQualNativeStrFieldState = new MamdaFieldState ();
        public MamdaFieldState  mOrigSellersSaleDaysFieldState = new MamdaFieldState();
        public MamdaFieldState  mOrigStopStockIndFieldState  = new MamdaFieldState ();
        public MamdaFieldState  mCorrPriceFieldState         = new MamdaFieldState();
        public MamdaFieldState  mCorrVolumeFieldState        = new MamdaFieldState();
        public MamdaFieldState  mCorrPartIdFieldState        = new MamdaFieldState ();
        public MamdaFieldState  mCorrQualStrFieldState       = new MamdaFieldState ();
        public MamdaFieldState  mCorrQualNativeStrFieldState = new MamdaFieldState ();
        public MamdaFieldState  mCorrSellersSaleDaysFieldState = new MamdaFieldState();
        public MamdaFieldState  mCorrStopStockIndFieldState  = new MamdaFieldState ();
        public MamaChar         mCorrShortSaleCircuitBreaker = new MamaChar();
        public MamdaFieldState  mCorrTimeFieldState          = new MamdaFieldState ();
        public MamdaFieldState  mCancelTimeFieldState        = new MamdaFieldState ();
        public MamdaFieldState  mTradeUnitsFieldState        = new MamdaFieldState ();
        public MamdaFieldState  mLastSeqNumFieldState        = new MamdaFieldState();
        public MamdaFieldState  mHighSeqNumFieldState        = new MamdaFieldState();
        public MamdaFieldState  mLowSeqNumFieldState         = new MamdaFieldState();
        public MamdaFieldState  mTotalVolumeSeqNumFieldState = new MamdaFieldState();
        public MamdaFieldState  mCurrencyCodeFieldState      = new MamdaFieldState ();

        // Not in C++.
        //public MamdaFieldState      mTradeCondStrFieldState      = new MamdaFieldState ();
        public MamdaFieldState  mOrigCondStrFieldState       = new MamdaFieldState ();
        public MamdaFieldState  mCorrCondStrFieldState       = new MamdaFieldState ();
        public MamdaFieldState  mOrigShortSaleCircuitBreakerFieldState = new MamdaFieldState();
        public MamdaFieldState  mCorrShortSaleCircuitBreakerFieldState = new MamdaFieldState();       


        public MamdaFieldState  mConflateCountFieldState     = new MamdaFieldState();
        public MamdaFieldState  mTradeCondStrFieldState      = new MamdaFieldState();      

        private final MamdaFieldState[] mIrregFieldStates    = new MamdaFieldState[4];
    }

    // Additional fields for gaps:
    private long                mGapBegin          = 0;
    private long                mGapEnd            = 0;

    private MamdaFieldState     mGapBeginFieldState          = new MamdaFieldState();
    private MamdaFieldState     mGapEndFieldState            = new MamdaFieldState();

    // Fields for closing reports:
    private final MamaBoolean   mIsIndicative                = new MamaBoolean();
    private MamdaFieldState     mIsIndicativeFieldState      = new MamdaFieldState();
    private final MamaLong      mTmpTradeCount               = new MamaLong();

    private MamaMsgField        tmpField                     = new MamaMsgField();

    public MamdaTradeListener ()
    {
        clearCache (mTradeCache);
    }

    public void printCache (MamdaTradeCache cache)
    {
        System.out.println ("mSymbol = "      + cache.mSymbol.getValue     ());
        System.out.println ("mTradePrice = "  + cache.mLastPrice.getValue  ());
        System.out.println ("mHighPrice = "   + cache.mHighPrice.getValue  ());
        System.out.println ("mLowPrice = "    + cache.mLowPrice.getValue   ());
        System.out.println ("mTradePrice = "  + cache.mTradePrice.getValue ());
        System.out.println ("mTradeVolume = " + cache.mTradeVolume.getValue());
        System.out.println ("mTradePartId = " + cache.mTradePartId.getValue());
        System.out.println ("mTradeId = "     + cache.mTradeId.getValue    ());
        System.out.println ("mOrigTradeId = " + cache.mOrigTradeId.getValue());
        System.out.println ("mCorrTradeId = " + cache.mCorrTradeId.getValue());
    }

    public void clearCache (MamdaTradeCache cache)
    {
        cache.mSymbol.setValue(null);
        cache.mIssueSymbol.setValue(null);
        cache.mPartId.setValue(null);
        cache.mSrcTime.clear(); 
        cache.mActTime.clear(); 
        cache.mLineTime.clear();
        cache.mSendTime.clear();
        cache.mPubId.setValue(null);
        cache.mIsIrregular.setValue(false);
        cache.mLastPrice.clear();
        cache.mLastVolume.setValue(0);
        cache.mLastPartId.setValue(null);  
        cache.mLastDate.clear();
        cache.mLastTime.clear();
        cache.mIrregPrice .clear();    
        cache.mIrregVolume.setValue(0);
        cache.mIrregPartId.setValue(null); 
        cache.mIrregTime.clear();          
        cache.mAccVolume.setValue(0);      
        cache.mOffExAccVolume.setValue(0); 
        cache.mOnExAccVolume.setValue(0);  
        cache.mTradeDirection.setValue(null); 
        cache.mTmpChar.setValue(' ');
        cache.mSide = "";
        cache.mTmpSide.setState((short)MamdaTradeSide.TRADE_SIDE_UNKNOWN);
        cache.mNetChange.clear();                 
        cache.mPctChange.setValue(0);             
        cache.mOpenPrice.clear();                 
        cache.mHighPrice.clear();                 
        cache.mLowPrice.clear();                  
        cache.mClosePrice.clear();                
        cache.mShortSaleCircuitBreaker.setValue(' ');
        cache.mOrigShortSaleCircuitBreaker.setValue(' ');
        cache.mCorrShortSaleCircuitBreaker.setValue(' ');
        cache.mPrevClosePrice.clear();            
        cache.mPrevCloseDate.clear();             
        cache.mAdjPrevClose.clear();              
        cache.mTradeCount = 0;                    
        cache.mBlockVolume.setValue(0);           
        cache.mBlockCount.setValue(0);            
        cache.mVwap.setValue(0);                  
        cache.mOffExVwap.setValue(0);             
        cache.mOnExVwap.setValue(0);              
        cache.mTotalValue.setValue(0);            
        cache.mOffExTotalValue.setValue(0);       
        cache.mOnExTotalValue.setValue(0);        
        cache.mStdDev.setValue(0);                
        cache.mStdDevSum.setValue(0);             
        cache.mStdDevSumSquares.setValue(0);      
        cache.mOrderId.setValue(0);               
        cache.mSettlePrice.clear();               
        cache.mSettleDate.clear();                
        cache.mEventSeqNum.setValue(0);           
        cache.mEventTime.clear();                 
        cache.mTradePrice.clear();                
        cache.mTradeVolume.setValue(0);           
        cache.mTradePartId.setValue(null);  
        cache.mTradeId.setValue(null);  
        cache.mOrigTradeId.setValue(null);  
        cache.mCorrTradeId.setValue(null);  
        cache.mTradeQualStr.setValue(null);       
        cache.mTradeQualNativeStr.setValue(null); 
        cache.mSellersSaleDays.setValue(0);       
        cache.mStopStockInd.setValue('0');        
        cache.mTradeExecVenue.setValue(null);     
        cache.mOffExTradePrice.clear();           
        cache.mOnExTradePrice.clear();            
        cache.mIsCancel = false;                  
        cache.mOrigSeqNum .setValue(0);           
        cache.mOrigPrice.clear();                 
        cache.mOrigVolume.setValue(0);            
        cache.mOrigPartId.setValue(null);         
        cache.mOrigQualStr.setValue(null);        
        cache.mOrigQualNativeStr.setValue(null);  
        cache.mOrigSellersSaleDays.setValue(0);   
        cache.mOrigStopStockInd.setValue('0');    
        cache.mCorrPrice.clear();                 
        cache.mCorrVolume.setValue(0);            
        cache.mCorrPartId .setValue(null);        
        cache.mCorrQualStr.setValue(null);        
        cache.mCorrQualNativeStr.setValue(null);  
        cache.mCorrSellersSaleDays.setValue(0);   
        cache.mCorrStopStockInd.setValue('0');
        cache.mCorrTime.clear();
        cache.mCancelTime.clear();                
        cache.mTradeCondStr.setValue(null);       
        cache.mOrigCondStr.setValue(null);        
        cache.mCorrCondStr.setValue(null);        
        cache.mTradeUnits.setValue(null);         
        cache.mLastSeqNum.setValue(0);            
        cache.mHighSeqNum.setValue(0);            
        cache.mLowSeqNum.setValue(0);             
        cache.mTotalVolumeSeqNum.setValue(0);     
        cache.mCurrencyCode.setValue(null);       
        cache.mConflateCount.setValue(0);         

        cache.mGotPartId               = false;
        cache.mLastGenericMsgWasTrade  = false;
        cache.mGotTradeTime            = false;
        cache.mGotTradePrice           = false;
        cache.mGotTradeSize            = false;
        cache.mGotTradeCount           = false;

        mProcessUpdateAsTrade.setValue(true);
        
        cache.mSymbolFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mIssueSymbolFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mPartIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mSrcTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mActTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLineTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mSendTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mPubIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mIsIrregularFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLastPriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLastVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLastPartIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLastDateFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLastTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mIrregPriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mIrregVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mIrregPartIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mIrregTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mAccVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mShortSaleCircuitBreakerFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigShortSaleCircuitBreakerFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrShortSaleCircuitBreakerFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOffExAccVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOnExAccVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeDirectionFieldState.setState(MamdaFieldState.NOT_INITIALISED);      
        cache.mSideFieldState.setState(MamdaFieldState.NOT_INITIALISED);      
        cache.mNetChangeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mPctChangeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOpenPriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mHighPriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLowPriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mClosePriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mPrevClosePriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mPrevCloseDateFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mAdjPrevCloseFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeCountFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mBlockVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mBlockCountFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mVwapFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOffExVwapFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOnExVwapFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTotalValueFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOffExTotalValueFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOnExTotalValueFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mStdDevFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mStdDevSumFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mStdDevSumSquaresFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrderIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mSettlePriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mSettleDateFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mEventSeqNumFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mEventTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradePriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradePartIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigTradeIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrTradeIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeQualStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeQualNativeStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mSellersSaleDaysFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mStopStockIndFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeExecVenueFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOffExTradePriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOnExTradePriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mIsCancelFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigSeqNumFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigPriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigPartIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigQualStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigQualNativeStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigSellersSaleDaysFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigStopStockIndFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrPriceFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrVolumeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrPartIdFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrQualStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrQualNativeStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrSellersSaleDaysFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrStopStockIndFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCancelTimeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeCondStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mOrigCondStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCorrCondStrFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTradeUnitsFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLastSeqNumFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mHighSeqNumFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mLowSeqNumFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mTotalVolumeSeqNumFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mCurrencyCodeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        cache.mConflateCountFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        mGapBeginFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        mGapEndFieldState.setState(MamdaFieldState.NOT_INITIALISED);
        mIsIndicativeFieldState.setState(MamdaFieldState.NOT_INITIALISED);
    }

    public void addHandler (MamdaTradeHandler handler)
    {
        mHandlers.addLast(handler);
    }

    // Inherited from MamdaBasicRecap and MamdaBasicEvent: 

    public String getSymbol()
    {
        return mTradeCache.mSymbol.getValue();
    }

    public String getPartId()
    {
        return mTradeCache.mPartId.getValue();
    }

    public MamaDateTime getSrcTime()
    {
        return mTradeCache.mSrcTime;
    }

    public MamaDateTime getActivityTime()
    {
        return mTradeCache.mActTime;
    }

    public MamaDateTime getLineTime()
    {
        return mTradeCache.mLineTime;
    }

    public MamaDateTime getSendTime()
    {
        return mTradeCache.mSendTime;
    }

    public String getPubId()
    {
        return mTradeCache.mPubId.getValue();
    }

    public long getEventSeqNum()
    {
        return mTradeCache.mEventSeqNum.getValue();
    }

    public MamaDateTime getEventTime()
    {
        return mTradeCache.mEventTime;
    }

    // Trade recap fields access:

    public MamaPrice getLastPrice()
    {
        return mTradeCache.mLastPrice;
    }

    public double getLastVolume()
    {
        return mTradeCache.mLastVolume.getValue();
    }

    public char getShortSaleCircuitBreaker()
    {
        return mTradeCache.mShortSaleCircuitBreaker.getValue();
    }

    public char getOrigShortSaleCircuitBreaker()
    {
        return mTradeCache.mOrigShortSaleCircuitBreaker.getValue();
    }
   
    public char getCorrShortSaleCircuitBreaker()
    {
        return mTradeCache.mCorrShortSaleCircuitBreaker.getValue();
    }

    public String getLastPartId()
    {
        return mTradeCache.mLastPartId.getValue();
    }

    public MamaDateTime getLastDate()
    {
        return mTradeCache.mLastDate;
    }

    public MamaDateTime getLastTime()
    {
        return mTradeCache.mLastTime;
    }

    public MamaDateTime getLastDateTime()
    {
        MamaDateTime mLastDateTime = new MamaDateTime (mTradeCache.mLastTime, mTradeCache.mLastDate);

        return mLastDateTime;
    }

    public MamaPrice getIrregPrice()
    {
        return mTradeCache.mIrregPrice;
    }

    public double getIrregVolume()
    {
        return mTradeCache.mIrregVolume.getValue();
    }

    public String getIrregPartId()
    {
        return mTradeCache.mIrregPartId.getValue();
    }

    public MamaDateTime getIrregTime()
    {
        return mTradeCache.mIrregTime;
    }

    public MamaDateTime getTradeDate()
    {
        MamaDateTime mLastDateTime = new MamaDateTime (mTradeCache.mLastTime, mTradeCache.mLastDate);

        return mLastDateTime;
    }

    public double getAccVolume()
    {
        return mTradeCache.mAccVolume.getValue();
    }

    public double getOffExAccVolume()
    {
        return mTradeCache.mOffExAccVolume.getValue();
    }

    public double getOnExAccVolume()
    {
        return mTradeCache.mOnExAccVolume.getValue();
    }

    public MamaPrice getNetChange()
    {
        return mTradeCache.mNetChange;
    }

    public double getPctChange()
    {
        return mTradeCache.mPctChange.getValue();
    }

    public String getTradeDirection()
    {
        return mTradeCache.mTradeDirection.getValue();
    }

    public String getSide()
    {       
        return mTradeCache.mSide;
    }

    public MamaPrice getOpenPrice()
    {
        return mTradeCache.mOpenPrice;
    }

    public MamaPrice getHighPrice()
    {
        return mTradeCache.mHighPrice;
    }

    public MamaPrice getLowPrice()
    {
        return mTradeCache.mLowPrice;
    }

    public MamaPrice getClosePrice()
    {
        return mTradeCache.mClosePrice;
    }

    public MamaPrice getPrevClosePrice()
    {
        return mTradeCache.mPrevClosePrice;
    }

    public MamaDateTime getPrevCloseDate()
    {
        return mTradeCache.mPrevCloseDate;
    }

    public MamaPrice getAdjPrevClose()
    {
        return mTradeCache.mAdjPrevClose;
    }

    public long   getBlockCount()
    {
        return mTradeCache.mBlockCount.getValue();
    }

    public double  getBlockVolume()
    {
        return mTradeCache.mBlockVolume.getValue();
    }

    public double getVwap()
    {
        return mTradeCache.mVwap.getValue();
    }

    public double getOffExVwap()
    {
        return mTradeCache.mOffExVwap.getValue();
    }

    public double getOnExVwap()
    {
        return mTradeCache.mOnExVwap.getValue();
    }

    public double getTotalValue()
    {
        return mTradeCache.mTotalValue.getValue();
    }

    public double getOffExTotalValue()
    {
        return mTradeCache.mOffExTotalValue.getValue();
    }

    public double getOnExTotalValue()
    {
        return mTradeCache.mOnExTotalValue.getValue();
    }

    public double getStdDev()
    {
        return mTradeCache.mStdDev.getValue();
    }

    public double getStdDevSum()
    {
        return mTradeCache.mStdDevSum.getValue();
    }

    public double getStdDevSumSquares()
    {
        return mTradeCache.mStdDevSumSquares.getValue();
    }

    public long getOrderId ()
    {
        return mTradeCache.mOrderId.getValue();
    }

    public MamaPrice getSettlePrice()
    {
        return mTradeCache.mSettlePrice;
    }

    public MamaDateTime getSettleDate()
    {
        return mTradeCache.mSettleDate;
    }

    // Trade Report field access:
    public MamaPrice getTradePrice()
    {
        return mTradeCache.mTradePrice;
    }

    public double getTradeVolume()
    {
        return mTradeCache.mTradeVolume.getValue();
    }

    public String getTradePartId()
    {
        return mTradeCache.mTradePartId.getValue();
    }

    public String getTradeId()
    {
        return mTradeCache.mTradeId.getValue();
    }

    public String getOrigTradeId()
    {
        return mTradeCache.mOrigTradeId.getValue();
    }

    public String getCorrTradeId()
    {
        return mTradeCache.mCorrTradeId.getValue();
    }

    public String getTradeQual()
    {
        return mTradeCache.mTradeQualStr.getValue();
    }

    public String getTradeQualNativeStr()
    {
        return mTradeCache.mTradeQualNativeStr.getValue();
    }

    public String getTradeCondition()
    {
        return mTradeCache.mTradeCondStr.getValue();
    }

    public long getTradeSellersSaleDays()
    {
        return mTradeCache.mSellersSaleDays.getValue();
    }

    public char getTradeStopStock()
    {
        return mTradeCache.mStopStockInd.getValue();
    }

    public String getTradeExecVenue()
    {
        return mTradeCache.mTradeExecVenue.getValue();
    }

    public MamaPrice getOffExchangeTradePrice()
    {
        return mTradeCache.mOffExTradePrice;
    }

    public MamaPrice getOnExchangeTradePrice()
    {
        return mTradeCache.mOnExTradePrice;
    }

    public long getTradeCount()
    {
        return mTradeCache.mTradeCount;
    }

    public String getTradeUnits()
    {
        return mTradeCache.mTradeUnits.getValue();
    } 

    public long getLastSeqNum()
    {
        return mTradeCache.mLastSeqNum.getValue();
    }

    public long getHighSeqNum()
    {
        return mTradeCache.mHighSeqNum.getValue();
    }

    public long getLowSeqNum()
    {
        return mTradeCache.mLowSeqNum.getValue();
    }

    public long getTotalVolumeSeqNum()
    {
        return mTradeCache.mTotalVolumeSeqNum.getValue();
    }

    public String getCurrencyCode()
    {
        return mTradeCache.mCurrencyCode.getValue();
    } 

    public boolean getIsIrregular()
    {
        return mTradeCache.mIsIrregular.getValue();
    }

    public long getBeginGapSeqNum()
    {
        return mGapBegin;
    }

    public long getEndGapSeqNum()
    {
        return mGapEnd;
    }

    public boolean getIsCancel()
    {
        return mTradeCache.mIsCancel;
    }

    public long    getOrigSeqNum()
    {
        return mTradeCache.mOrigSeqNum.getValue();
    }

    public double  getOrigPrice()
    {
        return mTradeCache.mOrigPrice.getValue();
    }

    public double   getOrigVolume()
    {
        return mTradeCache.mOrigVolume.getValue();
    }

    public String  getOrigPartId()
    {
        return mTradeCache.mOrigPartId.getValue();
    }

    public String  getOrigQual()
    {
        return mTradeCache.mOrigQualStr.getValue();
    }

    public String getOrigQualNative()
    {
        return mTradeCache.mOrigQualNativeStr.getValue();
    }

    public String  getOrigCondition()
    {
        return mTradeCache.mOrigCondStr.getValue();
    }

    public long    getOrigSellersSaleDays()
    {
        return mTradeCache.mOrigSellersSaleDays.getValue();
    }

    public char    getOrigStopStock()
    {
        return mTradeCache.mOrigStopStockInd.getValue();
    }

    public double  getCorrPrice()
    {
        return mTradeCache.mCorrPrice.getValue();
    }

    public double   getCorrVolume()
    {
        return mTradeCache.mCorrVolume.getValue();
    }

    public String  getCorrPartId()
    {
        return mTradeCache.mCorrPartId.getValue();
    }

    public String  getCorrQual()
    {
        return mTradeCache.mCorrQualStr.getValue();
    }

    public String getCorrQualNative()
    {
        return mTradeCache.mCorrQualNativeStr.getValue();
    }

    public String  getCorrCondition()
    {
        return mTradeCache.mCorrCondStr.getValue();
    }

    public long    getCorrSellersSaleDays()
    {
        return mTradeCache.mCorrSellersSaleDays.getValue();
    }

    public char    getCorrStopStock()
    {
        return mTradeCache.mCorrStopStockInd.getValue();
    }

    public boolean getIsIndicative()
    {
        return mIsIndicative.getValue();
    }    
    
    public boolean IsIrregular()
    {
        return mTradeCache.IsIrregular ();
    }

/*      FieldState Accessors        */

    public short getSymbolFieldState()
    {
        return mTradeCache.mSymbolFieldState.getState();
    }

    public short getPartIdFieldState()
    {
        return mTradeCache.mPartIdFieldState.getState();
    }

    public short getSrcTimeFieldState()
    {
        return mTradeCache.mSrcTimeFieldState.getState();
    }

    public short getActivityTimeFieldState()
    {
        return mTradeCache.mActTimeFieldState.getState();
    }

    public short getLineTimeFieldState()
    {
        return mTradeCache.mLineTimeFieldState.getState();
    }

    public short getSendTimeFieldState()
    {
        return mTradeCache.mSendTimeFieldState.getState();
    }
         
    public short getShortSaleCircuitBreakerFieldState()
    {          
        return mTradeCache.mShortSaleCircuitBreakerFieldState.getState();
    }

    public short getOrigShortSaleCircuitBreakerFieldState()
    {          
        return mTradeCache.mOrigShortSaleCircuitBreakerFieldState.getState();
    }

    public short getCorrShortSaleCircuitBreakerFieldState()
    {          
        return mTradeCache.mCorrShortSaleCircuitBreakerFieldState.getState();
    }

    public short getPubIdFieldState()
    {
        return mTradeCache.mPubIdFieldState.getState();
    }

    public short getEventSeqNumFieldState()
    {
        return mTradeCache.mEventSeqNumFieldState.getState();
    }

    public short getEventTimeFieldState()
    {
        return mTradeCache.mEventTimeFieldState.getState();
    }

    // Trade recap fields access:

    public short getLastPriceFieldState()
    {
        return mTradeCache.mLastPriceFieldState.getState();
    }

    public short getLastVolumeFieldState()
    {
        return mTradeCache.mLastVolumeFieldState.getState();
    }

    public short getLastPartIdFieldState()
    {
        return mTradeCache.mLastPartIdFieldState.getState();
    }

    public short getLastDateFieldState()
    {
        return mTradeCache.mLastDateFieldState.getState();
    }

    public short getLastTimeFieldState()
    {
        return mTradeCache.mLastTimeFieldState.getState();
    }

    public short getIrregPriceFieldState()
    {
        return mTradeCache.mIrregPriceFieldState.getState();
    }

    public short getIrregVolumeFieldState()
    {
        return mTradeCache.mIrregVolumeFieldState.getState();
    }

    public short getIrregPartIdFieldState()
    {
        return mTradeCache.mIrregPartIdFieldState.getState();
    }

    public short getIrregTimeFieldState()
    {
        return mTradeCache.mIrregTimeFieldState.getState();
    }

    public short getAccVolumeFieldState()
    {
        return mTradeCache.mAccVolumeFieldState.getState();
    }

    public short getOffExAccVolumeFieldState()
    {
        return mTradeCache.mOffExAccVolumeFieldState.getState();
    }

    public short getOnExAccVolumeFieldState()
    {
        return mTradeCache.mOnExAccVolumeFieldState.getState();
    }

    public short getNetChangeFieldState()
    {
        return mTradeCache.mNetChangeFieldState.getState();
    }

    public short getPctChangeFieldState()
    {
        return mTradeCache.mPctChangeFieldState.getState();
    }

    public short getTradeDirectionFieldState()
    {
        return mTradeCache.mTradeDirectionFieldState.getState();
    }

    public short getSideFieldState()
    {      
        return mTradeCache.mSideFieldState.getState();
    }

    public short getOpenPriceFieldState()
    {
        return mTradeCache.mOpenPriceFieldState.getState();
    }

    public short getHighPriceFieldState()
    {
        return mTradeCache.mHighPriceFieldState.getState();
    }

    public short getLowPriceFieldState()
    {
        return mTradeCache.mLowPriceFieldState.getState();
    }

    public short getClosePriceFieldState()
    {
        return mTradeCache.mClosePriceFieldState.getState();
    }

    public short getPrevClosePriceFieldState()
    {
        return mTradeCache.mPrevClosePriceFieldState.getState();
    }

    public short getPrevCloseDateFieldState()
    {
        return mTradeCache.mPrevCloseDateFieldState.getState();
    }

    public short getAdjPrevCloseFieldState()
    {
        return mTradeCache.mAdjPrevCloseFieldState.getState();
    }

    public short   getBlockCountFieldState()
    {
        return mTradeCache.mBlockCountFieldState.getState();
    }

    public short  getBlockVolumeFieldState()
    {
        return mTradeCache.mBlockVolumeFieldState.getState();
    }

    public short getVwapFieldState()
    {
        return mTradeCache.mVwapFieldState.getState();
    }

    public short getOffExVwapFieldState()
    {
        return mTradeCache.mOffExVwapFieldState.getState();
    }

    public short getOnExVwapFieldState()
    {
        return mTradeCache.mOnExVwapFieldState.getState();
    }

    public short getTotalValueFieldState()
    {
        return mTradeCache.mTotalValueFieldState.getState();
    }

    public short getOffExTotalValueFieldState()
    {
        return mTradeCache.mOffExTotalValueFieldState.getState();
    }

    public short getOnExTotalValueFieldState()
    {
        return mTradeCache.mOnExTotalValueFieldState.getState();
    }

    public short getStdDevFieldState()
    {
        return mTradeCache.mStdDevFieldState.getState();
    }

    public short getStdDevSumFieldState()
    {
        return mTradeCache.mStdDevSumFieldState.getState();
    }

    public short getStdDevSumSquaresFieldState()
    {
        return mTradeCache.mStdDevSumSquaresFieldState.getState();
    }

    public short getOrderIdFieldState()
    {
        return mTradeCache.mOrderIdFieldState.getState();
    }

    public short getSettlePriceFieldState()
    {
        return mTradeCache.mSettlePriceFieldState.getState();
    }

    public short getSettleDateFieldState()
    {
        return mTradeCache.mSettleDateFieldState.getState();
    }

    // Trade Report field access:

    public short getTradePriceFieldState()
    {
        return mTradeCache.mTradePriceFieldState.getState();
    }

    public short getTradeVolumeFieldState()
    {
        return mTradeCache.mTradeVolumeFieldState.getState();
    }

    public short getTradePartIdFieldState()
    {
        return mTradeCache.mTradePartIdFieldState.getState();
    }

    public short getTradeIdFieldState()
    {
        return mTradeCache.mTradeIdFieldState.getState();
    }

    public short getOrigTradeIdFieldState()
    {
        return mTradeCache.mOrigTradeIdFieldState.getState();
    }

    public short getCorrTradeIdFieldState()
    {
        return mTradeCache.mCorrTradeIdFieldState.getState();
    }

    public short getTradeQualFieldState()
    {
        return mTradeCache.mTradeQualStrFieldState.getState();
    }

    public short getTradeQualNativeStrFieldState()
    {
        return mTradeCache.mTradeQualNativeStrFieldState.getState();
    }

    public short getTradeConditionFieldState()
    {
        return mTradeCache.mTradeCondStrFieldState.getState();
    }

    public short getTradeSellersSaleDaysFieldState()
    {
        return mTradeCache.mSellersSaleDaysFieldState.getState();
    }

    public short getTradeStopStockFieldState()
    {
        return mTradeCache.mStopStockIndFieldState.getState();
    }

    public short getTradeExecVenueFieldState()
    {
        return mTradeCache.mTradeExecVenueFieldState.getState();
    }

    public short getOffExchangeTradePriceFieldState()
    {
        return mTradeCache.mOffExTradePriceFieldState.getState();
    }

    public short getOnExchangeTradePriceFieldState()
    {
        return mTradeCache.mOnExTradePriceFieldState.getState();
    }

    public short getTradeCountFieldState()
    {
        return mTradeCache.mTradeCountFieldState.getState();
    }

    public short getTradeUnitsFieldState()
    {
        return mTradeCache.mTradeUnitsFieldState.getState();
    } 

    public short getLastSeqNumFieldState()
    {
        return mTradeCache.mLastSeqNumFieldState.getState();
    }

    public short getHighSeqNumFieldState()
    {
        return mTradeCache.mHighSeqNumFieldState.getState();
    }

    public short getLowSeqNumFieldState()
    {
        return mTradeCache.mLowSeqNumFieldState.getState();
    }

    public short getTotalVolumeSeqNumFieldState()
    {
        return mTradeCache.mTotalVolumeSeqNumFieldState.getState();
    }

    public short getCurrencyCodeFieldState()
    {
        return mTradeCache.mCurrencyCodeFieldState.getState();
    } 

    public short getIsIrregularFieldState()
    {
        return mTradeCache.mIsIrregularFieldState.getState();
    }

    public short getBeginGapSeqNumFieldState()
    {
        return mGapBeginFieldState.getState();
    }

    public short   getEndGapSeqNumFieldState()
    {
        return mGapEndFieldState.getState();
    }

    public short getIsCancelFieldState()
    {
        return mTradeCache.mIsCancelFieldState.getState();
    }

    public short    getOrigSeqNumFieldState()
    {
        return mTradeCache.mOrigSeqNumFieldState.getState();
    }

    public short  getOrigPriceFieldState()
    {
        return mTradeCache.mOrigPriceFieldState.getState();
    }

    public short   getOrigVolumeFieldState()
    {
        return mTradeCache.mOrigVolumeFieldState.getState();
    }

    public short  getOrigPartIdFieldState()
    {
        return mTradeCache.mOrigPartIdFieldState.getState();
    }

    public short  getOrigQualFieldState()
    {
        return mTradeCache.mOrigQualStrFieldState.getState();
    }

    public short getOrigQualNativeFieldState()
    {
        return mTradeCache.mOrigQualNativeStrFieldState.getState();
    }

    public short  getOrigConditionFieldState()
    {
        return mTradeCache.mOrigCondStrFieldState.getState();
    }

    public short    getOrigSellersSaleDaysFieldState()
    {
        return mTradeCache.mOrigSellersSaleDaysFieldState.getState();
    }

    public short    getOrigStopStockFieldState()
    {
        return mTradeCache.mOrigStopStockIndFieldState.getState();
    }

    public short  getCorrPriceFieldState()
    {
        return mTradeCache.mCorrPriceFieldState.getState();
    }

    public short   getCorrVolumeFieldState()
    {
        return mTradeCache.mCorrVolumeFieldState.getState();
    }

    public short  getCorrPartIdFieldState()
    {
        return mTradeCache.mCorrPartIdFieldState.getState();
    }

    public short  getCorrQualFieldState()
    {
        return mTradeCache.mCorrQualStrFieldState.getState();
    }

    public short getCorrQualNativeFieldState()
    {
        return mTradeCache.mCorrQualNativeStrFieldState.getState();
    }

    public short  getCorrConditionFieldState()
    {
        return mTradeCache.mCorrCondStrFieldState.getState();
    }

    public short    getCorrSellersSaleDaysFieldState()
    {
        return mTradeCache.mCorrSellersSaleDaysFieldState.getState();
    }

    public short    getCorrStopStockFieldState()
    {
        return mTradeCache.mCorrStopStockIndFieldState.getState();
    }

    public short getIsIndicativeFieldState()
    {
        return mIsIndicativeFieldState.getState();
    }

    /*      End FieldState Accessors        */

    public void onMsg (MamdaSubscription subscription,
                       MamaMsg           msg,
                       short             msgType)
    {    
        // Listeners may be created on multiple threads and we only
        // want a single list of updaters.
        if (!mUpdatersComplete)
        {
            synchronized (mUpdatersLock)
            {
                if (!MamdaTradeFields.isSet())
                {
                    mLogger.warning ("MamdaTradeFields::setDictionary() has not been called.");
                    return;
                }
                if (!mUpdatersComplete)
                {
                    createUpdaters ();
                    mUpdatersComplete = true;
                }
            }
        }

        // If msg is a trade-related message, invoke the
        // appropriate callback:

        switch (msgType)
        {
            case MamaMsgType.TYPE_INITIAL:
            case MamaMsgType.TYPE_RECAP:
            case MamaMsgType.TYPE_PREOPENING:
                handleRecap (subscription, msg);
                break;

            case MamaMsgType.TYPE_TRADE:
                handleTrade (subscription, msg);
                break;

            case MamaMsgType.TYPE_CANCEL:
                handleCancelOrError (subscription, msg, true);
                break;

            case MamaMsgType.TYPE_ERROR:
                handleCancelOrError (subscription, msg, false);
                break;

            case MamaMsgType.TYPE_CORRECTION:
                handleCorrection (subscription, msg);
                break;

            case MamaMsgType.TYPE_CLOSING:
                handleClosing (subscription, msg);
                break;

            case MamaMsgType.TYPE_UPDATE:
                /*We may not be attempting to process updates as trades*/
                if (mProcessUpdateAsTrade.getValue())
                {
                    handleUpdate (subscription, msg);
                }
                break;
        }
    }

    private void handleRecap (MamdaSubscription  subscription,
                              MamaMsg            msg)
    {
        updateFieldStates();
        updateTradeFields (msg);

        mTradeCache.mIsIrregularFieldState.setState(MamdaFieldState.MODIFIED);

        checkTradeCount (subscription, msg, false);

        Iterator i = mHandlers.iterator();
        while (i.hasNext())
        {
            MamdaTradeHandler handler = (MamdaTradeHandler) i.next();
            handler.onTradeRecap (subscription, this, msg, this);
        }
    }

    private void handleTrade (MamdaSubscription  subscription,
                              MamaMsg            msg)
    {
        updateFieldStates();
        updateTradeFields (msg);

        checkTradeCount (subscription, msg, true);

        if (mIgnoreUpdate)
        {
            mIgnoreUpdate = false;
            return;
        }

        Iterator i = mHandlers.iterator();
        while (i.hasNext())
        {
            MamdaTradeHandler handler = (MamdaTradeHandler) i.next();
            handler.onTradeReport (subscription, this, msg, this, this);
        }
    }

    private void handleCancelOrError (MamdaSubscription  subscription,
                                      MamaMsg            msg,
                                      boolean            isCancel)
    {
        updateFieldStates();
        updateTradeFields (msg);
        mTradeCache.mIsCancel = isCancel;
        mTradeCache.mIsCancelFieldState.setState (MamdaFieldState.MODIFIED);

        checkTradeCount (subscription, msg, true);

        if (mIgnoreUpdate)
        {
            mIgnoreUpdate = false;
            return;
        }

        if (!mTradeCache.mCancelTime.isEmpty())
        {
            mTradeCache.mEventTime = mTradeCache.mCancelTime;
            mTradeCache.mEventTimeFieldState.setState (MamdaFieldState.MODIFIED);
        }

        Iterator i = mHandlers.iterator();
        while (i.hasNext())
        {
            MamdaTradeHandler handler = (MamdaTradeHandler) i.next();
            handler.onTradeCancelOrError (subscription,this,msg,this,this);
        }
    }

    private void handleCorrection (MamdaSubscription  subscription,
                                   MamaMsg            msg)
    {
        updateFieldStates();  
        updateTradeFields (msg);
        checkTradeCount (subscription, msg, true);

        if (mIgnoreUpdate)
        {
            mIgnoreUpdate = false;
            return;
        }

        if (!mTradeCache.mCorrTime.isEmpty())
        {
            mTradeCache.mEventTime = mTradeCache.mCorrTime;
            mTradeCache.mEventTimeFieldState.setState (MamdaFieldState.MODIFIED);
        }

        Iterator i = mHandlers.iterator();
        while (i.hasNext())
        {
            MamdaTradeHandler handler = (MamdaTradeHandler) i.next();
            handler.onTradeCorrection (subscription, this, msg, this, this);
        }
    }

    private void handleUpdate (MamdaSubscription  subscription,
                               MamaMsg            msg)
    {
        updateFieldStates();
        updateTradeFields (msg);
        checkTradeCount (subscription, msg, true);

        if (mIgnoreUpdate)
        {
            mIgnoreUpdate = false;
            return;
        }

        if (mTradeCache.mLastGenericMsgWasTrade)
        {
            Iterator i = mHandlers.iterator();
            while (i.hasNext())
            {
                MamdaTradeHandler handler = (MamdaTradeHandler) i.next();
                handler.onTradeReport (subscription, this, msg, this, this);
            }
        }
    }

    private void handleClosing (MamdaSubscription  subscription,
                                MamaMsg            msg)
    {
        updateFieldStates();
        updateTradeFields (msg);
        checkTradeCount (subscription, msg, true);

        if (mIgnoreUpdate)
        {
            mIgnoreUpdate = false;
            return;
        }

        Iterator i = mHandlers.iterator();
        while (i.hasNext())
        {
            MamdaTradeHandler handler = (MamdaTradeHandler) i.next();
            handler.onTradeClosing (subscription, this, msg, this, this);
        }
    }

    private void updateFieldStates ()
    {
        if (mTradeCache.mSymbolFieldState.getState() ==  MamdaFieldState.MODIFIED)
            mTradeCache.mSymbolFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mIssueSymbolFieldState.getState() == MamdaFieldState.MODIFIED)
            mTradeCache.mIssueSymbolFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mPartIdFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mPartIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mSrcTimeFieldState.getState() == MamdaFieldState.MODIFIED)      
            mTradeCache.mSrcTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mActTimeFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mActTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLineTimeFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mLineTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mSendTimeFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mSendTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mPubIdFieldState.getState() == MamdaFieldState.MODIFIED)       
            mTradeCache.mPubIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mIsIrregularFieldState.getState() == MamdaFieldState.MODIFIED)
            mTradeCache.mIsIrregularFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLastPriceFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mLastPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLastVolumeFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mLastVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLastPartIdFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mLastPartIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLastDateFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mLastDateFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLastTimeFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mLastTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mIrregPriceFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mIrregPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mIrregVolumeFieldState.getState() == MamdaFieldState.MODIFIED)  
            mTradeCache.mIrregVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mIrregPartIdFieldState.getState() == MamdaFieldState.MODIFIED)
            mTradeCache.mIrregPartIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mIrregTimeFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mIrregTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mAccVolumeFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mAccVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOffExAccVolumeFieldState.getState() == MamdaFieldState.MODIFIED)
            mTradeCache.mOffExAccVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOnExAccVolumeFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mOnExAccVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradeDirectionFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mTradeDirectionFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mNetChangeFieldState.getState() == MamdaFieldState.MODIFIED)         
            mTradeCache.mNetChangeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mPctChangeFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mPctChangeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOpenPriceFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mOpenPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mHighPriceFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mHighPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLowPriceFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mLowPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mClosePriceFieldState.getState() == MamdaFieldState.MODIFIED)  
            mTradeCache.mClosePriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mPrevClosePriceFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mPrevClosePriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mPrevCloseDateFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mPrevCloseDateFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mAdjPrevCloseFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mAdjPrevCloseFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradeCountFieldState.getState() == MamdaFieldState.MODIFIED)      
            mTradeCache.mTradeCountFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mBlockVolumeFieldState.getState() == MamdaFieldState.MODIFIED)       
            mTradeCache.mBlockVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mBlockCountFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mBlockCountFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mVwapFieldState.getState() == MamdaFieldState.MODIFIED)          
            mTradeCache.mVwapFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOffExVwapFieldState.getState() == MamdaFieldState.MODIFIED)         
            mTradeCache.mOffExVwapFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOnExVwapFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mOnExVwapFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTotalValueFieldState.getState() == MamdaFieldState.MODIFIED)  
            mTradeCache.mTotalValueFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOffExTotalValueFieldState.getState() == MamdaFieldState.MODIFIED)  
            mTradeCache.mOffExTotalValueFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOnExTotalValueFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mOnExTotalValueFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mStdDevFieldState.getState() == MamdaFieldState.MODIFIED)            
            mTradeCache.mStdDevFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mStdDevSumFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mStdDevSumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mStdDevSumSquaresFieldState.getState() == MamdaFieldState.MODIFIED)  
            mTradeCache.mStdDevSumSquaresFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrderIdFieldState.getState() == MamdaFieldState.MODIFIED)           
            mTradeCache.mOrderIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mSettlePriceFieldState.getState() == MamdaFieldState.MODIFIED)       
            mTradeCache.mSettlePriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mSettleDateFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mSettleDateFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mEventSeqNumFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mEventSeqNumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mEventTimeFieldState.getState() == MamdaFieldState.MODIFIED)      
            mTradeCache.mEventTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradePriceFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mTradePriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradeVolumeFieldState.getState() == MamdaFieldState.MODIFIED)       
            mTradeCache.mTradeVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradePartIdFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mTradePartIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradeIdFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mTradeIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigTradeIdFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mOrigTradeIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrTradeIdFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mCorrTradeIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradeQualStrFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mTradeQualStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradeQualNativeStrFieldState.getState() == MamdaFieldState.MODIFIED)
            mTradeCache.mTradeQualNativeStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mSellersSaleDaysFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mSellersSaleDaysFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mStopStockIndFieldState.getState() == MamdaFieldState.MODIFIED)      
            mTradeCache.mStopStockIndFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradeExecVenueFieldState.getState() == MamdaFieldState.MODIFIED)  
            mTradeCache.mTradeExecVenueFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOffExTradePriceFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mOffExTradePriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOnExTradePriceFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mOnExTradePriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mIsCancelFieldState.getState() == MamdaFieldState.MODIFIED)      
            mTradeCache.mIsCancelFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigSeqNumFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mOrigSeqNumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigPriceFieldState.getState() == MamdaFieldState.MODIFIED)      
            mTradeCache.mOrigPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigVolumeFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mOrigVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigPartIdFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mOrigPartIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigQualStrFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mOrigQualStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigQualNativeStrFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mOrigQualNativeStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigSellersSaleDaysFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mOrigSellersSaleDaysFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigStopStockIndFieldState.getState() == MamdaFieldState.MODIFIED)      
            mTradeCache.mOrigStopStockIndFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrPriceFieldState.getState() == MamdaFieldState.MODIFIED)           
            mTradeCache.mCorrPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrVolumeFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mCorrVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrPartIdFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mCorrPartIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrQualStrFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mCorrQualStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrQualNativeStrFieldState.getState() == MamdaFieldState.MODIFIED)
            mTradeCache.mCorrQualNativeStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrSellersSaleDaysFieldState.getState() == MamdaFieldState.MODIFIED)  
            mTradeCache.mCorrSellersSaleDaysFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrStopStockIndFieldState.getState() == MamdaFieldState.MODIFIED)      
            mTradeCache.mCorrStopStockIndFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrTimeFieldState.getState() == MamdaFieldState.MODIFIED)          
            mTradeCache.mCorrTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCancelTimeFieldState.getState() == MamdaFieldState.MODIFIED)          
            mTradeCache.mCancelTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTradeCondStrFieldState.getState() == MamdaFieldState.MODIFIED)  
             mTradeCache.mTradeCondStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mOrigCondStrFieldState.getState() == MamdaFieldState.MODIFIED)     
           mTradeCache.mOrigCondStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCorrCondStrFieldState.getState() == MamdaFieldState.MODIFIED)    
           mTradeCache.mCorrCondStrFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mShortSaleCircuitBreakerFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mShortSaleCircuitBreakerFieldState.setState(MamdaFieldState.NOT_MODIFIED); 
        if (mTradeCache.mOrigShortSaleCircuitBreakerFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mOrigShortSaleCircuitBreakerFieldState.setState(MamdaFieldState.NOT_MODIFIED); 
        if (mTradeCache.mCorrShortSaleCircuitBreakerFieldState.getState() == MamdaFieldState.MODIFIED) 
            mTradeCache.mCorrShortSaleCircuitBreakerFieldState.setState(MamdaFieldState.NOT_MODIFIED); 
        if (mTradeCache.mTradeUnitsFieldState.getState() == MamdaFieldState.MODIFIED)     
            mTradeCache.mTradeUnitsFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLastSeqNumFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mLastSeqNumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mHighSeqNumFieldState.getState() == MamdaFieldState.MODIFIED)    
            mTradeCache.mHighSeqNumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mLowSeqNumFieldState.getState() == MamdaFieldState.MODIFIED)             
            mTradeCache.mLowSeqNumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mTotalVolumeSeqNumFieldState.getState() == MamdaFieldState.MODIFIED)
            mTradeCache.mTotalVolumeSeqNumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mCurrencyCodeFieldState.getState() == MamdaFieldState.MODIFIED)         
            mTradeCache.mCurrencyCodeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mTradeCache.mConflateCountFieldState.getState() == MamdaFieldState.MODIFIED)   
            mTradeCache.mConflateCountFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mGapBeginFieldState.getState() == MamdaFieldState.MODIFIED)     
            mGapBeginFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mGapEndFieldState.getState() == MamdaFieldState.MODIFIED)     
            mGapEndFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (mIsIndicativeFieldState.getState() == MamdaFieldState.MODIFIED)     
            mIsIndicativeFieldState.setState(MamdaFieldState.NOT_MODIFIED);

    }   
        
    private void updateTradeFields (MamaMsg  msg)
    {   
        mTradeCache.mGotPartId                = false;
        mTradeCache.mLastGenericMsgWasTrade   = false;
        mTradeCache.mGotTradeTime             = false;
        mTradeCache.mGotTradePrice            = false;
        mTradeCache.mGotTradeSize             = false;
        mTradeCache.mGotTradeCount            = false;
        mTradeCache.mGotIssueSymbol           = false;
        
        synchronized (this)
        {
            // Iterate over all of the fields in the message.
            MamaMsgIterator msgIterator = new MamaMsgIterator (msg, null);

            while (msgIterator.hasNext())
            {
                MamaMsgField field = (MamaMsgField) msgIterator.next();
                if (null != mUpdaters[field.getFid ()])
                {
                    mUpdaters[field.getFid ()].onUpdate (field, this);
                }
            }
        }

        if (mTradeCache.mGotIssueSymbol)
        {
            mTradeCache.mSymbol.setValue(mTradeCache.mIssueSymbol.getValue());
            mTradeCache.mSymbolFieldState.setState(MamdaFieldState.MODIFIED);
        }
        
        // Check certain special fields.
        if (mTradeCache.IsIrregular ())
        {
            // This is an irregular trade (does not update "last" fields).
            mTradeCache.mTradePrice = mTradeCache.mIrregPrice;
            mTradeCache.mTradePriceFieldState.setState(MamdaFieldState.MODIFIED);
            mTradeCache.mTradeVolume.setValue(mTradeCache.mIrregVolume.getValue());
            mTradeCache.mTradeVolumeFieldState.setState(MamdaFieldState.MODIFIED);
            mTradeCache.mTradePartId.setValue(mTradeCache.mIrregPartId.getValue());
            mTradeCache.mTradePartIdFieldState.setState(MamdaFieldState.MODIFIED);
            if(mTradeCache.mIrregTime.isEmpty())
            {
                // Some feeds only use the one time field
                mTradeCache.mEventTime    = mTradeCache.mLastTime;
                mTradeCache.mEventTimeFieldState.setState(MamdaFieldState.MODIFIED);
            }
            else
            {
                mTradeCache.mEventTime    = mTradeCache.mIrregTime;
                mTradeCache.mEventTimeFieldState.setState(MamdaFieldState.MODIFIED);
            }
        }
        else
        {
            // This is a regular trade
            mTradeCache.mTradePrice  = mTradeCache.mLastPrice;
            mTradeCache.mTradePriceFieldState.setState(MamdaFieldState.MODIFIED);
            mTradeCache.mTradeVolume.setValue(mTradeCache.mLastVolume.getValue());
            mTradeCache.mTradeVolumeFieldState.setState(MamdaFieldState.MODIFIED);
            mTradeCache.mTradePartId.setValue(mTradeCache.mLastPartId.getValue());
            mTradeCache.mTradePartIdFieldState.setState(MamdaFieldState.MODIFIED);
            mTradeCache.mEventTime   = mTradeCache.mLastTime;
            mTradeCache.mEventTimeFieldState.setState(MamdaFieldState.MODIFIED);
        }
        
        if (mTradeCache.mGotPartId == false)
        {
            // No explicit part ID in message, but maybe in symbol.
            if (mTradeCache.mSymbol.getValue() != null)
            {
                int lastDot = mTradeCache.mSymbol.getValue().indexOf (".");
                if (lastDot != -1)
                {
                    lastDot++;
                    if (lastDot != mTradeCache.mSymbol.getValue().length ())
                    {
                        mTradeCache.mPartId.setValue(
                            mTradeCache.mSymbol.getValue().substring (lastDot));
                        mTradeCache.mPartIdFieldState.setState(MamdaFieldState.MODIFIED);
                        mTradeCache.mGotPartId = true;
                    }
                }
            }
        }
        
        if (mTradeCache.mGotTradeTime || mTradeCache.mGotTradePrice 
            || mTradeCache.mGotTradeSize)
        {
            mTradeCache.mLastGenericMsgWasTrade = true;
        }
    }   
        
    private void checkTradeCount (MamdaSubscription  subscription,
                                  MamaMsg            msg,
                                  boolean            checkForGap)
    {   
        // Check number of trades for gaps
        long tradeCount = mTmpTradeCount.getValue();
        long conflateCount = 0;
        mIgnoreUpdate = false;
        
        if (!msg.tryU32 ("wConflateTradeCount", 24,
                          mTradeCache.mConflateCount))
        {
            conflateCount = 1;
            mTradeCache.mConflateCountFieldState.setState (MamdaFieldState.MODIFIED);
        }
        else
        {
            conflateCount = mTradeCache.mConflateCount.getValue();
            mTradeCache.mConflateCountFieldState.setState (MamdaFieldState.MODIFIED);
        }

        if (checkForGap && mTradeCache.mGotTradeCount)
        {
            if ((mTradeCache.mTradeCount > 0)
                && (tradeCount > (mTradeCache.mTradeCount + conflateCount)))
            {
                mGapBegin = mTradeCache.mTradeCount+conflateCount;
                mGapBeginFieldState.setState(MamdaFieldState.MODIFIED);
                mGapEnd   = tradeCount-1;
                mGapEndFieldState.setState(MamdaFieldState.MODIFIED);
                mTradeCache.mTradeCount=tradeCount;
                mTradeCache.mTradeCountFieldState.setState(MamdaFieldState.MODIFIED);
                Iterator i = mHandlers.iterator();
                while (i.hasNext())
                {
                    MamdaTradeHandler handler = (MamdaTradeHandler) i.next();
                    handler.onTradeGap (subscription, this, msg, this, this);
                }
            }
        }

        /* Check for duplicates.  Only check if tradecount was actually present 
           in the message, in case it isn't being sent down. */
        if ( mTradeCache.mGotTradeCount && 
             tradeCount > 0 &&
             (tradeCount == mTradeCache.mTradeCount) )
        {
            mIgnoreUpdate = true;
        }

        mTradeCache.mTradeCount=tradeCount;
        mTradeCache.mTradeCountFieldState.setState (MamdaFieldState.MODIFIED);
    }

    private interface TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener);
    }

    private static class MamdaTradeSymbol implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (listener.mTradeCache.mSymbol.getValue() == null)
            {
                listener.mTradeCache.mSymbol.setValue (field.getString ());
                listener.mTradeCache.mSymbolFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class MamdaTradeIssueSymbol implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mIssueSymbol.setValue (field.getString ());
                listener.mTradeCache.mGotIssueSymbol = true;
                listener.mTradeCache.mIssueSymbolFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeLastPartId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mLastPartId.setValue (field.getString ());
                listener.mTradeCache.mLastPartIdFieldState.setState  (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradePartId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mPartId.setValue (field.getString ());
                listener.mTradeCache.mGotPartId = true;
                listener.mTradeCache.mPartIdFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }
 
    private static class TradeUpdateAsTrade implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mProcessUpdateAsTrade.setValue (field.getBoolean ());
        }
    }

    private static class TradeSrcTime implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mSrcTime.copy (field.getDateTime ());
                listener.mTradeCache.mSrcTimeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeActivityTime implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mActTime.copy (field.getDateTime ());
                listener.mTradeCache.mActTimeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    public static class TradeLineTime implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mLineTime.copy (field.getDateTime ());
                listener.mTradeCache.mLineTimeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    public static class TradeSendTime implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mSendTime.copy (field.getDateTime ());
                listener.mTradeCache.mSendTimeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradePubId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mPubId.setValue (field.getString ());
                listener.mTradeCache.mPubIdFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (field != null)
            {
                switch (field.getType ())
                {
                    case MamaFieldDescriptor.STRING:
                        listener.mTradeCache.mTradeId.setValue (field.getString ());
                        listener.mTradeCache.mTradeIdFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    case MamaFieldDescriptor.I8:
                    case MamaFieldDescriptor.U8:
                    case MamaFieldDescriptor.I16:
                    case MamaFieldDescriptor.U16:
                    case MamaFieldDescriptor.I32:
                    case MamaFieldDescriptor.U32:
                    case MamaFieldDescriptor.I64:
                    case MamaFieldDescriptor.U64:
                        listener.mTradeCache.mTradeId.setValue (String.valueOf(field.getU64 ()));
                        listener.mTradeCache.mTradeIdFieldState.setState (MamdaFieldState.MODIFIED);
                    default:
                        break;
                }
            }
        }
    }

    private static class OrigTradeId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (field != null)
            {
                switch (field.getType())
                {
                    case MamaFieldDescriptor.STRING:
                        listener.mTradeCache.mOrigTradeId.setValue (field.getString ());
                        listener.mTradeCache.mOrigTradeIdFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    case MamaFieldDescriptor.I8:
                    case MamaFieldDescriptor.U8:
                    case MamaFieldDescriptor.I16:
                    case MamaFieldDescriptor.U16:
                    case MamaFieldDescriptor.I32:
                    case MamaFieldDescriptor.U32:
                    case MamaFieldDescriptor.I64:
                    case MamaFieldDescriptor.U64:
                        listener.mTradeCache.mOrigTradeId.setValue (String.valueOf(field.getU64 ()));
                        listener.mTradeCache.mOrigTradeIdFieldState.setState (MamdaFieldState.MODIFIED);
                    default:
                        break;
                }
            }
        }
    }

    private static class CorrTradeId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mCorrTradeId.setValue (field.getString ());
                listener.mTradeCache.mCorrTradeIdFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeAccVolume implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mAccVolume.setValue (field.getF64 ());
            listener.mTradeCache.mAccVolumeFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeOffExAccVolume implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOffExAccVolume.setValue (field.getF64 ());
            listener.mTradeCache.mOffExAccVolumeFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeOnExAccVolume implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOnExAccVolume.setValue (field.getF64 ());
            listener.mTradeCache.mOnExAccVolumeFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeNetChange implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mNetChange.copy (field.getPrice ());
                listener.mTradeCache.mNetChangeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class MamdaShortSaleCircuitBreaker implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mShortSaleCircuitBreaker.setValue (field.getChar ());
            listener.mTradeCache.mShortSaleCircuitBreakerFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }    

    private static class MamdaOrigShortSaleCircuitBreaker implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOrigShortSaleCircuitBreaker.setValue (field.getChar ());
            listener.mTradeCache.mOrigShortSaleCircuitBreakerFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }    

    private static class MamdaCorrShortSaleCircuitBreaker implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mCorrShortSaleCircuitBreaker.setValue (field.getChar ());
            listener.mTradeCache.mCorrShortSaleCircuitBreakerFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }    

    private static class TradePctChange implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mPctChange.setValue (field.getF64 ());
            listener.mTradeCache.mPctChangeFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class AggressorSide implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mSide = Character.toString(field.getChar ());
            listener.mTradeCache.mSideFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeSide implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {  
            if (field != null)
            {
                switch (field.getType())
                {
                    case MamaFieldDescriptor.I8:
                    case MamaFieldDescriptor.U8:
                    case MamaFieldDescriptor.I16:
                    case MamaFieldDescriptor.U16:
                    case MamaFieldDescriptor.I32:
                    case MamaFieldDescriptor.U32:          
                        listener.mTradeCache.mTmpSide.setState ((short)field.getU32()); 
                        listener.mTradeCache.mSide = MamdaTradeSide.toString (listener.mTradeCache.mTmpSide.getState());
                        listener.mTradeCache.mSideFieldState.setState (MamdaFieldState.MODIFIED);               
                        break;
                    case MamaFieldDescriptor.STRING:
                        listener.mTradeCache.mTmpSide.setState (MamdaTradeSide.mamdaTradeSideFromString (field.getString()));  
                        listener.mTradeCache.mSide = MamdaTradeSide.toString (listener.mTradeCache.mTmpSide.getState());
                        listener.mTradeCache.mSideFieldState.setState (MamdaFieldState.MODIFIED);
                    default:
                        break;
                }
            }
        }
    }

    private static class TradeDirection implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            /* Allow trade direction as either string or integer - 
             * allows it to be handled if (eg) feeds have mama-publish-enums-as-ints
             * turned on.
             */
            if (field != null)
            {
                switch (field.getType())
                {
                    case MamaFieldDescriptor.I8:
                    case MamaFieldDescriptor.U8:
                    case MamaFieldDescriptor.I16:
                    case MamaFieldDescriptor.U16:
                    case MamaFieldDescriptor.I32:
                    case MamaFieldDescriptor.U32:
                        listener.mTradeCache.mTradeDirection.setValue (String.valueOf (field.getU32()));
                        listener.mTradeCache.mTradeDirectionFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    case MamaFieldDescriptor.STRING:
                        listener.mTradeCache.mTradeDirection.setValue (field.getString ());
                        listener.mTradeCache.mTradeDirectionFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    default:
                        break;
                }
            }
        }
    }

    private static class TradeOpenPrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mOpenPrice.copy (field.getPrice ());
                listener.mTradeCache.mOpenPriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeHighPrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mHighPrice.copy (field.getPrice ());
                listener.mTradeCache.mHighPriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeLowPrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mLowPrice.copy (field.getPrice ());
                listener.mTradeCache.mLowPriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeClosePrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mClosePrice.copy (field.getPrice ());
                listener.mTradeCache.mClosePriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradePrevClosePrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mPrevClosePrice.copy (field.getPrice ());
                listener.mTradeCache.mPrevClosePriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradePrevCloseDate implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mPrevCloseDate.copy (field.getDateTime ());
                listener.mTradeCache.mPrevCloseDateFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeAdjPrevClose implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mAdjPrevClose.copy (field.getPrice ());
                listener.mTradeCache.mAdjPrevCloseFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeBlockCount implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mBlockCount.setValue (field.getI64 ());
            listener.mTradeCache.mBlockCountFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeBlockVolume implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mBlockVolume.setValue (field.getF64 ());
            listener.mTradeCache.mBlockVolumeFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeVWap implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mVwap.setValue (field.getF64 ());
            listener.mTradeCache.mVwapFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeOffExVWap implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOffExVwap.setValue (field.getF64 ());
            listener.mTradeCache.mOffExVwapFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeOnExVWap implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOnExVwap.setValue (field.getF64 ());
            listener.mTradeCache.mOnExVwapFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeTotalValue implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mTotalValue.setValue (field.getF64 ());
            listener.mTradeCache.mTotalValueFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeOffExTotalValue implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOffExTotalValue.setValue (field.getF64 ());
            listener.mTradeCache.mOffExTotalValueFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeOnExTotalValue implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOnExTotalValue.setValue (field.getF64 ());
            listener.mTradeCache.mOnExTotalValueFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeStdDev implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mStdDev.setValue (field.getF64 ());
            listener.mTradeCache.mStdDevFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeStdDevSum implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mStdDevSum.setValue (field.getF64 ());
            listener.mTradeCache.mStdDevSumFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeStdDevSumSquares implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mStdDevSumSquares.setValue (field.getF64 ());
            listener.mTradeCache.mStdDevSumSquaresFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeOrderId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOrderId.setValue (field.getI64 ());
            listener.mTradeCache.mOrderIdFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeSettlePrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mSettlePrice.copy (field.getPrice ());
                listener.mTradeCache.mSettlePriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeSettleDate implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mSettleDate.copy (field.getDateTime ());
                listener.mTradeCache.mSettleDateFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeEventSeqNum implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mEventSeqNum.setValue (field.getI64 ());
            listener.mTradeCache.mEventSeqNumFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeLastDate implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mLastDate.copy (field.getDateTime ());
                listener.mTradeCache.mLastDateFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeLastTime implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mGotTradeTime = true;
                listener.mTradeCache.mLastTime.copy (field.getDateTime ());
                listener.mTradeCache.mLastTimeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeIrregPrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mGotTradePrice = true;
                listener.mTradeCache.mIrregPrice.copy (field.getPrice ());
                listener.mTradeCache.mIrregPriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeIrregVolume implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mGotTradeSize = true;
            listener.mTradeCache.mIrregVolume.setValue (field.getF64 ());
            listener.mTradeCache.mIrregVolumeFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeIrregPartId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mIrregPartId.setValue (field.getString ());
                listener.mTradeCache.mIrregPartIdFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeIrregTime implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mGotTradeTime = true;
                listener.mTradeCache.mIrregTime.copy (field.getDateTime ());
                listener.mTradeCache.mIrregTimeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeLastPrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mGotTradePrice = true;
                listener.mTradeCache.mLastPrice.copy (field.getPrice ());
                listener.mTradeCache.mLastPriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        } 
    }

    private static class TradeLastVolume implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mGotTradeSize = true;
            listener.mTradeCache.mLastVolume.setValue (field.getF64 ());
            listener.mTradeCache.mLastVolumeFieldState.setState (MamdaFieldState.MODIFIED);
        } 
    }

    private static class TradeQualStr implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mTradeQualStr.setValue (field.getString ());
                listener.mTradeCache.mTradeQualStrFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeQualNativeStr implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mTradeQualNativeStr.setValue (field.getString ());
                listener.mTradeCache.mTradeQualNativeStrFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeSellerSalesDays implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mSellersSaleDays.setValue (field.getI64 ());
            listener.mTradeCache.mSellersSaleDaysFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeStopStockInd implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            // There is a bug in 2.14 FHs which can cause character fields to be sent as strings
            // FH property CharFieldAsStringField in 2.16-> can enable this behaviour
            // Adding support for this in MAMDA for client apps coded to expect this behaviour
            if (field != null)
            {
                switch (field.getType())
                {
                    case MamaFieldDescriptor.I8 :
                    case MamaFieldDescriptor.CHAR :
                        listener.mTradeCache.mStopStockInd.setValue (field.getChar ());
                        listener.mTradeCache.mStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    case MamaFieldDescriptor.STRING :
                        if (field.getString().length() > 0)
                        {
                            listener.mTradeCache.mStopStockInd.setValue (field.getString().charAt(0));
                            listener.mTradeCache.mStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        }
                        else
                        {
                            listener.mTradeCache.mStopStockInd.setValue(' ');
                            listener.mTradeCache.mStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        }
                        break;
                    default : break;
                }
            }
        }
    }

    private static class TradeExecVenue implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            /* Allow trade execution venue as either string or integer - 
             * allows it to be handled if (eg) feeds have mama-publish-enums-as-ints
             * turned on.
             */
            if (field != null)
            {
                switch (field.getType())
                {
                    case MamaFieldDescriptor.I8:
                    case MamaFieldDescriptor.U8:
                    case MamaFieldDescriptor.I16:
                    case MamaFieldDescriptor.U16:
                    case MamaFieldDescriptor.I32:
                    case MamaFieldDescriptor.U32:
                        listener.mTradeCache.mTradeExecVenue.setValue (String.valueOf (field.getU32()));
                        listener.mTradeCache.mTradeExecVenueFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    case MamaFieldDescriptor.STRING:
                        listener.mTradeCache.mTradeExecVenue.setValue (field.getString ());
                        listener.mTradeCache.mTradeExecVenueFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    default:
                        break;
                }
            }
        }
    }

    private static class OffExTradePrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mOffExTradePrice.copy (field.getPrice ());
                listener.mTradeCache.mOffExTradePriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class OnExTradePrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mOnExTradePrice.copy (field.getPrice ());
                listener.mTradeCache.mOnExTradePriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeCount implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTmpTradeCount.setValue (field.getI64 ());
            listener.mTradeCache.mGotTradeCount = true;
        } 
    }

    private static class TradeUnits implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mTradeUnits.setValue (field.getString ());
                listener.mTradeCache.mTradeUnitsFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeLastSeqNum implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mLastSeqNum.setValue (field.getI64 ());
            listener.mTradeCache.mLastSeqNumFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeHighSeqNum implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mHighSeqNum.setValue (field.getI64 ());
            listener.mTradeCache.mHighSeqNumFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeLowSeqNum implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mLowSeqNum.setValue (field.getI64 ());
            listener.mTradeCache.mLowSeqNumFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeTotalVolumeSeqNum implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mTotalVolumeSeqNum.setValue (field.getI64 ());
            listener.mTradeCache.mTotalVolumeSeqNumFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeCurrencyCode implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mCurrencyCode.setValue (field.getString ());
                listener.mTradeCache.mCurrencyCodeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeOrigSeqNum implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOrigSeqNum.setValue (field.getI64 ());
            listener.mTradeCache.mOrigSeqNumFieldState.setState (MamdaFieldState.MODIFIED);
        } 
    }

    private static class TradeOrigPrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mOrigPrice.copy (field.getPrice ());
                listener.mTradeCache.mOrigPriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        } 
    }

    private static class TradeOrigVolume implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOrigVolume.setValue (field.getF64 ());
            listener.mTradeCache.mOrigVolumeFieldState.setState (MamdaFieldState.MODIFIED);
        } 
    }

    private static class TradeOrigPartId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mOrigPartId.setValue (field.getString ());
                listener.mTradeCache.mOrigPartIdFieldState.setState (MamdaFieldState.MODIFIED);
            }
        } 
    }

    private static class TradeOrigQualStr implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mOrigQualStr.setValue (field.getString ());
                listener.mTradeCache.mOrigQualStrFieldState.setState (MamdaFieldState.MODIFIED);
            }
        } 
    }

    private static class TradeOrigQualNativeStr implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mOrigQualNativeStr.setValue (field.getString ());
                listener.mTradeCache.mOrigQualNativeStrFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeOrigSellersSaleDays implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mOrigSellersSaleDays.setValue (field.getI64 ());
            listener.mTradeCache.mOrigSellersSaleDaysFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeOrigStopStockInd implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            // There is a bug in 2.14 FHs which can cause character fields to be sent as strings
            // FH property CharFieldAsStringField in 2.16-> can enable this behaviour
            // Adding support for this in MAMDA for client apps coded to expect this behaviour
            if (field != null)
            {
                switch (field.getType())
                {
                    case MamaFieldDescriptor.I8 :
                    case MamaFieldDescriptor.CHAR :                
                        listener.mTradeCache.mOrigStopStockInd.setValue (field.getChar ());
                        listener.mTradeCache.mOrigStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    case MamaFieldDescriptor.STRING :
                        if (field.getString().length() > 0)
                        {
                            listener.mTradeCache.mOrigStopStockInd.setValue(
                                field.getString().charAt(0));
                            listener.mTradeCache.mOrigStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        }
                        else
                        {
                            listener.mTradeCache.mOrigStopStockInd.setValue(' ');
                            listener.mTradeCache.mOrigStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        }
                        break;
                    default : break;
                }
            }
        }
    }

    private static class TradeCorrPrice implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getPrice ())
            {
                listener.mTradeCache.mCorrPrice.copy (field.getPrice ());
                listener.mTradeCache.mCorrPriceFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeCorrVolume implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mCorrVolume.setValue (field.getF64 ());
            listener.mTradeCache.mCorrVolumeFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeCorrPartId implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mCorrPartId.setValue (field.getString ());
                listener.mTradeCache.mCorrPartIdFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeCorrQualStr implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mCorrQualStr.setValue (field.getString ());
                listener.mTradeCache.mCorrQualStrFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeCorrQualNativeStr implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getString ())
            {
                listener.mTradeCache.mCorrQualNativeStr.setValue (field.getString ());
                listener.mTradeCache.mCorrQualNativeStrFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeCorrSellersSaleDays implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mCorrSellersSaleDays.setValue (field.getI64 ());
            listener.mTradeCache.mCorrSellersSaleDaysFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static class TradeCorrStopStockInd implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            // There is a bug in 2.14 FHs which can cause character fields to be sent as strings
            // FH property CharFieldAsStringField in 2.16-> can enable this behaviour
            // Adding support for this in MAMDA for client apps coded to expect this behaviour
            if (field != null)
            {
                switch (field.getType())
                {
                    case MamaFieldDescriptor.I8 :
                    case MamaFieldDescriptor.CHAR :
                        listener.mTradeCache.mCorrStopStockInd.setValue (field.getChar ());
                        listener.mTradeCache.mCorrStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        break;
                    case MamaFieldDescriptor.STRING :
                        if (field.getString().length() > 0)
                        {
                            listener.mTradeCache.mCorrStopStockInd.setValue(
                                field.getString().charAt(0));
                            listener.mTradeCache.mCorrStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        }
                        else
                        {
                            listener.mTradeCache.mCorrStopStockInd.setValue(' ');
                            listener.mTradeCache.mCorrStopStockIndFieldState.setState (MamdaFieldState.MODIFIED);
                        }
                        break;
                    default : break;
                }
            }
        }
    }

    private static class TradeCorrTime implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mCorrTime.copy (field.getDateTime ());
                listener.mTradeCache.mCorrTimeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeCancelTime implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            if (null != field.getDateTime ())
            {
                listener.mTradeCache.mCancelTime.copy (field.getDateTime ());
                listener.mTradeCache.mCancelTimeFieldState.setState (MamdaFieldState.MODIFIED);
            }
        }
    }

    private static class TradeIsIrregular implements TradeUpdate
    {
        public void onUpdate (MamaMsgField field, MamdaTradeListener listener)
        {
            listener.mTradeCache.mIsIrregular.setValue (field.getBoolean ());
            listener.mTradeCache.mIsIrregularFieldState.setState (MamdaFieldState.MODIFIED);
        }
    }

    private static void createUpdaters ()
    {
        if (mUpdaters == null)
        {
            // Trade maximum uses dictionary maximum
            mUpdaters = new TradeUpdate [MamdaTradeFields.getMaxFid() + 1];
        }

        if (MamdaCommonFields.SYMBOL != null)
            addUpdater (MamdaCommonFields.SYMBOL.getFid(), new MamdaTradeSymbol());

        if (MamdaCommonFields.ISSUE_SYMBOL != null)
            addUpdater (MamdaCommonFields.ISSUE_SYMBOL.getFid(), new MamdaTradeIssueSymbol());

        if (MamdaCommonFields.PART_ID != null)
            addUpdater (MamdaCommonFields.PART_ID.getFid(), new TradePartId ());

        if (MamdaCommonFields.SRC_TIME != null)
            addUpdater (MamdaCommonFields.SRC_TIME.getFid(), new TradeSrcTime());

        if (MamdaCommonFields.ACTIVITY_TIME != null)
            addUpdater (MamdaCommonFields.ACTIVITY_TIME.getFid(), new TradeActivityTime());

        if (MamdaCommonFields.LINE_TIME != null)
            addUpdater (MamdaCommonFields.LINE_TIME.getFid(), new TradeLineTime());

        if (MamdaCommonFields.SEND_TIME != null)
            addUpdater (MamdaCommonFields.SEND_TIME.getFid(), new TradeSendTime());

        if (MamdaCommonFields.PUB_ID != null)
            addUpdater (MamdaCommonFields.PUB_ID.getFid(), new TradePubId());

        if (MamdaTradeFields.TRADE_ID != null)
            addUpdater (MamdaTradeFields.TRADE_ID.getFid(), new TradeId());

        if (MamdaTradeFields.ORIG_TRADE_ID != null)
            addUpdater (MamdaTradeFields.ORIG_TRADE_ID.getFid(), new OrigTradeId());

        if (MamdaTradeFields.CORR_TRADE_ID != null)
            addUpdater (MamdaTradeFields.CORR_TRADE_ID.getFid(), new CorrTradeId());

        if (MamdaTradeFields.TRADE_PRICE != null)
            addUpdater (MamdaTradeFields.TRADE_PRICE.getFid(), new TradeLastPrice());

        if (MamdaTradeFields.TRADE_SIZE != null)
            addUpdater (MamdaTradeFields.TRADE_SIZE.getFid(), new TradeLastVolume ());

        if (MamdaTradeFields.TRADE_DATE != null)
            addUpdater (MamdaTradeFields.TRADE_DATE.getFid(), new TradeLastDate ());

        if (MamdaTradeFields.TRADE_TIME != null)
            addUpdater (MamdaTradeFields.TRADE_TIME.getFid(), new TradeLastTime());

        if (MamdaTradeFields.SHORT_SALE_CIRCUIT_BREAKER != null)
            addUpdater (MamdaTradeFields.SHORT_SALE_CIRCUIT_BREAKER.getFid(), new MamdaShortSaleCircuitBreaker());

        if (MamdaTradeFields.ORIG_SHORT_SALE_CIRCUIT_BREAKER != null)
            addUpdater (MamdaTradeFields.ORIG_SHORT_SALE_CIRCUIT_BREAKER.getFid(), new MamdaOrigShortSaleCircuitBreaker());

        if (MamdaTradeFields.CORR_SHORT_SALE_CIRCUIT_BREAKER != null)
            addUpdater (MamdaTradeFields.CORR_SHORT_SALE_CIRCUIT_BREAKER.getFid(), new MamdaCorrShortSaleCircuitBreaker());

        if (MamdaTradeFields.TRADE_DIRECTION != null)
            addUpdater (MamdaTradeFields.TRADE_DIRECTION.getFid(), new TradeDirection());

        if (MamdaTradeFields.NET_CHANGE != null)
            addUpdater (MamdaTradeFields.NET_CHANGE.getFid(), new TradeNetChange());

        if (MamdaTradeFields.PCT_CHANGE != null)
            addUpdater (MamdaTradeFields.PCT_CHANGE.getFid(), new TradePctChange());
    
        if (MamdaTradeFields.AGGRESSOR_SIDE != null)
            addUpdater (MamdaTradeFields.AGGRESSOR_SIDE.getFid(), new AggressorSide());

        if (MamdaTradeFields.TRADE_SIDE != null)
            addUpdater (MamdaTradeFields.TRADE_SIDE.getFid(), new TradeSide());

        if (MamdaTradeFields.TOTAL_VOLUME != null)
            addUpdater (MamdaTradeFields.TOTAL_VOLUME.getFid(), new TradeAccVolume());

        if (MamdaTradeFields.OFF_EXCHANGE_TOTAL_VOLUME != null)
            addUpdater (MamdaTradeFields.OFF_EXCHANGE_TOTAL_VOLUME.getFid(), new TradeOffExAccVolume());

        if (MamdaTradeFields.ON_EXCHANGE_TOTAL_VOLUME != null)
            addUpdater (MamdaTradeFields.ON_EXCHANGE_TOTAL_VOLUME.getFid(), new TradeOnExAccVolume());

        if (MamdaTradeFields.HIGH_PRICE != null)
            addUpdater (MamdaTradeFields.HIGH_PRICE.getFid(), new TradeHighPrice ());

        if (MamdaTradeFields.LOW_PRICE != null)
            addUpdater (MamdaTradeFields.LOW_PRICE.getFid(), new TradeLowPrice());

        if (MamdaTradeFields.OPEN_PRICE != null)
            addUpdater (MamdaTradeFields.OPEN_PRICE.getFid(), new TradeOpenPrice ());

        if (MamdaTradeFields.CLOSE_PRICE != null)
            addUpdater (MamdaTradeFields.CLOSE_PRICE.getFid(), new TradeClosePrice());

        if (MamdaTradeFields.PREV_CLOSE_PRICE != null)
            addUpdater (MamdaTradeFields.PREV_CLOSE_PRICE.getFid(), new TradePrevClosePrice());

        if (MamdaTradeFields.TRADE_SEQNUM != null)
            addUpdater (MamdaTradeFields.TRADE_SEQNUM.getFid(), new TradeEventSeqNum());

        if (MamdaTradeFields.TRADE_QUALIFIER != null)
            addUpdater (MamdaTradeFields.TRADE_QUALIFIER.getFid(), new TradeQualStr());

        if (MamdaTradeFields.SALE_CONDITION != null)
            addUpdater (MamdaTradeFields.SALE_CONDITION.getFid(), new TradeQualNativeStr());

        if (MamdaTradeFields.TRADE_PART_ID != null)
            addUpdater (MamdaTradeFields.TRADE_PART_ID.getFid(), new TradeLastPartId());

        if (MamdaTradeFields.TOTAL_VALUE != null)
            addUpdater (MamdaTradeFields.TOTAL_VALUE.getFid(), new TradeTotalValue());

        if (MamdaTradeFields.OFF_EXCHANGE_TOTAL_VALUE != null)
            addUpdater (MamdaTradeFields.OFF_EXCHANGE_TOTAL_VALUE.getFid(), new TradeOffExTotalValue());

        if (MamdaTradeFields.ON_EXCHANGE_TOTAL_VALUE != null)
            addUpdater (MamdaTradeFields.ON_EXCHANGE_TOTAL_VALUE.getFid(), new TradeOnExTotalValue());

        if (MamdaTradeFields.VWAP != null)
            addUpdater (MamdaTradeFields.VWAP.getFid(), new TradeVWap());

        if (MamdaTradeFields.OFF_EXCHANGE_VWAP != null)
            addUpdater (MamdaTradeFields.OFF_EXCHANGE_VWAP.getFid(), new TradeOffExVWap());

        if (MamdaTradeFields.ON_EXCHANGE_VWAP != null)
            addUpdater (MamdaTradeFields.ON_EXCHANGE_VWAP.getFid(), new TradeOnExVWap());

        if (MamdaTradeFields.STD_DEV != null)
            addUpdater (MamdaTradeFields.STD_DEV.getFid(), new TradeStdDev());

        if (MamdaTradeFields.STD_DEV_SUM != null)
            addUpdater (MamdaTradeFields.STD_DEV_SUM.getFid(), new TradeStdDevSum());

        if (MamdaTradeFields.STD_DEV_SUM_SQUARES != null)
            addUpdater (MamdaTradeFields.STD_DEV_SUM_SQUARES.getFid(), new TradeStdDevSumSquares());

        if (MamdaTradeFields.ORDER_ID != null)
            addUpdater (MamdaTradeFields.ORDER_ID.getFid(), new TradeOrderId());

        if (MamdaTradeFields.SETTLE_PRICE != null)
            addUpdater (MamdaTradeFields.SETTLE_PRICE.getFid(), new TradeSettlePrice());

        if (MamdaTradeFields.SETTLE_DATE != null)
            addUpdater (MamdaTradeFields.SETTLE_DATE.getFid(), new TradeSettleDate());

        if (MamdaTradeFields.SELLERS_SALE_DAYS != null)
            addUpdater (MamdaTradeFields.SELLERS_SALE_DAYS.getFid(), new TradeSellerSalesDays());

        if (MamdaTradeFields.STOP_STOCK_IND != null)
            addUpdater (MamdaTradeFields.STOP_STOCK_IND.getFid(), new TradeStopStockInd());

        if (MamdaTradeFields.TRADE_EXEC_VENUE != null)
            addUpdater (MamdaTradeFields.TRADE_EXEC_VENUE.getFid(), new TradeExecVenue());

        if (MamdaTradeFields.OFF_EXCHANGE_TRADE_PRICE != null)
            addUpdater (MamdaTradeFields.OFF_EXCHANGE_TRADE_PRICE.getFid(), new OffExTradePrice());

        if (MamdaTradeFields.ON_EXCHANGE_TRADE_PRICE != null)
            addUpdater (MamdaTradeFields.ON_EXCHANGE_TRADE_PRICE.getFid(), new OnExTradePrice());

        if (MamdaTradeFields.TRADE_UNITS != null)
            addUpdater (MamdaTradeFields.TRADE_UNITS.getFid(), new TradeUnits());

        if (MamdaTradeFields.LAST_SEQNUM != null)
            addUpdater (MamdaTradeFields.LAST_SEQNUM.getFid(), new TradeLastSeqNum());

        if (MamdaTradeFields.HIGH_SEQNUM != null)
            addUpdater (MamdaTradeFields.HIGH_SEQNUM.getFid(), new TradeHighSeqNum());

        if (MamdaTradeFields.LOW_SEQNUM != null)
            addUpdater (MamdaTradeFields.LOW_SEQNUM.getFid(), new TradeLowSeqNum());

        if (MamdaTradeFields.TOTAL_VOLUME_SEQNUM != null)
            addUpdater (MamdaTradeFields.TOTAL_VOLUME_SEQNUM.getFid(), new TradeTotalVolumeSeqNum());

        if (MamdaTradeFields.CURRENCY_CODE != null)
            addUpdater (MamdaTradeFields.CURRENCY_CODE.getFid(), new TradeCurrencyCode());

        if (MamdaTradeFields.ORIG_PART_ID  != null)
            addUpdater (MamdaTradeFields.ORIG_PART_ID.getFid(), new TradeOrigPartId());

        if (MamdaTradeFields.ORIG_SIZE != null)
            addUpdater (MamdaTradeFields.ORIG_SIZE.getFid(), new TradeOrigVolume());

        if (MamdaTradeFields.ORIG_PRICE != null)
            addUpdater (MamdaTradeFields.ORIG_PRICE.getFid(), new TradeOrigPrice());

        if (MamdaTradeFields.ORIG_SEQNUM != null)
            addUpdater (MamdaTradeFields.ORIG_SEQNUM.getFid(), new TradeOrigSeqNum());

        if (MamdaTradeFields.ORIG_TRADE_QUALIFIER != null)
            addUpdater (MamdaTradeFields.ORIG_TRADE_QUALIFIER.getFid(), new TradeOrigQualStr());

        if (MamdaTradeFields.ORIG_SALE_CONDITION != null)
            addUpdater (MamdaTradeFields.ORIG_SALE_CONDITION.getFid(), new TradeOrigQualNativeStr());

        if (MamdaTradeFields.ORIG_SELLERS_SALE_DAYS != null)
            addUpdater (MamdaTradeFields.ORIG_SELLERS_SALE_DAYS.getFid(), new TradeOrigSellersSaleDays());

        if (MamdaTradeFields.ORIG_STOP_STOCK_IND != null)
            addUpdater (MamdaTradeFields.ORIG_STOP_STOCK_IND.getFid(), new TradeOrigStopStockInd());

        if (MamdaTradeFields.CORR_PART_ID != null)
            addUpdater (MamdaTradeFields.CORR_PART_ID.getFid(), new TradeCorrPartId());

        if (MamdaTradeFields.CORR_SIZE != null)
            addUpdater (MamdaTradeFields.CORR_SIZE.getFid(), new TradeCorrVolume());

        if (MamdaTradeFields.CORR_PRICE != null)
            addUpdater (MamdaTradeFields.CORR_PRICE.getFid(), new TradeCorrPrice());

        if (MamdaTradeFields.CORR_TRADE_QUALIFIER != null)
            addUpdater (MamdaTradeFields.CORR_TRADE_QUALIFIER.getFid(), new TradeCorrQualStr());

        if (MamdaTradeFields.CORR_SALE_CONDITION != null)
            addUpdater (MamdaTradeFields.CORR_SALE_CONDITION.getFid(), new TradeCorrQualNativeStr());

        if (MamdaTradeFields.CORR_SELLERS_SALE_DAYS != null)
            addUpdater (MamdaTradeFields.CORR_SELLERS_SALE_DAYS.getFid(), new TradeCorrSellersSaleDays());

        if (MamdaTradeFields.CORR_STOP_STOCK_IND != null)
            addUpdater (MamdaTradeFields.CORR_STOP_STOCK_IND.getFid(), new TradeCorrStopStockInd());

        if (MamdaTradeFields.CANCEL_TIME != null)
            addUpdater (MamdaTradeFields.CANCEL_TIME.getFid(), new TradeCancelTime());

        if (MamdaTradeFields.TRADE_COUNT != null)
            addUpdater (MamdaTradeFields.TRADE_COUNT.getFid(), new TradeCount());

        if (MamdaTradeFields.BLOCK_COUNT != null)
            addUpdater (MamdaTradeFields.BLOCK_COUNT.getFid(), new TradeBlockCount());

        if (MamdaTradeFields.BLOCK_VOLUME != null)
            addUpdater (MamdaTradeFields.BLOCK_VOLUME.getFid(), new TradeBlockVolume());

        if (MamdaTradeFields.PREV_CLOSE_DATE != null)
            addUpdater (MamdaTradeFields.PREV_CLOSE_DATE.getFid(), new TradePrevCloseDate());

        if (MamdaTradeFields.ADJ_PREV_CLOSE != null)
            addUpdater (MamdaTradeFields.ADJ_PREV_CLOSE.getFid(), new TradeAdjPrevClose ());

        if (MamdaTradeFields.IRREG_PRICE != null)
            addUpdater (MamdaTradeFields.IRREG_PRICE.getFid(), new TradeIrregPrice());

        if (MamdaTradeFields.IRREG_SIZE != null)
            addUpdater (MamdaTradeFields.IRREG_SIZE.getFid(), new TradeIrregVolume());

        if (MamdaTradeFields.IRREG_PART_ID != null)
            addUpdater (MamdaTradeFields.IRREG_PART_ID.getFid(), new TradeIrregPartId());

        if (MamdaTradeFields.IRREG_TIME != null)
            addUpdater (MamdaTradeFields.IRREG_TIME.getFid(), new TradeIrregTime());

        if (MamdaTradeFields.UPDATE_AS_TRADE != null)
            addUpdater (MamdaTradeFields.UPDATE_AS_TRADE.getFid(), new TradeUpdateAsTrade());

        if (MamdaTradeFields.IS_IRREGULAR != null)
            addUpdater (MamdaTradeFields.IS_IRREGULAR.getFid(), new TradeIsIrregular());

    }

    private static void addUpdater (int fid,
                                    TradeUpdate updater)
    {
        ensureUpdatersCapacity (fid);

        mUpdaters[fid] = updater;
    }

    private static void ensureUpdatersCapacity (int fid)
    {
        if ((fid+1) > mUpdaters.length)
        {
            TradeUpdate[] tempUpdaters = mUpdaters;

            mUpdaters = new TradeUpdate [fid + 1];
            System.arraycopy (tempUpdaters, 0, mUpdaters, 0, tempUpdaters.length);
        }
    }

}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
