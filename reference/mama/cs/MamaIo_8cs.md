---
title: cs/MamaIo.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaIo.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaIo](classWombat_1_1MamaIo.html)** <br>I/O handler  |




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
    public class MamaIo : MamaWrapper
    {
        private MamaIoDelegate mIoDelegate;

        public MamaIo() : base()
        {
            // Create the delegate
            mIoDelegate = new MamaIoDelegate(onIo);
        }

        internal MamaIo(IntPtr nativeHandle) : base(nativeHandle)
        {
            // Create the delegate
            mIoDelegate = new MamaIoDelegate(onIo);
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            // Destroy the native object
            int code = NativeMethods.mamaIo_destroy(nativeHandle);

            // Clear the delegate to ensure that it is collected
            mIoDelegate = null;

            return (MamaStatus.mamaStatus)code;
        }

        public void create(
            MamaQueue queue,
            MamaIoCallback action,
            uint descriptor,
            mamaIoType ioType,
            object closure)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (action == null)
            {
                throw new ArgumentNullException("action");
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            this.callback = action;
            this.closureObject = closure;

            IntPtr queueHandle = queue != null ? queue.NativeHandle : IntPtr.Zero;
            int code = NativeMethods.mamaIo_create(
                ref nativeHandle,
                queueHandle,
                descriptor,
                mIoDelegate,
                (int)ioType,
                IntPtr.Zero);
            CheckResultCode(code);

            GC.KeepAlive(queue);
        }

        public void create(
            MamaQueue queue,
            MamaIoCallback action,
            uint descriptor,
            mamaIoType ioType)
        {
            create(queue, action, descriptor, ioType, null);
        }

        public void create(
            MamaQueue queue,
            MamaIoCallback action,
            long descriptor,
            mamaIoType ioType,
            object closure)
        {
#if MAMA_WRAPPERS_CHECK_ARGUMENTS
            if (descriptor < 0 || descriptor > UInt32.MaxValue)
            {
                throw new ArgumentOutOfRangeException("descriptor", descriptor);
            }
#endif // MAMA_WRAPPERS_CHECK_ARGUMENTS
            create(queue, action, (uint)descriptor, ioType, closure);
        }

        public void create(
            MamaQueue queue,
            MamaIoCallback action,
            long descriptor,
            mamaIoType ioType)
        {
            create(queue, action, descriptor, ioType, null);
        }

        public uint descriptor
        {
            get
            {
                EnsurePeerCreated();
                uint value = 0;
                int code = NativeMethods.mamaIo_getDescriptor(nativeHandle, ref value);
                CheckResultCode(code);
                return value;
            }
        }

        public long descriptorClsCompliant
        {
            get
            {
                return descriptor;
            }
        }

        public void destroy()
        {
            Dispose();
        }

        public object closure
        {
            get
            {
                return closureObject;
            }
        }

        #region Implementation details

        // C-like callback used in the interop call
        private delegate void MamaIoDelegate(
            IntPtr io,
            int ioType,
            IntPtr closure);

        // the implementation callback
        private void onIo(IntPtr io, int ioType, IntPtr closure)
        {
            if (callback != null)
            {
                callback.onIo(this, (mamaIoType)ioType);
            }
        }

        // Interop API
        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaIo_create(
                ref IntPtr result,
                IntPtr queue,
                uint descriptor,
                MamaIoDelegate action,
                int ioType,
                IntPtr closure);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaIo_getDescriptor(
                IntPtr io,
                ref uint descriptor);

            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaIo_destroy(IntPtr io);
        }

        private MamaIoCallback callback;
        private object closureObject;

        #endregion Implementation details

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
