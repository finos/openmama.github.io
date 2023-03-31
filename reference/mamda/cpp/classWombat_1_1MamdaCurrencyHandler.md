---
title: Wombat::MamdaCurrencyHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaCurrencyHandler



 [More...](#detailed-description)


`#include <MamdaCurrencyHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onCurrencyRecap](classWombat_1_1MamdaCurrencyHandler.html#function-oncurrencyrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaCurrencyListener](classWombat_1_1MamdaCurrencyListener.html) & listener, const MamaMsg & msg, const [MamdaCurrencyRecap](classWombat_1_1MamdaCurrencyRecap.html) & recap) =0 |
| virtual void | **[onCurrencyUpdate](classWombat_1_1MamdaCurrencyHandler.html#function-oncurrencyupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaCurrencyListener](classWombat_1_1MamdaCurrencyListener.html) & listener, const MamaMsg & msg, const [MamdaCurrencyRecap](classWombat_1_1MamdaCurrencyRecap.html) & recap, const [MamdaCurrencyUpdate](classWombat_1_1MamdaCurrencyUpdate.html) & update) =0 |
| virtual | **[~MamdaCurrencyHandler](classWombat_1_1MamdaCurrencyHandler.html#function-~mamdacurrencyhandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaCurrencyHandler;
```


[MamdaCurrencyHandler](classWombat_1_1MamdaCurrencyHandler.html) is an interface for applications that want to have an easy way to access currency data. 

 The interface defines callback methods for for receiving updates on currency data. 

## Public Functions Documentation

### function onCurrencyRecap

```cpp
virtual void onCurrencyRecap(
    MamdaSubscription * subscription,
    MamdaCurrencyListener & listener,
    const MamaMsg & msg,
    const MamdaCurrencyRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **recap** Access to the full quote recap details. 


Method invoked when the current last-currecny information for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onCurrencyUpdate

```cpp
virtual void onCurrencyUpdate(
    MamdaSubscription * subscription,
    MamdaCurrencyListener & listener,
    const MamaMsg & msg,
    const MamdaCurrencyRecap & recap,
    const MamdaCurrencyUpdate & update
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **recap** The MamaMsg that triggered this invocation. 
  * **update** Access to the currency update details. 


Method invoked when one or more of the Currency fields have been updated by one of the following market data events:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* Generic update..


### function ~MamdaCurrencyHandler

```cpp
inline virtual ~MamdaCurrencyHandler()
```


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100