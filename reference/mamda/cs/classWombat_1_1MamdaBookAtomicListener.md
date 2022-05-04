---
title: Wombat::MamdaBookAtomicListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBookAtomicListener





Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaBookAtomicLevel](interfaceWombat_1_1MamdaBookAtomicLevel.html), [Wombat.MamdaBookAtomicLevelEntry](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html), [Wombat.MamdaBookAtomicGap](interfaceWombat_1_1MamdaBookAtomicGap.html), [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html), [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[addBookHandler](classWombat_1_1MamdaBookAtomicListener.html#function-addbookhandler)**([MamdaBookAtomicBookHandler](interfaceWombat_1_1MamdaBookAtomicBookHandler.html) handler) |
| void | **[addLevelHandler](classWombat_1_1MamdaBookAtomicListener.html#function-addlevelhandler)**([MamdaBookAtomicLevelHandler](interfaceWombat_1_1MamdaBookAtomicLevelHandler.html) handler) |
| void | **[addLevelEntryHandler](classWombat_1_1MamdaBookAtomicListener.html#function-addlevelentryhandler)**([MamdaBookAtomicLevelEntryHandler](interfaceWombat_1_1MamdaBookAtomicLevelEntryHandler.html) handler) |
| string | **[getSymbol](classWombat_1_1MamdaBookAtomicListener.html#function-getsymbol)**()<br>Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher.  |
| string | **[getPartId](classWombat_1_1MamdaBookAtomicListener.html#function-getpartid)**()<br>Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant).  |
| DateTime | **[getSrcTime](classWombat_1_1MamdaBookAtomicListener.html#function-getsrctime)**()<br>Returns the source time.  |
| DateTime | **[getActivityTime](classWombat_1_1MamdaBookAtomicListener.html#function-getactivitytime)**() |
| DateTime | **[getLineTime](classWombat_1_1MamdaBookAtomicListener.html#function-getlinetime)**()<br>Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler.  |
| DateTime | **[getSendTime](classWombat_1_1MamdaBookAtomicListener.html#function-getsendtime)**()<br>Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()).  |
| long | **[getEventSeqNum](classWombat_1_1MamdaBookAtomicListener.html#function-geteventseqnum)**() |
| DateTime | **[getEventTime](classWombat_1_1MamdaBookAtomicListener.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getsymbolfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getpartidfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getlinetimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getsendtimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |
| long | **[getPriceLevelNumLevels](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelnumlevels)**()<br>Return the number of price levels in the order book update.  |
| long | **[getPriceLevelNum](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelnum)**()<br>Return at which position this level is within an update containing a number of levels. (i.e. level m of n levels in the update)  |
| double | **[getPriceLevelPrice](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelprice)**()<br>Return the price for this price level.  |
| MamaPrice | **[getPriceLevelMamaPrice](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelmamaprice)**()<br>Return the Mamaprice for this price level.  |
| double | **[getPriceLevelSize](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelsize)**()<br>Return the number of order entries comprising this price level.  |
| long | **[getPriceLevelSizeChange](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelsizechange)**()<br>Aggregate size at current price level.  |
| char | **[getPriceLevelAction](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelaction)**()<br>The action to apply to the orderbook for this price level. Can have a value of: A : Add a new price level U : Update an existing price level D : Delete an existing price level C : Closing information for price level (often treat the same as Update).  |
| char | **[getPriceLevelSide](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelside)**()<br>Side of book at current price level. B : Bid side. Same as 'buy' side. A : Ask side. Same as 'sell' side.  |
| DateTime | **[getPriceLevelTime](classWombat_1_1MamdaBookAtomicListener.html#function-getpriceleveltime)**()<br>Time of order book price level.  |
| double | **[getPriceLevelNumEntries](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelnumentries)**()<br>Number of order book entries at current price level.  |
| long | **[getPriceLevelActNumEntries](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelactnumentries)**() |
| char | **[getPriceLevelEntryAction](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentryaction)**() |
| IntPtr | **[getPriceLevelEntryIdIntPtr](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentryidintptr)**() |
| string | **[getPriceLevelEntryId](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentryid)**() |
| long | **[getPriceLevelEntrySize](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentrysize)**() |
| DateTime | **[getPriceLevelEntryTime](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentrytime)**() |
| long | **[getBeginGapSeqNum](classWombat_1_1MamdaBookAtomicListener.html#function-getbegingapseqnum)**()<br>Beginning sequence number in a detected gap event.  |
| long | **[getEndGapSeqNum](classWombat_1_1MamdaBookAtomicListener.html#function-getendgapseqnum)**()<br>Ending sequence number in a detected gap event.  |
| void | **[onMsg](classWombat_1_1MamdaBookAtomicListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Invoked for each message received for the subscription to which the Listener is registered.  |

## Public Functions Documentation

### function addBookHandler

```csharp
void addBookHandler(
    MamdaBookAtomicBookHandler handler
)
```


### function addLevelHandler

```csharp
void addLevelHandler(
    MamdaBookAtomicLevelHandler handler
)
```


### function addLevelEntryHandler

```csharp
void addLevelEntryHandler(
    MamdaBookAtomicLevelEntryHandler handler
)
```


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


### function getPriceLevelNumLevels

```csharp
long getPriceLevelNumLevels()
```

Return the number of price levels in the order book update. 

**Return**: The number of price levels.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelNumLevels](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumlevels)


### function getPriceLevelNum

```csharp
long getPriceLevelNum()
```

Return at which position this level is within an update containing a number of levels. (i.e. level m of n levels in the update) 

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelNum](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelnum)


returns>The position of this level in the update received.


### function getPriceLevelPrice

```csharp
double getPriceLevelPrice()
```

Return the price for this price level. 

**Return**: The price level price.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelPrice](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelprice)


### function getPriceLevelMamaPrice

```csharp
MamaPrice getPriceLevelMamaPrice()
```

Return the Mamaprice for this price level. 

**Return**: The price level Mama price.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelMamaPrice](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelmamaprice)


### function getPriceLevelSize

```csharp
double getPriceLevelSize()
```

Return the number of order entries comprising this price level. 

**Return**: The number of entries in this price level.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelSize](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelsize)


### function getPriceLevelSizeChange

```csharp
long getPriceLevelSizeChange()
```

Aggregate size at current price level. 

**Return**: The aggregate size at the current price level.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelSizeChange](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelsizechange)


### function getPriceLevelAction

```csharp
char getPriceLevelAction()
```

The action to apply to the orderbook for this price level. Can have a value of: A : Add a new price level U : Update an existing price level D : Delete an existing price level C : Closing information for price level (often treat the same as Update). 

**Return**: The price level action.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelAction](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelaction)


### function getPriceLevelSide

```csharp
char getPriceLevelSide()
```

Side of book at current price level. B : Bid side. Same as 'buy' side. A : Ask side. Same as 'sell' side. 

**Return**: The price level side.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelSide](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelside)


### function getPriceLevelTime

```csharp
DateTime getPriceLevelTime()
```

Time of order book price level. 

**Return**: The time of the orderbook price level.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelTime](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpriceleveltime)


### function getPriceLevelNumEntries

```csharp
double getPriceLevelNumEntries()
```

Number of order book entries at current price level. 

**Return**: The number of entries at the current price level.

**Reimplements**: [Wombat::MamdaBookAtomicLevel::getPriceLevelNumEntries](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumentries)


### function getPriceLevelActNumEntries

```csharp
long getPriceLevelActNumEntries()
```


**Reimplements**: [Wombat::MamdaBookAtomicLevelEntry::getPriceLevelActNumEntries](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelactnumentries)


?? 


### function getPriceLevelEntryAction

```csharp
char getPriceLevelEntryAction()
```


**Return**: The orderbook entry action. 

**Reimplements**: [Wombat::MamdaBookAtomicLevelEntry::getPriceLevelEntryAction](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryaction)


Order book entry action to apply to the full order book.

A : Add entry to the price level. U : Update existing entry in the price level. D : Delete existing entry from the price level.


### function getPriceLevelEntryIdIntPtr

```csharp
IntPtr getPriceLevelEntryIdIntPtr()
```


### function getPriceLevelEntryId

```csharp
string getPriceLevelEntryId()
```


**Return**: The entry id 

**Reimplements**: [Wombat::MamdaBookAtomicLevelEntry::getPriceLevelEntryId](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryid)


Order book entry Id. (order ID, participant ID, etc.)


### function getPriceLevelEntrySize

```csharp
long getPriceLevelEntrySize()
```


**Return**: Order book entry size 

**Reimplements**: [Wombat::MamdaBookAtomicLevelEntry::getPriceLevelEntrySize](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentrysize)


Return the order book entry size


### function getPriceLevelEntryTime

```csharp
DateTime getPriceLevelEntryTime()
```


**Return**: Time of order book entry update. 

**Reimplements**: [Wombat::MamdaBookAtomicLevelEntry::getPriceLevelEntryTime](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentrytime)


Return the time of order book entry update.


### function getBeginGapSeqNum

```csharp
long getBeginGapSeqNum()
```

Beginning sequence number in a detected gap event. 

**Reimplements**: [Wombat::MamdaBookAtomicGap::getBeginGapSeqNum](interfaceWombat_1_1MamdaBookAtomicGap.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```csharp
long getEndGapSeqNum()
```

Ending sequence number in a detected gap event. 

**Reimplements**: [Wombat::MamdaBookAtomicGap::getEndGapSeqNum](interfaceWombat_1_1MamdaBookAtomicGap.html#function-getendgapseqnum)


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


-------------------------------

Updated on 2022-05-04 at 07:54:10 +0100