---
title: mamda/MamdaPubStatusFields.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaPubStatusFields.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaPubStatusFields](classWombat_1_1MamdaPubStatusFields.html)**  |




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

#ifndef MamdaPubStatusFieldsH
#define MamdaPubStatusFieldsH

#include <mamda/MamdaConfig.h>
#include <mama/mamacpp.h>

namespace Wombat
{

    class MamaFieldDescriptor;
    class MamaDictionary;

    class MAMDAExpDLL MamdaPubStatusFields
    {
    public:
        static const MamaFieldDescriptor*  SYMBOL;
        static const MamaFieldDescriptor*  ACTIVITY_TIME;
        static const MamaFieldDescriptor*  ACTIVITY_DATE;
        static const MamaFieldDescriptor*  PUB_ID;
        static const MamaFieldDescriptor*  PUB_CLASS;
        static const MamaFieldDescriptor*  PUB_HOST_NAME;
        static const MamaFieldDescriptor*  STATUS_MSG_TYPE;
        static const MamaFieldDescriptor*  PUB_FT_MODE;
        static const MamaFieldDescriptor*  PUB_MH_MODE;
        static const MamaFieldDescriptor*  LINE_STATUS;
        static const MamaFieldDescriptor*  STATUS_SEQ_NUM;
        static const MamaFieldDescriptor*  MSG_GAP_BEGIN;
        static const MamaFieldDescriptor*  MSG_GAP_END;
        static const MamaFieldDescriptor*  PUB_CACHE_SIZE;
        static const MamaFieldDescriptor*  FREE_TEXT;

        static void  setDictionary (const MamaDictionary&  dictionary);

        static void      reset     ();
        static uint16_t  getMaxFid ();
        static bool      isSet     ();
    };

}

#endif // MamdaPubStatusFieldsH
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
