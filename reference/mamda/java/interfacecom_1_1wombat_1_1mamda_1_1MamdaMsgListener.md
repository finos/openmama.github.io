---
title: com::wombat::mamda::MamdaMsgListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaMsgListener



 [More...](#detailed-description)

Inherited by [com.wombat.mamda.MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html), [com.wombat.mamda.MamdaFundamentalListener](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html), [com.wombat.mamda.MamdaMultiParticipantManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html), [com.wombat.mamda.MamdaMultiSecurityManager](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html), [com.wombat.mamda.MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html), [com.wombat.mamda.MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html), [com.wombat.mamda.MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html), [com.wombat.mamda.MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html), [com.wombat.mamda.options.MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html), [com.wombat.mamda.orderbook.MamdaBookAtomicListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html), [com.wombat.mamda.orderbook.MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final MamaMsg msg, final short msgType) |

## Detailed Description

```java
class com::wombat::mamda::MamdaMsgListener;
```


[MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html) defines an interface for handling normal messages for a [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html). 

## Public Functions Documentation

### function onMsg

```java
void onMsg(
    final MamdaSubscription subscription,
    final MamaMsg msg,
    final short msgType
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) to which this listener was registered. 
  * **msg** The MamaMsg received by the underlying MAMA API and which resulted in this callback being invoked. 
  * **msgType** The message type. e.g. INITIAL, RECAP, UPDATE etc. 


**Reimplemented by**: [com::wombat::mamda::MamdaMultiSecurityManager::onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaMultiSecurityManager.html#function-onmsg), [com::wombat::mamda::MamdaMultiParticipantManager::onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaMultiParticipantManager.html#function-onmsg), [com::wombat::mamda::MamdaAuctionListener::onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-onmsg), [com::wombat::mamda::MamdaOrderImbalanceListener::onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-onmsg), [com::wombat::mamda::options::MamdaOptionChainListener::onMsg](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-onmsg), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::onMsg](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-onmsg), [com::wombat::mamda::MamdaFundamentalListener::onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-onmsg), [com::wombat::mamda::MamdaSecurityStatusListener::onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-onmsg), [com::wombat::mamda::orderbook::MamdaOrderBookListener::onMsg](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-onmsg), [com::wombat::mamda::MamdaQuoteListener::onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-onmsg), [com::wombat::mamda::MamdaTradeListener::onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-onmsg)


Invoked for each message received for the subscription to which the Listener is registered.


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100