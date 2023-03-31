---
title: com::wombat::mamda::MamdaTradeGap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaTradeGap



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getBeginGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getbegingapseqnum)**() |
| short | **[getBeginGapSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getbegingapseqnumfieldstate)**() |
| long | **[getEndGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getendgapseqnum)**() |
| short | **[getEndGapSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getendgapseqnumfieldstate)**() |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() |
| long | **[getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() |
| MamaDateTime | **[getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() |


## Detailed Description

```java
class com::wombat::mamda::MamdaTradeGap;
```


[MamdaTradeGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html) is an interface that provides access to fields related to gap in trade reporting. 

## Public Functions Documentation

### function getBeginGapSeqNum

```java
long getBeginGapSeqNum()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getBeginGapSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getbegingapseqnum)


The starting sequence number of detected missing trades based on the trade count. 


### function getBeginGapSeqNumFieldState

```java
short getBeginGapSeqNumFieldState()
```


**Return**: Returns the BeginGapSeqNum Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getBeginGapSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getbegingapseqnumfieldstate)


### function getEndGapSeqNum

```java
long getEndGapSeqNum()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getEndGapSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getendgapseqnum)


The end sequence number of detected missing trades based on the trade count. 


### function getEndGapSeqNumFieldState

```java
short getEndGapSeqNumFieldState()
```


**Return**: Returns the EndGapSeqNum Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getEndGapSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getendgapseqnumfieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:35 +0100