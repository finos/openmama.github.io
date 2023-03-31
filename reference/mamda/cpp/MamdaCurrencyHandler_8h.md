---
title: mamda/MamdaCurrencyHandler.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaCurrencyHandler.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaCurrencyHandler](classWombat_1_1MamdaCurrencyHandler.html)**  |




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

#ifndef MamdaCurrencyHandlerH
#define MamdaCurrencyHandlerH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaCurrencyListener.h>
#include <mama/mamacpp.h>
#include <mamda/MamdaCurrencyRecap.h>
#include <mamda/MamdaCurrencyUpdate.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaCurrencyHandler
    {
    public:
     
        virtual void onCurrencyRecap (
            MamdaSubscription*          subscription,
            MamdaCurrencyListener&      listener,
            const MamaMsg&              msg,
            const MamdaCurrencyRecap&   recap) = 0;
        
        virtual void onCurrencyUpdate (
            MamdaSubscription*          subscription,
            MamdaCurrencyListener&      listener,
            const MamaMsg&              msg,
            const MamdaCurrencyRecap&   recap,
            const MamdaCurrencyUpdate&  update) = 0;
            
        virtual ~MamdaCurrencyHandler() {};
    };

} // namespace

#endif // MamdaCurrencyHandlerH
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
