---
title: com::wombat::mama::MamaBasicWildCardSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaBasicWildCardSubscriptionCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](interfacecom_1_1wombat_1_1mama_1_1MamaBasicWildCardSubscriptionCallback.html#function-oncreate)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription) |
| void | **[onError](interfacecom_1_1wombat_1_1mama_1_1MamaBasicWildCardSubscriptionCallback.html#function-onerror)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription, short wombatStatus, int platformError, String subject) |
| void | **[onMsg](interfacecom_1_1wombat_1_1mama_1_1MamaBasicWildCardSubscriptionCallback.html#function-onmsg)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg, String topic) |
| void | **[onDestroy](interfacecom_1_1wombat_1_1mama_1_1MamaBasicWildCardSubscriptionCallback.html#function-ondestroy)**([MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html) subscription) |

## Detailed Description

```java
class com::wombat::mama::MamaBasicWildCardSubscriptionCallback;
```


**See**: [MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html)

**Author**: ldelaney 
## Public Functions Documentation

### function onCreate

```java
void onCreate(
    MamaBasicSubscription subscription
)
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when subscription creation is complete. Since subscriptions are created asynchronous by throttle, this callback provides the subscription instance after the throttle processes the creation request. In the case where a subscription is created on a queue other than the default it is possible for `onMsg` calls to be processed to be called before the `onCreate` callback is processed.


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

  * **subscription** The subscription. 
  * **wombatStatus** The wombat error code. 
  * **platformError** Third party, platform specific messaging error. 
  * **subject** The subject for NOT_ENTITLED 


Invoked if an error occurs during prior to subscription creation or if the subscription receives a message for an unentitled subject. 

If the status is `MamaMsgStatus.NOT_ENTITTLED` the subject parameter is the specific unentitled subject. If the subscription subject contains wildcards, the subscription may still receive messages for other entitled subjects.


### function onMsg

```java
void onMsg(
    MamaBasicSubscription subscription,
    MamaMsg msg,
    String topic
)
```


**Parameters**: 

  * **subscription** the `[MamaBasicSubscription](classcom_1_1wombat_1_1mama_1_1MamaBasicSubscription.html)`. 
  * **msg** The [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html). 


Invoked when a message arrives.


### function onDestroy

```java
void onDestroy(
    MamaBasicSubscription subscription
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:42 +0100