---
title: conflation/connection.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# conflation/connection.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaConnection_free](connection_8h.html#function-mamaconnection-free)**(mamaConnection connection)<br>Free the connection.  |
| MAMAExpDLL mama_status | **[mamaConnection_getTransport](connection_8h.html#function-mamaconnection-gettransport)**(mamaConnection connection, mamaTransport * result)<br>Convenience method for returnining the transport.  |
| MAMAExpDLL mama_status | **[mamaConnection_getIpAddress](connection_8h.html#function-mamaconnection-getipaddress)**(mamaConnection connection, const char ** address)<br>Return the IP address of the connected client.  |
| MAMAExpDLL mama_status | **[mamaConnection_getPort](connection_8h.html#function-mamaconnection-getport)**(mamaConnection connection, uint16_t * port)<br>Return the port of the connected client. This will usually be an ephemeral port selected by the client's ip stack.  |
| MAMAExpDLL mama_status | **[mamaConnection_getUserName](connection_8h.html#function-mamaconnection-getusername)**(mamaConnection connection, const char ** userName) |
| MAMAExpDLL mama_status | **[mamaConnection_getAppName](connection_8h.html#function-mamaconnection-getappname)**(mamaConnection connection, const char ** appName)<br>Return the application name of the connected client.  |
| MAMAExpDLL mama_status | **[mamaConnection_getMaxQueueSize](connection_8h.html#function-mamaconnection-getmaxqueuesize)**(mamaConnection connection, uint32_t * queueSize)<br>Return the maximum allowable outbound queue size for the client.  |
| MAMAExpDLL mama_status | **[mamaConnection_getQueueSize](connection_8h.html#function-mamaconnection-getqueuesize)**(mamaConnection connection, uint32_t * numItems)<br>Get the number of items in the queue when structure was created.  |
| MAMAExpDLL mama_status | **[mamaConnection_getMsgCount](connection_8h.html#function-mamaconnection-getmsgcount)**(mamaConnection connection, uint32_t * msgCount)<br>Get the number of messages sent on the connection.  |
| MAMAExpDLL mama_status | **[mamaConnection_getBytesSent](connection_8h.html#function-mamaconnection-getbytessent)**(mamaConnection connection, uint32_t * bytesSent)<br>Get the number of bytes sent on the connection.  |
| MAMAExpDLL const char * | **[mamaConnection_toString](connection_8h.html#function-mamaconnection-tostring)**(mamaConnection connection)<br>Convert a connection to a string.  |
| MAMAExpDLL mama_status | **[mamaConnection_isIntercepted](connection_8h.html#function-mamaconnection-isintercepted)**(mamaConnection connection, uint8_t * result)<br>Check if the conneciton is intercepted.  |


## Functions Documentation

### function mamaConnection_free

```cpp
MAMAExpDLL mama_status mamaConnection_free(
    mamaConnection connection
)
```

Free the connection. 

**Parameters**: 

  * **connection** The mama connection


**Return**: mama_status return code MAMA_STATUS_OK 

This class contains information regarding outbound connections for per/connection conflation.


### function mamaConnection_getTransport

```cpp
MAMAExpDLL mama_status mamaConnection_getTransport(
    mamaConnection connection,
    mamaTransport * result
)
```

Convenience method for returnining the transport. 

**Parameters**: 

  * **connection** The mama connection 
  * **result** Returning the associated transport.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaConnection_getIpAddress

```cpp
MAMAExpDLL mama_status mamaConnection_getIpAddress(
    mamaConnection connection,
    const char ** address
)
```

Return the IP address of the connected client. 

**Parameters**: 

  * **connection** The mama connection 
  * **address** Returning the associated IP address


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaConnection_getPort

```cpp
MAMAExpDLL mama_status mamaConnection_getPort(
    mamaConnection connection,
    uint16_t * port
)
```

Return the port of the connected client. This will usually be an ephemeral port selected by the client's ip stack. 

**Parameters**: 

  * **connection** The mama connection 
  * **port** Returning the associated port


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaConnection_getUserName

```cpp
MAMAExpDLL mama_status mamaConnection_getUserName(
    mamaConnection connection,
    const char ** userName
)
```


### function mamaConnection_getAppName

```cpp
MAMAExpDLL mama_status mamaConnection_getAppName(
    mamaConnection connection,
    const char ** appName
)
```

Return the application name of the connected client. 

**Parameters**: 

  * **connection** The mama connection 
  * **appName** Returning the associated application name


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaConnection_getMaxQueueSize

```cpp
MAMAExpDLL mama_status mamaConnection_getMaxQueueSize(
    mamaConnection connection,
    uint32_t * queueSize
)
```

Return the maximum allowable outbound queue size for the client. 

**Parameters**: 

  * **connection** The mama connection 
  * **queueSize** Returning the associated maximum queue size


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaConnection_getQueueSize

```cpp
MAMAExpDLL mama_status mamaConnection_getQueueSize(
    mamaConnection connection,
    uint32_t * numItems
)
```

Get the number of items in the queue when structure was created. 

**Parameters**: 

  * **connection** The mama connection 
  * **numItems** Returning the associated number of items in the queue


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaConnection_getMsgCount

```cpp
MAMAExpDLL mama_status mamaConnection_getMsgCount(
    mamaConnection connection,
    uint32_t * msgCount
)
```

Get the number of messages sent on the connection. 

**Parameters**: 

  * **connection** The mama connection 
  * **msgCount** Returning the number of messages per connection


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaConnection_getBytesSent

```cpp
MAMAExpDLL mama_status mamaConnection_getBytesSent(
    mamaConnection connection,
    uint32_t * bytesSent
)
```

Get the number of bytes sent on the connection. 

**Parameters**: 

  * **connection** The mama connection 
  * **bytesSent** Returning the number of bytes sent per connection


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaConnection_toString

```cpp
MAMAExpDLL const char * mamaConnection_toString(
    mamaConnection connection
)
```

Convert a connection to a string. 

**Parameters**: 

  * **connection** The mama connection


**Return**: String representation of the mama connection object 

### function mamaConnection_isIntercepted

```cpp
MAMAExpDLL mama_status mamaConnection_isIntercepted(
    mamaConnection connection,
    uint8_t * result
)
```

Check if the conneciton is intercepted. 

**Parameters**: 

  * **connection** The mama connection 
  * **result** Returns 0 if connection is not intercepted.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_NOT_INSTALLED 



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

#ifndef MAMA_CONNECTION_H__
#define MAMA_CONNECTION_H__

#include "mama/mama.h"
#include "mama/config.h"

#if defined(__cplusplus)
extern "C" {
#endif

MAMAExpDLL
mama_status
mamaConnection_free (mamaConnection connection);

MAMAExpDLL
mama_status
mamaConnection_getTransport (mamaConnection connection, mamaTransport *result);

MAMAExpDLL
mama_status
mamaConnection_getIpAddress (mamaConnection connection, const char** address);

MAMAExpDLL
mama_status
mamaConnection_getPort (mamaConnection connection, uint16_t* port);

/*
 * @brief Return the user name of the connected client.
 *
 * @param[in]  connection The mama connection
 * @param[out] userName   Returning the associated user name
 *
 * @return mama_status return code can be one of:
 *              MAMA_STATUS_NULL_ARG
 *              MAMA_STATUS_OK
 */
MAMAExpDLL
mama_status
mamaConnection_getUserName (mamaConnection connection, const char** userName);

MAMAExpDLL
mama_status
mamaConnection_getAppName (mamaConnection connection, const char** appName);

MAMAExpDLL
mama_status
mamaConnection_getMaxQueueSize(mamaConnection connection, uint32_t *queueSize);

MAMAExpDLL
mama_status
mamaConnection_getQueueSize (mamaConnection connection, uint32_t *numItems);

MAMAExpDLL
mama_status
mamaConnection_getMsgCount (mamaConnection connection, uint32_t *msgCount);

MAMAExpDLL
mama_status
mamaConnection_getBytesSent (mamaConnection connection, uint32_t *bytesSent);

MAMAExpDLL
const char*
mamaConnection_toString (mamaConnection connection);

MAMAExpDLL
mama_status
mamaConnection_isIntercepted (mamaConnection connection, uint8_t* result);

#if defined(__cplusplus)
}
#endif
#endif /* MAMA_CONNECTION_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
