---
title: OrderBook/MamdaOrderBookListener.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# OrderBook/MamdaOrderBookListener.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html)** <br>[MamdaOrderBookListener]() is a class that specializes in handling order book updates. Developers provide their own implementation of the [MamdaOrderBookHandler](interfaceWombat_1_1MamdaOrderBookHandler.html) interface and will be delivered notifications for order book recaps and deltas. Notifications for order book deltas include the delta itself as well as the full order book with deltas applied. An obvious application for this MAMDA class is any kind of program trading application that looks at depth of book.  |




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
using System.Collections;

namespace Wombat
{
    public class MamdaOrderBookListener :
        MamdaMsgListener,
        MamdaOrderBookRecap,
        MamdaOrderBookDelta,
        MamdaOrderBookGap
    {
        public MamdaOrderBookListener()
        {
            mFullBook  = new MamdaOrderBook();
            mDeltaBook = new MamdaOrderBook();
        }

        public MamdaOrderBookListener(
            MamdaOrderBook fullBook,
            MamdaOrderBook deltaBook)
        {
            mFullBook  = fullBook;
            mDeltaBook = deltaBook;
        }

        public void addHandler(MamdaOrderBookHandler handler)
        {
            mHandlers.Add(handler); // same as LinkedList.addLast()
        }

        public void addIgnoreEntryId(string id)
        {
        }

        public void removeIgnoreEntryId(string id)
        {
        }

        public void clear()
        {
        }

        public DateTime getSrcTime()
        {
            return mSrcTime;
        }

        public DateTime getActivityTime()
        {
            return mActTime;
        }

        public long getEventSeqNum()
        {
            return mEventSeqNum.Value;
        }

        public DateTime getEventTime()
        {
            return mEventTime;
        }
        /*  Field State Accessors   */

        public MamdaFieldState   getSymbolFieldState()
        {
          return mSymbolFieldState;
        }

        public MamdaFieldState   getPartIdFieldState()
        {
          return mPartIdFieldState;
        }

        public MamdaFieldState   getSrcTimeFieldState()
        {
          return mSrcTimeFieldState;
        }

        public MamdaFieldState   getActivityTimeFieldState()
        {
          return mActivityTimeFieldState;
        }

        public MamdaFieldState   getLineTimeFieldState()
        {
          return mLineTimeFieldState;
        }

        public MamdaFieldState   getSendTimeFieldState()
        {
          return mSendTimeFieldState;
        }

        public MamdaFieldState getEventSeqNumFieldState()
        {
          return mEventSeqNumFieldState;
        }

        public MamdaFieldState   getEventTimeFieldState()
        {
          return mEventTimeFieldState;
        }

        /* End Field State Accessors    */


        public MamdaOrderBook getFullOrderBook()
        {
            return mFullBook;
        }

        public MamdaOrderBook getDeltaOrderBook()
        {
            return mDeltaBook;
        }

        public long getBeginGapSeqNum()
        {
            return mGapBegin;
        }

        public long getEndGapSeqNum()
        {
            return mGapEnd;
        }

        public long getSeqNum()
        {
            return mSeqNum;
        }

        public MamdaOrderBook getBookSnapshot()
        {
            MamdaOrderBook mSnapshot = null;
            if (mFullBook != null)
            {
                mSnapshot = new MamdaOrderBook();
                // aquire lock
                lock (mFullBook)
                {
                    mSnapshot.copy(mFullBook);
                    mSnapshot.setSymbol(mFullBook.getSymbol());
                    mSnapshot.setIsConsistent(mFullBook.getIsConsistent());
                }
            }
            return mSnapshot;
        }

        public MamdaOrderBook getDeepBookSnapshot()
        {
            MamdaOrderBook mSnapshot = null;
            if (null != mFullBook)
            {
                mSnapshot = new MamdaOrderBook();
                // aquire lock
                lock (mFullBook)
                {
                    mSnapshot.deepCopy(mFullBook);
                    mSnapshot.setSymbol(mFullBook.getSymbol()); // strings are immutable, hence safe for assignment
                    mSnapshot.setIsConsistent(mFullBook.getIsConsistent());
                }
            }
            return mSnapshot;
        }

        public void setUpdateInconsistentBook(bool update)
        {
            mUpdateInconsistentBook = update;
        }

        #region MamdaMsgListener implementation

        public void onMsg(
            MamdaSubscription subscription,
            MamaMsg msg,
            mamaMsgType msgType)
        {
            if(!MamdaOrderBookFields.isSet())
            {
                return;
            }

            // If msg is a order book related message, invoke the
            // appropriate callback:
            switch (msgType)
            {
                case mamaMsgType.MAMA_MSG_TYPE_BOOK_CLEAR:
                    handleClear(subscription, msg);
                    break;
                case mamaMsgType.MAMA_MSG_TYPE_BOOK_INITIAL:
                case mamaMsgType.MAMA_MSG_TYPE_BOOK_RECAP:
                case mamaMsgType.MAMA_MSG_TYPE_BOOK_SNAPSHOT:
                    handleRecap(subscription, msg);
                    break;
                case mamaMsgType.MAMA_MSG_TYPE_BOOK_UPDATE:
                    handleUpdate(subscription, msg);
                    break;
            }
        }

        private void handleClear(
            MamdaSubscription subscription,
            MamaMsg msg)
        {
            // Synchronize the current Order Book in case a snapshot is being created
            if (mFullBook != null)
            {
                lock (mFullBook)
                {
                    handleStandardFields(subscription, msg, false);


                    mDeltaBook.setSymbol(subscription.getSymbol());
                    mDeltaBook.setAsDeltaDeleted(mFullBook);
                    mFullBook.clear();
                    mFullBook.setSymbol(subscription.getSymbol());
                    mFullBook.setIsConsistent(true);
                }
            }
            else
            {
                handleStandardFields(subscription, msg, false);
            }
            invokeClearHandlers(subscription, msg);
            mGotInitial = true;
        }

        private void handleRecap(
            MamdaSubscription subscription,
            MamaMsg msg)
        {
            // Synchronize the current Order Book in case a snapshot is being created
            if (mFullBook != null)
            {
                lock (mFullBook)
                {
                    msg.tryU64(MamaReservedFields.SenderId, ref mPreviousSenderId);
                    handleStandardFields(subscription, msg, false);
                    if (createDeltaFromMamaMsg(mTempmDeltaBook, msg))
                    {
                        mDeltaBook.setSymbol(subscription.getSymbol());
                        mDeltaBook.setBookTime(msg.getDateTime(MamdaOrderBookFields.BOOK_TIME, mSrcTime));
                        mDeltaBook.setAsDeltaDifference(mFullBook, mTempmDeltaBook);
                        mFullBook.copy(mTempmDeltaBook);
                        mFullBook.setSymbol(subscription.getSymbol());
                        mFullBook.setBookTime(mDeltaBook.getBookTime());
                        mFullBook.setIsConsistent(true);
                        invokeRecapHandlers(subscription, msg);
                    }
                }
            }
            else
            {
                handleStandardFields(subscription, msg, false);
                // Set the delta to be the contents of the recap.
                if (createDeltaFromMamaMsg(mDeltaBook, msg))
                {
                        mDeltaBook.setSymbol(subscription.getSymbol());
                    invokeRecapHandlers(subscription, msg);
                }
            }
            mGotInitial = true;
        }

        private void handleUpdate(
            MamdaSubscription subscription,
            MamaMsg msg)
        {
            if (!mGotInitial)
            {
                throw new MamdaOrderBookException (
                    "got update before initial/recap");
            }
            // Synchronize the current Order Book in case a snapshot is being created
            if (mFullBook != null)
            {
                lock (mFullBook)
                {
                    handleUpdateImpl(subscription, msg);
                }
            }
            else
            {
                handleUpdateImpl(subscription, msg);
            }
        }

        private void handleUpdateImpl(
            MamdaSubscription subscription,
            MamaMsg msg)
        {
            handleStandardFields(subscription, msg, true);
            if (createDeltaFromMamaMsg(mDeltaBook, msg))
            {

                mDeltaBook.setSymbol(subscription.getSymbol());
                mDeltaBook.setBookTime(msg.getDateTime(MamdaOrderBookFields.BOOK_TIME, mSrcTime));
                if (mFullBook != null)
                {
                    if (mUpdateInconsistentBook || mFullBook.getIsConsistent())
                    {
                        mFullBook.apply(mDeltaBook);
                    }

                    mFullBook.setBookTime(mDeltaBook.getBookTime());
                }
                if (mHandlers.Count > 0)
                {
                    if (mUpdateInconsistentBook || (mFullBook == null) || mFullBook.getIsConsistent())
                    {
                        invokeDeltaHandlers(subscription, msg);
                    }
                }
            }
        }

        private void handleStandardFields(
            MamdaSubscription subscription,
            MamaMsg msg,
            bool checkSeqNum)
        {
            long seqNum = 0;
            msg.tryI64(MamaReservedFields.SeqNum, ref seqNum);
            ulong senderId = 0;
            msg.tryU64(MamaReservedFields.SenderId, ref senderId);
            if (checkSeqNum)
            {
                if ((seqNum != 0) && (mSeqNum != (seqNum - 1)))
                {
                    mGapBegin = mSeqNum + 1;
                    mGapEnd   = seqNum   - 1;
                    invokeGapHandlers(subscription, msg);
                    if (mFullBook != null && senderId == mPreviousSenderId)
                    {
                        mFullBook.setIsConsistent(false);
                    }
                }
            }
            mSeqNum = seqNum;
            mPreviousSenderId = senderId;
            msg.tryI64(MamdaOrderBookFields.SEQNUM, ref mEventSeqNum);
            msg.tryDateTime(MamdaOrderBookFields.SRC_TIME, ref mSrcTime);
            msg.tryDateTime(MamdaOrderBookFields.ACTIVITY_TIME, ref mActTime);
        }

        private bool createDeltaFromMamaMsg(
            MamdaOrderBook delta,
            MamaMsg msg)
        {
            // Note: the following test checks whether vector fields are part
            // of the data dictionary.  However, the vector fields may indeed
            // be part of the data dictionary, but the message may still
            // contain the non-vector style order book data.
            if (MamdaOrderBookFields.getHasVectorFields())
            {
                /* null is passed as default value otherwise
                    getVectorMsg throws an exception if not found*/
                MamaMsg[] msgLevels =
                    msg.getVectorMsg(MamdaOrderBookFields.PRICE_LEVELS, null);
                if (msgLevels != null)
                {
                    createDeltaFromMamaMsgWithVectorFields(delta, msgLevels);
                    return true;
                }
            }
            return createDeltaFromMamaMsgWithoutVectorFields(delta, msg);
        }

        private void createDeltaFromMamaMsgWithVectorFields (
            MamdaOrderBook delta,
            MamaMsg[] msgLevels)
        {
            /*
             * Books with vector fields always come in a single MamaMsg.
             */
            delta.clear();

            for (int i = 0; i < msgLevels.Length; i++)
            {
                MamaMsg plMsg = msgLevels[i];
                MamdaOrderBookPriceLevel level = new MamdaOrderBookPriceLevel();

                getLevelInfo(level, plMsg, delta);
                getEntries(level, plMsg);
                delta.addLevel(level);
            }
        }

        private bool createDeltaFromMamaMsgWithoutVectorFields(
            MamdaOrderBook delta,
            MamaMsg msg)
        {
            int msgNum   = 1;
            int msgTotal = 1;

            if (msg.tryI32(MamaReservedFields.MsgNum, ref mMsgNum))
            {
                msgNum = mMsgNum.Value;
            }
            if (msg.tryI32(MamaReservedFields.MsgTotal, ref mMsgTotal))
            {
                msgTotal = mMsgTotal.Value;
            }

            if (msgNum == 1)
            {
                // Only clear the book if this is the first message in the
                // set of updates.
                delta.clear();
            }

            if (!mHaveSanityCheckedBookDict)
            {
                mHaveSanityCheckedBookDict = true;
                if (MamdaOrderBookFields.PRICE_LEVEL.Length == 0)
                {
                    throw new MamdaOrderBookException (
                        "data dictionary error: cannot find price level fields");
                }
            }

            //for optimised feed date, wNumLevels should be assumed = 1 if not sent
            int numLevelFieldInMsg = 1;
            if (msg.tryI32(MamdaOrderBookFields.NUM_LEVELS, ref mNumLevelFields))
            {
                numLevelFieldInMsg = mNumLevelFields.Value;
            }

            int maxLevelFields = MamdaOrderBookFields.PRICE_LEVEL.Length;
            if (numLevelFieldInMsg < maxLevelFields)
            {
                maxLevelFields = numLevelFieldInMsg;
            }

            for (int i = 1; i <= maxLevelFields; i++)
            {
                MamaMsg plMsg = msg.getMsg(MamdaOrderBookFields.PRICE_LEVEL[i], null);

                if (plMsg == null)
                {
                    if (numLevelFieldInMsg == 1)
                    {
                        /* Price level fields are probably be in the main
                         * message. */
                        plMsg = msg;
                    }
                    else
                    {
                        throw new MamdaDataException (
                            "cannot find price level fields in MamaMsg");
                    }
                }

                MamdaOrderBookPriceLevel level = new MamdaOrderBookPriceLevel();
                getLevelInfo(level, plMsg, delta);
                getEntries(level, plMsg);
                delta.addLevel (level);
            }
            return msgNum == msgTotal;
        }

        private void getLevelInfo(
            MamdaOrderBookPriceLevel level,
            MamaMsg plMsg,
            MamdaOrderBook deltaBook)
        {
            level.setPrice(plMsg.getPrice(MamdaOrderBookFields.PL_PRICE));

            level.setSize((long)plMsg.getF64(MamdaOrderBookFields.PL_SIZE, 0));
            level.setNumEntries((int)plMsg.getF64(MamdaOrderBookFields.PL_NUM_ENTRIES, 1));
            level.setAction((MamdaOrderBookPriceLevel.Actions)plMsg.getChar(
                             MamdaOrderBookFields.PL_ACTION, 'A'));
            level.setSide((MamdaOrderBookPriceLevel.Sides)plMsg.getChar(
                           MamdaOrderBookFields.PL_SIDE, 'B'));

            /* Optional order book fields: */
            level.setSizeChange((long)plMsg.getF64(MamdaOrderBookFields.PL_SIZE_CHANGE, 0)); //default 0
            level.setTime(plMsg.getDateTime(MamdaOrderBookFields.PL_TIME, deltaBook.getBookTime()));
        }

        private void getEntries(
            MamdaOrderBookPriceLevel level,
            MamaMsg plMsg)
        {
            /* Entries may or may not exist in the message.  If they do exist,
             * they exist as a vector of submessages, separate submessages, or
             * (if there is only one entry in the message) in the price level
             * message itself. */

            /* Optional order book fields: */
            MamaMsg[] msgEntries = null;
            /*We won't have PL_ENTRIES if FieldAttrsOrderBookWombatMsg
             is not specified in the data dictionary*/
            if (MamdaOrderBookFields.PL_ENTRIES != null)
            {
                /* null is passed as default value otherwise
                    getVectorMsg throws an exception if not found*/
                msgEntries = plMsg.getVectorMsg(MamdaOrderBookFields.PL_ENTRIES, null);
            }
            if (msgEntries != null)
            {
                MamdaOrderBookEntry[] entries = new MamdaOrderBookEntry[msgEntries.Length];
                for (int j = 0; j < msgEntries.Length; j++)
                {
                    MamaMsg entMsg = msgEntries[j];
                    if (entMsg != null)
                    {
                        MamdaOrderBookEntry entry = new MamdaOrderBookEntry();
                        getEntryInfo(entry, entMsg, level);
                        level.addEntry(entry);
                    }
                }
                return;
            }

            /* Second, try the list of entries. */
            int maxEntryFields = MamdaOrderBookFields.PL_ENTRY.Length;

            // Get the number of attached sub messages
            int numEntryAttached = plMsg.getI32(MamdaOrderBookFields.PL_NUM_ATTACH, 0);

            // If there are no sub messages attempt to get the entry Id from this price level message
            if (0 == numEntryAttached)
            {
                string entID = null;
                // Check for the entry Id
                if (plMsg.tryString(MamdaOrderBookFields.ENTRY_ID, ref entID))
                {
                    // Add a new entry to the level
                    MamdaOrderBookEntry entry = new MamdaOrderBookEntry();
                    getEntryInfo(entry, plMsg, level);
                    level.addEntry(entry);
                }
            }

            else
            {
                // Ensure we dont' enumerate beyond the maximum number of entries
                if (numEntryAttached < maxEntryFields)
                {
                    maxEntryFields = numEntryAttached;
                }

                // Enumerate all the entries
                for (int j = 1; j <= maxEntryFields; j++)
                {
                    // Get the sub message
                    MamaMsg entMsg = plMsg.getMsg(MamdaOrderBookFields.PL_ENTRY[j], null);
                    if (entMsg != null)
                    {
                        // Add an entry for this level
                        MamdaOrderBookEntry entry = new MamdaOrderBookEntry();
                        getEntryInfo(entry, entMsg, level);
                        level.addEntry(entry);
                    }
                }
            }
        }

        void getEntryInfo(
            MamdaOrderBookEntry entry,
            MamaMsg entMsg,
            MamdaOrderBookPriceLevel level)
        {
            entry.setAction((MamdaOrderBookEntry.Actions)entMsg.getChar(
                             MamdaOrderBookFields.ENTRY_ACTION, 'D'));
            entry.setId(entMsg.getString(MamdaOrderBookFields.ENTRY_ID));
            entry.setSize((long)entMsg.getF64(MamdaOrderBookFields.ENTRY_SIZE, 0));
            entry.setTime(entMsg.getDateTime(MamdaOrderBookFields.ENTRY_TIME, level.getTime()));
        }

        private void invokeClearHandlers(
            MamdaSubscription subscription,
            MamaMsg msg)
        {
            foreach (MamdaOrderBookHandler handler in mHandlers)
            {
                handler.onBookClear(subscription, this, msg, this, this);
            }
        }

        private void invokeRecapHandlers(
            MamdaSubscription subscription,
            MamaMsg msg)
        {
            foreach (MamdaOrderBookHandler handler in mHandlers)
            {
                handler.onBookRecap(subscription, this, msg, this, this);
            }
        }

        private void invokeDeltaHandlers (MamdaSubscription subscription,
            MamaMsg           msg)
        {
            foreach (MamdaOrderBookHandler handler in mHandlers)
            {
                handler.onBookDelta(subscription, this, msg, this, this);
            }
        }

        private void invokeGapHandlers(
            MamdaSubscription subscription,
            MamaMsg msg)
        {
            foreach (MamdaOrderBookHandler handler in mHandlers)
            {
                handler.onBookGap(subscription, this, msg, this, this);
            }
        }

        #endregion MamdaMsgListener implementation

        #region Implementation details

        private MamdaOrderBook         mFullBook                    = null;
        private MamdaOrderBook         mDeltaBook                   = null;
        private ArrayList              mHandlers                    = new ArrayList();
        private MamdaOrderBook         mTempmDeltaBook              = new MamdaOrderBook();
        private DateTime               mSrcTime                     = DateTime.MinValue;
        private DateTime               mActTime                     = DateTime.MinValue;
        private DateTime               mEventTime                   = DateTime.MinValue;
        private NullableLong           mEventSeqNum                 = new NullableLong();
        private long                   mSeqNum                      = 0;
        private ulong                  mPreviousSenderId            = 0;
        private NullableInt            mMsgNum                      = new NullableInt();
        private NullableInt            mMsgTotal                    = new NullableInt();
        private NullableInt            mNumLevelFields              = new NullableInt();
        private long                   mGapBegin                    = 0;
        private long                   mGapEnd                      = 0;
        private bool                   mGotInitial                  = false;
        private bool                   mHaveSanityCheckedBookDict   = false;
        private bool                   mUpdateInconsistentBook      = false;

        //Field State
        private MamdaFieldState          mSymbolFieldState                  = new MamdaFieldState();
        private MamdaFieldState          mPartIdFieldState                  = new MamdaFieldState();
        private MamdaFieldState          mSrcTimeFieldState                 = new MamdaFieldState();
        private MamdaFieldState          mActivityTimeFieldState            = new MamdaFieldState();
        private MamdaFieldState          mLineTimeFieldState                = new MamdaFieldState();
        private MamdaFieldState          mSendTimeFieldState                = new MamdaFieldState();
        private MamdaFieldState          mEventTimeFieldState               = new MamdaFieldState();
        private MamdaFieldState          mEventSeqNumFieldState             = new MamdaFieldState();
        #endregion Implementation details

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:19 +0100
