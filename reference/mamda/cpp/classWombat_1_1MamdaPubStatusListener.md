---
title: Wombat::MamdaPubStatusListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaPubStatusListener



 [More...](#detailed-description)


`#include <MamdaPubStatusListener.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html), [Wombat::MamdaPubStatus](classWombat_1_1MamdaPubStatus.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html#function-mamdapubstatuslistener)**() |
| virtual | **[~MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html#function-~mamdapubstatuslistener)**() |
| void | **[addHandler](classWombat_1_1MamdaPubStatusListener.html#function-addhandler)**([MamdaPubStatusHandler](classWombat_1_1MamdaPubStatusHandler.html) * handler) |
| void | **[updateFieldStates](classWombat_1_1MamdaPubStatusListener.html#function-updatefieldstates)**() |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaPubStatusListener.html#function-getsymbol)**() const |
| virtual const char * | **[getActivityTime](classWombat_1_1MamdaPubStatusListener.html#function-getactivitytime)**() const |
| virtual const char * | **[getActivityDate](classWombat_1_1MamdaPubStatusListener.html#function-getactivitydate)**() const |
| virtual const char * | **[getPubId](classWombat_1_1MamdaPubStatusListener.html#function-getpubid)**() const |
| virtual const char * | **[getPubClass](classWombat_1_1MamdaPubStatusListener.html#function-getpubclass)**() const |
| virtual const char * | **[getPubHostName](classWombat_1_1MamdaPubStatusListener.html#function-getpubhostname)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getsymbolfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getactivitytimefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityDateFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getactivitydatefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubIdFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getpubidfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubClassFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getpubclassfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubHostNameFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getpubhostnamefieldstate)**() const |
| virtual const char * | **[getStatusMsgType](classWombat_1_1MamdaPubStatusListener.html#function-getstatusmsgtype)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStatusMsgTypeFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getstatusmsgtypefieldstate)**() const |
| virtual const char * | **[getPubFtMode](classWombat_1_1MamdaPubStatusListener.html#function-getpubftmode)**() const |
| virtual const char * | **[getPubMhMode](classWombat_1_1MamdaPubStatusListener.html#function-getpubmhmode)**() const |
| virtual const char * | **[getLineStatus](classWombat_1_1MamdaPubStatusListener.html#function-getlinestatus)**() const |
| virtual long | **[getStatusSeqNum](classWombat_1_1MamdaPubStatusListener.html#function-getstatusseqnum)**() const |
| virtual long | **[getBeginGapSeqNum](classWombat_1_1MamdaPubStatusListener.html#function-getbegingapseqnum)**() const |
| virtual long | **[getEndGapSeqNum](classWombat_1_1MamdaPubStatusListener.html#function-getendgapseqnum)**() const |
| virtual long | **[getPubCacheSize](classWombat_1_1MamdaPubStatusListener.html#function-getpubcachesize)**() const |
| virtual const char * | **[getFreeText](classWombat_1_1MamdaPubStatusListener.html#function-getfreetext)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubFtModeFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getpubftmodefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubMhModeFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getpubmhmodefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineStatusFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getlinestatusfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStatusSeqNumFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getstatusseqnumfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBeginGapSeqNumFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getbegingapseqnumfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEndGapSeqNumFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getendgapseqnumfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubCacheSizeFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getpubcachesizefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getFreeTextFieldState](classWombat_1_1MamdaPubStatusListener.html#function-getfreetextfieldstate)**() const |
| virtual void | **[onMsg](classWombat_1_1MamdaPubStatusListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

**Public Functions inherited from [Wombat::MamdaPubStatus](classWombat_1_1MamdaPubStatus.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaPubStatus](classWombat_1_1MamdaPubStatus.html#function-~mamdapubstatus)**() |


## Detailed Description

```cpp
class Wombat::MamdaPubStatusListener;
```


[MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html) is a class that specializes in handling Publisher (Feed Handler) Status updates. There are 5 types of publisher status msg:

* Heart Beat (StatusMsgType = "HB")
* Fault Tolerance (StatusMsgType = "FT")
* Line Status (StatusMsgType = "LS")
* Message Handler (StatusMsgType = "MH")
* Gap (StatusMsgType = "GP")
Note: The [MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html) class cache is cleared when an new update message arrives

[MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html) should initialize the [MamdaPubStatusFields](classWombat_1_1MamdaPubStatusFields.html) class prior to receiving the first message by calling MamdaPubStatusFields::setDictionary() with a valid dictionary object which contains PubStatus related fields. 

## Public Functions Documentation

### function MamdaPubStatusListener

```cpp
MamdaPubStatusListener()
```


### function ~MamdaPubStatusListener

```cpp
virtual ~MamdaPubStatusListener()
```


### function addHandler

```cpp
void addHandler(
    MamdaPubStatusHandler * handler
)
```


### function updateFieldStates

```cpp
void updateFieldStates()
```


### function getSymbol

```cpp
virtual const char * getSymbol() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getSymbol](classWombat_1_1MamdaPubStatus.html#function-getsymbol)


Accessor function for generic fields applicable to all 5 publisher status message types. 


### function getActivityTime

```cpp
virtual const char * getActivityTime() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getActivityTime](classWombat_1_1MamdaPubStatus.html#function-getactivitytime)


### function getActivityDate

```cpp
virtual const char * getActivityDate() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getActivityDate](classWombat_1_1MamdaPubStatus.html#function-getactivitydate)


### function getPubId

```cpp
virtual const char * getPubId() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getPubId](classWombat_1_1MamdaPubStatus.html#function-getpubid)


### function getPubClass

```cpp
virtual const char * getPubClass() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getPubClass](classWombat_1_1MamdaPubStatus.html#function-getpubclass)


### function getPubHostName

```cpp
virtual const char * getPubHostName() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getPubHostName](classWombat_1_1MamdaPubStatus.html#function-getpubhostname)


### function getSymbolFieldState

```cpp
MamdaFieldState getSymbolFieldState() const
```


### function getActivityTimeFieldState

```cpp
MamdaFieldState getActivityTimeFieldState() const
```


### function getActivityDateFieldState

```cpp
MamdaFieldState getActivityDateFieldState() const
```


### function getPubIdFieldState

```cpp
MamdaFieldState getPubIdFieldState() const
```


### function getPubClassFieldState

```cpp
MamdaFieldState getPubClassFieldState() const
```


### function getPubHostNameFieldState

```cpp
MamdaFieldState getPubHostNameFieldState() const
```


### function getStatusMsgType

```cpp
virtual const char * getStatusMsgType() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getStatusMsgType](classWombat_1_1MamdaPubStatus.html#function-getstatusmsgtype)


Accessor function to the publisher status message type:

* HB, FT, LS, MH, or GP. 


### function getStatusMsgTypeFieldState

```cpp
MamdaFieldState getStatusMsgTypeFieldState() const
```


### function getPubFtMode

```cpp
virtual const char * getPubFtMode() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getPubFtMode](classWombat_1_1MamdaPubStatus.html#function-getpubftmode)


Accessor functions for fields specific to a particular message type. The applicability of each accessor function to a given message type is defined in the comments below; e.g., "getPubFtMode" is only relevant and will only be populated for Heart Beat (HB) and Fault Tolerance (FT) publisher status messages 


### function getPubMhMode

```cpp
virtual const char * getPubMhMode() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getPubMhMode](classWombat_1_1MamdaPubStatus.html#function-getpubmhmode)


### function getLineStatus

```cpp
virtual const char * getLineStatus() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getLineStatus](classWombat_1_1MamdaPubStatus.html#function-getlinestatus)


### function getStatusSeqNum

```cpp
virtual long getStatusSeqNum() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getStatusSeqNum](classWombat_1_1MamdaPubStatus.html#function-getstatusseqnum)


### function getBeginGapSeqNum

```cpp
virtual long getBeginGapSeqNum() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getBeginGapSeqNum](classWombat_1_1MamdaPubStatus.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```cpp
virtual long getEndGapSeqNum() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getEndGapSeqNum](classWombat_1_1MamdaPubStatus.html#function-getendgapseqnum)


### function getPubCacheSize

```cpp
virtual long getPubCacheSize() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getPubCacheSize](classWombat_1_1MamdaPubStatus.html#function-getpubcachesize)


### function getFreeText

```cpp
virtual const char * getFreeText() const
```


**Reimplements**: [Wombat::MamdaPubStatus::getFreeText](classWombat_1_1MamdaPubStatus.html#function-getfreetext)


### function getPubFtModeFieldState

```cpp
MamdaFieldState getPubFtModeFieldState() const
```


### function getPubMhModeFieldState

```cpp
MamdaFieldState getPubMhModeFieldState() const
```


### function getLineStatusFieldState

```cpp
MamdaFieldState getLineStatusFieldState() const
```


### function getStatusSeqNumFieldState

```cpp
MamdaFieldState getStatusSeqNumFieldState() const
```


### function getBeginGapSeqNumFieldState

```cpp
MamdaFieldState getBeginGapSeqNumFieldState() const
```


### function getEndGapSeqNumFieldState

```cpp
MamdaFieldState getEndGapSeqNumFieldState() const
```


### function getPubCacheSizeFieldState

```cpp
MamdaFieldState getPubCacheSizeFieldState() const
```


### function getFreeTextFieldState

```cpp
MamdaFieldState getFreeTextFieldState() const
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

Updated on 2023-03-31 at 15:29:58 +0100