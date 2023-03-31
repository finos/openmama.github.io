---
title: cs/MamaInbox.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaInbox.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaInbox](classWombat_1_1MamaInbox.html)** <br>A class for processing point-to-point messaging  |




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
using System.Runtime.InteropServices;

namespace Wombat
{
    /* ************************************************************** */
    #region MamaInbox Class

    public class MamaInbox : MamaWrapper
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Native Method Prototypes

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaInbox_create2(
                ref IntPtr inbox,
                IntPtr transport,
                IntPtr queue,
                OnInboxMsgDelegate messageCallback,
                OnInboxErrorDelegate errorCallback,
                OnInboxDestroyDelegate destroyCallback,
                IntPtr closure);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaInbox_destroy(IntPtr inbox);
        }

        #endregion

        /* ************************************************************** */
        #region Private Classes

        private class MamaInboxImpl
        {
            /* ************************************************************** */
            #region Private Member Variables

            private MamaInboxCallback mCallback;

            private object mClosure;

            private MamaInbox mInbox;

            #endregion

            /* ************************************************************** */
            #region Construction and Finalization

            internal MamaInboxImpl(MamaInboxCallback callback, object closure, MamaInbox inbox)
            {
                // Save arguments in member variables
                mCallback  = callback;
                mClosure   = closure;
                mInbox     = inbox;
            }

            #endregion

            /* ************************************************************** */
            #region Internal Operations

            internal static IntPtr Create(MamaInboxCallback callback, object closure, MamaInbox inbox)
            {
                // Allocate a new impl
                MamaInboxImpl impl = new MamaInboxImpl(callback, closure, inbox);

                // Create a GC handle
                GCHandle handle = GCHandle.Alloc(impl);

                // Return the native pointer
                return (IntPtr)handle;
            }

            internal void InvokeDestroy()
            {
                if (null != mCallback)
                {
                    // Invoke the onDestroy
                    mCallback.onDestroy(mInbox, mClosure);
                }
            }

            internal void InvokeError(int nativeStatus)
            {
                // Only invoke the callback if it is supplied
                if (null != mCallback)
                {
                    // Create a managed status value fo the native value passed in
                    MamaStatus.mamaStatus status = (MamaStatus.mamaStatus)nativeStatus;

                    // Invoke the callback
                    mCallback.onError(mInbox, status);
                }
            }

            internal void InvokeMessage(IntPtr nativeMsg)
            {
                if (null != mCallback)
                {
                    // Create a new MamaaMsg using the native handle passed in
                    MamaMsg message = new MamaMsg(nativeMsg);

                    // Invoke the callback
                    mCallback.onMsg(mInbox, message);
                }
            }

            #endregion
        }

        #endregion

        /* ************************************************************** */
        #region Private Delegates

        private delegate void OnInboxDestroyDelegate(IntPtr inbox, IntPtr closure);

        private delegate void OnInboxErrorDelegate(int nativeStatus, IntPtr closure);

        private delegate void OnInboxMsgDelegate(IntPtr msg, IntPtr closure);

        #endregion

        /* ************************************************************** */
        #region Private Member Variables

        private object mClosure;

        #endregion

        /* ************************************************************** */
        #region Private Static Member Variables

        private static OnInboxDestroyDelegate mDestroyDelegate = new OnInboxDestroyDelegate(MamaInbox.onDestroy);

        private static OnInboxErrorDelegate mErrorDelegate = new OnInboxErrorDelegate(MamaInbox.onError);

        private static OnInboxMsgDelegate mMsgDelegate = new OnInboxMsgDelegate(MamaInbox.onMessage);

        #endregion

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        public MamaInbox() : base()
        {
        }

        internal MamaInbox(IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        #endregion

        /* ************************************************************** */
        #region Private Static Functions

        private static void onDestroy(IntPtr inbox, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaInboxImpl impl = (MamaInboxImpl)handle.Target;

            // Use the impl to invoke the destroy callback, (if this has been supplied)
            impl.InvokeDestroy();

            /* The timer has now been destroyed and the impl is no longer required, free the handle to
             * allow the garbage collector to clean it up.
             */
            handle.Free();
        }

        private static void onError(int nativeStatus, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaInboxImpl impl = (MamaInboxImpl)handle.Target;

            // Use the impl to invoke the error callback
            impl.InvokeError(nativeStatus);
        }

        private static void onMessage(IntPtr nativeMsg, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaInboxImpl impl = (MamaInboxImpl)handle.Target;

            // Use the impl to invoke the error callback
            impl.InvokeMessage(nativeMsg);
        }

        #endregion

        /* ************************************************************** */
        #region Protected Functions

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            // Destroy the native inbox
            return (MamaStatus.mamaStatus)NativeMethods.mamaInbox_destroy(NativeHandle);
        }

        #endregion

        /* ************************************************************** */
        #region Public Functions

        public void create(MamaTransport transport, MamaQueue queue, MamaInboxCallback callback, object closure)
        {
            // Check the arguments
            if (transport == null)
            {
                throw new ArgumentNullException("transport");
            }

            if(queue == null)
            {
                throw new ArgumentNullException("queue");
            }

            if (callback == null)
            {
                throw new ArgumentNullException("callback");
            }

            // Save the clousre in the member variable
            mClosure = closure;

            // Create the impl
            IntPtr impl = MamaInboxImpl.Create(callback, closure, this);

            /* Create the inbox, register for the destroy callback regardless if the client wants it or not,
             * this is to allow clean-up to be done whenever the inbox has been fully destroyed.
             */
            IntPtr nativeInbox = IntPtr.Zero;
            CheckResultCode(NativeMethods.mamaInbox_create2(
                ref nativeInbox,
                transport.NativeHandle,
                queue.NativeHandle,
                mMsgDelegate,
                mErrorDelegate,
                mDestroyDelegate,
                impl));

            // Save the native timer in the member variable
            NativeHandle = nativeInbox;
        }

        public void create(MamaTransport transport, MamaQueue queue, MamaInboxCallback callback)
        {
            create(transport, queue, callback, null);
        }

        public void create(MamaTransport transport, MamaInboxCallback callback, object closure)
        {
            throw new NotSupportedException("This function is no longer supported, use an overload that takes a MamaQueue object.");
        }

        public void destroy()
        {
            // Dispose, note that the cleanup will not be done until the destroy callback returns
            Dispose();
        }

        public object getClosure()
        {
            // Return the closure from the first delegate
            return mClosure;
        }

        #endregion
    }

    #endregion
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
