---
title: mamda/MamdaTradeHandler.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaTradeHandler.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaTradeHandler](classWombat_1_1MamdaTradeHandler.html)**  |




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

#ifndef MamdaTradeHandlerH
#define MamdaTradeHandlerH

#include <mamda/MamdaConfig.h>
#include <mamda/MamdaTradeListener.h>
#include <mama/mamacpp.h>

namespace Wombat
{

    class MAMDAExpDLL MamdaTradeHandler
    {
    public:

        virtual void onTradeRecap (
            MamdaSubscription*      subscription,
            MamdaTradeListener&     listener,
            const MamaMsg&          msg,
            const MamdaTradeRecap&  recap) = 0;

        virtual void onTradeReport (
            MamdaSubscription*      subscription,
            MamdaTradeListener&     listener,
            const MamaMsg&          msg,
            const MamdaTradeReport& event,
            const MamdaTradeRecap&  recap) = 0;

        virtual void onTradeGap (
            MamdaSubscription*              subscription,
            MamdaTradeListener&             listener,
            const MamaMsg&                  msg,
            const MamdaTradeGap&            event,
            const MamdaTradeRecap&          recap) = 0;

        virtual void onTradeCancelOrError (
            MamdaSubscription*              subscription,
            MamdaTradeListener&             listener,
            const MamaMsg&                  msg,
            const MamdaTradeCancelOrError&  event,
            const MamdaTradeRecap&          recap) = 0;

        virtual void onTradeCorrection (
            MamdaSubscription*              subscription,
            MamdaTradeListener&             listener,
            const MamaMsg&                  msg,
            const MamdaTradeCorrection&     event,
            const MamdaTradeRecap&          recap) = 0;

        virtual void onTradeClosing (
            MamdaSubscription*              subscription,
            MamdaTradeListener&             listener,
            const MamaMsg&                  msg,
            const MamdaTradeClosing&        event,
            const MamdaTradeRecap&          recap) = 0;

        virtual void onTradeOutOfSequence (
            MamdaSubscription*              subscription,
            MamdaTradeListener&             listener,
            const MamaMsg&                  msg,
            const MamdaTradeOutOfSequence&  event,
            const MamdaTradeRecap&          recap) = 0;

        virtual void onTradePossiblyDuplicate (
            MamdaSubscription*                  subscription,
            MamdaTradeListener&                 listener,
            const MamaMsg&                      msg,
            const MamdaTradePossiblyDuplicate&  event,
            const MamdaTradeRecap&              recap) = 0;
            
        virtual ~MamdaTradeHandler() {};
    };

} // namespace

#endif // MamdaTradeHandlerH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
