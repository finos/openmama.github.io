---
title: Wombat::MamdaOrderImbalanceRecap
summary: MamdaOrderImbalanceRecap is an interface that provides access to order imbalance related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaOrderImbalanceRecap



[MamdaOrderImbalanceRecap]() is an interface that provides access to order imbalance related fields. 

Inherits from [Wombat.MamdaBasicRecap](interfaceWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat.MamdaOrderImbalanceListener](classWombat_1_1MamdaOrderImbalanceListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| DateTime | **[getAuctionTime](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getauctiontime)**()<br>Returns the AuctionTime.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAuctionTimeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getauctiontimefieldstate)**()<br>Returns the FieldState.  |
| long | **[getBuyVolume](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolume)**()<br>Returns the BuyVolume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBuyVolumeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getbuyvolumefieldstate)**()<br>Returns the FieldState.  |
| char | **[getCrossType](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getcrosstype)**()<br>Returns the CrossType.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCrossTypeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getcrosstypefieldstate)**()<br>Returns the FieldState.  |
| long | **[getEventSeqNum](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventseqnum)**()<br>Returns the EventSeqNum.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventseqnumfieldstate)**()<br>Returns the FieldState.  |
| DateTime | **[getEventTime](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventtime)**()<br>Returns the EventTime.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-geteventtimefieldstate)**()<br>Returns the FieldState.  |
| MamaPrice | **[getFarClearingPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingprice)**()<br>Returns the FarClearingPrice.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getFarClearingPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getfarclearingpricefieldstate)**()<br>Returns the FieldState.  |
| MamaPrice | **[getHighIndicationPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationprice)**()<br>Returns the HighIndicationPrice.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighIndicationPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-gethighindicationpricefieldstate)**()<br>Returns the FieldState.  |
| MamaPrice | **[getImbalancePrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalanceprice)**()<br>Returns the IndicationPrice.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getImbalancePriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancepricefieldstate)**()<br>Returns the FieldState.  |
| MamaPrice | **[getMatchPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchprice)**()<br>Returns the InsideMatchPrice.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMatchPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchpricefieldstate)**()<br>Returns the FieldState.  |
| string | **[getIssueSymbol](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbol)**()<br>Returns the IssueSymbol.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIssueSymbolFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getissuesymbolfieldstate)**()<br>Returns the FieldState.  |
| MamaPrice | **[getLowIndicationPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationprice)**()<br>Returns the LowIndicationPrice.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowIndicationPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getlowindicationpricefieldstate)**()<br>Returns the FieldState.  |
| long | **[getMatchVolume](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolume)**()<br>Returns the MatchVolume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMatchVolumeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmatchvolumefieldstate)**()<br>Returns the FieldState.  |
| int | **[getMsgType](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmsgtype)**()<br>Returns the MsgType.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgTypeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getmsgtypefieldstate)**()<br>Returns the FieldState.  |
| MamaPrice | **[getNearClearingPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingprice)**()<br>Returns the NearClearingPrice.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNearClearingPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getnearclearingpricefieldstate)**()<br>Returns the FieldState.  |
| char | **[getNoClearingPrice](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingprice)**()<br>Returns the NoClearingPrice.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNoClearingPriceFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getnoclearingpricefieldstate)**()<br>Returns the FieldState.  |
| char | **[getPriceVarInd](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getpricevarind)**()<br>Returns the PriceVarInd.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPriceVarIndFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getpricevarindfieldstate)**()<br>Returns the FieldState.  |
| string | **[getSecurityStatusOrig](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorig)**()<br>Returns the SecurityStatusOrig.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusOrigFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatusorigfieldstate)**()<br>Returns the FieldState.  |
| string | **[getImbalanceState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestate)**()<br>Returns the SecurityStatusQual.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getImbalanceStateFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getimbalancestatefieldstate)**()<br>Returns the FieldState.  |
| DateTime | **[getSecurityStatusTime](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustime)**()<br>Returns the SecurityStatusTime.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusTimeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsecuritystatustimefieldstate)**()<br>Returns the FieldState.  |
| long | **[getSellVolume](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsellvolume)**()<br>Returns the SellVolume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSellVolumeFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getsellvolumefieldstate)**()<br>Returns the FieldState.  |
| int | **[getSeqNum](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getseqnum)**()<br>Returns the SeqNum.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSeqNumFieldState](interfaceWombat_1_1MamdaOrderImbalanceRecap.html#function-getseqnumfieldstate)**()<br>Returns the FieldState.  |

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


## Public Functions Documentation

### function getAuctionTime

```csharp
DateTime getAuctionTime()
```

Returns the AuctionTime. 

**Return**: Returns the AuctionTime. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getAuctionTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getauctiontime)


### function getAuctionTimeFieldState

```csharp
MamdaFieldState getAuctionTimeFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getAuctionTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getauctiontimefieldstate)


### function getBuyVolume

```csharp
long getBuyVolume()
```

Returns the BuyVolume. 

**Return**: Returns the BuyVolume. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getBuyVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getbuyvolume)


### function getBuyVolumeFieldState

```csharp
MamdaFieldState getBuyVolumeFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getBuyVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getbuyvolumefieldstate)


### function getCrossType

```csharp
char getCrossType()
```

Returns the CrossType. 

**Return**: Returns the CrossType. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getCrossType](classWombat_1_1MamdaOrderImbalanceListener.html#function-getcrosstype)


### function getCrossTypeFieldState

```csharp
MamdaFieldState getCrossTypeFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getCrossTypeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getcrosstypefieldstate)


### function getEventSeqNum

```csharp
long getEventSeqNum()
```

Returns the EventSeqNum. 

**Return**: Returns the EventSeqNum. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getEventSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnum)


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getEventSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventseqnumfieldstate)


### function getEventTime

```csharp
DateTime getEventTime()
```

Returns the EventTime. 

**Return**: Returns the EventTime. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getEventTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtime)


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getEventTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-geteventtimefieldstate)


### function getFarClearingPrice

```csharp
MamaPrice getFarClearingPrice()
```

Returns the FarClearingPrice. 

**Return**: Returns the FarClearingPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getFarClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getfarclearingprice)


### function getFarClearingPriceFieldState

```csharp
MamdaFieldState getFarClearingPriceFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getFarClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getfarclearingpricefieldstate)


### function getHighIndicationPrice

```csharp
MamaPrice getHighIndicationPrice()
```

Returns the HighIndicationPrice. 

**Return**: Returns the HighIndicationPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getHighIndicationPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-gethighindicationprice)


### function getHighIndicationPriceFieldState

```csharp
MamdaFieldState getHighIndicationPriceFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getHighIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-gethighindicationpricefieldstate)


### function getImbalancePrice

```csharp
MamaPrice getImbalancePrice()
```

Returns the IndicationPrice. 

**Return**: Returns the IndicationPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getImbalancePrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalanceprice)


### function getImbalancePriceFieldState

```csharp
MamdaFieldState getImbalancePriceFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getImbalancePriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancepricefieldstate)


### function getMatchPrice

```csharp
MamaPrice getMatchPrice()
```

Returns the InsideMatchPrice. 

**Return**: Returns the InsideMatchPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMatchPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchprice)


### function getMatchPriceFieldState

```csharp
MamdaFieldState getMatchPriceFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMatchPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchpricefieldstate)


### function getIssueSymbol

```csharp
string getIssueSymbol()
```

Returns the IssueSymbol. 

**Return**: Returns the IssueSymbol. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getIssueSymbol](classWombat_1_1MamdaOrderImbalanceListener.html#function-getissuesymbol)


### function getIssueSymbolFieldState

```csharp
MamdaFieldState getIssueSymbolFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getIssueSymbolFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getissuesymbolfieldstate)


### function getLowIndicationPrice

```csharp
MamaPrice getLowIndicationPrice()
```

Returns the LowIndicationPrice. 

**Return**: Returns the LowIndicationPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getLowIndicationPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlowindicationprice)


### function getLowIndicationPriceFieldState

```csharp
MamdaFieldState getLowIndicationPriceFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getLowIndicationPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getlowindicationpricefieldstate)


### function getMatchVolume

```csharp
long getMatchVolume()
```

Returns the MatchVolume. 

**Return**: Returns the MatchVolume. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMatchVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchvolume)


### function getMatchVolumeFieldState

```csharp
MamdaFieldState getMatchVolumeFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMatchVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmatchvolumefieldstate)


### function getMsgType

```csharp
int getMsgType()
```

Returns the MsgType. 

**Return**: Returns the MsgType. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMsgType](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgtype)


### function getMsgTypeFieldState

```csharp
MamdaFieldState getMsgTypeFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getMsgTypeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getmsgtypefieldstate)


### function getNearClearingPrice

```csharp
MamaPrice getNearClearingPrice()
```

Returns the NearClearingPrice. 

**Return**: Returns the NearClearingPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getNearClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnearclearingprice)


### function getNearClearingPriceFieldState

```csharp
MamdaFieldState getNearClearingPriceFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getNearClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnearclearingpricefieldstate)


### function getNoClearingPrice

```csharp
char getNoClearingPrice()
```

Returns the NoClearingPrice. 

**Return**: Returns the NoClearingPrice. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getNoClearingPrice](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnoclearingprice)


### function getNoClearingPriceFieldState

```csharp
MamdaFieldState getNoClearingPriceFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getNoClearingPriceFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getnoclearingpricefieldstate)


### function getPriceVarInd

```csharp
char getPriceVarInd()
```

Returns the PriceVarInd. 

**Return**: Returns the PriceVarInd. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getPriceVarInd](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpricevarind)


### function getPriceVarIndFieldState

```csharp
MamdaFieldState getPriceVarIndFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getPriceVarIndFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getpricevarindfieldstate)


### function getSecurityStatusOrig

```csharp
string getSecurityStatusOrig()
```

Returns the SecurityStatusOrig. 

**Return**: Returns the SecurityStatusOrig. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSecurityStatusOrig](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorig)


### function getSecurityStatusOrigFieldState

```csharp
MamdaFieldState getSecurityStatusOrigFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSecurityStatusOrigFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatusorigfieldstate)


### function getImbalanceState

```csharp
string getImbalanceState()
```

Returns the SecurityStatusQual. 

**Return**: Returns the SecurityStatusQual. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getImbalanceState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancestate)


### function getImbalanceStateFieldState

```csharp
MamdaFieldState getImbalanceStateFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getImbalanceStateFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getimbalancestatefieldstate)


### function getSecurityStatusTime

```csharp
DateTime getSecurityStatusTime()
```

Returns the SecurityStatusTime. 

**Return**: Returns the SecurityStatusTime. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSecurityStatusTime](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustime)


### function getSecurityStatusTimeFieldState

```csharp
MamdaFieldState getSecurityStatusTimeFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSecurityStatusTimeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsecuritystatustimefieldstate)


### function getSellVolume

```csharp
long getSellVolume()
```

Returns the SellVolume. 

**Return**: Returns the SellVolume. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSellVolume](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsellvolume)


### function getSellVolumeFieldState

```csharp
MamdaFieldState getSellVolumeFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSellVolumeFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getsellvolumefieldstate)


### function getSeqNum

```csharp
int getSeqNum()
```

Returns the SeqNum. 

**Return**: Returns the SeqNum. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSeqNum](classWombat_1_1MamdaOrderImbalanceListener.html#function-getseqnum)


### function getSeqNumFieldState

```csharp
MamdaFieldState getSeqNumFieldState()
```

Returns the FieldState. 

**Return**: Returns the FieldState. 

**Reimplemented by**: [Wombat::MamdaOrderImbalanceListener::getSeqNumFieldState](classWombat_1_1MamdaOrderImbalanceListener.html#function-getseqnumfieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:13 +0100