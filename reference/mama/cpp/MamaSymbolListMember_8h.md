---
title: mama/MamaSymbolListMember.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSymbolListMember.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSymbolListMember](classWombat_1_1MamaSymbolListMember.html)**  |




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

#ifndef MAMA_SYMBOL_LIST_MEMBER_CPP_H__
#define MAMA_SYMBOL_LIST_MEMBER_CPP_H__

#include <mama/mamacpp.h>
#include <mama/symbollisttypes.h>


namespace Wombat 
{
    class MamaSymbolList;

    class MAMACPPExpDLL MamaSymbolListMember
    {
    public:
        MamaSymbolListMember(MamaSymbolList* symbolList);

        MamaSymbolListMember( MamaSymbolList* list, mamaSymbolListMember cMember);

        virtual ~MamaSymbolListMember();

        const char* getSymbol () const;

        const char* getSource () const;

        MamaTransport* getTransport () const;

        MamaSymbolList* getSymbolList () const;

        void* getClosure () const;

        void setClosure (void*  closure);

        void setSymbol (const char*  symbol);

        void setSource (const char*  source);

        void setTransport (MamaTransport*  transport);

        void setSymbolList (MamaSymbolList*  symbolList);

    protected:
        friend class MamaSymbolList;
        mamaSymbolListMember getCimpl();

    private:
        struct MamaSymbolListMemberImpl;
        MamaSymbolListMemberImpl*  myPimpl;
    };

} // namespace Wombat

#endif // MAMA_SYMBOL_LIST_MEMBER_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
