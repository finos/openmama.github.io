---
title: com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaConcreteBasicEvent](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html), [com.wombat.mamda.orderbook.MamdaOrderBookRecap](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookRecap.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) | **[getOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getorderbook)**() |
| void | **[setBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-setbook)**([MamdaOrderBook](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBook.html) book) |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getsendtime)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getsendtimefieldstate)**() |
| void | **[setSendTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-setsendtime)**(MamaDateTime sendTime) |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getlinetime)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getlinetimefieldstate)**() |
| void | **[setLineTime](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-setlinetime)**(MamaDateTime lineTime) |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getpartid)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getpartidfieldstate)**() |
| void | **[setPartId](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-setpartid)**(String partId) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getsymbol)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-getsymbolfieldstate)**() |
| void | **[setSymbol](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html#function-setsymbol)**(String symbol) |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.MamdaConcreteBasicEvent](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getsrctimefieldstate)**() |
| void | **[setSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-setsrctime)**(MamaDateTime srcTime) |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getactivitytimefieldstate)**() |
| void | **[setActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-setactivitytime)**(MamaDateTime activityTime) |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventtimefieldstate)**() |
| void | **[setEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-seteventtime)**(MamaDateTime eventTime) |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventseqnumfieldstate)**() |
| void | **[setEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-seteventseqnum)**(long eventSeqNum) |

**Public Functions inherited from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)**

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

**Public Functions inherited from [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**() |


## Detailed Description

```java
class com::wombat::mamda::orderbook::MamdaOrderBookConcreteRecap;
```


[MamdaOrderBookConcreteRecap](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html) is a class that saves information about a full order book image. 

## Public Functions Documentation

### function getOrderBook

```java
inline MamdaOrderBook getOrderBook()
```


**Reimplements**: [com::wombat::mamda::orderbook::MamdaOrderBookRecap::getOrderBook](interfacecom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookRecap.html#function-getorderbook)


Returns a reference to the full orderbook if a full book is being maintained by the [MamdaOrderBookListener](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookListener.html). 


### function setBook

```java
inline void setBook(
    MamdaOrderBook book
)
```


### function getSendTime

```java
inline MamaDateTime getSendTime()
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)


Get the send time of the update.


### function getSendTimeFieldState

```java
inline short getSendTimeFieldState()
```


**Return**: send time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


### function setSendTime

```java
inline void setSendTime(
    MamaDateTime sendTime
)
```


### function getLineTime

```java
inline MamaDateTime getLineTime()
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)


Get the line time of the update.


### function getLineTimeFieldState

```java
inline short getLineTimeFieldState()
```


**Return**: line time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


### function setLineTime

```java
inline void setLineTime(
    MamaDateTime lineTime
)
```


### function getPartId

```java
inline String getPartId()
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)


Get the participant identifier.


### function getPartIdFieldState

```java
inline short getPartIdFieldState()
```


**Return**: participant ID Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


### function setPartId

```java
inline void setPartId(
    String partId
)
```


### function getSymbol

```java
inline String getSymbol()
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)


Get the string symbol for the instrument.


### function getSymbolFieldState

```java
inline short getSymbolFieldState()
```


**Return**: symbol Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


### function setSymbol

```java
inline void setSymbol(
    String symbol
)
```


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100