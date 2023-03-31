---
title: Wombat::MamaSourceStateChangeCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaSourceStateChangeCallback



 [More...](#detailed-description)


`#include <MamaSourceStateChangeCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaSourceStateChangeCallback](classWombat_1_1MamaSourceStateChangeCallback.html#function-~mamasourcestatechangecallback)**(void ) |
| virtual void | **[onStateChanged](classWombat_1_1MamaSourceStateChangeCallback.html#function-onstatechanged)**([MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) & sourceGroup, [MamaSource](classWombat_1_1MamaSource.html) * topWeightSource) =0 |

## Detailed Description

```cpp
class Wombat::MamaSourceStateChangeCallback;
```


Applications can register with [MamaSourceGroup](classWombat_1_1MamaSourceGroup.html) to receive state change notifications when the state of sources within the group has changed. 

## Public Functions Documentation

### function ~MamaSourceStateChangeCallback

```cpp
inline virtual ~MamaSourceStateChangeCallback(
    void 
)
```


### function onStateChanged

```cpp
virtual void onStateChanged(
    MamaSourceGroup & sourceGroup,
    MamaSource * topWeightSource
) =0
```


**Parameters**: 

  * **sourceGroup** The source group notifying the applications. 
  * **topWeightSource** The top weight source in the group. Determined when _reevaluate() is called. 


State change callback 


-------------------------------

Updated on 2023-03-31 at 15:29:25 +0100