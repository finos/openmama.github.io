---
title: Wombat::MamdaPubStatusHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaPubStatusHandler



 [More...](#detailed-description)


`#include <MamdaPubStatusHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onPubStatusUpdate](classWombat_1_1MamdaPubStatusHandler.html#function-onpubstatusupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html) & listener, const MamaMsg & msg) =0 |
| virtual | **[~MamdaPubStatusHandler](classWombat_1_1MamdaPubStatusHandler.html#function-~mamdapubstatushandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaPubStatusHandler;
```


[MamdaPubStatusHandler](classWombat_1_1MamdaPubStatusHandler.html) is an interface for applications that want to have an easy way to handle feed handler publisher status updates. 

 The interface defines callback methods for publisher status events: 

## Public Functions Documentation

### function onPubStatusUpdate

```cpp
virtual void onPubStatusUpdate(
    MamdaSubscription * subscription,
    MamdaPubStatusListener & listener,
    const MamaMsg & msg
) =0
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 


Method invoked when a quote is reported.


### function ~MamdaPubStatusHandler

```cpp
inline virtual ~MamdaPubStatusHandler()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100