---
title: Wombat::MamaPublisher
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaPublisher



 [More...](#detailed-description)


`#include <MamaPublisher.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaPublisher](classWombat_1_1MamaPublisher.html#function-~mamapublisher)**(void ) |
| | **[MamaPublisher](classWombat_1_1MamaPublisher.html#function-mamapublisher)**(void ) |
| virtual void | **[create](classWombat_1_1MamaPublisher.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, const char * topic, const char * source =NULL, const char * root =NULL) |
| virtual void | **[createWithCallbacks](classWombat_1_1MamaPublisher.html#function-createwithcallbacks)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaPublisherCallback](classWombat_1_1MamaPublisherCallback.html) * cb, void * closure, const char * topic, const char * source =NULL, const char * root =NULL) |
| virtual void | **[send](classWombat_1_1MamaPublisher.html#function-send)**([MamaMsg](classWombat_1_1MamaMsg.html) * msg) const |
| virtual void | **[sendWithThrottle](classWombat_1_1MamaPublisher.html#function-sendwiththrottle)**([MamaMsg](classWombat_1_1MamaMsg.html) * msg, [MamaSendCompleteCallback](classWombat_1_1MamaSendCompleteCallback.html) * cb, void * closure) const |
| virtual void | **[sendFromInbox](classWombat_1_1MamaPublisher.html#function-sendfrominbox)**([MamaInbox](classWombat_1_1MamaInbox.html) * inbox, [MamaMsg](classWombat_1_1MamaMsg.html) * msg) const |
| virtual void | **[sendFromInboxWithThrottle](classWombat_1_1MamaPublisher.html#function-sendfrominboxwiththrottle)**([MamaInbox](classWombat_1_1MamaInbox.html) * inbox, [MamaMsg](classWombat_1_1MamaMsg.html) * msg, [MamaSendCompleteCallback](classWombat_1_1MamaSendCompleteCallback.html) * cb, void * closure) const |
| virtual void | **[sendReplyToInbox](classWombat_1_1MamaPublisher.html#function-sendreplytoinbox)**(const [MamaMsg](classWombat_1_1MamaMsg.html) & request, [MamaMsg](classWombat_1_1MamaMsg.html) * reply) const |
| virtual void | **[sendReplyToInbox](classWombat_1_1MamaPublisher.html#function-sendreplytoinbox)**(mamaMsgReply replyHandle, [MamaMsg](classWombat_1_1MamaMsg.html) * reply) const |
| virtual void | **[destroy](classWombat_1_1MamaPublisher.html#function-destroy)**(void ) |
| virtual void | **[destroyEx](classWombat_1_1MamaPublisher.html#function-destroyex)**(void ) |
| virtual [MamaTransport](classWombat_1_1MamaTransport.html) * | **[getTransport](classWombat_1_1MamaPublisher.html#function-gettransport)**(void ) const |
| virtual mamaPublisherState | **[getState](classWombat_1_1MamaPublisher.html#function-getstate)**() const |
| virtual const char * | **[stringForState](classWombat_1_1MamaPublisher.html#function-stringforstate)**(mamaPublisherState state) const |
| virtual const char * | **[getRoot](classWombat_1_1MamaPublisher.html#function-getroot)**() const |
| virtual const char * | **[getSource](classWombat_1_1MamaPublisher.html#function-getsource)**() const |
| virtual const char * | **[getSymbol](classWombat_1_1MamaPublisher.html#function-getsymbol)**() const |
| virtual [MamaPublisherCallback](classWombat_1_1MamaPublisherCallback.html) * | **[getCallback](classWombat_1_1MamaPublisher.html#function-getcallback)**() const |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| [MamaTransport](classWombat_1_1MamaTransport.html) * | **[mTransport](classWombat_1_1MamaPublisher.html#variable-mtransport)**  |

## Detailed Description

```cpp
class Wombat::MamaPublisher;
```


The publisher class publishes messages to basic or market data subscriptions depending on the underlying transport.

For basic transports the source parameter must be NULL. 

## Public Functions Documentation

### function ~MamaPublisher

```cpp
virtual ~MamaPublisher(
    void 
)
```


### function MamaPublisher

```cpp
MamaPublisher(
    void 
)
```


### function create

```cpp
virtual void create(
    MamaTransport * transport,
    const char * topic,
    const char * source =NULL,
    const char * root =NULL
)
```


**Parameters**: 

  * **transport** The transport to use. Must be a basic transport. 
  * **topic** for basic publishers. Symbol for market data topics. 
  * **source** The source for market data publishers. 
  * **root** The root for market data publishers. Used internally. 


Create a MAMA publisher for the corresponding transport. If the transport is a market data transport, as opposed to a "basic" transport, the topic corresponds to the symbol. For a basic transport, the source and root get ignored.


### function createWithCallbacks

```cpp
virtual void createWithCallbacks(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaPublisherCallback * cb,
    void * closure,
    const char * topic,
    const char * source =NULL,
    const char * root =NULL
)
```


### function send

```cpp
virtual void send(
    MamaMsg * msg
) const
```


### function sendWithThrottle

```cpp
virtual void sendWithThrottle(
    MamaMsg * msg,
    MamaSendCompleteCallback * cb,
    void * closure
) const
```


### function sendFromInbox

```cpp
virtual void sendFromInbox(
    MamaInbox * inbox,
    MamaMsg * msg
) const
```


### function sendFromInboxWithThrottle

```cpp
virtual void sendFromInboxWithThrottle(
    MamaInbox * inbox,
    MamaMsg * msg,
    MamaSendCompleteCallback * cb,
    void * closure
) const
```


### function sendReplyToInbox

```cpp
virtual void sendReplyToInbox(
    const MamaMsg & request,
    MamaMsg * reply
) const
```


### function sendReplyToInbox

```cpp
virtual void sendReplyToInbox(
    mamaMsgReply replyHandle,
    MamaMsg * reply
) const
```


### function destroy

```cpp
virtual void destroy(
    void 
)
```


### function destroyEx

```cpp
virtual void destroyEx(
    void 
)
```


### function getTransport

```cpp
virtual MamaTransport * getTransport(
    void 
) const
```


Return the [MamaTransport](classWombat_1_1MamaTransport.html) for the [MamaPublisher](classWombat_1_1MamaPublisher.html). 


### function getState

```cpp
virtual mamaPublisherState getState() const
```


### function stringForState

```cpp
virtual const char * stringForState(
    mamaPublisherState state
) const
```


### function getRoot

```cpp
virtual const char * getRoot() const
```


### function getSource

```cpp
virtual const char * getSource() const
```


### function getSymbol

```cpp
virtual const char * getSymbol() const
```


### function getCallback

```cpp
virtual MamaPublisherCallback * getCallback() const
```


## Protected Attributes Documentation

### variable mTransport

```cpp
MamaTransport * mTransport;
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100