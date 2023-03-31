---
title: conflation/serverconnection.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# conflation/serverconnection.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaServerConnection_free](serverconnection_8h.html#function-mamaserverconnection-free)**(mamaServerConnection connection)<br>Free the server connection.  |
| MAMAExpDLL mama_status | **[mamaServerConnection_getIpAddress](serverconnection_8h.html#function-mamaserverconnection-getipaddress)**(mamaServerConnection connection, const char ** address)<br>Get the IP address of the connected server.  |
| MAMAExpDLL mama_status | **[mamaServerConnection_getPort](serverconnection_8h.html#function-mamaserverconnection-getport)**(mamaServerConnection connection, uint16_t * port)<br>Get the port of the connected server.  |
| MAMAExpDLL mama_status | **[mamaServerConnection_getConnectionStatus](serverconnection_8h.html#function-mamaserverconnection-getconnectionstatus)**(mamaServerConnection connection, int * connectionStatus)<br>Get the status of the server connection.  |


## Functions Documentation

### function mamaServerConnection_free

```cpp
MAMAExpDLL mama_status mamaServerConnection_free(
    mamaServerConnection connection
)
```

Free the server connection. 

**Parameters**: 

  * **connection** The mama server connection


**Return**: mama_status return code MAMA_STATUS_OK 

This module contains information regarding inbound connections.


### function mamaServerConnection_getIpAddress

```cpp
MAMAExpDLL mama_status mamaServerConnection_getIpAddress(
    mamaServerConnection connection,
    const char ** address
)
```

Get the IP address of the connected server. 

**Parameters**: 

  * **connection** The mama server connection 
  * **address** Returning the associated IP address


**Return**: mama_status return code MAMA_STATUS_OK 

### function mamaServerConnection_getPort

```cpp
MAMAExpDLL mama_status mamaServerConnection_getPort(
    mamaServerConnection connection,
    uint16_t * port
)
```

Get the port of the connected server. 

**Parameters**: 

  * **connection** The mama server connection 
  * **port** Returning the associated port


**Return**: mama_status return code MAMA_STATUS_OK 

### function mamaServerConnection_getConnectionStatus

```cpp
MAMAExpDLL mama_status mamaServerConnection_getConnectionStatus(
    mamaServerConnection connection,
    int * connectionStatus
)
```

Get the status of the server connection. 

**Parameters**: 

  * **connection** The mama server connection 
  * **connectionStatus** Returning the connection status


**Return**: mama_status return code MAMA_STATUS_OK 



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

#ifndef MAMA_SERVER_CONNECTION_CPP_H__
#define MAMA_SERVER_CONNECTION_CPP_H__

#include "mama/mama.h"
#include "mama/config.h"

#if defined(__cplusplus)
extern "C" {
#endif

MAMAExpDLL
mama_status
mamaServerConnection_free (mamaServerConnection connection);

MAMAExpDLL
mama_status
mamaServerConnection_getIpAddress (mamaServerConnection connection,
                                   const char**         address);

MAMAExpDLL
mama_status
mamaServerConnection_getPort (mamaServerConnection connection, uint16_t* port);

MAMAExpDLL
mama_status
mamaServerConnection_getConnectionStatus (mamaServerConnection connection,
                                          int*                 connectionStatus);

#if defined(__cplusplus)
}
#endif

#endif /* MAMA_SERVER_CONNECTION_CPP_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
