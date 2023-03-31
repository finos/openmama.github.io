---
title: Wombat::MamdaQuoteGap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaQuoteGap



 [More...](#detailed-description)


`#include <MamdaQuoteGap.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaQuoteListener](classWombat_1_1MamdaQuoteListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual mama_seqnum_t | **[getBeginGapSeqNum](classWombat_1_1MamdaQuoteGap.html#function-getbegingapseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBeginGapSeqNumFieldState](classWombat_1_1MamdaQuoteGap.html#function-getbegingapseqnumfieldstate)**() const =0 |
| virtual mama_seqnum_t | **[getEndGapSeqNum](classWombat_1_1MamdaQuoteGap.html#function-getendgapseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEndGapSeqNumFieldState](classWombat_1_1MamdaQuoteGap.html#function-getendgapseqnumfieldstate)**() const =0 |
| virtual | **[~MamdaQuoteGap](classWombat_1_1MamdaQuoteGap.html#function-~mamdaquotegap)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaBasicEvent.html#function-getsymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsymbolfieldstate)**() const =0 |
| virtual const char * | **[getPartId](classWombat_1_1MamdaBasicEvent.html#function-getpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaBasicEvent.html#function-getpartidfieldstate)**() const =0 |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaBasicEvent.html#function-getsrctime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaBasicEvent.html#function-getlinetime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getlinetimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaBasicEvent.html#function-getsendtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsendtimefieldstate)**() const =0 |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)**() const =0 |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |


## Detailed Description

```cpp
class Wombat::MamdaQuoteGap;
```


[MamdaQuoteGap](classWombat_1_1MamdaQuoteGap.html) is an interface that provides access to quote gap related fields. 

## Public Functions Documentation

### function getBeginGapSeqNum

```cpp
virtual mama_seqnum_t getBeginGapSeqNum() const =0
```


**Return**: The start gap sequence number. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBeginGapSeqNum](classWombat_1_1MamdaQuoteListener.html#function-getbegingapseqnum)


The starting sequence number of detected missing quotes based on the quote count.


### function getBeginGapSeqNumFieldState

```cpp
virtual MamdaFieldState getBeginGapSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getBeginGapSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-getbegingapseqnumfieldstate)


Get the quote bid yield fieldState


### function getEndGapSeqNum

```cpp
virtual mama_seqnum_t getEndGapSeqNum() const =0
```


**Return**: The end gap sequence number. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getEndGapSeqNum](classWombat_1_1MamdaQuoteListener.html#function-getendgapseqnum)


The end sequence number of detected missing quotes based on the quote count.


### function getEndGapSeqNumFieldState

```cpp
virtual MamdaFieldState getEndGapSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaQuoteListener::getEndGapSeqNumFieldState](classWombat_1_1MamdaQuoteListener.html#function-getendgapseqnumfieldstate)


Get the quote bid yield fieldState


### function ~MamdaQuoteGap

```cpp
inline virtual ~MamdaQuoteGap()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100