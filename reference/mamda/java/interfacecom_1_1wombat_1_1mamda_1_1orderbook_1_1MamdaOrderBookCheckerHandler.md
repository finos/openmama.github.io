---
title: com::wombat::mamda::orderbook::MamdaOrderBookCheckerHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookCheckerHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSuccess](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckerHandler.html#function-onsuccess)**([MamdaOrderBookCheckType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckType.html) checkType, final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) realTimeBook) |
| void | **[onInconclusive](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckerHandler.html#function-oninconclusive)**([MamdaOrderBookCheckType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckType.html) checkType, final String reason) |
| void | **[onFailure](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckerHandler.html#function-onfailure)**([MamdaOrderBookCheckType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckType.html) checkType, final String reason, final MamaMsg msg, final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) realTimeBook, final [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) checkBook) |

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookCheckerHandler;
```


[MamdaOrderBookCheckerHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookCheckerHandler.html) is an interface for applications that want to handle the results of the [MamdaOrderBookChecker](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookChecker.html). Callback interfaces are provided for correct and erroneous checks. 

## Public Functions Documentation

### function onSuccess

```java
void onSuccess(
    MamdaOrderBookCheckType checkType,
    final MamdaOrderBook realTimeBook
)
```


**Parameters**: 

  * **checkType** Types of MamdaOrderBookChecks. 


Method invoked when a successful check is completed.


### function onInconclusive

```java
void onInconclusive(
    MamdaOrderBookCheckType checkType,
    final String reason
)
```


**Parameters**: 

  * **checkType** Types of MamdaOrderBookChecks. 
  * **reason** Reason for the sequence numbers mismatch. 


Method invoked when check is completed inconclusively. An attempt to check the order book may be inconclusive if the order book sequence numbers do not match up.


### function onFailure

```java
void onFailure(
    MamdaOrderBookCheckType checkType,
    final String reason,
    final MamaMsg msg,
    final MamdaOrderBook realTimeBook,
    final MamdaOrderBook checkBook
)
```


**Parameters**: 

  * **checkType** Types of MamdaOrderBookChecks. 
  * **reason** Reason for the failure. 
  * **msg** The MamaMsg which caused failure. 
  * **realTimeBook** The Real Time Order Book which is compared against. 
  * **checkBook** The Aggregated Book which is compared. 


Method invoked when a failed check is completed. The message provided, if non-NULL, is the one received for the snapshot or delta, depending upon the value of checkType.


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100