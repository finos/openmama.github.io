---
title: Wombat::MamdaCurrencyListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaCurrencyListener



 [More...](#detailed-description)


`#include <MamdaCurrencyListener.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html), [Wombat::MamdaCurrencyRecap](classWombat_1_1MamdaCurrencyRecap.html), [Wombat::MamdaCurrencyUpdate](classWombat_1_1MamdaCurrencyUpdate.html), [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html), [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaCurrencyListener](classWombat_1_1MamdaCurrencyListener.html#function-mamdacurrencylistener)**() |
| virtual | **[~MamdaCurrencyListener](classWombat_1_1MamdaCurrencyListener.html#function-~mamdacurrencylistener)**() |
| void | **[addHandler](classWombat_1_1MamdaCurrencyListener.html#function-addhandler)**([MamdaCurrencyHandler](classWombat_1_1MamdaCurrencyHandler.html) * handler) |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaCurrencyListener.html#function-getsymbol)**() const |
| virtual const char * | **[getPartId](classWombat_1_1MamdaCurrencyListener.html#function-getpartid)**() const |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaCurrencyListener.html#function-getsrctime)**() const |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaCurrencyListener.html#function-getactivitytime)**() const |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaCurrencyListener.html#function-getlinetime)**() const |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaCurrencyListener.html#function-getsendtime)**() const |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaCurrencyListener.html#function-geteventseqnum)**() const |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaCurrencyListener.html#function-geteventtime)**() const |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaCurrencyListener.html#function-getmsgqual)**() const |
| bool | **[isInitialised](classWombat_1_1MamdaCurrencyListener.html#function-isinitialised)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsymbolfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsrctimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getactivitytimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getlinetimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getsendtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaCurrencyListener.html#function-geteventseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaCurrencyListener.html#function-geteventtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getmsgqualfieldstate)**() const |
| virtual const MamaPrice & | **[getBidPrice](classWombat_1_1MamdaCurrencyListener.html#function-getbidprice)**() const |
| virtual const MamaPrice & | **[getAskPrice](classWombat_1_1MamdaCurrencyListener.html#function-getaskprice)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBidPriceFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getbidpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAskPriceFieldState](classWombat_1_1MamdaCurrencyListener.html#function-getaskpricefieldstate)**() const |
| virtual void | **[onMsg](classWombat_1_1MamdaCurrencyListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

**Public Functions inherited from [Wombat::MamdaCurrencyRecap](classWombat_1_1MamdaCurrencyRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaCurrencyRecap](classWombat_1_1MamdaCurrencyRecap.html#function-~mamdacurrencyrecap)**() |

**Public Functions inherited from [Wombat::MamdaCurrencyUpdate](classWombat_1_1MamdaCurrencyUpdate.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaCurrencyUpdate](classWombat_1_1MamdaCurrencyUpdate.html#function-~mamdacurrencyupdate)**() |

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |


## Detailed Description

```cpp
class Wombat::MamdaCurrencyListener;
```


[MamdaCurrencyListener](classWombat_1_1MamdaCurrencyListener.html) is a class that specializes in handling currency data, Developers provide their own implementation of the [MamdaCurrencyHandler](classWombat_1_1MamdaCurrencyHandler.html) interface and will be delivered notifications for updates in the currency data. An obvious application for this MAMDA class is any kind of currency analysis application.

[MamdaCurrencyListener](classWombat_1_1MamdaCurrencyListener.html) should initialize the [MamdaCurrencyFields](classWombat_1_1MamdaCurrencyFields.html) class prior to receiving the first message by calling MamdaCurrencyFields::setDictionary() with a valid dictionary object which contains Currency related fields. 

## Public Functions Documentation

### function MamdaCurrencyListener

```cpp
MamdaCurrencyListener()
```


### function ~MamdaCurrencyListener

```cpp
virtual ~MamdaCurrencyListener()
```


### function addHandler

```cpp
void addHandler(
    MamdaCurrencyHandler * handler
)
```


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


### function getMsgQual

```cpp
virtual const MamaMsgQual & getMsgQual() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)


Get the message qualifier.


### function isInitialised

```cpp
bool isInitialised() const
```


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


### function getMsgQualFieldState

```cpp
virtual MamdaFieldState getMsgQualFieldState() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)


Get the message qualifier field state.


### function getBidPrice

```cpp
virtual const MamaPrice & getBidPrice() const
```


**Return**: Bid price. The highest price that the representative party/group is willing to pay to buy the security. 

**Reimplements**: [Wombat::MamdaCurrencyRecap::getBidPrice](classWombat_1_1MamdaCurrencyRecap.html#function-getbidprice)


Get the currency bid price.


### function getAskPrice

```cpp
virtual const MamaPrice & getAskPrice() const
```


**Return**: Ask price. The lowest price that the representative party/group is willing to take to sell the security. 

**Reimplements**: [Wombat::MamdaCurrencyRecap::getAskPrice](classWombat_1_1MamdaCurrencyRecap.html#function-getaskprice)


Get the currency ask price.


### function getBidPriceFieldState

```cpp
virtual MamdaFieldState getBidPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaCurrencyRecap::getBidPriceFieldState](classWombat_1_1MamdaCurrencyRecap.html#function-getbidpricefieldstate)


Get the quote ask price fieldState


### function getAskPriceFieldState

```cpp
virtual MamdaFieldState getAskPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaCurrencyRecap::getAskPriceFieldState](classWombat_1_1MamdaCurrencyRecap.html#function-getaskpricefieldstate)


Get the quote ask price fieldState


### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
)
```


**Exceptions**: 

  * **<MamaStatus>** {MAMDA default implementation.} 


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface.


-------------------------------

Updated on 2023-03-31 at 15:29:57 +0100