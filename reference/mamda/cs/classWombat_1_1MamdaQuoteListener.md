---
title: Wombat::MamdaQuoteListener
summary: MamdaQuoteListener is a class that specializes in handling quote updates. Developers provide their own implementation of the MamdaQuoteHandler interface and will be delivered notifications for quotes and quote closing prices. An obvious application for this MAMDA class is any kind of quote tick capture application. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteListener



[MamdaQuoteListener]() is a class that specializes in handling quote updates. Developers provide their own implementation of the [MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html) interface and will be delivered notifications for quotes and quote closing prices. An obvious application for this MAMDA class is any kind of quote tick capture application.  [More...](#detailed-description)

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html), [Wombat.MamdaQuoteUpdate](interfaceWombat_1_1MamdaQuoteUpdate.html), [Wombat.MamdaQuoteGap](interfaceWombat_1_1MamdaQuoteGap.html), [Wombat.MamdaQuoteClosing](interfaceWombat_1_1MamdaQuoteClosing.html), [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html), [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html#function-mamdaquotelistener)**()<br>Create a specialized quote listener. This listener handles quote updates, quote recaps, and quote gap notifications.  |
| void | **[addHandler](classWombat_1_1MamdaQuoteListener.html#function-addhandler)**([MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html) handler)<br>Add a specialized quote handler. Currently, only one handler can (and must) be registered.  |
| string | **[getSymbol](classWombat_1_1MamdaQuoteListener.html#function-getsymbol)**()<br>Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher.  |
| string | **[getPartId](classWombat_1_1MamdaQuoteListener.html#function-getpartid)**()<br>Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant).  |
| DateTime | **[getSrcTime](classWombat_1_1MamdaQuoteListener.html#function-getsrctime)**()<br>Returns the source time.  |
| DateTime | **[getActivityTime](classWombat_1_1MamdaQuoteListener.html#function-getactivitytime)**() |
| DateTime | **[getLineTime](classWombat_1_1MamdaQuoteListener.html#function-getlinetime)**()<br>Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler.  |
| DateTime | **[getSendTime](classWombat_1_1MamdaQuoteListener.html#function-getsendtime)**()<br>Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()).  |
| string | **[getPubId](classWombat_1_1MamdaQuoteListener.html#function-getpubid)**() |
| MamaPrice | **[getBidPrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprice)**()<br>Get the closing bid price.  |
| long | **[getBidSize](classWombat_1_1MamdaQuoteListener.html#function-getbidsize)**()<br>Get the closing bid size.  |
| long | **[getBidDepth](classWombat_1_1MamdaQuoteListener.html#function-getbiddepth)**() |
| string | **[getBidPartId](classWombat_1_1MamdaQuoteListener.html#function-getbidpartid)**()<br>Get the closing bid participant identifier.  |
| MamaPrice | **[getBidClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getbidcloseprice)**() |
| DateTime | **[getBidCloseDate](classWombat_1_1MamdaQuoteListener.html#function-getbidclosedate)**() |
| MamaPrice | **[getBidPrevClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprevcloseprice)**() |
| DateTime | **[getBidPrevCloseDate](classWombat_1_1MamdaQuoteListener.html#function-getbidprevclosedate)**() |
| MamaPrice | **[getBidHigh](classWombat_1_1MamdaQuoteListener.html#function-getbidhigh)**() |
| MamaPrice | **[getBidLow](classWombat_1_1MamdaQuoteListener.html#function-getbidlow)**() |
| MamaPrice | **[getAskPrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprice)**()<br>Get the closing ask price.  |
| long | **[getAskSize](classWombat_1_1MamdaQuoteListener.html#function-getasksize)**()<br>Get the closing ask size.  |
| long | **[getAskDepth](classWombat_1_1MamdaQuoteListener.html#function-getaskdepth)**() |
| string | **[getAskPartId](classWombat_1_1MamdaQuoteListener.html#function-getaskpartid)**()<br>Get the closing ask participant identifier.  |
| MamaPrice | **[getAskClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getaskcloseprice)**() |
| DateTime | **[getAskCloseDate](classWombat_1_1MamdaQuoteListener.html#function-getaskclosedate)**() |
| MamaPrice | **[getAskPrevClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprevcloseprice)**() |
| DateTime | **[getAskPrevCloseDate](classWombat_1_1MamdaQuoteListener.html#function-getaskprevclosedate)**() |
| MamaPrice | **[getAskHigh](classWombat_1_1MamdaQuoteListener.html#function-getaskhigh)**() |
| MamaPrice | **[getAskLow](classWombat_1_1MamdaQuoteListener.html#function-getasklow)**() |
| MamaPrice | **[getQuoteMidPrice](classWombat_1_1MamdaQuoteListener.html#function-getquotemidprice)**()<br>Get the quote mid price.  |
| string | **[getQuoteQual](classWombat_1_1MamdaQuoteListener.html#function-getquotequal)**()<br>Get the normalized quote qualifier.  |
| string | **[getQuoteQualNative](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnative)**()<br>[MamdaQuoteUpdate.getQuoteQualNative()]() |
| char | **[getShortSaleBidTick](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtick)**()<br>[MamdaQuoteUpdate.getShortSaleBidTick()]() |
| char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreaker)**()<br>[MamdaQuoteUpdate.getShortSaleCircuitBreaker()]() |
| long | **[getQuoteCount](classWombat_1_1MamdaQuoteListener.html#function-getquotecount)**()<br>Get the quote count.  |
| long | **[getEventSeqNum](classWombat_1_1MamdaQuoteListener.html#function-geteventseqnum)**() |
| DateTime | **[getEventTime](classWombat_1_1MamdaQuoteListener.html#function-geteventtime)**() |
| DateTime | **[getQuoteDate](classWombat_1_1MamdaQuoteListener.html#function-getquotedate)**() |
| long | **[getBeginGapSeqNum](classWombat_1_1MamdaQuoteListener.html#function-getbegingapseqnum)**()<br>The starting sequence number of detected missing quotes based on the quote count.  |
| long | **[getEndGapSeqNum](classWombat_1_1MamdaQuoteListener.html#function-getendgapseqnum)**()<br>The end sequence number of detected missing quotes based on the quote count.  |
| DateTime | **[getAskTime](classWombat_1_1MamdaQuoteListener.html#function-getasktime)**() |
| DateTime | **[getBidTime](classWombat_1_1MamdaQuoteListener.html#function-getbidtime)**() |
| string | **[getAskIndicator](classWombat_1_1MamdaQuoteListener.html#function-getaskindicator)**() |
| string | **[getBidIndicator](classWombat_1_1MamdaQuoteListener.html#function-getbidindicator)**() |
| long | **[getAskUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecount)**() |
| long | **[getBidUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecount)**() |
| double | **[getAskYield](classWombat_1_1MamdaQuoteListener.html#function-getaskyield)**() |
| double | **[getBidYield](classWombat_1_1MamdaQuoteListener.html#function-getbidyield)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsymbolfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getpartidfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getlinetimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsendtimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getpubidfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidDepthFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbiddepthfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidclosepricefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidCloseDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidclosedatefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPrevClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidprevclosepricefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPrevCloseDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidprevclosedatefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidHighFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidhighfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidLowFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidlowfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskDepthFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskdepthfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskclosepricefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskCloseDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskclosedatefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPrevClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskprevclosepricefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPrevCloseDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskprevclosedatefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskHighFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskhighfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskLowFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasklowfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualNativeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnativefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleBidTickFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtickfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotecountfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotedatefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBeginGapSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbegingapseqnumfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEndGapSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-getendgapseqnumfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasktimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidtimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskindicatorfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidindicatorfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecountfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecountfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskyieldfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidyieldfieldstate)**() |
| void | **[onMsg](classWombat_1_1MamdaQuoteListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Invoked for each message received for the subscription to which the Listener is registered.  |
| void | **[populateRecap](classWombat_1_1MamdaQuoteListener.html#function-populaterecap)**([MamdaConcreteQuoteRecap](classWombat_1_1MamdaConcreteQuoteRecap.html) recap) |

## Detailed Description

```csharp
class Wombat::MamdaQuoteListener;
```

[MamdaQuoteListener]() is a class that specializes in handling quote updates. Developers provide their own implementation of the [MamdaQuoteHandler](interfaceWombat_1_1MamdaQuoteHandler.html) interface and will be delivered notifications for quotes and quote closing prices. An obvious application for this MAMDA class is any kind of quote tick capture application. 

Note: The [MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html) class caches quote-related field values. Among other reasons, caching of these fields makes it possible to provide complete quote-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaQuoteListener

```csharp
MamdaQuoteListener()
```

Create a specialized quote listener. This listener handles quote updates, quote recaps, and quote gap notifications. 

### function addHandler

```csharp
void addHandler(
    MamdaQuoteHandler handler
)
```

Add a specialized quote handler. Currently, only one handler can (and must) be registered. 

**Parameters**: 

  * **handler** 


### function getSymbol

```csharp
string getSymbol()
```

Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [Wombat::MamdaBasicRecap::getSymbol](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbol)


### function getPartId

```csharp
string getPartId()
```

Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [Wombat::MamdaBasicRecap::getPartId](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartid)


### function getSrcTime

```csharp
DateTime getSrcTime()
```

Returns the source time. 

**Return**: Source time. Typically, the exchange generated feed

* time stamp. This is often the same as the "event time",
* because many feeds do not distinguish between the actual event
* time and when the exchange sent the message.

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)


### function getActivityTime

```csharp
DateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated.

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getLineTime

```csharp
DateTime getLineTime()
```

Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [Wombat::MamdaBasicRecap::getLineTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetime)


### function getSendTime

```csharp
DateTime getSendTime()
```

Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplements**: [Wombat::MamdaBasicRecap::getSendTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtime)


### function getPubId

```csharp
string getPubId()
```


### function getBidPrice

```csharp
MamaPrice getBidPrice()
```

Get the closing bid price. 

**Return**: Today's closing bid price, after the market has closed and the stock has traded today.

**Reimplements**: [Wombat::MamdaQuoteClosing::getBidPrice](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidprice)


### function getBidSize

```csharp
long getBidSize()
```

Get the closing bid size. 

**Return**: Today's closing bid size, after the market has closed and the stock has traded today.

**Reimplements**: [Wombat::MamdaQuoteClosing::getBidSize](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidsize)


### function getBidDepth

```csharp
long getBidDepth()
```


### function getBidPartId

```csharp
string getBidPartId()
```

Get the closing bid participant identifier. 

**Return**: Today's closing bid participant identifier, after the market has closed and the stock has traded today.

**Reimplements**: [Wombat::MamdaQuoteClosing::getBidPartId](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidpartid)


### function getBidClosePrice

```csharp
MamaPrice getBidClosePrice()
```


### function getBidCloseDate

```csharp
DateTime getBidCloseDate()
```


### function getBidPrevClosePrice

```csharp
MamaPrice getBidPrevClosePrice()
```


### function getBidPrevCloseDate

```csharp
DateTime getBidPrevCloseDate()
```


### function getBidHigh

```csharp
MamaPrice getBidHigh()
```


### function getBidLow

```csharp
MamaPrice getBidLow()
```


### function getAskPrice

```csharp
MamaPrice getAskPrice()
```

Get the closing ask price. 

**Return**: Today's closing ask price, after the market has closed and the stock has traded today.

**Reimplements**: [Wombat::MamdaQuoteClosing::getAskPrice](interfaceWombat_1_1MamdaQuoteClosing.html#function-getaskprice)


### function getAskSize

```csharp
long getAskSize()
```

Get the closing ask size. 

**Return**: Today's closing ask size, after the market has closed and the stock has traded today.

**Reimplements**: [Wombat::MamdaQuoteClosing::getAskSize](interfaceWombat_1_1MamdaQuoteClosing.html#function-getasksize)


### function getAskDepth

```csharp
long getAskDepth()
```


### function getAskPartId

```csharp
string getAskPartId()
```

Get the closing ask participant identifier. 

**Return**: Today's closing ask participant identifier, after the market has closed and the stock has traded today.

**Reimplements**: [Wombat::MamdaQuoteClosing::getAskPartId](interfaceWombat_1_1MamdaQuoteClosing.html#function-getaskpartid)


### function getAskClosePrice

```csharp
MamaPrice getAskClosePrice()
```


### function getAskCloseDate

```csharp
DateTime getAskCloseDate()
```


### function getAskPrevClosePrice

```csharp
MamaPrice getAskPrevClosePrice()
```


### function getAskPrevCloseDate

```csharp
DateTime getAskPrevCloseDate()
```


### function getAskHigh

```csharp
MamaPrice getAskHigh()
```


### function getAskLow

```csharp
MamaPrice getAskLow()
```


### function getQuoteMidPrice

```csharp
MamaPrice getQuoteMidPrice()
```

Get the quote mid price. 

**Return**: The mid price of the current quote. Usually, this is the average of the bid and ask prices, but some exchanges provide this field explicitly.

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteMidPrice](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotemidprice)


### function getQuoteQual

```csharp
string getQuoteQual()
```

Get the normalized quote qualifier. 

**Return**: A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character. [MamdaQuoteUpdate.getQuoteQual](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getquotequal)

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQual](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequal)


### function getQuoteQualNative

```csharp
string getQuoteQualNative()
```

[MamdaQuoteUpdate.getQuoteQualNative()]()

**Return**: 

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQualNative](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalnative)


### function getShortSaleBidTick

```csharp
char getShortSaleBidTick()
```

[MamdaQuoteUpdate.getShortSaleBidTick()]()

**Return**: 

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleBidTick](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalebidtick)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

[MamdaQuoteUpdate.getShortSaleCircuitBreaker()]()

**Return**: 

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreaker)


### function getQuoteCount

```csharp
long getQuoteCount()
```

Get the quote count. 

**Return**: The number of quotes generated for this security during the current trading session.

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotecount)


### function getEventSeqNum

```csharp
long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number.

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventTime

```csharp
DateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)


### function getQuoteDate

```csharp
DateTime getQuoteDate()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteDate](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotedate)


### function getBeginGapSeqNum

```csharp
long getBeginGapSeqNum()
```

The starting sequence number of detected missing quotes based on the quote count. 

**Return**: 

**Reimplements**: [Wombat::MamdaQuoteGap::getBeginGapSeqNum](interfaceWombat_1_1MamdaQuoteGap.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```csharp
long getEndGapSeqNum()
```

The end sequence number of detected missing quotes based on the quote count. 

**Return**: 

**Reimplements**: [Wombat::MamdaQuoteGap::getEndGapSeqNum](interfaceWombat_1_1MamdaQuoteGap.html#function-getendgapseqnum)


### function getAskTime

```csharp
DateTime getAskTime()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskTime](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasktime)


### function getBidTime

```csharp
DateTime getBidTime()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidTime](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidtime)


### function getAskIndicator

```csharp
string getAskIndicator()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskIndicator](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskindicator)


### function getBidIndicator

```csharp
string getBidIndicator()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidIndicator](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidindicator)


### function getAskUpdateCount

```csharp
long getAskUpdateCount()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskUpdateCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskupdatecount)


### function getBidUpdateCount

```csharp
long getBidUpdateCount()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidUpdateCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidupdatecount)


### function getAskYield

```csharp
double getAskYield()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskYield](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskyield)


### function getBidYield

```csharp
double getBidYield()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidYield](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidyield)


### function getSymbolFieldState

```csharp
MamdaFieldState getSymbolFieldState()
```

Returns the field state. 

**Return**: Symbol Field State

**Reimplements**: [Wombat::MamdaBasicRecap::getSymbolFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


### function getPartIdFieldState

```csharp
MamdaFieldState getPartIdFieldState()
```

Returns the field state. 

**Return**: Participant ID Field State

**Reimplements**: [Wombat::MamdaBasicRecap::getPartIdFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

Returns the field state. 

**Return**: Source time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

Returns the field state. 

**Return**: Activity time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


### function getLineTimeFieldState

```csharp
MamdaFieldState getLineTimeFieldState()
```

Returns the field state. 

**Return**: Line Time Field State

**Reimplements**: [Wombat::MamdaBasicRecap::getLineTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


### function getSendTimeFieldState

```csharp
MamdaFieldState getSendTimeFieldState()
```

Returns the field state. 

**Return**: Send time Field State

**Reimplements**: [Wombat::MamdaBasicRecap::getSendTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


### function getPubIdFieldState

```csharp
MamdaFieldState getPubIdFieldState()
```


### function getBidPriceFieldState

```csharp
MamdaFieldState getBidPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteClosing::getBidPriceFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidpricefieldstate)


### function getBidSizeFieldState

```csharp
MamdaFieldState getBidSizeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteClosing::getBidSizeFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidsizefieldstate)


### function getBidDepthFieldState

```csharp
MamdaFieldState getBidDepthFieldState()
```


### function getBidPartIdFieldState

```csharp
MamdaFieldState getBidPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteClosing::getBidPartIdFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getbidpartidfieldstate)


### function getBidClosePriceFieldState

```csharp
MamdaFieldState getBidClosePriceFieldState()
```


### function getBidCloseDateFieldState

```csharp
MamdaFieldState getBidCloseDateFieldState()
```


### function getBidPrevClosePriceFieldState

```csharp
MamdaFieldState getBidPrevClosePriceFieldState()
```


### function getBidPrevCloseDateFieldState

```csharp
MamdaFieldState getBidPrevCloseDateFieldState()
```


### function getBidHighFieldState

```csharp
MamdaFieldState getBidHighFieldState()
```


### function getBidLowFieldState

```csharp
MamdaFieldState getBidLowFieldState()
```


### function getAskPriceFieldState

```csharp
MamdaFieldState getAskPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteClosing::getAskPriceFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getaskpricefieldstate)


### function getAskSizeFieldState

```csharp
MamdaFieldState getAskSizeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteClosing::getAskSizeFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getasksizefieldstate)


### function getAskDepthFieldState

```csharp
MamdaFieldState getAskDepthFieldState()
```


### function getAskPartIdFieldState

```csharp
MamdaFieldState getAskPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteClosing::getAskPartIdFieldState](interfaceWombat_1_1MamdaQuoteClosing.html#function-getaskpartidfieldstate)


### function getAskClosePriceFieldState

```csharp
MamdaFieldState getAskClosePriceFieldState()
```


### function getAskCloseDateFieldState

```csharp
MamdaFieldState getAskCloseDateFieldState()
```


### function getAskPrevClosePriceFieldState

```csharp
MamdaFieldState getAskPrevClosePriceFieldState()
```


### function getAskPrevCloseDateFieldState

```csharp
MamdaFieldState getAskPrevCloseDateFieldState()
```


### function getAskHighFieldState

```csharp
MamdaFieldState getAskHighFieldState()
```


### function getAskLowFieldState

```csharp
MamdaFieldState getAskLowFieldState()
```


### function getQuoteQualFieldState

```csharp
MamdaFieldState getQuoteQualFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQualFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalfieldstate)


### function getQuoteQualNativeFieldState

```csharp
MamdaFieldState getQuoteQualNativeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteQualNativeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalnativefieldstate)


### function getShortSaleBidTickFieldState

```csharp
MamdaFieldState getShortSaleBidTickFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleBidTickFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalebidtickfieldstate)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteRecap::getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function getQuoteCountFieldState

```csharp
MamdaFieldState getQuoteCountFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotecountfieldstate)


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

Returns the field state. 

**Return**: Source sequence number Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

Returns the field state. 

**Return**: Event Time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function getQuoteDateFieldState

```csharp
MamdaFieldState getQuoteDateFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getQuoteDateFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotedatefieldstate)


### function getBeginGapSeqNumFieldState

```csharp
MamdaFieldState getBeginGapSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteGap::getBeginGapSeqNumFieldState](interfaceWombat_1_1MamdaQuoteGap.html#function-getbegingapseqnumfieldstate)


### function getEndGapSeqNumFieldState

```csharp
MamdaFieldState getEndGapSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaQuoteGap::getEndGapSeqNumFieldState](interfaceWombat_1_1MamdaQuoteGap.html#function-getendgapseqnumfieldstate)


### function getAskTimeFieldState

```csharp
MamdaFieldState getAskTimeFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskTimeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasktimefieldstate)


### function getBidTimeFieldState

```csharp
MamdaFieldState getBidTimeFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidTimeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidtimefieldstate)


### function getAskIndicatorFieldState

```csharp
MamdaFieldState getAskIndicatorFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskIndicatorFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskindicatorfieldstate)


### function getBidIndicatorFieldState

```csharp
MamdaFieldState getBidIndicatorFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidIndicatorFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidindicatorfieldstate)


### function getAskUpdateCountFieldState

```csharp
MamdaFieldState getAskUpdateCountFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskUpdateCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskupdatecountfieldstate)


### function getBidUpdateCountFieldState

```csharp
MamdaFieldState getBidUpdateCountFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidUpdateCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidupdatecountfieldstate)


### function getAskYieldFieldState

```csharp
MamdaFieldState getAskYieldFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getAskYieldFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskyieldfieldstate)


### function getBidYieldFieldState

```csharp
MamdaFieldState getBidYieldFieldState()
```


**Reimplements**: [Wombat::MamdaQuoteRecap::getBidYieldFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidyieldfieldstate)


### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```

Invoked for each message received for the subscription to which the Listener is registered. 

**Parameters**: 

  * **subscription** The [MamdaSubscription](classWombat_1_1MamdaSubscription.html) to which this listener was registered.
  * **msg** The MamaMsg received by the underlying MAMA API and which resulted in this callback being invoked.
  * **msgType** The message type. e.g. INITIAL, RECAP, UPDATE etc.


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)


### function populateRecap

```csharp
void populateRecap(
    MamdaConcreteQuoteRecap recap
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100