---
title: mamda/MamdaMultiSecurityHandler.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaMultiSecurityHandler.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaMultiSecurityHandler](classWombat_1_1MamdaMultiSecurityHandler.html)**  |




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

#ifndef MamdaMultiSecurityHandlerH
#define MamdaMultiSecurityHandlerH

#include <mamda/MamdaConfig.h>

namespace Wombat
{

    class MamdaSubscription;
    class MamdaMultiSecurityManager;

    class MAMDAExpDLL MamdaMultiSecurityHandler
    {
    public:
        
        virtual void onSecurityCreate (
            MamdaSubscription*             subscription,
            MamdaMultiSecurityManager&     manager,
            const char*                    securitySymbol,
            bool                           isPrimary) = 0;

        virtual ~MamdaMultiSecurityHandler() {};
    };

} // namespace

#endif // MamdaMultiSecurityHandlerH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
