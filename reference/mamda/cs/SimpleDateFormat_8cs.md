---
title: Options/SimpleDateFormat.cs
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Options/SimpleDateFormat.cs



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |
| **[System::Globalization](namespaceSystem_1_1Globalization.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::SimpleDateFormat](classWombat_1_1SimpleDateFormat.html)** <br>Wraps a date formatting settings  |




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
using System.Globalization;

namespace Wombat
{
    public sealed class SimpleDateFormat
    {
        public SimpleDateFormat(string format) : this(format, CultureInfo.InvariantCulture)
        {
        }

        public SimpleDateFormat(string format, IFormatProvider formatProvider)
        {
            mFormat = format;
            mFormatProvider= formatProvider;
        }

        public string FormatString
        {
            get
            {
                return mFormat;
            }
        }

        public IFormatProvider FormatProvider
        {
            get
            {
                return mFormatProvider;
            }
        }

        public string Format(DateTime dateTime)
        {
            return Format(dateTime, mFormat, mFormatProvider);
        }

        public static string Format(DateTime dateTime, string format, IFormatProvider formatProvider)
        {
            return dateTime.ToString(format, formatProvider);
        }

        public DateTime Parse(string dateTimeString)
        {
            return Parse(dateTimeString, mFormat, mFormatProvider);
        }

        public static DateTime Parse(string dateTimeString, string format, IFormatProvider formatProvider)
        {
            return DateTime.ParseExact(dateTimeString, format, formatProvider);
        }

        private string mFormat;
        private IFormatProvider mFormatProvider;
    }
}
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100
