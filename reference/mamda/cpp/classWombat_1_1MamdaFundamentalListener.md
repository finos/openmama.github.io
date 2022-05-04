---
title: Wombat::MamdaFundamentalListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaFundamentalListener



 [More...](#detailed-description)


`#include <MamdaFundamentalListener.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html), [Wombat::MamdaFundamentals](classWombat_1_1MamdaFundamentals.html), [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html#function-mamdafundamentallistener)**() |
| virtual | **[~MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html#function-~mamdafundamentallistener)**() |
| void | **[addHandler](classWombat_1_1MamdaFundamentalListener.html#function-addhandler)**([MamdaFundamentalHandler](classWombat_1_1MamdaFundamentalHandler.html) * handler) |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaFundamentalListener.html#function-getsymbol)**() const |
| virtual const char * | **[getPartId](classWombat_1_1MamdaFundamentalListener.html#function-getpartid)**() const |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaFundamentalListener.html#function-getsrctime)**() const |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaFundamentalListener.html#function-getactivitytime)**() const |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaFundamentalListener.html#function-getlinetime)**() const |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaFundamentalListener.html#function-getsendtime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsymbolfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsrctimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getactivitytimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getlinetimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsendtimefieldstate)**() const |
| virtual const char * | **[getCorporateActionType](classWombat_1_1MamdaFundamentalListener.html#function-getcorporateactiontype)**() const |
| virtual double | **[getDividendPrice](classWombat_1_1MamdaFundamentalListener.html#function-getdividendprice)**() const |
| virtual const char * | **[getDividendFrequency](classWombat_1_1MamdaFundamentalListener.html#function-getdividendfrequency)**() const |
| virtual const char * | **[getDividendExDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendexdate)**() const |
| virtual const char * | **[getDividendPayDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpaydate)**() const |
| virtual const char * | **[getDividendRecordDate](classWombat_1_1MamdaFundamentalListener.html#function-getdividendrecorddate)**() const |
| virtual const char * | **[getDividendCurrency](classWombat_1_1MamdaFundamentalListener.html#function-getdividendcurrency)**() const |
| virtual long | **[getSharesOut](classWombat_1_1MamdaFundamentalListener.html#function-getsharesout)**() const<br>getSharesOut return the number of shares.  |
| virtual long | **[getSharesFloat](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloat)**() const<br>getSharesFloat return the number of floating shares.  |
| virtual long | **[getSharesAuthorized](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorized)**() const<br>getSharesAuthorized return the number of authorized shares.  |
| virtual double | **[getEarningsPerShare](classWombat_1_1MamdaFundamentalListener.html#function-getearningspershare)**() const |
| virtual double | **[getVolatility](classWombat_1_1MamdaFundamentalListener.html#function-getvolatility)**() const |
| virtual double | **[getPriceEarningsRatio](classWombat_1_1MamdaFundamentalListener.html#function-getpriceearningsratio)**() const |
| virtual double | **[getYield](classWombat_1_1MamdaFundamentalListener.html#function-getyield)**() const |
| virtual const char * | **[getMarketSegmentNative](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentnative)**() const |
| virtual const char * | **[getMarketSectorNative](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectornative)**() const |
| virtual const char * | **[getMarketSegment](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegment)**() const |
| virtual const char * | **[getMarketSector](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsector)**() const |
| virtual double | **[getHistoricalVolatility](classWombat_1_1MamdaFundamentalListener.html#function-gethistoricalvolatility)**() const |
| virtual double | **[getRiskFreeRate](classWombat_1_1MamdaFundamentalListener.html#function-getriskfreerate)**() const |
| virtual mama_u64_t | **[getSharesOutEx](classWombat_1_1MamdaFundamentalListener.html#function-getsharesoutex)**() const<br>getSharesOutEx return the number of shares.  |
| virtual mama_u64_t | **[getSharesFloatEx](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloatex)**() const<br>getSharesFloatEx return the number of floating shares.  |
| virtual mama_u64_t | **[getSharesAuthorizedEx](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorizedex)**() const<br>getSharesAuthorizedEx return the number of authorized shares.  |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorporateActionTypeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getcorporateactiontypefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendPriceFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendFrequencyFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendfrequencyfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendExDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendexdatefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendPayDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendpaydatefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendRecordDateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendrecorddatefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getDividendCurrencyFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getdividendcurrencyfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesOutFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesoutfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesFloatFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesfloatfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSharesAuthorizedFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsharesauthorizedfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEarningsPerShareFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getearningspersharefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVolatilityFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getvolatilityfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPriceEarningsRatioFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getpriceearningsratiofieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getYieldFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getyieldfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSegmentNativeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentnativefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSectorNativeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectornativefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSegmentFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsegmentfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMarketSectorFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getmarketsectorfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHistoricalVolatilityFieldState](classWombat_1_1MamdaFundamentalListener.html#function-gethistoricalvolatilityfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getRiskFreeRateFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getriskfreeratefieldstate)**() const |
| virtual void | **[onMsg](classWombat_1_1MamdaFundamentalListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

**Public Functions inherited from [Wombat::MamdaFundamentals](classWombat_1_1MamdaFundamentals.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaFundamentals](classWombat_1_1MamdaFundamentals.html#function-~mamdafundamentals)**() |

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |


## Detailed Description

```cpp
class Wombat::MamdaFundamentalListener;
```


[MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html) is a class that specializes in handling fundamental equity pricing/analysis attributes, indicators and ratios. Developers provide their own implementation of the [MamdaFundamentalHandler](classWombat_1_1MamdaFundamentalHandler.html) interface and will be delivered notifications for updates in the fundamental data. An obvious application for this MAMDA class is any kind of pricing analysis application.

Note: The [MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html) class caches equity pricing/analysis attributes, indicators and ratios. Among other reasons, caching of these fields makes it possible to provide complete fundamental callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields.

[MamdaFundamentalListener](classWombat_1_1MamdaFundamentalListener.html) should initialize the [MamdaFundamentalFields](classWombat_1_1MamdaFundamentalFields.html) class prior to receiving the first message by calling MamdaFundamentalFields::setDictionary() with a valid dictionary object which contains Fundamental related fields. 

## Public Functions Documentation

### function MamdaFundamentalListener

```cpp
MamdaFundamentalListener()
```


### function ~MamdaFundamentalListener

```cpp
virtual ~MamdaFundamentalListener()
```


### function addHandler

```cpp
void addHandler(
    MamdaFundamentalHandler * handler
)
```


### function getSymbol

```cpp
virtual const char * getSymbol() const
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [Wombat::MamdaBasicRecap::getSymbol](classWombat_1_1MamdaBasicRecap.html#function-getsymbol)


Get the string symbol for the instrument.


### function getPartId

```cpp
virtual const char * getPartId() const
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [Wombat::MamdaBasicRecap::getPartId](classWombat_1_1MamdaBasicRecap.html#function-getpartid)


Get the participant identifier.


### function getSrcTime

```cpp
virtual const MamaDateTime & getSrcTime() const
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicRecap::getSrcTime](classWombat_1_1MamdaBasicRecap.html#function-getsrctime)


Get the source time of the update.


### function getActivityTime

```cpp
virtual const MamaDateTime & getActivityTime() const
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [Wombat::MamdaBasicRecap::getActivityTime](classWombat_1_1MamdaBasicRecap.html#function-getactivitytime)


Get the activity time of the update.


### function getLineTime

```cpp
virtual const MamaDateTime & getLineTime() const
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [Wombat::MamdaBasicRecap::getLineTime](classWombat_1_1MamdaBasicRecap.html#function-getlinetime)


Get the line time of the update.


### function getSendTime

```cpp
virtual const MamaDateTime & getSendTime() const
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplements**: [Wombat::MamdaBasicRecap::getSendTime](classWombat_1_1MamdaBasicRecap.html#function-getsendtime)


Get the send time of the update.


### function getSymbolFieldState

```cpp
virtual MamdaFieldState getSymbolFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicRecap::getSymbolFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


Get the string symbol field state for the instrument.


### function getPartIdFieldState

```cpp
virtual MamdaFieldState getPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicRecap::getPartIdFieldState](classWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


Get the participant identifier field state.


### function getSrcTimeFieldState

```cpp
virtual MamdaFieldState getSrcTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicRecap::getSrcTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)


Get the source time field state


### function getActivityTimeFieldState

```cpp
virtual MamdaFieldState getActivityTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicRecap::getActivityTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)


Get the activity time field state


### function getLineTimeFieldState

```cpp
virtual MamdaFieldState getLineTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicRecap::getLineTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


Get the line time field state


### function getSendTimeFieldState

```cpp
virtual MamdaFieldState getSendTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicRecap::getSendTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


Get the send time field state


### function getCorporateActionType

```cpp
virtual const char * getCorporateActionType() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getCorporateActionType](classWombat_1_1MamdaFundamentals.html#function-getcorporateactiontype)


### function getDividendPrice

```cpp
virtual double getDividendPrice() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendPrice](classWombat_1_1MamdaFundamentals.html#function-getdividendprice)


### function getDividendFrequency

```cpp
virtual const char * getDividendFrequency() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendFrequency](classWombat_1_1MamdaFundamentals.html#function-getdividendfrequency)


### function getDividendExDate

```cpp
virtual const char * getDividendExDate() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendExDate](classWombat_1_1MamdaFundamentals.html#function-getdividendexdate)


### function getDividendPayDate

```cpp
virtual const char * getDividendPayDate() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendPayDate](classWombat_1_1MamdaFundamentals.html#function-getdividendpaydate)


### function getDividendRecordDate

```cpp
virtual const char * getDividendRecordDate() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendRecordDate](classWombat_1_1MamdaFundamentals.html#function-getdividendrecorddate)


### function getDividendCurrency

```cpp
virtual const char * getDividendCurrency() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendCurrency](classWombat_1_1MamdaFundamentals.html#function-getdividendcurrency)


### function getSharesOut

```cpp
virtual long getSharesOut() const
```

getSharesOut return the number of shares. 

**Parameters**: 

  * **None.** 


**Deprecated**: 

This function is deprecated, use getSharesOutEx instead.

**Return**: long

**Reimplements**: [Wombat::MamdaFundamentals::getSharesOut](classWombat_1_1MamdaFundamentals.html#function-getsharesout)


### function getSharesFloat

```cpp
virtual long getSharesFloat() const
```

getSharesFloat return the number of floating shares. 

**Parameters**: 

  * **None.** 


**Deprecated**: 

This function is deprecated, use getSharesFloatEx instead.

**Return**: long

**Reimplements**: [Wombat::MamdaFundamentals::getSharesFloat](classWombat_1_1MamdaFundamentals.html#function-getsharesfloat)


### function getSharesAuthorized

```cpp
virtual long getSharesAuthorized() const
```

getSharesAuthorized return the number of authorized shares. 

**Parameters**: 

  * **None.** 


**Deprecated**: 

This function is deprecated, use getSharesAuthorizedEx instead.

**Return**: long

**Reimplements**: [Wombat::MamdaFundamentals::getSharesAuthorized](classWombat_1_1MamdaFundamentals.html#function-getsharesauthorized)


### function getEarningsPerShare

```cpp
virtual double getEarningsPerShare() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getEarningsPerShare](classWombat_1_1MamdaFundamentals.html#function-getearningspershare)


### function getVolatility

```cpp
virtual double getVolatility() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getVolatility](classWombat_1_1MamdaFundamentals.html#function-getvolatility)


### function getPriceEarningsRatio

```cpp
virtual double getPriceEarningsRatio() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getPriceEarningsRatio](classWombat_1_1MamdaFundamentals.html#function-getpriceearningsratio)


### function getYield

```cpp
virtual double getYield() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getYield](classWombat_1_1MamdaFundamentals.html#function-getyield)


### function getMarketSegmentNative

```cpp
virtual const char * getMarketSegmentNative() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getMarketSegmentNative](classWombat_1_1MamdaFundamentals.html#function-getmarketsegmentnative)


### function getMarketSectorNative

```cpp
virtual const char * getMarketSectorNative() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getMarketSectorNative](classWombat_1_1MamdaFundamentals.html#function-getmarketsectornative)


### function getMarketSegment

```cpp
virtual const char * getMarketSegment() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getMarketSegment](classWombat_1_1MamdaFundamentals.html#function-getmarketsegment)


### function getMarketSector

```cpp
virtual const char * getMarketSector() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getMarketSector](classWombat_1_1MamdaFundamentals.html#function-getmarketsector)


### function getHistoricalVolatility

```cpp
virtual double getHistoricalVolatility() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getHistoricalVolatility](classWombat_1_1MamdaFundamentals.html#function-gethistoricalvolatility)


### function getRiskFreeRate

```cpp
virtual double getRiskFreeRate() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getRiskFreeRate](classWombat_1_1MamdaFundamentals.html#function-getriskfreerate)


### function getSharesOutEx

```cpp
virtual mama_u64_t getSharesOutEx() const
```

getSharesOutEx return the number of shares. 

**Parameters**: 

  * **None.** 


**Return**: mama_u64_t 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesOutEx](classWombat_1_1MamdaFundamentals.html#function-getsharesoutex)


### function getSharesFloatEx

```cpp
virtual mama_u64_t getSharesFloatEx() const
```

getSharesFloatEx return the number of floating shares. 

**Parameters**: 

  * **None.** 


**Return**: mama_u64_t 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesFloatEx](classWombat_1_1MamdaFundamentals.html#function-getsharesfloatex)


### function getSharesAuthorizedEx

```cpp
virtual mama_u64_t getSharesAuthorizedEx() const
```

getSharesAuthorizedEx return the number of authorized shares. 

**Parameters**: 

  * **None.** 


**Return**: mama_u64_t 

**Reimplements**: [Wombat::MamdaFundamentals::getSharesAuthorizedEx](classWombat_1_1MamdaFundamentals.html#function-getsharesauthorizedex)


### function getCorporateActionTypeFieldState

```cpp
virtual MamdaFieldState getCorporateActionTypeFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getCorporateActionTypeFieldState](classWombat_1_1MamdaFundamentals.html#function-getcorporateactiontypefieldstate)


### function getDividendPriceFieldState

```cpp
virtual MamdaFieldState getDividendPriceFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendPriceFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendpricefieldstate)


### function getDividendFrequencyFieldState

```cpp
virtual MamdaFieldState getDividendFrequencyFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendFrequencyFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendfrequencyfieldstate)


### function getDividendExDateFieldState

```cpp
virtual MamdaFieldState getDividendExDateFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendExDateFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendexdatefieldstate)


### function getDividendPayDateFieldState

```cpp
virtual MamdaFieldState getDividendPayDateFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendPayDateFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendpaydatefieldstate)


### function getDividendRecordDateFieldState

```cpp
virtual MamdaFieldState getDividendRecordDateFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendRecordDateFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendrecorddatefieldstate)


### function getDividendCurrencyFieldState

```cpp
virtual MamdaFieldState getDividendCurrencyFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getDividendCurrencyFieldState](classWombat_1_1MamdaFundamentals.html#function-getdividendcurrencyfieldstate)


### function getSharesOutFieldState

```cpp
virtual MamdaFieldState getSharesOutFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getSharesOutFieldState](classWombat_1_1MamdaFundamentals.html#function-getsharesoutfieldstate)


### function getSharesFloatFieldState

```cpp
virtual MamdaFieldState getSharesFloatFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getSharesFloatFieldState](classWombat_1_1MamdaFundamentals.html#function-getsharesfloatfieldstate)


### function getSharesAuthorizedFieldState

```cpp
virtual MamdaFieldState getSharesAuthorizedFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getSharesAuthorizedFieldState](classWombat_1_1MamdaFundamentals.html#function-getsharesauthorizedfieldstate)


### function getEarningsPerShareFieldState

```cpp
virtual MamdaFieldState getEarningsPerShareFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getEarningsPerShareFieldState](classWombat_1_1MamdaFundamentals.html#function-getearningspersharefieldstate)


### function getVolatilityFieldState

```cpp
virtual MamdaFieldState getVolatilityFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getVolatilityFieldState](classWombat_1_1MamdaFundamentals.html#function-getvolatilityfieldstate)


### function getPriceEarningsRatioFieldState

```cpp
virtual MamdaFieldState getPriceEarningsRatioFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getPriceEarningsRatioFieldState](classWombat_1_1MamdaFundamentals.html#function-getpriceearningsratiofieldstate)


### function getYieldFieldState

```cpp
virtual MamdaFieldState getYieldFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getYieldFieldState](classWombat_1_1MamdaFundamentals.html#function-getyieldfieldstate)


### function getMarketSegmentNativeFieldState

```cpp
virtual MamdaFieldState getMarketSegmentNativeFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getMarketSegmentNativeFieldState](classWombat_1_1MamdaFundamentals.html#function-getmarketsegmentnativefieldstate)


### function getMarketSectorNativeFieldState

```cpp
virtual MamdaFieldState getMarketSectorNativeFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getMarketSectorNativeFieldState](classWombat_1_1MamdaFundamentals.html#function-getmarketsectornativefieldstate)


### function getMarketSegmentFieldState

```cpp
virtual MamdaFieldState getMarketSegmentFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getMarketSegmentFieldState](classWombat_1_1MamdaFundamentals.html#function-getmarketsegmentfieldstate)


### function getMarketSectorFieldState

```cpp
virtual MamdaFieldState getMarketSectorFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getMarketSectorFieldState](classWombat_1_1MamdaFundamentals.html#function-getmarketsectorfieldstate)


### function getHistoricalVolatilityFieldState

```cpp
virtual MamdaFieldState getHistoricalVolatilityFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getHistoricalVolatilityFieldState](classWombat_1_1MamdaFundamentals.html#function-gethistoricalvolatilityfieldstate)


### function getRiskFreeRateFieldState

```cpp
virtual MamdaFieldState getRiskFreeRateFieldState() const
```


**Reimplements**: [Wombat::MamdaFundamentals::getRiskFreeRateFieldState](classWombat_1_1MamdaFundamentals.html#function-getriskfreeratefieldstate)


### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
)
```


**Exceptions**: 

  * **<MamaStatus>** {NYSE Technologies default implementation.} 


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface.


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100