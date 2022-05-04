---
title: mamda/MamdaSecStatus.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaSecStatus.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaSecStatus](classWombat_1_1MamdaSecStatus.html)**  |




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

#ifndef MamdaSecStatusH
#define MamdaSecStatusH 

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaBasicEvent.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaSecStatus : public MamdaBasicEvent
    {
    public:

        virtual const char*  getIssueSymbol() const = 0;

        virtual MamdaFieldState  getIssueSymbolFieldState() const = 0;

        virtual const char*  getReason() const = 0;

        virtual MamdaFieldState  getReasonFieldState() const = 0;

         virtual char  getShortSaleCircuitBreaker() const = 0;

         virtual MamdaFieldState  getShortSaleCircuitBreakerFieldState() const =0;
           
        virtual char  getSecurityAction() const = 0;

        virtual MamdaFieldState  getSecurityActionFieldState() const = 0;

        virtual const char*  getSecurityType() const = 0;

        virtual MamdaFieldState  getSecurityTypeFieldState() const = 0;

        virtual const char*  getSecurityStatus() const = 0;

        virtual MamdaFieldState  getSecurityStatusFieldState() const = 0;

        virtual const char*  getSecurityStatusQual() const = 0;

        virtual MamdaFieldState  getSecurityStatusQualFieldState() const = 0;

        virtual const char*  getSecurityStatusNative() const = 0;

        virtual MamdaFieldState  getSecurityStatusNativeFieldState() const = 0;

        virtual const char*  getFreeText() const = 0;

        virtual MamdaFieldState getFreeTextFieldState() const = 0;

        virtual ~MamdaSecStatus() {};
    };

} // namespace

#endif // MamdaSecStatusH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
