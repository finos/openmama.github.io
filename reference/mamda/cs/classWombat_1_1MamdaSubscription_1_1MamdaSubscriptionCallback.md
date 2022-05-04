---
title: Wombat::MamdaSubscription::MamdaSubscriptionCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSubscription::MamdaSubscriptionCallback





Inherits from MamaSubscriptionCallback

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSubscriptionCallback](classWombat_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-mamdasubscriptioncallback)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription) |
| void | **[onMsg](classWombat_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-onmsg)**(MamaSubscription subscription, MamaMsg msg) |
| void | **[onCreate](classWombat_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-oncreate)**(MamaSubscription subscription)<br>Method invoked when listener creation is complete, and before any calls to  |
| void | **[onError](classWombat_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-onerror)**(MamaSubscription subscription, MamaStatus.mamaStatus status, string subject) |
| void | **[onQuality](classWombat_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-onquality)**(MamaSubscription subscription, mamaQuality quality, string symbol) |
| void | **[onGap](classWombat_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-ongap)**(MamaSubscription subscription) |
| void | **[onDestroy](classWombat_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-ondestroy)**(MamaSubscription subscription) |
| void | **[onRecapRequest](classWombat_1_1MamdaSubscription_1_1MamdaSubscriptionCallback.html#function-onrecaprequest)**(MamaSubscription subscription) |

## Public Functions Documentation

### function MamdaSubscriptionCallback

```csharp
MamdaSubscriptionCallback(
    MamdaSubscription subscription
)
```


### function onMsg

```csharp
void onMsg(
    MamaSubscription subscription,
    MamaMsg msg
)
```


### function onCreate

```csharp
void onCreate(
    MamaSubscription subscription
)
```

Method invoked when listener creation is complete, and before any calls to 

**Parameters**: 

  * **subscription** The listenerCreated.


`onMsg`.


### function onError

```csharp
void onError(
    MamaSubscription subscription,
    MamaStatus.mamaStatus status,
    string subject
)
```


### function onQuality

```csharp
void onQuality(
    MamaSubscription subscription,
    mamaQuality quality,
    string symbol
)
```


### function onGap

```csharp
void onGap(
    MamaSubscription subscription
)
```


### function onDestroy

```csharp
void onDestroy(
    MamaSubscription subscription
)
```


### function onRecapRequest

```csharp
void onRecapRequest(
    MamaSubscription subscription
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100