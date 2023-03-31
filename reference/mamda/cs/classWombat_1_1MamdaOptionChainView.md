---
title: Wombat::MamdaOptionChainView
summary: A class that represents a "view" of a subset of an option chain. The view can be restricted to a percentage or number of strike prices around "the money" as well as to a maximum number of days into the future. The view will be adjusted to include strike prices within the range as the underlying price moves. This means that the range of strike prices will change over time. In order to avoid a "jitter" in the range of strike prices when the underlying price hovers right on the edge of a range boundary, the class also provides a "jitter margin" as some percentage of the underyling price (default is 0.5%). 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOptionChainView



A class that represents a "view" of a subset of an option chain. The view can be restricted to a percentage or number of strike prices around "the money" as well as to a maximum number of days into the future. The view will be adjusted to include strike prices within the range as the underlying price moves. This means that the range of strike prices will change over time. In order to avoid a "jitter" in the range of strike prices when the underlying price hovers right on the edge of a range boundary, the class also provides a "jitter margin" as some percentage of the underyling price (default is 0.5%). 

Inherits from [Wombat.MamdaOptionChainHandler](interfaceWombat_1_1MamdaOptionChainHandler.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOptionChainView](classWombat_1_1MamdaOptionChainView.html#function-mamdaoptionchainview)**([MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) chain)<br>Create a view on the given option chain. Multiple views are supported on any given option chain.  |
| string | **[getSymbol](classWombat_1_1MamdaOptionChainView.html#function-getsymbol)**()<br>Return the symbol for the option chain.  |
| void | **[setAtTheMoneyType](classWombat_1_1MamdaOptionChainView.html#function-setatthemoneytype)**(MamdaOptionAtTheMoneyCompareType atTheMoneyType)<br>Set how the underlying price ("at the money") is determined MamdaOptionAtTheMoneyCompareType  |
| void | **[setStrikeRangePercent](classWombat_1_1MamdaOptionChainView.html#function-setstrikerangepercent)**(double percentMargin)<br>Set the range of strike prices to be included in the view by percentage variation from the underlying price. The range of strike prices in the view will vary as the underlying varies. The "jitter margin" avoids switching between ranges too often.  |
| void | **[setStrikeRangeNumber](classWombat_1_1MamdaOptionChainView.html#function-setstrikerangenumber)**(int number)<br>Set the number of strike prices to be included in the view. The "jitter margin" avoids switching between ranges too often.  |
| void | **[setExpirationRangeDays](classWombat_1_1MamdaOptionChainView.html#function-setexpirationrangedays)**(int expirationDays)<br>Set the range of expiration dates to be included in the view by the maximum number of days until expiration. Note: a non-zero range overrides a specific number of expirations set by [setNumberOfExpirations()]().  |
| void | **[setNumberOfExpirations](classWombat_1_1MamdaOptionChainView.html#function-setnumberofexpirations)**(int numExpirations)<br>Set the number of expiration dates to be included in the view. Note: a non-zero range (set by [setExpirationRangeDays()](classWombat_1_1MamdaOptionChainView.html#function-setexpirationrangedays)) overrides a specific number of expirations.  |
| void | **[setJitterMargin](classWombat_1_1MamdaOptionChainView.html#function-setjittermargin)**(double percentMargin)<br>Set a "jitter margin" to avoid having the range jump between different strike prices when the underlying price hovers right on the edge of a range boundary. The underlying is allowed to fluctuate within the jitter margin without the range being reset. When the underlying moves beyond the jitter margin, the range is reset.  |
| bool | **[isVisible](classWombat_1_1MamdaOptionChainView.html#function-isvisible)**([MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) contract)<br>Return whether an option contract falls within this view's parameters.  |
| [Iterator](interfaceWombat_1_1Containers_1_1Iterator.html) | **[expirationIterator](classWombat_1_1MamdaOptionChainView.html#function-expirationiterator)**()<br>Return an Iterator over the set of expiration dates within the view. Each Iterator represents a [MamdaOptionExpirationStrikes]() object.  |
| void | **[onOptionChainRecap](classWombat_1_1MamdaOptionChainView.html#function-onoptionchainrecap)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) chain)<br>Handler option chain recaps and initial values.  |
| void | **[onOptionContractCreate](classWombat_1_1MamdaOptionChainView.html#function-onoptioncontractcreate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionContract](classWombat_1_1MamdaOptionContract.html) contract, [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) chain)<br>Handler for option chain structural updates.  |
| void | **[onOptionSeriesUpdate](classWombat_1_1MamdaOptionChainView.html#function-onoptionseriesupdate)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, [MamdaOptionChainListener](classWombat_1_1MamdaOptionChainListener.html) listener, MamaMsg msg, [MamdaOptionSeriesUpdate](interfaceWombat_1_1MamdaOptionSeriesUpdate.html) updateEvent, [MamdaOptionChain](classWombat_1_1MamdaOptionChain.html) chain)<br>Handler for option chain structural updates.  |

## Public Functions Documentation

### function MamdaOptionChainView

```csharp
MamdaOptionChainView(
    MamdaOptionChain chain
)
```

Create a view on the given option chain. Multiple views are supported on any given option chain. 

**Parameters**: 

  * **chain** 


### function getSymbol

```csharp
string getSymbol()
```

Return the symbol for the option chain. 

**Return**: 

### function setAtTheMoneyType

```csharp
void setAtTheMoneyType(
    MamdaOptionAtTheMoneyCompareType atTheMoneyType
)
```

Set how the underlying price ("at the money") is determined MamdaOptionAtTheMoneyCompareType 

**Parameters**: 

  * **atTheMoneyType** 


### function setStrikeRangePercent

```csharp
void setStrikeRangePercent(
    double percentMargin
)
```

Set the range of strike prices to be included in the view by percentage variation from the underlying price. The range of strike prices in the view will vary as the underlying varies. The "jitter margin" avoids switching between ranges too often. 

**Parameters**: 

  * **percentMargin** 


### function setStrikeRangeNumber

```csharp
void setStrikeRangeNumber(
    int number
)
```

Set the number of strike prices to be included in the view. The "jitter margin" avoids switching between ranges too often. 

**Parameters**: 

  * **number** 


### function setExpirationRangeDays

```csharp
void setExpirationRangeDays(
    int expirationDays
)
```

Set the range of expiration dates to be included in the view by the maximum number of days until expiration. Note: a non-zero range overrides a specific number of expirations set by [setNumberOfExpirations()](). 

**Parameters**: 

  * **expirationDays** 


### function setNumberOfExpirations

```csharp
void setNumberOfExpirations(
    int numExpirations
)
```

Set the number of expiration dates to be included in the view. Note: a non-zero range (set by [setExpirationRangeDays()](classWombat_1_1MamdaOptionChainView.html#function-setexpirationrangedays)) overrides a specific number of expirations. 

**Parameters**: 

  * **numExpirations** 


### function setJitterMargin

```csharp
void setJitterMargin(
    double percentMargin
)
```

Set a "jitter margin" to avoid having the range jump between different strike prices when the underlying price hovers right on the edge of a range boundary. The underlying is allowed to fluctuate within the jitter margin without the range being reset. When the underlying moves beyond the jitter margin, the range is reset. 

**Parameters**: 

  * **percentMargin** 


### function isVisible

```csharp
bool isVisible(
    MamdaOptionContract contract
)
```

Return whether an option contract falls within this view's parameters. 

**Parameters**: 

  * **contract** 


**Return**: 

### function expirationIterator

```csharp
Iterator expirationIterator()
```

Return an Iterator over the set of expiration dates within the view. Each Iterator represents a [MamdaOptionExpirationStrikes]() object. 

**Return**: 

### function onOptionChainRecap

```csharp
void onOptionChainRecap(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionChain chain
)
```

Handler option chain recaps and initial values. 

**Parameters**: 

  * **subscription** 
  * **listener** 
  * **msg** 
  * **chain** 


**Reimplements**: [Wombat::MamdaOptionChainHandler::onOptionChainRecap](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptionchainrecap)


### function onOptionContractCreate

```csharp
void onOptionContractCreate(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionContract contract,
    MamdaOptionChain chain
)
```

Handler for option chain structural updates. 

**Parameters**: 

  * **subscription** 
  * **listener** 
  * **msg** 
  * **contract** 
  * **chain** 


**Reimplements**: [Wombat::MamdaOptionChainHandler::onOptionContractCreate](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptioncontractcreate)


### function onOptionSeriesUpdate

```csharp
void onOptionSeriesUpdate(
    MamdaSubscription subscription,
    MamdaOptionChainListener listener,
    MamaMsg msg,
    MamdaOptionSeriesUpdate updateEvent,
    MamdaOptionChain chain
)
```

Handler for option chain structural updates. 

**Parameters**: 

  * **subscription** 
  * **listener** 
  * **msg** 
  * **updateEvent** 
  * **chain** 


**Reimplements**: [Wombat::MamdaOptionChainHandler::onOptionSeriesUpdate](interfaceWombat_1_1MamdaOptionChainHandler.html#function-onoptionseriesupdate)


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100