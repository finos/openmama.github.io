---
title: Wombat::MamdaFundamentals
summary: MamdaFundamentals is an interface that provides access to the fundamental equity pricing/analysis attributes, indicators and ratios. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFundamentals



[MamdaFundamentals]() is an interface that provides access to the fundamental equity pricing/analysis attributes, indicators and ratios. 

Inherited by [Wombat.MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| string | **[getCorporateActionType](interfaceWombat_1_1MamdaFundamentals.html#function-getcorporateactiontype)**()<br>Corporate Action Type.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorporateActionTypeFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getcorporateactiontypefieldstate)**()<br>Field State  |
| double | **[getDividendPrice](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendprice)**()<br>Dividend price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendPriceFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendpricefieldstate)**()<br>Field State  |
| string | **[getDividendFrequency](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendfrequency)**()<br>Frequency of the dividend payments.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendFrequencyFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendfrequencyfieldstate)**()<br>Field State  |
| string | **[getDividendExDate](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendexdate)**()<br>The date on or after which a security is traded without a previously declared dividend or distribution.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendExDateFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendexdatefieldstate)**()<br>Field State  |
| string | **[getDividendPayDate](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendpaydate)**()<br>Date on which corporate action distribution will be paid or effective.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendPayDateFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendpaydatefieldstate)**()<br>Field State  |
| string | **[getDividendRecordDate](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendrecorddate)**()<br>This is the date on which all shareholders are considered a "holder of record" and ensured the right of a dividend or distribution.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendRecordDateFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendrecorddatefieldstate)**()<br>Field State  |
| string | **[getDividendCurrency](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendcurrency)**()<br>Currency of dividend.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendCurrencyFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getdividendcurrencyfieldstate)**()<br>Field State  |
| long | **[getSharesOut](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesout)**()<br>Shares outstanding. The number of authorized shares in a company that are held by investors, including employees and executives of that company. (Un-issued shares and treasury shares are not included in this figure).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesOutFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesoutfieldstate)**()<br>Field State  |
| long | **[getSharesFloat](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesfloat)**()<br>The number of shares of a security that are outstanding and available for trading by the public.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesFloatFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesfloatfieldstate)**()<br>Field State  |
| long | **[getSharesAuthorized](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesauthorized)**()<br>Authorized shares. The number of shares that a corporation is permitted to issue.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesAuthorizedFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getsharesauthorizedfieldstate)**()<br>Field State  |
| double | **[getEarningsPerShare](interfaceWombat_1_1MamdaFundamentals.html#function-getearningspershare)**()<br>Earnings per share, including common stock, preferred stock, unexercised stock options, unexercised warrants, and some convertible debt. In companies with a large amount of convertibles, warrants and stock options, diluted earnings per share are usually a more accurate measure of the company's real earning power than earnings per share.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEarningsPerShareFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getearningspersharefieldstate)**()<br>Field State  |
| double | **[getVolatility](interfaceWombat_1_1MamdaFundamentals.html#function-getvolatility)**()<br>The relative rate at which the price of a security moves up and down.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVolatilityFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getvolatilityfieldstate)**()<br>Field State  |
| double | **[getPriceEarningsRatio](interfaceWombat_1_1MamdaFundamentals.html#function-getpriceearningsratio)**()<br>The most common measure of how expensive a stock is. The P/E ratio is equal to a stock's market capitalization divided by its after-tax earnings over a 12-month period, usually the trailing period but occasionally the current or forward period.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPriceEarningsRatioFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getpriceearningsratiofieldstate)**()<br>Field State  |
| double | **[getYield](interfaceWombat_1_1MamdaFundamentals.html#function-getyield)**()<br>Yield, for cash instruments where prices are published  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getYieldFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getyieldfieldstate)**()<br>Field State  |
| string | **[getMarketSegmentNative](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsegmentnative)**()<br>Feed-specific market segment code in native feed format.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSegmentNativeFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsegmentnativefieldstate)**()<br>Field State  |
| string | **[getMarketSectorNative](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsectornative)**()<br>Feed-specific market sector code in native feed format.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSectorNativeFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsectornativefieldstate)**()<br>Field State  |
| string | **[getMarketSegment](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsegment)**()<br>Market subgroup.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSegmentFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsegmentfieldstate)**()<br>Field State  |
| string | **[getMarketSector](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsector)**()<br>A distinct subset of a market, society, industry, or economy, whose components share similar characteristics  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSectorFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getmarketsectorfieldstate)**()<br>Field State  |
| double | **[getHistoricalVolatility](interfaceWombat_1_1MamdaFundamentals.html#function-gethistoricalvolatility)**()<br>Volatility estimated from historical data  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHistoricalVolatilityFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-gethistoricalvolatilityfieldstate)**()<br>Field State  |
| double | **[getRiskFreeRate](interfaceWombat_1_1MamdaFundamentals.html#function-getriskfreerate)**()<br>Theoretical interest rate at which an investment may earn interest without incurring any risk  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getRiskFreeRateFieldState](interfaceWombat_1_1MamdaFundamentals.html#function-getriskfreeratefieldstate)**()<br>Field State  |

## Public Functions Documentation

### function getCorporateActionType

```csharp
string getCorporateActionType()
```

Corporate Action Type. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getCorporateActionType](classWombat_1_1MamdaFundamentalListener.html#function-getcorporateactiontype)


### function getCorporateActionTypeFieldState

```csharp
MamdaFieldState getCorporateActionTypeFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getCorporateActionTypeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getcorporateactiontypefieldstate)


### function getDividendPrice

```csharp
double getDividendPrice()
```

Dividend price. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendPrice](classWombat_1_1MamdaFundamentalListener.html#function-getdividendprice)


### function getDividendPriceFieldState

```csharp
MamdaFieldState getDividendPriceFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendPriceFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpricefieldstate)


### function getDividendFrequency

```csharp
string getDividendFrequency()
```

Frequency of the dividend payments. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendFrequency](classWombat_1_1MamdaFundamentalListener.html#function-getdividendfrequency)




* : No dividend payments are made. 
* 1M : Monthly 
* 3M : Quarterly 
* 6M : Semi-Annually 
* 1Y : Annually 
* SP : Payment frequency is special. 
* NA : Irregular payment frequency. 
* ER : Invalid dividend frequency period. 


### function getDividendFrequencyFieldState

```csharp
MamdaFieldState getDividendFrequencyFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendFrequencyFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendfrequencyfieldstate)


### function getDividendExDate

```csharp
string getDividendExDate()
```

The date on or after which a security is traded without a previously declared dividend or distribution. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendExDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendexdate)


### function getDividendExDateFieldState

```csharp
MamdaFieldState getDividendExDateFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendExDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendexdatefieldstate)


### function getDividendPayDate

```csharp
string getDividendPayDate()
```

Date on which corporate action distribution will be paid or effective. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendPayDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpaydate)


### function getDividendPayDateFieldState

```csharp
MamdaFieldState getDividendPayDateFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendPayDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpaydatefieldstate)


### function getDividendRecordDate

```csharp
string getDividendRecordDate()
```

This is the date on which all shareholders are considered a "holder of record" and ensured the right of a dividend or distribution. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendRecordDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendrecorddate)


### function getDividendRecordDateFieldState

```csharp
MamdaFieldState getDividendRecordDateFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendRecordDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendrecorddatefieldstate)


### function getDividendCurrency

```csharp
string getDividendCurrency()
```

Currency of dividend. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendCurrency](classWombat_1_1MamdaFundamentalListener.html#function-getdividendcurrency)


### function getDividendCurrencyFieldState

```csharp
MamdaFieldState getDividendCurrencyFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendCurrencyFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendcurrencyfieldstate)


### function getSharesOut

```csharp
long getSharesOut()
```

Shares outstanding. The number of authorized shares in a company that are held by investors, including employees and executives of that company. (Un-issued shares and treasury shares are not included in this figure). 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesOut](classWombat_1_1MamdaFundamentalListener.html#function-getsharesout)


### function getSharesOutFieldState

```csharp
MamdaFieldState getSharesOutFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesOutFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesoutfieldstate)


### function getSharesFloat

```csharp
long getSharesFloat()
```

The number of shares of a security that are outstanding and available for trading by the public. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesFloat](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloat)


### function getSharesFloatFieldState

```csharp
MamdaFieldState getSharesFloatFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesFloatFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloatfieldstate)


### function getSharesAuthorized

```csharp
long getSharesAuthorized()
```

Authorized shares. The number of shares that a corporation is permitted to issue. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesAuthorized](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorized)


### function getSharesAuthorizedFieldState

```csharp
MamdaFieldState getSharesAuthorizedFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesAuthorizedFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorizedfieldstate)


### function getEarningsPerShare

```csharp
double getEarningsPerShare()
```

Earnings per share, including common stock, preferred stock, unexercised stock options, unexercised warrants, and some convertible debt. In companies with a large amount of convertibles, warrants and stock options, diluted earnings per share are usually a more accurate measure of the company's real earning power than earnings per share. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getEarningsPerShare](classWombat_1_1MamdaFundamentalListener.html#function-getearningspershare)


### function getEarningsPerShareFieldState

```csharp
MamdaFieldState getEarningsPerShareFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getEarningsPerShareFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getearningspersharefieldstate)


### function getVolatility

```csharp
double getVolatility()
```

The relative rate at which the price of a security moves up and down. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getVolatility](classWombat_1_1MamdaFundamentalListener.html#function-getvolatility)


### function getVolatilityFieldState

```csharp
MamdaFieldState getVolatilityFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getVolatilityFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getvolatilityfieldstate)


### function getPriceEarningsRatio

```csharp
double getPriceEarningsRatio()
```

The most common measure of how expensive a stock is. The P/E ratio is equal to a stock's market capitalization divided by its after-tax earnings over a 12-month period, usually the trailing period but occasionally the current or forward period. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getPriceEarningsRatio](classWombat_1_1MamdaFundamentalListener.html#function-getpriceearningsratio)


### function getPriceEarningsRatioFieldState

```csharp
MamdaFieldState getPriceEarningsRatioFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getPriceEarningsRatioFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getpriceearningsratiofieldstate)


### function getYield

```csharp
double getYield()
```

Yield, for cash instruments where prices are published 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getYield](classWombat_1_1MamdaFundamentalListener.html#function-getyield)


### function getYieldFieldState

```csharp
MamdaFieldState getYieldFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getYieldFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getyieldfieldstate)


### function getMarketSegmentNative

```csharp
string getMarketSegmentNative()
```

Feed-specific market segment code in native feed format. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSegmentNative](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentnative)


### function getMarketSegmentNativeFieldState

```csharp
MamdaFieldState getMarketSegmentNativeFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSegmentNativeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentnativefieldstate)


### function getMarketSectorNative

```csharp
string getMarketSectorNative()
```

Feed-specific market sector code in native feed format. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSectorNative](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectornative)


### function getMarketSectorNativeFieldState

```csharp
MamdaFieldState getMarketSectorNativeFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSectorNativeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectornativefieldstate)


### function getMarketSegment

```csharp
string getMarketSegment()
```

Market subgroup. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSegment](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegment)


### function getMarketSegmentFieldState

```csharp
MamdaFieldState getMarketSegmentFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSegmentFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentfieldstate)


### function getMarketSector

```csharp
string getMarketSector()
```

A distinct subset of a market, society, industry, or economy, whose components share similar characteristics 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSector](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsector)


### function getMarketSectorFieldState

```csharp
MamdaFieldState getMarketSectorFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSectorFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectorfieldstate)


### function getHistoricalVolatility

```csharp
double getHistoricalVolatility()
```

Volatility estimated from historical data 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getHistoricalVolatility](classWombat_1_1MamdaFundamentalListener.html#function-gethistoricalvolatility)


### function getHistoricalVolatilityFieldState

```csharp
MamdaFieldState getHistoricalVolatilityFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getHistoricalVolatilityFieldState](classWombat_1_1MamdaFundamentalListener.html#function-gethistoricalvolatilityfieldstate)


### function getRiskFreeRate

```csharp
double getRiskFreeRate()
```

Theoretical interest rate at which an investment may earn interest without incurring any risk 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getRiskFreeRate](classWombat_1_1MamdaFundamentalListener.html#function-getriskfreerate)


### function getRiskFreeRateFieldState

```csharp
MamdaFieldState getRiskFreeRateFieldState()
```

Field State 

**Return**: 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getRiskFreeRateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getriskfreeratefieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100