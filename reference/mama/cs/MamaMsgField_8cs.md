---
title: cs/MamaMsgField.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaMsgField.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaMsgField](classWombat_1_1MamaMsgField.html)** <br>Class that represents a field in a [MamaMsg](classWombat_1_1MamaMsg.html) |




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
using System.Text;

namespace Wombat
{

   public enum mamaFieldType
   {
      MAMA_FIELD_TYPE_MSG         =   1,

      MAMA_FIELD_TYPE_OPAQUE      =   7,

      MAMA_FIELD_TYPE_STRING      =   8,

      MAMA_FIELD_TYPE_BOOL        =   9,

      MAMA_FIELD_TYPE_CHAR        =   10,

      MAMA_FIELD_TYPE_I8          =   14,

      MAMA_FIELD_TYPE_U8          =   15,

      MAMA_FIELD_TYPE_I16         =   16,

      MAMA_FIELD_TYPE_U16         =   17,

      MAMA_FIELD_TYPE_I32         =   18,

      MAMA_FIELD_TYPE_U32         =   19,

      MAMA_FIELD_TYPE_I64         =   20,

      MAMA_FIELD_TYPE_U64         =   21,

      MAMA_FIELD_TYPE_F32         =   24,

      MAMA_FIELD_TYPE_F64         =   25,

      MAMA_FIELD_TYPE_TIME        =   26,

       MAMA_FIELD_TYPE_PRICE       =   27,

      MAMA_FIELD_TYPE_VECTOR_I8     =   34,

       MAMA_FIELD_TYPE_VECTOR_U8     =   35,

       MAMA_FIELD_TYPE_VECTOR_I16    =   36,

       MAMA_FIELD_TYPE_VECTOR_U16    =   37,

       MAMA_FIELD_TYPE_VECTOR_I32    =   38,

       MAMA_FIELD_TYPE_VECTOR_U32    =   39,

       MAMA_FIELD_TYPE_VECTOR_I64    =   40,

       MAMA_FIELD_TYPE_VECTOR_U64    =   41,

       MAMA_FIELD_TYPE_VECTOR_F32    =   44,

       MAMA_FIELD_TYPE_VECTOR_F64    =   45,

       MAMA_FIELD_TYPE_VECTOR_STRING =   46,

       MAMA_FIELD_TYPE_VECTOR_MSG    =   47,

       MAMA_FIELD_TYPE_VECTOR_TIME   =   48,

       MAMA_FIELD_TYPE_VECTOR_PRICE  =   49,

       MAMA_FIELD_TYPE_QUANTITY     =   50,

       MAMA_FIELD_TYPE_COLLECTION  =   99,

       MAMA_FIELD_TYPE_UNKNOWN     =   100
   }
    public class MamaMsgField : MamaWrapper
    {
        internal MamaMsgField(IntPtr nativeHandle) : base(nativeHandle)
        {
            int code;
            code = NativeMethods.mamaDateTime_create(ref dateTime_);
            CheckResultCode(code);
        }

        public MamaMsgField()
        {
        }

        public void destroy()
        {
            int code;
            code = NativeMethods.mamaDateTime_destroy(dateTime_);
            CheckResultCode(code);
            Dispose();
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return (MamaStatus.mamaStatus)NativeMethods.mamaMsgField_destroy(nativeHandle);
        }


        public mamaFieldType getType ()
        {
            EnsurePeerCreated();
            int type = 0;
            int code = NativeMethods.mamaMsgField_getType(nativeHandle, ref type);
            CheckResultCode(code);
            return (mamaFieldType)type;
        }

        public MamaFieldDescriptor getDescriptor ()
        {
            EnsurePeerCreated();
            IntPtr descriptor = IntPtr.Zero;
            int code = NativeMethods.mamaMsgField_getDescriptor(nativeHandle, ref descriptor);
            CheckResultCode(code);
            return new MamaFieldDescriptor(descriptor);
        }

        public string getAsString ()
        {
            EnsurePeerCreated();
            StringBuilder val = new StringBuilder(255);
            int code = NativeMethods.mamaMsgField_getAsString(nativeHandle, val, 255);
            CheckResultCode(code);
            return val.ToString();
        }


        public int getFid ()
        {
            EnsurePeerCreated();
            ushort ret = 0;
            int code = NativeMethods.mamaMsgField_getFid(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public string getName ()
        {
            EnsurePeerCreated();
            IntPtr ret = IntPtr.Zero;
            int code = NativeMethods.mamaMsgField_getName(nativeHandle,ref ret);
            CheckResultCode(code);
            return Marshal.PtrToStringAnsi(ret);
        }

        public string getTypeName ()
        {
            EnsurePeerCreated();
            IntPtr ret = IntPtr.Zero;
            int code = NativeMethods.mamaMsgField_getTypeName(nativeHandle,ref ret);
            CheckResultCode(code);
            return Marshal.PtrToStringAnsi(ret);
        }

        public bool getBool ()
        {
            EnsurePeerCreated();
            bool ret = false;
            int code = NativeMethods.mamaMsgField_getBool(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public char getChar ()
        {
            EnsurePeerCreated();
            char ret = '\0';
            int code = NativeMethods.mamaMsgField_getChar(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public sbyte getI8 ()
        {
            EnsurePeerCreated();
            sbyte ret = 0;
            int code = NativeMethods.mamaMsgField_getI8(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public byte getU8 ()
        {
            EnsurePeerCreated();
            byte ret = 0;
            int code = NativeMethods.mamaMsgField_getU8(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public short getI16 ()
        {
            EnsurePeerCreated();
            short ret = 0;
            int code = NativeMethods.mamaMsgField_getI16(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public ushort getU16 ()
        {
            EnsurePeerCreated();
            ushort ret = 0;
            int code = NativeMethods.mamaMsgField_getU16(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public int getI32 ()
        {
            EnsurePeerCreated();
            int ret = 0;
            int code = NativeMethods.mamaMsgField_getI32(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public uint getU32 ()
        {
            EnsurePeerCreated();
            uint ret = 0;
            int code = NativeMethods.mamaMsgField_getU32(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public long getI64 ()
        {
            EnsurePeerCreated();
            long ret = 0;
            int code = NativeMethods.mamaMsgField_getI64(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public ulong getU64 ()
        {
            EnsurePeerCreated();
            ulong ret = 0;
            int code = NativeMethods.mamaMsgField_getU64(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public float getF32 ()
        {
            EnsurePeerCreated();
            float ret = 0;
            int code = NativeMethods.mamaMsgField_getF32(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public double getF64 ()
        {
            EnsurePeerCreated();
            double ret = 0;
            int code = NativeMethods.mamaMsgField_getF64(nativeHandle,ref ret);
            CheckResultCode(code);
            return ret;
        }

        public string getString()
        {
            EnsurePeerCreated();
            IntPtr ret = IntPtr.Zero;
            int code = NativeMethods.mamaMsgField_getString(nativeHandle,ref ret);
            CheckResultCode(code);
            string strRet = Marshal.PtrToStringAnsi(ret);
            return strRet;
        }

        public byte[] getOpaque()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getOpaque(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            byte[] ret = new byte[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public DateTime getDateTime()
        {
            EnsurePeerCreated();
            int code;
            code = NativeMethods.mamaDateTime_clear(dateTime_);
            CheckResultCode(code);
            code = NativeMethods.mamaMsgField_getDateTime(nativeHandle, dateTime_);
            CheckResultCode(code);

            ulong dateTimeMsec = 0;
            code = NativeMethods.mamaDateTime_getEpochTimeMilliseconds (dateTime_, ref dateTimeMsec);
            CheckResultCode(code);
            DateTime ret = new DateTime(((long)dateTimeMsec * TimeSpan.TicksPerMillisecond) + 621355968000000000);

            return ret;
        }

        public MamaPrice getPrice()
        {
            EnsurePeerCreated();
            if (price_ == null)
            {
                price_ = new MamaPrice ();
            }
            int code = NativeMethods.mamaMsgField_getPrice(nativeHandle,price_.NativeHandle);
            MamaStatus.mamaStatus status = (MamaStatus.mamaStatus)code;
            if (status != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                throw new MamaException(status);
            }
            return price_;
        }

        public MamaMsg getMsg()
        {
            EnsurePeerCreated();

            IntPtr myP = IntPtr.Zero;

            int code = NativeMethods.mamaMsgField_getMsg(nativeHandle, ref myP);
            MamaStatus.mamaStatus status = (MamaStatus.mamaStatus)code;
            if (status != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                throw new MamaException(status);
            }

            if (msg_ == null)
            {
                msg_ = new MamaMsg ();
            }

            msg_.setNativeHandle(myP);

            return msg_;
        }

        public bool[] getVectorBool ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorBool(nativeHandle,ref array, ref size);
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

        public char[] getVectorChar ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorChar(nativeHandle,ref array, ref size);
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

        public sbyte[] getVectorI8 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorI8(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            byte[] bRet = new byte[size];
            sbyte[] ret = new sbyte[size];
            Marshal.Copy(array, bRet, 0, (int)size);

            for (int i = 0; i <  ret.Length; i++)
            {
                ret[i] = (sbyte)bRet[i];
            }

            return ret;
        }


        public byte[] getVectorU8 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorU8(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            byte[] ret = new byte[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public short[] getVectorI16 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorI16(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            short[] ret = new short[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }


        public ushort[] getVectorU16 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorU16(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            short[] sRet = new short[size];
            ushort[] ret = new ushort[size];
            Marshal.Copy(array, sRet, 0, (int)size);

            for (int i = 0; i <  ret.Length; i++)
            {
                ret[i] = (ushort)sRet[i];
            }

            return ret;
        }


        public int[] getVectorI32 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorI32(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            int[] ret = new int[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public uint[] getVectorU32 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorU32(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            int[] iRet = new int[size];
            uint[] ret = new uint[size];
            Marshal.Copy(array, iRet, 0, (int)size);

            for (int i = 0; i <  ret.Length; i++)
            {
                ret[i] = (uint)iRet[i];
            }

            return ret;
        }

        public long[] getVectorI64 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorI64(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            long[] ret = new long[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public ulong[] getVectorU64 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorU64(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            long[] lRet = new long[size];
            ulong[] ret = new ulong[size];
            Marshal.Copy(array, lRet, 0, (int)size);

            for (int i = 0; i <  ret.Length; i++)
            {
                ret[i] = (ulong)lRet[i];
            }

            return ret;
        }


        public float[] getVectorF32 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorF32(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            float[] ret = new float[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }


        public double[] getVectorF64 ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorF64(nativeHandle,ref array, ref size);
            CheckResultCode(code);
            double[] ret = new double[size];
            Marshal.Copy(array, ret, 0, (int)size);

            return ret;
        }

        public string[] getVectorString()
        {
            // Returns
            ArrayList ret = new ArrayList();

            // Ensure that the peer message is created
            EnsurePeerCreated();

            // Call the native method which returns a native memory pointer
            IntPtr nativeArrayPointer = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorString(nativeHandle, ref nativeArrayPointer, ref size);
            CheckResultCode(code);

            /* The native pointer is to an array of native strings, copy all these pointers over
             * so that the strings can be converted individually.
             */
            IntPtr[] nativeStringPointers = new IntPtr[size];
            Marshal.Copy(nativeArrayPointer, nativeStringPointers, 0, (int)size);

            // Translate each string in turn
            foreach (IntPtr nativeStringPointer in nativeStringPointers)
            {
                ret.Add(Marshal.PtrToStringAnsi(nativeStringPointer));
            }

            // Convert the array list to an array of strings
            return (string[])ret.ToArray(typeof(string));

        }

        public MamaMsg[] getVectorMsg ()
        {
            EnsurePeerCreated();
            IntPtr array = IntPtr.Zero;
            uint size = 0;
            int code = NativeMethods.mamaMsgField_getVectorMsg(nativeHandle,ref array, ref size);
            CheckResultCode(code);

            MamaMsg[] ret = new MamaMsg[size];
            for (int i = 0 ; i < size; i++)
            {
                ret[i] = new MamaMsg(Marshal.ReadIntPtr(array, i * Marshal.SizeOf(typeof(IntPtr))));
            }

            return ret;
        }


        private MamaPrice price_    = null;
        private MamaMsg   msg_      = null;
        private IntPtr    dateTime_ = IntPtr.Zero;

        #region Implementation details

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_destroy (IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getType(IntPtr nativeHandle,ref int result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getDescriptor(IntPtr nativeHandle,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getFid(IntPtr nativeHandle,
                ref ushort result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getName(IntPtr nativeHandle,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getTypeName(IntPtr nativeHandle,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getBool(IntPtr nativeHandle,
                ref bool result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getChar(IntPtr nativeHandle,
                ref char result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getI8(IntPtr nativeHandle,
                ref sbyte result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getU8(IntPtr nativeHandle,
                ref byte result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getI16(IntPtr nativeHandle,
                ref short result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getU16(IntPtr nativeHandle,
                ref ushort result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getI32(IntPtr nativeHandle,
                ref int result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getU32(IntPtr nativeHandle,
                ref uint result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getI64(IntPtr nativeHandle,
                ref long result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getU64(IntPtr nativeHandle,
                ref ulong result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getF32(IntPtr nativeHandle,
                ref float result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getF64(IntPtr nativeHandle,
                ref double result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getString(IntPtr nativeHandle,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getOpaque(IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getDateTime(IntPtr nativeHandle,
                IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getPrice(IntPtr nativeHandle,
                IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getMsg(IntPtr nativeHandle,
                ref IntPtr result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorBool(IntPtr nativeHandle,
                ref IntPtr  result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorChar (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorI8 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorU8 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorI16 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorU16 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorI32 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorU32 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorI64 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorU64 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorF32 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorF64 (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorString (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getVectorMsg (IntPtr nativeHandle,
                ref IntPtr result,
                ref uint size);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaMsgField_getAsString(IntPtr nativeHandle,
                StringBuilder  buf,
                int length);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaDateTime_getEpochTimeMilliseconds(IntPtr dateTime_,
                ref ulong milliseconds);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_destroy(IntPtr  nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaDateTime_create(ref IntPtr dateTime_);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaDateTime_clear(IntPtr dateTime_);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaDateTime_destroy(IntPtr dateTime_);
        }

        #endregion // Implementation details

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:34 +0100
