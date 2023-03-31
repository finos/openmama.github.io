---
title: com::wombat::mamda::MamdaTradeCancelOrError
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaTradeCancelOrError



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

Inherited by [com.wombat.mamda.MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| boolean | **[getIsCancel](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getiscancel)**() |
| short | **[getIsCancelFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getiscancelfieldstate)**() |
| long | **[getOrigSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigseqnum)**() |
| short | **[getOrigSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigseqnumfieldstate)**() |
| double | **[getOrigPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigprice)**() |
| short | **[getOrigPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpricefieldstate)**() |
| double | **[getOrigVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigvolume)**() |
| short | **[getOrigVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigvolumefieldstate)**() |
| String | **[getOrigPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpartid)**() |
| short | **[getOrigPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpartidfieldstate)**() |
| String | **[getOrigTradeId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigtradeid)**() |
| short | **[getOrigTradeIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigtradeidfieldstate)**() |
| String | **[getOrigQual](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqual)**() |
| short | **[getOrigQualFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualfieldstate)**() |
| String | **[getOrigQualNative](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualnative)**() |
| short | **[getOrigQualNativeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualnativefieldstate)**() |
| String | **[getOrigCondition](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigcondition)**() |
| short | **[getOrigConditionFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigconditionfieldstate)**() |
| long | **[getOrigSellersSaleDays](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledays)**() |
| short | **[getOrigSellersSaleDaysFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledaysfieldstate)**() |
| char | **[getOrigStopStock](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigstopstock)**() |
| short | **[getOrigStopStockFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigstopstockfieldstate)**() |
| char | **[getOrigShortSaleCircuitBreaker](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreaker)**() |
| short | **[getOrigShortSaleCircuitBreakerFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreakerfieldstate)**() |

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
class com::wombat::mamda::MamdaTradeCancelOrError;
```


[MamdaTradeCancelOrError](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html) is an interface that provides access to fields related to trade cancellations and errors. 

## Public Functions Documentation

### function getIsCancel

```java
boolean getIsCancel()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getIsCancel](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getiscancel)


Return whether this event is a trade cancel. If false, the event is a trade error. 


### function getIsCancelFieldState

```java
short getIsCancelFieldState()
```


**Return**: Returns the IsCancel Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getIsCancelFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getiscancelfieldstate)


### function getOrigSeqNum

```java
long getOrigSeqNum()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigseqnum)


Original feed-generated sequence for a correction/cancel/error. 


### function getOrigSeqNumFieldState

```java
short getOrigSeqNumFieldState()
```


**Return**: Returns the OrigSeqNum Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigseqnumfieldstate)


### function getOrigPrice

```java
double getOrigPrice()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigPrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigprice)


Original trade price in a correction/cancel/error. 


### function getOrigPriceFieldState

```java
short getOrigPriceFieldState()
```


**Return**: Returns the OrigPrice Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigpricefieldstate)


### function getOrigVolume

```java
double getOrigVolume()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigvolume)


Original trade size in a correction/cancel/error. 


### function getOrigVolumeFieldState

```java
short getOrigVolumeFieldState()
```


**Return**: Returns the OrigVolume Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigvolumefieldstate)


### function getOrigPartId

```java
String getOrigPartId()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigPartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigpartid)


Original trade participant identifier in a correction/cancel/error. 


### function getOrigPartIdFieldState

```java
short getOrigPartIdFieldState()
```


**Return**: Returns the OrigPartId Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigpartidfieldstate)


### function getOrigTradeId

```java
String getOrigTradeId()
```


**Return**: Returns the OrigTradeId. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigTradeId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigtradeid)


### function getOrigTradeIdFieldState

```java
short getOrigTradeIdFieldState()
```


**Return**: Returns the OrigPartId Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigTradeIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigtradeidfieldstate)


### function getOrigQual

```java
String getOrigQual()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigQual](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigqual)


A normalized set of qualifiers for the original trade for the security in a correction/cancel/error. 


### function getOrigQualFieldState

```java
short getOrigQualFieldState()
```


**Return**: Returns the OrigQual Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigQualFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigqualfieldstate)


### function getOrigQualNative

```java
String getOrigQualNative()
```


**See**: [MamdaTradeReport::getTradeQual()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequal)

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigQualNative](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigqualnative)


Get original trade qualifier (non normalized). 


### function getOrigQualNativeFieldState

```java
short getOrigQualNativeFieldState()
```


**Return**: Returns the OrigQualNative Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigQualNativeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigqualnativefieldstate)


### function getOrigCondition

```java
String getOrigCondition()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigCondition](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigcondition)


Feed-specific trade qualifier code(s) for original trade. This field is provided primarily for completeness and/or troubleshooting. 


### function getOrigConditionFieldState

```java
short getOrigConditionFieldState()
```


**Return**: Returns the OrigCondition Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigConditionFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigconditionfieldstate)


### function getOrigSellersSaleDays

```java
long getOrigSellersSaleDays()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigSellersSaleDays](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigsellerssaledays)


Seller's sale days for original trade. Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security. 


### function getOrigSellersSaleDaysFieldState

```java
short getOrigSellersSaleDaysFieldState()
```


**Return**: Returns the OrigSellersSaleDays Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigSellersSaleDaysFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigsellerssaledaysfieldstate)


### function getOrigStopStock

```java
char getOrigStopStock()
```


**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigStopStock](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigstopstock)


Stopped stock indicator for original trade. Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable) 


### function getOrigStopStockFieldState

```java
short getOrigStopStockFieldState()
```


**Return**: Returns the OrigStopStock Field State. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigStopStockFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigstopstockfieldstate)


### function getOrigShortSaleCircuitBreaker

```java
char getOrigShortSaleCircuitBreaker()
```


**Return**: ShortSaleCircuitBreaker 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigShortSaleCircuitBreaker](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreaker)


getShortSaleCircuitBreaker Returns the ShortSaleCircuitBreaker 


### function getOrigShortSaleCircuitBreakerFieldState

```java
short getOrigShortSaleCircuitBreakerFieldState()
```


**Return**: Returns the FieldState, always MODIFIED. 

**Reimplemented by**: [com::wombat::mamda::MamdaTradeListener::getOrigShortSaleCircuitBreakerFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreakerfieldstate)


-------------------------------

Updated on 2023-03-31 at 15:30:35 +0100