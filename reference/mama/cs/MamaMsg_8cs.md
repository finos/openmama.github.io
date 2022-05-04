---
title: cs/MamaMsg.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaMsg.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::Diagnostics](namespaceSystem_1_1Diagnostics.html)**  |
| **[System::Text](namespaceSystem_1_1Text.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaMsgIterator](classWombat_1_1MamaMsgIterator.html)** <br>Class for iterating through the fields in a [MamaMsg](classWombat_1_1MamaMsg.html) |
| class | **[Wombat::MamaMsg](classWombat_1_1MamaMsg.html)** <br>Class which encapsulates the messages used in the MAMA infrastructure  |




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
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;

namespace Wombat
{
    [Obsolete ("mamaPayloadType enum has been deprecated.")]
    public enum mamaPayloadType
    {
        MAMA_PAYLOAD_SOLACE = '1',

        MAMA_PAYLOAD_V5 = '5',

        MAMA_PAYLOAD_AVIS = 'A',

        MAMA_PAYLOAD_TICK42BLP = 'B',

        MAMA_PAYLOAD_FAST = 'F',

        MAMA_PAYLOAD_RAI = 'I',

        MAMA_PAYLOAD_KWANTUM = 'K',

        MAMA_PAYLOAD_UMS = 'L',

        MAMA_PAYLOAD_INRUSH = 'N',

        MAMA_PAYLOAD_TICK42RMDS = 'P',

        MAMA_PAYLOAD_QPID = 'Q',

        MAMA_PAYLOAD_TIBRV = 'R',

        MAMA_PAYLOAD_IBMWFO = 'S',

        MAMA_PAYLOAD_ACTIV = 'T',

        MAMA_PAYLOAD_VULCAN = 'V',

        MAMA_PAYLOAD_WOMBAT_MSG = 'W',

        MAMA_PAYLOAD_EXEGY = 'X',

        MAMA_PAYLOAD_UNKNOWN = 'U'
    }

    public enum mamaMsgType
    {
        MAMA_MSG_TYPE_UPDATE            =   0,

        MAMA_MSG_TYPE_INITIAL           =   1,

        MAMA_MSG_TYPE_CANCEL            =   2,

        MAMA_MSG_TYPE_ERROR             =   3,

        MAMA_MSG_TYPE_CORRECTION        =   4,

        MAMA_MSG_TYPE_CLOSING           =   5,

        MAMA_MSG_TYPE_RECAP             =   6,

        MAMA_MSG_TYPE_DELETE            =   7,

        MAMA_MSG_TYPE_EXPIRE            =   8,

        MAMA_MSG_TYPE_SNAPSHOT          =   9,

        MAMA_MSG_TYPE_PREOPENING        =   12,

        MAMA_MSG_TYPE_QUOTE             =   13,

        MAMA_MSG_TYPE_TRADE             =   14,

        MAMA_MSG_TYPE_ORDER             =   15,

        MAMA_MSG_TYPE_BOOK_INITIAL      =   16,

        MAMA_MSG_TYPE_BOOK_UPDATE       =   17,

        MAMA_MSG_TYPE_BOOK_CLEAR        =   18,

        MAMA_MSG_TYPE_BOOK_RECAP        =   19,

        MAMA_MSG_TYPE_BOOK_SNAPSHOT     =   20,

        MAMA_MSG_TYPE_NOT_PERMISSIONED  =   21,

        MAMA_MSG_TYPE_NOT_FOUND         =   22,

        MAMA_MSG_TYPE_END_OF_INITIALS   =   23,

        MAMA_MSG_TYPE_WOMBAT_REQUEST    =   24,

        MAMA_MSG_TYPE_WOMBAT_CALC       =   25,

        MAMA_MSG_TYPE_SEC_STATUS        =   26,

        MAMA_MSG_TYPE_DDICT_SNAPSHOT    =   50,

        MAMA_MSG_TYPE_MISC              =   100,

        MAMA_MSG_TYPE_TIBRV             =   101,

        MAMA_MSG_TYPE_FEATURE_SET       =   150,

        MAMA_MSG_TYPE_SYNC_REQUEST      =   170,

        MAMA_MSG_TYPE_REFRESH           =   171,

        MAMA_MSG_TYPE_WORLD_VIEW        =   172,

        MAMA_MSG_TYPE_NEWS_QUERY        =   173,

        MAMA_MSG_TYPE_NULL              =   175,

        MAMA_MSG_TYPE_ENTITLEMENTS_REFRESH =   176,

        MAMA_MSG_TYPE_UNKNOWN           =   199
    }

    public enum mamaMsgStatus
    {
        MAMA_MSG_STATUS_OK                  =   0,

        MAMA_MSG_STATUS_LINE_DOWN           =   1,

        MAMA_MSG_STATUS_NO_SUBSCRIBERS      =   2,

        MAMA_MSG_STATUS_BAD_SYMBOL          =   3,

        MAMA_MSG_STATUS_EXPIRED             =   4,

        MAMA_MSG_STATUS_TIMEOUT             =   5,

        MAMA_MSG_STATUS_MISC                =   6,

        MAMA_MSG_STATUS_STALE               =   7,

        //This looks wrong but basdically these 2 are the same at the c layer so we need to stay in step
        MAMA_MSG_STATUS_PLATFORM_STATUS     =   8,
        MAMA_MSG_STATUS_TIBRV_STATUS        =   8,

        MAMA_MSG_STATUS_NOT_ENTITLED        =   9,

        MAMA_MSG_STATUS_NOT_FOUND           =   10,

        MAMA_MSG_STATUS_POSSIBLY_STALE      =   11,

        MAMA_MSG_STATUS_NOT_PERMISSIONED    =   12,

        MAMA_MSG_STATUS_TOPIC_CHANGE        =   13,

        MAMA_MSG_STATUS_BANDWIDTH_EXCEEDED  =   14,

        MAMA_MSG_STATUS_DUPLICATE           =   15,


        MAMA_MSG_STATUS_UNKNOWN             =   99
    }

    public class MamaMsgIterator : MamaWrapper
    {
        public MamaMsgIterator (MamaDictionary dictionary)
        {
            IntPtr dictHandle = dictionary != null ? dictionary.NativeHandle : IntPtr.Zero;

            int code = NativeMethods.mamaMsgIterator_create(ref nativeHandle, dictHandle);
            CheckResultCode(code);
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {



            return 0;
        }

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgIterator_create (ref IntPtr iterator, IntPtr dict);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsgIterator_next (IntPtr iterator);
        }


        public void SetField (IntPtr pField)
        {
            if (mField == null)
                mField = new MamaMsgField (pField);

            mField.setNativeHandle(pField);
        }

        public MamaMsgField getField ()
        {
            if (mField.NativeHandle == (IntPtr) null)
                return null;
            else
                return mField;
        }

        public static MamaMsgIterator operator++ (MamaMsgIterator rhs)
        {
            IntPtr tempfield = NativeMethods.mamaMsgIterator_next(rhs.nativeHandle);
            rhs.mField.setNativeHandle(tempfield);
            return rhs;
        }

        private MamaMsgField mField;

    }

    public class MamaMsg : MamaWrapper
    {
        public MamaMsg ()
        {
            int code = NativeMethods.mamaMsg_create(ref nativeHandle);
            CheckResultCode(code);
        }

        [Obsolete("MamaMsg(MamaPayloadType PayloadId) has been deprecated, "
                 +"use MamaMsg(char payloadId) instead.")]
        public MamaMsg (mamaPayloadType payloadId)
        {
            int code = NativeMethods.mamaMsg_createForPayload(ref nativeHandle, payloadId);
            CheckResultCode(code);
        }

        public MamaMsg (char payloadId)
        {
            int code = NativeMethods.mamaMsg_createForPayload(ref nativeHandle, payloadId);
            CheckResultCode(code);
        }

        public MamaMsg (MamaPayloadBridge payloadBridge)
        {
            int code = NativeMethods.mamaMsg_createForPayloadBridge (ref nativeHandle, payloadBridge.NativeHandle);
            CheckResultCode(code);
        }

        public MamaMsg (MamaMsg mamaMsgSrc)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (mamaMsgSrc == null)
            {
                throw new ArgumentNullException("mamaMsgSrc");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            int code = NativeMethods.mamaMsg_copy(mamaMsgSrc.NativeHandle, ref nativeHandle);
            CheckResultCode(code);

            GC.KeepAlive(mamaMsgSrc);
        }

        internal MamaMsg(IntPtr nativeHandle) : base(nativeHandle)
        {
        }


        public void getByteBuffer (ref byte[] byteBuffer, ref int size)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            int code = NativeMethods.mamaMsg_getByteBuffer(nativeHandle, ref array, ref size);
            CheckResultCode(code);
            if ((myByteBuffer == null) || (myByteBuffer.Length < size) )
                myByteBuffer = new byte[size];
            Marshal.Copy(array, myByteBuffer, 0, (int)size);
            byteBuffer = myByteBuffer;
        }


        public void createFromBuffer (byte[] byteBuffer, int size)
        {
            EnsurePeerCreated();

            if (buffer != IntPtr.Zero)
            {
                Marshal.FreeHGlobal(buffer);
                buffer = IntPtr.Zero;
            }

            buffer = Marshal.AllocHGlobal(size);
            Marshal.Copy(byteBuffer, 0, buffer, size);
            int code = NativeMethods.mamaMsg_createFromByteBuffer(ref nativeHandle, buffer, size);
            CheckResultCode(code);
        }

        public void createForBridgeFromBuffer (byte[] byteBuffer, int size, MamaBridge bridgeImpl)
        {
            EnsurePeerCreated();
            if (buffer != IntPtr.Zero)
            {
                Marshal.FreeHGlobal(buffer);
                buffer = IntPtr.Zero;
            }
            Marshal.Copy(byteBuffer, 0, buffer, size);
            int code = NativeMethods.mamaMsg_createForBridgeFromByteBuffer(ref nativeHandle, buffer, size, bridgeImpl.NativeHandle);
            CheckResultCode(code);
        }

        public MamaMsg detach ()
        {
            int code = NativeMethods.mamaMsg_detach(nativeHandle);

            MamaMsg result = new MamaMsg ();
            code = NativeMethods.mamaMsg_destroy(result.nativeHandle);
            result.setNativeHandle (nativeHandle);

            return result;
        }

        private ulong convertToMamaDateTime (DateTime val)
        {
            double dateTimeSec = (((double)val.Ticks - 621355968000000000.0) / TimeSpan.TicksPerSecond);
            ulong dateTime = 0;
            int code = NativeMethods.mamaDateTime_setEpochTimeF64 (ref dateTime, dateTimeSec);
            CheckResultCode(code);
            return dateTime;
        }

        private long convertFromMamaDateTime (ulong val)
        {
            double dateTimeSec = 0;
            int code = NativeMethods.mamaDateTime_getEpochTimeSeconds (ref val, ref dateTimeSec);
            CheckResultCode(code);
            return (long)((dateTimeSec * (double)TimeSpan.TicksPerSecond) + 621355968000000000.0);
        }

        public mamaMsgType getType ()
        {
            EnsurePeerCreated();
            return (mamaMsgType) NativeMethods.mamaMsgType_typeForMsg(nativeHandle);
        }

        public mamaMsgStatus getStatus ()
        {
            EnsurePeerCreated();
            return (mamaMsgStatus)getI32(null, (ushort)MamaReservedFields.MsgStatus.getFid());
        }

        #pragma warning disable 0618
        public mamaPayloadType getPayloadType()
        {
            EnsurePeerCreated();
            mamaPayloadType type = mamaPayloadType.MAMA_PAYLOAD_WOMBAT_MSG;
            int code = NativeMethods.mamaMsg_getPayloadType(nativeHandle, ref type);
            CheckResultCode(code);

            return type;
        }
        #pragma warning restore 0618

        public void iterateFields(
            MamaMsgFieldIterator iterator,
            MamaDictionary  dictionary,
            object closure)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (iterator == null)
            {
                throw new ArgumentNullException("iterator");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();

            IntPtr dictHandle = dictionary != null ? dictionary.NativeHandle : IntPtr.Zero;
            if (forwarder == null)
            {
                forwarder = new CallbackForwarder(this, iterator, closure);
                callback =
                    new CallbackForwarder.MamaMessageIteratorDelegate(forwarder.OnField);
                GC.SuppressFinalize(forwarder);
                GC.SuppressFinalize(callback);
            }
            else
            {
                forwarder.mCallback = iterator;
                forwarder.mClosure = closure;
            }
            int code = NativeMethods.mamaMsg_iterateFields(nativeHandle, callback, dictHandle, nativeHandle);
            CheckResultCode(code);

            GC.KeepAlive(iterator);
            GC.KeepAlive(dictionary);
        }

        public void clear ()
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_clear(nativeHandle);
            CheckResultCode(code);
        }

        protected override void OnDispose ()
        {
            if (tempMsgVector != null)
                tempMsgVector[0].Dispose ();

            if (price_ != null)
                price_.Dispose ();

            if (mField != null)
                mField.Dispose ();

            if (msg_ != null)
                msg_.Dispose ();

        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return (MamaStatus.mamaStatus)NativeMethods.mamaMsg_destroy(nativeHandle);
        }

        public void destroy ()
        {
            if (buffer != IntPtr.Zero)
            {
                Marshal.FreeHGlobal(buffer);
            }
            GC.KeepAlive(forwarder);
            GC.KeepAlive(callback);
            Dispose();
        }

        public int getByteSize ()
        {
            EnsurePeerCreated();
            int size = 0;
            int code = NativeMethods.mamaMsg_getByteSize(nativeHandle, ref size);
            CheckResultCode(code);
            return size;
        }

        public void addBool(
            string name,
            ushort fid,
            bool val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addBool(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addChar(
            string name,
            ushort fid,
            char val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addChar(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void addI8(
            string name,
            ushort fid,
            sbyte val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addI8(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void addU8(
            string name,
            ushort fid,
            byte val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addU8(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void addI16(
            string name,
            ushort fid,
            short val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addI16(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addU16(
            string name,
            ushort fid,
            ushort val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addU16(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addI32(
            string name,
            ushort fid,
            int val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addI32(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addU32(
            string name,
            ushort fid,
            uint val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addU32(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addI64(
            string name,
            ushort fid,
            long val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addI64(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addU64(
            string name,
            ushort fid,
            ulong val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addU64(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addF32(
            string name,
            ushort fid,
            float val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addF32(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addF64(
            string name,
            ushort fid,
            double val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addF64(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }


        public void addString(
            string name,
            ushort fid,
            string val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_addString(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void addOpaque(
            string name,
            ushort fid,
            byte[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                Marshal.Copy(val, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addOpaque(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addDateTime (
            string name,
            ushort fid,
            DateTime val)
        {
            EnsurePeerCreated();
            ulong put = convertToMamaDateTime (val);
            int code = NativeMethods.mamaMsg_addDateTime(nativeHandle, name, fid, ref put);
            CheckResultCode(code);
        }

        public void addPrice (
            string name,
            ushort fid,
            MamaPrice val)
        {
            EnsurePeerCreated();
            IntPtr put = val.NativeHandle;
            int code = NativeMethods.mamaMsg_addPrice(nativeHandle, name, fid, put);
            CheckResultCode(code);
        }

        public void addMsg(string name, ushort fid, MamaMsg val)
        {
            EnsurePeerCreated();
            IntPtr put = val.NativeHandle;
            int code = NativeMethods.mamaMsg_addMsg(nativeHandle, name, fid, put);
            CheckResultCode(code);
        }

        public void addVectorBool (
            string name,
            ushort fid,
            bool[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                byte[] loc = new byte[val.Length];
                for (int i = 0; i < loc.Length; ++i)
                {
                    loc[i] = (byte)(val[i] ? 1 : 0);
                }
                Marshal.Copy(loc, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorBool(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorChar (
            string name,
            ushort fid,
            char[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                byte[] loc = new byte[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (byte)val[i];
                }
                Marshal.Copy(loc,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorChar(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorI8 (
            string name,
            ushort fid,
            sbyte[]val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                byte[] loc = new byte[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (byte)val[i];
                }
                Marshal.Copy(loc,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorI8(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorU8 (
            string name,
            ushort fid,
            byte[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                Marshal.Copy(val,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorU8(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorI16 (
            string name,
            ushort fid,
            short[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 2);
            try
            {
                Marshal.Copy(val,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorI16(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorU16 (
            string name,
            ushort fid,
            ushort[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 2);
            try
            {
                short[] loc = new short[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (short)val[i];
                }
                Marshal.Copy(loc,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorU16(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorI32 (
            string name,
            ushort fid,
            int[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 4);
            try
            {
                Marshal.Copy(val,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorI32(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorU32 (
            string name,
            ushort fid,
            uint[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 4);
            try
            {
                int[] loc = new int[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (int)val[i];
                }
                Marshal.Copy(loc,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorU32(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorI64 (
            string name,
            ushort fid,
            long[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 8);
            try
            {
                Marshal.Copy(val,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorI64(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorU64 (
            string name,
            ushort fid,
            ulong[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 8);
            try
            {
                long[] loc = new long[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (long)val[i];
                }
                Marshal.Copy(loc,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorU64(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorF32 (
            string name,
            ushort fid,
            float[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 4);
            try
            {
                Marshal.Copy(val,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorF32(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorF64 (
            string name,
            ushort fid,
            double[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 8);
            try
            {
                Marshal.Copy(val,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorF64(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void addVectorDateTime (
            string name,
            ushort fid,
            DateTime[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 8);
            try
            {
                long[] array = new long[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    array[i] = (long)convertToMamaDateTime (val[i]);
                }
                Marshal.Copy(array,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_addVectorDateTime(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }



        public void updateBool(
            string name,
            ushort fid,
            bool val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateBool(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateChar(
            string name,
            ushort fid,
            char val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateChar(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateI8(
            string name,
            ushort fid,
            sbyte val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateI8(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateU8(
            string name,
            ushort fid,
            byte val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateU8(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateI16(
            string name,
            ushort fid,
            short val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateI16(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateU16(
            string name,
            ushort fid,
            ushort val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateU16(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateI32(
            string name,
            ushort fid,
            int val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateI32(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateU32(
            string name,
            ushort fid,
            uint val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateU32(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateI64(
            string name,
            ushort fid,
            long val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateI64(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateU64(
            string name,
            ushort fid,
            ulong val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateU64(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateF32(
            string name,
            ushort fid,
            float val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateF32(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateF64(
            string name,
            ushort fid,
            double val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateF64(nativeHandle, name, fid,val);
            CheckResultCode(code);
        }

        public void updateString(
            string name,
            ushort fid,
            string val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaMsg_updateString(nativeHandle, name, fid, val);
            CheckResultCode(code);
        }

        public void updateOpaque(
            string name,
            ushort fid,
            byte[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                Marshal.Copy(val,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateOpaque(nativeHandle, name, fid, ptr,val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateDateTime(
            string name,
            ushort fid,
            DateTime val)
        {
            EnsurePeerCreated();
            ulong put = convertToMamaDateTime (val);
            int code = NativeMethods.mamaMsg_updateDateTime(nativeHandle, name, fid,ref put);
            CheckResultCode(code);
        }

        public void updatePrice(
            string name,
            ushort fid,
            MamaPrice val)
        {
            EnsurePeerCreated();
            IntPtr put = val.NativeHandle;
            int code = NativeMethods.mamaMsg_updatePrice(nativeHandle, name, fid,put);
            CheckResultCode(code);
        }

        public void updateVectorBool(
            string name,
            ushort fid,
            bool[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                byte[] loc = new byte[val.Length];
                for (int i = 0; i < loc.Length; ++i)
                {
                    loc[i] = (byte)(val[i] ? 1 : 0);
                }
                Marshal.Copy(loc, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorBool(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorChar(
            string name,
            ushort fid,
            char[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                byte[] loc = new byte[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (byte)val[i];
                }
                Marshal.Copy(loc, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorChar(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorI8(
            string name,
            ushort fid,
            sbyte[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                byte[] loc = new byte[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (byte)val[i];
                }
                Marshal.Copy(loc, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorI8(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorU8(
            string name,
            ushort fid,
            byte[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length);
            try
            {
                Marshal.Copy(val, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorU8(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorI16(
            string name,
            ushort fid,
            short[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 2);
            try
            {
                Marshal.Copy(val, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorI16(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorU16(
            string name,
            ushort fid,
            ushort[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 2);
            try
            {
                short[] loc = new short[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (short)val[i];
                }
                Marshal.Copy(loc, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorU16(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorI32(
            string name,
            ushort fid,
            int[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 4);
            try
            {
                Marshal.Copy(val, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorI32(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorU32(
            string name,
            ushort fid,
            uint[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 4);
            try
            {
                int[] loc = new int[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (int)val[i];
                }
                Marshal.Copy(loc, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorU32(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorI64(
            string name,
            ushort fid,
            long[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 8);
            try
            {
                Marshal.Copy(val, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorI64(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorU64(
            string name,
            ushort fid,
            ulong[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 8);
            try
            {
                long[] loc = new long[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    loc[i] = (long)val[i];
                }
                Marshal.Copy(loc, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorU64(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorF32(
            string name,
            ushort fid,
            float[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 4);
            try
            {
                Marshal.Copy(val, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorF32(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorF64(
            string name,
            ushort fid,
            double[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 8);
            try
            {
                Marshal.Copy(val, 0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorF64(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }

        public void updateVectorDateTime(
            string name,
            ushort fid,
            DateTime[] val)
        {
            EnsurePeerCreated();
            IntPtr ptr = Marshal.AllocHGlobal(val.Length * 8);
            try
            {
                long[] array = new long[val.Length];
                for (int i = 0; i < val.Length; i++)
                {
                    array[i] = (long)convertToMamaDateTime (val[i]);
                }
                Marshal.Copy(array,0, ptr, val.Length);
                int code = NativeMethods.mamaMsg_updateVectorDateTime(nativeHandle, name, fid, ptr, val.Length);
                CheckResultCode(code);
            }
            finally
            {
                Marshal.FreeHGlobal(ptr);
            }
        }



        public bool getBool(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            bool ret = false;
            int code = NativeMethods.mamaMsg_getBool(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public bool getBool(
            MamaFieldDescriptor descriptor)
        {
            return getBool (null, (ushort)descriptor.getFid());
        }

        public bool getBool(
            string name,
            ushort fid,
            bool valueIfMissing)
        {
            bool result = false;
            if (tryBool (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public bool getBool(
            MamaFieldDescriptor descriptor,
            bool valueIfMissing)
        {
            return getBool (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public char getChar(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            char ret = (char)0;
            int code = NativeMethods.mamaMsg_getChar(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public char getChar(
            MamaFieldDescriptor descriptor)
        {
            return getChar (null, (ushort)descriptor.getFid());
        }

        public char getChar(
            string name,
            ushort fid,
            char valueIfMissing)
        {
            char result = '\0';
            if (tryChar (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public char getChar(
            MamaFieldDescriptor descriptor,
            char valueIfMissing)
        {
            return getChar (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public sbyte getI8(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            sbyte ret = 0;
            int code = NativeMethods.mamaMsg_getI8(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public sbyte getI8(
            MamaFieldDescriptor descriptor)
        {
            return getI8 (null, (ushort)descriptor.getFid());
        }

        public sbyte getI8(
            string name,
            ushort fid,
            sbyte valueIfMissing)
        {
            sbyte result = 0;
            if (tryI8 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public sbyte getI8(
            MamaFieldDescriptor descriptor,
            sbyte valueIfMissing)
        {
            return getI8 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public byte getU8(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            byte ret = 0;
            int code = NativeMethods.mamaMsg_getU8(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public byte getU8(
            MamaFieldDescriptor descriptor)
        {
            return getU8 (null, (ushort)descriptor.getFid());
        }

        public byte getU8(
            string name,
            ushort fid,
            byte valueIfMissing)
        {
            byte result = 0;
            if (tryU8 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public byte getU8(
            MamaFieldDescriptor descriptor,
            byte valueIfMissing)
        {
            return getU8 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public short getI16(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            short ret = 0;
            int code = NativeMethods.mamaMsg_getI16(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public short getI16(
            MamaFieldDescriptor descriptor)
        {
            return getI16 (null, (ushort)descriptor.getFid());
        }

        public short getI16(
            string name,
            ushort fid,
            short valueIfMissing)
        {
            short result = 0;
            if (tryI16 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public short getI16(
            MamaFieldDescriptor descriptor,
            short valueIfMissing)
        {
            return getI16 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public ushort getU16(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            ushort ret = 0;
            int code = NativeMethods.mamaMsg_getU16(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public ushort getU16(
            MamaFieldDescriptor descriptor)
        {
            return getU16 (descriptor.getName(), (ushort)descriptor.getFid());
        }

        public ushort getU16(
            string name,
            ushort fid,
            ushort valueIfMissing)
        {
            ushort result = 0;
            if (tryU16 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public ushort getU16(
            MamaFieldDescriptor descriptor,
            ushort valueIfMissing)
        {
            return getU16 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public int getI32(
            string name,
            ushort fid)
        {
            int result = 0;
            tryI32Impl(name, fid, ref result, true);
            return result;
        }

        public int getI32(
            MamaFieldDescriptor descriptor)
        {
            return getI32 (null, (ushort)descriptor.getFid());
        }

        public int getI32(
            string name,
            ushort fid,
            int valueIfMissing)
        {
            int result = 0;
            if (tryI32 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public int getI32(
            MamaFieldDescriptor descriptor,
            int valueIfMissing)
        {
            return getI32 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public uint getU32(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            uint ret = 0;
            int code = NativeMethods.mamaMsg_getU32(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public uint getU32(
            MamaFieldDescriptor descriptor)
        {
            return getU32 (null, (ushort)descriptor.getFid());
        }

        public uint getU32(
            string name,
            ushort fid,
            uint valueIfMissing)
        {
            uint result = 0;
            if (tryU32 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public uint getU32(
            MamaFieldDescriptor descriptor,
            uint valueIfMissing)
        {
            return getU32 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public long getI64(
            string name,
            ushort fid)
        {
            long result = 0;
            tryI64Impl(name, fid, ref result, true);
            return result;
        }

        public long getI64(
            MamaFieldDescriptor descriptor)
        {
            return getI64 (null, (ushort)descriptor.getFid());
        }

        public long getI64(
            string name,
            ushort fid,
            long valueIfMissing)
        {
            long result = 0;
            if (tryI64 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public long getI64(
            MamaFieldDescriptor descriptor,
            long valueIfMissing)
        {
            return getI64 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public ulong getU64(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            ulong ret = 0;
            int code = NativeMethods.mamaMsg_getU64(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public ulong getU64(
            MamaFieldDescriptor descriptor)
        {
            return getU64 (null, (ushort)descriptor.getFid());
        }

        public ulong getU64(
            string name,
            ushort fid,
            ulong valueIfMissing)
        {
            ulong result = 0;
            if (tryU64 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public ulong getU64(
            MamaFieldDescriptor descriptor,
            ulong valueIfMissing)
        {
            return getU64 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public float getF32(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            float ret = 0;
            int code = NativeMethods.mamaMsg_getF32(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public float getF32(
            MamaFieldDescriptor descriptor)
        {
            return getF32 (null, (ushort)descriptor.getFid());
        }

        public float getF32(
            string name,
            ushort fid,
            float valueIfMissing)
        {
            float result = 0.0f;
            if (tryF32 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public float getF32(
            MamaFieldDescriptor descriptor,
            float valueIfMissing)
        {
            return getF32 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public double getF64(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            double ret = 0;
            int code = NativeMethods.mamaMsg_getF64(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public double getF64(
            MamaFieldDescriptor descriptor)
        {
            return getF64 (null, (ushort)descriptor.getFid());
        }

        public double getF64(
            string name,
            ushort fid,
            double valueIfMissing)
        {
            double result = 0.0;
            if (tryF64 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public double getF64(
            MamaFieldDescriptor descriptor,
            double valueIfMissing)
        {
            return getF64 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public string getString(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr ret = IntPtr.Zero;
            int code = NativeMethods.mamaMsg_getString(nativeHandle, name, fid,ref ret);
            CheckResultCode(code);
            return Marshal.PtrToStringAnsi(ret);
        }

        public bool tryStringAnsi(string name, ushort fid, ref IntPtr result)
        {
            result = IntPtr.Zero;
            if (MamaWrapper.CheckResultCodeIgnoreNotFound(
                NativeMethods.mamaMsg_getString(base.nativeHandle, name, fid, ref result))
                != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            return true;
        }

        public bool tryStringAnsi(
            MamaFieldDescriptor descriptor,
            ref IntPtr result)
        {
            return tryStringAnsi (null, (ushort)descriptor.getFid(), ref result);
        }


        public string getString(
            MamaFieldDescriptor descriptor)
        {
            return getString (null, (ushort)descriptor.getFid());
        }

        public string getString(
            string name,
            ushort fid,
            string valueIfMissing)
        {
            string result = null;
            if (tryString (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public string getString(
            MamaFieldDescriptor descriptor,
            string valueIfMissing)
        {
            return getString (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public byte[] getOpaque(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getOpaque(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            byte[] ret = new byte[size];
            Marshal.Copy(array, ret, 0, (int)size);
            return ret;
        }

        public byte[] getOpaque(
            MamaFieldDescriptor descriptor)
        {
            return getOpaque (null, (ushort)descriptor.getFid());
        }

        public byte[] getOpaque(
            string name,
            ushort fid,
            byte[] valueIfMissing)
        {
            byte[] result = null;
            if (tryOpaque (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public byte[] getOpaque(
            MamaFieldDescriptor descriptor,
            byte[] valueIfMissing)
        {
            return getOpaque (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public DateTime getDateTime(
            string name,
            ushort fid)
        {

            DateTime result = DateTime.MinValue;
            tryDateTimeImpl(name, fid, ref result, true);
            return result;
        }

        public DateTime getDateTime(
            MamaFieldDescriptor descriptor)
        {
            return getDateTime (null, (ushort)descriptor.getFid());
        }

        public DateTime getDateTime(
            string name,
            ushort fid,
            DateTime valueIfMissing)
        {
            DateTime result = DateTime.MinValue;
            if (tryDateTime (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public DateTime getDateTime(
            MamaFieldDescriptor descriptor,
            DateTime valueIfMissing)
        {
            return getDateTime (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public MamaPrice getPrice(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            if (price_ == null)
            {
                price_ = new MamaPrice ();
                price_.SelfManageLifeTime(false);
            }
            int code = NativeMethods.mamaMsg_getPrice(nativeHandle, name, fid, price_.NativeHandle);
            MamaStatus.mamaStatus status = (MamaStatus.mamaStatus)code;
            if (status != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                throw new MamaException(status);
            }

            return price_;
        }

        public MamaPrice getPrice(
            MamaFieldDescriptor descriptor)
        {
            return getPrice (null, (ushort)descriptor.getFid());
        }

        public MamaPrice getPrice(
            string name,
            ushort fid,
            MamaPrice valueIfMissing)
        {
            if (price_ == null)
            {
                price_ = new MamaPrice ();
                price_.SelfManageLifeTime(false);
            }
            if (tryPrice (name, fid, ref price_))
                return price_;
            else
                return valueIfMissing;
        }

        public MamaPrice getPrice(
            MamaFieldDescriptor descriptor,
            MamaPrice valueIfMissing)
        {
            return getPrice (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public MamaMsg getMsg(
            string name,
            ushort fid)
        {
            if (msg_ == null)
            {
                msg_ = new MamaMsg ();
                msg_.SelfManageLifeTime(false);
            }
            tryMsgImpl(name, fid, ref msg_, true);
            return msg_;
        }

        public MamaMsg getMsg(
            MamaFieldDescriptor descriptor)
        {
            return getMsg(null, (ushort)descriptor.getFid());
        }

        public MamaMsg getMsg(
            string name,
            ushort fid,
            MamaMsg valueIfMissing)
        {
            if (msg_ == null)
            {
                msg_ = new MamaMsg ();
                msg_.SelfManageLifeTime(false);
            }
            if (tryMsgImpl(name, fid, ref msg_, false))
                return msg_;
            else
                return valueIfMissing;
        }

        public MamaMsg getMsg(
            MamaFieldDescriptor descriptor,
            MamaMsg valueIfMissing)
        {
            return getMsg(null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public MamaMsgField getField(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr field = IntPtr.Zero;
            int code = NativeMethods.mamaMsg_getField(nativeHandle, name, fid,ref field);
            CheckResultCode(code);

            if (mField == null)
            {
                //See MamaWrapper constructor - this is fine as ownsThePeer will be set false
                mField = new MamaMsgField (field);
            }
            else
            {
                mField.setNativeHandle(field);

            }
            return mField;
        }

        public MamaMsgField getField(
            MamaFieldDescriptor descriptor)
        {
            return getField (null, (ushort)descriptor.getFid());
        }

        public MamaMsgField getField(
            string name,
            ushort fid,
            MamaMsgField valueIfMissing)
        {
            if (mField == null)
            {
                mField = new MamaMsgField ();
                mField.SelfManageLifeTime(false);
            }
            if (tryField (name, fid, ref mField))
                return mField;
            else
                return valueIfMissing;
        }

        public MamaMsgField getField(
            MamaFieldDescriptor descriptor,
            MamaMsgField valueIfMissing)
        {
            return getField (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public bool[] getVectorBool(
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorBool(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);

            byte[] bRet = new byte[size];
            bool[] ret = new bool[size];
            Marshal.Copy(array, bRet, 0, (int)size);

            for (int i = 0; i <  ret.Length; i++)
            {
                ret[i] = (bRet[i] != 0);
            }

            return ret;
        }

        public bool[] getVectorBool(
            MamaFieldDescriptor descriptor)
        {
            return getVectorBool (null, (ushort)descriptor.getFid());
        }

        public bool[] getVectorBool(
            string name,
            ushort fid,
            bool[] valueIfMissing)
        {
            bool[] result = null;
            if (tryVectorBool (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public bool[] getVectorBool(
            MamaFieldDescriptor descriptor,
            bool[] valueIfMissing)
        {
            return getVectorBool (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public char[] getVectorChar (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorChar(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);

            byte[] bRet = new byte[size];
            Marshal.Copy(array, bRet, 0, (int)size);

            char[] ret = new char[size];

            for (int i = 0; i < ret.Length; i++)
            {
                ret[i] = (char)bRet[i];
            }

            return ret;
        }

        public char[] getVectorChar(
            MamaFieldDescriptor descriptor)
        {
            return getVectorChar (null, (ushort)descriptor.getFid());
        }

        public char[] getVectorChar(
            string name,
            ushort fid,
            char[] valueIfMissing)
        {
            char[] result = null;
            if (tryVectorChar (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public char[] getVectorChar(
            MamaFieldDescriptor descriptor,
            char[] valueIfMissing)
        {
            return getVectorChar (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public sbyte[] getVectorI8 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorI8(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            byte[] bRet = new byte[size];
            sbyte[] ret = new sbyte[size];
            Marshal.Copy(array, bRet, 0, (int)size);

            for (int i = 0; i < ret.Length; i++)
            {
                ret[i] = (sbyte)bRet[i];
            }

            return ret;
        }

        public sbyte[] getVectorI8(
            MamaFieldDescriptor descriptor)
        {
            return getVectorI8 (null, (ushort)descriptor.getFid());
        }

        public sbyte[] getVectorI8(
            string name,
            ushort fid,
            sbyte[] valueIfMissing)
        {
            sbyte[] result = null;
            if (tryVectorI8 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public sbyte[] getVectorI8(
            MamaFieldDescriptor descriptor,
            sbyte[] valueIfMissing)
        {
            return getVectorI8 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public byte[] getVectorU8 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorU8(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            byte[] ret = new byte[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public byte[] getVectorU8(
            MamaFieldDescriptor descriptor)
        {
            return getVectorU8 (null, (ushort)descriptor.getFid());
        }

        public byte[] getVectorU8(
            string name,
            ushort fid,
            byte[] valueIfMissing)
        {
            byte[] result = null;
            if (tryVectorU8 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public byte[] getVectorU8(
            MamaFieldDescriptor descriptor,
            byte[] valueIfMissing)
        {
            return getVectorU8 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public short[] getVectorI16 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorI16(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            short[] ret = new short[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public short[] getVectorI16(
            MamaFieldDescriptor descriptor)
        {
            return getVectorI16 (null, (ushort)descriptor.getFid());
        }

        public short[] getVectorI16(
            string name,
            ushort fid,
            short[] valueIfMissing)
        {
            short[] result = null;
            if (tryVectorI16 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public short[] getVectorI16(
            MamaFieldDescriptor descriptor,
            short[] valueIfMissing)
        {
            return getVectorI16 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public ushort[] getVectorU16 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorU16(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            short[] sRet = new short[size];
            ushort[] ret = new ushort[size];
            Marshal.Copy(array, sRet, 0, (int)size);

            for (int i = 0; i < ret.Length; i++)
            {
                ret[i] = (ushort)sRet[i];
            }

            return ret;
        }

        public ushort[] getVectorU16(
            MamaFieldDescriptor descriptor)
        {
            return getVectorU16 (null, (ushort)descriptor.getFid());
        }

        public ushort[] getVectorU16(
            string name,
            ushort fid,
            ushort[] valueIfMissing)
        {
            ushort[] result = null;
            if (tryVectorU16 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public ushort[] getVectorU16(
            MamaFieldDescriptor descriptor,
            ushort[] valueIfMissing)
        {
            return getVectorU16 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public int[] getVectorI32 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorI32(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            int[] ret = new int[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public int[] getVectorI32(
            MamaFieldDescriptor descriptor)
        {
            return getVectorI32 (null, (ushort)descriptor.getFid());
        }

        public int[] getVectorI32(
            string name,
            ushort fid,
            int[] valueIfMissing)
        {
            int[] result = null;
            if (tryVectorI32 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public int[] getVectorI32(
            MamaFieldDescriptor descriptor,
            int[] valueIfMissing)
        {
            return getVectorI32 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public uint[] getVectorU32 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorU32(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            int[] iRet = new int[size];
            uint[] ret = new uint[size];
            Marshal.Copy(array, iRet, 0, (int)size);

            for (int i = 0; i < ret.Length; i++)
            {
                ret[i] = (uint)iRet[i];
            }

            return ret;
        }

        public uint[] getVectorU32(
            MamaFieldDescriptor descriptor)
        {
            return getVectorU32 (null, (ushort)descriptor.getFid());
        }

        public uint[] getVectorU32(
            string name,
            ushort fid,
            uint[] valueIfMissing)
        {
            uint[] result = null;
            if (tryVectorU32 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public uint[] getVectorU32(
            MamaFieldDescriptor descriptor,
            uint[] valueIfMissing)
        {
            return getVectorU32 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public long[] getVectorI64 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorI64(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            long[] ret = new long[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public long[] getVectorI64(
            MamaFieldDescriptor descriptor)
        {
            return getVectorI64 (null, (ushort)descriptor.getFid());
        }

        public long[] getVectorI64(
            string name,
            ushort fid,
            long[] valueIfMissing)
        {
            long[] result = null;
            if (tryVectorI64 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public long[] getVectorI64(
            MamaFieldDescriptor descriptor,
            long[] valueIfMissing)
        {
            return getVectorI64 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public ulong[] getVectorU64 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorU64(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            long[] lRet = new long[size];
            ulong[] ret = new ulong[size];
            Marshal.Copy(array, lRet, 0, (int)size);

            for (int i = 0; i < ret.Length; i++)
            {
                ret[i] = (ulong)lRet[i];
            }

            return ret;
        }

        public ulong[] getVectorU64(
            MamaFieldDescriptor descriptor)
        {
            return getVectorU64 (null, (ushort)descriptor.getFid());
        }

        public ulong[] getVectorU64(
            string name,
            ushort fid,
            ulong[] valueIfMissing)
        {
            ulong[] result = null;
            if (tryVectorU64 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public ulong[] getVectorU64(
            MamaFieldDescriptor descriptor,
            ulong[] valueIfMissing)
        {
            return getVectorU64 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public float[] getVectorF32 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorF32(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            float[] ret = new float[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public float[] getVectorF32(
            MamaFieldDescriptor descriptor)
        {
            return getVectorF32 (null, (ushort)descriptor.getFid());
        }

        public float[] getVectorF32(
            string name,
            ushort fid,
            float[] valueIfMissing)
        {
            float[] result = null;
            if (tryVectorF32 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public float[] getVectorF32(
            MamaFieldDescriptor descriptor,
            float[] valueIfMissing)
        {
            return getVectorF32 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public double[] getVectorF64 (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorF64(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            double[] ret = new double[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public double[] getVectorF64(
            MamaFieldDescriptor descriptor)
        {
            return getVectorF64 (null, (ushort)descriptor.getFid());
        }

        public double[] getVectorF64(
            string name,
            ushort fid,
            double[] valueIfMissing)
        {
            double[] result = null;
            if (tryVectorF64 (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public double[] getVectorF64(
            MamaFieldDescriptor descriptor,
            double[] valueIfMissing)
        {
            return getVectorF64 (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public string[] getVectorString (
            string name,
            ushort fid)
        {
            // Returns
            string[] ret = null;

            // Try to get the vector
            bool tvs = tryVectorString(name, fid, ref ret);

            // Throw an exception if it could not be found
            if (!tvs)
            {
                throw new MamaException((MamaStatus.mamaStatus)MamaStatus.mamaStatus.MAMA_STATUS_NOT_FOUND);
            }

            return ret;
        }

        public string[] getVectorString(
            MamaFieldDescriptor descriptor)
        {
            return getVectorString (null, (ushort)descriptor.getFid());
        }

        public string[] getVectorString(
            string name,
            ushort fid,
            string[] valueIfMissing)
        {
            string[] result = null;
            if (tryVectorString (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public string[] getVectorString(
            MamaFieldDescriptor descriptor,
            string[] valueIfMissing)
        {
            return getVectorString (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public DateTime[] getVectorDateTime (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorDateTime(nativeHandle, name, fid,ref array, ref size);
            CheckResultCode(code);
            long[] lRet = new long[size];
            DateTime[] dtRet = new DateTime[size];

            for (int i = 0; i < size; i++)
            {
                dtRet[i] = new DateTime(convertFromMamaDateTime ((ulong)lRet[i]));
            }

            return dtRet;
        }

        public DateTime[] getVectorDateTime(
            MamaFieldDescriptor descriptor)
        {
            return getVectorDateTime (null, (ushort)descriptor.getFid());
        }

        public DateTime[] getVectorDateTime(
            string name,
            ushort fid,
            DateTime[] valueIfMissing)
        {
            DateTime[] result = null;
            if (tryVectorDateTime (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public DateTime[] getVectorDateTime(
            MamaFieldDescriptor descriptor,
            DateTime[] valueIfMissing)
        {
            return getVectorDateTime (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public MamaPrice[] getVectorPrice (
            string name,
            ushort fid)
        {
            // Returns
            MamaPrice[] ret = null;

            // Try to get the vector
            bool tvs = tryVectorPrice(name, fid, ref ret);

            // Throw an exception if it could not be found
            if (!tvs)
            {
                throw new MamaException((MamaStatus.mamaStatus)MamaStatus.mamaStatus.MAMA_STATUS_NOT_FOUND);
            }

            return ret;

        }

        public MamaPrice[] getVectorPrice(
            MamaFieldDescriptor descriptor)
        {
            return getVectorPrice (null, (ushort)descriptor.getFid());
        }

        public MamaPrice[] getVectorPrice(
            string name,
            ushort fid,
            MamaPrice[] valueIfMissing)
        {
            MamaPrice[] result = null;
            if (tryVectorPrice (name, fid, ref result))
                return result;
            else
                return valueIfMissing;
        }

        public MamaPrice[] getVectorPrice(
            MamaFieldDescriptor descriptor,
            MamaPrice[] valueIfMissing)
        {
            return getVectorPrice (null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public MamaMsg[] getVectorMsg (
            string name,
            ushort fid)
        {
            MamaMsg[] result = null;
            tryVectorMsgImpl(name, fid, ref result, true);
            return result;
        }

        public MamaMsg[] getVectorMsg(
            MamaFieldDescriptor descriptor)
        {
            return getVectorMsg(null, (ushort)descriptor.getFid());
        }

        public MamaMsg[] getVectorMsg(
            string name,
            ushort fid,
            MamaMsg[] valueIfMissing)
        {
            MamaMsg[] result = null;
            if (tryVectorMsgImpl(name, fid, ref result, false))
                return result;
            else
                return valueIfMissing;
        }

        public MamaMsg[] getVectorMsg(
            MamaFieldDescriptor descriptor,
            MamaMsg[] valueIfMissing)
        {
            return getVectorMsg(null, (ushort)descriptor.getFid(), valueIfMissing);
        }

        public bool tryBool (
            string name,
            ushort fid,
            ref bool result)
        {
            EnsurePeerCreated();
            bool val = false;
            int code = NativeMethods.mamaMsg_getBool(nativeHandle, name, fid, ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryBool (
            MamaFieldDescriptor descriptor,
            ref bool result)
        {
            return tryBool (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryChar(
            string name,
            ushort fid,
            ref char result)
        {
            EnsurePeerCreated();
            char val = '\0';
            int code = NativeMethods.mamaMsg_getChar(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryChar(
            MamaFieldDescriptor descriptor,
            ref char result)
        {
            return tryChar (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryI8(
            string name,
            ushort fid,
            ref sbyte result)
        {
            EnsurePeerCreated();
            sbyte val = 0;
            int code = NativeMethods.mamaMsg_getI8(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryI8(
            MamaFieldDescriptor descriptor,
            ref sbyte result)
        {
            return tryI8 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryU8(
            string name,
            ushort fid,
            ref byte result)
        {
            EnsurePeerCreated();
            byte val = 0;
            int code = NativeMethods.mamaMsg_getU8(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryU8(
            MamaFieldDescriptor descriptor,
            ref byte result)
        {
            return tryU8 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryI16(
            string name,
            ushort fid,
            ref short result)
        {
            EnsurePeerCreated();
            short val = 0;
            int code = NativeMethods.mamaMsg_getI16(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryI16(
            MamaFieldDescriptor descriptor,
            ref short result)
        {
            return tryI16 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryU16(
            string name,
            ushort fid,
            ref ushort result)
        {
            EnsurePeerCreated();
            ushort val = 0;
            int code = NativeMethods.mamaMsg_getU16(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryU16(
            MamaFieldDescriptor descriptor,
            ref ushort result)
        {
            return tryU16 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryU32(
            string name,
            ushort fid,
            ref uint result)
        {
            EnsurePeerCreated();
            uint val = 0;
            int code = NativeMethods.mamaMsg_getU32(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryU32(
            MamaFieldDescriptor descriptor,
            ref uint result)
        {
            return tryU32 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryI32(
            string name,
            ushort fid,
            ref int result)
        {
            return tryI32Impl(name, fid, ref result, false);
        }

        public bool tryI32(
            MamaFieldDescriptor descriptor,
            ref int result)
        {
            return tryI32(null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryI64(
            string name,
            ushort fid,
            ref long result)
        {
            return tryI64Impl(name, fid, ref result, false);
        }

        public bool tryI64(
            MamaFieldDescriptor descriptor,
            ref long result)
        {
            return tryI64(null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryU64(
            string name,
            ushort fid,
            ref ulong result)
        {
            EnsurePeerCreated();
            ulong val = 0;
            int code = NativeMethods.mamaMsg_getU64(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryU64(
            MamaFieldDescriptor descriptor,
            ref ulong result)
        {
            return tryU64 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryF32(
            string name,
            ushort fid,
            ref float result)
        {
            EnsurePeerCreated();
            float val = 0;
            int code = NativeMethods.mamaMsg_getF32(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryF32(
            MamaFieldDescriptor descriptor,
            ref float result)
        {
            return tryF32 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryF64(
            string name,
            ushort fid,
            ref double result)
        {
            EnsurePeerCreated();
            double val = 0;
            int code = NativeMethods.mamaMsg_getF64(nativeHandle, name, fid,ref val);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = val;
            return true;
        }

        public bool tryF64(
            MamaFieldDescriptor descriptor,
            ref double result)
        {
            return tryF64 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryString(
            string name,
            ushort fid,
            ref string result)
        {
            EnsurePeerCreated();
            IntPtr ret = IntPtr.Zero;
            int code = NativeMethods.mamaMsg_getString(nativeHandle, name, fid,ref ret);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            result = Marshal.PtrToStringAnsi(ret);
            return true;
        }

        public bool tryString(
            MamaFieldDescriptor descriptor,
            ref string result)
        {
            return tryString (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryOpaque(
            string name,
            ushort fid,
            ref byte[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getOpaque(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            byte[] val = new byte[size];
            Marshal.Copy(array, val, 0, (int)size);
            result = val;
            return true;
        }

        public bool tryOpaque(
            MamaFieldDescriptor descriptor,
            ref byte[] result)
        {
            return tryOpaque (null, (ushort)descriptor.getFid(), ref result);
        }


        public bool tryDateTime(
            string name,
            ushort fid,
            ref DateTime result)
        {
            return tryDateTimeImpl(name, fid, ref result, false);
        }

        public bool tryDateTime(
            MamaFieldDescriptor descriptor,
            ref DateTime result)
        {
            return tryDateTime(null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryPrice(
            string name,
            ushort fid,
            ref MamaPrice result)
        {
            EnsurePeerCreated();

            if (result == null)
                result = new MamaPrice();

            int code = NativeMethods.mamaMsg_getPrice(nativeHandle, name, fid, result.NativeHandle);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }

            return true;
        }

        public bool tryPrice(
            string name,
            ushort fid,
            MamaPrice result)
        {
            EnsurePeerCreated();

            int code = NativeMethods.mamaMsg_getPrice(nativeHandle, name, fid, result.NativeHandle);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }

            return true;
        }

        public bool tryPrice(
            MamaFieldDescriptor descriptor,
            ref MamaPrice result)
        {
            return tryPrice (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryMsg(
            string name,
            ushort fid,
            ref MamaMsg result)
        {
            EnsurePeerCreated();


            IntPtr myp = IntPtr.Zero;
            int code = NativeMethods.mamaMsg_getMsg(nativeHandle, name, fid, ref myp);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }

            if (result == null)
                result = new MamaMsg();

            result.setNativeHandle(myp);
            return true;
        }

        public bool tryMsg(
            MamaFieldDescriptor descriptor,
            ref MamaMsg result)
        {
            return tryMsg (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorBool(
            string name,
            ushort fid,
            ref bool[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorBool(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }

            byte[] bVal = new byte[size];
            bool[] val = new bool[size];
            Marshal.Copy(array, bVal, 0, (int)size);

            for (int i = 0; i <  val.Length; i++)
            {
                val[i] = (bVal[i] != 0);
            }

            result = val;
            return true;
        }

        public bool tryVectorBool(
            MamaFieldDescriptor descriptor,
            ref bool[] result)
        {
            return tryVectorBool (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorChar (
            string name,
            ushort fid,
            ref char[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorChar(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }

            byte[] bRet = new byte[size];
            Marshal.Copy(array, bRet, 0, (int)size);

            char[] val = new char[size];

            for (int i = 0; i < val.Length; i++)
            {
                val[i] = (char)bRet[i];
            }

            result = val;
            return true;
        }

        public bool tryVectorChar (
            MamaFieldDescriptor descriptor,
            ref char[] result)
        {
            return tryVectorChar (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorI8 (
            string name,
            ushort fid,
            ref sbyte[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorI8(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            byte[] bVal = new byte[size];
            sbyte[] val = new sbyte[size];
            Marshal.Copy(array, bVal, 0, (int)size);

            for (int i = 0; i < val.Length; i++)
            {
                val[i] = (sbyte)bVal[i];
            }

            result = val;
            return true;
        }

        public bool tryVectorI8 (
            MamaFieldDescriptor descriptor,
            ref sbyte[] result)
        {
            return tryVectorI8 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorU8 (
            string name,
            ushort fid,
            ref byte[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorU8(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            byte[] val = new byte[size];
            Marshal.Copy(array, val, 0, (int)size);

            result = val;
            return true;
        }

        public bool tryVectorU8 (
            MamaFieldDescriptor descriptor,
            ref byte[] result)
        {
            return tryVectorU8 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorI16 (
            string name,
            ushort fid,
            ref short[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorI16(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            short[] val = new short[size];
            Marshal.Copy(array, val, 0, (int)size);

            result = val;
            return true;
        }

        public bool tryVectorI16 (
            MamaFieldDescriptor descriptor,
            ref short[] result)
        {
            return tryVectorI16 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorU16 (
            string name,
            ushort fid,
            ref ushort[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorU16(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            short[] sVal = new short[size];
            ushort[] val = new ushort[size];
            Marshal.Copy(array, sVal, 0, (int)size);

            for (int i = 0; i < val.Length; i++)
            {
                val[i] = (ushort)sVal[i];
            }

            result = val;
            return true;
        }

        public bool tryVectorU16 (
            MamaFieldDescriptor descriptor,
            ref ushort[] result)
        {
            return tryVectorU16 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorI32 (
            string name,
            ushort fid,
            ref int[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorI32(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            int[] val = new int[size];
            Marshal.Copy(array, val, 0, (int)size);

            result = val;
            return true;
        }

        public bool tryVectorI32 (
            MamaFieldDescriptor descriptor,
            ref int[] result)
        {
            return tryVectorI32 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorU32 (
            string name,
            ushort fid,
            ref uint[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorU32(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            int[] iVal = new int[size];
            uint[] val = new uint[size];
            Marshal.Copy(array, iVal, 0, (int)size);

            for (int i = 0; i < val.Length; i++)
            {
                val[i] = (uint)iVal[i];
            }

            result = val;
            return true;
        }

        public bool tryVectorU32 (
            MamaFieldDescriptor descriptor,
            ref uint[] result)
        {
            return tryVectorU32 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorI64 (
            string name,
            ushort fid,
            ref long[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorI64(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            long[] val = new long[size];
            Marshal.Copy(array, val, 0, (int)size);

            result = val;
            return true;
        }

        public bool tryVectorI64 (
            MamaFieldDescriptor descriptor,
            ref long[] result)
        {
            return tryVectorI64 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorU64 (
            string name,
            ushort fid,
            ref ulong[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorU64(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            long[] lVal = new long[size];
            ulong[] val = new ulong[size];
            Marshal.Copy(array, lVal, 0, (int)size);

            for (int i = 0; i < val.Length; i++)
            {
                val[i] = (ulong)lVal[i];
            }

            result = val;
            return true;
        }

        public bool tryVectorU64 (
            MamaFieldDescriptor descriptor,
            ref ulong[] result)
        {
            return tryVectorU64 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorF32 (
            string name,
            ushort fid,
            ref float[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorF32(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            float[] val = new float[size];
            Marshal.Copy(array, val, 0, (int)size);

            result = val;
            return true;
        }

        public bool tryVectorF32 (
            MamaFieldDescriptor descriptor,
            ref float[] result)
        {
            return tryVectorF32 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorF64 (
            string name,
            ushort fid,
            ref double[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorF64(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            double[] val = new double[size];
            Marshal.Copy(array, val, 0, (int)size);

            result = val;
            return true;
        }

        public bool tryVectorF64 (
            MamaFieldDescriptor descriptor,
            ref double[] result)
        {
            return tryVectorF64 (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorString (
            MamaFieldDescriptor descriptor,
            ref string[] result)
        {
            return tryVectorString (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorDateTime (
            string name,
            ushort fid,
            ref DateTime[] result)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorDateTime(nativeHandle, name, fid,ref array, ref size);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }
            long[] lVal = new long[size];
            DateTime[] dtVal = new DateTime[size];

            for (int i = 0; i < size; i++)
            {
                dtVal[i] = new DateTime(convertFromMamaDateTime ((ulong)lVal[i]));
            }

            result = dtVal;
            return true;
        }

        public bool tryVectorDateTime (
            MamaFieldDescriptor descriptor,
            ref DateTime[] result)
        {
            return tryVectorDateTime (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorPrice (
            MamaFieldDescriptor descriptor,
            ref MamaPrice[] result)
        {
            return tryVectorPrice (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryVectorMsg(
            string name,
            ushort fid,
            ref MamaMsg[] result)
        {
            return tryVectorMsgImpl(name, fid, ref result, false);
        }

        public bool tryVectorMsg(
            MamaFieldDescriptor descriptor,
            ref MamaMsg[] result)
        {
            return tryVectorMsgImpl (null, (ushort)descriptor.getFid(), ref result, false);
        }

        public bool tryField(
            string name,
            ushort fid,
            ref MamaMsgField result)
        {
            EnsurePeerCreated();

            IntPtr myP = IntPtr.Zero;
            int code = NativeMethods.mamaMsg_getField(nativeHandle, name, fid, ref myP);
            if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                return false;
            }

            if (mField == null)
            {
                mField = new MamaMsgField();
                mField.SelfManageLifeTime(false);
            }

            mField.setNativeHandle(myP);
            result = mField;
            return true;
        }

        public bool tryField(
            MamaFieldDescriptor descriptor,
            ref MamaMsgField result)
        {
            return tryField (null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryI32(
            string name,
            ushort fid,
            ref NullableInt result)
        {
            int val = 0;
            bool ret = tryI32(name, fid, ref val);
            if (ret)
            {
                result.Value = val;
            }
            return ret;
        }

        public bool tryI32(
            MamaFieldDescriptor descriptor,
            ref NullableInt result)
        {
            return tryI32(null, (ushort)descriptor.getFid(), ref result);
        }

        public bool tryI64(
            string name,
            ushort fid,
            ref NullableLong result)
        {
            long val = 0;
            bool ret = tryI64(name, fid, ref val);
            if (ret)
            {
                result.Value = val;
            }
            return ret;
        }

        public bool tryI64(
            MamaFieldDescriptor descriptor,
            ref NullableLong result)
        {
            return tryI64(null, (ushort)descriptor.getFid(), ref result);
        }

        private bool tryI32Impl(
            string name,
            ushort fid,
            ref int result,
            bool throwOnError)
        {
            EnsurePeerCreated();
            int ret = 0;
            int code = NativeMethods.mamaMsg_getI32(nativeHandle, name, fid, ref ret);
            if ((MamaStatus.mamaStatus)code != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                if (throwOnError)
                {
                    CheckResultCode(code);
                }
                else
                {
                    return false;
                }
            }
            result = ret;
            return true;
        }

        private bool tryI64Impl(
            string name,
            ushort fid,
            ref long result,
            bool throwOnError)
        {
            EnsurePeerCreated();
            long ret = 0;
            int code = NativeMethods.mamaMsg_getI64(nativeHandle, name, fid, ref ret);
            if ((MamaStatus.mamaStatus)code != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                if (throwOnError)
                {
                    CheckResultCode(code);
                }
                else
                {
                    return false;
                }
            }
            result = ret;
            return true;
        }

        private bool tryDateTimeImpl(
            string name,
            ushort fid,
            ref DateTime result,
            bool throwOnError)
        {
            EnsurePeerCreated();
            double dateTimeSec = 0;
            int code = NativeMethods.mamaMsg_getDateTimeSeconds(nativeHandle, name, fid, ref dateTimeSec);
            if ((MamaStatus.mamaStatus)code != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                if (throwOnError)
                {
                    CheckResultCode(code);
                }
                else
                {
                    return false;
                }
            }

            long ret = (long)((dateTimeSec * (double)TimeSpan.TicksPerSecond) + 621355968000000000.0);
            result = new DateTime(ret);
            return true;
        }

        private bool tryMsgImpl(
            string name,
            ushort fid,
            ref MamaMsg result,
            bool throwOnError)
        {
            EnsurePeerCreated();

            IntPtr myP = IntPtr.Zero;

            int code = NativeMethods.mamaMsg_getMsg(nativeHandle, name, fid, ref myP);

            if (throwOnError)
            {
                CheckResultCode(code);
            }
            else
            {
                if (CheckResultCodeIgnoreNotFound(code) != MamaStatus.mamaStatus.MAMA_STATUS_OK)
                    return false;
            }


            if (result == null)
                result = new MamaMsg();

            result.setNativeHandle(myP);

            return true;
        }

        private bool tryVectorMsgImpl(
            string name,
            ushort fid,
            ref MamaMsg[] result,
            bool throwOnError)
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsg_getVectorMsg(nativeHandle,name,fid,ref array, ref size);
            if ((MamaStatus.mamaStatus)code != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                if (throwOnError)
                {
                    CheckResultCode(code);
                }
                else
                {
                    return false;
                }
            }

            MamaMsg[] ret;
            if (size == 1)
            {
                if (tempMsgVector == null)
                {
                    tempMsgVector = new MamaMsg[1];
                    tempMsgVector[0] = new MamaMsg();
                    tempMsgVector[0].SelfManageLifeTime(false);
                }

                 ret = tempMsgVector;
                 ret[0].setNativeHandle(Marshal.ReadIntPtr(array));
            }
            else
            {
                ret = new MamaMsg[size];

                for (int i = 0 ; i < size; i++)
                {
                    ret[i] = new MamaMsg(Marshal.ReadIntPtr(array, i * Marshal.SizeOf(typeof(IntPtr))));
                }
            }

            result = ret;
            return true;
        }



        public int getNumFields()
        {
            EnsurePeerCreated();
            int num = 0;
            int code = NativeMethods.mamaMsg_getNumFields(nativeHandle,ref num);
            CheckResultCode(code);
            return num;
        }

        public override string ToString()
        {
            EnsurePeerCreated();
            string strRet =  Marshal.PtrToStringAnsi(NativeMethods.mamaMsg_toString(nativeHandle));
            string val;
            val = string.Copy(strRet);
            return val;
        }

        public string ToJsonString()
        {
            EnsurePeerCreated();
            string strRet =  Marshal.PtrToStringAnsi(NativeMethods.mamaMsg_toJsonString(nativeHandle));
            string val;
            val = string.Copy(strRet);
            return val;
        }

        public string ToJsonString(MamaDictionary dictionary)
        {
            EnsurePeerCreated();
            IntPtr dictHandle = dictionary != null ? dictionary.NativeHandle : IntPtr.Zero;
            string strRet =  Marshal.PtrToStringAnsi(NativeMethods.mamaMsg_toJsonStringWithDictionary(nativeHandle, dictHandle));
            string val;
            val = string.Copy(strRet);
            return val;
        }

        public string ToNormalizedString()
        {
            EnsurePeerCreated();
            string strRet =  Marshal.PtrToStringAnsi(NativeMethods.mamaMsg_toNormalizedString(nativeHandle));
            string val;
            val = string.Copy(strRet);
            return val;
        }

        public int getEntitleCode()
        {
            EnsurePeerCreated();
            int result = 0;
            int code = NativeMethods.mamaMsg_getEntitleCode(nativeHandle, ref result);
            CheckResultCode(code);
            return result;
        }

        public uint getSeqNum()
        {
            EnsurePeerCreated();
            uint seqNum = 0;
            int code = NativeMethods.mamaMsg_getSeqNum(nativeHandle,ref seqNum);
            CheckResultCode(code);
            return seqNum;
        }

        public mamaMsgType typeForMsg ()
        {
            EnsurePeerCreated();
            return (mamaMsgType)NativeMethods.mamaMsgType_typeForMsg (nativeHandle);
        }



        public string stringForMsg ()
        {
            EnsurePeerCreated();
            return Marshal.PtrToStringAnsi(NativeMethods.mamaMsgType_stringForMsg(nativeHandle));
        }

        public string stringForType (mamaMsgType type)
        {
            EnsurePeerCreated();
            return Marshal.PtrToStringAnsi(NativeMethods.mamaMsgType_stringForType((int)type));
        }

        public string stringForStatus (mamaMsgStatus type)
        {
            EnsurePeerCreated();
            return Marshal.PtrToStringAnsi(NativeMethods.mamaStatus_stringForStatus((int)type));
        }

        public string getFieldAsString (
            string name,
            ushort fid)
        {
            EnsurePeerCreated();
            StringBuilder val = new StringBuilder(255);
            int code = NativeMethods.mamaMsg_getFieldAsString(nativeHandle, name, fid,val,255);
            CheckResultCode(code);
            return val.ToString();
        }

        public bool isFromInbox
        {
            get
            {
                int val = NativeMethods.mamaMsg_isFromInbox(nativeHandle);
                return val != 0;
            }
        }

        public void begin (ref MamaMsgIterator iterator)
        {
            NativeMethods.mamaMsgIterator_associate (iterator.NativeHandle, nativeHandle);

            IntPtr tempfield = NativeMethods.mamaMsgIterator_begin (iterator.NativeHandle);
            iterator.SetField (tempfield);
            iterator++;
        }

        public void end (ref MamaMsgIterator iterator)
        {
            IntPtr field = NativeMethods.mamaMsgIterator_end (iterator.NativeHandle);
            iterator.SetField (field);
        }

        private MamaMsgField mField = null;
        private MamaMsg[] tempMsgVector = null;
        private MamaPrice price_ = null;
        private MamaMsg msg_ = null;
        private CallbackForwarder forwarder = null;
        private CallbackForwarder.MamaMessageIteratorDelegate callback = null;
        private IntPtr buffer = IntPtr.Zero;
        private byte[] myByteBuffer = null;
        #region Implementation details
        private class CallbackForwarder
        {
            public delegate void MamaMessageIteratorDelegate(IntPtr msg, IntPtr field, IntPtr closure);

            public CallbackForwarder(
                MamaMsg sender,
                MamaMsgFieldIterator callback,
                object closure)
            {
                this.mSender = sender;
                this.mCallback = callback;
                this.mClosure = closure;
            }

            internal void OnField(IntPtr msg, IntPtr field, IntPtr closure)
            {
                if (mCallback != null)
                {
                    if (mField == null)
                    {
                        mField = new MamaMsgField(field);
                    }
                    else
                    {
                        mField.setNativeHandle(field);
                    }
                    mCallback.onField(mSender, mField, mClosure);
                }
            }


            public MamaMsgFieldIterator mCallback;
            private MamaMsg mSender;
            private MamaMsgField mField;
            public object mClosure;

        }

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_iterateFields(IntPtr msg,
                CallbackForwarder.MamaMessageIteratorDelegate callback,
                IntPtr dict,
                IntPtr closure);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_create(ref IntPtr mamaMsg);
            #pragma warning disable 0618
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_createForPayload(ref IntPtr mamaMsg, mamaPayloadType id);
            #pragma warning restore 0618
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_createForPayload(ref IntPtr mamaMsg, char id);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_createForPayloadBridge(ref IntPtr mamaMsg, IntPtr mamaPayloadBridge);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_copy (IntPtr mamaMsgSrc,
                ref IntPtr mamaMsgCopy );
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_clear (IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_destroy (IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getByteSize (IntPtr mamaMsg,
                ref int size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addBool(IntPtr mamaMsg,
                string name,
                ushort fid,
                bool val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addChar(IntPtr mamaMsg,
                string name,
                ushort fid,
                char val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addI8(IntPtr mamaMsg,
                string name,
                ushort fid,
                sbyte val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addU8(IntPtr mamaMsg,
                string name,
                ushort fid,
                byte val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addI16(IntPtr mamaMsg,
                string name,
                ushort fid,
                short val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addU16(IntPtr mamaMsg,
                string name,
                ushort fid,
                ushort val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addI32(IntPtr mamaMsg,
                string name,
                ushort fid,
                int val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addU32(IntPtr mamaMsg,
                string name,
                ushort fid,
                uint val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addI64(IntPtr mamaMsg,
                string name,
                ushort fid,
                long val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addU64(IntPtr mamaMsg,
                string name,
                ushort fid,
                ulong val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addF32(IntPtr mamaMsg,
                string name,
                ushort fid,
                float val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addF64(IntPtr mamaMsg,
                string name,
                ushort fid,
                double val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addString(IntPtr mamaMsg,
                string name,
                ushort fid,
                string val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addOpaque (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addDateTime (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref ulong val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addPrice (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addMsg(IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorBool (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorChar (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorI8 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorU8 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorI16 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorU16 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorI32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorU32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorI64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorU64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorF32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorF64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorString (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorMsg(IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorDateTime (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_addVectorPrice (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateBool(IntPtr mamaMsg,
                string name,
                ushort fid,
                bool val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateChar(IntPtr mamaMsg,
                string name,
                ushort fid,
                char val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateI8(IntPtr mamaMsg,
                string name,
                ushort fid,
                sbyte val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateU8(IntPtr mamaMsg,
                string name,
                ushort fid,
                byte val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateI16(IntPtr mamaMsg,
                string name,
                ushort fid,
                short val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateU16(IntPtr mamaMsg,
                string name,
                ushort fid,
                ushort val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateI32(IntPtr mamaMsg,
                string name,
                ushort fid,
                int val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateU32(IntPtr mamaMsg,
                string name,
                ushort fid,
                uint val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateI64(IntPtr mamaMsg,
                string name,
                ushort fid,
                long val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateU64(IntPtr mamaMsg,
                string name,
                ushort fid,
                ulong val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateF32(IntPtr mamaMsg,
                string name,
                ushort fid,
                float val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateF64(IntPtr mamaMsg,
                string name,
                ushort fid,
                double val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateString(IntPtr mamaMsg,
                string name,
                ushort fid,
                string val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateOpaque(IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateDateTime(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref ulong val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updatePrice(IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorBool (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorChar (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorI8 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorU8 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorI16 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorU16 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorI32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorU32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorI64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorU64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorF32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorF64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorString (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorDateTime (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorPrice (IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_updateVectorMsg(IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr val,
                int numElements);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getBool(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref bool result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getChar(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref char result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getI8(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref sbyte result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getU8(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref byte result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getI16(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref short result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getU16(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref ushort result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getI32(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref int result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getU32(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref uint result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getI64(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref long result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getU64(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref ulong result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getF32(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref float result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getF64(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref double result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getString(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getOpaque(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getField(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getDateTime(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref ulong result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getDateTimeMSec(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref ulong result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getDateTimeSeconds(IntPtr mamaMsg,
                string name,
                ushort fid,
                ref double result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getPrice(IntPtr mamaMsg,
                string name,
                ushort fid,
                IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getMsg (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorBool (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorChar (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorI8 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorU8 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorI16 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorU16 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorI32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorU32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorI64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorU64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorF32 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorF64 (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorString (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorDateTime (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorPrice (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getVectorMsg (IntPtr mamaMsg,
                string name,
                ushort fid,
                ref IntPtr result,
                ref uint resultLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getNumFields(IntPtr mamaMsg,
                ref int numFields);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsg_toString(IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsg_toJsonString(IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsg_toJsonStringWithDictionary(IntPtr mamaMsg, IntPtr dictionary);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsg_toNormalizedString(IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getEntitleCode(IntPtr mamaMsg,
                ref int code);
            #pragma warning disable 0618
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getPayloadType(IntPtr mamaMsg,
                ref mamaPayloadType payload);
            #pragma warning restore 0618
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getSeqNum(IntPtr mamaMsg,
                ref uint seqNum);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgType_typeForMsg (IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsgType_stringForMsg (IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsgType_stringForType (int type);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaStatus_stringForStatus (int type);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getFieldAsString (IntPtr mamaMsg,
                string fieldName,
                ushort fid,
                StringBuilder  buf,
                int length);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_isFromInbox(IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_detach(IntPtr mamaMsg);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaDateTime_setEpochTimeMilliseconds(ref ulong dateTime,
                ulong milliseconds);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaDateTime_setEpochTimeF64(ref ulong dateTime,
                double seconds);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaDateTime_getEpochTimeMilliseconds(ref ulong dateTime,
                ref ulong milliseconds);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaDateTime_getEpochTimeSeconds(ref ulong dateTime,
                ref double seconds);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_create(ref IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_destroy(IntPtr  nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsgIterator_begin(IntPtr mamaMsgIterator);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsgIterator_end(IntPtr mamaMsgIterator);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaMsgIterator_associate(IntPtr nativeHandle, IntPtr mamaMsgIterator);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_getByteBuffer(IntPtr nativeHandle, ref IntPtr array, ref int size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_createFromByteBuffer(ref IntPtr nativeHandle, IntPtr array, int size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsg_createForBridgeFromByteBuffer(ref IntPtr nativeHandle, IntPtr array, int size, IntPtr nativeBridgeHandle);

        }

        #endregion // Implementation details


        public void addVectorString(
            string name,
            ushort fid,
            string[] val)
        {
            // Check that the arguments are valid
            if (val == null)
            {
                throw new ArgumentNullException("val");
            }

            // Check the array length
            int numberStrings = val.Length;
            if (numberStrings < 1)
            {
                throw new ArgumentOutOfRangeException("val");
            }

            // Verify that the native message has been created
            EnsurePeerCreated();

            // Allocate memory on the global native heap to pass the messages to the native layer
            IntPtr globalHeapMemory = Marshal.AllocHGlobal(numberStrings * IntPtr.Size);
            try
            {
                // Create a new array to hold all of the native handles
                IntPtr[] nativeHandleArray = new IntPtr[numberStrings];
                try
                {
                    // Copy the strings over with a conversion to ANSI
                    for (int nextItem = 0; nextItem < numberStrings; nextItem++)
                    {
                        nativeHandleArray[nextItem] = Marshal.StringToHGlobalAnsi(val[nextItem]);
                    }

                    // Copy this to the global heap
                    Marshal.Copy(nativeHandleArray, 0, globalHeapMemory, numberStrings);

                    // Call the native function
                    int code = NativeMethods.mamaMsg_addVectorString(nativeHandle, name, fid, globalHeapMemory, numberStrings);
                    CheckResultCode(code);
                }

                finally
                {
                    // Free the individual strings
                    foreach (IntPtr nativeHandle in nativeHandleArray)
                    {
                        if (nativeHandle != null)
                        {
                            Marshal.FreeHGlobal(nativeHandle);
                        }
                    }
                }
            }

            finally
            {
                // Free the memory on the global heap now that the function has completed
                Marshal.FreeHGlobal(globalHeapMemory);
            }
        }

        public void addVectorPrice(
            string name,
            ushort fid,
            MamaPrice[] val)
        {
            // Check that the arguments are valid
            if (val == null)
            {
                throw new ArgumentNullException("val");
            }

            // Check the array length
            int numberPrices = val.Length;
            if (numberPrices < 1)
            {
                throw new ArgumentOutOfRangeException("val");
            }

            // Verify that the native message has been created
            EnsurePeerCreated();

            // Allocate memory on the global native heap to pass the messages to the native layer
            IntPtr globalHeapMemory = Marshal.AllocHGlobal(numberPrices * IntPtr.Size);
            try
            {
                // Create a new array to hold all of the native handles
                IntPtr[] nativeHandleArray = new IntPtr[numberPrices];

                // Copy the prices over
                for (int nextItem = 0; nextItem < numberPrices; nextItem++)
                {
                    nativeHandleArray[nextItem] = val[nextItem].NativeHandle;
                }

                // Copy this to the global heap
                Marshal.Copy(nativeHandleArray, 0, globalHeapMemory, numberPrices);

                // Call the native function
                int code = NativeMethods.mamaMsg_addVectorPrice(nativeHandle, name, fid, globalHeapMemory, numberPrices);
                CheckResultCode(code);
            }

            finally
            {
                // Free the memory on the global heap now that the function has completed
                Marshal.FreeHGlobal(globalHeapMemory);
            }
        }

        public void addVectorMsg(
            string name,
            ushort fid,
            MamaMsg[] val)
        {
            // Check that the arguments are valid
            if (val == null)
            {
                throw new ArgumentNullException("val");
            }

            // Check the array length
            int numberMessages = val.Length;
            if (numberMessages < 1)
            {
                throw new ArgumentOutOfRangeException("val");
            }

            // Verify that the native message has been created
            EnsurePeerCreated();

            // Allocate memory on the global native heap to pass the messages to the native layer
            IntPtr globalHeapMemory = Marshal.AllocHGlobal(numberMessages * IntPtr.Size);
            try
            {
                // Create a new array to hold all of the native handles
                IntPtr[] nativeHandleArray = new IntPtr[numberMessages];

                // Copy the native handles over
                for (int nextItem = 0; nextItem < numberMessages; nextItem++)
                {
                    nativeHandleArray[nextItem] = val[nextItem].nativeHandle;
                }

                // Copy this to the global heap
                Marshal.Copy(nativeHandleArray, 0, globalHeapMemory, numberMessages);

                // Call the native function
                int code = NativeMethods.mamaMsg_addVectorMsg(nativeHandle, name, fid, globalHeapMemory, numberMessages);
                CheckResultCode(code);
            }
            finally
            {
                // Free the memory on the global heap now that the function has completed
                Marshal.FreeHGlobal(globalHeapMemory);
            }
        }

        public void updateVectorString(
            string name,
            ushort fid,
            string[] val)
        {
            // Check that the arguments are valid
            if (val == null)
            {
                throw new ArgumentNullException("val");
            }

            // Check the array length
            int numberStrings = val.Length;
            if (numberStrings < 1)
            {
                throw new ArgumentOutOfRangeException("val");
            }

            // Verify that the native message has been created
            EnsurePeerCreated();

            // Allocate memory on the global native heap to pass the messages to the native layer
            IntPtr globalHeapMemory = Marshal.AllocHGlobal(numberStrings * IntPtr.Size);
            try
            {
                // Create a new array to hold all of the native handles
                IntPtr[] nativeHandleArray = new IntPtr[numberStrings];
                try
                {
                    // Copy the strings over with a conversion to ANSI
                    for (int nextItem = 0; nextItem < numberStrings; nextItem++)
                    {
                        nativeHandleArray[nextItem] = Marshal.StringToHGlobalAnsi(val[nextItem]);
                    }

                    // Copy this to the global heap
                    Marshal.Copy(nativeHandleArray, 0, globalHeapMemory, numberStrings);

                    // Call the native function
                    int code = NativeMethods.mamaMsg_updateVectorString(nativeHandle, name, fid, globalHeapMemory, numberStrings);
                    CheckResultCode(code);
                }

                finally
                {
                    // Free the individual strings
                    foreach (IntPtr nativeHandle in nativeHandleArray)
                    {
                        if (nativeHandle != null)
                        {
                            Marshal.FreeHGlobal(nativeHandle);
                        }
                    }
                }
            }

            finally
            {
                // Free the memory on the global heap now that the function has completed
                Marshal.FreeHGlobal(globalHeapMemory);
            }
        }

        public void updateVectorPrice(
            string name,
            ushort fid,
            MamaPrice[] val)
        {
            // Check that the arguments are valid
            if (val == null)
            {
                throw new ArgumentNullException("val");
            }

            // Check the array length
            int numberPrices = val.Length;
            if (numberPrices < 1)
            {
                throw new ArgumentOutOfRangeException("val");
            }

            // Verify that the native message has been created
            EnsurePeerCreated();

            // Allocate memory on the global native heap to pass the messages to the native layer
            IntPtr globalHeapMemory = Marshal.AllocHGlobal(numberPrices * IntPtr.Size);
            try
            {
                // Create a new array to hold all of the native handles
                IntPtr[] nativeHandleArray = new IntPtr[numberPrices];

                // Copy the prices over
                for (int nextItem = 0; nextItem < numberPrices; nextItem++)
                {
                    nativeHandleArray[nextItem] = val[nextItem].NativeHandle;
                }

                // Copy this to the global heap
                Marshal.Copy(nativeHandleArray, 0, globalHeapMemory, numberPrices);

                // Call the native function
                int code = NativeMethods.mamaMsg_updateVectorPrice(nativeHandle, name, fid, globalHeapMemory, numberPrices);
                CheckResultCode(code);
            }

            finally
            {
                // Free the memory on the global heap now that the function has completed
                Marshal.FreeHGlobal(globalHeapMemory);
            }
        }

        public void updateVectorMsg(
            string name,
            ushort fid,
            MamaMsg[] val)
        {
            // Check that the arguments are valid
            if (val == null)
            {
                throw new ArgumentNullException("val");
            }

            // Check the array length
            int numberMessages = val.Length;
            if (numberMessages < 1)
            {
                throw new ArgumentOutOfRangeException("val");
            }

            // Verify that the native message has been created
            EnsurePeerCreated();

            // Allocate memory on the global native heap to pass the messages to the native layer
            IntPtr globalHeapMemory = Marshal.AllocHGlobal(numberMessages * IntPtr.Size);
            try
            {
                // Create a new array to hold all of the native handles
                IntPtr[] nativeHandleArray = new IntPtr[numberMessages];

                // Copy the native handles over
                for (int nextItem = 0; nextItem < numberMessages; nextItem++)
                {
                    nativeHandleArray[nextItem] = val[nextItem].nativeHandle;
                }

                // Copy this to the global heap
                Marshal.Copy(nativeHandleArray, 0, globalHeapMemory, numberMessages);

                // Call the native function
                int code = NativeMethods.mamaMsg_updateVectorMsg(nativeHandle, name, fid, globalHeapMemory, numberMessages);
                CheckResultCode(code);
            }

            finally
            {
                // Free the memory on the global heap now that the function has completed
                Marshal.FreeHGlobal(globalHeapMemory);
            }
        }

        public bool tryVectorString(
            string name,
            ushort fid,
            ref string[] result)
        {
            // Returns
            bool ret = false;

            // The following arraylist wil contain all of the strings
            ArrayList retStrings = new ArrayList();

            // Enusre that the native message has been created
            EnsurePeerCreated();

            // Get the strings from the native message
            IntPtr globalMemoryPointer = IntPtr.Zero;
            uint numberElements = 0;
            int code = NativeMethods.mamaMsg_getVectorString(nativeHandle, name, fid, ref globalMemoryPointer, ref numberElements);
            if ((MamaStatus.mamaStatus)code == MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                // Only continue if there are actually any strings in the array
                if (numberElements > 0)
                {
                    // Create a new array of pointers to hold the native string pointers
                    IntPtr[] nativeStringArray = new IntPtr[numberElements];

                    // Copy the entire array over
                    Marshal.Copy(globalMemoryPointer, nativeStringArray, 0, (int)numberElements);

                    // Extract each string, one at a time
                    foreach (IntPtr nextNativeString in nativeStringArray)
                    {
                        retStrings.Add(Marshal.PtrToStringAnsi(nextNativeString));
                    }
                }

                // The function has succeeded even if there were 0 strings
                ret = true;
            }

            // Return the array of strings
            result = (string[])retStrings.ToArray(typeof(string));

            return ret;
        }

        public bool tryVectorPrice(
            string name,
            ushort fid,
            ref MamaPrice[] result)
        {
            // Returns
            bool ret = false;

            // The following arraylist wil contain all of the prices
            ArrayList retPrices = new ArrayList();

            // Enusre that the native message has been created
            EnsurePeerCreated();

            // Get the strings from the native message
            IntPtr globalMemoryPointer = IntPtr.Zero;
            uint numberElements = 0;
            int code = NativeMethods.mamaMsg_getVectorPrice(nativeHandle, name, fid, ref globalMemoryPointer, ref numberElements);
            if ((MamaStatus.mamaStatus)code == MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                // Only continue if there are actually any prices in the array
                if (numberElements > 0)
                {
                    // Create a new array of pointers to hold the native price pointers
                    IntPtr[] nativePriceArray = new IntPtr[numberElements];

                    // Copy the entire array over
                    Marshal.Copy(globalMemoryPointer, nativePriceArray, 0, (int)numberElements);

                    // Extract each price, one at a time
                    foreach (IntPtr nextNativePrice in nativePriceArray)
                    {
                        retPrices.Add(new MamaPrice(nextNativePrice));
                    }
                }

                // The function has succeeded even if there were 0 strings
                ret = true;
            }

            // Return the array of strings
            result = (MamaPrice[])retPrices.ToArray(typeof(MamaPrice));

            return ret;
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
