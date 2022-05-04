---
title: mamda/MamdaLock.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamda/MamdaLock.h



## Namespaces

| Name           |
| -------------- |
| **[Wombat](namespaceWombat.html)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Wombat::MamdaLock](classWombat_1_1MamdaLock.html)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ACQUIRE_WLOCK](MamdaLock_8h.html#define-acquire-wlock)**(lock)  |
|  | **[ACQUIRE_RLOCK](MamdaLock_8h.html#define-acquire-rlock)**(lock)  |
|  | **[RELEASE_WLOCK](MamdaLock_8h.html#define-release-wlock)**(lock)  |
|  | **[RELEASE_RLOCK](MamdaLock_8h.html#define-release-rlock)**(lock)  |
|  | **[ACQUIRE_LOCK](MamdaLock_8h.html#define-acquire-lock)**(lock, writeNeeded)  |
|  | **[RELEASE_LOCK](MamdaLock_8h.html#define-release-lock)**(lock, isWrite)  |




## Macros Documentation

### define ACQUIRE_WLOCK

```cpp
#define ACQUIRE_WLOCK(
    lock
)
(lock).acquire(MamdaLock::WRITE)
```


### define ACQUIRE_RLOCK

```cpp
#define ACQUIRE_RLOCK(
    lock
)
(lock).acquire(MamdaLock::READ)
```


### define RELEASE_WLOCK

```cpp
#define RELEASE_WLOCK(
    lock
)
(lock).release(MamdaLock::WRITE)
```


### define RELEASE_RLOCK

```cpp
#define RELEASE_RLOCK(
    lock
)
(lock).release(MamdaLock::READ)
```


### define ACQUIRE_LOCK

```cpp
#define ACQUIRE_LOCK(
    lock,
    writeNeeded
)
    do {                                        \
        if (writeNeeded)                        \
            (lock).acquire(MamdaLock::WRITE);   \
        else                                    \
            (lock).acquire(MamdaLock::READ);    \
    } while (0)
```


### define RELEASE_LOCK

```cpp
#define RELEASE_LOCK(
    lock,
    isWrite
)
    do {                                        \
        if (isWrite)                            \
            (lock).release(MamdaLock::WRITE);   \
        else                                    \
            (lock).release(MamdaLock::READ);    \
    } while (0)
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

#ifndef MamdaLockH
#define MamdaLockH

#include <mamda/MamdaConfig.h>

namespace Wombat
{
    #define ACQUIRE_WLOCK(lock) (lock).acquire(MamdaLock::WRITE)
    #define ACQUIRE_RLOCK(lock) (lock).acquire(MamdaLock::READ)
    #define RELEASE_WLOCK(lock) (lock).release(MamdaLock::WRITE)
    #define RELEASE_RLOCK(lock) (lock).release(MamdaLock::READ)

    #define ACQUIRE_LOCK(lock, writeNeeded)     \
    do {                                        \
        if (writeNeeded)                        \
            (lock).acquire(MamdaLock::WRITE);   \
        else                                    \
            (lock).acquire(MamdaLock::READ);    \
    } while (0) 

    #define RELEASE_LOCK(lock, isWrite)         \
    do {                                        \
        if (isWrite)                            \
            (lock).release(MamdaLock::WRITE);   \
        else                                    \
            (lock).release(MamdaLock::READ);    \
    } while (0) 


    class MAMDAExpDLL MamdaLock 
    {
    public:
        enum Scheme
        {
            SHARED,
            EXCLUSIVE
        }; 

        enum Type
        {
            READ,
            WRITE
        };

        MamdaLock (Scheme       scheme, 
                   const char*  context,
                   int          threads = 0);
 
        ~MamdaLock ();

        bool                acquire  (Type type);
        bool                release  (Type type);    
        static const char*  type     (Type type);
        static const char*  scheme   (Scheme scheme);

        static bool lockingEnabled()
        {
            // This is to be a configuration parameter at some point
            return true;
        }

    private:
        MamdaLock (const MamdaLock& lock);
        class MamdaLockImpl;
        MamdaLockImpl& mImpl;
    };

    #endif // MamdaLockH


} // namsespace Wombat 
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100
