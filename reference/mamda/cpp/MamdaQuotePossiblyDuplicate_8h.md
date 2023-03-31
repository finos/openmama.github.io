---
title: mamda/MamdaQuotePossiblyDuplicate.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaQuotePossiblyDuplicate.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaQuotePossiblyDuplicate](classWombat_1_1MamdaQuotePossiblyDuplicate.html)**  |




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

#ifndef MamdaQuotePossiblyDuplicateH
#define MamdaQuotePossiblyDuplicateH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicEvent.h>
#include <mamda/MamdaFieldState.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaQuotePossiblyDuplicate : public MamdaBasicEvent
    {
    public:

        virtual const MamaPrice&  getBidPrice() const = 0;

        virtual MamdaFieldState getBidPriceFieldState() const = 0;

        virtual mama_quantity_t  getBidSize() const = 0;

        virtual MamdaFieldState getBidSizeFieldState() const = 0;

        virtual mama_quantity_t  getBidDepth() const = 0;

        virtual MamdaFieldState getBidDepthFieldState() const = 0;

        virtual const char*  getBidPartId() const = 0;

        virtual MamdaFieldState getBidPartIdFieldState() const = 0;

        virtual const MamaPrice&  getAskPrice() const = 0;

        virtual MamdaFieldState getAskPriceFieldState() const = 0;

        virtual mama_quantity_t  getAskSize() const = 0;

        virtual MamdaFieldState getAskSizeFieldState() const = 0;

        virtual mama_quantity_t  getAskDepth() const = 0;

        virtual MamdaFieldState getAskDepthFieldState() const = 0;

        virtual const char*  getAskPartId() const = 0;

        virtual MamdaFieldState getAskPartIdFieldState() const = 0;

        virtual const MamaPrice&  getQuoteMidPrice  () const = 0;

        virtual MamdaFieldState getQuoteMidPriceFieldState() const = 0;

        virtual const char*  getQuoteQualStr() const = 0;

        virtual MamdaFieldState getQuoteQualStrFieldState() const = 0;

        virtual ~MamdaQuotePossiblyDuplicate() {};
    };

} // namespace

#endif // MamdaQuotePossiblyDuplicateH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
