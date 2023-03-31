---
title: com::wombat::mamda::orderbook::MamdaOrderBookListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookListener



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.orderbook.MamdaOrderBookClear](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookClear.html), [com.wombat.mamda.orderbook.MamdaOrderBookRecap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookRecap.html), [com.wombat.mamda.orderbook.MamdaOrderBookGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookGap.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-mamdaorderbooklistener)**() |
| | **[MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-mamdaorderbooklistener)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) fullBook) |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-addhandler)**([MamdaOrderBookHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookHandler.html) handler) |
| void | **[addIgnoreEntryId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-addignoreentryid)**(String id) |
| void | **[removeIgnoreEntryId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-removeignoreentryid)**(String id) |
| void | **[clear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-clear)**() |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsymbol)**() |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getpartid)**() |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getactivitytime)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-geteventseqnum)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-geteventtime)**() |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getlinetime)**() |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsendtime)**() |
| short | **[getMsgQual](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getmsgqual)**() |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getorderbook)**() |
| long | **[getBeginGapSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getbegingapseqnum)**() |
| long | **[getEndGapSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getendgapseqnum)**() |
| void | **[setProcessMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-setprocessmarketorders)**(boolean process) |
| boolean | **[getProcessMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getprocessmarketorders)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsymbolfieldstate)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getpartidfieldstate)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getactivitytimefieldstate)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getlinetimefieldstate)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsendtimefieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-geteventtimefieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-geteventseqnumfieldstate)**() |
| void | **[setProcessEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-setprocessentries)**(boolean process) |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getBookSnapshot](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getbooksnapshot)**() |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getReadOnlyBookSnapshot](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getreadonlybooksnapshot)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, MamaMsg msg, short msgType) |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getBookSnapShot](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getbooksnapshot)**(String symbol) |

## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookListener;
```


[MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) is a class that specializes in handling order book updates. Developers provide their own implementation of the [MamdaOrderBookHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookHandler.html) interface and will be delivered notifications for order book recaps and deltas. Notifications for order book deltas include the delta itself as well as the full order book with deltas applied. An obvious application for this MAMDA class is any kind of program trading application that looks at depth of book.

Note: The [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html) class caches the order book. Among other reasons, caching of these fields makes it possible to provide complete trade-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaOrderBookListener

```java
inline MamdaOrderBookListener()
```


Create an order book listener using internally created data structures for the full and delta order books. 


### function MamdaOrderBookListener

```java
inline MamdaOrderBookListener(
    MamdaOrderBook fullBook
)
```


**Parameters**: 

  * **fullBook** The [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) used to maintain the full book. 


Create an order book listener using an optional user-provided object for the full order book. If "fullBook" is NULL, an object will be allocated internally. If this listener is destroyed then the full order book object will only be destroyed if it was created by the listener (i.e., if fullBook was passed as NULL in this constructor).


### function addHandler

```java
inline void addHandler(
    MamdaOrderBookHandler handler
)
```


**Parameters**: 

  * **handler** The hadler registered to receive order book update callbacks. 


Add a specialized order book handler. Currently, only one handler can (and must) be registered.


### function addIgnoreEntryId

```java
inline void addIgnoreEntryId(
    String id
)
```


**Parameters**: 

  * **id** The id of the participant to ignore when process book updates. 


Add an entry ID to ignore. This only makes sense when the entry type is participant ID (as opposed to order ID). All order book updates for this entry ID will be ignored.


### function removeIgnoreEntryId

```java
inline void removeIgnoreEntryId(
    String id
)
```


**Parameters**: 

  * **id** The id of the participant whose update will be subsequently processed as part of the book.


**See**: [addIgnoreEntryId(String)](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-addignoreentryid)

Remove an entry ID to ignore.


### function clear

```java
inline void clear()
```


Clear all cached data fields. 


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


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)


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


### function getMsgQual

```java
inline short getMsgQual()
```


### function getOrderBook

```java
inline MamdaOrderBook getOrderBook()
```


**Return**: The full order book. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaOrderBookClear::getOrderBook](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookClear.html#function-getorderbook)


Returns the full orderbook related to this clear event.


### function getBeginGapSeqNum

```java
inline long getBeginGapSeqNum()
```


**Reimplements**: [com::wombat::mamda::orderbook::MamdaOrderBookGap::getBeginGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookGap.html#function-getbegingapseqnum)


Beginning sequence number in a detected gap event. 


### function getEndGapSeqNum

```java
inline long getEndGapSeqNum()
```


**Reimplements**: [com::wombat::mamda::orderbook::MamdaOrderBookGap::getEndGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookGap.html#function-getendgapseqnum)


Ending sequence number in a detected gap event. 


### function setProcessMarketOrders

```java
inline void setProcessMarketOrders(
    boolean process
)
```


### function getProcessMarketOrders

```java
inline boolean getProcessMarketOrders()
```


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


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


return event time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


return source sequence number Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function setProcessEntries

```java
inline void setProcessEntries(
    boolean process
)
```


**Parameters**: 

  * **process** Whether to process entries in books. 


Set whether we are interested in "entry level" information at all. Many applications only care about price level information. (Default is to process entry level information.)


### function getBookSnapshot

```java
inline MamdaOrderBook getBookSnapshot()
```


**Return**: A snapshot of the current Order Book 

Returns a deep, writeable copy of the underlying order book.


### function getReadOnlyBookSnapshot

```java
inline MamdaOrderBook getReadOnlyBookSnapshot()
```


**Return**: A deep snapshot of the current Order Book 

Returns a deep, read only, copy of the underlying order book. This method is faster than the writeable getBookSnapshot.


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


### function getBookSnapShot

```java
static inline MamdaOrderBook getBookSnapShot(
    String symbol
)
```


-------------------------------

Updated on 2023-03-31 at 15:30:39 +0100