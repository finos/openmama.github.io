---
title: Wombat::MamdaBookAtomicLevelHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBookAtomicLevelHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onBookAtomicLevelRecap](interfaceWombat_1_1MamdaBookAtomicLevelHandler.html#function-onbookatomiclevelrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevel](interfaceWombat_1_1MamdaBookAtomicLevel.html) level)<br>Method invoked when a full refresh of the order book for the security is available. The reason for the invocation may be any of the following:  |
| void | **[onBookAtomicLevelDelta](interfaceWombat_1_1MamdaBookAtomicLevelHandler.html#function-onbookatomicleveldelta)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html) listener, MamaMsg msg, [MamdaBookAtomicLevel](interfaceWombat_1_1MamdaBookAtomicLevel.html) level) |

## Detailed Description

```csharp
class Wombat::MamdaBookAtomicLevelHandler;
```


[MamdaBookAtomicLevelHandler](interfaceWombat_1_1MamdaBookAtomicLevelHandler.html) is an interface for applications that want to have an easy way to handle order book Price Level updates. The interface defines callback methods for different types of orderBook-related events: order book recaps and updates. 

## Public Functions Documentation

### function onBookAtomicLevelRecap

```csharp
void onBookAtomicLevelRecap(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevel level
)
```

Method invoked when a full refresh of the order book for the security is available. The reason for the invocation may be any of the following: 



* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed. 
param name = "subscription">

//The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. param name = "listener">

//The listener handling the recap. param name = "msg">

//The MamaMsg that triggered this invocation. param name = "level">

//The Price Level recap. summary> Method invoked when an order book delta is reported. 

param name = "subscription">

//The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) handle. param name = "listener">

//The listener handling the recap. param name = "msg">

//The MamaMsg that triggered this invocation. param name = "level">

//The Price Level update. 


### function onBookAtomicLevelDelta

```csharp
void onBookAtomicLevelDelta(
    MamdaSubscription subscription,
    MamdaBookAtomicListener listener,
    MamaMsg msg,
    MamdaBookAtomicLevel level
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100