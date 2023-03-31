---
title: cs/MamaBasicSubscription.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaBasicSubscription.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)** <br>The basic subscription supports publish / subscribe. This class can be disposed or the deallocate function called to reduce time during finalization. Note that the deallocate function will attempt to destroy the subscription if this has not already been done whereas dispose will only de-allocate the memory.  |
| struct | **[Wombat::MamaBasicSubscription::NativeMethods::SubscriptionCallbacks](structWombat_1_1MamaBasicSubscription_1_1NativeMethods_1_1SubscriptionCallbacks.html)**  |




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
    #region MamaBasicSubscription Class

    public class MamaBasicSubscription : MamaWrapper
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Native Method Prototypes

        protected struct NativeMethods
        {
            [StructLayout(LayoutKind.Sequential)]
            public struct SubscriptionCallbacks
            {
                public OnSubscriptionCreateDelegate mCreate;
                public OnSubscriptionErrorDelegate mError;
                public OnSubscriptionMessageDelegate mMessage;
                public OnSubscriptionQualityDelegate mQuality;
                public OnSubscriptionGapDelegate mGap;
                public OnSubscriptionRecapRequestDelegate mRecapRequest;
                public OnSubscriptionDestroyDelegate mDestroy;
                public IntPtr mReserved;
            }

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_allocate(ref IntPtr result);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_createBasic(
                IntPtr nativeHandle,
                IntPtr transport,
                IntPtr queue,
                ref SubscriptionCallbacks callbacks,
                [MarshalAs(UnmanagedType.LPStr)] string symbol,
                IntPtr closure);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_deallocate(IntPtr nativeHandle);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_destroy(IntPtr nativeHandle);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_destroyEx(IntPtr nativeHandle);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_getState(IntPtr nativeHandle, ref int state);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_getSubscSymbol(IntPtr subscription, ref IntPtr symbol);
        }

        #endregion

        /* ************************************************************** */
        #region Nested Classes

        protected class MamaBasicSubscriptionImpl
        {
            /* ************************************************************** */
            #region Private Member Variables

            private MamaBasicSubscriptionCallback mCallback;

            private object mClosure;

            private MamaMsg mReusableMsg;

            private MamaBasicSubscription mSubscription;

            #endregion

            /* ************************************************************** */
            #region Construction and Finalization

            protected MamaBasicSubscriptionImpl()
            {
            }

            internal MamaBasicSubscriptionImpl(MamaBasicSubscriptionCallback callback, object closure, MamaBasicSubscription subscription)
            {
                // Save arguments in member variables
                mCallback      = callback;
                mClosure       = closure;
                mSubscription  = subscription;
            }

            #endregion

            /* ************************************************************** */
            #region Internal Operations

            internal static IntPtr Create(MamaBasicSubscriptionCallback callback, object closure, MamaBasicSubscription subscription)
            {
                // Allocate a new impl
                MamaBasicSubscriptionImpl impl = new MamaBasicSubscriptionImpl(callback, closure, subscription);

                // Create a GC handle
                GCHandle handle = GCHandle.Alloc(impl);

                // Return the native pointer
                return (IntPtr)handle;
            }

            internal virtual void InvokeCreate()
            {
                if (null != mCallback)
                {
                    // Invoke the callback
                    mCallback.onCreate(mSubscription);
                }
            }

            internal virtual void InvokeDestroy()
            {
                // Only the MamaBasicSubscriptionCallback class has the onDestroy function
                MamaBasicSubscriptionCallback callback = mCallback as MamaBasicSubscriptionCallback;
                if(null != callback)
                {
                    // Invoke the onDestroy
                    callback.onDestroy(mSubscription, mClosure);
                }
            }

            internal virtual void InvokeError(int nativeStatus, string subject)
            {
                // Only invoke the callback if it is supplied
                if (null != mCallback)
                {
                    // Create a managed status value fo the native value passed in
                    MamaStatus.mamaStatus status = (MamaStatus.mamaStatus)nativeStatus;

                    // Invoke the callback
                    mCallback.onError(mSubscription, status, subject);
                }
            }

            internal virtual void InvokeMessage(IntPtr nativeMsg)
            {
                if (null != mCallback)
                {
                    // If the re-usable message hasn't been created yet then do so now
                    if (mReusableMsg == null)
                    {
                        mReusableMsg = new MamaMsg(nativeMsg);
                    }

                    else
                    {
                        mReusableMsg.setNativeHandle(nativeMsg);
                    }

                    // Invoke the callback
                    mCallback.onMsg(mSubscription, mReusableMsg);
                }
            }

            #endregion
        }

        #endregion

        /* ************************************************************** */
        #region Protected Delegates

        public delegate void OnSubscriptionCreateDelegate(IntPtr nativeHandle, IntPtr closure);

        public delegate void OnSubscriptionDestroyDelegate(IntPtr nativeHandle, IntPtr closure);

        public delegate void OnSubscriptionErrorDelegate(IntPtr nativeHandle, int status, IntPtr platformError, string subject, IntPtr closure);

        public delegate void OnSubscriptionGapDelegate(IntPtr nativeHandle, IntPtr closure);

        public delegate void OnSubscriptionMessageDelegate(IntPtr nativeHandle, IntPtr msg, IntPtr closure, IntPtr itemClosure);

        public delegate void OnSubscriptionQualityDelegate(IntPtr nativeHandle, int quality, string symbol, short cause, string platforminfo, IntPtr closure);

        public delegate void OnSubscriptionRecapRequestDelegate(IntPtr nativeHandle, IntPtr closure);

        #endregion

        /* ************************************************************** */
        #region Protected Member Variables

        protected object mClosure;

        protected MamaQueue mQueue;

        protected MamaTransport mTransport;

        #endregion

        /* ************************************************************** */
        #region Protected Static Member Variables

        protected static NativeMethods.SubscriptionCallbacks mCallbackDelegates;

        #endregion

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        static MamaBasicSubscription()
        {
            // Create the callback delegates structure
            mCallbackDelegates = new NativeMethods.SubscriptionCallbacks();

            // Create the individual delegates
            mCallbackDelegates.mCreate    = new OnSubscriptionCreateDelegate(MamaBasicSubscription.onCreate);
            mCallbackDelegates.mDestroy   = new OnSubscriptionDestroyDelegate(MamaBasicSubscription.onDestroy);
            mCallbackDelegates.mError     = new OnSubscriptionErrorDelegate(MamaBasicSubscription.OnError);
            mCallbackDelegates.mMessage   = new OnSubscriptionMessageDelegate(MamaBasicSubscription.OnMessage);
        }

        public MamaBasicSubscription() : base()
        {
            // Allocate the native subscription
            IntPtr nativeSubscription = IntPtr.Zero;
            CheckResultCode(NativeMethods.mamaSubscription_allocate(ref nativeSubscription));

            // Save the result in the member variable
            NativeHandle = nativeSubscription;
        }

        internal MamaBasicSubscription(IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        #endregion

        /* ************************************************************** */
        #region Private Static Functions

        private static void onCreate(IntPtr nativeHandle, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaBasicSubscriptionImpl impl = (MamaBasicSubscriptionImpl)handle.Target;

            // Use the impl to invoke the error callback
            impl.InvokeCreate();
        }

        private static void onDestroy(IntPtr subscription, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaBasicSubscriptionImpl impl = (MamaBasicSubscriptionImpl)handle.Target;

            // Use the impl to invoke the destroy callback, (if this has been supplied)
            impl.InvokeDestroy();

            /* The timer has now been destroyed and the impl is no longer required, free the handle to
             * allow the garbage collector to clean it up.
             */
            handle.Free();
        }

        private static void OnError(IntPtr nativeHandle, int nativeStatus, IntPtr platformError, string subject, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaBasicSubscriptionImpl impl = (MamaBasicSubscriptionImpl)handle.Target;

            // Use the impl to invoke the error callback
            impl.InvokeError(nativeStatus, subject);
        }

        private static void OnMessage(IntPtr nativeHandle, IntPtr nativeMsg, IntPtr closure, IntPtr itemClosure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaBasicSubscriptionImpl impl = (MamaBasicSubscriptionImpl)handle.Target;

            // Use the impl to invoke the callback
            impl.InvokeMessage(nativeMsg);
        }

        #endregion

        /* ************************************************************** */
        #region Protected Functions

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            // Returns
            MamaStatus.mamaStatus ret = MamaStatus.mamaStatus.MAMA_STATUS_OK;

            // Only deallocate if this has not already been done
            if (IntPtr.Zero != NativeHandle)
            {
                ret = (MamaStatus.mamaStatus)NativeMethods.mamaSubscription_deallocate(NativeHandle);
            }

            return ret;
        }

        #endregion

        /* ************************************************************** */
        #region Public Functions

        public void createBasic(MamaTransport transport, MamaQueue queue, MamaBasicSubscriptionCallback callback, string symbol)
        {
            // Call the overloade
            createBasic(transport, queue, callback, symbol, null);
        }

        public void createBasic(MamaTransport transport, MamaQueue queue, MamaBasicSubscriptionCallback callback, string symbol, object closure)
        {
            // Ensure that the native subscription has been allocated
            EnsurePeerCreated();

            // Save arguments in member variables
            mClosure   = closure;
            mQueue     = queue;
            mTransport = transport;

            // Create the impl
            IntPtr impl = MamaBasicSubscriptionImpl.Create(callback, closure, this);

            /* Create the subscription, register for the destroy callback regardless if the client wants it or not,
             * this is to allow clean-up to be done whenever the timer has been fully destroyed.
             */
            CheckResultCode(NativeMethods.mamaSubscription_createBasic(
                NativeHandle,
                transport.NativeHandle,
                queue.NativeHandle,
                ref mCallbackDelegates,
                symbol,
                impl));
        }

        public void deallocate()
        {
            // Verify that the native subscription has been created
            EnsurePeerCreated();

            // Dispose the subscription to de-allocate the memory
            Dispose();
        }

        public void destroy()
        {
            // Verify that the native subscription has been created
            EnsurePeerCreated();

            // Clear the member variables
            mClosure   = null;
            mQueue     = null;
            mTransport = null;

            // Call the native function
            CheckResultCode(NativeMethods.mamaSubscription_destroy(NativeHandle));
        }

        public void destroyEx()
        {
            // Verify that the native subscription has been created
            EnsurePeerCreated();

            // Clear the member variables
            mClosure   = null;
            mQueue     = null;
            mTransport = null;

            // Call the native function
            CheckResultCode(NativeMethods.mamaSubscription_destroyEx(NativeHandle));
        }

        public mamaSubscriptionState State
        {
            get
            {
                // Only continue if the subscription is valid
                EnsurePeerCreated();

                // Call the native function to get the state
                int state = 0;
                CheckResultCode(NativeMethods.mamaSubscription_getState(NativeHandle, ref state));

                // Convert the integer return into an enumerate value
                return (mamaSubscriptionState)state;
            }
        }

        public object subscClosure
        {
            get
            {
                return mClosure;
            }
        }

        public MamaQueue subscQueue
        {
            get
            {
                return mQueue;
            }
        }

        public string subscSymbol
        {
            get
            {
                // Get the symbol from the native layer
                IntPtr ret = IntPtr.Zero;
                CheckResultCode(NativeMethods.mamaSubscription_getSubscSymbol(NativeHandle, ref ret));

                // Convert to an ANSI string
                return Marshal.PtrToStringAnsi(ret);
            }
        }

        #endregion
    }

    #endregion
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
