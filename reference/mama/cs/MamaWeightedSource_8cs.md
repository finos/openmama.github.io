---
title: cs/MamaWeightedSource.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaWeightedSource.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaWeightedSource](classWombat_1_1MamaWeightedSource.html)** <br>Encapsulates both a source object and its weight in a source group  |




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
    public sealed class MamaWeightedSource
    {
        internal MamaWeightedSource(MamaSource source, uint weight)
        {
            mSource = source;
            mWeight = weight;
        }

        public MamaSource Source
        {
            get
            {
                return mSource;
            }
        }

        public uint weight
        {
            get
            {
                return mWeight;
            }
        }

        public int weightClsCompliant
        {
            get
            {
                return (int)(long)weight;
            }
        }

        public static implicit operator MamaSource(MamaWeightedSource weightedSource)
        {
            return weightedSource.Source;
        }

        private MamaSource mSource;
        private uint mWeight;

    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
