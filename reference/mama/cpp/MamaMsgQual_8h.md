---
title: mama/MamaMsgQual.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaMsgQual.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaMsgQual](classWombat_1_1MamaMsgQual.html)**  |




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

#ifndef MAMA_MSG_QUAL_CPP_H__
#define MAMA_MSG_QUAL_CPP_H__

#include <mama/msgqualifier.h>


namespace Wombat 
{

    class MAMACPPExpDLL MamaMsgQual
    {
    public:
        MamaMsgQual ();
        MamaMsgQual (mama_u16_t         value);
        MamaMsgQual (const MamaMsgQual& copy);

        ~MamaMsgQual ();

        MamaMsgQual&        operator=  (const MamaMsgQual& rhs);
        bool                operator== (const MamaMsgQual& rhs) const;
        bool                operator== (mama_u16_t         rhs) const;
        bool                operator!= (const MamaMsgQual& rhs) const
        { 
            return ! operator== (rhs); 
        }
        bool                operator!= (mama_u16_t         rhs) const
        {
            return ! operator== (rhs); 
        }

        void                clear ();

        void                setValue                  (mama_u16_t value);
        void                setIsDefinatelyDuplicate  (bool tf);
        void                setIsPossiblyDuplicate    (bool tf);
        void                setIsDefinatelyDelayed    (bool tf);
        void                setIsPossiblyDelayed      (bool tf);
        void                setIsOutOfSequence        (bool tf);
        
        mama_u16_t          getValue                  () const;
        bool                getIsDefinatelyDuplicate  () const;
        bool                getIsPossiblyDuplicate    () const;
        bool                getIsDefinatelyDelayed    () const;
        bool                getIsPossiblyDelayed      () const;
        bool                getIsOutOfSequence        () const;

        void                getAsString     (char*        result,
                                             mama_size_t  maxLen) const;
        const char*         getAsString     () const;

        static void         getAsString     (const mama_u16_t&  value,
                                             char*              result,
                                             mama_size_t        maxLen);
    private:
        mamaMsgQual     myMsgQual;
        mutable char*   myStrRep;
    };

} // namespace Wombat

#endif // MAMA_MSG_QUAL_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
