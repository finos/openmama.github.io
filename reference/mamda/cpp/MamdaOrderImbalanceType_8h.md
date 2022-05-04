---
title: mamda/MamdaOrderImbalanceType.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaOrderImbalanceType.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderImbalanceType](classWombat_1_1MamdaOrderImbalanceType.html)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MAMDA_MARKET_IMBALANCE_BUY](MamdaOrderImbalanceType_8h.html#define-mamda-market-imbalance-buy)**  |
|  | **[MAMDA_MARKET_IMBALANCE_SELL](MamdaOrderImbalanceType_8h.html#define-mamda-market-imbalance-sell)**  |
|  | **[MAMDA_NO_MARKET_IMBALANCE](MamdaOrderImbalanceType_8h.html#define-mamda-no-market-imbalance)**  |
|  | **[MAMDA_MOC_IMBALANCE_BUY](MamdaOrderImbalanceType_8h.html#define-mamda-moc-imbalance-buy)**  |
|  | **[MAMDA_MOC_IMBALANCE_SELL](MamdaOrderImbalanceType_8h.html#define-mamda-moc-imbalance-sell)**  |
|  | **[MAMDA_NO_MOC_IMBALANCE](MamdaOrderImbalanceType_8h.html#define-mamda-no-moc-imbalance)**  |
|  | **[MAMDA_ORDER_IMB](MamdaOrderImbalanceType_8h.html#define-mamda-order-imb)**  |
|  | **[MAMDA_ORDER_INF](MamdaOrderImbalanceType_8h.html#define-mamda-order-inf)**  |
|  | **[MAMDA_ORDER_IMBALANCE_BUY](MamdaOrderImbalanceType_8h.html#define-mamda-order-imbalance-buy)**  |
|  | **[MAMDA_ORDER_IMBALANCE_SELL](MamdaOrderImbalanceType_8h.html#define-mamda-order-imbalance-sell)**  |
|  | **[MAMDA_NO_ORDER_IMBALANCE](MamdaOrderImbalanceType_8h.html#define-mamda-no-order-imbalance)**  |
|  | **[MAMDA_IMBALANCE_UNKNOWN](MamdaOrderImbalanceType_8h.html#define-mamda-imbalance-unknown)**  |




## Macros Documentation

### define MAMDA_MARKET_IMBALANCE_BUY

```cpp
#define MAMDA_MARKET_IMBALANCE_BUY "MktImbBuy"
```


### define MAMDA_MARKET_IMBALANCE_SELL

```cpp
#define MAMDA_MARKET_IMBALANCE_SELL "MktImbSell"
```


### define MAMDA_NO_MARKET_IMBALANCE

```cpp
#define MAMDA_NO_MARKET_IMBALANCE "NoMktImb"
```


### define MAMDA_MOC_IMBALANCE_BUY

```cpp
#define MAMDA_MOC_IMBALANCE_BUY "MocImbBuy"
```


### define MAMDA_MOC_IMBALANCE_SELL

```cpp
#define MAMDA_MOC_IMBALANCE_SELL "MocImbSell"
```


### define MAMDA_NO_MOC_IMBALANCE

```cpp
#define MAMDA_NO_MOC_IMBALANCE "NoMocImb"
```


### define MAMDA_ORDER_IMB

```cpp
#define MAMDA_ORDER_IMB "OrderImb"
```


### define MAMDA_ORDER_INF

```cpp
#define MAMDA_ORDER_INF "OrderInf"
```


### define MAMDA_ORDER_IMBALANCE_BUY

```cpp
#define MAMDA_ORDER_IMBALANCE_BUY "OrderImbBuy"
```


### define MAMDA_ORDER_IMBALANCE_SELL

```cpp
#define MAMDA_ORDER_IMBALANCE_SELL "OrderImbSell"
```


### define MAMDA_NO_ORDER_IMBALANCE

```cpp
#define MAMDA_NO_ORDER_IMBALANCE "OrderImbNone"
```


### define MAMDA_IMBALANCE_UNKNOWN

```cpp
#define MAMDA_IMBALANCE_UNKNOWN "UNKNOWN"
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

#ifndef MamdaOrderImbalanceTypeH
#define MamdaOrderImbalanceTypeH

#include <mamda/MamdaConfig.h>
#include <mama/mamacpp.h>
#include <stdio.h>
#include <string.h>

#define MAMDA_MARKET_IMBALANCE_BUY        "MktImbBuy"
#define MAMDA_MARKET_IMBALANCE_SELL       "MktImbSell"
#define MAMDA_NO_MARKET_IMBALANCE         "NoMktImb"
#define MAMDA_MOC_IMBALANCE_BUY           "MocImbBuy"
#define MAMDA_MOC_IMBALANCE_SELL          "MocImbSell"
#define MAMDA_NO_MOC_IMBALANCE            "NoMocImb"
#define MAMDA_ORDER_IMB                   "OrderImb"
#define MAMDA_ORDER_INF                   "OrderInf"
#define MAMDA_ORDER_IMBALANCE_BUY         "OrderImbBuy"
#define MAMDA_ORDER_IMBALANCE_SELL        "OrderImbSell"
#define MAMDA_NO_ORDER_IMBALANCE          "OrderImbNone"
#define MAMDA_IMBALANCE_UNKNOWN           "UNKNOWN"

namespace Wombat
{

    class MAMDAExpDLL MamdaOrderImbalanceType
    {
    public:

        typedef enum OrderImbalanceType_
        {
            MARKET_IMBALANCE_BUY_VALUE = 16,

            MARKET_IMBALANCE_SELL_VALUE,

            NO_MARKET_IMBALANCE_VALUE,

            MOC_IMBALANCE_BUY_VALUE,

            MOC_IMBALANCE_SELL_VALUE,

            NO_MOC_IMBALANCE_VALUE,

            ORDER_IMB_VALUE,

            ORDER_INF_VALUE,

            ORDER_IMBALANCE_BUY_VALUE,

            ORDER_IMBALANCE_SELL_VALUE,

            NO_ORDER_IMBALANCE_VALUE,

            UNKNOWN = -99

        } OrderImbalanceType;

        static const char* valueToString (const int   value);
        static const int   stringToValue (const char* type);

        static bool isMamdaOrderImbalanceType (const int value);

        static bool isMamdaImbalanceOrder (const int value);
    };

} // namespace
#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
