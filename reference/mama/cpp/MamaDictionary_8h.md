---
title: mama/MamaDictionary.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaDictionary.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaDictionary](classWombat_1_1MamaDictionary.html)**  |




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

#ifndef MAMA_DICTIONARY_CPP_H__
#define MAMA_DICTIONARY_CPP_H__

#include <mama/mamacpp.h>
#include <mama/MamaFieldDescriptor.h>

namespace Wombat 
{
class DictionaryImpl;

class MAMACPPExpDLL MamaDictionary
{
public:
    virtual ~MamaDictionary ();

    MamaDictionary (void);

    virtual void create (
        MamaQueue*              queue,
        MamaDictionaryCallback* callback,
        MamaSource*             source,
        int                     retries = MAMA_DEFAULT_RETRIES,
        double                  timeout = MAMA_DEFAULT_TIMEOUT,
        void*                   closure = NULL);

    virtual const char* getFeedName();

    virtual const char* getFeedHost();

    virtual MamaFieldDescriptor* getFieldByFid (mama_fid_t fid);

    virtual const MamaFieldDescriptor* getFieldByFid (mama_fid_t fid) const;

    virtual MamaFieldDescriptor* getFieldByIndex (size_t index);

    virtual const MamaFieldDescriptor* getFieldByIndex (size_t index) const;

    virtual MamaFieldDescriptor* getFieldByName (const char* name); 

    virtual const MamaFieldDescriptor* getFieldByName (const char* name) const;

    virtual mama_fid_t getMaxFid (void) const;

    virtual size_t getSize (void) const;

    virtual bool hasDuplicates (void) const;

    virtual MamaDictionaryCallback* getCallback (void) const;

    virtual void setCallback (MamaDictionaryCallback* callback);

    virtual mamaDictionary getDictC ();

    virtual const mamaDictionary getDictC () const;

    virtual void* getClosure (void) const;

    virtual MamaMsg* getDictionaryMessage() const;

    virtual void buildDictionaryFromMessage(MamaMsg& msg);

    virtual MamaFieldDescriptor* createFieldDescriptor (
            mama_fid_t             fid,
            const char*            name,
            mamaFieldType          type);

    virtual void setMaxFid (
            mama_size_t          maxFid);


    virtual void writeToFile (const char* fileName);

    virtual void populateFromFile (const char* fileName);
    
    DictionaryImpl* mPimpl;
};

} // namespace Wombat
#endif // MAMA_DICTIONARY_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
