---
title: mamaDictionaryCallbackSet
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# mamaDictionaryCallbackSet



 [More...](#detailed-description)


`#include <dictionary.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| mamaDictionary_completeCallback | **[onComplete](structmamaDictionaryCallbackSet.html#variable-oncomplete)**  |
| mamaDictionary_timeoutCallback | **[onTimeout](structmamaDictionaryCallbackSet.html#variable-ontimeout)**  |
| mamaDictionary_errorCallback | **[onError](structmamaDictionaryCallbackSet.html#variable-onerror)**  |

## Detailed Description

```cpp
struct mamaDictionaryCallbackSet;
```


A structure containing the callbacks for dictionary creation. 

## Public Attributes Documentation

### variable onComplete

```cpp
mamaDictionary_completeCallback onComplete;
```


### variable onTimeout

```cpp
mamaDictionary_timeoutCallback onTimeout;
```


### variable onError

```cpp
mamaDictionary_errorCallback onError;
```


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100