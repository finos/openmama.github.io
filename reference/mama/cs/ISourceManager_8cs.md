---
title: cs/ISourceManager.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/ISourceManager.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System](namespaceSystem.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::ISourceManager](interfaceWombat_1_1ISourceManager.html)** <br>A container of [MamaSource]() objects. Because each [MamaSource]() can contain sub-sources (and so on), [MamaSource]() is also a source manager and implements this interface.  |




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

namespace Wombat
{
    public interface ISourceManager : IDisposable
    {
        MamaSource create(string name);

        MamaSource findOrCreate(string name);

        MamaSource find(string name);

        void add(MamaSource source);

        void add(string name, MamaSource source);

        // NB:
        // the destroy method does not belong here because if we decide to
        // expose an ISourceManager property from the MamaSource the user would be
        // able to destroy the underlying source manager in the source, which should
        // not be possible; hence, the destroy method exists in the MamaSource and
        // MamaSourceManager classes
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
