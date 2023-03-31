---
title: Wombat::MamdaBookAtomicLevelEntry
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBookAtomicLevelEntry



 [More...](#detailed-description)

Inherits from [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat.MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| double | **[getPriceLevelPrice](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelprice)**() |
| MamaPrice | **[getPriceLevelMamaPrice](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelmamaprice)**() |
| double | **[getPriceLevelSize](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelsize)**() |
| char | **[getPriceLevelAction](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelaction)**() |
| char | **[getPriceLevelSide](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelside)**() |
| DateTime | **[getPriceLevelTime](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpriceleveltime)**() |
| double | **[getPriceLevelNumEntries](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelnumentries)**() |
| long | **[getPriceLevelActNumEntries](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelactnumentries)**() |
| char | **[getPriceLevelEntryAction](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryaction)**() |
| string | **[getPriceLevelEntryId](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentryid)**() |
| long | **[getPriceLevelEntrySize](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentrysize)**() |
| DateTime | **[getPriceLevelEntryTime](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html#function-getpricelevelentrytime)**() |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| string | **[getSymbol](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbol)**()<br>Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**()<br>Returns the field state.  |
| string | **[getPartId](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartid)**()<br>Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctime)**()<br>Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytime)**()<br>Activity time. A feed handler generated time stamp representing when the data item was last updated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getLineTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetime)**()<br>Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getSendTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtime)**()<br>Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**()<br>Returns the field state.  |


## Detailed Description

```csharp
class Wombat::MamdaBookAtomicLevelEntry;
```


[MamdaBookAtomicLevelEntry](interfaceWombat_1_1MamdaBookAtomicLevelEntry.html) is an interface that provides access to Price Level and Price Level Entry fields 

## Public Functions Documentation

### function getPriceLevelPrice

```csharp
double getPriceLevelPrice()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelPrice()](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelprice)

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelPrice](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelprice)


### function getPriceLevelMamaPrice

```csharp
MamaPrice getPriceLevelMamaPrice()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelMamaPrice()](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelmamaprice)

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelMamaPrice](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelmamaprice)


### function getPriceLevelSize

```csharp
double getPriceLevelSize()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelSize()](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelsize)

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelSize](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelsize)


### function getPriceLevelAction

```csharp
char getPriceLevelAction()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelAction()](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelaction)

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelAction](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelaction)


### function getPriceLevelSide

```csharp
char getPriceLevelSide()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelSide()](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelside)

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelSide](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelside)


### function getPriceLevelTime

```csharp
DateTime getPriceLevelTime()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelTime()](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpriceleveltime)

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelTime](classWombat_1_1MamdaBookAtomicListener.html#function-getpriceleveltime)


### function getPriceLevelNumEntries

```csharp
double getPriceLevelNumEntries()
```


**See**: [MamdaBookAtomicLevel::getPriceLevelNumEntries()](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumentries)

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelNumEntries](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelnumentries)


### function getPriceLevelActNumEntries

```csharp
long getPriceLevelActNumEntries()
```


**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelActNumEntries](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelactnumentries)


?? 


### function getPriceLevelEntryAction

```csharp
char getPriceLevelEntryAction()
```


**Return**: The orderbook entry action. 

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelEntryAction](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentryaction)


Order book entry action to apply to the full order book.

A : Add entry to the price level. U : Update existing entry in the price level. D : Delete existing entry from the price level.


### function getPriceLevelEntryId

```csharp
string getPriceLevelEntryId()
```


**Return**: The entry id 

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelEntryId](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentryid)


Order book entry Id. (order ID, participant ID, etc.)


### function getPriceLevelEntrySize

```csharp
long getPriceLevelEntrySize()
```


**Return**: Order book entry size 

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelEntrySize](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentrysize)


Return the order book entry size


### function getPriceLevelEntryTime

```csharp
DateTime getPriceLevelEntryTime()
```


**Return**: Time of order book entry update. 

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelEntryTime](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelentrytime)


Return the time of order book entry update.


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100