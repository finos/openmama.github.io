---
title: Wombat::MamaInboxCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaInboxCallback



 [More...](#detailed-description)


`#include <MamaInboxCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaInboxCallback](classWombat_1_1MamaInboxCallback.html#function-~mamainboxcallback)**(void ) |
| virtual void | **[onDestroy](classWombat_1_1MamaInboxCallback.html#function-ondestroy)**([MamaInbox](classWombat_1_1MamaInbox.html) * inbox, void * closure) |
| virtual void | **[onMsg](classWombat_1_1MamaInboxCallback.html#function-onmsg)**([MamaInbox](classWombat_1_1MamaInbox.html) * inbox, [MamaMsg](classWombat_1_1MamaMsg.html) & msg) =0 |
| virtual void | **[onError](classWombat_1_1MamaInboxCallback.html#function-onerror)**([MamaInbox](classWombat_1_1MamaInbox.html) * inbox, const [MamaStatus](classWombat_1_1MamaStatus.html) & status) =0 |

## Detailed Description

```cpp
class Wombat::MamaInboxCallback;
```


The [MamaInboxCallback](classWombat_1_1MamaInboxCallback.html) gets invoked when a message arrives in an inbox or when inbox related errors arise. 

## Public Functions Documentation

### function ~MamaInboxCallback

```cpp
inline virtual ~MamaInboxCallback(
    void 
)
```


### function onDestroy

```cpp
inline virtual void onDestroy(
    MamaInbox * inbox,
    void * closure
)
```


**Parameters**: 

  * **inbox** The [MamaInbox](classWombat_1_1MamaInbox.html). 
  * **closure** The closure passed to the create function. 


This method is invoked when an inbox has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this inbox.


### function onMsg

```cpp
virtual void onMsg(
    MamaInbox * inbox,
    MamaMsg & msg
) =0
```


### function onError

```cpp
virtual void onError(
    MamaInbox * inbox,
    const MamaStatus & status
) =0
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100