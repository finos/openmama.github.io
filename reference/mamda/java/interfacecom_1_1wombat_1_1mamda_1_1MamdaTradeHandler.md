---
title: com::wombat::mamda::MamdaTradeHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaTradeHandler



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html#function-ontraderecap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html#function-ontradereport)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html#function-ontradegap)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCancelOrError](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html#function-ontradecancelorerror)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeCancelOrError](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCorrection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html#function-ontradecorrection)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeCorrection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html#function-ontradeclosing)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html) event, [MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html) recap) |

## Detailed Description

```java
class com::wombat::mamda::MamdaTradeHandler;
```


[MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) is an interface for applications that want to have an easy way to handle trade updates. The interface defines callback methods for different types of trade-related events: trades, errors/cancels, corrections, recaps and closing reports. 

## Public Functions Documentation

### function onTradeRecap

```java
void onTradeRecap(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeRecap recap
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **recap** Access to the trade fields in the recap update. 


Method invoked when the current last-trade information for the security is available. The reason for the invocation may be any of the following:

* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onTradeReport

```java
void onTradeReport(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeReport event,
    MamdaTradeRecap recap
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked the callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the trade data from the update. 
  * **recap** Access to complete trade data. 


Method invoked when a trade is reported.


### function onTradeGap

```java
void onTradeGap(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeGap event,
    MamdaTradeRecap recap
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to details from the trade gap event. 
  * **recap** Access to complete trade data. 


Method invoked when a gap in trade reports is discovered.


### function onTradeCancelOrError

```java
void onTradeCancelOrError(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeCancelOrError event,
    MamdaTradeRecap recap
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the details from the cancel/error event. 
  * **recap** Access to the complete trade data. 


Method invoked when a trade cancel or error is reported.


### function onTradeCorrection

```java
void onTradeCorrection(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeCorrection event,
    MamdaTradeRecap recap
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the details from the trade correction event. 
  * **recap** Access to the complete trade data. 


Method invoked when a trade correction is reported.


### function onTradeClosing

```java
void onTradeClosing(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeClosing event,
    MamdaTradeRecap recap
)
```


**Parameters**: 

  * **subscription** The subscription which received the update. 
  * **listener** The listener which invoked this callback. 
  * **msg** The MamaMsg that triggered this invocation. 
  * **event** Access to the details from the trade closing event. 
  * **recap** Access to the complete trade data. 


Method invoked for a closing report.


-------------------------------

Updated on 2023-03-31 at 15:30:35 +0100