---
title: mama/MamaMsg.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaMsg.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaMsgIterator](classWombat_1_1MamaMsgIterator.html)**  |
| class | **[Wombat::MamaMsg](classWombat_1_1MamaMsg.html)**  |




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

#ifndef MAMA_MSG_CPP_H__
#define MAMA_MSG_CPP_H__

#include "mama/mamacpp.h"
#include "mama/MamaMsgField.h"
#include "mama/types.h"

namespace Wombat
{
    class MamaFieldDescriptor;
    class MamaDateTime;
    class MamaPrice;
    class MamaMsgFieldIterator;
    class MamaDictionary;
    class MamaMsg;

    class MAMACPPExpDLL MamaMsgIterator
    {
    public:
        MamaMsgIterator  (const MamaDictionary*   dictionary);
        MamaMsgIterator  ();
        MamaMsgIterator  (const MamaMsgIterator&  copy);
        ~MamaMsgIterator ();

        void SetDict     (const MamaDictionary*   dictionary);
        MamaMsgIterator& operator= (const MamaMsgIterator&);

        bool operator==(const MamaMsgIterator&) const;
        bool operator!=(const MamaMsgIterator&) const;

        MamaMsgField&    operator*();
        MamaMsgField*    operator->();
        MamaMsgIterator& operator++();

    protected:
        friend class     MamaMsg;
        mamaMsgIterator  myImpl;
        MamaMsgField     mMsgField;
    };

    class MAMACPPExpDLL MamaMsg
    {
    public:
        ~MamaMsg ();

        MamaMsg (void);
        MamaMsg (const MamaMsg&  mm);

        void create (void);

        MAMADeprecated(
                "createForPayload has been deprecated, use dynamic loading instead!")
        void createForPayload (const char id);

        void createForPayloadBridge (mamaPayloadBridge payloadBridge);

        void createFromBuffer (
            const void*  buffer,
            size_t       bufferLength);

        void copy (const MamaMsg&  rhs);

        MamaMsg* getTempCopy();
        void applyMsg (const MamaMsg&  msg);

        void clear (void);

        size_t getNumFields (void) const;

        size_t getByteSize (void) const;

        bool getBoolean (
            const char*  name,
            mama_fid_t   fid) const;

        bool getBoolean (
            const MamaFieldDescriptor* fieldDesc) const;

        char getChar (
            const char*  name,
            mama_fid_t   fid) const;

        char getChar (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_i8_t getI8 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_i8_t getI8 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_u8_t getU8 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_u8_t getU8 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_i16_t getI16 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_i16_t getI16 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_u16_t getU16 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_u16_t getU16 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_i32_t getI32 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_i32_t getI32 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_u32_t getU32 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_u32_t getU32 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_i64_t getI64 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_i64_t getI64 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_u64_t getU64 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_u64_t getU64 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_f32_t getF32 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_f32_t getF32 (
            const MamaFieldDescriptor* fieldDesc) const;

        mama_f64_t getF64 (
            const char*  name,
            mama_fid_t   fid) const;

        mama_f64_t getF64 (
            const MamaFieldDescriptor* fieldDesc) const;

        const char* getString (
            const char*       name,
            mama_fid_t        fid) const;

        const char* getString (
            const MamaFieldDescriptor* fieldDesc) const;

        const void* getOpaque (
            const char*       name,
            mama_fid_t        fid,
            size_t&           size) const;

        const void* getOpaque (
            const MamaFieldDescriptor* fieldDesc,
            size_t&                    size) const;

        void getDateTime (
            const char*       name,
            mama_fid_t        fid,
            MamaDateTime&     result) const;

        void getDateTime (
            const MamaFieldDescriptor* fieldDesc,
            MamaDateTime&              result) const;

        void getPrice (
            const char*       name,
            mama_fid_t        fid,
            MamaPrice&        result) const;

        void getPrice (
            const MamaFieldDescriptor*  fieldDesc,
            MamaPrice&                  result) const;

        const MamaMsg* getMsg (
            const char*       name,
            mama_fid_t        fid) const;

        const MamaMsg* getMsg (
            const MamaFieldDescriptor* fieldDesc) const;

        const char* getVectorChar (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const char* getVectorChar (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_i8_t* getVectorI8 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_i8_t* getVectorI8 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_u8_t* getVectorU8 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_u8_t* getVectorU8 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_i16_t* getVectorI16 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_i16_t* getVectorI16 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_u16_t* getVectorU16 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_u16_t* getVectorU16 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_i32_t* getVectorI32 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_i32_t* getVectorI32 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_u32_t* getVectorU32 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_u32_t* getVectorU32 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_i64_t* getVectorI64 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_i64_t* getVectorI64 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_u64_t* getVectorU64 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_u64_t* getVectorU64 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_f32_t* getVectorF32 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_f32_t* getVectorF32 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const mama_f64_t* getVectorF64 (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const mama_f64_t* getVectorF64 (
            const MamaFieldDescriptor*  fieldDesc,
            size_t&                     resultLen) const;

        const MamaMsg** getVectorMsg (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const MamaMsg** getVectorMsg (
            const MamaFieldDescriptor* fieldDesc,
            size_t&                    resultLen) const;

        const char** getVectorString (
            const char*       name,
            mama_fid_t        fid,
            size_t&           resultLen) const;

        const char** getVectorString (
            const MamaFieldDescriptor* fieldDesc,
            size_t&                    resultLen) const;


        bool tryBoolean (
            const char*   name,
            mama_fid_t    fid,
            bool&         result) const;

        bool tryBoolean (
            const MamaFieldDescriptor* field,
            bool&                      result) const;

        bool tryChar (
            const char*   name,
            mama_fid_t    fid,
            char&         result) const;

        bool tryChar (
            const MamaFieldDescriptor* field,
            char&                      result) const;

        bool tryI8 (
            const char*   name,
            mama_fid_t    fid,
            mama_i8_t&    result) const;

        bool tryI8 (
            const MamaFieldDescriptor* field,
            mama_i8_t&                 result) const;

        bool tryU8 (
            const char*   name,
            mama_fid_t    fid,
            mama_u8_t&    result) const;

        bool tryU8 (
            const MamaFieldDescriptor* field,
            mama_u8_t&                 result) const;

        bool tryI16 (
            const char*   name,
            mama_fid_t    fid,
            mama_i16_t&   result) const;

        bool tryI16 (
            const MamaFieldDescriptor* field,
            mama_i16_t&                result) const;

        bool tryU16 (
            const char*   name,
            mama_fid_t    fid,
            mama_u16_t&   result) const;

        bool tryU16 (
            const MamaFieldDescriptor* field,
            mama_u16_t&                result) const;

        bool tryI32 (
            const char*   name,
            mama_fid_t    fid,
            mama_i32_t&   result) const;

        bool tryI32 (
            const MamaFieldDescriptor* field,
            mama_i32_t&                result) const;

        bool tryU32 (
            const char*   name,
            mama_fid_t    fid,
            mama_u32_t&   result) const;

        bool tryU32 (
            const MamaFieldDescriptor* field,
            mama_u32_t&                result) const;

        bool tryI64 (
            const char*   name,
            mama_fid_t    fid,
            mama_i64_t&   result) const;

        bool tryI64 (
            const MamaFieldDescriptor* field,
            mama_i64_t&                result) const;

        bool tryU64 (
            const char*   name,
            mama_fid_t    fid,
            mama_u64_t&   result) const;

        bool tryU64 (
            const MamaFieldDescriptor* field,
            mama_u64_t&                result) const;

        bool tryF32 (
            const char*   name,
            mama_fid_t    fid,
            mama_f32_t&   result) const;

        bool tryF32 (
            const MamaFieldDescriptor* field,
            mama_f32_t&                result) const;

        bool tryF64 (
            const char*   name,
            mama_fid_t    fid,
            mama_f64_t&   result) const;

        bool tryF64 (
            const MamaFieldDescriptor* field,
            mama_f64_t&                result) const;

        bool tryString (
            const char*   name,
            mama_fid_t    fid,
            const char*&  result) const;

        bool tryString (
            const MamaFieldDescriptor* field,
            const char*&               result) const;

        bool tryDateTime (
            const char*    name,
            mama_fid_t     fid,
            MamaDateTime&  result) const;

        bool tryDateTime (
            const MamaFieldDescriptor*  field,
            MamaDateTime&               result) const;

        bool tryPrice (
            const char*    name,
            mama_fid_t     fid,
            MamaPrice&     result) const;

        bool tryPrice (
            const MamaFieldDescriptor*  field,
            MamaPrice&                  result) const;

        bool tryMsg (
            const char*     name,
            mama_fid_t      fid,
            const MamaMsg*& result) const;

        bool tryMsg (
            const MamaFieldDescriptor*  field,
            const MamaMsg*&             result) const;

        bool tryOpaque (
            const char*   name,
            mama_fid_t    fid,
            const void*&  result,
            size_t&       size) const;

        bool tryOpaque (
            const MamaFieldDescriptor* field,
            const void*&               result,
            size_t&                    size) const;

        bool tryVectorChar (
            const char*       name,
            mama_fid_t        fid,
            const char*&      result,
            size_t&           resultLen) const;

        bool tryVectorChar (
            const MamaFieldDescriptor*  fieldDesc,
            const char*&                result,
            size_t&                     resultLen) const;

        bool tryVectorI8 (
            const char*         name,
            mama_fid_t          fid,
            const mama_i8_t*&   result,
            size_t&             resultLen) const;

        bool tryVectorI8 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i8_t*&           result,
            size_t&                     resultLen) const;

        bool tryVectorU8 (
            const char*         name,
            mama_fid_t          fid,
            const mama_u8_t*&   result,
            size_t&             resultLen) const;

        bool tryVectorU8 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u8_t*&           result,
            size_t&                     resultLen) const;

        bool tryVectorI16 (
            const char*          name,
            mama_fid_t           fid,
            const mama_i16_t*&   result,
            size_t&              resultLen) const;

        bool tryVectorI16 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i16_t*&          result,
            size_t&                     resultLen) const;

        bool tryVectorU16 (
            const char*         name,
            mama_fid_t          fid,
            const mama_u16_t*&  result,
            size_t&             resultLen) const;

        bool tryVectorU16 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u16_t*&          result,
            size_t&                     resultLen) const;

        bool tryVectorI32 (
            const char*         name,
            mama_fid_t          fid,
            const mama_i32_t*&  result,
            size_t&             resultLen) const;

        bool tryVectorI32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i32_t*&          result,
            size_t&                     resultLen) const;

        bool tryVectorU32 (
            const char*         name,
            mama_fid_t          fid,
            const mama_u32_t*&  result,
            size_t&             resultLen) const;

        bool tryVectorU32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u32_t*&          result,
            size_t&                     resultLen) const;

        bool tryVectorI64 (
            const char*         name,
            mama_fid_t          fid,
            const mama_i64_t*&  result,
            size_t&             resultLen) const;

        bool tryVectorI64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i64_t*&          result,
            size_t&                     resultLen) const;

        bool tryVectorU64 (
            const char*         name,
            mama_fid_t          fid,
            const mama_u64_t*&  result,
            size_t&             resultLen) const;

        bool tryVectorU64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u64_t*&          result,
            size_t&                     resultLen) const;

        bool tryVectorF32 (
            const char*         name,
            mama_fid_t          fid,
            const mama_f32_t*&  result,
            size_t&             resultLen) const;

        bool tryVectorF32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_f32_t*&          result,
            size_t&                     resultLen) const;

        bool tryVectorF64 (
            const char*         name,
            mama_fid_t          fid,
            const mama_f64_t*&  result,
            size_t&             resultLen) const;

        bool tryVectorF64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_f64_t*&          result,
            size_t&                     resultLen) const;


        bool tryVectorString (
            const char*    name,
            mama_fid_t     fid,
            const char**&  result,
            size_t&        resultLen) const;

        bool tryVectorString (
            const MamaFieldDescriptor*  fieldDesc,
            const char**&               result,
            size_t&                     resultLen) const;
        bool tryVectorMsg (
            const char*       name,
            mama_fid_t        fid,
            const MamaMsg**&  result,
            size_t&           resultLen) const;

        bool tryVectorMsg (
            const MamaFieldDescriptor*  fieldDesc,
            const MamaMsg**&            result,
            size_t&                     resultLen) const;

        void addBoolean (
            const char*   name,
            mama_fid_t    fid,
            bool          value);

        void addBoolean (
            const MamaFieldDescriptor*  fieldDesc,
            bool                        value);

        void addChar (
            const char*   name,
            mama_fid_t    fid,
            char          value);

        void addChar (
            const MamaFieldDescriptor*  fieldDesc,
            char                        value);

        void addI8 (
            const char*  name,
            mama_fid_t   fid,
            mama_i8_t    value);

        void addI8 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_i8_t                   value);

        void addI16 (
            const char*   name,
            mama_fid_t    fid,
            mama_i16_t    value);

        void addI16 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_i16_t                  value);

        void addI32 (
            const char*   name,
            mama_fid_t    fid,
            mama_i32_t    value);

        void addI32 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_i32_t                  value);

        void addI64 (
            const char*   name,
            mama_fid_t    fid,
            mama_i64_t    value);

        void addI64 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_i64_t                  value);

        void addU8 (
            const char*  name,
            mama_fid_t   fid,
            mama_u8_t    value);

        void addU8 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_u8_t                   value);

        void addU16 (
            const char*   name,
            mama_fid_t    fid,
            mama_u16_t    value);

        void addU16 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_u16_t                  value);

        void addU32 (
            const char*   name,
            mama_fid_t    fid,
            mama_u32_t    value);

        void addU32 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_u32_t                  value);

        void addU64 (
            const char*   name,
            mama_fid_t    fid,
            mama_u64_t    value);

        void addU64 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_u64_t                  value);

        void addF32 (
            const char*   name,
            mama_fid_t    fid,
            mama_f32_t    value);

        void addF32 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_f32_t                  value);

        void addF64 (
            const char*  name,
            mama_fid_t   fid,
            mama_f64_t   value);

        void addF64 (
            const MamaFieldDescriptor*  fieldDesc,
            mama_f64_t                  value);

        void addString (
            const char*   name,
            mama_fid_t    fid,
            const char*   value);

        void addString (
            const MamaFieldDescriptor*  fieldDesc,
            const char*                 value);

        void addDateTime (
            const char*          name,
            mama_fid_t           fid,
            const MamaDateTime&  value);

        void addDateTime (
            const MamaFieldDescriptor*  fieldDesc,
            const MamaDateTime&         value);

        void addPrice (
            const char*       name,
            mama_fid_t        fid,
            const MamaPrice&  value);

        void addPrice (
            const MamaFieldDescriptor*  fieldDesc,
            const MamaPrice&            value);

        void addOpaque (
            const char*  name,
            mama_fid_t   fid,
            const void*  value,
            size_t       size);

        void addOpaque (
            const MamaFieldDescriptor*  fieldDesc,
            const void*                 value,
            size_t                      size);

       void addMsg(
            const char*  name,
            mama_fid_t   fid,
            MamaMsg*     value);

       void addMsg (
            const MamaFieldDescriptor*  fieldDesc,
            MamaMsg*                    value);

        void addVectorChar (
            const char*  name,
            mama_fid_t   fid,
            const char   vectorValues[],
            size_t       vectorLen);

        void addVectorChar (
            const MamaFieldDescriptor*  fieldDesc,
            const char                  vectorValues[],
            size_t                      vectorLen);

        void addVectorI8 (
            const char*       name,
            mama_fid_t        fid,
            const mama_i8_t   vectorValues[],
            size_t            vectorLen);

        void addVectorI8 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i8_t             vectorValues[],
            size_t                      vectorLen);

        void addVectorU8 (
            const char*      name,
            mama_fid_t       fid,
            const mama_u8_t  vectorValues[],
            size_t           vectorLen);

        void addVectorU8 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u8_t             vectorValues[],
            size_t                      vectorLen);

        void addVectorI16 (
            const char*       name,
            mama_fid_t        fid,
            const mama_i16_t  vectorValues[],
            size_t            vectorLen);

        void addVectorI16 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i16_t            vectorValues[],
            size_t                      vectorLen);

        void addVectorU16 (
            const char*       name,
            mama_fid_t        fid,
            const mama_u16_t  vectorValues[],
            size_t            vectorLen);

        void addVectorU16 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u16_t            vectorValues[],
            size_t                      vectorLen);

        void addVectorI32 (
            const char*       name,
            mama_fid_t        fid,
            const mama_i32_t  vectorValues[],
            size_t            vectorLen);

        void addVectorI32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i32_t            vectorValues[],
            size_t                      vectorLen);

        void addVectorU32 (
            const char*       name,
            mama_fid_t        fid,
            const mama_u32_t  vectorValues[],
            size_t            vectorLen);

        void addVectorU32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u32_t            vectorValues[],
            size_t                      vectorLen);

        void addVectorI64 (
            const char*       name,
            mama_fid_t        fid,
            const mama_i64_t  vectorValues[],
            size_t            vectorLen);

        void addVectorI64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i64_t            vectorValues[],
            size_t                      vectorLen);

        void addVectorU64 (
            const char*       name,
            mama_fid_t        fid,
            const mama_u64_t  vectorValues[],
            size_t            vectorLen);

        void addVectorU64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u64_t            vectorValues[],
            size_t                      vectorLen);

        void addVectorF32 (
            const char*       name,
            mama_fid_t        fid,
            const mama_f32_t  vectorValues[],
            size_t            vectorLen);

        void addVectorF32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_f32_t            vectorValues[],
            size_t                      vectorLen);

        void addVectorF64 (
            const char*       name,
            mama_fid_t        fid,
            const mama_f64_t  vectorValues[],
            size_t            vectorLen);

        void addVectorF64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_f64_t            vectorValues[],
            size_t                      vectorLen);

        void addVectorString (
            const char*  name,
            mama_fid_t   fid,
            const char*  vectorValues[],
            size_t       vectorLen);

        void addVectorString (
            const MamaFieldDescriptor*  fieldDesc,
            const char*                 vectorValues[],
            size_t                      vectorLen);

       void addVectorMsg (
            const char*  name,
            mama_fid_t   fid,
            MamaMsg*     vectorValues[],
            size_t       vectorLen);

       void addVectorMsg (
            const MamaFieldDescriptor*  fieldDesc,
            MamaMsg*                    vectorValues[],
            size_t                      vectorLen);


        void updateBoolean (
            const char*  name,
            mama_fid_t   fid,
            bool         value);

        void updateBoolean (
            const MamaFieldDescriptor*  fieldDesc,
            bool                        value);

        void updateChar (
            const char*  name,
            mama_fid_t   fid,
            const char   value);

        void updateChar (
            const MamaFieldDescriptor*  fieldDesc,
            const char                  value);

        void updateI8 (
            const char*      name,
            mama_fid_t       fid,
            const mama_i8_t  value);

        void updateI8 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i8_t             value);

        void updateU8 (
            const char*      name,
            mama_fid_t       fid,
            const mama_u8_t  value);

        void updateU8 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u8_t             value);

        void updateI16 (
            const char*       name,
            mama_fid_t        fid,
            const mama_i16_t  value);

        void updateI16 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i16_t            value);

        void updateU16 (
            const char*       name,
            mama_fid_t        fid,
            const mama_u16_t  value);

        void updateU16 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u16_t            value);

        void updateI32 (
            const char*       name,
            mama_fid_t        fid,
            const mama_i32_t  value);

        void updateI32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i32_t            value);

        void updateU32 (
            const char*       name,
            mama_fid_t        fid,
            const mama_u32_t  value);

        void updateU32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u32_t            value);

        void updateI64 (
            const char*       name,
            mama_fid_t        fid,
            const mama_i64_t  value);

        void updateI64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_i64_t            value);

        void updateU64 (
            const char*       name,
            mama_fid_t        fid,
            const mama_u64_t  value);

        void updateU64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_u64_t            value);

        void updateF32 (
            const char*       name,
            mama_fid_t        fid,
            const mama_f32_t  value);

        void updateF32 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_f32_t            value);

        void updateF64 (
            const char*       name,
            mama_fid_t        fid,
            const mama_f64_t  value);

        void updateF64 (
            const MamaFieldDescriptor*  fieldDesc,
            const mama_f64_t            value);

        void updateString (
            const char*  name,
            mama_fid_t   fid,
            const char*  value);

        void updateString (
            const MamaFieldDescriptor*  fieldDesc,
            const char*                 value);

        void updateOpaque (
            const char*  name,
            mama_fid_t   fid,
            const void*  value,
            size_t       size);

        void updateOpaque (
            const MamaFieldDescriptor*  fieldDesc,
            const void*                 value,
            size_t                      size);

        void updateDateTime (
            const char*          name,
            mama_fid_t           fid,
            const MamaDateTime&  value);

        void updateDateTime (
            const MamaFieldDescriptor*  fieldDesc,
            const MamaDateTime&         value);

        void updatePrice (
            const char*       name,
            mama_fid_t        fid,
            const MamaPrice&  value);

        void updatePrice (
            const MamaFieldDescriptor*  fieldDesc,
            const MamaPrice&            value);

        mamaMsgType getType (void) const;

        const char* getMsgTypeName (void) const;

        mamaMsgStatus getStatus (void) const;

        const char* getMsgStatusString (void) const;

        void iterateFields (MamaMsgFieldIterator&  iterator,
                            const MamaDictionary*  dictionary,
                            void*                  closure) const;

        const char* toString () const;

        const char* toJsonString () const;

        const char* toJsonString (const MamaDictionary*  dictionary) const;

        const char* toNormalizedString () const;

        void getFieldAsString (
            const char*  name,
            mama_fid_t   fid,
            char*        result,
            size_t       maxResultLen) const;

        void getFieldAsString (
            const MamaFieldDescriptor*  fieldDesc,
            char*                       result,
            size_t                      maxResultLen) const;

        MamaMsgField* getField (
            const char*  name,
            mama_fid_t   fid) const;

        MamaMsgField*  getField (
            const MamaFieldDescriptor*  fieldDesc) const;

        bool tryField (
            const char*  name,
            mama_fid_t   fid) const;

        bool tryField (
            const MamaFieldDescriptor*  fieldDesc) const;

        bool tryField (
            const char*    name,
            mama_fid_t     fid,
            MamaMsgField*  result) const;

        bool tryField (
            const MamaFieldDescriptor*  fieldDesc,
            MamaMsgField*               result) const;

        bool tryFieldAsString (
            const char*  name,
            mama_fid_t   fid,
            char*        result,
            size_t       maxResultLen) const;

        bool tryFieldAsString (
            const MamaFieldDescriptor*  fieldDesc,
            char*                       result,
            size_t                      maxResultLen) const;

        void getByteBuffer (
            const void*&  buffer,
            size_t&       bufferLength) const;

        MamaMsg* detach (void);


        bool isFromInbox (void) const;

        mama_seqnum_t getSeqNum (void) const;

        bool getIsDefinitelyDuplicate (void) const;

        bool getIsPossiblyDuplicate (void) const;

        bool getIsPossiblyDelayed (void) const;

        bool getIsDefinitelyDelayed (void) const;

        bool getIsOutOfSequence (void) const;

        bool setNewBuffer (
            void*        buffer,
            mama_size_t  size);

        void* getNativeHandle (void) const;

        void createFromMsg (
            mamaMsg  msg,
            bool     destroyMsg = false) const;

        void setMsg (
            mamaMsg  msg);

        const mamaMsg& getUnderlyingMsg (void) const;

        mamaMsg getUnderlyingMsg (void);


        MAMAIgnoreDeprecatedOpen
        mamaPayloadType getPayloadType (void) const;
        MAMAIgnoreDeprecatedClose

        void*  getNativeMsg (void);

        MamaMsgField& begin (
            MamaMsgIterator&  theIterator) const;

        mamaMsgReply getReplyHandle (void) const;

        static void destroyReplyHandle (
            mamaMsgReply  replyHandle);

    private:
        mutable mamaMsg        mMsg;
        mutable bool           mDestroy;
        mutable MamaMsg**      mVectorMsg;
        mutable size_t         mVectorMsgSize;
        mutable size_t         mVectorMsgAllocSize;
        mutable MamaMsg*       mTmpMsg;
        mutable const char*    mString;
        mutable MamaMsgField*  mMsgField;
        mutable MamaMsg*       mCopyMsg;

        void setDestroyCMsg    (bool destroy);
        void cleanup           ();
        void growVector        (size_t newSize) const;
        void growCvector       (size_t newSize) const;
    };

} // namespace Wombat
#endif // MAMA_MSG_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
