---
title: mamda/MamdaOrderImbalanceListener.java
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaOrderImbalanceListener.java



## Namespaces

| Name           |
| -------------- |
| **[com::wombat::mamda](namespacecom_1_1wombat_1_1mamda.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com::wombat::mamda::MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html)**  |




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
import java.util.*;
import java.util.logging.*;
import java.io.*;

public class MamdaOrderImbalanceListener implements MamdaMsgListener,
                                                    MamdaBasicEvent,
                                                    MamdaBasicRecap, 
                                                    MamdaOrderImbalanceRecap,
                                                    MamdaOrderImbalanceUpdate

{
    private final List              mHandlers = new LinkedList();    
    private MamdaOrderImbalanceSide mSide = MamdaOrderImbalanceSide.ASK_SIDE;
    
    private static Logger           mLogger   =
        Logger.getLogger ("com.wombat.mamda.MamdaOrderImbalanceListener");

    private static ImbalanceOrderUpdate  mUpdaters []       = null;
    private static boolean               mUpdatersComplete  = false;
    private static Object                mUpdatersLock      = new Object ();
    
    protected final MamdaOrderImbalanceCache orderImbalanceCache = new 
                                             MamdaOrderImbalanceCache ();

    // Used for all field iteration processing
    private FieldIterator mFieldIterator = null;
    
    //The following fields are used for caching the offical prices
    //and related fields. These fields can be used by application
    // for reference and will be passed for recaps.
    private class MamdaOrderImbalanceCache
    {
        public MamaPrice    mHighIndicationPrice = new MamaPrice();
        public MamaPrice    mLowIndicationPrice  = new MamaPrice();
        public MamaPrice    mIndicationPrice     = new MamaPrice();
        public long         mBuyVolume;
        public long         mSellVolume;
        public long         mMatchVolume;
        public String       mSecurityStatusQual;
        public MamaPrice    mInsideMatchPrice    = new MamaPrice();
        public MamaPrice    mFarClearingPrice    = new MamaPrice();
        public MamaPrice    mNearClearingPrice   = new MamaPrice();
        public char         mNoClearingPrice;
        public char         mPriceVarInd;
        public char         mCrossType;
        public MamaDateTime mEventTime           = new MamaDateTime();
        public long         mEventSeqNum;
        public MamaDateTime mSrcTime             = new MamaDateTime();
        public MamaDateTime mActTime             = new MamaDateTime();
        public MamaDateTime mSendTime            = new MamaDateTime();
        public MamaDateTime mLineTime            = new MamaDateTime();

        public int          mMsgType;
        public String       mIssueSymbol         = null;
        public String       mPartId              = null;
        public String       mSymbol              = null;
        public int          mSeqNum;
        public String       mSecurityStatusOrig  = null;
        public MamaDateTime mSecurityStatusTime  = new MamaDateTime();
        public MamaDateTime mAuctionTime         = new MamaDateTime();
        
        public MamdaFieldState  mHighIndicationPriceFieldState = new MamdaFieldState();
        public MamdaFieldState  mLowIndicationPriceFieldState  = new MamdaFieldState();
        public MamdaFieldState  mIndicationPriceFieldState     = new MamdaFieldState();
        public MamdaFieldState  mBuyVolumeFieldState           = new MamdaFieldState();
        public MamdaFieldState  mSellVolumeFieldState          = new MamdaFieldState();
        public MamdaFieldState  mMatchVolumeFieldState         = new MamdaFieldState();
        public MamdaFieldState  mSecurityStatusQualFieldState  = new MamdaFieldState();
        public MamdaFieldState  mInsideMatchPriceFieldState    = new MamdaFieldState();
        public MamdaFieldState  mFarClearingPriceFieldState    = new MamdaFieldState();
        public MamdaFieldState  mNearClearingPriceFieldState   = new MamdaFieldState();
        public MamdaFieldState  mNoClearingPriceFieldState     = new MamdaFieldState();
        public MamdaFieldState  mPriceVarIndFieldState         = new MamdaFieldState();
        public MamdaFieldState  mCrossTypeFieldState           = new MamdaFieldState();
        public MamdaFieldState  mEventTimeFieldState           = new MamdaFieldState();
        public MamdaFieldState  mEventSeqNumFieldState         = new MamdaFieldState();
        public MamdaFieldState  mSrcTimeFieldState             = new MamdaFieldState();
        public MamdaFieldState  mActTimeFieldState             = new MamdaFieldState();
        public MamdaFieldState  mSendTimeFieldState            = new MamdaFieldState();
        public MamdaFieldState  mLineTimeFieldState            = new MamdaFieldState();

        public MamdaFieldState  mMsgTypeFieldState             = new MamdaFieldState();
        public MamdaFieldState  mIssueSymbolFieldState         = new MamdaFieldState();
        public MamdaFieldState  mPartIdFieldState              = new MamdaFieldState();
        public MamdaFieldState  mSymbolFieldState              = new MamdaFieldState();
        public MamdaFieldState  mSeqNumFieldState              = new MamdaFieldState();
        public MamdaFieldState  mSecurityStatusOrigFieldState  = new MamdaFieldState();
        public MamdaFieldState  mSecurityStatusTimeFieldState  = new MamdaFieldState();
        public MamdaFieldState  mAuctionTimeFieldState         = new MamdaFieldState();

        public boolean          mIsOrderImbalance              = false;
        public int              mSecurityStatusQualValue       = 0; 
    }
   
    public void clearCache (MamdaOrderImbalanceCache cache)
    {
        cache.mHighIndicationPrice.clear();      cache.mHighIndicationPriceFieldState.setState (MamdaFieldState.NOT_INITIALISED);
        cache.mLowIndicationPrice.clear();       cache.mLowIndicationPriceFieldState.setState  (MamdaFieldState.NOT_INITIALISED);
        cache.mIndicationPrice.clear();          cache.mIndicationPriceFieldState.setState     (MamdaFieldState.NOT_INITIALISED);
        cache.mBuyVolume           = 0;          cache.mBuyVolumeFieldState.setState           (MamdaFieldState.NOT_INITIALISED);
        cache.mSellVolume          = 0;          cache.mSellVolumeFieldState.setState          (MamdaFieldState.NOT_INITIALISED);
        cache.mMatchVolume         = 0;          cache.mMatchVolumeFieldState.setState         (MamdaFieldState.NOT_INITIALISED);
        cache.mSecurityStatusQual  = null;       cache.mSecurityStatusQualFieldState.setState  (MamdaFieldState.NOT_INITIALISED);
        cache.mInsideMatchPrice.clear();         cache.mInsideMatchPriceFieldState.setState    (MamdaFieldState.NOT_INITIALISED);
        cache.mFarClearingPrice.clear();         cache.mFarClearingPriceFieldState.setState    (MamdaFieldState.NOT_INITIALISED);
        cache.mNearClearingPrice.clear();        cache.mNearClearingPriceFieldState.setState   (MamdaFieldState.NOT_INITIALISED);
        cache.mNoClearingPrice     = 0;          cache.mNoClearingPriceFieldState.setState     (MamdaFieldState.NOT_INITIALISED);
        cache.mPriceVarInd         = 0;          cache.mPriceVarIndFieldState.setState         (MamdaFieldState.NOT_INITIALISED);
        cache.mCrossType           = 0;          cache.mCrossTypeFieldState.setState           (MamdaFieldState.NOT_INITIALISED);
        cache.mEventTime.clear();                cache.mEventTimeFieldState.setState           (MamdaFieldState.NOT_INITIALISED);
        cache.mEventSeqNum         = 0;          cache.mEventSeqNumFieldState.setState         (MamdaFieldState.NOT_INITIALISED);
        cache.mSrcTime.clear();                  cache.mSrcTimeFieldState.setState             (MamdaFieldState.NOT_INITIALISED);
        cache.mActTime.clear();                  cache.mActTimeFieldState.setState             (MamdaFieldState.NOT_INITIALISED);
        cache.mSendTime.clear();                 cache.mSendTimeFieldState.setState            (MamdaFieldState.NOT_INITIALISED);
        cache.mLineTime.clear();                 cache.mLineTimeFieldState.setState            (MamdaFieldState.NOT_INITIALISED);

        cache.mMsgType             = 0;          cache.mMsgTypeFieldState.setState             (MamdaFieldState.NOT_INITIALISED);
        cache.mIssueSymbol         = null;       cache.mIssueSymbolFieldState.setState         (MamdaFieldState.NOT_INITIALISED);
        cache.mPartId              = null;       cache.mPartIdFieldState.setState              (MamdaFieldState.NOT_INITIALISED);
        cache.mSymbol              = null;       cache.mSymbolFieldState.setState              (MamdaFieldState.NOT_INITIALISED);
        cache.mSeqNum              = 0;          cache.mSeqNumFieldState.setState              (MamdaFieldState.NOT_INITIALISED);
        cache.mSecurityStatusOrig  = null;       cache.mSecurityStatusOrigFieldState.setState  (MamdaFieldState.NOT_INITIALISED);
        cache.mSecurityStatusTime.clear();       cache.mSecurityStatusTimeFieldState.setState  (MamdaFieldState.NOT_INITIALISED);
        cache.mAuctionTime.clear();              cache.mAuctionTimeFieldState.setState         (MamdaFieldState.NOT_INITIALISED);
    }

    public MamdaOrderImbalanceListener ()
    {
        clearCache (orderImbalanceCache);
        
        mFieldIterator = new FieldIterator (this);
    }
    
    public void addHandler (MamdaOrderImbalanceHandler handler)
    {
        mHandlers.add (handler);
    }
    
    public  MamaPrice getHighIndicationPrice () 
    {
        return orderImbalanceCache.mHighIndicationPrice;
    }

    public  MamaPrice getLowIndicationPrice ()
    {
        return orderImbalanceCache.mLowIndicationPrice;
    }

    public  MamaPrice getImbalancePrice ()
    {
        return orderImbalanceCache.mIndicationPrice;
    }

    public  long getBuyVolume ()
    {
        return orderImbalanceCache.mBuyVolume;
    }

    public  long getSellVolume ()
    {
        return orderImbalanceCache.mSellVolume;
    }

    public  long getMatchVolume ()
    {
        return orderImbalanceCache.mMatchVolume;
    }

    public  String getImbalanceState ()
    {
        return orderImbalanceCache.mSecurityStatusQual;
    } 

    public  MamaPrice getMatchPrice ()
    {
        return orderImbalanceCache.mInsideMatchPrice;
    }

    public  MamaPrice getFarClearingPrice ()
    {
        return orderImbalanceCache.mFarClearingPrice;
    }

    public  MamaPrice getNearClearingPrice ()
    {
        return orderImbalanceCache.mNearClearingPrice;
    }

    public  char getNoClearingPrice ()
    {
        return orderImbalanceCache.mNoClearingPrice;
    }
    
    public  char getPriceVarInd ()
    {
        return orderImbalanceCache.mPriceVarInd;
    }

    /*
     * getCrossType return the imbalance cross type
     * @return  mCrossType
     */
    public  char getCrossType ()
    {
        return orderImbalanceCache.mCrossType;
    }

    public  MamaDateTime getEventTime ()
    {
        return orderImbalanceCache.mEventTime;
    }

    public long getEventSeqNum ()
    {
        return orderImbalanceCache.mEventSeqNum;
    }

    public MamaDateTime getActivityTime ()
    {
        return orderImbalanceCache.mActTime;
    }

    public MamaDateTime getSrcTime ()
    {
        return orderImbalanceCache.mSrcTime;
    }

    public MamaDateTime getSendTime ()
    {
        return orderImbalanceCache.mSendTime;
    } 

    public MamaDateTime getLineTime ()
    {
        return orderImbalanceCache.mLineTime;
    }

    public int getMsgType ()
    {
        return orderImbalanceCache.mMsgType;
    }

    public String getIssueSymbol ()
    {
        return orderImbalanceCache.mIssueSymbol;
    }

    public String getPartId ()
    {
        return orderImbalanceCache.mPartId;
    }

    public String getSymbol ()
    {
        return orderImbalanceCache.mSymbol;
    }

    public int getSeqNum ()
    {
        return orderImbalanceCache.mSeqNum;
    }

    public String getSecurityStatusOrig ()
    {
        return orderImbalanceCache.mSecurityStatusOrig;
    }

    public MamaDateTime getSecurityStatusTime ()
    {
        return orderImbalanceCache.mSecurityStatusTime;
    }

    public MamaDateTime getAuctionTime ()
    {
        return orderImbalanceCache.mAuctionTime;
    }
    
    
    /*      FieldState Accessors        */    
    public short getHighIndicationPriceFieldState() 
    {
        return orderImbalanceCache.mHighIndicationPriceFieldState.getState();
    }

    public short getLowIndicationPriceFieldState()
    {
        return orderImbalanceCache.mLowIndicationPriceFieldState.getState();
    }

    public short getImbalancePriceFieldState()
    {
        return orderImbalanceCache.mIndicationPriceFieldState.getState();
    }

    public short getBuyVolumeFieldState()
    {
        return orderImbalanceCache.mBuyVolumeFieldState.getState();
    }

    public short getSellVolumeFieldState()
    {
        return orderImbalanceCache.mSellVolumeFieldState.getState();
    }

    public short getMatchVolumeFieldState()
    {
        return orderImbalanceCache.mMatchVolumeFieldState.getState();
    }

    public short getImbalanceStateFieldState()
    {
        return orderImbalanceCache.mSecurityStatusQualFieldState.getState();
    } 

    public short getMatchPriceFieldState()
    {
        return orderImbalanceCache.mInsideMatchPriceFieldState.getState();
    }

    public short getFarClearingPriceFieldState()
    {
        return orderImbalanceCache.mFarClearingPriceFieldState.getState();
    }

    public short getNearClearingPriceFieldState()
    {
        return orderImbalanceCache.mNearClearingPriceFieldState.getState();
    }

    public short getNoClearingPriceFieldState()
    {
        return orderImbalanceCache.mNoClearingPriceFieldState.getState();
    }
    
    public short getPriceVarIndFieldState()
    {
        return orderImbalanceCache.mPriceVarIndFieldState.getState();
    }

    public short getCrossTypeFieldState()
    {
        return orderImbalanceCache.mCrossTypeFieldState.getState();
    }

    public short getEventTimeFieldState()
    {
        return orderImbalanceCache.mEventTimeFieldState.getState();
    }

    public short getEventSeqNumFieldState()
    {
        return orderImbalanceCache.mEventSeqNumFieldState.getState();
    }

    public short getActivityTimeFieldState()
    {
        return orderImbalanceCache.mActTimeFieldState.getState();
    }

    public short getSrcTimeFieldState()
    {
        return orderImbalanceCache.mSrcTimeFieldState.getState();
    }

    public short getSendTimeFieldState()
    {
        return orderImbalanceCache.mSendTimeFieldState.getState();
    } 

    public short getLineTimeFieldState()
    {
        return orderImbalanceCache.mLineTimeFieldState.getState();
    }

    public short getMsgTypeFieldState()
    {
        return orderImbalanceCache.mMsgTypeFieldState.getState();
    }

    public short getIssueSymbolFieldState()
    {
        return orderImbalanceCache.mIssueSymbolFieldState.getState();
    }

    public short getPartIdFieldState()
    {
        return orderImbalanceCache.mPartIdFieldState.getState();
    }

    public short getSymbolFieldState()
    {
        return orderImbalanceCache.mSymbolFieldState.getState();
    }

    public short getSeqNumFieldState()
    {
        return orderImbalanceCache.mSeqNumFieldState.getState();
    }

    public short getSecurityStatusOrigFieldState()
    {
        return orderImbalanceCache.mSecurityStatusOrigFieldState.getState();
    }

    public short getSecurityStatusTimeFieldState()
    {
        return orderImbalanceCache.mSecurityStatusTimeFieldState.getState();
    }

    public short getAuctionTimeFieldState()
    {
        return orderImbalanceCache.mAuctionTimeFieldState.getState();
    }   
    /*      End fieldState accessors        */
   
    public MamdaOrderImbalanceSide getImbalanceSide ()
    {
        if (orderImbalanceCache.mBuyVolume > 
            orderImbalanceCache.mSellVolume)
        {
            mSide = MamdaOrderImbalanceSide.BID_SIDE;
        }
        else
        {
            mSide = MamdaOrderImbalanceSide.ASK_SIDE;
        }
        return mSide;            
    }
   

    public long getImbalanceVolume ()
    {
        if (MamdaOrderImbalanceSide.BID_SIDE == 
            getImbalanceSide())
        {
            return (getBuyVolume () - getSellVolume());
        }  
        return (getSellVolume () - getBuyVolume());
    }

    public void onMsg (MamdaSubscription subscription,
                       final MamaMsg     msg,
                       short             msgType)
    {

       // Listeners may be created on multiple threads and we only
       // want a single list of updaters.
       if (!mUpdatersComplete)
       {
           synchronized (mUpdatersLock)
           {
               if (!MamdaOrderImbalanceFields.isSet())
               {
                   mLogger.warning ("MamdaOrderImbalanceFields::setDictionary() has not been called.");
                   return;
               }
               if (!mUpdatersComplete)
               {
                   createUpdaters ();
                   mUpdatersComplete = true;
               }
           }
       }

        switch (msgType)
        {
            case MamaMsgType.TYPE_INITIAL:
            case MamaMsgType.TYPE_RECAP:
            case MamaMsgType.TYPE_UPDATE:
            {
                updateFieldStates();
                updateOrderImbalanceFields (subscription, msg, msgType);
            }
            break;
            default:
                break;
        }
    }

    private void handleRecap (MamdaSubscription subscription,
                              final MamaMsg     msg)
    {
        Iterator iter = mHandlers.iterator ();
        while (iter.hasNext())
        {
            MamdaOrderImbalanceHandler handler =
                (MamdaOrderImbalanceHandler) iter.next();
            handler.onOrderImbalanceRecap (subscription,this,msg,this);
        }

    }
   
    private void handleOrderImbalance (MamdaSubscription subscription,
                                       final MamaMsg     msg)
    {
        Iterator iter = mHandlers.iterator ();
        while (iter.hasNext())
        {
            MamdaOrderImbalanceHandler handler =
                (MamdaOrderImbalanceHandler) iter.next();
            handler.onOrderImbalance (subscription, this, msg, this, this);
        }

    }
    
    private void handleNoOrderImbalance (MamdaSubscription subscription,
                                         final MamaMsg     msg)
    {
        Iterator iter = mHandlers.iterator ();
        while (iter.hasNext())
        {
            MamdaOrderImbalanceHandler handler =
                (MamdaOrderImbalanceHandler) iter.next();
            handler.onNoOrderImbalance (subscription, this, msg, this, this);
        }      
    }
    private void updateFieldStates ()

    {
        if (orderImbalanceCache.mHighIndicationPriceFieldState.getState() == MamdaFieldState.MODIFIED)       
            orderImbalanceCache.mHighIndicationPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mLowIndicationPriceFieldState.getState() == MamdaFieldState.MODIFIED)              
            orderImbalanceCache.mLowIndicationPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mIndicationPriceFieldState.getState() == MamdaFieldState.MODIFIED)       
            orderImbalanceCache.mIndicationPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mBuyVolumeFieldState.getState() == MamdaFieldState.MODIFIED)      
            orderImbalanceCache.mBuyVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mSellVolumeFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mSellVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mMatchVolumeFieldState.getState() == MamdaFieldState.MODIFIED)        
            orderImbalanceCache.mMatchVolumeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mSecurityStatusQualFieldState.getState() == MamdaFieldState.MODIFIED)  
            orderImbalanceCache.mSecurityStatusQualFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mInsideMatchPriceFieldState.getState() == MamdaFieldState.MODIFIED)  
            orderImbalanceCache.mInsideMatchPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mFarClearingPriceFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mFarClearingPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mNearClearingPriceFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mNearClearingPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mNoClearingPriceFieldState.getState() == MamdaFieldState.MODIFIED)  
            orderImbalanceCache.mNoClearingPriceFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mPriceVarIndFieldState.getState() == MamdaFieldState.MODIFIED)    
            orderImbalanceCache.mPriceVarIndFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mCrossTypeFieldState.getState() == MamdaFieldState.MODIFIED)  
            orderImbalanceCache.mCrossTypeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mEventTimeFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mEventTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mEventSeqNumFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mEventSeqNumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mSrcTimeFieldState.getState() == MamdaFieldState.MODIFIED)     
            orderImbalanceCache.mSrcTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mActTimeFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mActTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mSendTimeFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mSendTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mLineTimeFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mLineTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
    
        if (orderImbalanceCache.mMsgTypeFieldState.getState() == MamdaFieldState.MODIFIED) 
            orderImbalanceCache.mMsgTypeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mIssueSymbolFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mIssueSymbolFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mPartIdFieldState.getState() == MamdaFieldState.MODIFIED)     
            orderImbalanceCache.mPartIdFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mSymbolFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mSymbolFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mSeqNumFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mSeqNumFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mSecurityStatusOrigFieldState.getState() == MamdaFieldState.MODIFIED) 
            orderImbalanceCache.mSecurityStatusOrigFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mSecurityStatusTimeFieldState.getState() == MamdaFieldState.MODIFIED)
            orderImbalanceCache.mSecurityStatusTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
        if (orderImbalanceCache.mAuctionTimeFieldState.getState() == MamdaFieldState.MODIFIED)       
            orderImbalanceCache.mAuctionTimeFieldState.setState(MamdaFieldState.NOT_MODIFIED);
    }

    private void updateOrderImbalanceFields (final MamdaSubscription subscription,
                                             final MamaMsg           msg,
                                             final int               msgType)
    {
        String securityStatus = null;
        synchronized (this)
        {
            orderImbalanceCache.mIsOrderImbalance = false;

            msg.iterateFields (mFieldIterator, null, null);
        }

        switch (msgType)
        {
            case MamaMsgType.TYPE_INITIAL:
            case MamaMsgType.TYPE_RECAP:
                handleRecap (subscription, msg);
                break;
            case MamaMsgType.TYPE_UPDATE:
                if(orderImbalanceCache.mIsOrderImbalance )
                {               
                    if (MamdaOrderImbalanceType.isMamdaImbalanceOrder (orderImbalanceCache.mSecurityStatusQualValue) ||
                                            (orderImbalanceCache.mSecurityStatusQualValue == MamdaOrderImbalanceType.UNKNOWN))
                    {
                        handleOrderImbalance (subscription,msg); 
                    }
                    else
                    {
                        handleNoOrderImbalance (subscription, msg); 
                    }
                }
                break;
            default:
                break;
        }
        
    }
    
    private boolean isImbalanceType (String securityStatus)
    {
        int value = MamdaOrderImbalanceType.stringToValue (securityStatus);
        return MamdaOrderImbalanceType.isMamdaOrderImbalanceType (value);
    }

    private static void createUpdaters ()
    {
        mUpdaters = new ImbalanceOrderUpdate [MamdaOrderImbalanceFields.getMaxFid() + 1];

        addUpdaterToList (MamdaOrderImbalanceFields.HIGH_INDICATION_PRICE,
                           new ImbalanceHighIndicationPrice ());
        addUpdaterToList (MamdaOrderImbalanceFields.LOW_INDICATION_PRICE,
                           new ImbalanceLowIndicationPrice());
        addUpdaterToList (MamdaOrderImbalanceFields.INDICATION_PRICE,
                           new ImbalanceIndicationPrice ());
        addUpdaterToList (MamdaOrderImbalanceFields.BUY_VOLUME,
                           new ImbalanceBuyVolume ());
        addUpdaterToList (MamdaOrderImbalanceFields.SELL_VOLUME,
                           new ImbalanceSellVolume());
        addUpdaterToList (MamdaOrderImbalanceFields.MATCH_VOLUME,
                           new ImbalanceMatchVolume());
        addUpdaterToList (MamdaOrderImbalanceFields.SECURITY_STATUS_QUAL,
                           new ImbalanceSecurityStatusQual ());
        addUpdaterToList (MamdaOrderImbalanceFields.INSIDE_MATCH_PRICE,
                           new ImbalanceInsideMatchPrice ());
        addUpdaterToList (MamdaOrderImbalanceFields.FAR_CLEARING_PRICE,
                           new ImbalanceFarClearingPrice ());
        addUpdaterToList (MamdaOrderImbalanceFields.NEAR_CLEARING_PRICE,
                           new ImbalanceNearClearingPrice ());
        addUpdaterToList (MamdaOrderImbalanceFields.NO_CLEARING_PRICE,
                           new ImbalanceNoClearingPrice ());
        addUpdaterToList (MamdaOrderImbalanceFields.PRICE_VAR_IND,
                           new ImbalancePriceVarInd ());
        addUpdaterToList (MamdaOrderImbalanceFields.CROSS_TYPE,
                           new ImbalanceCrossType ());
        addUpdaterToList (MamdaOrderImbalanceFields.MSG_TYPE,
                           new ImbalanceMsgType ());
        addUpdaterToList (MamdaOrderImbalanceFields.ISSUE_SYMBOL,
                           new ImbalanceIssueSymbol ());
        addUpdaterToList (MamdaOrderImbalanceFields.PART_ID,
                           new ImbalancePartId ());
        addUpdaterToList (MamdaOrderImbalanceFields.SYMBOL,
                           new ImbalanceSymbol ());
        addUpdaterToList (MamdaOrderImbalanceFields.SEQ_NUM,
                           new ImbalanceSeqNum ());
        addUpdaterToList (MamdaOrderImbalanceFields.SECURITY_STATUS_ORIG,
                           new ImbalanceSecurityStatusOrig ());
        addUpdaterToList (MamdaOrderImbalanceFields.SECURITY_STATUS_TIME,
                           new ImbalanceSecurityStatusTime ());
        addUpdaterToList (MamdaOrderImbalanceFields.AUCTION_TIME,
                           new ImbalanceAuctionTime ());
        addUpdaterToList (MamdaOrderImbalanceFields.SRC_TIME,
                           new ImbalanceSrcTime ());
        addUpdaterToList (MamdaOrderImbalanceFields.ACTIVITY_TIME,
                           new ImbalanceActivityTime ());
        addUpdaterToList (MamdaOrderImbalanceFields.SEND_TIME,
                           new ImbalanceSendTime ());
        addUpdaterToList (MamdaOrderImbalanceFields.LINE_TIME,
                           new ImbalanceLineTime ());
    }

    private static void addUpdaterToList (MamaFieldDescriptor   fieldDesc,
                                          ImbalanceOrderUpdate  updater)
    {
        if (fieldDesc == null) return;
        int fieldId = fieldDesc.getFid();
        mUpdaters[fieldId]= updater;
    }

    /*************************************************************
     *Private class used for Field Iteration
     ************************************************************/
    private class FieldIterator implements MamaMsgFieldIterator
    {
        private MamdaOrderImbalanceListener mListener;
        
        public FieldIterator (MamdaOrderImbalanceListener listener)
        {
            mListener = listener;
        }

        public void onField (MamaMsg        msg,
                             MamaMsgField   field,
                             MamaDictionary dictionary,
                             Object         closure)
        {
            try
            {
                int fieldId = field.getFid ();
                if (fieldId < mUpdaters.length)
                {
                    ImbalanceOrderUpdate updater = 
                        (ImbalanceOrderUpdate) mUpdaters[fieldId];
                
                    if (updater != null)
                    {
                        updater.onUpdate (mListener, field);
                    }
                }
            }
            catch (Exception ex )
            {
                mLogger.fine ("Error processing field - fid: " + field.getFid () +
                                  " type: " + field.getTypeName());
                throw new MamaException (ex.getMessage());
            }
        }
    }
    
    private interface ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,            
                              MamaMsgField                field);
    }

    private static class ImbalanceHighIndicationPrice implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mHighIndicationPrice.copy (
                field.getPrice ());
            listener.orderImbalanceCache.mHighIndicationPriceFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceLowIndicationPrice implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mLowIndicationPrice.copy (
                field.getPrice ());
            listener.orderImbalanceCache.mLowIndicationPriceFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceIndicationPrice implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mIndicationPrice.copy (
                field.getPrice ());
            listener.orderImbalanceCache.mIndicationPriceFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceBuyVolume implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mBuyVolume =
                field.getI64 ();
            listener.orderImbalanceCache.mBuyVolumeFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceSellVolume implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mSellVolume =
                field.getI64 ();
            listener.orderImbalanceCache.mSellVolumeFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceMatchVolume implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mMatchVolume =
                field.getI64 ();
            listener.orderImbalanceCache.mMatchVolumeFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceSecurityStatusQual implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mSecurityStatusQual =
                field.getString ();
            listener.orderImbalanceCache.mSecurityStatusQualFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mSecurityStatusQualValue = 
            MamdaOrderImbalanceType.stringToValue (field.getString());
            if (MamdaOrderImbalanceType.isMamdaOrderImbalanceType (listener.orderImbalanceCache.mSecurityStatusQualValue))
            {
                listener.orderImbalanceCache.mIsOrderImbalance = true;
            }
        }
    }

    private static class ImbalanceInsideMatchPrice implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mInsideMatchPrice.copy (
                field.getPrice ());
            listener.orderImbalanceCache.mInsideMatchPriceFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceFarClearingPrice implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mFarClearingPrice.copy (
                field.getPrice ());
            listener.orderImbalanceCache.mFarClearingPriceFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceNearClearingPrice implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mNearClearingPrice.copy (
                field.getPrice ());
            listener.orderImbalanceCache.mNearClearingPriceFieldState.setState(
                MamdaFieldState.MODIFIED);
            listener.orderImbalanceCache.mIsOrderImbalance = true;
        }
    }

    private static class ImbalanceNoClearingPrice implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            // There is a bug in 2.14 FHs which can cause character fields to be sent as strings
            // FH property CharFieldAsStringField in 2.16-> can enable this behaviour
            // Adding support for this in MAMDA for client apps coded to expect this behaviour
            switch (field.getType())
            {
                case MamaFieldDescriptor.CHAR :
                    listener.orderImbalanceCache.mNoClearingPrice =
                        field.getChar ();
                    listener.orderImbalanceCache.mNoClearingPriceFieldState.setState(
                        MamdaFieldState.MODIFIED);
                    listener.orderImbalanceCache.mIsOrderImbalance = true;
                    break;

                case MamaFieldDescriptor.STRING :
                    if (field.getString().length() > 0)
                    {
                        listener.orderImbalanceCache.mNoClearingPrice =
                            field.getString().charAt(0);
                        listener.orderImbalanceCache.mNoClearingPriceFieldState.setState(
                            MamdaFieldState.MODIFIED);
                            listener.orderImbalanceCache.mIsOrderImbalance = true;
                    }
                    else
                    {
                        listener.orderImbalanceCache.mNoClearingPrice = ' ';
                        listener.orderImbalanceCache.mNoClearingPriceFieldState.setState(
                            MamdaFieldState.MODIFIED);
                        listener.orderImbalanceCache.mIsOrderImbalance = true;
                    }
                    break;

                default: 
                    break;
            }
        }
    }

    private static class ImbalancePriceVarInd implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            // There is a bug in 2.14 FHs which can cause character fields to be sent as strings
            // FH property CharFieldAsStringField in 2.16-> can enable this behaviour
            // Adding support for this in MAMDA for client apps coded to expect this behaviour
            switch (field.getType())
            {
                case MamaFieldDescriptor.CHAR :
                    listener.orderImbalanceCache.mPriceVarInd =
                        field.getChar ();
                    listener.orderImbalanceCache.mPriceVarIndFieldState.setState(
                        MamdaFieldState.MODIFIED);
                    listener.orderImbalanceCache.mIsOrderImbalance = true;
                    break;

                case MamaFieldDescriptor.STRING :
                    if (field.getString().length() > 0)
                    {
                        listener.orderImbalanceCache.mPriceVarInd =
                            field.getString().charAt(0);
                        listener.orderImbalanceCache.mPriceVarIndFieldState.setState(
                            MamdaFieldState.MODIFIED);
                        listener.orderImbalanceCache.mIsOrderImbalance = true;
                    }
                    else
                    {
                        listener.orderImbalanceCache.mPriceVarInd = ' ';
                        listener.orderImbalanceCache.mPriceVarIndFieldState.setState(
                            MamdaFieldState.MODIFIED);
                        listener.orderImbalanceCache.mIsOrderImbalance = true;
                    }
                    break;

                default: 
                    break;
            }
        }
    }

    private static class ImbalanceCrossType implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            //There is a bug in 2.14 FHs which can cause character fields to be sent as strings
            //FH property CharFieldAsStringField in 2.16-> can enable this behaviour
            //Adding support for this in MAMDA for client apps coded to expect this behaviour
            switch (field.getType())
            {
                case MamaFieldDescriptor.CHAR :
                    listener.orderImbalanceCache.mCrossType =
                        field.getChar ();
                    listener.orderImbalanceCache.mCrossTypeFieldState.setState(
                        MamdaFieldState.MODIFIED);
                    listener.orderImbalanceCache.mIsOrderImbalance = true;
                    break;

                case MamaFieldDescriptor.STRING :
                    if (field.getString().length() > 0)
                    {
                        listener.orderImbalanceCache.mCrossType =
                            field.getString().charAt(0);
                        listener.orderImbalanceCache.mCrossTypeFieldState.setState(
                            MamdaFieldState.MODIFIED);
                        listener.orderImbalanceCache.mIsOrderImbalance = true;
                    }
                    else
                    {
                        listener.orderImbalanceCache.mCrossType = ' ';
                        listener.orderImbalanceCache.mCrossTypeFieldState.setState(
                            MamdaFieldState.MODIFIED);
                        listener.orderImbalanceCache.mIsOrderImbalance = true;
                    }
                    break;

                default: 
                    break;
            }
        }
    }

    private static class ImabalanceEventTime implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mEventTime.copy (
                field.getDateTime ());
            listener.orderImbalanceCache.mEventTimeFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceEventSeqNum implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mEventSeqNum =
                field.getI32 ();
            listener.orderImbalanceCache.mEventSeqNumFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceSrcTime implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mSrcTime.copy (
                field.getDateTime ());
            listener.orderImbalanceCache.mSrcTimeFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceActivityTime implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mActTime.copy (
                field.getDateTime ());
            listener.orderImbalanceCache.mActTimeFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceSendTime implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mSendTime.copy (
                field.getDateTime ());
            listener.orderImbalanceCache.mSendTimeFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceLineTime implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mLineTime.copy (
                field.getDateTime ());
            listener.orderImbalanceCache.mLineTimeFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceMsgType implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mMsgType =
                field.getI32 ();
            listener.orderImbalanceCache.mMsgTypeFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceIssueSymbol implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mIssueSymbol =
                field.getString ();
            listener.orderImbalanceCache.mIssueSymbolFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalancePartId implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mPartId =
                field.getString ();
            listener.orderImbalanceCache.mPartIdFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceSymbol implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mSymbol =
                field.getString ();
            listener.orderImbalanceCache.mSymbolFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceSeqNum implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mSeqNum =
                field.getI32 ();
            listener.orderImbalanceCache.mSeqNumFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceSecurityStatusOrig implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mSecurityStatusOrig =
                field.getString ();
            listener.orderImbalanceCache.mSecurityStatusOrigFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceSecurityStatusTime implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mSecurityStatusTime.copy (
                field.getDateTime ());
            listener.orderImbalanceCache.mSecurityStatusTimeFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }

    private static class ImbalanceAuctionTime implements ImbalanceOrderUpdate
    {
        public void onUpdate (MamdaOrderImbalanceListener listener,
                              MamaMsgField                field)
        {
            listener.orderImbalanceCache.mAuctionTime.copy (
                field.getDateTime ());
            listener.orderImbalanceCache.mAuctionTimeFieldState.setState(
                MamdaFieldState.MODIFIED);
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100
