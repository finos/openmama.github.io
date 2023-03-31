---
title: mama/dqpublisher.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/dqpublisher.h



## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaDQPublisher_allocate](dqpublisher_8h.html#function-mamadqpublisher-allocate)**(mamaDQPublisher * result) |
| MAMAExpDLL mama_status | **[mamaDQPublisher_create](dqpublisher_8h.html#function-mamadqpublisher-create)**(mamaDQPublisher pub, mamaTransport transport, const char * topic) |
| MAMAExpDLL mama_status | **[mamaDQPublisher_addTopic](dqpublisher_8h.html#function-mamadqpublisher-addtopic)**(mamaDQPublisher pub, const char * topic) |
| MAMAExpDLL mama_status | **[mamaDQPublisher_send](dqpublisher_8h.html#function-mamadqpublisher-send)**(mamaDQPublisher pub, mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaDQPublisher_sendReply](dqpublisher_8h.html#function-mamadqpublisher-sendreply)**(mamaDQPublisher pub, mamaMsg request, mamaMsg reply) |
| MAMAExpDLL mama_status | **[mamaDQPublisher_sendReplyWithHandle](dqpublisher_8h.html#function-mamadqpublisher-sendreplywithhandle)**(mamaDQPublisher pub, mamaMsgReply replyAddress, mamaMsg reply) |
| MAMAExpDLL void | **[mamaDQPublisher_destroy](dqpublisher_8h.html#function-mamadqpublisher-destroy)**(mamaDQPublisher pub) |
| MAMAExpDLL void | **[mamaDQPublisher_setStatus](dqpublisher_8h.html#function-mamadqpublisher-setstatus)**(mamaDQPublisher pub, mamaMsgStatus status) |
| MAMAExpDLL void | **[mamaDQPublisher_setSenderId](dqpublisher_8h.html#function-mamadqpublisher-setsenderid)**(mamaDQPublisher pub, uint64_t senderid) |
| MAMAExpDLL void | **[mamaDQPublisher_setSeqNum](dqpublisher_8h.html#function-mamadqpublisher-setseqnum)**(mamaDQPublisher pub, mama_seqnum_t num) |
| MAMAExpDLL void | **[mamaDQPublisher_setClosure](dqpublisher_8h.html#function-mamadqpublisher-setclosure)**(mamaDQPublisher pub, void * closure) |
| MAMAExpDLL void | **[mamaDQPublisher_enableSendTime](dqpublisher_8h.html#function-mamadqpublisher-enablesendtime)**(mamaDQPublisher pub, mama_bool_t enable) |
| MAMAExpDLL void * | **[mamaDQPublisher_getClosure](dqpublisher_8h.html#function-mamadqpublisher-getclosure)**(mamaDQPublisher pub) |
| MAMAExpDLL void | **[mamaDQPublisher_setCache](dqpublisher_8h.html#function-mamadqpublisher-setcache)**(mamaDQPublisher pub, void * cache) |
| MAMAExpDLL void * | **[mamaDQPublisher_getCache](dqpublisher_8h.html#function-mamadqpublisher-getcache)**(mamaDQPublisher pub) |


## Functions Documentation

### function mamaDQPublisher_allocate

```cpp
MAMAExpDLL mama_status mamaDQPublisher_allocate(
    mamaDQPublisher * result
)
```


**Parameters**: 

  * **result** A pointer to hold the mamaDQPublisher. 


Responsible for publishing mama marketdata messages. Allocate a mamaDQPublisher.


### function mamaDQPublisher_create

```cpp
MAMAExpDLL mama_status mamaDQPublisher_create(
    mamaDQPublisher pub,
    mamaTransport transport,
    const char * topic
)
```


**Parameters**: 

  * **pub** A pointer to the mamaDQPublisher. 
  * **transport** The transport. 
  * **topic** Symbol on which to publish. 


Create a mamaDQPublisher for the corresponding transport.


### function mamaDQPublisher_addTopic

```cpp
MAMAExpDLL mama_status mamaDQPublisher_addTopic(
    mamaDQPublisher pub,
    const char * topic
)
```


Add a new topic context to a mamaDQPublisher.

Having topic contexts allows a single publisher to publish messages with different wIssueSymbol fields with sequence number and status tracked separately for each wIssueSymbol. 


### function mamaDQPublisher_send

```cpp
MAMAExpDLL mama_status mamaDQPublisher_send(
    mamaDQPublisher pub,
    mamaMsg msg
)
```


**Parameters**: 

  * **publisher** The publish from which to send the message. 
  * **msg** The mamaMsg to send. 


Send a message.


### function mamaDQPublisher_sendReply

```cpp
MAMAExpDLL mama_status mamaDQPublisher_sendReply(
    mamaDQPublisher pub,
    mamaMsg request,
    mamaMsg reply
)
```


### function mamaDQPublisher_sendReplyWithHandle

```cpp
MAMAExpDLL mama_status mamaDQPublisher_sendReplyWithHandle(
    mamaDQPublisher pub,
    mamaMsgReply replyAddress,
    mamaMsg reply
)
```


### function mamaDQPublisher_destroy

```cpp
MAMAExpDLL void mamaDQPublisher_destroy(
    mamaDQPublisher pub
)
```


### function mamaDQPublisher_setStatus

```cpp
MAMAExpDLL void mamaDQPublisher_setStatus(
    mamaDQPublisher pub,
    mamaMsgStatus status
)
```


### function mamaDQPublisher_setSenderId

```cpp
MAMAExpDLL void mamaDQPublisher_setSenderId(
    mamaDQPublisher pub,
    uint64_t senderid
)
```


### function mamaDQPublisher_setSeqNum

```cpp
MAMAExpDLL void mamaDQPublisher_setSeqNum(
    mamaDQPublisher pub,
    mama_seqnum_t num
)
```


### function mamaDQPublisher_setClosure

```cpp
MAMAExpDLL void mamaDQPublisher_setClosure(
    mamaDQPublisher pub,
    void * closure
)
```


### function mamaDQPublisher_enableSendTime

```cpp
MAMAExpDLL void mamaDQPublisher_enableSendTime(
    mamaDQPublisher pub,
    mama_bool_t enable
)
```


### function mamaDQPublisher_getClosure

```cpp
MAMAExpDLL void * mamaDQPublisher_getClosure(
    mamaDQPublisher pub
)
```


### function mamaDQPublisher_setCache

```cpp
MAMAExpDLL void mamaDQPublisher_setCache(
    mamaDQPublisher pub,
    void * cache
)
```


### function mamaDQPublisher_getCache

```cpp
MAMAExpDLL void * mamaDQPublisher_getCache(
    mamaDQPublisher pub
)
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

#ifndef MAMA_DQPUBLISHER_H__
#define MAMA_DQPUBLISHER_H__

#include "mama/types.h"
#include "wombat/wConfig.h"

#if defined( __cplusplus )
extern "C"
{
#endif /* defined( __cplusplus ) */

MAMAExpDLL
extern mama_status
mamaDQPublisher_allocate (mamaDQPublisher* result );

MAMAExpDLL
extern mama_status
mamaDQPublisher_create (mamaDQPublisher pub, mamaTransport transport,
                         const char* topic);


MAMAExpDLL
mama_status mamaDQPublisher_addTopic (mamaDQPublisher pub, const char* topic);


MAMAExpDLL
extern mama_status
mamaDQPublisher_send (mamaDQPublisher pub, mamaMsg msg);


/*
 * Send a p2p message reply.
 *
 * @param publisher The mamaPublisher from which to send the message.
 * @param request The mamaMsg being responded to.
 * @param reply The mamaMsg to be send
 */
MAMAExpDLL
extern mama_status
mamaDQPublisher_sendReply (mamaDQPublisher pub, mamaMsg request,
                                     mamaMsg reply) ;


MAMAExpDLL
extern mama_status
mamaDQPublisher_sendReplyWithHandle (mamaDQPublisher pub,
                                     mamaMsgReply  replyAddress,
                                     mamaMsg reply);

MAMAExpDLL
extern void
mamaDQPublisher_destroy (mamaDQPublisher pub);



MAMAExpDLL
extern void
mamaDQPublisher_setStatus (mamaDQPublisher pub, mamaMsgStatus  status);

MAMAExpDLL
extern void
mamaDQPublisher_setSenderId (mamaDQPublisher pub, uint64_t  senderid);

MAMAExpDLL
extern void
mamaDQPublisher_setSeqNum (mamaDQPublisher pub, mama_seqnum_t num);

MAMAExpDLL
extern void
mamaDQPublisher_setClosure (mamaDQPublisher pub, void*  closure);

MAMAExpDLL
extern void
mamaDQPublisher_enableSendTime (mamaDQPublisher pub, mama_bool_t enable);

MAMAExpDLL
extern void*
mamaDQPublisher_getClosure (mamaDQPublisher pub);

MAMAExpDLL
extern void
mamaDQPublisher_setCache (mamaDQPublisher pub, void*  cache);

MAMAExpDLL
extern void*
mamaDQPublisher_getCache (mamaDQPublisher pub);

#if defined( __cplusplus )
}
#endif /* defined( __cplusplus ) */

#endif /* MAMA_PUBLISHER_H_*/
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
