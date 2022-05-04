---
title: Wombat::MamdaOptionChainHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionChainHandler





Inherited by [Wombat.MamdaOptionChainView](classWombat_1_1MamdaOptionChainView.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onOptionChainRecap](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptionchainrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) chain)<br>Method invoked when an updated full option chain is available. The reason for the invocation may be any of the following:  |
| void | **[onOptionContractCreate](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) contract, [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) chain)<br>Method invoked when a new contract is created in the option chain. This method gets invoked exactly once for every option contract in the chain. The primary purpose of this method is to allow a user application to initialize any per-contract data as well to register handlers for trades and quotes.  |
| void | **[onOptionSeriesUpdate](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptionseriesupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionSeriesUpdate](interfaceWombat_1_1MamdaOptionSeriesUpdate.html) updateEvent, [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) chain)<br>Method invoked upon when a new contract is added to or removed from the option chain, excluding upon receipt of the initial value. This method is typically invoked for special events, such as when options are added intraday or when options expire. Note: [onOptionContractCreate()](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate) is also invoked when an option is added intraday.  |

## Public Functions Documentation

### function onOptionChainRecap

```csharp
void onOptionChainRecap(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionChain chain
)
```

Method invoked when an updated full option chain is available. The reason for the invocation may be any of the following: 

**Parameters**: 

  * **subscription** The subscription which received the udpate.
  * **listener** The listener which invoked the callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **chain** The full option chain.


**Reimplemented by**: [Wombat::MamdaOptionChainView::onOptionChainRecap](classWombat_1_1MamdaOptionChainView.html#function-onoptionchainrecap)




* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onOptionContractCreate

```csharp
void onOptionContractCreate(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionContract contract,
    MamdaOptionChain chain
)
```

Method invoked when a new contract is created in the option chain. This method gets invoked exactly once for every option contract in the chain. The primary purpose of this method is to allow a user application to initialize any per-contract data as well to register handlers for trades and quotes. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked the callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **contract** The newly created option contract.
  * **chain** The full option chain.


**Reimplemented by**: [Wombat::MamdaOptionChainView::onOptionContractCreate](classWombat_1_1MamdaOptionChainView.html#function-onoptioncontractcreate)


Note: This method differs from [onOptionSeriesUpdate()](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptionseriesupdate) as follows: [onOptionContractCreate()](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate) gets invoked every time a contract is added, even for the initial value; [onOptionSeriesUpdate()](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptionseriesupdate) is intended to report especially interesting events and is only invoked when a contract is added/removed after the initial value has been received. 


### function onOptionSeriesUpdate

```csharp
void onOptionSeriesUpdate(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionSeriesUpdate updateEvent,
    MamdaOptionChain chain
)
```

Method invoked upon when a new contract is added to or removed from the option chain, excluding upon receipt of the initial value. This method is typically invoked for special events, such as when options are added intraday or when options expire. Note: [onOptionContractCreate()](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate) is also invoked when an option is added intraday. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked the callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **updateEvent** Access to details from the option series update event.
  * **chain** The full option chain.


**Reimplemented by**: [Wombat::MamdaOptionChainView::onOptionSeriesUpdate](classWombat_1_1MamdaOptionChainView.html#function-onoptionseriesupdate)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100