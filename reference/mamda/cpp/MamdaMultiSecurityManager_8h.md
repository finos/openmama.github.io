---
title: mamda/MamdaMultiSecurityManager.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaMultiSecurityManager.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html)**  |




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

#ifndef MamdaMultiSecurityManagerH
#define MamdaMultiSecurityManagerH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaMsgListener.h>
#include <mamda/MamdaMultiSecurityHandler.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaMultiSecurityManager : public MamdaMsgListener
    {
    public:

        MamdaMultiSecurityManager (const char*  symbol);

        virtual ~MamdaMultiSecurityManager();

        void addHandler (MamdaMultiSecurityHandler*  handler);

        void addSecurityListener (MamdaMsgListener*  listener,
                                  const char*        securitySymbol);

        void onMsg (MamdaSubscription*  subscription,
                    const MamaMsg&      msg,
                    short               msgType);

    private:
        struct MamdaMultiSecurityManagerImpl;
        MamdaMultiSecurityManagerImpl& mImpl;
    };

} // namespace

#endif // MamdaMultiSecurityManagerH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
