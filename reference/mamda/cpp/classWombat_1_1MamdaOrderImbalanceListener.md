---
title: Wombat::MamdaOrderImbalanceListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceListener



 [More...](#detailed-description)


`#include <MamdaOrderImbalanceListener.h>`

Inherits from [Wombat::MamdaOrderImbalanceUpdate](classWombat_1_1MamdaOrderImbalanceUpdate.html), [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html), [Wombat::MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html), [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html), [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html#function-mamdaorderimbalancelistener)**() |
| virtual | **[~MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html#function-~mamdaorderimbalancelistener)**() |
| void | **[addHandler](classWombat_1_1MamdaOrderImbalanceListener.html#function-addhandler)**([MamdaOrderImbalanceHandler](classWombat_1_1MamdaOrderImbalanceHandler.html) * handler) |
| virtual MamaPrice & | **[getHighIndicationPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-gethighindicationprice)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-gethighindicationpricefieldstate)**() const |
| virtual MamaPrice & | **[getLowIndicationPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlowindicationprice)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlowindicationpricefieldstate)**() const |
| virtual MamaPrice & | **[getImbalancePrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalanceprice)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getImbalancePriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancepricefieldstate)**() const |
| virtual int64_t | **[getBuyVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getbuyvolume)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBuyVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getbuyvolumefieldstate)**() const |
| virtual int64_t | **[getSellVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsellvolume)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSellVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsellvolumefieldstate)**() const |
| virtual int64_t | **[getMatchVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchvolume)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMatchVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchvolumefieldstate)**() const |
| virtual const char * | **[getImbalanceState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancestate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getImbalanceStateFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancestatefieldstate)**() const |
| virtual MamaPrice & | **[getMatchPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchprice)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMatchPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchpricefieldstate)**() const |
| virtual MamaPrice & | **[getFarClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getfarclearingprice)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getFarClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getfarclearingpricefieldstate)**() const |
| virtual MamaPrice & | **[getNearClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnearclearingprice)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNearClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnearclearingpricefieldstate)**() const |
| virtual char | **[getNoClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnoclearingprice)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNoClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnoclearingpricefieldstate)**() const |
| virtual char | **[getPriceVarInd](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpricevarind)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPriceVarIndFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpricevarindfieldstate)**() const |
| virtual char | **[getCrossType](classWombat_1_1MamdaOrderImbalanceListener.html#function-getcrosstype)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCrossTypeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getcrosstypefieldstate)**() const |
| virtual MamaDateTime & | **[getEventTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtimefieldstate)**() const |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnum)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnumfieldstate)**() const |
| virtual MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate)**() const |
| virtual MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate)**() const |
| virtual mama_i32_t | **[getMsgType](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgtype)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgTypeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgtypefieldstate)**() const |
| virtual const char * | **[getIssueSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getissuesymbol)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIssueSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getissuesymbolfieldstate)**() const |
| virtual const char * | **[getPartId](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartid)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartidfieldstate)**() const |
| virtual mama_seqnum_t | **[getSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-getseqnum)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getseqnumfieldstate)**() const |
| virtual const char * | **[getSecurityStatusOrig](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorig)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusOrigFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorigfieldstate)**() const |
| virtual MamaDateTime & | **[getSecurityStatusTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustimefieldstate)**() const |
| virtual MamaDateTime & | **[getAuctionTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getauctiontime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAuctionTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getauctiontimefieldstate)**() const |
| virtual MamaDateTime & | **[getLineTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetimefieldstate)**() const |
| virtual MamaDateTime & | **[getSendTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtimefieldstate)**() const |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbol)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbolfieldstate)**() const |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgqual)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgqualfieldstate)**() const |
| void | **[updateFieldStates](classWombat_1_1MamdaOrderImbalanceListener.html#function-updatefieldstates)**() |
| virtual void | **[onMsg](classWombat_1_1MamdaOrderImbalanceListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaOrderImbalanceUpdate](classWombat_1_1MamdaOrderImbalanceUpdate.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaOrderImbalanceUpdate](classWombat_1_1MamdaOrderImbalanceUpdate.html#function-~mamdaorderimbalanceupdate)**() |

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

**Public Functions inherited from [Wombat::MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaOrderImbalanceRecap](classWombat_1_1MamdaOrderImbalanceRecap.html#function-~mamdaorderimbalancerecap)**() |

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |


## Detailed Description

```cpp
class Wombat::MamdaOrderImbalanceListener;
```


A [MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html) is class that specializes in handling an imbalance order updates. An imbalance order occurs when too many orders of a particular type - either buy, sell or limit - for listed securities and not enough of the other, matching orders are received by an exchange. Developers provide their own implementation of the [MamdaOrderImbalanceHandler](classWombat_1_1MamdaOrderImbalanceHandler.html) interface and will be delivered notifications for imbalance updates. An obvious application for this MAMDA class is any kind of tick capture application.

[MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html) should initialize the [MamdaOrderImbalanceFields](classWombat_1_1MamdaOrderImbalanceFields.html) class prior to receiving the first message by calling MamdaOrderImbalanceFields::setDictionary() with a valid dictionary object which contains OrderImbalance related fields. 

## Public Functions Documentation

### function MamdaOrderImbalanceListener

```cpp
MamdaOrderImbalanceListener()
```


### function ~MamdaOrderImbalanceListener

```cpp
virtual ~MamdaOrderImbalanceListener()
```


### function addHandler

```cpp
void addHandler(
    MamdaOrderImbalanceHandler * handler
)
```


Add a specialized order imbalance handler. 


### function getHighIndicationPrice

```cpp
virtual MamaPrice & getHighIndicationPrice() const
```


**Return**: Returns the myHighIndicationPrice. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getHighIndicationPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationprice)


### function getHighIndicationPriceFieldState

```cpp
virtual MamdaFieldState getHighIndicationPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getHighIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationpricefieldstate)


Get the myHighIndicationPrice field state


### function getLowIndicationPrice

```cpp
virtual MamaPrice & getLowIndicationPrice() const
```


**Return**: Returns the myLowIndicationPrice. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getLowIndicationPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationprice)


### function getLowIndicationPriceFieldState

```cpp
virtual MamdaFieldState getLowIndicationPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getLowIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationpricefieldstate)


Get the myLowIndicationPrice field state


### function getImbalancePrice

```cpp
virtual MamaPrice & getImbalancePrice() const
```


**Return**: Returns the myIndicationPrice. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getImbalancePrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalanceprice)


### function getImbalancePriceFieldState

```cpp
virtual MamdaFieldState getImbalancePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getImbalancePriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancepricefieldstate)


Get the myIndicationPrice field state


### function getBuyVolume

```cpp
virtual int64_t getBuyVolume() const
```


**Return**: Returns the myBuyVolume. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getBuyVolume](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolume)


### function getBuyVolumeFieldState

```cpp
virtual MamdaFieldState getBuyVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getBuyVolumeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolumefieldstate)


Get the myBuyVolume field state


### function getSellVolume

```cpp
virtual int64_t getSellVolume() const
```


**Return**: Returns the mySellVolume. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSellVolume](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsellvolume)


### function getSellVolumeFieldState

```cpp
virtual MamdaFieldState getSellVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSellVolumeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsellvolumefieldstate)


Get the mySellVolume field state


### function getMatchVolume

```cpp
virtual int64_t getMatchVolume() const
```


**Return**: Returns the myMatchVolume. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMatchVolume](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolume)


### function getMatchVolumeFieldState

```cpp
virtual MamdaFieldState getMatchVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMatchVolumeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolumefieldstate)


Get the myMatchVolume field state


### function getImbalanceState

```cpp
virtual const char * getImbalanceState() const
```


**Return**: Returns the mySecurityStatusQual. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getImbalanceState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestate)


### function getImbalanceStateFieldState

```cpp
virtual MamdaFieldState getImbalanceStateFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getImbalanceStateFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestatefieldstate)


Get the mySecurityStatusQual field state


### function getMatchPrice

```cpp
virtual MamaPrice & getMatchPrice() const
```


**Return**: Returns the myInsideMatchPrice. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMatchPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchprice)


### function getMatchPriceFieldState

```cpp
virtual MamdaFieldState getMatchPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMatchPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchpricefieldstate)


Get the myInsideMatchPrice field state


### function getFarClearingPrice

```cpp
virtual MamaPrice & getFarClearingPrice() const
```


**Return**: Returns the myFarClearingPrice. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getFarClearingPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingprice)


### function getFarClearingPriceFieldState

```cpp
virtual MamdaFieldState getFarClearingPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getFarClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingpricefieldstate)


Get the myFarClearingPrice field state


### function getNearClearingPrice

```cpp
virtual MamaPrice & getNearClearingPrice() const
```


**Return**: Returns the myNearClearingPrice. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getNearClearingPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingprice)


### function getNearClearingPriceFieldState

```cpp
virtual MamdaFieldState getNearClearingPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getNearClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingpricefieldstate)


Get the myNearClearingPrice field state


### function getNoClearingPrice

```cpp
virtual char getNoClearingPrice() const
```


**Return**: Returns the myNoClearingPrice. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getNoClearingPrice](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingprice)


### function getNoClearingPriceFieldState

```cpp
virtual MamdaFieldState getNoClearingPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getNoClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingpricefieldstate)


Get the myNoClearingPrice field state


### function getPriceVarInd

```cpp
virtual char getPriceVarInd() const
```


**Return**: Returns the myPriceVarInd. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getPriceVarInd](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpricevarind)


### function getPriceVarIndFieldState

```cpp
virtual MamdaFieldState getPriceVarIndFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getPriceVarIndFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpricevarindfieldstate)


Get the myPriceVarInd field state


### function getCrossType

```cpp
virtual char getCrossType() const
```


**Return**: Returns the myCrossType. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getCrossType](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getcrosstype)


### function getCrossTypeFieldState

```cpp
virtual MamdaFieldState getCrossTypeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getCrossTypeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getcrosstypefieldstate)


Get the myCrossType field state


### function getEventTime

```cpp
virtual MamaDateTime & getEventTime() const
```


**Return**: Returns the myEventTime. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getEventTime](classWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventtime)


### function getEventTimeFieldState

```cpp
virtual MamdaFieldState getEventTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventtimefieldstate)


Get the myEventTime field state


### function getEventSeqNum

```cpp
virtual mama_seqnum_t getEventSeqNum() const
```


**Return**: Returns the myEventSeqNum. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getEventSeqNum](classWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventseqnum)


### function getEventSeqNumFieldState

```cpp
virtual MamdaFieldState getEventSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventseqnumfieldstate)


Get the myEventSeqNum field state


### function getSrcTime

```cpp
virtual MamaDateTime & getSrcTime() const
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](classWombat_1_1MamdaBasicEvent.html#function-getsrctime)


Get the source time.


### function getSrcTimeFieldState

```cpp
virtual MamdaFieldState getSrcTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


Get the source time field state


### function getActivityTime

```cpp
virtual MamaDateTime & getActivityTime() const
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](classWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


Get the activity time.


### function getActivityTimeFieldState

```cpp
virtual MamdaFieldState getActivityTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


Get the activity time field state


### function getMsgType

```cpp
virtual mama_i32_t getMsgType() const
```


**Return**: Returns the myMsgType. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMsgType](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmsgtype)


### function getMsgTypeFieldState

```cpp
virtual MamdaFieldState getMsgTypeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMsgTypeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getmsgtypefieldstate)


Get the myMsgType field state


### function getIssueSymbol

```cpp
virtual const char * getIssueSymbol() const
```


**Return**: Returns the myIssueSymbol. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getIssueSymbol](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbol)


### function getIssueSymbolFieldState

```cpp
virtual MamdaFieldState getIssueSymbolFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getIssueSymbolFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbolfieldstate)


Get the myIssueSymbol field state


### function getPartId

```cpp
virtual const char * getPartId() const
```


**Return**: Returns the myPartId. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getPartId](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpartid)


### function getPartIdFieldState

```cpp
virtual MamdaFieldState getPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getpartidfieldstate)


Get the myPartId field state


### function getSeqNum

```cpp
virtual mama_seqnum_t getSeqNum() const
```


**Return**: Returns the mySeqNum. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSeqNum](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getseqnum)


### function getSeqNumFieldState

```cpp
virtual MamdaFieldState getSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getseqnumfieldstate)


Get the mySeqNum field state


### function getSecurityStatusOrig

```cpp
virtual const char * getSecurityStatusOrig() const
```


**Return**: Returns the mySecurityStatusOrig. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSecurityStatusOrig](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorig)


### function getSecurityStatusOrigFieldState

```cpp
virtual MamdaFieldState getSecurityStatusOrigFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSecurityStatusOrigFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorigfieldstate)


Get the mySecurityStatusOrig field state


### function getSecurityStatusTime

```cpp
virtual MamaDateTime & getSecurityStatusTime() const
```


**Return**: Returns the mySecurityStatusTime. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSecurityStatusTime](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustime)


### function getSecurityStatusTimeFieldState

```cpp
virtual MamdaFieldState getSecurityStatusTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSecurityStatusTimeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustimefieldstate)


Get the mySecurityStatusTime field state


### function getAuctionTime

```cpp
virtual MamaDateTime & getAuctionTime() const
```


**Return**: Returns the Auction Time. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getAuctionTime](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getauctiontime)


### function getAuctionTimeFieldState

```cpp
virtual MamdaFieldState getAuctionTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getAuctionTimeFieldState](classWombat_1_1MamdaOrderImbalanceRecap.html#function-getauctiontimefieldstate)


Get the myAuctionTime field state


### function getLineTime

```cpp
virtual MamaDateTime & getLineTime() const
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [Wombat::MamdaBasicEvent::getLineTime](classWombat_1_1MamdaBasicEvent.html#function-getlinetime)


Get the line time.


### function getLineTimeFieldState

```cpp
virtual MamdaFieldState getLineTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getLineTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getlinetimefieldstate)


Get the line time of the update.


### function getSendTime

```cpp
virtual MamaDateTime & getSendTime() const
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplements**: [Wombat::MamdaBasicEvent::getSendTime](classWombat_1_1MamdaBasicEvent.html#function-getsendtime)


Get the send time.


### function getSendTimeFieldState

```cpp
virtual MamdaFieldState getSendTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSendTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsendtimefieldstate)


Get the send time field state


### function getSymbol

```cpp
virtual const char * getSymbol() const
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSymbol](classWombat_1_1MamdaBasicEvent.html#function-getsymbol)


Get the instruments string symbol.


### function getSymbolFieldState

```cpp
virtual MamdaFieldState getSymbolFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSymbolFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsymbolfieldstate)


Get the string symbol field state


### function getMsgQual

```cpp
virtual const MamaMsgQual & getMsgQual() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)


Get the message qualifier.


### function getMsgQualFieldState

```cpp
virtual MamdaFieldState getMsgQualFieldState() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)


Get the message qualifier field state.


### function updateFieldStates

```cpp
void updateFieldStates()
```


### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
)
```


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100