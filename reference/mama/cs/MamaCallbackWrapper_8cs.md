---
title: cs/MamaCallbackWrapper.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaCallbackWrapper.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |




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
    /* ************************************************************** */
    #region MamaCallbackWrapper Class

    internal class MamaCallbackWrapper<TCallback, TDelegate> : IDisposable
    {
        /* ************************************************************** */
        #region Private Member Variables

        private TCallback mCallback;

        private object mClosure;

        private TDelegate mNativeDelegate;

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        internal MamaCallbackWrapper()
            : this(default(TCallback), null, default(TDelegate))
        {
        }

        internal MamaCallbackWrapper(TCallback callback, object closure, TDelegate nativeDelegate)
        {
            // Save arguments in member variables
            mCallback          = callback;
            mClosure           = closure;
            mNativeDelegate    = nativeDelegate;
        }

        ~MamaCallbackWrapper()
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
                // Dispose managed resources
                mCallback   = default(TCallback);
                mClosure    = null;
            }

            // Dispose all unmanaged resources
            mNativeDelegate = default(TDelegate);
        }

        internal TCallback Callback
        {
            get
            {
                return mCallback;
            }

            set
            {
                mCallback = value;
            }
        }

        internal object Closure
        {
            get
            {
                return mClosure;
            }

            set
            {
                mClosure = value;
            }
        }

        internal TDelegate NativeDelegate
        {
            get
            {
                return mNativeDelegate;
            }

            set
            {
                mNativeDelegate = value;
            }
        }

        #endregion
    }

    #endregion
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
