---
title: com::wombat::mamda::options::MamdaOptionChainHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionChainHandler





Inherited by [com.wombat.mamda.options.MamdaOptionChainView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onOptionChainRecap](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptionchainrecap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionContractCreate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptionseriesupdate)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html) event, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |

## Public Functions Documentation

### function onOptionChainRecap

```java
void onOptionChainRecap(
    final MamdaSubscription subscription,
    final MamdaOptionChainListener listener,
    final MamaMsg msg,
    final MamdaOptionChain chain
)
```


**Parameters**: 

  * **subscription** The subscription which received the udpate. 
  * **listener** The listener which invoked the callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **chain** The full option chain. 


**Reimplemented by**: [com::wombat::mamda::options::MamdaOptionChainView::onOptionChainRecap](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-onoptionchainrecap)


Method invoked when an updated full option chain is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onOptionContractCreate

```java
void onOptionContractCreate(
    final MamdaSubscription subscription,
    final MamdaOptionChainListener listener,
    final MamaMsg msg,
    final MamdaOptionContract contract,
    final MamdaOptionChain chain
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked the callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **contract** The newly created option contract. 
  * **chain** The full option chain. 


**Reimplemented by**: [com::wombat::mamda::options::MamdaOptionChainView::onOptionContractCreate](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-onoptioncontractcreate)


Method invoked when a new contract is created in the option chain. This method gets invoked exactly once for every option contract in the chain. The primary purpose of this method is to allow a user application to initialize any per-contract data as well to register handlers for trades and quotes. 
Note: This method differs from [onOptionSeriesUpdate()](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptionseriesupdate) as follows: [onOptionContractCreate()](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate) gets invoked every time a contract is added, even for the initial value; [onOptionSeriesUpdate()](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptionseriesupdate) is intended to report especially interesting events and is only invoked when a contract is added/removed after the initial value has been received.


### function onOptionSeriesUpdate

```java
void onOptionSeriesUpdate(
    final MamdaSubscription subscription,
    final MamdaOptionChainListener listener,
    final MamaMsg msg,
    final MamdaOptionSeriesUpdate event,
    final MamdaOptionChain chain
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked the callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to details from the option series update event. 
  * **chain** The full option chain.


**See**: [onOptionContractCreate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate)

**Reimplemented by**: [com::wombat::mamda::options::MamdaOptionChainView::onOptionSeriesUpdate](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-onoptionseriesupdate)


Method invoked upon when a new contract is added to or removed from the option chain, excluding upon receipt of the initial value. This method is typically invoked inly for special events, such as when options are added intraday or when options expire. Note: [onOptionContractCreate()](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate) is also invoked when an option is added intraday.


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100