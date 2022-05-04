---
title: Wombat::MamaBasicSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBasicSubscriptionCallback



 [More...](#detailed-description)


`#include <MamaBasicSubscriptionCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaBasicSubscriptionCallback](classWombat_1_1MamaBasicSubscriptionCallback.html#function-~mamabasicsubscriptioncallback)**() |
| virtual void | **[onCreate](classWombat_1_1MamaBasicSubscriptionCallback.html#function-oncreate)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) * subscription) =0 |
| virtual void | **[onError](classWombat_1_1MamaBasicSubscriptionCallback.html#function-onerror)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) * subscription, const [MamaStatus](classWombat_1_1MamaStatus.html) & status, const char * topic) =0 |
| virtual void | **[onMsg](classWombat_1_1MamaBasicSubscriptionCallback.html#function-onmsg)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) * subscription, [MamaMsg](classWombat_1_1MamaMsg.html) & msg) =0 |
| virtual void | **[onDestroy](classWombat_1_1MamaBasicSubscriptionCallback.html#function-ondestroy)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) * subscription, void * closure) |

## Detailed Description

```cpp
class Wombat::MamaBasicSubscriptionCallback;
```


**See**: [MamaSubscription](classWombat_1_1MamaSubscription.html)

**Author**: mls 

The message callback interface for basic subscriptions. Callers provide an object implementing this interface on creating a `[MamaSubscription](classWombat_1_1MamaSubscription.html)`.

Copyright 2003 Wombat Consulting

## Public Functions Documentation

### function ~MamaBasicSubscriptionCallback

```cpp
inline virtual ~MamaBasicSubscriptionCallback()
```


### function onCreate

```cpp
virtual void onCreate(
    MamaBasicSubscription * subscription
) =0
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when subscription creation is complete, and before any calls to `onMsg`. Since subscriptions are created asynchronous by throttle, this callback provides the subscription instance after the throttle processes the creation request.


### function onError

```cpp
virtual void onError(
    MamaBasicSubscription * subscription,
    const MamaStatus & status,
    const char * topic
) =0
```


**Parameters**: 

  * **subscription** The subscription. 
  * **status** The wombat error code. 
  * **topic** The topic for NOT_ENTITLED 


Invoked if an error occurs during prior to subscription creation or if the subscription receives a message for an unentitled topic.

If the status is `MamaMsgStatus.NOT_ENTITTLED` the topic parameter is the specific unentitled topic. If the subscription topic contains wildcards, the subscription may still receive messages for other entitled topics.


### function onMsg

```cpp
virtual void onMsg(
    MamaBasicSubscription * subscription,
    MamaMsg & msg
) =0
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classWombat_1_1MamaSubscription.html)`. 
  * **msg** The TibrvMsg. 


Invoked when a message arrives.


### function onDestroy

```cpp
inline virtual void onDestroy(
    MamaBasicSubscription * subscription,
    void * closure
)
```


**Parameters**: 

  * **subscription** The The [Mama](classWombat_1_1Mama.html) Basic Subscription. 
  * **closure** The closure passed to the create function. 


This method is invoked when a subscription has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this subscription.


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100