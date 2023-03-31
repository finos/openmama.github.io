---
title: Wombat::MamdaOrderImbalanceListener
summary: A MamdaOrderImbalanceListener is class that specializes in handling imbalance order updates. An imbalance order occurs when too many orders of a particular type - either buy, sell or limit - for listed securities and not enough of the other, matching orders are received by an exchange. Developers provide their own implementation of the MamdaOrderImbalanceHandler interface and will be delivered notifications for imbalance updates. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceListener



A [MamdaOrderImbalanceListener]() is class that specializes in handling imbalance order updates. An imbalance order occurs when too many orders of a particular type - either buy, sell or limit - for listed securities and not enough of the other, matching orders are received by an exchange. Developers provide their own implementation of the [MamdaOrderImbalanceHandler](interfaceWombat_1_1MamdaOrderImbalanceHandler.html) interface and will be delivered notifications for imbalance updates. 

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html), [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html), [Wombat.MamdaOrderImbalanceRecap](interfaceWombat_1_1MamdaOrderImbalanceRecap.html)

## Protected Classes

|                | Name           |
| -------------- | -------------- |
| class | **[MamdaOrderImbalanceCache](classWombat_1_1MamdaOrderImbalanceListener_1_1MamdaOrderImbalanceCache.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html#function-mamdaorderimbalancelistener)**() |
| void | **[addHandler](classWombat_1_1MamdaOrderImbalanceListener.html#function-addhandler)**([MamdaOrderImbalanceHandler](interfaceWombat_1_1MamdaOrderImbalanceHandler.html) handler)<br>Registers handler interested in receiving update and recap events.  |
| MamaPrice | **[getHighIndicationPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-gethighindicationprice)**()<br>Returns the high indication price of the imbalance order.  |
| MamaPrice | **[getLowIndicationPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlowindicationprice)**()<br>Returns the low indication price of the imbalance order.  |
| MamaPrice | **[getImbalancePrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalanceprice)**()<br>Returns the indication price for the imbalance order.  |
| long | **[getBuyVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getbuyvolume)**()<br>Returns the buy volume of the imbalance order  |
| long | **[getSellVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsellvolume)**()<br>Returns the sell volume of the imbalance order  |
| long | **[getMatchVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchvolume)**()<br>Returns the match volume of the imbalance order  |
| String | **[getImbalanceState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancestate)**()<br>Returns the order imbalance state  |
| MamaPrice | **[getMatchPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchprice)**()<br>Returns the match price for the imbalance order.  |
| MamaPrice | **[getFarClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getfarclearingprice)**()<br>Returns the far clearing price for the imbalance order.  |
| MamaPrice | **[getNearClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnearclearingprice)**()<br>Returns the near clearing price for the imbalance order.  |
| char | **[getNoClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnoclearingprice)**()<br>Returns the no clearing price for the imbalance order.  |
| char | **[getPriceVarInd](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpricevarind)**() |
| char | **[getCrossType](classWombat_1_1MamdaOrderImbalanceListener.html#function-getcrosstype)**()<br>Returns the imbalance cross type  |
| DateTime | **[getEventTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtime)**()<br>[MamdaBasicEvent.getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime) |
| long | **[getEventSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnum)**()<br>[MamdaBasicEvent.getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum) |
| DateTime | **[getActivityTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytime)**()<br>[MamdaBasicEvent.getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime) |
| DateTime | **[getSrcTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctime)**() |
| DateTime | **[getLineTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetime)**() |
| DateTime | **[getSendTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtime)**() |
| int | **[getMsgType](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgtype)**() |
| String | **[getIssueSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getissuesymbol)**() |
| String | **[getSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbol)**() |
| String | **[getPartId](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartid)**() |
| int | **[getSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-getseqnum)**() |
| String | **[getSecurityStatusOrig](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorig)**() |
| DateTime | **[getSecurityStatusTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustime)**() |
| DateTime | **[getAuctionTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getauctiontime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-gethighindicationpricefieldstate)**()<br>Returns the high indication price field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlowindicationpricefieldstate)**()<br>Returns the low indication price field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getImbalancePriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancepricefieldstate)**()<br>Returns the indication price field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBuyVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getbuyvolumefieldstate)**()<br>Returns the buy volume field state of the imbalance order  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSellVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsellvolumefieldstate)**()<br>Returns the sell volume field state of the imbalance order  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMatchVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchvolumefieldstate)**()<br>Returns the match volume field state of the imbalance order  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getImbalanceStateFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancestatefieldstate)**()<br>Returns the order imbalance state field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMatchPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchpricefieldstate)**()<br>Returns the match price field state for the imbalance order.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getFarClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getfarclearingpricefieldstate)**()<br>Returns the far clearing price field state for the imbalance order.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNearClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnearclearingpricefieldstate)**()<br>Returns the near clearing price field state for the imbalance order.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNoClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnoclearingpricefieldstate)**()<br>Returns the no clearing price field state for the imbalance order.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPriceVarIndFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpricevarindfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCrossTypeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getcrosstypefieldstate)**()<br>Returns the imbalance cross type field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtimefieldstate)**()<br>[MamdaBasicEvent.getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnumfieldstate)**()<br>[MamdaBasicEvent.getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getactivitytimefieldstate)**()<br>[MamdaBasicEvent.getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsrctimefieldstate)**()<br>[MamdaBasicEvent.getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlinetimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsendtimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgTypeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgtypefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIssueSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getissuesymbolfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsymbolfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpartidfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getseqnumfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusOrigFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorigfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAuctionTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getauctiontimefieldstate)**() |
| void | **[populateRecap](classWombat_1_1MamdaOrderImbalanceListener.html#function-populaterecap)**([MamdaConcreteOrderImbalanceRecap](classWombat_1_1MamdaConcreteOrderImbalanceRecap.html) recap)<br>Resets the recap object to cached values.  |
| [MamdaOrderImbalanceSide](classWombat_1_1MamdaOrderImbalanceSide.html) | **[getImbalanceSide](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalanceside)**()<br>Returns the imbalance side of the imbalance order. This is determined by the Buy and Sell volumes.  |
| long | **[getImbalanceVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancevolume)**()<br>Returns the imbalance volume, which is either the sell or buy volume  |
| void | **[onMsg](classWombat_1_1MamdaOrderImbalanceListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Implementation of MamdaListener interface.  |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[clearCache](classWombat_1_1MamdaOrderImbalanceListener.html#function-clearcache)**([MamdaOrderImbalanceCache](classWombat_1_1MamdaOrderImbalanceListener_1_1MamdaOrderImbalanceCache.html) cache)<br>Clears all cached data by reseting to default values.  |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| readonly [MamdaOrderImbalanceCache](classWombat_1_1MamdaOrderImbalanceListener_1_1MamdaOrderImbalanceCache.html) | **[mOrderImbalanceCache](classWombat_1_1MamdaOrderImbalanceListener.html#variable-morderimbalancecache)**  |

## Public Functions Documentation

### function MamdaOrderImbalanceListener

```csharp
MamdaOrderImbalanceListener()
```


### function addHandler

```csharp
void addHandler(
    MamdaOrderImbalanceHandler handler
)
```

Registers handler interested in receiving update and recap events. 

**Parameters**: 

  * **handler** the handler to be registered.


### function getHighIndicationPrice

```csharp
MamaPrice getHighIndicationPrice()
```

Returns the high indication price of the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getHighIndicationPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationprice)


### function getLowIndicationPrice

```csharp
MamaPrice getLowIndicationPrice()
```

Returns the low indication price of the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getLowIndicationPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationprice)


### function getImbalancePrice

```csharp
MamaPrice getImbalancePrice()
```

Returns the indication price for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getImbalancePrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalanceprice)


### function getBuyVolume

```csharp
long getBuyVolume()
```

Returns the buy volume of the imbalance order 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getBuyVolume](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolume)


### function getSellVolume

```csharp
long getSellVolume()
```

Returns the sell volume of the imbalance order 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSellVolume](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsellvolume)


### function getMatchVolume

```csharp
long getMatchVolume()
```

Returns the match volume of the imbalance order 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMatchVolume](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolume)


### function getImbalanceState

```csharp
String getImbalanceState()
```

Returns the order imbalance state 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getImbalanceState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestate)


### function getMatchPrice

```csharp
MamaPrice getMatchPrice()
```

Returns the match price for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMatchPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchprice)


### function getFarClearingPrice

```csharp
MamaPrice getFarClearingPrice()
```

Returns the far clearing price for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getFarClearingPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingprice)


### function getNearClearingPrice

```csharp
MamaPrice getNearClearingPrice()
```

Returns the near clearing price for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getNearClearingPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingprice)


### function getNoClearingPrice

```csharp
char getNoClearingPrice()
```

Returns the no clearing price for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getNoClearingPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingprice)


### function getPriceVarInd

```csharp
char getPriceVarInd()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getPriceVarInd](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getpricevarind)


### function getCrossType

```csharp
char getCrossType()
```

Returns the imbalance cross type 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getCrossType](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getcrosstype)


### function getEventTime

```csharp
DateTime getEventTime()
```

[MamdaBasicEvent.getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)

**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)


### function getEventSeqNum

```csharp
long getEventSeqNum()
```

[MamdaBasicEvent.getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)

**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getActivityTime

```csharp
DateTime getActivityTime()
```

[MamdaBasicEvent.getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)

**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getSrcTime

```csharp
DateTime getSrcTime()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)


### function getLineTime

```csharp
DateTime getLineTime()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getLineTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetime)


### function getSendTime

```csharp
DateTime getSendTime()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getSendTime](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtime)


### function getMsgType

```csharp
int getMsgType()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMsgType](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmsgtype)


### function getIssueSymbol

```csharp
String getIssueSymbol()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getIssueSymbol](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbol)


### function getSymbol

```csharp
String getSymbol()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getSymbol](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbol)


### function getPartId

```csharp
String getPartId()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getPartId](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartid)


### function getSeqNum

```csharp
int getSeqNum()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSeqNum](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getseqnum)


### function getSecurityStatusOrig

```csharp
String getSecurityStatusOrig()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSecurityStatusOrig](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorig)


### function getSecurityStatusTime

```csharp
DateTime getSecurityStatusTime()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSecurityStatusTime](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustime)


### function getAuctionTime

```csharp
DateTime getAuctionTime()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getAuctionTime](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getauctiontime)


### function getHighIndicationPriceFieldState

```csharp
MamdaFieldState getHighIndicationPriceFieldState()
```

Returns the high indication price field state 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getHighIndicationPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationpricefieldstate)


### function getLowIndicationPriceFieldState

```csharp
MamdaFieldState getLowIndicationPriceFieldState()
```

Returns the low indication price field state 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getLowIndicationPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationpricefieldstate)


### function getImbalancePriceFieldState

```csharp
MamdaFieldState getImbalancePriceFieldState()
```

Returns the indication price field state 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getImbalancePriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancepricefieldstate)


### function getBuyVolumeFieldState

```csharp
MamdaFieldState getBuyVolumeFieldState()
```

Returns the buy volume field state of the imbalance order 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getBuyVolumeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolumefieldstate)


### function getSellVolumeFieldState

```csharp
MamdaFieldState getSellVolumeFieldState()
```

Returns the sell volume field state of the imbalance order 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSellVolumeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsellvolumefieldstate)


### function getMatchVolumeFieldState

```csharp
MamdaFieldState getMatchVolumeFieldState()
```

Returns the match volume field state of the imbalance order 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMatchVolumeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolumefieldstate)


### function getImbalanceStateFieldState

```csharp
MamdaFieldState getImbalanceStateFieldState()
```

Returns the order imbalance state field state 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getImbalanceStateFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestatefieldstate)


### function getMatchPriceFieldState

```csharp
MamdaFieldState getMatchPriceFieldState()
```

Returns the match price field state for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMatchPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchpricefieldstate)


### function getFarClearingPriceFieldState

```csharp
MamdaFieldState getFarClearingPriceFieldState()
```

Returns the far clearing price field state for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getFarClearingPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingpricefieldstate)


### function getNearClearingPriceFieldState

```csharp
MamdaFieldState getNearClearingPriceFieldState()
```

Returns the near clearing price field state for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getNearClearingPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingpricefieldstate)


### function getNoClearingPriceFieldState

```csharp
MamdaFieldState getNoClearingPriceFieldState()
```

Returns the no clearing price field state for the imbalance order. 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getNoClearingPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingpricefieldstate)


### function getPriceVarIndFieldState

```csharp
MamdaFieldState getPriceVarIndFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getPriceVarIndFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getpricevarindfieldstate)


### function getCrossTypeFieldState

```csharp
MamdaFieldState getCrossTypeFieldState()
```

Returns the imbalance cross type field state 

**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getCrossTypeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getcrosstypefieldstate)


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

[MamdaBasicEvent.getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)

**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

[MamdaBasicEvent.getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)

**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

[MamdaBasicEvent.getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)

**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

[MamdaBasicEvent.getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)

**Return**: 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


### function getLineTimeFieldState

```csharp
MamdaFieldState getLineTimeFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getLineTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


### function getSendTimeFieldState

```csharp
MamdaFieldState getSendTimeFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getSendTimeFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


### function getMsgTypeFieldState

```csharp
MamdaFieldState getMsgTypeFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getMsgTypeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmsgtypefieldstate)


### function getIssueSymbolFieldState

```csharp
MamdaFieldState getIssueSymbolFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getIssueSymbolFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbolfieldstate)


### function getSymbolFieldState

```csharp
MamdaFieldState getSymbolFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getSymbolFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


### function getPartIdFieldState

```csharp
MamdaFieldState getPartIdFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaBasicRecap::getPartIdFieldState](interfaceWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


### function getSeqNumFieldState

```csharp
MamdaFieldState getSeqNumFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSeqNumFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getseqnumfieldstate)


### function getSecurityStatusOrigFieldState

```csharp
MamdaFieldState getSecurityStatusOrigFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSecurityStatusOrigFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorigfieldstate)


### function getSecurityStatusTimeFieldState

```csharp
MamdaFieldState getSecurityStatusTimeFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getSecurityStatusTimeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustimefieldstate)


### function getAuctionTimeFieldState

```csharp
MamdaFieldState getAuctionTimeFieldState()
```


**Return**: 

**Reimplements**: [Wombat::MamdaOrderImbalanceRecap::getAuctionTimeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getauctiontimefieldstate)


### function populateRecap

```csharp
void populateRecap(
    MamdaConcreteOrderImbalanceRecap recap
)
```

Resets the recap object to cached values. 

**Parameters**: 

  * **recap** 


### function getImbalanceSide

```csharp
MamdaOrderImbalanceSide getImbalanceSide()
```

Returns the imbalance side of the imbalance order. This is determined by the Buy and Sell volumes. 

**Return**: 

### function getImbalanceVolume

```csharp
long getImbalanceVolume()
```

Returns the imbalance volume, which is either the sell or buy volume 

**Return**: 

### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```

Implementation of MamdaListener interface. 

**Reimplements**: [Wombat::MamdaMsgListener::onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)


## Protected Functions Documentation

### function clearCache

```csharp
static void clearCache(
    MamdaOrderImbalanceCache cache
)
```

Clears all cached data by reseting to default values. 

**Parameters**: 

  * **cache** The imbalance order cache to clear.


## Protected Attributes Documentation

### variable mOrderImbalanceCache

```csharp
readonly MamdaOrderImbalanceCache mOrderImbalanceCache =
			new MamdaOrderImbalanceCache ();
```


-------------------------------

Updated on 2023-03-31 at 15:30:12 +0100