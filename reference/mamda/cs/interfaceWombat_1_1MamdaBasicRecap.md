---
title: Wombat::MamdaBasicRecap
summary: MamdaBasicRecap is an interface that provides access to common recap-related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBasicRecap



[MamdaBasicRecap]() is an interface that provides access to common recap-related fields. 

Inherited by [Wombat.MamdaAuctionRecap](interfaceWombat_1_1MamdaAuctionRecap.html), [Wombat.MamdaBookAtomicLevel](interfaceWombat_1_1MamdaBookAtomicLevel.html), [Wombat.MamdaBookAtomicLevelEntry](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html), [Wombat.MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html), [Wombat.MamdaOrderImbalanceRecap](interfaceWombat_1_1MamdaOrderImbalanceRecap.html), [Wombat.MamdaQuoteRecap](interfaceWombat_1_1MamdaQuoteRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| string | **[getSymbol](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbol)**()<br>Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**()<br>Returns the field state.  |
| string | **[getPartId](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartid)**()<br>Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctime)**()<br>Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytime)**()<br>Activity time. A feed handler generated time stamp representing when the data item was last updated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getLineTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetime)**()<br>Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getSendTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtime)**()<br>Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**()<br>Returns the field state.  |

## Public Functions Documentation

### function getSymbol

```csharp
string getSymbol()
```

Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSymbol](classWombat_1_1MamdaAuctionListener.html#function-getsymbol), [Wombat::MamdaConcreteQuoteRecap::getSymbol](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsymbol), [Wombat::MamdaOrderImbalanceListener::getSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbol), [Wombat::MamdaQuoteListener::getSymbol](classWombat_1_1MamdaQuoteListener.html#function-getsymbol), [Wombat::MamdaBookAtomicListener::getSymbol](classWombat_1_1MamdaBookAtomicListener.html#function-getsymbol)


### function getSymbolFieldState

```csharp
MamdaFieldState getSymbolFieldState()
```

Returns the field state. 

**Return**: Symbol Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSymbolFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsymbolfieldstate), [Wombat::MamdaConcreteQuoteRecap::getSymbolFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsymbolfieldstate), [Wombat::MamdaOrderImbalanceListener::getSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbolfieldstate), [Wombat::MamdaQuoteListener::getSymbolFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsymbolfieldstate), [Wombat::MamdaBookAtomicListener::getSymbolFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getsymbolfieldstate)


### function getPartId

```csharp
string getPartId()
```

Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getPartId](classWombat_1_1MamdaAuctionListener.html#function-getpartid), [Wombat::MamdaConcreteQuoteRecap::getPartId](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getpartid), [Wombat::MamdaOrderImbalanceListener::getPartId](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartid), [Wombat::MamdaQuoteListener::getPartId](classWombat_1_1MamdaQuoteListener.html#function-getpartid), [Wombat::MamdaBookAtomicListener::getPartId](classWombat_1_1MamdaBookAtomicListener.html#function-getpartid)


### function getPartIdFieldState

```csharp
MamdaFieldState getPartIdFieldState()
```

Returns the field state. 

**Return**: Participant ID Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getPartIdFieldState](classWombat_1_1MamdaAuctionListener.html#function-getpartidfieldstate), [Wombat::MamdaConcreteQuoteRecap::getPartIdFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getpartidfieldstate), [Wombat::MamdaOrderImbalanceListener::getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartidfieldstate), [Wombat::MamdaQuoteListener::getPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getpartidfieldstate), [Wombat::MamdaBookAtomicListener::getPartIdFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getpartidfieldstate)


### function getSrcTime

```csharp
DateTime getSrcTime()
```

Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSrcTime](classWombat_1_1MamdaAuctionListener.html#function-getsrctime), [Wombat::MamdaConcreteQuoteRecap::getSrcTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsrctime), [Wombat::MamdaOrderImbalanceListener::getSrcTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctime), [Wombat::MamdaQuoteListener::getSrcTime](classWombat_1_1MamdaQuoteListener.html#function-getsrctime), [Wombat::MamdaBookAtomicListener::getSrcTime](classWombat_1_1MamdaBookAtomicListener.html#function-getsrctime)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

Returns the field state. 

**Return**: Source time Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSrcTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsrctimefieldstate), [Wombat::MamdaConcreteQuoteRecap::getSrcTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsrctimefieldstate), [Wombat::MamdaOrderImbalanceListener::getSrcTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate), [Wombat::MamdaQuoteListener::getSrcTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsrctimefieldstate), [Wombat::MamdaBookAtomicListener::getSrcTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getsrctimefieldstate)


### function getActivityTime

```csharp
DateTime getActivityTime()
```

Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getActivityTime](classWombat_1_1MamdaAuctionListener.html#function-getactivitytime), [Wombat::MamdaConcreteQuoteRecap::getActivityTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getactivitytime), [Wombat::MamdaOrderImbalanceListener::getActivityTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytime), [Wombat::MamdaQuoteListener::getActivityTime](classWombat_1_1MamdaQuoteListener.html#function-getactivitytime), [Wombat::MamdaBookAtomicListener::getActivityTime](classWombat_1_1MamdaBookAtomicListener.html#function-getactivitytime)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

Returns the field state. 

**Return**: Activity Time Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getActivityTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate), [Wombat::MamdaConcreteQuoteRecap::getActivityTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getactivitytimefieldstate), [Wombat::MamdaOrderImbalanceListener::getActivityTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate), [Wombat::MamdaQuoteListener::getActivityTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate), [Wombat::MamdaBookAtomicListener::getActivityTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getactivitytimefieldstate)


### function getLineTime

```csharp
DateTime getLineTime()
```

Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getLineTime](classWombat_1_1MamdaAuctionListener.html#function-getlinetime), [Wombat::MamdaConcreteQuoteRecap::getLineTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getlinetime), [Wombat::MamdaOrderImbalanceListener::getLineTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetime), [Wombat::MamdaQuoteListener::getLineTime](classWombat_1_1MamdaQuoteListener.html#function-getlinetime), [Wombat::MamdaBookAtomicListener::getLineTime](classWombat_1_1MamdaBookAtomicListener.html#function-getlinetime)


### function getLineTimeFieldState

```csharp
MamdaFieldState getLineTimeFieldState()
```

Returns the field state. 

**Return**: Line Time Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getLineTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getlinetimefieldstate), [Wombat::MamdaConcreteQuoteRecap::getLineTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getlinetimefieldstate), [Wombat::MamdaOrderImbalanceListener::getLineTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetimefieldstate), [Wombat::MamdaQuoteListener::getLineTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getlinetimefieldstate), [Wombat::MamdaBookAtomicListener::getLineTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getlinetimefieldstate)


### function getSendTime

```csharp
DateTime getSendTime()
```

Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSendTime](classWombat_1_1MamdaAuctionListener.html#function-getsendtime), [Wombat::MamdaConcreteQuoteRecap::getSendTime](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsendtime), [Wombat::MamdaOrderImbalanceListener::getSendTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtime), [Wombat::MamdaQuoteListener::getSendTime](classWombat_1_1MamdaQuoteListener.html#function-getsendtime), [Wombat::MamdaBookAtomicListener::getSendTime](classWombat_1_1MamdaBookAtomicListener.html#function-getsendtime)


### function getSendTimeFieldState

```csharp
MamdaFieldState getSendTimeFieldState()
```

Returns the field state. 

**Return**: Send time Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSendTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsendtimefieldstate), [Wombat::MamdaConcreteQuoteRecap::getSendTimeFieldState](classWombat_1_1MamdaConcreteQuoteRecap.html#function-getsendtimefieldstate), [Wombat::MamdaOrderImbalanceListener::getSendTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtimefieldstate), [Wombat::MamdaQuoteListener::getSendTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsendtimefieldstate), [Wombat::MamdaBookAtomicListener::getSendTimeFieldState](classWombat_1_1MamdaBookAtomicListener.html#function-getsendtimefieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100