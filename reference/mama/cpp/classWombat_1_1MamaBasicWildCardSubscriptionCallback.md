---
title: Wombat::MamaBasicWildCardSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBasicWildCardSubscriptionCallback



 [More...](#detailed-description)


`#include <MamaBasicWildCardSubscriptionCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaBasicWildCardSubscriptionCallback](classWombat_1_1MamaBasicWildCardSubscriptionCallback.html#function-~mamabasicwildcardsubscriptioncallback)**() |
| virtual void | **[onCreate](classWombat_1_1MamaBasicWildCardSubscriptionCallback.html#function-oncreate)**([MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html) * subscription) =0 |
| virtual void | **[onError](classWombat_1_1MamaBasicWildCardSubscriptionCallback.html#function-onerror)**([MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html) * subscription, const [MamaStatus](classWombat_1_1MamaStatus.html) & status, const char * topic) =0 |
| virtual void | **[onDestroy](classWombat_1_1MamaBasicWildCardSubscriptionCallback.html#function-ondestroy)**([MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html) * subscription, void * closure) |
| virtual void | **[onMsg](classWombat_1_1MamaBasicWildCardSubscriptionCallback.html#function-onmsg)**([MamaBasicWildCardSubscription](classWombat_1_1MamaBasicWildCardSubscription.html) * subscription, [MamaMsg](classWombat_1_1MamaMsg.html) & msg, const char * topic) =0 |

## Detailed Description

```cpp
class Wombat::MamaBasicWildCardSubscriptionCallback;
```


The message callback interface for basic subscriptions. Callers provide an object implementing this interface on creating a `[MamaSubscription](classWombat_1_1MamaSubscription.html)`. 

## Public Functions Documentation

### function ~MamaBasicWildCardSubscriptionCallback

```cpp
inline virtual ~MamaBasicWildCardSubscriptionCallback()
```


### function onCreate

```cpp
virtual void onCreate(
    MamaBasicWildCardSubscription * subscription
) =0
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when subscription creation is complete, and before any calls to `onMsg`. Since subscriptions are created asynchronous by throttle, this callback provides the subscription instance after the throttle processes the creation request.


### function onError

```cpp
virtual void onError(
    MamaBasicWildCardSubscription * subscription,
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


### function onDestroy

```cpp
inline virtual void onDestroy(
    MamaBasicWildCardSubscription * subscription,
    void * closure
)
```


**Parameters**: 

  * **subscription** The The [Mama](classWombat_1_1Mama.html) Basic Wildcard Subscription. 
  * **closure** The closure passed to the create function. 


This method is invoked when a subscription has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this subscription.


### function onMsg

```cpp
virtual void onMsg(
    MamaBasicWildCardSubscription * subscription,
    MamaMsg & msg,
    const char * topic
) =0
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classWombat_1_1MamaSubscription.html)`. 
  * **msg** The TibrvMsg. 


Invoked when a message arrives.


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100