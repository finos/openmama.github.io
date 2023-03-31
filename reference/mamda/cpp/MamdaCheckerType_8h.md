---
title: mamda/MamdaCheckerType.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaCheckerType.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |




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

#ifndef MamdaCheckerTypeH
#define MamdaCheckerTypeH

#include <mama/log.h>

namespace Wombat
{

    enum MamdaCheckerType
    {
        MAMDA_CHECK_TYPE_NONE,
        MAMDA_CHECK_TYPE_SNAPSHOT,
        MAMDA_CHECK_TYPE_APPLY_DELTA
    };

    MAMDAExpDLL
    extern const char* mamdaCheckTypeToString (
        MamdaCheckerType type);
    
} // namespace

#endif //MamdaCheckerTypeH
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
