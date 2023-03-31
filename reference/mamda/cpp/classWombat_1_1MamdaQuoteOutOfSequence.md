---
title: Wombat::MamdaQuoteOutOfSequence
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteOutOfSequence



 [More...](#detailed-description)


`#include <MamdaQuoteOutOfSequence.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getBidPrice](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidpricefieldstate)**() const =0 |
| virtual mama_quantity_t | **[getBidSize](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidsize)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidSizeFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidsizefieldstate)**() const =0 |
| virtual mama_quantity_t | **[getBidDepth](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbiddepth)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidDepthFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbiddepthfieldstate)**() const =0 |
| virtual const char * | **[getBidPartId](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPartIdFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getbidpartidfieldstate)**() const =0 |
| virtual const MamaPrice & | **[getAskPrice](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskpricefieldstate)**() const =0 |
| virtual mama_quantity_t | **[getAskSize](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getasksize)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskSizeFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getasksizefieldstate)**() const =0 |
| virtual mama_quantity_t | **[getAskDepth](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskdepth)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskDepthFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskdepthfieldstate)**() const =0 |
| virtual const char * | **[getAskPartId](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPartIdFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getaskpartidfieldstate)**() const =0 |
| virtual const MamaPrice & | **[getQuoteMidPrice](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getquotemidprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteMidPriceFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getquotemidpricefieldstate)**() const =0 |
| virtual const char * | **[getQuoteQualStr](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getquotequalstr)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getQuoteQualStrFieldState](classWombat_1_1MamdaQuoteOutOfSequence.html#function-getquotequalstrfieldstate)**() const =0 |
| virtual | **[~MamdaQuoteOutOfSequence](classWombat_1_1MamdaQuoteOutOfSequence.html#function-~mamdaquoteoutofsequence)**() |

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
class Wombat::MamdaQuoteOutOfSequence;
```


[MamdaQuoteOutOfSequence](classWombat_1_1MamdaQuoteOutOfSequence.html) is an interface that provides access to fields related to quote updates. 

## Public Functions Documentation

### function getBidPrice

```cpp
virtual const MamaPrice & getBidPrice() const =0
```


**Return**: Bid price. The highest price that the representative party/group is willing to pay to buy the security. For most feeds, this size is represented in round lots. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPrice](classWombat_1_1MamdaQuoteListener.html#function-getbidprice)


Get the quote bid price.


### function getBidPriceFieldState

```cpp
virtual MamdaFieldState getBidPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)


Get the quote bid yield fieldState


### function getBidSize

```cpp
virtual mama_quantity_t getBidSize() const =0
```


**Return**: Total share size available for the current bid price. Note: many feeds provide this size in terms of round lots. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSize](classWombat_1_1MamdaQuoteListener.html#function-getbidsize)


Get the quote bid size.


### function getBidSizeFieldState

```cpp
virtual MamdaFieldState getBidSizeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)


Get the quote bid yield fieldState


### function getBidDepth

```cpp
virtual mama_quantity_t getBidDepth() const =0
```


**Return**: The total size available at the current best bid price. Only supported by some exchanges. The total size may differ from the "best" size in that the total may be aggregated from multiple sources. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidDepth](classWombat_1_1MamdaQuoteListener.html#function-getbiddepth)


Get the quote bid depth.


### function getBidDepthFieldState

```cpp
virtual MamdaFieldState getBidDepthFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidDepthFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbiddepthfieldstate)


Get the quote bid yield fieldState


### function getBidPartId

```cpp
virtual const char * getBidPartId() const =0
```


**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the bid price field. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPartId](classWombat_1_1MamdaQuoteListener.html#function-getbidpartid)


Get the quote bid participant identifier.`


### function getBidPartIdFieldState

```cpp
virtual MamdaFieldState getBidPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)


Get the quote bid yield fieldState


### function getAskPrice

```cpp
virtual const MamaPrice & getAskPrice() const =0
```


**Return**: Ask price. The lowest price that the representative party/group is willing to take to sell the security. For most feeds, this size is represented in round lots. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPrice](classWombat_1_1MamdaQuoteListener.html#function-getaskprice)


Get the quote ask price.


### function getAskPriceFieldState

```cpp
virtual MamdaFieldState getAskPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)


Get the quote bid yield fieldState


### function getAskSize

```cpp
virtual mama_quantity_t getAskSize() const =0
```


**Return**: Total share size available for the current ask price. Note: many feeds provide this size in terms of round lots. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSize](classWombat_1_1MamdaQuoteListener.html#function-getasksize)


Get the quote ask size.


### function getAskSizeFieldState

```cpp
virtual MamdaFieldState getAskSizeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskSizeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getasksizefieldstate)


Get the quote bid yield fieldState


### function getAskDepth

```cpp
virtual mama_quantity_t getAskDepth() const =0
```


**Return**: The total size available at the current best ask price. Only supported by some exchanges. The total size may differ from the "best" size in that the total may be aggregated from multiple sources. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskDepth](classWombat_1_1MamdaQuoteListener.html#function-getaskdepth)


Get the quote ask depth.


### function getAskDepthFieldState

```cpp
virtual MamdaFieldState getAskDepthFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskDepthFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskdepthfieldstate)


Get the quote bid yield fieldState


### function getAskPartId

```cpp
virtual const char * getAskPartId() const =0
```


**Return**: The identifier of the market participant (e.g. exchange or market maker) contributing the ask price field. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPartId](classWombat_1_1MamdaQuoteListener.html#function-getaskpartid)


Get the quote ask participant identifier.


### function getAskPartIdFieldState

```cpp
virtual MamdaFieldState getAskPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)


Get the quote bid yield fieldState


### function getQuoteMidPrice

```cpp
virtual const MamaPrice & getQuoteMidPrice() const =0
```


**Return**: The mid price of the current quote. Usually, this is the average of the bid and ask prices, but some exchanges provide this field explicitly (e.g. LSE). 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteMidPrice](classWombat_1_1MamdaQuoteListener.html#function-getquotemidprice)


Get the quote mid price.


### function getQuoteMidPriceFieldState

```cpp
virtual MamdaFieldState getQuoteMidPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteMidPriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotemidpricefieldstate)


Get the quote bid yield fieldState


### function getQuoteQualStr

```cpp
virtual const char * getQuoteQualStr() const =0
```


**Return**: A normalized set of qualifiers for the last quote for the security. This field may contain multiple string values, separated by the colon(:) character.

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualStr](classWombat_1_1MamdaQuoteListener.html#function-getquotequalstr)


Get the quote qualifiers.


| **Value** | **Meaning** |
|  -------- | -------- |
| Normal  | Regular quote; no special condition   |
| DepthAsk  | Depth on ask side   |
| DepthBid  | Depth on bid side   |
| Fast  | Fast trading   |
| NonFirm  | Non-firm quote   |
| Rotation  | ?   |
| Auto  | Automatic trade   |
| Inactive  | ?   |
| SpecBid  | Specialist bid   |
| SpecAsk  | Specialist ask   |
| Locked  | Locked market - Bid is equal to Ask for OTCBB issues (Recaps only)   |
| Crossed  | Crossed market - Bid is greater than Ask for OTCBB (Recaps only)   |
| Synd  | Syndicate bid   |
| PreSynd  | Pre-syndicate bid   |
| Penalty  | Penalty bid   |
| UnsolBid  | Unsolicited bid   |
| UnsolAsk  | Unsolicited ask   |
| UnsolQuote  | Unsolicited quote   |
| Firm  | ?   |
| RangeInd  | ?   |
| XpressBid  | NYSE LiquidityQuote Xpress bid indicator   |
| XpressAsk  | NYSE LiquidityQuote Xpress ask indicator   |


### function getQuoteQualStrFieldState

```cpp
virtual MamdaFieldState getQuoteQualStrFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getQuoteQualStrFieldState](classWombat_1_1MamdaQuoteListener.html#function-getquotequalstrfieldstate)


Get the quote bid yield fieldState


### function ~MamdaQuoteOutOfSequence

```cpp
inline virtual ~MamdaQuoteOutOfSequence()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100