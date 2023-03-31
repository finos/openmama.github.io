---
title: cs/MamaCallbackStore.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaCallbackStore.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::Collections](namespaceSystem_1_1Collections.html)**  |




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
using System.Collections.Generic;
using System.Threading;

namespace Wombat
{
    /* ************************************************************** */
    #region MamaCallbackStore Class

    internal class MamaCallbackStore<TCallback, TDelegate> : IDisposable
    {
        /* ************************************************************** */
        #region Private Member Variables

        private long mNextId;

        private Dictionary<long, MamaCallbackWrapper<TCallback, TDelegate>> mStore;

        private Mutex mStoreMutex;

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        internal MamaCallbackStore()
        {
            // Create the store
            mStore = new Dictionary<long, MamaCallbackWrapper<TCallback, TDelegate>>();

            // Create the mutex
            mStoreMutex = new Mutex(false);
        }

        ~MamaCallbackStore()
        {
            // Dispose only unmanaged resources
            Dispose(false);
        }

        #endregion

        /* ************************************************************** */
        #region Interface Implementation

        void IDisposable.Dispose()
        {
            // Call the overload disposing both managed and unmanaged resources
            Dispose(true);

            // We no longer require the finalizer
            GC.SuppressFinalize(this);
        }

        #endregion

        /* ************************************************************** */
        #region Operations

        private void Dispose(bool disposing)
        {
            // Check whether both managed and unmanaged should be disposed
            if (disposing)
            {
                // Dispose the store
                if (mStore != null)
                {
                    // Dispose all of the objects still in the store
                    foreach (MamaCallbackWrapper<TCallback, TDelegate> wrapper in mStore.Values)
                    {
                        // Get a dispose interface
                        IDisposable disposable = (IDisposable)wrapper;
                        disposable.Dispose();
                    }

                    // Clear the store
                    mStore.Clear();
                    mStore = null;
                }

                // Dispose the mutex
                if (mStoreMutex != null)
                {
                    IDisposable disposable = (IDisposable)mStoreMutex;
                    disposable.Dispose();
                    mStoreMutex = null;
                }
            }
        }

        internal MamaCallbackWrapper<TCallback, TDelegate> RemoveWrapper(IntPtr handle)
        {
            // Returns
            MamaCallbackWrapper<TCallback, TDelegate> ret = null;

            // The object handle is the key
            long key = handle.ToInt64();

            // Acquire the mutex
            mStoreMutex.WaitOne();
            try
            {
                // Get the wrapper from the store
                ret = mStore[key];

                // Remove the object from the store
                mStore.Remove(key);
            }

            finally
            {
                // Release the mutex
                mStoreMutex.ReleaseMutex();
            }

            // Write a log
            if (MamaLogLevel.MAMA_LOG_LEVEL_FINEST == Mama.getLogLevel())
            {
                // Write details of the object that has been removed
                string message = string.Format("MamaCallbackStore: Wrapper removed for key {0} for callback {1}.", key, ret.Callback.ToString());
                Mama.log(MamaLogLevel.MAMA_LOG_LEVEL_FINEST, message);

                // Write the number of items
                message = string.Format("MamaCallbackStore: Store now contains {0} items.", mStore.Count);
                Mama.log(MamaLogLevel.MAMA_LOG_LEVEL_FINEST, message);
            }

            return ret;
        }

        internal IntPtr StoreWrapper(MamaCallbackWrapper<TCallback, TDelegate> wrapper)
        {
            // Returns
            long ret = 0;

            // Acquire the mutex
            mStoreMutex.WaitOne();
            try
            {
                // Get the next Id
                mNextId ++;

                // This will become the handle
                ret = mNextId;

                // Add the wrapper to the store using the Id as the key
                mStore.Add(ret, wrapper);
            }

            finally
            {
                // Release the mutex
                mStoreMutex.ReleaseMutex();
            }

            // Write a log
            if(MamaLogLevel.MAMA_LOG_LEVEL_FINEST == Mama.getLogLevel())
            {
                // Write details of the object that has bee added
                string message = string.Format("MamaCallbackStore: Wrapper stored for key {0} for callback {1}.", ret, wrapper.Callback.ToString());
                Mama.log(MamaLogLevel.MAMA_LOG_LEVEL_FINEST, message);

                // Write the number of items
                message = string.Format("MamaCallbackStore: Store now contains {0} items.", mStore.Count);
                Mama.log(MamaLogLevel.MAMA_LOG_LEVEL_FINEST, message);
            }

            /* Return the next Id as the handle. */
            return new IntPtr(ret);
        }

        #endregion
    }

    #endregion
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
