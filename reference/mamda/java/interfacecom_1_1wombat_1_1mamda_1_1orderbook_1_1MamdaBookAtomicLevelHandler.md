---
title: com::wombat::mamda::orderbook::MamdaBookAtomicLevelHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaBookAtomicLevelHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookAtomicLevelRecap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelHandler.html#function-onbookatomiclevelrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |
| void | **[onBookAtomicLevelDelta](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelHandler.html#function-onbookatomicleveldelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html) level) |

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaBookAtomicLevelHandler;
```


[MamdaBookAtomicLevelHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelHandler.html) is an interface for applications that want to have an easy way to handle order book Price Level updates. The interface defines callback methods for different types of orderBook-related events: order book recaps and updates. 

## Public Functions Documentation

### function onBookAtomicLevelRecap

```java
void onBookAtomicLevelRecap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevel level
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The listener handling the recap. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **level** The Price Level recap. 


Method invoked when a full refresh of the order book for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onBookAtomicLevelDelta

```java
void onBookAtomicLevelDelta(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevel level
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The listener handling the update. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **level** The Price Level update. 


Method invoked when an order book delta is reported.


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100