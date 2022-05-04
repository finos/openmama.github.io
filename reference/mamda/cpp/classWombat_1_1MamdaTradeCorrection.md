---
title: Wombat::MamdaTradeCorrection
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeCorrection



 [More...](#detailed-description)


`#include <MamdaTradeCorrection.h>`

Inherits from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

Inherited by [Wombat::MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual mama_seqnum_t | **[getOrigSeqNum](classWombat_1_1MamdaTradeCorrection.html#function-getorigseqnum)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSeqNumFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigseqnumfieldstate)**() const =0 |
| virtual const MamaPrice & | **[getOrigPrice](classWombat_1_1MamdaTradeCorrection.html#function-getorigprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPriceFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigpricefieldstate)**() const =0 |
| virtual mama_quantity_t | **[getOrigVolume](classWombat_1_1MamdaTradeCorrection.html#function-getorigvolume)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigVolumeFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigvolumefieldstate)**() const =0 |
| virtual const char * | **[getOrigPartId](classWombat_1_1MamdaTradeCorrection.html#function-getorigpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPartIdFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigpartidfieldstate)**() const =0 |
| virtual const char * | **[getOrigQual](classWombat_1_1MamdaTradeCorrection.html#function-getorigqual)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigqualfieldstate)**() const =0 |
| virtual const char * | **[getOrigQualNative](classWombat_1_1MamdaTradeCorrection.html#function-getorigqualnative)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualNativeFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigqualnativefieldstate)**() const =0 |
| virtual mama_u32_t | **[getOrigSellersSaleDays](classWombat_1_1MamdaTradeCorrection.html#function-getorigsellerssaledays)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSellersSaleDaysFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigsellerssaledaysfieldstate)**() const =0 |
| virtual char | **[getOrigStopStock](classWombat_1_1MamdaTradeCorrection.html#function-getorigstopstock)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigStopStockFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigstopstockfieldstate)**() const =0 |
| virtual const char * | **[getCorrTradeId](classWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrTradeIdFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeidfieldstate)**() const =0 |
| virtual const MamaPrice & | **[getCorrPrice](classWombat_1_1MamdaTradeCorrection.html#function-getcorrprice)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPriceFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrpricefieldstate)**() const =0 |
| virtual mama_quantity_t | **[getCorrVolume](classWombat_1_1MamdaTradeCorrection.html#function-getcorrvolume)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrVolumeFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrvolumefieldstate)**() const =0 |
| virtual const char * | **[getCorrPartId](classWombat_1_1MamdaTradeCorrection.html#function-getcorrpartid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPartIdFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrpartidfieldstate)**() const =0 |
| virtual const char * | **[getCorrQual](classWombat_1_1MamdaTradeCorrection.html#function-getcorrqual)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrqualfieldstate)**() const =0 |
| virtual const char * | **[getCorrQualNative](classWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnative)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualNativeFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnativefieldstate)**() const =0 |
| virtual mama_u32_t | **[getCorrSellersSaleDays](classWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledays)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrSellersSaleDaysFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledaysfieldstate)**() const =0 |
| virtual char | **[getCorrStopStock](classWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstock)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrStopStockFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstockfieldstate)**() const =0 |
| virtual const char * | **[getTradeQual](classWombat_1_1MamdaTradeCorrection.html#function-gettradequal)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualFieldState](classWombat_1_1MamdaTradeCorrection.html#function-gettradequalfieldstate)**() const =0 |
| virtual bool | **[getIsIrregular](classWombat_1_1MamdaTradeCorrection.html#function-getisirregular)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIrregularFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getisirregularfieldstate)**() const =0 |
| virtual bool | **[getGenericFlag](classWombat_1_1MamdaTradeCorrection.html#function-getgenericflag)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getGenericFlagFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getgenericflagfieldstate)**() const =0 |
| virtual const char * | **[getOrigTradeId](classWombat_1_1MamdaTradeCorrection.html#function-getorigtradeid)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigTradeIdFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getorigtradeidfieldstate)**() const =0 |
| virtual char | **[getCorrShortSaleCircuitBreaker](classWombat_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreaker)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreakerfieldstate)**() const =0 |
| virtual | **[~MamdaTradeCorrection](classWombat_1_1MamdaTradeCorrection.html#function-~mamdatradecorrection)**() |

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
class Wombat::MamdaTradeCorrection;
```


[MamdaTradeCorrection](classWombat_1_1MamdaTradeCorrection.html) is an interface that provides access to trade correction related fields. 

## Public Functions Documentation

### function getOrigSeqNum

```cpp
virtual mama_seqnum_t getOrigSeqNum() const =0
```


**See**: [MamdaBasicEvent::getEventSeqNum()](classWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigSeqNum](classWombat_1_1MamdaTradeListener.html#function-getorigseqnum)


Get the original trade sequence number. 


### function getOrigSeqNumFieldState

```cpp
virtual MamdaFieldState getOrigSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigseqnumfieldstate)


Get the original trade sequence number field state


### function getOrigPrice

```cpp
virtual const MamaPrice & getOrigPrice() const =0
```


**See**: [MamdaTradeReport::getTradePrice()](classWombat_1_1MamdaTradeReport.html#function-gettradeprice)

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigPrice](classWombat_1_1MamdaTradeListener.html#function-getorigprice)


Get the original trade price. 


### function getOrigPriceFieldState

```cpp
virtual MamdaFieldState getOrigPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigpricefieldstate)


Get the original trade price field state


### function getOrigVolume

```cpp
virtual mama_quantity_t getOrigVolume() const =0
```


**See**: [MamdaTradeReport::getTradeVolume()](classWombat_1_1MamdaTradeReport.html#function-gettradevolume)

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigVolume](classWombat_1_1MamdaTradeListener.html#function-getorigvolume)


Get the original trade volume. 


### function getOrigVolumeFieldState

```cpp
virtual MamdaFieldState getOrigVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigvolumefieldstate)


Get the original trade volume field state


### function getOrigPartId

```cpp
virtual const char * getOrigPartId() const =0
```


**See**: [MamdaTradeReport::getTradePartId()](classWombat_1_1MamdaTradeReport.html#function-gettradepartid)

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigPartId](classWombat_1_1MamdaTradeListener.html#function-getorigpartid)


Get the original trade participant identifier. 


### function getOrigPartIdFieldState

```cpp
virtual MamdaFieldState getOrigPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigpartidfieldstate)


Get the field state


### function getOrigQual

```cpp
virtual const char * getOrigQual() const =0
```


**See**: [MamdaTradeReport::getTradeQual()](classWombat_1_1MamdaTradeReport.html#function-gettradequal)

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigQual](classWombat_1_1MamdaTradeListener.html#function-getorigqual)


Get original trade qualifier. 


### function getOrigQualFieldState

```cpp
virtual MamdaFieldState getOrigQualFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigqualfieldstate)


Get the field state


### function getOrigQualNative

```cpp
virtual const char * getOrigQualNative() const =0
```


**See**: MamdaTradeReport::getTradeCondition() 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigQualNative](classWombat_1_1MamdaTradeListener.html#function-getorigqualnative)


Get original trade condition. 


### function getOrigQualNativeFieldState

```cpp
virtual MamdaFieldState getOrigQualNativeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigqualnativefieldstate)


Get the field state


### function getOrigSellersSaleDays

```cpp
virtual mama_u32_t getOrigSellersSaleDays() const =0
```


**See**: [MamdaTradeReport::getTradeSellersSaleDays()](classWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledays)

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-getorigsellerssaledays)


Get the original trade sellers days. 


### function getOrigSellersSaleDaysFieldState

```cpp
virtual MamdaFieldState getOrigSellersSaleDaysFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigsellerssaledaysfieldstate)


Get the field state


### function getOrigStopStock

```cpp
virtual char getOrigStopStock() const =0
```


**See**: [MamdaTradeReport::getTradeStopStock()](classWombat_1_1MamdaTradeReport.html#function-gettradestopstock)

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigStopStock](classWombat_1_1MamdaTradeListener.html#function-getorigstopstock)


Get the original stock stop indicator. 


### function getOrigStopStockFieldState

```cpp
virtual MamdaFieldState getOrigStopStockFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigstopstockfieldstate)


Get the field state


### function getCorrTradeId

```cpp
virtual const char * getCorrTradeId() const =0
```


**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrTradeId](classWombat_1_1MamdaTradeListener.html#function-getcorrtradeid)


Get the corrected trade Id. 


### function getCorrTradeIdFieldState

```cpp
virtual MamdaFieldState getCorrTradeIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrtradeidfieldstate)


Get the field state


### function getCorrPrice

```cpp
virtual const MamaPrice & getCorrPrice() const =0
```


**See**: [MamdaTradeReport::getTradePrice()](classWombat_1_1MamdaTradeReport.html#function-gettradeprice)

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrPrice](classWombat_1_1MamdaTradeListener.html#function-getcorrprice)


Get the corrected trade price. 


### function getCorrPriceFieldState

```cpp
virtual MamdaFieldState getCorrPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrpricefieldstate)


Get the field state


### function getCorrVolume

```cpp
virtual mama_quantity_t getCorrVolume() const =0
```


**See**: [MamdaTradeReport::getTradeVolume()](classWombat_1_1MamdaTradeReport.html#function-gettradevolume)

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrVolume](classWombat_1_1MamdaTradeListener.html#function-getcorrvolume)


Get the corrected trade volume. 


### function getCorrVolumeFieldState

```cpp
virtual MamdaFieldState getCorrVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrvolumefieldstate)


Get the field state


### function getCorrPartId

```cpp
virtual const char * getCorrPartId() const =0
```


**See**: [MamdaTradeReport::getTradePartId()](classWombat_1_1MamdaTradeReport.html#function-gettradepartid)

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrPartId](classWombat_1_1MamdaTradeListener.html#function-getcorrpartid)


Get the corrected trade participant identifier. 


### function getCorrPartIdFieldState

```cpp
virtual MamdaFieldState getCorrPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrpartidfieldstate)


Get the field state


### function getCorrQual

```cpp
virtual const char * getCorrQual() const =0
```


**See**: [MamdaTradeReport::getTradeQual()](classWombat_1_1MamdaTradeReport.html#function-gettradequal)

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrQual](classWombat_1_1MamdaTradeListener.html#function-getcorrqual)


Get corrected trade qualifier. 


### function getCorrQualFieldState

```cpp
virtual MamdaFieldState getCorrQualFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrqualfieldstate)


Get the field state


### function getCorrQualNative

```cpp
virtual const char * getCorrQualNative() const =0
```


**See**: MamdaTradeReport::getTradeCondition() 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrQualNative](classWombat_1_1MamdaTradeListener.html#function-getcorrqualnative)


Get corrected trade condition. 


### function getCorrQualNativeFieldState

```cpp
virtual MamdaFieldState getCorrQualNativeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrqualnativefieldstate)


Get the field state


### function getCorrSellersSaleDays

```cpp
virtual mama_u32_t getCorrSellersSaleDays() const =0
```


**See**: [MamdaTradeReport::getTradeSellersSaleDays()](classWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledays)

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-getcorrsellerssaledays)


Get the corrected trade sellers days. 


### function getCorrSellersSaleDaysFieldState

```cpp
virtual MamdaFieldState getCorrSellersSaleDaysFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrsellerssaledaysfieldstate)


Get the field state


### function getCorrStopStock

```cpp
virtual char getCorrStopStock() const =0
```


**See**: [MamdaTradeReport::getTradeStopStock()](classWombat_1_1MamdaTradeReport.html#function-gettradestopstock)

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrStopStock](classWombat_1_1MamdaTradeListener.html#function-getcorrstopstock)


Get the original stock stop indicator. 


### function getCorrStopStockFieldState

```cpp
virtual MamdaFieldState getCorrStopStockFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrstopstockfieldstate)


Get the field state


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


### function getTradeQualFieldState

```cpp
virtual MamdaFieldState getTradeQualFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeQualFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalfieldstate)


The trade qual Field State. 


### function getIsIrregular

```cpp
virtual bool getIsIrregular() const =0
```


**Return**: Whether or not the trade qualifies as an irregular trade. In general, only "regular" trades qualify to update the official last price and high/low prices. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIrregular](classWombat_1_1MamdaTradeListener.html#function-getisirregular)


Get whether the trade is irregular. 


### function getIsIrregularFieldState

```cpp
virtual MamdaFieldState getIsIrregularFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIsIrregularFieldState](classWombat_1_1MamdaTradeListener.html#function-getisirregularfieldstate)


The isIrregular Field State. 


### function getGenericFlag

```cpp
virtual bool getGenericFlag() const =0
```


**Reimplemented by**: [Wombat::MamdaTradeListener::getGenericFlag](classWombat_1_1MamdaTradeListener.html#function-getgenericflag)


### function getGenericFlagFieldState

```cpp
virtual MamdaFieldState getGenericFlagFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaTradeListener::getGenericFlagFieldState](classWombat_1_1MamdaTradeListener.html#function-getgenericflagfieldstate)


### function getOrigTradeId

```cpp
virtual const char * getOrigTradeId() const =0
```


**Return**: the original trade id 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigTradeId](classWombat_1_1MamdaTradeListener.html#function-getorigtradeid)


Get the original trade id 


### function getOrigTradeIdFieldState

```cpp
virtual MamdaFieldState getOrigTradeIdFieldState() const =0
```


**Reimplemented by**: [Wombat::MamdaTradeListener::getOrigTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigtradeidfieldstate)


### function getCorrShortSaleCircuitBreaker

```cpp
virtual char getCorrShortSaleCircuitBreaker() const =0
```


**Return**: CorrShortSaleCircuitBreaker 

* return values: 
* Blank: Short Sale Restriction Not in Effect. 
* A: Short Sale Restriction Activiated. 
* C: Short Sale Restriction Continued. 
* D: Sale Restriction Deactivated. 
* E: Sale Restriction in Effect. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreaker)


get the CorrShortSaleCircuitBreaker 


### function getCorrShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getCorrShortSaleCircuitBreakerFieldState() const =0
```


**Return**: The OrigShortSaleCircuitBreaker Field State. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCorrShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreakerfieldstate)


### function ~MamdaTradeCorrection

```cpp
inline virtual ~MamdaTradeCorrection()
```


-------------------------------

Updated on 2022-05-04 at 07:54:09 +0100