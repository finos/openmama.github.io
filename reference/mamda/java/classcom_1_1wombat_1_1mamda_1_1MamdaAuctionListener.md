---
title: com::wombat::mamda::MamdaAuctionListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaAuctionListener



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html), [com.wombat.mamda.MamdaAuctionRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html), [com.wombat.mamda.MamdaAuctionUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionUpdate.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[clearCache](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-clearcache)**() |
| | **[MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-mamdaauctionlistener)**() |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-addhandler)**([MamdaAuctionHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionHandler.html) handler) |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getactivitytime)**() |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsrctime)**() |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsendtime)**() |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getlinetime)**() |
| String | **[getIssueSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getissuesymbol)**() |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getpartid)**() |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsymbol)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-geteventtime)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-geteventseqnum)**() |
| MamaPrice | **[getUncrossPrice](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrossprice)**() |
| MamaDouble | **[getUncrossVolume](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrossvolume)**() |
| short | **[getUncrossPriceInd](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrosspriceind)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsrctimefieldstate)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsendtimefieldstate)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getlinetimefieldstate)**() |
| short | **[getIssueSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getissuesymbolfieldstate)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getpartidfieldstate)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getsymbolfieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-geteventtimefieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-geteventseqnumfieldstate)**() |
| short | **[getUncrossPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrosspricefieldstate)**() |
| short | **[getUncrossVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrossvolumefieldstate)**() |
| short | **[getUncrossPriceIndFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-getuncrosspriceindfieldstate)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, final MamaMsg msg, short msgType) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[mSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-msrctime)**  |
| MamaDateTime | **[mActTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-macttime)**  |
| MamaDateTime | **[mSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-msendtime)**  |
| MamaDateTime | **[mLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-mlinetime)**  |
| MamaDateTime | **[mEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-meventtime)**  |
| MamaLong | **[mEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-meventseqnum)**  |
| MamaString | **[mIssueSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-missuesymbol)**  |
| MamaString | **[mPartId](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-mpartid)**  |
| MamaString | **[mSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-msymbol)**  |
| MamaPrice | **[mUncrossPrice](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-muncrossprice)**  |
| MamaDouble | **[mUncrossVolume](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-muncrossvolume)**  |
| [MamdaUncrossPriceInd](classcom_1_1wombat_1_1mamda_1_1MamdaUncrossPriceInd.html) | **[mUncrossPriceInd](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-muncrosspriceind)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-msrctimefieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mActTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-macttimefieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-msendtimefieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-mlinetimefieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-meventtimefieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mIssueSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-missuesymbolfieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-mpartidfieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-msymbolfieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-meventseqnumfieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mUncrossPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-muncrosspricefieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mUncrossVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-muncrossvolumefieldstate)**  |
| [MamdaFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaFieldState.html) | **[mUncrossPriceIndFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html#variable-muncrosspriceindfieldstate)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaAuctionListener;
```


A [MamdaAuctionListener](classcom_1_1wombat_1_1mamda_1_1MamdaAuctionListener.html) is class that specializes in handling Auction order updates. An Auction order occurs when too many orders of a particular type - either buy, sell or limit - for listed securities and not enough of the other, matching orders are received by an exchange. Developers provide their own implementation of the [MamdaAuctionHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionHandler.html) interface and will be delivered notifications for Auction updates. 

## Public Functions Documentation

### function clearCache

```java
inline void clearCache()
```


clearCache - clears all cached data by resetting to default values. 


### function MamdaAuctionListener

```java
inline MamdaAuctionListener()
```


constructor 


### function addHandler

```java
inline void addHandler(
    MamdaAuctionHandler handler
)
```


**Parameters**: 

  * **handler** - the handler to be registered. 


addHandler - Registers handler interested in receiving update update and recap events. Currently only one handler can and must be registered. 


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


### function getIssueSymbol

```java
inline String getIssueSymbol()
```


**Return**: mIssueSymbol 

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


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**Return**: mEventTime 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)


getEventTime 


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**Return**: mEventSeqNum 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)


getEventSeqNum 


### function getUncrossPrice

```java
inline MamaPrice getUncrossPrice()
```


**Return**: mUncrossPrice 

**Reimplements**: [com::wombat::mamda::MamdaAuctionRecap::getUncrossPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrossprice)


getUncrossPrice 


### function getUncrossVolume

```java
inline MamaDouble getUncrossVolume()
```


**Return**: mUncrossVolume 

**Reimplements**: [com::wombat::mamda::MamdaAuctionRecap::getUncrossVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrossvolume)


getUncrossVolume 


### function getUncrossPriceInd

```java
inline short getUncrossPriceInd()
```


**Return**: mUncrossPriceInd 

**Reimplements**: [com::wombat::mamda::MamdaAuctionRecap::getUncrossPriceInd](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrosspriceind)


getUncrossPriceInd 


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


### function getIssueSymbolFieldState

```java
inline short getIssueSymbolFieldState()
```


**Return**: mIssueSymbolFieldState 

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


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**Return**: mEventTimeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


getEventTimeFieldState 


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**Return**: mEventSeqNumFieldState 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


getEventSeqNumFieldState 


### function getUncrossPriceFieldState

```java
inline short getUncrossPriceFieldState()
```


**Return**: mUncrossPriceFieldState 

**Reimplements**: [com::wombat::mamda::MamdaAuctionRecap::getUncrossPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrosspricefieldstate)


getUncrossPriceFieldState 


### function getUncrossVolumeFieldState

```java
inline short getUncrossVolumeFieldState()
```


**Return**: mUncrossVolumeFieldState 

**Reimplements**: [com::wombat::mamda::MamdaAuctionRecap::getUncrossVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrossvolumefieldstate)


getUncrossVolumeFieldState 


### function getUncrossPriceIndFieldState

```java
inline short getUncrossPriceIndFieldState()
```


**Return**: mUncrossPriceIndFieldState 

**Reimplements**: [com::wombat::mamda::MamdaAuctionRecap::getUncrossPriceIndFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaAuctionRecap.html#function-getuncrosspriceindfieldstate)


getUncrossPriceIndFieldState 


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


## Public Attributes Documentation

### variable mSrcTime

```java
MamaDateTime mSrcTime = new MamaDateTime();
```


### variable mActTime

```java
MamaDateTime mActTime = new MamaDateTime();
```


### variable mSendTime

```java
MamaDateTime mSendTime = new MamaDateTime();
```


### variable mLineTime

```java
MamaDateTime mLineTime = new MamaDateTime();
```


### variable mEventTime

```java
MamaDateTime mEventTime = new MamaDateTime();
```


### variable mEventSeqNum

```java
MamaLong mEventSeqNum = new MamaLong();
```


### variable mIssueSymbol

```java
MamaString mIssueSymbol = new MamaString();
```


### variable mPartId

```java
MamaString mPartId = new MamaString();
```


### variable mSymbol

```java
MamaString mSymbol = new MamaString();
```


### variable mUncrossPrice

```java
MamaPrice mUncrossPrice = new MamaPrice();
```


### variable mUncrossVolume

```java
MamaDouble mUncrossVolume = new MamaDouble();
```


### variable mUncrossPriceInd

```java
MamdaUncrossPriceInd mUncrossPriceInd = new MamdaUncrossPriceInd();
```


### variable mSrcTimeFieldState

```java
MamdaFieldState mSrcTimeFieldState = new MamdaFieldState();
```


### variable mActTimeFieldState

```java
MamdaFieldState mActTimeFieldState = new MamdaFieldState();
```


### variable mSendTimeFieldState

```java
MamdaFieldState mSendTimeFieldState = new MamdaFieldState();
```


### variable mLineTimeFieldState

```java
MamdaFieldState mLineTimeFieldState = new MamdaFieldState();
```


### variable mEventTimeFieldState

```java
MamdaFieldState mEventTimeFieldState = new MamdaFieldState();
```


### variable mIssueSymbolFieldState

```java
MamdaFieldState mIssueSymbolFieldState = new MamdaFieldState();
```


### variable mPartIdFieldState

```java
MamdaFieldState mPartIdFieldState = new MamdaFieldState();
```


### variable mSymbolFieldState

```java
MamdaFieldState mSymbolFieldState = new MamdaFieldState();
```


### variable mEventSeqNumFieldState

```java
MamdaFieldState mEventSeqNumFieldState = new MamdaFieldState();
```


### variable mUncrossPriceFieldState

```java
MamdaFieldState mUncrossPriceFieldState = new MamdaFieldState();
```


### variable mUncrossVolumeFieldState

```java
MamdaFieldState mUncrossVolumeFieldState = new MamdaFieldState();
```


### variable mUncrossPriceIndFieldState

```java
MamdaFieldState mUncrossPriceIndFieldState = new MamdaFieldState();
```


-------------------------------

Updated on 2023-03-31 at 15:30:32 +0100