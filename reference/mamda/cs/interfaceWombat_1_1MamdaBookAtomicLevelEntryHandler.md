---
title: Wombat::MamdaBookAtomicLevelEntryHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBookAtomicLevelEntryHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookAtomicLevelEntryRecap](interfaceWombat_1_1MamdaBookAtomicLevelEntryHandler.html#function-onbookatomiclevelentryrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevelEntry](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html) levelEntry)<br>Method invoked when a full refresh of the order book for the security is available. The reason for the invocation may be any of the following:  |
| void | **[onBookAtomicLevelEntryDelta](interfaceWombat_1_1MamdaBookAtomicLevelEntryHandler.html#function-onbookatomiclevelentrydelta)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevelEntry](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html) levelEntry) |

## Detailed Description

```csharp
class Wombat::MamdaBookAtomicLevelEntryHandler;
```


[MamdaBookAtomicLevelEntryHandler](interfaceWombat_1_1MamdaBookAtomicLevelEntryHandler.html) is an interface for applications that want to have an easy way to handle order book Price Level and Entry updates. The interface defines callback methods for different types of orderBook-related events: order book recaps and updates. 

## Public Functions Documentation

### function onBookAtomicLevelEntryRecap

```csharp
void onBookAtomicLevelEntryRecap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevelEntry levelEntry
)
```

Method invoked when a full refresh of the order book for the security is available. The reason for the invocation may be any of the following: 



* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed. 


 param name = "subscription">

//The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. param name = "listener">

//The listener handling the recap. param name = "msg">

//The MamaMsg that triggered this invocation. param name = "levelEntry">

//The Price Level Entry recap. summary> Method invoked when an order book delta is reported. 



 param name = "subscription">

//The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. param name = "listener">

//The listener handling the recap. param name = "msg">

//The MamaMsg that triggered this invocation. param name = "levelEntry">

//The Price Level Entry update. 


### function onBookAtomicLevelEntryDelta

```csharp
void onBookAtomicLevelEntryDelta(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevelEntry levelEntry
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100