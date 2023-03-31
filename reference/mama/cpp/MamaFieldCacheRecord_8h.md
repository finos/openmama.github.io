---
title: fieldcache/MamaFieldCacheRecord.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/MamaFieldCacheRecord.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaFieldCacheRecord](classWombat_1_1MamaFieldCacheRecord.html)**  |




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

#ifndef MAMA_FIELD_CACHE_RECORD_CPP_H__
#define MAMA_FIELD_CACHE_RECORD_CPP_H__

#include <mama/mamacpp.h>
#include <mama/fieldcache/fieldcachetypes.h>
#include <string>

namespace Wombat
{

    class MamaFieldCacheField;

class MAMACPPExpDLL MamaFieldCacheRecord
{
public:
    MamaFieldCacheRecord();
    virtual ~MamaFieldCacheRecord();

    virtual void create();

    virtual void clear();

    virtual MamaFieldCacheField& add(mama_fid_t fid,
                                     mamaFieldType type,
                                     const char* name = NULL);

    virtual MamaFieldCacheField& add(const MamaFieldDescriptor& descriptor);


    virtual const MamaFieldCacheField& operator[](mama_size_t index) const;
    virtual MamaFieldCacheField& operator[](mama_size_t index);

    virtual const MamaFieldCacheField& find(mama_fid_t fid,
                                            const char* name = NULL) const;

    virtual MamaFieldCacheField& find(mama_fid_t fid, const char* name = NULL);
    virtual mama_size_t getSize() const;

    virtual mamaFieldCacheRecord getCValue();
    virtual const mamaFieldCacheRecord getCValue() const;

private:
    MamaFieldCacheRecord(const MamaFieldCacheRecord&);
    MamaFieldCacheRecord& operator=(const MamaFieldCacheRecord&);

private:
    struct MamaFieldCacheRecordImpl;
    MamaFieldCacheRecordImpl* mPimpl;
};

} // namespace Wombat

#endif
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
