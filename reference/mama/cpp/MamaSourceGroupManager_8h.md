---
title: mama/MamaSourceGroupManager.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSourceGroupManager.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSourceGroupManager](classWombat_1_1MamaSourceGroupManager.html)**  |
| class | **[Wombat::MamaSourceGroupManager::iterator](classWombat_1_1MamaSourceGroupManager_1_1iterator.html)**  |




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

#ifndef MamaSourceGroupManager_CPP_H__
#define MamaSourceGroupManager_CPP_H__

#include <mama/types.h>
#include <mama/config.h>

namespace Wombat
{

    class MamaSourceGroup;

    class MAMACPPExpDLL MamaSourceGroupManager
    {
    public:
        MamaSourceGroupManager              ();
        ~MamaSourceGroupManager             ();

        MamaSourceGroup*           create       (const char*  groupName);
        MamaSourceGroup*           findOrCreate (const char*  groupName);
        MamaSourceGroup*           find         (const char*  groupName);
        const MamaSourceGroup*     find         (const char*  groupName) const;
        mama_size_t                size         () const;

        class MAMACPPExpDLL iterator
        {
        private:
            friend class           MamaSourceGroupManager;
            struct                 iteratorImpl;
            iteratorImpl&          mImpl;
            iterator                            (const iteratorImpl& copy);
        public:
            iterator                            ();
            iterator                            (const iterator& copy);
            ~iterator                           ();

            iterator&              operator=    (const iterator& rhs);
            const iterator&        operator=    (const iterator& rhs) const;
            iterator&              operator++   ();
            const iterator&        operator++   () const;
            bool                   operator==   (const iterator& rhs) const;
            bool                   operator!=   (const iterator& rhs) const;
            MamaSourceGroup*       operator*    ();
            const MamaSourceGroup* operator*    () const;
        };

        typedef const              iterator const_iterator;

        iterator                   begin        ();
        const_iterator             begin        () const;
        iterator                   end          ();
        const_iterator             end          () const;

    private:
        struct                       MamaSourceGroupManagerImpl;
        MamaSourceGroupManagerImpl&  myImpl;

        // No copy constructor nor assignment operator.
        MamaSourceGroupManager                  (const MamaSourceGroupManager& rhs);
        MamaSourceGroupManager&    operator=    (const MamaSourceGroupManager& rhs);
    };

} // namespace Wombat


#endif // MamaSourceGroupManager_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
