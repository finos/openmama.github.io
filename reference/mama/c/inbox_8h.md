---
title: mama/inbox.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/inbox.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(MAMACALLTYPE *)(mamaMsg msg, void *closure) | **[mamaInboxMsgCallback](inbox_8h.html#typedef-mamainboxmsgcallback)**  |
| typedef void(MAMACALLTYPE *)(mama_status status, void *closure) | **[mamaInboxErrorCallback](inbox_8h.html#typedef-mamainboxerrorcallback)**  |
| typedef void(MAMACALLTYPE *)(mamaInbox inbox, void *closure) | **[mamaInboxDestroyCallback](inbox_8h.html#typedef-mamainboxdestroycallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaInbox_create](inbox_8h.html#function-mamainbox-create)**(mamaInbox * inbox, mamaTransport transport, mamaQueue queue, mamaInboxMsgCallback msgCB, mamaInboxErrorCallback errorCB, void * closure) |
| MAMAExpDLL mama_status | **[mamaInbox_create2](inbox_8h.html#function-mamainbox-create2)**(mamaInbox * inbox, mamaTransport transport, mamaQueue queue, mamaInboxMsgCallback msgCB, mamaInboxErrorCallback errorCB, mamaInboxDestroyCallback onInboxDestroyed, void * closure) |
| MAMAExpDLL mama_status | **[mamaInbox_destroy](inbox_8h.html#function-mamainbox-destroy)**(mamaInbox inbox) |

## Types Documentation

### typedef mamaInboxMsgCallback

```cpp
typedef void(MAMACALLTYPE * mamaInboxMsgCallback) (mamaMsg msg, void *closure);
```


**Parameters**: 

  * **msg** The mamaMsg received in the p2p response. 
  * **closure** The user supplied data passed to mamaInbox_create() 


Inbox structure for processing point to point messaging. Invoked in response to a p2p message being received.


### typedef mamaInboxErrorCallback

```cpp
typedef void(MAMACALLTYPE * mamaInboxErrorCallback) (mama_status status, void *closure);
```


**Parameters**: 

  * **status** The mama_status describing the error condition. 
  * **closure** The user supplied data passed to mamaInbox_create() 


NB. Not currently used. Invoked when an error is encountered during p2p messaging.


### typedef mamaInboxDestroyCallback

```cpp
typedef void(MAMACALLTYPE * mamaInboxDestroyCallback) (mamaInbox inbox, void *closure);
```


**Parameters**: 

  * **inbox** The mama inbox. 
  * **closure** The user supplied data passed to mamaInbox_create() 


Invoked whenever the inbox has been destroyed.



## Functions Documentation

### function mamaInbox_create

```cpp
MAMAExpDLL mama_status mamaInbox_create(
    mamaInbox * inbox,
    mamaTransport transport,
    mamaQueue queue,
    mamaInboxMsgCallback msgCB,
    mamaInboxErrorCallback errorCB,
    void * closure
)
```


**Parameters**: 

  * **inbox** Pointer to the inbox which will be created 
  * **transport** The mamaTransport being used. 
  * **queue** The mamaQueue to use. 
  * **msgCB** Invoked for any point to point responses. 
  * **errorCB** For future use. Not currently used. 
  * **closure** User supplied data to be passed back in callbacks.


**Return**: mama_status MAMA_STATUS_OK if the function is successful. 

Creates an inbox and stores at the address specified by the calling client.


### function mamaInbox_create2

```cpp
MAMAExpDLL mama_status mamaInbox_create2(
    mamaInbox * inbox,
    mamaTransport transport,
    mamaQueue queue,
    mamaInboxMsgCallback msgCB,
    mamaInboxErrorCallback errorCB,
    mamaInboxDestroyCallback onInboxDestroyed,
    void * closure
)
```


**Parameters**: 

  * **inbox** Pointer to the inbox which will be created 
  * **transport** The mamaTransport being used. 
  * **queue** The mamaQueue to use. 
  * **msgCB** Invoked for any point to point responses. 
  * **errorCB** For future use. Not currently used. 
  * **closure** User supplied data to be passed back in callbacks.


**Return**: mama_status MAMA_STATUS_OK if the function is successful. 

Creates an inbox and stores at the address specified by the calling client.


### function mamaInbox_destroy

```cpp
MAMAExpDLL mama_status mamaInbox_destroy(
    mamaInbox inbox
)
```


**Parameters**: 

  * **inbox** The mamaInbox to be destroyed.


**Return**: mama_Status MAMA_STATUS_OK if function call successful. 

Destroy the supplied inbox structure. Note that this function is asynchronous and is only guaranteed to have finished whenever the onInboxDestroyed function passed to the mamaInbox_create2 has been called.




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

#ifndef MAMA_INBOX_H__
#define MAMA_INBOX_H__ 

#if defined(__cplusplus)
extern "C" {
#endif

typedef void (MAMACALLTYPE *mamaInboxMsgCallback) (mamaMsg msg, void *closure);

typedef void (MAMACALLTYPE *mamaInboxErrorCallback) ( mama_status status, void *closure);

typedef void (MAMACALLTYPE *mamaInboxDestroyCallback) ( mamaInbox inbox, void *closure);

MAMAExpDLL
extern mama_status
mamaInbox_create (mamaInbox*             inbox,
                  mamaTransport          transport,
                  mamaQueue              queue,
                  mamaInboxMsgCallback   msgCB,
                  mamaInboxErrorCallback errorCB,
                  void*                  closure);

MAMAExpDLL
extern mama_status
mamaInbox_create2 (mamaInbox*               inbox,
                   mamaTransport            transport,
                   mamaQueue                queue,
                   mamaInboxMsgCallback     msgCB,
                   mamaInboxErrorCallback   errorCB,
                   mamaInboxDestroyCallback onInboxDestroyed,
                   void*                    closure);

MAMAExpDLL
extern mama_status 
mamaInbox_destroy (mamaInbox inbox);

#if defined(__cplusplus)
}
#endif


#endif /* MAMA_INBOX_H__ */
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
