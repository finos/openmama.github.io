---
title: Wombat::MamdaTradeRecap
summary: MamdaTradeRecap is an interface that provides access to trade related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeRecap



[MamdaTradeRecap]() is an interface that provides access to trade related fields. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaConcreteTradeRecap](classWombat_1_1MamdaConcreteTradeRecap.html), [Wombat.MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getLastPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastprice)**()<br>Monetary value of an individual share of the security at the time of the trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpricefieldstate)**()<br>Get the field state  |
| long | **[getLastVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastvolume)**()<br>Number of shares traded in a single transaction for an individual security.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastvolumefieldstate)**()<br>Get the field state  |
| string | **[getLastPartId](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpartid)**()<br>Trade participant ID. This is typically an exchange ID, sometimes a market maker ID.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPartIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpartidfieldstate)**()<br>Get the field state  |
| DateTime | **[getLastTime](interfaceWombat_1_1MamdaTradeRecap.html#function-getlasttime)**()<br>Time corresponding to the last trade, as reported by the feed The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastTimeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlasttimefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getIrregPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregprice)**()<br>Monetary value of an individual share of the security at the time of the last irregular trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpricefieldstate)**()<br>Get the field state  |
| long | **[getIrregVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregvolume)**()<br>Number of shares traded in a single transaction for an individual security.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregvolumefieldstate)**()<br>Get the field state  |
| string | **[getIrregPartId](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpartid)**()<br>Trade participant ID for the last irregular trade. This is typically an exchange ID, sometimes a market maker ID.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPartIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpartidfieldstate)**()<br>Get the field state  |
| DateTime | **[getIrregTime](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregtime)**()<br>Time corresponding to the last irregular trade, as reported by the feed The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregTimeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregtimefieldstate)**()<br>Get the field state  |
| DateTime | **[getTradeDate](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedatefieldstate)**()<br>Get the field state  |
| long | **[getTradeCount](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradecount)**()<br>The number of trades today.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeCountFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradecountfieldstate)**()<br>Get the field state  |
| long | **[getAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getaccvolume)**()<br>Total volume of shares traded in a security at the time it is disseminated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getaccvolumefieldstate)**()<br>Get the field state  |
| long | **[getOffExAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolume)**()<br>Total volume of shares traded off exchange in a security at the time it is disseminated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolumefieldstate)**()<br>Get the field state  |
| long | **[getOnExAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexaccvolume)**()<br>Total volume of shares traded on exchange in a security at the time it is disseminated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexaccvolumefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getNetChange](interfaceWombat_1_1MamdaTradeRecap.html#function-getnetchange)**()<br>Get the change in price compared with the previous closing price  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNetChangeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getnetchangefieldstate)**()<br>Get the field state  |
| double | **[getPctChange](interfaceWombat_1_1MamdaTradeRecap.html#function-getpctchange)**()<br>Change in price as a percentage.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPctChangeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getpctchangefieldstate)**()<br>Get the field state  |
| string | **[getTradeDirection](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedirection)**()<br>Trade tick direction. 0 : No direction is currently known/available.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDirectionFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedirectionfieldstate)**()<br>Get the field state  |
| string | **[getSide](interfaceWombat_1_1MamdaTradeRecap.html#function-getside)**()<br>Returns the Aggressor side or TradeSide  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSideFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsidefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getOpenPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getopenprice)**()<br>The price of the first qualifying trade in the security during the current trading day.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOpenPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getopenpricefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getHighPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighprice)**()<br>Highest price paid for security during the trading day.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighpricefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getLowPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowprice)**()<br>Lowest price paid for security during the trading day.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowpricefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getClosePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getcloseprice)**()<br>Today's closing price. The closing price field is populated when official closing prices are sent by the feed after the session close.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getClosePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getclosepricefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getPrevClosePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice)**()<br>The last qualifying trade price on the previous trading day. This field may be copied from the close price field during the morning "roll" of records in the feedhandler, or it may be obtained from a secondary source, or it may be explicitly sent by the feed prior to the opening of trading for the current day.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevClosePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosepricefieldstate)**()<br>Get the field state  |
| DateTime | **[getPrevCloseDate](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosedate)**()<br>Date corresponding to PrevClosePrice. [getPrevClosePrice()](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevCloseDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosedatefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getAdjPrevClose](interfaceWombat_1_1MamdaTradeRecap.html#function-getadjprevclose)**()<br>The previous close price adjusted by corporate actions, such as dividends and stock splits on the ex-date. [getPrevClosePrice()](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAdjPrevCloseFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getadjprevclosefieldstate)**()<br>Get the field state  |
| long | **[getBlockCount](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockcount)**()<br>The number of block trades (at least 10,000 shares) today.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockCountFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockcountfieldstate)**()<br>Get the field state  |
| long | **[getBlockVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockvolume)**()<br>Total volume of block trades today.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockvolumefieldstate)**()<br>Get the field state  |
| double | **[getVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getvwap)**()<br>Volume-weighted average price of a security at the time it is disseminated. Equivalent to dividing total value by total volume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getvwapfieldstate)**()<br>Get the field state  |
| double | **[getOffExVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexvwap)**()<br>Volume-weighted average off exchange price of a security at the time it is disseminated. Equivalent to dividing total value by total volume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexvwapfieldstate)**()<br>Get the field state  |
| double | **[getOnExVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexvwap)**()<br>Volume-weighted average on exchange price of a security at the time it is disseminated. Equivalent to dividing total value by total volume.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexvwapfieldstate)**()<br>Get the field state  |
| double | **[getTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvalue)**()<br>Total value of all shares traded in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvaluefieldstate)**()<br>Get the field state  |
| double | **[getOffExTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffextotalvalue)**()<br>Total value of all shares traded off exchange in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffextotalvaluefieldstate)**()<br>Get the field state  |
| double | **[getOnExTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-getonextotalvalue)**()<br>Total value of all shares traded on exchange in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonextotalvaluefieldstate)**()<br>Get the field state  |
| double | **[getStdDev](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddev)**()<br>Standard deviation of last trade price of a security at the time it is disseminated.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevfieldstate)**()<br>Get the field state  |
| double | **[getStdDevSum](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumfieldstate)**()<br>Get the field state  |
| double | **[getStdDevSumSquares](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquares)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumSquaresFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquaresfieldstate)**()<br>Get the field state  |
| long | **[getOrderId](interfaceWombat_1_1MamdaTradeRecap.html#function-getorderid)**()<br>Get the order id, if available.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrderIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getorderidfieldstate)**()<br>Get the field state  |
| MamaPrice | **[getSettlePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettleprice)**()<br>Future's / Options settlement price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettlePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettlepricefieldstate)**()<br>Get the field state  |
| DateTime | **[getSettleDate](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettledate)**()<br>Date corresponding to SettlePrice. [getSettlePrice()](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettleprice) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettleDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettledatefieldstate)**()<br>Get the field state  |
| string | **[getTradeExecVenue](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeexecvenue)**()<br>Trade execution venue. Unknown OnExchange OnExchangeOffBook OffExchange  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeExecVenueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeexecvenuefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getOffExchangeTradePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradeprice)**()<br>Monetary value of an individual off exchange share of the security at the time of the trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExchangeTradePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradepricefieldstate)**()<br>Get the field state  |
| MamaPrice | **[getOnExchangeTradePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexchangetradeprice)**()<br>Monetary value of an individual off exchange share of the security at the time of the trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExchangeTradePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexchangetradepricefieldstate)**()<br>Get the field state  |
| string | **[getTradeUnits](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeunits)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeUnitsFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeunitsfieldstate)**()<br>Get the field state  |
| long | **[getLastSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastseqnumfieldstate)**()<br>Get the field state  |
| long | **[getHighSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighseqnumfieldstate)**()<br>Get the field state  |
| long | **[getLowSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowseqnumfieldstate)**()<br>Get the field state  |
| long | **[getTotalVolumeSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalVolumeSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnumfieldstate)**()<br>Get the field state  |
| string | **[getCurrencyCode](interfaceWombat_1_1MamdaTradeRecap.html#function-getcurrencycode)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCurrencyCodeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getcurrencycodefieldstate)**()<br>Get the field state  |
| char | **[getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreaker)**()<br>Returns the ShortSaleCircuitBreaker  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Returns the FieldState, always MODIFIED  |

## Additional inherited members

**Public Functions inherited from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| DateTime | **[getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)**()<br>Returns the source time.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**()<br>Returns the field state.  |
| DateTime | **[getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**()<br>Returns the field state.  |
| long | **[getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**()<br>Returns the field state.  |
| DateTime | **[getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**()<br>Returns the field state.  |


## Public Functions Documentation

### function getLastPrice

```csharp
MamaPrice getLastPrice()
```

Monetary value of an individual share of the security at the time of the trade. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastprice), [Wombat::MamdaTradeListener::getLastPrice](classWombat_1_1MamdaTradeListener.html#function-getlastprice)


### function getLastPriceFieldState

```csharp
MamdaFieldState getLastPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastpricefieldstate), [Wombat::MamdaTradeListener::getLastPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastpricefieldstate)


### function getLastVolume

```csharp
long getLastVolume()
```

Number of shares traded in a single transaction for an individual security. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastvolume), [Wombat::MamdaTradeListener::getLastVolume](classWombat_1_1MamdaTradeListener.html#function-getlastvolume)


### function getLastVolumeFieldState

```csharp
MamdaFieldState getLastVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastvolumefieldstate), [Wombat::MamdaTradeListener::getLastVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastvolumefieldstate)


### function getLastPartId

```csharp
string getLastPartId()
```

Trade participant ID. This is typically an exchange ID, sometimes a market maker ID. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastpartid), [Wombat::MamdaTradeListener::getLastPartId](classWombat_1_1MamdaTradeListener.html#function-getlastpartid)


### function getLastPartIdFieldState

```csharp
MamdaFieldState getLastPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastPartIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastpartidfieldstate), [Wombat::MamdaTradeListener::getLastPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastpartidfieldstate)


### function getLastTime

```csharp
DateTime getLastTime()
```

Time corresponding to the last trade, as reported by the feed The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlasttime), [Wombat::MamdaTradeListener::getLastTime](classWombat_1_1MamdaTradeListener.html#function-getlasttime)


### function getLastTimeFieldState

```csharp
MamdaFieldState getLastTimeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlasttimefieldstate), [Wombat::MamdaTradeListener::getLastTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlasttimefieldstate)


### function getIrregPrice

```csharp
MamaPrice getIrregPrice()
```

Monetary value of an individual share of the security at the time of the last irregular trade. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getIrregPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregprice), [Wombat::MamdaTradeListener::getIrregPrice](classWombat_1_1MamdaTradeListener.html#function-getirregprice)


### function getIrregPriceFieldState

```csharp
MamdaFieldState getIrregPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getIrregPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregpricefieldstate), [Wombat::MamdaTradeListener::getIrregPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregpricefieldstate)


### function getIrregVolume

```csharp
long getIrregVolume()
```

Number of shares traded in a single transaction for an individual security. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getIrregVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregvolume), [Wombat::MamdaTradeListener::getIrregVolume](classWombat_1_1MamdaTradeListener.html#function-getirregvolume)


### function getIrregVolumeFieldState

```csharp
MamdaFieldState getIrregVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getIrregVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregvolumefieldstate), [Wombat::MamdaTradeListener::getIrregVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregvolumefieldstate)


### function getIrregPartId

```csharp
string getIrregPartId()
```

Trade participant ID for the last irregular trade. This is typically an exchange ID, sometimes a market maker ID. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getIrregPartId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregpartid), [Wombat::MamdaTradeListener::getIrregPartId](classWombat_1_1MamdaTradeListener.html#function-getirregpartid)


### function getIrregPartIdFieldState

```csharp
MamdaFieldState getIrregPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getIrregPartIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregpartidfieldstate), [Wombat::MamdaTradeListener::getIrregPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregpartidfieldstate)


### function getIrregTime

```csharp
DateTime getIrregTime()
```

Time corresponding to the last irregular trade, as reported by the feed The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getIrregTime](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregtime), [Wombat::MamdaTradeListener::getIrregTime](classWombat_1_1MamdaTradeListener.html#function-getirregtime)


### function getIrregTimeFieldState

```csharp
MamdaFieldState getIrregTimeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getIrregTimeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getirregtimefieldstate), [Wombat::MamdaTradeListener::getIrregTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregtimefieldstate)


### function getTradeDate

```csharp
DateTime getTradeDate()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradedate), [Wombat::MamdaTradeListener::getTradeDate](classWombat_1_1MamdaTradeListener.html#function-gettradedate)


### function getTradeDateFieldState

```csharp
MamdaFieldState getTradeDateFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeDateFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradedatefieldstate), [Wombat::MamdaTradeListener::getTradeDateFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradedatefieldstate)


### function getTradeCount

```csharp
long getTradeCount()
```

The number of trades today. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeCount](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradecount), [Wombat::MamdaTradeListener::getTradeCount](classWombat_1_1MamdaTradeListener.html#function-gettradecount)


### function getTradeCountFieldState

```csharp
MamdaFieldState getTradeCountFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeCountFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradecountfieldstate), [Wombat::MamdaTradeListener::getTradeCountFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradecountfieldstate)


### function getAccVolume

```csharp
long getAccVolume()
```

Total volume of shares traded in a security at the time it is disseminated. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getaccvolume), [Wombat::MamdaTradeListener::getAccVolume](classWombat_1_1MamdaTradeListener.html#function-getaccvolume)


### function getAccVolumeFieldState

```csharp
MamdaFieldState getAccVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getAccVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getaccvolumefieldstate), [Wombat::MamdaTradeListener::getAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getaccvolumefieldstate)


### function getOffExAccVolume

```csharp
long getOffExAccVolume()
```

Total volume of shares traded off exchange in a security at the time it is disseminated. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOffExAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexaccvolume), [Wombat::MamdaTradeListener::getOffExAccVolume](classWombat_1_1MamdaTradeListener.html#function-getoffexaccvolume)


### function getOffExAccVolumeFieldState

```csharp
MamdaFieldState getOffExAccVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOffExAccVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexaccvolumefieldstate), [Wombat::MamdaTradeListener::getOffExAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexaccvolumefieldstate)


### function getOnExAccVolume

```csharp
long getOnExAccVolume()
```

Total volume of shares traded on exchange in a security at the time it is disseminated. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOnExAccVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexaccvolume), [Wombat::MamdaTradeListener::getOnExAccVolume](classWombat_1_1MamdaTradeListener.html#function-getonexaccvolume)


### function getOnExAccVolumeFieldState

```csharp
MamdaFieldState getOnExAccVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOnExAccVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexaccvolumefieldstate), [Wombat::MamdaTradeListener::getOnExAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexaccvolumefieldstate)


### function getNetChange

```csharp
MamaPrice getNetChange()
```

Get the change in price compared with the previous closing price 

**Return**: Change in price compared with the previous closing price (i.e. previous closing price - trade price).

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getNetChange](classWombat_1_1MamdaConcreteTradeRecap.html#function-getnetchange), [Wombat::MamdaTradeListener::getNetChange](classWombat_1_1MamdaTradeListener.html#function-getnetchange)


### function getNetChangeFieldState

```csharp
MamdaFieldState getNetChangeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getNetChangeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getnetchangefieldstate), [Wombat::MamdaTradeListener::getNetChangeFieldState](classWombat_1_1MamdaTradeListener.html#function-getnetchangefieldstate)


### function getPctChange

```csharp
double getPctChange()
```

Change in price as a percentage. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getPctChange](classWombat_1_1MamdaConcreteTradeRecap.html#function-getpctchange), [Wombat::MamdaTradeListener::getPctChange](classWombat_1_1MamdaTradeListener.html#function-getpctchange)


### function getPctChangeFieldState

```csharp
MamdaFieldState getPctChangeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getPctChangeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getpctchangefieldstate), [Wombat::MamdaTradeListener::getPctChangeFieldState](classWombat_1_1MamdaTradeListener.html#function-getpctchangefieldstate)


### function getTradeDirection

```csharp
string getTradeDirection()
```

Trade tick direction. 0 : No direction is currently known/available. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeDirection](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradedirection), [Wombat::MamdaTradeListener::getTradeDirection](classWombat_1_1MamdaTradeListener.html#function-gettradedirection)




* : Up tick.
* : Down tick. 0+ : Unchanged; Previous move was up tick. 0- : Unchanged; Previous move was down tick. NA : Not applicable. (If it is meaningful to have such a value for some exchanges.)


### function getTradeDirectionFieldState

```csharp
MamdaFieldState getTradeDirectionFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeDirectionFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradedirectionfieldstate), [Wombat::MamdaTradeListener::getTradeDirectionFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradedirectionfieldstate)


### function getSide

```csharp
string getSide()
```

Returns the Aggressor side or TradeSide 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getSide](classWombat_1_1MamdaConcreteTradeRecap.html#function-getside), [Wombat::MamdaTradeListener::getSide](classWombat_1_1MamdaTradeListener.html#function-getside)


AggressorSide: 0 : No AggressorSide is currently known/available. 1 or B : Buy 2 or S : Sell

TradeSide: TRADE_SIDE_UNKNOWN TRADE_SIDE_BUY TRADE_SIDE_SELL


### function getSideFieldState

```csharp
MamdaFieldState getSideFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getSideFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsidefieldstate), [Wombat::MamdaTradeListener::getSideFieldState](classWombat_1_1MamdaTradeListener.html#function-getsidefieldstate)


### function getOpenPrice

```csharp
MamaPrice getOpenPrice()
```

The price of the first qualifying trade in the security during the current trading day. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOpenPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getopenprice), [Wombat::MamdaTradeListener::getOpenPrice](classWombat_1_1MamdaTradeListener.html#function-getopenprice)


### function getOpenPriceFieldState

```csharp
MamdaFieldState getOpenPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOpenPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getopenpricefieldstate), [Wombat::MamdaTradeListener::getOpenPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getopenpricefieldstate)


### function getHighPrice

```csharp
MamaPrice getHighPrice()
```

Highest price paid for security during the trading day. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getHighPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-gethighprice), [Wombat::MamdaTradeListener::getHighPrice](classWombat_1_1MamdaTradeListener.html#function-gethighprice)


### function getHighPriceFieldState

```csharp
MamdaFieldState getHighPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getHighPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gethighpricefieldstate), [Wombat::MamdaTradeListener::getHighPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gethighpricefieldstate)


### function getLowPrice

```csharp
MamaPrice getLowPrice()
```

Lowest price paid for security during the trading day. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLowPrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlowprice), [Wombat::MamdaTradeListener::getLowPrice](classWombat_1_1MamdaTradeListener.html#function-getlowprice)


### function getLowPriceFieldState

```csharp
MamdaFieldState getLowPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLowPriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlowpricefieldstate), [Wombat::MamdaTradeListener::getLowPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getlowpricefieldstate)


### function getClosePrice

```csharp
MamaPrice getClosePrice()
```

Today's closing price. The closing price field is populated when official closing prices are sent by the feed after the session close. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getClosePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcloseprice), [Wombat::MamdaTradeListener::getClosePrice](classWombat_1_1MamdaTradeListener.html#function-getcloseprice)


### function getClosePriceFieldState

```csharp
MamdaFieldState getClosePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getClosePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getclosepricefieldstate), [Wombat::MamdaTradeListener::getClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getclosepricefieldstate)


### function getPrevClosePrice

```csharp
MamaPrice getPrevClosePrice()
```

The last qualifying trade price on the previous trading day. This field may be copied from the close price field during the morning "roll" of records in the feedhandler, or it may be obtained from a secondary source, or it may be explicitly sent by the feed prior to the opening of trading for the current day. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getPrevClosePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getprevcloseprice), [Wombat::MamdaTradeListener::getPrevClosePrice](classWombat_1_1MamdaTradeListener.html#function-getprevcloseprice)


### function getPrevClosePriceFieldState

```csharp
MamdaFieldState getPrevClosePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getPrevClosePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getprevclosepricefieldstate), [Wombat::MamdaTradeListener::getPrevClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getprevclosepricefieldstate)


### function getPrevCloseDate

```csharp
DateTime getPrevCloseDate()
```

Date corresponding to PrevClosePrice. [getPrevClosePrice()](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice)

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getPrevCloseDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-getprevclosedate), [Wombat::MamdaTradeListener::getPrevCloseDate](classWombat_1_1MamdaTradeListener.html#function-getprevclosedate)


### function getPrevCloseDateFieldState

```csharp
MamdaFieldState getPrevCloseDateFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getPrevCloseDateFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getprevclosedatefieldstate), [Wombat::MamdaTradeListener::getPrevCloseDateFieldState](classWombat_1_1MamdaTradeListener.html#function-getprevclosedatefieldstate)


### function getAdjPrevClose

```csharp
MamaPrice getAdjPrevClose()
```

The previous close price adjusted by corporate actions, such as dividends and stock splits on the ex-date. [getPrevClosePrice()](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice)

**Return**: The adjusted previous closing price.

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getAdjPrevClose](classWombat_1_1MamdaConcreteTradeRecap.html#function-getadjprevclose), [Wombat::MamdaTradeListener::getAdjPrevClose](classWombat_1_1MamdaTradeListener.html#function-getadjprevclose)


### function getAdjPrevCloseFieldState

```csharp
MamdaFieldState getAdjPrevCloseFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getAdjPrevCloseFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getadjprevclosefieldstate), [Wombat::MamdaTradeListener::getAdjPrevCloseFieldState](classWombat_1_1MamdaTradeListener.html#function-getadjprevclosefieldstate)


### function getBlockCount

```csharp
long getBlockCount()
```

The number of block trades (at least 10,000 shares) today. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getBlockCount](classWombat_1_1MamdaConcreteTradeRecap.html#function-getblockcount), [Wombat::MamdaTradeListener::getBlockCount](classWombat_1_1MamdaTradeListener.html#function-getblockcount)


### function getBlockCountFieldState

```csharp
MamdaFieldState getBlockCountFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getBlockCountFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getblockcountfieldstate), [Wombat::MamdaTradeListener::getBlockCountFieldState](classWombat_1_1MamdaTradeListener.html#function-getblockcountfieldstate)


### function getBlockVolume

```csharp
long getBlockVolume()
```

Total volume of block trades today. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getBlockVolume](classWombat_1_1MamdaConcreteTradeRecap.html#function-getblockvolume), [Wombat::MamdaTradeListener::getBlockVolume](classWombat_1_1MamdaTradeListener.html#function-getblockvolume)


### function getBlockVolumeFieldState

```csharp
MamdaFieldState getBlockVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getBlockVolumeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getblockvolumefieldstate), [Wombat::MamdaTradeListener::getBlockVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getblockvolumefieldstate)


### function getVwap

```csharp
double getVwap()
```

Volume-weighted average price of a security at the time it is disseminated. Equivalent to dividing total value by total volume. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-getvwap), [Wombat::MamdaTradeListener::getVwap](classWombat_1_1MamdaTradeListener.html#function-getvwap)


### function getVwapFieldState

```csharp
MamdaFieldState getVwapFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getVwapFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getvwapfieldstate), [Wombat::MamdaTradeListener::getVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getvwapfieldstate)


### function getOffExVwap

```csharp
double getOffExVwap()
```

Volume-weighted average off exchange price of a security at the time it is disseminated. Equivalent to dividing total value by total volume. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOffExVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexvwap), [Wombat::MamdaTradeListener::getOffExVwap](classWombat_1_1MamdaTradeListener.html#function-getoffexvwap)


### function getOffExVwapFieldState

```csharp
MamdaFieldState getOffExVwapFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOffExVwapFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexvwapfieldstate), [Wombat::MamdaTradeListener::getOffExVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexvwapfieldstate)


### function getOnExVwap

```csharp
double getOnExVwap()
```

Volume-weighted average on exchange price of a security at the time it is disseminated. Equivalent to dividing total value by total volume. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOnExVwap](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexvwap), [Wombat::MamdaTradeListener::getOnExVwap](classWombat_1_1MamdaTradeListener.html#function-getonexvwap)


### function getOnExVwapFieldState

```csharp
MamdaFieldState getOnExVwapFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOnExVwapFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexvwapfieldstate), [Wombat::MamdaTradeListener::getOnExVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexvwapfieldstate)


### function getTotalValue

```csharp
double getTotalValue()
```

Total value of all shares traded in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettotalvalue), [Wombat::MamdaTradeListener::getTotalValue](classWombat_1_1MamdaTradeListener.html#function-gettotalvalue)


### function getTotalValueFieldState

```csharp
MamdaFieldState getTotalValueFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTotalValueFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettotalvaluefieldstate), [Wombat::MamdaTradeListener::getTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-gettotalvaluefieldstate)


### function getOffExTotalValue

```csharp
double getOffExTotalValue()
```

Total value of all shares traded off exchange in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOffExTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffextotalvalue), [Wombat::MamdaTradeListener::getOffExTotalValue](classWombat_1_1MamdaTradeListener.html#function-getoffextotalvalue)


### function getOffExTotalValueFieldState

```csharp
MamdaFieldState getOffExTotalValueFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOffExTotalValueFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffextotalvaluefieldstate), [Wombat::MamdaTradeListener::getOffExTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffextotalvaluefieldstate)


### function getOnExTotalValue

```csharp
double getOnExTotalValue()
```

Total value of all shares traded on exchange in a security at the time it is disseminated. Calculated by the sum of multiplying the trade price by trade volume for each qualifying trade. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOnExTotalValue](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonextotalvalue), [Wombat::MamdaTradeListener::getOnExTotalValue](classWombat_1_1MamdaTradeListener.html#function-getonextotalvalue)


### function getOnExTotalValueFieldState

```csharp
MamdaFieldState getOnExTotalValueFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOnExTotalValueFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonextotalvaluefieldstate), [Wombat::MamdaTradeListener::getOnExTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-getonextotalvaluefieldstate)


### function getStdDev

```csharp
double getStdDev()
```

Standard deviation of last trade price of a security at the time it is disseminated. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getStdDev](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddev), [Wombat::MamdaTradeListener::getStdDev](classWombat_1_1MamdaTradeListener.html#function-getstddev)


### function getStdDevFieldState

```csharp
MamdaFieldState getStdDevFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getStdDevFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevfieldstate), [Wombat::MamdaTradeListener::getStdDevFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevfieldstate)


### function getStdDevSum

```csharp
double getStdDevSum()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getStdDevSum](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevsum), [Wombat::MamdaTradeListener::getStdDevSum](classWombat_1_1MamdaTradeListener.html#function-getstddevsum)


### function getStdDevSumFieldState

```csharp
MamdaFieldState getStdDevSumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getStdDevSumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevsumfieldstate), [Wombat::MamdaTradeListener::getStdDevSumFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevsumfieldstate)


### function getStdDevSumSquares

```csharp
double getStdDevSumSquares()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getStdDevSumSquares](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevsumsquares), [Wombat::MamdaTradeListener::getStdDevSumSquares](classWombat_1_1MamdaTradeListener.html#function-getstddevsumsquares)


### function getStdDevSumSquaresFieldState

```csharp
MamdaFieldState getStdDevSumSquaresFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getStdDevSumSquaresFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getstddevsumsquaresfieldstate), [Wombat::MamdaTradeListener::getStdDevSumSquaresFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevsumsquaresfieldstate)


### function getOrderId

```csharp
long getOrderId()
```

Get the order id, if available. 

**Return**: The trade message unique order id number (if available).

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOrderId](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorderid), [Wombat::MamdaTradeListener::getOrderId](classWombat_1_1MamdaTradeListener.html#function-getorderid)


### function getOrderIdFieldState

```csharp
MamdaFieldState getOrderIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOrderIdFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getorderidfieldstate), [Wombat::MamdaTradeListener::getOrderIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorderidfieldstate)


### function getSettlePrice

```csharp
MamaPrice getSettlePrice()
```

Future's / Options settlement price. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getSettlePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettleprice), [Wombat::MamdaTradeListener::getSettlePrice](classWombat_1_1MamdaTradeListener.html#function-getsettleprice)


### function getSettlePriceFieldState

```csharp
MamdaFieldState getSettlePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getSettlePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettlepricefieldstate), [Wombat::MamdaTradeListener::getSettlePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getsettlepricefieldstate)


### function getSettleDate

```csharp
DateTime getSettleDate()
```

Date corresponding to SettlePrice. [getSettlePrice()](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettleprice)

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getSettleDate](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettledate), [Wombat::MamdaTradeListener::getSettleDate](classWombat_1_1MamdaTradeListener.html#function-getsettledate)


### function getSettleDateFieldState

```csharp
MamdaFieldState getSettleDateFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getSettleDateFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getsettledatefieldstate), [Wombat::MamdaTradeListener::getSettleDateFieldState](classWombat_1_1MamdaTradeListener.html#function-getsettledatefieldstate)


### function getTradeExecVenue

```csharp
string getTradeExecVenue()
```

Trade execution venue. Unknown OnExchange OnExchangeOffBook OffExchange 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeExecVenue](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeexecvenue), [Wombat::MamdaTradeListener::getTradeExecVenue](classWombat_1_1MamdaTradeListener.html#function-gettradeexecvenue)


### function getTradeExecVenueFieldState

```csharp
MamdaFieldState getTradeExecVenueFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeExecVenueFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeexecvenuefieldstate), [Wombat::MamdaTradeListener::getTradeExecVenueFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeexecvenuefieldstate)


### function getOffExchangeTradePrice

```csharp
MamaPrice getOffExchangeTradePrice()
```

Monetary value of an individual off exchange share of the security at the time of the trade. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOffExchangeTradePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexchangetradeprice), [Wombat::MamdaTradeListener::getOffExchangeTradePrice](classWombat_1_1MamdaTradeListener.html#function-getoffexchangetradeprice)


### function getOffExchangeTradePriceFieldState

```csharp
MamdaFieldState getOffExchangeTradePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOffExchangeTradePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getoffexchangetradepricefieldstate), [Wombat::MamdaTradeListener::getOffExchangeTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexchangetradepricefieldstate)


### function getOnExchangeTradePrice

```csharp
MamaPrice getOnExchangeTradePrice()
```

Monetary value of an individual off exchange share of the security at the time of the trade. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOnExchangeTradePrice](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexchangetradeprice), [Wombat::MamdaTradeListener::getOnExchangeTradePrice](classWombat_1_1MamdaTradeListener.html#function-getonexchangetradeprice)


### function getOnExchangeTradePriceFieldState

```csharp
MamdaFieldState getOnExchangeTradePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getOnExchangeTradePriceFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getonexchangetradepricefieldstate), [Wombat::MamdaTradeListener::getOnExchangeTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexchangetradepricefieldstate)


### function getTradeUnits

```csharp
string getTradeUnits()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeUnits](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeunits), [Wombat::MamdaTradeListener::getTradeUnits](classWombat_1_1MamdaTradeListener.html#function-gettradeunits)


### function getTradeUnitsFieldState

```csharp
MamdaFieldState getTradeUnitsFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTradeUnitsFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettradeunitsfieldstate), [Wombat::MamdaTradeListener::getTradeUnitsFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeunitsfieldstate)


### function getLastSeqNum

```csharp
long getLastSeqNum()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastseqnum), [Wombat::MamdaTradeListener::getLastSeqNum](classWombat_1_1MamdaTradeListener.html#function-getlastseqnum)


### function getLastSeqNumFieldState

```csharp
MamdaFieldState getLastSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLastSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlastseqnumfieldstate), [Wombat::MamdaTradeListener::getLastSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastseqnumfieldstate)


### function getHighSeqNum

```csharp
long getHighSeqNum()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getHighSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-gethighseqnum), [Wombat::MamdaTradeListener::getHighSeqNum](classWombat_1_1MamdaTradeListener.html#function-gethighseqnum)


### function getHighSeqNumFieldState

```csharp
MamdaFieldState getHighSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getHighSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gethighseqnumfieldstate), [Wombat::MamdaTradeListener::getHighSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-gethighseqnumfieldstate)


### function getLowSeqNum

```csharp
long getLowSeqNum()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLowSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlowseqnum), [Wombat::MamdaTradeListener::getLowSeqNum](classWombat_1_1MamdaTradeListener.html#function-getlowseqnum)


### function getLowSeqNumFieldState

```csharp
MamdaFieldState getLowSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getLowSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getlowseqnumfieldstate), [Wombat::MamdaTradeListener::getLowSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getlowseqnumfieldstate)


### function getTotalVolumeSeqNum

```csharp
long getTotalVolumeSeqNum()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTotalVolumeSeqNum](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettotalvolumeseqnum), [Wombat::MamdaTradeListener::getTotalVolumeSeqNum](classWombat_1_1MamdaTradeListener.html#function-gettotalvolumeseqnum)


### function getTotalVolumeSeqNumFieldState

```csharp
MamdaFieldState getTotalVolumeSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getTotalVolumeSeqNumFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-gettotalvolumeseqnumfieldstate), [Wombat::MamdaTradeListener::getTotalVolumeSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-gettotalvolumeseqnumfieldstate)


### function getCurrencyCode

```csharp
string getCurrencyCode()
```


**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getCurrencyCode](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcurrencycode), [Wombat::MamdaTradeListener::getCurrencyCode](classWombat_1_1MamdaTradeListener.html#function-getcurrencycode)


### function getCurrencyCodeFieldState

```csharp
MamdaFieldState getCurrencyCodeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getCurrencyCodeFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getcurrencycodefieldstate), [Wombat::MamdaTradeListener::getCurrencyCodeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcurrencycodefieldstate)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

Returns the ShortSaleCircuitBreaker 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getShortSaleCircuitBreaker](classWombat_1_1MamdaConcreteTradeRecap.html#function-getshortsalecircuitbreaker), [Wombat::MamdaTradeListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreaker)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Returns the FieldState, always MODIFIED 

**Return**: 

**Reimplemented by**: [Wombat::MamdaConcreteTradeRecap::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaConcreteTradeRecap.html#function-getshortsalecircuitbreakerfieldstate), [Wombat::MamdaTradeListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreakerfieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100