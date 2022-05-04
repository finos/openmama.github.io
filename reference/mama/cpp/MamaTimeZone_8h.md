---
title: mama/MamaTimeZone.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaTimeZone.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaTimeZone](classWombat_1_1MamaTimeZone.html)**  |




## Source code

```cpp
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

#ifndef MamaTimeZoneHpp__
#define MamaTimeZoneHpp__

#include <mama/timezone.h>


namespace Wombat 
{

    class MAMACPPExpDLL MamaTimeZone
    {
    public:
        static const MamaTimeZone& local ();

        static const MamaTimeZone& utc ();

        static const MamaTimeZone& usEastern ();

        MamaTimeZone ();

        MamaTimeZone (const char* tz);

        MamaTimeZone (const MamaTimeZone&  copy);

        ~MamaTimeZone ();

        MamaTimeZone& operator= (const MamaTimeZone& rhs);

        void set (const char* tz);

        void clear ();

        const char* tz () const;

        mama_i32_t offset () const;

        void check();

        mamaTimeZone        getCValue ()       { return myCimpl; }
        const mamaTimeZone  getCValue () const { return myCimpl; }

        static void setScanningInterval (mama_f64_t seconds);

    private:
        mamaTimeZone  myCimpl;

        MamaTimeZone (mamaTimeZone  cimpl);
    }; // MamaTimeZone

} // namespace Wombat

#endif // MamaTimeZoneHpp__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
