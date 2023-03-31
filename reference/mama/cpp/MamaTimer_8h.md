---
title: mama/MamaTimer.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/MamaTimer.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamaTimer](classWombat_1_1MamaTimer.html)**  |




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

#ifndef MAMA_TIMER_CPP_H__
#define MAMA_TIMER_CPP_H__

#include <mama/mamacpp.h>

namespace Wombat 
{
    class MamaTimerCallback;

    class MAMACPPExpDLL MamaTimer
    {
    public:

        MamaTimer (void);

        virtual ~MamaTimer (void);
        
        virtual void create (MamaQueue*          queue,
                             MamaTimerCallback*  callback,
                             mama_f64_t          interval,
                             void*               closure = NULL);

        virtual void destroy ();

        virtual bool isActive () const;

        virtual void reset ();

        virtual void setInterval (mama_f64_t intervalSeconds);

        virtual mama_f64_t getInterval () const;

        virtual MamaTimerCallback* getCallback () const;

        virtual void* getClosure () const;

        // Access to C types for implementation of related classes.
        mamaTimer        getCValue    ();
        const mamaTimer  getCValue    () const;

    private:
        mamaTimer           myTimer;
        MamaTimerCallback*  myCallback;
        void *              myClosure;

        /* Private functions. */    
        static void MAMACALLTYPE onTimerDestroy (mamaTimer timer, void *closure);
        static void MAMACALLTYPE onTimerTick    (mamaTimer timer, void* closure);
    };

} // namespace Wombat
#endif // MAMA_TIMER_CPP_H__
```


-------------------------------

Updated on 2023-03-31 at 15:29:27 +0100
