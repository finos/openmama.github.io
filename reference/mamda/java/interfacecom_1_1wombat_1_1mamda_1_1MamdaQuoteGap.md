---
title: com::wombat::mamda::MamdaQuoteGap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaQuoteGap



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.MamdaQuoteListener](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getBeginGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html#function-getbegingapseqnum)**() |
| short | **[getBeginGapSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html#function-getbegingapseqnumfieldstate)**() |
| long | **[getEndGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html#function-getendgapseqnum)**() |
| short | **[getEndGapSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html#function-getendgapseqnumfieldstate)**() |

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
class com::wombat::mamda::MamdaQuoteGap;
```


[MamdaQuoteGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaQuoteGap.html) is an interface that provides access to fields related to gap in quote reporting. 

## Public Functions Documentation

### function getBeginGapSeqNum

```java
long getBeginGapSeqNum()
```


**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getBeginGapSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbegingapseqnum)


The starting sequence number of detected missing quotes based on the quote count. 


### function getBeginGapSeqNumFieldState

```java
short getBeginGapSeqNumFieldState()
```


**Return**: the begin gap seq num Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getBeginGapSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getbegingapseqnumfieldstate)


### function getEndGapSeqNum

```java
long getEndGapSeqNum()
```


**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getEndGapSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getendgapseqnum)


The end sequence number of detected missing quotes based on the quote count. 


### function getEndGapSeqNumFieldState

```java
short getEndGapSeqNumFieldState()
```


**Return**: the end gap seq num Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaQuoteListener::getEndGapSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaQuoteListener.html#function-getendgapseqnumfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100