---
title: Wombat::MamdaSecurityStatusUpdate
summary: MamdaSecurityStatusUpdate is an interface that provides access to security status related fields. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecurityStatusUpdate



[MamdaSecurityStatusUpdate]() is an interface that provides access to security status related fields. 

Inherited by [Wombat.MamdaSecurityStatusListener](classWombat_1_1MamdaSecurityStatusListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getSecurityStatus](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatus)**()<br>Return the security status as a long.  |
| long | **[getSecurityStatusQualifier](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusqualifier)**()<br>Return the security status qualifier as a long.  |
| [MamdaSecurityStatus.mamdaSecurityStatus](classWombat_1_1MamdaSecurityStatus.html#enum-mamdasecuritystatus) | **[getSecurityStatusEnum](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusenum)**()<br>[Wombat](namespaceWombat.html) normalised security status. See getSecurityStatusOrig for the original exchange value.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusEnumFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusenumfieldstate)**()<br>Get the field state  |
| MamdaSecurityStatusQual.mamdaSecurityStatusQual | **[getSecurityStatusQualifierEnum](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusqualifierenum)**()<br>Security status qualifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierEnumFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusqualifierenumfieldstate)**()<br>Get the field state  |
| string | **[getSecurityStatusStr](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusstr)**()<br>[Wombat](namespaceWombat.html) normalised security status. See getSecurityStatusOrig for the original exchange value.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusStrFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusstrfieldstate)**()<br>Get the field state  |
| string | **[getSecurityStatusQualifierStr](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusqualifierstr)**()<br>Security status qualifier.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierStrFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusqualifierstrfieldstate)**()<br>Get the field state  |
| string | **[getSecurityStatusOrigStr](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusorigstr)**()<br>Return the native security status qualifier  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusOrigStrFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getsecuritystatusorigstrfieldstate)**()<br>Get the field state  |
| string | **[getReason](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getreason)**()<br>Unnormalized (feed-specific) reason associated with the current status of the security (e.g. halted, delayed, etc.).  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getReasonFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getreasonfieldstate)**()<br>Get the field state  |
| char | **[getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getshortsalecircuitbreaker)**()<br>ShortSaleCircuitBreaker  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Get the field state  |
| DateTime | **[getLuldTime](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getluldtime)**()<br>[MamdaSecurityStatusUpdate.getLuldTime()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldTimeFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getluldtimefieldstate)**()<br>Get the field state  |
| char | **[getLuldIndicator](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getluldindicator)**()<br>[MamdaSecurityStatusUpdate.getLuldIndicator()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldIndicatorFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getluldindicatorfieldstate)**()<br>Get the field state  |
| MamaPrice | **[getLuldHighLimit](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getluldhighlimit)**()<br>[MamdaSecurityStatusUpdate.getLuldHighLimit()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldHighLimitFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getluldhighlimitfieldstate)**()<br>Get the field state  |
| MamaPrice | **[getLuldLowLimit](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getluldlowlimit)**()<br>[MamdaSecurityStatusUpdate.getLuldLowLimit()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldLowLimitFieldState](interfaceWombat_1_1MamdaSecurityStatusUpdate.html#function-getluldlowlimitfieldstate)**()<br>Get the field state  |

## Public Functions Documentation

### function getSecurityStatus

```csharp
long getSecurityStatus()
```

Return the security status as a long. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatus](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatus)


### function getSecurityStatusQualifier

```csharp
long getSecurityStatusQualifier()
```

Return the security status qualifier as a long. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusQualifier](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifier)


### function getSecurityStatusEnum

```csharp
MamdaSecurityStatus.mamdaSecurityStatus getSecurityStatusEnum()
```

[Wombat](namespaceWombat.html) normalised security status. See getSecurityStatusOrig for the original exchange value. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusEnum](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusenum)




* mamdaSecurityStatus.SECURITY_STATUS_NONE : No security status is known/available for this security. 
* mamdaSecurityStatus.SECURITY_STATUS_NORMAL : Security is open for normal quoting and trading 
* mamdaSecurityStatus.SECURITY_STATUS_CLOSED : Security is closed (usually before or after market open) 
* mamdaSecurityStatus.SECURITY_STATUS_HALTED : Security has been halted by exchange. 
* mamdaSecurityStatus.SECURITY_STATUS_NOT_EXIST : Security does not currently exist in cache (but it might in the future). 
* mamdaSecurityStatus.SECURITY_STATUS_DELETED : Security has been deleted (e.g., merger, expiration, etc.) 
* mamdaSecurityStatus.SECURITY_STATUS_AUCTION : Security has gone into auction. 
* mamdaSecurityStatus.SECURITY_STATUS_CROSSING : Security crossing. 
* mamdaSecurityStatus.SECURITY_STATUS_UNKNOWN : Security status is currently unknown. 


### function getSecurityStatusEnumFieldState

```csharp
MamdaFieldState getSecurityStatusEnumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusEnumFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusenumfieldstate)


### function getSecurityStatusQualifierEnum

```csharp
MamdaSecurityStatusQual.mamdaSecurityStatusQual getSecurityStatusQualifierEnum()
```

Security status qualifier. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusQualifierEnum](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierenum)




* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_NONE : No security status qualifier is known/available for this security. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_EXCUSED : An Excused withdrawl from the market. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_WITHDRAWN : Non-excused withdrawl by the market maker. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QIAL_SUSPENDED : Suspended Trading 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_RESUME : Resume trading/quoting after halt. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_QUOTE_RESUME : Resume quoting after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_TRADE_RESUME : Resume trading after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_RESUME_TIME : When the security is expected to resume trading. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_MKT_IMB_BUY : Market Imbalance - Buy. A 50,000 share or more excess of market orders to buy over market orders to sell as of 9:00am on expiration days. A MktImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_MKT_IMB_SELL : Market Imbalance - Sell. A 50,000 share or more excess of market orders to sell over market orders to buy as of 9:00am on expiration days. A MktImbSell implies an ordinary order imbalance (OrdImbSell). 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_NO_MKT_IMB : No Market Imbalance. Indicates that the imbalance of market orders for a security is less than 50,000 shares as of 9:00am on expiration days. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_MOC_IMB_BUY : Market On Close Imbalance - Buy. An excess of 50,000 share or more of MOC orders to buy over MOC orders to sell (including MOC sell plus and MOC sell short orders). A MocImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_MOC_IMB_SELL : Market On Close Imbalance - Sell. An excess of 50,000 share or more of MOC orders to sell (not including MOC sell short and MOC sell plus orders) over orders to buy (including MOC orders to buy minus). A MocImbSell implies an ordinary order imbalance (OrdImbSell). 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_NO_MOC_IMB : No Market On Close (MOC) Imbalance. The difference between the number of shares to buy MOC and the number of shares to sell MOC is less than 50,000. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_ORDER_IMB : Non-regulatory condition: a significant imbalance of buy or sell orders exists for this security. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_ORDER_INF : Non-regulatory condition where there is a significant influx of orders. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_ORDER_IMB_BUY : Non-regulatory condition: a significant imbalance of buy orders exists for this security. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_ORDER_IMB_SELL : Non-regulatory condition: a significant imbalance of sell orders exists for this security. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_ORDER_IMB_NONE : The earlier imbalance of buy or sell orders no longer exists for this security. It also might mean that there is no imbalance to begin with. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_RANGE_IND : Trading Range Indication. Not an Opening Delay or Trading Halted condition: this condition is used prior to the opening of a security to denote a probable trading range (bid and offer prices, no sizes). 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_ITS_PREOPEN : ITS pre-opening indication. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_RESERVED : Reserved (e.g., CME). 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_FROZEN : Frozen (e.g., CME). 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_PREOPEN : Preopening state (e.g., CME). 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_ADD_INFO : Additional Information. For a security that is Opening Delayed or Trading Halted, if inadequate information is disclosed during a "news dissemination or news pending" Opening Delay or Trading Halt, the Opening Delay or Trading Halt reason could be subsequently reported as "Additional Information." 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_OPEN_DELAY : Security's opening has been delayed by exchange. This value is usually followed by another value specifying the reason for the opening delay. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_NO_OPEN_NO_RESUME : Indicates that trading halt or opening delay will be in effect for the remainder of the trading day. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_PRICE_IND : An approximation of what a security's opening or re-opening price range (bid and offer prices, no sizes) will be when trading resumes after a delayed opening or after a trading halt. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_EQUIPMENT : Non-regulatory condition: the ability to trade this security by a participant is temporarily inhibited due to a systems, equipment or communications facility problem, or for other technical reasons. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_FILINGS : Not current in regulatory filings. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_NEWS : News pending. Denotes a regulatory trading halt due to an expected news announcement which influence the security. An Opening Delay or Trading Halt may be continued once the news has been disseminated. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_NEWS_DISSEM : News Dissemination. Denotes a regulatory trading halt when relevant news influencing the security is being disseminated. Trading is suspended until the primary market determines that an adequate publication or disclosure of information has occurred. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_LISTING : Listing Noncompliance. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_OPERATION : Operational Halt 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_INFO : Information Requested. Regulatory condition: more disclosure of information is requested by the exchange for this security. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_SEC : SEC Suspension. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_TIMES : News Resumption Times. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_OTHER : Other Regulatory Halt. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_RELATED : Related Security; In View Of Common. Non-regulatory condition: the halt or opening delay in this security is due to its relationship with another security. This condition also applies to non-common associated securities (e.g. warrants, rights, preferreds, classes, etc.) in view of the common stock. 
* mamdaSecurityStatusQual.SECURITY_STATUS_QUAL_IPO : Upcoming IPO issue not yet trading. 


### function getSecurityStatusQualifierEnumFieldState

```csharp
MamdaFieldState getSecurityStatusQualifierEnumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusQualifierEnumFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierenumfieldstate)


### function getSecurityStatusStr

```csharp
string getSecurityStatusStr()
```

[Wombat](namespaceWombat.html) normalised security status. See getSecurityStatusOrig for the original exchange value. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusStr](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusstr)




* None : No security status is known/available for this security. 
* Normal : Security is open for normal quoting and trading 
* Closed : Security is closed (usually before or after market open) 
* Halted : Security has been halted by exchange. 
* NotExist : Security does not currently exist in cache (but it might in the future). 
* Deleted : Security has been deleted (e.g., merger, expiration, etc.) 
* Auction : Security has gone into auction. 
* Crossing : Security crossing. 
* Unknown : Security status is currently unknown. 


### function getSecurityStatusStrFieldState

```csharp
MamdaFieldState getSecurityStatusStrFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusStrFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusstrfieldstate)


### function getSecurityStatusQualifierStr

```csharp
string getSecurityStatusQualifierStr()
```

Security status qualifier. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusQualifierStr](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierstr)




* None : No security status qualifier is known/available for this security. 
* Excused : An Excused withdrawl from the market. 
* Withdrawn : Non-excused withdrawl by the market maker. 
* Suspended : Suspended Trading 
* Resume : Resume trading/quoting after halt. 
* QuoteResume : Resume quoting after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* TradeResume : Resume trading after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* ResumeTime : When the security is expected to resume trading. 
* MktImbBuy : Market Imbalance - Buy. A 50,000 share or more excess of market orders to buy over market orders to sell as of 9:00am on expiration days. A MktImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* MktImbSell : Market Imbalance - Sell. A 50,000 share or more excess of market orders to sell over market orders to buy as of 9:00am on expiration days. A MktImbSell implies an ordinary order imbalance (OrdImbSell). 
* NoMktImb : No Market Imbalance. Indicates that the imbalance of market orders for a security is less than 50,000 shares as of 9:00am on expiration days. 
* MocImbBuy : Market On Close Imbalance - Buy. An excess of 50,000 share or more of MOC orders to buy over MOC orders to sell (including MOC sell plus and MOC sell short orders). A MocImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* MocImbSell : Market On Close Imbalance - Sell. An excess of 50,000 share or more of MOC orders to sell (not including MOC sell short and MOC sell plus orders) over orders to buy (including MOC orders to buy minus). A MocImbSell implies an ordinary order imbalance (OrdImbSell). 
* NoMocImb : No Market On Close (MOC) Imbalance. The difference between the number of shares to buy MOC and the number of shares to sell MOC is less than 50,000. 
* OrderImb : Non-regulatory condition: a significant imbalance of buy or sell orders exists for this security. 
* OrderInf : Non-regulatory condition where there is a significant influx of orders. 
* OrderImbBuy : Non-regulatory condition: a significant imbalance of buy orders exists for this security. 
* OrderImbSell : Non-regulatory condition: a significant imbalance of sell orders exists for this security. 
* OrderImbNone : The earlier imbalance of buy or sell orders no longer exists for this security. It also might mean that there is no imbalance to begin with. 
* RangeInd : Trading Range Indication. Not an Opening Delay or Trading Halted condition: this condition is used prior to the opening of a security to denote a probable trading range (bid and offer prices, no sizes). 
* ItsPreOpen : ITS pre-opening indication. 
* Reserved : Reserved (e.g., CME). 
* Frozen : Frozen (e.g., CME). 
* PreOpen : Preopening state (e.g., CME). 
* AddInfo : Additional Information. For a security that is Opening Delayed or Trading Halted, if inadequate information is disclosed during a "news dissemination or news pending" Opening Delay or Trading Halt, the Opening Delay or Trading Halt reason could be subsequently reported as "Additional Information." 
* OpenDelay : Security's opening has been delayed by exchange. This value is usually followed by another value specifying the reason for the opening delay. 
* NoOpenNoResume : Indicates that trading halt or opening delay will be in effect for the remainder of the trading day. 
* PriceInd : An approximation of what a security's opening or re-opening price range (bid and offer prices, no sizes) will be when trading resumes after a delayed opening or after a trading halt. 
* Equipment : Non-regulatory condition: the ability to trade this security by a participant is temporarily inhibited due to a systems, equipment or communications facility problem, or for other technical reasons. 
* Filings : Not current in regulatory filings. 
* News : News pending. Denotes a regulatory trading halt due to an expected news announcement which influence the security. An Opening Delay or Trading Halt may be continued once the news has been disseminated. 
* NewsDissem : News Dissemination. Denotes a regulatory trading halt when relevant news influencing the security is being disseminated. Trading is suspended until the primary market determines that an adequate publication or disclosure of information has occurred. 
* Listing : Listing Noncompliance. 
* Operation : Operational Halt 
* Info : Information Requested. Regulatory condition: more disclosure of information is requested by the exchange for this security. 
* SEC : SEC Suspension. 
* Times : News Resumption Times. 
* Other : Other Regulatory Halt. 
* Related : Related Security; In View Of Common. Non-regulatory condition: the halt or opening delay in this security is due to its relationship with another security. This condition also applies to non-common associated securities (e.g. warrants, rights, preferreds, classes, etc.) in view of the common stock. 
* IPO : Upcoming IPO issue not yet trading. 


### function getSecurityStatusQualifierStrFieldState

```csharp
MamdaFieldState getSecurityStatusQualifierStrFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusQualifierStrFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusqualifierstrfieldstate)


### function getSecurityStatusOrigStr

```csharp
string getSecurityStatusOrigStr()
```

Return the native security status qualifier 

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusOrigStr](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusorigstr)


### function getSecurityStatusOrigStrFieldState

```csharp
MamdaFieldState getSecurityStatusOrigStrFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getSecurityStatusOrigStrFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getsecuritystatusorigstrfieldstate)


### function getReason

```csharp
string getReason()
```

Unnormalized (feed-specific) reason associated with the current status of the security (e.g. halted, delayed, etc.). 

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getReason](classWombat_1_1MamdaSecurityStatusListener.html#function-getreason)


### function getReasonFieldState

```csharp
MamdaFieldState getReasonFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getReasonFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getreasonfieldstate)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

ShortSaleCircuitBreaker 

**Return**: return values: Blank: Short Sale Restriction Not in Effect. A: Short Sale Restriction Activiated. C: Short Sale Restriction Continued. D: Sale Restriction Deactivated. E: Sale Restriction in Effect.

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaSecurityStatusListener.html#function-getshortsalecircuitbreaker)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getshortsalecircuitbreakerfieldstate)


### function getLuldTime

```csharp
DateTime getLuldTime()
```

[MamdaSecurityStatusUpdate.getLuldTime()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getLuldTime](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldtime)


### function getLuldTimeFieldState

```csharp
MamdaFieldState getLuldTimeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getLuldTimeFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldtimefieldstate)


### function getLuldIndicator

```csharp
char getLuldIndicator()
```

[MamdaSecurityStatusUpdate.getLuldIndicator()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getLuldIndicator](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldindicator)


### function getLuldIndicatorFieldState

```csharp
MamdaFieldState getLuldIndicatorFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getLuldIndicatorFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldindicatorfieldstate)


### function getLuldHighLimit

```csharp
MamaPrice getLuldHighLimit()
```

[MamdaSecurityStatusUpdate.getLuldHighLimit()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getLuldHighLimit](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldhighlimit)


### function getLuldHighLimitFieldState

```csharp
MamdaFieldState getLuldHighLimitFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getLuldHighLimitFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldhighlimitfieldstate)


### function getLuldLowLimit

```csharp
MamaPrice getLuldLowLimit()
```

[MamdaSecurityStatusUpdate.getLuldLowLimit()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getLuldLowLimit](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldlowlimit)


### function getLuldLowLimitFieldState

```csharp
MamdaFieldState getLuldLowLimitFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaSecurityStatusListener::getLuldLowLimitFieldState](classWombat_1_1MamdaSecurityStatusListener.html#function-getluldlowlimitfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100