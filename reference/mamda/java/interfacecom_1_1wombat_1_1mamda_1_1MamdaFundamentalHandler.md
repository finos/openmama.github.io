---
title: com::wombat::mamda::MamdaFundamentalHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaFundamentalHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onFundamentals](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentalHandler.html#function-onfundamentals)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaFundamentalListener](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html) listener, MamaMsg msg, [MamdaFundamentals](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html) fundas) |

## Detailed Description

```java
class com::wombat::mamda::MamdaFundamentalHandler;
```


[MamdaFundamentalHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentalHandler.html) is an interface for applications that want to have an easy way to access fundamental equity pricing/analysis attributes, indicators and ratios. The interface defines a single callback methods for for receiving updates on fundamental data. 

## Public Functions Documentation

### function onFundamentals

```java
void onFundamentals(
    MamdaSubscription subscription,
    MamdaFundamentalListener listener,
    MamaMsg msg,
    MamdaFundamentals fundas
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **fundas** Access to the fundamental details in the update. 


Access to data from updates containing fundamental data. Method invoked when one or more of the Fundamental fields have been updated by one of the following market data events:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* Generic update..


-------------------------------

Updated on 2023-03-31 at 15:30:33 +0100