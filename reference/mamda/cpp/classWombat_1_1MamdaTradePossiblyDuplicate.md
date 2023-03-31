---
title: Wombat::MamdaTradePossiblyDuplicate
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradePossiblyDuplicate



 [More...](#detailed-description)


`#include <MamdaTradePossiblyDuplicate.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getTradePrice](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradeprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePriceFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradepricefieldstate)**() const =0 |
| virtual mama_quantity_t | **[getTradeVolume](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradevolume)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeVolumeFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradevolumefieldstate)**() const =0 |
| virtual const char * | **[getTradePartId](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradepartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePartIdFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradepartidfieldstate)**() const =0 |
| virtual const char * | **[getTradeQual](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradequal)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradequalfieldstate)**() const =0 |
| virtual const char * | **[getTradeQualNative](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradequalnative)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualNativeFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradequalnativefieldstate)**() const =0 |
| virtual mama_u32_t | **[getTradeSellersSaleDays](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradesellerssaledays)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeSellersSaleDaysFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradesellerssaledaysfieldstate)**() const =0 |
| virtual char | **[getTradeStopStock](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradestopstock)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeStopStockFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradestopstockfieldstate)**() const =0 |
| virtual bool | **[getIsIrregular](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-getisirregular)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIrregularFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-getisirregularfieldstate)**() const =0 |
| virtual mama_u64_t | **[getOrderId](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-getorderid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrderIdFieldState](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-getorderidfieldstate)**() const =0 |
| virtual | **[~MamdaTradePossiblyDuplicate](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-~mamdatradepossiblyduplicate)**() |

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
class Wombat::MamdaTradePossiblyDuplicate;
```


[MamdaTradePossiblyDuplicate](classWombat_1_1MamdaTradePossiblyDuplicate.html) is an interface that provides access to fields related to trade updates which have been identified as being possible duplicates of previous updates. 

## Public Functions Documentation

### function getTradePrice

```cpp
virtual const MamaPrice & getTradePrice() const =0
```


**Return**: The monetary value of an individual share of the security at the time of the trade. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePrice](classWombat_1_1MamdaTradeListener.html#function-gettradeprice)


Get the trade price.


### function getTradePriceFieldState

```cpp
virtual MamdaFieldState getTradePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepricefieldstate)


Get the field state


### function getTradeVolume

```cpp
virtual mama_quantity_t getTradeVolume() const =0
```


**Return**: The number of shares traded in a single transaction for an individual security. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeVolume](classWombat_1_1MamdaTradeListener.html#function-gettradevolume)


Get the trade volume for this transaction.


### function getTradeVolumeFieldState

```cpp
virtual MamdaFieldState getTradeVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradevolumefieldstate)


Get the field state


### function getTradePartId

```cpp
virtual const char * getTradePartId() const =0
```


**Return**: Trade participant ID. This is typically an exchange ID or a market maker ID. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePartId](classWombat_1_1MamdaTradeListener.html#function-gettradepartid)


Get the participant identifier for this trade.


### function getTradePartIdFieldState

```cpp
virtual MamdaFieldState getTradePartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradePartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepartidfieldstate)


Get the field state


### function getTradeQual

```cpp
virtual const char * getTradeQual() const =0
```


**Return**: Trade qualifier. A normalized set of qualifiers for the current trade for the security. This field may contain multiple string values, separated by the colon(:) character. In the future, we will make this a configurable enumeration.

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQual](classWombat_1_1MamdaTradeListener.html#function-gettradequal)



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
| Unknown  | &nbsp; |


### function getTradeQualFieldState

```cpp
virtual MamdaFieldState getTradeQualFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalfieldstate)


Get the field state


### function getTradeQualNative

```cpp
virtual const char * getTradeQualNative() const =0
```


**See**: [getTradeQual()](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-gettradequal)

**Return**: Trade condition (a.k.a. "sale condition"). 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualNative](classWombat_1_1MamdaTradeListener.html#function-gettradequalnative)


Feed-specific trade qualifier code(s). This field is provided primarily for completeness and/or troubleshooting.


### function getTradeQualNativeFieldState

```cpp
virtual MamdaFieldState getTradeQualNativeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalnativefieldstate)


Get the field state


### function getTradeSellersSaleDays

```cpp
virtual mama_u32_t getTradeSellersSaleDays() const =0
```


**Return**: Seller's sale days. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledays)


Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security.


### function getTradeSellersSaleDaysFieldState

```cpp
virtual MamdaFieldState getTradeSellersSaleDaysFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledaysfieldstate)


Get the field state


### function getTradeStopStock

```cpp
virtual char getTradeStopStock() const =0
```


**Return**: Stopped stock indicator. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeStopStock](classWombat_1_1MamdaTradeListener.html#function-gettradestopstock)


Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable)


### function getTradeStopStockFieldState

```cpp
virtual MamdaFieldState getTradeStopStockFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradestopstockfieldstate)


Get the field state


### function getIsIrregular

```cpp
virtual bool getIsIrregular() const =0
```


**Return**: Whether or not the trade qualifies as an irregular trade. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIrregular](classWombat_1_1MamdaTradeListener.html#function-getisirregular)


In general, only "regular" trades qualify to update the official last price and high/low prices.


### function getIsIrregularFieldState

```cpp
virtual MamdaFieldState getIsIrregularFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIrregularFieldState](classWombat_1_1MamdaTradeListener.html#function-getisirregularfieldstate)


Get the field state


### function getOrderId

```cpp
virtual mama_u64_t getOrderId() const =0
```


**Return**: The trade message unique order id number (if available). 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrderId](classWombat_1_1MamdaTradeListener.html#function-getorderid)


Get the order id for the trade, if available.


### function getOrderIdFieldState

```cpp
virtual MamdaFieldState getOrderIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrderIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorderidfieldstate)


Get the field state


### function ~MamdaTradePossiblyDuplicate

```cpp
inline virtual ~MamdaTradePossiblyDuplicate()
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100