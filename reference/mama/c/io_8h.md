---
title: mama/io.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/io.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaIoType](io_8h.html#enum-mamaiotype)** { MAMA_IO_READ, MAMA_IO_WRITE, MAMA_IO_CONNECT, MAMA_IO_ACCEPT, MAMA_IO_CLOSE, MAMA_IO_ERROR, MAMA_IO_EXCEPT}<br>IO Types.  |
| typedef void(MAMACALLTYPE *)(mamaIo io, mamaIoType ioType, void *closure) | **[mamaIoCb](io_8h.html#typedef-mamaiocb)** <br>Prototype for callback invoked by IO handler.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaIo_create](io_8h.html#function-mamaio-create)**(mamaIo * result, mamaQueue queue, uint32_t descriptor, mamaIoCb action, mamaIoType ioType, void * closure)<br>Create a IO handler.  |
| MAMAExpDLL mama_status | **[mamaIo_getDescriptor](io_8h.html#function-mamaio-getdescriptor)**(mamaIo io, uint32_t * d)<br>Get the IO descriptor.  |
| MAMAExpDLL mama_status | **[mamaIo_destroy](io_8h.html#function-mamaio-destroy)**(mamaIo io)<br>Destroy the IO.  |

## Types Documentation

### enum mamaIoType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_IO_READ | |  the socket is readable  |
| MAMA_IO_WRITE | |  the socket is writable  |
| MAMA_IO_CONNECT | |  the socket is connected  |
| MAMA_IO_ACCEPT | |  the socket accepted a connection  |
| MAMA_IO_CLOSE | |  the socket was closed  |
| MAMA_IO_ERROR | |  an error occurred  |
| MAMA_IO_EXCEPT | |  An exceptional event like out of band data occurred  |



IO Types. 

Note not all implementations support all mamaIoTypes. 


### typedef mamaIoCb

```cpp
typedef void(MAMACALLTYPE * mamaIoCb) (mamaIo io, mamaIoType ioType, void *closure);
```

Prototype for callback invoked by IO handler. 

**Parameters**: 

  * **io** The mamaIo handle. 
  * **ioType** The mamaIoType for the event. 
  * **closure** Caller supplied closure. 



## Functions Documentation

### function mamaIo_create

```cpp
MAMAExpDLL mama_status mamaIo_create(
    mamaIo * result,
    mamaQueue queue,
    uint32_t descriptor,
    mamaIoCb action,
    mamaIoType ioType,
    void * closure
)
```

Create a IO handler. 

**Parameters**: 

  * **result** A pointer to the io handle. 
  * **queue** The event queue for the io events. NULL specifies the Mama default queue. 
  * **action** The callback to be invoked when an event occurs. 
  * **descriptor** Wait for IO on this descriptor. 
  * **ioType** Wait for occurrences of this type. 
  * **closure** The closure that is passed to the callback.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_QUEUE MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_OK 

If the underlying infrastructure does not support the requested mamaIoType, mamaIo_create returns MAMA_STATUS_UNSUPPORTED_IO_TYPE. For example RV only supports READ, WRITE, and EXCEPT. LBM supports all types except ERROR.


### function mamaIo_getDescriptor

```cpp
MAMAExpDLL mama_status mamaIo_getDescriptor(
    mamaIo io,
    uint32_t * d
)
```

Get the IO descriptor. 

**Parameters**: 

  * **io** The mamaIo handle.
  * **d** The associated descriptor for the mamaIO handle.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_INVALID_ARG MAMA_STATUS_NO_BRIDGE_IMPL 

### function mamaIo_destroy

```cpp
MAMAExpDLL mama_status mamaIo_destroy(
    mamaIo io
)
```

Destroy the IO. 

**Parameters**: 

  * **io** The mamaIo handle to be destroyed.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_NO_BRIDGE_IMPL MAMA_STATUS_INVALID_ARG MAMA_STATUS_OK 



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

#ifndef MamaIoH__
#define MamaIoH__

#include <mama/types.h>
#include <mama/status.h>

#if defined( __cplusplus )
extern "C"
{
#endif

typedef enum
{
    MAMA_IO_READ,       
    MAMA_IO_WRITE,      
    MAMA_IO_CONNECT,    
    MAMA_IO_ACCEPT,     
    MAMA_IO_CLOSE,      
    MAMA_IO_ERROR,      
    MAMA_IO_EXCEPT      
} mamaIoType;

typedef void (MAMACALLTYPE *mamaIoCb) (mamaIo     io,
                                       mamaIoType ioType,
                                       void*      closure);

MAMAExpDLL extern
mama_status mamaIo_create (mamaIo*    result,
                           mamaQueue  queue,
                           uint32_t   descriptor,
                           mamaIoCb   action,
                           mamaIoType ioType,
                           void*      closure);

MAMAExpDLL extern
mama_status mamaIo_getDescriptor (mamaIo io, uint32_t* d);

MAMAExpDLL extern
mama_status mamaIo_destroy (mamaIo io);


#if defined( __cplusplus )
}
#endif

#endif /* MamaIoH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
