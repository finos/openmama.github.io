---
title: com::wombat::mamda::examples::MamdaOptionChainExample::OptionChainDisplay
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaOptionChainExample::OptionChainDisplay





Inherits from [com.wombat.mamda.options.MamdaOptionChainHandler](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[OptionChainDisplay](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-optionchaindisplay)**([MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionChainRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-onoptionchainrecap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionSeriesUpdate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-onoptionseriesupdate)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html) event, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionChainGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-onoptionchaingap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionContractCreate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-onoptioncontractcreate)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |
| void | **[printChain](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-printchain)**([MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[printContract](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-printcontract)**([MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract) |
| void | **[printlnContract](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainExample_1_1OptionChainDisplay.html#function-printlncontract)**([MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract) |

## Public Functions Documentation

### function OptionChainDisplay

```java
inline OptionChainDisplay(
    MamdaOptionChain chain
)
```


### function onOptionChainRecap

```java
inline void onOptionChainRecap(
    final MamdaSubscription subscription,
    final MamdaOptionChainListener listener,
    final MamaMsg msg,
    final MamdaOptionChain chain
)
```


### function onOptionSeriesUpdate

```java
inline void onOptionSeriesUpdate(
    final MamdaSubscription subscription,
    final MamdaOptionChainListener listener,
    final MamaMsg msg,
    final MamdaOptionSeriesUpdate event,
    final MamdaOptionChain chain
)
```


### function onOptionChainGap

```java
inline void onOptionChainGap(
    final MamdaSubscription subscription,
    final MamdaOptionChainListener listener,
    final MamaMsg msg,
    final MamdaOptionChain chain
)
```


### function onOptionContractCreate

```java
inline void onOptionContractCreate(
    final MamdaSubscription subscription,
    final MamdaOptionChainListener listener,
    final MamaMsg msg,
    final MamdaOptionContract contract,
    final MamdaOptionChain chain
)
```


### function onStale

```java
inline void onStale(
    MamdaSubscription subscription,
    short quality
)
```


### function onError

```java
inline void onError(
    MamdaSubscription subscription,
    short severity,
    short errorCode,
    String errorStr
)
```


### function printChain

```java
inline void printChain(
    MamdaOptionChain chain
)
```


### function printContract

```java
inline void printContract(
    MamdaOptionContract contract
)
```


### function printlnContract

```java
inline void printlnContract(
    MamdaOptionContract contract
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100