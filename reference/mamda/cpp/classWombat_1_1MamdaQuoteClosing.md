---
title: Wombat::MamdaQuoteClosing
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteClosing



 [More...](#detailed-description)


`#include <MamdaQuoteClosing.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getBidClosePrice](classWombat_1_1MamdaQuoteClosing.html#function-getbidcloseprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidClosePriceFieldState](classWombat_1_1MamdaQuoteClosing.html#function-getbidclosepricefieldstate)**() const =0 |
| virtual const MamaPrice & | **[getAskClosePrice](classWombat_1_1MamdaQuoteClosing.html#function-getaskcloseprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskClosePriceFieldState](classWombat_1_1MamdaQuoteClosing.html#function-getaskclosepricefieldstate)**() const =0 |
| virtual | **[~MamdaQuoteClosing](classWombat_1_1MamdaQuoteClosing.html#function-~mamdaquoteclosing)**() |

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
class Wombat::MamdaQuoteClosing;
```


[MamdaQuoteClosing](classWombat_1_1MamdaQuoteClosing.html) is an interface that provides access to quote closing related fields. 

## Public Functions Documentation

### function getBidClosePrice

```cpp
virtual const MamaPrice & getBidClosePrice() const =0
```


**Return**: Today's closing bid price, after the market has closed and the stock has traded today. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getbidcloseprice)


Get the closing bid price.


### function getBidClosePriceFieldState

```cpp
virtual MamdaFieldState getBidClosePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBidClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbidclosepricefieldstate)


Get the closing bid price field state


### function getAskClosePrice

```cpp
virtual const MamaPrice & getAskClosePrice() const =0
```


**Return**: Today's closing ask price, after the market has closed and the stock has traded today. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskClosePrice](classWombat_1_1MamdaQuoteListener.html#function-getaskcloseprice)


Get the closing ask price.


### function getAskClosePriceFieldState

```cpp
virtual MamdaFieldState getAskClosePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getAskClosePriceFieldState](classWombat_1_1MamdaQuoteListener.html#function-getaskclosepricefieldstate)


Get the closing bid price field state


### function ~MamdaQuoteClosing

```cpp
inline virtual ~MamdaQuoteClosing()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100