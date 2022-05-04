---
title: mama/MamaFieldDescriptor.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaFieldDescriptor.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaFieldDescriptor](classWombat_1_1MamaFieldDescriptor.html)**  |




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

#ifndef MAMA_FIELD_DESCRIPTOR_CPP_H__
#define MAMA_FIELD_DESCRIPTOR_CPP_H__

#include <mama/mamacpp.h>

namespace Wombat 
{
    class FieldDescriptorImpl;

    class MAMACPPExpDLL MamaFieldDescriptor
    {
    public:
        virtual ~MamaFieldDescriptor ();

        MamaFieldDescriptor (mamaFieldDescriptor field);

        MamaFieldDescriptor (mama_fid_t            fid,
                             mamaFieldType         type,
                             const char*           name);

        mama_fid_t getFid (void) const;

        mamaFieldType getType (void) const;

        const char* getName (void) const;

        const char* getTypeName (void) const;

        void setClosure (void* closure);

        void* getClosure () const;

        void setTrackModState (bool on);

        bool getTrackModState () const;

        void setPubName (const char* pubName);

        const char* getPubName () const;

        FieldDescriptorImpl* mPimpl;
    };

} // namespace Wombat
#endif // MAMA_FIELD_DESCRIPTOR_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
