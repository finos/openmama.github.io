---
title: com::wombat::mama::MamaSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaSubscriptionCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html#function-oncreate)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onError](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html#function-onerror)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, short wombatStatus, int platformError, String subject, Exception e) |
| void | **[onMsg](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html#function-onmsg)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onQuality](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html#function-onquality)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription, short quality, short cause, final Object platformInfo) |
| void | **[onRecapRequest](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html#function-onrecaprequest)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onGap](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html#function-ongap)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |
| void | **[onDestroy](interfacecom_1_1wombat_1_1mama_1_1MamaSubscriptionCallback.html#function-ondestroy)**([MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html) subscription) |

## Detailed Description

```java
class com::wombat::mama::MamaSubscriptionCallback;
```


**See**: [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html)

The message callback interface. Callers provide an object implementing this interface on creating a `[MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html)`.

## Public Functions Documentation

### function onCreate

```java
void onCreate(
    MamaSubscription subscription
)
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when subscription creation is complete. Since subscriptions are created asynchronous by throttle, this callback provides the subscription instance after the throttle processes the creation request. In the case where a subscription is created on a queue other than the default it is possible for `onMsg` calls to be processed to be called before the `onCreate` callback is processed.


### function onError

```java
void onError(
    MamaSubscription subscription,
    short wombatStatus,
    int platformError,
    String subject,
    Exception e
)
```


**Parameters**: 

  * **subscription** The subscription. 
  * **wombatStatus** The wombat error code. 
  * **platformError** Third party, platform specific messaging error. 
  * **subject** The subject for NOT_ENTITLED 
  * **e** 


Invoked if an error occurs during subscription creation or if the 

 subscription receives a message for an unentitled subject. 

If the status is `MamaStatus.NOT_ENTITTLED` the subject parameter is the specific unentitled subject. If the subscription subject contains 

 wildcards, the subscription may still receive messages for other entitled subjects.


### function onMsg

```java
void onMsg(
    MamaSubscription subscription,
    MamaMsg msg
)
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html)`. 
  * **msg** The [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html). 


Invoked when a message arrives.


### function onQuality

```java
void onQuality(
    MamaSubscription subscription,
    short quality,
    short cause,
    final Object platformInfo
)
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html)`. 
  * **quality** The new quality: one of the values in the [MamaQuality](classcom_1_1wombat_1_1mama_1_1MamaQuality.html) class. 
  * **cause** The cause of the data quality event. 
  * **platformInfo** Info associated with the data quality event.


Invoked when a the quality of this subscription changes.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported: 
tibrv: provides the String object version of the tibrv advisory message 


### function onRecapRequest

```java
void onRecapRequest(
    MamaSubscription subscription
)
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html)`. 


Method invoked when a recap is requested upon detecting a sequence number gap.


### function onGap

```java
void onGap(
    MamaSubscription subscription
)
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html)`. 


Method invoked when a sequence number gap is detected. At this point the topic is considered stale and the subscription will not receive further messages until the feed handler satisfies a recap request.


### function onDestroy

```java
void onDestroy(
    MamaSubscription subscription
)
```


**Parameters**: 

  * **subscription** The [MamaSubscription](classcom_1_1wombat_1_1mama_1_1MamaSubscription.html). 


This method is invoked when a subscription has been completely destroyed or deactivated, the client can have confidence that no further messages will be placed on the queue for this subscription.


-------------------------------

Updated on 2023-03-31 at 15:29:44 +0100