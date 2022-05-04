---
title: Wombat::MamdaAuctionListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaAuctionListener



 [More...](#detailed-description)


`#include <MamdaAuctionListener.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html), [Wombat::MamdaAuctionRecap](classWombat_1_1MamdaAuctionRecap.html), [Wombat::MamdaAuctionUpdate](classWombat_1_1MamdaAuctionUpdate.html), [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html), [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html#function-mamdaauctionlistener)**() |
| virtual | **[~MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html#function-~mamdaauctionlistener)**() |
| void | **[addHandler](classWombat_1_1MamdaAuctionListener.html#function-addhandler)**([MamdaAuctionHandler](classWombat_1_1MamdaAuctionHandler.html) * handler) |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaAuctionListener.html#function-getsymbol)**() const |
| virtual const char * | **[getPartId](classWombat_1_1MamdaAuctionListener.html#function-getpartid)**() const |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaAuctionListener.html#function-getsrctime)**() const |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaAuctionListener.html#function-getactivitytime)**() const |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaAuctionListener.html#function-getlinetime)**() const |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaAuctionListener.html#function-getsendtime)**() const |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaAuctionListener.html#function-geteventseqnum)**() const |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaAuctionListener.html#function-geteventtime)**() const |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaAuctionListener.html#function-getmsgqual)**() const |
| bool | **[isInitialised](classWombat_1_1MamdaAuctionListener.html#function-isinitialised)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsymbolfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaAuctionListener.html#function-getpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsrctimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getactivitytimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getlinetimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getsendtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaAuctionListener.html#function-geteventseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-geteventtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaAuctionListener.html#function-getmsgqualfieldstate)**() const |
| virtual const MamaPrice & | **[getUncrossPrice](classWombat_1_1MamdaAuctionListener.html#function-getuncrossprice)**() const |
| virtual mama_quantity_t | **[getUncrossVolume](classWombat_1_1MamdaAuctionListener.html#function-getuncrossvolume)**() const |
| virtual [MamdaUncrossPriceInd](namespaceWombat.html#enum-mamdauncrosspriceind) | **[getUncrossPriceInd](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceind)**() const |
| virtual const MamaDateTime & | **[getAuctionTime](classWombat_1_1MamdaAuctionListener.html#function-getauctiontime)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossVolumeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrossvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUncrossPriceIndFieldState](classWombat_1_1MamdaAuctionListener.html#function-getuncrosspriceindfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAuctionTimeFieldState](classWombat_1_1MamdaAuctionListener.html#function-getauctiontimefieldstate)**() const |
| virtual void | **[onMsg](classWombat_1_1MamdaAuctionListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

**Public Functions inherited from [Wombat::MamdaAuctionRecap](classWombat_1_1MamdaAuctionRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaAuctionRecap](classWombat_1_1MamdaAuctionRecap.html#function-~mamdaauctionrecap)**() |

**Public Functions inherited from [Wombat::MamdaAuctionUpdate](classWombat_1_1MamdaAuctionUpdate.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaAuctionUpdate](classWombat_1_1MamdaAuctionUpdate.html#function-~mamdaauctionupdate)**() |

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
class Wombat::MamdaAuctionListener;
```


[MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) is a class that specializes in handling currency data, Developers provide their own implementation of the [MamdaAuctionHandler](classWombat_1_1MamdaAuctionHandler.html) interface and will be delivered notifications for updates in the currency data. An obvious application for this MAMDA class is any kind of currency analysis application.

[MamdaAuctionListener](classWombat_1_1MamdaAuctionListener.html) should initialize the [MamdaAuctionFields](classWombat_1_1MamdaAuctionFields.html) class prior to receiving the first message by calling MamdaAuctionFields::setDictionary() with a valid dictionary object which contains Auction related fields. 

## Public Functions Documentation

### function MamdaAuctionListener

```cpp
MamdaAuctionListener()
```


### function ~MamdaAuctionListener

```cpp
virtual ~MamdaAuctionListener()
```


### function addHandler

```cpp
void addHandler(
    MamdaAuctionHandler * handler
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


### function getUncrossPrice

```cpp
virtual const MamaPrice & getUncrossPrice() const
```


**Return**: uncross price. The indicative or firm auction price . 

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossPrice](classWombat_1_1MamdaAuctionRecap.html#function-getuncrossprice)


Get the uncross price.


### function getUncrossVolume

```cpp
virtual mama_quantity_t getUncrossVolume() const
```


**Return**: Ask price. The indicative volume, or the volume turned over in the auction 

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossVolume](classWombat_1_1MamdaAuctionRecap.html#function-getuncrossvolume)


Get the uncross volume.


### function getUncrossPriceInd

```cpp
virtual MamdaUncrossPriceInd getUncrossPriceInd() const
```


**Return**: uncross price Ind. Indicates whether the Price and Volume is an indicative of the current state of the auction or whether its the (firm) auction price and volume 

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossPriceInd](classWombat_1_1MamdaAuctionRecap.html#function-getuncrosspriceind)


Get the uncross price Ind.


### function getAuctionTime

```cpp
virtual const MamaDateTime & getAuctionTime() const
```


**Return**: auction time. The indicative or firm auction time . 

**Reimplements**: [Wombat::MamdaAuctionRecap::getAuctionTime](classWombat_1_1MamdaAuctionRecap.html#function-getauctiontime)


Get the auction time.


### function getUncrossPriceFieldState

```cpp
virtual MamdaFieldState getUncrossPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossPriceFieldState](classWombat_1_1MamdaAuctionRecap.html#function-getuncrosspricefieldstate)


Get the uncross price fieldState


### function getUncrossVolumeFieldState

```cpp
virtual MamdaFieldState getUncrossVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossVolumeFieldState](classWombat_1_1MamdaAuctionRecap.html#function-getuncrossvolumefieldstate)


Get the uncross volume fieldState


### function getUncrossPriceIndFieldState

```cpp
virtual MamdaFieldState getUncrossPriceIndFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaAuctionRecap::getUncrossPriceIndFieldState](classWombat_1_1MamdaAuctionRecap.html#function-getuncrosspriceindfieldstate)


Get the uncross price ind fieldState


### function getAuctionTimeFieldState

```cpp
virtual MamdaFieldState getAuctionTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaAuctionRecap::getAuctionTimeFieldState](classWombat_1_1MamdaAuctionRecap.html#function-getauctiontimefieldstate)


Get the auction time fieldState


### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
)
```


**Exceptions**: 

  * **<MamaStatus>** {[Wombat](namespaceWombat.html) default implementation.} 


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface.


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100