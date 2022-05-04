---
title: com::wombat::mamda::MamdaTradeReport
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaTradeReport



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| MamaPrice | **[getTradePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeprice)**() |
| short | **[getTradePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepricefieldstate)**() |
| double | **[getTradeVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradevolume)**() |
| short | **[getTradeVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradevolumefieldstate)**() |
| String | **[getTradePartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepartid)**() |
| short | **[getTradePartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepartidfieldstate)**() |
| String | **[getSide](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getside)**() |
| short | **[getSideFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getsidefieldstate)**() |
| String | **[getTradeId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeid)**() |
| short | **[getTradeIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeidfieldstate)**() |
| String | **[getTradeQual](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequal)**() |
| short | **[getTradeQualFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalfieldstate)**() |
| String | **[getTradeQualNativeStr](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalnativestr)**() |
| short | **[getTradeQualNativeStrFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalnativestrfieldstate)**() |
| String | **[getTradeCondition](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradecondition)**() |
| short | **[getTradeConditionFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeconditionfieldstate)**() |
| long | **[getTradeSellersSaleDays](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradesellerssaledays)**() |
| short | **[getTradeSellersSaleDaysFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradesellerssaledaysfieldstate)**() |
| char | **[getTradeStopStock](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradestopstock)**() |
| short | **[getTradeStopStockFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradestopstockfieldstate)**() |
| boolean | **[getIsIrregular](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getisirregular)**() |
| short | **[getIsIrregularFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getisirregularfieldstate)**() |
| char | **[getShortSaleCircuitBreaker](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getshortsalecircuitbreaker)**() |
| short | **[getShortSaleCircuitBreakerFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getshortsalecircuitbreakerfieldstate)**() |

## Additional inherited members

**Public Functions inherited from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| MamaDateTime | **[getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)**() |
| short | **[getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)**() |
| MamaDateTime | **[getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)**() |
| short | **[getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)**() |
| long | **[getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)**() |
| short | **[getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)**() |
| MamaDateTime | **[getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)**() |
| short | **[getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)**() |


## Detailed Description

```java
class com::wombat::mamda::MamdaTradeReport;
```


[MamdaTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html) is an interface that provides access to fields related to a trade report. This class is used for all trade reports, whether those trades qualify as regular or irregular trades. (A regular trade generally qualifies to update the official last price and intraday high/low prices.) 

## Public Functions Documentation

### function getTradePrice

```java
MamaPrice getTradePrice()
```


**Return**: The monetary value of an individual share of the security at the time of the trade. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradePrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeprice)


Return the trade price. 


### function getTradePriceFieldState

```java
short getTradePriceFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradepricefieldstate)


Return the trade price field state. 


### function getTradeVolume

```java
double getTradeVolume()
```


**Return**: The number of shares traded in a single transaction for an individual security. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradevolume)


Return the trade volume. 


### function getTradeVolumeFieldState

```java
short getTradeVolumeFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradevolumefieldstate)


Return the trade volume field state. 


### function getTradePartId

```java
String getTradePartId()
```


**Return**: Trade participant ID. This is typically an exchange ID or a market maker ID. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradePartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradepartid)


Return the participant identifier. 


### function getTradePartIdFieldState

```java
short getTradePartIdFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradePartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradepartidfieldstate)


Return the trade part ID field state. 


### function getSide

```java
String getSide()
```


**See**: [MamdaTradeRecap::getSide()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getside)) 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getSide](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getside)


(


### function getSideFieldState

```java
short getSideFieldState()
```


**See**: [MamdaTradeRecap::getSideFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsidefieldstate)) 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getSideFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsidefieldstate)


(


### function getTradeId

```java
String getTradeId()
```


**Return**: Trade ID. This is typically an exchange ID or a market maker ID. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeid)


Return the trade id. 


### function getTradeIdFieldState

```java
short getTradeIdFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeidfieldstate)


Return the trade ID field state. 


### function getTradeQual

```java
String getTradeQual()
```


**Return**: Trade qualifier. A normalized set of qualifiers for the current trade for the security. This field may contain multiple string values, separated by the colon(:) character.

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeQual](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradequal)


Return the normalized trade qualifier. 
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


### function getTradeQualFieldState

```java
short getTradeQualFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeQualFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradequalfieldstate)


Return the trade qualifier field state. 


### function getTradeQualNativeStr

```java
String getTradeQualNativeStr()
```


**See**: [getTradeQual()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequal)

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeQualNativeStr](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradequalnativestr)


The native, non normalized, trade qualifier. 


### function getTradeQualNativeStrFieldState

```java
short getTradeQualNativeStrFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeQualNativeStrFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradequalnativestrfieldstate)


Return the trade qualifier native field state. 


### function getTradeCondition

```java
String getTradeCondition()
```


**See**: [getTradeQual()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequal)

**Return**: Trade condition (a.k.a. "sale condition"). Feed-specific trade qualifier code(s). This field is provided primarily for completeness and/or troubleshooting. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeCondition](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradecondition)


Return the exchange provided trade condition. 


### function getTradeConditionFieldState

```java
short getTradeConditionFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeConditionFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeconditionfieldstate)


Return the trade condition field state. 


### function getTradeSellersSaleDays

```java
long getTradeSellersSaleDays()
```


**Return**: Seller's sale days. Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeSellersSaleDays](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradesellerssaledays)


Return the seller trade days. 


### function getTradeSellersSaleDaysFieldState

```java
short getTradeSellersSaleDaysFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeSellersSaleDaysFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradesellerssaledaysfieldstate)


Return the trade sellers sale days field state. 


### function getTradeStopStock

```java
char getTradeStopStock()
```


**Return**: Stopped stock indicator. Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable) 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeStopStock](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradestopstock)


Return the stopped stock indicator. 


### function getTradeStopStockFieldState

```java
short getTradeStopStockFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getTradeStopStockFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradestopstockfieldstate)


Return the trade stop stock field state. 


### function getIsIrregular

```java
boolean getIsIrregular()
```


**Return**: Whether or not the trade qualifies as an irregular trade. In general, only "regular" trades qualify to update the official last price and high/low prices. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getIsIrregular](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getisirregular)


Return whether this is an irregular trade. 


### function getIsIrregularFieldState

```java
short getIsIrregularFieldState()
```


**Return**: The field state 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getIsIrregularFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getisirregularfieldstate)


Return the isIrreglar field state. 


### function getShortSaleCircuitBreaker

```java
char getShortSaleCircuitBreaker()
```


**Return**: ShortSaleCircuitBreaker 

* return values: 
* Blank: Short Sale Restriction Not in Effect. 
* A: Short Sale Restriction Activiated. 
* C: Short Sale Restriction Continued. 
* D: Sale Restriction Deactivated. 
* E: Sale Restriction in Effect. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getShortSaleCircuitBreaker](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getshortsalecircuitbreaker)


get the ShortSaleCircuitBreaker 


### function getShortSaleCircuitBreakerFieldState

```java
short getShortSaleCircuitBreakerFieldState()
```


**Return**: the reason Field State 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getShortSaleCircuitBreakerFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getshortsalecircuitbreakerfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:13 +0100