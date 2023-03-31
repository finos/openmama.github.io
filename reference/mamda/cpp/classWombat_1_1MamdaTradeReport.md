---
title: Wombat::MamdaTradeReport
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeReport



 [More...](#detailed-description)


`#include <MamdaTradeReport.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getTradePrice](classWombat_1_1MamdaTradeReport.html#function-gettradeprice)**() const =0 |
| virtual mama_quantity_t | **[getTradeVolume](classWombat_1_1MamdaTradeReport.html#function-gettradevolume)**() const =0 |
| virtual const char * | **[getTradePartId](classWombat_1_1MamdaTradeReport.html#function-gettradepartid)**() const =0 |
| virtual const char * | **[getTradeQual](classWombat_1_1MamdaTradeReport.html#function-gettradequal)**() const =0 |
| virtual const char * | **[getTradeQualNative](classWombat_1_1MamdaTradeReport.html#function-gettradequalnative)**() const =0 |
| virtual const char * | **[getSide](classWombat_1_1MamdaTradeReport.html#function-getside)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSideFieldState](classWombat_1_1MamdaTradeReport.html#function-getsidefieldstate)**() const =0 |
| virtual mama_u32_t | **[getTradeSellersSaleDays](classWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledays)**() const =0 |
| virtual char | **[getTradeStopStock](classWombat_1_1MamdaTradeReport.html#function-gettradestopstock)**() const =0 |
| virtual bool | **[getIsIrregular](classWombat_1_1MamdaTradeReport.html#function-getisirregular)**() const =0 |
| virtual mama_u64_t | **[getOrderId](classWombat_1_1MamdaTradeReport.html#function-getorderid)**() const =0 |
| virtual const char * | **[getUniqueId](classWombat_1_1MamdaTradeReport.html#function-getuniqueid)**() const =0 |
| virtual const char * | **[getTradeAction](classWombat_1_1MamdaTradeReport.html#function-gettradeaction)**() const =0 |
| virtual const char * | **[getTradeId](classWombat_1_1MamdaTradeReport.html#function-gettradeid)**() const =0 |
| virtual char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaTradeReport.html#function-getshortsalecircuitbreaker)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePriceFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradepricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeVolumeFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradevolumefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePartIdFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradepartidfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradequalfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualNativeFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradequalnativefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeSellersSaleDaysFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledaysfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeStopStockFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradestopstockfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIrregularFieldState](classWombat_1_1MamdaTradeReport.html#function-getisirregularfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrderIdFieldState](classWombat_1_1MamdaTradeReport.html#function-getorderidfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUniqueIdFieldState](classWombat_1_1MamdaTradeReport.html#function-getuniqueidfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeActionFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradeactionfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeIdFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradeidfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeReport.html#function-getshortsalecircuitbreakerfieldstate)**() const =0 |
| virtual | **[~MamdaTradeReport](classWombat_1_1MamdaTradeReport.html#function-~mamdatradereport)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaBasicEvent.html#function-getsymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsymbolfieldstate)**() const =0 |
| virtual const char * | **[getPartId](classWombat_1_1MamdaBasicEvent.html#function-getpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaBasicEvent.html#function-getpartidfieldstate)**() const =0 |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaBasicEvent.html#function-geteventtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaBasicEvent.html#function-getsrctime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaBasicEvent.html#function-getactivitytime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaBasicEvent.html#function-getlinetime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getlinetimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaBasicEvent.html#function-getsendtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsendtimefieldstate)**() const =0 |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)**() const =0 |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |


## Detailed Description

```cpp
class Wombat::MamdaTradeReport;
```


[MamdaTradeReport](classWombat_1_1MamdaTradeReport.html) is an interface that provides access to fields related to a trade report. This class is used for all trade reports, whether those trades qualify as regular or irregular trades. (A regular trade generally qualifies to update the official last price and intraday high/low prices.) 

## Public Functions Documentation

### function getTradePrice

```cpp
virtual const MamaPrice & getTradePrice() const =0
```


**Return**: The monetary value of an individual share of the security at the time of the trade. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePrice](classWombat_1_1MamdaTradeListener.html#function-gettradeprice)


Get the trade price. 


### function getTradeVolume

```cpp
virtual mama_quantity_t getTradeVolume() const =0
```


**Return**: The number of shares traded in a single transaction for an individual security. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeVolume](classWombat_1_1MamdaTradeListener.html#function-gettradevolume)


Get the volume of shares in the trade. 


### function getTradePartId

```cpp
virtual const char * getTradePartId() const =0
```


**Return**: Trade participant ID. This is typically an exchange ID or a market maker ID. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePartId](classWombat_1_1MamdaTradeListener.html#function-gettradepartid)


Get the participant identifier for the trade. 


### function getTradeQual

```cpp
virtual const char * getTradeQual() const =0
```


**Return**: Trade qualifier. A normalized set of qualifiers for the current trade for the security. This field may contain multiple string values, separated by the colon(:) character.

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQual](classWombat_1_1MamdaTradeListener.html#function-gettradequal)


Get the NYSE Technologies normalized trade qualifier. 
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
| Adjusted  | &nbsp; |
| Auto  | A sale condition code that identifies a NYSE trade that has been automatically executed without the potential benefit of price improvement.    |
| Basket  | &nbsp; |
| CashOnly  | &nbsp; |
| NextDayOnly  | &nbsp; |
| SpecTerms  | &nbsp; |
| Stopped  | &nbsp; |
| CATS  | &nbsp; |
| VCT  | &nbsp; |
| Rule127  | &nbsp; |
| BurstBasket  | A burst basket execution signifies a trade wherein the equity Specialists, acting in the aggregate as a market maker, purchase or sell the component stocks required for execution of a specific basket trade.   |
| OpenDetail  | Opening trade detail message. Sent by CTS only and is a duplicate report of an earlier trade. Note: since feed handler version 2.14.32, it is configurable whether these detail messages are published.   |
| Detail  | Trade detail message. Sent by CTS only and is a duplicate report of an earlier trade. Note: since feed handler version 2.14.32, it is configurable whether these detail messages are published.   |
| Reserved  | &nbsp; |
| BasketCross  | &nbsp; |
| BasketIndexOnClose  | A basket index on close transaction signifies a trade involving paired basket orders,the execution of which is based on the closing value of the index. These trades are reported after the close when the index closing value is determined.   |
| IntermarketSweep  | Indicates to CTS data recipients that the execution price reflects the order instruction not to send the order to another market that may have a superior price.   |
| YellowFlag  | Regular trades reported during specific events as out of the ordinary.   |
| MarketCenterOpen  | &nbsp; |
| MarketCenterClose  | &nbsp; |
| Unknown  | &nbsp; |


### function getTradeQualNative

```cpp
virtual const char * getTradeQualNative() const =0
```


**See**: [getTradeQual](classWombat_1_1MamdaTradeReport.html#function-gettradequal). 

**Return**: Native trade qualifier (a.k.a. "sale condition"). Feed-specific trade qualifier code(s). This field is provided primarily for completeness and/or troubleshooting. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualNative](classWombat_1_1MamdaTradeListener.html#function-gettradequalnative)


Get the native feed trade qualifier. 


### function getSide

```cpp
virtual const char * getSide() const =0
```


**Return**: the Aggressor Side or TradeSide TradeSide 

* 0 : No TradeSide is currently known/available. 
* 1 or B : Buy 
* 2 or S : Sell 
    * 
    * 0 : No AggressorSide is currently known/available. 
    * 1 or B : Buy 
    * 2 or S : Sell 
        * 

**Reimplemented by**: [Wombat::MamdaTradeListener::getSide](classWombat_1_1MamdaTradeListener.html#function-getside)


### function getSideFieldState

```cpp
virtual MamdaFieldState getSideFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getSideFieldState](classWombat_1_1MamdaTradeListener.html#function-getsidefieldstate)


The TradeSide or AggressorSide Field State. 


### function getTradeSellersSaleDays

```cpp
virtual mama_u32_t getTradeSellersSaleDays() const =0
```


**Return**: Seller's sale days. Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledays)


Get the trade sellers sale days. 


### function getTradeStopStock

```cpp
virtual char getTradeStopStock() const =0
```


**Return**: Stopped stock indicator. Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable) 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeStopStock](classWombat_1_1MamdaTradeListener.html#function-gettradestopstock)


Get the trade stop stock indicator. 


### function getIsIrregular

```cpp
virtual bool getIsIrregular() const =0
```


**Return**: Whether or not the trade qualifies as an irregular trade. In general, only "regular" trades qualify to update the official last price and high/low prices. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIrregular](classWombat_1_1MamdaTradeListener.html#function-getisirregular)


Get whether the trade is irregular. 


### function getOrderId

```cpp
virtual mama_u64_t getOrderId() const =0
```


**Return**: The trade message unique order id number (if available). 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrderId](classWombat_1_1MamdaTradeListener.html#function-getorderid)


Get the order id, if available. 


### function getUniqueId

```cpp
virtual const char * getUniqueId() const =0
```


**Return**: The unique ID 

**Reimplemented by**: [Wombat::MamdaTradeListener::getUniqueId](classWombat_1_1MamdaTradeListener.html#function-getuniqueid)


Get the unique ID 


### function getTradeAction

```cpp
virtual const char * getTradeAction() const =0
```


**Return**: The trade action 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeAction](classWombat_1_1MamdaTradeListener.html#function-gettradeaction)


Get the trade action 


### function getTradeId

```cpp
virtual const char * getTradeId() const =0
```


**Return**: the trade id 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeId](classWombat_1_1MamdaTradeListener.html#function-gettradeid)


Get the trade id 


### function getShortSaleCircuitBreaker

```cpp
virtual char getShortSaleCircuitBreaker() const =0
```


**Return**: ShortSaleCircuitBreaker 

* return values: 
* Blank: Short Sale Restriction Not in Effect. 
* A: Short Sale Restriction Activiated. 
* C: Short Sale Restriction Continued. 
* D: Sale Restriction Deactivated. 
* E: Sale Restriction in Effect. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreaker)


get the ShortSaleCircuitBreaker 


### function getTradePriceFieldState

```cpp
virtual MamdaFieldState getTradePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepricefieldstate)


The trade price Field State. 


### function getTradeVolumeFieldState

```cpp
virtual MamdaFieldState getTradeVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradevolumefieldstate)


The trade volume Field State. 


### function getTradePartIdFieldState

```cpp
virtual MamdaFieldState getTradePartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepartidfieldstate)


The trade part ID Field State. 


### function getTradeQualFieldState

```cpp
virtual MamdaFieldState getTradeQualFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalfieldstate)


The trade qual Field State. 


### function getTradeQualNativeFieldState

```cpp
virtual MamdaFieldState getTradeQualNativeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalnativefieldstate)


The trade quality native Field State. 


### function getTradeSellersSaleDaysFieldState

```cpp
virtual MamdaFieldState getTradeSellersSaleDaysFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledaysfieldstate)


The trade sellers sale days Field State. 


### function getTradeStopStockFieldState

```cpp
virtual MamdaFieldState getTradeStopStockFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradestopstockfieldstate)


The trade stop stock Field State. 


### function getIsIrregularFieldState

```cpp
virtual MamdaFieldState getIsIrregularFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIrregularFieldState](classWombat_1_1MamdaTradeListener.html#function-getisirregularfieldstate)


The isIrregular Field State. 


### function getOrderIdFieldState

```cpp
virtual MamdaFieldState getOrderIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrderIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorderidfieldstate)


The order ID Field State. 


### function getUniqueIdFieldState

```cpp
virtual MamdaFieldState getUniqueIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getUniqueIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getuniqueidfieldstate)


The unique ID Field State. 


### function getTradeActionFieldState

```cpp
virtual MamdaFieldState getTradeActionFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeActionFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeactionfieldstate)


The trade action Field State. 


### function getTradeIdFieldState

```cpp
virtual MamdaFieldState getTradeIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeidfieldstate)


The trade ID Field State. 


### function getShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getShortSaleCircuitBreakerFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreakerfieldstate)


### function ~MamdaTradeReport

```cpp
inline virtual ~MamdaTradeReport()
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100