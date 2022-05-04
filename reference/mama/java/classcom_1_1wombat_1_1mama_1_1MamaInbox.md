---
title: com::wombat::mama::MamaInbox
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mama::MamaInbox





## Public Functions

|                | Name           |
| -------------- | -------------- |
| native void | **[create](classcom_1_1wombat_1_1mama_1_1MamaInbox.html#function-create)**([MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html) transport, [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html) queue, [MamaInboxCallback](interfacecom_1_1wombat_1_1mama_1_1MamaInboxCallback.html) callback) |
| void | **[destroy](classcom_1_1wombat_1_1mama_1_1MamaInbox.html#function-destroy)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[finalize](classcom_1_1wombat_1_1mama_1_1MamaInbox.html#function-finalize)**() |

## Public Functions Documentation

### function create

```java
native void create(
    MamaTransport transport,
    MamaQueue queue,
    MamaInboxCallback callback
)
```


**Parameters**: 

  * **transport** The [MamaTransport](classcom_1_1wombat_1_1mama_1_1MamaTransport.html). 
  * **queue** The [MamaQueue](classcom_1_1wombat_1_1mama_1_1MamaQueue.html). 
  * **callback** The object implementing the callback functions. 


Create an inbox.


### function destroy

```java
inline void destroy()
```


## Protected Functions Documentation

### function finalize

```java
inline void finalize()
```


-------------------------------

Updated on 2022-05-04 at 07:54:08 +0100