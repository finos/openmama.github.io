---
title: cs/MamaWrapper.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaWrapper.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaWrapper](classWombat_1_1MamaWrapper.html)** <br>Base class for all wrapped native objects. Provides common facilities to the base classes.  |




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
    public abstract class MamaWrapper : IDisposable
    {
        protected MamaWrapper()
        {
            this.nativeHandle = IntPtr.Zero;
            this.mOwnsThePeer = true;
        }

        protected MamaWrapper(IntPtr nativeHandle)
        {
            this.nativeHandle = nativeHandle;
            this.mOwnsThePeer = false;
            GC.SuppressFinalize(this);
        }

        ~MamaWrapper()
        {
            Dispose(false);
        }

        public void Dispose()
        {
            Dispose(true);
        }

        protected virtual void Dispose(bool disposing, bool destroyNativeHandle = true)
        {
            MamaStatus.mamaStatus status = MamaStatus.mamaStatus.MAMA_STATUS_OK;
            if (disposing)
            {
                OnDispose();
                if (mOwnsThePeer)
                // prevent the object from being finalized later
                GC.SuppressFinalize(this);
            }


            if (!mOwnsThePeer)
            {
                return;
            }
            if (nativeHandle != IntPtr.Zero)
            {
                try
                {

                    if (Mama.opened)
                    {
                       status = DestroyNativePeer();
                    }
                    if (disposing)
                    {
                        // only throw exception if the object is not being finalized
                        if (status != MamaStatus.mamaStatus.MAMA_STATUS_OK)
                        {
                            throw new MamaException(status);
                        }
                    }
                }
                finally
                {
                    if (destroyNativeHandle)
                    {
                        nativeHandle = IntPtr.Zero;
                    }
                }
            }
        }

        protected internal IntPtr NativeHandle
        {
            get
            {
                return nativeHandle;
            }

            set
            {
                nativeHandle = value;
            }
        }

        public void setNativeHandle(IntPtr nHandle)
        {
            nativeHandle = nHandle;
        }


        protected internal void SelfManageLifeTime(bool value)
        {
            if (mOwnsThePeer  != value)
            {
                if (mOwnsThePeer)
                    GC.SuppressFinalize(this);
                else
                    GC.ReRegisterForFinalize(this);
            }

            mOwnsThePeer  = value;
        }

        protected abstract MamaStatus.mamaStatus DestroyNativePeer();

        protected virtual void OnDispose()
        {
        }

        protected internal void EnsurePeerCreated()
        {
            if (nativeHandle == IntPtr.Zero)
            {
                throw new InvalidOperationException("Peer native object not created");
            }
        }

        protected internal static void CheckResultCode(int code)
        {
            if ( (MamaStatus.mamaStatus)code != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                throw new MamaException((MamaStatus.mamaStatus)code);
            }
        }

        protected internal static MamaStatus.mamaStatus CheckResultCodeIgnoreNotFound(int code)
        {
            if ((MamaStatus.mamaStatus)code != MamaStatus.mamaStatus.MAMA_STATUS_NOT_FOUND &&
                (MamaStatus.mamaStatus)code != MamaStatus.mamaStatus.MAMA_STATUS_OK)
            {
                throw new MamaException((MamaStatus.mamaStatus)code);
            }
            return (MamaStatus.mamaStatus)code;
        }

        protected IntPtr nativeHandle;
        private bool mOwnsThePeer;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:34 +0100
