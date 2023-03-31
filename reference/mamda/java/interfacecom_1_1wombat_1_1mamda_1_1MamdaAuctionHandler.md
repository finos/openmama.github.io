---
title: com::wombat::mamda::MamdaAuctionHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaAuctionHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onAuctionRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionHandler.html#function-onauctionrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html) listener, MamaMsg msg, [MamdaAuctionRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html) recap) |
| void | **[onAuctionUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionHandler.html#function-onauctionupdate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html) listener, MamaMsg msg, [MamdaAuctionRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html) recap, [MamdaAuctionUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionUpdate.html) update) |

## Detailed Description

```java
class com::wombat::mamda::MamdaAuctionHandler;
```


[MamdaAuctionHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionHandler.html) is an interface for applications that want to have an easy way to handle auction updates. The interface defines callback methods for different types of auction-related events 

## Public Functions Documentation

### function onAuctionRecap

```java
void onAuctionRecap(
    MamdaSubscription subscription,
    MamdaAuctionListener listener,
    MamaMsg msg,
    MamdaAuctionRecap recap
)
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

```java
void onAuctionUpdate(
    MamdaSubscription subscription,
    MamdaAuctionListener listener,
    MamaMsg msg,
    MamdaAuctionRecap recap,
    MamdaAuctionUpdate update
)
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


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100