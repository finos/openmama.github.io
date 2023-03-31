---
title: com::wombat::mamda::examples::MamdaOptionChainViewExample::OptionChainDisplay
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::examples::MamdaOptionChainViewExample::OptionChainDisplay





Inherits from [com.wombat.mamda.options.MamdaOptionChainHandler](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html), [com.wombat.mamda.MamdaStaleListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaStaleListener.html), [com.wombat.mamda.MamdaErrorListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaErrorListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[OptionChainDisplay](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-optionchaindisplay)**([MamdaOptionChainView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html) view) |
| void | **[onOptionChainRecap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-onoptionchainrecap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionSeriesUpdate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-onoptionseriesupdate)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html) event, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionChainGap](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-onoptionchaingap)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionContractCreate](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-onoptioncontractcreate)**(final [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, final MamaMsg msg, final [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract, final [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onStale](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-onstale)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short quality) |
| void | **[onError](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-onerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, short severity, short errorCode, String errorStr) |
| void | **[printView](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-printview)**() |
| void | **[printExpireStrikes](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-printexpirestrikes)**(final [MamdaOptionExpirationStrikes](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationStrikes.html) expireStrikes) |
| void | **[printContractSet](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-printcontractset)**(final [MamdaOptionContractSet](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContractSet.html) contractSet, final String putCallStr) |
| void | **[printContract](classcom_1_1wombat_1_1mamda_1_1examples_1_1MamdaOptionChainViewExample_1_1OptionChainDisplay.html#function-printcontract)**(final [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract) |

## Public Functions Documentation

### function OptionChainDisplay

```java
inline OptionChainDisplay(
    MamdaOptionChainView view
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


### function printView

```java
inline void printView()
```


### function printExpireStrikes

```java
inline void printExpireStrikes(
    final MamdaOptionExpirationStrikes expireStrikes
)
```


### function printContractSet

```java
inline void printContractSet(
    final MamdaOptionContractSet contractSet,
    final String putCallStr
)
```


### function printContract

```java
inline void printContract(
    final MamdaOptionContract contract
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:37 +0100