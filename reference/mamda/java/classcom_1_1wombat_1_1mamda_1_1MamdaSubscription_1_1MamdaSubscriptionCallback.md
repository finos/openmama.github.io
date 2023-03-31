---
title: com::wombat::mamda::MamdaSubscription::MamdaSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaSubscription::MamdaSubscriptionCallback





Inherits from MamaSubscriptionCallback

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSubscriptionCallback](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-mamdasubscriptioncallback)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription) |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-onmsg)**(final MamaSubscription subscription, final MamaMsg msg) |
| void | **[onCreate](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-oncreate)**(MamaSubscription subscription) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-onerror)**(MamaSubscription subscription, short wombatStatus, int platformError, String subject, Exception e) |
| void | **[onQuality](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-onquality)**(MamaSubscription subscription, short quality, short cause, final Object opaque) |
| void | **[onRecapRequest](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-onrecaprequest)**(MamaSubscription subscription) |
| void | **[onGap](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-ongap)**(MamaSubscription subscription) |
| void | **[onDestroy](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-ondestroy)**(MamaSubscription subscription) |

## Public Functions Documentation

### function MamdaSubscriptionCallback

```java
inline MamdaSubscriptionCallback(
    MamdaSubscription subscription
)
```


### function onMsg

```java
inline void onMsg(
    final MamaSubscription subscription,
    final MamaMsg msg
)
```


### function onCreate

```java
inline void onCreate(
    MamaSubscription subscription
)
```


**Parameters**: 

  * **subscription** The listenerCreated. 


Method invoked when listener creation is complete, and before any calls to `onMsg`.


### function onError

```java
inline void onError(
    MamaSubscription subscription,
    short wombatStatus,
    int platformError,
    String subject,
    Exception e
)
```


### function onQuality

```java
inline void onQuality(
    MamaSubscription subscription,
    short quality,
    short cause,
    final Object opaque
)
```


### function onRecapRequest

```java
inline void onRecapRequest(
    MamaSubscription subscription
)
```


### function onGap

```java
inline void onGap(
    MamaSubscription subscription
)
```


### function onDestroy

```java
inline void onDestroy(
    MamaSubscription subscription
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:35 +0100