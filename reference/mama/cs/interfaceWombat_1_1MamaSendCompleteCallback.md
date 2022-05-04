---
title: Wombat::MamaSendCompleteCallback
summary: Provides an object-oriented callback interface for MamaPublisher's sendWithThrottle and sendFromInboxWithThrottle methods 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSendCompleteCallback



Provides an object-oriented callback interface for [MamaPublisher](classWombat_1_1MamaPublisher.html)'s sendWithThrottle and sendFromInboxWithThrottle methods 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSendComplete](interfaceWombat_1_1MamaSendCompleteCallback.html#function-onsendcomplete)**([MamaPublisher](classWombat_1_1MamaPublisher.html) publisher, [MamaMsg](classWombat_1_1MamaMsg.html) message, [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status, object closure)<br>Prototype for callback invoked when a message sent with either mamaPublisher_sendWithThrottle() or mamaPublisher_sendFromInboxWithThrottle() has been sent from the throttle queue.  |

## Public Functions Documentation

### function onSendComplete

```csharp
void onSendComplete(
    MamaPublisher publisher,
    MamaMsg message,
    MamaStatus.mamaStatus status,
    object closure
)
```

Prototype for callback invoked when a message sent with either mamaPublisher_sendWithThrottle() or mamaPublisher_sendFromInboxWithThrottle() has been sent from the throttle queue. 

**Parameters**: 

  * **publisher** The publisher object used to send the message.
  * **message** The mamaMsg which has been sent from the throttle queue.
  * **status** Whether the message was successfully sent from the throttle. A value of MAMA_STATUS_OK indicates that the send was successful.
  * **closure** User supplied context data.


Messages sent on the throttle queue are no longer destroyed by the API. It is the responsibility of the application developer to manage the lifecycle of any messages sent on the throttle.


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100