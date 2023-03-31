---
title: Wombat::MamdaQuoteRecap
summary: MamdaQuoteRecap is an interface that provides access to quote related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteRecap



[MamdaQuoteRecap]() is an interface that provides access to quote related fields. 

Inherits from [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat.MamdaConcreteQuoteRecap](classWombat_1_1MamdaConcreteQuoteRecap.html), [Wombat.MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getBidPrice](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidprice)**()<br>Get the bid price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidpricefieldstate)**()<br>Get the field state  |
| long | **[getBidSize](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidsize)**()<br>Get the bid size.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidsizefieldstate)**()<br>Get the field state  |
| string | **[getBidPartId](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidpartid)**()<br>Get the bid participant identifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPartIdFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidpartidfieldstate)**()<br>Get the field state  |
| MamaPrice | **[getAskPrice](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskprice)**()<br>Get the ask price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskpricefieldstate)**()<br>Get the field state  |
| long | **[getAskSize](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasksize)**()<br>Get the ask size.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasksizefieldstate)**()<br>Get the field state  |
| string | **[getAskPartId](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskpartid)**()<br>Get the ask participant identifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPartIdFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskpartidfieldstate)**()<br>Get the field state  |
| MamaPrice | **[getQuoteMidPrice](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotemidprice)**()<br>Get the quote mid price.  |
| long | **[getQuoteCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotecount)**()<br>Get the quote count.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotecountfieldstate)**()<br>Get the field state  |
| string | **[getQuoteQual](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequal)**()<br>Get the normalized quote qualifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalfieldstate)**()<br>Get the field state  |
| string | **[getQuoteQualNative](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalnative)**()<br>[MamdaQuoteUpdate.getQuoteQualNative()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualNativeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotequalnativefieldstate)**()<br>Get the field state  |
| char | **[getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreaker)**()<br>[MamdaQuoteUpdate.getShortSaleCircuitBreaker()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Get the field state  |
| char | **[getShortSaleBidTick](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalebidtick)**()<br>[MamdaQuoteUpdate.getShortSaleBidTick()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleBidTickFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getshortsalebidtickfieldstate)**()<br>Get the field state  |
| DateTime | **[getAskTime](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasktime)**() |
| DateTime | **[getBidTime](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidtime)**() |
| DateTime | **[getQuoteDate](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotedate)**() |
| string | **[getAskIndicator](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskindicator)**() |
| string | **[getBidIndicator](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidindicator)**() |
| long | **[getAskUpdateCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskupdatecount)**() |
| long | **[getBidUpdateCount](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidupdatecount)**() |
| double | **[getAskYield](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskyield)**() |
| double | **[getBidYield](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidyield)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskTimeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getasktimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidTimeFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidtimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteDateFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getquotedatefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskIndicatorFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskindicatorfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidIndicatorFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidindicatorfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskUpdateCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskupdatecountfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidUpdateCountFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidupdatecountfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskYieldFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getaskyieldfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidYieldFieldState](interfaceWombat_1_1MamdaQuoteRecap.html#function-getbidyieldfieldstate)**() |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| string | **[getSymbol](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbol)**()<br>Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**()<br>Returns the field state.  |
| string | **[getPartId](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartid)**()<br>Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctime)**()<br>Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytime)**()<br>Activity time. A feed handler generated time stamp representing when the data item was last updated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getLineTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetime)**()<br>Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getSendTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtime)**()<br>Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**()<br>Returns the field state.  |


## Public Functions Documentation

### function getBidPrice

```csharp
MamaPrice getBidPrice()
```

Get the bid price. 

**Return**: Bid price. The highest price that the representative party/group is willing to pay to buy the security. For most feeds, this size is represented in round lots.

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidprice), [Wombat::MamdaQuoteListener::getBidPrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprice)


### function getBidPriceFieldState

```csharp
MamdaFieldState getBidPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidPriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidpricefieldstate), [Wombat::MamdaQuoteListener::getBidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)


### function getBidSize

```csharp
long getBidSize()
```

Get the bid size. 

**Return**: Total share size available for the current bid price.

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidSize](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidsize), [Wombat::MamdaQuoteListener::getBidSize](classWombat_1_1MamdaQuoteListener.html#function-getbidsize)


### function getBidSizeFieldState

```csharp
MamdaFieldState getBidSizeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidSizeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidsizefieldstate), [Wombat::MamdaQuoteListener::getBidSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)


### function getBidPartId

```csharp
string getBidPartId()
```

Get the bid participant identifier. 

**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the bid price field.

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidpartid), [Wombat::MamdaQuoteListener::getBidPartId](classWombat_1_1MamdaQuoteListener.html#function-getbidpartid)


### function getBidPartIdFieldState

```csharp
MamdaFieldState getBidPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidPartIdFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidpartidfieldstate), [Wombat::MamdaQuoteListener::getBidPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)


### function getAskPrice

```csharp
MamaPrice getAskPrice()
```

Get the ask price. 

**Return**: Ask price. The lowest price that the representative party/group is willing to take to sell the security. For most feeds, this size is represented in round lots.

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskprice), [Wombat::MamdaQuoteListener::getAskPrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprice)


### function getAskPriceFieldState

```csharp
MamdaFieldState getAskPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskPriceFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskpricefieldstate), [Wombat::MamdaQuoteListener::getAskPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)


### function getAskSize

```csharp
long getAskSize()
```

Get the ask size. 

**Return**: Total share size available for the current ask price.

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskSize](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasksize), [Wombat::MamdaQuoteListener::getAskSize](classWombat_1_1MamdaQuoteListener.html#function-getasksize)




Note: many feeds provide this size in terms of round lots. [Wombat](namespaceWombat.html) may change the behavior of this in the future to represent the exact number of shares. 


### function getAskSizeFieldState

```csharp
MamdaFieldState getAskSizeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskSizeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasksizefieldstate), [Wombat::MamdaQuoteListener::getAskSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizefieldstate)


### function getAskPartId

```csharp
string getAskPartId()
```

Get the ask participant identifier. 

**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the ask price field.

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskpartid), [Wombat::MamdaQuoteListener::getAskPartId](classWombat_1_1MamdaQuoteListener.html#function-getaskpartid)


### function getAskPartIdFieldState

```csharp
MamdaFieldState getAskPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskPartIdFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskpartidfieldstate), [Wombat::MamdaQuoteListener::getAskPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)


### function getQuoteMidPrice

```csharp
MamaPrice getQuoteMidPrice()
```

Get the quote mid price. 

**Return**: The mid price of the current quote. Usually, this is the average of the bid and ask prices, but some exchanges provide this field explicitly.

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteMidPrice](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotemidprice), [Wombat::MamdaQuoteListener::getQuoteMidPrice](classWombat_1_1MamdaQuoteListener.html#function-getquotemidprice)


### function getQuoteCount

```csharp
long getQuoteCount()
```

Get the quote count. 

**Return**: The number of quotes generated for this security during the current trading session.

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotecount), [Wombat::MamdaQuoteListener::getQuoteCount](classWombat_1_1MamdaQuoteListener.html#function-getquotecount)


### function getQuoteCountFieldState

```csharp
MamdaFieldState getQuoteCountFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteCountFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotecountfieldstate), [Wombat::MamdaQuoteListener::getQuoteCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotecountfieldstate)


### function getQuoteQual

```csharp
string getQuoteQual()
```

Get the normalized quote qualifier. 

**Return**: A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character. [MamdaQuoteUpdate.getQuoteQual](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getquotequal)

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteQual](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotequal), [Wombat::MamdaQuoteListener::getQuoteQual](classWombat_1_1MamdaQuoteListener.html#function-getquotequal)


### function getQuoteQualFieldState

```csharp
MamdaFieldState getQuoteQualFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteQualFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotequalfieldstate), [Wombat::MamdaQuoteListener::getQuoteQualFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalfieldstate)


### function getQuoteQualNative

```csharp
string getQuoteQualNative()
```

[MamdaQuoteUpdate.getQuoteQualNative()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteQualNative](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotequalnative), [Wombat::MamdaQuoteListener::getQuoteQualNative](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnative)


### function getQuoteQualNativeFieldState

```csharp
MamdaFieldState getQuoteQualNativeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteQualNativeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotequalnativefieldstate), [Wombat::MamdaQuoteListener::getQuoteQualNativeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnativefieldstate)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

[MamdaQuoteUpdate.getShortSaleCircuitBreaker()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getShortSaleCircuitBreaker](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getshortsalecircuitbreaker), [Wombat::MamdaQuoteListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreaker)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getshortsalecircuitbreakerfieldstate), [Wombat::MamdaQuoteListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreakerfieldstate)


### function getShortSaleBidTick

```csharp
char getShortSaleBidTick()
```

[MamdaQuoteUpdate.getShortSaleBidTick()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getShortSaleBidTick](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getshortsalebidtick), [Wombat::MamdaQuoteListener::getShortSaleBidTick](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtick)


### function getShortSaleBidTickFieldState

```csharp
MamdaFieldState getShortSaleBidTickFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getShortSaleBidTickFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getshortsalebidtickfieldstate), [Wombat::MamdaQuoteListener::getShortSaleBidTickFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtickfieldstate)


### function getAskTime

```csharp
DateTime getAskTime()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasktime), [Wombat::MamdaQuoteListener::getAskTime](classWombat_1_1MamdaQuoteListener.html#function-getasktime)


### function getBidTime

```csharp
DateTime getBidTime()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidtime), [Wombat::MamdaQuoteListener::getBidTime](classWombat_1_1MamdaQuoteListener.html#function-getbidtime)


### function getQuoteDate

```csharp
DateTime getQuoteDate()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteDate](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotedate), [Wombat::MamdaQuoteListener::getQuoteDate](classWombat_1_1MamdaQuoteListener.html#function-getquotedate)


### function getAskIndicator

```csharp
string getAskIndicator()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskIndicator](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskindicator), [Wombat::MamdaQuoteListener::getAskIndicator](classWombat_1_1MamdaQuoteListener.html#function-getaskindicator)


### function getBidIndicator

```csharp
string getBidIndicator()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidIndicator](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidindicator), [Wombat::MamdaQuoteListener::getBidIndicator](classWombat_1_1MamdaQuoteListener.html#function-getbidindicator)


### function getAskUpdateCount

```csharp
long getAskUpdateCount()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskUpdateCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskupdatecount), [Wombat::MamdaQuoteListener::getAskUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecount)


### function getBidUpdateCount

```csharp
long getBidUpdateCount()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidUpdateCount](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidupdatecount), [Wombat::MamdaQuoteListener::getBidUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecount)


### function getAskYield

```csharp
double getAskYield()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskYield](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskyield), [Wombat::MamdaQuoteListener::getAskYield](classWombat_1_1MamdaQuoteListener.html#function-getaskyield)


### function getBidYield

```csharp
double getBidYield()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidYield](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidyield), [Wombat::MamdaQuoteListener::getBidYield](classWombat_1_1MamdaQuoteListener.html#function-getbidyield)


### function getAskTimeFieldState

```csharp
MamdaFieldState getAskTimeFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getasktimefieldstate), [Wombat::MamdaQuoteListener::getAskTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasktimefieldstate)


### function getBidTimeFieldState

```csharp
MamdaFieldState getBidTimeFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidtimefieldstate), [Wombat::MamdaQuoteListener::getBidTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidtimefieldstate)


### function getQuoteDateFieldState

```csharp
MamdaFieldState getQuoteDateFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getQuoteDateFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getquotedatefieldstate), [Wombat::MamdaQuoteListener::getQuoteDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotedatefieldstate)


### function getAskIndicatorFieldState

```csharp
MamdaFieldState getAskIndicatorFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskIndicatorFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskindicatorfieldstate), [Wombat::MamdaQuoteListener::getAskIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskindicatorfieldstate)


### function getBidIndicatorFieldState

```csharp
MamdaFieldState getBidIndicatorFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidIndicatorFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidindicatorfieldstate), [Wombat::MamdaQuoteListener::getBidIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidindicatorfieldstate)


### function getAskUpdateCountFieldState

```csharp
MamdaFieldState getAskUpdateCountFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskUpdateCountFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskupdatecountfieldstate), [Wombat::MamdaQuoteListener::getAskUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecountfieldstate)


### function getBidUpdateCountFieldState

```csharp
MamdaFieldState getBidUpdateCountFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidUpdateCountFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidupdatecountfieldstate), [Wombat::MamdaQuoteListener::getBidUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecountfieldstate)


### function getAskYieldFieldState

```csharp
MamdaFieldState getAskYieldFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getAskYieldFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getaskyieldfieldstate), [Wombat::MamdaQuoteListener::getAskYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskyieldfieldstate)


### function getBidYieldFieldState

```csharp
MamdaFieldState getBidYieldFieldState()
```


**Reimplemented by**: [Wombat::MamdaConcreteQuoteRecap::getBidYieldFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getbidyieldfieldstate), [Wombat::MamdaQuoteListener::getBidYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidyieldfieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:14 +0100