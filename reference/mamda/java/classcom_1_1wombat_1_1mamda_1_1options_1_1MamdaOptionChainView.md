---
title: com::wombat::mamda::options::MamdaOptionChainView
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::options::MamdaOptionChainView



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.options.MamdaOptionChainHandler](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionChainView](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-mamdaoptionchainview)**([MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-getsymbol)**() |
| void | **[setAtTheMoneyType](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-setatthemoneytype)**(short atTheMoneyType) |
| void | **[setStrikeRangePercent](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-setstrikerangepercent)**(double percentMargin) |
| void | **[setStrikeRangeNumber](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-setstrikerangenumber)**(int number) |
| void | **[setExpirationRangeDays](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-setexpirationrangedays)**(int expirationDays) |
| void | **[setNumberOfExpirations](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-setnumberofexpirations)**(int numExpirations) |
| void | **[setJitterMargin](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-setjittermargin)**(double percentMargin) |
| boolean | **[isVisible](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-isvisible)**([MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract) |
| Iterator | **[expirationIterator](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-expirationiterator)**() |
| void | **[onOptionChainRecap](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-onoptionchainrecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionContractCreate](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-onoptioncontractcreate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionContract](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionContract.html) contract, [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |
| void | **[onOptionSeriesUpdate](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-onoptionseriesupdate)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html) event, [MamdaOptionChain](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChain.html) chain) |

## Detailed Description

```java
class com::wombat::mamda::options::MamdaOptionChainView;
```


A class that represents a "view" of a subset of an option chain. The view can be restricted to a percentage or number of strike prices around "the money" as well as to a maximum number of days into the future. The view will be adjusted to include strike prices within the range as the underlying price moves. This means that the range of strike prices will change over time. In order to avoid a "jitter" in the range of strike prices when the underlying price hovers right on the edge of a range boundary, the class also provides a "jitter margin" as some percentage of the underlying price (default is 0.5%). 

## Public Functions Documentation

### function MamdaOptionChainView

```java
inline MamdaOptionChainView(
    MamdaOptionChain chain
)
```


Create a view on the given option chain. Multiple views are supported on any given option chain. 


### function getSymbol

```java
inline String getSymbol()
```


Return the symbol for the option chain. 


### function setAtTheMoneyType

```java
inline void setAtTheMoneyType(
    short atTheMoneyType
)
```


**See**: [MamdaOptionAtTheMoneyCompareType](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionAtTheMoneyCompareType.html)). 

Set how the underlying price ("at the money") is determined (


### function setStrikeRangePercent

```java
inline void setStrikeRangePercent(
    double percentMargin
)
```


Set the range of strike prices to be included in the view by percentage variation from the underlying price. The range of strike prices in the view will vary as the underlying varies. The "jitter margin" avoids switching between ranges too often. 


### function setStrikeRangeNumber

```java
inline void setStrikeRangeNumber(
    int number
)
```


Set the number of strike prices to be included in the view. The "jitter margin" avoids switching between ranges too often. 


### function setExpirationRangeDays

```java
inline void setExpirationRangeDays(
    int expirationDays
)
```


Set the range of expiration dates to be included in the view by the maximum number of days until expiration. Note: a non-zero range overrides a specific number of expirations set by [setNumberOfExpirations()](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-setnumberofexpirations). 


### function setNumberOfExpirations

```java
inline void setNumberOfExpirations(
    int numExpirations
)
```


Set the number of expiration dates to be included in the view. Note: a non-zero range (set by [setExpirationRangeDays()](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainView.html#function-setexpirationrangedays)) overrides a specific number of expirations. 


### function setJitterMargin

```java
inline void setJitterMargin(
    double percentMargin
)
```


Set a "jitter margin" to avoid having the range jump between different strike prices when the underlying price hovers right on the edge of a range boundary. The underlying is allowed to fluctuate within the jitter margin without the range being reset. When the underlying moves beyond the jitter margin, the range is reset. 


### function isVisible

```java
inline boolean isVisible(
    MamdaOptionContract contract
)
```


Return whether an option contract falls within this view's parameters. 


### function expirationIterator

```java
inline Iterator expirationIterator()
```


Return an Iterator over the set of expiration dates within the view. Each Iterator represents a [MamdaOptionExpirationStrikes](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionExpirationStrikes.html) object. 


### function onOptionChainRecap

```java
inline void onOptionChainRecap(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionChain chain
)
```


**Reimplements**: [com::wombat::mamda::options::MamdaOptionChainHandler::onOptionChainRecap](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptionchainrecap)


Handler option chain recaps and initial values. 


### function onOptionContractCreate

```java
inline void onOptionContractCreate(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionContract contract,
    MamdaOptionChain chain
)
```


**Reimplements**: [com::wombat::mamda::options::MamdaOptionChainHandler::onOptionContractCreate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate)


Handler for option chain structural updates. 


### function onOptionSeriesUpdate

```java
inline void onOptionSeriesUpdate(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionSeriesUpdate event,
    MamdaOptionChain chain
)
```


**Reimplements**: [com::wombat::mamda::options::MamdaOptionChainHandler::onOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainHandler.html#function-onoptionseriesupdate)


Handler for option chain structural updates. 


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100