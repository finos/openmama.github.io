---
title: com::wombat::mama::MamaInboxCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaInboxCallback



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onMsg](interfacecom_1_1wombat_1_1mama_1_1MamaInboxCallback.html#function-onmsg)**([MamaInbox](classcom_1_1wombat_1_1mama_1_1MamaInbox.html) inbox, [MamaMsg](classcom_1_1wombat_1_1mama_1_1MamaMsg.html) msg) |
| void | **[onDestroy](interfacecom_1_1wombat_1_1mama_1_1MamaInboxCallback.html#function-ondestroy)**([MamaInbox](classcom_1_1wombat_1_1mama_1_1MamaInbox.html) inbox) |

## Detailed Description

```java
class com::wombat::mama::MamaInboxCallback;
```


Callback for point to point messaging. 

## Public Functions Documentation

### function onMsg

```java
void onMsg(
    MamaInbox inbox,
    MamaMsg msg
)
```


**Parameters**: 

  * **inbox** The inbox. 
  * **msg** The msg. 


Method invoked when a message arrives.


### function onDestroy

```java
void onDestroy(
    MamaInbox inbox
)
```


**Parameters**: 

  * **inbox** The [MamaInbox](classcom_1_1wombat_1_1mama_1_1MamaInbox.html). 


This method is invoked when an inbox has been completely destroyed, the client can have confidence that no further events will be placed on the queue for this inbox.


-------------------------------

Updated on 2023-03-31 at 15:29:43 +0100