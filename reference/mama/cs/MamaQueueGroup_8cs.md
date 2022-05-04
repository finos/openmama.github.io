---
title: cs/MamaQueueGroup.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaQueueGroup.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaQueueGroup](classWombat_1_1MamaQueueGroup.html)** <br>A class for distributing events across multiple queues in a round robin fashion.  |




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
using System.Threading;

namespace Wombat
{
    /* ************************************************************** */
    #region MamaQueueGroup Class

    public class MamaQueueGroup : IDisposable
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Private Member Variables

        private volatile int mNextQueueIndex;

        private MamaQueueThread[] mQueueThreads;

        #endregion

        /* ************************************************************** */
        #region Nested Classes

        private class MamaQueueThread : IDisposable
        {
            /* ************************************************************** */
            #region Class Member Definitino

            /* ************************************************************** */
            #region Private Member Variables

            private MamaQueue mQueue;

            private Thread mWorkerThread;

            #endregion

            #endregion

            /* ************************************************************** */
            #region Construction and Finalization

            public MamaQueueThread(MamaBridge bridge)
            {
                // Create the queue
                mQueue = new MamaQueue(bridge);

                // Start dispatching straight away
                start();
            }

            ~MamaQueueThread()
            {
                // Dispose only unmanaged resources
                Dispose(false);
            }

            #endregion

            /* ************************************************************** */
            #region Internal Operations

            internal void destroyWait()
            {
                // Stop dispatching the queue, this will not return until the thread has shut down
                stop();

                // Destroy the queue, but wait until it has shutdown
                mQueue.destroyWait();
                mQueue = null;

                // Supress the finalizer as we have effectively disposed the class
                GC.SuppressFinalize(this);
            }

            internal MamaQueue Queue
            {
                get
                {
                    return mQueue;
                }
            }

            internal void start()
            {
                // Only continue if the thread is not valid
                if (null == mWorkerThread)
                {
                    // Create the thread
                    mWorkerThread = new Thread(new ThreadStart(this.workerThreadProc));

                    // It will run in the background
                    mWorkerThread.IsBackground = true;

                    // Format the name with the queue hash code
                    mWorkerThread.Name = string.Format("MamaQueueManager: {0}", mQueue.GetHashCode());

                    // Start the thread
                    mWorkerThread.Start();
                }
            }

            internal void stop()
            {
                // Only continue if there is a thread dispatching the queue
                if (null != mWorkerThread)
                {
                    // Stop dispatching on the queue, this will release the worker thread
                    mQueue.stopDispatch();

                    // Wait until the thread exits
                    mWorkerThread.Join();

                    // Clear the member variable so the thread can be recreated if dispatching is restarted
                    mWorkerThread = null;
                }
            }

            #endregion

            /* ************************************************************** */
            #region Private Operations

            private void Dispose(bool disposing)
            {
                // Dispose managed objects
                if (disposing)
                {
                    // Stop dispatching the queue, this will not return until the thread has shut down
                    stop();

                    // Destroy the queue
                    mQueue.Dispose();
                    mQueue = null;
                }
            }

            private void workerThreadProc()
            {
                // Start dispatching on the queue
                mQueue.dispatch();
            }

            #endregion

            /* ************************************************************** */
            #region Public Operations

            public void Dispose()
            {
                // Dispose managed and unmanaged resources
                Dispose(true);

                // This object will be cleaned up by the Dispose method.
                // Therefore, you should call GC.SupressFinalize to
                // take this object off the finalization queue
                // and prevent finalization code for this object
                // from executing a second time.
                GC.SuppressFinalize(this);
            }

            #endregion
        }

        #endregion

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        public MamaQueueGroup(MamaBridge bridgeImpl, int queueCount)
        {
            // Check arguments
            if (queueCount < 1)
            {
                throw new ArgumentOutOfRangeException("queueCount", queueCount, "Queue count should be > 0");
            }

            // Create the array of queue threads
            mQueueThreads = new MamaQueueThread[queueCount];
            for (int nextQueue = 0; nextQueue<queueCount; nextQueue++)
            {
                mQueueThreads[nextQueue] = new MamaQueueThread(bridgeImpl);
            }
        }

        ~MamaQueueGroup()
        {
            // Dispose only unmanaged resources
            Dispose(false);
        }

        #endregion

        /* ************************************************************** */
        #region Private Operations

        private void Dispose(bool disposing)
        {
            // If disposing is true then dispose all managed resources
            if (disposing)
            {
                // Lock to prevent thread race conditions
                lock (this)
                {
                    // Enumerate all the threads
                    foreach (MamaQueueThread queueThread in mQueueThreads)
                    {
                        // Dispose the queue
                        queueThread.Dispose();
                    }

                    // Clear the array
                    mQueueThreads = null;
                }
            }

            // Clean up unamanged resources regardless
        }

        #endregion

        /* ************************************************************** */
        #region Public Operations

        public void destroy()
        {
            Dispose();
        }

        public void destroyWait()
        {
            // Lock to prevent race conditions
            lock (this)
            {
                // Destroy all the queue threads
                foreach (MamaQueueThread queueThread in mQueueThreads)
                {
                    queueThread.destroyWait();
                }

                // Clear the array
                mQueueThreads = null;
            }

            // The class has been disposed, prevent any further finalization
            GC.SuppressFinalize(this);
        }

        public void Dispose()
        {
            // Dispose managed and unmanaged resources
            Dispose(true);

            // This object will be cleaned up by the Dispose method.
            // Therefore, you should call GC.SupressFinalize to
            // take this object off the finalization queue
            // and prevent finalization code for this object
            // from executing a second time.
            GC.SuppressFinalize(this);
        }

        public void start()
        {
            // Lock to prevent race conditions
            lock (this)
            {
                // Start all the queue threads
                foreach (MamaQueueThread queueThread in mQueueThreads)
                {
                    queueThread.start();
                }
            }
        }

        public void stop()
        {
            // Lock to prevent race conditions
            lock (this)
            {
                // Stop all the queue threads
                foreach (MamaQueueThread queueThread in mQueueThreads)
                {
                    queueThread.stop();
                }
            }
        }

        public MamaQueue getNextQueue()
        {
            // Returns
            MamaQueue ret = null;

            lock(this)
            {
                // Only continue if the array of threads is valid
                if (mQueueThreads != null)
                {
                    // If the queue index has reached the end of the array then go back to the start
                    if (mNextQueueIndex >= mQueueThreads.Length)
                    {
                        mNextQueueIndex = 0;
                    }

                    // Get the queue at this index and increment.
                    ret = mQueueThreads[mNextQueueIndex++].Queue;
                }
            }

            return ret;
        }

        #endregion
    }

    #endregion
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
