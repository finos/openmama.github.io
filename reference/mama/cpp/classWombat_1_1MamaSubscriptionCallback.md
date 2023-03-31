---
title: Wombat::MamaSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSubscriptionCallback



 [More...](#detailed-description)


`#include <MamaSubscriptionCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSubscriptionCallback](classWombat_1_1MamaSubscriptionCallback.html#function-~mamasubscriptioncallback)**() |
| virtual void | **[onCreate](classWombat_1_1MamaSubscriptionCallback.html#function-oncreate)**([MamaSubscription](classWombat_1_1MamaSubscription.html) * subscription) |
| virtual void | **[onError](classWombat_1_1MamaSubscriptionCallback.html#function-onerror)**([MamaSubscription](classWombat_1_1MamaSubscription.html) * subscription, const [MamaStatus](classWombat_1_1MamaStatus.html) & status, const char * symbol) |
| virtual void | **[onGap](classWombat_1_1MamaSubscriptionCallback.html#function-ongap)**([MamaSubscription](classWombat_1_1MamaSubscription.html) * subscription) |
| virtual void | **[onDestroy](classWombat_1_1MamaSubscriptionCallback.html#function-ondestroy)**([MamaSubscription](classWombat_1_1MamaSubscription.html) * subscription) |
| virtual void | **[onRecapRequest](classWombat_1_1MamaSubscriptionCallback.html#function-onrecaprequest)**([MamaSubscription](classWombat_1_1MamaSubscription.html) * subscription) |
| virtual void | **[onMsg](classWombat_1_1MamaSubscriptionCallback.html#function-onmsg)**([MamaSubscription](classWombat_1_1MamaSubscription.html) * subscription, [MamaMsg](classWombat_1_1MamaMsg.html) & msg) =0 |
| virtual void | **[onQuality](classWombat_1_1MamaSubscriptionCallback.html#function-onquality)**([MamaSubscription](classWombat_1_1MamaSubscription.html) * subscription, mamaQuality quality, const char * symbol, short cause, const void * platformInfo) |
| virtual void | **[onCreate](classWombat_1_1MamaSubscriptionCallback.html#function-oncreate)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) * subscription) |
| virtual void | **[onError](classWombat_1_1MamaSubscriptionCallback.html#function-onerror)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) * subscription, const [MamaStatus](classWombat_1_1MamaStatus.html) & status, const char * symbol) |
| virtual void | **[onMsg](classWombat_1_1MamaSubscriptionCallback.html#function-onmsg)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) * subscription, [MamaMsg](classWombat_1_1MamaMsg.html) & msg) |

## Detailed Description

```cpp
class Wombat::MamaSubscriptionCallback;
```


**See**: [MamaSubscription](classWombat_1_1MamaSubscription.html)

**Author**: mls 

The message callback interface. Callers provide an object implementing this interface on creating a `[MamaSubscription](classWombat_1_1MamaSubscription.html)`.

## Public Functions Documentation

### function ~MamaSubscriptionCallback

```cpp
inline virtual ~MamaSubscriptionCallback()
```


### function onCreate

```cpp
inline virtual void onCreate(
    MamaSubscription * subscription
)
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when subscription creation is complete, and before any calls to `onMsg`. Since subscriptions are created asynchronous by throttle, this callback provides the subscription instance after the throttle processes the creation request.


### function onError

```cpp
inline virtual void onError(
    MamaSubscription * subscription,
    const MamaStatus & status,
    const char * symbol
)
```


**Parameters**: 

  * **subscription** The subscription. 
  * **status** The wombat error code. 
  * **symbol** The symbol for NOT_ENTITLED 


Invoked if an error occurs during prior to subscription creation or if the subscription receives a message for an unentitled symbol.

If the status is `MamaMsgStatus.NOT_ENTITTLED` the symbol parameter is the specific unentitled symbol. If the subscription symbol contains wildcards, the subscription may still receive messages for other entitled symbol.


### function onGap

```cpp
inline virtual void onGap(
    MamaSubscription * subscription
)
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when a sequence number gap is detected. At this point the topic is considered stale and the subscription will not receive further messages until the feed handler satisfies a recap request.


### function onDestroy

```cpp
inline virtual void onDestroy(
    MamaSubscription * subscription
)
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when a subscription has been destroyed through destroyEx. 


### function onRecapRequest

```cpp
inline virtual void onRecapRequest(
    MamaSubscription * subscription
)
```


**Parameters**: 

  * **subscription** The subscription. 


Method invoked when a recap is requested upon detecting a sequence number gap.


### function onMsg

```cpp
virtual void onMsg(
    MamaSubscription * subscription,
    MamaMsg & msg
) =0
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classWombat_1_1MamaSubscription.html)`. 
  * **msg** The [MamaMsg](classWombat_1_1MamaMsg.html) which resulted in this callback being invoked. 


Invoked when a message arrives.


### function onQuality

```cpp
inline virtual void onQuality(
    MamaSubscription * subscription,
    mamaQuality quality,
    const char * symbol,
    short cause,
    const void * platformInfo
)
```


**Parameters**: 

  * **subscription** The subscription. 
  * **quality** The new quality: one of the values in the MamaQuality class. 
  * **symbol** The symbol for this subscription. 
  * **cause** The cause of the quality event 
  * **platformInfo** Info associated with the quality event


Invoked when the quality of this subscription changes.


The cause and platformInfo are supplied only by some middlewares. The information provided by platformInfo is middleware specific. The following middlewares are supported:

tibrv: provides the char* version of the tibrv advisory message. 


### function onCreate

```cpp
inline virtual void onCreate(
    MamaBasicSubscription * subscription
)
```


### function onError

```cpp
inline virtual void onError(
    MamaBasicSubscription * subscription,
    const MamaStatus & status,
    const char * symbol
)
```


### function onMsg

```cpp
inline virtual void onMsg(
    MamaBasicSubscription * subscription,
    MamaMsg & msg
)
```


**Parameters**: 

  * **subscription** the `[MamaSubscription](classWombat_1_1MamaSubscription.html)`. 
  * **msg** The TibrvMsg. 


Invoked when a message arrives.


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100