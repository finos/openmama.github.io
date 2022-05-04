---
title: Containers/Helpers.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Containers/Helpers.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[Wombat::Containers](namespaceWombat_1_1Containers.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::Containers::ReadonlyIteratorOverEnumerator](classWombat_1_1Containers_1_1ReadonlyIteratorOverEnumerator.html)**  |




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
using System.Collections;

namespace Wombat.Containers
{
    sealed class ReadonlyIteratorOverEnumerator : Iterator
    {
        public ReadonlyIteratorOverEnumerator(IEnumerator e)
        {
            mIEnum = e;
        }

        #region Iterator Members

        public bool hasNext()
        {
            if (!mMoved)
            {
                mMoveSucceeded = mIEnum.MoveNext();
                mMoved = true;
            }
            return mMoveSucceeded;
        }

        public object next()
        {
            mMoved = false;
            return mIEnum.Current;
        }

        public void remove()
        {
            throw new NotSupportedException();
        }

        #endregion

        private IEnumerator mIEnum;
        private bool mMoved;
        private bool mMoveSucceeded;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
