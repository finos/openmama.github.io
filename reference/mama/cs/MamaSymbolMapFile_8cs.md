---
title: cs/MamaSymbolMapFile.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaSymbolMapFile.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSymbolMapFile](classWombat_1_1MamaSymbolMapFile.html)** <br>A file-based symbol mapper  |




## Source code

```csharp
/* $Id: MamaSymbolMapFile.cs,v 1.4.20.4 2012/07/26 11:27:10 stuartbeattie Exp $
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
    public class MamaSymbolMapFile : MamaWrapper
    {
        public MamaSymbolMapFile() : base()
        {
        }

        public void create()
        {
            int code = NativeMethods.mamaSymbolMapFile_create(ref nativeHandle);
            CheckResultCode(code);
        }

        public void load(string fileName)
        {
            int code = NativeMethods.mamaSymbolMapFile_load(nativeHandle, fileName);
            CheckResultCode(code);
        }

        public void addMap(
            string fromSymbol,
            string toSymbol)
        {
            NativeMethods.mamaSymbolMapFile_addMap(nativeHandle, fromSymbol, toSymbol);
        }

        public int map(
            ref string result,
            string symbol,
            int maxLen)
        {
            string resultString = new string ('\x0000', maxLen);
            IntPtr resultPtr = Marshal.StringToHGlobalAnsi (resultString);
            int code = NativeMethods.mamaSymbolMapFile_map(nativeHandle, resultPtr, symbol, maxLen);
            result = Marshal.PtrToStringAnsi (resultPtr);
            Marshal.FreeHGlobal (resultPtr);
            return code;
        }

        public int revMap(
            ref string result,
            string symbol,
            int maxLen)
        {
            string resultString = new string ('\x0000', maxLen);
            IntPtr resultPtr = Marshal.StringToHGlobalAnsi (resultString);
            int code = NativeMethods.mamaSymbolMapFile_revMap(nativeHandle, resultPtr, symbol, maxLen);
            result = Marshal.PtrToStringAnsi (resultPtr);
            Marshal.FreeHGlobal (resultPtr);
            return code;
        }

        protected override MamaStatus.mamaStatus DestroyNativePeer()
        {
            return (MamaStatus.mamaStatus)NativeMethods.mamaSymbolMapFile_destroy(nativeHandle);
        }

        private struct NativeMethods
        {
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSymbolMapFile_create(
                ref IntPtr fileMap);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSymbolMapFile_destroy(
                IntPtr fileMap);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSymbolMapFile_load(
                IntPtr fileMap,
                string fileName);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern void mamaSymbolMapFile_addMap(
                IntPtr fileMap,
                string fromSymbol,
                string toSymbol);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSymbolMapFile_map(
                IntPtr fileMap,
                IntPtr result,
                string symbol,
                int maxLen);
            [DllImport(Mama.DllName, CallingConvention = CallingConvention.Cdecl)]
            public static extern int mamaSymbolMapFile_revMap(
                IntPtr fileMap,
                IntPtr result,
                string symbol,
                int maxLen);
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
