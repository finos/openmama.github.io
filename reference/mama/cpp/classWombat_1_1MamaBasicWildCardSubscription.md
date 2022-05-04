---
title: Wombat::MamaBasicWildCardSubscription
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBasicWildCardSubscription



 [More...](#detailed-description)


`#include <MamaBasicWildCardSubscription.h>`

Inherits from [Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html#function-~mamabasicwildcardsubscription)**() |
| | **[MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html#function-mamabasicwildcardsubscription)**(void ) |
| virtual void | **[create](classWombat_1_1MamaBasicWildCardSubscription.html#function-create)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaBasicWildCardSubscriptionCallback](classWombat_1_1MamaBasicWildCardSubscriptionCallback.html) * callback, const char * source, const char * topic, void * closure =NULL) |
| virtual const char * | **[getSymbol](classWombat_1_1MamaBasicWildCardSubscription.html#function-getsymbol)**(void ) const |
| virtual const char * | **[getSource](classWombat_1_1MamaBasicWildCardSubscription.html#function-getsource)**(void ) const |
| virtual void * | **[getTopicClosure](classWombat_1_1MamaBasicWildCardSubscription.html#function-gettopicclosure)**() const |
| virtual void | **[setTopicClosure](classWombat_1_1MamaBasicWildCardSubscription.html#function-settopicclosure)**(void * closure) |
| virtual void | **[muteCurrentTopic](classWombat_1_1MamaBasicWildCardSubscription.html#function-mutecurrenttopic)**(void ) |
| virtual [MamaBasicWildCardSubscriptionCallback](classWombat_1_1MamaBasicWildCardSubscriptionCallback.html) * | **[getBasicWildCardCallback](classWombat_1_1MamaBasicWildCardSubscription.html#function-getbasicwildcardcallback)**(void ) const |

## Additional inherited members

**Public Functions inherited from [Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html#function-~mamabasicsubscription)**() |
| | **[MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html#function-mamabasicsubscription)**(void ) |
| virtual void | **[createBasic](classWombat_1_1MamaBasicSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html) * callback, const char * topic, void * closure =NULL) |
| virtual void | **[destroy](classWombat_1_1MamaBasicSubscription.html#function-destroy)**() |
| virtual void | **[destroyEx](classWombat_1_1MamaBasicSubscription.html#function-destroyex)**() |
| virtual bool | **[isActive](classWombat_1_1MamaBasicSubscription.html#function-isactive)**(void ) const |
| virtual const char * | **[getTopic](classWombat_1_1MamaBasicSubscription.html#function-gettopic)**(void ) const |
| virtual [MamaTransport](classWombat_1_1MamaTransport.html) * | **[getTransport](classWombat_1_1MamaBasicSubscription.html#function-gettransport)**(void ) const |
| virtual [MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html) * | **[getBasicCallback](classWombat_1_1MamaBasicSubscription.html#function-getbasiccallback)**(void ) const |
| virtual [MamaQueue](classWombat_1_1MamaQueue.html) * | **[getQueue](classWombat_1_1MamaBasicSubscription.html#function-getqueue)**(void ) const |
| virtual void | **[setClosure](classWombat_1_1MamaBasicSubscription.html#function-setclosure)**(void * closure) |
| virtual void * | **[getClosure](classWombat_1_1MamaBasicSubscription.html#function-getclosure)**(void ) const |
| virtual void | **[setDebugLevel](classWombat_1_1MamaBasicSubscription.html#function-setdebuglevel)**(MamaLogLevel level) |
| virtual MamaLogLevel | **[getDebugLevel](classWombat_1_1MamaBasicSubscription.html#function-getdebuglevel)**() const |
| virtual bool | **[checkDebugLevel](classWombat_1_1MamaBasicSubscription.html#function-checkdebuglevel)**(MamaLogLevel level) const |
| virtual mamaSubscriptionState | **[getState](classWombat_1_1MamaBasicSubscription.html#function-getstate)**(void ) |

**Protected Attributes inherited from [Wombat::MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)**

|                | Name           |
| -------------- | -------------- |
| void * | **[mClosure](classWombat_1_1MamaBasicSubscription.html#variable-mclosure)**  |
| [MamaQueue](classWombat_1_1MamaQueue.html) * | **[mQueue](classWombat_1_1MamaBasicSubscription.html#variable-mqueue)**  |
| mamaSubscription | **[mSubscription](classWombat_1_1MamaBasicSubscription.html#variable-msubscription)**  |
| [MamaTransport](classWombat_1_1MamaTransport.html) * | **[mTransport](classWombat_1_1MamaBasicSubscription.html#variable-mtransport)**  |


## Detailed Description

```cpp
class Wombat::MamaBasicWildCardSubscription;
```


**See**: [Mama](classWombat_1_1Mama.html)

**Author**: Michael Schonberg copyright 2003 Wombat Consulting Inc. 

The `[MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html)` interface represents a subscription to a topic with no market data semantics.

## Public Functions Documentation

### function ~MamaBasicWildCardSubscription

```cpp
virtual ~MamaBasicWildCardSubscription()
```


The destructor will call `[destroy()](classWombat_1_1MamaBasicSubscription.html#function-destroy)` if the subscription has not already been destroyed. 


### function MamaBasicWildCardSubscription

```cpp
MamaBasicWildCardSubscription(
    void 
)
```


Constructor. Call createBasicWildCard() to activate the subscription. 


### function create

```cpp
virtual void create(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaBasicWildCardSubscriptionCallback * callback,
    const char * source,
    const char * topic,
    void * closure =NULL
)
```


**Parameters**: 

  * **transport** The transport to use. Must be a basic transport. 
  * **queue** The queue. 
  * **callback** The mamaMsgCallbacks structure containing the three callback methods.
  * **topic** The topic. 
  * **closure** The caller supplied closure. 


Create a basic wild card subscription without market data semantics.

If the topic is NULL for WMW, this method creates a "transport" subscription that subscribes to all the topics from publishers with the the "publish_name" property equal to the source value.


### function getSymbol

```cpp
virtual const char * getSymbol(
    void 
) const
```


**Return**: The topic. 

Return the symbol for this subscription.


### function getSource

```cpp
virtual const char * getSource(
    void 
) const
```


**Return**: The topic. 

Return the source for this subscription.


### function getTopicClosure

```cpp
virtual void * getTopicClosure() const
```


Get the closure for the specific wildcard topic.

This method may only be called from the onMsg callback.

@ return The closure specified by ::setTopicClosure() or NULL if no topic closure set. 


### function setTopicClosure

```cpp
virtual void setTopicClosure(
    void * closure
)
```


Set the topic closure for the current message's topic.

This method can only be invoked from the onMsg() callback.

@prarm closure The closure. 


### function muteCurrentTopic

```cpp
virtual void muteCurrentTopic(
    void 
)
```


For "transport" subscriptions (WMW only) stop processing messages for the current topic. 


### function getBasicWildCardCallback

```cpp
virtual MamaBasicWildCardSubscriptionCallback * getBasicWildCardCallback(
    void 
) const
```


**Return**: the callback. 

Return the `[MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html)` for this subscription.


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100