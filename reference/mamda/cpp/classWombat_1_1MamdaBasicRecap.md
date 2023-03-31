---
title: Wombat::MamdaBasicRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBasicRecap



 [More...](#detailed-description)


`#include <MamdaBasicRecap.h>`

Inherited by [Wombat::MamdaAuctionRecap](classWombat_1_1MamdaAuctionRecap.html), [Wombat::MamdaCurrencyRecap](classWombat_1_1MamdaCurrencyRecap.html), [Wombat::MamdaFundamentals](classWombat_1_1MamdaFundamentals.html), [Wombat::MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html), [Wombat::MamdaQuoteRecap](classWombat_1_1MamdaQuoteRecap.html), [Wombat::MamdaSecStatusRecap](classWombat_1_1MamdaSecStatusRecap.html), [Wombat::MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaBasicRecap.html#function-getsymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**() const =0 |
| virtual const char * | **[getPartId](classWombat_1_1MamdaBasicRecap.html#function-getpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaBasicRecap.html#function-getsrctime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaBasicRecap.html#function-getactivitytime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaBasicRecap.html#function-getlinetime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaBasicRecap.html#function-getsendtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**() const =0 |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |

## Detailed Description

```cpp
class Wombat::MamdaBasicRecap;
```


[MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html) is an interface that provides access to recap related fields. 

## Public Functions Documentation

### function getSymbol

```cpp
virtual const char * getSymbol() const =0
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSymbol](classWombat_1_1MamdaAuctionListener.html#function-getsymbol), [Wombat::MamdaCurrencyListener::getSymbol](classWombat_1_1MamdaCurrencyListener.html#function-getsymbol), [Wombat::MamdaFundamentalListener::getSymbol](classWombat_1_1MamdaFundamentalListener.html#function-getsymbol), [Wombat::MamdaOrderImbalanceListener::getSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbol), [Wombat::MamdaQuoteListener::getSymbol](classWombat_1_1MamdaQuoteListener.html#function-getsymbol), [Wombat::MamdaSecStatusListener::getSymbol](classWombat_1_1MamdaSecStatusListener.html#function-getsymbol), [Wombat::MamdaTradeListener::getSymbol](classWombat_1_1MamdaTradeListener.html#function-getsymbol)


Get the string symbol for the instrument.


### function getSymbolFieldState

```cpp
virtual MamdaFieldState getSymbolFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSymbolFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsymbolfieldstate), [Wombat::MamdaCurrencyListener::getSymbolFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsymbolfieldstate), [Wombat::MamdaFundamentalListener::getSymbolFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsymbolfieldstate), [Wombat::MamdaOrderImbalanceListener::getSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbolfieldstate), [Wombat::MamdaQuoteListener::getSymbolFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsymbolfieldstate), [Wombat::MamdaSecStatusListener::getSymbolFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsymbolfieldstate), [Wombat::MamdaTradeListener::getSymbolFieldState](classWombat_1_1MamdaTradeListener.html#function-getsymbolfieldstate)


Get the string symbol field state for the instrument.


### function getPartId

```cpp
virtual const char * getPartId() const =0
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getPartId](classWombat_1_1MamdaAuctionListener.html#function-getpartid), [Wombat::MamdaCurrencyListener::getPartId](classWombat_1_1MamdaCurrencyListener.html#function-getpartid), [Wombat::MamdaFundamentalListener::getPartId](classWombat_1_1MamdaFundamentalListener.html#function-getpartid), [Wombat::MamdaOrderImbalanceListener::getPartId](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartid), [Wombat::MamdaQuoteListener::getPartId](classWombat_1_1MamdaQuoteListener.html#function-getpartid), [Wombat::MamdaSecStatusListener::getPartId](classWombat_1_1MamdaSecStatusListener.html#function-getpartid), [Wombat::MamdaTradeListener::getPartId](classWombat_1_1MamdaTradeListener.html#function-getpartid), [Wombat::MamdaOrderImbalanceRecap::getPartId](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpartid)


Get the participant identifier.


### function getPartIdFieldState

```cpp
virtual MamdaFieldState getPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getPartIdFieldState](classWombat_1_1MamdaAuctionListener.html#function-getpartidfieldstate), [Wombat::MamdaCurrencyListener::getPartIdFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getpartidfieldstate), [Wombat::MamdaFundamentalListener::getPartIdFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getpartidfieldstate), [Wombat::MamdaOrderImbalanceListener::getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartidfieldstate), [Wombat::MamdaQuoteListener::getPartIdFieldState](classWombat_1_1MamdaQuoteListener.html#function-getpartidfieldstate), [Wombat::MamdaSecStatusListener::getPartIdFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getpartidfieldstate), [Wombat::MamdaTradeListener::getPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getpartidfieldstate), [Wombat::MamdaOrderImbalanceRecap::getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpartidfieldstate)


Get the participant identifier field state.


### function getSrcTime

```cpp
virtual const MamaDateTime & getSrcTime() const =0
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSrcTime](classWombat_1_1MamdaAuctionListener.html#function-getsrctime), [Wombat::MamdaCurrencyListener::getSrcTime](classWombat_1_1MamdaCurrencyListener.html#function-getsrctime), [Wombat::MamdaFundamentalListener::getSrcTime](classWombat_1_1MamdaFundamentalListener.html#function-getsrctime), [Wombat::MamdaOrderImbalanceListener::getSrcTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctime), [Wombat::MamdaQuoteListener::getSrcTime](classWombat_1_1MamdaQuoteListener.html#function-getsrctime), [Wombat::MamdaSecStatusListener::getSrcTime](classWombat_1_1MamdaSecStatusListener.html#function-getsrctime), [Wombat::MamdaTradeListener::getSrcTime](classWombat_1_1MamdaTradeListener.html#function-getsrctime)


Get the source time of the update.


### function getSrcTimeFieldState

```cpp
virtual MamdaFieldState getSrcTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSrcTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsrctimefieldstate), [Wombat::MamdaCurrencyListener::getSrcTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsrctimefieldstate), [Wombat::MamdaFundamentalListener::getSrcTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsrctimefieldstate), [Wombat::MamdaOrderImbalanceListener::getSrcTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate), [Wombat::MamdaQuoteListener::getSrcTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsrctimefieldstate), [Wombat::MamdaSecStatusListener::getSrcTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsrctimefieldstate), [Wombat::MamdaTradeListener::getSrcTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsrctimefieldstate)


Get the source time field state


### function getActivityTime

```cpp
virtual const MamaDateTime & getActivityTime() const =0
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getActivityTime](classWombat_1_1MamdaAuctionListener.html#function-getactivitytime), [Wombat::MamdaCurrencyListener::getActivityTime](classWombat_1_1MamdaCurrencyListener.html#function-getactivitytime), [Wombat::MamdaFundamentalListener::getActivityTime](classWombat_1_1MamdaFundamentalListener.html#function-getactivitytime), [Wombat::MamdaOrderImbalanceListener::getActivityTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytime), [Wombat::MamdaQuoteListener::getActivityTime](classWombat_1_1MamdaQuoteListener.html#function-getactivitytime), [Wombat::MamdaSecStatusListener::getActivityTime](classWombat_1_1MamdaSecStatusListener.html#function-getactivitytime), [Wombat::MamdaTradeListener::getActivityTime](classWombat_1_1MamdaTradeListener.html#function-getactivitytime)


Get the activity time of the update.


### function getActivityTimeFieldState

```cpp
virtual MamdaFieldState getActivityTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getActivityTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate), [Wombat::MamdaCurrencyListener::getActivityTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getactivitytimefieldstate), [Wombat::MamdaFundamentalListener::getActivityTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getactivitytimefieldstate), [Wombat::MamdaOrderImbalanceListener::getActivityTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate), [Wombat::MamdaQuoteListener::getActivityTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate), [Wombat::MamdaSecStatusListener::getActivityTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getactivitytimefieldstate), [Wombat::MamdaTradeListener::getActivityTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getactivitytimefieldstate)


Get the activity time field state


### function getLineTime

```cpp
virtual const MamaDateTime & getLineTime() const =0
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getLineTime](classWombat_1_1MamdaAuctionListener.html#function-getlinetime), [Wombat::MamdaCurrencyListener::getLineTime](classWombat_1_1MamdaCurrencyListener.html#function-getlinetime), [Wombat::MamdaFundamentalListener::getLineTime](classWombat_1_1MamdaFundamentalListener.html#function-getlinetime), [Wombat::MamdaOrderImbalanceListener::getLineTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetime), [Wombat::MamdaQuoteListener::getLineTime](classWombat_1_1MamdaQuoteListener.html#function-getlinetime), [Wombat::MamdaSecStatusListener::getLineTime](classWombat_1_1MamdaSecStatusListener.html#function-getlinetime), [Wombat::MamdaTradeListener::getLineTime](classWombat_1_1MamdaTradeListener.html#function-getlinetime)


Get the line time of the update.


### function getLineTimeFieldState

```cpp
virtual MamdaFieldState getLineTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getLineTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getlinetimefieldstate), [Wombat::MamdaCurrencyListener::getLineTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getlinetimefieldstate), [Wombat::MamdaFundamentalListener::getLineTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getlinetimefieldstate), [Wombat::MamdaOrderImbalanceListener::getLineTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetimefieldstate), [Wombat::MamdaQuoteListener::getLineTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getlinetimefieldstate), [Wombat::MamdaSecStatusListener::getLineTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getlinetimefieldstate), [Wombat::MamdaTradeListener::getLineTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlinetimefieldstate)


Get the line time field state


### function getSendTime

```cpp
virtual const MamaDateTime & getSendTime() const =0
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSendTime](classWombat_1_1MamdaAuctionListener.html#function-getsendtime), [Wombat::MamdaCurrencyListener::getSendTime](classWombat_1_1MamdaCurrencyListener.html#function-getsendtime), [Wombat::MamdaFundamentalListener::getSendTime](classWombat_1_1MamdaFundamentalListener.html#function-getsendtime), [Wombat::MamdaOrderImbalanceListener::getSendTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtime), [Wombat::MamdaQuoteListener::getSendTime](classWombat_1_1MamdaQuoteListener.html#function-getsendtime), [Wombat::MamdaSecStatusListener::getSendTime](classWombat_1_1MamdaSecStatusListener.html#function-getsendtime), [Wombat::MamdaTradeListener::getSendTime](classWombat_1_1MamdaTradeListener.html#function-getsendtime)


Get the send time of the update.


### function getSendTimeFieldState

```cpp
virtual MamdaFieldState getSendTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getSendTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsendtimefieldstate), [Wombat::MamdaCurrencyListener::getSendTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsendtimefieldstate), [Wombat::MamdaFundamentalListener::getSendTimeFieldState](classWombat_1_1MamdaFundamentalListener.html#function-getsendtimefieldstate), [Wombat::MamdaOrderImbalanceListener::getSendTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtimefieldstate), [Wombat::MamdaQuoteListener::getSendTimeFieldState](classWombat_1_1MamdaQuoteListener.html#function-getsendtimefieldstate), [Wombat::MamdaSecStatusListener::getSendTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsendtimefieldstate), [Wombat::MamdaTradeListener::getSendTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsendtimefieldstate)


Get the send time field state


### function ~MamdaBasicRecap

```cpp
inline virtual ~MamdaBasicRecap()
```


Destructor. 


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100