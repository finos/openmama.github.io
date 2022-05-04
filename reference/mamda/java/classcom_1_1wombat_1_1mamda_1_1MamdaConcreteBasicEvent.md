---
title: com::wombat::mamda::MamdaConcreteBasicEvent
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaConcreteBasicEvent



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.orderbook.MamdaOrderBookConcreteClear](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteClear.html), [com.wombat.mamda.orderbook.MamdaOrderBookConcreteRecap](classcom_1_1wombat_1_1mamda_1_1orderbook_1_1MamdaOrderBookConcreteRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getsrctimefieldstate)**() |
| void | **[setSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-setsrctime)**(MamaDateTime srcTime) |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-getactivitytimefieldstate)**() |
| void | **[setActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-setactivitytime)**(MamaDateTime activityTime) |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventtimefieldstate)**() |
| void | **[setEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-seteventtime)**(MamaDateTime eventTime) |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-geteventseqnumfieldstate)**() |
| void | **[setEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html#function-seteventseqnum)**(long eventSeqNum) |

## Detailed Description

```java
class com::wombat::mamda::MamdaConcreteBasicEvent;
```


[MamdaConcreteBasicEvent](classcom_1_1wombat_1_1mamda_1_1MamdaConcreteBasicEvent.html) is intended to be used to help implement concrete versions of various classes derived from [MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html). 

## Public Functions Documentation

### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


**Return**: Returns mSrcTime. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


**Return**: Returns mSrcTime. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


### function setSrcTime

```java
inline void setSrcTime(
    MamaDateTime srcTime
)
```


**Parameters**: 

  * **srcTime** The mSrcTime to set. 


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


**Return**: Returns mActivityTime. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


**Return**: Returns mActivityTime Field State. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


### function setActivityTime

```java
inline void setActivityTime(
    MamaDateTime activityTime
)
```


**Parameters**: 

  * **activityTime** The mActivityTime to set. 


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**Return**: Returns mEventTime. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**Return**: Returns mEventTime Field State. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function setEventTime

```java
inline void setEventTime(
    MamaDateTime eventTime
)
```


**Parameters**: 

  * **eventTime** The mEventTime to set. 


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**Return**: Returns mEventSeqNum. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**Return**: Returns mEventSeqNum Field State. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


### function setEventSeqNum

```java
inline void setEventSeqNum(
    long eventSeqNum
)
```


**Parameters**: 

  * **eventSeqNum** The mEventSeqNum to set. 


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100