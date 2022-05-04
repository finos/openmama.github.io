---
title: Wombat::MamaTimerCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaTimerCallback



 [More...](#detailed-description)


`#include <MamaTimerCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaTimerCallback](classWombat_1_1MamaTimerCallback.html#function-~mamatimercallback)**(void ) |
| virtual void | **[onTimer](classWombat_1_1MamaTimerCallback.html#function-ontimer)**([MamaTimer](classWombat_1_1MamaTimer.html) * timer) =0 |
| virtual void | **[onDestroy](classWombat_1_1MamaTimerCallback.html#function-ondestroy)**([MamaTimer](classWombat_1_1MamaTimer.html) * timer, void * closure) |

## Detailed Description

```cpp
class Wombat::MamaTimerCallback;
```


Subclass this to receive timer notifications. 

## Public Functions Documentation

### function ~MamaTimerCallback

```cpp
inline virtual ~MamaTimerCallback(
    void 
)
```


### function onTimer

```cpp
virtual void onTimer(
    MamaTimer * timer
) =0
```


### function onDestroy

```cpp
inline virtual void onDestroy(
    MamaTimer * timer,
    void * closure
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:07 +0100