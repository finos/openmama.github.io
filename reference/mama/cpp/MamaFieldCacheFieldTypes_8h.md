---
title: fieldcache/MamaFieldCacheFieldTypes.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# fieldcache/MamaFieldCacheFieldTypes.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaFieldCacheFieldBasic](classWombat_1_1MamaFieldCacheFieldBasic.html)**  |
| class | **[Wombat::MamaFieldCacheFieldString](classWombat_1_1MamaFieldCacheFieldString.html)**  |
| class | **[Wombat::MamaFieldCacheFieldPrice](classWombat_1_1MamaFieldCacheFieldPrice.html)**  |
| class | **[Wombat::MamaFieldCacheFieldDateTime](classWombat_1_1MamaFieldCacheFieldDateTime.html)**  |
| class | **[Wombat::MamaFieldCacheFieldVectorBasic](classWombat_1_1MamaFieldCacheFieldVectorBasic.html)**  |
| class | **[Wombat::MamaFieldCacheFieldStringVector](classWombat_1_1MamaFieldCacheFieldStringVector.html)**  |
| class | **[Wombat::MamaFieldCacheFieldVector](classWombat_1_1MamaFieldCacheFieldVector.html)**  |
| class | **[Wombat::MamaFieldCacheFieldPriceVector](classWombat_1_1MamaFieldCacheFieldPriceVector.html)**  |
| class | **[Wombat::MamaFieldCacheFieldDateTimeVector](classWombat_1_1MamaFieldCacheFieldDateTimeVector.html)**  |
| class | **[Wombat::Type](classWombat_1_1Type.html)**  |




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

#ifndef MAMA_FIELD_CACHE_FIELD_TYPES_CPP_H__
#define MAMA_FIELD_CACHE_FIELD_TYPES_CPP_H__

#include <mama/mamacpp.h>
#include <mama/fieldcache/MamaFieldCacheField.h>
#include <mama/MamaPrice.h>
#include <mama/MamaDateTime.h>
#include <stdexcept>

namespace Wombat
{

template <typename T, mamaFieldType fieldType>
class MAMACPPExpDLL MamaFieldCacheFieldBasic : public MamaFieldCacheFieldBase
{
public:
    virtual ~MamaFieldCacheFieldBasic() {}

    void set(MamaFieldCacheField& field, const T& value);
    T get(const MamaFieldCacheField& field) const;

protected:
    void checkType(const MamaFieldCacheField& field) const
    {
        if (field.getType() != fieldType)
            throw std::invalid_argument("MamaFieldCacheFieldBasic");
    }
};

// Basic single-value types
typedef MamaFieldCacheFieldBasic<char, MAMA_FIELD_TYPE_CHAR>
    MamaFieldCacheFieldChar;
typedef MamaFieldCacheFieldBasic<mama_bool_t, MAMA_FIELD_TYPE_BOOL>
    MamaFieldCacheFieldBool;
typedef MamaFieldCacheFieldBasic<mama_i8_t, MAMA_FIELD_TYPE_I8>
    MamaFieldCacheFieldI8;
typedef MamaFieldCacheFieldBasic<mama_u8_t, MAMA_FIELD_TYPE_U8>
    MamaFieldCacheFieldU8;
typedef MamaFieldCacheFieldBasic<mama_i16_t, MAMA_FIELD_TYPE_I16>
    MamaFieldCacheFieldI16;
typedef MamaFieldCacheFieldBasic<mama_u16_t, MAMA_FIELD_TYPE_U16>
    MamaFieldCacheFieldU16;
typedef MamaFieldCacheFieldBasic<mama_i32_t, MAMA_FIELD_TYPE_I32>
    MamaFieldCacheFieldI32;
typedef MamaFieldCacheFieldBasic<mama_u32_t, MAMA_FIELD_TYPE_U32>
    MamaFieldCacheFieldU32;
typedef MamaFieldCacheFieldBasic<mama_i64_t, MAMA_FIELD_TYPE_I64>
    MamaFieldCacheFieldI64;
typedef MamaFieldCacheFieldBasic<mama_u64_t, MAMA_FIELD_TYPE_U64>
    MamaFieldCacheFieldU64;
typedef MamaFieldCacheFieldBasic<mama_f32_t, MAMA_FIELD_TYPE_F32>
    MamaFieldCacheFieldF32;
typedef MamaFieldCacheFieldBasic<mama_f64_t, MAMA_FIELD_TYPE_F64>
    MamaFieldCacheFieldF64;

// Special single-value types
class MAMACPPExpDLL MamaFieldCacheFieldString : public MamaFieldCacheFieldBase
{
public:
    void set(MamaFieldCacheField& field, const char* value, mama_size_t len = 0);
    const char* get(const MamaFieldCacheField& field) const;

protected:
    void checkType(const MamaFieldCacheField& field) const
    {
        if (field.getType() != MAMA_FIELD_TYPE_STRING)
            throw std::invalid_argument("MamaFieldCacheFieldString");
    }
};

class MAMACPPExpDLL MamaFieldCacheFieldPrice : public MamaFieldCacheFieldBase
{
public:
    void set(MamaFieldCacheField& field, const MamaPrice& value);
    const MamaPrice& get(const MamaFieldCacheField& field) const;

protected:
    void checkType(const MamaFieldCacheField& field) const
    {
        if (field.getType() != MAMA_FIELD_TYPE_PRICE)
            throw std::invalid_argument("MamaFieldCacheFieldPrice");
    }

private:
    mutable MamaPrice mPrice;
};

class MAMACPPExpDLL MamaFieldCacheFieldDateTime : public MamaFieldCacheFieldBase
{
public:
    void set(MamaFieldCacheField& field, const MamaDateTime& value);
    const MamaDateTime& get(const MamaFieldCacheField& field) const;

protected:
    void checkType(const MamaFieldCacheField& field) const
    {
        if (field.getType() != MAMA_FIELD_TYPE_TIME)
            throw std::invalid_argument("MamaFieldCacheFieldDateTime");
    }

private:
    mutable MamaDateTime mDateTime;
};


template <typename T, mamaFieldType fieldType>
class MAMACPPExpDLL MamaFieldCacheFieldVectorBasic : public MamaFieldCacheFieldBase
{
public:
    void set(MamaFieldCacheField& field, const T* values, mama_size_t size);
    void get(const MamaFieldCacheField& field, const T*& values, mama_size_t& size) const;
    const T& get(const MamaFieldCacheField& field, mama_size_t index) const;

protected:
    void checkType(const MamaFieldCacheField& field) const
    {
        if (field.getType() != fieldType)
            throw std::invalid_argument("MamaFieldCacheFieldVectorBasic");
    }
};

typedef MamaFieldCacheFieldVectorBasic<mama_bool_t, MAMA_FIELD_TYPE_VECTOR_BOOL>
    MamaFieldCacheFieldBoolVector;
typedef MamaFieldCacheFieldVectorBasic<char, MAMA_FIELD_TYPE_VECTOR_CHAR>
    MamaFieldCacheFieldCharVector;
typedef MamaFieldCacheFieldVectorBasic<mama_i8_t, MAMA_FIELD_TYPE_VECTOR_I8>
    MamaFieldCacheFieldI8Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_u8_t, MAMA_FIELD_TYPE_VECTOR_U8>
    MamaFieldCacheFieldU8Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_i16_t, MAMA_FIELD_TYPE_VECTOR_I16>
    MamaFieldCacheFieldI16Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_u16_t, MAMA_FIELD_TYPE_VECTOR_U16>
    MamaFieldCacheFieldU16Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_i32_t, MAMA_FIELD_TYPE_VECTOR_I32>
    MamaFieldCacheFieldI32Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_u32_t, MAMA_FIELD_TYPE_VECTOR_U32>
    MamaFieldCacheFieldU32Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_i64_t, MAMA_FIELD_TYPE_VECTOR_I64>
    MamaFieldCacheFieldI64Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_u64_t, MAMA_FIELD_TYPE_VECTOR_U64>
    MamaFieldCacheFieldU64Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_f32_t, MAMA_FIELD_TYPE_VECTOR_F32>
    MamaFieldCacheFieldF32Vector;
typedef MamaFieldCacheFieldVectorBasic<mama_f64_t, MAMA_FIELD_TYPE_VECTOR_F64>
    MamaFieldCacheFieldF64Vector;


// Special vector types
class MAMACPPExpDLL MamaFieldCacheFieldStringVector
    : public MamaFieldCacheFieldBase
{
public:
    void set(MamaFieldCacheField& field, const char** values, mama_size_t size);
    void get(const MamaFieldCacheField& field, const char**& values, mama_size_t& size) const;
    const char* get(const MamaFieldCacheField& field, mama_size_t index) const;

protected:
    void checkType(const MamaFieldCacheField& field) const
    {
        if (field.getType() != MAMA_FIELD_TYPE_VECTOR_STRING)
            throw std::invalid_argument("MamaFieldCacheFieldStringVector");
    }
};


template <typename T>
class MamaFieldCacheFieldVector
{
protected:
    MamaFieldCacheFieldVector()
        : mValues(NULL)
        , mSize(0)
    {
    }
    ~MamaFieldCacheFieldVector()
    {
        if (!mValues || !mSize)
        {
            return;
        }
        delete[] mValues;
    }

    void grow(mama_size_t newSize) const
    {
        if (newSize <= mSize)
            return;

        T* newVector = new T[newSize];
        for (mama_size_t i = 0; i < mSize; ++i)
        {
            newVector[i] = mValues[i];
        }

        if (mValues)
            delete[] mValues;

        mValues = newVector;
        mSize = newSize;
    }

protected:
    mutable T* mValues;
    mutable mama_size_t mSize;
};

class MAMACPPExpDLL MamaFieldCacheFieldPriceVector
    : public MamaFieldCacheFieldBase
    , public MamaFieldCacheFieldVector<MamaPrice>
{
public:
    void set(MamaFieldCacheField& field, const MamaPrice* values, mama_size_t size);
    void get(const MamaFieldCacheField& field, const MamaPrice*& values, mama_size_t& size) const;
    const MamaPrice* get(const MamaFieldCacheField& field, mama_size_t index) const;

protected:
    void checkType(const MamaFieldCacheField& field) const
    {
        if (field.getType() != MAMA_FIELD_TYPE_VECTOR_PRICE)
            throw std::invalid_argument("MamaFieldCacheFieldPriceVector");
    }

private:
    mutable MamaPrice mValue;
};

class MAMACPPExpDLL MamaFieldCacheFieldDateTimeVector
    : public MamaFieldCacheFieldBase
    , public MamaFieldCacheFieldVector<MamaDateTime>
{
public:
    void set(MamaFieldCacheField& field, const MamaDateTime* values, mama_size_t size);
    void get(const MamaFieldCacheField& field, const MamaDateTime*& values, mama_size_t& size) const;
    const MamaDateTime* get(const MamaFieldCacheField& field, mama_size_t index) const;

protected:
    void checkType(const MamaFieldCacheField& field) const
    {
        if (field.getType() != MAMA_FIELD_TYPE_VECTOR_TIME)
            throw std::invalid_argument("MamaFieldCacheFieldTimeVector");
    }

private:
    mutable MamaDateTime mValue;
};


void setFieldValue(MamaFieldCacheField& field, const char* value);

void setFieldValue(MamaFieldCacheField& field, const MamaPrice& value);

void setFieldValue(MamaFieldCacheField& field, const MamaDateTime& value);


template <mamaFieldType fieldType>
class Type
{
};

template <typename T>
void setV(Type<MAMA_FIELD_TYPE_CHAR> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldChar setField;
    setField.set(field, value);
}

template <typename T>
void setV(Type<MAMA_FIELD_TYPE_BOOL> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldBool setField;
    setField.set(field, value);
}

template <typename T>
void setV(Type<MAMA_FIELD_TYPE_I8> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldI8 setField;
    setField.set(field, value);
}
template <typename T>
void setV(Type<MAMA_FIELD_TYPE_U8> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldU8 setField;
    setField.set(field, value);
}

template <typename T>
void setV(Type<MAMA_FIELD_TYPE_I16> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldI16 setField;
    setField.set(field, value);
}
template <typename T>
void setV(Type<MAMA_FIELD_TYPE_U16> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldU16 setField;
    setField.set(field, value);
}

template <typename T>
void setV(Type<MAMA_FIELD_TYPE_I32> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldI32 setField;
    setField.set(field, value);
}
template <typename T>
void setV(Type<MAMA_FIELD_TYPE_U32> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldU32 setField;
    setField.set(field, value);
}

template <typename T>
void setV(Type<MAMA_FIELD_TYPE_I64>, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldI64 setField;
    setField.set(field, value);
}
template <typename T>
void setV(Type<MAMA_FIELD_TYPE_U64> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldU64 setField;
    setField.set(field, value);
}

template <typename T>
void setV(Type<MAMA_FIELD_TYPE_F32> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldF32 setField;
    setField.set(field, value);
}
template <typename T>
void setV(Type<MAMA_FIELD_TYPE_F64> type, MamaFieldCacheField& field, const T& value)
{
    MamaFieldCacheFieldF64 setField;
    setField.set(field, value);
}

template <typename T>
void getV(Type<MAMA_FIELD_TYPE_CHAR> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldChar getField;
    value = getField.get(field);
}

template <typename T>
void getV(Type<MAMA_FIELD_TYPE_BOOL> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldBool getField;
    value = getField.get(field);
}

template <typename T>
void getV(Type<MAMA_FIELD_TYPE_I8> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldI8 getField;
    value = getField.get(field);
}
template <typename T>
void getV(Type<MAMA_FIELD_TYPE_U8> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldU8 getField;
    value = getField.get(field);
}

template <typename T>
void getV(Type<MAMA_FIELD_TYPE_I16> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldI16 getField;
    value = getField.get(field);
}
template <typename T>
void getV(Type<MAMA_FIELD_TYPE_U16> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldU16 getField;
    value = getField.get(field);
}

template <typename T>
void getV(Type<MAMA_FIELD_TYPE_I32> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldI32 getField;
    value = getField.get(field);
}
template <typename T>
void getV(Type<MAMA_FIELD_TYPE_U32> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldU32 getField;
    value = getField.get(field);
}

template <typename T>
void getV(Type<MAMA_FIELD_TYPE_I64> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldI64 getField;
    value = getField.get(field);
}
template <typename T>
void getV(Type<MAMA_FIELD_TYPE_U64> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldU64 getField;
    value = getField.get(field);
}

template <typename T>
void getV(Type<MAMA_FIELD_TYPE_F32> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldF32 getField;
    value = getField.get(field);
}
template <typename T>
void getV(Type<MAMA_FIELD_TYPE_F64> type, const MamaFieldCacheField& field, T& value)
{
    MamaFieldCacheFieldF64 getField;
    value = getField.get(field);
}

template <typename T>
void setFieldValue(MamaFieldCacheField& field, const T& value)
{
    switch(field.getType())
    {
        case MAMA_FIELD_TYPE_CHAR:
        {
            setV(Type<MAMA_FIELD_TYPE_CHAR>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_BOOL:
        {
            setV(Type<MAMA_FIELD_TYPE_BOOL>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_I8:
        {
            setV(Type<MAMA_FIELD_TYPE_I8>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_U8:
        {
            setV(Type<MAMA_FIELD_TYPE_U8>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_I16:
        {
            setV(Type<MAMA_FIELD_TYPE_I16>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_U16:
        {
            setV(Type<MAMA_FIELD_TYPE_U16>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_I32:
        {
            setV(Type<MAMA_FIELD_TYPE_I32>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_U32:
        {
            setV(Type<MAMA_FIELD_TYPE_U32>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_I64:
        {
            setV(Type<MAMA_FIELD_TYPE_I64>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_U64:
        {
            setV(Type<MAMA_FIELD_TYPE_U64>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_F32:
        {
            setV(Type<MAMA_FIELD_TYPE_F32>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_F64:
        {
            setV(Type<MAMA_FIELD_TYPE_F64>(), field, value);
            break;
        }
        default:
            break;
    }
}

void getFieldValue(const MamaFieldCacheField& field, const char*& value);

void getFieldValue(const MamaFieldCacheField& field, MamaPrice& value);

void getFieldValue(const MamaFieldCacheField& field, MamaDateTime& value);

template <typename T>
void getFieldValue(const MamaFieldCacheField& field, T& value)
{
    switch(field.getType())
    {
        case MAMA_FIELD_TYPE_CHAR:
        {
            getV(Type<MAMA_FIELD_TYPE_CHAR>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_BOOL:
        {
            getV(Type<MAMA_FIELD_TYPE_BOOL>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_I8:
        {
            getV(Type<MAMA_FIELD_TYPE_I8>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_U8:
        {
            getV(Type<MAMA_FIELD_TYPE_U8>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_I16:
        {
            getV(Type<MAMA_FIELD_TYPE_I16>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_U16:
        {
            getV(Type<MAMA_FIELD_TYPE_U16>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_I32:
        {
            getV(Type<MAMA_FIELD_TYPE_I32>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_U32:
        {
            getV(Type<MAMA_FIELD_TYPE_U32>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_I64:
        {
            getV(Type<MAMA_FIELD_TYPE_I64>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_U64:
        {
            getV(Type<MAMA_FIELD_TYPE_U64>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_F32:
        {
            getV(Type<MAMA_FIELD_TYPE_F32>(), field, value);
            break;
        }
        case MAMA_FIELD_TYPE_F64:
        {
            getV(Type<MAMA_FIELD_TYPE_F64>(), field, value);
            break;
        }
        default:
            break;
    }
}

template <typename T>
void setFieldValue(MamaFieldCacheField& field, const T* values, mama_size_t size)
{
    switch(field.getType())
    {
        case MAMA_FIELD_TYPE_VECTOR_BOOL:
        {
            MamaFieldCacheFieldBoolVector getField;
            getField.set(field, (const mama_bool_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_CHAR:
        {
            MamaFieldCacheFieldCharVector getField;
            getField.set(field, (const char*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_I8:
        {
            MamaFieldCacheFieldI8Vector getField;
            getField.set(field, (const mama_i8_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_U8:
        {
            MamaFieldCacheFieldU8Vector getField;
            getField.set(field, (const mama_u8_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_I16:
        {
            MamaFieldCacheFieldI16Vector getField;
            getField.set(field, (const mama_i16_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_U16:
        {
            MamaFieldCacheFieldU16Vector getField;
            getField.set(field, (const mama_u16_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_I32:
        {
            MamaFieldCacheFieldI32Vector getField;
            getField.set(field, (const mama_i32_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_U32:
        {
            MamaFieldCacheFieldU32Vector getField;
            getField.set(field, (const mama_u32_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_I64:
        {
            MamaFieldCacheFieldI64Vector getField;
            getField.set(field, (const mama_i64_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_U64:
        {
            MamaFieldCacheFieldU64Vector getField;
            getField.set(field, (const mama_u64_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_F32:
        {
            MamaFieldCacheFieldF32Vector getField;
            getField.set(field, (const mama_f32_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_F64:
        {
            MamaFieldCacheFieldF64Vector getField;
            getField.set(field, (const mama_f64_t*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_STRING:
        {
            MamaFieldCacheFieldStringVector getField;
            getField.set(field, (const char**)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_PRICE:
        {
            MamaFieldCacheFieldPriceVector getField;
            getField.set(field, (const MamaPrice*)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_TIME:
        {
            MamaFieldCacheFieldDateTimeVector getField;
            getField.set(field, (const MamaDateTime*)values, size);
            break;
        }
        default:
            break;
    }
}

void getFieldValue(const MamaFieldCacheField& field, const char**& values, mama_size_t& size);

// TODO: NOT IMPLEMENTED YET
// Need to fix the C++ MamaPrice and MamaDateTime interface to allow replacing
// the inner C structure (otherwise a copy is needed causing either a memory leak
// or an early delete.
void getFieldValue(const MamaFieldCacheField& field, const MamaPrice*& values, mama_size_t& size);

void getFieldValue(const MamaFieldCacheField& field, const mamaDateTime*& values, mama_size_t& size);

template <typename T>
void getFieldValue(const MamaFieldCacheField& field, const T*& values, mama_size_t& size)
{
    switch(field.getType())
    {
        case MAMA_FIELD_TYPE_VECTOR_BOOL:
        {
            MamaFieldCacheFieldBoolVector getField;
            getField.get(field, (const mama_bool_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_CHAR:
        {
            MamaFieldCacheFieldCharVector getField;
            getField.get(field, (const char*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_I8:
        {
            MamaFieldCacheFieldI8Vector getField;
            getField.get(field, (const mama_i8_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_U8:
        {
            MamaFieldCacheFieldU8Vector getField;
            getField.get(field, (const mama_u8_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_I16:
        {
            MamaFieldCacheFieldI16Vector getField;
            getField.get(field, (const mama_i16_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_U16:
        {
            MamaFieldCacheFieldU16Vector getField;
            getField.get(field, (const mama_u16_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_I32:
        {
            MamaFieldCacheFieldI32Vector getField;
            getField.get(field, (const mama_i32_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_U32:
        {
            MamaFieldCacheFieldU32Vector getField;
            getField.get(field, (const mama_u32_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_I64:
        {
            MamaFieldCacheFieldI64Vector getField;
            getField.get(field, (const mama_i64_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_U64:
        {
            MamaFieldCacheFieldU64Vector getField;
            getField.get(field, (const mama_u64_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_F32:
        {
            MamaFieldCacheFieldF32Vector getField;
            getField.get(field, (const mama_f32_t*&)values, size);
            break;
        }
        case MAMA_FIELD_TYPE_VECTOR_F64:
        {
            MamaFieldCacheFieldF64Vector getField;
            getField.get(field, (const mama_f64_t*&)values, size);
            break;
        }
        default:
            break;
    }
}

void mamaFieldCacheFieldFromString(MamaFieldCacheField& field, const std::string& value);

} // namespace Wombat

#endif // MAMA_FIELD_CACHE_FIELD_TYPES_CPP_H__
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100
