---
title: com::wombat::mamda::MamdaFundamentalListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaFundamentalListener



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.MamdaFundamentals](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaFundamentalListener](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-mamdafundamentallistener)**() |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-addhandler)**([MamdaFundamentalHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentalHandler.html) handler) |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getactivitytime)**() |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsendtime)**() |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getlinetime)**() |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getpartid)**() |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsymbol)**() |
| String | **[getCorporateActionType](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getcorporateactiontype)**() |
| double | **[getDividendPrice](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendprice)**() |
| String | **[getDividendFrequency](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendfrequency)**() |
| String | **[getDividendExDate](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendexdate)**() |
| String | **[getDividendPayDate](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendpaydate)**() |
| String | **[getDividendRecordDate](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendrecorddate)**() |
| String | **[getDividendCurrency](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendcurrency)**() |
| long | **[getSharesOut](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsharesout)**() |
| long | **[getSharesFloat](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsharesfloat)**() |
| long | **[getSharesAuthorized](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsharesauthorized)**() |
| double | **[getEarningsPerShare](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getearningspershare)**() |
| double | **[getVolatility](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getvolatility)**() |
| double | **[getPriceEarningsRatio](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getpriceearningsratio)**() |
| double | **[getYield](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getyield)**() |
| String | **[getMarketSegmentNative](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getmarketsegmentnative)**() |
| String | **[getMarketSectorNative](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getmarketsectornative)**() |
| String | **[getMarketSegment](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getmarketsegment)**() |
| String | **[getMarketSector](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getmarketsector)**() |
| double | **[getHistoricalVolatility](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-gethistoricalvolatility)**() |
| double | **[getRiskFreeRate](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getriskfreerate)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getactivitytimefieldstate)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsendtimefieldstate)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getlinetimefieldstate)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getpartidfieldstate)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsymbolfieldstate)**() |
| short | **[getCorporateActionTypeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getcorporateactiontypefieldstate)**() |
| short | **[getDividendPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendpricefieldstate)**() |
| short | **[getDividendFrequencyFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendfrequencyfieldstate)**() |
| short | **[getDividendExDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendexdatefieldstate)**() |
| short | **[getDividendPayDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendpaydatefieldstate)**() |
| short | **[getDividendRecordDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendrecorddatefieldstate)**() |
| short | **[getDividendCurrencyFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getdividendcurrencyfieldstate)**() |
| short | **[getSharesOutFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsharesoutfieldstate)**() |
| short | **[getSharesFloatFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsharesfloatfieldstate)**() |
| short | **[getSharesAuthorizedFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsharesauthorizedfieldstate)**() |
| short | **[getEarningsPerShareFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getearningspersharefieldstate)**() |
| short | **[getVolatilityFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getvolatilityfieldstate)**() |
| short | **[getPriceEarningsRatioFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getpriceearningsratiofieldstate)**() |
| short | **[getYieldFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getyieldfieldstate)**() |
| short | **[getMarketSegmentNativeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getmarketsegmentnativefieldstate)**() |
| short | **[getMarketSectorNativeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getmarketsectornativefieldstate)**() |
| short | **[getMarketSegmentFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getmarketsegmentfieldstate)**() |
| short | **[getMarketSectorFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getmarketsectorfieldstate)**() |
| short | **[getHistoricalVolatilityFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-gethistoricalvolatilityfieldstate)**() |
| short | **[getRiskFreeRateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getriskfreeratefieldstate)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, MamaMsg msg, short msgType) |

## Detailed Description

```java
class com::wombat::mamda::MamdaFundamentalListener;
```


[MamdaFundamentalListener](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html) is a class that specializes in handling fundamental equity pricing/analysis attributes, indicators and ratios. Developers provide their own implementation of the [MamdaFundamentalHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentalHandler.html) interface and will be delivered notifications for updates in the fundamental data. An obvious application for this MAMDA class is any kind of pricing analysis application.

Note: The [MamdaFundamentalListener](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html) class caches equity pricing/analysis attributes, indicators and ratios. Among other reasons, caching of these fields makes it possible to provide complete fundamental callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaFundamentalListener

```java
inline MamdaFundamentalListener()
```


Create a specialized fundamental field listener. 


### function addHandler

```java
inline void addHandler(
    MamdaFundamentalHandler handler
)
```


Add a specialized fundamentals handler. 


### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctime)


Source time. Typically, the exchange generated feed 


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytime)


Activity time. A feed handler generated time stamp representing when the data item was last updated. 


### function getSendTime

```java
inline MamaDateTime getSendTime()
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)


Get the send time of the update.


### function getLineTime

```java
inline MamaDateTime getLineTime()
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)


Get the line time of the update.


### function getPartId

```java
inline String getPartId()
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)


Get the participant identifier.


### function getSymbol

```java
inline String getSymbol()
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)


Get the string symbol for the instrument.


### function getCorporateActionType

```java
inline String getCorporateActionType()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getCorporateActionType](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getcorporateactiontype)


Corporate Action Type. 


### function getDividendPrice

```java
inline double getDividendPrice()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendprice)


Dividend price. 


### function getDividendFrequency

```java
inline String getDividendFrequency()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendFrequency](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendfrequency)


Frequency of the dividend payments. 

* : No dividend payments are made. 
* 1M : Monthly 
* 3M : Quarterly 
* 6M : Semi-Annually 
* 1Y : Annually 
* SP : Payment frequency is special. 
* NA : Irregular payment frequency. 
* ER : Invalid dividend frequency period. 


### function getDividendExDate

```java
inline String getDividendExDate()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendExDate](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendexdate)


The date on or after which a security is traded without a previously declared dividend or distribution. 


### function getDividendPayDate

```java
inline String getDividendPayDate()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendPayDate](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendpaydate)


Date on which corporate action distribution will be paid or effective. 


### function getDividendRecordDate

```java
inline String getDividendRecordDate()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendRecordDate](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendrecorddate)


This is the date on which all shareholders are considered a "holder of record" and ensured the right of a dividend or distribution. 


### function getDividendCurrency

```java
inline String getDividendCurrency()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendCurrency](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendcurrency)


Currency of dividend. 


### function getSharesOut

```java
inline long getSharesOut()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getSharesOut](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getsharesout)


Shares outstanding. The number of authorized shares in a company that are held by investors, including employees and executives of that company. (Un-issued shares and treasury shares are not included in this figure). 


### function getSharesFloat

```java
inline long getSharesFloat()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getSharesFloat](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getsharesfloat)


The number of shares of a security that are outstanding and available for trading by the public. 


### function getSharesAuthorized

```java
inline long getSharesAuthorized()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getSharesAuthorized](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getsharesauthorized)


Authorized shares. The number of shares that a corporation is permitted to issue. 


### function getEarningsPerShare

```java
inline double getEarningsPerShare()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getEarningsPerShare](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getearningspershare)


Earnings per share, including common stock, preferred stock, unexercised stock options, unexercised warrants, and some convertible debt. In companies with a large amount of convertibles, warrants and stock options, diluted earnings per share are usually a more accurate measure of the company's real earning power than earnings per share. 


### function getVolatility

```java
inline double getVolatility()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getVolatility](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getvolatility)


The relative rate at which the price of a security moves up and down. 


### function getPriceEarningsRatio

```java
inline double getPriceEarningsRatio()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getPriceEarningsRatio](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getpriceearningsratio)


The most common measure of how expensive a stock is. The P/E ratio is equal to a stock's market capitalization divided by its after-tax earnings over a 12-month period, usually the trailing period but occasionally the current or forward period. 


### function getYield

```java
inline double getYield()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getYield](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getyield)


Yield, for cash instruments where prices are published 


### function getMarketSegmentNative

```java
inline String getMarketSegmentNative()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getMarketSegmentNative](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getmarketsegmentnative)


Feed-specific market segment code in native feed format. 


### function getMarketSectorNative

```java
inline String getMarketSectorNative()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getMarketSectorNative](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getmarketsectornative)


Feed-specific market sector code in native feed format. 


### function getMarketSegment

```java
inline String getMarketSegment()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getMarketSegment](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getmarketsegment)


Market subgroup. 


### function getMarketSector

```java
inline String getMarketSector()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getMarketSector](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getmarketsector)


A distinct subset of a market, society, industry, or economy, whose components share similar characteristics 


### function getHistoricalVolatility

```java
inline double getHistoricalVolatility()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getHistoricalVolatility](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-gethistoricalvolatility)


Volatility estimated from historical data 


### function getRiskFreeRate

```java
inline double getRiskFreeRate()
```


**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getRiskFreeRate](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getriskfreerate)


Theoretical interest rate at which an investment may earn interest without incurring any risk 


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


**Return**: source time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


**Return**: activity time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)


### function getSendTimeFieldState

```java
inline short getSendTimeFieldState()
```


**Return**: send time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


### function getLineTimeFieldState

```java
inline short getLineTimeFieldState()
```


**Return**: line time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


### function getPartIdFieldState

```java
inline short getPartIdFieldState()
```


**Return**: participant ID Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


### function getSymbolFieldState

```java
inline short getSymbolFieldState()
```


**Return**: symbol Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


### function getCorporateActionTypeFieldState

```java
inline short getCorporateActionTypeFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getCorporateActionTypeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getcorporateactiontypefieldstate)


### function getDividendPriceFieldState

```java
inline short getDividendPriceFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendpricefieldstate)


### function getDividendFrequencyFieldState

```java
inline short getDividendFrequencyFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendFrequencyFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendfrequencyfieldstate)


### function getDividendExDateFieldState

```java
inline short getDividendExDateFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendExDateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendexdatefieldstate)


### function getDividendPayDateFieldState

```java
inline short getDividendPayDateFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendPayDateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendpaydatefieldstate)


### function getDividendRecordDateFieldState

```java
inline short getDividendRecordDateFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendRecordDateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendrecorddatefieldstate)


### function getDividendCurrencyFieldState

```java
inline short getDividendCurrencyFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getDividendCurrencyFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getdividendcurrencyfieldstate)


### function getSharesOutFieldState

```java
inline short getSharesOutFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getSharesOutFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getsharesoutfieldstate)


### function getSharesFloatFieldState

```java
inline short getSharesFloatFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getSharesFloatFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getsharesfloatfieldstate)


### function getSharesAuthorizedFieldState

```java
inline short getSharesAuthorizedFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getSharesAuthorizedFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getsharesauthorizedfieldstate)


### function getEarningsPerShareFieldState

```java
inline short getEarningsPerShareFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getEarningsPerShareFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getearningspersharefieldstate)


### function getVolatilityFieldState

```java
inline short getVolatilityFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getVolatilityFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getvolatilityfieldstate)


### function getPriceEarningsRatioFieldState

```java
inline short getPriceEarningsRatioFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getPriceEarningsRatioFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getpriceearningsratiofieldstate)


### function getYieldFieldState

```java
inline short getYieldFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getYieldFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getyieldfieldstate)


### function getMarketSegmentNativeFieldState

```java
inline short getMarketSegmentNativeFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getMarketSegmentNativeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getmarketsegmentnativefieldstate)


### function getMarketSectorNativeFieldState

```java
inline short getMarketSectorNativeFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getMarketSectorNativeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getmarketsectornativefieldstate)


### function getMarketSegmentFieldState

```java
inline short getMarketSegmentFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getMarketSegmentFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getmarketsegmentfieldstate)


### function getMarketSectorFieldState

```java
inline short getMarketSectorFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getMarketSectorFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getmarketsectorfieldstate)


### function getHistoricalVolatilityFieldState

```java
inline short getHistoricalVolatilityFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getHistoricalVolatilityFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-gethistoricalvolatilityfieldstate)


### function getRiskFreeRateFieldState

```java
inline short getRiskFreeRateFieldState()
```


**Return**: Field State 

**Reimplements**: [com::wombat::mamda::MamdaFundamentals::getRiskFreeRateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html#function-getriskfreeratefieldstate)


### function onMsg

```java
inline void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    short msgType
)
```


**Reimplements**: [com::wombat::mamda::MamdaMsgListener::onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100