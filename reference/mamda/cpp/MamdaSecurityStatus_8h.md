---
title: mamda/MamdaSecurityStatus.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaSecurityStatus.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |




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

#ifndef MamdaSecurityStatusH
#define MamdaSecurityStatusH

#include <mamda/MamdaConfig.h>

namespace Wombat
{

    enum MamdaSecurityStatus
    {
        SECURITY_STATUS_NONE,        /* toString() returns "None"   */
        SECURITY_STATUS_NORMAL,      /* toString() returns "Normal"  */
        SECURITY_STATUS_CLOSED,      /* toString() returns "Closed"  */
        SECURITY_STATUS_HALTED,      /* toString() returns "Halted" */
        SECURITY_STATUS_NOT_EXIST,   /* toString() returns "NotExist" */
        SECURITY_STATUS_DELETED,     /* toString() returns "Deleted" */
        SECURITY_STATUS_AUCTION,     /* toString() returns "Auction" */
        SECURITY_STATUS_CROSSING,    /* toString() returns "Crossing" */
        SECURITY_STATUS_SUSPENDED,   /* toString() returns "Suspended" */
        SECURITY_STATUS_AT_LAST,     /* toString() returns "AtLast" */
        SECURITY_STATUS_INACTIVE,    /* toString() returns "Inactive" */
        SECURITY_STATUS_UNKNOWN = 99 /* toString() returns "Unknown" */
    };

    MAMDAExpDLL const char* toString (MamdaSecurityStatus  securityStatus);

    MAMDAExpDLL MamdaSecurityStatus mamdaSecurityStatusFromString (
        const char* securityStatusStr);

}

#endif // MamdaSecurityStatusH
```


-------------------------------

Updated on 2023-03-31 at 15:30:00 +0100
