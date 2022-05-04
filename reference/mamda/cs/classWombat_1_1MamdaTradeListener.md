---
title: Wombat::MamdaTradeListener
summary: MamdaTradeListener is a class that specializes in handling trade updates. Developers provide their own implementation of the MamdaTradeHandler interface and will be delivered notifications for trades, trade cancels/error/corrections, and trade closing prices. An obvious application for this MAMDA class is any kind of trade tick capture application. 
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeListener



[MamdaTradeListener]() is a class that specializes in handling trade updates. Developers provide their own implementation of the [MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html) interface and will be delivered notifications for trades, trade cancels/error/corrections, and trade closing prices. An obvious application for this MAMDA class is any kind of trade tick capture application.  [More...](#detailed-description)

Inherits from [Wombat.MamdaMsgListener](interfaceWombat_1_1MamdaMsgListener.html), [Wombat.MamdaTradeRecap](interfaceWombat_1_1MamdaTradeRecap.html), [Wombat.MamdaTradeReport](interfaceWombat_1_1MamdaTradeReport.html), [Wombat.MamdaTradeGap](interfaceWombat_1_1MamdaTradeGap.html), [Wombat.MamdaTradeCancelOrError](interfaceWombat_1_1MamdaTradeCancelOrError.html), [Wombat.MamdaTradeCorrection](interfaceWombat_1_1MamdaTradeCorrection.html), [Wombat.MamdaTradeClosing](interfaceWombat_1_1MamdaTradeClosing.html), [Wombat.MamdaBasicEvent](interfaceWombat_1_1MamdaBasicEvent.html)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[TradeLineTime](classWombat_1_1MamdaTradeListener_1_1TradeLineTime.html)**  |
| class | **[TradeSendTime](classWombat_1_1MamdaTradeListener_1_1TradeSendTime.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaTradeListener](classWombat_1_1MamdaTradeListener.html#function-mamdatradelistener)**()<br>Create a specialized trade listener. This listener handles trade reports, trade recaps, trade errors/cancels, trade corrections, and trade gap notifications.  |
| void | **[addHandler](classWombat_1_1MamdaTradeListener.html#function-addhandler)**([MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html) handler)<br>Add a specialized trade handler. Currently, only one handler can (and must) be registered.  |
| String | **[getSymbol](classWombat_1_1MamdaTradeListener.html#function-getsymbol)**() |
| String | **[getPartId](classWombat_1_1MamdaTradeListener.html#function-getpartid)**() |
| DateTime | **[getSrcTime](classWombat_1_1MamdaTradeListener.html#function-getsrctime)**()<br>[MamdaBasicEvent.getSrcTime()](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime) |
| DateTime | **[getActivityTime](classWombat_1_1MamdaTradeListener.html#function-getactivitytime)**()<br>[MamdaBasicEvent.getActivityTime()](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime) |
| DateTime | **[getLineTime](classWombat_1_1MamdaTradeListener.html#function-getlinetime)**() |
| DateTime | **[getSendTime](classWombat_1_1MamdaTradeListener.html#function-getsendtime)**() |
| String | **[getPubId](classWombat_1_1MamdaTradeListener.html#function-getpubid)**() |
| long | **[getEventSeqNum](classWombat_1_1MamdaTradeListener.html#function-geteventseqnum)**()<br>[MamdaBasicEvent.getEventSeqNum()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum) |
| DateTime | **[getEventTime](classWombat_1_1MamdaTradeListener.html#function-geteventtime)**()<br>[MamdaBasicEvent.getEventTime()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime) |
| MamaPrice | **[getLastPrice](classWombat_1_1MamdaTradeListener.html#function-getlastprice)**()<br>[MamdaTradeRecap.getLastPrice()]() |
| long | **[getLastVolume](classWombat_1_1MamdaTradeListener.html#function-getlastvolume)**()<br>[MamdaTradeRecap.getLastVolume()]() |
| String | **[getLastPartId](classWombat_1_1MamdaTradeListener.html#function-getlastpartid)**()<br>[MamdaTradeRecap.getLastPartId()]() |
| String | **[getTradeId](classWombat_1_1MamdaTradeListener.html#function-gettradeid)**()<br>[MamdaTradeReport.getTradeId()]() |
| String | **[getOrigTradeId](classWombat_1_1MamdaTradeListener.html#function-getorigtradeid)**()<br>[MamdaTradeCancelOrError.getOrigTradeId()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeid) |
| String | **[getCorrTradeId](classWombat_1_1MamdaTradeListener.html#function-getcorrtradeid)**()<br>[MamdaTradeCorrection.getCorrTradeId()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeid) |
| DateTime | **[getLastTime](classWombat_1_1MamdaTradeListener.html#function-getlasttime)**()<br>[MamdaTradeRecap.getLastTime()]() |
| MamaPrice | **[getIrregPrice](classWombat_1_1MamdaTradeListener.html#function-getirregprice)**()<br>[MamdaTradeRecap.getIrregPrice()]() |
| long | **[getIrregVolume](classWombat_1_1MamdaTradeListener.html#function-getirregvolume)**()<br>[MamdaTradeRecap.getIrregVolume()]() |
| String | **[getIrregPartId](classWombat_1_1MamdaTradeListener.html#function-getirregpartid)**()<br>[MamdaTradeRecap.getIrregPartId()]() |
| DateTime | **[getIrregTime](classWombat_1_1MamdaTradeListener.html#function-getirregtime)**()<br>[MamdaTradeRecap.getIrregTime()]() |
| DateTime | **[getTradeDate](classWombat_1_1MamdaTradeListener.html#function-gettradedate)**()<br>[MamdaTradeRecap.getLastTime()]() |
| long | **[getAccVolume](classWombat_1_1MamdaTradeListener.html#function-getaccvolume)**()<br>[MamdaTradeRecap.getAccVolume()]() |
| long | **[getOffExAccVolume](classWombat_1_1MamdaTradeListener.html#function-getoffexaccvolume)**()<br>[MamdaTradeRecap.getOffExAccVolume()]() |
| long | **[getOnExAccVolume](classWombat_1_1MamdaTradeListener.html#function-getonexaccvolume)**()<br>[MamdaTradeRecap.getOnExAccVolume()]() |
| MamaPrice | **[getNetChange](classWombat_1_1MamdaTradeListener.html#function-getnetchange)**()<br>[MamdaTradeRecap.getNetChange()]() |
| double | **[getPctChange](classWombat_1_1MamdaTradeListener.html#function-getpctchange)**()<br>[MamdaTradeRecap.getPctChange()]() |
| String | **[getTradeDirection](classWombat_1_1MamdaTradeListener.html#function-gettradedirection)**()<br>[MamdaTradeRecap.getTradeDirection()]() |
| string | **[getSide](classWombat_1_1MamdaTradeListener.html#function-getside)**()<br>[MamdaTradeRecap.getSide()]() |
| MamaPrice | **[getOpenPrice](classWombat_1_1MamdaTradeListener.html#function-getopenprice)**()<br>[MamdaTradeRecap.getOpenPrice()]() |
| MamaPrice | **[getHighPrice](classWombat_1_1MamdaTradeListener.html#function-gethighprice)**()<br>[MamdaTradeRecap.getHighPrice()]() |
| MamaPrice | **[getLowPrice](classWombat_1_1MamdaTradeListener.html#function-getlowprice)**()<br>[MamdaTradeRecap.getLowPrice()]() |
| MamaPrice | **[getClosePrice](classWombat_1_1MamdaTradeListener.html#function-getcloseprice)**()<br>[MamdaTradeRecap.getClosePrice()]() |
| MamaPrice | **[getPrevClosePrice](classWombat_1_1MamdaTradeListener.html#function-getprevcloseprice)**()<br>[MamdaTradeRecap.getPrevClosePrice()]() |
| DateTime | **[getPrevCloseDate](classWombat_1_1MamdaTradeListener.html#function-getprevclosedate)**()<br>[MamdaTradeRecap.getPrevCloseDate()]() |
| MamaPrice | **[getAdjPrevClose](classWombat_1_1MamdaTradeListener.html#function-getadjprevclose)**()<br>[MamdaTradeRecap.getAdjPrevClose()]() |
| long | **[getBlockCount](classWombat_1_1MamdaTradeListener.html#function-getblockcount)**()<br>[MamdaTradeRecap.getBlockCount()]() |
| long | **[getBlockVolume](classWombat_1_1MamdaTradeListener.html#function-getblockvolume)**()<br>[MamdaTradeRecap.getBlockVolume()]() |
| double | **[getVwap](classWombat_1_1MamdaTradeListener.html#function-getvwap)**()<br>[MamdaTradeRecap.getVwap()]() |
| double | **[getOffExVwap](classWombat_1_1MamdaTradeListener.html#function-getoffexvwap)**()<br>[MamdaTradeRecap.getOffExVwap()]() |
| double | **[getOnExVwap](classWombat_1_1MamdaTradeListener.html#function-getonexvwap)**()<br>[MamdaTradeRecap.getOnExVwap()]() |
| double | **[getTotalValue](classWombat_1_1MamdaTradeListener.html#function-gettotalvalue)**()<br>[MamdaTradeRecap.getTotalValue()]() |
| double | **[getOffExTotalValue](classWombat_1_1MamdaTradeListener.html#function-getoffextotalvalue)**()<br>[MamdaTradeRecap.getOffExTotalValue()]() |
| double | **[getOnExTotalValue](classWombat_1_1MamdaTradeListener.html#function-getonextotalvalue)**()<br>[MamdaTradeRecap.getOnExTotalValue()]() |
| double | **[getStdDev](classWombat_1_1MamdaTradeListener.html#function-getstddev)**()<br>[MamdaTradeRecap.getStdDev()]() |
| double | **[getStdDevSum](classWombat_1_1MamdaTradeListener.html#function-getstddevsum)**()<br>MamdaTradeRecap.getStdDevSum()  |
| double | **[getStdDevSumSquares](classWombat_1_1MamdaTradeListener.html#function-getstddevsumsquares)**()<br>MamdaTradeRecap.getStdDevSumSquares()  |
| long | **[getOrderId](classWombat_1_1MamdaTradeListener.html#function-getorderid)**()<br>[MamdaTradeRecap.getOrderId]() |
| MamaPrice | **[getSettlePrice](classWombat_1_1MamdaTradeListener.html#function-getsettleprice)**()<br>[MamdaTradeRecap.getSettlePrice()]() |
| DateTime | **[getSettleDate](classWombat_1_1MamdaTradeListener.html#function-getsettledate)**()<br>[MamdaTradeRecap.getSettleDate()]() |
| char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreaker)**()<br>Returns the ShortSaleCircuitBreaker  |
| char | **[getOrigShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreaker)**()<br>Returns the ShortSaleCircuitBreaker  |
| char | **[getCorrShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreaker)**()<br>Get the ShortSaleCircuitBreaker. MamdaTradeReport.getCorrShortSaleCircuitBreaker() |
| MamaPrice | **[getTradePrice](classWombat_1_1MamdaTradeListener.html#function-gettradeprice)**()<br>[MamdaTradeReport.getTradePrice()]() |
| long | **[getTradeVolume](classWombat_1_1MamdaTradeListener.html#function-gettradevolume)**()<br>[MamdaTradeReport.getTradeVolume()]() |
| String | **[getTradePartId](classWombat_1_1MamdaTradeListener.html#function-gettradepartid)**()<br>[MamdaTradeReport.getTradePartId()]() |
| String | **[getTradeQual](classWombat_1_1MamdaTradeListener.html#function-gettradequal)**()<br>[MamdaTradeReport.getTradeQual()]() |
| String | **[getTradeQualNativeStr](classWombat_1_1MamdaTradeListener.html#function-gettradequalnativestr)**()<br>[MamdaTradeReport.getTradeQualNativeStr()]() |
| String | **[getTradeCondition](classWombat_1_1MamdaTradeListener.html#function-gettradecondition)**()<br>[MamdaTradeReport.getTradeCondition()]() |
| long | **[getTradeSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledays)**()<br>[MamdaTradeReport.getTradeSellersSaleDays()]() |
| char | **[getTradeStopStock](classWombat_1_1MamdaTradeListener.html#function-gettradestopstock)**()<br>[MamdaTradeReport.getTradeStopStock()]() |
| String | **[getTradeExecVenue](classWombat_1_1MamdaTradeListener.html#function-gettradeexecvenue)**()<br>[MamdaTradeRecap.getTradeExecVenue()]() |
| MamaPrice | **[getOffExchangeTradePrice](classWombat_1_1MamdaTradeListener.html#function-getoffexchangetradeprice)**()<br>[MamdaTradeRecap.getOffExchangeTradePrice()]() |
| MamaPrice | **[getOnExchangeTradePrice](classWombat_1_1MamdaTradeListener.html#function-getonexchangetradeprice)**()<br>[MamdaTradeRecap.getOnExchangeTradePrice()]() |
| long | **[getTradeCount](classWombat_1_1MamdaTradeListener.html#function-gettradecount)**()<br>[MamdaTradeRecap.getTradeCount()]() |
| string | **[getTradeUnits](classWombat_1_1MamdaTradeListener.html#function-gettradeunits)**()<br>MamdaTradeRecap.getTradeUnits()  |
| long | **[getLastSeqNum](classWombat_1_1MamdaTradeListener.html#function-getlastseqnum)**()<br>MamdaTradeRecap.getLastSeqNum()  |
| long | **[getHighSeqNum](classWombat_1_1MamdaTradeListener.html#function-gethighseqnum)**()<br>MamdaTradeRecap.getHighSeqNum()  |
| long | **[getLowSeqNum](classWombat_1_1MamdaTradeListener.html#function-getlowseqnum)**()<br>MamdaTradeRecap.getLowSeqNum()  |
| long | **[getTotalVolumeSeqNum](classWombat_1_1MamdaTradeListener.html#function-gettotalvolumeseqnum)**()<br>MamdaTradeRecap.getTotalVolumeSeqNum()  |
| string | **[getCurrencyCode](classWombat_1_1MamdaTradeListener.html#function-getcurrencycode)**()<br>MamdaTradeRecap.getCurrencyCode()  |
| bool | **[getIsIrregular](classWombat_1_1MamdaTradeListener.html#function-getisirregular)**()<br>[MamdaTradeReport.getIsIrregular()]() |
| long | **[getBeginGapSeqNum](classWombat_1_1MamdaTradeListener.html#function-getbegingapseqnum)**()<br>[MamdaTradeGap.getBeginGapSeqNum()](interfaceWombat_1_1MamdaTradeGap.html#function-getbegingapseqnum) |
| long | **[getEndGapSeqNum](classWombat_1_1MamdaTradeListener.html#function-getendgapseqnum)**()<br>[MamdaTradeGap.getEndGapSeqNum()](interfaceWombat_1_1MamdaTradeGap.html#function-getendgapseqnum) |
| bool | **[getIsCancel](classWombat_1_1MamdaTradeListener.html#function-getiscancel)**()<br>[MamdaTradeCancelOrError.getIsCancel()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getiscancel) |
| long | **[getOrigSeqNum](classWombat_1_1MamdaTradeListener.html#function-getorigseqnum)**()<br>[MamdaTradeCancelOrError.getOrigSeqNum()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnum) |
| double | **[getOrigPrice](classWombat_1_1MamdaTradeListener.html#function-getorigprice)**()<br>[MamdaTradeCancelOrError.getOrigPrice()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigprice) |
| long | **[getOrigVolume](classWombat_1_1MamdaTradeListener.html#function-getorigvolume)**()<br>[MamdaTradeCancelOrError.getOrigVolume()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolume) |
| String | **[getOrigPartId](classWombat_1_1MamdaTradeListener.html#function-getorigpartid)**()<br>[MamdaTradeCancelOrError.getOrigPartId()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartid) |
| String | **[getOrigQual](classWombat_1_1MamdaTradeListener.html#function-getorigqual)**()<br>[MamdaTradeCancelOrError.getOrigQual()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqual) |
| String | **[getOrigQualNative](classWombat_1_1MamdaTradeListener.html#function-getorigqualnative)**()<br>[MamdaTradeCancelOrError.getOrigQualNative()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnative) |
| String | **[getOrigCondition](classWombat_1_1MamdaTradeListener.html#function-getorigcondition)**()<br>[MamdaTradeCancelOrError.getOrigCondition()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigcondition) |
| long | **[getOrigSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-getorigsellerssaledays)**()<br>[MamdaTradeCancelOrError.getOrigSellersSaleDays()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledays) |
| char | **[getOrigStopStock](classWombat_1_1MamdaTradeListener.html#function-getorigstopstock)**()<br>[MamdaTradeCancelOrError.getOrigStopStock()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstock) |
| double | **[getCorrPrice](classWombat_1_1MamdaTradeListener.html#function-getcorrprice)**()<br>[MamdaTradeCorrection.getCorrPrice()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrprice) |
| long | **[getCorrVolume](classWombat_1_1MamdaTradeListener.html#function-getcorrvolume)**()<br>[MamdaTradeCorrection.getCorrVolume()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrvolume) |
| String | **[getCorrPartId](classWombat_1_1MamdaTradeListener.html#function-getcorrpartid)**()<br>[MamdaTradeCorrection.getCorrPartId()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpartid) |
| String | **[getCorrQual](classWombat_1_1MamdaTradeListener.html#function-getcorrqual)**()<br>[MamdaTradeCorrection.getCorrQual()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqual) |
| String | **[getCorrQualNative](classWombat_1_1MamdaTradeListener.html#function-getcorrqualnative)**()<br>[MamdaTradeCorrection.getCorrQualNative()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnative) |
| String | **[getCorrCondition](classWombat_1_1MamdaTradeListener.html#function-getcorrcondition)**()<br>[MamdaTradeCorrection.getCorrCondition()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrcondition) |
| long | **[getCorrSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-getcorrsellerssaledays)**()<br>[MamdaTradeCorrection.getCorrSellersSaleDays()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledays) |
| char | **[getCorrStopStock](classWombat_1_1MamdaTradeListener.html#function-getcorrstopstock)**()<br>[MamdaTradeCorrection.getCorrStopStock()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstock) |
| bool | **[getIsIndicative](classWombat_1_1MamdaTradeListener.html#function-getisindicative)**()<br>[MamdaTradeClosing.getIsIndicative()](interfaceWombat_1_1MamdaTradeClosing.html#function-getisindicative) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaTradeListener.html#function-getsymbolfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getpartidfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsrctimefieldstate)**()<br>[MamdaBasicEvent.getSrcTimeFieldState()](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getactivitytimefieldstate)**()<br>[MamdaBasicEvent.getActivityTimeFieldState()](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlinetimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsendtimefieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getpubidfieldstate)**() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventseqnumfieldstate)**()<br>[MamdaBasicEvent.getEventSeqNumFieldState()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventtimefieldstate)**()<br>[MamdaBasicEvent.getEventTimeFieldState()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastpricefieldstate)**()<br>[MamdaTradeRecap.getLastPriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastvolumefieldstate)**()<br>[MamdaTradeRecap.getLastVolumeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastpartidfieldstate)**()<br>[MamdaTradeRecap.getLastPartIdFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeidfieldstate)**()<br>[MamdaTradeReport.getTradeIdFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigtradeidfieldstate)**()<br>[MamdaTradeCancelOrError.getOrigTradeIdFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeidfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrtradeidfieldstate)**()<br>[MamdaTradeCorrection.getCorrTradeIdFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeidfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlasttimefieldstate)**()<br>[MamdaTradeRecap.getLastTimeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregpricefieldstate)**()<br>[MamdaTradeRecap.getIrregPriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregvolumefieldstate)**()<br>[MamdaTradeRecap.getIrregVolumeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregpartidfieldstate)**()<br>[MamdaTradeRecap.getIrregPartIdFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregtimefieldstate)**()<br>[MamdaTradeRecap.getIrregTimeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDateFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradedatefieldstate)**()<br>[MamdaTradeRecap.getLastTimeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getaccvolumefieldstate)**()<br>[MamdaTradeRecap.getAccVolumeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexaccvolumefieldstate)**()<br>[MamdaTradeRecap.getOffExAccVolumeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexaccvolumefieldstate)**()<br>[MamdaTradeRecap.getOnExAccVolumeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNetChangeFieldState](classWombat_1_1MamdaTradeListener.html#function-getnetchangefieldstate)**()<br>[MamdaTradeRecap.getNetChangeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPctChangeFieldState](classWombat_1_1MamdaTradeListener.html#function-getpctchangefieldstate)**()<br>[MamdaTradeRecap.getPctChangeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDirectionFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradedirectionfieldstate)**()<br>[MamdaTradeRecap.getTradeDirectionFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSideFieldState](classWombat_1_1MamdaTradeListener.html#function-getsidefieldstate)**()<br>[MamdaTradeRecap.getSideFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOpenPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getopenpricefieldstate)**()<br>[MamdaTradeRecap.getOpenPriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gethighpricefieldstate)**()<br>[MamdaTradeRecap.getHighPriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getlowpricefieldstate)**()<br>[MamdaTradeRecap.getLowPriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getclosepricefieldstate)**()<br>[MamdaTradeRecap.getClosePriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getprevclosepricefieldstate)**()<br>[MamdaTradeRecap.getPrevClosePriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevCloseDateFieldState](classWombat_1_1MamdaTradeListener.html#function-getprevclosedatefieldstate)**()<br>[MamdaTradeRecap.getPrevCloseDateFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAdjPrevCloseFieldState](classWombat_1_1MamdaTradeListener.html#function-getadjprevclosefieldstate)**()<br>[MamdaTradeRecap.getAdjPrevCloseFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockCountFieldState](classWombat_1_1MamdaTradeListener.html#function-getblockcountfieldstate)**()<br>[MamdaTradeRecap.getBlockCountFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getblockvolumefieldstate)**()<br>[MamdaTradeRecap.getBlockVolumeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getvwapfieldstate)**()<br>[MamdaTradeRecap.getVwapFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexvwapfieldstate)**()<br>[MamdaTradeRecap.getOffExVwapFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexvwapfieldstate)**()<br>[MamdaTradeRecap.getOnExVwapFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-gettotalvaluefieldstate)**()<br>[MamdaTradeRecap.getTotalValueFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffextotalvaluefieldstate)**()<br>[MamdaTradeRecap.getOffExTotalValueFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-getonextotalvaluefieldstate)**()<br>[MamdaTradeRecap.getOnExTotalValueFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevfieldstate)**()<br>[MamdaTradeRecap.getStdDevFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevsumfieldstate)**()<br>[MamdaTradeRecap.getStdDevSumFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumSquaresFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevsumsquaresfieldstate)**()<br>[MamdaTradeRecap.getStdDevSumSquaresFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrderIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorderidfieldstate)**()<br>[MamdaTradeRecap.getOrderId]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettlePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getsettlepricefieldstate)**()<br>[MamdaTradeRecap.getSettlePriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettleDateFieldState](classWombat_1_1MamdaTradeListener.html#function-getsettledatefieldstate)**()<br>[MamdaTradeRecap.getSettleDateFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreakerfieldstate)**()<br>Returns the FieldState, always MODIFIED  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreakerfieldstate)**()<br>Returns the FieldState, always MODIFIED  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreakerfieldstate)**()<br>Get the field state  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepricefieldstate)**()<br>[MamdaTradeReport.getTradePriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradevolumefieldstate)**()<br>[MamdaTradeReport.getTradeVolumeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepartidfieldstate)**()<br>[MamdaTradeReport.getTradePartIdFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalfieldstate)**()<br>[MamdaTradeReport.getTradeQualFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualNativeStrFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalnativestrfieldstate)**()<br>[MamdaTradeReport.getTradeQualNativeStrFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeConditionFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeconditionfieldstate)**()<br>[MamdaTradeReport.getTradeConditionFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledaysfieldstate)**()<br>[MamdaTradeReport.getTradeSellersSaleDaysFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradestopstockfieldstate)**()<br>[MamdaTradeReport.getTradeStopStockFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeExecVenueFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeexecvenuefieldstate)**()<br>[MamdaTradeRecap.getTradeExecVenueFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExchangeTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexchangetradepricefieldstate)**()<br>[MamdaTradeRecap.getOffExchangeTradePriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExchangeTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexchangetradepricefieldstate)**()<br>[MamdaTradeRecap.getOnExchangeTradePriceFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeCountFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradecountfieldstate)**()<br>[MamdaTradeRecap.getTradeCountFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeUnitsFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeunitsfieldstate)**()<br>[MamdaTradeRecap.getTradeUnitsFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastseqnumfieldstate)**()<br>[MamdaTradeRecap.getLastSeqNumFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-gethighseqnumfieldstate)**()<br>[MamdaTradeRecap.getHighSeqNumFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getlowseqnumfieldstate)**()<br>MamdaTradeRecap.getLowSeqNum()  |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalVolumeSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-gettotalvolumeseqnumfieldstate)**()<br>[MamdaTradeRecap.getTotalVolumeSeqNumFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCurrencyCodeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcurrencycodefieldstate)**()<br>[MamdaTradeRecap.getCurrencyCodeFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIrregularFieldState](classWombat_1_1MamdaTradeListener.html#function-getisirregularfieldstate)**()<br>[MamdaTradeReport.getIsIrregularFieldState()]() |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBeginGapSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getbegingapseqnumfieldstate)**()<br>[MamdaTradeGap.getBeginGapSeqNumFieldState()](interfaceWombat_1_1MamdaTradeGap.html#function-getbegingapseqnumfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEndGapSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getendgapseqnumfieldstate)**()<br>[MamdaTradeGap.getEndGapSeqNumFieldState()](interfaceWombat_1_1MamdaTradeGap.html#function-getendgapseqnumfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigseqnumfieldstate)**()<br>[MamdaTradeCancelOrError.getOrigSeqNumFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnumfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigpricefieldstate)**()<br>[MamdaTradeCancelOrError.getOrigPriceFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpricefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigvolumefieldstate)**()<br>[MamdaTradeCancelOrError.getOrigVolumeFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolumefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigpartidfieldstate)**()<br>[MamdaTradeCancelOrError.getOrigPartIdFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartidfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigqualfieldstate)**()<br>[MamdaTradeCancelOrError.getOrigQualFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigqualnativefieldstate)**()<br>[MamdaTradeCancelOrError.getOrigQualNativeFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnativefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigConditionFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigconditionfieldstate)**()<br>[MamdaTradeCancelOrError.getOrigConditionFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigconditionfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigsellerssaledaysfieldstate)**()<br>[MamdaTradeCancelOrError.getOrigSellersSaleDaysFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledaysfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigstopstockfieldstate)**()<br>[MamdaTradeCancelOrError.getOrigStopStockFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstockfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrpricefieldstate)**()<br>[MamdaTradeCorrection.getCorrPriceFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpricefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrvolumefieldstate)**()<br>[MamdaTradeCorrection.getCorrVolumeFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrvolumefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrpartidfieldstate)**()<br>[MamdaTradeCorrection.getCorrPartIdFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpartidfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrqualfieldstate)**()<br>[MamdaTradeCorrection.getCorrQualFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrqualnativefieldstate)**()<br>[MamdaTradeCorrection.getCorrQualNativeFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnativefieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrConditionFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrconditionfieldstate)**()<br>[MamdaTradeCorrection.getCorrConditionFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrconditionfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrsellerssaledaysfieldstate)**()<br>[MamdaTradeCorrection.getCorrSellersSaleDaysFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledaysfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrstopstockfieldstate)**()<br>[MamdaTradeCorrection.getCorrStopStockFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstockfieldstate) |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIndicativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getisindicativefieldstate)**()<br>[MamdaTradeClosing.getIsIndicativeFieldState()](interfaceWombat_1_1MamdaTradeClosing.html#function-getisindicativefieldstate) |
| void | **[populateRecap](classWombat_1_1MamdaTradeListener.html#function-populaterecap)**([MamdaConcreteTradeRecap](classWombat_1_1MamdaConcreteTradeRecap.html) recap) |
| void | **[onMsg](classWombat_1_1MamdaTradeListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) subscription, MamaMsg msg, mamaMsgType msgType)<br>Implementation of MamdaListener interface.  |

## Detailed Description

```csharp
class Wombat::MamdaTradeListener;
```

[MamdaTradeListener]() is a class that specializes in handling trade updates. Developers provide their own implementation of the [MamdaTradeHandler](interfaceWombat_1_1MamdaTradeHandler.html) interface and will be delivered notifications for trades, trade cancels/error/corrections, and trade closing prices. An obvious application for this MAMDA class is any kind of trade tick capture application. 

Note: The [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) class caches trade-related field values. Among other reasons, caching of these fields makes it possible to provide complete trade-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaTradeListener

```csharp
MamdaTradeListener()
```

Create a specialized trade listener. This listener handles trade reports, trade recaps, trade errors/cancels, trade corrections, and trade gap notifications. 

### function addHandler

```csharp
void addHandler(
    MamdaTradeHandler handler
)
```

Add a specialized trade handler. Currently, only one handler can (and must) be registered. 

**Parameters**: 

  * **handler** 


### function getSymbol

```csharp
String getSymbol()
```


### function getPartId

```csharp
String getPartId()
```


### function getSrcTime

```csharp
DateTime getSrcTime()
```

[MamdaBasicEvent.getSrcTime()](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctime)


### function getActivityTime

```csharp
DateTime getActivityTime()
```

[MamdaBasicEvent.getActivityTime()](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getLineTime

```csharp
DateTime getLineTime()
```


### function getSendTime

```csharp
DateTime getSendTime()
```


### function getPubId

```csharp
String getPubId()
```


### function getEventSeqNum

```csharp
long getEventSeqNum()
```

[MamdaBasicEvent.getEventSeqNum()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNum](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnum)


### function getEventTime

```csharp
DateTime getEventTime()
```

[MamdaBasicEvent.getEventTime()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtime)


### function getLastPrice

```csharp
MamaPrice getLastPrice()
```

[MamdaTradeRecap.getLastPrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastprice)


### function getLastVolume

```csharp
long getLastVolume()
```

[MamdaTradeRecap.getLastVolume()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastvolume)


### function getLastPartId

```csharp
String getLastPartId()
```

[MamdaTradeRecap.getLastPartId()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPartId](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpartid)


### function getTradeId

```csharp
String getTradeId()
```

[MamdaTradeReport.getTradeId()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeId](interfaceWombat_1_1MamdaTradeReport.html#function-gettradeid)


### function getOrigTradeId

```csharp
String getOrigTradeId()
```

[MamdaTradeCancelOrError.getOrigTradeId()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeid)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigTradeId](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeid)


### function getCorrTradeId

```csharp
String getCorrTradeId()
```

[MamdaTradeCorrection.getCorrTradeId()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeid)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrTradeId](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeid)


### function getLastTime

```csharp
DateTime getLastTime()
```

[MamdaTradeRecap.getLastTime()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastTime](interfaceWombat_1_1MamdaTradeRecap.html#function-getlasttime)


### function getIrregPrice

```csharp
MamaPrice getIrregPrice()
```

[MamdaTradeRecap.getIrregPrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregprice)


### function getIrregVolume

```csharp
long getIrregVolume()
```

[MamdaTradeRecap.getIrregVolume()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregvolume)


### function getIrregPartId

```csharp
String getIrregPartId()
```

[MamdaTradeRecap.getIrregPartId()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPartId](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpartid)


### function getIrregTime

```csharp
DateTime getIrregTime()
```

[MamdaTradeRecap.getIrregTime()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregTime](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregtime)


### function getTradeDate

```csharp
DateTime getTradeDate()
```

[MamdaTradeRecap.getLastTime()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDate](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedate)


### function getAccVolume

```csharp
long getAccVolume()
```

[MamdaTradeRecap.getAccVolume()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getaccvolume)


### function getOffExAccVolume

```csharp
long getOffExAccVolume()
```

[MamdaTradeRecap.getOffExAccVolume()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolume)


### function getOnExAccVolume

```csharp
long getOnExAccVolume()
```

[MamdaTradeRecap.getOnExAccVolume()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExAccVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexaccvolume)


### function getNetChange

```csharp
MamaPrice getNetChange()
```

[MamdaTradeRecap.getNetChange()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getNetChange](interfaceWombat_1_1MamdaTradeRecap.html#function-getnetchange)


### function getPctChange

```csharp
double getPctChange()
```

[MamdaTradeRecap.getPctChange()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getPctChange](interfaceWombat_1_1MamdaTradeRecap.html#function-getpctchange)


### function getTradeDirection

```csharp
String getTradeDirection()
```

[MamdaTradeRecap.getTradeDirection()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDirection](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedirection)


### function getSide

```csharp
string getSide()
```

[MamdaTradeRecap.getSide()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getSide](interfaceWombat_1_1MamdaTradeRecap.html#function-getside)


### function getOpenPrice

```csharp
MamaPrice getOpenPrice()
```

[MamdaTradeRecap.getOpenPrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOpenPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getopenprice)


### function getHighPrice

```csharp
MamaPrice getHighPrice()
```

[MamdaTradeRecap.getHighPrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getHighPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighprice)


### function getLowPrice

```csharp
MamaPrice getLowPrice()
```

[MamdaTradeRecap.getLowPrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLowPrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowprice)


### function getClosePrice

```csharp
MamaPrice getClosePrice()
```

[MamdaTradeRecap.getClosePrice()]()

**Reimplements**: [Wombat::MamdaTradeClosing::getClosePrice](interfaceWombat_1_1MamdaTradeClosing.html#function-getcloseprice)


### function getPrevClosePrice

```csharp
MamaPrice getPrevClosePrice()
```

[MamdaTradeRecap.getPrevClosePrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevClosePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice)


### function getPrevCloseDate

```csharp
DateTime getPrevCloseDate()
```

[MamdaTradeRecap.getPrevCloseDate()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevCloseDate](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosedate)


### function getAdjPrevClose

```csharp
MamaPrice getAdjPrevClose()
```

[MamdaTradeRecap.getAdjPrevClose()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getAdjPrevClose](interfaceWombat_1_1MamdaTradeRecap.html#function-getadjprevclose)


### function getBlockCount

```csharp
long getBlockCount()
```

[MamdaTradeRecap.getBlockCount()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockCount](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockcount)


### function getBlockVolume

```csharp
long getBlockVolume()
```

[MamdaTradeRecap.getBlockVolume()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockVolume](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockvolume)


### function getVwap

```csharp
double getVwap()
```

[MamdaTradeRecap.getVwap()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getvwap)


### function getOffExVwap

```csharp
double getOffExVwap()
```

[MamdaTradeRecap.getOffExVwap()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexvwap)


### function getOnExVwap

```csharp
double getOnExVwap()
```

[MamdaTradeRecap.getOnExVwap()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExVwap](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexvwap)


### function getTotalValue

```csharp
double getTotalValue()
```

[MamdaTradeRecap.getTotalValue()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvalue)


### function getOffExTotalValue

```csharp
double getOffExTotalValue()
```

[MamdaTradeRecap.getOffExTotalValue()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffextotalvalue)


### function getOnExTotalValue

```csharp
double getOnExTotalValue()
```

[MamdaTradeRecap.getOnExTotalValue()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExTotalValue](interfaceWombat_1_1MamdaTradeRecap.html#function-getonextotalvalue)


### function getStdDev

```csharp
double getStdDev()
```

[MamdaTradeRecap.getStdDev()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDev](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddev)


### function getStdDevSum

```csharp
double getStdDevSum()
```

MamdaTradeRecap.getStdDevSum() 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSum](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsum)


### function getStdDevSumSquares

```csharp
double getStdDevSumSquares()
```

MamdaTradeRecap.getStdDevSumSquares() 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumSquares](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquares)


### function getOrderId

```csharp
long getOrderId()
```

[MamdaTradeRecap.getOrderId]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOrderId](interfaceWombat_1_1MamdaTradeRecap.html#function-getorderid)


### function getSettlePrice

```csharp
MamaPrice getSettlePrice()
```

[MamdaTradeRecap.getSettlePrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getSettlePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettleprice)


### function getSettleDate

```csharp
DateTime getSettleDate()
```

[MamdaTradeRecap.getSettleDate()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getSettleDate](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettledate)


### function getShortSaleCircuitBreaker

```csharp
char getShortSaleCircuitBreaker()
```

Returns the ShortSaleCircuitBreaker 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getShortSaleCircuitBreaker](interfaceWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreaker)


### function getOrigShortSaleCircuitBreaker

```csharp
char getOrigShortSaleCircuitBreaker()
```

Returns the ShortSaleCircuitBreaker 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigShortSaleCircuitBreaker](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreaker)


### function getCorrShortSaleCircuitBreaker

```csharp
char getCorrShortSaleCircuitBreaker()
```

Get the ShortSaleCircuitBreaker. MamdaTradeReport.getCorrShortSaleCircuitBreaker()

**Return**: 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrShortSaleCircuitBreaker](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreaker)


### function getTradePrice

```csharp
MamaPrice getTradePrice()
```

[MamdaTradeReport.getTradePrice()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradePrice](interfaceWombat_1_1MamdaTradeReport.html#function-gettradeprice)


### function getTradeVolume

```csharp
long getTradeVolume()
```

[MamdaTradeReport.getTradeVolume()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeVolume](interfaceWombat_1_1MamdaTradeReport.html#function-gettradevolume)


### function getTradePartId

```csharp
String getTradePartId()
```

[MamdaTradeReport.getTradePartId()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradePartId](interfaceWombat_1_1MamdaTradeReport.html#function-gettradepartid)


### function getTradeQual

```csharp
String getTradeQual()
```

[MamdaTradeReport.getTradeQual()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeQual](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequal)


### function getTradeQualNativeStr

```csharp
String getTradeQualNativeStr()
```

[MamdaTradeReport.getTradeQualNativeStr()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeQualNativeStr](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequalnativestr)


### function getTradeCondition

```csharp
String getTradeCondition()
```

[MamdaTradeReport.getTradeCondition()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeCondition](interfaceWombat_1_1MamdaTradeReport.html#function-gettradecondition)


### function getTradeSellersSaleDays

```csharp
long getTradeSellersSaleDays()
```

[MamdaTradeReport.getTradeSellersSaleDays()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeSellersSaleDays](interfaceWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledays)


### function getTradeStopStock

```csharp
char getTradeStopStock()
```

[MamdaTradeReport.getTradeStopStock()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeStopStock](interfaceWombat_1_1MamdaTradeReport.html#function-gettradestopstock)


### function getTradeExecVenue

```csharp
String getTradeExecVenue()
```

[MamdaTradeRecap.getTradeExecVenue()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeExecVenue](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeexecvenue)


### function getOffExchangeTradePrice

```csharp
MamaPrice getOffExchangeTradePrice()
```

[MamdaTradeRecap.getOffExchangeTradePrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExchangeTradePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradeprice)


### function getOnExchangeTradePrice

```csharp
MamaPrice getOnExchangeTradePrice()
```

[MamdaTradeRecap.getOnExchangeTradePrice()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExchangeTradePrice](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexchangetradeprice)


### function getTradeCount

```csharp
long getTradeCount()
```

[MamdaTradeRecap.getTradeCount()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeCount](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradecount)


### function getTradeUnits

```csharp
string getTradeUnits()
```

MamdaTradeRecap.getTradeUnits() 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeUnits](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeunits)


### function getLastSeqNum

```csharp
long getLastSeqNum()
```

MamdaTradeRecap.getLastSeqNum() 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastseqnum)


### function getHighSeqNum

```csharp
long getHighSeqNum()
```

MamdaTradeRecap.getHighSeqNum() 

**Reimplements**: [Wombat::MamdaTradeRecap::getHighSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighseqnum)


### function getLowSeqNum

```csharp
long getLowSeqNum()
```

MamdaTradeRecap.getLowSeqNum() 

**Reimplements**: [Wombat::MamdaTradeRecap::getLowSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowseqnum)


### function getTotalVolumeSeqNum

```csharp
long getTotalVolumeSeqNum()
```

MamdaTradeRecap.getTotalVolumeSeqNum() 

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalVolumeSeqNum](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnum)


### function getCurrencyCode

```csharp
string getCurrencyCode()
```

MamdaTradeRecap.getCurrencyCode() 

**Reimplements**: [Wombat::MamdaTradeRecap::getCurrencyCode](interfaceWombat_1_1MamdaTradeRecap.html#function-getcurrencycode)


### function getIsIrregular

```csharp
bool getIsIrregular()
```

[MamdaTradeReport.getIsIrregular()]()

**Reimplements**: [Wombat::MamdaTradeReport::getIsIrregular](interfaceWombat_1_1MamdaTradeReport.html#function-getisirregular)


### function getBeginGapSeqNum

```csharp
long getBeginGapSeqNum()
```

[MamdaTradeGap.getBeginGapSeqNum()](interfaceWombat_1_1MamdaTradeGap.html#function-getbegingapseqnum)

**Reimplements**: [Wombat::MamdaTradeGap::getBeginGapSeqNum](interfaceWombat_1_1MamdaTradeGap.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```csharp
long getEndGapSeqNum()
```

[MamdaTradeGap.getEndGapSeqNum()](interfaceWombat_1_1MamdaTradeGap.html#function-getendgapseqnum)

**Reimplements**: [Wombat::MamdaTradeGap::getEndGapSeqNum](interfaceWombat_1_1MamdaTradeGap.html#function-getendgapseqnum)


### function getIsCancel

```csharp
bool getIsCancel()
```

[MamdaTradeCancelOrError.getIsCancel()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getiscancel)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getIsCancel](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getiscancel)


### function getOrigSeqNum

```csharp
long getOrigSeqNum()
```

[MamdaTradeCancelOrError.getOrigSeqNum()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnum)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigSeqNum](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnum)


### function getOrigPrice

```csharp
double getOrigPrice()
```

[MamdaTradeCancelOrError.getOrigPrice()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigprice)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigPrice](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigprice)


### function getOrigVolume

```csharp
long getOrigVolume()
```

[MamdaTradeCancelOrError.getOrigVolume()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolume)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigVolume](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolume)


### function getOrigPartId

```csharp
String getOrigPartId()
```

[MamdaTradeCancelOrError.getOrigPartId()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartid)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigPartId](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartid)


### function getOrigQual

```csharp
String getOrigQual()
```

[MamdaTradeCancelOrError.getOrigQual()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqual)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigQual](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqual)


### function getOrigQualNative

```csharp
String getOrigQualNative()
```

[MamdaTradeCancelOrError.getOrigQualNative()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnative)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigQualNative](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnative)


### function getOrigCondition

```csharp
String getOrigCondition()
```

[MamdaTradeCancelOrError.getOrigCondition()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigcondition)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigCondition](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigcondition)


### function getOrigSellersSaleDays

```csharp
long getOrigSellersSaleDays()
```

[MamdaTradeCancelOrError.getOrigSellersSaleDays()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledays)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigSellersSaleDays](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledays)


### function getOrigStopStock

```csharp
char getOrigStopStock()
```

[MamdaTradeCancelOrError.getOrigStopStock()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstock)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigStopStock](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstock)


### function getCorrPrice

```csharp
double getCorrPrice()
```

[MamdaTradeCorrection.getCorrPrice()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrprice)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrPrice](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrprice)


### function getCorrVolume

```csharp
long getCorrVolume()
```

[MamdaTradeCorrection.getCorrVolume()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrvolume)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrVolume](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrvolume)


### function getCorrPartId

```csharp
String getCorrPartId()
```

[MamdaTradeCorrection.getCorrPartId()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpartid)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrPartId](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpartid)


### function getCorrQual

```csharp
String getCorrQual()
```

[MamdaTradeCorrection.getCorrQual()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqual)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrQual](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqual)


### function getCorrQualNative

```csharp
String getCorrQualNative()
```

[MamdaTradeCorrection.getCorrQualNative()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnative)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrQualNative](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnative)


### function getCorrCondition

```csharp
String getCorrCondition()
```

[MamdaTradeCorrection.getCorrCondition()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrcondition)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrCondition](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrcondition)


### function getCorrSellersSaleDays

```csharp
long getCorrSellersSaleDays()
```

[MamdaTradeCorrection.getCorrSellersSaleDays()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledays)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrSellersSaleDays](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledays)


### function getCorrStopStock

```csharp
char getCorrStopStock()
```

[MamdaTradeCorrection.getCorrStopStock()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstock)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrStopStock](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstock)


### function getIsIndicative

```csharp
bool getIsIndicative()
```

[MamdaTradeClosing.getIsIndicative()](interfaceWombat_1_1MamdaTradeClosing.html#function-getisindicative)

**Reimplements**: [Wombat::MamdaTradeClosing::getIsIndicative](interfaceWombat_1_1MamdaTradeClosing.html#function-getisindicative)


### function getSymbolFieldState

```csharp
MamdaFieldState getSymbolFieldState()
```


### function getPartIdFieldState

```csharp
MamdaFieldState getPartIdFieldState()
```


### function getSrcTimeFieldState

```csharp
MamdaFieldState getSrcTimeFieldState()
```

[MamdaBasicEvent.getSrcTimeFieldState()](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


### function getActivityTimeFieldState

```csharp
MamdaFieldState getActivityTimeFieldState()
```

[MamdaBasicEvent.getActivityTimeFieldState()](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


### function getLineTimeFieldState

```csharp
MamdaFieldState getLineTimeFieldState()
```


### function getSendTimeFieldState

```csharp
MamdaFieldState getSendTimeFieldState()
```


### function getPubIdFieldState

```csharp
MamdaFieldState getPubIdFieldState()
```


### function getEventSeqNumFieldState

```csharp
MamdaFieldState getEventSeqNumFieldState()
```

[MamdaBasicEvent.getEventSeqNumFieldState()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)

**Reimplements**: [Wombat::MamdaBasicEvent::getEventSeqNumFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)


### function getEventTimeFieldState

```csharp
MamdaFieldState getEventTimeFieldState()
```

[MamdaBasicEvent.getEventTimeFieldState()](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](interfaceWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function getLastPriceFieldState

```csharp
MamdaFieldState getLastPriceFieldState()
```

[MamdaTradeRecap.getLastPriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpricefieldstate)


### function getLastVolumeFieldState

```csharp
MamdaFieldState getLastVolumeFieldState()
```

[MamdaTradeRecap.getLastVolumeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastvolumefieldstate)


### function getLastPartIdFieldState

```csharp
MamdaFieldState getLastPartIdFieldState()
```

[MamdaTradeRecap.getLastPartIdFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPartIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastpartidfieldstate)


### function getTradeIdFieldState

```csharp
MamdaFieldState getTradeIdFieldState()
```

[MamdaTradeReport.getTradeIdFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeIdFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradeidfieldstate)


### function getOrigTradeIdFieldState

```csharp
MamdaFieldState getOrigTradeIdFieldState()
```

[MamdaTradeCancelOrError.getOrigTradeIdFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeidfieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigTradeIdFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeidfieldstate)


### function getCorrTradeIdFieldState

```csharp
MamdaFieldState getCorrTradeIdFieldState()
```

[MamdaTradeCorrection.getCorrTradeIdFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeidfieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrTradeIdFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeidfieldstate)


### function getLastTimeFieldState

```csharp
MamdaFieldState getLastTimeFieldState()
```

[MamdaTradeRecap.getLastTimeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastTimeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlasttimefieldstate)


### function getIrregPriceFieldState

```csharp
MamdaFieldState getIrregPriceFieldState()
```

[MamdaTradeRecap.getIrregPriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpricefieldstate)


### function getIrregVolumeFieldState

```csharp
MamdaFieldState getIrregVolumeFieldState()
```

[MamdaTradeRecap.getIrregVolumeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregvolumefieldstate)


### function getIrregPartIdFieldState

```csharp
MamdaFieldState getIrregPartIdFieldState()
```

[MamdaTradeRecap.getIrregPartIdFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPartIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregpartidfieldstate)


### function getIrregTimeFieldState

```csharp
MamdaFieldState getIrregTimeFieldState()
```

[MamdaTradeRecap.getIrregTimeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregTimeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getirregtimefieldstate)


### function getTradeDateFieldState

```csharp
MamdaFieldState getTradeDateFieldState()
```

[MamdaTradeRecap.getLastTimeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedatefieldstate)


### function getAccVolumeFieldState

```csharp
MamdaFieldState getAccVolumeFieldState()
```

[MamdaTradeRecap.getAccVolumeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getaccvolumefieldstate)


### function getOffExAccVolumeFieldState

```csharp
MamdaFieldState getOffExAccVolumeFieldState()
```

[MamdaTradeRecap.getOffExAccVolumeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolumefieldstate)


### function getOnExAccVolumeFieldState

```csharp
MamdaFieldState getOnExAccVolumeFieldState()
```

[MamdaTradeRecap.getOnExAccVolumeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExAccVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexaccvolumefieldstate)


### function getNetChangeFieldState

```csharp
MamdaFieldState getNetChangeFieldState()
```

[MamdaTradeRecap.getNetChangeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getNetChangeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getnetchangefieldstate)


### function getPctChangeFieldState

```csharp
MamdaFieldState getPctChangeFieldState()
```

[MamdaTradeRecap.getPctChangeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getPctChangeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getpctchangefieldstate)


### function getTradeDirectionFieldState

```csharp
MamdaFieldState getTradeDirectionFieldState()
```

[MamdaTradeRecap.getTradeDirectionFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDirectionFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradedirectionfieldstate)


### function getSideFieldState

```csharp
MamdaFieldState getSideFieldState()
```

[MamdaTradeRecap.getSideFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getSideFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsidefieldstate)


### function getOpenPriceFieldState

```csharp
MamdaFieldState getOpenPriceFieldState()
```

[MamdaTradeRecap.getOpenPriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOpenPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getopenpricefieldstate)


### function getHighPriceFieldState

```csharp
MamdaFieldState getHighPriceFieldState()
```

[MamdaTradeRecap.getHighPriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getHighPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighpricefieldstate)


### function getLowPriceFieldState

```csharp
MamdaFieldState getLowPriceFieldState()
```

[MamdaTradeRecap.getLowPriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLowPriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowpricefieldstate)


### function getClosePriceFieldState

```csharp
MamdaFieldState getClosePriceFieldState()
```

[MamdaTradeRecap.getClosePriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeClosing::getClosePriceFieldState](interfaceWombat_1_1MamdaTradeClosing.html#function-getclosepricefieldstate)


### function getPrevClosePriceFieldState

```csharp
MamdaFieldState getPrevClosePriceFieldState()
```

[MamdaTradeRecap.getPrevClosePriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevClosePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosepricefieldstate)


### function getPrevCloseDateFieldState

```csharp
MamdaFieldState getPrevCloseDateFieldState()
```

[MamdaTradeRecap.getPrevCloseDateFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevCloseDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getprevclosedatefieldstate)


### function getAdjPrevCloseFieldState

```csharp
MamdaFieldState getAdjPrevCloseFieldState()
```

[MamdaTradeRecap.getAdjPrevCloseFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getAdjPrevCloseFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getadjprevclosefieldstate)


### function getBlockCountFieldState

```csharp
MamdaFieldState getBlockCountFieldState()
```

[MamdaTradeRecap.getBlockCountFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockCountFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockcountfieldstate)


### function getBlockVolumeFieldState

```csharp
MamdaFieldState getBlockVolumeFieldState()
```

[MamdaTradeRecap.getBlockVolumeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockVolumeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getblockvolumefieldstate)


### function getVwapFieldState

```csharp
MamdaFieldState getVwapFieldState()
```

[MamdaTradeRecap.getVwapFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getvwapfieldstate)


### function getOffExVwapFieldState

```csharp
MamdaFieldState getOffExVwapFieldState()
```

[MamdaTradeRecap.getOffExVwapFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexvwapfieldstate)


### function getOnExVwapFieldState

```csharp
MamdaFieldState getOnExVwapFieldState()
```

[MamdaTradeRecap.getOnExVwapFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExVwapFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexvwapfieldstate)


### function getTotalValueFieldState

```csharp
MamdaFieldState getTotalValueFieldState()
```

[MamdaTradeRecap.getTotalValueFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvaluefieldstate)


### function getOffExTotalValueFieldState

```csharp
MamdaFieldState getOffExTotalValueFieldState()
```

[MamdaTradeRecap.getOffExTotalValueFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffextotalvaluefieldstate)


### function getOnExTotalValueFieldState

```csharp
MamdaFieldState getOnExTotalValueFieldState()
```

[MamdaTradeRecap.getOnExTotalValueFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExTotalValueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonextotalvaluefieldstate)


### function getStdDevFieldState

```csharp
MamdaFieldState getStdDevFieldState()
```

[MamdaTradeRecap.getStdDevFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevfieldstate)


### function getStdDevSumFieldState

```csharp
MamdaFieldState getStdDevSumFieldState()
```

[MamdaTradeRecap.getStdDevSumFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumfieldstate)


### function getStdDevSumSquaresFieldState

```csharp
MamdaFieldState getStdDevSumSquaresFieldState()
```

[MamdaTradeRecap.getStdDevSumSquaresFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumSquaresFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquaresfieldstate)


### function getOrderIdFieldState

```csharp
MamdaFieldState getOrderIdFieldState()
```

[MamdaTradeRecap.getOrderId]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOrderIdFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getorderidfieldstate)


### function getSettlePriceFieldState

```csharp
MamdaFieldState getSettlePriceFieldState()
```

[MamdaTradeRecap.getSettlePriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getSettlePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettlepricefieldstate)


### function getSettleDateFieldState

```csharp
MamdaFieldState getSettleDateFieldState()
```

[MamdaTradeRecap.getSettleDateFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getSettleDateFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getsettledatefieldstate)


### function getShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getShortSaleCircuitBreakerFieldState()
```

Returns the FieldState, always MODIFIED 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeRecap::getShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function getOrigShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getOrigShortSaleCircuitBreakerFieldState()
```

Returns the FieldState, always MODIFIED 

**Return**: 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreakerfieldstate)


### function getCorrShortSaleCircuitBreakerFieldState

```csharp
MamdaFieldState getCorrShortSaleCircuitBreakerFieldState()
```

Get the field state 

**Return**: Field State

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrShortSaleCircuitBreakerFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreakerfieldstate)


### function getTradePriceFieldState

```csharp
MamdaFieldState getTradePriceFieldState()
```

[MamdaTradeReport.getTradePriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradePriceFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradepricefieldstate)


### function getTradeVolumeFieldState

```csharp
MamdaFieldState getTradeVolumeFieldState()
```

[MamdaTradeReport.getTradeVolumeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeVolumeFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradevolumefieldstate)


### function getTradePartIdFieldState

```csharp
MamdaFieldState getTradePartIdFieldState()
```

[MamdaTradeReport.getTradePartIdFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradePartIdFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradepartidfieldstate)


### function getTradeQualFieldState

```csharp
MamdaFieldState getTradeQualFieldState()
```

[MamdaTradeReport.getTradeQualFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeQualFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequalfieldstate)


### function getTradeQualNativeStrFieldState

```csharp
MamdaFieldState getTradeQualNativeStrFieldState()
```

[MamdaTradeReport.getTradeQualNativeStrFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeQualNativeStrFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradequalnativestrfieldstate)


### function getTradeConditionFieldState

```csharp
MamdaFieldState getTradeConditionFieldState()
```

[MamdaTradeReport.getTradeConditionFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeConditionFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradeconditionfieldstate)


### function getTradeSellersSaleDaysFieldState

```csharp
MamdaFieldState getTradeSellersSaleDaysFieldState()
```

[MamdaTradeReport.getTradeSellersSaleDaysFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeSellersSaleDaysFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledaysfieldstate)


### function getTradeStopStockFieldState

```csharp
MamdaFieldState getTradeStopStockFieldState()
```

[MamdaTradeReport.getTradeStopStockFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getTradeStopStockFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-gettradestopstockfieldstate)


### function getTradeExecVenueFieldState

```csharp
MamdaFieldState getTradeExecVenueFieldState()
```

[MamdaTradeRecap.getTradeExecVenueFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeExecVenueFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeexecvenuefieldstate)


### function getOffExchangeTradePriceFieldState

```csharp
MamdaFieldState getOffExchangeTradePriceFieldState()
```

[MamdaTradeRecap.getOffExchangeTradePriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExchangeTradePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradepricefieldstate)


### function getOnExchangeTradePriceFieldState

```csharp
MamdaFieldState getOnExchangeTradePriceFieldState()
```

[MamdaTradeRecap.getOnExchangeTradePriceFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExchangeTradePriceFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getonexchangetradepricefieldstate)


### function getTradeCountFieldState

```csharp
MamdaFieldState getTradeCountFieldState()
```

[MamdaTradeRecap.getTradeCountFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeCountFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradecountfieldstate)


### function getTradeUnitsFieldState

```csharp
MamdaFieldState getTradeUnitsFieldState()
```

[MamdaTradeRecap.getTradeUnitsFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeUnitsFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettradeunitsfieldstate)


### function getLastSeqNumFieldState

```csharp
MamdaFieldState getLastSeqNumFieldState()
```

[MamdaTradeRecap.getLastSeqNumFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getLastSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlastseqnumfieldstate)


### function getHighSeqNumFieldState

```csharp
MamdaFieldState getHighSeqNumFieldState()
```

[MamdaTradeRecap.getHighSeqNumFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getHighSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gethighseqnumfieldstate)


### function getLowSeqNumFieldState

```csharp
MamdaFieldState getLowSeqNumFieldState()
```

MamdaTradeRecap.getLowSeqNum() 

**Reimplements**: [Wombat::MamdaTradeRecap::getLowSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getlowseqnumfieldstate)


### function getTotalVolumeSeqNumFieldState

```csharp
MamdaFieldState getTotalVolumeSeqNumFieldState()
```

[MamdaTradeRecap.getTotalVolumeSeqNumFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalVolumeSeqNumFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnumfieldstate)


### function getCurrencyCodeFieldState

```csharp
MamdaFieldState getCurrencyCodeFieldState()
```

[MamdaTradeRecap.getCurrencyCodeFieldState()]()

**Reimplements**: [Wombat::MamdaTradeRecap::getCurrencyCodeFieldState](interfaceWombat_1_1MamdaTradeRecap.html#function-getcurrencycodefieldstate)


### function getIsIrregularFieldState

```csharp
MamdaFieldState getIsIrregularFieldState()
```

[MamdaTradeReport.getIsIrregularFieldState()]()

**Reimplements**: [Wombat::MamdaTradeReport::getIsIrregularFieldState](interfaceWombat_1_1MamdaTradeReport.html#function-getisirregularfieldstate)


### function getBeginGapSeqNumFieldState

```csharp
MamdaFieldState getBeginGapSeqNumFieldState()
```

[MamdaTradeGap.getBeginGapSeqNumFieldState()](interfaceWombat_1_1MamdaTradeGap.html#function-getbegingapseqnumfieldstate)

**Reimplements**: [Wombat::MamdaTradeGap::getBeginGapSeqNumFieldState](interfaceWombat_1_1MamdaTradeGap.html#function-getbegingapseqnumfieldstate)


### function getEndGapSeqNumFieldState

```csharp
MamdaFieldState getEndGapSeqNumFieldState()
```

[MamdaTradeGap.getEndGapSeqNumFieldState()](interfaceWombat_1_1MamdaTradeGap.html#function-getendgapseqnumfieldstate)

**Reimplements**: [Wombat::MamdaTradeGap::getEndGapSeqNumFieldState](interfaceWombat_1_1MamdaTradeGap.html#function-getendgapseqnumfieldstate)


### function getOrigSeqNumFieldState

```csharp
MamdaFieldState getOrigSeqNumFieldState()
```

[MamdaTradeCancelOrError.getOrigSeqNumFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnumfieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigSeqNumFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnumfieldstate)


### function getOrigPriceFieldState

```csharp
MamdaFieldState getOrigPriceFieldState()
```

[MamdaTradeCancelOrError.getOrigPriceFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpricefieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigPriceFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpricefieldstate)


### function getOrigVolumeFieldState

```csharp
MamdaFieldState getOrigVolumeFieldState()
```

[MamdaTradeCancelOrError.getOrigVolumeFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolumefieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigVolumeFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolumefieldstate)


### function getOrigPartIdFieldState

```csharp
MamdaFieldState getOrigPartIdFieldState()
```

[MamdaTradeCancelOrError.getOrigPartIdFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartidfieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigPartIdFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartidfieldstate)


### function getOrigQualFieldState

```csharp
MamdaFieldState getOrigQualFieldState()
```

[MamdaTradeCancelOrError.getOrigQualFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualfieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigQualFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualfieldstate)


### function getOrigQualNativeFieldState

```csharp
MamdaFieldState getOrigQualNativeFieldState()
```

[MamdaTradeCancelOrError.getOrigQualNativeFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnativefieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigQualNativeFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnativefieldstate)


### function getOrigConditionFieldState

```csharp
MamdaFieldState getOrigConditionFieldState()
```

[MamdaTradeCancelOrError.getOrigConditionFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigconditionfieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigConditionFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigconditionfieldstate)


### function getOrigSellersSaleDaysFieldState

```csharp
MamdaFieldState getOrigSellersSaleDaysFieldState()
```

[MamdaTradeCancelOrError.getOrigSellersSaleDaysFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledaysfieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigSellersSaleDaysFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledaysfieldstate)


### function getOrigStopStockFieldState

```csharp
MamdaFieldState getOrigStopStockFieldState()
```

[MamdaTradeCancelOrError.getOrigStopStockFieldState()](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstockfieldstate)

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigStopStockFieldState](interfaceWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstockfieldstate)


### function getCorrPriceFieldState

```csharp
MamdaFieldState getCorrPriceFieldState()
```

[MamdaTradeCorrection.getCorrPriceFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpricefieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrPriceFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpricefieldstate)


### function getCorrVolumeFieldState

```csharp
MamdaFieldState getCorrVolumeFieldState()
```

[MamdaTradeCorrection.getCorrVolumeFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrvolumefieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrVolumeFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrvolumefieldstate)


### function getCorrPartIdFieldState

```csharp
MamdaFieldState getCorrPartIdFieldState()
```

[MamdaTradeCorrection.getCorrPartIdFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpartidfieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrPartIdFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrpartidfieldstate)


### function getCorrQualFieldState

```csharp
MamdaFieldState getCorrQualFieldState()
```

[MamdaTradeCorrection.getCorrQualFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualfieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrQualFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualfieldstate)


### function getCorrQualNativeFieldState

```csharp
MamdaFieldState getCorrQualNativeFieldState()
```

[MamdaTradeCorrection.getCorrQualNativeFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnativefieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrQualNativeFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnativefieldstate)


### function getCorrConditionFieldState

```csharp
MamdaFieldState getCorrConditionFieldState()
```

[MamdaTradeCorrection.getCorrConditionFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrconditionfieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrConditionFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrconditionfieldstate)


### function getCorrSellersSaleDaysFieldState

```csharp
MamdaFieldState getCorrSellersSaleDaysFieldState()
```

[MamdaTradeCorrection.getCorrSellersSaleDaysFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledaysfieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrSellersSaleDaysFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledaysfieldstate)


### function getCorrStopStockFieldState

```csharp
MamdaFieldState getCorrStopStockFieldState()
```

[MamdaTradeCorrection.getCorrStopStockFieldState()](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstockfieldstate)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrStopStockFieldState](interfaceWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstockfieldstate)


### function getIsIndicativeFieldState

```csharp
MamdaFieldState getIsIndicativeFieldState()
```

[MamdaTradeClosing.getIsIndicativeFieldState()](interfaceWombat_1_1MamdaTradeClosing.html#function-getisindicativefieldstate)

**Reimplements**: [Wombat::MamdaTradeClosing::getIsIndicativeFieldState](interfaceWombat_1_1MamdaTradeClosing.html#function-getisindicativefieldstate)


### function populateRecap

```csharp
void populateRecap(
    MamdaConcreteTradeRecap recap
)
```


**Parameters**: 

  * **recap** 


### function onMsg

```csharp
void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    mamaMsgType msgType
)
```

Implementation of MamdaListener interface. 

**Parameters**: 

  * **subscription** 
  * **msg** 
  * **msgType** 


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](interfaceWombat_1_1MamdaMsgListener.html#function-onmsg)


-------------------------------

Updated on 2022-05-04 at 07:54:11 +0100