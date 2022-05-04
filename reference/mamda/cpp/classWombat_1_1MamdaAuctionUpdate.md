---
title: Wombat::MamdaAuctionUpdate
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionUpdate



 [More...](#detailed-description)


`#include <MamdaAuctionUpdate.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getUncrossPrice](classWombat_1_1MamdaAuctionUpdate.html#function-getuncrossprice)**() const =0 |
| virtual mama_quantity_t | **[getUncrossVolume](classWombat_1_1MamdaAuctionUpdate.html#function-getuncrossvolume)**() const =0 |
| virtual [MamdaUncrossPriceInd](namespaceWombat.html#enum-mamdauncrosspriceind) | **[getUncrossPriceInd](classWombat_1_1MamdaAuctionUpdate.html#function-getuncrosspriceind)**() const =0 |
| virtual const MamaDateTime & | **[getAuctionTime](classWombat_1_1MamdaAuctionUpdate.html#function-getauctiontime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceFieldState](classWombat_1_1MamdaAuctionUpdate.html#function-getuncrosspricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossVolumeFieldState](classWombat_1_1MamdaAuctionUpdate.html#function-getuncrossvolumefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceIndFieldState](classWombat_1_1MamdaAuctionUpdate.html#function-getuncrosspriceindfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAuctionTimeFieldState](classWombat_1_1MamdaAuctionUpdate.html#function-getauctiontimefieldstate)**() const =0 |
| virtual | **[~MamdaAuctionUpdate](classWombat_1_1MamdaAuctionUpdate.html#function-~mamdaauctionupdate)**() |

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
class Wombat::MamdaAuctionUpdate;
```


[MamdaAuctionUpdate](classWombat_1_1MamdaAuctionUpdate.html) is an interface that provides access to the currency related fields. 

## Public Functions Documentation

### function getUncrossPrice

```cpp
virtual const MamaPrice & getUncrossPrice() const =0
```


**Return**: uncross price. The indicative or firm auction price . 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPrice](classWombat_1_1MamdaAuctionListener.html#function-getuncrossprice)


Get the uncross price.


### function getUncrossVolume

```cpp
virtual mama_quantity_t getUncrossVolume() const =0
```


**Return**: Ask price. The indicative volume, or the volume turned over in the auction 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossVolume](classWombat_1_1MamdaAuctionListener.html#function-getuncrossvolume)


Get the uncross volume.


### function getUncrossPriceInd

```cpp
virtual MamdaUncrossPriceInd getUncrossPriceInd() const =0
```


**Return**: uncross price Ind. Indicates whether the Price and Volume is an indicative of the current state of the auction or whether its the (firm) auction price and volume 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPriceInd](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceind)


Get the uncross price Ind.


### function getAuctionTime

```cpp
virtual const MamaDateTime & getAuctionTime() const =0
```


**Return**: auction time. The indicative or firm auction time . 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getAuctionTime](classWombat_1_1MamdaAuctionListener.html#function-getauctiontime)


Get the auction time.


### function getUncrossPriceFieldState

```cpp
virtual MamdaFieldState getUncrossPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPriceFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspricefieldstate)


Get the uncross price fieldState


### function getUncrossVolumeFieldState

```cpp
virtual MamdaFieldState getUncrossVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossVolumeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrossvolumefieldstate)


Get the uncross vol fieldState


### function getUncrossPriceIndFieldState

```cpp
virtual MamdaFieldState getUncrossPriceIndFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPriceIndFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceindfieldstate)


Get the uncross price ind fieldState


### function getAuctionTimeFieldState

```cpp
virtual MamdaFieldState getAuctionTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getAuctionTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getauctiontimefieldstate)


Get the auction time fieldState


### function ~MamdaAuctionUpdate

```cpp
inline virtual ~MamdaAuctionUpdate()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100