---
title: Wombat::MamdaCurrencyUpdate
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaCurrencyUpdate



 [More...](#detailed-description)


`#include <MamdaCurrencyUpdate.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaCurrencyListener](classWombat_1_1MamdaCurrencyListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getBidPrice](classWombat_1_1MamdaCurrencyUpdate.html#function-getbidprice)**() const =0 |
| virtual const MamaPrice & | **[getAskPrice](classWombat_1_1MamdaCurrencyUpdate.html#function-getaskprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](classWombat_1_1MamdaCurrencyUpdate.html#function-getbidpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](classWombat_1_1MamdaCurrencyUpdate.html#function-getaskpricefieldstate)**() const =0 |
| virtual | **[~MamdaCurrencyUpdate](classWombat_1_1MamdaCurrencyUpdate.html#function-~mamdacurrencyupdate)**() |

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
class Wombat::MamdaCurrencyUpdate;
```


[MamdaCurrencyUpdate](classWombat_1_1MamdaCurrencyUpdate.html) is an interface that provides access to the currency related fields. 

## Public Functions Documentation

### function getBidPrice

```cpp
virtual const MamaPrice & getBidPrice() const =0
```


**Return**: Bid price. The highest price that the representative party/group is willing to pay to buy the security. 

**Reimplemented by**: [Wombat::MamdaCurrencyListener::getBidPrice](classWombat_1_1MamdaCurrencyListener.html#function-getbidprice)


Get the currency bid price.


### function getAskPrice

```cpp
virtual const MamaPrice & getAskPrice() const =0
```


**Return**: Ask price. The lowest price that the representative party/group is willing to take to sell the security. 

**Reimplemented by**: [Wombat::MamdaCurrencyListener::getAskPrice](classWombat_1_1MamdaCurrencyListener.html#function-getaskprice)


Get the currency ask price.


### function getBidPriceFieldState

```cpp
virtual MamdaFieldState getBidPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaCurrencyListener::getBidPriceFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getbidpricefieldstate)


Get the quote ask price fieldState


### function getAskPriceFieldState

```cpp
virtual MamdaFieldState getAskPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaCurrencyListener::getAskPriceFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getaskpricefieldstate)


Get the quote ask price fieldState


### function ~MamdaCurrencyUpdate

```cpp
inline virtual ~MamdaCurrencyUpdate()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100