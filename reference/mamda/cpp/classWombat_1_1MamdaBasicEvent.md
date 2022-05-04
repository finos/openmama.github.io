---
title: Wombat::MamdaBasicEvent
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBasicEvent



 [More...](#detailed-description)


`#include <MamdaBasicEvent.h>`

Inherited by [Wombat::MamdaAuctionUpdate](classWombat_1_1MamdaAuctionUpdate.html), [Wombat::MamdaConcreteBasicEvent](classWombat_1_1MamdaConcreteBasicEvent.html), [Wombat::MamdaCurrencyUpdate](classWombat_1_1MamdaCurrencyUpdate.html), [Wombat::MamdaOrderImbalanceUpdate](classWombat_1_1MamdaOrderImbalanceUpdate.html), [Wombat::MamdaQuoteClosing](classWombat_1_1MamdaQuoteClosing.html), [Wombat::MamdaQuoteGap](classWombat_1_1MamdaQuoteGap.html), [Wombat::MamdaQuoteOutOfSequence](classWombat_1_1MamdaQuoteOutOfSequence.html), [Wombat::MamdaQuotePossiblyDuplicate](classWombat_1_1MamdaQuotePossiblyDuplicate.html), [Wombat::MamdaQuoteUpdate](classWombat_1_1MamdaQuoteUpdate.html), [Wombat::MamdaSecStatus](classWombat_1_1MamdaSecStatus.html), [Wombat::MamdaTradeCancelOrError](classWombat_1_1MamdaTradeCancelOrError.html), [Wombat::MamdaTradeClosing](classWombat_1_1MamdaTradeClosing.html), [Wombat::MamdaTradeCorrection](classWombat_1_1MamdaTradeCorrection.html), [Wombat::MamdaTradeGap](classWombat_1_1MamdaTradeGap.html), [Wombat::MamdaTradeOutOfSequence](classWombat_1_1MamdaTradeOutOfSequence.html), [Wombat::MamdaTradePossiblyDuplicate](classWombat_1_1MamdaTradePossiblyDuplicate.html), [Wombat::MamdaTradeReport](classWombat_1_1MamdaTradeReport.html)

## Public Functions

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
class Wombat::MamdaBasicEvent;
```


[MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html) is a superclass interface that provides access to common event related fields. Events types include trades, quotes, order book updates, closing summaries, etc. See the individual subclasses for specific information about each event type.

Note: Different types of time stamps are available representing the time that the event (trade ,quote,etc) actually occurred, the time the data source/exchange reported it, and the time the NYSE Technologies feed handler applied an action to the given data item (record, order book, etc.). Many feeds to not provide a distinction between the event time and the source time (they may be the same) and the granularity of time stamps also varies between data sources. 

## Public Functions Documentation

### function getSymbol

```cpp
virtual const char * getSymbol() const =0
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getSymbol](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsymbol), [Wombat::MamdaAuctionListener::getSymbol](classWombat_1_1MamdaAuctionListener.html#function-getsymbol), [Wombat::MamdaCurrencyListener::getSymbol](classWombat_1_1MamdaCurrencyListener.html#function-getsymbol), [Wombat::MamdaSecStatusListener::getSymbol](classWombat_1_1MamdaSecStatusListener.html#function-getsymbol), [Wombat::MamdaQuoteListener::getSymbol](classWombat_1_1MamdaQuoteListener.html#function-getsymbol), [Wombat::MamdaTradeListener::getSymbol](classWombat_1_1MamdaTradeListener.html#function-getsymbol), [Wombat::MamdaOrderImbalanceListener::getSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbol)


Get the instruments string symbol.


### function getSymbolFieldState

```cpp
virtual MamdaFieldState getSymbolFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getSymbolFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsymbolfieldstate), [Wombat::MamdaAuctionListener::getSymbolFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsymbolfieldstate), [Wombat::MamdaCurrencyListener::getSymbolFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsymbolfieldstate), [Wombat::MamdaSecStatusListener::getSymbolFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsymbolfieldstate), [Wombat::MamdaQuoteListener::getSymbolFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsymbolfieldstate), [Wombat::MamdaOrderImbalanceListener::getSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbolfieldstate), [Wombat::MamdaTradeListener::getSymbolFieldState](classWombat_1_1MamdaTradeListener.html#function-getsymbolfieldstate)


Get the string symbol field state


### function getPartId

```cpp
virtual const char * getPartId() const =0
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getPartId](classWombat_1_1MamdaConcreteBasicEvent.html#function-getpartid), [Wombat::MamdaAuctionListener::getPartId](classWombat_1_1MamdaAuctionListener.html#function-getpartid), [Wombat::MamdaCurrencyListener::getPartId](classWombat_1_1MamdaCurrencyListener.html#function-getpartid), [Wombat::MamdaSecStatusListener::getPartId](classWombat_1_1MamdaSecStatusListener.html#function-getpartid), [Wombat::MamdaQuoteListener::getPartId](classWombat_1_1MamdaQuoteListener.html#function-getpartid), [Wombat::MamdaTradeListener::getPartId](classWombat_1_1MamdaTradeListener.html#function-getpartid), [Wombat::MamdaOrderImbalanceListener::getPartId](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartid), [Wombat::MamdaOrderImbalanceUpdate::getPartId](classWombat_1_1MamdaOrderImbalanceUpdate.html#function-getpartid)


Get the participant identifier.


### function getPartIdFieldState

```cpp
virtual MamdaFieldState getPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getPartIdFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getpartidfieldstate), [Wombat::MamdaAuctionListener::getPartIdFieldState](classWombat_1_1MamdaAuctionListener.html#function-getpartidfieldstate), [Wombat::MamdaCurrencyListener::getPartIdFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getpartidfieldstate), [Wombat::MamdaSecStatusListener::getPartIdFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getpartidfieldstate), [Wombat::MamdaOrderImbalanceListener::getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartidfieldstate), [Wombat::MamdaQuoteListener::getPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getpartidfieldstate), [Wombat::MamdaTradeListener::getPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getpartidfieldstate), [Wombat::MamdaOrderImbalanceUpdate::getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceUpdate.html#function-getpartidfieldstate)


Get the participant identifier field state.


### function getEventSeqNum

```cpp
virtual mama_seqnum_t getEventSeqNum() const =0
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getEventSeqNum](classWombat_1_1MamdaConcreteBasicEvent.html#function-geteventseqnum), [Wombat::MamdaAuctionListener::getEventSeqNum](classWombat_1_1MamdaAuctionListener.html#function-geteventseqnum), [Wombat::MamdaCurrencyListener::getEventSeqNum](classWombat_1_1MamdaCurrencyListener.html#function-geteventseqnum), [Wombat::MamdaSecStatusListener::getEventSeqNum](classWombat_1_1MamdaSecStatusListener.html#function-geteventseqnum), [Wombat::MamdaTradeListener::getEventSeqNum](classWombat_1_1MamdaTradeListener.html#function-geteventseqnum), [Wombat::MamdaOrderImbalanceListener::getEventSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnum), [Wombat::MamdaQuoteListener::getEventSeqNum](classWombat_1_1MamdaQuoteListener.html#function-geteventseqnum), [Wombat::MamdaOrderImbalanceUpdate::getEventSeqNum](classWombat_1_1MamdaOrderImbalanceUpdate.html#function-geteventseqnum)


Get the event sequence number.


### function getEventSeqNumFieldState

```cpp
virtual MamdaFieldState getEventSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getEventSeqNumFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-geteventseqnumfieldstate), [Wombat::MamdaAuctionListener::getEventSeqNumFieldState](classWombat_1_1MamdaAuctionListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaCurrencyListener::getEventSeqNumFieldState](classWombat_1_1MamdaCurrencyListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaSecStatusListener::getEventSeqNumFieldState](classWombat_1_1MamdaSecStatusListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaOrderImbalanceListener::getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaQuoteListener::getEventSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaTradeListener::getEventSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaOrderImbalanceUpdate::getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceUpdate.html#function-geteventseqnumfieldstate)


Get the event sequence number field state. 


### function getEventTime

```cpp
virtual const MamaDateTime & getEventTime() const =0
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getEventTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-geteventtime), [Wombat::MamdaAuctionListener::getEventTime](classWombat_1_1MamdaAuctionListener.html#function-geteventtime), [Wombat::MamdaCurrencyListener::getEventTime](classWombat_1_1MamdaCurrencyListener.html#function-geteventtime), [Wombat::MamdaSecStatusListener::getEventTime](classWombat_1_1MamdaSecStatusListener.html#function-geteventtime), [Wombat::MamdaTradeListener::getEventTime](classWombat_1_1MamdaTradeListener.html#function-geteventtime), [Wombat::MamdaOrderImbalanceListener::getEventTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtime), [Wombat::MamdaQuoteListener::getEventTime](classWombat_1_1MamdaQuoteListener.html#function-geteventtime), [Wombat::MamdaOrderImbalanceUpdate::getEventTime](classWombat_1_1MamdaOrderImbalanceUpdate.html#function-geteventtime)


Get the event time.


### function getEventTimeFieldState

```cpp
virtual MamdaFieldState getEventTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getEventTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-geteventtimefieldstate), [Wombat::MamdaAuctionListener::getEventTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-geteventtimefieldstate), [Wombat::MamdaCurrencyListener::getEventTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-geteventtimefieldstate), [Wombat::MamdaSecStatusListener::getEventTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-geteventtimefieldstate), [Wombat::MamdaOrderImbalanceListener::getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtimefieldstate), [Wombat::MamdaQuoteListener::getEventTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-geteventtimefieldstate), [Wombat::MamdaTradeListener::getEventTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventtimefieldstate), [Wombat::MamdaOrderImbalanceUpdate::getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceUpdate.html#function-geteventtimefieldstate)


Get the event time field state.


### function getSrcTime

```cpp
virtual const MamaDateTime & getSrcTime() const =0
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getSrcTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsrctime), [Wombat::MamdaAuctionListener::getSrcTime](classWombat_1_1MamdaAuctionListener.html#function-getsrctime), [Wombat::MamdaCurrencyListener::getSrcTime](classWombat_1_1MamdaCurrencyListener.html#function-getsrctime), [Wombat::MamdaSecStatusListener::getSrcTime](classWombat_1_1MamdaSecStatusListener.html#function-getsrctime), [Wombat::MamdaQuoteListener::getSrcTime](classWombat_1_1MamdaQuoteListener.html#function-getsrctime), [Wombat::MamdaTradeListener::getSrcTime](classWombat_1_1MamdaTradeListener.html#function-getsrctime), [Wombat::MamdaOrderImbalanceListener::getSrcTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctime)


Get the source time.


### function getSrcTimeFieldState

```cpp
virtual MamdaFieldState getSrcTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getSrcTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsrctimefieldstate), [Wombat::MamdaAuctionListener::getSrcTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsrctimefieldstate), [Wombat::MamdaCurrencyListener::getSrcTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsrctimefieldstate), [Wombat::MamdaSecStatusListener::getSrcTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsrctimefieldstate), [Wombat::MamdaOrderImbalanceListener::getSrcTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate), [Wombat::MamdaQuoteListener::getSrcTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsrctimefieldstate), [Wombat::MamdaTradeListener::getSrcTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsrctimefieldstate)


Get the source time field state


### function getActivityTime

```cpp
virtual const MamaDateTime & getActivityTime() const =0
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getActivityTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-getactivitytime), [Wombat::MamdaAuctionListener::getActivityTime](classWombat_1_1MamdaAuctionListener.html#function-getactivitytime), [Wombat::MamdaCurrencyListener::getActivityTime](classWombat_1_1MamdaCurrencyListener.html#function-getactivitytime), [Wombat::MamdaSecStatusListener::getActivityTime](classWombat_1_1MamdaSecStatusListener.html#function-getactivitytime), [Wombat::MamdaQuoteListener::getActivityTime](classWombat_1_1MamdaQuoteListener.html#function-getactivitytime), [Wombat::MamdaTradeListener::getActivityTime](classWombat_1_1MamdaTradeListener.html#function-getactivitytime), [Wombat::MamdaOrderImbalanceListener::getActivityTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytime)


Get the activity time.


### function getActivityTimeFieldState

```cpp
virtual MamdaFieldState getActivityTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getActivityTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getactivitytimefieldstate), [Wombat::MamdaAuctionListener::getActivityTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate), [Wombat::MamdaCurrencyListener::getActivityTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getactivitytimefieldstate), [Wombat::MamdaSecStatusListener::getActivityTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getactivitytimefieldstate), [Wombat::MamdaOrderImbalanceListener::getActivityTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate), [Wombat::MamdaQuoteListener::getActivityTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate), [Wombat::MamdaTradeListener::getActivityTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getactivitytimefieldstate)


Get the activity time field state


### function getLineTime

```cpp
virtual const MamaDateTime & getLineTime() const =0
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getLineTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-getlinetime), [Wombat::MamdaAuctionListener::getLineTime](classWombat_1_1MamdaAuctionListener.html#function-getlinetime), [Wombat::MamdaCurrencyListener::getLineTime](classWombat_1_1MamdaCurrencyListener.html#function-getlinetime), [Wombat::MamdaSecStatusListener::getLineTime](classWombat_1_1MamdaSecStatusListener.html#function-getlinetime), [Wombat::MamdaQuoteListener::getLineTime](classWombat_1_1MamdaQuoteListener.html#function-getlinetime), [Wombat::MamdaTradeListener::getLineTime](classWombat_1_1MamdaTradeListener.html#function-getlinetime), [Wombat::MamdaOrderImbalanceListener::getLineTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetime)


Get the line time.


### function getLineTimeFieldState

```cpp
virtual MamdaFieldState getLineTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getLineTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getlinetimefieldstate), [Wombat::MamdaAuctionListener::getLineTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getlinetimefieldstate), [Wombat::MamdaCurrencyListener::getLineTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getlinetimefieldstate), [Wombat::MamdaSecStatusListener::getLineTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getlinetimefieldstate), [Wombat::MamdaQuoteListener::getLineTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getlinetimefieldstate), [Wombat::MamdaOrderImbalanceListener::getLineTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetimefieldstate), [Wombat::MamdaTradeListener::getLineTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlinetimefieldstate)


Get the line time of the update.


### function getSendTime

```cpp
virtual const MamaDateTime & getSendTime() const =0
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getSendTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsendtime), [Wombat::MamdaAuctionListener::getSendTime](classWombat_1_1MamdaAuctionListener.html#function-getsendtime), [Wombat::MamdaCurrencyListener::getSendTime](classWombat_1_1MamdaCurrencyListener.html#function-getsendtime), [Wombat::MamdaSecStatusListener::getSendTime](classWombat_1_1MamdaSecStatusListener.html#function-getsendtime), [Wombat::MamdaQuoteListener::getSendTime](classWombat_1_1MamdaQuoteListener.html#function-getsendtime), [Wombat::MamdaTradeListener::getSendTime](classWombat_1_1MamdaTradeListener.html#function-getsendtime), [Wombat::MamdaOrderImbalanceListener::getSendTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtime)


Get the send time.


### function getSendTimeFieldState

```cpp
virtual MamdaFieldState getSendTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getSendTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsendtimefieldstate), [Wombat::MamdaAuctionListener::getSendTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsendtimefieldstate), [Wombat::MamdaCurrencyListener::getSendTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsendtimefieldstate), [Wombat::MamdaSecStatusListener::getSendTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsendtimefieldstate), [Wombat::MamdaQuoteListener::getSendTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsendtimefieldstate), [Wombat::MamdaOrderImbalanceListener::getSendTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtimefieldstate), [Wombat::MamdaTradeListener::getSendTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsendtimefieldstate)


Get the send time field state


### function getMsgQual

```cpp
virtual const MamaMsgQual & getMsgQual() const =0
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getMsgQual](classWombat_1_1MamdaConcreteBasicEvent.html#function-getmsgqual), [Wombat::MamdaAuctionListener::getMsgQual](classWombat_1_1MamdaAuctionListener.html#function-getmsgqual), [Wombat::MamdaCurrencyListener::getMsgQual](classWombat_1_1MamdaCurrencyListener.html#function-getmsgqual), [Wombat::MamdaSecStatusListener::getMsgQual](classWombat_1_1MamdaSecStatusListener.html#function-getmsgqual), [Wombat::MamdaQuoteListener::getMsgQual](classWombat_1_1MamdaQuoteListener.html#function-getmsgqual), [Wombat::MamdaTradeListener::getMsgQual](classWombat_1_1MamdaTradeListener.html#function-getmsgqual), [Wombat::MamdaOrderImbalanceListener::getMsgQual](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgqual)


Get the message qualifier.


### function getMsgQualFieldState

```cpp
virtual MamdaFieldState getMsgQualFieldState() const =0
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplemented by**: [Wombat::MamdaConcreteBasicEvent::getMsgQualFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getmsgqualfieldstate), [Wombat::MamdaAuctionListener::getMsgQualFieldState](classWombat_1_1MamdaAuctionListener.html#function-getmsgqualfieldstate), [Wombat::MamdaCurrencyListener::getMsgQualFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getmsgqualfieldstate), [Wombat::MamdaSecStatusListener::getMsgQualFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getmsgqualfieldstate), [Wombat::MamdaQuoteListener::getMsgQualFieldState](classWombat_1_1MamdaQuoteListener.html#function-getmsgqualfieldstate), [Wombat::MamdaOrderImbalanceListener::getMsgQualFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgqualfieldstate), [Wombat::MamdaTradeListener::getMsgQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getmsgqualfieldstate)


Get the message qualifier field state.


### function ~MamdaBasicEvent

```cpp
inline virtual ~MamdaBasicEvent()
```


Destructor. 


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100