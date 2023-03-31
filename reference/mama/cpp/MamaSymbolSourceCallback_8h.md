---
title: mama/MamaSymbolSourceCallback.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSymbolSourceCallback.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSymbolSourceCallback](classWombat_1_1MamaSymbolSourceCallback.html)**  |




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

#ifndef MAMA_SYMBOL_SOURCE_CALLBACK_CPP_H__
#define MAMA_SYMBOL_SOURCE_CALLBACK_CPP_H__

#include "mama/mamacpp.h"

namespace Wombat 
{
    class MamaSymbolSource;

    class MAMACPPExpDLL MamaSymbolSourceCallback
    {
    public:
        virtual ~MamaSymbolSourceCallback () {};

        virtual void onSymbol (MamaSymbolSource* symbolSource,
                               const char*       symbol,
                               void*             closure) = 0;
    };

} // namespace Wombat
#endif // MAMA_SYMBOL_SOURCE_CALLBACK_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:27 +0100
