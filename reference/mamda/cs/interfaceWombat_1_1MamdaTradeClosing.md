---
title: Wombat::MamdaTradeClosing
summary: MamdaTradeClosing is an interface that provides access to fields related to trade closing reports. There is no need to provide access to total volume, open/high/low, etc., since these fields are also available in the recap interface passed along with closing messages. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeClosing



[MamdaTradeClosing]() is an interface that provides access to fields related to trade closing reports. There is no need to provide access to total volume, open/high/low, etc., since these fields are also available in the recap interface passed along with closing messages. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getClosePrice](interfaceWombat_1_1MamdaTradeClosing.html#function-getcloseprice)**()<br>Return the Close price Today's closing price. The close price is populated when official closing prices are sent by the feed after the session close.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getClosePriceFieldState](interfaceWombat_1_1MamdaTradeClosing.html#function-getclosepricefieldstate)**()<br>Get the field state  |
| bool | **[getIsIndicative](interfaceWombat_1_1MamdaTradeClosing.html#function-getisindicative)**()<br>Return whether this closing price is indicative or official.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIndicativeFieldState](interfaceWombat_1_1MamdaTradeClosing.html#function-getisindicativefieldstate)**()<br>Get the field state  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)**()<br>Returns the source time.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| long | **[getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |


## Public Functions Documentation

### function getClosePrice

```csharp
MamaPrice getClosePrice()
```

Return the Close price Today's closing price. The close price is populated when official closing prices are sent by the feed after the session close. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getClosePrice](classWombat_1_1MamdaTradeListener.html#function-getcloseprice)


### function getClosePriceFieldState

```csharp
MamdaFieldState getClosePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getclosepricefieldstate)


### function getIsIndicative

```csharp
bool getIsIndicative()
```

Return whether this closing price is indicative or official. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIndicative](classWombat_1_1MamdaTradeListener.html#function-getisindicative)


### function getIsIndicativeFieldState

```csharp
MamdaFieldState getIsIndicativeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIndicativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getisindicativefieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:14 +0100