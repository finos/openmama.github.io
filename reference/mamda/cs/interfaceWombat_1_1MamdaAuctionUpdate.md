---
title: Wombat::MamdaAuctionUpdate
summary: MamdaAuctionUpdate is an interface that provides access to fields related to quote updates. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionUpdate



[MamdaAuctionUpdate]() is an interface that provides access to fields related to quote updates. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getUncrossPrice](interfaceWombat_1_1MamdaAuctionUpdate.html#function-getuncrossprice)**()<br>Get the uncross price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceFieldState](interfaceWombat_1_1MamdaAuctionUpdate.html#function-getuncrosspricefieldstate)**()<br>Get the field state  |
| double | **[getUncrossVolume](interfaceWombat_1_1MamdaAuctionUpdate.html#function-getuncrossvolume)**()<br>Get the uncross Volume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossVolumeFieldState](interfaceWombat_1_1MamdaAuctionUpdate.html#function-getuncrossvolumefieldstate)**()<br>Get the field state  |
| long | **[getUncrossPriceInd](interfaceWombat_1_1MamdaAuctionUpdate.html#function-getuncrosspriceind)**()<br>Get the uncross price indicator.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceIndFieldState](interfaceWombat_1_1MamdaAuctionUpdate.html#function-getuncrosspriceindfieldstate)**()<br>Get the field state  |

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

### function getUncrossPrice

```csharp
MamaPrice getUncrossPrice()
```

Get the uncross price. 

**Return**: Indicative or firm auction price. 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPrice](classWombat_1_1MamdaAuctionListener.html#function-getuncrossprice)


### function getUncrossPriceFieldState

```csharp
MamdaFieldState getUncrossPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPriceFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspricefieldstate)


### function getUncrossVolume

```csharp
double getUncrossVolume()
```

Get the uncross Volume. 

**Return**: Indicative Volume or the volume turned over in the auction

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossVolume](classWombat_1_1MamdaAuctionListener.html#function-getuncrossvolume)


### function getUncrossVolumeFieldState

```csharp
MamdaFieldState getUncrossVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossVolumeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrossvolumefieldstate)


### function getUncrossPriceInd

```csharp
long getUncrossPriceInd()
```

Get the uncross price indicator. 

**Return**: The uncross price ind - indicates whether the price and volume is indicative of the current state of the auction or whether its the firm auction price and volume 

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPriceInd](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceind)


### function getUncrossPriceIndFieldState

```csharp
MamdaFieldState getUncrossPriceIndFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPriceIndFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceindfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:10 +0100