---
title: fieldcache/MamaFieldCache.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/MamaFieldCache.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaFieldCache](classWombat_1_1MamaFieldCache.html)**  |
| class | **[Wombat::MamaFieldCache::MamaFieldCacheIterator](classWombat_1_1MamaFieldCache_1_1MamaFieldCacheIterator.html)**  |
| class | **[Wombat::MamaFieldCache::iterator](classWombat_1_1MamaFieldCache_1_1iterator.html)**  |
| class | **[Wombat::MamaFieldCache::const_iterator](classWombat_1_1MamaFieldCache_1_1const__iterator.html)**  |




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

#ifndef MAMA_FIELD_CACHE_CPP_H__
#define MAMA_FIELD_CACHE_CPP_H__

#include <iterator>

#include <mama/mamacpp.h>
#include <mama/fieldcache/MamaFieldCacheField.h>
#include <mama/fieldcache/fieldcache.h>

namespace Wombat
{
    class MamaMsg;
    class MamaDictionary;
    class MamaFieldCacheRecord;

class MAMACPPExpDLL MamaFieldCache
{
public:
    class MAMACPPExpDLL MamaFieldCacheIterator
    {
    protected:
        MamaFieldCacheIterator(mamaFieldCache fieldCache);
    public:
        MamaFieldCacheIterator(const MamaFieldCacheIterator&);
        ~MamaFieldCacheIterator();

        MamaFieldCacheIterator& operator=(const MamaFieldCacheIterator& rhs);

        bool operator==(const MamaFieldCacheIterator& rhs) const;
        bool operator!=(const MamaFieldCacheIterator& rhs) const;

        MamaFieldCacheIterator& operator++();

    protected:
        mamaFieldCacheIterator mIterator;
        MamaFieldCacheField mField;

    private:
        friend class MamaFieldCache;
    };

    class MAMACPPExpDLL iterator : public MamaFieldCacheIterator
    {
    protected:
        iterator(mamaFieldCache fieldCache);

    public:
        typedef std::input_iterator_tag iterator_category;
        typedef MamaFieldCacheField value_type;
        typedef std::iterator_traits<MamaFieldCacheField> difference_type;
        typedef MamaFieldCacheField* pointer;
        typedef MamaFieldCacheField& reference;

        reference operator*();
        pointer operator->();

    private:
        friend class MamaFieldCache;
    };
    class MAMACPPExpDLL const_iterator : public MamaFieldCacheIterator
    {
    protected:
        const_iterator(mamaFieldCache fieldCache);

    public:
        const_iterator(const iterator& it);

        typedef std::input_iterator_tag iterator_category;
        typedef MamaFieldCacheField value_type;
        typedef std::iterator_traits<MamaFieldCacheField> difference_type;
        typedef const MamaFieldCacheField* pointer;
        typedef const MamaFieldCacheField& reference;

        reference operator*();
        pointer operator->();

    private:
        friend class MamaFieldCache;
    };

public:
    MamaFieldCache();

    virtual ~MamaFieldCache();

    virtual void create();

    virtual void clear();

    virtual mama_size_t getSize() const;

    virtual void setTrackModified(bool value);

    virtual bool getTrackModified() const;

    virtual void setUseFieldNames(bool value);

    virtual bool getUseFieldNames() const;

    virtual void setUseLock(bool value);

    virtual bool getUseLock() const;

    virtual void lock();

    virtual void unlock();

    virtual const MamaFieldCacheField* find(mama_fid_t fid,
                                            const char* name = NULL) const;

    virtual MamaFieldCacheField* find(mama_fid_t fid,
                                      const char* name = NULL);

    virtual void setModified(MamaFieldCacheField& field);

    virtual void apply(const MamaFieldCacheField& field);

    virtual void apply(const MamaMsg& msg, const MamaDictionary* dict = NULL);

    virtual void apply(const MamaFieldCacheRecord& record);

    virtual void getFullMessage(MamaMsg& msg);

    virtual void getDeltaMessage(MamaMsg& msg);

    virtual void clearModifiedFields();

    virtual const_iterator begin() const;

    virtual iterator begin();

    virtual const_iterator end() const;

    virtual iterator end();

private:
    MamaFieldCache(const MamaFieldCache&);
    MamaFieldCache& operator=(const MamaFieldCache&);

private:
    struct MamaFieldCacheImpl;
    MamaFieldCacheImpl* mPimpl;
};

} // namespace Wombat

#endif // MAMA_FIELD_CACHE_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
