---
title: Wombat::MamdaPubStatus
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaPubStatus



 [More...](#detailed-description)


`#include <MamdaPubStatus.h>`

Inherited by [Wombat::MamdaPubStatusListener](classWombat_1_1MamdaPubStatusListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaPubStatus.html#function-getsymbol)**() const =0 |
| virtual const char * | **[getActivityTime](classWombat_1_1MamdaPubStatus.html#function-getactivitytime)**() const =0 |
| virtual const char * | **[getActivityDate](classWombat_1_1MamdaPubStatus.html#function-getactivitydate)**() const =0 |
| virtual const char * | **[getPubId](classWombat_1_1MamdaPubStatus.html#function-getpubid)**() const =0 |
| virtual const char * | **[getPubClass](classWombat_1_1MamdaPubStatus.html#function-getpubclass)**() const =0 |
| virtual const char * | **[getPubHostName](classWombat_1_1MamdaPubStatus.html#function-getpubhostname)**() const =0 |
| virtual const char * | **[getStatusMsgType](classWombat_1_1MamdaPubStatus.html#function-getstatusmsgtype)**() const =0 |
| virtual const char * | **[getPubFtMode](classWombat_1_1MamdaPubStatus.html#function-getpubftmode)**() const =0 |
| virtual const char * | **[getPubMhMode](classWombat_1_1MamdaPubStatus.html#function-getpubmhmode)**() const =0 |
| virtual const char * | **[getLineStatus](classWombat_1_1MamdaPubStatus.html#function-getlinestatus)**() const =0 |
| virtual long | **[getStatusSeqNum](classWombat_1_1MamdaPubStatus.html#function-getstatusseqnum)**() const =0 |
| virtual long | **[getBeginGapSeqNum](classWombat_1_1MamdaPubStatus.html#function-getbegingapseqnum)**() const =0 |
| virtual long | **[getEndGapSeqNum](classWombat_1_1MamdaPubStatus.html#function-getendgapseqnum)**() const =0 |
| virtual long | **[getPubCacheSize](classWombat_1_1MamdaPubStatus.html#function-getpubcachesize)**() const =0 |
| virtual const char * | **[getFreeText](classWombat_1_1MamdaPubStatus.html#function-getfreetext)**() const =0 |
| virtual | **[~MamdaPubStatus](classWombat_1_1MamdaPubStatus.html#function-~mamdapubstatus)**() |

## Detailed Description

```cpp
class Wombat::MamdaPubStatus;
```


[MamdaPubStatus](classWombat_1_1MamdaPubStatus.html) is an interface that provides access to the Security Status fields such as symbol announce messages. 

## Public Functions Documentation

### function getSymbol

```cpp
virtual const char * getSymbol() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getSymbol](classWombat_1_1MamdaPubStatusListener.html#function-getsymbol)


### function getActivityTime

```cpp
virtual const char * getActivityTime() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getActivityTime](classWombat_1_1MamdaPubStatusListener.html#function-getactivitytime)


### function getActivityDate

```cpp
virtual const char * getActivityDate() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getActivityDate](classWombat_1_1MamdaPubStatusListener.html#function-getactivitydate)


### function getPubId

```cpp
virtual const char * getPubId() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getPubId](classWombat_1_1MamdaPubStatusListener.html#function-getpubid)


### function getPubClass

```cpp
virtual const char * getPubClass() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getPubClass](classWombat_1_1MamdaPubStatusListener.html#function-getpubclass)


### function getPubHostName

```cpp
virtual const char * getPubHostName() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getPubHostName](classWombat_1_1MamdaPubStatusListener.html#function-getpubhostname)


### function getStatusMsgType

```cpp
virtual const char * getStatusMsgType() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getStatusMsgType](classWombat_1_1MamdaPubStatusListener.html#function-getstatusmsgtype)


### function getPubFtMode

```cpp
virtual const char * getPubFtMode() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getPubFtMode](classWombat_1_1MamdaPubStatusListener.html#function-getpubftmode)


### function getPubMhMode

```cpp
virtual const char * getPubMhMode() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getPubMhMode](classWombat_1_1MamdaPubStatusListener.html#function-getpubmhmode)


### function getLineStatus

```cpp
virtual const char * getLineStatus() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getLineStatus](classWombat_1_1MamdaPubStatusListener.html#function-getlinestatus)


### function getStatusSeqNum

```cpp
virtual long getStatusSeqNum() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getStatusSeqNum](classWombat_1_1MamdaPubStatusListener.html#function-getstatusseqnum)


### function getBeginGapSeqNum

```cpp
virtual long getBeginGapSeqNum() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getBeginGapSeqNum](classWombat_1_1MamdaPubStatusListener.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```cpp
virtual long getEndGapSeqNum() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getEndGapSeqNum](classWombat_1_1MamdaPubStatusListener.html#function-getendgapseqnum)


### function getPubCacheSize

```cpp
virtual long getPubCacheSize() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getPubCacheSize](classWombat_1_1MamdaPubStatusListener.html#function-getpubcachesize)


### function getFreeText

```cpp
virtual const char * getFreeText() const =0
```


**Reimplemented by**: [Wombat::MamdaPubStatusListener::getFreeText](classWombat_1_1MamdaPubStatusListener.html#function-getfreetext)


### function ~MamdaPubStatus

```cpp
inline virtual ~MamdaPubStatus()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100