---
title: Wombat::MamdaSecStatusRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecStatusRecap



 [More...](#detailed-description)


`#include <MamdaSecStatusRecap.h>`

Inherits from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat::MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getIssueSymbol](classWombat_1_1MamdaSecStatusRecap.html#function-getissuesymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIssueSymbolFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getissuesymbolfieldstate)**() const =0 |
| virtual const char * | **[getReason](classWombat_1_1MamdaSecStatusRecap.html#function-getreason)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getReasonFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getreasonfieldstate)**() const =0 |
| virtual char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaSecStatusRecap.html#function-getshortsalecircuitbreaker)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getshortsalecircuitbreakerfieldstate)**() const =0 |
| virtual char | **[getSecurityAction](classWombat_1_1MamdaSecStatusRecap.html#function-getsecurityaction)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityActionFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecurityactionfieldstate)**() const =0 |
| virtual const char * | **[getSecurityType](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritytype)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityTypeFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritytypefieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatus](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatus)**() const =0 |
| virtual [MamdaSecurityStatus](namespaceWombat.html#enum-mamdasecuritystatus) | **[getSecurityStatusEnum](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusenum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusEnumFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusenumfieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatusStr](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusstr)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusStrFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusstrfieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatusQual](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqual)**() const =0 |
| virtual [MamdaSecurityStatusQual](namespaceWombat.html#enum-mamdasecuritystatusqual) | **[getSecurityStatusQualifierEnum](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualifierenum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualifierEnumFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualifierenumfieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatusQualStr](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualstr)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualStrFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualstrfieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatusNative](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusnative)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusNativeFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusnativefieldstate)**() const =0 |
| virtual const char * | **[getFreeText](classWombat_1_1MamdaSecStatusRecap.html#function-getfreetext)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getFreeTextFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getfreetextfieldstate)**() const =0 |
| virtual const char | **[getLuldIndicator](classWombat_1_1MamdaSecStatusRecap.html#function-getluldindicator)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldIndicatorFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getluldindicatorfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLuldTime](classWombat_1_1MamdaSecStatusRecap.html#function-getluldtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldTimeFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getluldtimefieldstate)**() const =0 |
| virtual const MamaPrice & | **[getLuldHighLimit](classWombat_1_1MamdaSecStatusRecap.html#function-getluldhighlimit)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldHighLimitFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getluldhighlimitfieldstate)**() const =0 |
| virtual const MamaPrice & | **[getLuldLowLimit](classWombat_1_1MamdaSecStatusRecap.html#function-getluldlowlimit)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLuldLowLimitFieldState](classWombat_1_1MamdaSecStatusRecap.html#function-getluldlowlimitfieldstate)**() const =0 |
| virtual | **[~MamdaSecStatusRecap](classWombat_1_1MamdaSecStatusRecap.html#function-~mamdasecstatusrecap)**() |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaBasicRecap.html#function-getsymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)**() const =0 |
| virtual const char * | **[getPartId](classWombat_1_1MamdaBasicRecap.html#function-getpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaBasicRecap.html#function-getpartidfieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaBasicRecap.html#function-getsrctime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsrctimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaBasicRecap.html#function-getactivitytime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getactivitytimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaBasicRecap.html#function-getlinetime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)**() const =0 |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaBasicRecap.html#function-getsendtime)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)**() const =0 |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |


## Detailed Description

```cpp
class Wombat::MamdaSecStatusRecap;
```


[MamdaSecStatus](classWombat_1_1MamdaSecStatus.html) is an interface that provides access to the Security Status fields such as symbol announce messages. 

## Public Functions Documentation

### function getIssueSymbol

```cpp
virtual const char * getIssueSymbol() const =0
```


**Return**: The symbol name. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getIssueSymbol](classWombat_1_1MamdaSecStatusListener.html#function-getissuesymbol)


The "name" of the instrument (e.g. IBM, CSCO, MSFT.INCA, etc.).


### function getIssueSymbolFieldState

```cpp
virtual MamdaFieldState getIssueSymbolFieldState() const =0
```


**Return**: The symbol Field State. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getIssueSymbolFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getissuesymbolfieldstate)


The symbol field state 


### function getReason

```cpp
virtual const char * getReason() const =0
```


**See**: [getSecurityStatusQual()](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqual)

**Return**: The reason for the current status. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getReason](classWombat_1_1MamdaSecStatusListener.html#function-getreason)


Unnormalized (feed-specific) reason associated with the current status of the security (e.g. halted, delayed, etc.). For normalized field, see `getSecurityStatusQual`.


### function getReasonFieldState

```cpp
virtual MamdaFieldState getReasonFieldState() const =0
```


**Return**: The reason field state 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getReasonFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getreasonfieldstate)


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

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaSecStatusListener.html#function-getshortsalecircuitbreaker)


get the ShortSaleCircuitBreaker 


### function getShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getShortSaleCircuitBreakerFieldState() const =0
```


**Return**: The ShortSaleCircuitBreaker Field State. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getshortsalecircuitbreakerfieldstate)


### function getSecurityAction

```cpp
virtual char getSecurityAction() const =0
```


**Return**: The security action. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityAction](classWombat_1_1MamdaSecStatusListener.html#function-getsecurityaction)


Action related to this security. 

* A : Add this new security. 


### function getSecurityActionFieldState

```cpp
virtual MamdaFieldState getSecurityActionFieldState() const =0
```


**Return**: The security action field state 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityActionFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecurityactionfieldstate)


### function getSecurityType

```cpp
virtual const char * getSecurityType() const =0
```


**Return**: The security type. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityType](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritytype)


The security type. 

* Equity Option 
* NEO Option : NEO (Index) Option 
* ICS Option : ICS (Foreign Currency) Option 


### function getSecurityTypeFieldState

```cpp
virtual MamdaFieldState getSecurityTypeFieldState() const =0
```


**Return**: The security type field state 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityTypeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritytypefieldstate)


The security type field state 


### function getSecurityStatus

```cpp
virtual const char * getSecurityStatus() const =0
```


**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatus](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatus)


Deprecated.

Use [getSecurityStatusEnum()](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusenum) to return the security status as an enumerated value, or [getSecurityStatusStr()](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusstr) to retrun it is a const char*. 


### function getSecurityStatusEnum

```cpp
virtual MamdaSecurityStatus getSecurityStatusEnum() const =0
```


**Return**: The normalized security status as an enumerated value. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusEnum](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusenum)


NYSE Technologies normalised security status. See getSecurityStatusOrig for the original exchange value.



* SECURITY_STATUS_NONE : No security status is known/available for this security. 
* SECURITY_STATUS_NORMAL : Security is open for normal quoting and trading 
* SECURITY_STATUS_CLOSED : Security is closed (usually before or after market open) 
* SECURITY_STATUS_HALTED : Security has been halted by exchange. 
* SECURITY_STATUS_NOT_EXIST : Security does not currently exist in cache (but it might in the future). 
* SECURITY_STATUS_DELETED : Security has been deleted (e.g., merger, expiration, etc.)  
* SECURITY_STATUS_AUCTION : Security has gone into auction. 
* SECURITY_STATUS_CROSSING : Security crossing 
* SECURITY_STATUS_UNKNOWN : Security status is currently unknown. 


### function getSecurityStatusEnumFieldState

```cpp
virtual MamdaFieldState getSecurityStatusEnumFieldState() const =0
```


**Return**: The normalized security status (enumerated value) field State 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusEnumFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusenumfieldstate)


### function getSecurityStatusStr

```cpp
virtual const char * getSecurityStatusStr() const =0
```


**Return**: The normalized security status. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusStr](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusstr)


NYSE Technologies normalised security status. See getSecurityStatusOrig for the original exchange value.



* None : No security status is known/available for this security. 
* Normal : Security is open for normal quoting and trading 
* Closed : Security is closed (usually before or after market open) 
* Halted : Security has been halted by exchange. 
* NotExist : Security does not currently exist in cache (but it might in the future). 
* Deleted : Security has been deleted (e.g., merger, expiration, etc.)  
* Auction : Security has done into auction. 
* Crossing : Security crossing 
* Unknown : Security status is currently unknown. 


### function getSecurityStatusStrFieldState

```cpp
virtual MamdaFieldState getSecurityStatusStrFieldState() const =0
```


**Return**: The normalized security status field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusStrFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusstrfieldstate)


### function getSecurityStatusQual

```cpp
virtual const char * getSecurityStatusQual() const =0
```


**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusQual](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqual)


Deprecated.

Use [getSecurityStatusQualifierEnum()](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatusqualifierenum) to return the security status qualifier as an enumerated value, or getSecurityStatusQualifierStr() to retrun it is a const char*. 


### function getSecurityStatusQualifierEnum

```cpp
virtual MamdaSecurityStatusQual getSecurityStatusQualifierEnum() const =0
```


**Return**: The normalized security status qualifier. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusQualifierEnum](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualifierenum)


Security status qualifier.



* SECURITY_STATUS_QUAL_NONE : No security status qualifier is known/available for this security. 
* SECURITY_STATUS_QUAL_EXCUSED : An Excused withdrawl from the market. 
* SECURITY_STATUS_QUAL_WITHDRAWN : Non-excused withdrawl by the market maker. 
* SECURITY_STATUS_QUAL_SUSPENDED : Suspended Trading 
* SECURITY_STATUS_QUAL_RESUME : Resume trading/quoting after halt. 
* SECURITY_STATUS_QUAL_QUOTE_RESUME : Resume quoting after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* SECURITY_STATUS_QUAL_TRADE_RESUME : Resume trading after halt. Nasdaq distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* SECURITY_STATUS_QUAL_RESUME_TIME : When the security is expected to resume trading. 
* SECURITY_STATUS_QUAL_MKT_IMB_BUY : Market Imbalance - Buy. A 50,000 share or more excess of market orders to buy over market orders to sell as of 9:00am on expiration days. A MktImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* SECURITY_STATUS_QUAL_MKT_IMB_SELL : Market Imbalance - Sell. A 50,000 share or more excess of market orders to sell over market orders to buy as of 9:00am on expiration days. A MktImbSell implies an ordinary order imbalance (OrdImbSell). 
* SECURITY_STATUS_QUAL_NO_MKT_IMB : No Market Imbalance. Indicates that the imbalance of market orders for a security is less than 50,000 shares as of 9:00am on expiration days. 
* SECURITY_STATUS_QUAL_MOC_IMB_BUY : Market On Close Imbalance - Buy. An excess of 50,000 share or more of MOC orders to buy over MOC orders to sell (including MOC sell plus and MOC sell short orders). A MocImbBuy implies an ordinary order imbalance (OrdImbBuy). 
* SECURITY_STATUS_QUAL_MOC_IMB_SELL : Market On Close Imbalance - Sell. An excess of 50,000 share or more of MOC orders to sell (not including MOC sell short and MOC sell plus orders) over orders to buy (including MOC orders to buy minus). A MocImbSell implies an ordinary order imbalance (OrdImbSell). 
* SECURITY_STATUS_QUAL_NO_MOC_IMB : No Market On Close (MOC) Imbalance. The difference between the number of shares to buy MOC and the number of shares to sell MOC is less than 50,000. 
* SECURITY_STATUS_QUAL_ORDER_IMB : Non-regulatory condition: a significant imbalance of buy orders exists for this security. 
* SECURITY_STATUS_QUAL_ORDER_IMB_SELL : Non-regulatory condition: a significant imbalance of sell orders exists for this security. 
* SECURITY_STATUS_QUAL_ORDER_OMB_NONE : The earlier imbalance of buy or sell orders no longer exists for this security. It also might mean that there is no imbalance to begin with. 
* SECURITY_STATUS_QUAL_RANGE_IND : Trading Range Indication. Not an Opening Delay or Trading Halted condition: this condition is used prior to the opening of a security to denote a probable trading range (bid and offer prices, no sizes). 
* SECURITY_STATUS_QUAL_ITS_PRE_OPEN : ITS pre-opening indication. 
* SECURITY_STATUS_QUAL_RESERVED : Reserved (e.g., CME). 
* SECURITY_STATUS_QUAL_FROZEN : Frozen (e.g., CME). 
* SECURITY_STATUS_QUAL_PRE_OPEN : Preopening state (e.g., CME). 
* SECURITY_STATUS_QUAL_ADD_INFO : Additional Information. For a security that is Opening Delayed or Trading Halted, if inadequate information is disclosed during a "news dissemination or news pending" Opening Delay or Trading Halt, the Opening Delay or Trading Halt reason could be subsequently reported as "Additional Information." 
* SECURITY_STATUS_QUAL_OPEN_DELAY : Security's opening has been delayed by exchange. This value is usually followed by another value specifying the reason for the opening delay. 
* SECURITY_STATUS_QUAL_NO_OPEN_RESUME : Indicates that trading halt or opening delay will be in effect for the remainder of the trading day. 
* SECURITY_STATUS_QUAL_PRICE_IND : An approximation of what a security's opening or re-opening price range (bid and offer prices, no sizes) will be when trading resumes after a delayed opening or after a trading halt. 
* SECURITY_STATUS_QUAL_EQUIPMENT : Non-regulatory condition: the ability to trade this security by a participant is temporarily inhibited due to a systems, equipment or communications facility problem, or for other technical reasons. 
* SECURITY_STATUS_QUAL_FILINGS : Not current in regulatory filings. 
* SECURITY_STATUS_QUAL_NEWS : News pending. Denotes a regulatory trading halt due to an expected news announcement which influence the security. An Opening Delay or Trading Halt may be continued once the news has been disseminated. 
* SECURITY_STATUS_QUAL_NEWS_DISSEM : News Dissemination. Denotes a regulatory trading halt when relevant news influencing the security is being disseminated. Trading is suspended until the primary market determines that an adequate publication or disclosure of information has occurred. v
* SECURITY_STATUS_QUAL_LISTING : Listing Noncompliance. 
* SECURITY_STATUS_QUAL_OPERATION : Operational Halt 
* SECURITY_STATUS_QUAL_INFO : Information Requested. Regulatory condition: more disclosure of information is requested by the exchange for this security. 
* SECURITY_STATUS_QUAL_SEC : SEC Suspension. 
* SECURITY_STATUS_QUAL_TIMES : News Resumption Times. 
* SECURITY_STATUS_QUAL_OTHER : Other Regulatory Halt. 
* SECURITY_STATUS_QUAL_RELATED : Related Security; In View Of Common. Non-regulatory condition: the halt or opening delay in this security is due to its relationship with another security. This condition also applies to non-common associated securities (e.g. warrants, rights, preferreds, classes, etc.) in view of the common stock. 
* SECURITY_STATUS_QUAL_IPO : Upcoming IPO issue not yet trading. 


### function getSecurityStatusQualifierEnumFieldState

```cpp
virtual MamdaFieldState getSecurityStatusQualifierEnumFieldState() const =0
```


**Return**: The normalized security status qualifier field state 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusQualifierEnumFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualifierenumfieldstate)


### function getSecurityStatusQualStr

```cpp
virtual const char * getSecurityStatusQualStr() const =0
```


**Return**: The normalized security status qualifier. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusQualStr](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualstr)


Security status qualifier.



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


### function getSecurityStatusQualStrFieldState

```cpp
virtual MamdaFieldState getSecurityStatusQualStrFieldState() const =0
```


**Return**: The normalized security status qualifier field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusQualStrFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualstrfieldstate)


### function getSecurityStatusNative

```cpp
virtual const char * getSecurityStatusNative() const =0
```


**See**: [getSecurityStatus()](classWombat_1_1MamdaSecStatusRecap.html#function-getsecuritystatus)

**Return**: The exchange provided security status. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusNative](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusnative)


Original "security status" field sent by the feed. NYSE Technologies also sends normalized security status.


### function getSecurityStatusNativeFieldState

```cpp
virtual MamdaFieldState getSecurityStatusNativeFieldState() const =0
```


**Return**: The exchange provided security status field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusNativeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusnativefieldstate)


### function getFreeText

```cpp
virtual const char * getFreeText() const =0
```


**Return**: Free text associated with the security status change. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getFreeText](classWombat_1_1MamdaSecStatusListener.html#function-getfreetext)


Arbitaray free text associated with the security status change.


### function getFreeTextFieldState

```cpp
virtual MamdaFieldState getFreeTextFieldState() const =0
```


**Return**: Free text associated with the security status change field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getFreeTextFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getfreetextfieldstate)


### function getLuldIndicator

```cpp
virtual const char getLuldIndicator() const =0
```


**Return**: Limit Up Limit Down Indicator 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getLuldIndicator](classWombat_1_1MamdaSecStatusListener.html#function-getluldindicator)


Limit Up Limit Down Indicator


### function getLuldIndicatorFieldState

```cpp
virtual MamdaFieldState getLuldIndicatorFieldState() const =0
```


**Return**: LULD Indicator field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getLuldIndicatorFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getluldindicatorfieldstate)


### function getLuldTime

```cpp
virtual const MamaDateTime & getLuldTime() const =0
```


**Return**: Limit Up Limit Down Time 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getLuldTime](classWombat_1_1MamdaSecStatusListener.html#function-getluldtime)


Limit Up Limit Down Time


### function getLuldTimeFieldState

```cpp
virtual MamdaFieldState getLuldTimeFieldState() const =0
```


**Return**: LULD Time field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getLuldTimeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getluldtimefieldstate)


### function getLuldHighLimit

```cpp
virtual const MamaPrice & getLuldHighLimit() const =0
```


**Return**: Limit Up Limit Down High Limit 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getLuldHighLimit](classWombat_1_1MamdaSecStatusListener.html#function-getluldhighlimit)


Limit Up Limit Down High Limit


### function getLuldHighLimitFieldState

```cpp
virtual MamdaFieldState getLuldHighLimitFieldState() const =0
```


**Return**: LULD High Limit field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getLuldHighLimitFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getluldhighlimitfieldstate)


### function getLuldLowLimit

```cpp
virtual const MamaPrice & getLuldLowLimit() const =0
```


**Return**: Limit Up Limit Down Low Limit 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getLuldLowLimit](classWombat_1_1MamdaSecStatusListener.html#function-getluldlowlimit)


Limit Up Limit Down Low Limit


### function getLuldLowLimitFieldState

```cpp
virtual MamdaFieldState getLuldLowLimitFieldState() const =0
```


**Return**: LULD Low Limit field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getLuldLowLimitFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getluldlowlimitfieldstate)


### function ~MamdaSecStatusRecap

```cpp
inline virtual ~MamdaSecStatusRecap()
```


-------------------------------

Updated on 2023-03-31 at 15:29:58 +0100