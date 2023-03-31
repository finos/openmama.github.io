---
title: Wombat::MamdaTradeHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeHandler



 [More...](#detailed-description)


`#include <MamdaTradeHandler.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[onTradeRecap](classWombat_1_1MamdaTradeHandler.html#function-ontraderecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) & listener, const MamaMsg & msg, const [MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) & recap) =0 |
| virtual void | **[onTradeReport](classWombat_1_1MamdaTradeHandler.html#function-ontradereport)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) & listener, const MamaMsg & msg, const [MamdaTradeReport](classWombat_1_1MamdaTradeReport.html) & event, const [MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) & recap) =0 |
| virtual void | **[onTradeGap](classWombat_1_1MamdaTradeHandler.html#function-ontradegap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) & listener, const MamaMsg & msg, const [MamdaTradeGap](classWombat_1_1MamdaTradeGap.html) & event, const [MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) & recap) =0 |
| virtual void | **[onTradeCancelOrError](classWombat_1_1MamdaTradeHandler.html#function-ontradecancelorerror)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) & listener, const MamaMsg & msg, const [MamdaTradeCancelOrError](classWombat_1_1MamdaTradeCancelOrError.html) & event, const [MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) & recap) =0 |
| virtual void | **[onTradeCorrection](classWombat_1_1MamdaTradeHandler.html#function-ontradecorrection)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) & listener, const MamaMsg & msg, const [MamdaTradeCorrection](classWombat_1_1MamdaTradeCorrection.html) & event, const [MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) & recap) =0 |
| virtual void | **[onTradeClosing](classWombat_1_1MamdaTradeHandler.html#function-ontradeclosing)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) & listener, const MamaMsg & msg, const [MamdaTradeClosing](classWombat_1_1MamdaTradeClosing.html) & event, const [MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) & recap) =0 |
| virtual void | **[onTradeOutOfSequence](classWombat_1_1MamdaTradeHandler.html#function-ontradeoutofsequence)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) & listener, const MamaMsg & msg, const [MamdaTradeOutOfSequence](classWombat_1_1MamdaTradeOutOfSequence.html) & event, const [MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) & recap) =0 |
| virtual void | **[onTradePossiblyDuplicate](classWombat_1_1MamdaTradeHandler.html#function-ontradepossiblyduplicate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) & listener, const MamaMsg & msg, const [MamdaTradePossiblyDuplicate](classWombat_1_1MamdaTradePossiblyDuplicate.html) & event, const [MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) & recap) =0 |
| virtual | **[~MamdaTradeHandler](classWombat_1_1MamdaTradeHandler.html#function-~mamdatradehandler)**() |

## Detailed Description

```cpp
class Wombat::MamdaTradeHandler;
```


[MamdaTradeHandler](classWombat_1_1MamdaTradeHandler.html) is an interface for applications that want to have an easy way to handle trade updates. The interface defines callback methods for different types of trade-related events: trades, errors/cancels, corrections, recaps and closing reports. 

## Public Functions Documentation

### function onTradeRecap

```cpp
virtual void onTradeRecap(
    MamdaSubscription * subscription,
    MamdaTradeListener & listener,
    const MamaMsg & msg,
    const MamdaTradeRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked the callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **recap** Access to the details in the trade recap. 


Method invoked when the current last-trade information for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onTradeReport

```cpp
virtual void onTradeReport(
    MamdaSubscription * subscription,
    MamdaTradeListener & listener,
    const MamaMsg & msg,
    const MamdaTradeReport & event,
    const MamdaTradeRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received this update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the trade report event details. 
  * **recap** Access to all trade related fields. 


Method invoked when a trade is reported.


### function onTradeGap

```cpp
virtual void onTradeGap(
    MamdaSubscription * subscription,
    MamdaTradeListener & listener,
    const MamaMsg & msg,
    const MamdaTradeGap & event,
    const MamdaTradeRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which detected the gap. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg which triggered this invocation. 
  * **event** Access to the gap event details. 
  * **recap** Access to the complete trade information. 


Method invoked when a gap in trade reports is discovered.


### function onTradeCancelOrError

```cpp
virtual void onTradeCancelOrError(
    MamdaSubscription * subscription,
    MamdaTradeListener & listener,
    const MamaMsg & msg,
    const MamdaTradeCancelOrError & event,
    const MamdaTradeRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the details of the trade cancel or error event. 
  * **recap** Access to the full trade details. 


Method invoked when a trade cancel or error is reported.


### function onTradeCorrection

```cpp
virtual void onTradeCorrection(
    MamdaSubscription * subscription,
    MamdaTradeListener & listener,
    const MamaMsg & msg,
    const MamdaTradeCorrection & event,
    const MamdaTradeRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the trade correction event details. 
  * **recap** Access to the full trade details. 


Method invoked when a trade correction is reported.


### function onTradeClosing

```cpp
virtual void onTradeClosing(
    MamdaSubscription * subscription,
    MamdaTradeListener & listener,
    const MamaMsg & msg,
    const MamdaTradeClosing & event,
    const MamdaTradeRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the trade closing event details. 
  * **recap** Access to the full trade details. 


Method invoked for a closing report.


### function onTradeOutOfSequence

```cpp
virtual void onTradeOutOfSequence(
    MamdaSubscription * subscription,
    MamdaTradeListener & listener,
    const MamaMsg & msg,
    const MamdaTradeOutOfSequence & event,
    const MamdaTradeRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The trade listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Details on the out of sequence trade event. 
  * **recap** Access to the full trade details. 


Method invoked for a message marked as out of sequence. Listener must be configured to check the Msg Qualifier, i.e., call `setControlProcessingByMsgQual()` on listener passing a value of true;


### function onTradePossiblyDuplicate

```cpp
virtual void onTradePossiblyDuplicate(
    MamdaSubscription * subscription,
    MamdaTradeListener & listener,
    const MamaMsg & msg,
    const MamdaTradePossiblyDuplicate & event,
    const MamdaTradeRecap & recap
) =0
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The trade listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Details on the possibly duplicate trade event. 
  * **recap** Access to the full trade details. 


Method invoked for a message which is marked as possibly duplicate Listener must be configured to check the Msg Qualifier, i.e., call `setControlProcessingByMsgQual` on listener passing a value of true;


### function ~MamdaTradeHandler

```cpp
inline virtual ~MamdaTradeHandler()
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100