---
title: mamaWildCardMsgCallbacks_
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamaWildCardMsgCallbacks_



 [More...](#detailed-description)


`#include <subscription.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| wombat_subscriptionCreateCB | **[onCreate](structmamaWildCardMsgCallbacks__.html#variable-oncreate)**  |
| wombat_subscriptionErrorCB | **[onError](structmamaWildCardMsgCallbacks__.html#variable-onerror)**  |
| wombat_subscriptionWildCardOnMsgCB | **[onMsg](structmamaWildCardMsgCallbacks__.html#variable-onmsg)**  |
| wombat_subscriptionDestroyCB | **[onDestroy](structmamaWildCardMsgCallbacks__.html#variable-ondestroy)**  |

## Detailed Description

```cpp
struct mamaWildCardMsgCallbacks_;
```


A convenience structure for passing the callbacks to wild card subscription factory methods. 

## Public Attributes Documentation

### variable onCreate

```cpp
wombat_subscriptionCreateCB onCreate;
```


### variable onError

```cpp
wombat_subscriptionErrorCB onError;
```


### variable onMsg

```cpp
wombat_subscriptionWildCardOnMsgCB onMsg;
```


### variable onDestroy

```cpp
wombat_subscriptionDestroyCB onDestroy;
```


-------------------------------

Updated on 2023-03-31 at 15:29:15 +0100