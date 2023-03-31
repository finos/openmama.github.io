---
title: mama/MamaBasicSubscriptionCallback.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaBasicSubscriptionCallback.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html)**  |




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

#ifndef MAMA_BASIC_SUBSCRIPTION_CALLBACK_CPP_H__
#define MAMA_BASIC_SUBSCRIPTION_CALLBACK_CPP_H__

#include "mama/mamacpp.h"
#include "mama/MamaStatus.h"

namespace Wombat 
{
class MamaBasicSubscription;

class MAMACPPExpDLL MamaBasicSubscriptionCallback
{
public:
    virtual ~MamaBasicSubscriptionCallback() {};

    virtual void onCreate (
        MamaBasicSubscription*  subscription) = 0;

    virtual void onError (
        MamaBasicSubscription*  subscription,
        const MamaStatus&       status,
        const char*             topic) = 0;

    virtual void onMsg (
        MamaBasicSubscription*  subscription, 
        MamaMsg&                msg) = 0;


    virtual void onDestroy (
        MamaBasicSubscription* subscription, 
        void*                  closure)
    {
    };

};


} // namespace Wombat
#endif // MAMA_BASIC_SUBSCRIPTION_CALLBACK_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
