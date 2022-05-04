---
title: Wombat::MamdaQuoteUpdate
summary: MamdaQuoteUpdate is an interface that provides access to fields related to quote updates. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteUpdate



[MamdaQuoteUpdate]() is an interface that provides access to fields related to quote updates. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getBidPrice](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidpricefieldstate)**()<br>Get the field state  |
| long | **[getBidSize](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidsize)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizeFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidsizefieldstate)**()<br>Get the field state  |
| string | **[getBidPartId](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidpartid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPartIdFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidpartidfieldstate)**()<br>Get the field state  |
| MamaPrice | **[getAskPrice](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskprice)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskpricefieldstate)**()<br>Get the field state  |
| long | **[getAskSize](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getasksize)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizeFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getasksizefieldstate)**()<br>Get the field state  |
| string | **[getAskPartId](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskpartid)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPartIdFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskpartidfieldstate)**()<br>Get the field state  |
| string | **[getQuoteQual](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getquotequal)**()<br>A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getquotequalfieldstate)**()<br>Get the field state  |
| string | **[getQuoteQualNative](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getquotequalnative)**()<br>The exchange specific non normalized quote qualifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualNativeFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getquotequalnativefieldstate)**()<br>Get the field state  |
| char | **[getShortSaleBidTick](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getshortsalebidtick)**()<br>NASDAQ Bid Tick Indicator for Short Sale Rule Compliance. National Bid Tick Indicator based on changes to the bid price of the National Best Bid or Offer (National BBO).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleBidTickFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getshortsalebidtickfieldstate)**()<br>Get the field state  |
| char | **[getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getshortsalecircuitbreaker)**()<br>get the ShortSaleCircuitBreaker  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getshortsalecircuitbreakerfieldstate)**()<br>return the reason Field State  |
| DateTime | **[getAskTime](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getasktime)**() |
| DateTime | **[getBidTime](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidtime)**() |
| string | **[getAskIndicator](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskindicator)**() |
| string | **[getBidIndicator](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidindicator)**() |
| long | **[getAskUpdateCount](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskupdatecount)**() |
| long | **[getBidUpdateCount](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidupdatecount)**() |
| double | **[getAskYield](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskyield)**() |
| double | **[getBidYield](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidyield)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskTimeFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getasktimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidTimeFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidtimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskIndicatorFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskindicatorfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidIndicatorFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidindicatorfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskUpdateCountFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskupdatecountfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidUpdateCountFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidupdatecountfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskYieldFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getaskyieldfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidYieldFieldState](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getbidyieldfieldstate)**() |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)**()<br>Returns the source time.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| long | **[getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |


## Public Functions Documentation

### function getBidPrice

```csharp
MamaPrice getBidPrice()
```


**Return**: Bid price. The highest price that the representative party/group is willing to pay to buy the security. For most feeds, this size is represented in round lots.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprice)


### function getBidPriceFieldState

```csharp
MamdaFieldState getBidPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)


### function getBidSize

```csharp
long getBidSize()
```


**Return**: Total share size available for the current bid price. For most feeds, this size is represented in round lots.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSize](classWombat_1_1MamdaQuoteListener.html#function-getbidsize)


### function getBidSizeFieldState

```csharp
MamdaFieldState getBidSizeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)


### function getBidPartId

```csharp
string getBidPartId()
```


**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the bid price field.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPartId](classWombat_1_1MamdaQuoteListener.html#function-getbidpartid)


### function getBidPartIdFieldState

```csharp
MamdaFieldState getBidPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)


### function getAskPrice

```csharp
MamaPrice getAskPrice()
```


**Return**: Ask price. The lowest price that the representative party/group is willing to take to sell the security. For most feeds, this size is represented in round lots.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprice)


### function getAskPriceFieldState

```csharp
MamdaFieldState getAskPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)


### function getAskSize

```csharp
long getAskSize()
```


**Return**: Total share size available for the current ask price. For most feeds, this size is represented in round lots.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSize](classWombat_1_1MamdaQuoteListener.html#function-getasksize)


### function getAskSizeFieldState

```csharp
MamdaFieldState getAskSizeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizefieldstate)


### function getAskPartId

```csharp
string getAskPartId()
```


**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the ask price field.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPartId](classWombat_1_1MamdaQuoteListener.html#function-getaskpartid)


### function getAskPartIdFieldState

```csharp
MamdaFieldState getAskPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)


### function getQuoteQual

```csharp
string getQuoteQual()
```

A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character. 

**Return**: A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character. In the future, this will be made a configurable enumeration.


| **Value** | **Meaning** |
|  -------- | -------- |
| Normal  | Regular quote; no special condition   |
| DepthAsk  | Depth on ask side   |
| DepthBid  | Depth on bid side   |
| SlowQuoteOnAskSide  | This indicates that a market participants Ask is in a slow (CTA) mode. While in this mode, automated execution is not eligible on the Ask side and can be traded through pursuant to Regulation NMS requirements.   |
| SlowQuoteOnBidSide  | This indicates that a market participants Bid is in a slow (CTA) mode. While in this mode, automated execution is not eligible on the Bid side and can be traded through pursuant to Regulation NMS requirements.   |
| Fast  | Fast trading   |
| NonFirm  | Non-firm quote   |
| Rotation  | OPRA only. Quote relates to a trading rotation (Where a participant rotates through various clients that they are trading for)   |
| Auto  | Automatic trade   |
| Inactive  |  |
| SpecBid  | Specialist bid   |
| SpecAsk  | Specialist ask   |
| OneSided  | One sided. No orders, or only market orders, exist on one side of the book.   |
| PassiveMarketMaker  | Market Maker is both underwriter and buyer of security.   |
| LockedMarket  | Locked market - Bid is equal to Ask for OTCBB issues    |
| Crossed  | Crossed market - Bid is greater than Ask for OTCBB    |
| Synd  | Syndicate bid   |
| PreSynd  | Pre-syndicate bid   |
| Penalty  | Penalty bid   |
| UnsolBid  | Unsolicited bid   |
| UnsolAsk  | Unsolicited ask   |
| UnsolQuote  | Unsolicited quote   |
| Empty  | Empty quote (no quote)   |
| XpressBid  | NYSE LiquidityQuote Xpress bid indicator   |
| XpressAsk  | NYSE LiquidityQuote Xpress ask indicator   |
| BestOrder  |  |
| WillSell  |  |
| WillBuy  |  |
| AnyOrder  |  |
| MktOnly  | Market orders only.   |
| ManualAsk  | This indicates that a market participants Ask is in a manual (NASDAQ) mode. While in this mode, automated execution is not eligible on the Ask side and can be traded through pursuant to Regulation NMS requirements.   |
| ManualBid  | This indicates that a market participants Bid is in a manual (NASDAQ) mode. While in this mode, automated execution is not eligible on the Bid side and can be traded through pursuant to Regulation NMS requirements.   |
| AutomaticAsk  | This indicates that the marlet participant's Ask is in automatic mode - we generally send a combination of the last four (e.g. ManualAsk:AutomaticBid or ManualAsk;ManualBid)   |
| AutomaticBid  | This indicates that the marlet participant's Ask is in automatic mode - we generally send a combination of the last four (e.g. ManualAsk:AutomaticBid or ManualAsk;ManualBid)   |
| Closing  | Closing quote.   |
| Unknown  | Quote condition unknown.   |

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQual](classWombat_1_1MamdaQuoteListener.html#function-getquotequal)


### function getQuoteQualFieldState

```csharp
MamdaFieldState getQuoteQualFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalfieldstate)


### function getQuoteQualNative

```csharp
string getQuoteQualNative()
```

The exchange specific non normalized quote qualifier. 

**Return**: The exchange specific quote qualifier. [getQuoteQual](interfaceWombat_1_1MamdaQuoteUpdate.html#function-getquotequal)

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualNative](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnative)


### function getQuoteQualNativeFieldState

```csharp
MamdaFieldState getQuoteQualNativeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualNativeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnativefieldstate)


### function getShortSaleBidTick

```csharp
char getShortSaleBidTick()
```

NASDAQ Bid Tick Indicator for Short Sale Rule Compliance. National Bid Tick Indicator based on changes to the bid price of the National Best Bid or Offer (National BBO). 

**Return**: The tick bid indicator.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getShortSaleBidTick](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtick)



| **Value** | **Meaning** |
|  -------- | -------- |
| U  | Up Tick. The current Best Bid Price price is higher than the previous Best Pid Price for the given NNM security.   |
| D  | Down Tick. The current Best Bid Price price is lower than the previous Best Pid Price for the given NNM security.   |
| N  | No Tick. The NASD Short Sale Rule does not apply to issue (i.e. NASDAQ SmallCap listed security).   |
| Z  | Unset - default value within the API   |


### function getShortSaleBidTickFieldState

```csharp
MamdaFieldState getShortSaleBidTickFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaQuoteListener::getShortSaleBidTickFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtickfieldstate)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

get the ShortSaleCircuitBreaker 

**Return**: return values: Blank: Short Sale Restriction Not in Effect. A: Short Sale Restriction Activiated. C: Short Sale Restriction Continued. D: Sale Restriction Deactivated. E: Sale Restriction in Effect.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreaker)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

return the reason Field State 

**Return**: MODIFIED (2) value indicates the fied was updated in last tick, NOT MODIFIED (1) value indicate that there was no change in the last tick, NOT_INITIALISED (0) value indicates that the field has never been updated

**Reimplemented by**: [Wombat::MamdaQuoteListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreakerfieldstate)


return the reason Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated


### function getAskTime

```csharp
DateTime getAskTime()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskTime](classWombat_1_1MamdaQuoteListener.html#function-getasktime)


### function getBidTime

```csharp
DateTime getBidTime()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidTime](classWombat_1_1MamdaQuoteListener.html#function-getbidtime)


### function getAskIndicator

```csharp
string getAskIndicator()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskIndicator](classWombat_1_1MamdaQuoteListener.html#function-getaskindicator)


### function getBidIndicator

```csharp
string getBidIndicator()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidIndicator](classWombat_1_1MamdaQuoteListener.html#function-getbidindicator)


### function getAskUpdateCount

```csharp
long getAskUpdateCount()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecount)


### function getBidUpdateCount

```csharp
long getBidUpdateCount()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecount)


### function getAskYield

```csharp
double getAskYield()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskYield](classWombat_1_1MamdaQuoteListener.html#function-getaskyield)


### function getBidYield

```csharp
double getBidYield()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidYield](classWombat_1_1MamdaQuoteListener.html#function-getbidyield)


### function getAskTimeFieldState

```csharp
MamdaFieldState getAskTimeFieldState()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasktimefieldstate)


### function getBidTimeFieldState

```csharp
MamdaFieldState getBidTimeFieldState()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidtimefieldstate)


### function getAskIndicatorFieldState

```csharp
MamdaFieldState getAskIndicatorFieldState()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskindicatorfieldstate)


### function getBidIndicatorFieldState

```csharp
MamdaFieldState getBidIndicatorFieldState()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidindicatorfieldstate)


### function getAskUpdateCountFieldState

```csharp
MamdaFieldState getAskUpdateCountFieldState()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecountfieldstate)


### function getBidUpdateCountFieldState

```csharp
MamdaFieldState getBidUpdateCountFieldState()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecountfieldstate)


### function getAskYieldFieldState

```csharp
MamdaFieldState getAskYieldFieldState()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskyieldfieldstate)


### function getBidYieldFieldState

```csharp
MamdaFieldState getBidYieldFieldState()
```


**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidyieldfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100