---
title: cs/MamaFieldDescriptor.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaFieldDescriptor.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html)** <br>A class that describes a field in a [MamaMsg]() |




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
    public class MamaFieldDescriptor : MamaWrapper
    {
        internal MamaFieldDescriptor(IntPtr handle) : base(handle)
        {
        }

        public MamaFieldDescriptor(
            int fid,
            mamaFieldType type,
            string name,
            bool trackModState) : base()
        {
            int code = NativeMethods.mamaFieldDescriptor_create(ref nativeHandle, fid, (int)type, name);
            CheckResultCode(code);
            this.mTrackModState = trackModState;
        }

        public MamaFieldDescriptor(
            int fid,
            mamaFieldType type,
            string name) : this(fid, type, name, false)
        {
        }

        public void destroy()
        {
            Dispose();
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return (MamaStatus.mamaStatus)NativeMethods.mamaFieldDescriptor_destroy(nativeHandle);
        }

        public string getName ()
        {
            EnsurePeerCreated();
            return Marshal.PtrToStringAnsi(NativeMethods.mamaFieldDescriptor_getName(nativeHandle));
        }

        public int getFid ()
        {
            EnsurePeerCreated();
            return NativeMethods.mamaFieldDescriptor_getFid(nativeHandle);
        }

        public mamaFieldType getType ()
        {
            EnsurePeerCreated();
            return (mamaFieldType)NativeMethods.mamaFieldDescriptor_getType(nativeHandle);
        }

        public string getTypeName ()
        {
            EnsurePeerCreated();
            return Marshal.PtrToStringAnsi(NativeMethods.mamaFieldDescriptor_getTypeName(nativeHandle));
        }

        public bool trackModState
        {
            get
            {
                EnsurePeerCreated();
                return mTrackModState;
            }
            set
            {
                EnsurePeerCreated();
                mTrackModState = value;
            }
        }

        public object closure
        {
            get
            {
                EnsurePeerCreated();
                return mClosure;
            }
            set
            {
                EnsurePeerCreated();
                mClosure = value;
            }
        }


        public string pubName
        {
            get
            {
                EnsurePeerCreated();
                return mPubName != null ? mPubName : getName();
            }
            set
            {
                EnsurePeerCreated();
                mPubName = value;
            }
        }

        #region Implementation details

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFieldDescriptor_destroy(IntPtr handle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaFieldDescriptor_getName(IntPtr handle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern ushort mamaFieldDescriptor_getFid(IntPtr handle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFieldDescriptor_getType(IntPtr handle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaFieldDescriptor_getTypeName(IntPtr handle);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaFieldDescriptor_create(
                ref IntPtr  handle,
                int fid,
                int type,
                [MarshalAs(UnmanagedType.LPStr)] string name);
        }

        // state
        private bool mTrackModState;
        private object mClosure;
        private string mPubName;

        #endregion // Implementation details
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
