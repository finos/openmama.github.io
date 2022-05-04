---
title: mamda/MamdaOrderImbalanceFields.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaOrderImbalanceFields.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaOrderImbalanceFields](classWombat_1_1MamdaOrderImbalanceFields.html)**  |




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

#ifndef MamdaOrderImbalanceFieldsH
#define MamdaOrderImbalanceFieldsH

#include <mamda/MamdaConfig.h>
#include <mama/mamacpp.h>

namespace Wombat
{

    class MamaFieldDescriptor;
    class MamaDictionary;

    class MAMDAExpDLL MamdaOrderImbalanceFields
    {
    public:
       static const MamaFieldDescriptor* HIGH_INDICATION_PRICE;
       static const MamaFieldDescriptor* LOW_INDICATION_PRICE;
       static const MamaFieldDescriptor* INDICATION_PRICE;
       static const MamaFieldDescriptor* BUY_VOLUME;
       static const MamaFieldDescriptor* SELL_VOLUME;
       static const MamaFieldDescriptor* MATCH_VOLUME;
       static const MamaFieldDescriptor* SECURITY_STATUS_QUAL;
       static const MamaFieldDescriptor* INSIDE_MATCH_PRICE;
       static const MamaFieldDescriptor* FAR_CLEARING_PRICE;
       static const MamaFieldDescriptor* NEAR_CLEARING_PRICE;
       static const MamaFieldDescriptor* NO_CLEARING_PRICE;
       static const MamaFieldDescriptor* PRICE_VAR_IND;
       static const MamaFieldDescriptor* CROSS_TYPE;
       static const MamaFieldDescriptor* SRC_TIME;
       static const MamaFieldDescriptor* ACTIVITY_TIME;
       static const MamaFieldDescriptor* MSG_TYPE;
       static const MamaFieldDescriptor* ISSUE_SYMBOL;
       static const MamaFieldDescriptor* PART_ID;
       static const MamaFieldDescriptor* SEQ_NUM;
       static const MamaFieldDescriptor* SECURITY_STATUS_ORIG;
       static const MamaFieldDescriptor* SECURITY_STATUS_TIME;
       static const MamaFieldDescriptor* AUCTION_TIME;
       static const MamaFieldDescriptor* LINE_TIME;
       static const MamaFieldDescriptor* SEND_TIME;

       // calling setDictionary will also set the Common Fields
       static void setDictionary (const MamaDictionary&  dictionary);

       static void      reset     ();
       static uint16_t  getMaxFid ();
       static bool      isSet     ();
    }; //MamdaOrderImbalanceFields

}//namespace

#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
