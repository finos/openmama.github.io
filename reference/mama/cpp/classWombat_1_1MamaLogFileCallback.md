---
title: Wombat::MamaLogFileCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaLogFileCallback



 [More...](#detailed-description)


`#include <mamacpp.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaLogFileCallback](classWombat_1_1MamaLogFileCallback.html#function-~mamalogfilecallback)**() |
| virtual void | **[onLogSizeExceeded](classWombat_1_1MamaLogFileCallback.html#function-onlogsizeexceeded)**() =0 |

## Detailed Description

```cpp
class Wombat::MamaLogFileCallback;
```


Subclass this to receive log notifications. 

## Public Functions Documentation

### function ~MamaLogFileCallback

```cpp
inline virtual ~MamaLogFileCallback()
```


### function onLogSizeExceeded

```cpp
virtual void onLogSizeExceeded() =0
```


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100