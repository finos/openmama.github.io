---
title: Wombat::MamdaOrderBookCheckerHandler
summary: MamdaOrderBookCheckerHandler is an interface for applications that want to handle the results of the MamdaOrderBookChecker. Callback interfaces are provided for correct and erroneous checks. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookCheckerHandler



[MamdaOrderBookCheckerHandler]() is an interface for applications that want to handle the results of the [MamdaOrderBookChecker](classWombat_1_1MamdaOrderBookChecker.html). Callback interfaces are provided for correct and erroneous checks. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onSuccess](interfaceWombat_1_1MamdaOrderBookCheckerHandler.html#function-onsuccess)**([MamdaOrderBookCheckType](classWombat_1_1MamdaOrderBookCheckType.html) checkType)<br>Method invoked when a successful check is completed.  |
| void | **[onInconclusive](interfaceWombat_1_1MamdaOrderBookCheckerHandler.html#function-oninconclusive)**([MamdaOrderBookCheckType](classWombat_1_1MamdaOrderBookCheckType.html) checkType, string reason)<br>Method invoked when check is completed inconclusively. An attempt to check the order book may be inconclusive if the order book sequence numbers do not match up.  |
| void | **[onFailure](interfaceWombat_1_1MamdaOrderBookCheckerHandler.html#function-onfailure)**([MamdaOrderBookCheckType](classWombat_1_1MamdaOrderBookCheckType.html) checkType, string reason, MamaMsg msg, [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) realTimeBook, [MamdaOrderBook](classWombat_1_1MamdaOrderBook.html) checkBook)<br>Method invoked when a failed check is completed. The message provided, if non-NULL, is the one received for the snapshot or delta, depending upon the value of checkType.  |

## Public Functions Documentation

### function onSuccess

```csharp
void onSuccess(
    MamdaOrderBookCheckType checkType
)
```

Method invoked when a successful check is completed. 

**Parameters**: 

  * **checkType** Types of MamdaOrderBookChecks.


### function onInconclusive

```csharp
void onInconclusive(
    MamdaOrderBookCheckType checkType,
    string reason
)
```

Method invoked when check is completed inconclusively. An attempt to check the order book may be inconclusive if the order book sequence numbers do not match up. 

**Parameters**: 

  * **checkType** Types of MamdaOrderBookChecks.
  * **reason** Reason for the sequence numbers mismatch.


### function onFailure

```csharp
void onFailure(
    MamdaOrderBookCheckType checkType,
    string reason,
    MamaMsg msg,
    MamdaOrderBook realTimeBook,
    MamdaOrderBook checkBook
)
```

Method invoked when a failed check is completed. The message provided, if non-NULL, is the one received for the snapshot or delta, depending upon the value of checkType. 

**Parameters**: 

  * **checkType** Types of MamdaOrderBookChecks.
  * **reason** Reason for the failure.
  * **msg** The MamaMsg which caused failure.
  * **realTimeBook** The Real Time Order Book which is compared against.
  * **checkBook** The Aggregated Book which is compared.


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100