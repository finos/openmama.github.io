---
title: mama/MamaFt.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaFt.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaFtMemberCallback](classWombat_1_1MamaFtMemberCallback.html)**  |
| class | **[Wombat::MamaFtMember](classWombat_1_1MamaFtMember.html)**  |
| class | **[Wombat::MamaMulticastFtMember](classWombat_1_1MamaMulticastFtMember.html)**  |
| class | **[Wombat::MamaBridgeFtMember](classWombat_1_1MamaBridgeFtMember.html)**  |




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

#ifndef MAMA_FT_CPP_H_
#define MAMA_FT_CPP_H_

#include <mama/ft.h>
#include <mama/MamaQueue.h>

namespace Wombat
{
    class MamaFtMember;


    class MAMACPPExpDLL MamaFtMemberCallback
    {
    public:
        virtual ~MamaFtMemberCallback ()
        {
        };

        virtual void onFtStateChange  (MamaFtMember*  member,
                                       const char*    groupName,
                                       mamaFtState    state) = 0;
    };


    class MAMACPPExpDLL MamaFtMember
    {
    public:
        MamaFtMember();
        virtual ~MamaFtMember();

        virtual void  setup (MamaQueue*             queue,
                             MamaFtMemberCallback*  handler,
                             MamaTransport*         transport,
                             const char*            groupName,
                             mama_u32_t             weight,
                             mama_f64_t             heartbeatInterval,
                             mama_f64_t             timeoutInterval,
                             void*                  closure = NULL) = 0;

        void  destroy     ();
        void  activate    ();
        void  deactivate  ();
        bool  isActive    () const;

        const char*            getGroupName         () const;
        mama_u32_t             getWeight            () const;
        mama_f64_t             getHeartbeatInterval () const;
        mama_f64_t             getTimeoutInterval   () const;
        MamaFtMemberCallback*  getCallback          () const;
        void*                  getClosure           () const;

        void                   setWeight            (mama_u32_t   weight);
        void                   setInstanceId        (const char*  id);

        mamaFtMember           getCValue            ()
        {
            return mCValue;
        }
        const mamaFtMember     getCValue            () const
        {
            return mCValue;
        }

    protected:
        mamaFtMember           mCValue;
        MamaFtMemberCallback*  mCallback;
        void*                  mClosure;
    };

    class MAMACPPExpDLL MamaMulticastFtMember : public MamaFtMember
    {
    public:
        void  setup      (MamaQueue*             queue,
                          MamaFtMemberCallback*  handler,
                          MamaTransport*         transport,
                          const char*            groupName,
                          mama_u32_t             weight,
                          mama_f64_t             heartbeatInterval,
                          mama_f64_t             timeoutInterval,
                          void*                  closure = NULL);
    };

    class MAMACPPExpDLL MamaBridgeFtMember : public MamaFtMember
    {
    public:
        void  setup      (MamaQueue*             queue,
                          MamaFtMemberCallback*  handler,
                          MamaTransport*         transport,
                          const char*            groupName,
                          mama_u32_t             weight,
                          mama_f64_t             heartbeatInterval,
                          mama_f64_t             timeoutInterval,
                          void*                  closure = NULL);
    };

} // namespace Wombat

#endif // MAMA_FT_CPP_H_
```


-------------------------------

Updated on 2023-03-31 at 15:29:26 +0100
