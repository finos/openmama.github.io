---
title: mamda/MamdaTradeDirection.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeDirection.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |




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

#ifndef MamdaTradeDirectionH
#define MamdaTradeDirectionH

#include <mamda/MamdaConfig.h>

namespace Wombat
{

    enum MamdaTradeDirection
    {
        TRADE_DIR_ZERO,           /* toString() returns ""   */
        TRADE_DIR_PLUS,           /* toString() returns "+"  */
        TRADE_DIR_MINUS,          /* toString() returns "-"  */
        TRADE_DIR_ZERO_PLUS,      /* toString() returns "0+" */
        TRADE_DIR_ZERO_MINUS,     /* toString() returns "0-" */
        TRADE_DIR_NA,             /* toString() returns "NA" */
        TRADE_DIR_UNKNOWN = 99    /* toString() returns "ZZ" */
    };


    MAMDAExpDLL const char* toString (MamdaTradeDirection  tradeDir);

    MAMDAExpDLL MamdaTradeDirection mamdaTradeDirectionFromString (const char*  tradeDirStr);

}

#endif // MamdaTradeDirectionH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
