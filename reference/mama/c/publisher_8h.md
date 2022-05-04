---
title: mama/publisher.h
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mama/publisher.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[mamaPublisherCallbacks](structmamaPublisherCallbacks.html)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mamaPublisherState](publisher_8h.html#enum-mamapublisherstate)** { MAMA_PUBLISHER_UNKNOWN = 0, MAMA_PUBLISHER_CREATING = 1, MAMA_PUBLISHER_LIVE = 2, MAMA_PUBLISHER_DESTROYING = 3, MAMA_PUBLISHER_DESTROYED_BRIDGE = 4, MAMA_PUBLISHER_DESTROYING_WAIT_BRIDGE = 5, MAMA_PUBLISHER_DESTROYED = 6} |
| typedef void(MAMACALLTYPE *)(mamaPublisher publisher, mamaMsg msg, mama_status status, void *closure) | **[mamaThrottledSendCompleteCb](publisher_8h.html#typedef-mamathrottledsendcompletecb)**  |
| typedef void(MAMACALLTYPE *)(mamaPublisher publisher, void *closure) | **[mama_publisherOnCreateCb](publisher_8h.html#typedef-mama-publisheroncreatecb)**  |
| typedef void(MAMACALLTYPE *)(mamaPublisher publisher, void *closure) | **[mama_publisherOnDestroyCb](publisher_8h.html#typedef-mama-publisherondestroycb)**  |
| typedef void(MAMACALLTYPE *)(mamaPublisher publisher, mama_status status, const char *info, void *closure) | **[mama_publisherOnErrorCb](publisher_8h.html#typedef-mama-publisheronerrorcb)**  |
| typedef void(MAMACALLTYPE *)(mamaPublisher publisher, mama_status status, const char *info, void *closure) | **[mama_publisherOnSuccessCb](publisher_8h.html#typedef-mama-publisheronsuccesscb)**  |
| typedef struct [mamaPublisherCallbacks](structmamaPublisherCallbacks.html) | **[mamaPublisherCallbacks](publisher_8h.html#typedef-mamapublishercallbacks)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| MAMAExpDLL mama_status | **[mamaPublisher_create](publisher_8h.html#function-mamapublisher-create)**(mamaPublisher * result, mamaTransport tport, const char * symbol, const char * source, const char * root) |
| MAMAExpDLL mama_status | **[mamaPublisher_createWithCallbacks](publisher_8h.html#function-mamapublisher-createwithcallbacks)**(mamaPublisher * result, mamaTransport tport, mamaQueue queue, const char * symbol, const char * source, const char * root, [mamaPublisherCallbacks](structmamaPublisherCallbacks.html) * cb, void * closure) |
| MAMAExpDLL mama_status | **[mamaPublisher_send](publisher_8h.html#function-mamapublisher-send)**(mamaPublisher publisher, mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaPublisher_sendWithThrottle](publisher_8h.html#function-mamapublisher-sendwiththrottle)**(mamaPublisher publisher, mamaMsg msg, mamaThrottledSendCompleteCb sendCompleteCb, void * closure) |
| MAMAExpDLL mama_status | **[mamaPublisher_sendFromInboxWithThrottle](publisher_8h.html#function-mamapublisher-sendfrominboxwiththrottle)**(mamaPublisher publisher, mamaInbox inbox, mamaMsg msg, mamaThrottledSendCompleteCb sendCompleteCb, void * closure) |
| MAMAExpDLL mama_status | **[mamaPublisher_sendFromInbox](publisher_8h.html#function-mamapublisher-sendfrominbox)**(mamaPublisher publisher, mamaInbox inbox, mamaMsg msg) |
| MAMAExpDLL mama_status | **[mamaPublisher_sendReplyToInboxHandle](publisher_8h.html#function-mamapublisher-sendreplytoinboxhandle)**(mamaPublisher publisher, mamaMsgReply replyAddress, mamaMsg reply) |
| MAMAExpDLL mama_status | **[mamaPublisher_sendReplyToInbox](publisher_8h.html#function-mamapublisher-sendreplytoinbox)**(mamaPublisher publisher, mamaMsg request, mamaMsg reply) |
| MAMAExpDLL mama_status | **[mamaPublisher_destroy](publisher_8h.html#function-mamapublisher-destroy)**(mamaPublisher publisher) |
| MAMAExpDLL mama_status | **[mamaPublisher_destroyEx](publisher_8h.html#function-mamapublisher-destroyex)**(mamaPublisher publisher) |
| MAMAExpDLL mama_status | **[mamaPublisher_getTransport](publisher_8h.html#function-mamapublisher-gettransport)**(mamaPublisher publisher, mamaTransport * transport)<br>Return the `mamaTransport` for this publisher.  |
| MAMAExpDLL mama_status | **[mamaPublisherCallbacks_allocate](publisher_8h.html#function-mamapublishercallbacks-allocate)**([mamaPublisherCallbacks](structmamaPublisherCallbacks.html) ** cb) |
| MAMAExpDLL mama_status | **[mamaPublisherCallbacks_deallocate](publisher_8h.html#function-mamapublishercallbacks-deallocate)**([mamaPublisherCallbacks](structmamaPublisherCallbacks.html) * cb) |
| MAMAExpDLL mama_status | **[mamaPublisher_getUserCallbacks](publisher_8h.html#function-mamapublisher-getusercallbacks)**(mamaPublisher publisher, [mamaPublisherCallbacks](structmamaPublisherCallbacks.html) * cb) |
| MAMAExpDLL mama_status | **[mamaPublisher_getState](publisher_8h.html#function-mamapublisher-getstate)**(mamaPublisher publisher, mamaPublisherState * state) |
| const MAMAExpDLL char * | **[mamaPublisher_stringForState](publisher_8h.html#function-mamapublisher-stringforstate)**(mamaPublisherState state) |
| MAMAExpDLL mama_status | **[mamaPublisher_getRoot](publisher_8h.html#function-mamapublisher-getroot)**(mamaPublisher publisher, const char ** root) |
| MAMAExpDLL mama_status | **[mamaPublisher_getSource](publisher_8h.html#function-mamapublisher-getsource)**(mamaPublisher publisher, const char ** source) |
| MAMAExpDLL mama_status | **[mamaPublisher_getSymbol](publisher_8h.html#function-mamapublisher-getsymbol)**(mamaPublisher publisher, const char ** symbol) |

## Types Documentation

### enum mamaPublisherState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MAMA_PUBLISHER_UNKNOWN | 0|  The state of the publisher is unknown. The publisher is being created and waiting on the bridge (sync wait)  |
| MAMA_PUBLISHER_CREATING | 1|  The publisher is live.  |
| MAMA_PUBLISHER_LIVE | 2|   |
| MAMA_PUBLISHER_DESTROYING | 3|   |
| MAMA_PUBLISHER_DESTROYED_BRIDGE | 4|   |
| MAMA_PUBLISHER_DESTROYING_WAIT_BRIDGE | 5|   |
| MAMA_PUBLISHER_DESTROYED | 6|   |




Responsible for publishing mama messages. The publisher states 


### typedef mamaThrottledSendCompleteCb

```cpp
typedef void(MAMACALLTYPE * mamaThrottledSendCompleteCb) (mamaPublisher publisher, mamaMsg msg, mama_status status, void *closure);
```


**Parameters**: 

  * **publisher** The publisher object used to send the message. 
  * **msg** The mamaMsg which has been sent from the throttle queue. 
  * **status** Whether the message was successfully sent from the throttle. A value of MAMA_STATUS_OK indicates that the send was successful. 
  * **closure** User supplied context data. 


Prototype for callback invoked when a message sent with either mamaPublisher_sendWithThrottle() or mamaPublisher_sendFromInboxWithThrottle() has been sent from the throttle queue.

Messages sent on the throttle queue are no longer destroyed by the API. It is the responsibility of the application developer to manage the lifecycle of any messages sent on the throttle.


### typedef mama_publisherOnCreateCb

```cpp
typedef void(MAMACALLTYPE * mama_publisherOnCreateCb) (mamaPublisher publisher, void *closure);
```


### typedef mama_publisherOnDestroyCb

```cpp
typedef void(MAMACALLTYPE * mama_publisherOnDestroyCb) (mamaPublisher publisher, void *closure);
```


### typedef mama_publisherOnErrorCb

```cpp
typedef void(MAMACALLTYPE * mama_publisherOnErrorCb) (mamaPublisher publisher, mama_status status, const char *info, void *closure);
```


### typedef mama_publisherOnSuccessCb

```cpp
typedef void(MAMACALLTYPE * mama_publisherOnSuccessCb) (mamaPublisher publisher, mama_status status, const char *info, void *closure);
```


### typedef mamaPublisherCallbacks

```cpp
typedef struct mamaPublisherCallbacks mamaPublisherCallbacks;
```


Callbacks for publisher events. If any cb is NULL then the callback will not be made. 



## Functions Documentation

### function mamaPublisher_create

```cpp
MAMAExpDLL mama_status mamaPublisher_create(
    mamaPublisher * result,
    mamaTransport tport,
    const char * symbol,
    const char * source,
    const char * root
)
```


**Parameters**: 

  * **result** A pointer to hold the resulting mamaPublisher. 
  * **tport** The transport. 
  * **symbol** Symbol on which to publish. 
  * **source** The source for market data publishers. (e.g. source.symbol) 
  * **root** The root for market data publishers. Used internally. 


Create a mama publisher for the corresponding transport. If the transport is a marketdata transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored.


### function mamaPublisher_createWithCallbacks

```cpp
MAMAExpDLL mama_status mamaPublisher_createWithCallbacks(
    mamaPublisher * result,
    mamaTransport tport,
    mamaQueue queue,
    const char * symbol,
    const char * source,
    const char * root,
    mamaPublisherCallbacks * cb,
    void * closure
)
```


**Parameters**: 

  * **result** A pointer to hold the resulting mamaPublisher. 
  * **tport** The transport. 
  * **queue** The mama queue. 
  * **symbol** Symbol on which to publish. 
  * **source** The source for market data publishers. (e.g. source.symbol) 
  * **root** The root for market data publishers. Used internally. 
  * **cb** The callbacks requested by the app. 
  * **closure** App closure, unused by mamaPublisher. 


Create a mama publisher for a corresponding transport. Include publisher event callbacks.


### function mamaPublisher_send

```cpp
MAMAExpDLL mama_status mamaPublisher_send(
    mamaPublisher publisher,
    mamaMsg msg
)
```


**Parameters**: 

  * **publisher** The publisher from which to send a message. 
  * **msg** The mamaMsg to send. 


Send a message from the specified publisher.


### function mamaPublisher_sendWithThrottle

```cpp
MAMAExpDLL mama_status mamaPublisher_sendWithThrottle(
    mamaPublisher publisher,
    mamaMsg msg,
    mamaThrottledSendCompleteCb sendCompleteCb,
    void * closure
)
```


**Parameters**: 

  * **publisher** The publish from which to send the throttled message. 
  * **msg** The mamaMsg to send. 
  * **sendCompleteCb** Callback invoked once the message has been send on the throttle. 
  * **closure** User supplied data returned in the send complete callback. 


Send a message with the throttle. The lifecycle of the message sent is controlled by the user of the API. The callback indicates when the API is no longer using the message and can be destroyed/reused by the application.


### function mamaPublisher_sendFromInboxWithThrottle

```cpp
MAMAExpDLL mama_status mamaPublisher_sendFromInboxWithThrottle(
    mamaPublisher publisher,
    mamaInbox inbox,
    mamaMsg msg,
    mamaThrottledSendCompleteCb sendCompleteCb,
    void * closure
)
```


### function mamaPublisher_sendFromInbox

```cpp
MAMAExpDLL mama_status mamaPublisher_sendFromInbox(
    mamaPublisher publisher,
    mamaInbox inbox,
    mamaMsg msg
)
```


### function mamaPublisher_sendReplyToInboxHandle

```cpp
MAMAExpDLL mama_status mamaPublisher_sendReplyToInboxHandle(
    mamaPublisher publisher,
    mamaMsgReply replyAddress,
    mamaMsg reply
)
```


**Parameters**: 

  * **publisher** The mamaPublisher from which to send the response. 
  * **request** The reply address to which you are responding. 
  * **reply** The mamaMsg to be sent as the reply. 


Send a reply in response to a request to an inbox.


### function mamaPublisher_sendReplyToInbox

```cpp
MAMAExpDLL mama_status mamaPublisher_sendReplyToInbox(
    mamaPublisher publisher,
    mamaMsg request,
    mamaMsg reply
)
```


**Parameters**: 

  * **publisher** The mamaPublisher from which to send the response. 
  * **request** The mamaMsg to which you are responding. 
  * **reply** The mamaMsg to be sent as the reply. 


Send a reply in response to a request to an inbox.


### function mamaPublisher_destroy

```cpp
MAMAExpDLL mama_status mamaPublisher_destroy(
    mamaPublisher publisher
)
```


**Parameters**: 

  * **publisher** The mamaPublisher to destroy. 


Destroy the publisher.


### function mamaPublisher_destroyEx

```cpp
MAMAExpDLL mama_status mamaPublisher_destroyEx(
    mamaPublisher publisher
)
```


**Parameters**: 

  * **publisher** The mamaPublisher to destroy. 


Destroy the publisher after queueing request to publisher's queue/thread


### function mamaPublisher_getTransport

```cpp
MAMAExpDLL mama_status mamaPublisher_getTransport(
    mamaPublisher publisher,
    mamaTransport * transport
)
```

Return the `mamaTransport` for this publisher. 

**Parameters**: 

  * **publisher** The mamaPublisher from which to retrieve the transport for. 
  * **transport** A pointer to hold the transport.


**Return**: mama_status return code can be one of: MAMA_STATUS_NULL_ARG MAMA_STATUS_OK 

### function mamaPublisherCallbacks_allocate

```cpp
MAMAExpDLL mama_status mamaPublisherCallbacks_allocate(
    mamaPublisherCallbacks ** cb
)
```


**Parameters**: 

  * **cb** Pointer to pointer to a structure. 


Allocate a publisher events callback structure. This is done to allow the structure to change more easily. This structure is disposed by calling mamaPublisherCallbacks_deallocate.


### function mamaPublisherCallbacks_deallocate

```cpp
MAMAExpDLL mama_status mamaPublisherCallbacks_deallocate(
    mamaPublisherCallbacks * cb
)
```


**Parameters**: 

  * **cb** Pointer to a structure. 


Deallocate a publisher events callback structure. This structure was obtained by calling mamaPublisherCallbacks_allocate.


### function mamaPublisher_getUserCallbacks

```cpp
MAMAExpDLL mama_status mamaPublisher_getUserCallbacks(
    mamaPublisher publisher,
    mamaPublisherCallbacks * cb
)
```


**Parameters**: 

  * **publisher** The mamaPublisher from which to send the response. 
  * **cb** Pointer to a cb structure to be populated with the current callbacks. 


Retrieve the publisher callbacks.


### function mamaPublisher_getState

```cpp
MAMAExpDLL mama_status mamaPublisher_getState(
    mamaPublisher publisher,
    mamaPublisherState * state
)
```


### function mamaPublisher_stringForState

```cpp
const MAMAExpDLL char * mamaPublisher_stringForState(
    mamaPublisherState state
)
```


### function mamaPublisher_getRoot

```cpp
MAMAExpDLL mama_status mamaPublisher_getRoot(
    mamaPublisher publisher,
    const char ** root
)
```


### function mamaPublisher_getSource

```cpp
MAMAExpDLL mama_status mamaPublisher_getSource(
    mamaPublisher publisher,
    const char ** source
)
```


### function mamaPublisher_getSymbol

```cpp
MAMAExpDLL mama_status mamaPublisher_getSymbol(
    mamaPublisher publisher,
    const char ** symbol
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

#ifndef MamaPublisherH__
#define MamaPublisherH__

#if defined( __cplusplus )
extern "C"
{
#endif /* defined( __cplusplus ) */

typedef enum
{
    MAMA_PUBLISHER_UNKNOWN                   = 0,

    MAMA_PUBLISHER_CREATING                   = 1,

    MAMA_PUBLISHER_LIVE                      = 2,

    /* The publisher is being destroyed. */
    MAMA_PUBLISHER_DESTROYING                = 3,

    /* The publisher is being destroyed and the bridge has sent onDestroy. */
    MAMA_PUBLISHER_DESTROYED_BRIDGE          = 4,

    /* The publisher is being destroyed and waiting on the bridge's onDestroy. */
    MAMA_PUBLISHER_DESTROYING_WAIT_BRIDGE    = 5,

    /* The publisher has been fully destroyed. */
    MAMA_PUBLISHER_DESTROYED                 = 6

} mamaPublisherState;

typedef void (MAMACALLTYPE *mamaThrottledSendCompleteCb) (
        mamaPublisher publisher,
        mamaMsg       msg,
        mama_status   status,
        void*         closure);

typedef void (MAMACALLTYPE *mama_publisherOnCreateCb) (
    mamaPublisher publisher,
    void*         closure);

typedef void (MAMACALLTYPE *mama_publisherOnDestroyCb) (
    mamaPublisher publisher,
    void*         closure);

typedef void (MAMACALLTYPE *mama_publisherOnErrorCb) (
    mamaPublisher publisher,
    mama_status   status,
    const char*   info,
    void*         closure);

typedef void (MAMACALLTYPE *mama_publisherOnSuccessCb) (
    mamaPublisher publisher,
    mama_status   status,
    const char*   info,
    void*         closure);

typedef struct mamaPublisherCallbacks
{
    mama_publisherOnCreateCb     onCreate;
    mama_publisherOnErrorCb      onError;
    mama_publisherOnDestroyCb    onDestroy;
    mama_publisherOnSuccessCb    onSuccess;
} mamaPublisherCallbacks;


MAMAExpDLL
extern mama_status
mamaPublisher_create (mamaPublisher*    result,
                      mamaTransport     tport,
                      const char*       symbol,
                      const char*       source,
                      const char*       root);

MAMAExpDLL
extern mama_status
mamaPublisher_createWithCallbacks (
                      mamaPublisher*    result,
                      mamaTransport     tport,
                      mamaQueue         queue,
                      const char*       symbol,
                      const char*       source,
                      const char*       root,
                      mamaPublisherCallbacks* cb,
                      void*             closure);

MAMAExpDLL
extern mama_status
mamaPublisher_send (mamaPublisher publisher,
                    mamaMsg       msg);

MAMAExpDLL
extern mama_status
mamaPublisher_sendWithThrottle (mamaPublisher               publisher,
                                mamaMsg                     msg,
                                mamaThrottledSendCompleteCb sendCompleteCb,
                                void*                       closure);


/*
 * Send a p2p message from the specified inbox using the throttle.
 * The lifecycle of the message sent is controlled by the user of the API. The
 * callback indicates when the API is no longer using the message and can be
 * destroyed/reused by the application.
 *
 * @param publisher The mamaPublisher from which to send the message.
 * @param inbox The mamaInbox which will process any response to the sent message.
 * @param msg The mamaMsg to send.
 * @param sendCompleteCb The callback which will be invoked when the message
 * is sent from the throttle queue.
 * @param closure User supplied data returned when the callback is invoked.
 */
MAMAExpDLL
extern mama_status
mamaPublisher_sendFromInboxWithThrottle (mamaPublisher               publisher,
                                         mamaInbox                   inbox,
                                         mamaMsg                     msg,
                                         mamaThrottledSendCompleteCb sendCompleteCb,
                                         void*                       closure);

/*
 * Send a p2p message from the specified inbox.
 *
 * @param publisher The mamaPublisher from which to send the message
 * @param inbox The mamaInbox which will process any response to the sent
 * message.
 * @param msg The mamaMsg to send.
 */
MAMAExpDLL
extern mama_status
mamaPublisher_sendFromInbox (mamaPublisher publisher,
                             mamaInbox     inbox,
                             mamaMsg       msg);

MAMAExpDLL
extern mama_status
mamaPublisher_sendReplyToInboxHandle (mamaPublisher publisher,
                                      mamaMsgReply  replyAddress,
                                      mamaMsg       reply);


MAMAExpDLL
extern mama_status
mamaPublisher_sendReplyToInbox (mamaPublisher publisher,
                                mamaMsg       request,
                                mamaMsg       reply);

MAMAExpDLL
extern mama_status
mamaPublisher_destroy (mamaPublisher publisher);

MAMAExpDLL
extern mama_status
mamaPublisher_destroyEx(mamaPublisher publisher);

MAMAExpDLL
extern mama_status
mamaPublisher_getTransport (mamaPublisher   publisher,
                            mamaTransport*  transport);

MAMAExpDLL
extern mama_status
mamaPublisherCallbacks_allocate (mamaPublisherCallbacks** cb);

MAMAExpDLL
extern mama_status
mamaPublisherCallbacks_deallocate (mamaPublisherCallbacks* cb);

MAMAExpDLL
extern mama_status
mamaPublisher_getUserCallbacks (mamaPublisher           publisher,
                                mamaPublisherCallbacks* cb);

MAMAExpDLL
extern mama_status
mamaPublisher_getState (mamaPublisher       publisher,
                        mamaPublisherState* state);

MAMAExpDLL
extern const char*
mamaPublisher_stringForState (mamaPublisherState state);

MAMAExpDLL
extern mama_status
mamaPublisher_getRoot (mamaPublisher publisher, const char** root);

MAMAExpDLL
extern mama_status
mamaPublisher_getSource (mamaPublisher publisher, const char** source);

MAMAExpDLL
extern mama_status
mamaPublisher_getSymbol (mamaPublisher publisher, const char** symbol);

#if defined( __cplusplus )
}
#endif /* defined( __cplusplus ) */

#endif /* MamaPublisherH__ */
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100
