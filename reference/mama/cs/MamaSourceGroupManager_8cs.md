---
title: cs/MamaSourceGroupManager.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaSourceGroupManager.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html)** <br>A [MamaSourceGroupManager]() monitors a set of [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html)s  |




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

namespace Wombat
{
    public class MamaSourceGroupManager : MamaWrapper
    {
        public MamaSourceGroupManager() : base()
        {
            int code = NativeMethods.mamaSourceGroupManager_create(ref nativeHandle);
            CheckResultCode(code);
            mItems = new Hashtable();
        }

#if WONT_WORK_BECAUSE_THERE_IS_NO_ITERATOR
        internal MamaSourceGroupManager(IntPtr nativeHandle) : base(nativeHandle)
        {
        }
#endif

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            int code = NativeMethods.mamaSourceGroupManager_destroy(nativeHandle);
            return (MamaStatus.mamaStatus)code;
        }

        public void destroy()
        {
            Dispose();
        }

        public IEnumerator GetEnumerator()
        {
            return mItems.Values.GetEnumerator();
        }

        public MamaSourceGroup create(string name)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (name == null)
            {
                throw new ArgumentNullException("name", name);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            IntPtr value = IntPtr.Zero;
            int code = NativeMethods.mamaSourceGroupManager_createSourceGroup(nativeHandle, name, ref value);
            CheckResultCode(code);
            MamaSourceGroup group = new MamaSourceGroup(value);
            // cache it in order to be able to iterate
            mItems[name] = group;
            return group;
        }

        public MamaSourceGroup findOrCreate(string name)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (name == null)
            {
                throw new ArgumentNullException("name", name);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            IntPtr value = IntPtr.Zero;
            int code = NativeMethods.mamaSourceGroupManager_findOrCreateSourceGroup(nativeHandle, name, ref value);
            CheckResultCode(code);
            MamaSourceGroup group = new MamaSourceGroup(value);
            // cache it in order to be able to iterate
            if (!mItems.ContainsKey(name))
            {
                mItems.Add(name, group);
            }
            return group;
        }

        public MamaSourceGroup find(string name)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (name == null)
            {
                throw new ArgumentNullException("name", name);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            IntPtr value = IntPtr.Zero;
            int code = NativeMethods.mamaSourceGroupManager_findSourceGroup(nativeHandle, name, ref value);
            CheckResultCode(code);
            if (value != IntPtr.Zero)
            {
                // already added
                return new MamaSourceGroup(value);
            }
            else
            {
                return null;
            }
        }

        public void add(MamaSourceGroup sourceGroup)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (sourceGroup == null)
            {
                throw new ArgumentNullException("sourceGroup", sourceGroup);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            EnsurePeerCreated();
            int code = NativeMethods.mamaSourceGroupManager_addSourceGroup(nativeHandle, sourceGroup.NativeHandle);
            CheckResultCode(code);
            // add it to the list
            mItems[sourceGroup.name] = sourceGroup;
            GC.KeepAlive(sourceGroup);
        }

        public MamaSourceGroup this[string sourceGroupName]
        {
            get
            {
                return find(sourceGroupName);
            }
            set
            {
                // NB!: removal is impossible
                MamaSourceGroup val = find(sourceGroupName);
                if (val == null)
                {
                    add(value);
                }
            }
        }

        public int size
        {
            get
            {
                return mItems.Count;
            }
        }

        #region Implementation details

        // Interop API
        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroupManager_create(ref IntPtr sourceGroupManager);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroupManager_destroy(IntPtr sourceGroupManager);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroupManager_createSourceGroup(
                IntPtr  sourceGroupManager,
                [MarshalAs(UnmanagedType.LPStr)] string name,
                ref IntPtr sourceGroup);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroupManager_findOrCreateSourceGroup(
                IntPtr  sourceGroupManager,
                [MarshalAs(UnmanagedType.LPStr)] string name,
                ref IntPtr sourceGroup);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroupManager_findSourceGroup(
                IntPtr  sourceGroupManager,
                [MarshalAs(UnmanagedType.LPStr)] string name,
                ref IntPtr sourceGroup);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSourceGroupManager_addSourceGroup(
                IntPtr sourceGroupManager,
                IntPtr sourceGroup);
        }

        private Hashtable mItems;

        #endregion Implementation details

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
