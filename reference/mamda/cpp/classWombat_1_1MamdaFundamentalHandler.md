---
title: Wombat::MamdaFundamentalHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFundamentalHandler



 [More...](#detailed-description)


`#include <MamdaFundamentalHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onFundamentals](classWombat_1_1MamdaFundamentalHandler.html#function-onfundamentals)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html) & listener, const MamaMsg & msg, const [MamdaFundamentals](classWombat_1_1MamdaFundamentals.html) & fundas) =0 |
| virtual | **[~MamdaFundamentalHandler](classWombat_1_1MamdaFundamentalHandler.html#function-~mamdafundamentalhandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaFundamentalHandler;
```


[MamdaFundamentalHandler](classWombat_1_1MamdaFundamentalHandler.html) is an interface for applications that want to have an easy way to access fundamental equity pricing/analysis attributes, indicators and ratios. The interface defines a single callback methods for for receiving updates on fundamental data. 

## Public Functions Documentation

### function onFundamentals

```cpp
virtual void onFundamentals(
    MamdaSubscription * subscription,
    MamdaFundamentalListener & listener,
    const MamaMsg & msg,
    const MamdaFundamentals & fundas
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **fundas** Access to the fundamental update details. 


Method invoked when one or more of the Fundamental fields have been updated by one of the following market data events:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* Generic update..


### function ~MamdaFundamentalHandler

```cpp
inline virtual ~MamdaFundamentalHandler()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100