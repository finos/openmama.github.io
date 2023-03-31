---
title: cs/MamaSubscription.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaSubscription.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSubscription](classWombat_1_1MamaSubscription.html)** <br>Subscription class, derives from a basic subscription.  |




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
    #region mamaServiceLevel Enumeration

    public enum mamaServiceLevel
    {
        MAMA_SERVICE_LEVEL_REAL_TIME = 0,

        MAMA_SERVICE_LEVEL_SNAPSHOT = 1,

        MAMA_SERVICE_LEVEL_REPEATING_SNAPSHOT = 2,

        MAMA_SERVICE_LEVEL_CONFLATED = 5,

        MAMA_SERVICE_LEVEL_UNKNOWN = 99
    }

    #endregion

    /* ************************************************************** */
    #region mamaSubscriptionType Enumerations

    public enum mamaSubscriptionType
    {
        MAMA_SUBSC_TYPE_NORMAL       = 0,
        MAMA_SUBSC_TYPE_GROUP        = 1,
        MAMA_SUBSC_TYPE_BOOK         = 2,
        MAMA_SUBSC_TYPE_BASIC        = 3,
        MAMA_SUBSC_TYPE_DICTIONARY   = 4,
        MAMA_SUBSC_TYPE_SYMBOL_LIST  = 5
    }

    #endregion

    /* ************************************************************** */
    #region MamaSubscription Class

    public class MamaSubscription : MamaBasicSubscription
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Native Methods

        private struct SubscriptionNativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_activate(IntPtr subscription);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_deactivate(IntPtr subscription);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_getPreIntitialCacheSize(IntPtr subscription, ref int cacheSize);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_getReceivedInitial(IntPtr nativeHandle, ref int receivedInitial);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_getSource(IntPtr subscription, ref IntPtr symbol);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setPreIntitialCacheSize(IntPtr subscription, int cacheSize);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setRecoverGaps(IntPtr nativeHandle, int recoverGaps);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setRequiresInitial(IntPtr nativeHandle, int requiresInitial);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setRetries(IntPtr nativeHandle, int retries);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setServiceLevel(IntPtr nativeHandle, int serviceLevel, int serviceLevelOpt);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setSubscriptionType(IntPtr nativeHandle, int type);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setTimeout(IntPtr nativeHandle, double timeout);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setup(IntPtr subscription, IntPtr queue, ref MamaBasicSubscription.NativeMethods.SubscriptionCallbacks callbacks, IntPtr source, [MarshalAs(UnmanagedType.LPStr)]string symbol, IntPtr closure);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSubscription_setup2(IntPtr subscription, IntPtr transport, IntPtr queue, ref MamaBasicSubscription.NativeMethods.SubscriptionCallbacks callbacks, [MarshalAs(UnmanagedType.LPStr)]string sourceName, [MarshalAs(UnmanagedType.LPStr)]string symbol, IntPtr closure);
        }

        #endregion

        /* ************************************************************** */
        #region Private Classes

        /* ************************************************************** */
        #region MamaBasicCallbackAdapter Class

        private class MamaBasicCallbackAdapter : MamaBasicSubscriptionCallback
        {
            /* ************************************************************** */
            #region Private Member Variables

            private MamaSubscriptionCallback mCallback;

            #endregion

            /* ************************************************************** */
            #region Construction and Finalization

            internal MamaBasicCallbackAdapter(MamaSubscriptionCallback callback)
            {
                mCallback = callback;
            }

            #endregion

            /* ************************************************************** */
            #region MamaBasicSubscriptionCallback Implementation

            void MamaBasicSubscriptionCallback.onCreate(MamaBasicSubscription subscription)
            {
                if (mCallback != null)
                {
                    mCallback.onCreate((MamaSubscription)subscription);
                }
            }

            void MamaBasicSubscriptionCallback.onDestroy(MamaBasicSubscription subscription, object closure)
            {
                if (mCallback != null)
                {
                    mCallback.onDestroy((MamaSubscription)subscription);
                }
            }

            void MamaBasicSubscriptionCallback.onError(MamaBasicSubscription subscription, MamaStatus.mamaStatus status, string subject)
            {
                if (mCallback != null)
                {
                    mCallback.onError((MamaSubscription)subscription, status, subject);
                }
            }

            void MamaBasicSubscriptionCallback.onMsg(MamaBasicSubscription subscription, MamaMsg message)
            {
                if (mCallback != null)
                {
                    mCallback.onMsg((MamaSubscription)subscription, message);
                }
            }

            #endregion
        }

        #endregion

        /* ************************************************************** */
        #region MamaSubscriptionImpl Class

        private class MamaSubscriptionImpl : MamaBasicSubscriptionImpl
        {
            /* ************************************************************** */
            #region Private Member Variables

            private MamaSubscriptionCallback mCallback;

            private object mClosure;

            private MamaMsg mReusableMsg;

            private MamaSubscription mSubscription;

            #endregion

            /* ************************************************************** */
            #region Construction and Finalization

            internal MamaSubscriptionImpl(MamaSubscriptionCallback callback, object closure, MamaSubscription subscription)
                : base()
            {
                // Save arguments in member variables
                mCallback      = callback;
                mClosure       = closure;
                mSubscription  = subscription;
            }

            #endregion

            /* ************************************************************** */
            #region Internal Operations

            internal static IntPtr Create(MamaSubscriptionCallback callback, object closure, MamaSubscription subscription)
            {
                // Allocate a new impl
                MamaSubscriptionImpl impl = new MamaSubscriptionImpl(callback, closure, subscription);

                // Create a GC handle
                GCHandle handle = GCHandle.Alloc(impl);

                // Return the native pointer
                return (IntPtr)handle;
            }

            internal override void InvokeCreate()
            {
                if (null != mCallback)
                {
                    // Invoke the callback
                    mCallback.onCreate(mSubscription);
                }
            }

            internal override void InvokeDestroy()
            {
                if (null != mCallback)
                {
                    // Invoke the onDestroy
                    mCallback.onDestroy(mSubscription);
                }
            }

            internal override void InvokeError(int nativeStatus, string subject)
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

            internal void InvokeGap()
            {
                if (null != mCallback)
                {
                    // Invoke the callback
                    mCallback.onGap(mSubscription);
                }
            }

            internal override void InvokeMessage(IntPtr nativeMsg)
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

            internal void InvokeQuality(int nativeQuality, string symbol)
            {
                if (null != mCallback)
                {
                    // Invoke the callback
                    mCallback.onQuality(Subscription, (mamaQuality)nativeQuality, symbol);
                }
            }

            internal void InvokeRecapRequest()
            {
                if (null != mCallback)
                {
                    // Invoke the callback
                    mCallback.onRecapRequest(Subscription);
                }
            }

            internal MamaSubscription Subscription
            {
                get
                {
                    return mSubscription;
                }
            }

            #endregion
        }

        #endregion

        #endregion

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        static MamaSubscription()
        {
            /* Complete the additional delegates in the base class structure, note that the market data subscription
             * has different functionality in the destroy callback than the basic subscription.
             */
            MamaBasicSubscription.mCallbackDelegates.mDestroy         = new MamaBasicSubscription.OnSubscriptionDestroyDelegate(MamaSubscription.onDestroy);
            MamaBasicSubscription.mCallbackDelegates.mGap             = new MamaBasicSubscription.OnSubscriptionGapDelegate(MamaSubscription.onGap);
            MamaBasicSubscription.mCallbackDelegates.mQuality         = new MamaBasicSubscription.OnSubscriptionQualityDelegate(MamaSubscription.OnQuality);
            MamaBasicSubscription.mCallbackDelegates.mRecapRequest    = new MamaBasicSubscription.OnSubscriptionRecapRequestDelegate(MamaSubscription.onRecapRequest);
        }

        public MamaSubscription() : base()
        {
        }

        internal MamaSubscription(IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        #endregion

        /* ************************************************************** */
        #region Private Static Functions

        private static void onDestroy(IntPtr subscription, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            /* If the target is a basic impl then createBasic has been invoked on this class instead of the base class,
             * however as the MamaSubscriptionImpl is a derived class from MamaBasicSubscriptionImpl we must check for
             * the derived class first.
             */
            if (handle.Target is MamaSubscriptionImpl)
            {
                // Extract the impl from the handle
                MamaSubscriptionImpl impl = (MamaSubscriptionImpl)handle.Target;

                /* Get the state before the destroy is called, (in case the user recreates the subscription on
                 * the callback).
                 */
                mamaSubscriptionState state = impl.Subscription.State;

                // Use the impl to invoke the destroy callback, (if this has been supplied)
                impl.InvokeDestroy();

                // If we are destroying rather than deactivating then delete the impl
                if ((mamaSubscriptionState.MAMA_SUBSCRIPTION_DESTROYED == state) || (mamaSubscriptionState.MAMA_SUBSCRIPTION_DEALLOCATING == state))
                {
                    /* The subscription has now been destroyed or deleted and the impl is no longer required, free the handle to
                     * allow the garbage collector to clean it up.
                     */
                    handle.Free();
                }
            }

            else if (handle.Target is MamaBasicSubscriptionImpl)
            {
                // Extract the impl from the handle
                MamaBasicSubscriptionImpl impl = (MamaBasicSubscriptionImpl)handle.Target;

                // Use the impl to invoke the destroy callback, (if this has been supplied)
                impl.InvokeDestroy();

                /* The timer has now been destroyed and the impl is no longer required, free the handle to
                 * allow the garbage collector to clean it up.
                 */
                handle.Free();
            }

            else
            {
                // Otherwise something has gone wrong
                throw new InvalidOperationException();
            }
        }

        private static void onGap(IntPtr nativeHandle, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaSubscriptionImpl impl = (MamaSubscriptionImpl)handle.Target;

            // Use the impl to invoke the callback
            impl.InvokeGap();
        }

        private static void OnQuality(IntPtr nativeHandle, int quality, string symbol, short cause, string platformInfo, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaSubscriptionImpl impl = (MamaSubscriptionImpl)handle.Target;

            // Use the impl to invoke the callback
            impl.InvokeQuality(quality, symbol);
        }

        private static void onRecapRequest(IntPtr nativeHandle, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaSubscriptionImpl impl = (MamaSubscriptionImpl)handle.Target;

            // Use the impl to invoke the callback
            impl.InvokeRecapRequest();
        }

        #endregion

        /* ************************************************************** */
        #region Public Functions


        public void activate()
        {
            // Ensure that the subscription has been created
            EnsurePeerCreated();

            // Call the native layer
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_activate(NativeHandle));
        }

        public void create(MamaQueue queue, MamaSubscriptionCallback callback, MamaSource source, string symbol)
        {
            // Call the overload with a null closure
            create(queue, callback, source, symbol, null);
        }

        public void create(MamaQueue queue, MamaSubscriptionCallback callback, MamaSource source, string symbol, object closure)
        {
            // This is equivalent to calling setup then activate
            setup(queue, callback, source, symbol, closure);
            activate();
        }

        public void createBasic(MamaTransport transport, MamaQueue queue, MamaSubscriptionCallback callback, string symbol)
        {
            // Call the overload
            createBasic(transport, queue, callback, symbol, null);
        }

        public void createBasic(MamaTransport transport, MamaQueue queue, MamaSubscriptionCallback callback, string symbol, object closure)
        {
            // Call the base class using the adapter to convert between the callback types
            base.createBasic(transport, queue, new MamaBasicCallbackAdapter(callback), symbol, closure);
        }

        public void deactivate()
        {
            // Verify that the native subscription has been allocated
            EnsurePeerCreated();

            // Call the native layer
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_deactivate(NativeHandle));
        }

        public int getPreInitialCacheSize()
        {
            // Verify that the native subscription has been allocated
            EnsurePeerCreated();
            int cacheSize = 0;

            // Call the native layer
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_getPreIntitialCacheSize(NativeHandle, ref cacheSize));

            return cacheSize;
        }

        public bool getReceivedInitial()
        {
            // Returns
            bool ret = false;

            // Verify that the native subscription has been allocated
            EnsurePeerCreated();

            // Call the native layer
            int receivedInitial = 0;
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_getReceivedInitial(NativeHandle, ref receivedInitial));

            // Convert the integer returned from the native call into a boolean
            if (receivedInitial == 1)
            {
                ret = true;
            }

            return ret;
        }

        public void setPreInitialCacheSize(int cacheSize)
        {
            // Verify that the native subscription has been allocated
            EnsurePeerCreated();

            // Call the native layer to set the cache size
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setPreIntitialCacheSize(NativeHandle, cacheSize));
        }

        public void setRecoverGaps(bool recover)
        {
            // Verify that the native subscription has been allocated
            EnsurePeerCreated();

            // Convert the boolean argument into an integer for the native call
            int recoverGaps = recover ? 1 : 0;

            // Call the native layer to set the flag
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setRecoverGaps(NativeHandle, recoverGaps));
        }

        public void setRequiresInitial(bool requiresInitial)
        {
            // Verify that the native subscription has been allocated
            EnsurePeerCreated();

            // Convert the boolean to an integer value for the native call
            int requiresInit = requiresInitial ? 1 : 0;

            // Call the native layer
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setRequiresInitial(NativeHandle, requiresInit));
        }

        public void setRetries(int retries)
        {
            // Verify that the native subscription has been allocated
            EnsurePeerCreated();

            // Call the native layer to set the number of retries
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setRetries(NativeHandle, retries));
        }

        public void setServiceLevel(mamaServiceLevel svcLevel)
        {
            // Call the overload
            setServiceLevel(svcLevel, 0);
        }

        public void setServiceLevel(mamaServiceLevel svcLevel, int serviceLevelOpt)
        {
            // Verify that the native subscription has been allocated
            EnsurePeerCreated();

            // Call the native layer to set the service level
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setServiceLevel(NativeHandle, (int)svcLevel, serviceLevelOpt));
        }

        public void setSubscriptionType(mamaSubscriptionType type)
        {
            // Verify that the native subscription has been allocated
            EnsurePeerCreated();

            // Call the native layer to set the subscription type
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setSubscriptionType(NativeHandle, (int)type));
        }

        public void setTimeout(double timeout)
        {
            // Verify that the subscription has been allocated
            EnsurePeerCreated();

            // Call the native layer to set the timeout
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setTimeout(NativeHandle, timeout));
        }

        public void setup(MamaQueue queue, MamaTransport transport, MamaSubscriptionCallback callback, string sourceName, string symbol, object closure)
        {
            // Verify that the subscription has been created
            EnsurePeerCreated();

            // Save arguments in member variables
            base.mClosure      = closure;
            base.mQueue        = queue;
            base.mTransport    = transport;

            // Create the impl
            IntPtr impl = MamaSubscriptionImpl.Create(callback, closure, this);

            // Call into the native layer to setup the subscription
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setup2(
                NativeHandle,
                transport.NativeHandle,
                queue.NativeHandle,
                ref MamaBasicSubscription.mCallbackDelegates,
                sourceName,
                symbol,
                impl));
        }

        public void setup(MamaQueue queue, MamaSubscriptionCallback callback, MamaSource source, string symbol, object closure)
        {
            // Verify that the subscription has been created
            EnsurePeerCreated();

            // Save arguments in member variables
            base.mClosure      = closure;
            base.mQueue        = queue;
            base.mTransport    = source.transport;

            // Create the impl
            IntPtr impl = MamaSubscriptionImpl.Create(callback, closure, this);

            // Call into the native layer to setup the subscription
            CheckResultCode(SubscriptionNativeMethods.mamaSubscription_setup(
                NativeHandle,
                queue.NativeHandle,
                ref MamaBasicSubscription.mCallbackDelegates,
                source.NativeHandle,
                symbol,
                impl));
        }

        public void setup(MamaQueue queue, MamaSubscriptionCallback callback, MamaSource source, string symbol)
        {
            // Call the overload passing null for the closure
            setup(queue, callback, source, symbol, null);
        }

        public string subscSource
        {
            get
            {
                // Get the source from the native layer
                IntPtr ret = IntPtr.Zero;
                CheckResultCode(SubscriptionNativeMethods.mamaSubscription_getSource(NativeHandle, ref ret));

                // Convert to an ansi string
                return Marshal.PtrToStringAnsi(ret);
            }
        }
        #endregion
    }

    #endregion
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:34 +0100
