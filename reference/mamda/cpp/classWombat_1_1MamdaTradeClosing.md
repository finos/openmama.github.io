---
title: Wombat::MamdaTradeClosing
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeClosing



 [More...](#detailed-description)


`#include <MamdaTradeClosing.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getClosePrice](classWombat_1_1MamdaTradeClosing.html#function-getcloseprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getClosePriceFieldState](classWombat_1_1MamdaTradeClosing.html#function-getclosepricefieldstate)**() const =0 |
| virtual bool | **[getIsIndicative](classWombat_1_1MamdaTradeClosing.html#function-getisindicative)**() const =0 |
| virtual | **[~MamdaTradeClosing](classWombat_1_1MamdaTradeClosing.html#function-~mamdatradeclosing)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaBasicEvent.html#function-getsymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsymbolfieldstate)**() const =0 |
| virtual const char * | **[getPartId](classWombat_1_1MamdaBasicEvent.html#function-getpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaBasicEvent.html#function-getpartidfieldstate)**() const =0 |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaBasicEvent.html#function-getsrctime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaBasicEvent.html#function-getlinetime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getlinetimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaBasicEvent.html#function-getsendtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsendtimefieldstate)**() const =0 |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)**() const =0 |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |


## Detailed Description

```cpp
class Wombat::MamdaTradeClosing;
```


[MamdaTradeClosing](classWombat_1_1MamdaTradeClosing.html) is an interface that provides access to trade closing related fields. 

## Public Functions Documentation

### function getClosePrice

```cpp
virtual const MamaPrice & getClosePrice() const =0
```


**Return**: The trade closing price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getClosePrice](classWombat_1_1MamdaTradeListener.html#function-getcloseprice)


Return the Close price Today's closing price. The close price is populated when official closing prices are sent by the feed after the session close.


### function getClosePriceFieldState

```cpp
virtual MamdaFieldState getClosePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getclosepricefieldstate)


Get the field state


### function getIsIndicative

```cpp
virtual bool getIsIndicative() const =0
```


**Return**: Whether the closing price is indicative or otherwise. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIndicative](classWombat_1_1MamdaTradeListener.html#function-getisindicative)


Return whether this closing price is indicative or official.


### function ~MamdaTradeClosing

```cpp
inline virtual ~MamdaTradeClosing()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100