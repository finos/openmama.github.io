---
title: Wombat::MamdaOrderImbalanceRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceRecap





Inherits from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat::MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaDateTime & | **[getAuctionTime](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getauctiontime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAuctionTimeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getauctiontimefieldstate)**() const =0 |
| virtual int64_t | **[getBuyVolume](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolume)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBuyVolumeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolumefieldstate)**() const =0 |
| virtual char | **[getCrossType](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getcrosstype)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCrossTypeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getcrosstypefieldstate)**() const =0 |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventseqnumfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventtimefieldstate)**() const =0 |
| virtual const MamaPrice & | **[getFarClearingPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getFarClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingpricefieldstate)**() const =0 |
| virtual const MamaPrice & | **[getHighIndicationPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationpricefieldstate)**() const =0 |
| virtual const MamaPrice & | **[getImbalancePrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalanceprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getImbalancePriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancepricefieldstate)**() const =0 |
| virtual const MamaPrice & | **[getMatchPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMatchPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchpricefieldstate)**() const =0 |
| virtual const char * | **[getIssueSymbol](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIssueSymbolFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbolfieldstate)**() const =0 |
| virtual const MamaPrice & | **[getLowIndicationPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationpricefieldstate)**() const =0 |
| virtual int64_t | **[getMatchVolume](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolume)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMatchVolumeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolumefieldstate)**() const =0 |
| virtual int32_t | **[getMsgType](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmsgtype)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgTypeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmsgtypefieldstate)**() const =0 |
| virtual const MamaPrice & | **[getNearClearingPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNearClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingpricefieldstate)**() const =0 |
| virtual char | **[getNoClearingPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNoClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingpricefieldstate)**() const =0 |
| virtual const char * | **[getPartId](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpartidfieldstate)**() const =0 |
| virtual char | **[getPriceVarInd](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpricevarind)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPriceVarIndFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpricevarindfieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatusOrig](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorig)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusOrigFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorigfieldstate)**() const =0 |
| virtual const char * | **[getImbalanceState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getImbalanceStateFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestatefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSecurityStatusTime](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusTimeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustimefieldstate)**() const =0 |
| virtual int64_t | **[getSellVolume](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsellvolume)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSellVolumeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsellvolumefieldstate)**() const =0 |
| virtual mama_seqnum_t | **[getSeqNum](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getseqnumfieldstate)**() const =0 |
| virtual | **[~MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html#function-~mamdaorderimbalancerecap)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaBasicRecap.html#function-getsymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaBasicRecap.html#function-getsrctime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaBasicRecap.html#function-getactivitytime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaBasicRecap.html#function-getlinetime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaBasicRecap.html#function-getsendtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**() const =0 |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |


## Public Functions Documentation

### function getAuctionTime

```cpp
virtual const MamaDateTime & getAuctionTime() const =0
```


**Return**: Returns the Auction Time. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getAuctionTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getauctiontime)


### function getAuctionTimeFieldState

```cpp
virtual MamdaFieldState getAuctionTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getAuctionTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getauctiontimefieldstate)


Get the myAuctionTime field state


### function getBuyVolume

```cpp
virtual int64_t getBuyVolume() const =0
```


**Return**: Returns the myBuyVolume. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getBuyVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getbuyvolume)


### function getBuyVolumeFieldState

```cpp
virtual MamdaFieldState getBuyVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getBuyVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getbuyvolumefieldstate)


Get the myBuyVolume field state


### function getCrossType

```cpp
virtual char getCrossType() const =0
```


**Return**: Returns the myCrossType. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getCrossType](classWombat_1_1MamdaOrderImbalanceListener.html#function-getcrosstype)


### function getCrossTypeFieldState

```cpp
virtual MamdaFieldState getCrossTypeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getCrossTypeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getcrosstypefieldstate)


Get the myCrossType field state


### function getEventSeqNum

```cpp
virtual mama_seqnum_t getEventSeqNum() const =0
```


**Return**: Returns the myEventSeqNum. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getEventSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnum)


### function getEventSeqNumFieldState

```cpp
virtual MamdaFieldState getEventSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnumfieldstate)


Get the myEventSeqNum field state


### function getEventTime

```cpp
virtual const MamaDateTime & getEventTime() const =0
```


**Return**: Returns the myEventTime. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getEventTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtime)


### function getEventTimeFieldState

```cpp
virtual MamdaFieldState getEventTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtimefieldstate)


Get the myEventTime field state


### function getFarClearingPrice

```cpp
virtual const MamaPrice & getFarClearingPrice() const =0
```


**Return**: Returns the myFarClearingPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getFarClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getfarclearingprice)


### function getFarClearingPriceFieldState

```cpp
virtual MamdaFieldState getFarClearingPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getFarClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getfarclearingpricefieldstate)


Get the myFarClearingPrice field state


### function getHighIndicationPrice

```cpp
virtual const MamaPrice & getHighIndicationPrice() const =0
```


**Return**: Returns the myHighIndicationPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getHighIndicationPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-gethighindicationprice)


### function getHighIndicationPriceFieldState

```cpp
virtual MamdaFieldState getHighIndicationPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getHighIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-gethighindicationpricefieldstate)


Get the myHighIndicationPrice field state


### function getImbalancePrice

```cpp
virtual const MamaPrice & getImbalancePrice() const =0
```


**Return**: Returns the myIndicationPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getImbalancePrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalanceprice)


### function getImbalancePriceFieldState

```cpp
virtual MamdaFieldState getImbalancePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getImbalancePriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancepricefieldstate)


Get the myIndicationPrice field state


### function getMatchPrice

```cpp
virtual const MamaPrice & getMatchPrice() const =0
```


**Return**: Returns the myInsideMatchPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMatchPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchprice)


### function getMatchPriceFieldState

```cpp
virtual MamdaFieldState getMatchPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMatchPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchpricefieldstate)


Get the myInsideMatchPrice field state


### function getIssueSymbol

```cpp
virtual const char * getIssueSymbol() const =0
```


**Return**: Returns the myIssueSymbol. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getIssueSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getissuesymbol)


### function getIssueSymbolFieldState

```cpp
virtual MamdaFieldState getIssueSymbolFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getIssueSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getissuesymbolfieldstate)


Get the myIssueSymbol field state


### function getLowIndicationPrice

```cpp
virtual const MamaPrice & getLowIndicationPrice() const =0
```


**Return**: Returns the myLowIndicationPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getLowIndicationPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlowindicationprice)


### function getLowIndicationPriceFieldState

```cpp
virtual MamdaFieldState getLowIndicationPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getLowIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlowindicationpricefieldstate)


Get the myLowIndicationPrice field state


### function getMatchVolume

```cpp
virtual int64_t getMatchVolume() const =0
```


**Return**: Returns the myMatchVolume. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMatchVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchvolume)


### function getMatchVolumeFieldState

```cpp
virtual MamdaFieldState getMatchVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMatchVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchvolumefieldstate)


Get the myMatchVolume field state


### function getMsgType

```cpp
virtual int32_t getMsgType() const =0
```


**Return**: Returns the myMsgType. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMsgType](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgtype)


### function getMsgTypeFieldState

```cpp
virtual MamdaFieldState getMsgTypeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMsgTypeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgtypefieldstate)


Get the myMsgType field state


### function getNearClearingPrice

```cpp
virtual const MamaPrice & getNearClearingPrice() const =0
```


**Return**: Returns the myNearClearingPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getNearClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnearclearingprice)


### function getNearClearingPriceFieldState

```cpp
virtual MamdaFieldState getNearClearingPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getNearClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnearclearingpricefieldstate)


Get the myNearClearingPrice field state


### function getNoClearingPrice

```cpp
virtual char getNoClearingPrice() const =0
```


**Return**: Returns the myNoClearingPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getNoClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnoclearingprice)


### function getNoClearingPriceFieldState

```cpp
virtual MamdaFieldState getNoClearingPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getNoClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnoclearingpricefieldstate)


Get the myNoClearingPrice field state


### function getPartId

```cpp
virtual const char * getPartId() const =0
```


**Return**: Returns the myPartId. 

**Reimplements**: [Wombat::MamdaBasicRecap::getPartId](classWombat_1_1MamdaBasicRecap.html#function-getpartid)


**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getPartId](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartid)


### function getPartIdFieldState

```cpp
virtual MamdaFieldState getPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicRecap::getPartIdFieldState](classWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartidfieldstate)


Get the myPartId field state


### function getPriceVarInd

```cpp
virtual char getPriceVarInd() const =0
```


**Return**: Returns the myPriceVarInd. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getPriceVarInd](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpricevarind)


### function getPriceVarIndFieldState

```cpp
virtual MamdaFieldState getPriceVarIndFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getPriceVarIndFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpricevarindfieldstate)


Get the myPriceVarInd field state


### function getSecurityStatusOrig

```cpp
virtual const char * getSecurityStatusOrig() const =0
```


**Return**: Returns the mySecurityStatusOrig. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSecurityStatusOrig](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorig)


### function getSecurityStatusOrigFieldState

```cpp
virtual MamdaFieldState getSecurityStatusOrigFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSecurityStatusOrigFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorigfieldstate)


Get the mySecurityStatusOrig field state


### function getImbalanceState

```cpp
virtual const char * getImbalanceState() const =0
```


**Return**: Returns the mySecurityStatusQual. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getImbalanceState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancestate)


### function getImbalanceStateFieldState

```cpp
virtual MamdaFieldState getImbalanceStateFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getImbalanceStateFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancestatefieldstate)


Get the mySecurityStatusQual field state


### function getSecurityStatusTime

```cpp
virtual const MamaDateTime & getSecurityStatusTime() const =0
```


**Return**: Returns the mySecurityStatusTime. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSecurityStatusTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustime)


### function getSecurityStatusTimeFieldState

```cpp
virtual MamdaFieldState getSecurityStatusTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSecurityStatusTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustimefieldstate)


Get the mySecurityStatusTime field state


### function getSellVolume

```cpp
virtual int64_t getSellVolume() const =0
```


**Return**: Returns the mySellVolume. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSellVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsellvolume)


### function getSellVolumeFieldState

```cpp
virtual MamdaFieldState getSellVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSellVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsellvolumefieldstate)


Get the mySellVolume field state


### function getSeqNum

```cpp
virtual mama_seqnum_t getSeqNum() const =0
```


**Return**: Returns the mySeqNum. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-getseqnum)


### function getSeqNumFieldState

```cpp
virtual MamdaFieldState getSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getseqnumfieldstate)


Get the mySeqNum field state


### function ~MamdaOrderImbalanceRecap

```cpp
inline virtual ~MamdaOrderImbalanceRecap()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100