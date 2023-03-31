---
title: cs/MamaException.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# cs/MamaException.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::Runtime::Serialization](namespaceSystem_1_1Runtime_1_1Serialization.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaException](classWombat_1_1MamaException.html)** <br>Provides a MAMA API-specific exception which captures the status code of the last MAMA API call and a textual description of the error.  |




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
    public class MamaException : Exception
    {
        public MamaException(MamaStatus.mamaStatus status) :
            this(status, MamaStatus.stringForStatus(status))
        {
        }

        public MamaException(MamaStatus.mamaStatus status, string message) :
            base(message != null ? message : String.Empty)
        {
            this.mStatus = status;
        }

        public MamaStatus.mamaStatus Status
        {
            get
            {
                return mStatus;
            }
        }

        #region Required serialization support (for Remoting, etc.)

        protected MamaException(
            SerializationInfo info,
            StreamingContext context) :
                base(info, context)
        {
            mStatus = (MamaStatus.mamaStatus)info.GetInt32(statusKey);
        }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(statusKey, (int)mStatus);
        }

        #endregion

        private readonly MamaStatus.mamaStatus mStatus;
        private const string statusKey = "mama.status";

    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
