---
title: com::wombat::mamda::MamdaTradeClosing
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaTradeClosing



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getClosePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getcloseprice)**() |
| short | **[getClosePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getclosepricefieldstate)**() |
| boolean | **[getIsIndicative](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getisindicative)**() |
| short | **[getIsIndicativeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getisindicativefieldstate)**() |

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
class com::wombat::mamda::MamdaTradeClosing;
```


[MamdaTradeClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html) is an interface that provides access to fields related to trade closing reports. There is no need to provide access to total volume, open/high/low, etc., since these fields are also available in the recap interface passed along with closing messages. 

## Public Functions Documentation

### function getClosePrice

```java
MamaPrice getClosePrice()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getClosePrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcloseprice)


Return the Close price Today's closing price. The close price is populated when official closing prices are sent by the feed after the session close. 


### function getClosePriceFieldState

```java
short getClosePriceFieldState()
```


**Return**: Returns the ClosePrice Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getClosePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getclosepricefieldstate)


### function getIsIndicative

```java
boolean getIsIndicative()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getIsIndicative](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getisindicative)


Return whether this closing price is indicative or official. 


### function getIsIndicativeFieldState

```java
short getIsIndicativeFieldState()
```


**Return**: Returns the IsIndicative Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getIsIndicativeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getisindicativefieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:35 +0100