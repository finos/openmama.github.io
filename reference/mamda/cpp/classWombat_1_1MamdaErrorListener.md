---
title: Wombat::MamdaErrorListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaErrorListener



 [More...](#detailed-description)


`#include <MamdaErrorListener.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onError](classWombat_1_1MamdaErrorListener.html#function-onerror)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaErrorSeverity](namespaceWombat.html#enum-mamdaerrorseverity) severity, [MamdaErrorCode](namespaceWombat.html#enum-mamdaerrorcode) errorCode, const char * errorStr) =0 |
| virtual | **[~MamdaErrorListener](classWombat_1_1MamdaErrorListener.html#function-~mamdaerrorlistener)**() |

## Detailed Description

```cpp
class Wombat::MamdaErrorListener;
```


[MamdaErrorListener](classWombat_1_1MamdaErrorListener.html) defines an interface for handling error notifications for a [MamdaSubscription](classWombat_1_1MamdaSubscription.html). 

## Public Functions Documentation

### function onError

```cpp
virtual void onError(
    MamdaSubscription * subscription,
    MamdaErrorSeverity severity,
    MamdaErrorCode errorCode,
    const char * errorStr
) =0
```


Provide a callback to handle errors. The severity is intended as a hint to indicate whether the error is recoverable. 


### function ~MamdaErrorListener

```cpp
inline virtual ~MamdaErrorListener()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100