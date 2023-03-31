---
title: Wombat::MamdaFundamentals
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFundamentals



 [More...](#detailed-description)


`#include <MamdaFundamentals.h>`

Inherits from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat::MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getCorporateActionType](classWombat_1_1MamdaFundamentals.html#function-getcorporateactiontype)**() const =0 |
| virtual double | **[getDividendPrice](classWombat_1_1MamdaFundamentals.html#function-getdividendprice)**() const =0 |
| virtual const char * | **[getDividendFrequency](classWombat_1_1MamdaFundamentals.html#function-getdividendfrequency)**() const =0 |
| virtual const char * | **[getDividendExDate](classWombat_1_1MamdaFundamentals.html#function-getdividendexdate)**() const =0 |
| virtual const char * | **[getDividendPayDate](classWombat_1_1MamdaFundamentals.html#function-getdividendpaydate)**() const =0 |
| virtual const char * | **[getDividendRecordDate](classWombat_1_1MamdaFundamentals.html#function-getdividendrecorddate)**() const =0 |
| virtual const char * | **[getDividendCurrency](classWombat_1_1MamdaFundamentals.html#function-getdividendcurrency)**() const =0 |
| virtual long | **[getSharesOut](classWombat_1_1MamdaFundamentals.html#function-getsharesout)**() const =0<br>getSharesOut return the number of shares.  |
| virtual long | **[getSharesFloat](classWombat_1_1MamdaFundamentals.html#function-getsharesfloat)**() const =0<br>getSharesFloat return the number of floating shares.  |
| virtual long | **[getSharesAuthorized](classWombat_1_1MamdaFundamentals.html#function-getsharesauthorized)**() const =0<br>getSharesAuthorized return the number of authorized shares.  |
| virtual double | **[getEarningsPerShare](classWombat_1_1MamdaFundamentals.html#function-getearningspershare)**() const =0 |
| virtual double | **[getVolatility](classWombat_1_1MamdaFundamentals.html#function-getvolatility)**() const =0 |
| virtual double | **[getPriceEarningsRatio](classWombat_1_1MamdaFundamentals.html#function-getpriceearningsratio)**() const =0 |
| virtual double | **[getYield](classWombat_1_1MamdaFundamentals.html#function-getyield)**() const =0 |
| virtual const char * | **[getMarketSegmentNative](classWombat_1_1MamdaFundamentals.html#function-getmarketsegmentnative)**() const =0 |
| virtual const char * | **[getMarketSectorNative](classWombat_1_1MamdaFundamentals.html#function-getmarketsectornative)**() const =0 |
| virtual const char * | **[getMarketSegment](classWombat_1_1MamdaFundamentals.html#function-getmarketsegment)**() const =0 |
| virtual const char * | **[getMarketSector](classWombat_1_1MamdaFundamentals.html#function-getmarketsector)**() const =0 |
| virtual double | **[getHistoricalVolatility](classWombat_1_1MamdaFundamentals.html#function-gethistoricalvolatility)**() const =0 |
| virtual double | **[getRiskFreeRate](classWombat_1_1MamdaFundamentals.html#function-getriskfreerate)**() const =0 |
| virtual mama_u64_t | **[getSharesOutEx](classWombat_1_1MamdaFundamentals.html#function-getsharesoutex)**() const =0<br>getSharesOutEx return the number of shares.  |
| virtual mama_u64_t | **[getSharesFloatEx](classWombat_1_1MamdaFundamentals.html#function-getsharesfloatex)**() const =0<br>getSharesFloatEx return the number of floating shares.  |
| virtual mama_u64_t | **[getSharesAuthorizedEx](classWombat_1_1MamdaFundamentals.html#function-getsharesauthorizedex)**() const =0<br>getSharesAuthorizedEx return the number of authorized shares.  |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorporateActionTypeFieldState](classWombat_1_1MamdaFundamentals.html#function-getcorporateactiontypefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendPriceFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendFrequencyFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendfrequencyfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendExDateFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendexdatefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendPayDateFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendpaydatefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendRecordDateFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendrecorddatefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendCurrencyFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendcurrencyfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesOutFieldState](classWombat_1_1MamdaFundamentals.html#function-getsharesoutfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesFloatFieldState](classWombat_1_1MamdaFundamentals.html#function-getsharesfloatfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesAuthorizedFieldState](classWombat_1_1MamdaFundamentals.html#function-getsharesauthorizedfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEarningsPerShareFieldState](classWombat_1_1MamdaFundamentals.html#function-getearningspersharefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVolatilityFieldState](classWombat_1_1MamdaFundamentals.html#function-getvolatilityfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPriceEarningsRatioFieldState](classWombat_1_1MamdaFundamentals.html#function-getpriceearningsratiofieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getYieldFieldState](classWombat_1_1MamdaFundamentals.html#function-getyieldfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSegmentNativeFieldState](classWombat_1_1MamdaFundamentals.html#function-getmarketsegmentnativefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSectorNativeFieldState](classWombat_1_1MamdaFundamentals.html#function-getmarketsectornativefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSegmentFieldState](classWombat_1_1MamdaFundamentals.html#function-getmarketsegmentfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSectorFieldState](classWombat_1_1MamdaFundamentals.html#function-getmarketsectorfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHistoricalVolatilityFieldState](classWombat_1_1MamdaFundamentals.html#function-gethistoricalvolatilityfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getRiskFreeRateFieldState](classWombat_1_1MamdaFundamentals.html#function-getriskfreeratefieldstate)**() const =0 |
| virtual | **[~MamdaFundamentals](classWombat_1_1MamdaFundamentals.html#function-~mamdafundamentals)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaBasicRecap.html#function-getsymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**() const =0 |
| virtual const char * | **[getPartId](classWombat_1_1MamdaBasicRecap.html#function-getpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaBasicRecap.html#function-getsrctime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaBasicRecap.html#function-getactivitytime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaBasicRecap.html#function-getlinetime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaBasicRecap.html#function-getsendtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**() const =0 |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |


## Detailed Description

```cpp
class Wombat::MamdaFundamentals;
```


[MamdaFundamentals](classWombat_1_1MamdaFundamentals.html) is an interface that provides access to the fundamental equity pricing/analysis attributes, indicators and ratios. 

## Public Functions Documentation

### function getCorporateActionType

```cpp
virtual const char * getCorporateActionType() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getCorporateActionType](classWombat_1_1MamdaFundamentalListener.html#function-getcorporateactiontype)


### function getDividendPrice

```cpp
virtual double getDividendPrice() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendPrice](classWombat_1_1MamdaFundamentalListener.html#function-getdividendprice)


### function getDividendFrequency

```cpp
virtual const char * getDividendFrequency() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendFrequency](classWombat_1_1MamdaFundamentalListener.html#function-getdividendfrequency)


### function getDividendExDate

```cpp
virtual const char * getDividendExDate() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendExDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendexdate)


### function getDividendPayDate

```cpp
virtual const char * getDividendPayDate() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendPayDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpaydate)


### function getDividendRecordDate

```cpp
virtual const char * getDividendRecordDate() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendRecordDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendrecorddate)


### function getDividendCurrency

```cpp
virtual const char * getDividendCurrency() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendCurrency](classWombat_1_1MamdaFundamentalListener.html#function-getdividendcurrency)


### function getSharesOut

```cpp
virtual long getSharesOut() const =0
```

getSharesOut return the number of shares. 

**Parameters**: 

  * **None.** 


**Deprecated**: 

This function is deprecated, use getSharesOutEx instead.

**Return**: long

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesOut](classWombat_1_1MamdaFundamentalListener.html#function-getsharesout)


### function getSharesFloat

```cpp
virtual long getSharesFloat() const =0
```

getSharesFloat return the number of floating shares. 

**Parameters**: 

  * **None.** 


**Deprecated**: 

This function is deprecated, use getSharesFloatEx instead.

**Return**: long

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesFloat](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloat)


### function getSharesAuthorized

```cpp
virtual long getSharesAuthorized() const =0
```

getSharesAuthorized return the number of authorized shares. 

**Parameters**: 

  * **None.** 


**Deprecated**: 

This function is deprecated, use getSharesAuthorizedEx instead.

**Return**: long

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesAuthorized](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorized)


### function getEarningsPerShare

```cpp
virtual double getEarningsPerShare() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getEarningsPerShare](classWombat_1_1MamdaFundamentalListener.html#function-getearningspershare)


### function getVolatility

```cpp
virtual double getVolatility() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getVolatility](classWombat_1_1MamdaFundamentalListener.html#function-getvolatility)


### function getPriceEarningsRatio

```cpp
virtual double getPriceEarningsRatio() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getPriceEarningsRatio](classWombat_1_1MamdaFundamentalListener.html#function-getpriceearningsratio)


### function getYield

```cpp
virtual double getYield() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getYield](classWombat_1_1MamdaFundamentalListener.html#function-getyield)


### function getMarketSegmentNative

```cpp
virtual const char * getMarketSegmentNative() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSegmentNative](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentnative)


### function getMarketSectorNative

```cpp
virtual const char * getMarketSectorNative() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSectorNative](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectornative)


### function getMarketSegment

```cpp
virtual const char * getMarketSegment() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSegment](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegment)


### function getMarketSector

```cpp
virtual const char * getMarketSector() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSector](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsector)


### function getHistoricalVolatility

```cpp
virtual double getHistoricalVolatility() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getHistoricalVolatility](classWombat_1_1MamdaFundamentalListener.html#function-gethistoricalvolatility)


### function getRiskFreeRate

```cpp
virtual double getRiskFreeRate() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getRiskFreeRate](classWombat_1_1MamdaFundamentalListener.html#function-getriskfreerate)


### function getSharesOutEx

```cpp
virtual mama_u64_t getSharesOutEx() const =0
```

getSharesOutEx return the number of shares. 

**Parameters**: 

  * **None.** 


**Return**: mama_u64_t 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesOutEx](classWombat_1_1MamdaFundamentalListener.html#function-getsharesoutex)


### function getSharesFloatEx

```cpp
virtual mama_u64_t getSharesFloatEx() const =0
```

getSharesFloatEx return the number of floating shares. 

**Parameters**: 

  * **None.** 


**Return**: mama_u64_t 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesFloatEx](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloatex)


### function getSharesAuthorizedEx

```cpp
virtual mama_u64_t getSharesAuthorizedEx() const =0
```

getSharesAuthorizedEx return the number of authorized shares. 

**Parameters**: 

  * **None.** 


**Return**: mama_u64_t 

**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesAuthorizedEx](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorizedex)


### function getCorporateActionTypeFieldState

```cpp
virtual MamdaFieldState getCorporateActionTypeFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getCorporateActionTypeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getcorporateactiontypefieldstate)


### function getDividendPriceFieldState

```cpp
virtual MamdaFieldState getDividendPriceFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendPriceFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpricefieldstate)


### function getDividendFrequencyFieldState

```cpp
virtual MamdaFieldState getDividendFrequencyFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendFrequencyFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendfrequencyfieldstate)


### function getDividendExDateFieldState

```cpp
virtual MamdaFieldState getDividendExDateFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendExDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendexdatefieldstate)


### function getDividendPayDateFieldState

```cpp
virtual MamdaFieldState getDividendPayDateFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendPayDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpaydatefieldstate)


### function getDividendRecordDateFieldState

```cpp
virtual MamdaFieldState getDividendRecordDateFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendRecordDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendrecorddatefieldstate)


### function getDividendCurrencyFieldState

```cpp
virtual MamdaFieldState getDividendCurrencyFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getDividendCurrencyFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendcurrencyfieldstate)


### function getSharesOutFieldState

```cpp
virtual MamdaFieldState getSharesOutFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesOutFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesoutfieldstate)


### function getSharesFloatFieldState

```cpp
virtual MamdaFieldState getSharesFloatFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesFloatFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloatfieldstate)


### function getSharesAuthorizedFieldState

```cpp
virtual MamdaFieldState getSharesAuthorizedFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getSharesAuthorizedFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorizedfieldstate)


### function getEarningsPerShareFieldState

```cpp
virtual MamdaFieldState getEarningsPerShareFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getEarningsPerShareFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getearningspersharefieldstate)


### function getVolatilityFieldState

```cpp
virtual MamdaFieldState getVolatilityFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getVolatilityFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getvolatilityfieldstate)


### function getPriceEarningsRatioFieldState

```cpp
virtual MamdaFieldState getPriceEarningsRatioFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getPriceEarningsRatioFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getpriceearningsratiofieldstate)


### function getYieldFieldState

```cpp
virtual MamdaFieldState getYieldFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getYieldFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getyieldfieldstate)


### function getMarketSegmentNativeFieldState

```cpp
virtual MamdaFieldState getMarketSegmentNativeFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSegmentNativeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentnativefieldstate)


### function getMarketSectorNativeFieldState

```cpp
virtual MamdaFieldState getMarketSectorNativeFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSectorNativeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectornativefieldstate)


### function getMarketSegmentFieldState

```cpp
virtual MamdaFieldState getMarketSegmentFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSegmentFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentfieldstate)


### function getMarketSectorFieldState

```cpp
virtual MamdaFieldState getMarketSectorFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getMarketSectorFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectorfieldstate)


### function getHistoricalVolatilityFieldState

```cpp
virtual MamdaFieldState getHistoricalVolatilityFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getHistoricalVolatilityFieldState](classWombat_1_1MamdaFundamentalListener.html#function-gethistoricalvolatilityfieldstate)


### function getRiskFreeRateFieldState

```cpp
virtual MamdaFieldState getRiskFreeRateFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaFundamentalListener::getRiskFreeRateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getriskfreeratefieldstate)


### function ~MamdaFundamentals

```cpp
inline virtual ~MamdaFundamentals()
```


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100