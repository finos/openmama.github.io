---
title: mama/subscriptiontype.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/subscriptiontype.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaSubscriptionType](subscriptiontype_8h.html#enum-mamasubscriptiontype)** { MAMA_SUBSC_TYPE_NORMAL = 0, MAMA_SUBSC_TYPE_GROUP = 1, MAMA_SUBSC_TYPE_BOOK = 2, MAMA_SUBSC_TYPE_BASIC = 3, MAMA_SUBSC_TYPE_DICTIONARY = 4, MAMA_SUBSC_TYPE_SYMBOL_LIST = 5, MAMA_SUBSC_TYPE_SYMBOL_LIST_NORMAL = 6, MAMA_SUBSC_TYPE_SYMBOL_LIST_GROUP = 7, MAMA_SUBSC_TYPE_SYMBOL_LIST_BOOK = 8} |
| typedef enum mamaSubscriptionType | **[mamaSubscriptionType](subscriptiontype_8h.html#typedef-mamasubscriptiontype)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL const char * | **[MamaSubscTypeStr](subscriptiontype_8h.html#function-mamasubsctypestr)**(mamaSubscriptionType subtype) |

## Types Documentation

### enum mamaSubscriptionType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_SUBSC_TYPE_NORMAL | 0|  Normal Subscription  |
| MAMA_SUBSC_TYPE_GROUP | 1|  Group Subscription  |
| MAMA_SUBSC_TYPE_BOOK | 2|  Book Subscription  |
| MAMA_SUBSC_TYPE_BASIC | 3|   |
| MAMA_SUBSC_TYPE_DICTIONARY | 4|  Dictionary Subscription  |
| MAMA_SUBSC_TYPE_SYMBOL_LIST | 5|  Symbol List Subscription  |
| MAMA_SUBSC_TYPE_SYMBOL_LIST_NORMAL | 6|  Symbol List Subscription  |
| MAMA_SUBSC_TYPE_SYMBOL_LIST_GROUP | 7|  Symbol List Subscription  |
| MAMA_SUBSC_TYPE_SYMBOL_LIST_BOOK | 8|  Symbol List Subscription  |




Enumeration to describe the type of subscription made 


### typedef mamaSubscriptionType

```cpp
typedef enum mamaSubscriptionType mamaSubscriptionType;
```


Enumeration to describe the type of subscription made 



## Functions Documentation

### function MamaSubscTypeStr

```cpp
MAMAExpDLL const char * MamaSubscTypeStr(
    mamaSubscriptionType subtype
)
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

#ifndef MAMA_SUBSC_TYPE_H__
#define MAMA_SUBSC_TYPE_H__

#include "wombat/port.h"
/*
 * This file provides subscription type information.
 */

#if defined(__cplusplus)
extern "C" {
#endif

typedef enum mamaSubscriptionType
{
    MAMA_SUBSC_TYPE_NORMAL                   = 0, 
    MAMA_SUBSC_TYPE_GROUP                    = 1, 
    MAMA_SUBSC_TYPE_BOOK                     = 2, 
    MAMA_SUBSC_TYPE_BASIC                    = 3, /* No Market data */
    MAMA_SUBSC_TYPE_DICTIONARY               = 4, 
    MAMA_SUBSC_TYPE_SYMBOL_LIST              = 5, 
    MAMA_SUBSC_TYPE_SYMBOL_LIST_NORMAL       = 6, 
    MAMA_SUBSC_TYPE_SYMBOL_LIST_GROUP        = 7, 
    MAMA_SUBSC_TYPE_SYMBOL_LIST_BOOK         = 8 
} mamaSubscriptionType;

MAMAExpDLL extern const char* MamaSubscTypeStr (mamaSubscriptionType subtype);

#if defined(__cplusplus)
}
#endif

#endif /* MAMA_SUBSC_TYPE_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:17 +0100
