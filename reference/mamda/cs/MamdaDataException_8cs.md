---
title: cs/MamdaDataException.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamdaDataException.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::Runtime::Serialization](namespaceSystem_1_1Runtime_1_1Serialization.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaDataException](classWombat_1_1MamdaDataException.html)** <br>MAMDA data exceptions.  |




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
using System.Runtime.Serialization;

namespace Wombat
{
    public class MamdaDataException : Exception
    {
        public MamdaDataException() : base()
        {
        }

        public MamdaDataException(string message) : base(message)
        {
        }

        public MamdaDataException(string message, Exception innerException) : base(message, innerException)
        {
        }

        public MamdaDataException(Exception innerException) : base(innerException.Message, innerException)
        {
        }

        protected MamdaDataException(SerializationInfo info, StreamingContext context) :
            base(info, context)
        {
        }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
        }
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
