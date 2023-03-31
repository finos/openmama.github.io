---
title: Wombat::MamaSubscriptionCallback
summary: This interface should be implemented by clients wish to create a MAMA subscription, it contains callback functions that will be invoked whenever specific events occur. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSubscriptionCallback



This interface should be implemented by clients wish to create a MAMA subscription, it contains callback functions that will be invoked whenever specific events occur. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onCreate](interfaceWombat_1_1MamaSubscriptionCallback.html#function-oncreate)**([MamaSubscription](classWombat_1_1MamaSubscription.html) subscription)<br>Called when subscription creation is complete, and before the [onMsg()]() callback is invoked  |
| void | **[onError](interfaceWombat_1_1MamaSubscriptionCallback.html#function-onerror)**([MamaSubscription](classWombat_1_1MamaSubscription.html) subscription, [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status, string subject)<br>Called when an error has occurred with the subscription  |
| void | **[onGap](interfaceWombat_1_1MamaSubscriptionCallback.html#function-ongap)**([MamaSubscription](classWombat_1_1MamaSubscription.html) subscription)<br>Function invoked when a sequence number gap is detected. At this point the topic is considered stale and the subscription will not receive further messages until the feed handler satisfies a recap request.  |
| void | **[onMsg](interfaceWombat_1_1MamaSubscriptionCallback.html#function-onmsg)**([MamaSubscription](classWombat_1_1MamaSubscription.html) subscription, [MamaMsg](classWombat_1_1MamaMsg.html) message)<br>Invoked when a message arrives  |
| void | **[onQuality](interfaceWombat_1_1MamaSubscriptionCallback.html#function-onquality)**([MamaSubscription](classWombat_1_1MamaSubscription.html) subscription, [mamaQuality](namespaceWombat.html#enum-mamaquality) quality, string symbol)<br>Invoked to indicate a data quality event.  |
| void | **[onRecapRequest](interfaceWombat_1_1MamaSubscriptionCallback.html#function-onrecaprequest)**([MamaSubscription](classWombat_1_1MamaSubscription.html) subscription)<br>Invoked when a recap is requested upon detecting a sequence number gap.  |
| void | **[onDestroy](interfaceWombat_1_1MamaSubscriptionCallback.html#function-ondestroy)**([MamaSubscription](classWombat_1_1MamaSubscription.html) subscription)<br>Function invoked when a subscription has been destroyed or deactivated.  |

## Public Functions Documentation

### function onCreate

```csharp
void onCreate(
    MamaSubscription subscription
)
```

Called when subscription creation is complete, and before the [onMsg()]() callback is invoked 

**Parameters**: 

  * **subscription** The subscription that has been created. 


### function onError

```csharp
void onError(
    MamaSubscription subscription,
    MamaStatus.mamaStatus status,
    string subject
)
```

Called when an error has occurred with the subscription 

**Parameters**: 

  * **subscription** The subscription where the error has been detected. 
  * **status** The status code associated with the error. 
  * **subject** The subject for entitlement errors. 


### function onGap

```csharp
void onGap(
    MamaSubscription subscription
)
```

Function invoked when a sequence number gap is detected. At this point the topic is considered stale and the subscription will not receive further messages until the feed handler satisfies a recap request. 

**Parameters**: 

  * **subscription** The subscription where the gap has been detected. 


### function onMsg

```csharp
void onMsg(
    MamaSubscription subscription,
    MamaMsg message
)
```

Invoked when a message arrives 

**Parameters**: 

  * **subscription** The subscription where the message has arrived. 
  * **message** The message. 


### function onQuality

```csharp
void onQuality(
    MamaSubscription subscription,
    mamaQuality quality,
    string symbol
)
```

Invoked to indicate a data quality event. 

**Parameters**: 

  * **subscription** The subscription where the quality has changed. 
  * **quality** The new quality. 
  * **symbol** The symbol. 


### function onRecapRequest

```csharp
void onRecapRequest(
    MamaSubscription subscription
)
```

Invoked when a recap is requested upon detecting a sequence number gap. 

**Parameters**: 

  * **subscription** The subscription where the recap has been requested. 


### function onDestroy

```csharp
void onDestroy(
    MamaSubscription subscription
)
```

Function invoked when a subscription has been destroyed or deactivated. 

**Parameters**: 

  * **subscription** The subscription that has been destroyed. 


-------------------------------

Updated on 2023-03-31 at 15:29:33 +0100