---
title: Wombat::MamdaTradeReport
summary: MamdaTradeReport is an interface that provides access to fields related to a trade report. This class is used for all trade reports, whether those trades qualify as regular or irregular trades. (A regular trade generally qualifies to update the official last price and intraday high/low prices.) 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeReport



[MamdaTradeReport]() is an interface that provides access to fields related to a trade report. This class is used for all trade reports, whether those trades qualify as regular or irregular trades. (A regular trade generally qualifies to update the official last price and intraday high/low prices.) 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getTradePrice](interfaceWombat_1_1MamdaTradeReport.html#function-gettradeprice)**()<br>Return the trade price.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePriceFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradepricefieldstate)**()<br>Get the field state  |
| string | **[getTradeId](interfaceWombat_1_1MamdaTradeReport.html#function-gettradeid)**()<br>Return the trade id.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeIdFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradeidfieldstate)**()<br>Get the field state  |
| long | **[getTradeVolume](interfaceWombat_1_1MamdaTradeReport.html#function-gettradevolume)**()<br>Return the trade volume.  |
| string | **[getSide](interfaceWombat_1_1MamdaTradeReport.html#function-getside)**()<br>Returns the Aggressor side or TradeSide  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSideFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-getsidefieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeVolumeFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradevolumefieldstate)**()<br>Get the field state  |
| string | **[getTradePartId](interfaceWombat_1_1MamdaTradeReport.html#function-gettradepartid)**()<br>Return the participant identifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePartIdFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradepartidfieldstate)**()<br>Get the field state  |
| string | **[getTradeQual](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequal)**()<br>Return the normalized trade qualifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequalfieldstate)**()<br>Get the field state  |
| string | **[getTradeQualNativeStr](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequalnativestr)**()<br>The native, non normalized, trade qualifier. [getTradeQual](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequal) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualNativeStrFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequalnativestrfieldstate)**()<br>Get the field state  |
| string | **[getTradeCondition](interfaceWombat_1_1MamdaTradeReport.html#function-gettradecondition)**()<br>Return the exchange provided trade condition.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeConditionFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradeconditionfieldstate)**()<br>Get the field state  |
| long | **[getTradeSellersSaleDays](interfaceWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledays)**()<br>Return the seller trade days.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeSellersSaleDaysFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledaysfieldstate)**()<br>Get the field state  |
| char | **[getTradeStopStock](interfaceWombat_1_1MamdaTradeReport.html#function-gettradestopstock)**()<br>Return the stopped stock indicator.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeStopStockFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradestopstockfieldstate)**()<br>Get the field state  |
| bool | **[getIsIrregular](interfaceWombat_1_1MamdaTradeReport.html#function-getisirregular)**()<br>Return whether this is an irregular trade.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIrregularFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-getisirregularfieldstate)**()<br>Get the field state  |
| char | **[getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaTradeReport.html#function-getshortsalecircuitbreaker)**()<br>Get the ShortSaleCircuitBreaker  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Get the field state  |

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

### function getTradePrice

```csharp
MamaPrice getTradePrice()
```

Return the trade price. 

**Return**: The monetary value of an individual share of the security at the time of the trade.

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePrice](classWombat_1_1MamdaTradeListener.html#function-gettradeprice)


### function getTradePriceFieldState

```csharp
MamdaFieldState getTradePriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepricefieldstate)


### function getTradeId

```csharp
string getTradeId()
```

Return the trade id. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeId](classWombat_1_1MamdaTradeListener.html#function-gettradeid)


### function getTradeIdFieldState

```csharp
MamdaFieldState getTradeIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeidfieldstate)


### function getTradeVolume

```csharp
long getTradeVolume()
```

Return the trade volume. 

**Return**: The number of shares traded in a single transaction for an individual security.

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeVolume](classWombat_1_1MamdaTradeListener.html#function-gettradevolume)


### function getSide

```csharp
string getSide()
```

Returns the Aggressor side or TradeSide 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getSide](classWombat_1_1MamdaTradeListener.html#function-getside)


AggressorSide: 0 : No AggressorSide is currently known/available. 1 or B : Buy 2 or S : Sell

TradeSide: TRADE_SIDE_UNKNOWN TRADE_SIDE_BUY TRADE_SIDE_SELL


### function getSideFieldState

```csharp
MamdaFieldState getSideFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getSideFieldState](classWombat_1_1MamdaTradeListener.html#function-getsidefieldstate)


### function getTradeVolumeFieldState

```csharp
MamdaFieldState getTradeVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradevolumefieldstate)


### function getTradePartId

```csharp
string getTradePartId()
```

Return the participant identifier. 

**Return**: Trade participant ID. This is typically an exchange ID or a market maker ID. In the future, we will make this a configurable enumeration.

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePartId](classWombat_1_1MamdaTradeListener.html#function-gettradepartid)


### function getTradePartIdFieldState

```csharp
MamdaFieldState getTradePartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepartidfieldstate)


### function getTradeQual

```csharp
string getTradeQual()
```

Return the normalized trade qualifier. 

**Return**: Trade qualifier. A normalized set of qualifiers for the current trade for the security.

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQual](classWombat_1_1MamdaTradeListener.html#function-gettradequal)




This field may contain multiple string values, separated by the colon(:) character. In the future, we will make this a configurable enumeration.


| **Value** | **Meaning** |
|  -------- | -------- |
| Normal  | Regular trade. A trade made without stated conditions is deemed regular way for settlement on the third * business day following the transaction * date.   |
| Acquisition  | A transaction made on the Exchange as a result of an Exchange acquisition.   |
| Bunched  | A trade representing an aggregate of two or more regular trades in a security occurring at the same price either simultaneously or within the same 60 second period, with no individual trade exceeding 10,000 shares.   |
| Cash  | A transaction which calls for the delivery of securities and payment on the same day the trade takes place.   |
| Distribution  | Sale of a large block of stock in such a manner that the price is not adversely affected.   |
| BunchedSold  | A bunched trade which is reported late   |
| Rule155  | To qualify as a 155 print, a specialist arranges for the sale of the block at one "clean-up" price or at the different price limits on his book. If the block is sold at a "clean-up" price, the specialist should execute at the same price all the executable buy orders on his book. The sale qualifier is only applicable for AMEX trades.   |
| SoldLast  | Sold Last is used when a trade prints in sequence but is reported late or printed in conformance to the One or Two Point Rule.   |
| NextDay  | A transaction which calls for delivery of securities on the first business day after the trade date.   |
| Opened  | Indicates an opening transaction that is printed out of sequence or reported late or printed in conformance to the One or Two Point Rule.   |
| PriorRef  | An executed trade that relates to an obligation to trade at an earlier point in the trading day or that refer to a prior reference price. This may be the result of an order that was lost or misplaced or a SelectNet order that was not executed on a timely basis.   |
| Seller  | A Seller's option transaction is a special transaction which gives the seller the right to deliver the stock at any time within a specific period, ranging from not less than four calendar days to no more than 60 calendar days.   |
| SplitTrade  | An execution in two markets when the specialist or Market Maker in the market first receiving the order agrees to execute a portion of it at whatever price is realized in another market to which the balance of the order is forwarded for execution.   |
| FormT  | See PrePostMkt. Currently, all feed handlers that post Form-T trades - except CTA - send this qualifier for Form-T trades. In the next major release, all fields will use PrePostMkt and FormT will be obsolete.   |
| PrePostMkt  | A trade reported before or after the normal trade reporting day. This is also known as a Form-T trade. The volume of Form-T trades will be included in the calculation of total volume. The price information in Form-T trades will not be used to update high, low and last sale data for individual securities or Indices since they occur outside of normal trade reporting hours. Currently, all feed handlers that post Form-T trades - except CTA - send the "FormT" qualifier for Fot-T trades. In the next major release, all feed handlers will use PrePostMkt and FormT will be obsolete.   |
| AvPrice  | A trade where the price reported is based upon an average of the prices for transactions in a security during all or any portion of the trading day.   |
| Sold  | Sold is used when a trade is printed (reported) out of sequence and at a time different from the actual transaction time.   |
| Adjusted  | &#160;   |
| Auto  | A sale condition code that identifies a NYSE trade that has been automatically executed without the potential benefit of price improvement.    |
| Basket  | &#160;   |
| CashOnly  | &#160;   |
| NextDayOnly  | &#160;   |
| SpecTerms  | &#160;   |
| Stopped  | &#160;   |
| CATS  | &#160;   |
| VCT  | &#160;   |
| Rule127  | &#160;   |
| BurstBasket  | A burst basket execution signifies a trade wherein the equity Specialists, acting in the aggregate as a market maker, purchase or sell the component stocks required for execution of a specific basket trade.   |
| OpenDetail  | Opening trade detail message. Sent by CTS only and is a duplicate report of an earlier trade. Note: since feed handler version 2.14.32, it is configurable whether these detail messages are published.   |
| Detail  | Trade detail message. Sent by CTS only and is a duplicate report of an earlier trade. Note: since feed handler version 2.14.32, it is configurable whether these detail messages are published.   |
| Reserved  | &#160;   |
| BasketCross  | &#160;   |
| BasketIndexOnClose  | A basket index on close transaction signifies a trade involving paired basket orders,the execution of which is based on the closing value of the index. These trades are reported after the close when the index closing value is determined.   |
| IntermarketSweep  | Indicates to CTS data recipients that the execution price reflects the order instruction not to send the order to another market that may have a superior price.   |
| YellowFlag  | Regular trades reported during specific events as out of the ordinary.   |
| MarketCenterOpen  | &#160;   |
| MarketCenterClose  | &#160;   |
| Unknown  | &#160;   |


### function getTradeQualFieldState

```csharp
MamdaFieldState getTradeQualFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalfieldstate)


### function getTradeQualNativeStr

```csharp
string getTradeQualNativeStr()
```

The native, non normalized, trade qualifier. [getTradeQual](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequal)

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualNativeStr](classWombat_1_1MamdaTradeListener.html#function-gettradequalnativestr)


### function getTradeQualNativeStrFieldState

```csharp
MamdaFieldState getTradeQualNativeStrFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualNativeStrFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalnativestrfieldstate)


### function getTradeCondition

```csharp
string getTradeCondition()
```

Return the exchange provided trade condition. 

**Return**: Trade condition (a.k.a. "sale condition"). Feed-specific trade qualifier code(s). [getTradeQual](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequal)

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeCondition](classWombat_1_1MamdaTradeListener.html#function-gettradecondition)


### function getTradeConditionFieldState

```csharp
MamdaFieldState getTradeConditionFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeConditionFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeconditionfieldstate)


### function getTradeSellersSaleDays

```csharp
long getTradeSellersSaleDays()
```

Return the seller trade days. 

**Return**: Seller's sale days. Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security.

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledays)


### function getTradeSellersSaleDaysFieldState

```csharp
MamdaFieldState getTradeSellersSaleDaysFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledaysfieldstate)


### function getTradeStopStock

```csharp
char getTradeStopStock()
```

Return the stopped stock indicator. 

**Return**: Stopped stock indicator. Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable)

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeStopStock](classWombat_1_1MamdaTradeListener.html#function-gettradestopstock)


### function getTradeStopStockFieldState

```csharp
MamdaFieldState getTradeStopStockFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradestopstockfieldstate)


### function getIsIrregular

```csharp
bool getIsIrregular()
```

Return whether this is an irregular trade. 

**Return**: Whether or not the trade qualifies as an irregular trade. In general, only "regular" trades qualify to update the official last price and high/low prices. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIrregular](classWombat_1_1MamdaTradeListener.html#function-getisirregular)


### function getIsIrregularFieldState

```csharp
MamdaFieldState getIsIrregularFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIrregularFieldState](classWombat_1_1MamdaTradeListener.html#function-getisirregularfieldstate)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

Get the ShortSaleCircuitBreaker 

**Return**: Blank: Short Sale Restriction Not in Effect. A: Short Sale Restriction Activiated. C: Short Sale Restriction Continued. D: Sale Restriction Deactivated. E: Sale Restriction in Effect.

**Reimplemented by**: [Wombat::MamdaTradeListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreaker)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreakerfieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:16 +0100