---
title: cs/MamaSourceManager.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaSourceManager.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSourceManager](classWombat_1_1MamaSourceManager.html)** <br>A [MamaSourceManager]() maintains information about a set of data sources, including the quality of the data coming from those sources.  |




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
    public class MamaSourceManager : MamaWrapper, ISourceManager
    {
        public MamaSourceManager() : base()
        {
            int code = NativeMethods.mamaSourceManager_create(ref nativeHandle);
            CheckResultCode(code);
        }

        internal MamaSourceManager(IntPtr nativeHandle) : base(nativeHandle)
        {
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            int code = NativeMethods.mamaSourceManager_destroy(nativeHandle);
            return (MamaStatus.mamaStatus)code;
        }

        public void destroy()
        {
            Dispose();
        }

        #region ISourceManager implementation

        public MamaSource create(string name)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (name == null)
            {
                throw new ArgumentNullException("name");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();

            IntPtr sourceHandle = IntPtr.Zero;
            int code = NativeMethods.mamaSourceManager_createSource(nativeHandle, name, ref sourceHandle);
            CheckResultCode(code);
            return new MamaSource(sourceHandle);
        }

        public MamaSource findOrCreate(string name)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (name == null)
            {
                throw new ArgumentNullException("name");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();

            IntPtr sourceHandle = IntPtr.Zero;
            int code = NativeMethods.mamaSourceManager_findOrCreateSource(nativeHandle, name, ref sourceHandle);
            CheckResultCode(code);
            return new MamaSource(sourceHandle);
        }

        public MamaSource find(string name)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (name == null)
            {
                throw new ArgumentNullException("name");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();

            IntPtr sourceHandle = IntPtr.Zero;
            int code = NativeMethods.mamaSourceManager_findSource(nativeHandle, name, ref sourceHandle);
            CheckResultCode(code);
            if (sourceHandle == IntPtr.Zero)
            {
                return null;
            }
            else
            {
                return new MamaSource(sourceHandle);
            }
        }

        public void add(MamaSource source)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();

            int code = NativeMethods.mamaSourceManager_addSource(nativeHandle, source.NativeHandle);
            CheckResultCode(code);
            GC.KeepAlive(source);
        }

        public void add(string name, MamaSource source)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (name == null)
            {
                throw new ArgumentNullException("name");
            }
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();

            int code = NativeMethods.mamaSourceManager_addSourceWithName(nativeHandle, source.NativeHandle, name);
            CheckResultCode(code);
            GC.KeepAlive(source);
        }

        #endregion ISourceManager implementation

        #region Implementation details

        // Interop API
        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceManager_create(ref IntPtr sourceManager);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceManager_destroy(IntPtr sourceManager);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceManager_createSource(
                IntPtr sourceManager,
                [MarshalAs(UnmanagedType.LPStr)] string name,
                ref IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceManager_findOrCreateSource(
                IntPtr sourceManager,
                [MarshalAs(UnmanagedType.LPStr)] string name,
                ref IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceManager_findSource(
                IntPtr sourceManager,
                [MarshalAs(UnmanagedType.LPStr)] string name,
                ref IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceManager_addSource(
                IntPtr sourceManager,
                IntPtr source);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceManager_addSourceWithName(
                IntPtr sourceManager,
                IntPtr source,
                [MarshalAs(UnmanagedType.LPStr)] string name);
        }

        #endregion Implementation details
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:34 +0100
