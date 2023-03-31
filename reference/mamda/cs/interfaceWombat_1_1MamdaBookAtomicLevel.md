---
title: Wombat::MamdaBookAtomicLevel
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaBookAtomicLevel



 [More...](#detailed-description)

Inherits from [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat.MamdaBookAtomicListener](classWombat_1_1MamdaBookAtomicListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getPriceLevelNumLevels](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumlevels)**()<br>Return the number of price levels in the order book update.  |
| long | **[getPriceLevelNum](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelnum)**()<br>Return at which position this level is within an update containing a number of levels. (i.e. level m of n levels in the update)  |
| double | **[getPriceLevelPrice](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelprice)**()<br>Return the price for this price level.  |
| MamaPrice | **[getPriceLevelMamaPrice](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelmamaprice)**()<br>Return the Mamaprice for this price level.  |
| double | **[getPriceLevelSize](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelsize)**()<br>Return the number of order entries comprising this price level.  |
| long | **[getPriceLevelSizeChange](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelsizechange)**()<br>Aggregate size at current price level.  |
| char | **[getPriceLevelAction](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelaction)**()<br>The action to apply to the orderbook for this price level. Can have a value of: A : Add a new price level U : Update an existing price level D : Delete an existing price level C : Closing information for price level (often treat the same as Update).  |
| char | **[getPriceLevelSide](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelside)**()<br>Side of book at current price level. B : Bid side. Same as 'buy' side. A : Ask side. Same as 'sell' side.  |
| DateTime | **[getPriceLevelTime](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpriceleveltime)**()<br>Time of order book price level.  |
| double | **[getPriceLevelNumEntries](interfaceWombat_1_1MamdaBookAtomicLevel.html#function-getpricelevelnumentries)**()<br>Number of order book entries at current price level.  |

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
class Wombat::MamdaBookAtomicLevel;
```


[MamdaBookAtomicLevel](interfaceWombat_1_1MamdaBookAtomicLevel.html) is an interface that provides access to trade related fields. 

## Public Functions Documentation

### function getPriceLevelNumLevels

```csharp
long getPriceLevelNumLevels()
```

Return the number of price levels in the order book update. 

**Return**: The number of price levels.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelNumLevels](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelnumlevels)


### function getPriceLevelNum

```csharp
long getPriceLevelNum()
```

Return at which position this level is within an update containing a number of levels. (i.e. level m of n levels in the update) 

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelNum](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelnum)


returns>The position of this level in the update received.


### function getPriceLevelPrice

```csharp
double getPriceLevelPrice()
```

Return the price for this price level. 

**Return**: The price level price.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelPrice](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelprice)


### function getPriceLevelMamaPrice

```csharp
MamaPrice getPriceLevelMamaPrice()
```

Return the Mamaprice for this price level. 

**Return**: The price level Mama price.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelMamaPrice](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelmamaprice)


### function getPriceLevelSize

```csharp
double getPriceLevelSize()
```

Return the number of order entries comprising this price level. 

**Return**: The number of entries in this price level.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelSize](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelsize)


### function getPriceLevelSizeChange

```csharp
long getPriceLevelSizeChange()
```

Aggregate size at current price level. 

**Return**: The aggregate size at the current price level.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelSizeChange](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelsizechange)


### function getPriceLevelAction

```csharp
char getPriceLevelAction()
```

The action to apply to the orderbook for this price level. Can have a value of: A : Add a new price level U : Update an existing price level D : Delete an existing price level C : Closing information for price level (often treat the same as Update). 

**Return**: The price level action.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelAction](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelaction)


### function getPriceLevelSide

```csharp
char getPriceLevelSide()
```

Side of book at current price level. B : Bid side. Same as 'buy' side. A : Ask side. Same as 'sell' side. 

**Return**: The price level side.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelSide](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelside)


### function getPriceLevelTime

```csharp
DateTime getPriceLevelTime()
```

Time of order book price level. 

**Return**: The time of the orderbook price level.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelTime](classWombat_1_1MamdaBookAtomicListener.html#function-getpriceleveltime)


### function getPriceLevelNumEntries

```csharp
double getPriceLevelNumEntries()
```

Number of order book entries at current price level. 

**Return**: The number of entries at the current price level.

**Reimplemented by**: [Wombat::MamdaBookAtomicListener::getPriceLevelNumEntries](classWombat_1_1MamdaBookAtomicListener.html#function-getpricelevelnumentries)


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100