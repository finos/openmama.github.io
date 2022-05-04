---
title: Wombat::MamdaOptionChainView::UnderlyingTradeHandler
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionChainView::UnderlyingTradeHandler





Inherits from [Wombat.MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[onTradeRecap](classWombat_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontraderecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeReport](classWombat_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradereport)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeReport](interfaceWombat_1_1MamdaTradeReport.html) trade, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeGap](classWombat_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradegap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeGap](interfaceWombat_1_1MamdaTradeGap.html) gapEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCancelOrError](classWombat_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradecancelorerror)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeCancelOrError](interfaceWombat_1_1MamdaTradeCancelOrError.html) cancelEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeCorrection](classWombat_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradecorrection)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeCorrection](interfaceWombat_1_1MamdaTradeCorrection.html) correctionEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap) |
| void | **[onTradeClosing](classWombat_1_1MamdaOptionChainView_1_1UnderlyingTradeHandler.html#function-ontradeclosing)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) sub, [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) listener, MamaMsg msg, [MamdaTradeClosing](interfaceWombat_1_1MamdaTradeClosing.html) closingEvent, [MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html) recap) |

## Public Functions Documentation

### function onTradeRecap

```csharp
void onTradeRecap(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeRecap recap
)
```


### function onTradeReport

```csharp
void onTradeReport(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeReport trade,
    MamdaTradeRecap recap
)
```


### function onTradeGap

```csharp
void onTradeGap(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeGap gapEvent,
    MamdaTradeRecap recap
)
```


### function onTradeCancelOrError

```csharp
void onTradeCancelOrError(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeCancelOrError cancelEvent,
    MamdaTradeRecap recap
)
```


### function onTradeCorrection

```csharp
void onTradeCorrection(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeCorrection correctionEvent,
    MamdaTradeRecap recap
)
```


### function onTradeClosing

```csharp
void onTradeClosing(
    MamdaSubscription sub,
    MamdaTradeListener listener,
    MamaMsg msg,
    MamdaTradeClosing closingEvent,
    MamdaTradeRecap recap
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100