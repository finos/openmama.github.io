---
title: Wombat::MamdaSecStatus
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaSecStatus



 [More...](#detailed-description)


`#include <MamdaSecStatus.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaSecStatusListener](classWombat_1_1MamdaSecStatusListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const char * | **[getIssueSymbol](classWombat_1_1MamdaSecStatus.html#function-getissuesymbol)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIssueSymbolFieldState](classWombat_1_1MamdaSecStatus.html#function-getissuesymbolfieldstate)**() const =0 |
| virtual const char * | **[getReason](classWombat_1_1MamdaSecStatus.html#function-getreason)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getReasonFieldState](classWombat_1_1MamdaSecStatus.html#function-getreasonfieldstate)**() const =0 |
| virtual char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaSecStatus.html#function-getshortsalecircuitbreaker)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaSecStatus.html#function-getshortsalecircuitbreakerfieldstate)**() const =0 |
| virtual char | **[getSecurityAction](classWombat_1_1MamdaSecStatus.html#function-getsecurityaction)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityActionFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecurityactionfieldstate)**() const =0 |
| virtual const char * | **[getSecurityType](classWombat_1_1MamdaSecStatus.html#function-getsecuritytype)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityTypeFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecuritytypefieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatus](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatus)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusfieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatusQual](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusqual)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusQualFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusqualfieldstate)**() const =0 |
| virtual const char * | **[getSecurityStatusNative](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusnative)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSecurityStatusNativeFieldState](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusnativefieldstate)**() const =0 |
| virtual const char * | **[getFreeText](classWombat_1_1MamdaSecStatus.html#function-getfreetext)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getFreeTextFieldState](classWombat_1_1MamdaSecStatus.html#function-getfreetextfieldstate)**() const =0 |
| virtual | **[~MamdaSecStatus](classWombat_1_1MamdaSecStatus.html#function-~mamdasecstatus)**() |

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
class Wombat::MamdaSecStatus;
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


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getIssueSymbolFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getissuesymbolfieldstate)


Get the issue symbol field state


### function getReason

```cpp
virtual const char * getReason() const =0
```


**See**: [getSecurityStatusQual()](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatusqual)

**Return**: The reason for the current status. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getReason](classWombat_1_1MamdaSecStatusListener.html#function-getreason)


Unnormalized (feed-specific) reason associated with the current status of the security (e.g. halted, delayed, etc.). For normalized field, see `getSecurityStatusQual`.


### function getReasonFieldState

```cpp
virtual MamdaFieldState getReasonFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getReasonFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getreasonfieldstate)


Get the reason field state


### function getShortSaleCircuitBreaker

```cpp
virtual char getShortSaleCircuitBreaker() const =0
```


**See**: [MamdaSecStatusRecap::getShortSaleCircuitBreaker()](classWombat_1_1MamdaSecStatusRecap.html#function-getshortsalecircuitbreaker)

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getShortSaleCircuitBreaker](classWombat_1_1MamdaSecStatusListener.html#function-getshortsalecircuitbreaker)


### function getShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getShortSaleCircuitBreakerFieldState() const =0
```


**See**: [MamdaSecStatusRecap::getShortSaleCircuitBreakerFieldState()](classWombat_1_1MamdaSecStatusRecap.html#function-getshortsalecircuitbreakerfieldstate)

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


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityActionFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecurityactionfieldstate)


Get the security action field state


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


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityTypeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritytypefieldstate)


Get the security type field state


### function getSecurityStatus

```cpp
virtual const char * getSecurityStatus() const =0
```


**Return**: The normalized security status. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatus](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatus)


NYSE Technologies normalised security status. See getSecurityStatusOrig for the original exchange value.



* None : No security status is known/available for this security. 
* Normal : Security is open for normal quoting and trading 
* Closed : Security is closed (usually before or after market open) 
* Halted : Security has been halted by exchange. 
* NotExist : Security does not currently exist in cache (but it might in the future). 
* Deleted : Security has been deleted (e.g., merger, expiration, etc.)  


### function getSecurityStatusFieldState

```cpp
virtual MamdaFieldState getSecurityStatusFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusfieldstate)


Get the security status field state


### function getSecurityStatusQual

```cpp
virtual const char * getSecurityStatusQual() const =0
```


**Return**: The normalized security status qualifier. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusQual](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqual)


Security status qualifier.



* None : No security status qualifier is known/available for this security. 
* Excused : An Excused withdrawal from the market. 
* Withdrawn : Non-excused withdrawal by the market maker. 
* Suspended : Suspended Trading 
* Resume : Resume trading/quoting after halt. 
* QuoteResume : Resume quoting after halt. NASDAQ distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
* TradeResume : Resume trading after halt. NASDAQ distinguishes between resumption of quoting versus trading, although these appear to always occur one after the other. 
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


### function getSecurityStatusQualFieldState

```cpp
virtual MamdaFieldState getSecurityStatusQualFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusQualFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusqualfieldstate)


Get the security status qualifier field state


### function getSecurityStatusNative

```cpp
virtual const char * getSecurityStatusNative() const =0
```


**See**: [getSecurityStatus()](classWombat_1_1MamdaSecStatus.html#function-getsecuritystatus)

**Return**: The exchange provided security status. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusNative](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusnative)


Original "security status" field sent by the feed. NYSE Technologies feed handlers also send normalized security status.


### function getSecurityStatusNativeFieldState

```cpp
virtual MamdaFieldState getSecurityStatusNativeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getSecurityStatusNativeFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getsecuritystatusnativefieldstate)


Get the native security status field state


### function getFreeText

```cpp
virtual const char * getFreeText() const =0
```


**Return**: Free text associated with the security status change. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getFreeText](classWombat_1_1MamdaSecStatusListener.html#function-getfreetext)


Arbitrary free text associated with the security status change.


### function getFreeTextFieldState

```cpp
virtual MamdaFieldState getFreeTextFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaSecStatusListener::getFreeTextFieldState](classWombat_1_1MamdaSecStatusListener.html#function-getfreetextfieldstate)


Get the free text field field state


### function ~MamdaSecStatus

```cpp
inline virtual ~MamdaSecStatus()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100