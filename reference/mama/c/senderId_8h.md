---
title: mama/senderId.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/senderId.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL void | **[mamaSenderId_getIpAddr](senderId_8h.html#function-mamasenderid-getipaddr)**(uint64_t senderId, char * buffer, size_t maxLen) |
| MAMAExpDLL void | **[mamaSenderId_getPid](senderId_8h.html#function-mamasenderid-getpid)**(uint64_t senderId, uint16_t * result) |
| MAMAExpDLL void | **[mamaSenderId_getPid64](senderId_8h.html#function-mamasenderid-getpid64)**(uint64_t senderId, uint32_t * result) |
| MAMAExpDLL uint64_t | **[mamaSenderId_getSelf](senderId_8h.html#function-mamasenderid-getself)**(void ) |
| MAMAExpDLL void | **[mamaSenderId_setSelf](senderId_8h.html#function-mamasenderid-setself)**(uint64_t self) |


## Functions Documentation

### function mamaSenderId_getIpAddr

```cpp
MAMAExpDLL void mamaSenderId_getIpAddr(
    uint64_t senderId,
    char * buffer,
    size_t maxLen
)
```


Determine the IP address (as a string) of the sender ID in the buffer provided. The sender ID is a field sent in many MAMA messages (see the set of reserved fields). 


### function mamaSenderId_getPid

```cpp
MAMAExpDLL void mamaSenderId_getPid(
    uint64_t senderId,
    uint16_t * result
)
```


Determine the process id in the buffer provided. The sender ID is a field sent in many MAMA messages (see the set of reserved fields). 


### function mamaSenderId_getPid64

```cpp
MAMAExpDLL void mamaSenderId_getPid64(
    uint64_t senderId,
    uint32_t * result
)
```


### function mamaSenderId_getSelf

```cpp
MAMAExpDLL uint64_t mamaSenderId_getSelf(
    void 
)
```


Return a sender ID for possible use when publishing messages. The sender ID is a field sent in many MAMA messages (see the set of reserved fields). 


### function mamaSenderId_setSelf

```cpp
MAMAExpDLL void mamaSenderId_setSelf(
    uint64_t self
)
```


Manually set a sender ID for the process. If a sender_id is set this way, then as of that point, mamaSenderId_getSelf() will always return that value. 




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

#ifndef MamaSenderIdH__
#define MamaSenderIdH__

#include "mama/mama.h"

#if defined(__cplusplus)
extern "C" {
#endif


MAMAExpDLL
extern void mamaSenderId_getIpAddr (uint64_t  senderId,
                                    char*     buffer,
                                    size_t    maxLen);

MAMAExpDLL
extern void mamaSenderId_getPid (uint64_t   senderId,
                                 uint16_t*  result);

MAMAExpDLL
extern void mamaSenderId_getPid64 (uint64_t   senderId,
                                 uint32_t*  result);
MAMAExpDLL
extern uint64_t mamaSenderId_getSelf (void);

MAMAExpDLL
extern void mamaSenderId_setSelf (uint64_t self);

#if defined(__cplusplus)
}
#endif

#endif /* MamaSenderIdH__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
