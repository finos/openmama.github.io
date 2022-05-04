---
title: Wombat::MamdaOrderBookGap
summary: MamdaOrderBookGap is an interface that provides access to fields related to gap in orderBook reporting. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderBookGap



[MamdaOrderBookGap]() is an interface that provides access to fields related to gap in orderBook reporting. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaOrderBookListener](classWombat_1_1MamdaOrderBookListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getBeginGapSeqNum](interfaceWombat_1_1MamdaOrderBookGap.html#function-getbegingapseqnum)**()<br>Beginning sequence number in a detected gap event.  |
| long | **[getEndGapSeqNum](interfaceWombat_1_1MamdaOrderBookGap.html#function-getendgapseqnum)**()<br>Ending sequence number in a detected gap event.  |

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


## Public Functions Documentation

### function getBeginGapSeqNum

```csharp
long getBeginGapSeqNum()
```

Beginning sequence number in a detected gap event. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaOrderBookListener::getBeginGapSeqNum](classWombat_1_1MamdaOrderBookListener.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```csharp
long getEndGapSeqNum()
```

Ending sequence number in a detected gap event. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaOrderBookListener::getEndGapSeqNum](classWombat_1_1MamdaOrderBookListener.html#function-getendgapseqnum)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100