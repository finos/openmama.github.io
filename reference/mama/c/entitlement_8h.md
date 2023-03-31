---
title: mama/entitlement.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/entitlement.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct mamaEntitlementBridge_ * | **[mamaEntitlementBridge](entitlement_8h.html#typedef-mamaentitlementbridge)**  |
| typedef struct mamaEntitlementSubscription_ * | **[mamaEntitlementSubscription](entitlement_8h.html#typedef-mamaentitlementsubscription)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaEntitlementBridge_createSubscription](entitlement_8h.html#function-mamaentitlementbridge-createsubscription)**(mamaEntitlementSubscription * subscription) |
| mama_status | **[mamaEntitlementBridge_destroySubscription](entitlement_8h.html#function-mamaentitlementbridge-destroysubscription)**(mamaEntitlementSubscription subscription) |
| mama_status | **[mamaEntitlementBridge_create](entitlement_8h.html#function-mamaentitlementbridge-create)**(mamaEntitlementBridge * bridge) |
| mama_status | **[mamaEntitlementBridge_destroy](entitlement_8h.html#function-mamaentitlementbridge-destroy)**(mamaEntitlementBridge bridge) |

## Types Documentation

### typedef mamaEntitlementBridge

```cpp
typedef struct mamaEntitlementBridge_* mamaEntitlementBridge;
```


### typedef mamaEntitlementSubscription

```cpp
typedef struct mamaEntitlementSubscription_* mamaEntitlementSubscription;
```



## Functions Documentation

### function mamaEntitlementBridge_createSubscription

```cpp
MAMAExpDLL mama_status mamaEntitlementBridge_createSubscription(
    mamaEntitlementSubscription * subscription
)
```


### function mamaEntitlementBridge_destroySubscription

```cpp
mama_status mamaEntitlementBridge_destroySubscription(
    mamaEntitlementSubscription subscription
)
```


### function mamaEntitlementBridge_create

```cpp
mama_status mamaEntitlementBridge_create(
    mamaEntitlementBridge * bridge
)
```


### function mamaEntitlementBridge_destroy

```cpp
mama_status mamaEntitlementBridge_destroy(
    mamaEntitlementBridge bridge
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

#ifndef EntitlementH__
#define EntitlementH__

#if defined(__cplusplus)
extern "C"
{
#endif

typedef struct mamaEntitlementBridge_* mamaEntitlementBridge;
typedef struct mamaEntitlementSubscription_* mamaEntitlementSubscription;

MAMAExpDLL extern mama_status  /* Available externally as it is used in entitlement bridges. */
mamaEntitlementBridge_createSubscription (mamaEntitlementSubscription* subscription);

mama_status
mamaEntitlementBridge_destroySubscription (mamaEntitlementSubscription subscription);

mama_status
mamaEntitlementBridge_create (mamaEntitlementBridge* bridge);

mama_status
mamaEntitlementBridge_destroy (mamaEntitlementBridge bridge);


#if defined(__cplusplus)
}
#endif

#endif /* EntitlementH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
