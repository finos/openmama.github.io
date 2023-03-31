---
title: mamaDQPublisherManagerCallbacks_
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamaDQPublisherManagerCallbacks_



 [More...](#detailed-description)


`#include <dqpublishermanager.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| mamaDQPublisherCreateCB | **[onCreate](structmamaDQPublisherManagerCallbacks__.html#variable-oncreate)**  |
| mamaDQPublisherNewRequestCB | **[onNewRequest](structmamaDQPublisherManagerCallbacks__.html#variable-onnewrequest)**  |
| mamaDQPublisherRequestCB | **[onRequest](structmamaDQPublisherManagerCallbacks__.html#variable-onrequest)**  |
| mamaDQPublisherRefreshCB | **[onRefresh](structmamaDQPublisherManagerCallbacks__.html#variable-onrefresh)**  |
| mamaDQPublisherErrorCB | **[onError](structmamaDQPublisherManagerCallbacks__.html#variable-onerror)**  |
| mamaDQPublisherMsgCB | **[onMsg](structmamaDQPublisherManagerCallbacks__.html#variable-onmsg)**  |

## Detailed Description

```cpp
struct mamaDQPublisherManagerCallbacks_;
```


Structure containing each of the DQ Publisher Manager callbacks. 

## Public Attributes Documentation

### variable onCreate

```cpp
mamaDQPublisherCreateCB onCreate;
```


### variable onNewRequest

```cpp
mamaDQPublisherNewRequestCB onNewRequest;
```


### variable onRequest

```cpp
mamaDQPublisherRequestCB onRequest;
```


### variable onRefresh

```cpp
mamaDQPublisherRefreshCB onRefresh;
```


### variable onError

```cpp
mamaDQPublisherErrorCB onError;
```


### variable onMsg

```cpp
mamaDQPublisherMsgCB onMsg;
```


-------------------------------

Updated on 2023-03-31 at 15:29:15 +0100