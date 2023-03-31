---
title: com::wombat::mamda::MamdaAuctionRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaAuctionRecap



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)

Inherited by [com.wombat.mamda.MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getUncrossPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrossprice)**() |
| MamaDouble | **[getUncrossVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrossvolume)**() |
| short | **[getUncrossPriceInd](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrosspriceind)**() |
| short | **[getUncrossPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrosspricefieldstate)**() |
| short | **[getUncrossVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrossvolumefieldstate)**() |
| short | **[getUncrossPriceIndFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrosspriceindfieldstate)**() |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| String | **[getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)**() |
| short | **[getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**() |
| String | **[getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)**() |
| short | **[getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**() |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**() |
| MamaDateTime | **[getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)**() |
| short | **[getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**() |
| MamaDateTime | **[getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)**() |
| short | **[getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**() |


## Detailed Description

```java
class com::wombat::mamda::MamdaAuctionRecap;
```


[MamdaAuctionUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionUpdate.html) is an interface that provides access to fields related to aucion updates. 

## Public Functions Documentation

### function getUncrossPrice

```java
MamaPrice getUncrossPrice()
```


**Return**: uncross price. The indicative or firm auction price . 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getUncrossPrice](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrossprice)


Get the uncross price.


### function getUncrossVolume

```java
MamaDouble getUncrossVolume()
```


**Return**: uncross vol. The indicative volume, or the volume turned over in the auction 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getUncrossVolume](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrossvolume)


Get the uncross vol.


### function getUncrossPriceInd

```java
short getUncrossPriceInd()
```


**Return**: uncross price Ind. Indicates whether the Price and Volume is an indicative of the current state of the auction or whether its the (firm) auction price and volume 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getUncrossPriceInd](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrosspriceind)


Get the uncross price Ind.


### function getUncrossPriceFieldState

```java
short getUncrossPriceFieldState()
```


**Return**: short. An enumeration representing field state. 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getUncrossPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrosspricefieldstate)


Get the uncross price fieldState


### function getUncrossVolumeFieldState

```java
short getUncrossVolumeFieldState()
```


**Return**: short. An enumeration representing field state. 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getUncrossVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrossvolumefieldstate)


Get the uncross vol fieldState


### function getUncrossPriceIndFieldState

```java
short getUncrossPriceIndFieldState()
```


**Return**: short. An enumeration representing field state. 

**Reimplemented by**: [com::wombat::mamda::MamdaAuctionListener::getUncrossPriceIndFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrosspriceindfieldstate)


Get the uncross price ind fieldState


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100