---
title: mamda/MamdaQuoteChecker.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaQuoteChecker.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaQuoteChecker](classWombat_1_1MamdaQuoteChecker.html)**  |




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

#ifndef MamdaQuoteCheckerH
#define MamdaQuoteCheckerH

#include <mamda/MamdaConfig.h>
#include <mama/mamacpp.h>
#include <mamda/MamdaCheckerHandler.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaQuoteChecker
    {
    public:
        
        MamdaQuoteChecker (MamaQueue*            queue,
                           MamdaCheckerHandler*  handler,
                           MamaSource*           source,
                           const char*           symbol,
                           mama_f64_t            intervalSeconds);
        
        ~MamdaQuoteChecker ();
        
        void checkSnapShotNow();
        
        mama_u32_t getSuccessCount() const;

        mama_u32_t getInconclusiveCount() const;

        mama_u32_t getFailureCount() const;
        
        struct MamdaQuoteCheckerImpl;
        
    private:
        MamdaQuoteCheckerImpl& mImpl;

    };

} //namespace

#endif // MamdaQuoteCheckerH  




 
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
