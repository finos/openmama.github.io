---
title: com::wombat::mama::MamaBasicSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaBasicSubscriptionCallback





## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](interfacecom_1_1wombat_1_1mama_1_1MamaBasicSubscriptionCallback.html#function-oncreate)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription) |
| void | **[onError](interfacecom_1_1wombat_1_1mama_1_1MamaBasicSubscriptionCallback.html#function-onerror)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription, short wombatStatus, int platformError, String subject) |
| void | **[onMsg](interfacecom_1_1wombat_1_1mama_1_1MamaBasicSubscriptionCallback.html#function-onmsg)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onDestroy](interfacecom_1_1wombat_1_1mama_1_1MamaBasicSubscriptionCallback.html#function-ondestroy)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription) |

## Public Functions Documentation

### function onCreate

```java
void onCreate(
    MamaBasicSubscription subscription
)
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when subscription creation is complete, and before any calls to `onMsg`. Since subscriptions are created asynchronous by throttle, this callback provides the subscription instance after the throttle processes the creation request.


### function onError

```java
void onError(
    MamaBasicSubscription subscription,
    short wombatStatus,
    int platformError,
    String subject
)
```


**Parameters**: 

  * **subscription** The subscriptionBridge. 
  * **wombatStatus** The wombat error code. 
  * **platformError** Third party, platform specific messaging error. 
  * **subject** The subject for NOT_ENTITLED 


Invoked if an error occurs during prior to subscriptionBridge creation or if the subscriptionBridge receives a message for an unentitled subject. 

If the status is `MamaStatus.NOT_ENTITTLED` the subject parameter is the specific unentitled subject. If the subscriptionBridge subject contains wildcards, the subscriptionBridge may still receive messages for other entitled subjects.


### function onMsg

```java
void onMsg(
    MamaBasicSubscription subscription,
    MamaMsg msg
)
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html)`. 
  * **msg** The [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html). 


Invoked when a message arrives.


### function onDestroy

```java
void onDestroy(
    MamaBasicSubscription subscription
)
```


**Parameters**: 

  * **subscription** The [MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html). 


This method is invoked when a subscription has been completely destroyed or deactivated, the client can have confidence that no further messages will be placed on the queue for this subscription.


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100