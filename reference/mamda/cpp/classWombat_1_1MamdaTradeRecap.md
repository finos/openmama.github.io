---
title: Wombat::MamdaTradeRecap
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeRecap



 [More...](#detailed-description)


`#include <MamdaTradeRecap.h>`

Inherits from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)

Inherited by [Wombat::MamdaTradeListener](classWombat_1_1MamdaTradeListener.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual const MamaPrice & | **[getLastPrice](classWombat_1_1MamdaTradeRecap.html#function-getlastprice)**() const =0 |
| virtual mama_quantity_t | **[getLastVolume](classWombat_1_1MamdaTradeRecap.html#function-getlastvolume)**() const =0 |
| virtual const char * | **[getLastPartId](classWombat_1_1MamdaTradeRecap.html#function-getlastpartid)**() const =0 |
| virtual const MamaDateTime & | **[getLastTime](classWombat_1_1MamdaTradeRecap.html#function-getlasttime)**() const =0 |
| virtual const MamaPrice & | **[getIrregPrice](classWombat_1_1MamdaTradeRecap.html#function-getirregprice)**() const =0 |
| virtual mama_quantity_t | **[getIrregVolume](classWombat_1_1MamdaTradeRecap.html#function-getirregvolume)**() const =0 |
| virtual const char * | **[getIrregPartId](classWombat_1_1MamdaTradeRecap.html#function-getirregpartid)**() const =0 |
| virtual const MamaDateTime & | **[getIrregTime](classWombat_1_1MamdaTradeRecap.html#function-getirregtime)**() const =0 |
| virtual const MamaDateTime & | **[getTradeDate](classWombat_1_1MamdaTradeRecap.html#function-gettradedate)**() const =0 |
| virtual mama_u32_t | **[getTradeCount](classWombat_1_1MamdaTradeRecap.html#function-gettradecount)**() const =0 |
| virtual mama_quantity_t | **[getAccVolume](classWombat_1_1MamdaTradeRecap.html#function-getaccvolume)**() const =0 |
| virtual mama_quantity_t | **[getOffExAccVolume](classWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolume)**() const =0 |
| virtual mama_quantity_t | **[getOnExAccVolume](classWombat_1_1MamdaTradeRecap.html#function-getonexaccvolume)**() const =0 |
| virtual const MamaPrice & | **[getNetChange](classWombat_1_1MamdaTradeRecap.html#function-getnetchange)**() const =0 |
| virtual double | **[getPctChange](classWombat_1_1MamdaTradeRecap.html#function-getpctchange)**() const =0 |
| virtual [MamdaTradeDirection](namespaceWombat.html#enum-mamdatradedirection) | **[getTradeDirection](classWombat_1_1MamdaTradeRecap.html#function-gettradedirection)**() const =0 |
| virtual const MamaPrice & | **[getOpenPrice](classWombat_1_1MamdaTradeRecap.html#function-getopenprice)**() const =0 |
| virtual const MamaPrice & | **[getHighPrice](classWombat_1_1MamdaTradeRecap.html#function-gethighprice)**() const =0 |
| virtual const MamaPrice & | **[getLowPrice](classWombat_1_1MamdaTradeRecap.html#function-getlowprice)**() const =0 |
| virtual const MamaPrice & | **[getClosePrice](classWombat_1_1MamdaTradeRecap.html#function-getcloseprice)**() const =0 |
| virtual const MamaPrice & | **[getPrevClosePrice](classWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice)**() const =0 |
| virtual const MamaPrice & | **[getAdjPrevClosePrice](classWombat_1_1MamdaTradeRecap.html#function-getadjprevcloseprice)**() const =0 |
| virtual const MamaDateTime & | **[getPrevCloseDate](classWombat_1_1MamdaTradeRecap.html#function-getprevclosedate)**() const =0 |
| virtual mama_u32_t | **[getBlockCount](classWombat_1_1MamdaTradeRecap.html#function-getblockcount)**() const =0 |
| virtual mama_quantity_t | **[getBlockVolume](classWombat_1_1MamdaTradeRecap.html#function-getblockvolume)**() const =0 |
| virtual double | **[getVwap](classWombat_1_1MamdaTradeRecap.html#function-getvwap)**() const =0 |
| virtual double | **[getOffExVwap](classWombat_1_1MamdaTradeRecap.html#function-getoffexvwap)**() const =0 |
| virtual double | **[getOnExVwap](classWombat_1_1MamdaTradeRecap.html#function-getonexvwap)**() const =0 |
| virtual double | **[getTotalValue](classWombat_1_1MamdaTradeRecap.html#function-gettotalvalue)**() const =0 |
| virtual double | **[getOffExTotalValue](classWombat_1_1MamdaTradeRecap.html#function-getoffextotalvalue)**() const =0 |
| virtual double | **[getOnExTotalValue](classWombat_1_1MamdaTradeRecap.html#function-getonextotalvalue)**() const =0 |
| virtual double | **[getStdDev](classWombat_1_1MamdaTradeRecap.html#function-getstddev)**() const =0 |
| virtual double | **[getStdDevSum](classWombat_1_1MamdaTradeRecap.html#function-getstddevsum)**() const =0 |
| virtual double | **[getStdDevSumSquares](classWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquares)**() const =0 |
| virtual const char * | **[getTradeUnits](classWombat_1_1MamdaTradeRecap.html#function-gettradeunits)**() const =0 |
| virtual mama_seqnum_t | **[getLastSeqNum](classWombat_1_1MamdaTradeRecap.html#function-getlastseqnum)**() const =0 |
| virtual mama_seqnum_t | **[getHighSeqNum](classWombat_1_1MamdaTradeRecap.html#function-gethighseqnum)**() const =0 |
| virtual mama_seqnum_t | **[getLowSeqNum](classWombat_1_1MamdaTradeRecap.html#function-getlowseqnum)**() const =0 |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaTradeRecap.html#function-geteventseqnum)**() const =0 |
| virtual mama_seqnum_t | **[getTotalVolumeSeqNum](classWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnum)**() const =0 |
| virtual const char * | **[getCurrencyCode](classWombat_1_1MamdaTradeRecap.html#function-getcurrencycode)**() const =0 |
| virtual const MamaPrice & | **[getSettlePrice](classWombat_1_1MamdaTradeRecap.html#function-getsettleprice)**() const =0 |
| virtual const MamaDateTime & | **[getSettleDate](classWombat_1_1MamdaTradeRecap.html#function-getsettledate)**() const =0 |
| virtual [MamdaTradeExecVenue](namespaceWombat.html#enum-mamdatradeexecvenue) | **[getTradeExecVenue](classWombat_1_1MamdaTradeRecap.html#function-gettradeexecvenue)**() const =0 |
| virtual const MamaPrice & | **[getOffExchangeTradePrice](classWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradeprice)**() const =0 |
| virtual const MamaPrice & | **[getOnExchangeTradePrice](classWombat_1_1MamdaTradeRecap.html#function-getonexchangetradeprice)**() const =0 |
| virtual const char * | **[getSide](classWombat_1_1MamdaTradeRecap.html#function-getside)**() const =0 |
| virtual char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreaker)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlastpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlastvolumefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPartIdFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlastpartidfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastTimeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlasttimefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getirregpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getirregvolumefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPartIdFieldState](classWombat_1_1MamdaTradeRecap.html#function-getirregpartidfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregTimeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getirregtimefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDateFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettradedatefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeCountFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettradecountfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAccVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getaccvolumefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExAccVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolumefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExAccVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getonexaccvolumefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNetChangeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getnetchangefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPctChangeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getpctchangefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDirectionFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettradedirectionfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOpenPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getopenpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-gethighpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlowpricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getClosePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getclosepricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevClosePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getprevclosepricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAdjPrevClosePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getadjprevclosepricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevCloseDateFieldState](classWombat_1_1MamdaTradeRecap.html#function-getprevclosedatefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockCountFieldState](classWombat_1_1MamdaTradeRecap.html#function-getblockcountfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getblockvolumefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVwapFieldState](classWombat_1_1MamdaTradeRecap.html#function-getvwapfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExVwapFieldState](classWombat_1_1MamdaTradeRecap.html#function-getoffexvwapfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExVwapFieldState](classWombat_1_1MamdaTradeRecap.html#function-getonexvwapfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalValueFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettotalvaluefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExTotalValueFieldState](classWombat_1_1MamdaTradeRecap.html#function-getoffextotalvaluefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExTotalValueFieldState](classWombat_1_1MamdaTradeRecap.html#function-getonextotalvaluefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevFieldState](classWombat_1_1MamdaTradeRecap.html#function-getstddevfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumFieldState](classWombat_1_1MamdaTradeRecap.html#function-getstddevsumfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumSquaresFieldState](classWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquaresfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeUnitsFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettradeunitsfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlastseqnumfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-gethighseqnumfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlowseqnumfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-geteventseqnumfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalVolumeSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnumfieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCurrencyCodeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getcurrencycodefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettlePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getsettlepricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettleDateFieldState](classWombat_1_1MamdaTradeRecap.html#function-getsettledatefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExchangeTradePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradepricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExchangeTradePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getonexchangetradepricefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSideFieldState](classWombat_1_1MamdaTradeRecap.html#function-getsidefieldstate)**() const =0 |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreakerfieldstate)**() const =0 |
| virtual | **[~MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html#function-~mamdatraderecap)**() |

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
class Wombat::MamdaTradeRecap;
```


[MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html) is an interface that provides access to trade related fields. 

## Public Functions Documentation

### function getLastPrice

```cpp
virtual const MamaPrice & getLastPrice() const =0
```


**Return**: The last trade price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastPrice](classWombat_1_1MamdaTradeListener.html#function-getlastprice)


Monetary value of an individual share of the security at the time of the trade.


### function getLastVolume

```cpp
virtual mama_quantity_t getLastVolume() const =0
```


**Return**: The last trade volume. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastVolume](classWombat_1_1MamdaTradeListener.html#function-getlastvolume)


Number of shares traded in a single transaction for an individual security.


### function getLastPartId

```cpp
virtual const char * getLastPartId() const =0
```


**Return**: The last trade participant identifier. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastPartId](classWombat_1_1MamdaTradeListener.html#function-getlastpartid)


Trade participant ID. This is typically an exchange ID, sometimes a market maker ID.


### function getLastTime

```cpp
virtual const MamaDateTime & getLastTime() const =0
```


**Return**: The last trade time. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastTime](classWombat_1_1MamdaTradeListener.html#function-getlasttime)


Time corresponding to the last trade, as reported by the feed. The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.


### function getIrregPrice

```cpp
virtual const MamaPrice & getIrregPrice() const =0
```


**Return**: The last irregular trade price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIrregPrice](classWombat_1_1MamdaTradeListener.html#function-getirregprice)


Monetary value of an individual share of the security at the time of the last irregular trade.


### function getIrregVolume

```cpp
virtual mama_quantity_t getIrregVolume() const =0
```


**Return**: The last irregular trade volume. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIrregVolume](classWombat_1_1MamdaTradeListener.html#function-getirregvolume)


Number of shares traded in a single transaction for an individual security.


### function getIrregPartId

```cpp
virtual const char * getIrregPartId() const =0
```


**Return**: The last irregular trade participant identifier. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIrregPartId](classWombat_1_1MamdaTradeListener.html#function-getirregpartid)


Irregular trade participant ID. This is typically an exchange ID, sometimes a market maker ID.


### function getIrregTime

```cpp
virtual const MamaDateTime & getIrregTime() const =0
```


**Return**: The last irregular trade time. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIrregTime](classWombat_1_1MamdaTradeListener.html#function-getirregtime)


Time corresponding to the last irregular trade, as reported by the feed. The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.


### function getTradeDate

```cpp
virtual const MamaDateTime & getTradeDate() const =0
```


**Return**: The last trade time. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeDate](classWombat_1_1MamdaTradeListener.html#function-gettradedate)


Time corresponding to the last trade, as reported by the feed. The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.


### function getTradeCount

```cpp
virtual mama_u32_t getTradeCount() const =0
```


**Return**: The number of trades so far today. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeCount](classWombat_1_1MamdaTradeListener.html#function-gettradecount)


The number of trades today.


### function getAccVolume

```cpp
virtual mama_quantity_t getAccVolume() const =0
```


**Return**: Accumulated trade volume. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getAccVolume](classWombat_1_1MamdaTradeListener.html#function-getaccvolume)


Total volume of shares traded in a security at the time it is disseminated.


### function getOffExAccVolume

```cpp
virtual mama_quantity_t getOffExAccVolume() const =0
```


**Return**: Accumulated off-exchange trade volume. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOffExAccVolume](classWombat_1_1MamdaTradeListener.html#function-getoffexaccvolume)


Total volume of off-exchange shares traded in a security at the time it is disseminated.


### function getOnExAccVolume

```cpp
virtual mama_quantity_t getOnExAccVolume() const =0
```


**Return**: Accumulated on-exhange trade volume. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOnExAccVolume](classWombat_1_1MamdaTradeListener.html#function-getonexaccvolume)


Total volume of on-exchange shares traded in a security at the time it is disseminated.


### function getNetChange

```cpp
virtual const MamaPrice & getNetChange() const =0
```


**Return**: Price change compared to previous price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getNetChange](classWombat_1_1MamdaTradeListener.html#function-getnetchange)


Change in price compared with the previous closing price (i.e. previous closing price - trade price).


### function getPctChange

```cpp
virtual double getPctChange() const =0
```


**Return**: Percentage price change compared to previous price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getPctChange](classWombat_1_1MamdaTradeListener.html#function-getpctchange)


Percentage change in price compared with the previous closing price (i.e. previous closing price - trade price).


### function getTradeDirection

```cpp
virtual MamdaTradeDirection getTradeDirection() const =0
```


**Return**: The tick direction. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeDirection](classWombat_1_1MamdaTradeListener.html#function-gettradedirection)


Trade tick direction. See [MamdaTradeDirection.h] for details.


### function getOpenPrice

```cpp
virtual const MamaPrice & getOpenPrice() const =0
```


**Return**: The opening price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOpenPrice](classWombat_1_1MamdaTradeListener.html#function-getopenprice)


The price of the first qualifying trade in the security during the current trading day.


### function getHighPrice

```cpp
virtual const MamaPrice & getHighPrice() const =0
```


**Return**: The highest trade price for the day. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getHighPrice](classWombat_1_1MamdaTradeListener.html#function-gethighprice)


Highest price paid for security during the trading day.


### function getLowPrice

```cpp
virtual const MamaPrice & getLowPrice() const =0
```


**Return**: The lowest trade price for the day. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLowPrice](classWombat_1_1MamdaTradeListener.html#function-getlowprice)


Lowest price paid for security during the trading day.


### function getClosePrice

```cpp
virtual const MamaPrice & getClosePrice() const =0
```


**Return**: The closing price for the day. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getClosePrice](classWombat_1_1MamdaTradeListener.html#function-getcloseprice)


Today's closing price. The closing price field is populated when official closing prices are sent by the feed after the session close.


### function getPrevClosePrice

```cpp
virtual const MamaPrice & getPrevClosePrice() const =0
```


**Return**: The last qualifying trade price on the previous trading day. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getPrevClosePrice](classWombat_1_1MamdaTradeListener.html#function-getprevcloseprice)


The last qualifying trade price on the previous trading day. This field may be copied from the close price field during the morning "roll" of records in the feedhandler, or it may be obtained from a secondary source, or it may be explicitly sent by the feed prior to the opening of trading for the current day.


### function getAdjPrevClosePrice

```cpp
virtual const MamaPrice & getAdjPrevClosePrice() const =0
```


**See**: [getPrevClosePrice()](classWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice)

**Return**: The adjusted previous closing price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getAdjPrevClosePrice](classWombat_1_1MamdaTradeListener.html#function-getadjprevcloseprice)


The previous close price adjusted by corporate actions, such as dividends and stock splits on the ex-date.


### function getPrevCloseDate

```cpp
virtual const MamaDateTime & getPrevCloseDate() const =0
```


**See**: [getPrevClosePrice()](classWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice). 

**Return**: The closing price from the previous trading day. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getPrevCloseDate](classWombat_1_1MamdaTradeListener.html#function-getprevclosedate)


Date corresponding to wPrevClosePrice.


### function getBlockCount

```cpp
virtual mama_u32_t getBlockCount() const =0
```


**Return**: Number of block trades. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getBlockCount](classWombat_1_1MamdaTradeListener.html#function-getblockcount)


The number of block trades (at least 10,000 shares) today.


### function getBlockVolume

```cpp
virtual mama_quantity_t getBlockVolume() const =0
```


**Return**: Total volumn of block trades. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getBlockVolume](classWombat_1_1MamdaTradeListener.html#function-getblockvolume)


Total volume of block trades today.


### function getVwap

```cpp
virtual double getVwap() const =0
```


**Return**: The VWAP (Volume-weighted average price) 

**Reimplemented by**: [Wombat::MamdaTradeListener::getVwap](classWombat_1_1MamdaTradeListener.html#function-getvwap)


Volume-weighted average price of a security at the time it is disseminated. Equivalent to dividing total value by total volume.


### function getOffExVwap

```cpp
virtual double getOffExVwap() const =0
```


**Return**: The off-exchange VWAP (Volume-weighted average price) 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOffExVwap](classWombat_1_1MamdaTradeListener.html#function-getoffexvwap)


Volume-weighted average price of an off-exchange security at the time it is disseminated. Equivalent to dividing the off-exchange total value by the off-exchange total volume.


### function getOnExVwap

```cpp
virtual double getOnExVwap() const =0
```


**Return**: The on-exchange VWAP (Volume-weighted average price) 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOnExVwap](classWombat_1_1MamdaTradeListener.html#function-getonexvwap)


Volume-weighted average price of an on-exchange security at the time it is disseminated. Equivalent to dividing on-echange total value by the on-exchange total volume.


### function getTotalValue

```cpp
virtual double getTotalValue() const =0
```


**Return**: Total value of all instruments traded. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTotalValue](classWombat_1_1MamdaTradeListener.html#function-gettotalvalue)


Total value of all shares traded in a security at the time it is disseminated. Calculated by summing the result of multiplying the trade price by trade volume for each qualifying trade.


### function getOffExTotalValue

```cpp
virtual double getOffExTotalValue() const =0
```


**Return**: Total value of all off-exhange instruments traded. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOffExTotalValue](classWombat_1_1MamdaTradeListener.html#function-getoffextotalvalue)


Total value of all off-exchange shares traded in a security at the time it is disseminated. Calculated by summing the result of multiplying the trade price by trade volume for each qualifying trade.


### function getOnExTotalValue

```cpp
virtual double getOnExTotalValue() const =0
```


**Return**: Total value of all on-exchange instruments traded. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOnExTotalValue](classWombat_1_1MamdaTradeListener.html#function-getonextotalvalue)


Total value of all on-exchange shares traded in a security at the time it is disseminated. Calculated by summing the result of multiplying the trade price by trade volume for each qualifying trade.


### function getStdDev

```cpp
virtual double getStdDev() const =0
```


**Return**: The standard deviation of last trade price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getStdDev](classWombat_1_1MamdaTradeListener.html#function-getstddev)


Standard deviation of last trade price of a security at the time it is disseminated.


### function getStdDevSum

```cpp
virtual double getStdDevSum() const =0
```


**Return**: The sum of the standard deviations. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getStdDevSum](classWombat_1_1MamdaTradeListener.html#function-getstddevsum)


Sum of the standard deviations.


### function getStdDevSumSquares

```cpp
virtual double getStdDevSumSquares() const =0
```


**Return**: The square of the sum of the standard deviations. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getStdDevSumSquares](classWombat_1_1MamdaTradeListener.html#function-getstddevsumsquares)


Square of the sum of the standard deviations.


### function getTradeUnits

```cpp
virtual const char * getTradeUnits() const =0
```


**Return**: Reuters trade units 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeUnits](classWombat_1_1MamdaTradeListener.html#function-gettradeunits)


Reuters trade units. 


### function getLastSeqNum

```cpp
virtual mama_seqnum_t getLastSeqNum() const =0
```


**Return**: The sequence number of the last trade. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastSeqNum](classWombat_1_1MamdaTradeListener.html#function-getlastseqnum)


Sequence number of the last trade.


### function getHighSeqNum

```cpp
virtual mama_seqnum_t getHighSeqNum() const =0
```


**Return**: Sequence number of incoming message which gives high value. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getHighSeqNum](classWombat_1_1MamdaTradeListener.html#function-gethighseqnum)


Sequence number of incoming message which gives high value.


### function getLowSeqNum

```cpp
virtual mama_seqnum_t getLowSeqNum() const =0
```


**Return**: Sequence number of incoming message which gives low value. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLowSeqNum](classWombat_1_1MamdaTradeListener.html#function-getlowseqnum)


Sequence number of incoming message which gives low value.


### function getEventSeqNum

```cpp
virtual mama_seqnum_t getEventSeqNum() const =0
```


**Return**: Sequence number of trade. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getEventSeqNum](classWombat_1_1MamdaTradeListener.html#function-geteventseqnum)


Sequence number of trade.


### function getTotalVolumeSeqNum

```cpp
virtual mama_seqnum_t getTotalVolumeSeqNum() const =0
```


**Reimplemented by**: [Wombat::MamdaTradeListener::getTotalVolumeSeqNum](classWombat_1_1MamdaTradeListener.html#function-gettotalvolumeseqnum)


### function getCurrencyCode

```cpp
virtual const char * getCurrencyCode() const =0
```


**Return**: Currency of the trade. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCurrencyCode](classWombat_1_1MamdaTradeListener.html#function-getcurrencycode)


Currency of the trade (eg US$)


### function getSettlePrice

```cpp
virtual const MamaPrice & getSettlePrice() const =0
```


**Return**: Settle price of trade. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getSettlePrice](classWombat_1_1MamdaTradeListener.html#function-getsettleprice)


Settle price of trade.


### function getSettleDate

```cpp
virtual const MamaDateTime & getSettleDate() const =0
```


**Return**: Settle date of trade. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getSettleDate](classWombat_1_1MamdaTradeListener.html#function-getsettledate)


Settle date of trade.


### function getTradeExecVenue

```cpp
virtual MamdaTradeExecVenue getTradeExecVenue() const =0
```


**Return**: The trade execution venue. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeExecVenue](classWombat_1_1MamdaTradeListener.html#function-gettradeexecvenue)


Trade execution venue. See [MamdaTradeExecVenue.h] for details.


### function getOffExchangeTradePrice

```cpp
virtual const MamaPrice & getOffExchangeTradePrice() const =0
```


**Return**: The last off exchange trade price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOffExchangeTradePrice](classWombat_1_1MamdaTradeListener.html#function-getoffexchangetradeprice)


Monetary value of an individual share of the security off exchange at the time of the trade.


### function getOnExchangeTradePrice

```cpp
virtual const MamaPrice & getOnExchangeTradePrice() const =0
```


**Return**: The last on exchange trade price. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOnExchangeTradePrice](classWombat_1_1MamdaTradeListener.html#function-getonexchangetradeprice)


Monetary value of an individual share of the security on exchange at the time of the trade.


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


### function getLastPriceFieldState

```cpp
virtual MamdaFieldState getLastPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastpricefieldstate)


The last trade price Field State. 


### function getLastVolumeFieldState

```cpp
virtual MamdaFieldState getLastVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastvolumefieldstate)


The last volume Field State. 


### function getLastPartIdFieldState

```cpp
virtual MamdaFieldState getLastPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastpartidfieldstate)


The last part Id Field State. 


### function getLastTimeFieldState

```cpp
virtual MamdaFieldState getLastTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlasttimefieldstate)


The last time Field State. 


### function getIrregPriceFieldState

```cpp
virtual MamdaFieldState getIrregPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIrregPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregpricefieldstate)


The irreg price Field State. 


### function getIrregVolumeFieldState

```cpp
virtual MamdaFieldState getIrregVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIrregVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregvolumefieldstate)


The irreg volume Field State. 


### function getIrregPartIdFieldState

```cpp
virtual MamdaFieldState getIrregPartIdFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIrregPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregpartidfieldstate)


The irreg part Id Field State. 


### function getIrregTimeFieldState

```cpp
virtual MamdaFieldState getIrregTimeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getIrregTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregtimefieldstate)


The irregular time Field State. 


### function getTradeDateFieldState

```cpp
virtual MamdaFieldState getTradeDateFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeDateFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradedatefieldstate)


The trade date Field State. 


### function getTradeCountFieldState

```cpp
virtual MamdaFieldState getTradeCountFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeCountFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradecountfieldstate)


The trade count Field State. 


### function getAccVolumeFieldState

```cpp
virtual MamdaFieldState getAccVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getaccvolumefieldstate)


The accumulated volume Field State. 


### function getOffExAccVolumeFieldState

```cpp
virtual MamdaFieldState getOffExAccVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOffExAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexaccvolumefieldstate)


The off exchange accumulated volume Field State. 


### function getOnExAccVolumeFieldState

```cpp
virtual MamdaFieldState getOnExAccVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOnExAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexaccvolumefieldstate)


The on exchange accumulated volume Field State. 


### function getNetChangeFieldState

```cpp
virtual MamdaFieldState getNetChangeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getNetChangeFieldState](classWombat_1_1MamdaTradeListener.html#function-getnetchangefieldstate)


The net change Field State. 


### function getPctChangeFieldState

```cpp
virtual MamdaFieldState getPctChangeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getPctChangeFieldState](classWombat_1_1MamdaTradeListener.html#function-getpctchangefieldstate)


The percentage change Field State. 


### function getTradeDirectionFieldState

```cpp
virtual MamdaFieldState getTradeDirectionFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeDirectionFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradedirectionfieldstate)


The trade direction Field State. 


### function getOpenPriceFieldState

```cpp
virtual MamdaFieldState getOpenPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOpenPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getopenpricefieldstate)


The open price Field State. 


### function getHighPriceFieldState

```cpp
virtual MamdaFieldState getHighPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getHighPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gethighpricefieldstate)


The high price Field State. 


### function getLowPriceFieldState

```cpp
virtual MamdaFieldState getLowPriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLowPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getlowpricefieldstate)


The low price Field State. 


### function getClosePriceFieldState

```cpp
virtual MamdaFieldState getClosePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getclosepricefieldstate)


The close price Field State. 


### function getPrevClosePriceFieldState

```cpp
virtual MamdaFieldState getPrevClosePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getPrevClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getprevclosepricefieldstate)


The previous close price Field State. 


### function getAdjPrevClosePriceFieldState

```cpp
virtual MamdaFieldState getAdjPrevClosePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getAdjPrevClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getadjprevclosepricefieldstate)


The adjusted previous close date Field State. 


### function getPrevCloseDateFieldState

```cpp
virtual MamdaFieldState getPrevCloseDateFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getPrevCloseDateFieldState](classWombat_1_1MamdaTradeListener.html#function-getprevclosedatefieldstate)


The previous close date Field State. 


### function getBlockCountFieldState

```cpp
virtual MamdaFieldState getBlockCountFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getBlockCountFieldState](classWombat_1_1MamdaTradeListener.html#function-getblockcountfieldstate)


The block count Field State. 


### function getBlockVolumeFieldState

```cpp
virtual MamdaFieldState getBlockVolumeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getBlockVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getblockvolumefieldstate)


The block volume Field State. 


### function getVwapFieldState

```cpp
virtual MamdaFieldState getVwapFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getvwapfieldstate)


The Vwap Field State. 


### function getOffExVwapFieldState

```cpp
virtual MamdaFieldState getOffExVwapFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOffExVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexvwapfieldstate)


The off exchange Vwap Field State. 


### function getOnExVwapFieldState

```cpp
virtual MamdaFieldState getOnExVwapFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOnExVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexvwapfieldstate)


The on exchange Vwap Field State. 


### function getTotalValueFieldState

```cpp
virtual MamdaFieldState getTotalValueFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-gettotalvaluefieldstate)


The total value Field State. 


### function getOffExTotalValueFieldState

```cpp
virtual MamdaFieldState getOffExTotalValueFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOffExTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffextotalvaluefieldstate)


The Off Exchange Total Value Field State. 


### function getOnExTotalValueFieldState

```cpp
virtual MamdaFieldState getOnExTotalValueFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOnExTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-getonextotalvaluefieldstate)


The On Exchange Total Value Field State. 


### function getStdDevFieldState

```cpp
virtual MamdaFieldState getStdDevFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getStdDevFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevfieldstate)


The std deviation Field State. 


### function getStdDevSumFieldState

```cpp
virtual MamdaFieldState getStdDevSumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getStdDevSumFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevsumfieldstate)


The std deviation sum Field State. 


### function getStdDevSumSquaresFieldState

```cpp
virtual MamdaFieldState getStdDevSumSquaresFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getStdDevSumSquaresFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevsumsquaresfieldstate)


The StdDevSumSquares Field State. 


### function getTradeUnitsFieldState

```cpp
virtual MamdaFieldState getTradeUnitsFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTradeUnitsFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeunitsfieldstate)


The trade units Field State. 


### function getLastSeqNumFieldState

```cpp
virtual MamdaFieldState getLastSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLastSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastseqnumfieldstate)


The last SeqNum Field State. 


### function getHighSeqNumFieldState

```cpp
virtual MamdaFieldState getHighSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getHighSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-gethighseqnumfieldstate)


The high seqNum Field State. 


### function getLowSeqNumFieldState

```cpp
virtual MamdaFieldState getLowSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getLowSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getlowseqnumfieldstate)


The low SeqNum Field State. 


### function getEventSeqNumFieldState

```cpp
virtual MamdaFieldState getEventSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getEventSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventseqnumfieldstate)


The event SeqNum Field State. 


### function getTotalVolumeSeqNumFieldState

```cpp
virtual MamdaFieldState getTotalVolumeSeqNumFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getTotalVolumeSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-gettotalvolumeseqnumfieldstate)


The total volume seqNum Field State. 


### function getCurrencyCodeFieldState

```cpp
virtual MamdaFieldState getCurrencyCodeFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getCurrencyCodeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcurrencycodefieldstate)


The currency code Field State. 


### function getSettlePriceFieldState

```cpp
virtual MamdaFieldState getSettlePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getSettlePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getsettlepricefieldstate)


The settle price Field State. 


### function getSettleDateFieldState

```cpp
virtual MamdaFieldState getSettleDateFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getSettleDateFieldState](classWombat_1_1MamdaTradeListener.html#function-getsettledatefieldstate)


The last trade price Field State. 


### function getOffExchangeTradePriceFieldState

```cpp
virtual MamdaFieldState getOffExchangeTradePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOffExchangeTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexchangetradepricefieldstate)


The settle date Field State. 


### function getOnExchangeTradePriceFieldState

```cpp
virtual MamdaFieldState getOnExchangeTradePriceFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getOnExchangeTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexchangetradepricefieldstate)


The onExchange trade price Field State. 


### function getSideFieldState

```cpp
virtual MamdaFieldState getSideFieldState() const =0
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getSideFieldState](classWombat_1_1MamdaTradeListener.html#function-getsidefieldstate)


The TradeSide or AggressorSide Field State. 


### function getShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getShortSaleCircuitBreakerFieldState() const =0
```


**Return**: The ShortSaleCircuitBreaker Field State. An enumeration representing field state. 

**Reimplemented by**: [Wombat::MamdaTradeListener::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreakerfieldstate)


### function ~MamdaTradeRecap

```cpp
inline virtual ~MamdaTradeRecap()
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100