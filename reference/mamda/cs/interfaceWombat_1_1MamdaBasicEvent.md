---
title: Wombat::MamdaBasicEvent
summary: MamdaBasicEvent is a superclass interface that provides access to common event related fields. Events types include trades, quotes, order book updates, closing summaries, etc. See the individual subclasses for specific information about each event type. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBasicEvent



[MamdaBasicEvent]() is a superclass interface that provides access to common event related fields. Events types include trades, quotes, order book updates, closing summaries, etc. See the individual subclasses for specific information about each event type.  [More...](#detailed-description)

Inherited by [Wombat.MamdaAuctionUpdate](interfaceWombat_1_1MamdaAuctionUpdate.html), [Wombat.MamdaBookAtomicGap](interfaceWombat_1_1MamdaBookAtomicGap.html), [Wombat.MamdaOptionSeriesUpdate](interfaceWombat_1_1MamdaOptionSeriesUpdate.html), [Wombat.MamdaOrderBookDelta](interfaceWombat_1_1MamdaOrderBookDelta.html), [Wombat.MamdaOrderBookGap](interfaceWombat_1_1MamdaOrderBookGap.html), [Wombat.MamdaOrderBookRecap](interfaceWombat_1_1MamdaOrderBookRecap.html), [Wombat.MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html), [Wombat.MamdaQuoteClosing](interfaceWombat_1_1MamdaQuoteClosing.html), [Wombat.MamdaQuoteGap](interfaceWombat_1_1MamdaQuoteGap.html), [Wombat.MamdaQuoteUpdate](interfaceWombat_1_1MamdaQuoteUpdate.html), [Wombat.MamdaTradeCancelOrError](interfaceWombat_1_1MamdaTradeCancelOrError.html), [Wombat.MamdaTradeClosing](interfaceWombat_1_1MamdaTradeClosing.html), [Wombat.MamdaTradeCorrection](interfaceWombat_1_1MamdaTradeCorrection.html), [Wombat.MamdaTradeGap](interfaceWombat_1_1MamdaTradeGap.html), [Wombat.MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html), [Wombat.MamdaTradeReport](interfaceWombat_1_1MamdaTradeReport.html)

## Public Functions

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

## Detailed Description

```csharp
class Wombat::MamdaBasicEvent;
```

[MamdaBasicEvent]() is a superclass interface that provides access to common event related fields. Events types include trades, quotes, order book updates, closing summaries, etc. See the individual subclasses for specific information about each event type. 

Note: Different types of time stamps are available representing the time that the event (trade ,quote,etc) actually occurred, the time the data source/exchange reported it, and the time the [Wombat](namespaceWombat.html) feed handler applied an action to the given data item (record, order book, etc.). Many feeds to not provide a distinction between the event time and the source time (they may be the same) and the granularity of time stamps also varies between data sources.

## Public Functions Documentation

### function getSrcTime

```csharp
DateTime getSrcTime()
```

Returns the source time. 

**Return**: Source time. Typically, the exchange generated feed

* time stamp. This is often the same as the "event time",
* because many feeds do not distinguish between the actual event
* time and when the exchange sent the message.

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSrcTime](classWombat_1_1MamdaAuctionListener.html#function-getsrctime), [Wombat::MamdaConcreteTradeRecap::getSrcTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsrctime), [Wombat::MamdaOrderImbalanceListener::getSrcTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctime), [Wombat::MamdaQuoteListener::getSrcTime](classWombat_1_1MamdaQuoteListener.html#function-getsrctime), [Wombat::MamdaTradeListener::getSrcTime](classWombat_1_1MamdaTradeListener.html#function-getsrctime), [Wombat::MamdaOptionChainListener::getSrcTime](classWombat_1_1MamdaOptionChainListener.html#function-getsrctime), [Wombat::MamdaBookAtomicListener::getSrcTime](classWombat_1_1MamdaBookAtomicListener.html#function-getsrctime), [Wombat::MamdaOrderBookListener::getSrcTime](classWombat_1_1MamdaOrderBookListener.html#function-getsrctime)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

Returns the field state. 

**Return**: Source time Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSrcTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsrctimefieldstate), [Wombat::MamdaConcreteTradeRecap::getSrcTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsrctimefieldstate), [Wombat::MamdaOrderImbalanceListener::getSrcTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate), [Wombat::MamdaQuoteListener::getSrcTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsrctimefieldstate), [Wombat::MamdaTradeListener::getSrcTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsrctimefieldstate), [Wombat::MamdaOptionChainListener::getSrcTimeFieldState](classWombat_1_1MamdaOptionChainListener.html#function-getsrctimefieldstate), [Wombat::MamdaBookAtomicListener::getSrcTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getsrctimefieldstate), [Wombat::MamdaOrderBookListener::getSrcTimeFieldState](classWombat_1_1MamdaOrderBookListener.html#function-getsrctimefieldstate)


### function getActivityTime

```csharp
DateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated.

**Reimplemented by**: [Wombat::MamdaAuctionListener::getActivityTime](classWombat_1_1MamdaAuctionListener.html#function-getactivitytime), [Wombat::MamdaConcreteTradeRecap::getActivityTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getactivitytime), [Wombat::MamdaOrderImbalanceListener::getActivityTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytime), [Wombat::MamdaQuoteListener::getActivityTime](classWombat_1_1MamdaQuoteListener.html#function-getactivitytime), [Wombat::MamdaTradeListener::getActivityTime](classWombat_1_1MamdaTradeListener.html#function-getactivitytime), [Wombat::MamdaOptionChainListener::getActivityTime](classWombat_1_1MamdaOptionChainListener.html#function-getactivitytime), [Wombat::MamdaBookAtomicListener::getActivityTime](classWombat_1_1MamdaBookAtomicListener.html#function-getactivitytime), [Wombat::MamdaOrderBookListener::getActivityTime](classWombat_1_1MamdaOrderBookListener.html#function-getactivitytime)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

Returns the field state. 

**Return**: Activity time Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getActivityTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate), [Wombat::MamdaConcreteTradeRecap::getActivityTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getactivitytimefieldstate), [Wombat::MamdaOrderImbalanceListener::getActivityTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate), [Wombat::MamdaQuoteListener::getActivityTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate), [Wombat::MamdaTradeListener::getActivityTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getactivitytimefieldstate), [Wombat::MamdaOptionChainListener::getActivityTimeFieldState](classWombat_1_1MamdaOptionChainListener.html#function-getactivitytimefieldstate), [Wombat::MamdaBookAtomicListener::getActivityTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getactivitytimefieldstate), [Wombat::MamdaOrderBookListener::getActivityTimeFieldState](classWombat_1_1MamdaOrderBookListener.html#function-getactivitytimefieldstate)


### function getEventSeqNum

```csharp
long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number.

**Reimplemented by**: [Wombat::MamdaAuctionListener::getEventSeqNum](classWombat_1_1MamdaAuctionListener.html#function-geteventseqnum), [Wombat::MamdaConcreteTradeRecap::getEventSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-geteventseqnum), [Wombat::MamdaOrderImbalanceListener::getEventSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnum), [Wombat::MamdaQuoteListener::getEventSeqNum](classWombat_1_1MamdaQuoteListener.html#function-geteventseqnum), [Wombat::MamdaTradeListener::getEventSeqNum](classWombat_1_1MamdaTradeListener.html#function-geteventseqnum), [Wombat::MamdaOptionChainListener::getEventSeqNum](classWombat_1_1MamdaOptionChainListener.html#function-geteventseqnum), [Wombat::MamdaBookAtomicListener::getEventSeqNum](classWombat_1_1MamdaBookAtomicListener.html#function-geteventseqnum), [Wombat::MamdaOrderBookListener::getEventSeqNum](classWombat_1_1MamdaOrderBookListener.html#function-geteventseqnum)


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

Returns the field state. 

**Return**: Source sequence number Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getEventSeqNumFieldState](classWombat_1_1MamdaAuctionListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaConcreteTradeRecap::getEventSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-geteventseqnumfieldstate), [Wombat::MamdaOrderImbalanceListener::getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaQuoteListener::getEventSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaTradeListener::getEventSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaOptionChainListener::getEventSeqNumFieldState](classWombat_1_1MamdaOptionChainListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaBookAtomicListener::getEventSeqNumFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-geteventseqnumfieldstate), [Wombat::MamdaOrderBookListener::getEventSeqNumFieldState](classWombat_1_1MamdaOrderBookListener.html#function-geteventseqnumfieldstate)


### function getEventTime

```csharp
DateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.

**Reimplemented by**: [Wombat::MamdaAuctionListener::getEventTime](classWombat_1_1MamdaAuctionListener.html#function-geteventtime), [Wombat::MamdaConcreteTradeRecap::getEventTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-geteventtime), [Wombat::MamdaOrderImbalanceListener::getEventTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtime), [Wombat::MamdaQuoteListener::getEventTime](classWombat_1_1MamdaQuoteListener.html#function-geteventtime), [Wombat::MamdaTradeListener::getEventTime](classWombat_1_1MamdaTradeListener.html#function-geteventtime), [Wombat::MamdaOptionChainListener::getEventTime](classWombat_1_1MamdaOptionChainListener.html#function-geteventtime), [Wombat::MamdaBookAtomicListener::getEventTime](classWombat_1_1MamdaBookAtomicListener.html#function-geteventtime), [Wombat::MamdaOrderBookListener::getEventTime](classWombat_1_1MamdaOrderBookListener.html#function-geteventtime)


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

Returns the field state. 

**Return**: Event Time Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getEventTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-geteventtimefieldstate), [Wombat::MamdaConcreteTradeRecap::getEventTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-geteventtimefieldstate), [Wombat::MamdaOrderImbalanceListener::getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtimefieldstate), [Wombat::MamdaQuoteListener::getEventTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-geteventtimefieldstate), [Wombat::MamdaTradeListener::getEventTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventtimefieldstate), [Wombat::MamdaOptionChainListener::getEventTimeFieldState](classWombat_1_1MamdaOptionChainListener.html#function-geteventtimefieldstate), [Wombat::MamdaBookAtomicListener::getEventTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-geteventtimefieldstate), [Wombat::MamdaOrderBookListener::getEventTimeFieldState](classWombat_1_1MamdaOrderBookListener.html#function-geteventtimefieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100