---
title: Containers/Map.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Containers/Map.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[Wombat::Containers](namespaceWombat_1_1Containers.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| interface | **[Wombat::Containers::Map](interfaceWombat_1_1Containers_1_1Map.html)**  |
| interface | **[Wombat::Containers::MapEntry](interfaceWombat_1_1Containers_1_1MapEntry.html)**  |




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

namespace Wombat.Containers
{
    public interface Map
    {
        int size();
        bool isEmpty();
        bool containsKey(object key);
        bool containsValue(object value);
        object valueOf(object key);
        object put(object key, object value);
        object remove(object key);
        void putAll(Map m);
        void clear();
        Set keySet();
        Collection values();
        Set entrySet();
    }

    public interface MapEntry
    {
        object getKey();
        object getValue();
        object setValue(object value);
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:30:18 +0100
