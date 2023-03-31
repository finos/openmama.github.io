---
title: Wombat::MamdaFundamentalListener
summary: MamdaFundamentalListener is a class that specializes in handling fundamental equity pricing/analysis attributes, indicators and ratios. Developers provide their own implementation of the MamdaFundamentalHandler interface and will be delivered notifications for updates in the fundamental data. An obvious application for this MAMDA class is any kind of pricing analysis application. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFundamentalListener



[MamdaFundamentalListener]() is a class that specializes in handling fundamental equity pricing/analysis attributes, indicators and ratios. Developers provide their own implementation of the [MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html) interface and will be delivered notifications for updates in the fundamental data. An obvious application for this MAMDA class is any kind of pricing analysis application.  [More...](#detailed-description)

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaFundamentals](interfaceWombat_1_1MamdaFundamentals.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html#function-mamdafundamentallistener)**()<br>Create a specialized fundamental field listener.  |
| void | **[addHandler](classWombat_1_1MamdaFundamentalListener.html#function-addhandler)**([MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html) handler)<br>Add a specialized fundamentals handler.  |
| DateTime | **[getSrcTime](classWombat_1_1MamdaFundamentalListener.html#function-getsrctime)**() |
| DateTime | **[getActivityTime](classWombat_1_1MamdaFundamentalListener.html#function-getactivitytime)**() |
| string | **[getCorporateActionType](classWombat_1_1MamdaFundamentalListener.html#function-getcorporateactiontype)**()<br>Corporate Action Type.  |
| double | **[getDividendPrice](classWombat_1_1MamdaFundamentalListener.html#function-getdividendprice)**()<br>Dividend price.  |
| string | **[getDividendFrequency](classWombat_1_1MamdaFundamentalListener.html#function-getdividendfrequency)**()<br>Frequency of the dividend payments.  |
| string | **[getDividendExDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendexdate)**()<br>The date on or after which a security is traded without a previously declared dividend or distribution.  |
| string | **[getDividendPayDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpaydate)**()<br>Date on which corporate action distribution will be paid or effective.  |
| string | **[getDividendRecordDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendrecorddate)**()<br>This is the date on which all shareholders are considered a "holder of record" and ensured the right of a dividend or distribution.  |
| string | **[getDividendCurrency](classWombat_1_1MamdaFundamentalListener.html#function-getdividendcurrency)**()<br>Currency of dividend.  |
| long | **[getSharesOut](classWombat_1_1MamdaFundamentalListener.html#function-getsharesout)**()<br>Shares outstanding. The number of authorized shares in a company that are held by investors, including employees and executives of that company. (Un-issued shares and treasury shares are not included in this figure).  |
| long | **[getSharesFloat](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloat)**()<br>The number of shares of a security that are outstanding and available for trading by the public.  |
| long | **[getSharesAuthorized](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorized)**()<br>Authorized shares. The number of shares that a corporation is permitted to issue.  |
| double | **[getEarningsPerShare](classWombat_1_1MamdaFundamentalListener.html#function-getearningspershare)**()<br>Earnings per share, including common stock, preferred stock, unexercised stock options, unexercised warrants, and some convertible debt. In companies with a large amount of convertibles, warrants and stock options, diluted earnings per share are usually a more accurate measure of the company's real earning power than earnings per share.  |
| double | **[getVolatility](classWombat_1_1MamdaFundamentalListener.html#function-getvolatility)**()<br>The relative rate at which the price of a security moves up and down.  |
| double | **[getPriceEarningsRatio](classWombat_1_1MamdaFundamentalListener.html#function-getpriceearningsratio)**()<br>The most common measure of how expensive a stock is. The P/E ratio is equal to a stock's market capitalization divided by its after-tax earnings over a 12-month period, usually the trailing period but occasionally the current or forward period.  |
| double | **[getYield](classWombat_1_1MamdaFundamentalListener.html#function-getyield)**()<br>Yield, for cash instruments where prices are published  |
| string | **[getMarketSegmentNative](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentnative)**()<br>Feed-specific market segment code in native feed format.  |
| string | **[getMarketSectorNative](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectornative)**()<br>Feed-specific market sector code in native feed format.  |
| string | **[getMarketSegment](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegment)**()<br>Market subgroup.  |
| string | **[getMarketSector](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsector)**()<br>A distinct subset of a market, society, industry, or economy, whose components share similar characteristics  |
| double | **[getHistoricalVolatility](classWombat_1_1MamdaFundamentalListener.html#function-gethistoricalvolatility)**()<br>Volatility estimated from historical data  |
| double | **[getRiskFreeRate](classWombat_1_1MamdaFundamentalListener.html#function-getriskfreerate)**()<br>Theoretical interest rate at which an investment may earn interest without incurring any risk  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsrctimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getactivitytimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorporateActionTypeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getcorporateactiontypefieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendPriceFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpricefieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendFrequencyFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendfrequencyfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendExDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendexdatefieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendPayDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpaydatefieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendRecordDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendrecorddatefieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendCurrencyFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendcurrencyfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesOutFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesoutfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesFloatFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloatfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesAuthorizedFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorizedfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEarningsPerShareFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getearningspersharefieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVolatilityFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getvolatilityfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPriceEarningsRatioFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getpriceearningsratiofieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getYieldFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getyieldfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSegmentNativeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentnativefieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSectorNativeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectornativefieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSegmentFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSectorFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectorfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHistoricalVolatilityFieldState](classWombat_1_1MamdaFundamentalListener.html#function-gethistoricalvolatilityfieldstate)**()<br>Field State  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getRiskFreeRateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getriskfreeratefieldstate)**()<br>Field State  |
| void | **[onMsg](classWombat_1_1MamdaFundamentalListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Implementation of MamdaListener interface.  |
| string | **[getFieldAsString](classWombat_1_1MamdaFundamentalListener.html#function-getfieldasstring)**(MamaMsgField field) |

## Detailed Description

```csharp
class Wombat::MamdaFundamentalListener;
```

[MamdaFundamentalListener]() is a class that specializes in handling fundamental equity pricing/analysis attributes, indicators and ratios. Developers provide their own implementation of the [MamdaFundamentalHandler](interfaceWombat_1_1MamdaFundamentalHandler.html) interface and will be delivered notifications for updates in the fundamental data. An obvious application for this MAMDA class is any kind of pricing analysis application. 

Note: The [MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html) class caches equity pricing/analysis attributes, indicators and ratios. Among other reasons, caching of these fields makes it possible to provide complete fundamental callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaFundamentalListener

```csharp
MamdaFundamentalListener()
```

Create a specialized fundamental field listener. 

### function addHandler

```csharp
void addHandler(
    MamdaFundamentalHandler handler
)
```

Add a specialized fundamentals handler. 

**Parameters**: 

  * **handler** 


### function getSrcTime

```csharp
DateTime getSrcTime()
```


### function getActivityTime

```csharp
DateTime getActivityTime()
```


### function getCorporateActionType

```csharp
string getCorporateActionType()
```

Corporate Action Type. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getCorporateActionType](interfaceWombat_1_1MamdaFundamentals.html#function-getcorporateactiontype)


### function getDividendPrice

```csharp
double getDividendPrice()
```

Dividend price. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendPrice](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendprice)


### function getDividendFrequency

```csharp
string getDividendFrequency()
```

Frequency of the dividend payments. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendFrequency](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendfrequency)




* : No dividend payments are made. 
* 1M : Monthly 
* 3M : Quarterly 
* 6M : Semi-Annually 
* 1Y : Annually 
* SP : Payment frequency is special. 
* NA : Irregular payment frequency. 
* ER : Invalid dividend frequency period. 


### function getDividendExDate

```csharp
string getDividendExDate()
```

The date on or after which a security is traded without a previously declared dividend or distribution. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendExDate](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendexdate)


### function getDividendPayDate

```csharp
string getDividendPayDate()
```

Date on which corporate action distribution will be paid or effective. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendPayDate](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendpaydate)


### function getDividendRecordDate

```csharp
string getDividendRecordDate()
```

This is the date on which all shareholders are considered a "holder of record" and ensured the right of a dividend or distribution. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendRecordDate](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendrecorddate)


### function getDividendCurrency

```csharp
string getDividendCurrency()
```

Currency of dividend. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendCurrency](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendcurrency)


### function getSharesOut

```csharp
long getSharesOut()
```

Shares outstanding. The number of authorized shares in a company that are held by investors, including employees and executives of that company. (Un-issued shares and treasury shares are not included in this figure). 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesOut](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesout)


### function getSharesFloat

```csharp
long getSharesFloat()
```

The number of shares of a security that are outstanding and available for trading by the public. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesFloat](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesfloat)


### function getSharesAuthorized

```csharp
long getSharesAuthorized()
```

Authorized shares. The number of shares that a corporation is permitted to issue. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesAuthorized](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesauthorized)


### function getEarningsPerShare

```csharp
double getEarningsPerShare()
```

Earnings per share, including common stock, preferred stock, unexercised stock options, unexercised warrants, and some convertible debt. In companies with a large amount of convertibles, warrants and stock options, diluted earnings per share are usually a more accurate measure of the company's real earning power than earnings per share. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getEarningsPerShare](interfaceWombat_1_1MamdaFundamentals.html#function-getearningspershare)


### function getVolatility

```csharp
double getVolatility()
```

The relative rate at which the price of a security moves up and down. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getVolatility](interfaceWombat_1_1MamdaFundamentals.html#function-getvolatility)


### function getPriceEarningsRatio

```csharp
double getPriceEarningsRatio()
```

The most common measure of how expensive a stock is. The P/E ratio is equal to a stock's market capitalization divided by its after-tax earnings over a 12-month period, usually the trailing period but occasionally the current or forward period. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getPriceEarningsRatio](interfaceWombat_1_1MamdaFundamentals.html#function-getpriceearningsratio)


### function getYield

```csharp
double getYield()
```

Yield, for cash instruments where prices are published 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getYield](interfaceWombat_1_1MamdaFundamentals.html#function-getyield)


### function getMarketSegmentNative

```csharp
string getMarketSegmentNative()
```

Feed-specific market segment code in native feed format. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getMarketSegmentNative](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsegmentnative)


### function getMarketSectorNative

```csharp
string getMarketSectorNative()
```

Feed-specific market sector code in native feed format. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getMarketSectorNative](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsectornative)


### function getMarketSegment

```csharp
string getMarketSegment()
```

Market subgroup. 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getMarketSegment](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsegment)


### function getMarketSector

```csharp
string getMarketSector()
```

A distinct subset of a market, society, industry, or economy, whose components share similar characteristics 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getMarketSector](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsector)


### function getHistoricalVolatility

```csharp
double getHistoricalVolatility()
```

Volatility estimated from historical data 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getHistoricalVolatility](interfaceWombat_1_1MamdaFundamentals.html#function-gethistoricalvolatility)


### function getRiskFreeRate

```csharp
double getRiskFreeRate()
```

Theoretical interest rate at which an investment may earn interest without incurring any risk 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getRiskFreeRate](interfaceWombat_1_1MamdaFundamentals.html#function-getriskfreerate)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```


### function getCorporateActionTypeFieldState

```csharp
MamdaFieldState getCorporateActionTypeFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getCorporateActionTypeFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getcorporateactiontypefieldstate)


### function getDividendPriceFieldState

```csharp
MamdaFieldState getDividendPriceFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendPriceFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendpricefieldstate)


### function getDividendFrequencyFieldState

```csharp
MamdaFieldState getDividendFrequencyFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendFrequencyFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendfrequencyfieldstate)


### function getDividendExDateFieldState

```csharp
MamdaFieldState getDividendExDateFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendExDateFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendexdatefieldstate)


### function getDividendPayDateFieldState

```csharp
MamdaFieldState getDividendPayDateFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendPayDateFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendpaydatefieldstate)


### function getDividendRecordDateFieldState

```csharp
MamdaFieldState getDividendRecordDateFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendRecordDateFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendrecorddatefieldstate)


### function getDividendCurrencyFieldState

```csharp
MamdaFieldState getDividendCurrencyFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getDividendCurrencyFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendcurrencyfieldstate)


### function getSharesOutFieldState

```csharp
MamdaFieldState getSharesOutFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesOutFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesoutfieldstate)


### function getSharesFloatFieldState

```csharp
MamdaFieldState getSharesFloatFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesFloatFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesfloatfieldstate)


### function getSharesAuthorizedFieldState

```csharp
MamdaFieldState getSharesAuthorizedFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesAuthorizedFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesauthorizedfieldstate)


### function getEarningsPerShareFieldState

```csharp
MamdaFieldState getEarningsPerShareFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getEarningsPerShareFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getearningspersharefieldstate)


### function getVolatilityFieldState

```csharp
MamdaFieldState getVolatilityFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getVolatilityFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getvolatilityfieldstate)


### function getPriceEarningsRatioFieldState

```csharp
MamdaFieldState getPriceEarningsRatioFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getPriceEarningsRatioFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getpriceearningsratiofieldstate)


### function getYieldFieldState

```csharp
MamdaFieldState getYieldFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getYieldFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getyieldfieldstate)


### function getMarketSegmentNativeFieldState

```csharp
MamdaFieldState getMarketSegmentNativeFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getMarketSegmentNativeFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsegmentnativefieldstate)


### function getMarketSectorNativeFieldState

```csharp
MamdaFieldState getMarketSectorNativeFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getMarketSectorNativeFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsectornativefieldstate)


### function getMarketSegmentFieldState

```csharp
MamdaFieldState getMarketSegmentFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getMarketSegmentFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsegmentfieldstate)


### function getMarketSectorFieldState

```csharp
MamdaFieldState getMarketSectorFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getMarketSectorFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsectorfieldstate)


### function getHistoricalVolatilityFieldState

```csharp
MamdaFieldState getHistoricalVolatilityFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getHistoricalVolatilityFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-gethistoricalvolatilityfieldstate)


### function getRiskFreeRateFieldState

```csharp
MamdaFieldState getRiskFreeRateFieldState()
```

Field State 

**Return**: 

**Reimplements**: [Wombat::MamdaFundamentals::getRiskFreeRateFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getriskfreeratefieldstate)


### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```

Implementation of MamdaListener interface. 

**Parameters**: 

  * **subscription** 
  * **msg** 
  * **msgType** 


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)


### function getFieldAsString

```csharp
string getFieldAsString(
    MamaMsgField field
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100