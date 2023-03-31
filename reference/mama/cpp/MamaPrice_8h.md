---
title: mama/MamaPrice.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaPrice.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaPrice](classWombat_1_1MamaPrice.html)**  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const int | **[MAX_PRICE_STR_LEN](MamaPrice_8h.html#variable-max-price-str-len)**  |



## Attributes Documentation

### variable MAX_PRICE_STR_LEN

```cpp
static const int MAX_PRICE_STR_LEN = 32;
```



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

#ifndef MAMA_PRICE_CPP_H__
#define MAMA_PRICE_CPP_H__

#include <mama/price.h>

static const int MAX_PRICE_STR_LEN = 32;

namespace Wombat 
{

    class MAMACPPExpDLL MamaPrice
    {
    public:
        MamaPrice ();
        MamaPrice (double              value,
                   mamaPricePrecision  precision = MAMA_PRICE_PREC_100);
        MamaPrice (const MamaPrice&    copy);

        ~MamaPrice ();

        MamaPrice&          operator=  (const MamaPrice& rhs);
        MamaPrice&          operator+= (const MamaPrice& rhs);
        MamaPrice&          operator-= (const MamaPrice& rhs);

        bool                operator== (const MamaPrice& rhs) const;
        bool                operator== (double           rhs) const;
        bool                operator!= (const MamaPrice& rhs) const
        {
            return ! operator== (rhs);
        }
        bool                operator!= (double           rhs) const
        {
            return ! operator== (rhs);
        }
        bool                operator<  (const MamaPrice& rhs) const;
        bool                operator<  (double           rhs) const;
        bool                operator>  (const MamaPrice& rhs) const;
        bool                operator>  (double           rhs) const;

        MamaPrice operator- (const MamaPrice& rhs) const
        {
            return MamaPrice (getValue() - rhs.getValue(), 
                              rhs.getPrecision ());
        }

        MamaPrice operator- (double rhs) const
        {
            return MamaPrice (getValue     () - rhs,
                              getPrecision ());
        }

        MamaPrice operator- () const
        {
            return MamaPrice (-getValue    (),
                              getPrecision ());
        }

        MamaPrice operator+ (const MamaPrice& rhs) const
        {
            return MamaPrice (getValue         () + rhs.getValue (),
                              rhs.getPrecision ());
        }

        MamaPrice operator+ (double rhs) const
        {
            return MamaPrice (getValue     () + rhs,
                              getPrecision ());
        }

        double              compare         (const MamaPrice&    rhs) const;

        void                clear           ();

        void                set             (double              priceValue,
                                             mamaPriceHints      hints = 0);
        void                setValue        (double              value);
        void                setPrecision    (mamaPricePrecision  precision);
        void                setHints        (mamaPriceHints      hints);
        void                setIsValidPrice (bool                valid);

        double              getValue        () const;
        mamaPricePrecision  getPrecision    () const;
        mamaPriceHints      getHints        () const;
        bool                getIsValidPrice () const;


        void                setFromString   (const char*         str);
        void                getAsString     (char*               result,
                                             mama_size_t         maxLen) const;

        const char*         getAsString     () const;

        void negate ();

        bool isZero () const;

        static mamaPricePrecision decimals2Precision (mama_i32_t  places);

        static mamaPricePrecision denom2Precision (mama_i32_t  denominator);

        static mama_i32_t precision2Decimals (mamaPricePrecision  precision);

        static mama_i32_t precision2Denom (mamaPricePrecision  precision);

        mamaPrice        getCValue();
        const mamaPrice  getCValue() const;

    private:
        mamaPrice       mPrice;
        mutable char*   mStrRep;
};

} // namespace Wombat


#endif // MAMA_PRICE_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
