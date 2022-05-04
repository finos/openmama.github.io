---
title: OrderBook/MamdaOrderBookChecker.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# OrderBook/MamdaOrderBookChecker.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderBookChecker](classWombat_1_1MamdaOrderBookChecker.html)** <br>TODOC:  |




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
    public class MamdaOrderBookChecker
    {
        public MamdaOrderBookChecker(
            MamaTransport transport,
            MamaQueue queue,
            MamdaOrderBookCheckerHandler handler,
            string source,
            string symbol,
            double intervalSeconds)
        {
            mSnapShotmHandler = new SnapShotChecker(this);
            mRealTimeSubsc = new MamdaSubscription();
            mRealTimeListener = new MamdaOrderBookListener();
            mHandler = handler;
            mQueue = queue;
            mIntervalSecs = intervalSeconds;
            mRandomTimerFired = false;
            mRealTimeSubsc.setType(mamaSubscriptionType.MAMA_SUBSC_TYPE_BOOK);
            mRealTimeSubsc.create(transport, queue, source, symbol, null);
            mRealTimeSubsc.addMsgListener(mRealTimeListener);
            init();
        }

        public MamdaOrderBookChecker(
            MamdaSubscription realTimeSubsc,
            MamdaOrderBookListener realTimeListener,
            MamdaOrderBookCheckerHandler handler,
            double intervalSeconds)
        {
            mSnapShotmHandler = new SnapShotChecker(this);
            mHandler = handler;
            mRealTimeSubsc = realTimeSubsc;
            mRealTimeListener = realTimeListener;
            mIntervalSecs = intervalSeconds;
            mRandomTimerFired = false;
            init();
        }

        public long getSuccessCount()
        {
            return mSuccessCount;
        }

        public long getInconclusiveCount()
        {
            return mFailureCount;
        }

        public long getFailureCount()
        {
            return mInconclusiveCount;
        }

        private void init()
        {
            mRealTimeListener.addHandler(mRealTimemHandler);
            mSnapShotListener.addHandler(mSnapShotmHandler);
            mSnapShotSubsc.addMsgListener(mSnapShotListener);

            if (mIntervalSecs > 0)
            {
                Random generator = new Random();
                double randomSeconds = generator.Next(65536) % (int)mIntervalSecs;
                mTimer.create(mQueue, new TimerCallback(this), randomSeconds, null);
            }
        }

        public void checkSnapShotNow()
        {
            // Send a snapshot subscription request for the order book
            try
            {
                mSnapShotSubsc.setType(mamaSubscriptionType.MAMA_SUBSC_TYPE_BOOK);
                mSnapShotSubsc.setServiceLevel(mamaServiceLevel.MAMA_SERVICE_LEVEL_SNAPSHOT, 0);
                mSnapShotSubsc.create(
                    mRealTimeSubsc.getTransport(),
                    mRealTimeSubsc.getQueue(),
                    mRealTimeSubsc.getSource(),
                    mRealTimeSubsc.getSymbol(),
                    null);
            }
            catch (Exception /*e*/)
            {
                Console.Error.WriteLine("Error in Subscription");
            }
        }

        internal void OnTimerCallback()
        {
            lock (this)
            {
                if (mRandomTimerFired == false)
                {
                    mTimer.destroy();
                    mRandomTimerFired = true;
                    mTimer.create(mQueue, new TimerCallback(this), mIntervalSecs, null);
                }
                checkSnapShotNow();
            }
        }

        internal void OnBookRecapCallback(
            MamdaSubscription subscription,
            MamdaOrderBookListener listener,
            MamaMsg msg,
            MamdaOrderBookDelta delta,
            MamdaOrderBookRecap recap)
        {
            long snappedSeqNum  = listener.getSeqNum ();
            long realTimeSeqNum = mRealTimeListener.getSeqNum ();

            MamdaOrderBook fullBook = recap.getFullOrderBook();

            if (snappedSeqNum != realTimeSeqNum)
            {
                mInconclusiveCount++;
                if (mHandler != null)
                {
                    string reason ="sequence numbers differ (" + snappedSeqNum + "!=" + realTimeSeqNum;
                    mHandler.onInconclusive(MamdaOrderBookCheckType.SNAPSHOT, reason);
                }
            }
            else
            {
                try
                {
                    fullBook.assertEqual(mRealTimeListener.getFullOrderBook());
                    mSuccessCount++;
                    if (mHandler != null)
                    {
                        mHandler.onSuccess(MamdaOrderBookCheckType.APPLY_DELTA);
                    }
                }
                catch (MamdaOrderBookException e)
                {
                    mFailureCount++;
                    if (mHandler != null)
                    {
                        mHandler.onFailure(MamdaOrderBookCheckType.SNAPSHOT,
                            e.ToString(),
                            msg,
                            mRealTimeListener.getFullOrderBook(),
                            fullBook);
                    }
                }
            }
            //Deactivate the subscription
            mSnapShotListener.clear();
            mSnapShotSubsc.deactivate();
        }

        private class TimerCallback : MamaTimerCallback
        {
            public TimerCallback(MamdaOrderBookChecker outer)
            {
                outer_ = outer;
            }
            public void onTimer(MamaTimer mamaTimer, object closure)
            {
                outer_.OnTimerCallback();
            }

            public void onDestroy(MamaTimer mamaTimer, object closure)
            {
            }

            private MamdaOrderBookChecker outer_;
        }


        private class RealTimeChecker : MamdaOrderBookHandler
        {
            public void onBookRecap(
                MamdaSubscription subscription,
                MamdaOrderBookListener listener,
                MamaMsg msg,
                MamdaOrderBookDelta delta,
                MamdaOrderBookRecap recap)
            {
            }

            public void onBookDelta(
                MamdaSubscription subscription,
                MamdaOrderBookListener listener,
                MamaMsg msg,
                MamdaOrderBookDelta delta,
                MamdaOrderBookRecap recap)
            {
            }

            public void onBookClear(
                MamdaSubscription subscription,
                MamdaOrderBookListener listener,
                MamaMsg msg,
                MamdaOrderBookDelta delta,
                MamdaOrderBookRecap fullBook)
            {
            }

            public void onBookGap(
                MamdaSubscription subscription,
                MamdaOrderBookListener listener,
                MamaMsg msg,
                MamdaOrderBookGap gapEvent,
                MamdaOrderBookRecap recap)
            {
            }
        }

        private class SnapShotChecker : MamdaOrderBookHandler
        {
            public SnapShotChecker(MamdaOrderBookChecker outer)
            {
                outer_ = outer;
            }

            public void onBookRecap(
                MamdaSubscription        subscription,
                MamdaOrderBookListener   listener,
                MamaMsg                  msg,
                MamdaOrderBookDelta      delta,
                MamdaOrderBookRecap      recap)
            {
                outer_.OnBookRecapCallback(subscription, listener, msg, delta, recap);
            }

            public void onBookDelta (MamdaSubscription        subscription,
                MamdaOrderBookListener   listener,
                MamaMsg                  msg,
                MamdaOrderBookDelta      delta,
                MamdaOrderBookRecap      fullBook)
            {
                // Will not be called for a snapshot sub
            }

            public void onBookClear (MamdaSubscription        subscription,
                MamdaOrderBookListener   listener,
                MamaMsg                  msg,
                MamdaOrderBookDelta      delta,
                MamdaOrderBookRecap      fullBook)
            {
                //Will not be called for a snapshot sub
            }

            public void onBookGap   (MamdaSubscription        subscription,
                MamdaOrderBookListener   listener,
                MamaMsg                  msg,
                MamdaOrderBookGap        gapEvent,
                MamdaOrderBookRecap      fullBook)
            {
                //Will not be called for a snapshot sub
            }

            private MamdaOrderBookChecker outer_;
        }

        private MamdaOrderBookCheckerHandler mHandler               = null;
        private MamdaSubscription            mRealTimeSubsc         = null;
        private MamdaOrderBookListener       mRealTimeListener      = null;
        private MamdaSubscription            mSnapShotSubsc         = new MamdaSubscription();
        private MamdaOrderBookListener       mSnapShotListener      = new MamdaOrderBookListener();
        private RealTimeChecker              mRealTimemHandler       = new RealTimeChecker();
        private SnapShotChecker              mSnapShotmHandler       = null;
        private MamaTimer                    mTimer                 = new MamaTimer();
        private MamaQueue                    mQueue                 = null;
        private double                       mIntervalSecs          = 0;
        private bool                         mRandomTimerFired      = false;
        private long                         mSuccessCount          = 0;
        private long                         mInconclusiveCount     = 0;
        private long                         mFailureCount          = 0;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
