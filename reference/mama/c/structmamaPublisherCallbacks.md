---
title: mamaPublisherCallbacks
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamaPublisherCallbacks



 [More...](#detailed-description)


`#include <publisher.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| mama_publisherOnCreateCb | **[onCreate](structmamaPublisherCallbacks.html#variable-oncreate)**  |
| mama_publisherOnErrorCb | **[onError](structmamaPublisherCallbacks.html#variable-onerror)**  |
| mama_publisherOnDestroyCb | **[onDestroy](structmamaPublisherCallbacks.html#variable-ondestroy)**  |
| mama_publisherOnSuccessCb | **[onSuccess](structmamaPublisherCallbacks.html#variable-onsuccess)**  |

## Detailed Description

```cpp
struct mamaPublisherCallbacks;
```


Callbacks for publisher events. If any cb is NULL then the callback will not be made. 

## Public Attributes Documentation

### variable onCreate

```cpp
mama_publisherOnCreateCb onCreate;
```


### variable onError

```cpp
mama_publisherOnErrorCb onError;
```


### variable onDestroy

```cpp
mama_publisherOnDestroyCb onDestroy;
```


### variable onSuccess

```cpp
mama_publisherOnSuccessCb onSuccess;
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100