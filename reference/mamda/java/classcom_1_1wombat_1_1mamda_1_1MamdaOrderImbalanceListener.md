---
title: com::wombat::mamda::MamdaOrderImbalanceListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaOrderImbalanceListener



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html), [com.wombat.mamda.MamdaOrderImbalanceRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html), [com.wombat.mamda.MamdaOrderImbalanceUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceUpdate.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[clearCache](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-clearcache)**(MamdaOrderImbalanceCache cache) |
| | **[MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-mamdaorderimbalancelistener)**() |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-addhandler)**([MamdaOrderImbalanceHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceHandler.html) handler) |
| MamaPrice | **[getHighIndicationPrice](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-gethighindicationprice)**() |
| MamaPrice | **[getLowIndicationPrice](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getlowindicationprice)**() |
| MamaPrice | **[getImbalancePrice](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getimbalanceprice)**() |
| long | **[getBuyVolume](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getbuyvolume)**() |
| long | **[getSellVolume](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsellvolume)**() |
| long | **[getMatchVolume](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getmatchvolume)**() |
| String | **[getImbalanceState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getimbalancestate)**() |
| MamaPrice | **[getMatchPrice](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getmatchprice)**() |
| MamaPrice | **[getFarClearingPrice](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getfarclearingprice)**() |
| MamaPrice | **[getNearClearingPrice](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getnearclearingprice)**() |
| char | **[getNoClearingPrice](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getnoclearingprice)**() |
| char | **[getPriceVarInd](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getpricevarind)**() |
| char | **[getCrossType](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getcrosstype)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-geteventtime)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-geteventseqnum)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getactivitytime)**() |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsrctime)**() |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsendtime)**() |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getlinetime)**() |
| int | **[getMsgType](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getmsgtype)**() |
| String | **[getIssueSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getissuesymbol)**() |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getpartid)**() |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsymbol)**() |
| int | **[getSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getseqnum)**() |
| String | **[getSecurityStatusOrig](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorig)**() |
| MamaDateTime | **[getSecurityStatusTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustime)**() |
| MamaDateTime | **[getAuctionTime](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getauctiontime)**() |
| short | **[getHighIndicationPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-gethighindicationpricefieldstate)**() |
| short | **[getLowIndicationPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getlowindicationpricefieldstate)**() |
| short | **[getImbalancePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getimbalancepricefieldstate)**() |
| short | **[getBuyVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getbuyvolumefieldstate)**() |
| short | **[getSellVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsellvolumefieldstate)**() |
| short | **[getMatchVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getmatchvolumefieldstate)**() |
| short | **[getImbalanceStateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getimbalancestatefieldstate)**() |
| short | **[getMatchPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getmatchpricefieldstate)**() |
| short | **[getFarClearingPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getfarclearingpricefieldstate)**() |
| short | **[getNearClearingPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getnearclearingpricefieldstate)**() |
| short | **[getNoClearingPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getnoclearingpricefieldstate)**() |
| short | **[getPriceVarIndFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getpricevarindfieldstate)**() |
| short | **[getCrossTypeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getcrosstypefieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-geteventtimefieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-geteventseqnumfieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsendtimefieldstate)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getlinetimefieldstate)**() |
| short | **[getMsgTypeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getmsgtypefieldstate)**() |
| short | **[getIssueSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getissuesymbolfieldstate)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getpartidfieldstate)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsymbolfieldstate)**() |
| short | **[getSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getseqnumfieldstate)**() |
| short | **[getSecurityStatusOrigFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorigfieldstate)**() |
| short | **[getSecurityStatusTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustimefieldstate)**() |
| short | **[getAuctionTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getauctiontimefieldstate)**() |
| [MamdaOrderImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceSide.html) | **[getImbalanceSide](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getimbalanceside)**() |
| long | **[getImbalanceVolume](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-getimbalancevolume)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final MamaMsg msg, short msgType) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| final MamdaOrderImbalanceCache | **[orderImbalanceCache](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html#variable-orderimbalancecache)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaOrderImbalanceListener;
```


A [MamdaOrderImbalanceListener](classcom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceListener.html) is class that specializes in handling imbalance order updates. An imbalance order occurs when too many orders of a particular type - either buy, sell or limit - for listed securities and not enough of the other, matching orders are received by an exchange. Developers provide their own implementation of the [MamdaOrderImbalanceHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceHandler.html) interface and will be delivered notifications for imbalance updates. 

## Public Functions Documentation

### function clearCache

```java
inline void clearCache(
    MamdaOrderImbalanceCache cache
)
```


**Parameters**: 

  * **cache** The imbalance order cache to clear. 


clearCache - clears all cached data by resetting to default values. 


### function MamdaOrderImbalanceListener

```java
inline MamdaOrderImbalanceListener()
```


constructor 


### function addHandler

```java
inline void addHandler(
    MamdaOrderImbalanceHandler handler
)
```


**Parameters**: 

  * **handler** - the handler to be registered. 


addHandler - Registers handler interested in receiving update update and recap events. Currently only one handler can and must be registered. 


### function getHighIndicationPrice

```java
inline MamaPrice getHighIndicationPrice()
```


**Return**: mHighIndicationPrice 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getHighIndicationPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationprice)


getHighIndicationPrice - Returns the high indication price of the imbalance order. 


### function getLowIndicationPrice

```java
inline MamaPrice getLowIndicationPrice()
```


**Return**: mLowIndicationPrice 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getLowIndicationPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationprice)


getLowIndicationPrice - Returns the low indication price of the imbalance order. 


### function getImbalancePrice

```java
inline MamaPrice getImbalancePrice()
```


**Return**: mIndicationPrice 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getImbalancePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getimbalanceprice)


getImbalancePrice - Returns the indication price for the imbalance order. 


### function getBuyVolume

```java
inline long getBuyVolume()
```


**Return**: mBuyVolume 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getBuyVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolume)


getBuyVolume - Returns the buy volume of the imbalance order 


### function getSellVolume

```java
inline long getSellVolume()
```


**Return**: mSellVolume 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getSellVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getsellvolume)


getSellVolume - Returns the sell volume of the imbalance order 


### function getMatchVolume

```java
inline long getMatchVolume()
```


**Return**: mMatchVolume 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getMatchVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolume)


getMatchVolume - Returns the match volume of the imbalance order 


### function getImbalanceState

```java
inline String getImbalanceState()
```


**Return**: mSecurityStatusQual 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getImbalanceState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestate)


getImbalanceState - Returns the order imbalance state 


### function getMatchPrice

```java
inline MamaPrice getMatchPrice()
```


**Return**: mInsideMatchPrice 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getMatchPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getmatchprice)


getMatchPrice - Returns the match price for the imbalance order. 


### function getFarClearingPrice

```java
inline MamaPrice getFarClearingPrice()
```


**Return**: mFarClearingPrice 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getFarClearingPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingprice)


getFarClearingPrice - Returns the far clearing price for the imbalance order. 


### function getNearClearingPrice

```java
inline MamaPrice getNearClearingPrice()
```


**Return**: mNearClearingPrice 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getNearClearingPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingprice)


getNearClearingPrice - Returns the near clearing price for the imbalance order. 


### function getNoClearingPrice

```java
inline char getNoClearingPrice()
```


**Return**: mNoClearingPrice 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getNoClearingPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingprice)


getNoClearingPrice - Returns the no clearing price for the imbalance order. 


### function getPriceVarInd

```java
inline char getPriceVarInd()
```


**Return**: mPriceVarInd 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getPriceVarInd](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getpricevarind)


getPriceVarInd - 


### function getCrossType

```java
inline char getCrossType()
```


**Return**: Returns the CrossType. 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getCrossType](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getcrosstype)


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**See**: [MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)

**Return**: mEventTime 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)


getEventTime 


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**See**: [MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)

**Return**: mEventSeqNum 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)


getEventSeqNum 


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


**See**: [MamdaBasicEvent::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)

**Return**: mActTime 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)


getActivityTime 


### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


**See**: [MamdaBasicEvent::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)

**Return**: mSrcTime 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)


getSrcTime 


### function getSendTime

```java
inline MamaDateTime getSendTime()
```


**Return**: mSendTime 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)


getSendTime 


### function getLineTime

```java
inline MamaDateTime getLineTime()
```


**Return**: mLineTime 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)


getLineTime 


### function getMsgType

```java
inline int getMsgType()
```


**Return**: mMsgType 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getMsgType](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getmsgtype)


getMsgType 


### function getIssueSymbol

```java
inline String getIssueSymbol()
```


**Return**: mIssueSymbol 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getIssueSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbol)


getIssueSymbol 


### function getPartId

```java
inline String getPartId()
```


**Return**: mPartId 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)


getPartId 


### function getSymbol

```java
inline String getSymbol()
```


**Return**: mSymbol 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)


getSymbol 


### function getSeqNum

```java
inline int getSeqNum()
```


**Return**: mSeqNum 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getseqnum)


getSeqNum 


### function getSecurityStatusOrig

```java
inline String getSecurityStatusOrig()
```


**Return**: mSecurityStatusOrig 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getSecurityStatusOrig](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorig)


getSecurityStatusOrig 


### function getSecurityStatusTime

```java
inline MamaDateTime getSecurityStatusTime()
```


**Return**: mSecurityStatusTime 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getSecurityStatusTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustime)


getSecurityStatusTime 


### function getAuctionTime

```java
inline MamaDateTime getAuctionTime()
```


**Return**: mAuctionTime 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getAuctionTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getauctiontime)


getAuctionTime 


### function getHighIndicationPriceFieldState

```java
inline short getHighIndicationPriceFieldState()
```


**Return**: mHighIndicationPriceFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getHighIndicationPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationpricefieldstate)


getHighIndicationPriceFieldState - Returns the high indication price of the imbalance order. 


### function getLowIndicationPriceFieldState

```java
inline short getLowIndicationPriceFieldState()
```


**Return**: mLowIndicationPriceFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getLowIndicationPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationpricefieldstate)


getLowIndicationPriceFieldState - Returns the low indication price of the imbalance order. 


### function getImbalancePriceFieldState

```java
inline short getImbalancePriceFieldState()
```


**Return**: mIndicationPriceFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getImbalancePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getimbalancepricefieldstate)


getImbalancePriceFieldState - Returns the indication price for the imbalance order. 


### function getBuyVolumeFieldState

```java
inline short getBuyVolumeFieldState()
```


**Return**: mBuyVolumeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getBuyVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolumefieldstate)


getBuyVolumeFieldState - Returns the buy volume of the imbalance order 


### function getSellVolumeFieldState

```java
inline short getSellVolumeFieldState()
```


**Return**: mSellVolumeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getSellVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getsellvolumefieldstate)


getSellVolumeFieldState - Returns the sell volume of the imbalance order 


### function getMatchVolumeFieldState

```java
inline short getMatchVolumeFieldState()
```


**Return**: mMatchVolume 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getMatchVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolumefieldstate)


getMatchVolumeFieldState - Returns the match volume of the imbalance order 


### function getImbalanceStateFieldState

```java
inline short getImbalanceStateFieldState()
```


**Return**: mSecurityStatusQual 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getImbalanceStateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestatefieldstate)


getImbalanceStateFieldState - Returns the order imbalance state 


### function getMatchPriceFieldState

```java
inline short getMatchPriceFieldState()
```


**Return**: mInsideMatchPrice 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getMatchPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getmatchpricefieldstate)


getMatchPriceFieldState - Returns the match price for the imbalance order. 


### function getFarClearingPriceFieldState

```java
inline short getFarClearingPriceFieldState()
```


**Return**: mFarClearingPriceFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getFarClearingPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingpricefieldstate)


getFarClearingPriceFieldState - Returns the far clearing price for the imbalance order. 


### function getNearClearingPriceFieldState

```java
inline short getNearClearingPriceFieldState()
```


**Return**: mNearClearingPriceFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getNearClearingPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingpricefieldstate)


getNearClearingPriceFieldState - Returns the near clearing price for the imbalance order. 


### function getNoClearingPriceFieldState

```java
inline short getNoClearingPriceFieldState()
```


**Return**: mNoClearingPriceFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getNoClearingPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingpricefieldstate)


getNoClearingPriceFieldState - Returns the no clearing price for the imbalance order. 


### function getPriceVarIndFieldState

```java
inline short getPriceVarIndFieldState()
```


**Return**: mPriceVarIndFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getPriceVarIndFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getpricevarindfieldstate)


getPriceVarIndFieldState - 


### function getCrossTypeFieldState

```java
inline short getCrossTypeFieldState()
```


**Return**: mCrossType 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getCrossTypeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getcrosstypefieldstate)


getCrossType return the imbalance cross type 


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**See**: [MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)

**Return**: mEventTimeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


getEventTimeFieldState 


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**See**: [MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)

**Return**: mEventSeqNumFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


getEventSeqNumFieldState 


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


**See**: [MamdaBasicEvent::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)

**Return**: mActTimeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


getActivityTimeFieldState 


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


**See**: [MamdaBasicEvent::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)

**Return**: mSrcTimeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


getSrcTimeFieldState 


### function getSendTimeFieldState

```java
inline short getSendTimeFieldState()
```


**Return**: mSendTimeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


getSendTimeFieldState 


### function getLineTimeFieldState

```java
inline short getLineTimeFieldState()
```


**Return**: mLineTimeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


getLineTimeFieldState 


### function getMsgTypeFieldState

```java
inline short getMsgTypeFieldState()
```


**Return**: mMsgTypeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getMsgTypeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getmsgtypefieldstate)


getMsgTypeFieldState 


### function getIssueSymbolFieldState

```java
inline short getIssueSymbolFieldState()
```


**Return**: mIssueSymbolFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getIssueSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbolfieldstate)


getIssueSymbolFieldState 


### function getPartIdFieldState

```java
inline short getPartIdFieldState()
```


**Return**: mPartIdFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


getPartIdFieldState 


### function getSymbolFieldState

```java
inline short getSymbolFieldState()
```


**Return**: mSymbolFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


getSymbolFieldState 


### function getSeqNumFieldState

```java
inline short getSeqNumFieldState()
```


**Return**: mSeqNumFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getseqnumfieldstate)


getSeqNumFieldState 


### function getSecurityStatusOrigFieldState

```java
inline short getSecurityStatusOrigFieldState()
```


**Return**: mSecurityStatusOrigFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getSecurityStatusOrigFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorigfieldstate)


getSecurityStatusOrigFieldState 


### function getSecurityStatusTimeFieldState

```java
inline short getSecurityStatusTimeFieldState()
```


**Return**: mSecurityStatusTimeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getSecurityStatusTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustimefieldstate)


getSecurityStatusTimeFieldState 


### function getAuctionTimeFieldState

```java
inline short getAuctionTimeFieldState()
```


**Return**: mAuctionTimeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaOrderImbalanceRecap::getAuctionTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaOrderImbalanceRecap.html#function-getauctiontimefieldstate)


getAuctionTimeFieldState 


### function getImbalanceSide

```java
inline MamdaOrderImbalanceSide getImbalanceSide()
```


**Return**: mSide 

getImbalanceSide- Returns the imbalance side of the imbalance order. This is determined by the Buy and Sell Volumes. 


### function getImbalanceVolume

```java
inline long getImbalanceVolume()
```


**Return**: long 

getImbalanceVolume - Returns the imbalance volume, which is either the sell or buy volume 


### function onMsg

```java
inline void onMsg(
    MamdaSubscription subscription,
    final MamaMsg msg,
    short msgType
)
```


**Reimplements**: [com::wombat::mamda::MamdaMsgListener::onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


## Protected Attributes Documentation

### variable orderImbalanceCache

```java
final MamdaOrderImbalanceCache orderImbalanceCache = new 
                                             MamdaOrderImbalanceCache ();
```


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100