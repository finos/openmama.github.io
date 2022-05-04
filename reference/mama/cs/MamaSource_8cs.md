---
title: cs/MamaSource.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaSource.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSource](classWombat_1_1MamaSource.html)** <br>A [MamaSource]() maintains information about a data source, including the quality of the data coming from that source  |




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
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace Wombat
{
    public class MamaSource : MamaWrapper, ISourceManager
    {

        public MamaSource() : base()
        {
            int code = NativeMethods.mamaSource_create(ref nativeHandle);
            CheckResultCode(code);
        }

        internal MamaSource(IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            int code = NativeMethods.mamaSource_destroy(nativeHandle);
            return (MamaStatus.mamaStatus)code;
        }

        public void destroy()
        {
            Dispose();
        }

        public void clear()
        {
            EnsurePeerCreated();
            int code = NativeMethods.mamaSource_clear(nativeHandle);
            CheckResultCode(code);
            ++mContainerVersion;
        }

        public string id
        {
            get
            {
                EnsurePeerCreated();
                IntPtr value = IntPtr.Zero;
                int code = NativeMethods.mamaSource_getId(nativeHandle, ref value);
                CheckResultCode(code);
                return Marshal.PtrToStringAnsi(value);
            }
            set
            {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (value == null)
                {
                    throw new ArgumentNullException("id");
                }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
                EnsurePeerCreated();
                int code = NativeMethods.mamaSource_setId(nativeHandle, value);
                CheckResultCode(code);
            }
        }

        public string displayId
        {
            get
            {
                EnsurePeerCreated();
                IntPtr value = IntPtr.Zero;
                int code = NativeMethods.mamaSource_getDisplayId(nativeHandle, ref value);
                CheckResultCode(code);
                return  Marshal.PtrToStringAnsi(value);
            }
            set
            {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (value == null)
                {
                    throw new ArgumentNullException("displayId");
                }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
                EnsurePeerCreated();
                int code = NativeMethods.mamaSource_setDisplayId(nativeHandle, value);
                CheckResultCode(code);
            }
        }

        public string mappedId
        {
            get
            {
                EnsurePeerCreated();
                IntPtr value = IntPtr.Zero;
                int code = NativeMethods.mamaSource_getMappedId(nativeHandle, ref value);
                CheckResultCode(code);
                return Marshal.PtrToStringAnsi(value);
            }
            set
            {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (value == null)
                {
                    throw new ArgumentNullException("mappedId");
                }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
                EnsurePeerCreated();
                int code = NativeMethods.mamaSource_setMappedId(nativeHandle, value);
                CheckResultCode(code);
            }
        }

        public mamaQuality quality
        {
            get
            {
                EnsurePeerCreated();
                int value = 0;
                int code = NativeMethods.mamaSource_getQuality(nativeHandle, ref value);
                CheckResultCode(code);
                Debug.Assert(Enum.IsDefined(typeof(mamaQuality), value));
                return (mamaQuality)value;
            }
            set
            {
                EnsurePeerCreated();
                int code = NativeMethods.mamaSource_setQuality(nativeHandle, (int)value);
                CheckResultCode(code);
            }
        }

        public mamaSourceState state
        {
            get
            {
                EnsurePeerCreated();
                int value = 0;
                int code = NativeMethods.mamaSource_getState(nativeHandle, ref value);
                CheckResultCode(code);
                Debug.Assert(Enum.IsDefined(typeof(mamaSourceState), value));
                return (mamaSourceState)value;
            }
            set
            {
                EnsurePeerCreated();
                int code = NativeMethods.mamaSource_setQuality(nativeHandle, (int)value);
                CheckResultCode(code);
            }
        }

        public string stateAsString
        {
            get
            {
                EnsurePeerCreated();
                string value = Marshal.PtrToStringAnsi(NativeMethods.mamaSource_getStateAsString(nativeHandle));
                return value;
            }
        }

        public MamaSource parent
        {
            get
            {
                EnsurePeerCreated();
                IntPtr parentHandle = IntPtr.Zero;
                int code = NativeMethods.mamaSource_getParent(nativeHandle, ref parentHandle);
                CheckResultCode(code);
                return new MamaSource(parentHandle);
            }
            set
            {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (value == null)
                {
                    throw new ArgumentNullException("parent");
                }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
                EnsurePeerCreated();
                int code = NativeMethods.mamaSource_setParent(nativeHandle, value.NativeHandle);
                CheckResultCode(code);
                GC.KeepAlive(value);
            }
        }

        public string symbolNamespace
        {
            get
            {
                EnsurePeerCreated();
                IntPtr value = IntPtr.Zero;
                int code = NativeMethods.mamaSource_getSymbolNamespace(nativeHandle, ref value);
                CheckResultCode(code);
                return Marshal.PtrToStringAnsi(value);
            }
            set
            {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (value == null)
                {
                    throw new ArgumentNullException("symbolNamespace");
                }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
                EnsurePeerCreated();
                int code = NativeMethods.mamaSource_setSymbolNamespace(nativeHandle, value);
                CheckResultCode(code);
            }
        }

        public string transportName
        {
            get
            {
                EnsurePeerCreated();
                IntPtr value = IntPtr.Zero;
                int code = NativeMethods.mamaSource_getTransportName(nativeHandle, ref value);
                CheckResultCode(code);
                return Marshal.PtrToStringAnsi(value);
            }
            set
            {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (value == null)
                {
                    throw new ArgumentNullException("transportName");
                }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
                EnsurePeerCreated();
                int code = NativeMethods.mamaSource_setTransportName(nativeHandle, value);
                CheckResultCode(code);
            }
        }

        public MamaTransport transport
        {
            get
            {
                EnsurePeerCreated();
                IntPtr handle = IntPtr.Zero;
                int code = NativeMethods.mamaSource_getTransport(nativeHandle, ref handle);
                CheckResultCode(code);
                mTransport.setNativeHandle (handle);
                return mTransport;
            }
            set
            {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (value == null)
                {
                    throw new ArgumentNullException("transport");
                }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
                EnsurePeerCreated();
                mTransport = value;
                int code = NativeMethods.mamaSource_setTransport(nativeHandle, value.NativeHandle);
                CheckResultCode(code);
            }
        }

        #region ISourceManager implementation

        public MamaSource create(string name)
        {
            return Manager.create(name);
        }

        public MamaSource findOrCreate(string name)
        {
            return Manager.findOrCreate(name);
        }

        public MamaSource find(string name)
        {
            return Manager.find(name);
        }

        public void add(MamaSource source)
        {
            Manager.add(source);
        }

        public void add(string name, MamaSource source)
        {
            Manager.add(name, source);
        }

        #endregion ISourceManager implementation

        #region Implementation details

        private MamaSourceManager Manager
        {
            get
            {
                if (!mAttemptedToLoadSubSourceManager)
                {
                    mAttemptedToLoadSubSourceManager = true;
                    IntPtr subSourceManager = IntPtr.Zero;
                    int code = NativeMethods.mamaSource_getSubSourceManager(nativeHandle, ref subSourceManager);
                    CheckResultCode(code);
                    mManager = new MamaSourceManager(subSourceManager);
                }
                Debug.Assert(mManager != null);
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
                if (mManager == null)
                {
                    throw new InvalidOperationException("SubSourceManager could not be obtained");
                }
#endif
                return mManager;
            }
        }

        // Interop API
        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_create(ref IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_destroy(IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_clear(IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setId(
                IntPtr source,
                [MarshalAs(UnmanagedType.LPStr)] string id);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setMappedId(
                IntPtr source,
                [MarshalAs(UnmanagedType.LPStr)] string id);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setDisplayId(
                IntPtr source,
                [MarshalAs(UnmanagedType.LPStr)] string id);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setQuality(
                IntPtr source,
                int quality);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setState(
                IntPtr source,
                int sourceState);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setParent(
                IntPtr source,
                IntPtr parent);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setSymbolNamespace(
                IntPtr source,
                [MarshalAs(UnmanagedType.LPStr)] string symbolNamespace);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setTransportName(
                IntPtr source,
                [MarshalAs(UnmanagedType.LPStr)] string transportName);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setTransport(
                IntPtr source,
                IntPtr transport);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_setSymbology(
                IntPtr source,
                IntPtr symbology);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getId(
                IntPtr source,
                ref IntPtr id);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getMappedId(
                IntPtr source,
                ref IntPtr id);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getDisplayId(
                IntPtr source,
                ref IntPtr id);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getQuality(
                IntPtr source,
                ref int quality);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getState(
                IntPtr source,
                ref int state);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern IntPtr mamaSource_getStateAsString(IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getParent(
                IntPtr source,
                ref IntPtr parent);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getSymbolNamespace(
                IntPtr source,
                ref IntPtr symbolNamespace);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getTransportName(
                IntPtr source,
                ref IntPtr transportName);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getTransport(
                IntPtr source,
                ref IntPtr transport);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getSymbology(
                IntPtr source,
                ref IntPtr symbology);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSource_getSubSourceManager(
                IntPtr source,
                ref IntPtr subSourceManager);
        }

        private bool mAttemptedToLoadSubSourceManager;
        private MamaSourceManager mManager;
        private MamaTransport mTransport;
        private int mContainerVersion; // to check whether container was modified during enumeration

        #endregion Implementation details

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
