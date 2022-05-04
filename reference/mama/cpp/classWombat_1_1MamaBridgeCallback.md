---
title: Wombat::MamaBridgeCallback
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamaBridgeCallback



 [More...](#detailed-description)


`#include <MamaBridgeCallback.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamaBridgeCallback](classWombat_1_1MamaBridgeCallback.html#function-~mamabridgecallback)**() |
| virtual void | **[onBridgeInfo](classWombat_1_1MamaBridgeCallback.html#function-onbridgeinfo)**(mamaBridge bridgeImpl, const char * message) |

## Detailed Description

```cpp
class Wombat::MamaBridgeCallback;
```


Bridge callback. 

## Public Functions Documentation

### function ~MamaBridgeCallback

```cpp
inline virtual ~MamaBridgeCallback()
```


### function onBridgeInfo

```cpp
inline virtual void onBridgeInfo(
    mamaBridge bridgeImpl,
    const char * message
)
```


**Parameters**: 

  * **bridge** The bridge which the message relates to. 
  * **message** The message. 


Invoked when an info message is generated at the bridge level. Currently only available in LBM.


-------------------------------

Updated on 2022-05-04 at 07:54:06 +0100