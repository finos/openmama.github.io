---
title: Wombat::MamdaAuctionListener
summary: MamdaAuctionListener is a class that specializes in handling Auction updates. Developers provide their own implementation of the MamdaAuctionHandler interface and will be delivered notifications for Auctions and Auction closing prices. An obvious application for this MAMDA class is any kind of Auction tick capture application. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionListener



[MamdaAuctionListener]() is a class that specializes in handling Auction updates. Developers provide their own implementation of the [MamdaAuctionHandler](interfaceWombat_1_1MamdaAuctionHandler.html) interface and will be delivered notifications for Auctions and Auction closing prices. An obvious application for this MAMDA class is any kind of Auction tick capture application.  [More...](#detailed-description)

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaAuctionRecap](interfaceWombat_1_1MamdaAuctionRecap.html), [Wombat.MamdaAuctionUpdate](interfaceWombat_1_1MamdaAuctionUpdate.html), [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html), [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html#function-mamdaauctionlistener)**()<br>Create a specialized Auction listener. This listener handles Auction updates, quote recaps, and Auction gap notifications.  |
| void | **[addHandler](classWombat_1_1MamdaAuctionListener.html#function-addhandler)**([MamdaAuctionHandler](interfaceWombat_1_1MamdaAuctionHandler.html) handler)<br>Add a specialized Auction handler. Currently, only one handler can (and must) be registered.  |
| string | **[getSymbol](classWombat_1_1MamdaAuctionListener.html#function-getsymbol)**()<br>Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher.  |
| string | **[getPartId](classWombat_1_1MamdaAuctionListener.html#function-getpartid)**()<br>Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant).  |
| DateTime | **[getSrcTime](classWombat_1_1MamdaAuctionListener.html#function-getsrctime)**()<br>Returns the source time.  |
| DateTime | **[getActivityTime](classWombat_1_1MamdaAuctionListener.html#function-getactivitytime)**() |
| DateTime | **[getLineTime](classWombat_1_1MamdaAuctionListener.html#function-getlinetime)**()<br>Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler.  |
| DateTime | **[getSendTime](classWombat_1_1MamdaAuctionListener.html#function-getsendtime)**()<br>Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()).  |
| DateTime | **[getEventTime](classWombat_1_1MamdaAuctionListener.html#function-geteventtime)**() |
| long | **[getEventSeqNum](classWombat_1_1MamdaAuctionListener.html#function-geteventseqnum)**() |
| MamaPrice | **[getUncrossPrice](classWombat_1_1MamdaAuctionListener.html#function-getuncrossprice)**()<br>Get the uncross price.  |
| double | **[getUncrossVolume](classWombat_1_1MamdaAuctionListener.html#function-getuncrossvolume)**()<br>Get the uncross Volume.  |
| long | **[getUncrossPriceInd](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceind)**()<br>Get the uncross price indicator.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsymbolfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaAuctionListener.html#function-getpartidfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getlinetimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsendtimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaAuctionListener.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspricefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossVolumeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrossvolumefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceIndFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceindfieldstate)**()<br>Get the field state  |
| void | **[onMsg](classWombat_1_1MamdaAuctionListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Invoked for each message received for the subscription to which the Listener is registered.  |
| string | **[getFieldAsString](classWombat_1_1MamdaAuctionListener.html#function-getfieldasstring)**(MamaMsgField field) |

## Detailed Description

```csharp
class Wombat::MamdaAuctionListener;
```

[MamdaAuctionListener]() is a class that specializes in handling Auction updates. Developers provide their own implementation of the [MamdaAuctionHandler](interfaceWombat_1_1MamdaAuctionHandler.html) interface and will be delivered notifications for Auctions and Auction closing prices. An obvious application for this MAMDA class is any kind of Auction tick capture application. 

Note: The [MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) class caches Auction-related field values. Among other reasons, caching of these fields makes it possible to provide complete Auction-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaAuctionListener

```csharp
MamdaAuctionListener()
```

Create a specialized Auction listener. This listener handles Auction updates, quote recaps, and Auction gap notifications. 

### function addHandler

```csharp
void addHandler(
    MamdaAuctionHandler handler
)
```

Add a specialized Auction handler. Currently, only one handler can (and must) be registered. 

**Parameters**: 

  * **handler** 


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


### function getEventTime

```csharp
DateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)


### function getEventSeqNum

```csharp
long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number.

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getUncrossPrice

```csharp
MamaPrice getUncrossPrice()
```

Get the uncross price. 

**Return**: Indicative or firm auction price. 

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossPrice](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrossprice)


### function getUncrossVolume

```csharp
double getUncrossVolume()
```

Get the uncross Volume. 

**Return**: Indicative Volume or the volume turned over in the auction

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossVolume](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrossvolume)


### function getUncrossPriceInd

```csharp
long getUncrossPriceInd()
```

Get the uncross price indicator. 

**Return**: The uncross price ind - indicates whether the price and volume is indicative of the current state of the auction or whether its the firm auction price and volume 

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossPriceInd](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrosspriceind)


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


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

Returns the field state. 

**Return**: Event Time Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

Returns the field state. 

**Return**: Source sequence number Field State

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


### function getUncrossPriceFieldState

```csharp
MamdaFieldState getUncrossPriceFieldState()
```

Get the field state 

**Return**: Field state

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossPriceFieldState](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrosspricefieldstate)


### function getUncrossVolumeFieldState

```csharp
MamdaFieldState getUncrossVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossVolumeFieldState](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrossvolumefieldstate)


### function getUncrossPriceIndFieldState

```csharp
MamdaFieldState getUncrossPriceIndFieldState()
```

Get the field state 

**Return**: Field state

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossPriceIndFieldState](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrosspriceindfieldstate)


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


### function getFieldAsString

```csharp
string getFieldAsString(
    MamaMsgField field
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:10 +0100