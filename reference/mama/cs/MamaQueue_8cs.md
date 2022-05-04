---
title: cs/MamaQueue.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaQueue.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaQueue](classWombat_1_1MamaQueue.html)** <br>MamaQueues allow applications to dispatch events in order with multiple threads.  |




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
using System.Runtime.InteropServices;
using System.Threading;

using System.Collections.Generic;

namespace Wombat
{
    public class MamaQueue : MamaWrapper
    {
        private enum QueueState : byte
        {
            Stopped,
            Stopping,
            Running
        };

        QueueState status = QueueState.Stopped;

        public MamaQueue (MamaBridge bridgeImpl) : base()
        {
            int code = NativeMethods.mamaQueue_create(ref nativeHandle, bridgeImpl.NativeHandle);
            CheckResultCode(code);
        }

        internal MamaQueue(IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        public void setHighWatermark(int highWatermark)
        {
            int code = NativeMethods.mamaQueue_setHighWatermark(nativeHandle, highWatermark);
            CheckResultCode(code);
        }

        public int getHighWatermark()
        {
            int result = 0;
            int code = NativeMethods.mamaQueue_getHighWatermark(nativeHandle, ref result);
            CheckResultCode(code);
            return result;
        }

        public void setLowWatermark(int lowWatermark)
        {
            int code = NativeMethods.mamaQueue_setLowWatermark(nativeHandle, lowWatermark);
            CheckResultCode(code);
        }

        public int getLowWatermark()
        {
            int result = 0;
            int code = NativeMethods.mamaQueue_getLowWatermark(nativeHandle, ref result);
            CheckResultCode(code);
            return result;
        }

        public int getEventCount()
        {
            int result = 0;
            int code = NativeMethods.mamaQueue_getEventCount(nativeHandle, ref result);
            CheckResultCode(code);
            return result;
        }

        public string getQueueBridgeName()
        {
            IntPtr ret = IntPtr.Zero;
            int code = NativeMethods.mamaQueue_getQueueBridgeName(nativeHandle, ref ret);
            CheckResultCode(code);
            return Marshal.PtrToStringAnsi(ret);
        }

        public void setQueueMonitorCallbacks(MamaQueueMonitorCallback callback, object closure)
        {
            EnsurePeerCreated();
            mWatermarkCallbackForwarder = new WatermarkCallbackForwarder(this, callback, closure);
            mWatermarkShimCallbacks.mHighWatermarkExceededShimCallback = new WatermarkCallbackForwarder.HighWatermarkExceededCallback(mWatermarkCallbackForwarder.HighWatermarkExceeded);
            mWatermarkShimCallbacks.mLowWatermarkShimCallback = new WatermarkCallbackForwarder.LowWatermarkCallback(mWatermarkCallbackForwarder.LowWatermark);
            int code = NativeMethods.mamaQueue_setQueueMonitorCallbacks(nativeHandle, ref mWatermarkShimCallbacks, IntPtr.Zero);
            CheckResultCode(code);
        }

        public void setEnqueueCallback(MamaQueueEnqueueCallback callback)
        {
            EnsurePeerCreated();
            mEnqueueCallbackForwarder = new EnqueueCallbackForwarder(this, callback);
            mEnqueueShimCallback = new EnqueueCallbackForwarder.EnqueueCallback(mEnqueueCallbackForwarder.OnEnqueue);
            int code = NativeMethods.mamaQueue_setEnqueueCallback(nativeHandle, mEnqueueShimCallback, IntPtr.Zero);
            CheckResultCode(code);
        }

        public void enqueueEvent(MamaQueueEventCallback callback, object closure)
        {
            // Verify that the callback object has been supplied
            if(callback == null)
            {
                throw new ArgumentNullException("callback");
            }

            // Make sure the queue has been created
            EnsurePeerCreated();

            // Create a new forwarder object to manage the .Net callback objects
            int code = EnqueueEventForwarder.ForwardEvent(callback, closure, nativeHandle, this);

            // Chek that the return code
            CheckResultCode(code);
        }

        public bool canDestroy()
        {
            // Returns
            bool ret = false;

            // Verify that the underlying C object has been created
            EnsurePeerCreated();

            // Call the native method
            int mqcd = NativeMethods.mamaQueue_canDestroy(nativeHandle);

            // MAMA_STATUS_OK is returned by the C layer if the queue can be destroyed
            if ((int)MamaStatus.mamaStatus.MAMA_STATUS_OK == mqcd)
            {
                ret = true;
            }

            return ret;
        }

        public void destroy()
        {
            // Verify that the native queue is valid
            EnsurePeerCreated();

            // If messages are being dispatched stop now
            if (status == QueueState.Running)
            {
                stopDispatch();
            }

            // Destroy the queue
            CheckResultCode(NativeMethods.mamaQueue_destroy(nativeHandle));

            // The native queue will not have been destroyed, reset the member variable
            nativeHandle = IntPtr.Zero;
        }

        public void destroyWait()
        {
            // Verify that the native queue is valid
            EnsurePeerCreated();

            // If messages are being dispatched stop now
            if (status == QueueState.Running)
            {
                stopDispatch();
            }

            // Destroy the queue
            CheckResultCode(NativeMethods.mamaQueue_destroyWait(nativeHandle));

            // The native queue will not have been destroyed, reset the member variable
            nativeHandle = IntPtr.Zero;
        }

        public void destroyTimedWait(long timeout)
        {
            // Verify that the native queue is valid
            EnsurePeerCreated();

            // If messages are being dispatched stop now
            if (status == QueueState.Running)
            {
                stopDispatch();
            }

            // Destroy the queue
            CheckResultCode(NativeMethods.mamaQueue_destroyTimedWait(nativeHandle, timeout));

            // The native queue will not have been destroyed, reset the member variable
            nativeHandle = IntPtr.Zero;
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            // Returns
            MamaStatus.mamaStatus ret = MamaStatus.mamaStatus.MAMA_STATUS_OK;

            // Only continue if the native queue is valid
            if (nativeHandle != IntPtr.Zero)
            {
                ret = (MamaStatus.mamaStatus)NativeMethods.mamaQueue_destroy(nativeHandle);
            }

            return ret;
        }

        public void dispatch ()
        {
            status = QueueState.Running;
            EnsurePeerCreated();
            int code = NativeMethods.mamaQueue_dispatch(nativeHandle);
            CheckResultCode(code);
            status = QueueState.Stopped;
        }

        public void dispatchEvent ()
        {
            status = QueueState.Running;
            EnsurePeerCreated();
            int code = NativeMethods.mamaQueue_dispatchEvent(nativeHandle);
            CheckResultCode(code);
            status = QueueState.Stopped;
        }

        public void stopDispatch()
        {
            status = QueueState.Stopping;
            EnsurePeerCreated();
            int code = NativeMethods.mamaQueue_stopDispatch(nativeHandle);
            CheckResultCode(code);
            while (status != QueueState.Stopped)
                Thread.Sleep(10);
        }

        public void timedDispatch(long timeout)
        {
            status = QueueState.Running;
            EnsurePeerCreated();
            int code = NativeMethods.mamaQueue_timedDispatch(nativeHandle, (ulong) timeout);
            CheckResultCode(code);
            status = QueueState.Stopped;
        }

        #region Implementation details

        #region EnqueueEventForwarder Class

        private class EnqueueEventForwarder
        {
            #region Private Member Variables

            private MamaQueueEventCallback mCallback;

            private object mClosure;

            private long mIndex;

            private MamaQueue mSender;

            #endregion

            #region Private Static Member Variables

            private static Dictionary<long, EnqueueEventForwarder> mEventList;

            private static Mutex mEventMutex;

            private static EnqueueCallback mNativeCallback;

            private static long mNextKey;

            #endregion

            #region Public Delegates

            public delegate void EnqueueCallback(IntPtr queue, IntPtr closure);

            #endregion

            #region Construction and Finalization

            static EnqueueEventForwarder()
            {
                // Create the mutex
                mEventMutex = new Mutex(false);

                // Create the dictionary
                mEventList = new Dictionary<long, EnqueueEventForwarder>();

                // Create the native callback delegate
                mNativeCallback = new EnqueueCallback(EnqueueEventForwarder.OnEvent);

                // Reset the key value
                mNextKey = 0;
            }

            public EnqueueEventForwarder(MamaQueueEventCallback callback, object closure, MamaQueue sender)
            {
                // Save arguments in member variables.
                mCallback  = callback;
                mClosure   = closure;
                mSender    = sender;

                // Save a reference to this object in the static list
                mIndex = AddForwarder(this);
            }

            #endregion

            #region Event Handlers

            internal static void OnEvent(IntPtr queue, IntPtr closure)
            {
                // Get the forward object from the event list
                EnqueueEventForwarder forwarder = GetForwarder(closure.ToInt32());
                if(forwarder != null)
                {
                    // Only invoke the callback object if it is valid.
                    if(forwarder.mCallback != null)
                    {
                        /* Invoke the user supplied callback passing in the original closure, the one
                         * sent up from the C layer is ignored as it will not be a valid .Net object.
                         */
                        forwarder.mCallback.onEvent(forwarder.mSender, forwarder.mClosure);
                    }

                    // Remove the reference from the event list
                    RemoveForwarder(forwarder.mIndex);
                }
            }

            #endregion

            #region Private Static Operations

            private static long AddForwarder(EnqueueEventForwarder forwarder)
            {
                // Returns
                long ret = mNextKey;

                // Acquire the mutex
                mEventMutex.WaitOne();

                // Add the forwarder to the list
                mEventList.Add(mNextKey, forwarder);

                // Increment the next key index
                mNextKey ++;

                // Release the mutex
                mEventMutex.ReleaseMutex();

                return ret;
            }

            private static EnqueueEventForwarder GetForwarder(long key)
            {
                // Returns
                EnqueueEventForwarder ret = null;

                // Acquire the mutex
                mEventMutex.WaitOne();

                // Obtain the forwarder from the dictionary
                ret = (EnqueueEventForwarder)mEventList[key];

                // Release the mutex
                mEventMutex.ReleaseMutex();

                return ret;
            }

            private static void RemoveForwarder(long key)
            {
                // Acquire the mutex
                mEventMutex.WaitOne();

                // Remove the forwarder from the array list
                mEventList.Remove(key);

                // Release the mutex
                mEventMutex.ReleaseMutex();
            }

            #endregion

            #region Public Operations

            public EnqueueCallback NativeCallback
            {
                get
                {
                    return mNativeCallback;
                }
            }

            #endregion

            #region Public Static Operations

            public static int ForwardEvent(MamaQueueEventCallback callback, object closure, IntPtr nativeHandle, MamaQueue sender)
            {
                // Create a new forwarder object to manage the .Net callback objects
                EnqueueEventForwarder forwarder = new EnqueueEventForwarder(callback, closure, sender);

                /* Invoke the native method, the index into the array will be passed as the clousure.
                 */
                return NativeMethods.mamaQueue_enqueueEvent(nativeHandle, forwarder.NativeCallback, new IntPtr(forwarder.mIndex));
            }

            #endregion
        }

        #endregion

        private class EnqueueCallbackForwarder
        {
            public delegate void EnqueueCallback(IntPtr queue, IntPtr closure);

            public EnqueueCallbackForwarder(MamaQueue sender, MamaQueueEnqueueCallback callback)
            {
                mSender = sender;
                mCallback = callback;
            }

            internal void OnEnqueue(IntPtr queue, IntPtr closure)
            {
                if (mCallback != null)
                {
                    mCallback.onEnqueue(mSender);
                }
            }

            private MamaQueueEnqueueCallback mCallback;
            private MamaQueue mSender;
        }

        private class WatermarkCallbackForwarder
        {
            public delegate void HighWatermarkExceededCallback(IntPtr queue, int size, IntPtr closure);
            public delegate void LowWatermarkCallback(IntPtr queue, int size, IntPtr closure);

            public WatermarkCallbackForwarder(MamaQueue sender, MamaQueueMonitorCallback callback, object closure)
            {
                mSender = sender;
                mCallback = callback;
                mClosure = closure;
            }

            internal void HighWatermarkExceeded(IntPtr queue, int size, IntPtr closure)
            {
                if (mCallback != null)
                {
                    mCallback.HighWatermarkExceeded(mSender, size, mClosure);
                }
            }

            internal void LowWatermark(IntPtr queue, int size, IntPtr closure)
            {
                if (mCallback != null)
                {
                    mCallback.LowWatermark(mSender, size, mClosure);
                }
            }

            private MamaQueueMonitorCallback mCallback;
            private MamaQueue mSender;
            private object mClosure;
        }

        private struct NativeMethods
        {
            // export definitions
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_create(ref IntPtr result,
                IntPtr bridgeImpl);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_canDestroy(IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_destroy(IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_destroyWait(IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_destroyTimedWait(IntPtr nativeHandle, long timeout);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_setHighWatermark (IntPtr nativeHandle,
                int highWatermark);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_getHighWatermark (IntPtr nativeHandle,
                ref int highWatermark);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_setLowWatermark (IntPtr nativeHandle,
                int lowWatermark);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_getLowWatermark (IntPtr nativeHandle,
                ref int lowWatermark);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_getEventCount (IntPtr nativeHandle, ref int eventCount);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_getQueueBridgeName (IntPtr nativeHandle, ref IntPtr name);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_setQueueMonitorCallbacks (IntPtr nativeHandle,
                ref WatermarkCallbacks queueMonitorCallbacks,
                IntPtr closure);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_dispatch (IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_dispatchEvent (IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_stopDispatch (IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_timedDispatch (IntPtr nativeHandle,
                ulong timeout);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_setEnqueueCallback (IntPtr nativeHandle,
                EnqueueCallbackForwarder.EnqueueCallback callback,
                IntPtr  closure);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaQueue_enqueueEvent(
                IntPtr nativeHandle,
                EnqueueEventForwarder.EnqueueCallback callback,
                IntPtr closure);
        }

        // state
        private EnqueueCallbackForwarder mEnqueueCallbackForwarder;
        private EnqueueCallbackForwarder.EnqueueCallback mEnqueueShimCallback;

        [StructLayout(LayoutKind.Sequential)]
        private struct WatermarkCallbacks
        {
            public WatermarkCallbackForwarder.HighWatermarkExceededCallback mHighWatermarkExceededShimCallback;
            public WatermarkCallbackForwarder.LowWatermarkCallback mLowWatermarkShimCallback;
        }

        private WatermarkCallbackForwarder mWatermarkCallbackForwarder;
        private WatermarkCallbacks mWatermarkShimCallbacks;
        #endregion // Implementation details

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
