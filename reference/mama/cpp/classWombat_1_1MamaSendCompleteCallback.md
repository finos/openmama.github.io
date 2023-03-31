---
title: Wombat::MamaSendCompleteCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSendCompleteCallback



 [More...](#detailed-description)


`#include <MamaSendCompleteCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSendCompleteCallback](classWombat_1_1MamaSendCompleteCallback.html#function-~mamasendcompletecallback)**() |
| virtual void | **[onSendComplete](classWombat_1_1MamaSendCompleteCallback.html#function-onsendcomplete)**([MamaPublisher](classWombat_1_1MamaPublisher.html) & publisher, [MamaMsg](classWombat_1_1MamaMsg.html) * msg, [MamaStatus](classWombat_1_1MamaStatus.html) & status, void * closure) =0 |

## Detailed Description

```cpp
class Wombat::MamaSendCompleteCallback;
```


Callback interface for use with the MamaPublisher.sendWithThrottle() and MamaPublisher.sendFromInboxWithThrottle() methods. The `[onSendComplete()](classWombat_1_1MamaSendCompleteCallback.html#function-onsendcomplete)` method is invoked once a message being sent on the throttle is no longer required by the API.

Messages sent on the throttle queue are no longer destroyed by the API. It is the responsibility of the application developer to manage the lifecycle of any messages sent on the throttle. 

## Public Functions Documentation

### function ~MamaSendCompleteCallback

```cpp
inline virtual ~MamaSendCompleteCallback()
```


### function onSendComplete

```cpp
virtual void onSendComplete(
    MamaPublisher & publisher,
    MamaMsg * msg,
    MamaStatus & status,
    void * closure
) =0
```


**Parameters**: 

  * **publisher** The publisher object used to send the message. 
  * **msg** The [MamaMsg](classWombat_1_1MamaMsg.html) which has been sent from the throttle queue. 
  * **status** Whether the message was successfully sent from the throttle. A value of MAMA_STATUS_OK indicates that the send was successful. 
  * **closure** User supplied context data. 


Called whenever the API has sent a message on the throttle queue.


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100