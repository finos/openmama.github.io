---
title: Wombat::MamdaConcreteBasicEvent
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaConcreteBasicEvent



 [More...](#detailed-description)


`#include <MamdaConcreteBasicEvent.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaConcreteBasicEvent](classWombat_1_1MamdaConcreteBasicEvent.html#function-mamdaconcretebasicevent)**() |
| virtual | **[~MamdaConcreteBasicEvent](classWombat_1_1MamdaConcreteBasicEvent.html#function-~mamdaconcretebasicevent)**() |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsymbol)**() const |
| virtual const char * | **[getPartId](classWombat_1_1MamdaConcreteBasicEvent.html#function-getpartid)**() const |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaConcreteBasicEvent.html#function-geteventseqnum)**() const |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-geteventtime)**() const |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsrctime)**() const |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-getactivitytime)**() const |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-getlinetime)**() const |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsendtime)**() const |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaConcreteBasicEvent.html#function-getmsgqual)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsymbolfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-geteventseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-geteventtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsrctimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getactivitytimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getlinetimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getsendtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaConcreteBasicEvent.html#function-getmsgqualfieldstate)**() const |
| virtual void | **[setSymbol](classWombat_1_1MamdaConcreteBasicEvent.html#function-setsymbol)**(const char * value) |
| virtual void | **[setPartId](classWombat_1_1MamdaConcreteBasicEvent.html#function-setpartid)**(const char * value) |
| virtual void | **[setEventSeqNum](classWombat_1_1MamdaConcreteBasicEvent.html#function-seteventseqnum)**(mama_seqnum_t value) |
| virtual void | **[setEventTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-seteventtime)**(const MamaDateTime & value) |
| virtual void | **[setSrcTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-setsrctime)**(const MamaDateTime & value) |
| virtual void | **[setActivityTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-setactivitytime)**(const MamaDateTime & value) |
| virtual void | **[setLineTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-setlinetime)**(const MamaDateTime & value) |
| virtual void | **[setSendTime](classWombat_1_1MamdaConcreteBasicEvent.html#function-setsendtime)**(const MamaDateTime & value) |
| virtual void | **[setMsgQual](classWombat_1_1MamdaConcreteBasicEvent.html#function-setmsgqual)**(const MamaMsgQual & value) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |


## Detailed Description

```cpp
class Wombat::MamdaConcreteBasicEvent;
```


[MamdaConcreteBasicEvent](classWombat_1_1MamdaConcreteBasicEvent.html) is intended to be used to help implement concrete versions of various classes derived from [MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html). 

## Public Functions Documentation

### function MamdaConcreteBasicEvent

```cpp
MamdaConcreteBasicEvent()
```


Constructor. 


### function ~MamdaConcreteBasicEvent

```cpp
virtual ~MamdaConcreteBasicEvent()
```


Destructor. 


### function getSymbol

```cpp
virtual const char * getSymbol() const
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSymbol](classWombat_1_1MamdaBasicEvent.html#function-getsymbol)


Get the instruments string symbol.


### function getPartId

```cpp
virtual const char * getPartId() const
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [Wombat::MamdaBasicEvent::getPartId](classWombat_1_1MamdaBasicEvent.html#function-getpartid)


Get the participant identifier.


### function getEventSeqNum

```cpp
virtual mama_seqnum_t getEventSeqNum() const
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


Get the event sequence number.


### function getEventTime

```cpp
virtual const MamaDateTime & getEventTime() const
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](classWombat_1_1MamdaBasicEvent.html#function-geteventtime)


Get the event time.


### function getSrcTime

```cpp
virtual const MamaDateTime & getSrcTime() const
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](classWombat_1_1MamdaBasicEvent.html#function-getsrctime)


Get the source time.


### function getActivityTime

```cpp
virtual const MamaDateTime & getActivityTime() const
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](classWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


Get the activity time.


### function getLineTime

```cpp
virtual const MamaDateTime & getLineTime() const
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [Wombat::MamdaBasicEvent::getLineTime](classWombat_1_1MamdaBasicEvent.html#function-getlinetime)


Get the line time.


### function getSendTime

```cpp
virtual const MamaDateTime & getSendTime() const
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplements**: [Wombat::MamdaBasicEvent::getSendTime](classWombat_1_1MamdaBasicEvent.html#function-getsendtime)


Get the send time.


### function getMsgQual

```cpp
virtual const MamaMsgQual & getMsgQual() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)


Get the message qualifier.


### function getSymbolFieldState

```cpp
virtual MamdaFieldState getSymbolFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSymbolFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsymbolfieldstate)


Get the string symbol field state


### function getPartIdFieldState

```cpp
virtual MamdaFieldState getPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getPartIdFieldState](classWombat_1_1MamdaBasicEvent.html#function-getpartidfieldstate)


Get the participant identifier field state.


### function getEventSeqNumFieldState

```cpp
virtual MamdaFieldState getEventSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


Get the event sequence number field state. 


### function getEventTimeFieldState

```cpp
virtual MamdaFieldState getEventTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


Get the event time field state.


### function getSrcTimeFieldState

```cpp
virtual MamdaFieldState getSrcTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


Get the source time field state


### function getActivityTimeFieldState

```cpp
virtual MamdaFieldState getActivityTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


Get the activity time field state


### function getLineTimeFieldState

```cpp
virtual MamdaFieldState getLineTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getLineTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getlinetimefieldstate)


Get the line time of the update.


### function getSendTimeFieldState

```cpp
virtual MamdaFieldState getSendTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSendTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsendtimefieldstate)


Get the send time field state


### function getMsgQualFieldState

```cpp
virtual MamdaFieldState getMsgQualFieldState() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)


Get the message qualifier field state.


### function setSymbol

```cpp
virtual void setSymbol(
    const char * value
)
```


### function setPartId

```cpp
virtual void setPartId(
    const char * value
)
```


### function setEventSeqNum

```cpp
virtual void setEventSeqNum(
    mama_seqnum_t value
)
```


### function setEventTime

```cpp
virtual void setEventTime(
    const MamaDateTime & value
)
```


### function setSrcTime

```cpp
virtual void setSrcTime(
    const MamaDateTime & value
)
```


### function setActivityTime

```cpp
virtual void setActivityTime(
    const MamaDateTime & value
)
```


### function setLineTime

```cpp
virtual void setLineTime(
    const MamaDateTime & value
)
```


### function setSendTime

```cpp
virtual void setSendTime(
    const MamaDateTime & value
)
```


### function setMsgQual

```cpp
virtual void setMsgQual(
    const MamaMsgQual & value
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100