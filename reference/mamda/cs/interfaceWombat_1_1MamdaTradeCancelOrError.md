---
title: Wombat::MamdaTradeCancelOrError
summary: MamdaTradeCancelOrError is an interface that provides access to fields related to trade cancellations and errors. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeCancelOrError



[MamdaTradeCancelOrError]() is an interface that provides access to fields related to trade cancellations and errors. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[getIsCancel](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getiscancel)**()<br>Return whether this event is a trade cancel. If false, the event is a trade error.  |
| string | **[getOrigTradeId](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeid)**()<br>Original Trade Id for cancel/error.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigTradeIdFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeidfieldstate)**()<br>Get the field state  |
| long | **[getOrigSeqNum](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnum)**()<br>Original feed-generated sequence for a correction/cancel/error.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSeqNumFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnumfieldstate)**()<br>Get the field state  |
| double | **[getOrigPrice](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigprice)**()<br>Original trade price in a correction/cancel/error.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPriceFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpricefieldstate)**()<br>Get the field state  |
| long | **[getOrigVolume](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolume)**()<br>Original trade size in a correction/cancel/error.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigVolumeFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolumefieldstate)**()<br>Get the field state  |
| string | **[getOrigPartId](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartid)**()<br>Original trade participant identifier in a correction/cancel/error.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPartIdFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartidfieldstate)**()<br>Get the field state  |
| string | **[getOrigQual](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqual)**()<br>A normalized set of qualifiers for the original trade for the security in a correction/cancel/error.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualfieldstate)**()<br>Get the field state  |
| string | **[getOrigQualNative](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnative)**()<br>Get original trade qualifier (non normalized). [MamdaTradeReport.getTradeQual()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualNativeFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnativefieldstate)**()<br>Get the field state  |
| string | **[getOrigCondition](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigcondition)**()<br>Feed-specific trade qualifier code(s) for original trade  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigConditionFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigconditionfieldstate)**()<br>Get the field state  |
| long | **[getOrigSellersSaleDays](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledays)**()<br>Seller's sale days for original trade. Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSellersSaleDaysFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledaysfieldstate)**()<br>Get the field state  |
| char | **[getOrigStopStock](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstock)**()<br>Stopped stock indicator for original trade. Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable)  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigStopStockFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstockfieldstate)**()<br>Get the field state  |
| char | **[getOrigShortSaleCircuitBreaker](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreaker)**()<br>Returns the ShortSaleCircuitBreaker  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreakerfieldstate)**()<br>Returns the FieldState, always MODIFIED  |

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

### function getIsCancel

```csharp
bool getIsCancel()
```

Return whether this event is a trade cancel. If false, the event is a trade error. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsCancel](classWombat_1_1MamdaTradeListener.html#function-getiscancel)


### function getOrigTradeId

```csharp
string getOrigTradeId()
```

Original Trade Id for cancel/error. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigTradeId](classWombat_1_1MamdaTradeListener.html#function-getorigtradeid)


### function getOrigTradeIdFieldState

```csharp
MamdaFieldState getOrigTradeIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigtradeidfieldstate)


### function getOrigSeqNum

```csharp
long getOrigSeqNum()
```

Original feed-generated sequence for a correction/cancel/error. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigSeqNum](classWombat_1_1MamdaTradeListener.html#function-getorigseqnum)


### function getOrigSeqNumFieldState

```csharp
MamdaFieldState getOrigSeqNumFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigseqnumfieldstate)


### function getOrigPrice

```csharp
double getOrigPrice()
```

Original trade price in a correction/cancel/error. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigPrice](classWombat_1_1MamdaTradeListener.html#function-getorigprice)


### function getOrigPriceFieldState

```csharp
MamdaFieldState getOrigPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigpricefieldstate)


### function getOrigVolume

```csharp
long getOrigVolume()
```

Original trade size in a correction/cancel/error. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigVolume](classWombat_1_1MamdaTradeListener.html#function-getorigvolume)


### function getOrigVolumeFieldState

```csharp
MamdaFieldState getOrigVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigvolumefieldstate)


### function getOrigPartId

```csharp
string getOrigPartId()
```

Original trade participant identifier in a correction/cancel/error. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigPartId](classWombat_1_1MamdaTradeListener.html#function-getorigpartid)


### function getOrigPartIdFieldState

```csharp
MamdaFieldState getOrigPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigpartidfieldstate)


### function getOrigQual

```csharp
string getOrigQual()
```

A normalized set of qualifiers for the original trade for the security in a correction/cancel/error. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigQual](classWombat_1_1MamdaTradeListener.html#function-getorigqual)


### function getOrigQualFieldState

```csharp
MamdaFieldState getOrigQualFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigqualfieldstate)


### function getOrigQualNative

```csharp
string getOrigQualNative()
```

Get original trade qualifier (non normalized). [MamdaTradeReport.getTradeQual()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigQualNative](classWombat_1_1MamdaTradeListener.html#function-getorigqualnative)


### function getOrigQualNativeFieldState

```csharp
MamdaFieldState getOrigQualNativeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigqualnativefieldstate)


### function getOrigCondition

```csharp
string getOrigCondition()
```

Feed-specific trade qualifier code(s) for original trade 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigCondition](classWombat_1_1MamdaTradeListener.html#function-getorigcondition)


### function getOrigConditionFieldState

```csharp
MamdaFieldState getOrigConditionFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigConditionFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigconditionfieldstate)


### function getOrigSellersSaleDays

```csharp
long getOrigSellersSaleDays()
```

Seller's sale days for original trade. Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-getorigsellerssaledays)


### function getOrigSellersSaleDaysFieldState

```csharp
MamdaFieldState getOrigSellersSaleDaysFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigsellerssaledaysfieldstate)


### function getOrigStopStock

```csharp
char getOrigStopStock()
```

Stopped stock indicator for original trade. Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable) 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigStopStock](classWombat_1_1MamdaTradeListener.html#function-getorigstopstock)


### function getOrigStopStockFieldState

```csharp
MamdaFieldState getOrigStopStockFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigstopstockfieldstate)


### function getOrigShortSaleCircuitBreaker

```csharp
char getOrigShortSaleCircuitBreaker()
```

Returns the ShortSaleCircuitBreaker 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreaker)


### function getOrigShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getOrigShortSaleCircuitBreakerFieldState()
```

Returns the FieldState, always MODIFIED 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreakerfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100