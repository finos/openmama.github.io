---
title: cs/MamaPrice.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaPrice.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaPrice](classWombat_1_1MamaPrice.html)** <br>A class for manipulating monetary prices  |




## Source code

```csharp
/* $Id: MamaPrice.cs,v 1.8.12.5 2012/08/24 16:12:01 clintonmcdowell Exp $
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
using System.Text;

namespace Wombat
{
    public enum mamaPricePrecision
    {
        MAMA_PRICE_PREC_UNKNOWN             = 0,
        MAMA_PRICE_PREC_10                  = 1,
        MAMA_PRICE_PREC_100                 = 2,
        MAMA_PRICE_PREC_1000                = 3,
        MAMA_PRICE_PREC_10000               = 4,
        MAMA_PRICE_PREC_100000              = 5,
        MAMA_PRICE_PREC_1000000             = 6,
        MAMA_PRICE_PREC_10000000            = 7,
        MAMA_PRICE_PREC_100000000           = 8,
        MAMA_PRICE_PREC_1000000000          = 9,
        MAMA_PRICE_PREC_10000000000         = 10,
        MAMA_PRICE_PREC_100000000000        = 11,
        MAMA_PRICE_PREC_1000000000000       = 12,
        MAMA_PRICE_PREC_10000000000000      = 13,
        MAMA_PRICE_PREC_100000000000000     = 14,
        MAMA_PRICE_PREC_1000000000000000    = 15,
        MAMA_PRICE_PREC_INT                 = 16,
        MAMA_PRICE_PREC_DIV_2               = 17,
        MAMA_PRICE_PREC_DIV_4               = 18,
        MAMA_PRICE_PREC_DIV_8               = 19,
        MAMA_PRICE_PREC_DIV_16              = 20,
        MAMA_PRICE_PREC_DIV_32              = 21,
        MAMA_PRICE_PREC_DIV_64              = 22,
        MAMA_PRICE_PREC_DIV_128             = 23,
        MAMA_PRICE_PREC_DIV_256             = 24,
        MAMA_PRICE_PREC_DIV_512             = 25,
        MAMA_PRICE_PREC_TICK_32             = 26,
        MAMA_PRICE_PREC_HALF_32             = 27,
        MAMA_PRICE_PREC_QUARTER_32          = 28,
        MAMA_PRICE_PREC_TICK_64             = 29,
        MAMA_PRICE_PREC_HALF_64             = 30,
        MAMA_PRICE_PREC_10000000000000000   = 31,
        MAMA_PRICE_PREC_CENTS               = MAMA_PRICE_PREC_100,
        MAMA_PRICE_PREC_PENNIES             = MAMA_PRICE_PREC_100
    }

    public class MamaPrice : MamaWrapper, IComparable
    {
        internal MamaPrice (IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        public MamaPrice() : base()
        {
            int code = NativeMethods.mamaPrice_create(ref this.nativeHandle);
            CheckResultCode(code);
        }

        public MamaPrice(MamaPrice price) : this()
        {
            copy(price);
        }
        public void destroy ()
        {
            Dispose();
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return (MamaStatus.mamaStatus)NativeMethods.mamaPrice_destroy(nativeHandle);
        }

        public void copy(MamaPrice rhs)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_copy(this.nativeHandle, rhs.nativeHandle);
            CheckResultCode(code);
            GC.KeepAlive(rhs);
        }

        public void clear ()
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_clear(nativeHandle);
            CheckResultCode(code);
        }

        public void add (MamaPrice rhs)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_add(nativeHandle, rhs.nativeHandle);
            CheckResultCode(code);
            GC.KeepAlive(rhs);
        }

        public void subtract (MamaPrice rhs)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_subtract(nativeHandle, rhs.nativeHandle);
            CheckResultCode(code);
            GC.KeepAlive(rhs);
        }
        
        public bool equal (MamaPrice rhs)
        {
            EnsurePeerCreated();
            bool result = NativeMethods.mamaPrice_equal(nativeHandle, rhs.nativeHandle) == 1;
            GC.KeepAlive(rhs);
            return result;
        }

        public bool equals(MamaPrice rhs)
        {
            return equal(rhs);
        }

        public double compare(MamaPrice rhs)
        {
            EnsurePeerCreated();
            double result = NativeMethods.mamaPrice_compare(nativeHandle, rhs.nativeHandle);
            GC.KeepAlive(rhs);
            return result;
        }

        public void setValue (double val)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_setValue(nativeHandle, val);
            CheckResultCode(code);
        }

        public void setPrecision (mamaPricePrecision precision)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_setPrecision(nativeHandle, (int)precision);
            CheckResultCode(code);
        }

        public void setHints(byte hints)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_setHints(nativeHandle, hints);
            CheckResultCode(code);
        }

        public void setWithHints(double val,byte hints)
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_setWithHints(nativeHandle,val, hints);
            CheckResultCode(code);
        }

        public void setFromString(string str)
        {
            EnsurePeerCreated();
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (str == null)
            {
                throw new ArgumentNullException("str");
            }
#endif
            int code = NativeMethods.mamaPrice_setFromString(nativeHandle, str);
            CheckResultCode(code);
        }

        public double getValue()
        {
            EnsurePeerCreated();
            double ret = 0;
            int code = NativeMethods.mamaPrice_getValue(nativeHandle, ref ret);
            CheckResultCode(code);

            return ret;

        }

        public mamaPricePrecision getPrecision()
        {
            EnsurePeerCreated();
            int ret = 0;
            int code = NativeMethods.mamaPrice_getPrecision(nativeHandle, ref ret);
            CheckResultCode(code);

            return (mamaPricePrecision)ret;

        }

        public byte getHints()
        {
            EnsurePeerCreated();
            byte ret = 0;
            int code = NativeMethods.mamaPrice_getHints(nativeHandle, ref ret);
            CheckResultCode(code);

            return ret;

        }

        public double getWithHints(ref int precision)
        {
            EnsurePeerCreated();
            double ret = 0;
            int code = NativeMethods.mamaPrice_getWithHints(nativeHandle, ref ret, ref precision);
            CheckResultCode(code);

            return ret;

        }
        public string getAsString()
        {
            EnsurePeerCreated();
            StringBuilder val = new StringBuilder(255);
            int code = NativeMethods.mamaPrice_getAsString(nativeHandle,val,255);
            CheckResultCode(code);
            return val.ToString();
        }

        public override string ToString()
        {
            return getAsString ();
        }

        public void negate()
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaPrice_negate(nativeHandle);
            CheckResultCode(code);
        }

        public bool isZero()
        {
            EnsurePeerCreated();
            bool ret = false;
            int code = NativeMethods.mamaPrice_isZero(nativeHandle, ref ret);
            CheckResultCode(code);

            return ret;

        }

        // necessary methods for instances to be put in sorted and hashed containers

        public override bool Equals(object obj)
        {
            return (equals(obj as MamaPrice));
        }

        public int CompareTo(object rhs) // IComparable
        {
            double ret = compare(rhs as MamaPrice);
            if (Math.Abs(ret) < Math.Abs( this.getValue() * 0.00000000001D)) return 0;
            else if (ret > 0) return 1;
            else return -1;
        }

        public override int GetHashCode()
        {
            return getValue().GetHashCode();
        }

        public static mamaPricePrecision decimals2Precision (int places)
        {
            return (mamaPricePrecision)NativeMethods.mamaPrice_decimals2Precision(places);
        }

        public static mamaPricePrecision denom2Precision (int denominator)
        {
            return (mamaPricePrecision)NativeMethods.mamaPrice_denom2Precision(denominator);
        }

        public static int precision2Decimals (int  precision)
        {
            return NativeMethods.mamaPrice_precision2Decimals(precision);
        }

        public static int precision2Denom (int  precision)
        {
            return NativeMethods.mamaPrice_precision2Denom(precision);
        }

        #region Implementation details

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_create(ref IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_copy(IntPtr dest,
                IntPtr src);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_destroy(IntPtr  nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_clear(IntPtr  nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_add(IntPtr dest,
                IntPtr rhs);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_subtract(IntPtr dest,
                IntPtr rhs);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_equal(IntPtr lhs,
                IntPtr rhs);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern double mamaPrice_compare(IntPtr lhs,
                IntPtr rhs);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_setValue(IntPtr nativeHandle,
                double val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_setPrecision (IntPtr nativeHandle,
                int precision);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_setHints(IntPtr nativeHandle,
                byte hints);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_setWithHints(IntPtr nativeHandle,
                double val,
                byte hints);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_setFromString(IntPtr nativeHandle,
                string str);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_getValue(IntPtr nativeHandle,
                ref double val);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_getPrecision(IntPtr nativeHandle,
                ref int precision);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_getHints(IntPtr nativeHandle,
                ref byte hints);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_getWithHints(IntPtr nativeHandle,
                ref double value,
                ref int precision);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_getAsString(IntPtr nativeHandle,
                StringBuilder  buf,
                int length);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_negate(IntPtr nativeHandle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_isZero(IntPtr nativeHandle,
                ref bool result);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_decimals2Precision (int places);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_denom2Precision (int denominator);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_precision2Decimals (int  precision);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaPrice_precision2Denom (int  precision);
        }

        #endregion // Implementation details

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
