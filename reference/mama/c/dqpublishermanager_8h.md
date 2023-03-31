---
title: mama/dqpublishermanager.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/dqpublishermanager.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[mamaPublishTopic_](structmamaPublishTopic__.html)**  |
| struct | **[mamaDQPublisherManagerCallbacks_](structmamaDQPublisherManagerCallbacks__.html)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [mamaPublishTopic_](structmamaPublishTopic__.html) | **[mamaPublishTopic](dqpublishermanager_8h.html#typedef-mamapublishtopic)**  |
| typedef void(MAMACALLTYPE *)(mamaDQPublisherManager manager) | **[mamaDQPublisherCreateCB](dqpublishermanager_8h.html#typedef-mamadqpublishercreatecb)**  |
| typedef void(MAMACALLTYPE *)(mamaDQPublisherManager manager, const char *symbol, short subType, short msgType, mamaMsg msg) | **[mamaDQPublisherNewRequestCB](dqpublishermanager_8h.html#typedef-mamadqpublishernewrequestcb)**  |
| typedef void(MAMACALLTYPE *)(mamaDQPublisherManager manager, mamaPublishTopic *info, short subType, short msgType, mamaMsg msg) | **[mamaDQPublisherRequestCB](dqpublishermanager_8h.html#typedef-mamadqpublisherrequestcb)**  |
| typedef void(MAMACALLTYPE *)(mamaDQPublisherManager manager, mamaPublishTopic *info, short subType, short msgType, mamaMsg msg) | **[mamaDQPublisherRefreshCB](dqpublishermanager_8h.html#typedef-mamadqpublisherrefreshcb)**  |
| typedef void(MAMACALLTYPE *)(mamaDQPublisherManager manager, mama_status status, const char *errortxt, mamaMsg msg) | **[mamaDQPublisherErrorCB](dqpublishermanager_8h.html#typedef-mamadqpublishererrorcb)**  |
| typedef void(MAMACALLTYPE *)(mamaDQPublisherManager manager, mamaMsg msg) | **[mamaDQPublisherMsgCB](dqpublishermanager_8h.html#typedef-mamadqpublishermsgcb)**  |
| typedef struct [mamaDQPublisherManagerCallbacks_](structmamaDQPublisherManagerCallbacks__.html) | **[mamaDQPublisherManagerCallbacks](dqpublishermanager_8h.html#typedef-mamadqpublishermanagercallbacks)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_allocate](dqpublishermanager_8h.html#function-mamadqpublishermanager-allocate)**(mamaDQPublisherManager * result) |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_create](dqpublishermanager_8h.html#function-mamadqpublishermanager-create)**(mamaDQPublisherManager dqPublisher, mamaTransport transport, mamaQueue queue, const [mamaDQPublisherManagerCallbacks](structmamaDQPublisherManagerCallbacks__.html) * callback, const char * sourcename, const char * root, void * closure) |
| MAMAExpDLL void | **[mamaDQPublisherManager_destroy](dqpublishermanager_8h.html#function-mamadqpublishermanager-destroy)**(mamaDQPublisherManager manager) |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_addPublisher](dqpublishermanager_8h.html#function-mamadqpublishermanager-addpublisher)**(mamaDQPublisherManager manager, const char * symbol, mamaDQPublisher pub, void * cache) |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_removePublisher](dqpublishermanager_8h.html#function-mamadqpublishermanager-removepublisher)**(mamaDQPublisherManager manager, const char * symbol, mamaDQPublisher * pub) |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_createPublisher](dqpublishermanager_8h.html#function-mamadqpublishermanager-createpublisher)**(mamaDQPublisherManager manager, const char * symbol, void * cache, mamaDQPublisher * newPublisher) |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_destroyPublisher](dqpublishermanager_8h.html#function-mamadqpublishermanager-destroypublisher)**(mamaDQPublisherManager manager, const char * symbol) |
| MAMAExpDLL void | **[mamaDQPublisherManager_setStatus](dqpublishermanager_8h.html#function-mamadqpublishermanager-setstatus)**(mamaDQPublisherManager manager, mamaMsgStatus status) |
| MAMAExpDLL void * | **[mamaDQPublisherManager_getClosure](dqpublishermanager_8h.html#function-mamadqpublishermanager-getclosure)**(mamaDQPublisherManager manager) |
| MAMAExpDLL void | **[mamaDQPublisherManager_setSenderId](dqpublishermanager_8h.html#function-mamadqpublishermanager-setsenderid)**(mamaDQPublisherManager manager, uint64_t senderid) |
| MAMAExpDLL void | **[mamaDQPublisherManager_setSeqNum](dqpublishermanager_8h.html#function-mamadqpublishermanager-setseqnum)**(mamaDQPublisherManager manager, mama_seqnum_t num) |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_sendSyncRequest](dqpublishermanager_8h.html#function-mamadqpublishermanager-sendsyncrequest)**(mamaDQPublisherManager manager, mama_u16_t nummsg, mama_f64_t delay, mama_f64_t duration) |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_sendNoSubscribers](dqpublishermanager_8h.html#function-mamadqpublishermanager-sendnosubscribers)**(mamaDQPublisherManager manager, const char * symbol) |
| MAMAExpDLL mama_status | **[mamaDQPublisherManager_getPublisher](dqpublishermanager_8h.html#function-mamadqpublishermanager-getpublisher)**(mamaDQPublisherManager manager, const char * symbol, mamaDQPublisher * pub) |
| MAMAExpDLL void | **[mamaDQPublisherManager_enableSendTime](dqpublishermanager_8h.html#function-mamadqpublishermanager-enablesendtime)**(mamaDQPublisherManager manager, mama_bool_t enable) |

## Types Documentation

### typedef mamaPublishTopic

```cpp
typedef struct mamaPublishTopic_ mamaPublishTopic;
```


### typedef mamaDQPublisherCreateCB

```cpp
typedef void(MAMACALLTYPE * mamaDQPublisherCreateCB) (mamaDQPublisherManager manager);
```


Callback method triggered when the DQ Publisher Manager is initially created and the subscription to the source root has been successfully created. 


### typedef mamaDQPublisherNewRequestCB

```cpp
typedef void(MAMACALLTYPE * mamaDQPublisherNewRequestCB) (mamaDQPublisherManager manager, const char *symbol, short subType, short msgType, mamaMsg msg);
```


**Parameters**: 

  * **manager** The current manager instance. 
  * **symbol** The instrument for which the subscription request was received. 
  * **subType** Enum indicating the type of subscription request received. 
  * **msgType** Enum indicating the type of message received. 
  * **msg** The MAMA message received with the request. 


Callback method triggered when a subscription request is received for an instrument which does not currently have a publisher in the current manager.


### typedef mamaDQPublisherRequestCB

```cpp
typedef void(MAMACALLTYPE * mamaDQPublisherRequestCB) (mamaDQPublisherManager manager, mamaPublishTopic *info, short subType, short msgType, mamaMsg msg);
```


**Parameters**: 

  * **manager** The current manager instance. 
  * **info** The current publisher topic. 
  * **subType** Enum indicating the type of subscription request received. 
  * **msgType** Enum indicating the type of message received. 
  * **msg** The MAMA message received with the request. 


Callback method triggered when a subscription request is received for an instrument which already has a publisher in the current manager.


### typedef mamaDQPublisherRefreshCB

```cpp
typedef void(MAMACALLTYPE * mamaDQPublisherRefreshCB) (mamaDQPublisherManager manager, mamaPublishTopic *info, short subType, short msgType, mamaMsg msg);
```


**Parameters**: 

  * **manager** The current manager instance. 
  * **info** The current publisher topic. 
  * **subType** Enum indicating the type of subscription request received. 
  * **msgType** Enum indicating the type of message received. 
  * **msg** The MAMA message received with the request. 


Callback method triggered when a subscription refresh request is received for an instrument. The DQ Publisher Manager handles sending the response, so this callback is purely informational.


### typedef mamaDQPublisherErrorCB

```cpp
typedef void(MAMACALLTYPE * mamaDQPublisherErrorCB) (mamaDQPublisherManager manager, mama_status status, const char *errortxt, mamaMsg msg);
```


**Parameters**: 

  * **manager** The current manager instance. 
  * **status** The status indicating the cause of the error. 
  * **errortxt** A string representation of the cause of the error. (Stack allocated) 
  * **msg** The MAMA message received with the request. 


Callback method triggered when a error is encountered processing a message by the DQ Publisher Manager.


### typedef mamaDQPublisherMsgCB

```cpp
typedef void(MAMACALLTYPE * mamaDQPublisherMsgCB) (mamaDQPublisherManager manager, mamaMsg msg);
```


**Parameters**: 

  * **manager** The current manager instance. 
  * **msg** The MAMA message received with the request. 


Callback method triggered when a message is received by the DQ Publisher Manager which doesn't contain the expected 'MdSubscriptionType' field.

Note: While such messages are unexpected, this feature may be used to implement publisher specific functionality, where such features are supported at the 'source' or 'namespace' level.


### typedef mamaDQPublisherManagerCallbacks

```cpp
typedef struct mamaDQPublisherManagerCallbacks_ mamaDQPublisherManagerCallbacks;
```


Structure containing each of the DQ Publisher Manager callbacks. 



## Functions Documentation

### function mamaDQPublisherManager_allocate

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_allocate(
    mamaDQPublisherManager * result
)
```


**Parameters**: 

  * **result** A pointer to hold the resulting mamaDQPublisherManager.


**Return**: mama_status A status indicating the result of the allocation. May return:

* MAMA_STATUS_NOMEM - Allocation failed due to lack of memory.
* MAMA_STATUS_OK - Successfully allocated. 

Allocate memory for the DQ Publisher Manager, initialising the Sender ID (either pre-defined, or based on the IP and PID of the host and publisher) and Sequence Number.


### function mamaDQPublisherManager_create

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_create(
    mamaDQPublisherManager dqPublisher,
    mamaTransport transport,
    mamaQueue queue,
    const mamaDQPublisherManagerCallbacks * callback,
    const char * sourcename,
    const char * root,
    void * closure
)
```


**Parameters**: 

  * **dqPublisher** The DQ Publisher Manager instance to create. 
  * **transport** The MAMA transport to use for publishers created by this manager. 
  * **queue** The MAMA queue to use for publishers created by this manager. 
  * **callback** The DQ Publisher Manager callbacks to use to interact with the manager. 
  * **sourcename** The namespace on which publishers created by the manager. 
  * **root** The root on which to create publishers. 
  * **closure** A user defined structure which can be used as a reference.


**Return**: mama_status A status indicating the rest of the creation. May return:

* MAMA_STATUS_OK - DQ Publisher Manager creation has succeeded. 

Create the DQ Publisher Manager instance.

Creates a DQ Publisher Manager instance. Creates the publisher hashmap to store created publishers. Initialises the basic subscription which receives requests from subscribing applications for data. Also initialises the CM responder publisher to handle sync requests when required.


### function mamaDQPublisherManager_destroy

```cpp
MAMAExpDLL void mamaDQPublisherManager_destroy(
    mamaDQPublisherManager manager
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to destroy. 


Destroy the DQ Publisher Manager instance.


### function mamaDQPublisherManager_addPublisher

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_addPublisher(
    mamaDQPublisherManager manager,
    const char * symbol,
    mamaDQPublisher pub,
    void * cache
)
```


**Parameters**: 

  * **manager** The manager to add the publisher to. 
  * **symbol** The symbol which the publisher was created for. 
  * **pub** The publisher to add to the manager. 
  * **cache** The cache to assign to the publisher.


**Return**: mama_status A status indicating the success of the addition. May return:

* MAMA_STATUS_OK for a successful addition.
* MAMA_STATUS_INVALID_ARG where a publisher already exists for the given instrument. 

Add an already created MAMA Publisher to the given DQ Publisher Manager.


### function mamaDQPublisherManager_removePublisher

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_removePublisher(
    mamaDQPublisherManager manager,
    const char * symbol,
    mamaDQPublisher * pub
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to remove the publisher from. 
  * **symbol** The instrument to remove the publisher for. 
  * **pub** A pointer to the publisher returned by the method.


**Return**: mama_status Status indicating the successful removal of the publisher. May return:

* MAMA_STATUS_OK - Publisher successfully removed.
* MAMA_STATUS_INVALID_ARG - Publisher not found. 

Remove the publisher specified by the 'symbol' paramater from the current manager, but return a pointer to that publisher in the 'pub' parameter.


### function mamaDQPublisherManager_createPublisher

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_createPublisher(
    mamaDQPublisherManager manager,
    const char * symbol,
    void * cache,
    mamaDQPublisher * newPublisher
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to create the publisher on. 
  * **symbol** The instrument to remove the publisher for. 
  * **cache** The cache to attach to the publisher. 
  * **newPublisher** A pointer to the publisher created.


**Return**: mama_status Status indicating the successful removal of the publisher. May return:

* MAMA_STATUS_OK - Publisher successful removed.
* MAMA_STATUS_INVALID_ARG - Publisher not found. 

Create a new publisher for the given symbol, attaching a 'cache' to the publisher and returning it in the 'newPublisher' parameter.


### function mamaDQPublisherManager_destroyPublisher

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_destroyPublisher(
    mamaDQPublisherManager manager,
    const char * symbol
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to destroy the publisher from. 
  * **symbol** The instrument to destroy the publisher for.


**Return**: mama_status Status indicating the successful removal of the publisher. May return:

* MAMA_STATUS_OK - Publisher successfully destroyed.
* MAMA_STATUS_INVALID_ARG - Publisher not found. 

Destroy the publisher associated with the given symbol in the specified publisher manager. Calls mamaPublisher_destroy on the object, and frees the memory associated with it.


### function mamaDQPublisherManager_setStatus

```cpp
MAMAExpDLL void mamaDQPublisherManager_setStatus(
    mamaDQPublisherManager manager,
    mamaMsgStatus status
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance on which to set the status. 
  * **mamaMsgStatus** The MAMA Msg Status to be set on the manager. 


Set the MAMA message status to be associated with newly created publishers. Must be set before creation of the publisher to take effect.


### function mamaDQPublisherManager_getClosure

```cpp
MAMAExpDLL void * mamaDQPublisherManager_getClosure(
    mamaDQPublisherManager manager
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to return the closure from.


**Return**: void* The closure returned from the manager. 

Return the closure object associated with the DQ Publisher Manager.


### function mamaDQPublisherManager_setSenderId

```cpp
MAMAExpDLL void mamaDQPublisherManager_setSenderId(
    mamaDQPublisherManager manager,
    uint64_t senderid
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager to set the sender ID for. 
  * **sendid** The Sender ID to use for publishers created by the manager. 


Set the sender ID used in creation of new publishers. Must be set before the creation of the publisher to take effect.


### function mamaDQPublisherManager_setSeqNum

```cpp
MAMAExpDLL void mamaDQPublisherManager_setSeqNum(
    mamaDQPublisherManager manager,
    mama_seqnum_t num
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to set the sequence number for. 
  * **num** The sequence number to set. 


Set the sequence number used when creating new publishers. Must be set before creation of the publisher to take effect.


### function mamaDQPublisherManager_sendSyncRequest

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_sendSyncRequest(
    mamaDQPublisherManager manager,
    mama_u16_t nummsg,
    mama_f64_t delay,
    mama_f64_t duration
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to send requests for. 
  * **nummsg** The number of instruments to be returned per sync response 
  * **delay** The delay between sending of sync responses. 
  * **duration** The duration of responses.


**Return**: mama_status Status indicating the successful removal of the publisher. May return:

* MAMA_STATUS_OK - Publisher successful removed.
* MAMA_STATUS_INVALID_ARG - Publisher not found. 

Send a 'sync request' message to subscribing applications.

Sync requests are a mechanism by which a newly started MAMA publisher can request that client applications inform the publisher of the instruments to which they are subscribed. Required CM responder to be enabled in the clients.


### function mamaDQPublisherManager_sendNoSubscribers

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_sendNoSubscribers(
    mamaDQPublisherManager manager,
    const char * symbol
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to remove the publisher from. 
  * **symbol** The instrument to send the no subscribers message for (unused)


**Return**: mama_status Status indicating the successful sending of the message (unused) 

Send a 'no subscribers' message.


### function mamaDQPublisherManager_getPublisher

```cpp
MAMAExpDLL mama_status mamaDQPublisherManager_getPublisher(
    mamaDQPublisherManager manager,
    const char * symbol,
    mamaDQPublisher * pub
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager instance to return the publisher from. 
  * **symbol** The instrument to return the publisher for. 
  * **pub** The publisher returned from the publisher.


**Return**: mama_status Status indicating the successful removal of the publisher. May return:

* MAMA_STATUS_OK - Publisher successful removed.
* MAMA_STATUS_INVALID_ARG - Publisher or manager don't exist (NULL)
* MAMA_STATUS_NOT_FOUND - The publisher has not been found in the manager. 

Return the publisher specified by the 'symbol' paramater from the current manager.


### function mamaDQPublisherManager_enableSendTime

```cpp
MAMAExpDLL void mamaDQPublisherManager_enableSendTime(
    mamaDQPublisherManager manager,
    mama_bool_t enable
)
```


**Parameters**: 

  * **manager** The DQ Publisher Manager on which to enable the send time. 
  * **enable** Specify whether to publish the send time or not. 


Enable or disable the publishing of 'send times' by publishers created by the manager. Must be set before creation of the publisher to take effect.




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

#ifndef MAMA_DQPUBLISHERMANAGER_H__
#define MAMA_DQPUBLISHERMANAGER_H__

#include "mama/types.h"
#include "wombat/wConfig.h"

#if defined(__cplusplus)
extern "C" {
#endif /* defined( __cplusplus ) */

typedef struct mamaPublishTopic_ {
    const char *    symbol;
    mamaDQPublisher pub;
    void *          cache;
} mamaPublishTopic;

typedef void(MAMACALLTYPE *mamaDQPublisherCreateCB) (
    mamaDQPublisherManager manager);

typedef void(MAMACALLTYPE *mamaDQPublisherNewRequestCB) (
    mamaDQPublisherManager manager,
    const char *           symbol,
    short                  subType,
    short                  msgType,
    mamaMsg                msg);

typedef void(MAMACALLTYPE *mamaDQPublisherRequestCB) (
    mamaDQPublisherManager manager,
    mamaPublishTopic *     info,
    short                  subType,
    short                  msgType,
    mamaMsg                msg);

typedef void(MAMACALLTYPE *mamaDQPublisherRefreshCB) (
    mamaDQPublisherManager manager,
    mamaPublishTopic *     info,
    short                  subType,
    short                  msgType,
    mamaMsg                msg);

typedef void(MAMACALLTYPE *mamaDQPublisherErrorCB) (
    mamaDQPublisherManager manager,
    mama_status            status,
    const char *           errortxt,
    mamaMsg                msg);

typedef void(MAMACALLTYPE *mamaDQPublisherMsgCB) (
    mamaDQPublisherManager manager, mamaMsg msg);

typedef struct mamaDQPublisherManagerCallbacks_ {
    mamaDQPublisherCreateCB     onCreate;
    mamaDQPublisherNewRequestCB onNewRequest;
    mamaDQPublisherRequestCB    onRequest;
    mamaDQPublisherRefreshCB    onRefresh;
    mamaDQPublisherErrorCB      onError;
    mamaDQPublisherMsgCB        onMsg;
} mamaDQPublisherManagerCallbacks;

MAMAExpDLL extern mama_status
mamaDQPublisherManager_allocate (mamaDQPublisherManager *result);

MAMAExpDLL extern mama_status
mamaDQPublisherManager_create (mamaDQPublisherManager dqPublisher,
                               mamaTransport          transport,
                               mamaQueue              queue,
                               const mamaDQPublisherManagerCallbacks *callback,
                               const char *sourcename,
                               const char *root,
                               void *      closure);

MAMAExpDLL extern void
mamaDQPublisherManager_destroy (mamaDQPublisherManager manager);

MAMAExpDLL extern mama_status
mamaDQPublisherManager_addPublisher (mamaDQPublisherManager manager,
                                     const char *           symbol,
                                     mamaDQPublisher        pub,
                                     void *                 cache);

MAMAExpDLL extern mama_status mamaDQPublisherManager_removePublisher (
    mamaDQPublisherManager manager, const char *symbol, mamaDQPublisher *pub);

MAMAExpDLL extern mama_status
mamaDQPublisherManager_createPublisher (mamaDQPublisherManager manager,
                                        const char *           symbol,
                                        void *                 cache,
                                        mamaDQPublisher *      newPublisher);

MAMAExpDLL extern mama_status
mamaDQPublisherManager_destroyPublisher (mamaDQPublisherManager manager,
                                         const char *           symbol);

MAMAExpDLL extern void
mamaDQPublisherManager_setStatus (mamaDQPublisherManager manager,
                                  mamaMsgStatus          status);

MAMAExpDLL extern void *
mamaDQPublisherManager_getClosure (mamaDQPublisherManager manager);

MAMAExpDLL extern void
mamaDQPublisherManager_setSenderId (mamaDQPublisherManager manager,
                                    uint64_t               senderid);

MAMAExpDLL extern void
mamaDQPublisherManager_setSeqNum (mamaDQPublisherManager manager,
                                  mama_seqnum_t          num);

MAMAExpDLL extern mama_status
mamaDQPublisherManager_sendSyncRequest (mamaDQPublisherManager manager,
                                        mama_u16_t             nummsg,
                                        mama_f64_t             delay,
                                        mama_f64_t             duration);

MAMAExpDLL extern mama_status
mamaDQPublisherManager_sendNoSubscribers (mamaDQPublisherManager manager,
                                          const char *           symbol);

MAMAExpDLL extern mama_status mamaDQPublisherManager_getPublisher (
    mamaDQPublisherManager manager, const char *symbol, mamaDQPublisher *pub);

MAMAExpDLL extern void
mamaDQPublisherManager_enableSendTime (mamaDQPublisherManager manager,
                                       mama_bool_t            enable);

#if defined(__cplusplus)
}
#endif /* defined( __cplusplus ) */

#endif /* MAMA_DQPUBLISHERMANAGER_H__*/
```


-------------------------------

Updated on 2023-03-31 at 15:29:16 +0100
