---
title: Wombat::MamdaTradeGap
summary: MamdaTradeGap is an interface that provides access to fields related to gap in trade reporting. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeGap



[MamdaTradeGap]() is an interface that provides access to fields related to gap in trade reporting. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getBeginGapSeqNum](interfaceWombat_1_1MamdaTradeGap.html#function-getbegingapseqnum)**()<br>The starting sequence number of detected missing trades based on the trade count.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBeginGapSeqNumFieldState](interfaceWombat_1_1MamdaTradeGap.html#function-getbegingapseqnumfieldstate)**()<br>Get the field state  |
| long | **[getEndGapSeqNum](interfaceWombat_1_1MamdaTradeGap.html#function-getendgapseqnum)**()<br>The end sequence number of detected missing trades based on the trade count.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEndGapSeqNumFieldState](interfaceWombat_1_1MamdaTradeGap.html#function-getendgapseqnumfieldstate)**()<br>Get the field state  |

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

The starting sequence number of detected missing trades based on the trade count. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getBeginGapSeqNum](classWombat_1_1MamdaTradeListener.html#function-getbegingapseqnum)


### function getBeginGapSeqNumFieldState

```csharp
MamdaFieldState getBeginGapSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getBeginGapSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getbegingapseqnumfieldstate)


### function getEndGapSeqNum

```csharp
long getEndGapSeqNum()
```

The end sequence number of detected missing trades based on the trade count. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getEndGapSeqNum](classWombat_1_1MamdaTradeListener.html#function-getendgapseqnum)


### function getEndGapSeqNumFieldState

```csharp
MamdaFieldState getEndGapSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getEndGapSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getendgapseqnumfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100