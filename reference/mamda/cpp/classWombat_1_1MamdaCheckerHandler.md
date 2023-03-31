---
title: Wombat::MamdaCheckerHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaCheckerHandler



 [More...](#detailed-description)


`#include <MamdaCheckerHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onSuccess](classWombat_1_1MamdaCheckerHandler.html#function-onsuccess)**(MamdaCheckerType checkType) =0 |
| virtual void | **[onInconclusive](classWombat_1_1MamdaCheckerHandler.html#function-oninconclusive)**(MamdaCheckerType checkType, const char * reason) =0 |
| virtual void | **[onFailure](classWombat_1_1MamdaCheckerHandler.html#function-onfailure)**(MamdaCheckerType checkType, const char * reason, const MamaMsg & msg) =0 |

## Detailed Description

```cpp
class Wombat::MamdaCheckerHandler;
```


[MamdaCheckerHandler](classWombat_1_1MamdaCheckerHandler.html) is an interface for applications that want to handle the results of the [MamdaQuoteChecker](classWombat_1_1MamdaQuoteChecker.html) and [MamdaTradeChecker](classWombat_1_1MamdaTradeChecker.html). Callback interfaces are provided for correct and erroneous checks. 

## Public Functions Documentation

### function onSuccess

```cpp
virtual void onSuccess(
    MamdaCheckerType checkType
) =0
```


Method invoked when a successful check is completed. 


### function onInconclusive

```cpp
virtual void onInconclusive(
    MamdaCheckerType checkType,
    const char * reason
) =0
```


Method invoked when check is completed inconclusively. An attempt to check the order book may be inconclusive if the order book sequence numbers do not match up. 


### function onFailure

```cpp
virtual void onFailure(
    MamdaCheckerType checkType,
    const char * reason,
    const MamaMsg & msg
) =0
```


Method invoked when a failed check is completed. The message provided, if non-NULL, is the one received for the snapshot or delta, depending upon the value of checkType. 


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100