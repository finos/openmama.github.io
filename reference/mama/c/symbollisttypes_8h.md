---
title: mama/symbollisttypes.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/symbollisttypes.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct mamaSymbolList_ * | **[mamaSymbolList](symbollisttypes_8h.html#typedef-mamasymbollist)** <br>Structure containing all fields to implement a symbol list.  |
| typedef struct mamaSymbolListMember_ * | **[mamaSymbolListMember](symbollisttypes_8h.html#typedef-mamasymbollistmember)** <br>Structure containing all fields to implement a symbollist member.  |

## Types Documentation

### typedef mamaSymbolList

```cpp
typedef struct mamaSymbolList_* mamaSymbolList;
```

Structure containing all fields to implement a symbol list. 

### typedef mamaSymbolListMember

```cpp
typedef struct mamaSymbolListMember_* mamaSymbolListMember;
```

Structure containing all fields to implement a symbollist member. 




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

#ifndef MamaSymbolListTypesH__
#define MamaSymbolListTypesH__

#if defined(__cplusplus)
extern "C" {
#endif

/* *************************************************** */
/* Forward Declarations. */
/* *************************************************** */
typedef struct mamaSymbolList_*        mamaSymbolList;
typedef struct mamaSymbolListMember_*  mamaSymbolListMember;

#if defined(__cplusplus)
}
#endif

#endif
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
