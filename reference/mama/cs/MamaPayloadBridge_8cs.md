---
title: cs/MamaPayloadBridge.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaPayloadBridge.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaPayloadBridge](classWombat_1_1MamaPayloadBridge.html)**  |




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
    public class MamaPayloadBridge : MamaWrapper
    {
        public MamaPayloadBridge (string payload): base()
        {
            int code = NativeMethods.mama_loadPayloadBridge (ref nativeHandle, payload);
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
            public static extern int mama_loadPayloadBridge (ref IntPtr impl,
                string payload);
        }


        #endregion // Implementation details
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:34 +0100
