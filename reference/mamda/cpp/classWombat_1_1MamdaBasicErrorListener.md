---
title: Wombat::MamdaBasicErrorListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBasicErrorListener



 [More...](#detailed-description)


`#include <MamdaErrorListener.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onError](classWombat_1_1MamdaBasicErrorListener.html#function-onerror)**([MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html) * subscription, [MamdaErrorSeverity](namespaceWombat.html#enum-mamdaerrorseverity) severity, [MamdaErrorCode](namespaceWombat.html#enum-mamdaerrorcode) errorCode, const char * errorStr) =0 |
| virtual | **[~MamdaBasicErrorListener](classWombat_1_1MamdaBasicErrorListener.html#function-~mamdabasicerrorlistener)**() |

## Detailed Description

```cpp
class Wombat::MamdaBasicErrorListener;
```


[MamdaBasicErrorListener](classWombat_1_1MamdaBasicErrorListener.html) defines an interface for handling error notifications for a [MamdaBasicSubscription](classWombat_1_1MamdaBasicSubscription.html). 

## Public Functions Documentation

### function onError

```cpp
virtual void onError(
    MamdaBasicSubscription * subscription,
    MamdaErrorSeverity severity,
    MamdaErrorCode errorCode,
    const char * errorStr
) =0
```


Provide a callback to handle errors. The severity is intended as a hint to indicate whether the error is recoverable. 


### function ~MamdaBasicErrorListener

```cpp
inline virtual ~MamdaBasicErrorListener()
```


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100