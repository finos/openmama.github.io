---
title: Wombat::MamdaAuctionHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionHandler



 [More...](#detailed-description)


`#include <MamdaAuctionHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onAuctionRecap](classWombat_1_1MamdaAuctionHandler.html#function-onauctionrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) & listener, const MamaMsg & msg, const [MamdaAuctionRecap](classWombat_1_1MamdaAuctionRecap.html) & recap) =0 |
| virtual void | **[onAuctionUpdate](classWombat_1_1MamdaAuctionHandler.html#function-onauctionupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) & listener, const MamaMsg & msg, const [MamdaAuctionRecap](classWombat_1_1MamdaAuctionRecap.html) & recap, const [MamdaAuctionUpdate](classWombat_1_1MamdaAuctionUpdate.html) & update) =0 |
| virtual | **[~MamdaAuctionHandler](classWombat_1_1MamdaAuctionHandler.html#function-~mamdaauctionhandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaAuctionHandler;
```


[MamdaAuctionHandler](classWombat_1_1MamdaAuctionHandler.html) is an interface for applications that want to have an easy way to access currency data. The interface defines callback methods for for receiving updates on currency data. 

## Public Functions Documentation

### function onAuctionRecap

```cpp
virtual void onAuctionRecap(
    MamdaSubscription * subscription,
    MamdaAuctionListener & listener,
    const MamaMsg & msg,
    const MamdaAuctionRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **recap** Access to the full auction recap details. 


Method invoked when the current auction information for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onAuctionUpdate

```cpp
virtual void onAuctionUpdate(
    MamdaSubscription * subscription,
    MamdaAuctionListener & listener,
    const MamaMsg & msg,
    const MamdaAuctionRecap & recap,
    const MamdaAuctionUpdate & update
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **recap** Access to the full auction recap details. 
  * **update** Access to the auction update details. 


Method invoked when one or more of the Auction fields have been updated by one of the following market data events:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* Generic update..


### function ~MamdaAuctionHandler

```cpp
inline virtual ~MamdaAuctionHandler()
```


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100