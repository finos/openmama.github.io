---
title: Wombat::MamdaSecStatusHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecStatusHandler



 [More...](#detailed-description)


`#include <MamdaSecStatusHandler.h>`

Inherited by [Wombat::MamdaSecStatusSymbolSourceAdapter](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onSecStatusRecap](classWombat_1_1MamdaSecStatusHandler.html#function-onsecstatusrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html) & listener, const MamaMsg & msg, [MamdaSecStatusRecap](classWombat_1_1MamdaSecStatusRecap.html) & recap) =0 |
| virtual void | **[onSecStatusUpdate](classWombat_1_1MamdaSecStatusHandler.html#function-onsecstatusupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html) & listener, const MamaMsg & msg) =0 |
| virtual | **[~MamdaSecStatusHandler](classWombat_1_1MamdaSecStatusHandler.html#function-~mamdasecstatushandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaSecStatusHandler;
```


[MamdaSecStatusHandler](classWombat_1_1MamdaSecStatusHandler.html) is an interface for applications that want to have an easy way to handle security status updates. The interface defines callback methods for security status events: 

## Public Functions Documentation

### function onSecStatusRecap

```cpp
virtual void onSecStatusRecap(
    MamdaSubscription * subscription,
    MamdaSecStatusListener & listener,
    const MamaMsg & msg,
    MamdaSecStatusRecap & recap
) =0
```


**Reimplemented by**: [Wombat::MamdaSecStatusSymbolSourceAdapter::onSecStatusRecap](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-onsecstatusrecap)


### function onSecStatusUpdate

```cpp
virtual void onSecStatusUpdate(
    MamdaSubscription * subscription,
    MamdaSecStatusListener & listener,
    const MamaMsg & msg
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 


**Reimplemented by**: [Wombat::MamdaSecStatusSymbolSourceAdapter::onSecStatusUpdate](classWombat_1_1MamdaSecStatusSymbolSourceAdapter.html#function-onsecstatusupdate)


Method invoked when a security status update is received.


### function ~MamdaSecStatusHandler

```cpp
inline virtual ~MamdaSecStatusHandler()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100