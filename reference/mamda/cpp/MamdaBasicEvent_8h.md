---
title: mamda/MamdaBasicEvent.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaBasicEvent.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**  |




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

#ifndef MamdaBasicEventH
#define MamdaBasicEventH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaFieldState.h>
#include <mama/mamacpp.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaBasicEvent
    {
    public:

        virtual const char*  getSymbol() const = 0;
        
        virtual MamdaFieldState  getSymbolFieldState() const = 0;    

        virtual const char*  getPartId() const = 0;
        
        virtual MamdaFieldState  getPartIdFieldState() const = 0;

        virtual mama_seqnum_t  getEventSeqNum() const = 0;
        
        virtual MamdaFieldState  getEventSeqNumFieldState() const = 0;

        virtual const MamaDateTime&  getEventTime() const = 0;
        
        virtual MamdaFieldState  getEventTimeFieldState() const = 0;

        virtual const MamaDateTime&  getSrcTime() const = 0;
        
        virtual MamdaFieldState  getSrcTimeFieldState() const = 0;

        virtual const MamaDateTime&  getActivityTime() const = 0;
        
        virtual MamdaFieldState  getActivityTimeFieldState() const = 0;

        virtual const MamaDateTime&  getLineTime() const = 0;
        
        virtual MamdaFieldState  getLineTimeFieldState() const = 0;

        virtual const MamaDateTime&  getSendTime() const = 0;
        
        virtual MamdaFieldState  getSendTimeFieldState() const = 0;
        
        virtual const MamaMsgQual& getMsgQual() const = 0;

        virtual MamdaFieldState getMsgQualFieldState() const = 0;

        virtual ~MamdaBasicEvent () {};
    };

} // namespace

#endif // MamdaBasicEventH
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
