---
title: com::wombat::mamda::MamdaBasicRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaBasicRecap



 [More...](#detailed-description)

Inherited by [com.wombat.mamda.MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html), [com.wombat.mamda.MamdaAuctionRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html), [com.wombat.mamda.MamdaFundamentals](interfacecom_1_1wombat_1_1mamda_1_1MamdaFundamentals.html), [com.wombat.mamda.MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html), [com.wombat.mamda.MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html), [com.wombat.mamda.MamdaQuoteRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteRecap.html), [com.wombat.mamda.MamdaSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html), [com.wombat.mamda.MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html), [com.wombat.mamda.orderbook.MamdaBookAtomicLevel](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevel.html), [com.wombat.mamda.orderbook.MamdaBookAtomicLevelEntry](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicLevelEntry.html), [com.wombat.mamda.orderbook.MamdaOrderBookRecap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| String | **[getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)**() |
| short | **[getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**() |
| String | **[getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)**() |
| short | **[getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**() |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**() |
| MamaDateTime | **[getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)**() |
| short | **[getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**() |
| MamaDateTime | **[getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)**() |
| short | **[getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**() |

## Detailed Description

```java
class com::wombat::mamda::MamdaBasicRecap;
```


[MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html) is an interface that provides access to common recap-related fields. 

## Public Functions Documentation

### function getSymbol

```java
String getSymbol()
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getsymbol), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsymbol), [com::wombat::mamda::MamdaFundamentalListener::getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsymbol), [com::wombat::mamda::MamdaAuctionListener::getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsymbol), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsymbol), [com::wombat::mamda::MamdaSecurityStatusListener::getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsymbol), [com::wombat::mamda::MamdaQuoteListener::getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsymbol), [com::wombat::mamda::MamdaOrderImbalanceListener::getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsymbol), [com::wombat::mamda::MamdaTradeListener::getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsymbol)


Get the string symbol for the instrument.


### function getSymbolFieldState

```java
short getSymbolFieldState()
```


**Return**: symbol Field State 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getsymbolfieldstate), [com::wombat::mamda::MamdaFundamentalListener::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsymbolfieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsymbolfieldstate), [com::wombat::mamda::MamdaAuctionListener::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsymbolfieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsymbolfieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsymbolfieldstate), [com::wombat::mamda::MamdaQuoteListener::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsymbolfieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsymbolfieldstate), [com::wombat::mamda::MamdaTradeListener::getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsymbolfieldstate)


### function getPartId

```java
String getPartId()
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getpartid), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpartid), [com::wombat::mamda::MamdaFundamentalListener::getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getpartid), [com::wombat::mamda::MamdaAuctionListener::getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getpartid), [com::wombat::mamda::MamdaOrderImbalanceRecap::getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getpartid), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getpartid), [com::wombat::mamda::MamdaSecurityStatusListener::getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getpartid), [com::wombat::mamda::MamdaQuoteListener::getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getpartid), [com::wombat::mamda::MamdaOrderImbalanceListener::getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getpartid), [com::wombat::mamda::MamdaTradeListener::getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getpartid)


Get the participant identifier.


### function getPartIdFieldState

```java
short getPartIdFieldState()
```


**Return**: participant ID Field State 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getpartidfieldstate), [com::wombat::mamda::MamdaOrderImbalanceRecap::getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getpartidfieldstate), [com::wombat::mamda::MamdaFundamentalListener::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getpartidfieldstate), [com::wombat::mamda::MamdaAuctionListener::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getpartidfieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getpartidfieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getpartidfieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getpartidfieldstate), [com::wombat::mamda::MamdaQuoteListener::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getpartidfieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getpartidfieldstate), [com::wombat::mamda::MamdaTradeListener::getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getpartidfieldstate)


### function getSrcTime

```java
MamaDateTime getSrcTime()
```


**Reimplemented by**: [com::wombat::mamda::MamdaFundamentalListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsrctime), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsrctime), [com::wombat::mamda::MamdaAuctionListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsrctime), [com::wombat::mamda::MamdaSecurityStatusListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsrctime), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsrctime), [com::wombat::mamda::MamdaOrderImbalanceListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsrctime), [com::wombat::mamda::MamdaQuoteListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsrctime), [com::wombat::mamda::MamdaTradeListener::getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsrctime)


Source time. Typically, the exchange generated feed 


### function getSrcTimeFieldState

```java
short getSrcTimeFieldState()
```


**Return**: source time Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaFundamentalListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsrctimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsrctimefieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaQuoteListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsrctimefieldstate), [com::wombat::mamda::MamdaTradeListener::getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsrctimefieldstate)


### function getActivityTime

```java
MamaDateTime getActivityTime()
```


**Reimplemented by**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getactivitytime), [com::wombat::mamda::MamdaFundamentalListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getactivitytime), [com::wombat::mamda::MamdaAuctionListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getactivitytime), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getactivitytime), [com::wombat::mamda::MamdaSecurityStatusListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getactivitytime), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getactivitytime), [com::wombat::mamda::MamdaOrderImbalanceListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getactivitytime), [com::wombat::mamda::MamdaQuoteListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getactivitytime), [com::wombat::mamda::MamdaTradeListener::getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getactivitytime)


Activity time. A feed handler generated time stamp representing when the data item was last updated. 


### function getActivityTimeFieldState

```java
short getActivityTimeFieldState()
```


**Return**: activity time Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaAuctionListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaFundamentalListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaQuoteListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getactivitytimefieldstate), [com::wombat::mamda::MamdaTradeListener::getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getactivitytimefieldstate)


### function getLineTime

```java
MamaDateTime getLineTime()
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getLineTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getlinetime), [com::wombat::mamda::MamdaFundamentalListener::getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getlinetime), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getLineTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getlinetime), [com::wombat::mamda::MamdaAuctionListener::getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getlinetime), [com::wombat::mamda::MamdaSecurityStatusListener::getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getlinetime), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getLineTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getlinetime), [com::wombat::mamda::MamdaQuoteListener::getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getlinetime), [com::wombat::mamda::MamdaOrderImbalanceListener::getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getlinetime), [com::wombat::mamda::MamdaTradeListener::getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlinetime)


Get the line time of the update.


### function getLineTimeFieldState

```java
short getLineTimeFieldState()
```


**Return**: line time Field State 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getlinetimefieldstate), [com::wombat::mamda::MamdaAuctionListener::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getlinetimefieldstate), [com::wombat::mamda::MamdaFundamentalListener::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getlinetimefieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getlinetimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getlinetimefieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getlinetimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getlinetimefieldstate), [com::wombat::mamda::MamdaQuoteListener::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getlinetimefieldstate), [com::wombat::mamda::MamdaTradeListener::getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlinetimefieldstate)


### function getSendTime

```java
MamaDateTime getSendTime()
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getSendTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getsendtime), [com::wombat::mamda::MamdaFundamentalListener::getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsendtime), [com::wombat::mamda::MamdaAuctionListener::getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsendtime), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getSendTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsendtime), [com::wombat::mamda::MamdaSecurityStatusListener::getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsendtime), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getSendTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsendtime), [com::wombat::mamda::MamdaOrderImbalanceListener::getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsendtime), [com::wombat::mamda::MamdaQuoteListener::getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsendtime), [com::wombat::mamda::MamdaTradeListener::getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsendtime)


Get the send time of the update.


### function getSendTimeFieldState

```java
short getSendTimeFieldState()
```


**Return**: send time Field State 

**Reimplemented by**: [com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getsendtimefieldstate), [com::wombat::mamda::MamdaAuctionListener::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsendtimefieldstate), [com::wombat::mamda::MamdaFundamentalListener::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFundamentalListener.html#function-getsendtimefieldstate), [com::wombat::mamda::MamdaSecurityStatusListener::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsendtimefieldstate), [com::wombat::mamda::orderbook::MamdaOrderBookListener::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html#function-getsendtimefieldstate), [com::wombat::mamda::orderbook::MamdaBookAtomicListener::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaBookAtomicListener.html#function-getsendtimefieldstate), [com::wombat::mamda::MamdaOrderImbalanceListener::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsendtimefieldstate), [com::wombat::mamda::MamdaQuoteListener::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getsendtimefieldstate), [com::wombat::mamda::MamdaTradeListener::getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsendtimefieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100