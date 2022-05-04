---
title: cs/MamaFtMember.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaFtMember.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaFtMember](classWombat_1_1MamaFtMember.html)** <br>A member of a MAMA fault tolerance group  |
| class | **[Wombat::MamaMulticastFtMember](classWombat_1_1MamaMulticastFtMember.html)** <br>A member of a MAMA fault tolerance multicast group  |
| class | **[Wombat::MamaBridgeFtMember](classWombat_1_1MamaBridgeFtMember.html)** <br>A member of a MAMA fault tolerance bridge group  |




## Source code

```csharp
/* $Id: MamaFtMember.cs,v 1.6.12.5 2012/08/24 16:12:01 clintonmcdowell Exp $
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
    public enum mamaFtState
    {
        MAMA_FT_STATE_STANDBY  = 0,
        MAMA_FT_STATE_ACTIVE   = 1,
        MAMA_FT_STATE_UNKNOWN  = 99
    };

    public enum mamaFtType
    {
        MAMA_FT_TYPE_MULTICAST = 1,
        MAMA_FT_TYPE_BRIDGE    = 2,
        MAMA_FT_TYPE_MAX       = 3
    };

    public class MamaFtMember : MamaWrapper
    {
        public MamaFtMember(): base()
        {
        }

        public void create()
        {
            int code = NativeMethods.mamaFtMember_create(ref nativeHandle);
            CheckResultCode(code);
        }

        protected void setupFtType(
            mamaFtType ftType,
            MamaQueue queue,
            MamaFtMemberCallback callback,
            MamaTransport transport,
            string groupName,
            uint weight,
            double heartbeatInterval,
            double timeoutInterval,
            object closure)
        {
            EnsurePeerCreated();
            if (callback == null)
            {
                mCallbackForwarder = null;
                mCallback = null;
            }
            else
            {
                mCallbackForwarder = new CallbackForwarder(this, callback, closure);
                mCallback = new CallbackForwarder.FtMemberCallbackDelegate(mCallbackForwarder.OnFtStateChange);
            }
            IntPtr queueHandle = queue != null ? queue.NativeHandle : IntPtr.Zero;
            IntPtr transportHandle = transport != null ? transport.NativeHandle : IntPtr.Zero;
            int code = NativeMethods.mamaFtMember_setup(
                nativeHandle,
                mamaFtType.MAMA_FT_TYPE_MULTICAST,
                queueHandle,
                mCallback,
                transportHandle,
                groupName,
                weight,
                heartbeatInterval,
                timeoutInterval,
                null);
            CheckResultCode(code);
        }

        public void setup(
            MamaQueue queue,
            MamaFtMemberCallback callback,
            MamaTransport transport,
            string groupName,
            uint weight,
            double heartbeatInterval,
            double timeoutInterval,
            object closure)
        {
            setupFtType (
                mamaFtType.MAMA_FT_TYPE_MULTICAST,
                queue,
                callback,
                transport,
                groupName,
                weight,
                heartbeatInterval,
                timeoutInterval,
                closure);
        }

        public void activate()
        {
            int code = NativeMethods.mamaFtMember_activate(nativeHandle);
            CheckResultCode(code);
        }

        public void deactivate()
        {
            int code = NativeMethods.mamaFtMember_deactivate(nativeHandle);
            CheckResultCode(code);
        }

        public bool isActive()
        {
            int result = 0;
            int code = NativeMethods.mamaFtMember_isActive(nativeHandle, ref result);
            CheckResultCode(code);
            return result != 0;
        }

        public string getGroupName()
        {
            IntPtr result = IntPtr.Zero;
            int code = NativeMethods.mamaFtMember_getGroupName(nativeHandle, ref result);
            CheckResultCode(code);
            return Marshal.PtrToStringAnsi(result);
        }

        public uint getWeight()
        {
            uint result = 0;
            int code = NativeMethods.mamaFtMember_getWeight(nativeHandle, ref result);
            CheckResultCode(code);
            return result;
        }

        public double getHeartbeatInterval()
        {
            double result = 0.0;
            int code = NativeMethods.mamaFtMember_getHeartbeatInterval(nativeHandle, ref result);
            CheckResultCode(code);
            return result;
        }

        public double getTimeoutInterval()
        {
            double result = 0.0;
            int code = NativeMethods.mamaFtMember_getTimeoutInterval(nativeHandle, ref result);
            CheckResultCode(code);
            return result;
        }

        public object getClosure()
        {
            return mCallbackForwarder.GetClosure();
        }

        public void setWeight(uint value)
        {
            int code = NativeMethods.mamaFtMember_setWeight(nativeHandle, value);
            CheckResultCode(code);
        }

        public void setInstanceId(string id)
        {
            int code = NativeMethods.mamaFtMember_setInstanceId(nativeHandle, id);
            CheckResultCode(code);
        }

        public static string mamaFtStateToString(mamaFtState state)
        {
            return Marshal.PtrToStringAnsi(NativeMethods.mamaFtStateToString(state));
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return (MamaStatus.mamaStatus)NativeMethods.mamaFtMember_destroy(nativeHandle);
        }

        #region Implementation details

        // Interop bridge
        private sealed class CallbackForwarder
        {
            public delegate void FtMemberCallbackDelegate(
                IntPtr ftMember,
                string groupName,
                mamaFtState state,
                IntPtr closure);

            internal void OnFtStateChange(
                IntPtr ftMember,
                string groupName,
                mamaFtState state,
                IntPtr closure)
            {
                if (mCallback != null)
                {
                    mCallback.onFtStateChange(mTarget, groupName, state, mClosure);
                }
            }

            public CallbackForwarder(MamaFtMember target, MamaFtMemberCallback callback, object closure)
            {
                mTarget = target;
                mCallback = callback;
                mClosure = closure;
            }

            public object GetClosure()
            {
                return mClosure;
            }

            private MamaFtMember mTarget;
            private MamaFtMemberCallback mCallback;
            private object mClosure;
        }

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_create(
                ref IntPtr  member);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_setup(
                IntPtr member,
                mamaFtType fttype,
                IntPtr eventQueue,
                CallbackForwarder.FtMemberCallbackDelegate callback,
                IntPtr transport,
                string groupName,
                uint weight,
                double heartbeatInterval,
                double timeoutInterval,
                object closure);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_destroy(
                IntPtr member);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_activate(
                IntPtr member);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_deactivate(
                IntPtr member);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_isActive(
                IntPtr  member,
                ref int result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_getGroupName(
                IntPtr member,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_getWeight(
                IntPtr member,
                ref uint result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_getHeartbeatInterval(
                IntPtr member,
                ref double result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_getTimeoutInterval(
                IntPtr member,
                ref double result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_setWeight(
                IntPtr member,
                uint value);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFtMember_setInstanceId(
                IntPtr member,
                string id);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaFtStateToString (mamaFtState state);
        }

        private CallbackForwarder mCallbackForwarder;
        private CallbackForwarder.FtMemberCallbackDelegate mCallback;

        #endregion // Implementation details
    }

    public class MamaMulticastFtMember : MamaFtMember
    {
        public new void setup(
            MamaQueue queue,
            MamaFtMemberCallback callback,
            MamaTransport transport,
            string groupName,
            uint weight,
            double heartbeatInterval,
            double timeoutInterval,
            object closure)
        {
            setupFtType (
                mamaFtType.MAMA_FT_TYPE_MULTICAST,
                queue,
                callback,
                transport,
                groupName,
                weight,
                heartbeatInterval,
                timeoutInterval,
                closure);
        }
    }

    public class MamaBridgeFtMember : MamaFtMember
    {
        public new void setup(
            MamaQueue queue,
            MamaFtMemberCallback callback,
            MamaTransport transport,
            string groupName,
            uint weight,
            double heartbeatInterval,
            double timeoutInterval,
            object closure)
        {
            setupFtType (
                mamaFtType.MAMA_FT_TYPE_BRIDGE,
                queue,
                callback,
                transport,
                groupName,
                weight,
                heartbeatInterval,
                timeoutInterval,
                closure);
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
