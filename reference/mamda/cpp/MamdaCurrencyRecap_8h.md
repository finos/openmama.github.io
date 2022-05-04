---
title: mamda/MamdaCurrencyRecap.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaCurrencyRecap.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaCurrencyRecap](classWombat_1_1MamdaCurrencyRecap.html)**  |




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

#ifndef MamdaCurrencyRecapH
#define MamdaCurrencyRecapH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicRecap.h>
#include <mamda/MamdaFieldState.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaCurrencyRecap : public MamdaBasicRecap
    {
    public:
        virtual const MamaPrice&  getBidPrice()  const = 0;
      
        virtual const MamaPrice&  getAskPrice()  const = 0;

        virtual MamdaFieldState   getBidPriceFieldState()  const = 0;
      
        virtual MamdaFieldState   getAskPriceFieldState()  const = 0;

        virtual ~MamdaCurrencyRecap() {};
    };

} // namespace

#endif // MamdaCurrencyRecapH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
