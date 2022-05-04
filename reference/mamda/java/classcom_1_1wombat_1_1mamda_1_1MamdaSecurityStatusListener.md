---
title: com::wombat::mamda::MamdaSecurityStatusListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaSecurityStatusListener



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.MamdaSecurityStatusRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html), [com.wombat.mamda.MamdaSecurityStatusUpdate](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-mamdasecuritystatuslistener)**() |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-addhandler)**([MamdaSecurityStatusHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusHandler.html) handler) |
| void | **[clearCache](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-clearcache)**(MamdaSecurityStatusCache cache) |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getactivitytime)**() |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsendtime)**() |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getlinetime)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-geteventseqnum)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-geteventtime)**() |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getpartid)**() |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsymbol)**() |
| long | **[getSecurityStatus](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatus)**() |
| long | **[getSecurityStatusQualifier](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifier)**() |
| char | **[getShortSaleCircuitBreaker](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getshortsalecircuitbreaker)**() |
| short | **[getSecurityStatusEnum](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusenum)**() |
| short | **[getSecurityStatusQualifierEnum](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierenum)**() |
| String | **[getSecurityStatusStr](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusstr)**() |
| String | **[getSecurityStatusQualifierStr](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierstr)**() |
| String | **[getSecurityStatusOrigStr](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusorigstr)**() |
| String | **[getReason](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getreason)**() |
| MamaDateTime | **[getLuldTime](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getluldtime)**() |
| char | **[getLuldIndicator](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getluldindicator)**() |
| MamaPrice | **[getLuldHighLimit](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getluldhighlimit)**() |
| MamaPrice | **[getLuldLowLimit](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getluldlowlimit)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getactivitytimefieldstate)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsendtimefieldstate)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getlinetimefieldstate)**() |
| short | **[getShortSaleCircuitBreakerFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getshortsalecircuitbreakerfieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-geteventseqnumfieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-geteventtimefieldstate)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getpartidfieldstate)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsymbolfieldstate)**() |
| short | **[getSecurityStatusFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusfieldstate)**() |
| short | **[getSecurityStatusQualifierFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierfieldstate)**() |
| short | **[getSecurityStatusEnumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusenumfieldstate)**() |
| short | **[getSecurityStatusQualifierEnumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierenumfieldstate)**() |
| short | **[getSecurityStatusStrFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusstrfieldstate)**() |
| short | **[getSecurityStatusQualifierStrFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierstrfieldstate)**() |
| short | **[getSecurityStatusOrigStrFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusorigstrfieldstate)**() |
| short | **[getReasonFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getreasonfieldstate)**() |
| short | **[getLuldIndicatorFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getluldindicatorfieldstate)**() |
| short | **[getLuldTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getluldtimefieldstate)**() |
| short | **[getLuldHighLimitFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getluldhighlimitfieldstate)**() |
| short | **[getLuldLowLimitFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getluldlowlimitfieldstate)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, MamaMsg msg, short msgType) |
| String | **[getFieldAsString](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#function-getfieldasstring)**(MamaMsgField field) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| final MamdaSecurityStatusCache | **[securityStatusCache](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html#variable-securitystatuscache)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaSecurityStatusListener;
```


[MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html) is a class that specializes in handling security status updates. Developers provide their own implementation of the [MamdaSecurityStatusHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusHandler.html) interface and will be delivered notifications for security status updates.

Note: The [MamdaSecurityStatusListener](classcom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusListener.html) class caches some field values. Among other reasons, caching of these fields makes it possible to provide complete certain callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaSecurityStatusListener

```java
inline MamdaSecurityStatusListener()
```


Create a specialized trade listener. This listener handles trade reports, trade recaps, trade errors/cancels, trade corrections, and trade gap notifications. 


### function addHandler

```java
inline void addHandler(
    MamdaSecurityStatusHandler handler
)
```


Add a specialized trade handler. Currently, only one handler can (and must) be registered. 


### function clearCache

```java
inline void clearCache(
    MamdaSecurityStatusCache cache
)
```


### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getSendTime

```java
inline MamaDateTime getSendTime()
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)


Get the send time of the update.


### function getLineTime

```java
inline MamaDateTime getLineTime()
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)


Get the line time of the update.


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)


### function getPartId

```java
inline String getPartId()
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)


Get the participant identifier.


### function getSymbol

```java
inline String getSymbol()
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)


Get the string symbol for the instrument.


### function getSecurityStatus

```java
inline long getSecurityStatus()
```


**See**: [MamdaSecurityStatusUpdate::getSecurityStatus()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatus)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatus](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatus)


### function getSecurityStatusQualifier

```java
inline long getSecurityStatusQualifier()
```


**See**: [MamdaSecurityStatusUpdate::getSecurityStatusQualifier()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusqualifier)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusQualifier](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifier)


### function getShortSaleCircuitBreaker

```java
inline char getShortSaleCircuitBreaker()
```


**See**: [MamdaSecurityStatusUpdate::getShortSaleCircuitBreaker()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getshortsalecircuitbreaker)

**Return**: ShortSaleCircuitBreaker 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getShortSaleCircuitBreaker](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getshortsalecircuitbreaker)


getShortSaleCircuitBreaker Returns the ShortSaleCircuitBreaker 


### function getSecurityStatusEnum

```java
inline short getSecurityStatusEnum()
```


**See**: [MamdaSecurityStatusUpdate::getSecurityStatusEnum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusenum)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusEnum](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusenum)


### function getSecurityStatusQualifierEnum

```java
inline short getSecurityStatusQualifierEnum()
```


**See**: [MamdaSecurityStatusUpdate::getSecurityStatusQualifierEnum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusqualifierenum)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusQualifierEnum](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierenum)


### function getSecurityStatusStr

```java
inline String getSecurityStatusStr()
```


**See**: [MamdaSecurityStatusUpdate::getSecurityStatusStr()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusstr)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusStr](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusstr)


### function getSecurityStatusQualifierStr

```java
inline String getSecurityStatusQualifierStr()
```


**See**: [MamdaSecurityStatusUpdate::getSecurityStatusQualifierStr()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusqualifierstr)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusQualifierStr](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierstr)


### function getSecurityStatusOrigStr

```java
inline String getSecurityStatusOrigStr()
```


**See**: [MamdaSecurityStatusUpdate::getSecurityStatusOrigStr()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusorigstr)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusOrigStr](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusorigstr)


### function getReason

```java
inline String getReason()
```


**See**: [MamdaSecurityStatusUpdate::getReason()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getreason)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getReason](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getreason)


### function getLuldTime

```java
inline MamaDateTime getLuldTime()
```


**See**: [MamdaSecurityStatusUpdate::getLuldTime()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getluldtime)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getLuldTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getluldtime)


### function getLuldIndicator

```java
inline char getLuldIndicator()
```


**See**: [MamdaSecurityStatusUpdate::getLuldIndicator()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getluldindicator)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getLuldIndicator](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getluldindicator)


### function getLuldHighLimit

```java
inline MamaPrice getLuldHighLimit()
```


**See**: [MamdaSecurityStatusUpdate::getLuldHighLimit()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getluldhighlimit)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getLuldHighLimit](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getluldhighlimit)


### function getLuldLowLimit

```java
inline MamaPrice getLuldLowLimit()
```


**See**: [MamdaSecurityStatusUpdate::getLuldLowLimit()](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusUpdate.html#function-getluldlowlimit)

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getLuldLowLimit](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getluldlowlimit)


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


return Source time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


return Activity time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getSendTimeFieldState

```java
inline short getSendTimeFieldState()
```


**Return**: send time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


### function getLineTimeFieldState

```java
inline short getLineTimeFieldState()
```


**Return**: line time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


### function getShortSaleCircuitBreakerFieldState

```java
inline short getShortSaleCircuitBreakerFieldState()
```


**Return**: Returns the FieldState, always MODIFIED. 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getShortSaleCircuitBreakerFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


return source sequence number Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


return event time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getPartIdFieldState

```java
inline short getPartIdFieldState()
```


**Return**: participant ID Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


### function getSymbolFieldState

```java
inline short getSymbolFieldState()
```


**Return**: symbol Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


### function getSecurityStatusFieldState

```java
inline short getSecurityStatusFieldState()
```


**Return**: the security status Field State 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusfieldstate)


### function getSecurityStatusQualifierFieldState

```java
inline short getSecurityStatusQualifierFieldState()
```


**Return**: the security status Field State 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusQualifierFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierfieldstate)


### function getSecurityStatusEnumFieldState

```java
inline short getSecurityStatusEnumFieldState()
```


**Return**: the security status Field State 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusEnumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusenumfieldstate)


### function getSecurityStatusQualifierEnumFieldState

```java
inline short getSecurityStatusQualifierEnumFieldState()
```


**Return**: the security status qualifier enum Field State 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusQualifierEnumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierenumfieldstate)


### function getSecurityStatusStrFieldState

```java
inline short getSecurityStatusStrFieldState()
```


**Return**: the security status string Field State 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusStrFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusstrfieldstate)


### function getSecurityStatusQualifierStrFieldState

```java
inline short getSecurityStatusQualifierStrFieldState()
```


**Return**: the security status qualifier string Field State 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusQualifierStrFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusqualifierstrfieldstate)


### function getSecurityStatusOrigStrFieldState

```java
inline short getSecurityStatusOrigStrFieldState()
```


**Return**: the security status orig string Field State 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getSecurityStatusOrigStrFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getsecuritystatusorigstrfieldstate)


### function getReasonFieldState

```java
inline short getReasonFieldState()
```


**Return**: the reason Field State 

**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getReasonFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getreasonfieldstate)


### function getLuldIndicatorFieldState

```java
inline short getLuldIndicatorFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getLuldIndicatorFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getluldindicatorfieldstate)


return the Limit Up Limit Down Indicator Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getLuldTimeFieldState

```java
inline short getLuldTimeFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getLuldTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getluldtimefieldstate)


return the Limit Up Limit Down Time Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getLuldHighLimitFieldState

```java
inline short getLuldHighLimitFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getLuldHighLimitFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getluldhighlimitfieldstate)


return the Limit Up Limit Down High Limit Field State MODIFIED (2) value indicates the fied was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function getLuldLowLimitFieldState

```java
inline short getLuldLowLimitFieldState()
```


**Reimplements**: [com::wombat::mamda::MamdaSecurityStatusRecap::getLuldLowLimitFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaSecurityStatusRecap.html#function-getluldlowlimitfieldstate)


return the Limit Up Limit Down Low Limit Field State MODIFIED (2) value indicates the field was updated in last tick NOT MODIFIED (1) value indicate that there was no change in the last tick NOT_INITIALISED (0) value indicates that the field has never been updated 


### function onMsg

```java
inline void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    short msgType
)
```


**Reimplements**: [com::wombat::mamda::MamdaMsgListener::onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


### function getFieldAsString

```java
inline String getFieldAsString(
    MamaMsgField field
)
```


## Protected Attributes Documentation

### variable securityStatusCache

```java
final MamdaSecurityStatusCache securityStatusCache =
                                       new MamdaSecurityStatusCache ();
```


-------------------------------

Updated on 2022-05-04 at 07:54:12 +0100