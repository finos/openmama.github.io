---
title: mama/MamaLogFile.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaLogFile.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaLogFile](classWombat_1_1MamaLogFile.html)**  |




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

#ifndef MAMA_LOF_FILE_CPP_H__
#define MAMA_LOF_FILE_CPP_H__

#include "mama/mamacpp.h"

namespace Wombat
{

    class MAMACPPExpDLL MamaLogFile
    {
    public:

        static void setMaxSize (unsigned long newMax);

        static void setNumBackups (unsigned int newNum);

        static void setAppendMode (bool append);

        static void enableLogging (const char* file, MamaLogLevel  level);

        static void disableLogging( void );

        static bool loggingToFile( void );

        static void rollFiles();

    private:
        MamaLogFile( void ) {}
    };

} // namespace Wombat
#endif // MAMA_LOF_FILE_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
