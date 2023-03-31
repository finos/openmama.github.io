---
title: Wombat::MamdaAuctionRecap
summary: MamdaAuctionRecap is an interface that provides access to Auction related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionRecap



[MamdaAuctionRecap]() is an interface that provides access to Auction related fields. 

Inherits from [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat.MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getUncrossPrice](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrossprice)**()<br>Get the uncross price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceFieldState](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrosspricefieldstate)**()<br>Get the field state  |
| double | **[getUncrossVolume](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrossvolume)**()<br>Get the uncross Volume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossVolumeFieldState](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrossvolumefieldstate)**()<br>Get the field state  |
| long | **[getUncrossPriceInd](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrosspriceind)**()<br>Get the uncross price indicator.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceIndFieldState](interfaceWombat_1_1MamdaAuctionRecap.html#function-getuncrosspriceindfieldstate)**()<br>Get the field state  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| string | **[getSymbol](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbol)**()<br>Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**()<br>Returns the field state.  |
| string | **[getPartId](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartid)**()<br>Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctime)**()<br>Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytime)**()<br>Activity time. A feed handler generated time stamp representing when the data item was last updated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getLineTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetime)**()<br>Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getSendTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtime)**()<br>Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**()<br>Returns the field state.  |


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

**Return**: Field state

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

**Return**: Field state

**Reimplemented by**: [Wombat::MamdaAuctionListener::getUncrossPriceIndFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceindfieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100