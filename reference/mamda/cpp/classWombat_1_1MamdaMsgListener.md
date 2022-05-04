---
title: Wombat::MamdaMsgListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaMsgListener



 [More...](#detailed-description)


`#include <MamdaMsgListener.h>`

Inherited by [Wombat::MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html), [Wombat::MamdaCurrencyListener](classWombat_1_1MamdaCurrencyListener.html), [Wombat::MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html), [Wombat::MamdaMultiParticipantManager](classWombat_1_1MamdaMultiParticipantManager.html), [Wombat::MamdaMultiSecurityManager](classWombat_1_1MamdaMultiSecurityManager.html), [Wombat::MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html), [Wombat::MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html), [Wombat::MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html), [Wombat::MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html), [Wombat::MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) =0 |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

## Detailed Description

```cpp
class Wombat::MamdaMsgListener;
```


[MamdaMsgListener](classWombat_1_1MamdaMsgListener.html) defines an interface for handling MAMA messages for a [MamdaSubscription](classWombat_1_1MamdaSubscription.html). 

## Public Functions Documentation

### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
) =0
```


**Reimplemented by**: [Wombat::MamdaMultiSecurityManager::onMsg](classWombat_1_1MamdaMultiSecurityManager.html#function-onmsg), [Wombat::MamdaMultiParticipantManager::onMsg](classWombat_1_1MamdaMultiParticipantManager.html#function-onmsg), [Wombat::MamdaCurrencyListener::onMsg](classWombat_1_1MamdaCurrencyListener.html#function-onmsg), [Wombat::MamdaAuctionListener::onMsg](classWombat_1_1MamdaAuctionListener.html#function-onmsg), [Wombat::MamdaPubStatusListener::onMsg](classWombat_1_1MamdaPubStatusListener.html#function-onmsg), [Wombat::MamdaFundamentalListener::onMsg](classWombat_1_1MamdaFundamentalListener.html#function-onmsg), [Wombat::MamdaSecStatusListener::onMsg](classWombat_1_1MamdaSecStatusListener.html#function-onmsg), [Wombat::MamdaOrderImbalanceListener::onMsg](classWombat_1_1MamdaOrderImbalanceListener.html#function-onmsg), [Wombat::MamdaQuoteListener::onMsg](classWombat_1_1MamdaQuoteListener.html#function-onmsg), [Wombat::MamdaTradeListener::onMsg](classWombat_1_1MamdaTradeListener.html#function-onmsg)


### function ~MamdaMsgListener

```cpp
inline virtual ~MamdaMsgListener()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100