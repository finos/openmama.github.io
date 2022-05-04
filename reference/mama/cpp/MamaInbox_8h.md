---
title: mama/MamaInbox.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaInbox.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaInbox](classWombat_1_1MamaInbox.html)**  |




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

#ifndef MAMA_INBOX_CPP_H__
#define MAMA_INBOX_CPP_H__

#include <mama/mamacpp.h>

namespace Wombat 
{

    class MAMACPPExpDLL MamaInbox
    {
        /* Private Member Variables. */
        mamaInbox           mInbox;
        MamaInboxCallback * mCallback;
        void *              mClosure;    

        /* Private Functions. */    
        static void MAMACALLTYPE onInboxDestroy (mamaInbox   inbox, 
                                                 void        *closure);

        static void MAMACALLTYPE onInboxError   (mama_status status, 
                                                 void        *closure);

        static void MAMACALLTYPE onInboxMsg     (mamaMsg     msg, 
                                                 void        *closure);    

    public:
        virtual ~MamaInbox (void);

        MamaInbox (void);

        virtual void  create     (MamaTransport*       transport,
                                  MamaQueue*           queue,
                                  MamaInboxCallback*   callback,
                                  void*                closure = NULL);

        virtual void  destroy    (void);
        virtual void* getClosure (void) const;

        // Access to C types for implementation of related classes.
        mamaInbox        getCValue    ();
        const mamaInbox  getCValue    () const;
    };

} // namespace Wombat
#endif // MAMA_INBOX_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
