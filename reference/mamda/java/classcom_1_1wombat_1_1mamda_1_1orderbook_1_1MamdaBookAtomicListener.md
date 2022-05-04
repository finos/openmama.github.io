---
title: com::wombat::mamda::orderbook::MamdaBookAtomicListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaBookAtomicListener





Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.orderbook.MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html), [com.wombat.mamda.orderbook.MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html), [com.wombat.mamda.orderbook.MamdaBookAtomicGap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicGap.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Iterator | **[entryIterator](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-entryiterator)**() |
| void | **[addBookHandler](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-addbookhandler)**([MamdaBookAtomicBookHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicBookHandler.html) handler) |
| void | **[addLevelHandler](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-addlevelhandler)**([MamdaBookAtomicLevelHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelHandler.html) handler) |
| void | **[addLevelEntryHandler](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-addlevelentryhandler)**([MamdaBookAtomicLevelEntryHandler](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntryHandler.html) handler) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsymbol)**() |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpartid)**() |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getactivitytime)**() |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getlinetime)**() |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsendtime)**() |
| short | **[getMsgQual](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getmsgqual)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-geteventseqnum)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-geteventtime)**() |
| long | **[getPriceLevelNumLevels](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelnumlevels)**() |
| long | **[getPriceLevelNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelnum)**() |
| double | **[getPriceLevelPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelprice)**() |
| MamaPrice | **[getPriceLevelMamaPrice](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelmamaprice)**() |
| double | **[getPriceLevelSize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelsize)**() |
| long | **[getPriceLevelSizeChange](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelsizechange)**() |
| char | **[getPriceLevelAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelaction)**() |
| char | **[getPriceLevelSide](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelside)**() |
| MamaDateTime | **[getPriceLevelTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpriceleveltime)**() |
| double | **[getPriceLevelNumEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelnumentries)**() |
| void | **[setOrderType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-setordertype)**(char orderType) |
| char | **[getOrderType](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getordertype)**() |
| boolean | **[getHasMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-gethasmarketorders)**() |
| void | **[setProcessMarketOrders](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-setprocessmarketorders)**(boolean process) |
| long | **[getPriceLevelActNumEntries](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelactnumentries)**() |
| char | **[getPriceLevelEntryAction](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentryaction)**() |
| char | **[getPriceLevelEntryReason](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentryreason)**() |
| String | **[getPriceLevelEntryId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentryid)**() |
| long | **[getPriceLevelEntrySize](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentrysize)**() |
| MamaDateTime | **[getPriceLevelEntryTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpricelevelentrytime)**() |
| long | **[getBeginGapSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getbegingapseqnum)**() |
| long | **[getEndGapSeqNum](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getendgapseqnum)**() |
| void | **[setPriceLevel](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-setpricelevel)**(long priceLevel) |
| boolean | **[isVisible](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-isvisible)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsymbolfieldstate)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpartidfieldstate)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getactivitytimefieldstate)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getlinetimefieldstate)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsendtimefieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-geteventtimefieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-geteventseqnumfieldstate)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, MamaMsg msg, short msgType) |

## Public Functions Documentation

### function entryIterator

```java
inline Iterator entryIterator()
```


**Return**: Iterator The iterator for the price level entries 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::entryIterator](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-entryiterator)


Returns a `java.util.Iterator` for all entries within this level. Price Level entries are represented by the `[MamdaOrderBookEntry](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookEntry.html)` class.


### function addBookHandler

```java
inline void addBookHandler(
    MamdaBookAtomicBookHandler handler
)
```


### function addLevelHandler

```java
inline void addLevelHandler(
    MamdaBookAtomicLevelHandler handler
)
```


### function addLevelEntryHandler

```java
inline void addLevelEntryHandler(
    MamdaBookAtomicLevelEntryHandler handler
)
```


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


### function getMsgQual

```java
inline short getMsgQual()
```


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


### function getPriceLevelNumLevels

```java
inline long getPriceLevelNumLevels()
```


**Return**: The number of price levels. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelNumLevels](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumlevels)


Return the number of price levels in the order book update.


### function getPriceLevelNum

```java
inline long getPriceLevelNum()
```


**Return**: The position of this level in the update received. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelNum](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelnum)


Return at which position this level is within an update containing a number of levels. (i.e. level m of n levels in the update)


### function getPriceLevelPrice

```java
inline double getPriceLevelPrice()
```


**Return**: The price level price. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelPrice](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelprice)


Return the price for this price level.


### function getPriceLevelMamaPrice

```java
inline MamaPrice getPriceLevelMamaPrice()
```


**Return**: The price level price. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelMamaPrice](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelmamaprice)


Return the MamaPrice for this price level.


### function getPriceLevelSize

```java
inline double getPriceLevelSize()
```


**Return**: The number of entries in this price level. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelSize](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelsize)


Return the number of order entries comprising this price level. 

 Not supported for V5 entry book updates.


### function getPriceLevelSizeChange

```java
inline long getPriceLevelSizeChange()
```


**Return**: The aggregate size at the current price level. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelSizeChange](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelsizechange)


Aggregate size at current price level. 

 Not supported for V5 entry book updates.


### function getPriceLevelAction

```java
inline char getPriceLevelAction()
```


**Return**: The price level action. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelAction](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelaction)


The action to apply to the orderbook for this price level. Can have a value of: 

* A : Add a new price level 
* U : Update an existing price level 
* D : Delete an existing price level 
* C : Closing information for price level (often treat the same as Update). 
Not supported for V5 entry book updates.


### function getPriceLevelSide

```java
inline char getPriceLevelSide()
```


**Return**: The price level side. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelSide](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelside)


Side of book at current price level.



* B : Bid side. Same as 'buy' side. 
* A : Ask side. Same as 'sell' side. 


### function getPriceLevelTime

```java
inline MamaDateTime getPriceLevelTime()
```


**Return**: The time of the orderbook price level. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelTime](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpriceleveltime)


Time of order book price level.


### function getPriceLevelNumEntries

```java
inline double getPriceLevelNumEntries()
```


**Return**: The number of entries at the current price level. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevel::getPriceLevelNumEntries](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumentries)


Number of order book entries at current price level. 

 Not supported for V5 entry book updates.


### function setOrderType

```java
inline void setOrderType(
    char orderType
)
```


### function getOrderType

```java
inline char getOrderType()
```


### function getHasMarketOrders

```java
inline boolean getHasMarketOrders()
```


### function setProcessMarketOrders

```java
inline void setProcessMarketOrders(
    boolean process
)
```


### function getPriceLevelActNumEntries

```java
inline long getPriceLevelActNumEntries()
```


**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry::getPriceLevelActNumEntries](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelactnumentries)


### function getPriceLevelEntryAction

```java
inline char getPriceLevelEntryAction()
```


**Return**: The orderbook entry action. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry::getPriceLevelEntryAction](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryaction)


Order book entry action to apply to the full order book.

A : Add entry to the price level. U : Update existing entry in the price level. D : Delete existing entry from the price level.


### function getPriceLevelEntryReason

```java
inline char getPriceLevelEntryReason()
```


**Return**: The orderbook entry reason. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry::getPriceLevelEntryReason](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryreason)


Reason for order book entry.


### function getPriceLevelEntryId

```java
inline String getPriceLevelEntryId()
```


**Return**: The entry id 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry::getPriceLevelEntryId](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryid)


Order book entry Id. (order ID, participant ID, etc.)


### function getPriceLevelEntrySize

```java
inline long getPriceLevelEntrySize()
```


**Return**: Order book entry size 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry::getPriceLevelEntrySize](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentrysize)


Return the order book entry size


### function getPriceLevelEntryTime

```java
inline MamaDateTime getPriceLevelEntryTime()
```


**Return**: Time of order book entry update. 

**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry::getPriceLevelEntryTime](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentrytime)


Return the time of order book entry update.


### function getBeginGapSeqNum

```java
inline long getBeginGapSeqNum()
```


**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicGap::getBeginGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicGap.html#function-getbegingapseqnum)


Beginning sequence number in a detected gap event. 


### function getEndGapSeqNum

```java
inline long getEndGapSeqNum()
```


**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicGap::getEndGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicGap.html#function-getendgapseqnum)


Ending sequence number in a detected gap event. 


### function setPriceLevel

```java
inline void setPriceLevel(
    long priceLevel
)
```


### function isVisible

```java
inline boolean isVisible()
```


**Reimplements**: [com::wombat::mamda::orderbook::MamdaBookAtomicLevelEntry::isVisible](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html#function-isvisible)


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


### function onMsg

```java
inline void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    short msgType
)
```


**Parameters**: 

  * **subscription** The [MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) to which this listener was registered. 
  * **msg** The MamaMsg received by the underlying MAMA API and which resulted in this callback being invoked. 
  * **msgType** The message type. e.g. INITIAL, RECAP, UPDATE etc. 


**Reimplements**: [com::wombat::mamda::MamdaMsgListener::onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)


Invoked for each message received for the subscription to which the Listener is registered.


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100