---
title: mama/MamaSymbolListFile.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSymbolListFile.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSymbolListFile](classWombat_1_1MamaSymbolListFile.html)**  |




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

#ifndef MAMA_SYMBOL_LIST_FILE_CPP_H__
#define MAMA_SYMBOL_LIST_FILE_CPP_H__

#include <mama/MamaSymbolList.h>

namespace Wombat 
{

    class MAMACPPExpDLL MamaSymbolListFile : public MamaSymbolList
    {
    public:
        MamaSymbolListFile();
        ~MamaSymbolListFile();

        void setFileName (const char*  fileName);

        void setBridge (const mamaBridge bridge);
        
        void readFile ();

        void writeFile ();

        void setFileMonitor (double      checkSeconds,
                             MamaQueue*  queue);

    private:
        struct MamaSymbolListFileImpl;
        MamaSymbolListFileImpl* myPimpl;
    };

} // namespace Wombat

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
