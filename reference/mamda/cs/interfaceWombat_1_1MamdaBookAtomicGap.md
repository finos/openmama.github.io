---
title: Wombat::MamdaBookAtomicGap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBookAtomicGap



 [More...](#detailed-description)

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getBeginGapSeqNum](interfaceWombat_1_1MamdaBookAtomicGap.html#function-getbegingapseqnum)**()<br>Beginning sequence number in a detected gap event.  |
| long | **[getEndGapSeqNum](interfaceWombat_1_1MamdaBookAtomicGap.html#function-getendgapseqnum)**()<br>Ending sequence number in a detected gap event.  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)**()<br>Returns the source time.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| long | **[getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |


## Detailed Description

```csharp
class Wombat::MamdaBookAtomicGap;
```


[MamdaBookAtomicGap](interfaceWombat_1_1MamdaBookAtomicGap.html) is an interface that provides access to order book atomic update gap related fields. 

## Public Functions Documentation

### function getBeginGapSeqNum

```csharp
long getBeginGapSeqNum()
```

Beginning sequence number in a detected gap event. 

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getBeginGapSeqNum](classWombat_1_1MamdaBookAtomicListener.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```csharp
long getEndGapSeqNum()
```

Ending sequence number in a detected gap event. 

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getEndGapSeqNum](classWombat_1_1MamdaBookAtomicListener.html#function-getendgapseqnum)


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100