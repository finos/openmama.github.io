---
title: com::wombat::mamda::MamdaQuoteListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaQuoteListener



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html), [com.wombat.mamda.MamdaQuoteUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html), [com.wombat.mamda.MamdaQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html), [com.wombat.mamda.MamdaQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-mamdaquotelistener)**() |
| void | **[clearCache](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-clearcache)**(MamdaQuoteCache cache) |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-addhandler)**([MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) handler) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsymbol)**() |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getpartid)**() |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getactivitytime)**() |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getlinetime)**() |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsendtime)**() |
| String | **[getPubId](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getpubid)**() |
| MamaPrice | **[getBidPrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidprice)**() |
| double | **[getBidSize](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidsize)**() |
| String | **[getBidPartId](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidpartid)**() |
| MamaPrice | **[getBidClosePrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidcloseprice)**() |
| MamaDateTime | **[getBidCloseDate](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidclosedate)**() |
| MamaPrice | **[getBidPrevClosePrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidprevcloseprice)**() |
| MamaDateTime | **[getBidPrevCloseDate](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidprevclosedate)**() |
| MamaPrice | **[getBidHigh](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidhigh)**() |
| MamaPrice | **[getBidLow](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidlow)**() |
| MamaPrice | **[getAskPrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskprice)**() |
| double | **[getAskSize](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasksize)**() |
| String | **[getAskPartId](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskpartid)**() |
| double | **[getAskDepth](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskdepth)**() |
| double | **[getBidDepth](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbiddepth)**() |
| MamaPrice | **[getAskClosePrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskcloseprice)**() |
| MamaDateTime | **[getAskCloseDate](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskclosedate)**() |
| MamaPrice | **[getAskPrevClosePrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskprevcloseprice)**() |
| MamaDateTime | **[getAskPrevCloseDate](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskprevclosedate)**() |
| MamaPrice | **[getAskHigh](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskhigh)**() |
| MamaPrice | **[getAskLow](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasklow)**() |
| MamaPrice | **[getQuoteMidPrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotemidprice)**() |
| String | **[getQuoteQual](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotequal)**() |
| String | **[getQuoteQualNative](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotequalnative)**() |
| char | **[getShortSaleBidTick](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getshortsalebidtick)**() |
| char | **[getShortSaleCircuitBreaker](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreaker)**() |
| MamaDateTime | **[getAskTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasktime)**() |
| MamaDateTime | **[getBidTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidtime)**() |
| String | **[getAskIndicator](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskindicator)**() |
| String | **[getBidIndicator](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidindicator)**() |
| long | **[getAskUpdateCount](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskupdatecount)**() |
| long | **[getBidUpdateCount](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidupdatecount)**() |
| double | **[getAskYield](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskyield)**() |
| double | **[getBidYield](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidyield)**() |
| long | **[getQuoteCount](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotecount)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventseqnum)**() |
| MamaDateTime | **[getEventDate](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventdate)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventtime)**() |
| String | **[getAskSizesList](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasksizeslist)**() |
| String | **[getBidSizesList](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidsizeslist)**() |
| MamaDateTime | **[getEventDateTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventdatetime)**() |
| MamaDateTime | **[getQuoteDate](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotedate)**() |
| long | **[getBeginGapSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbegingapseqnum)**() |
| long | **[getEndGapSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getendgapseqnum)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsymbolfieldstate)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getpartidfieldstate)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getlinetimefieldstate)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsendtimefieldstate)**() |
| short | **[getPubIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getpubidfieldstate)**() |
| short | **[getBidPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)**() |
| short | **[getBidSizeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)**() |
| short | **[getBidPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)**() |
| short | **[getBidClosePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidclosepricefieldstate)**() |
| short | **[getBidCloseDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidclosedatefieldstate)**() |
| short | **[getBidPrevClosePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidprevclosepricefieldstate)**() |
| short | **[getBidPrevCloseDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidprevclosedatefieldstate)**() |
| short | **[getBidHighFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidhighfieldstate)**() |
| short | **[getBidLowFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidlowfieldstate)**() |
| short | **[getAskPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)**() |
| short | **[getAskSizeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasksizefieldstate)**() |
| short | **[getAskPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)**() |
| short | **[getAskClosePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskclosepricefieldstate)**() |
| short | **[getAskCloseDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskclosedatefieldstate)**() |
| short | **[getAskPrevClosePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskprevclosepricefieldstate)**() |
| short | **[getAskPrevCloseDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskprevclosedatefieldstate)**() |
| short | **[getAskHighFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskhighfieldstate)**() |
| short | **[getAskLowFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasklowfieldstate)**() |
| short | **[getAskDepthFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskdepthfieldstate)**() |
| short | **[getBidDepthFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbiddepthfieldstate)**() |
| short | **[getQuoteMidPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotemidpricefieldstate)**() |
| short | **[getQuoteQualFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotequalfieldstate)**() |
| short | **[getQuoteQualNativeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotequalnativefieldstate)**() |
| short | **[getShortSaleBidTickFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getshortsalebidtickfieldstate)**() |
| short | **[getShortSaleCircuitBreakerFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreakerfieldstate)**() |
| short | **[getAskTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasktimefieldstate)**() |
| short | **[getBidTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidtimefieldstate)**() |
| short | **[getAskIndicatorFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskindicatorfieldstate)**() |
| short | **[getBidIndicatorFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidindicatorfieldstate)**() |
| short | **[getAskUpdateCountFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskupdatecountfieldstate)**() |
| short | **[getBidUpdateCountFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidupdatecountfieldstate)**() |
| short | **[getAskYieldFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskyieldfieldstate)**() |
| short | **[getBidYieldFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidyieldfieldstate)**() |
| short | **[getQuoteCountFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getquotecountfieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventseqnumfieldstate)**() |
| short | **[getEventDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventdatefieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventtimefieldstate)**() |
| short | **[getAskSizesListFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasksizeslistfieldstate)**() |
| short | **[getBidSizesListFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidsizeslistfieldstate)**() |
| short | **[getBeginGapSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbegingapseqnumfieldstate)**() |
| short | **[getEndGapSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getendgapseqnumfieldstate)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, MamaMsg msg, short msgType) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mGapBeginFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#variable-mgapbeginfieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mGapEndFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#variable-mgapendfieldstate)**  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| final MamdaQuoteCache | **[mQuoteCache](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#variable-mquotecache)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaQuoteListener;
```


[MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) is a class that specializes in handling quote updates. Developers provide their own implementation of the [MamdaQuoteHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteHandler.html) interface and will be delivered notifications for quotes and quote closing prices. An obvious application for this MAMDA class is any kind of quote tick capture application.

Note: The [MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html) class caches quote-related field values. Among other reasons, caching of these fields makes it possible to provide complete quote-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaQuoteListener

```java
inline MamdaQuoteListener()
```


Create a specialized quote listener. This listener handles quote updates, quote recaps, and quote gap notifications. 


### function clearCache

```java
inline void clearCache(
    MamdaQuoteCache cache
)
```


### function addHandler

```java
inline void addHandler(
    MamdaQuoteHandler handler
)
```


Add a specialized quote handler. Currently, only one handler can (and must) be registered. 


### function getSymbol

```java
inline String getSymbol()
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)


Get the string symbol for the instrument.


### function getPartId

```java
inline String getPartId()
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)


Get the participant identifier.


### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getLineTime

```java
inline MamaDateTime getLineTime()
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)


Get the line time of the update.


### function getSendTime

```java
inline MamaDateTime getSendTime()
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)


Get the send time of the update.


### function getPubId

```java
inline String getPubId()
```


### function getBidPrice

```java
inline MamaPrice getBidPrice()
```


**Return**: Today's closing bid price, after the market has closed and the stock has traded today. 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getBidPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidprice)


Get the closing bid price. 


### function getBidSize

```java
inline double getBidSize()
```


**Return**: Today's closing bid size, after the market has closed and the stock has traded today. 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getBidSize](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidsize)


Get the closing bid size. 


### function getBidPartId

```java
inline String getBidPartId()
```


**Return**: Today's closing bid participant identifier, after the market has closed and the stock has traded today. 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getBidPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidpartid)


Get the closing bid participant identifier. 


### function getBidClosePrice

```java
inline MamaPrice getBidClosePrice()
```


### function getBidCloseDate

```java
inline MamaDateTime getBidCloseDate()
```


### function getBidPrevClosePrice

```java
inline MamaPrice getBidPrevClosePrice()
```


### function getBidPrevCloseDate

```java
inline MamaDateTime getBidPrevCloseDate()
```


### function getBidHigh

```java
inline MamaPrice getBidHigh()
```


### function getBidLow

```java
inline MamaPrice getBidLow()
```


### function getAskPrice

```java
inline MamaPrice getAskPrice()
```


**Return**: Today's closing ask price, after the market has closed and the stock has traded today. 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getAskPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getaskprice)


Get the closing ask price. 


### function getAskSize

```java
inline double getAskSize()
```


**Return**: Today's closing ask size, after the market has closed and the stock has traded today. 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getAskSize](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getasksize)


Get the closing ask size. 


### function getAskPartId

```java
inline String getAskPartId()
```


**Return**: Today's closing ask participant identifier, after the market has closed and the stock has traded today. 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getAskPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getaskpartid)


Get the closing ask participant identifier. 


### function getAskDepth

```java
inline double getAskDepth()
```


**Return**: the quote bid depth 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskDepth](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getaskdepth)


### function getBidDepth

```java
inline double getBidDepth()
```


**Return**: the quote bid depth 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidDepth](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbiddepth)


### function getAskClosePrice

```java
inline MamaPrice getAskClosePrice()
```


### function getAskCloseDate

```java
inline MamaDateTime getAskCloseDate()
```


### function getAskPrevClosePrice

```java
inline MamaPrice getAskPrevClosePrice()
```


### function getAskPrevCloseDate

```java
inline MamaDateTime getAskPrevCloseDate()
```


### function getAskHigh

```java
inline MamaPrice getAskHigh()
```


### function getAskLow

```java
inline MamaPrice getAskLow()
```


### function getQuoteMidPrice

```java
inline MamaPrice getQuoteMidPrice()
```


**Return**: The mid price of the current quote. Usually, this is the average of the bid and ask prices, but some exchanges provide this field explicitly (e.g. LSE). 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getQuoteMidPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getquotemidprice)


Get the quote mid price.


### function getQuoteQual

```java
inline String getQuoteQual()
```


**See**: [MamdaQuoteUpdate::getQuoteQual](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html#function-getquotequal)

**Return**: A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character.

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getQuoteQual](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getquotequal)


Get the normalized quote qualifier.


### function getQuoteQualNative

```java
inline String getQuoteQualNative()
```


**See**: [MamdaQuoteUpdate::getQuoteQualNative()](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html#function-getquotequalnative)

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getQuoteQualNative](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getquotequalnative)


### function getShortSaleBidTick

```java
inline char getShortSaleBidTick()
```


**See**: [MamdaQuoteUpdate::getShortSaleBidTick()](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html#function-getshortsalebidtick)

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getShortSaleBidTick](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getshortsalebidtick)


### function getShortSaleCircuitBreaker

```java
inline char getShortSaleCircuitBreaker()
```


**See**: [MamdaQuoteUpdate::getShortSaleCircuitBreaker()](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html#function-getshortsalecircuitbreaker)

**Return**: ShortSaleCircuitBreaker 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getShortSaleCircuitBreaker](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreaker)


getShortSaleCircuitBreaker Returns the ShortSaleCircuitBreaker 


### function getAskTime

```java
inline MamaDateTime getAskTime()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getasktime)


### function getBidTime

```java
inline MamaDateTime getBidTime()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidtime)


### function getAskIndicator

```java
inline String getAskIndicator()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskIndicator](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getaskindicator)


### function getBidIndicator

```java
inline String getBidIndicator()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidIndicator](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidindicator)


### function getAskUpdateCount

```java
inline long getAskUpdateCount()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskUpdateCount](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getaskupdatecount)


### function getBidUpdateCount

```java
inline long getBidUpdateCount()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidUpdateCount](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidupdatecount)


### function getAskYield

```java
inline double getAskYield()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskYield](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getaskyield)


### function getBidYield

```java
inline double getBidYield()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidYield](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidyield)


### function getQuoteCount

```java
inline long getQuoteCount()
```


**Return**: The number of quotes generated for this security during the current trading session. 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getQuoteCount](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getquotecount)


Get the quote count.


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventDate

```java
inline MamaDateTime getEventDate()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getEventDate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-geteventdate)


Date corresponding to the last quote, as reported by the feed. 


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-geteventtime)


Time corresponding to the last quote, as reported by the feed. 


### function getAskSizesList

```java
inline String getAskSizesList()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskSizesList](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getasksizeslist)


### function getBidSizesList

```java
inline String getBidSizesList()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidSizesList](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidsizeslist)


### function getEventDateTime

```java
inline MamaDateTime getEventDateTime()
```


### function getQuoteDate

```java
inline MamaDateTime getQuoteDate()
```


### function getBeginGapSeqNum

```java
inline long getBeginGapSeqNum()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteGap::getBeginGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html#function-getbegingapseqnum)


The starting sequence number of detected missing quotes based on the quote count. 


### function getEndGapSeqNum

```java
inline long getEndGapSeqNum()
```


**Reimplements**: [com::wombat::mamda::MamdaQuoteGap::getEndGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html#function-getendgapseqnum)


The end sequence number of detected missing quotes based on the quote count. 


### function getSymbolFieldState

```java
inline short getSymbolFieldState()
```


**Return**: symbol Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


### function getPartIdFieldState

```java
inline short getPartIdFieldState()
```


**Return**: participant ID Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


return Source time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


return Activity time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getLineTimeFieldState

```java
inline short getLineTimeFieldState()
```


**Return**: line time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


### function getSendTimeFieldState

```java
inline short getSendTimeFieldState()
```


**Return**: send time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


### function getPubIdFieldState

```java
inline short getPubIdFieldState()
```


### function getBidPriceFieldState

```java
inline short getBidPriceFieldState()
```


**Return**: the bid price Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getBidPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidpricefieldstate)


### function getBidSizeFieldState

```java
inline short getBidSizeFieldState()
```


**Return**: the bid size Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getBidSizeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidsizefieldstate)


### function getBidPartIdFieldState

```java
inline short getBidPartIdFieldState()
```


**Return**: the bid part ID Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getBidPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidpartidfieldstate)


### function getBidClosePriceFieldState

```java
inline short getBidClosePriceFieldState()
```


### function getBidCloseDateFieldState

```java
inline short getBidCloseDateFieldState()
```


### function getBidPrevClosePriceFieldState

```java
inline short getBidPrevClosePriceFieldState()
```


### function getBidPrevCloseDateFieldState

```java
inline short getBidPrevCloseDateFieldState()
```


### function getBidHighFieldState

```java
inline short getBidHighFieldState()
```


### function getBidLowFieldState

```java
inline short getBidLowFieldState()
```


### function getAskPriceFieldState

```java
inline short getAskPriceFieldState()
```


**Return**: the ask price Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getAskPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getaskpricefieldstate)


### function getAskSizeFieldState

```java
inline short getAskSizeFieldState()
```


**Return**: the ask size Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getAskSizeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getasksizefieldstate)


### function getAskPartIdFieldState

```java
inline short getAskPartIdFieldState()
```


**Return**: the ask part ID Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteClosing::getAskPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getaskpartidfieldstate)


### function getAskClosePriceFieldState

```java
inline short getAskClosePriceFieldState()
```


### function getAskCloseDateFieldState

```java
inline short getAskCloseDateFieldState()
```


### function getAskPrevClosePriceFieldState

```java
inline short getAskPrevClosePriceFieldState()
```


### function getAskPrevCloseDateFieldState

```java
inline short getAskPrevCloseDateFieldState()
```


### function getAskHighFieldState

```java
inline short getAskHighFieldState()
```


### function getAskLowFieldState

```java
inline short getAskLowFieldState()
```


### function getAskDepthFieldState

```java
inline short getAskDepthFieldState()
```


**Return**: the ask depth Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskDepthFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getaskdepthfieldstate)


### function getBidDepthFieldState

```java
inline short getBidDepthFieldState()
```


**Return**: the bid depth Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidDepthFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbiddepthfieldstate)


### function getQuoteMidPriceFieldState

```java
inline short getQuoteMidPriceFieldState()
```


**Return**: the quote mid price Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getQuoteMidPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getquotemidpricefieldstate)


### function getQuoteQualFieldState

```java
inline short getQuoteQualFieldState()
```


**Return**: the quote qual Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getQuoteQualFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getquotequalfieldstate)


### function getQuoteQualNativeFieldState

```java
inline short getQuoteQualNativeFieldState()
```


**Return**: the quote qual native Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getQuoteQualNativeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getquotequalnativefieldstate)


### function getShortSaleBidTickFieldState

```java
inline short getShortSaleBidTickFieldState()
```


**Return**: the short sale bid tick Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getShortSaleBidTickFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getshortsalebidtickfieldstate)


### function getShortSaleCircuitBreakerFieldState

```java
inline short getShortSaleCircuitBreakerFieldState()
```


**Return**: Returns the FieldState, always MODIFIED. 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getShortSaleCircuitBreakerFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function getAskTimeFieldState

```java
inline short getAskTimeFieldState()
```


**Return**: the ask time Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getasktimefieldstate)


### function getBidTimeFieldState

```java
inline short getBidTimeFieldState()
```


**Return**: the bid time Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidtimefieldstate)


### function getAskIndicatorFieldState

```java
inline short getAskIndicatorFieldState()
```


**Return**: the ask indicator Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskIndicatorFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getaskindicatorfieldstate)


### function getBidIndicatorFieldState

```java
inline short getBidIndicatorFieldState()
```


**Return**: the bid indicator Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidIndicatorFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidindicatorfieldstate)


### function getAskUpdateCountFieldState

```java
inline short getAskUpdateCountFieldState()
```


**Return**: the ask update count Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskUpdateCountFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getaskupdatecountfieldstate)


### function getBidUpdateCountFieldState

```java
inline short getBidUpdateCountFieldState()
```


**Return**: the bid update count Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidUpdateCountFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidupdatecountfieldstate)


### function getAskYieldFieldState

```java
inline short getAskYieldFieldState()
```


**Return**: the ask yield Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskYieldFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getaskyieldfieldstate)


### function getBidYieldFieldState

```java
inline short getBidYieldFieldState()
```


**Return**: the bid yield Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidYieldFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidyieldfieldstate)


### function getQuoteCountFieldState

```java
inline short getQuoteCountFieldState()
```


**Return**: the quote count Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getQuoteCountFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getquotecountfieldstate)


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


return source sequence number Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getEventDateFieldState

```java
inline short getEventDateFieldState()
```


**Return**: event date Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getEventDateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-geteventdatefieldstate)


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**Return**: the event time Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-geteventtimefieldstate)


### function getAskSizesListFieldState

```java
inline short getAskSizesListFieldState()
```


**Return**: the ask sizes list Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getAskSizesListFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getasksizeslistfieldstate)


### function getBidSizesListFieldState

```java
inline short getBidSizesListFieldState()
```


**Return**: the bid sizes list Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteRecap::getBidSizesListFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html#function-getbidsizeslistfieldstate)


### function getBeginGapSeqNumFieldState

```java
inline short getBeginGapSeqNumFieldState()
```


**Return**: the begin gap seq num Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteGap::getBeginGapSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html#function-getbegingapseqnumfieldstate)


### function getEndGapSeqNumFieldState

```java
inline short getEndGapSeqNumFieldState()
```


**Return**: the end gap seq num Field State 

**Reimplements**: [com::wombat::mamda::MamdaQuoteGap::getEndGapSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html#function-getendgapseqnumfieldstate)


### function onMsg

```java
inline void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    short msgType
)
```


**Reimplements**: [com::wombat::mamda::MamdaMsgListener::onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. NB! For internal use only. 


## Public Attributes Documentation

### variable mGapBeginFieldState

```java
MamdaFieldState mGapBeginFieldState = new MamdaFieldState();
```


### variable mGapEndFieldState

```java
MamdaFieldState mGapEndFieldState = new MamdaFieldState();
```


## Protected Attributes Documentation

### variable mQuoteCache

```java
final MamdaQuoteCache mQuoteCache =
                            new MamdaQuoteCache ();
```


-------------------------------

Updated on 2023-03-31 at 15:30:33 +0100