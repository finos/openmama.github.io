---
title: Wombat::MamaStartCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaStartCallback



 [More...](#detailed-description)


`#include <mamacpp.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaStartCallback](classWombat_1_1MamaStartCallback.html#function-~mamastartcallback)**() |
| virtual void | **[onStartComplete](classWombat_1_1MamaStartCallback.html#function-onstartcomplete)**([MamaStatus](classWombat_1_1MamaStatus.html) status) =0 |

## Detailed Description

```cpp
class Wombat::MamaStartCallback;
```


Callback object passed to [Mama::startBackground()](classWombat_1_1Mama.html#function-startbackground). The onStartComplete() method will be invoked if an error occurs calling [Mama::startBackground()](classWombat_1_1Mama.html#function-startbackground) or when [Mama::startBackground()](classWombat_1_1Mama.html#function-startbackground) exits normally in which case the status returned will be MAMA_STATUS_OK 

## Public Functions Documentation

### function ~MamaStartCallback

```cpp
inline virtual ~MamaStartCallback()
```


### function onStartComplete

```cpp
virtual void onStartComplete(
    MamaStatus status
) =0
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100