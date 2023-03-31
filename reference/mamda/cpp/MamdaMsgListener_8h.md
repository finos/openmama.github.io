---
title: mamda/MamdaMsgListener.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaMsgListener.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**  |
| class | **[Wombat::MamdaBasicMsgListener](classWombat_1_1MamdaBasicMsgListener.html)**  |




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

#ifndef MamdaMsgListenerH
#define MamdaMsgListenerH

#include <mamda/MamdaConfig.h>
#include <mama/mamacpp.h>

namespace Wombat
{

    class MamdaSubscription;
    class MamdaBasicSubscription;

    class MAMDAExpDLL MamdaMsgListener
    {
    public:
        virtual void onMsg (MamdaSubscription*  subscription,
                            const MamaMsg&      msg,
                            short               msgType) = 0;
                            
        virtual ~MamdaMsgListener () {};
    };


    class MAMDAExpDLL MamdaBasicMsgListener
    {
    public:
        virtual void onMsg (MamdaBasicSubscription*  subscription,
                            const MamaMsg&           msg,
                            short                    msgType) = 0;
                            
        virtual ~MamdaBasicMsgListener () {};
    };


} // namespace

#endif // MamdaMsgListenerH
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
