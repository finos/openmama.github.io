---
title: NullableTypes/NullableBool.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# NullableTypes/NullableBool.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Wombat::NullableBool](structWombat_1_1NullableBool.html)** <br>Modelled after Nullable<T> in C# 2.0  |




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
    public struct NullableBool : IComparable
    {
        public NullableBool(bool value)
        {
            // can't just delegate to Value = value
            mValue = value;
            mHasValue = true;
        }

        public bool HasValue
        {
            get
            {
                return mHasValue;
            }
        }

        public bool Value
        {
            get
            {
                if (!mHasValue)
                    throw new InvalidOperationException("The nullable instance has no value");
                return mValue;
            }
            set
            {
                mValue = value;
                mHasValue = true;
            }
        }

        public bool GetValueOrDefault()
        {
            return mValue;
        }

        public bool GetValueOrDefault(bool defaultValue)
        {
            return mHasValue ? mValue : defaultValue;
        }

        public override bool Equals(object other)
        {
            return CompareTo(other) == 0;
        }

        public int CompareTo(object obj)
        {
            NullableBool other = (NullableBool)obj;
            if (mHasValue)
            {
                if (other.mHasValue)
                {
                    return mValue.CompareTo(other.mValue);
                }
                else
                {
                    return 1;
                }
            }
            else if (other.mHasValue)
            {
                return -1;
            }
            else
            {
                return 0;
            }
        }

        public override int GetHashCode()
        {
            return mHasValue ? mValue.GetHashCode() : 0;
        }

        public override string ToString()
        {
            return mHasValue ? mValue.ToString() : String.Empty;
        }

        public static implicit operator NullableBool(bool value)
        {
            return new NullableBool(value);
        }

        public static explicit operator bool(NullableBool value)
        {
            return value.Value;
        }

        private bool mHasValue;
        private bool mValue;
    }
}
```


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100
