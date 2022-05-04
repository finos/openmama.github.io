---
title: Wombat::MamdaTradeHandler
summary: MamdaTradeHandler is an interface for applications that want to have an easy way to handle trade updates. The interface defines callback methods for different types of trade-related events: trades, errors/cancels, corrections, recaps and closing reports. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeHandler



[MamdaTradeHandler]() is an interface for applications that want to have an easy way to handle trade updates. The interface defines callback methods for different types of trade-related events: trades, errors/cancels, corrections, recaps and closing reports. 

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTradeRecap](interfaceWombat_1_1MamdaTradeHandler.html#function-ontraderecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap)<br>Method invoked when the current last-trade information for the security is available. The reason for the invocation may be any of the following:  |
| void | **[onTradeReport](interfaceWombat_1_1MamdaTradeHandler.html#function-ontradereport)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeReport](interfaceWombat_1_1MamdaTradeReport.html) reportEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap)<br>Method invoked when a trade is reported.  |
| void | **[onTradeGap](interfaceWombat_1_1MamdaTradeHandler.html#function-ontradegap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeGap](interfaceWombat_1_1MamdaTradeGap.html) gapEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap)<br>Method invoked when a gap in trade reports is discovered.  |
| void | **[onTradeCancelOrError](interfaceWombat_1_1MamdaTradeHandler.html#function-ontradecancelorerror)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeCancelOrError](interfaceWombat_1_1MamdaTradeCancelOrError.html) cancelOrErrorEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap)<br>Method invoked when a trade cancel or error is reported.  |
| void | **[onTradeCorrection](interfaceWombat_1_1MamdaTradeHandler.html#function-ontradecorrection)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeCorrection](interfaceWombat_1_1MamdaTradeCorrection.html) correctionEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap)<br>Method invoked when a trade correction is reported.  |
| void | **[onTradeClosing](interfaceWombat_1_1MamdaTradeHandler.html#function-ontradeclosing)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeClosing](interfaceWombat_1_1MamdaTradeClosing.html) closingEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap)<br>Method invoked for a closing report.  |

## Public Functions Documentation

### function onTradeRecap

```csharp
void onTradeRecap(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeRecap recap
)
```

Method invoked when the current last-trade information for the security is available. The reason for the invocation may be any of the following: 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **recap** Access to the trade fields in the recap update.




* Initial image.
* Recap update (e.g., after server fault tolerant event or data quality event.)
* After stale status removed.


### function onTradeReport

```csharp
void onTradeReport(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeReport reportEvent,
    MamdaTradeRecap recap
)
```

Method invoked when a trade is reported. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **reportEvent** Access to the trade data from the update.
  * **recap** Access to complete trade data.


### function onTradeGap

```csharp
void onTradeGap(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeGap gapEvent,
    MamdaTradeRecap recap
)
```

Method invoked when a gap in trade reports is discovered. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **gapEvent** Access to details from the trade gap event.
  * **recap** Access to complete trade data.


### function onTradeCancelOrError

```csharp
void onTradeCancelOrError(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeCancelOrError cancelOrErrorEvent,
    MamdaTradeRecap recap
)
```

Method invoked when a trade cancel or error is reported. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **cancelOrErrorEvent** Access to the details from the cancel/error event.
  * **recap** Access to complete trade data.


### function onTradeCorrection

```csharp
void onTradeCorrection(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeCorrection correctionEvent,
    MamdaTradeRecap recap
)
```

Method invoked when a trade correction is reported. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **correctionEvent** Access to the details from the trade correction event.
  * **recap** Access to complete trade data.


### function onTradeClosing

```csharp
void onTradeClosing(
    MamdaSubscription subscription,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeClosing closingEvent,
    MamdaTradeRecap recap
)
```

Method invoked for a closing report. 

**Parameters**: 

  * **subscription** The subscription which received the update.
  * **listener** The listener which invoked this callback.
  * **msg** The MamaMsg that triggered this invocation.
  * **closingEvent** Access to the details from the trade closing event.
  * **recap** Access to complete trade data.


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100