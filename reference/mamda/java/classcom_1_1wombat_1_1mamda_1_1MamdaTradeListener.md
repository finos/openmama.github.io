---
title: com::wombat::mamda::MamdaTradeListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# com::wombat::mamda::MamdaTradeListener



 [More...](#detailed-description)

Inherits from [com.wombat.mamda.MamdaMsgListener](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html), [com.wombat.mamda.MamdaTradeRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html), [com.wombat.mamda.MamdaTradeReport](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html), [com.wombat.mamda.MamdaTradeGap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html), [com.wombat.mamda.MamdaTradeCancelOrError](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html), [com.wombat.mamda.MamdaTradeCorrection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html), [com.wombat.mamda.MamdaTradeClosing](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html), [com.wombat.mamda.MamdaBasicRecap](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html), [com.wombat.mamda.MamdaBasicEvent](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[TradeLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener_1_1TradeLineTime.html)**  |
| class | **[TradeSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener_1_1TradeSendTime.html)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-mamdatradelistener)**() |
| void | **[printCache](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-printcache)**(MamdaTradeCache cache) |
| void | **[clearCache](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-clearcache)**(MamdaTradeCache cache) |
| void | **[addHandler](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-addhandler)**([MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) handler) |
| String | **[getSymbol](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsymbol)**() |
| String | **[getPartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getpartid)**() |
| MamaDateTime | **[getSrcTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsrctime)**() |
| MamaDateTime | **[getActivityTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getactivitytime)**() |
| MamaDateTime | **[getLineTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlinetime)**() |
| MamaDateTime | **[getSendTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsendtime)**() |
| String | **[getPubId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getpubid)**() |
| long | **[getEventSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-geteventseqnum)**() |
| MamaDateTime | **[getEventTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-geteventtime)**() |
| MamaPrice | **[getLastPrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastprice)**() |
| double | **[getLastVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastvolume)**() |
| char | **[getShortSaleCircuitBreaker](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getshortsalecircuitbreaker)**() |
| char | **[getOrigShortSaleCircuitBreaker](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreaker)**() |
| char | **[getCorrShortSaleCircuitBreaker](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreaker)**() |
| String | **[getLastPartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastpartid)**() |
| MamaDateTime | **[getLastDate](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastdate)**() |
| MamaDateTime | **[getLastTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlasttime)**() |
| MamaDateTime | **[getLastDateTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastdatetime)**() |
| MamaPrice | **[getIrregPrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getirregprice)**() |
| double | **[getIrregVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getirregvolume)**() |
| String | **[getIrregPartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getirregpartid)**() |
| MamaDateTime | **[getIrregTime](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getirregtime)**() |
| MamaDateTime | **[getTradeDate](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradedate)**() |
| double | **[getAccVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getaccvolume)**() |
| double | **[getOffExAccVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getoffexaccvolume)**() |
| double | **[getOnExAccVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getonexaccvolume)**() |
| MamaPrice | **[getNetChange](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getnetchange)**() |
| double | **[getPctChange](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getpctchange)**() |
| String | **[getTradeDirection](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradedirection)**() |
| String | **[getSide](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getside)**() |
| MamaPrice | **[getOpenPrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getopenprice)**() |
| MamaPrice | **[getHighPrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gethighprice)**() |
| MamaPrice | **[getLowPrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlowprice)**() |
| MamaPrice | **[getClosePrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcloseprice)**() |
| MamaPrice | **[getPrevClosePrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getprevcloseprice)**() |
| MamaDateTime | **[getPrevCloseDate](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getprevclosedate)**() |
| MamaPrice | **[getAdjPrevClose](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getadjprevclose)**() |
| long | **[getBlockCount](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getblockcount)**() |
| double | **[getBlockVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getblockvolume)**() |
| double | **[getVwap](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getvwap)**() |
| double | **[getOffExVwap](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getoffexvwap)**() |
| double | **[getOnExVwap](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getonexvwap)**() |
| double | **[getTotalValue](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettotalvalue)**() |
| double | **[getOffExTotalValue](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getoffextotalvalue)**() |
| double | **[getOnExTotalValue](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getonextotalvalue)**() |
| double | **[getStdDev](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getstddev)**() |
| double | **[getStdDevSum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getstddevsum)**() |
| double | **[getStdDevSumSquares](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getstddevsumsquares)**() |
| long | **[getOrderId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorderid)**() |
| MamaPrice | **[getSettlePrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsettleprice)**() |
| MamaDateTime | **[getSettleDate](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsettledate)**() |
| MamaPrice | **[getTradePrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeprice)**() |
| double | **[getTradeVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradevolume)**() |
| String | **[getTradePartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradepartid)**() |
| String | **[getTradeId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeid)**() |
| String | **[getOrigTradeId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigtradeid)**() |
| String | **[getCorrTradeId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrtradeid)**() |
| String | **[getTradeQual](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradequal)**() |
| String | **[getTradeQualNativeStr](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradequalnativestr)**() |
| String | **[getTradeCondition](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradecondition)**() |
| long | **[getTradeSellersSaleDays](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradesellerssaledays)**() |
| char | **[getTradeStopStock](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradestopstock)**() |
| String | **[getTradeExecVenue](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeexecvenue)**() |
| MamaPrice | **[getOffExchangeTradePrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getoffexchangetradeprice)**() |
| MamaPrice | **[getOnExchangeTradePrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getonexchangetradeprice)**() |
| long | **[getTradeCount](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradecount)**() |
| String | **[getTradeUnits](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeunits)**() |
| long | **[getLastSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastseqnum)**() |
| long | **[getHighSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gethighseqnum)**() |
| long | **[getLowSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlowseqnum)**() |
| long | **[getTotalVolumeSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettotalvolumeseqnum)**() |
| String | **[getCurrencyCode](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcurrencycode)**() |
| boolean | **[getIsIrregular](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getisirregular)**() |
| long | **[getBeginGapSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getbegingapseqnum)**() |
| long | **[getEndGapSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getendgapseqnum)**() |
| boolean | **[getIsCancel](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getiscancel)**() |
| long | **[getOrigSeqNum](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigseqnum)**() |
| double | **[getOrigPrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigprice)**() |
| double | **[getOrigVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigvolume)**() |
| String | **[getOrigPartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigpartid)**() |
| String | **[getOrigQual](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigqual)**() |
| String | **[getOrigQualNative](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigqualnative)**() |
| String | **[getOrigCondition](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigcondition)**() |
| long | **[getOrigSellersSaleDays](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigsellerssaledays)**() |
| char | **[getOrigStopStock](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigstopstock)**() |
| double | **[getCorrPrice](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrprice)**() |
| double | **[getCorrVolume](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrvolume)**() |
| String | **[getCorrPartId](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrpartid)**() |
| String | **[getCorrQual](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrqual)**() |
| String | **[getCorrQualNative](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrqualnative)**() |
| String | **[getCorrCondition](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrcondition)**() |
| long | **[getCorrSellersSaleDays](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrsellerssaledays)**() |
| char | **[getCorrStopStock](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrstopstock)**() |
| boolean | **[getIsIndicative](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getisindicative)**() |
| boolean | **[IsIrregular](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-isirregular)**() |
| short | **[getSymbolFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsymbolfieldstate)**() |
| short | **[getPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getpartidfieldstate)**() |
| short | **[getSrcTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsrctimefieldstate)**() |
| short | **[getActivityTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getactivitytimefieldstate)**() |
| short | **[getLineTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlinetimefieldstate)**() |
| short | **[getSendTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsendtimefieldstate)**() |
| short | **[getShortSaleCircuitBreakerFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getshortsalecircuitbreakerfieldstate)**() |
| short | **[getOrigShortSaleCircuitBreakerFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreakerfieldstate)**() |
| short | **[getCorrShortSaleCircuitBreakerFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreakerfieldstate)**() |
| short | **[getPubIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getpubidfieldstate)**() |
| short | **[getEventSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-geteventseqnumfieldstate)**() |
| short | **[getEventTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-geteventtimefieldstate)**() |
| short | **[getLastPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastpricefieldstate)**() |
| short | **[getLastVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastvolumefieldstate)**() |
| short | **[getLastPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastpartidfieldstate)**() |
| short | **[getLastDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastdatefieldstate)**() |
| short | **[getLastTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlasttimefieldstate)**() |
| short | **[getIrregPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getirregpricefieldstate)**() |
| short | **[getIrregVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getirregvolumefieldstate)**() |
| short | **[getIrregPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getirregpartidfieldstate)**() |
| short | **[getIrregTimeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getirregtimefieldstate)**() |
| short | **[getAccVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getaccvolumefieldstate)**() |
| short | **[getOffExAccVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getoffexaccvolumefieldstate)**() |
| short | **[getOnExAccVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getonexaccvolumefieldstate)**() |
| short | **[getNetChangeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getnetchangefieldstate)**() |
| short | **[getPctChangeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getpctchangefieldstate)**() |
| short | **[getTradeDirectionFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradedirectionfieldstate)**() |
| short | **[getSideFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsidefieldstate)**() |
| short | **[getOpenPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getopenpricefieldstate)**() |
| short | **[getHighPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gethighpricefieldstate)**() |
| short | **[getLowPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlowpricefieldstate)**() |
| short | **[getClosePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getclosepricefieldstate)**() |
| short | **[getPrevClosePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getprevclosepricefieldstate)**() |
| short | **[getPrevCloseDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getprevclosedatefieldstate)**() |
| short | **[getAdjPrevCloseFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getadjprevclosefieldstate)**() |
| short | **[getBlockCountFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getblockcountfieldstate)**() |
| short | **[getBlockVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getblockvolumefieldstate)**() |
| short | **[getVwapFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getvwapfieldstate)**() |
| short | **[getOffExVwapFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getoffexvwapfieldstate)**() |
| short | **[getOnExVwapFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getonexvwapfieldstate)**() |
| short | **[getTotalValueFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettotalvaluefieldstate)**() |
| short | **[getOffExTotalValueFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getoffextotalvaluefieldstate)**() |
| short | **[getOnExTotalValueFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getonextotalvaluefieldstate)**() |
| short | **[getStdDevFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getstddevfieldstate)**() |
| short | **[getStdDevSumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getstddevsumfieldstate)**() |
| short | **[getStdDevSumSquaresFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getstddevsumsquaresfieldstate)**() |
| short | **[getOrderIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorderidfieldstate)**() |
| short | **[getSettlePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsettlepricefieldstate)**() |
| short | **[getSettleDateFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getsettledatefieldstate)**() |
| short | **[getTradePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradepricefieldstate)**() |
| short | **[getTradeVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradevolumefieldstate)**() |
| short | **[getTradePartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradepartidfieldstate)**() |
| short | **[getTradeIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeidfieldstate)**() |
| short | **[getOrigTradeIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigtradeidfieldstate)**() |
| short | **[getCorrTradeIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrtradeidfieldstate)**() |
| short | **[getTradeQualFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradequalfieldstate)**() |
| short | **[getTradeQualNativeStrFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradequalnativestrfieldstate)**() |
| short | **[getTradeConditionFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeconditionfieldstate)**() |
| short | **[getTradeSellersSaleDaysFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradesellerssaledaysfieldstate)**() |
| short | **[getTradeStopStockFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradestopstockfieldstate)**() |
| short | **[getTradeExecVenueFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeexecvenuefieldstate)**() |
| short | **[getOffExchangeTradePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getoffexchangetradepricefieldstate)**() |
| short | **[getOnExchangeTradePriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getonexchangetradepricefieldstate)**() |
| short | **[getTradeCountFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradecountfieldstate)**() |
| short | **[getTradeUnitsFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettradeunitsfieldstate)**() |
| short | **[getLastSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlastseqnumfieldstate)**() |
| short | **[getHighSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gethighseqnumfieldstate)**() |
| short | **[getLowSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getlowseqnumfieldstate)**() |
| short | **[getTotalVolumeSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-gettotalvolumeseqnumfieldstate)**() |
| short | **[getCurrencyCodeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcurrencycodefieldstate)**() |
| short | **[getIsIrregularFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getisirregularfieldstate)**() |
| short | **[getBeginGapSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getbegingapseqnumfieldstate)**() |
| short | **[getEndGapSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getendgapseqnumfieldstate)**() |
| short | **[getIsCancelFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getiscancelfieldstate)**() |
| short | **[getOrigSeqNumFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigseqnumfieldstate)**() |
| short | **[getOrigPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigpricefieldstate)**() |
| short | **[getOrigVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigvolumefieldstate)**() |
| short | **[getOrigPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigpartidfieldstate)**() |
| short | **[getOrigQualFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigqualfieldstate)**() |
| short | **[getOrigQualNativeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigqualnativefieldstate)**() |
| short | **[getOrigConditionFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigconditionfieldstate)**() |
| short | **[getOrigSellersSaleDaysFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigsellerssaledaysfieldstate)**() |
| short | **[getOrigStopStockFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getorigstopstockfieldstate)**() |
| short | **[getCorrPriceFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrpricefieldstate)**() |
| short | **[getCorrVolumeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrvolumefieldstate)**() |
| short | **[getCorrPartIdFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrpartidfieldstate)**() |
| short | **[getCorrQualFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrqualfieldstate)**() |
| short | **[getCorrQualNativeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrqualnativefieldstate)**() |
| short | **[getCorrConditionFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrconditionfieldstate)**() |
| short | **[getCorrSellersSaleDaysFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrsellerssaledaysfieldstate)**() |
| short | **[getCorrStopStockFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getcorrstopstockfieldstate)**() |
| short | **[getIsIndicativeFieldState](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-getisindicativefieldstate)**() |
| void | **[onMsg](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#function-onmsg)**([MamdaSubscription](classcom_1_1wombat_1_1mamda_1_1MamdaSubscription.html) subscription, MamaMsg msg, short msgType) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| final MamdaTradeCache | **[mTradeCache](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html#variable-mtradecache)**  |

## Detailed Description

```java
class com::wombat::mamda::MamdaTradeListener;
```


[MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) is a class that specializes in handling trade updates. Developers provide their own implementation of the [MamdaTradeHandler](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeHandler.html) interface and will be delivered notifications for trades, trade cancels/error/corrections, and trade closing prices. An obvious application for this MAMDA class is any kind of trade tick capture application.

Note: The [MamdaTradeListener](classcom_1_1wombat_1_1mamda_1_1MamdaTradeListener.html) class caches trade-related field values. Among other reasons, caching of these fields makes it possible to provide complete trade-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields. 

## Public Functions Documentation

### function MamdaTradeListener

```java
inline MamdaTradeListener()
```


Create a specialized trade listener. This listener handles trade reports, trade recaps, trade errors/cancels, trade corrections, and trade gap notifications. 


### function printCache

```java
inline void printCache(
    MamdaTradeCache cache
)
```


### function clearCache

```java
inline void clearCache(
    MamdaTradeCache cache
)
```


### function addHandler

```java
inline void addHandler(
    MamdaTradeHandler handler
)
```


Add a specialized trade handler. Currently, only one handler can (and must) be registered. 


### function getSymbol

```java
inline String getSymbol()
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbol](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbol)


Get the string symbol for the instrument.


### function getPartId

```java
inline String getPartId()
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartid)


Get the participant identifier.


### function getSrcTime

```java
inline MamaDateTime getSrcTime()
```


**See**: [MamdaBasicEvent::getSrcTime()](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctime)


### function getActivityTime

```java
inline MamaDateTime getActivityTime()
```


**See**: [MamdaBasicEvent::getActivityTime()](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytime)


### function getLineTime

```java
inline MamaDateTime getLineTime()
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetime)


Get the line time of the update.


### function getSendTime

```java
inline MamaDateTime getSendTime()
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtime)


Get the send time of the update.


### function getPubId

```java
inline String getPubId()
```


### function getEventSeqNum

```java
inline long getEventSeqNum()
```


**See**: [MamdaBasicEvent::getEventSeqNum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnum)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getEventSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-geteventseqnum)


### function getEventTime

```java
inline MamaDateTime getEventTime()
```


**See**: [MamdaBasicEvent::getEventTime()](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtime)


### function getLastPrice

```java
inline MamaPrice getLastPrice()
```


**See**: [MamdaTradeRecap::getLastPrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastprice)


### function getLastVolume

```java
inline double getLastVolume()
```


**See**: [MamdaTradeRecap::getLastVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastvolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastvolume)


### function getShortSaleCircuitBreaker

```java
inline char getShortSaleCircuitBreaker()
```


**See**: [MamdaTradeReport::getShortSaleCircuitBreaker()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getshortsalecircuitbreaker)

**Return**: ShortSaleCircuitBreaker 

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getShortSaleCircuitBreaker](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreaker)


getShortSaleCircuitBreaker Returns the ShortSaleCircuitBreaker 


### function getOrigShortSaleCircuitBreaker

```java
inline char getOrigShortSaleCircuitBreaker()
```


**Return**: ShortSaleCircuitBreaker 

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigShortSaleCircuitBreaker](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreaker)


getShortSaleCircuitBreaker Returns the ShortSaleCircuitBreaker 


### function getCorrShortSaleCircuitBreaker

```java
inline char getCorrShortSaleCircuitBreaker()
```


**Return**: ShortSaleCircuitBreaker 

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrShortSaleCircuitBreaker](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreaker)


getShortSaleCircuitBreaker Returns the ShortSaleCircuitBreaker 


### function getLastPartId

```java
inline String getLastPartId()
```


**See**: [MamdaTradeRecap::getLastPartId()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastpartid)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastpartid)


### function getLastDate

```java
inline MamaDateTime getLastDate()
```


**See**: [MamdaTradeRecap::getLastDate()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastdate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastDate](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastdate)


### function getLastTime

```java
inline MamaDateTime getLastTime()
```


**See**: [MamdaTradeRecap::getLastTime()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlasttime)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlasttime)


### function getLastDateTime

```java
inline MamaDateTime getLastDateTime()
```


**See**: [MamdaTradeRecap::getLastTime()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlasttime)

### function getIrregPrice

```java
inline MamaPrice getIrregPrice()
```


**See**: [MamdaTradeRecap::getIrregPrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getIrregPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregprice)


### function getIrregVolume

```java
inline double getIrregVolume()
```


**See**: [MamdaTradeRecap::getIrregVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregvolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getIrregVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregvolume)


### function getIrregPartId

```java
inline String getIrregPartId()
```


**See**: [MamdaTradeRecap::getIrregPartId()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregpartid)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getIrregPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregpartid)


### function getIrregTime

```java
inline MamaDateTime getIrregTime()
```


**See**: [MamdaTradeRecap::getLastTime()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlasttime)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getIrregTime](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregtime)


### function getTradeDate

```java
inline MamaDateTime getTradeDate()
```


### function getAccVolume

```java
inline double getAccVolume()
```


**See**: [MamdaTradeRecap::getAccVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getaccvolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getAccVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getaccvolume)


### function getOffExAccVolume

```java
inline double getOffExAccVolume()
```


**See**: [MamdaTradeRecap::getOffExAccVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexaccvolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOffExAccVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexaccvolume)


### function getOnExAccVolume

```java
inline double getOnExAccVolume()
```


**See**: [MamdaTradeRecap::getOnExAccVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexaccvolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOnExAccVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexaccvolume)


### function getNetChange

```java
inline MamaPrice getNetChange()
```


**See**: [MamdaTradeRecap::getNetChange()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getnetchange)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getNetChange](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getnetchange)


### function getPctChange

```java
inline double getPctChange()
```


**See**: [MamdaTradeRecap::getPctChange()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getpctchange)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getPctChange](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getpctchange)


### function getTradeDirection

```java
inline String getTradeDirection()
```


**See**: [MamdaTradeRecap::getTradeDirection()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradedirection)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTradeDirection](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradedirection)


### function getSide

```java
inline String getSide()
```


**See**: [MamdaTradeRecap::getSide()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getside)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getSide](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getside)


### function getOpenPrice

```java
inline MamaPrice getOpenPrice()
```


**See**: [MamdaTradeRecap::getOpenPrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getopenprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOpenPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getopenprice)


### function getHighPrice

```java
inline MamaPrice getHighPrice()
```


**See**: [MamdaTradeRecap::getHighPrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gethighprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getHighPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gethighprice)


### function getLowPrice

```java
inline MamaPrice getLowPrice()
```


**See**: [MamdaTradeRecap::getLowPrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlowprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLowPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlowprice)


### function getClosePrice

```java
inline MamaPrice getClosePrice()
```


**See**: [MamdaTradeRecap::getClosePrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getcloseprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeClosing::getClosePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getcloseprice)


### function getPrevClosePrice

```java
inline MamaPrice getPrevClosePrice()
```


**See**: [MamdaTradeRecap::getPrevClosePrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getprevcloseprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getPrevClosePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getprevcloseprice)


### function getPrevCloseDate

```java
inline MamaDateTime getPrevCloseDate()
```


**See**: [MamdaTradeRecap::getPrevCloseDate()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getprevclosedate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getPrevCloseDate](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getprevclosedate)


### function getAdjPrevClose

```java
inline MamaPrice getAdjPrevClose()
```


**See**: [MamdaTradeRecap::getAdjPrevClose()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getadjprevclose)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getAdjPrevClose](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getadjprevclose)


### function getBlockCount

```java
inline long getBlockCount()
```


**See**: [MamdaTradeRecap::getBlockCount()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getblockcount)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getBlockCount](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getblockcount)


### function getBlockVolume

```java
inline double getBlockVolume()
```


**See**: [MamdaTradeRecap::getBlockVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getblockvolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getBlockVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getblockvolume)


### function getVwap

```java
inline double getVwap()
```


**See**: [MamdaTradeRecap::getVwap()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getvwap)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getVwap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getvwap)


### function getOffExVwap

```java
inline double getOffExVwap()
```


**See**: [MamdaTradeRecap::getOffExVwap()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexvwap)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOffExVwap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexvwap)


### function getOnExVwap

```java
inline double getOnExVwap()
```


**See**: [MamdaTradeRecap::getOnExVwap()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexvwap)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOnExVwap](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexvwap)


### function getTotalValue

```java
inline double getTotalValue()
```


**See**: [MamdaTradeRecap::getTotalValue()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettotalvalue)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTotalValue](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettotalvalue)


### function getOffExTotalValue

```java
inline double getOffExTotalValue()
```


**See**: [MamdaTradeRecap::getOffExTotalValue()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffextotalvalue)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOffExTotalValue](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffextotalvalue)


### function getOnExTotalValue

```java
inline double getOnExTotalValue()
```


**See**: [MamdaTradeRecap::getOnExTotalValue()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonextotalvalue)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOnExTotalValue](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonextotalvalue)


### function getStdDev

```java
inline double getStdDev()
```


**See**: [MamdaTradeRecap::getStdDev()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddev)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getStdDev](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddev)


### function getStdDevSum

```java
inline double getStdDevSum()
```


**See**: MamdaTradeRecap::getStdDevSum() 

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getStdDevSum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddevsum)


### function getStdDevSumSquares

```java
inline double getStdDevSumSquares()
```


**See**: MamdaTradeRecap::getStdDevSumSquares() 

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getStdDevSumSquares](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddevsumsquares)


### function getOrderId

```java
inline long getOrderId()
```


**See**: [MamdaTradeRecap::getOrderId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getorderid)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOrderId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getorderid)


### function getSettlePrice

```java
inline MamaPrice getSettlePrice()
```


**See**: [MamdaTradeRecap::getSettlePrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsettleprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getSettlePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsettleprice)


### function getSettleDate

```java
inline MamaDateTime getSettleDate()
```


**See**: [MamdaTradeRecap::getSettleDate()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsettledate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getSettleDate](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsettledate)


### function getTradePrice

```java
inline MamaPrice getTradePrice()
```


**See**: [MamdaTradeReport::getTradePrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeprice)


### function getTradeVolume

```java
inline double getTradeVolume()
```


**See**: [MamdaTradeReport::getTradeVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradevolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradevolume)


### function getTradePartId

```java
inline String getTradePartId()
```


**See**: [MamdaTradeReport::getTradePartId()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepartid)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradePartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepartid)


### function getTradeId

```java
inline String getTradeId()
```


**See**: [MamdaTradeReport::getTradeId()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeid)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeid)


### function getOrigTradeId

```java
inline String getOrigTradeId()
```


**See**: [MamdaTradeCancelOrError::getOrigTradeId()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigtradeid)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigTradeId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigtradeid)


### function getCorrTradeId

```java
inline String getCorrTradeId()
```


**See**: [MamdaTradeCorrection::getCorrTradeId()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrtradeid)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrTradeId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrtradeid)


### function getTradeQual

```java
inline String getTradeQual()
```


**See**: [MamdaTradeReport::getTradeQual()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequal)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeQual](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequal)


### function getTradeQualNativeStr

```java
inline String getTradeQualNativeStr()
```


**See**: [MamdaTradeReport::getTradeQualNativeStr()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalnativestr)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeQualNativeStr](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalnativestr)


### function getTradeCondition

```java
inline String getTradeCondition()
```


**See**: [MamdaTradeReport::getTradeCondition()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradecondition)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeCondition](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradecondition)


### function getTradeSellersSaleDays

```java
inline long getTradeSellersSaleDays()
```


**See**: [MamdaTradeReport::getTradeSellersSaleDays()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradesellerssaledays)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeSellersSaleDays](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradesellerssaledays)


### function getTradeStopStock

```java
inline char getTradeStopStock()
```


**See**: [MamdaTradeReport::getTradeStopStock()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradestopstock)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeStopStock](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradestopstock)


### function getTradeExecVenue

```java
inline String getTradeExecVenue()
```


**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTradeExecVenue](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradeexecvenue)


Trade execution venue. 

* Unknown 
* OnExchange 
* OnExchangeOffBook 
* OffExchange 


### function getOffExchangeTradePrice

```java
inline MamaPrice getOffExchangeTradePrice()
```


**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOffExchangeTradePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexchangetradeprice)


Monetary value of an individual off exchange share of the security at the time of the trade. 


### function getOnExchangeTradePrice

```java
inline MamaPrice getOnExchangeTradePrice()
```


**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOnExchangeTradePrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexchangetradeprice)


Monetary value of an individual on exchange share of the security at the time of the trade. 


### function getTradeCount

```java
inline long getTradeCount()
```


**See**: [MamdaTradeRecap::getTradeCount()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradecount)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTradeCount](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradecount)


### function getTradeUnits

```java
inline String getTradeUnits()
```


**See**: [MamdaTradeRecap::getTradeUnits()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradeunits)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTradeUnits](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradeunits)


### function getLastSeqNum

```java
inline long getLastSeqNum()
```


**See**: [MamdaTradeRecap::getLastSeqNum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastseqnum)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastseqnum)


### function getHighSeqNum

```java
inline long getHighSeqNum()
```


**See**: [MamdaTradeRecap::getHighSeqNum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gethighseqnum)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getHighSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gethighseqnum)


### function getLowSeqNum

```java
inline long getLowSeqNum()
```


**See**: [MamdaTradeRecap::getLowSeqNum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlowseqnum)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLowSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlowseqnum)


### function getTotalVolumeSeqNum

```java
inline long getTotalVolumeSeqNum()
```


**See**: [MamdaTradeRecap::getTotalVolumeSeqNum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnum)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTotalVolumeSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnum)


### function getCurrencyCode

```java
inline String getCurrencyCode()
```


**See**: [MamdaTradeRecap::getCurrencyCode()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getcurrencycode)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getCurrencyCode](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getcurrencycode)


### function getIsIrregular

```java
inline boolean getIsIrregular()
```


**See**: [MamdaTradeReport::getIsIrregular()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getisirregular)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getIsIrregular](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getisirregular)


### function getBeginGapSeqNum

```java
inline long getBeginGapSeqNum()
```


**See**: [MamdaTradeGap::getBeginGapSeqNum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getbegingapseqnum)

**Reimplements**: [com::wombat::mamda::MamdaTradeGap::getBeginGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getbegingapseqnum)


### function getEndGapSeqNum

```java
inline long getEndGapSeqNum()
```


**See**: [MamdaTradeGap::getEndGapSeqNum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getendgapseqnum)

**Reimplements**: [com::wombat::mamda::MamdaTradeGap::getEndGapSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getendgapseqnum)


### function getIsCancel

```java
inline boolean getIsCancel()
```


**See**: [MamdaTradeCancelOrError::getIsCancel()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getiscancel)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getIsCancel](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getiscancel)


### function getOrigSeqNum

```java
inline long getOrigSeqNum()
```


**See**: [MamdaTradeCancelOrError::getOrigSeqNum()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigseqnum)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigSeqNum](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigseqnum)


### function getOrigPrice

```java
inline double getOrigPrice()
```


**See**: [MamdaTradeCancelOrError::getOrigPrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigprice)


### function getOrigVolume

```java
inline double getOrigVolume()
```


**See**: [MamdaTradeCancelOrError::getOrigVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigvolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigvolume)


### function getOrigPartId

```java
inline String getOrigPartId()
```


**See**: [MamdaTradeCancelOrError::getOrigPartId()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpartid)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpartid)


### function getOrigQual

```java
inline String getOrigQual()
```


**See**: [MamdaTradeCancelOrError::getOrigQual()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqual)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigQual](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqual)


### function getOrigQualNative

```java
inline String getOrigQualNative()
```


**See**: [MamdaTradeCancelOrError::getOrigQualNative()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualnative)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigQualNative](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualnative)


### function getOrigCondition

```java
inline String getOrigCondition()
```


**See**: [MamdaTradeCancelOrError::getOrigCondition()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigcondition)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigCondition](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigcondition)


### function getOrigSellersSaleDays

```java
inline long getOrigSellersSaleDays()
```


**See**: [MamdaTradeCancelOrError::getOrigSellersSaleDays()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledays)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigSellersSaleDays](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledays)


### function getOrigStopStock

```java
inline char getOrigStopStock()
```


**See**: [MamdaTradeCancelOrError::getOrigStopStock()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigstopstock)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigStopStock](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigstopstock)


### function getCorrPrice

```java
inline double getCorrPrice()
```


**See**: [MamdaTradeCorrection::getCorrPrice()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrprice)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrPrice](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrprice)


### function getCorrVolume

```java
inline double getCorrVolume()
```


**See**: [MamdaTradeCorrection::getCorrVolume()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrvolume)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrVolume](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrvolume)


### function getCorrPartId

```java
inline String getCorrPartId()
```


**See**: [MamdaTradeCorrection::getCorrPartId()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrpartid)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrPartId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrpartid)


### function getCorrQual

```java
inline String getCorrQual()
```


**See**: [MamdaTradeCorrection::getCorrQual()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrqual)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrQual](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrqual)


### function getCorrQualNative

```java
inline String getCorrQualNative()
```


**See**: [MamdaTradeCorrection::getCorrQualNative()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrqualnative)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrQualNative](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrqualnative)


### function getCorrCondition

```java
inline String getCorrCondition()
```


**See**: [MamdaTradeCorrection::getCorrCondition()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrcondition)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrCondition](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrcondition)


### function getCorrSellersSaleDays

```java
inline long getCorrSellersSaleDays()
```


**See**: [MamdaTradeCorrection::getCorrSellersSaleDays()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledays)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrSellersSaleDays](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledays)


### function getCorrStopStock

```java
inline char getCorrStopStock()
```


**See**: [MamdaTradeCorrection::getCorrStopStock()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrstopstock)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrStopStock](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrstopstock)


### function getIsIndicative

```java
inline boolean getIsIndicative()
```


**See**: [MamdaTradeClosing::getIsIndicative()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getisindicative)

**Reimplements**: [com::wombat::mamda::MamdaTradeClosing::getIsIndicative](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getisindicative)


### function IsIrregular

```java
inline boolean IsIrregular()
```


**Return**: true if the Trade is irregular. 

IsIrregular Checks the explicit and implicit irregular fields.


### function getSymbolFieldState

```java
inline short getSymbolFieldState()
```


**Return**: symbol Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSymbolFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsymbolfieldstate)


### function getPartIdFieldState

```java
inline short getPartIdFieldState()
```


**Return**: participant ID Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getpartidfieldstate)


### function getSrcTimeFieldState

```java
inline short getSrcTimeFieldState()
```


**See**: [MamdaBasicEvent::getSrcTimeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getSrcTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


### function getActivityTimeFieldState

```java
inline short getActivityTimeFieldState()
```


**See**: [MamdaBasicEvent::getActivityTimeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getActivityTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


### function getLineTimeFieldState

```java
inline short getLineTimeFieldState()
```


**Return**: line time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getLineTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getlinetimefieldstate)


### function getSendTimeFieldState

```java
inline short getSendTimeFieldState()
```


**Return**: send time Field State 

**Reimplements**: [com::wombat::mamda::MamdaBasicRecap::getSendTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicRecap.html#function-getsendtimefieldstate)


### function getShortSaleCircuitBreakerFieldState

```java
inline short getShortSaleCircuitBreakerFieldState()
```


**Return**: Returns the FieldState, always MODIFIED. 

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getShortSaleCircuitBreakerFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function getOrigShortSaleCircuitBreakerFieldState

```java
inline short getOrigShortSaleCircuitBreakerFieldState()
```


**Return**: Returns the FieldState, always MODIFIED. 

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigShortSaleCircuitBreakerFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreakerfieldstate)


### function getCorrShortSaleCircuitBreakerFieldState

```java
inline short getCorrShortSaleCircuitBreakerFieldState()
```


**Return**: Returns the FieldState, always MODIFIED. 

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrShortSaleCircuitBreakerFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreakerfieldstate)


### function getPubIdFieldState

```java
inline short getPubIdFieldState()
```


### function getEventSeqNumFieldState

```java
inline short getEventSeqNumFieldState()
```


**See**: [MamdaBasicEvent::getEventSeqNumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventseqnumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getEventSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-geteventseqnumfieldstate)


### function getEventTimeFieldState

```java
inline short getEventTimeFieldState()
```


**See**: [MamdaBasicEvent::getEventTimeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaBasicEvent::getEventTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


### function getLastPriceFieldState

```java
inline short getLastPriceFieldState()
```


**See**: [MamdaTradeRecap::getLastPriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastpricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastpricefieldstate)


### function getLastVolumeFieldState

```java
inline short getLastVolumeFieldState()
```


**See**: [MamdaTradeRecap::getLastVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastvolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastvolumefieldstate)


### function getLastPartIdFieldState

```java
inline short getLastPartIdFieldState()
```


**See**: [MamdaTradeRecap::getLastPartIdFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastpartidfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastpartidfieldstate)


### function getLastDateFieldState

```java
inline short getLastDateFieldState()
```


**See**: [MamdaTradeRecap::getLastDateFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastdatefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastDateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastdatefieldstate)


### function getLastTimeFieldState

```java
inline short getLastTimeFieldState()
```


**See**: [MamdaTradeRecap::getLastTimeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlasttimefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlasttimefieldstate)


### function getIrregPriceFieldState

```java
inline short getIrregPriceFieldState()
```


**See**: [MamdaTradeRecap::getIrregPriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregpricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getIrregPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregpricefieldstate)


### function getIrregVolumeFieldState

```java
inline short getIrregVolumeFieldState()
```


**See**: [MamdaTradeRecap::getIrregVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregvolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getIrregVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregvolumefieldstate)


### function getIrregPartIdFieldState

```java
inline short getIrregPartIdFieldState()
```


**See**: [MamdaTradeRecap::getIrregPartIdFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregpartidfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getIrregPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregpartidfieldstate)


### function getIrregTimeFieldState

```java
inline short getIrregTimeFieldState()
```


**See**: [MamdaTradeRecap::getLastTimeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlasttimefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getIrregTimeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getirregtimefieldstate)


### function getAccVolumeFieldState

```java
inline short getAccVolumeFieldState()
```


**See**: [MamdaTradeRecap::getAccVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getaccvolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getAccVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getaccvolumefieldstate)


### function getOffExAccVolumeFieldState

```java
inline short getOffExAccVolumeFieldState()
```


**See**: [MamdaTradeRecap::getOffExAccVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexaccvolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOffExAccVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexaccvolumefieldstate)


### function getOnExAccVolumeFieldState

```java
inline short getOnExAccVolumeFieldState()
```


**See**: [MamdaTradeRecap::getOnExAccVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexaccvolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOnExAccVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexaccvolumefieldstate)


### function getNetChangeFieldState

```java
inline short getNetChangeFieldState()
```


**See**: [MamdaTradeRecap::getNetChangeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getnetchangefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getNetChangeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getnetchangefieldstate)


### function getPctChangeFieldState

```java
inline short getPctChangeFieldState()
```


**See**: [MamdaTradeRecap::getPctChangeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getpctchangefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getPctChangeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getpctchangefieldstate)


### function getTradeDirectionFieldState

```java
inline short getTradeDirectionFieldState()
```


**See**: [MamdaTradeRecap::getTradeDirectionFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradedirectionfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTradeDirectionFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradedirectionfieldstate)


### function getSideFieldState

```java
inline short getSideFieldState()
```


**See**: [MamdaTradeRecap::getSideFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsidefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getSideFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsidefieldstate)


### function getOpenPriceFieldState

```java
inline short getOpenPriceFieldState()
```


**See**: [MamdaTradeRecap::getOpenPriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getopenpricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOpenPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getopenpricefieldstate)


### function getHighPriceFieldState

```java
inline short getHighPriceFieldState()
```


**See**: [MamdaTradeRecap::getHighPriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gethighpricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getHighPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gethighpricefieldstate)


### function getLowPriceFieldState

```java
inline short getLowPriceFieldState()
```


**See**: [MamdaTradeRecap::getLowPriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlowpricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLowPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlowpricefieldstate)


### function getClosePriceFieldState

```java
inline short getClosePriceFieldState()
```


**See**: [MamdaTradeRecap::getClosePriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getclosepricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeClosing::getClosePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getclosepricefieldstate)


### function getPrevClosePriceFieldState

```java
inline short getPrevClosePriceFieldState()
```


**See**: [MamdaTradeRecap::getPrevClosePriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getprevclosepricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getPrevClosePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getprevclosepricefieldstate)


### function getPrevCloseDateFieldState

```java
inline short getPrevCloseDateFieldState()
```


**See**: [MamdaTradeRecap::getPrevCloseDateFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getprevclosedatefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getPrevCloseDateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getprevclosedatefieldstate)


### function getAdjPrevCloseFieldState

```java
inline short getAdjPrevCloseFieldState()
```


**See**: [MamdaTradeRecap::getAdjPrevCloseFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getadjprevclosefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getAdjPrevCloseFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getadjprevclosefieldstate)


### function getBlockCountFieldState

```java
inline short getBlockCountFieldState()
```


**See**: [MamdaTradeRecap::getBlockCountFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getblockcountfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getBlockCountFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getblockcountfieldstate)


### function getBlockVolumeFieldState

```java
inline short getBlockVolumeFieldState()
```


**See**: [MamdaTradeRecap::getBlockVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getblockvolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getBlockVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getblockvolumefieldstate)


### function getVwapFieldState

```java
inline short getVwapFieldState()
```


**See**: [MamdaTradeRecap::getVwapFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getvwapfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getVwapFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getvwapfieldstate)


### function getOffExVwapFieldState

```java
inline short getOffExVwapFieldState()
```


**See**: [MamdaTradeRecap::getOffExVwapFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexvwapfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOffExVwapFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexvwapfieldstate)


### function getOnExVwapFieldState

```java
inline short getOnExVwapFieldState()
```


**See**: [MamdaTradeRecap::getOnExVwapFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexvwapfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOnExVwapFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexvwapfieldstate)


### function getTotalValueFieldState

```java
inline short getTotalValueFieldState()
```


**See**: [MamdaTradeRecap::getTotalValueFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettotalvaluefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTotalValueFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettotalvaluefieldstate)


### function getOffExTotalValueFieldState

```java
inline short getOffExTotalValueFieldState()
```


**See**: [MamdaTradeRecap::getOffExTotalValueFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffextotalvaluefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOffExTotalValueFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffextotalvaluefieldstate)


### function getOnExTotalValueFieldState

```java
inline short getOnExTotalValueFieldState()
```


**See**: [MamdaTradeRecap::getOnExTotalValueFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonextotalvaluefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOnExTotalValueFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonextotalvaluefieldstate)


### function getStdDevFieldState

```java
inline short getStdDevFieldState()
```


**See**: [MamdaTradeRecap::getStdDevFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddevfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getStdDevFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddevfieldstate)


### function getStdDevSumFieldState

```java
inline short getStdDevSumFieldState()
```


**See**: [MamdaTradeRecap::getStdDevSumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddevsumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getStdDevSumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddevsumfieldstate)


### function getStdDevSumSquaresFieldState

```java
inline short getStdDevSumSquaresFieldState()
```


**See**: [MamdaTradeRecap::getStdDevSumSquaresFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddevsumsquaresfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getStdDevSumSquaresFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getstddevsumsquaresfieldstate)


### function getOrderIdFieldState

```java
inline short getOrderIdFieldState()
```


**See**: [MamdaTradeRecap::getOrderId](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getorderid)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOrderIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getorderidfieldstate)


### function getSettlePriceFieldState

```java
inline short getSettlePriceFieldState()
```


**See**: [MamdaTradeRecap::getSettlePriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsettlepricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getSettlePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsettlepricefieldstate)


### function getSettleDateFieldState

```java
inline short getSettleDateFieldState()
```


**See**: [MamdaTradeRecap::getSettleDateFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsettledatefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getSettleDateFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getsettledatefieldstate)


### function getTradePriceFieldState

```java
inline short getTradePriceFieldState()
```


**See**: [MamdaTradeReport::getTradePriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepricefieldstate)


### function getTradeVolumeFieldState

```java
inline short getTradeVolumeFieldState()
```


**See**: [MamdaTradeReport::getTradeVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradevolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradevolumefieldstate)


### function getTradePartIdFieldState

```java
inline short getTradePartIdFieldState()
```


**See**: [MamdaTradeReport::getTradePartIdFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepartidfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradePartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradepartidfieldstate)


### function getTradeIdFieldState

```java
inline short getTradeIdFieldState()
```


**See**: [MamdaTradeReport::getTradeIdFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeidfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeidfieldstate)


### function getOrigTradeIdFieldState

```java
inline short getOrigTradeIdFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigTradeIdFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigtradeidfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigTradeIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigtradeidfieldstate)


### function getCorrTradeIdFieldState

```java
inline short getCorrTradeIdFieldState()
```


**See**: [MamdaTradeCorrection::getCorrTradeIdFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrtradeidfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrTradeIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrtradeidfieldstate)


### function getTradeQualFieldState

```java
inline short getTradeQualFieldState()
```


**See**: [MamdaTradeReport::getTradeQualFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeQualFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalfieldstate)


### function getTradeQualNativeStrFieldState

```java
inline short getTradeQualNativeStrFieldState()
```


**See**: [MamdaTradeReport::getTradeQualNativeStrFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalnativestrfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeQualNativeStrFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradequalnativestrfieldstate)


### function getTradeConditionFieldState

```java
inline short getTradeConditionFieldState()
```


**See**: [MamdaTradeReport::getTradeConditionFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeconditionfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeConditionFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradeconditionfieldstate)


### function getTradeSellersSaleDaysFieldState

```java
inline short getTradeSellersSaleDaysFieldState()
```


**See**: [MamdaTradeReport::getTradeSellersSaleDaysFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradesellerssaledaysfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeSellersSaleDaysFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradesellerssaledaysfieldstate)


### function getTradeStopStockFieldState

```java
inline short getTradeStopStockFieldState()
```


**See**: [MamdaTradeReport::getTradeStopStockFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradestopstockfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getTradeStopStockFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-gettradestopstockfieldstate)


### function getTradeExecVenueFieldState

```java
inline short getTradeExecVenueFieldState()
```


**Return**: the trade execution venue Field State 

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTradeExecVenueFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradeexecvenuefieldstate)


### function getOffExchangeTradePriceFieldState

```java
inline short getOffExchangeTradePriceFieldState()
```


**Return**: the off exchange trade price Field State 

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOffExchangeTradePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getoffexchangetradepricefieldstate)


### function getOnExchangeTradePriceFieldState

```java
inline short getOnExchangeTradePriceFieldState()
```


**Return**: the on exchange trade price Field State 

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getOnExchangeTradePriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getonexchangetradepricefieldstate)


### function getTradeCountFieldState

```java
inline short getTradeCountFieldState()
```


**See**: [MamdaTradeRecap::getTradeCountFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradecountfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTradeCountFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradecountfieldstate)


### function getTradeUnitsFieldState

```java
inline short getTradeUnitsFieldState()
```


**See**: [MamdaTradeRecap::getTradeUnitsFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradeunitsfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTradeUnitsFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettradeunitsfieldstate)


### function getLastSeqNumFieldState

```java
inline short getLastSeqNumFieldState()
```


**See**: [MamdaTradeRecap::getLastSeqNumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastseqnumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLastSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlastseqnumfieldstate)


### function getHighSeqNumFieldState

```java
inline short getHighSeqNumFieldState()
```


**See**: [MamdaTradeRecap::getHighSeqNumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gethighseqnumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getHighSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gethighseqnumfieldstate)


### function getLowSeqNumFieldState

```java
inline short getLowSeqNumFieldState()
```


**See**: [MamdaTradeRecap::getLowSeqNumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlowseqnumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getLowSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getlowseqnumfieldstate)


### function getTotalVolumeSeqNumFieldState

```java
inline short getTotalVolumeSeqNumFieldState()
```


**See**: [MamdaTradeRecap::getTotalVolumeSeqNumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getTotalVolumeSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnumfieldstate)


### function getCurrencyCodeFieldState

```java
inline short getCurrencyCodeFieldState()
```


**See**: [MamdaTradeRecap::getCurrencyCodeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getcurrencycodefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeRecap::getCurrencyCodeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeRecap.html#function-getcurrencycodefieldstate)


### function getIsIrregularFieldState

```java
inline short getIsIrregularFieldState()
```


**See**: [MamdaTradeReport::getIsIrregularFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getisirregularfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeReport::getIsIrregularFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeReport.html#function-getisirregularfieldstate)


### function getBeginGapSeqNumFieldState

```java
inline short getBeginGapSeqNumFieldState()
```


**See**: [MamdaTradeGap::getBeginGapSeqNumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getbegingapseqnumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeGap::getBeginGapSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getbegingapseqnumfieldstate)


### function getEndGapSeqNumFieldState

```java
inline short getEndGapSeqNumFieldState()
```


**See**: [MamdaTradeGap::getEndGapSeqNumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getendgapseqnumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeGap::getEndGapSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeGap.html#function-getendgapseqnumfieldstate)


### function getIsCancelFieldState

```java
inline short getIsCancelFieldState()
```


**See**: [MamdaTradeCancelOrError::getIsCancelFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getiscancelfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getIsCancelFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getiscancelfieldstate)


### function getOrigSeqNumFieldState

```java
inline short getOrigSeqNumFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigSeqNumFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigseqnumfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigSeqNumFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigseqnumfieldstate)


### function getOrigPriceFieldState

```java
inline short getOrigPriceFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigPriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpricefieldstate)


### function getOrigVolumeFieldState

```java
inline short getOrigVolumeFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigvolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigvolumefieldstate)


### function getOrigPartIdFieldState

```java
inline short getOrigPartIdFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigPartIdFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpartidfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigpartidfieldstate)


### function getOrigQualFieldState

```java
inline short getOrigQualFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigQualFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigQualFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualfieldstate)


### function getOrigQualNativeFieldState

```java
inline short getOrigQualNativeFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigQualNativeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualnativefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigQualNativeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigqualnativefieldstate)


### function getOrigConditionFieldState

```java
inline short getOrigConditionFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigConditionFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigconditionfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigConditionFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigconditionfieldstate)


### function getOrigSellersSaleDaysFieldState

```java
inline short getOrigSellersSaleDaysFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigSellersSaleDaysFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledaysfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigSellersSaleDaysFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledaysfieldstate)


### function getOrigStopStockFieldState

```java
inline short getOrigStopStockFieldState()
```


**See**: [MamdaTradeCancelOrError::getOrigStopStockFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigstopstockfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCancelOrError::getOrigStopStockFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCancelOrError.html#function-getorigstopstockfieldstate)


### function getCorrPriceFieldState

```java
inline short getCorrPriceFieldState()
```


**See**: [MamdaTradeCorrection::getCorrPriceFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrpricefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrPriceFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrpricefieldstate)


### function getCorrVolumeFieldState

```java
inline short getCorrVolumeFieldState()
```


**See**: [MamdaTradeCorrection::getCorrVolumeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrvolumefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrVolumeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrvolumefieldstate)


### function getCorrPartIdFieldState

```java
inline short getCorrPartIdFieldState()
```


**See**: [MamdaTradeCorrection::getCorrPartIdFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrpartidfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrPartIdFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrpartidfieldstate)


### function getCorrQualFieldState

```java
inline short getCorrQualFieldState()
```


**See**: [MamdaTradeCorrection::getCorrQualFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrqualfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrQualFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrqualfieldstate)


### function getCorrQualNativeFieldState

```java
inline short getCorrQualNativeFieldState()
```


**See**: [MamdaTradeCorrection::getCorrQualNativeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrqualnativefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrQualNativeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrqualnativefieldstate)


### function getCorrConditionFieldState

```java
inline short getCorrConditionFieldState()
```


**See**: [MamdaTradeCorrection::getCorrConditionFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrconditionfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrConditionFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrconditionfieldstate)


### function getCorrSellersSaleDaysFieldState

```java
inline short getCorrSellersSaleDaysFieldState()
```


**See**: [MamdaTradeCorrection::getCorrSellersSaleDaysFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledaysfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrSellersSaleDaysFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledaysfieldstate)


### function getCorrStopStockFieldState

```java
inline short getCorrStopStockFieldState()
```


**See**: [MamdaTradeCorrection::getCorrStopStockFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrstopstockfieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeCorrection::getCorrStopStockFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeCorrection.html#function-getcorrstopstockfieldstate)


### function getIsIndicativeFieldState

```java
inline short getIsIndicativeFieldState()
```


**See**: [MamdaTradeClosing::getIsIndicativeFieldState()](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getisindicativefieldstate)

**Reimplements**: [com::wombat::mamda::MamdaTradeClosing::getIsIndicativeFieldState](interfacecom_1_1wombat_1_1mamda_1_1MamdaTradeClosing.html#function-getisindicativefieldstate)


### function onMsg

```java
inline void onMsg(
    MamdaSubscription subscription,
    MamaMsg msg,
    short msgType
)
```


**Reimplements**: [com::wombat::mamda::MamdaMsgListener::onMsg](interfacecom_1_1wombat_1_1mamda_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


## Protected Attributes Documentation

### variable mTradeCache

```java
final MamdaTradeCache mTradeCache =
                new MamdaTradeCache ();
```


-------------------------------

Updated on 2023-03-31 at 15:30:35 +0100