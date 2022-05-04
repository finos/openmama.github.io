---
title: cs/MamaTimer.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaTimer.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaTimer](classWombat_1_1MamaTimer.html)** <br>A repeating timer  |




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
    #region MamaTimer Class

    public class MamaTimer : MamaWrapper
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Native Method Prototypes

        // Interop API calls
        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTimer_create2(
                ref IntPtr result,
                IntPtr queue,
                MamaTimer.OnTimerTickDelegate tickCallback,
                MamaTimer.OnTimerTickDelegate destroyCallback,
                double interval,
                IntPtr closure);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTimer_destroy(IntPtr timer);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTimer_reset(IntPtr timer);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTimer_setInterval(IntPtr timer, double interval);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaTimer_getInterval(IntPtr timer, ref double interval);
        }

        #endregion

        /* ************************************************************** */
        #region Private Classes

        private class MamaTimerImpl
        {
            /* ************************************************************** */
            #region Private Member Variables

            private MamaTimerCallback mCallback;

            private object mClosure;

            private MamaTimer mTimer;

            #endregion

            /* ************************************************************** */
            #region Construction and Finalization

            internal MamaTimerImpl(MamaTimerCallback callback, object closure, MamaTimer timer)
            {
                // Save arguments in member variables
                mCallback  = callback;
                mClosure   = closure;
                mTimer     = timer;
            }

            #endregion

            /* ************************************************************** */
            #region Internal Operations

            internal static IntPtr Create(MamaTimerCallback callback, object closure, MamaTimer timer)
            {
                // Allocate a new impl
                MamaTimerImpl impl = new MamaTimerImpl(callback, closure, timer);

                // Create a GC handle
                GCHandle handle = GCHandle.Alloc(impl);

                // Return the native pointer
                return (IntPtr)handle;
            }

            internal void InvokeDestroy()
            {
                if(null != mCallback)
                {
                    mCallback.onDestroy(mTimer, mClosure);
                }
            }

            internal void InvokeTick()
            {
                // Only invoke the callback if it is supplied
                if(null != mCallback)
                {
                    mCallback.onTimer(mTimer, mClosure);
                }
            }

            #endregion
        }

        #endregion

        /* ************************************************************** */
        #region Private Delegates

        public delegate void OnTimerTickDelegate(IntPtr timer, IntPtr closure);

        #endregion

        /* ************************************************************** */
        #region Private Static Member Variables

        private static OnTimerTickDelegate mDestroyDelegate = new OnTimerTickDelegate(MamaTimer.onTimerDestroy);

        private static OnTimerTickDelegate mTickDelegate = new OnTimerTickDelegate(MamaTimer.onTimerTick);

        #endregion

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        public MamaTimer() : base()
        {
        }

        public MamaTimer(IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        #endregion

        /* ************************************************************** */
        #region Private Static Functions

        private static void onTimerDestroy(IntPtr timer, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaTimerImpl impl = (MamaTimerImpl)handle.Target;

            // Use the impl to invoke the destroy callback, (if this has been supplied)
            impl.InvokeDestroy();

            /* The timer has now been destroyed and the impl is no longer required, free the handle to
             * allow the garbage collector to clean it up.
             */
            handle.Free();
        }

        private static void onTimerTick(IntPtr timer, IntPtr closure)
        {
            // Obtain the handle from the closure
            GCHandle handle = (GCHandle)closure;

            // Extract the impl from the handle
            MamaTimerImpl impl = (MamaTimerImpl)handle.Target;

            // Use the impl to invoke the tick callback
            impl.InvokeTick();
        }

        #endregion

        /* ************************************************************** */
        #region Protected Functions

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return (MamaStatus.mamaStatus)NativeMethods.mamaTimer_destroy(NativeHandle);
        }

        #endregion

        /* ************************************************************** */
        #region Public Functions

        public void create(MamaQueue queue, MamaTimerCallback action, double interval)
        {
            // Call the overload with a NULL closure
            this.create(queue, action, interval, null);
        }

        public void create(MamaQueue queue, MamaTimerCallback action, double interval, object closure)
        {
            // Check the arguments
            if (null == queue)
            {
                throw new ArgumentNullException("queue");
            }

            if (null == action)
            {
                throw new ArgumentNullException("action");
            }

            // Create the impl
            IntPtr impl = MamaTimerImpl.Create(action, closure, this);

            /* Create the timer, register for the destroy callback regardless if the client wants it or not,
             * this is to allow clean-up to be done whenever the timer has been fully destroyed.
             */
            IntPtr nativeTimer = IntPtr.Zero;
            CheckResultCode(NativeMethods.mamaTimer_create2(ref nativeTimer, queue.NativeHandle, mTickDelegate, mDestroyDelegate, interval, impl));

            // Save the native timer in the member variable
            NativeHandle = nativeTimer;
        }

        public void destroy()
        {
            // Dispose, note that the cleanup will not be done until the destroy callback returns
            Dispose();
        }

        public double getInterval()
        {
            // Returns
            double ret = 0;

            // Verify that the C timer has been created
            EnsurePeerCreated();

            // Call the native method to get the interval
            CheckResultCode(NativeMethods.mamaTimer_getInterval(NativeHandle, ref ret));

            return ret;
        }

        public void reset()
        {
            // Verify that the C timer has been created
            EnsurePeerCreated();

            // Call the native method
            CheckResultCode(NativeMethods.mamaTimer_reset(NativeHandle));
        }

        public void setInterval(double interval)
        {
            // Verify that the C timer has been created
            EnsurePeerCreated();

            // Call the native method to set the interval
            CheckResultCode(NativeMethods.mamaTimer_setInterval(NativeHandle, interval));
        }

        #endregion
    }

    #endregion
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
