---
title: mama/MamaMsgField.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaMsgField.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaMsgField](classWombat_1_1MamaMsgField.html)**  |




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

#ifndef MAMA_MSG_FIELD_CPP_H__
#define MAMA_MSG_FIELD_CPP_H__

#include <mama/mamacpp.h>

namespace Wombat 
{

    class MamaMsgFieldImpl;
    class MamaFieldDescriptor;
    class MamaDateTime;
    class MamaPrice;
    class MamaMsg;

    class MAMACPPExpDLL MamaMsgField
    {
    public:
        ~MamaMsgField ();

        MamaMsgField  (void);

        MamaMsgField  (
            mamaMsgField  field);

    MamaMsgField (
        const MamaMsgField& field);

    MamaMsgField& operator= (
        const MamaMsgField& field);

        void clear ();

        void set (
            mamaMsgField  field);

        const MamaFieldDescriptor* getDescriptor () const;

        mama_fid_t getFid () const;
        
        const char* getName () const;

        mamaFieldType getType () const;
        
        const char* getTypeName () const;

        mama_bool_t getBool () const;

        char getChar () const;

        mama_i8_t getI8 () const;

        mama_u8_t getU8 () const;

        mama_i16_t getI16 () const;

        mama_u16_t getU16 () const;

        mama_i32_t getI32 () const;

        mama_u32_t getU32 () const;

        mama_i64_t getI64 () const;

        mama_u64_t getU64 () const;

        mama_f32_t getF32 () const;

        mama_f64_t getF64 () const;

        const char* getString () const;

        const void* getOpaque (
            mama_size_t&  size) const;

        void getDateTime (
            MamaDateTime&  result) const;

        void getPrice (
            MamaPrice&  result) const;

        void getMsg (
            MamaMsg&  result) const;

        void getVectorBool (
            const mama_bool_t*&  result,
            mama_size_t&         resultLen) const;

        void getVectorChar (
            const char*&  result,
            mama_size_t&  resultLen) const;

        void getVectorI8 (
            const mama_i8_t*&  result,
            mama_size_t&       resultLen) const;

        void getVectorU8 (
            const mama_u8_t*&  result,
            mama_size_t&       resultLen) const;

        void getVectorI16 (
            const mama_i16_t*&  result,
            mama_size_t&        resultLen) const;

        void getVectorU16 (
            const mama_u16_t*&  result,
            mama_size_t&        resultLen) const;

        void getVectorI32 (
            const mama_i32_t*&  result,
            mama_size_t&        resultLen) const;

        void getVectorU32 (
            const mama_u32_t*&  result,
            mama_size_t&        resultLen) const;

        void getVectorI64 (
            const mama_i64_t*&  result,
            mama_size_t&        resultLen) const;

        void getVectorU64 (
            const mama_u64_t*&  result,
            mama_size_t&        resultLen) const;

        void getVectorF32 (
            const mama_f32_t*&  result,
            mama_size_t&        resultLen) const;

        void getVectorF64 (
            const mama_f64_t*&  result,
            mama_size_t&        resultLen) const;

        void getVectorString (
            const char**&  result,
            mama_size_t&   resultLen) const;

        void getVectorMsg (
            const MamaMsg**&  result,
            mama_size_t&      resultLen) const;

        void getVectorMsgDetached (
            const MamaMsg**&  result,
            mama_size_t&      resultLen) const;

        void getAsString (
            char*        result,
            mama_size_t  maxResultLen) const;

        void updateBool (
            mama_bool_t  value); 

        void updateChar (
            char  value); 

        void updateI8 (
            mama_i8_t  value);
        
        void updateU8 (
            mama_u8_t  value);

        void updateI16 (
            mama_i16_t  value);
        
        void updateU16 (
            mama_u16_t  value);

        void updateI32 (
            mama_i32_t  value);

        void updateU32 (
            mama_u32_t  value);
        
        void updateI64 (
            mama_i64_t  value);
        
        void updateU64 (
            mama_u64_t  value);
        
        void updateF32 (
            mama_f32_t  value);
        
        void updateF64 (
            mama_f64_t  value);
        
        void updateDateTime (
            const mamaDateTime  value);

        void updateDateTime (
            const MamaDateTime  value);
        
        void updatePrice (
            const mamaPrice  value);

        void updatePrice (
            const MamaPrice  value);

        bool operator==(const MamaMsgField&) const;
        bool operator!=(const MamaMsgField&) const;
        
    private:
        mamaMsgField                  mField;
        mutable MamaFieldDescriptor*  mFieldDesc;
        mutable const MamaMsg**       mLastVectorMsg;
        mutable mama_size_t           mLastVectorMsgLen;

        void destroyLastVectorMsg () const;
    };

} // namespace Wombat
#endif // MAMA_MSG_FIELD_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
