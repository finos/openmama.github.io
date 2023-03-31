---
title: mamaMsgCallbacks_
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamaMsgCallbacks_



 [More...](#detailed-description)


`#include <subscription.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| wombat_subscriptionCreateCB | **[onCreate](structmamaMsgCallbacks__.html#variable-oncreate)**  |
| wombat_subscriptionErrorCB | **[onError](structmamaMsgCallbacks__.html#variable-onerror)**  |
| wombat_subscriptionOnMsgCB | **[onMsg](structmamaMsgCallbacks__.html#variable-onmsg)**  |
| wombat_subscriptionQualityCB | **[onQuality](structmamaMsgCallbacks__.html#variable-onquality)**  |
| wombat_subscriptionGapCB | **[onGap](structmamaMsgCallbacks__.html#variable-ongap)**  |
| wombat_subscriptionRecapCB | **[onRecapRequest](structmamaMsgCallbacks__.html#variable-onrecaprequest)**  |
| wombat_subscriptionDestroyCB | **[onDestroy](structmamaMsgCallbacks__.html#variable-ondestroy)**  |

## Detailed Description

```cpp
struct mamaMsgCallbacks_;
```


A convenience structure for passing the callbacks to the subscription factory methods. 

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
wombat_subscriptionOnMsgCB onMsg;
```


### variable onQuality

```cpp
wombat_subscriptionQualityCB onQuality;
```


### variable onGap

```cpp
wombat_subscriptionGapCB onGap;
```


### variable onRecapRequest

```cpp
wombat_subscriptionRecapCB onRecapRequest;
```


### variable onDestroy

```cpp
wombat_subscriptionDestroyCB onDestroy;
```


-------------------------------

Updated on 2023-03-31 at 15:29:15 +0100