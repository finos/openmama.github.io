---
title: com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntryHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntryHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookAtomicLevelEntryRecap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntryHandler.html#function-onbookatomiclevelentryrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |
| void | **[onBookAtomicLevelEntryDelta](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntryHandler.html#function-onbookatomiclevelentrydelta)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntryHandler;
```


[MamdaBookAtomicLevelEntryHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntryHandler.html) is an interface for applications that want to have an easy way to handle order book Price Level and Entry updates. The interface defines callback methods for different types of orderBook-related events: order book recaps and updates. 

## Public Functions Documentation

### function onBookAtomicLevelEntryRecap

```java
void onBookAtomicLevelEntryRecap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevelEntry levelEntry
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The listener handling the recap. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **levelEntry** The Price Level Entry recap. 


Method invoked when a full refresh of the order book for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onBookAtomicLevelEntryDelta

```java
void onBookAtomicLevelEntryDelta(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevelEntry levelEntry
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) handle. 
  * **listener** The listener handling the update. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **levelEntry** The Price Level Entry update. 


Method invoked when an order book delta is reported.


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100