---
title: mamda/MamdaOrderImbalanceSide.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaOrderImbalanceSide.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ASK_SIDE_IMBALANCE](MamdaOrderImbalanceSide_8h.html#define-ask-side-imbalance)**  |
|  | **[BUY_SIDE_IMBALANCE](MamdaOrderImbalanceSide_8h.html#define-buy-side-imbalance)**  |
|  | **[NO_IMBALANCE_SIDE](MamdaOrderImbalanceSide_8h.html#define-no-imbalance-side)**  |




## Macros Documentation

### define ASK_SIDE_IMBALANCE

```cpp
#define ASK_SIDE_IMBALANCE "ASK"
```


### define BUY_SIDE_IMBALANCE

```cpp
#define BUY_SIDE_IMBALANCE "BID"
```


### define NO_IMBALANCE_SIDE

```cpp
#define NO_IMBALANCE_SIDE "NONE"
```


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

#ifndef MamdaOrderImbalanceSideH
#define MamdaOrderImbalanceSideH

#include <mamda/MamdaConfig.h>
#include <mama/mamacpp.h>

#define ASK_SIDE_IMBALANCE   "ASK"
#define BUY_SIDE_IMBALANCE   "BID"
#define NO_IMBALANCE_SIDE    "NONE"

namespace Wombat
{

    class MAMDAExpDLL MamdaOrderImbalanceSide
    {
    public:
        MamdaOrderImbalanceSide () {};
        ~MamdaOrderImbalanceSide ();

        typedef enum OrderImbalanceSide_
        {
            ASK_SIDE_IMBALANCE_VALUE = 0,

            BUY_SIDE_IMBALANCE_VALUE,

            NO_IMBALANCE_SIDE_VALUE

        } OrderImbalanceSide;

       const char* valueToString (const int value);

    };//class

} // namespace
#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100
