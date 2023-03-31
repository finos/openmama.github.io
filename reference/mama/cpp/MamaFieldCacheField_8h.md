---
title: fieldcache/MamaFieldCacheField.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/MamaFieldCacheField.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaFieldCacheField](classWombat_1_1MamaFieldCacheField.html)**  |
| class | **[Wombat::MamaFieldCacheFieldBase](classWombat_1_1MamaFieldCacheFieldBase.html)**  |




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

#ifndef MAMA_FIELD_CACHE_FIELD_CPP_H__
#define MAMA_FIELD_CACHE_FIELD_CPP_H__

#include <mama/mamacpp.h>
#include <mama/fieldcache/fieldcachetypes.h>
#include <mama/fieldcache/fieldcachefield.h>
#include <cstring>

namespace Wombat
{

    class MamaFieldDescriptor;

class MAMACPPExpDLL MamaFieldCacheField
{
public:
    MamaFieldCacheField();
    virtual ~MamaFieldCacheField();

    MamaFieldCacheField(const MamaFieldCacheField& rhs);

    MamaFieldCacheField& operator=(const MamaFieldCacheField& rhs);

    bool operator==(const MamaFieldCacheField& rhs) const;
    bool operator!=(const MamaFieldCacheField& rhs) const;

    virtual void create(const MamaFieldDescriptor& descriptor);
    virtual void create(mama_fid_t fid, mamaFieldType type, const char* name = NULL);

    virtual void clear();

    virtual mama_fid_t getFid() const;

    virtual mamaFieldType getType() const;

    const char* getName() const;

    void setDescriptor(const MamaFieldDescriptor* descriptor);

    const MamaFieldDescriptor* getDescriptor() const;

    virtual bool isModified() const;

    virtual void setPublish(bool value = true);

    virtual bool getPublish() const;

    virtual void setCheckModified(bool value = true);

    virtual bool getCheckModified() const;

    virtual bool isVector() const;

    mamaFieldCacheField& getCValue();
    const mamaFieldCacheField& getCValue() const;

private:
    struct MamaFieldCacheFieldImpl;
    MamaFieldCacheFieldImpl* mPimpl;
};


class MAMACPPExpDLL MamaFieldCacheFieldBase
{
protected:
    MamaFieldCacheFieldBase() {}

public:
    virtual ~MamaFieldCacheFieldBase() {}

private: // Cannot copy MamaFieldCacheField objects
    MamaFieldCacheFieldBase(const MamaFieldCacheFieldBase& field);
    MamaFieldCacheFieldBase& operator=(const MamaFieldCacheFieldBase& field);
};

} // namespace Wombat

#endif // MAMA_FIELD_CACHE_FIELD_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
