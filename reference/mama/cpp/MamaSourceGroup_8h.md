---
title: mama/MamaSourceGroup.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaSourceGroup.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaSourceGroup](classWombat_1_1MamaSourceGroup.html)**  |
| class | **[Wombat::MamaSourceGroup::iterator](classWombat_1_1MamaSourceGroup_1_1iterator.html)**  |




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

#ifndef MamaSourceGroup_CPP_H__
#define MamaSourceGroup_CPP_H__

#include <mama/types.h>
#include <mama/MamaSourceStateChangeCallback.h>

namespace Wombat
{

    class MamaSource;
    class MamaSourceStateChangeCallback;

    class MAMACPPExpDLL MamaSourceGroup
    {
    public:
        MamaSourceGroup               (const char*  name);
        ~MamaSourceGroup              ();

        const char*        getName    () const;

        MamaSource*        find       (const char*  sourceName);
        const MamaSource*  find       (const char*  sourceName) const;

        void               add        (MamaSource*  source,
                                       mama_u32_t   weight);
        void               add        (const char*  sourceName,
                                       mama_u32_t   weight,
                                       MamaSource*  source);

        void               setWeight  (const char*  sourceName,
                                       mama_u32_t   weight);
        mama_u32_t         getWeight  (const char*  sourceName) const;

        mama_size_t        size       () const;

        void               registerStateChangeCallback   (MamaSourceStateChangeCallback& cb);

        void               unregisterStateChangeCallback (MamaSourceStateChangeCallback& cb);

        bool               reevaluate ();

        class MAMACPPExpDLL iterator
        {
        private:
            friend class      MamaSourceGroup;
            struct            iteratorImpl;
            iteratorImpl&     mImpl;
            iterator                     (const iteratorImpl& copy);
        public:
            iterator                     ();
            iterator                     (const iterator& copy);
            ~iterator                    ();

            iterator&         operator=  (const iterator& rhs);
            const iterator&   operator=  (const iterator& rhs) const;
            iterator&         operator++ ();
            const iterator&   operator++ () const;
            bool              operator== (const iterator& rhs) const;
            bool              operator!= (const iterator& rhs) const;
            MamaSource*       operator*  ();
            const MamaSource* operator*  () const;
        };

        typedef  const        iterator const_iterator;

        iterator              begin      ();
        const_iterator        begin      () const;
        iterator              end        ();
        const_iterator        end        () const;

    private:
        struct                MamaSourceGroupImpl;
        MamaSourceGroupImpl&  myImpl;

        // No copy contructor nor assignment operator.
        MamaSourceGroup                  (const MamaSourceGroup& rhs);
        MamaSourceGroup&      operator=  (const MamaSourceGroup& rhs);
    };

} // namespace Wombat


#endif // MamaSourceGroup_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
