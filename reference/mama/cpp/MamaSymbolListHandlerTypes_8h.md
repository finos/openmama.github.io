---
title: mama/MamaSymbolListHandlerTypes.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSymbolListHandlerTypes.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSymbolListIteratorHandler](classWombat_1_1MamaSymbolListIteratorHandler.html)**  |
| class | **[Wombat::MamaSymbolListMembershipHandler](classWombat_1_1MamaSymbolListMembershipHandler.html)**  |
| class | **[Wombat::MamaSymbolListResortHandler](classWombat_1_1MamaSymbolListResortHandler.html)**  |




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

#ifndef MAMA_SYMBOL_LIST_HANDLER_TYPES_CPP_H__
#define MAMA_SYMBOL_LIST_HANDLER_TYPES_CPP_H__

#include <mama/mamacpp.h>

namespace Wombat 
{
    class MamaSymbolList;


    class MAMACPPExpDLL MamaSymbolListIteratorHandler
    {
    public:
        virtual ~MamaSymbolListIteratorHandler () {};

        virtual void onMember (MamaSymbolList&        symbolList,
                               MamaSymbolListMember&  member,
                               void*                  iterateClosure) = 0;

        virtual void onComplete (MamaSymbolList&        symbolList,
                                 void*                  iterateClosure) {}
    };


    class MamaSymbolListMembershipHandler
    {
    public:
        virtual ~MamaSymbolListMembershipHandler () {};

        virtual void onMemberAdd (MamaSymbolList&        symbolList,
                                  MamaSymbolListMember&  member) = 0;

        virtual void onMemberRemove (MamaSymbolList&        symbolList,
                                     MamaSymbolListMember&  member) = 0;
        
        virtual void onOrderChange (MamaSymbolList&  symbolList) = 0;
    };


    class MamaSymbolListResortHandler
    {
    public:
        virtual ~MamaSymbolListResortHandler () {};

        virtual void onResort (MamaSymbolList*  symbolList) = 0;
    };

} // namespace Wombat
#endif // MAMA_SYMBOL_LIST_HANDLER_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
