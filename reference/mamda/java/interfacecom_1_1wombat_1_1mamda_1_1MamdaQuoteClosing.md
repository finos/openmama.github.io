---
title: com::wombat::mamda::MamdaQuoteClosing
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaQuoteClosing



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getBidPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidprice)**() |
| short | **[getBidPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidpricefieldstate)**() |
| double | **[getBidSize](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidsize)**() |
| short | **[getBidSizeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidsizefieldstate)**() |
| String | **[getBidPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidpartid)**() |
| short | **[getBidPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getbidpartidfieldstate)**() |
| MamaPrice | **[getAskPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getaskprice)**() |
| short | **[getAskPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getaskpricefieldstate)**() |
| double | **[getAskSize](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getasksize)**() |
| short | **[getAskSizeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getasksizefieldstate)**() |
| String | **[getAskPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getaskpartid)**() |
| short | **[getAskPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html#function-getaskpartidfieldstate)**() |

## Additional inherited members

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


## Detailed Description

```java
class com::wombat::mamda::MamdaQuoteClosing;
```


[MamdaQuoteClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteClosing.html) is an interface that provides access to quote closing related fields. 

## Public Functions Documentation

### function getBidPrice

```java
MamaPrice getBidPrice()
```


**Return**: Today's closing bid price, after the market has closed and the stock has traded today. 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getBidPrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidprice)


Get the closing bid price. 


### function getBidPriceFieldState

```java
short getBidPriceFieldState()
```


**Return**: the bid price Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getBidPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidpricefieldstate)


### function getBidSize

```java
double getBidSize()
```


**Return**: Today's closing bid size, after the market has closed and the stock has traded today. 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getBidSize](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidsize)


Get the closing bid size. 


### function getBidSizeFieldState

```java
short getBidSizeFieldState()
```


**Return**: the bid size Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getBidSizeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidsizefieldstate)


### function getBidPartId

```java
String getBidPartId()
```


**Return**: Today's closing bid participant identifier, after the market has closed and the stock has traded today. 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getBidPartId](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidpartid)


Get the closing bid participant identifier. 


### function getBidPartIdFieldState

```java
short getBidPartIdFieldState()
```


**Return**: the bid part ID Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getBidPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbidpartidfieldstate)


### function getAskPrice

```java
MamaPrice getAskPrice()
```


**Return**: Today's closing ask price, after the market has closed and the stock has traded today. 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getAskPrice](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskprice)


Get the closing ask price. 


### function getAskPriceFieldState

```java
short getAskPriceFieldState()
```


**Return**: the ask price Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getAskPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskpricefieldstate)


### function getAskSize

```java
double getAskSize()
```


**Return**: Today's closing ask size, after the market has closed and the stock has traded today. 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getAskSize](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasksize)


Get the closing ask size. 


### function getAskSizeFieldState

```java
short getAskSizeFieldState()
```


**Return**: the ask size Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getAskSizeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getasksizefieldstate)


### function getAskPartId

```java
String getAskPartId()
```


**Return**: Today's closing ask participant identifier, after the market has closed and the stock has traded today. 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getAskPartId](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskpartid)


Get the closing ask participant identifier. 


### function getAskPartIdFieldState

```java
short getAskPartIdFieldState()
```


**Return**: the ask part ID Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getAskPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getaskpartidfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100