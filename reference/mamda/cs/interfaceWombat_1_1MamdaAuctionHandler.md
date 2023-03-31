---
title: Wombat::MamdaAuctionHandler
summary: MamdaAuctionHandler is an interface for applications that want to have an easy way to handle Auction updates. The interface defines callback methods for different types of Auction-related events: 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionHandler



[MamdaAuctionHandler]() is an interface for applications that want to have an easy way to handle Auction updates. The interface defines callback methods for different types of Auction-related events: 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onAuctionRecap](interfaceWombat_1_1MamdaAuctionHandler.html#function-onauctionrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) listener, MamaMsg msg, [MamdaAuctionRecap](interfaceWombat_1_1MamdaAuctionRecap.html) recap)<br>Method invoked when the current last-Auction information for the security is available. The reason for the invocation may be any of the following:  |
| void | **[onAuctionUpdate](interfaceWombat_1_1MamdaAuctionHandler.html#function-onauctionupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) listener, MamaMsg msg, [MamdaAuctionUpdate](interfaceWombat_1_1MamdaAuctionUpdate.html) update, [MamdaAuctionRecap](interfaceWombat_1_1MamdaAuctionRecap.html) recap)<br>Method invoked when a Auction update arrives.  |

## Public Functions Documentation

### function onAuctionRecap

```csharp
void onAuctionRecap(
    MamdaSubscription subscription,
    MamdaAuctionListener listener,
    MamaMsg msg,
    MamdaAuctionRecap recap
)
```

Method invoked when the current last-Auction information for the security is available. The reason for the invocation may be any of the following: 

**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) reference.
  * **listener** The [MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) reference.
  * **msg** The MamaMsg that triggered this invocation.
  * **recap** Access to the current value of all fields.




* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onAuctionUpdate

```csharp
void onAuctionUpdate(
    MamdaSubscription subscription,
    MamdaAuctionListener listener,
    MamaMsg msg,
    MamdaAuctionUpdate update,
    MamdaAuctionRecap recap
)
```

Method invoked when a Auction update arrives. 

**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) reference.
  * **listener** The [MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) reference.
  * **msg** The MamaMsg that triggered this invocation.
  * **update** The [MamdaAuctionUpdate](interfaceWombat_1_1MamdaAuctionUpdate.html) event.
  * **recap** Access to the current value of all fields.


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100