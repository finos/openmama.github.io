---
title: Wombat::MamaInboxCallback
summary: Provides an object-oriented callback interface for a MamaInbox response to a p2p message being received or when an error is encountered during p2p messaging 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaInboxCallback



Provides an object-oriented callback interface for a [MamaInbox](classWombat_1_1MamaInbox.html) response to a p2p message being received or when an error is encountered during p2p messaging 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onMsg](interfaceWombat_1_1MamaInboxCallback.html#function-onmsg)**([MamaInbox](classWombat_1_1MamaInbox.html) inbox, [MamaMsg](classWombat_1_1MamaMsg.html) message)<br>Invoked in response to a p2p message being received. Note: you can obtain a reference to the user-supplied data passed to the create method by calling getClosure on the [MamaInbox](classWombat_1_1MamaInbox.html) instance  |
| void | **[onError](interfaceWombat_1_1MamaInboxCallback.html#function-onerror)**([MamaInbox](classWombat_1_1MamaInbox.html) inbox, [MamaStatus.mamaStatus](classWombat_1_1MamaStatus.html#enum-mamastatus) status)<br>NB. Not currently used. Invoked when an error is encountered during p2p messaging. Note: you can obtain a reference to the user-supplied data passed to the create method by calling getClosure on the [MamaInbox](classWombat_1_1MamaInbox.html) instance  |
| void | **[onDestroy](interfaceWombat_1_1MamaInboxCallback.html#function-ondestroy)**([MamaInbox](classWombat_1_1MamaInbox.html) inbox, object closure)<br>This method is invoked when an inbox has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this inbox.  |

## Public Functions Documentation

### function onMsg

```csharp
void onMsg(
    MamaInbox inbox,
    MamaMsg message
)
```

Invoked in response to a p2p message being received. Note: you can obtain a reference to the user-supplied data passed to the create method by calling getClosure on the [MamaInbox](classWombat_1_1MamaInbox.html) instance 

**Parameters**: 

  * **inbox** The [MamaInbox](classWombat_1_1MamaInbox.html) instance which received the message. 
  * **message** The mamaMsg received in the p2p response. 


### function onError

```csharp
void onError(
    MamaInbox inbox,
    MamaStatus.mamaStatus status
)
```

NB. Not currently used. Invoked when an error is encountered during p2p messaging. Note: you can obtain a reference to the user-supplied data passed to the create method by calling getClosure on the [MamaInbox](classWombat_1_1MamaInbox.html) instance 

**Parameters**: 

  * **inbox** The [MamaInbox](classWombat_1_1MamaInbox.html) instance for which the error occurred. 
  * **status** The mama_status describing the error condition. 


### function onDestroy

```csharp
void onDestroy(
    MamaInbox inbox,
    object closure
)
```

This method is invoked when an inbox has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this inbox. 

**Parameters**: 

  * **inbox** The inbox. 
  * **closure** The closure passed to the create function. 


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100