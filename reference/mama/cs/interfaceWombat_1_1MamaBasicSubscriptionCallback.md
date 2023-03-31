---
title: Wombat::MamaBasicSubscriptionCallback
summary: This interface should be implemented by clients wish to create a MAMA Basic subscription, it contains callback functions that will be invoked whenever specific events occur. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBasicSubscriptionCallback



This interface should be implemented by clients wish to create a MAMA Basic subscription, it contains callback functions that will be invoked whenever specific events occur. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](interfaceWombat_1_1MamaBasicSubscriptionCallback.html#function-oncreate)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) subscription)<br>Called when subscription creation is complete, and before the [onMsg()]() callback is invoked  |
| void | **[onError](interfaceWombat_1_1MamaBasicSubscriptionCallback.html#function-onerror)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) subscription, [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status, string subject)<br>Called when an error has occurred with the subscription  |
| void | **[onMsg](interfaceWombat_1_1MamaBasicSubscriptionCallback.html#function-onmsg)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) subscription, [MamaMsg](classWombat_1_1MamaMsg.html) message)<br>Invoked when a message arrives  |
| void | **[onDestroy](interfaceWombat_1_1MamaBasicSubscriptionCallback.html#function-ondestroy)**([MamaBasicSubscription](classWombat_1_1MamaBasicSubscription.html) subscription, object closure)<br>Invoked whenever the basic subscription has been destroyed. The client can have confidence that no further messages will be placed on the queue for this subscription.  |

## Public Functions Documentation

### function onCreate

```csharp
void onCreate(
    MamaBasicSubscription subscription
)
```

Called when subscription creation is complete, and before the [onMsg()]() callback is invoked 

**Parameters**: 

  * **subscription** The subscription that has been created. 


### function onError

```csharp
void onError(
    MamaBasicSubscription subscription,
    MamaStatus.mamaStatus status,
    string subject
)
```

Called when an error has occurred with the subscription 

**Parameters**: 

  * **subscription** The subscription where the error has been detected. 
  * **status** The status code associated with the error. 
  * **subject** The subject for entitlement errors. 


### function onMsg

```csharp
void onMsg(
    MamaBasicSubscription subscription,
    MamaMsg message
)
```

Invoked when a message arrives 

**Parameters**: 

  * **subscription** The subscription where the message has arrived. 
  * **message** The message. 


### function onDestroy

```csharp
void onDestroy(
    MamaBasicSubscription subscription,
    object closure
)
```

Invoked whenever the basic subscription has been destroyed. The client can have confidence that no further messages will be placed on the queue for this subscription. 

**Parameters**: 

  * **subscription** The basic subscription. 
  * **closure** The closure provided to the createBasic function. 


-------------------------------

Updated on 2023-03-31 at 15:29:32 +0100