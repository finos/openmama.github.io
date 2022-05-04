---
title: mamda/MamdaQuoteClosing.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaQuoteClosing.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaQuoteClosing](classWombat_1_1MamdaQuoteClosing.html)**  |




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

#ifndef MamdaQuoteClosingH
#define MamdaQuoteClosingH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicEvent.h>
#include <mamda/MamdaFieldState.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaQuoteClosing : public MamdaBasicEvent
    {
    public:
        virtual const MamaPrice&  getBidClosePrice() const = 0;

        virtual MamdaFieldState getBidClosePriceFieldState() const = 0;

        virtual const MamaPrice&  getAskClosePrice() const = 0;

        virtual MamdaFieldState getAskClosePriceFieldState() const = 0;
        
        virtual ~MamdaQuoteClosing() {};
    };


} // namespace

#endif // MamdaQuoteClosingH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
