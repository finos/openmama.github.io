---
title: cs/MamaBridge.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaBridge.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaBridge](classWombat_1_1MamaBridge.html)**  |




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
using System.IO;

namespace Wombat
{
    public class MamaBridge : MamaWrapper
    {
        public MamaBridge (string middleware): base()
        {
            int code = NativeMethods.mama_loadBridge (ref nativeHandle, middleware);
            CheckResultCode (code);
        }

        public MamaBridge (string middleware, string path): base()
        {
            int code = NativeMethods.mama_loadBridgeWithPath (ref nativeHandle, middleware, path);
            CheckResultCode (code);
        }

        public void destroy ()
        {
            Dispose();
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return MamaStatus.mamaStatus.MAMA_STATUS_OK;
        }

        #region Implementation details

        private struct NativeMethods
        {
            // export definitions
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_loadBridge (ref IntPtr impl,
                string middleware);

            // export definitions
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mama_loadBridgeWithPath (ref IntPtr impl, string middleware,                string path);
        }


        #endregion // Implementation details
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
