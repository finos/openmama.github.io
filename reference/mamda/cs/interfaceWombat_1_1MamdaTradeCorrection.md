---
title: Wombat::MamdaTradeCorrection
summary: MamdaTradeCorrection is an interface that provides access to fields related to trade corrections. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeCorrection



[MamdaTradeCorrection]() is an interface that provides access to fields related to trade corrections. 

Inherits from [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat.MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| long | **[getOrigSeqNum](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigseqnum)**()<br>Get the original trade sequence number. [MamdaBasicEvent.getEventSeqNum()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSeqNumFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigseqnumfieldstate)**()<br>Get the field state  |
| double | **[getOrigPrice](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigprice)**()<br>Get the original trade price. [MamdaTradeReport.getTradePrice()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPriceFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigpricefieldstate)**()<br>Get the field state  |
| long | **[getOrigVolume](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigvolume)**()<br>Get the original trade volume. [MamdaTradeReport.getTradeVolume()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigVolumeFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigvolumefieldstate)**()<br>Get the field state  |
| string | **[getOrigPartId](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigpartid)**()<br>Get the original trade participant identifier. [MamdaTradeReport.getTradePartId()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPartIdFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigpartidfieldstate)**()<br>Get the field state  |
| string | **[getOrigQual](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigqual)**()<br>Get original trade qualifier. [MamdaTradeReport.getTradeQual()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigqualfieldstate)**()<br>Get the field state  |
| string | **[getOrigQualNative](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigqualnative)**()<br>Get original trade qualifier (non normalized). [MamdaTradeReport.getTradeQual()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualNativeFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigqualnativefieldstate)**()<br>Get the field state  |
| string | **[getOrigCondition](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigcondition)**()<br>Get original trade condition. [MamdaTradeReport.getTradeCondition()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigConditionFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigconditionfieldstate)**()<br>Get the field state  |
| long | **[getOrigSellersSaleDays](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigsellerssaledays)**()<br>Get the original trade sellers days. [MamdaTradeReport.getTradeSellersSaleDays()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSellersSaleDaysFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigsellerssaledaysfieldstate)**()<br>Get the field state  |
| char | **[getOrigStopStock](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigstopstock)**()<br>Get the original stock stop indicatior. [MamdaTradeReport.getTradeStopStock()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigStopStockFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigstopstockfieldstate)**()<br>Get the field state  |
| string | **[getCorrTradeId](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeid)**()<br>Get the corrected trade id.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrTradeIdFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeidfieldstate)**()<br>Get the field state  |
| string | **[getOrigTradeId](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigtradeid)**()<br>Original Trade Id for cancel/error.  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigTradeIdFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getorigtradeidfieldstate)**()<br>Get the field state  |
| double | **[getCorrPrice](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrprice)**()<br>Get the corrected trade price. [MamdaTradeReport.getTradePrice()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPriceFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpricefieldstate)**()<br>Get the field state  |
| long | **[getCorrVolume](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrvolume)**()<br>Get the corrected trade volume. [MamdaTradeReport.getTradeVolume()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrVolumeFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrvolumefieldstate)**()<br>Get the field state  |
| string | **[getCorrPartId](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpartid)**()<br>Get the corrected trade participant identifier. [MamdaTradeReport.getTradePartId()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPartIdFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpartidfieldstate)**()<br>Get the field state  |
| string | **[getCorrQual](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqual)**()<br>Get corrected trade qualifier. [MamdaTradeReport.getTradeQual()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualfieldstate)**()<br>Get the field state  |
| string | **[getCorrQualNative](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnative)**()<br>Get corrected trade condition. [MamdaTradeReport.getTradeCondition()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualNativeFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnativefieldstate)**()<br>Get the field state  |
| string | **[getCorrCondition](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrcondition)**()<br>Get corrected trade condition. [MamdaTradeReport.getTradeCondition()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrConditionFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrconditionfieldstate)**()<br>Get the field state  |
| long | **[getCorrSellersSaleDays](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledays)**()<br>Get the corrected trade sellers days. [MamdaTradeReport.getTradeSellersSaleDays()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrSellersSaleDaysFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledaysfieldstate)**()<br>Get the field state  |
| char | **[getCorrStopStock](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstock)**()<br>Get the original stock stop indicatior. [MamdaTradeReport.getTradeStopStock()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrStopStockFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstockfieldstate)**()<br>Get the field state  |
| char | **[getCorrShortSaleCircuitBreaker](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreaker)**()<br>Get the ShortSaleCircuitBreaker. MamdaTradeReport.getCorrShortSaleCircuitBreaker() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreakerfieldstate)**()<br>Get the field state  |

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

### function getOrigSeqNum

```csharp
long getOrigSeqNum()
```

Get the original trade sequence number. [MamdaBasicEvent.getEventSeqNum()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)

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

Get the original trade price. [MamdaTradeReport.getTradePrice()]()

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

Get the original trade volume. [MamdaTradeReport.getTradeVolume()]()

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

Get the original trade participant identifier. [MamdaTradeReport.getTradePartId()]()

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

Get original trade qualifier. [MamdaTradeReport.getTradeQual()]()

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

Get original trade condition. [MamdaTradeReport.getTradeCondition()]()

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

Get the original trade sellers days. [MamdaTradeReport.getTradeSellersSaleDays()]()

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

Get the original stock stop indicatior. [MamdaTradeReport.getTradeStopStock()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigStopStock](classWombat_1_1MamdaTradeListener.html#function-getorigstopstock)


### function getOrigStopStockFieldState

```csharp
MamdaFieldState getOrigStopStockFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigstopstockfieldstate)


### function getCorrTradeId

```csharp
string getCorrTradeId()
```

Get the corrected trade id. 

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrTradeId](classWombat_1_1MamdaTradeListener.html#function-getcorrtradeid)


### function getCorrTradeIdFieldState

```csharp
MamdaFieldState getCorrTradeIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrtradeidfieldstate)


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


### function getCorrPrice

```csharp
double getCorrPrice()
```

Get the corrected trade price. [MamdaTradeReport.getTradePrice()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrPrice](classWombat_1_1MamdaTradeListener.html#function-getcorrprice)


### function getCorrPriceFieldState

```csharp
MamdaFieldState getCorrPriceFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrpricefieldstate)


### function getCorrVolume

```csharp
long getCorrVolume()
```

Get the corrected trade volume. [MamdaTradeReport.getTradeVolume()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrVolume](classWombat_1_1MamdaTradeListener.html#function-getcorrvolume)


### function getCorrVolumeFieldState

```csharp
MamdaFieldState getCorrVolumeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrvolumefieldstate)


### function getCorrPartId

```csharp
string getCorrPartId()
```

Get the corrected trade participant identifier. [MamdaTradeReport.getTradePartId()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrPartId](classWombat_1_1MamdaTradeListener.html#function-getcorrpartid)


### function getCorrPartIdFieldState

```csharp
MamdaFieldState getCorrPartIdFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrpartidfieldstate)


### function getCorrQual

```csharp
string getCorrQual()
```

Get corrected trade qualifier. [MamdaTradeReport.getTradeQual()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrQual](classWombat_1_1MamdaTradeListener.html#function-getcorrqual)


### function getCorrQualFieldState

```csharp
MamdaFieldState getCorrQualFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrqualfieldstate)


### function getCorrQualNative

```csharp
string getCorrQualNative()
```

Get corrected trade condition. [MamdaTradeReport.getTradeCondition()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrQualNative](classWombat_1_1MamdaTradeListener.html#function-getcorrqualnative)


### function getCorrQualNativeFieldState

```csharp
MamdaFieldState getCorrQualNativeFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrqualnativefieldstate)


### function getCorrCondition

```csharp
string getCorrCondition()
```

Get corrected trade condition. [MamdaTradeReport.getTradeCondition()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrCondition](classWombat_1_1MamdaTradeListener.html#function-getcorrcondition)


### function getCorrConditionFieldState

```csharp
MamdaFieldState getCorrConditionFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrConditionFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrconditionfieldstate)


### function getCorrSellersSaleDays

```csharp
long getCorrSellersSaleDays()
```

Get the corrected trade sellers days. [MamdaTradeReport.getTradeSellersSaleDays()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-getcorrsellerssaledays)


### function getCorrSellersSaleDaysFieldState

```csharp
MamdaFieldState getCorrSellersSaleDaysFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrsellerssaledaysfieldstate)


### function getCorrStopStock

```csharp
char getCorrStopStock()
```

Get the original stock stop indicatior. [MamdaTradeReport.getTradeStopStock()]()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrStopStock](classWombat_1_1MamdaTradeListener.html#function-getcorrstopstock)


### function getCorrStopStockFieldState

```csharp
MamdaFieldState getCorrStopStockFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrstopstockfieldstate)


### function getCorrShortSaleCircuitBreaker

```csharp
char getCorrShortSaleCircuitBreaker()
```

Get the ShortSaleCircuitBreaker. MamdaTradeReport.getCorrShortSaleCircuitBreaker()

**Return**: 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreaker)


### function getCorrShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getCorrShortSaleCircuitBreakerFieldState()
```

Get the field state 

**Return**: Field State

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreakerfieldstate)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100