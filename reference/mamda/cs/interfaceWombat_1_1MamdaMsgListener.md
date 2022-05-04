---
title: Wombat::MamdaMsgListener
summary: MamdaMsgListener defines an interface for handling normal messages for a MamdaSubscription. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMsgListener



[MamdaMsgListener]() defines an interface for handling normal messages for a [MamdaSubscription](). 

Inherited by [Wombat.MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html), [Wombat.MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html), [Wombat.MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html), [Wombat.MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html), [Wombat.MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html), [Wombat.MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html), [Wombat.MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html), [Wombat.MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html), [Wombat.MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html), [Wombat.MamdaSecurityStatusListener](classWombat_1_1MamdaSecurityStatusListener.html), [Wombat.MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Invoked for each message received for the subscription to which the Listener is registered.  |

## Public Functions Documentation

### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```

Invoked for each message received for the subscription to which the Listener is registered. 

**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) to which this listener was registered.
  * **msg** The MamaMsg received by the underlying MAMA API and which resulted in this callback being invoked.
  * **msgType** The message type. e.g. INITIAL, RECAP, UPDATE etc.


**Reimplemented by**: [Wombat::MamdaOptionChainListener::onMsg](classWombat_1_1MamdaOptionChainListener.html#function-onmsg), [Wombat::MamdaMultiSecurityManager::onMsg](classWombat_1_1MamdaMultiSecurityManager.html#function-onmsg), [Wombat::MamdaMultiParticipantManager::onMsg](classWombat_1_1MamdaMultiParticipantManager.html#function-onmsg), [Wombat::MamdaAuctionListener::onMsg](classWombat_1_1MamdaAuctionListener.html#function-onmsg), [Wombat::MamdaBookAtomicListener::onMsg](classWombat_1_1MamdaBookAtomicListener.html#function-onmsg), [Wombat::MamdaFundamentalListener::onMsg](classWombat_1_1MamdaFundamentalListener.html#function-onmsg), [Wombat::MamdaOrderBookListener::onMsg](classWombat_1_1MamdaOrderBookListener.html#function-onmsg), [Wombat::MamdaSecurityStatusListener::onMsg](classWombat_1_1MamdaSecurityStatusListener.html#function-onmsg), [Wombat::MamdaOrderImbalanceListener::onMsg](classWombat_1_1MamdaOrderImbalanceListener.html#function-onmsg), [Wombat::MamdaQuoteListener::onMsg](classWombat_1_1MamdaQuoteListener.html#function-onmsg), [Wombat::MamdaTradeListener::onMsg](classWombat_1_1MamdaTradeListener.html#function-onmsg)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100