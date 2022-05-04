---
title: mama/MamaSendCompleteCallback.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSendCompleteCallback.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSendCompleteCallback](classWombat_1_1MamaSendCompleteCallback.html)**  |




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

#ifndef MAMA_SEND_COMPLETE_CB_H__
#define MAMA_SEND_COMPLETE_CB_H__

namespace Wombat 
{

    class MamaPublisher;
    class MamaMsg;
    class MamaStatus;

    class MAMACPPExpDLL MamaSendCompleteCallback
    {
    public:
        virtual ~MamaSendCompleteCallback () 
        {
        };

        virtual void onSendComplete (
            MamaPublisher&  publisher,
            MamaMsg*        msg,
            MamaStatus&     status,
            void*           closure) = 0;
    };

} // namespace Wombat
#endif //MAMA_SEND_COMPLETE_CB
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
