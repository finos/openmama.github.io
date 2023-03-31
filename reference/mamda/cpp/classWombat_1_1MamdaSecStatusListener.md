---
title: Wombat::MamdaSecStatusListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecStatusListener



 [More...](#detailed-description)


`#include <MamdaSecStatusListener.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html), [Wombat::MamdaSecStatus](classWombat_1_1MamdaSecStatus.html), [Wombat::MamdaSecStatusRecap](classWombat_1_1MamdaSecStatusRecap.html), [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html), [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html#function-mamdasecstatuslistener)**() |
| virtual | **[~MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html#function-~mamdasecstatuslistener)**() |
| void | **[addHandler](classWombat_1_1MamdaSecStatusListener.html#function-addhandler)**([MamdaSecStatusHandler](classWombat_1_1MamdaSecStatusHandler.html) * handler) |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaSecStatusListener.html#function-getsymbol)**() const |
| virtual const char * | **[getPartId](classWombat_1_1MamdaSecStatusListener.html#function-getpartid)**() const |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaSecStatusListener.html#function-getsrctime)**() const |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaSecStatusListener.html#function-getactivitytime)**() const |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaSecStatusListener.html#function-getlinetime)**() const |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaSecStatusListener.html#function-getsendtime)**() const |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaSecStatusListener.html#function-getmsgqual)**() const |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaSecStatusListener.html#function-geteventtime)**() const |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaSecStatusListener.html#function-geteventseqnum)**() const |
| virtual const MamaDateTime & | **[getLuldTime](classWombat_1_1MamdaSecStatusListener.html#function-getluldtime)**() const |
| virtual const char | **[getLuldIndicator](classWombat_1_1MamdaSecStatusListener.html#function-getluldindicator)**() const |
| virtual const MamaPrice & | **[getLuldHighLimit](classWombat_1_1MamdaSecStatusListener.html#function-getluldhighlimit)**() const |
| virtual const MamaPrice & | **[getLuldLowLimit](classWombat_1_1MamdaSecStatusListener.html#function-getluldlowlimit)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsymbolfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsrctimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getactivitytimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getlinetimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsendtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getmsgqualfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-geteventtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaSecStatusListener.html#function-geteventseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldIndicatorFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getluldindicatorfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getluldtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldHighLimitFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getluldhighlimitfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldLowLimitFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getluldlowlimitfieldstate)**() const |
| virtual const char * | **[getIssueSymbol](classWombat_1_1MamdaSecStatusListener.html#function-getissuesymbol)**() const |
| virtual const char * | **[getReason](classWombat_1_1MamdaSecStatusListener.html#function-getreason)**() const |
| virtual char | **[getSecurityAction](classWombat_1_1MamdaSecStatusListener.html#function-getsecurityaction)**() const |
| virtual char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaSecStatusListener.html#function-getshortsalecircuitbreaker)**() const |
| virtual const char * | **[getSecurityType](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritytype)**() const |
| virtual const char * | **[getSecurityStatus](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatus)**() const |
| virtual const char * | **[getSecurityStatusQual](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqual)**() const |
| virtual const char * | **[getSecurityStatusNative](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusnative)**() const |
| virtual const char * | **[getSecurityStatusStr](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusstr)**() const |
| virtual const char * | **[getSecurityStatusQualStr](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualstr)**() const |
| virtual [MamdaSecurityStatus](namespaceWombat.html#enum-mamdasecuritystatus) | **[getSecurityStatusEnum](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusenum)**() const |
| virtual [MamdaSecurityStatusQual](namespaceWombat.html#enum-mamdasecuritystatusqual) | **[getSecurityStatusQualifierEnum](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualifierenum)**() const |
| virtual const char * | **[getFreeText](classWombat_1_1MamdaSecStatusListener.html#function-getfreetext)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIssueSymbolFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getissuesymbolfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getReasonFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getreasonfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityActionFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecurityactionfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getshortsalecircuitbreakerfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityTypeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritytypefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusNativeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusnativefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusStrFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusstrfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualStrFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualstrfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusEnumFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusenumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierEnumFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualifierenumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getFreeTextFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getfreetextfieldstate)**() const |
| virtual void | **[onMsg](classWombat_1_1MamdaSecStatusListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

**Public Functions inherited from [Wombat::MamdaSecStatus](classWombat_1_1MamdaSecStatus.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaSecStatus](classWombat_1_1MamdaSecStatus.html#function-~mamdasecstatus)**() |

**Public Functions inherited from [Wombat::MamdaSecStatusRecap](classWombat_1_1MamdaSecStatusRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaSecStatusRecap](classWombat_1_1MamdaSecStatusRecap.html#function-~mamdasecstatusrecap)**() |

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |


## Detailed Description

```cpp
class Wombat::MamdaSecStatusListener;
```


MamdaSecurityStatusListener is a class that specializes in handling security status updates. Developers provide their own implementation of the MamdaSecurityStatusHandler interface and will be delivered notifications for security status updates.

Note: The MamdaSecurityStatusListener class caches some field values. Among other reasons, caching of these fields makes it possible to provide complete certain callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields.

[MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html) should initialize the [MamdaSecStatusFields](classWombat_1_1MamdaSecStatusFields.html) class prior to receiving the first message by calling MamdaSecStatusFields::setDictionary() with a valid dictionary object which contains SecStatus related fields. 

## Public Functions Documentation

### function MamdaSecStatusListener

```cpp
MamdaSecStatusListener()
```


Create a specialized security status listener. 


### function ~MamdaSecStatusListener

```cpp
virtual ~MamdaSecStatusListener()
```


### function addHandler

```cpp
void addHandler(
    MamdaSecStatusHandler * handler
)
```


Add a specialized security status handler. 


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


### function getEventTime

```cpp
virtual const MamaDateTime & getEventTime() const
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](classWombat_1_1MamdaBasicEvent.html#function-geteventtime)


Get the event time.


### function getEventSeqNum

```cpp
virtual mama_seqnum_t getEventSeqNum() const
```


**Return**: Source sequence number. The exchange generated sequence number. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


Get the event sequence number.


### function getLuldTime

```cpp
virtual const MamaDateTime & getLuldTime() const
```


**Return**: Limit Up Limit Down Time 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getLuldTime](classWombat_1_1MamdaSecStatusRecap.html#function-getluldtime)


Limit Up Limit Down Time


### function getLuldIndicator

```cpp
virtual const char getLuldIndicator() const
```


**Return**: Limit Up Limit Down Indicator 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getLuldIndicator](classWombat_1_1MamdaSecStatusRecap.html#function-getluldindicator)


Limit Up Limit Down Indicator


### function getLuldHighLimit

```cpp
virtual const MamaPrice & getLuldHighLimit() const
```


**Return**: Limit Up Limit Down High Limit 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getLuldHighLimit](classWombat_1_1MamdaSecStatusRecap.html#function-getluldhighlimit)


Limit Up Limit Down High Limit


### function getLuldLowLimit

```cpp
virtual const MamaPrice & getLuldLowLimit() const
```


**Return**: Limit Up Limit Down Low Limit 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getLuldLowLimit](classWombat_1_1MamdaSecStatusRecap.html#function-getluldlowlimit)


Limit Up Limit Down Low Limit


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


### function getEventTimeFieldState

```cpp
virtual MamdaFieldState getEventTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


Get the event time field state.


### function getEventSeqNumFieldState

```cpp
virtual MamdaFieldState getEventSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


Get the event sequence number field state. 


### function getLuldIndicatorFieldState

```cpp
virtual MamdaFieldState getLuldIndicatorFieldState() const
```


**Return**: LULD Indicator field state. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getLuldIndicatorFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getluldindicatorfieldstate)


### function getLuldTimeFieldState

```cpp
virtual MamdaFieldState getLuldTimeFieldState() const
```


**Return**: LULD Time field state. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getLuldTimeFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getluldtimefieldstate)


### function getLuldHighLimitFieldState

```cpp
virtual MamdaFieldState getLuldHighLimitFieldState() const
```


**Return**: LULD High Limit field state. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getLuldHighLimitFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getluldhighlimitfieldstate)


### function getLuldLowLimitFieldState

```cpp
virtual MamdaFieldState getLuldLowLimitFieldState() const
```


**Return**: LULD Low Limit field state. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getLuldLowLimitFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getluldlowlimitfieldstate)


### function getIssueSymbol

```cpp
virtual const char * getIssueSymbol() const
```


**Return**: The symbol name. 

**Reimplements**: [Wombat::MamdaSecStatus::getIssueSymbol](classWombat_1_1MamdaSecStatus.html#function-getissuesymbol)


The "name" of the instrument (e.g. IBM, CSCO, MSFT.INCA, etc.).


### function getReason

```cpp
virtual const char * getReason() const
```


**See**: [getSecurityStatusQual()](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqual)

**Return**: The reason for the current status. 

**Reimplements**: [Wombat::MamdaSecStatus::getReason](classWombat_1_1MamdaSecStatus.html#function-getreason)


Unnormalized (feed-specific) reason associated with the current status of the security (e.g. halted, delayed, etc.). For normalized field, see `getSecurityStatusQual`.


### function getSecurityAction

```cpp
virtual char getSecurityAction() const
```


**Return**: The security action. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityAction](classWombat_1_1MamdaSecStatus.html#function-getsecurityaction)


Action related to this security. 

* A : Add this new security. 


### function getShortSaleCircuitBreaker

```cpp
virtual char getShortSaleCircuitBreaker() const
```


**See**: [MamdaSecStatusRecap::getShortSaleCircuitBreaker()](classWombat_1_1MamdaSecStatusRecap.html#function-getshortsalecircuitbreaker)

**Reimplements**: [Wombat::MamdaSecStatus::getShortSaleCircuitBreaker](classWombat_1_1MamdaSecStatus.html#function-getshortsalecircuitbreaker)


### function getSecurityType

```cpp
virtual const char * getSecurityType() const
```


**Return**: The security type. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityType](classWombat_1_1MamdaSecStatus.html#function-getsecuritytype)


The security type. 

* Equity Option 
* NEO Option : NEO (Index) Option 
* ICS Option : ICS (Foreign Currency) Option 


### function getSecurityStatus

```cpp
virtual const char * getSecurityStatus() const
```


**Return**: The normalized security status. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityStatus](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatus)


NYSE Technologies normalised security status. See getSecurityStatusOrig for the original exchange value.



* None : No security status is known/available for this security. 
* Normal : Security is open for normal quoting and trading 
* Closed : Security is closed (usually before or after market open) 
* Halted : Security has been halted by exchange. 
* NotExist : Security does not currently exist in cache (but it might in the future). 
* Deleted : Security has been deleted (e.g., merger, expiration, etc.)  


### function getSecurityStatusQual

```cpp
virtual const char * getSecurityStatusQual() const
```


**Return**: The normalized security status qualifier. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityStatusQual](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusqual)


Security status qualifier.



* None : No security status qualifier is known/available for this security. 
* Excused : An Excused withdrawal from the market. 
* Withdrawn : Non-excused withdrawal by the market maker. 
* Suspended : Suspended Trading 
* Resume : Resume trading/quoting after halt. 
* QuoteResume : Resume quoting after halt. NASDAQ distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* TradeResume : Resume trading after halt. NASDAQ distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* ResumeTime : When the security is expected to resume trading. 
* MktImbBuy : Market Imbalance - Buy. A 50,000 share or more excess of market orders to buy over market orders to sell as of 9:00am on expiration days. A MktImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* MktImbSell : Market Imbalance - Sell. A 50,000 share or more excess of market orders to sell over market orders to buy as of 9:00am on expiration days. A MktImbSell implies an ordinary order imbalance (OrdImbSell). 
* NoMktImb : No Market Imbalance. Indicates that the imbalance of market orders for a security is less than 50,000 shares as of 9:00am on expiration days. 
* MocImbBuy : Market On Close Imbalance - Buy. An excess of 50,000 share or more of MOC orders to buy over MOC orders to sell (including MOC sell plus and MOC sell short orders). A MocImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* MocImbSell : Market On Close Imbalance - Sell. An excess of 50,000 share or more of MOC orders to sell (not including MOC sell short and MOC sell plus orders) over orders to buy (including MOC orders to buy minus). A MocImbSell implies an ordinary order imbalance (OrdImbSell). 
* NoMocImb : No Market On Close (MOC) Imbalance. The difference between the number of shares to buy MOC and the number of shares to sell MOC is less than 50,000. 
* OrderImb : Non-regulatory condition: a significant imbalance of buy or sell orders exists for this security. 
* OrderInf : Non-regulatory condition where there is a significant influx of orders. 
* OrderImbBuy : Non-regulatory condition: a significant imbalance of buy orders exists for this security. 
* OrderImbSell : Non-regulatory condition: a significant imbalance of sell orders exists for this security. 
* OrderImbNone : The earlier imbalance of buy or sell orders no longer exists for this security. It also might mean that there is no imbalance to begin with. 
* RangeInd : Trading Range Indication. Not an Opening Delay or Trading Halted condition: this condition is used prior to the opening of a security to denote a probable trading range (bid and offer prices, no sizes). 
* ItsPreOpen : ITS pre-opening indication. 
* Reserved : Reserved (e.g., CME). 
* Frozen : Frozen (e.g., CME). 
* PreOpen : Preopening state (e.g., CME). 
* AddInfo : Additional Information. For a security that is Opening Delayed or Trading Halted, if inadequate information is disclosed during a "news dissemination or news pending" Opening Delay or Trading Halt, the Opening Delay or Trading Halt reason could be subsequently reported as "Additional Information." 
* OpenDelay : Security's opening has been delayed by exchange. This value is usually followed by another value specifying the reason for the opening delay. 
* NoOpenNoResume : Indicates that trading halt or opening delay will be in effect for the remainder of the trading day. 
* PriceInd : An approximation of what a security's opening or re-opening price range (bid and offer prices, no sizes) will be when trading resumes after a delayed opening or after a trading halt. 
* Equipment : Non-regulatory condition: the ability to trade this security by a participant is temporarily inhibited due to a systems, equipment or communications facility problem, or for other technical reasons. 
* Filings : Not current in regulatory filings. 
* News : News pending. Denotes a regulatory trading halt due to an expected news announcement which influence the security. An Opening Delay or Trading Halt may be continued once the news has been disseminated. 
* NewsDissem : News Dissemination. Denotes a regulatory trading halt when relevant news influencing the security is being disseminated. Trading is suspended until the primary market determines that an adequate publication or disclosure of information has occurred. 
* Listing : Listing Noncompliance. 
* Operation : Operational Halt 
* Info : Information Requested. Regulatory condition: more disclosure of information is requested by the exchange for this security. 
* SEC : SEC Suspension. 
* Times : News Resumption Times. 
* Other : Other Regulatory Halt. 
* Related : Related Security; In View Of Common. Non-regulatory condition: the halt or opening delay in this security is due to its relationship with another security. This condition also applies to non-common associated securities (e.g. warrants, rights, preferreds, classes, etc.) in view of the common stock. 
* IPO : Upcoming IPO issue not yet trading. 


### function getSecurityStatusNative

```cpp
virtual const char * getSecurityStatusNative() const
```


**See**: [getSecurityStatus()](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatus)

**Return**: The exchange provided security status. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityStatusNative](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusnative)


Original "security status" field sent by the feed. NYSE Technologies feed handlers also send normalized security status.


### function getSecurityStatusStr

```cpp
virtual const char * getSecurityStatusStr() const
```


**Return**: The normalized security status. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getSecurityStatusStr](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusstr)


NYSE Technologies normalised security status. See getSecurityStatusOrig for the original exchange value.



* None : No security status is known/available for this security. 
* Normal : Security is open for normal quoting and trading 
* Closed : Security is closed (usually before or after market open) 
* Halted : Security has been halted by exchange. 
* NotExist : Security does not currently exist in cache (but it might in the future). 
* Deleted : Security has been deleted (e.g., merger, expiration, etc.)  
* Auction : Security has done into auction. 
* Crossing : Security crossing 
* Unknown : Security status is currently unknown. 


### function getSecurityStatusQualStr

```cpp
virtual const char * getSecurityStatusQualStr() const
```


**Return**: The normalized security status qualifier. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getSecurityStatusQualStr](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualstr)


Security status qualifier.



* None : No security status qualifier is known/available for this security. 
* Excused : An Excused withdrawl from the market. 
* Withdrawn : Non-excused withdrawl by the market maker. 
* Suspended : Suspended Trading 
* Resume : Resume trading/quoting after halt. 
* QuoteResume : Resume quoting after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* TradeResume : Resume trading after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* ResumeTime : When the security is expected to resume trading. 
* MktImbBuy : Market Imbalance - Buy. A 50,000 share or more excess of market orders to buy over market orders to sell as of 9:00am on expiration days. A MktImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* MktImbSell : Market Imbalance - Sell. A 50,000 share or more excess of market orders to sell over market orders to buy as of 9:00am on expiration days. A MktImbSell implies an ordinary order imbalance (OrdImbSell). 
* NoMktImb : No Market Imbalance. Indicates that the imbalance of market orders for a security is less than 50,000 shares as of 9:00am on expiration days. 
* MocImbBuy : Market On Close Imbalance - Buy. An excess of 50,000 share or more of MOC orders to buy over MOC orders to sell (including MOC sell plus and MOC sell short orders). A MocImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* MocImbSell : Market On Close Imbalance - Sell. An excess of 50,000 share or more of MOC orders to sell (not including MOC sell short and MOC sell plus orders) over orders to buy (including MOC orders to buy minus). A MocImbSell implies an ordinary order imbalance (OrdImbSell). 
* NoMocImb : No Market On Close (MOC) Imbalance. The difference between the number of shares to buy MOC and the number of shares to sell MOC is less than 50,000. 
* OrderImb : Non-regulatory condition: a significant imbalance of buy or sell orders exists for this security. 
* OrderInf : Non-regulatory condition where there is a significant influx of orders. 
* OrderImbBuy : Non-regulatory condition: a significant imbalance of buy orders exists for this security. 
* OrderImbSell : Non-regulatory condition: a significant imbalance of sell orders exists for this security. 
* OrderImbNone : The earlier imbalance of buy or sell orders no longer exists for this security. It also might mean that there is no imbalance to begin with. 
* RangeInd : Trading Range Indication. Not an Opening Delay or Trading Halted condition: this condition is used prior to the opening of a security to denote a probable trading range (bid and offer prices, no sizes). 
* ItsPreOpen : ITS pre-opening indication. 
* Reserved : Reserved (e.g., CME). 
* Frozen : Frozen (e.g., CME). 
* PreOpen : Preopening state (e.g., CME). 
* AddInfo : Additional Information. For a security that is Opening Delayed or Trading Halted, if inadequate information is disclosed during a "news dissemination or news pending" Opening Delay or Trading Halt, the Opening Delay or Trading Halt reason could be subsequently reported as "Additional Information." 
* OpenDelay : Security's opening has been delayed by exchange. This value is usually followed by another value specifying the reason for the opening delay. 
* NoOpenNoResume : Indicates that trading halt or opening delay will be in effect for the remainder of the trading day. 
* PriceInd : An approximation of what a security's opening or re-opening price range (bid and offer prices, no sizes) will be when trading resumes after a delayed opening or after a trading halt. 
* Equipment : Non-regulatory condition: the ability to trade this security by a participant is temporarily inhibited due to a systems, equipment or communications facility problem, or for other technical reasons. 
* Filings : Not current in regulatory filings. 
* News : News pending. Denotes a regulatory trading halt due to an expected news announcement which influence the security. An Opening Delay or Trading Halt may be continued once the news has been disseminated. 
* NewsDissem : News Dissemination. Denotes a regulatory trading halt when relevant news influencing the security is being disseminated. Trading is suspended until the primary market determines that an adequate publication or disclosure of information has occurred. 
* Listing : Listing Noncompliance. 
* Operation : Operational Halt 
* Info : Information Requested. Regulatory condition: more disclosure of information is requested by the exchange for this security. 
* SEC : SEC Suspension. 
* Times : News Resumption Times. 
* Other : Other Regulatory Halt. 
* Related : Related Security; In View Of Common. Non-regulatory condition: the halt or opening delay in this security is due to its relationship with another security. This condition also applies to non-common associated securities (e.g. warrants, rights, preferreds, classes, etc.) in view of the common stock. 
* IPO : Upcoming IPO issue not yet trading. 


### function getSecurityStatusEnum

```cpp
virtual MamdaSecurityStatus getSecurityStatusEnum() const
```


**Return**: The normalized security status as an enumerated value. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getSecurityStatusEnum](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusenum)


NYSE Technologies normalised security status. See getSecurityStatusOrig for the original exchange value.



* SECURITY_STATUS_NONE : No security status is known/available for this security. 
* SECURITY_STATUS_NORMAL : Security is open for normal quoting and trading 
* SECURITY_STATUS_CLOSED : Security is closed (usually before or after market open) 
* SECURITY_STATUS_HALTED : Security has been halted by exchange. 
* SECURITY_STATUS_NOT_EXIST : Security does not currently exist in cache (but it might in the future). 
* SECURITY_STATUS_DELETED : Security has been deleted (e.g., merger, expiration, etc.)  
* SECURITY_STATUS_AUCTION : Security has gone into auction. 
* SECURITY_STATUS_CROSSING : Security crossing 
* SECURITY_STATUS_UNKNOWN : Security status is currently unknown. 


### function getSecurityStatusQualifierEnum

```cpp
virtual MamdaSecurityStatusQual getSecurityStatusQualifierEnum() const
```


**Return**: The normalized security status qualifier. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getSecurityStatusQualifierEnum](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualifierenum)


Security status qualifier.



* SECURITY_STATUS_QUAL_NONE : No security status qualifier is known/available for this security. 
* SECURITY_STATUS_QUAL_EXCUSED : An Excused withdrawl from the market. 
* SECURITY_STATUS_QUAL_WITHDRAWN : Non-excused withdrawl by the market maker. 
* SECURITY_STATUS_QUAL_SUSPENDED : Suspended Trading 
* SECURITY_STATUS_QUAL_RESUME : Resume trading/quoting after halt. 
* SECURITY_STATUS_QUAL_QUOTE_RESUME : Resume quoting after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* SECURITY_STATUS_QUAL_TRADE_RESUME : Resume trading after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* SECURITY_STATUS_QUAL_RESUME_TIME : When the security is expected to resume trading. 
* SECURITY_STATUS_QUAL_MKT_IMB_BUY : Market Imbalance - Buy. A 50,000 share or more excess of market orders to buy over market orders to sell as of 9:00am on expiration days. A MktImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* SECURITY_STATUS_QUAL_MKT_IMB_SELL : Market Imbalance - Sell. A 50,000 share or more excess of market orders to sell over market orders to buy as of 9:00am on expiration days. A MktImbSell implies an ordinary order imbalance (OrdImbSell). 
* SECURITY_STATUS_QUAL_NO_MKT_IMB : No Market Imbalance. Indicates that the imbalance of market orders for a security is less than 50,000 shares as of 9:00am on expiration days. 
* SECURITY_STATUS_QUAL_MOC_IMB_BUY : Market On Close Imbalance - Buy. An excess of 50,000 share or more of MOC orders to buy over MOC orders to sell (including MOC sell plus and MOC sell short orders). A MocImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* SECURITY_STATUS_QUAL_MOC_IMB_SELL : Market On Close Imbalance - Sell. An excess of 50,000 share or more of MOC orders to sell (not including MOC sell short and MOC sell plus orders) over orders to buy (including MOC orders to buy minus). A MocImbSell implies an ordinary order imbalance (OrdImbSell). 
* SECURITY_STATUS_QUAL_NO_MOC_IMB : No Market On Close (MOC) Imbalance. The difference between the number of shares to buy MOC and the number of shares to sell MOC is less than 50,000. 
* SECURITY_STATUS_QUAL_ORDER_IMB : Non-regulatory condition: a significant imbalance of buy orders exists for this security. 
* SECURITY_STATUS_QUAL_ORDER_IMB_SELL : Non-regulatory condition: a significant imbalance of sell orders exists for this security. 
* SECURITY_STATUS_QUAL_ORDER_OMB_NONE : The earlier imbalance of buy or sell orders no longer exists for this security. It also might mean that there is no imbalance to begin with. 
* SECURITY_STATUS_QUAL_RANGE_IND : Trading Range Indication. Not an Opening Delay or Trading Halted condition: this condition is used prior to the opening of a security to denote a probable trading range (bid and offer prices, no sizes). 
* SECURITY_STATUS_QUAL_ITS_PRE_OPEN : ITS pre-opening indication. 
* SECURITY_STATUS_QUAL_RESERVED : Reserved (e.g., CME). 
* SECURITY_STATUS_QUAL_FROZEN : Frozen (e.g., CME). 
* SECURITY_STATUS_QUAL_PRE_OPEN : Preopening state (e.g., CME). 
* SECURITY_STATUS_QUAL_ADD_INFO : Additional Information. For a security that is Opening Delayed or Trading Halted, if inadequate information is disclosed during a "news dissemination or news pending" Opening Delay or Trading Halt, the Opening Delay or Trading Halt reason could be subsequently reported as "Additional Information." 
* SECURITY_STATUS_QUAL_OPEN_DELAY : Security's opening has been delayed by exchange. This value is usually followed by another value specifying the reason for the opening delay. 
* SECURITY_STATUS_QUAL_NO_OPEN_RESUME : Indicates that trading halt or opening delay will be in effect for the remainder of the trading day. 
* SECURITY_STATUS_QUAL_PRICE_IND : An approximation of what a security's opening or re-opening price range (bid and offer prices, no sizes) will be when trading resumes after a delayed opening or after a trading halt. 
* SECURITY_STATUS_QUAL_EQUIPMENT : Non-regulatory condition: the ability to trade this security by a participant is temporarily inhibited due to a systems, equipment or communications facility problem, or for other technical reasons. 
* SECURITY_STATUS_QUAL_FILINGS : Not current in regulatory filings. 
* SECURITY_STATUS_QUAL_NEWS : News pending. Denotes a regulatory trading halt due to an expected news announcement which influence the security. An Opening Delay or Trading Halt may be continued once the news has been disseminated. 
* SECURITY_STATUS_QUAL_NEWS_DISSEM : News Dissemination. Denotes a regulatory trading halt when relevant news influencing the security is being disseminated. Trading is suspended until the primary market determines that an adequate publication or disclosure of information has occurred. v
* SECURITY_STATUS_QUAL_LISTING : Listing Noncompliance. 
* SECURITY_STATUS_QUAL_OPERATION : Operational Halt 
* SECURITY_STATUS_QUAL_INFO : Information Requested. Regulatory condition: more disclosure of information is requested by the exchange for this security. 
* SECURITY_STATUS_QUAL_SEC : SEC Suspension. 
* SECURITY_STATUS_QUAL_TIMES : News Resumption Times. 
* SECURITY_STATUS_QUAL_OTHER : Other Regulatory Halt. 
* SECURITY_STATUS_QUAL_RELATED : Related Security; In View Of Common. Non-regulatory condition: the halt or opening delay in this security is due to its relationship with another security. This condition also applies to non-common associated securities (e.g. warrants, rights, preferreds, classes, etc.) in view of the common stock. 
* SECURITY_STATUS_QUAL_IPO : Upcoming IPO issue not yet trading. 


### function getFreeText

```cpp
virtual const char * getFreeText() const
```


**Return**: Free text associated with the security status change. 

**Reimplements**: [Wombat::MamdaSecStatus::getFreeText](classWombat_1_1MamdaSecStatus.html#function-getfreetext)


Arbitrary free text associated with the security status change.


### function getIssueSymbolFieldState

```cpp
virtual MamdaFieldState getIssueSymbolFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaSecStatus::getIssueSymbolFieldState](classWombat_1_1MamdaSecStatus.html#function-getissuesymbolfieldstate)


Get the issue symbol field state


### function getReasonFieldState

```cpp
virtual MamdaFieldState getReasonFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaSecStatus::getReasonFieldState](classWombat_1_1MamdaSecStatus.html#function-getreasonfieldstate)


Get the reason field state


### function getSecurityActionFieldState

```cpp
virtual MamdaFieldState getSecurityActionFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityActionFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecurityactionfieldstate)


Get the security action field state


### function getShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getShortSaleCircuitBreakerFieldState() const
```


**See**: [MamdaSecStatusRecap::getShortSaleCircuitBreakerFieldState()](classWombat_1_1MamdaSecStatusRecap.html#function-getshortsalecircuitbreakerfieldstate)

**Reimplements**: [Wombat::MamdaSecStatus::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaSecStatus.html#function-getshortsalecircuitbreakerfieldstate)


### function getSecurityTypeFieldState

```cpp
virtual MamdaFieldState getSecurityTypeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityTypeFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecuritytypefieldstate)


Get the security type field state


### function getSecurityStatusFieldState

```cpp
virtual MamdaFieldState getSecurityStatusFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityStatusFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusfieldstate)


Get the security status field state


### function getSecurityStatusQualFieldState

```cpp
virtual MamdaFieldState getSecurityStatusQualFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityStatusQualFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusqualfieldstate)


Get the security status qualifier field state


### function getSecurityStatusNativeFieldState

```cpp
virtual MamdaFieldState getSecurityStatusNativeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaSecStatus::getSecurityStatusNativeFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusnativefieldstate)


Get the native security status field state


### function getSecurityStatusStrFieldState

```cpp
virtual MamdaFieldState getSecurityStatusStrFieldState() const
```


**Return**: The normalized security status field state. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getSecurityStatusStrFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusstrfieldstate)


### function getSecurityStatusQualStrFieldState

```cpp
virtual MamdaFieldState getSecurityStatusQualStrFieldState() const
```


**Return**: The normalized security status qualifier field state. 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getSecurityStatusQualStrFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualstrfieldstate)


### function getSecurityStatusEnumFieldState

```cpp
virtual MamdaFieldState getSecurityStatusEnumFieldState() const
```


**Return**: The normalized security status (enumerated value) field State 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getSecurityStatusEnumFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusenumfieldstate)


### function getSecurityStatusQualifierEnumFieldState

```cpp
virtual MamdaFieldState getSecurityStatusQualifierEnumFieldState() const
```


**Return**: The normalized security status qualifier field state 

**Reimplements**: [Wombat::MamdaSecStatusRecap::getSecurityStatusQualifierEnumFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualifierenumfieldstate)


### function getFreeTextFieldState

```cpp
virtual MamdaFieldState getFreeTextFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaSecStatus::getFreeTextFieldState](classWombat_1_1MamdaSecStatus.html#function-getfreetextfieldstate)


Get the free text field field state


### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
)
```


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100