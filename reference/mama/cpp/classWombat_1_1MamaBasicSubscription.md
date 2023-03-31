---
title: Wombat::MamaBasicSubscription
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBasicSubscription



 [More...](#detailed-description)


`#include <MamaBasicSubscription.h>`

Inherited by [Wombat::MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html), [Wombat::MamaSubscription](classWombat_1_1MamaSubscription.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html#function-~mamabasicsubscription)**() |
| | **[MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html#function-mamabasicsubscription)**(void ) |
| virtual void | **[createBasic](classWombat_1_1MamaBasicSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html) * callback, const char * topic, void * closure =NULL) |
| virtual void | **[createBasic](classWombat_1_1MamaBasicSubscription.html#function-createbasic)**([MamaTransport](classWombat_1_1MamaTransport.html) * transport, [MamaQueue](classWombat_1_1MamaQueue.html) * queue, [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) * callback, const char * topic, void * closure =NULL) |
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

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| void * | **[mClosure](classWombat_1_1MamaBasicSubscription.html#variable-mclosure)**  |
| [MamaQueue](classWombat_1_1MamaQueue.html) * | **[mQueue](classWombat_1_1MamaBasicSubscription.html#variable-mqueue)**  |
| mamaSubscription | **[mSubscription](classWombat_1_1MamaBasicSubscription.html#variable-msubscription)**  |
| [MamaTransport](classWombat_1_1MamaTransport.html) * | **[mTransport](classWombat_1_1MamaBasicSubscription.html#variable-mtransport)**  |

## Detailed Description

```cpp
class Wombat::MamaBasicSubscription;
```


**See**: [Mama](classWombat_1_1Mama.html)

**Author**: Michael Schonberg copyright 2003 Wombat Consulting Inc. 

The `[MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html)` interface represents a subscription to a topic with no market data semantics.

## Public Functions Documentation

### function ~MamaBasicSubscription

```cpp
virtual ~MamaBasicSubscription()
```


The destructor will call `[destroy()](classWombat_1_1MamaBasicSubscription.html#function-destroy)` if the subscription has not already been destroyed. 


### function MamaBasicSubscription

```cpp
MamaBasicSubscription(
    void 
)
```


Constructor. Call [createBasic()](classWombat_1_1MamaBasicSubscription.html#function-createbasic) to activate the subscription. 


### function createBasic

```cpp
virtual void createBasic(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaBasicSubscriptionCallback * callback,
    const char * topic,
    void * closure =NULL
)
```


**Parameters**: 

  * **transport** The transport to use. Must be a basic transport. 
  * **queue** The queue. 
  * **callback** [MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html) class instance containing the three callback methods.
  * **topic** The topic. 
  * **closure** The caller supplied closure. 


Create a basic subscription without market data semantics.


### function createBasic

```cpp
virtual void createBasic(
    MamaTransport * transport,
    MamaQueue * queue,
    MamaSubscriptionCallback * callback,
    const char * topic,
    void * closure =NULL
)
```


**Parameters**: 

  * **transport** The transport to use. Must be a basic transport. 
  * **queue** The queue. 
  * **callback** [MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html) class instance containing the three callback methods.
  * **topic** The topic. 
  * **closure** The caller supplied closure. 


Create a basic subscription without market data semantics using MAMA callback structure


### function destroy

```cpp
virtual void destroy()
```


**Reimplemented by**: [Wombat::MamaSubscription::destroy](classWombat_1_1MamaSubscription.html#function-destroy)


Destroy the subscription. 

Destroys the underlying subscription. The subscription can be recreated via a subsequent call to create() 


### function destroyEx

```cpp
virtual void destroyEx()
```


**Reimplemented by**: [Wombat::MamaSubscription::destroyEx](classWombat_1_1MamaSubscription.html#function-destroyex)


This function will destroy the subscription and can be called from any thread. Note that the subscription will not be fully destroyed until the onDestroy callback is received from the [MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html) interface. To destroy from the dispatching thread the destroy function should be used in preference. 


### function isActive

```cpp
virtual bool isActive(
    void 
) const
```


**Return**: whether the subscription is active. 

Return whether the subscription is active.


### function getTopic

```cpp
virtual const char * getTopic(
    void 
) const
```


**Return**: The topic. 

Return the symbol for this subscription.


### function getTransport

```cpp
virtual MamaTransport * getTransport(
    void 
) const
```


**Return**: the transport. 

Return the `[MamaTransport](classWombat_1_1MamaTransport.html)` for this subscription. 


### function getBasicCallback

```cpp
virtual MamaBasicSubscriptionCallback * getBasicCallback(
    void 
) const
```


**Return**: the callback. 

Return the `[MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html)` for this subscription.


### function getQueue

```cpp
virtual MamaQueue * getQueue(
    void 
) const
```


**Return**: the queue. 

Return the `[MamaQueue](classWombat_1_1MamaQueue.html)` for the subscription.


### function setClosure

```cpp
virtual void setClosure(
    void * closure
)
```


Set the closure for the subscription. 


### function getClosure

```cpp
virtual void * getClosure(
    void 
) const
```


**Return**: the closure. 

Return the closure for the subscription.


### function setDebugLevel

```cpp
virtual void setDebugLevel(
    MamaLogLevel level
)
```


**Parameters**: 

  * **level** The new debug level. 


Set the debug level for this subscription.


### function getDebugLevel

```cpp
virtual MamaLogLevel getDebugLevel() const
```


**Return**: the debug level for this subscription. 

Return the debug level for this subscription.


### function checkDebugLevel

```cpp
virtual bool checkDebugLevel(
    MamaLogLevel level
) const
```


**Parameters**: 

  * **level** The debug level to check. 


**Return**: whether the level equals or exceeds the set level for this subscription. 

Return whether the debug level for this subscription equals or exceeds some level.


### function getState

```cpp
virtual mamaSubscriptionState getState(
    void 
)
```


**Return**: mama_status this can be one of the mamaSubscriptionState enumeration values. 

This function will return the current state of the subscription, this function should be used in preference to the mamaSubscription_isActive or mamaSubscription_isValid functions. This function is thread-safe.


## Protected Attributes Documentation

### variable mClosure

```cpp
void * mClosure;
```


### variable mQueue

```cpp
MamaQueue * mQueue;
```


### variable mSubscription

```cpp
mamaSubscription mSubscription;
```


### variable mTransport

```cpp
MamaTransport * mTransport;
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100