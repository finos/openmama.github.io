---
title: Wombat::MamdaQuoteUpdate
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteUpdate



 [More...](#detailed-description)


`#include <MamdaQuoteUpdate.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getBidPrice](classWombat_1_1MamdaQuoteUpdate.html#function-getbidprice)**() const =0 |
| virtual mama_quantity_t | **[getBidSize](classWombat_1_1MamdaQuoteUpdate.html#function-getbidsize)**() const =0 |
| virtual mama_quantity_t | **[getBidDepth](classWombat_1_1MamdaQuoteUpdate.html#function-getbiddepth)**() const =0 |
| virtual const char * | **[getBidPartId](classWombat_1_1MamdaQuoteUpdate.html#function-getbidpartid)**() const =0 |
| virtual const MamaPrice & | **[getAskPrice](classWombat_1_1MamdaQuoteUpdate.html#function-getaskprice)**() const =0 |
| virtual mama_quantity_t | **[getAskSize](classWombat_1_1MamdaQuoteUpdate.html#function-getasksize)**() const =0 |
| virtual mama_quantity_t | **[getAskDepth](classWombat_1_1MamdaQuoteUpdate.html#function-getaskdepth)**() const =0 |
| virtual const char * | **[getAskPartId](classWombat_1_1MamdaQuoteUpdate.html#function-getaskpartid)**() const =0 |
| virtual const MamaPrice & | **[getQuoteMidPrice](classWombat_1_1MamdaQuoteUpdate.html#function-getquotemidprice)**() const =0 |
| virtual const char * | **[getQuoteQualStr](classWombat_1_1MamdaQuoteUpdate.html#function-getquotequalstr)**() const =0 |
| virtual const char * | **[getQuoteQualNative](classWombat_1_1MamdaQuoteUpdate.html#function-getquotequalnative)**() const =0 |
| virtual char | **[getShortSaleBidTick](classWombat_1_1MamdaQuoteUpdate.html#function-getshortsalebidtick)**() const =0 |
| virtual const MamaDateTime & | **[getAskTime](classWombat_1_1MamdaQuoteUpdate.html#function-getasktime)**() const =0 |
| virtual const MamaDateTime & | **[getBidTime](classWombat_1_1MamdaQuoteUpdate.html#function-getbidtime)**() const =0 |
| virtual const MamaDateTime & | **[getQuoteDate](classWombat_1_1MamdaQuoteUpdate.html#function-getquotedate)**() const =0 |
| virtual const char * | **[getAskIndicator](classWombat_1_1MamdaQuoteUpdate.html#function-getaskindicator)**() const =0 |
| virtual const char * | **[getBidIndicator](classWombat_1_1MamdaQuoteUpdate.html#function-getbidindicator)**() const =0 |
| virtual mama_u32_t | **[getAskUpdateCount](classWombat_1_1MamdaQuoteUpdate.html#function-getaskupdatecount)**() const =0 |
| virtual mama_u32_t | **[getBidUpdateCount](classWombat_1_1MamdaQuoteUpdate.html#function-getbidupdatecount)**() const =0 |
| virtual double | **[getAskYield](classWombat_1_1MamdaQuoteUpdate.html#function-getaskyield)**() const =0 |
| virtual double | **[getBidYield](classWombat_1_1MamdaQuoteUpdate.html#function-getbidyield)**() const =0 |
| virtual const char * | **[getAskSizesList](classWombat_1_1MamdaQuoteUpdate.html#function-getasksizeslist)**() const =0 |
| virtual const char * | **[getBidSizesList](classWombat_1_1MamdaQuoteUpdate.html#function-getbidsizeslist)**() const =0 |
| virtual char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaQuoteUpdate.html#function-getshortsalecircuitbreaker)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbidpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizeFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbidsizefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidDepthFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbiddepthfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPartIdFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbidpartidfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getaskpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizeFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getasksizefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskDepthFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getaskdepthfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPartIdFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getaskpartidfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteMidPriceFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getquotemidpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualStrFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getquotequalstrfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualNativeFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getquotequalnativefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleBidTickFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getshortsalebidtickfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskTimeFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getasktimefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidTimeFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbidtimefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteDateFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getquotedatefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskIndicatorFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getaskindicatorfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidIndicatorFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbidindicatorfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskUpdateCountFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getaskupdatecountfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidUpdateCountFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbidupdatecountfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskYieldFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getaskyieldfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidYieldFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbidyieldfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizesListFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getasksizeslistfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizesListFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getbidsizeslistfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaQuoteUpdate.html#function-getshortsalecircuitbreakerfieldstate)**() const =0 |
| virtual | **[~MamdaQuoteUpdate](classWombat_1_1MamdaQuoteUpdate.html#function-~mamdaquoteupdate)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaBasicEvent.html#function-getsymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsymbolfieldstate)**() const =0 |
| virtual const char * | **[getPartId](classWombat_1_1MamdaBasicEvent.html#function-getpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaBasicEvent.html#function-getpartidfieldstate)**() const =0 |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaBasicEvent.html#function-getsrctime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaBasicEvent.html#function-getlinetime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getlinetimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaBasicEvent.html#function-getsendtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsendtimefieldstate)**() const =0 |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)**() const =0 |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |


## Detailed Description

```cpp
class Wombat::MamdaQuoteUpdate;
```


[MamdaQuoteUpdate](classWombat_1_1MamdaQuoteUpdate.html) is an interface that provides access to fields related to quote updates. 

## Public Functions Documentation

### function getBidPrice

```cpp
virtual const MamaPrice & getBidPrice() const =0
```


**Return**: Bid price. The highest price that the representative party/group is willing to pay to buy the security. For most feeds, this size is represented in round lots. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprice)


Get the quote bid price.


### function getBidSize

```cpp
virtual mama_quantity_t getBidSize() const =0
```


**Return**: Total share size available for the current bid price. Note: many feeds provide this size in terms of round lots. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSize](classWombat_1_1MamdaQuoteListener.html#function-getbidsize)


Get the quote bid size.


### function getBidDepth

```cpp
virtual mama_quantity_t getBidDepth() const =0
```


**Return**: The total size available at the current best bid price. Only supported by some exchanges. The total size may differ from the "best" size in that the total may be aggregated from multiple sources. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidDepth](classWombat_1_1MamdaQuoteListener.html#function-getbiddepth)


Get the quote bid depth.


### function getBidPartId

```cpp
virtual const char * getBidPartId() const =0
```


**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the bid price field. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPartId](classWombat_1_1MamdaQuoteListener.html#function-getbidpartid)


Get the quote participant identifier.


### function getAskPrice

```cpp
virtual const MamaPrice & getAskPrice() const =0
```


**Return**: Ask price. The lowest price that the representative party/group is willing to take to sell the security. For most feeds, this size is represented in round lots. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprice)


Get the quote ask price.


### function getAskSize

```cpp
virtual mama_quantity_t getAskSize() const =0
```


**Return**: Total share size available for the current ask price. Note: many feeds provide this size in terms of round lots. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSize](classWombat_1_1MamdaQuoteListener.html#function-getasksize)


Get the quote ask size.


### function getAskDepth

```cpp
virtual mama_quantity_t getAskDepth() const =0
```


**Return**: The total size available at the current best ask price. Only supported by some exchanges. The total size may differ from the "best" size in that the total may be aggregated from multiple sources. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskDepth](classWombat_1_1MamdaQuoteListener.html#function-getaskdepth)


Get the quote ask depth.


### function getAskPartId

```cpp
virtual const char * getAskPartId() const =0
```


**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the ask price field. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPartId](classWombat_1_1MamdaQuoteListener.html#function-getaskpartid)


Get the quote ask participant identifier.


### function getQuoteMidPrice

```cpp
virtual const MamaPrice & getQuoteMidPrice() const =0
```


**Return**: The mid price of the current quote. Usually, this is the average of the bid and ask prices, but some exchanges provide this field explicitly (e.g. LSE). 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteMidPrice](classWombat_1_1MamdaQuoteListener.html#function-getquotemidprice)


Get the quote mid price.


### function getQuoteQualStr

```cpp
virtual const char * getQuoteQualStr() const =0
```


**See**: [MamdaQuoteRecap::getQuoteQualStr()](classWombat_1_1MamdaQuoteRecap.html#function-getquotequalstr)

**Return**: A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualStr](classWombat_1_1MamdaQuoteListener.html#function-getquotequalstr)


Get the quote qualifier.


### function getQuoteQualNative

```cpp
virtual const char * getQuoteQualNative() const =0
```


**See**: getQuoteQual. 

**Return**: Native quote qualifier (a.k.a. "quote condition"). Feed-specific quote qualifier code(s). This field is provided primarily for completeness and/or troubleshooting. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualNative](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnative)


Get the native feed quote qualifier. 


### function getShortSaleBidTick

```cpp
virtual char getShortSaleBidTick() const =0
```


**Return**: The tick bid indicator. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getShortSaleBidTick](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtick)


NASDAQ Bid Tick Indicator for Short Sale Rule Compliance. National Bid Tick Indicator based on changes to the bid price of the National Best Bid or Offer (National BBO).


| **Value** | **Meaning** |
|  -------- | -------- |
| U  | Up Tick. The current Best Bid Price price is higher than the previous Best Bid Price for the given NNM security.   |
| D  | Down Tick. The current Best Bid Price price is lower than the previous Best Bid Price for the given NNM security.   |
| N  | No Tick. The NASD Short Sale Rule does not apply to issue (i.e. NASDAQ SmallCap listed security).   |
| Z  | Unset - default value within the API   |


### function getAskTime

```cpp
virtual const MamaDateTime & getAskTime() const =0
```


**Return**: The quote ask time. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskTime](classWombat_1_1MamdaQuoteListener.html#function-getasktime)


Get the quote ask time.


### function getBidTime

```cpp
virtual const MamaDateTime & getBidTime() const =0
```


**Return**: The quote bid time. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidTime](classWombat_1_1MamdaQuoteListener.html#function-getbidtime)


Get the quote bid time.


### function getQuoteDate

```cpp
virtual const MamaDateTime & getQuoteDate() const =0
```


**Return**: The quote date. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteDate](classWombat_1_1MamdaQuoteListener.html#function-getquotedate)


Get the quote date.


### function getAskIndicator

```cpp
virtual const char * getAskIndicator() const =0
```


**Return**: The quote ask indicator. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskIndicator](classWombat_1_1MamdaQuoteListener.html#function-getaskindicator)


Get the quote ask indicator.


### function getBidIndicator

```cpp
virtual const char * getBidIndicator() const =0
```


**Return**: The quote bid indicator. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidIndicator](classWombat_1_1MamdaQuoteListener.html#function-getbidindicator)


Get the quote bid indicator.


### function getAskUpdateCount

```cpp
virtual mama_u32_t getAskUpdateCount() const =0
```


**Return**: The quote ask update count. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecount)


Get the quote ask update count.


### function getBidUpdateCount

```cpp
virtual mama_u32_t getBidUpdateCount() const =0
```


**Return**: The quote bid update count. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidUpdateCount](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecount)


Get the quote bid update count.


### function getAskYield

```cpp
virtual double getAskYield() const =0
```


**Return**: The quote ask yield. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskYield](classWombat_1_1MamdaQuoteListener.html#function-getaskyield)


Get the quote ask yield.


### function getBidYield

```cpp
virtual double getBidYield() const =0
```


**Return**: The quote bid yield. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidYield](classWombat_1_1MamdaQuoteListener.html#function-getbidyield)


Get the quote bid yield.


### function getAskSizesList

```cpp
virtual const char * getAskSizesList() const =0
```


**Return**: The ask sizes list. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSizesList](classWombat_1_1MamdaQuoteListener.html#function-getasksizeslist)


Get the ask sizes list.


### function getBidSizesList

```cpp
virtual const char * getBidSizesList() const =0
```


**Return**: The bid sizes list. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSizesList](classWombat_1_1MamdaQuoteListener.html#function-getbidsizeslist)


Get the bid sizes list.


### function getShortSaleCircuitBreaker

```cpp
virtual char getShortSaleCircuitBreaker() const =0
```


**Return**: ShortSaleCircuitBreaker 

* return values: 
* Blank: Short Sale Restriction Not in Effect. 
* A: Short Sale Restriction Activiated. 
* C: Short Sale Restriction Continued. 
* D: Sale Restriction Deactivated. 
* E: Sale Restriction in Effect. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreaker)


get the ShortSaleCircuitBreaker 


### function getBidPriceFieldState

```cpp
virtual MamdaFieldState getBidPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)


Get the quote bid price fieldState


### function getBidSizeFieldState

```cpp
virtual MamdaFieldState getBidSizeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)


Get the quote bid size fieldState


### function getBidDepthFieldState

```cpp
virtual MamdaFieldState getBidDepthFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidDepthFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbiddepthfieldstate)


Get the quote bid depth fieldState


### function getBidPartIdFieldState

```cpp
virtual MamdaFieldState getBidPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)


Get the quote participant identifier fieldState


### function getAskPriceFieldState

```cpp
virtual MamdaFieldState getAskPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)


Get the quote ask price fieldState


### function getAskSizeFieldState

```cpp
virtual MamdaFieldState getAskSizeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizefieldstate)


Get the quote ask size fieldState


### function getAskDepthFieldState

```cpp
virtual MamdaFieldState getAskDepthFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskDepthFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskdepthfieldstate)


Get the quote ask depth fieldState


### function getAskPartIdFieldState

```cpp
virtual MamdaFieldState getAskPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)


Get the quote ask participant identifier fieldState


### function getQuoteMidPriceFieldState

```cpp
virtual MamdaFieldState getQuoteMidPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteMidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotemidpricefieldstate)


Get the quote mid price fieldState


### function getQuoteQualStrFieldState

```cpp
virtual MamdaFieldState getQuoteQualStrFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualStrFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalstrfieldstate)


Get the quote qualifier fieldState


### function getQuoteQualNativeFieldState

```cpp
virtual MamdaFieldState getQuoteQualNativeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualNativeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalnativefieldstate)


Get the native feed quote qualifier fieldState


### function getShortSaleBidTickFieldState

```cpp
virtual MamdaFieldState getShortSaleBidTickFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getShortSaleBidTickFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalebidtickfieldstate)


Get the short sale bid tick fieldState


### function getAskTimeFieldState

```cpp
virtual MamdaFieldState getAskTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasktimefieldstate)


Get the quote ask time fieldState


### function getBidTimeFieldState

```cpp
virtual MamdaFieldState getBidTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidtimefieldstate)


Get the quote bid time fieldState


### function getQuoteDateFieldState

```cpp
virtual MamdaFieldState getQuoteDateFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteDateFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotedatefieldstate)


Get the quote date fieldState


### function getAskIndicatorFieldState

```cpp
virtual MamdaFieldState getAskIndicatorFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskindicatorfieldstate)


Get the quote ask indicator fieldState


### function getBidIndicatorFieldState

```cpp
virtual MamdaFieldState getBidIndicatorFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidIndicatorFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidindicatorfieldstate)


Get the quote bid indicator fieldState


### function getAskUpdateCountFieldState

```cpp
virtual MamdaFieldState getAskUpdateCountFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskupdatecountfieldstate)


Get the quote ask update count fieldState


### function getBidUpdateCountFieldState

```cpp
virtual MamdaFieldState getBidUpdateCountFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidUpdateCountFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidupdatecountfieldstate)


Get the quote bid update count fieldState


### function getAskYieldFieldState

```cpp
virtual MamdaFieldState getAskYieldFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskyieldfieldstate)


Get the quote ask yield fieldState


### function getBidYieldFieldState

```cpp
virtual MamdaFieldState getBidYieldFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidYieldFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidyieldfieldstate)


Get the quote bid yield fieldState


### function getAskSizesListFieldState

```cpp
virtual MamdaFieldState getAskSizesListFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSizesListFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizeslistfieldstate)


Get the ask sizes list fieldState


### function getBidSizesListFieldState

```cpp
virtual MamdaFieldState getBidSizesListFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSizesListFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizeslistfieldstate)


Get the bid sizes list fieldState


### function getShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getShortSaleCircuitBreakerFieldState() const =0
```


**Return**: The ShortSaleCircuitBreaker Field State. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaQuoteListener.html#function-getshortsalecircuitbreakerfieldstate)


### function ~MamdaQuoteUpdate

```cpp
inline virtual ~MamdaQuoteUpdate()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100