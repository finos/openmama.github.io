---
title: com::wombat::mamda::MamdaBasicEvent
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaBasicEvent



 [More...](#detailed-description)

Inherited by [com.wombat.mamda.MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html), [com.wombat.mamda.MamdaAuctionUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionUpdate.html), [com.wombat.mamda.MamdaConcreteBasicEvent](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html), [com.wombat.mamda.MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html), [com.wombat.mamda.MamdaOrderImbalanceUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html), [com.wombat.mamda.MamdaQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html), [com.wombat.mamda.MamdaQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html), [com.wombat.mamda.MamdaQuoteUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteUpdate.html), [com.wombat.mamda.MamdaSecurityStatusUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html), [com.wombat.mamda.MamdaTradeCancelOrError](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html), [com.wombat.mamda.MamdaTradeClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html), [com.wombat.mamda.MamdaTradeCorrection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html), [com.wombat.mamda.MamdaTradeGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html), [com.wombat.mamda.MamdaTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html), [com.wombat.mamda.options.MamdaOptionSeriesUpdate](interfacecom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionSeriesUpdate.html), [com.wombat.mamda.orderbook.MamdaBookAtomicGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicGap.html), [com.wombat.mamda.orderbook.MamdaOrderBookClear](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookClear.html), [com.wombat.mamda.orderbook.MamdaOrderBookComplexDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookComplexDelta.html), [com.wombat.mamda.orderbook.MamdaOrderBookDelta](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookDelta.html), [com.wombat.mamda.orderbook.MamdaOrderBookGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookGap.html), [com.wombat.mamda.orderbook.MamdaOrderBookSimpleDelta](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookSimpleDelta.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() |
| long | **[getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() |
| MamaDateTime | **[getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() |

## Detailed Description

```java
class com::wombat::mamda::MamdaBasicEvent;
```


[MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html) is a superclass interface that provides access to common event related fields. Events types include trades, quotes, order book updates, closing summaries, etc. See the individual subclasses for specific information about each event type.

Note: Different types of time stamps are available representing the time that the event (trade, quote, etc) actually occurred, the time the data source/exchange reported it, and the time the feed handler applied an action to the given data item (record, order book, etc.). Many feeds to not provide a distinction between the event time and the source time (they may be the same) and the granularity of time stamps also varies between data sources. 

## Public Functions Documentation

### function getSrcTime

```java
MamaDateTime getSrcTime()
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsrctime), [com::wombat::mamda::MamdaConcreteBasicEvent::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getsrctime), [com::wombat::mamda::MamdaOrderImbalanceListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsrctime), [com::wombat::mamda::MamdaQuoteListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsrctime), [com::wombat::mamda::MamdaSecurityStatusListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsrctime), [com::wombat::mamda::MamdaTradeListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsrctime), [com::wombat::mamda::options::MamdaOptionChainListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getsrctime), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsrctime), [com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta::getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-getsrctime), [com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta::getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-getsrctime), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsrctime)


### function getSrcTimeFieldState

```java
short getSrcTimeFieldState()
```


**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaConcreteBasicEvent::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaQuoteListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaTradeListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsrctimefieldstate), [com::wombat::mamda::options::MamdaOptionChainListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getsrctimefieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsrctimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-getsrctimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-getsrctimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsrctimefieldstate)


return Source time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getActivityTime

```java
MamaDateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getactivitytime), [com::wombat::mamda::MamdaConcreteBasicEvent::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getactivitytime), [com::wombat::mamda::MamdaOrderImbalanceListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getactivitytime), [com::wombat::mamda::MamdaOrderImbalanceUpdate::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html#function-getactivitytime), [com::wombat::mamda::MamdaQuoteListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getactivitytime), [com::wombat::mamda::MamdaSecurityStatusListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getactivitytime), [com::wombat::mamda::MamdaTradeListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getactivitytime), [com::wombat::mamda::options::MamdaOptionChainListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getactivitytime), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getactivitytime), [com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta::getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-getactivitytime), [com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta::getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-getactivitytime), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getactivitytime)


### function getActivityTimeFieldState

```java
short getActivityTimeFieldState()
```


**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaConcreteBasicEvent::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceUpdate::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaQuoteListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaTradeListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::options::MamdaOptionChainListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-getactivitytimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-getactivitytimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getactivitytimefieldstate)


return Activity time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getEventSeqNum

```java
long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-geteventseqnum), [com::wombat::mamda::MamdaConcreteBasicEvent::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventseqnum), [com::wombat::mamda::MamdaOrderImbalanceListener::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-geteventseqnum), [com::wombat::mamda::MamdaOrderImbalanceUpdate::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html#function-geteventseqnum), [com::wombat::mamda::MamdaQuoteListener::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventseqnum), [com::wombat::mamda::MamdaSecurityStatusListener::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-geteventseqnum), [com::wombat::mamda::MamdaTradeListener::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-geteventseqnum), [com::wombat::mamda::options::MamdaOptionChainListener::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-geteventseqnum), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-geteventseqnum), [com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-geteventseqnum), [com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-geteventseqnum), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-geteventseqnum)


### function getEventSeqNumFieldState

```java
short getEventSeqNumFieldState()
```


**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-geteventseqnumfieldstate), [com::wombat::mamda::MamdaConcreteBasicEvent::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventseqnumfieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-geteventseqnumfieldstate), [com::wombat::mamda::MamdaOrderImbalanceUpdate::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html#function-geteventseqnumfieldstate), [com::wombat::mamda::MamdaQuoteListener::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventseqnumfieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-geteventseqnumfieldstate), [com::wombat::mamda::MamdaTradeListener::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-geteventseqnumfieldstate), [com::wombat::mamda::options::MamdaOptionChainListener::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-geteventseqnumfieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-geteventseqnumfieldstate), [com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-geteventseqnumfieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-geteventseqnumfieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-geteventseqnumfieldstate)


return source sequence number Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getEventTime

```java
MamaDateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-geteventtime), [com::wombat::mamda::MamdaConcreteBasicEvent::getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventtime), [com::wombat::mamda::MamdaOrderImbalanceListener::getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-geteventtime), [com::wombat::mamda::MamdaOrderImbalanceUpdate::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html#function-geteventtime), [com::wombat::mamda::MamdaQuoteListener::getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventtime), [com::wombat::mamda::MamdaSecurityStatusListener::getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-geteventtime), [com::wombat::mamda::MamdaTradeListener::getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-geteventtime), [com::wombat::mamda::options::MamdaOptionChainListener::getEventTime](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-geteventtime), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-geteventtime), [com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta::getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-geteventtime), [com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta::getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-geteventtime), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-geteventtime)


### function getEventTimeFieldState

```java
short getEventTimeFieldState()
```


**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-geteventtimefieldstate), [com::wombat::mamda::MamdaConcreteBasicEvent::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventtimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-geteventtimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceUpdate::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html#function-geteventtimefieldstate), [com::wombat::mamda::MamdaQuoteListener::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-geteventtimefieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-geteventtimefieldstate), [com::wombat::mamda::MamdaTradeListener::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-geteventtimefieldstate), [com::wombat::mamda::options::MamdaOptionChainListener::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1options_1_1MamdaOptionChainListener.html#function-geteventtimefieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-geteventtimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderbookConcreteComplexDelta::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderbookConcreteComplexDelta.html#function-geteventtimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookConcreteSimpleDelta::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteSimpleDelta.html#function-geteventtimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-geteventtimefieldstate)


return event time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100