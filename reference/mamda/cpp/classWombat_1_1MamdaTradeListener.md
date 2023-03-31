---
title: Wombat::MamdaTradeListener
sidebar: openmama_sidebar
folder: openmama
toc: false
layout: documentation
with_title: false
sidebar_url: /openmama_api_reference_docs.html
with_doxylinks: true
---

# Wombat::MamdaTradeListener



 [More...](#detailed-description)


`#include <MamdaTradeListener.h>`

Inherits from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html), [Wombat::MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html), [Wombat::MamdaTradeReport](classWombat_1_1MamdaTradeReport.html), [Wombat::MamdaTradeGap](classWombat_1_1MamdaTradeGap.html), [Wombat::MamdaTradeCancelOrError](classWombat_1_1MamdaTradeCancelOrError.html), [Wombat::MamdaTradeCorrection](classWombat_1_1MamdaTradeCorrection.html), [Wombat::MamdaTradeClosing](classWombat_1_1MamdaTradeClosing.html), [Wombat::MamdaTradeOutOfSequence](classWombat_1_1MamdaTradeOutOfSequence.html), [Wombat::MamdaTradePossiblyDuplicate](classWombat_1_1MamdaTradePossiblyDuplicate.html), [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html), [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MamdaTradeListener](classWombat_1_1MamdaTradeListener.html#function-mamdatradelistener)**() |
| virtual | **[~MamdaTradeListener](classWombat_1_1MamdaTradeListener.html#function-~mamdatradelistener)**() |
| void | **[addHandler](classWombat_1_1MamdaTradeListener.html#function-addhandler)**([MamdaTradeHandler](classWombat_1_1MamdaTradeHandler.html) * handler) |
| void | **[processPosDupAndOutOfSeqAsTransient](classWombat_1_1MamdaTradeListener.html#function-processposdupandoutofseqastransient)**(bool tf) |
| void | **[resolvePossiblyDuplicate](classWombat_1_1MamdaTradeListener.html#function-resolvepossiblyduplicate)**(bool tf) |
| void | **[usePosDupAndOutOfSeqHandlers](classWombat_1_1MamdaTradeListener.html#function-useposdupandoutofseqhandlers)**(bool tf) |
| void | **[setCheckUpdatesForTrades](classWombat_1_1MamdaTradeListener.html#function-setcheckupdatesfortrades)**(bool check) |
| virtual const char * | **[getSide](classWombat_1_1MamdaTradeListener.html#function-getside)**() const |
| virtual const char * | **[getSymbol](classWombat_1_1MamdaTradeListener.html#function-getsymbol)**() const |
| virtual const char * | **[getPartId](classWombat_1_1MamdaTradeListener.html#function-getpartid)**() const |
| virtual const MamaDateTime & | **[getSrcTime](classWombat_1_1MamdaTradeListener.html#function-getsrctime)**() const |
| virtual const MamaDateTime & | **[getActivityTime](classWombat_1_1MamdaTradeListener.html#function-getactivitytime)**() const |
| virtual const MamaDateTime & | **[getLineTime](classWombat_1_1MamdaTradeListener.html#function-getlinetime)**() const |
| virtual const MamaDateTime & | **[getSendTime](classWombat_1_1MamdaTradeListener.html#function-getsendtime)**() const |
| virtual const MamaMsgQual & | **[getMsgQual](classWombat_1_1MamdaTradeListener.html#function-getmsgqual)**() const |
| const char * | **[getPubId](classWombat_1_1MamdaTradeListener.html#function-getpubid)**() const |
| virtual mama_seqnum_t | **[getEventSeqNum](classWombat_1_1MamdaTradeListener.html#function-geteventseqnum)**() const |
| virtual const MamaDateTime & | **[getEventTime](classWombat_1_1MamdaTradeListener.html#function-geteventtime)**() const |
| virtual const MamaPrice & | **[getLastPrice](classWombat_1_1MamdaTradeListener.html#function-getlastprice)**() const |
| virtual mama_quantity_t | **[getLastVolume](classWombat_1_1MamdaTradeListener.html#function-getlastvolume)**() const |
| virtual const char * | **[getLastPartId](classWombat_1_1MamdaTradeListener.html#function-getlastpartid)**() const |
| virtual const MamaDateTime & | **[getLastTime](classWombat_1_1MamdaTradeListener.html#function-getlasttime)**() const |
| virtual const MamaPrice & | **[getIrregPrice](classWombat_1_1MamdaTradeListener.html#function-getirregprice)**() const |
| virtual mama_quantity_t | **[getIrregVolume](classWombat_1_1MamdaTradeListener.html#function-getirregvolume)**() const |
| virtual const char * | **[getIrregPartId](classWombat_1_1MamdaTradeListener.html#function-getirregpartid)**() const |
| virtual const MamaDateTime & | **[getIrregTime](classWombat_1_1MamdaTradeListener.html#function-getirregtime)**() const |
| virtual const MamaDateTime & | **[getTradeDate](classWombat_1_1MamdaTradeListener.html#function-gettradedate)**() const |
| virtual mama_u32_t | **[getTradeCount](classWombat_1_1MamdaTradeListener.html#function-gettradecount)**() const |
| virtual mama_quantity_t | **[getAccVolume](classWombat_1_1MamdaTradeListener.html#function-getaccvolume)**() const |
| virtual mama_quantity_t | **[getOffExAccVolume](classWombat_1_1MamdaTradeListener.html#function-getoffexaccvolume)**() const |
| virtual mama_quantity_t | **[getOnExAccVolume](classWombat_1_1MamdaTradeListener.html#function-getonexaccvolume)**() const |
| virtual const MamaPrice & | **[getNetChange](classWombat_1_1MamdaTradeListener.html#function-getnetchange)**() const |
| virtual double | **[getPctChange](classWombat_1_1MamdaTradeListener.html#function-getpctchange)**() const |
| virtual [MamdaTradeDirection](namespaceWombat.html#enum-mamdatradedirection) | **[getTradeDirection](classWombat_1_1MamdaTradeListener.html#function-gettradedirection)**() const |
| virtual const MamaPrice & | **[getOpenPrice](classWombat_1_1MamdaTradeListener.html#function-getopenprice)**() const |
| virtual const MamaPrice & | **[getHighPrice](classWombat_1_1MamdaTradeListener.html#function-gethighprice)**() const |
| virtual const MamaPrice & | **[getLowPrice](classWombat_1_1MamdaTradeListener.html#function-getlowprice)**() const |
| virtual const MamaPrice & | **[getClosePrice](classWombat_1_1MamdaTradeListener.html#function-getcloseprice)**() const |
| virtual const MamaPrice & | **[getPrevClosePrice](classWombat_1_1MamdaTradeListener.html#function-getprevcloseprice)**() const |
| virtual const MamaPrice & | **[getAdjPrevClosePrice](classWombat_1_1MamdaTradeListener.html#function-getadjprevcloseprice)**() const |
| virtual const MamaDateTime & | **[getPrevCloseDate](classWombat_1_1MamdaTradeListener.html#function-getprevclosedate)**() const |
| virtual mama_u32_t | **[getBlockCount](classWombat_1_1MamdaTradeListener.html#function-getblockcount)**() const |
| virtual mama_quantity_t | **[getBlockVolume](classWombat_1_1MamdaTradeListener.html#function-getblockvolume)**() const |
| virtual double | **[getVwap](classWombat_1_1MamdaTradeListener.html#function-getvwap)**() const |
| virtual double | **[getOffExVwap](classWombat_1_1MamdaTradeListener.html#function-getoffexvwap)**() const |
| virtual double | **[getOnExVwap](classWombat_1_1MamdaTradeListener.html#function-getonexvwap)**() const |
| virtual double | **[getTotalValue](classWombat_1_1MamdaTradeListener.html#function-gettotalvalue)**() const |
| virtual double | **[getOffExTotalValue](classWombat_1_1MamdaTradeListener.html#function-getoffextotalvalue)**() const |
| virtual double | **[getOnExTotalValue](classWombat_1_1MamdaTradeListener.html#function-getonextotalvalue)**() const |
| virtual double | **[getStdDev](classWombat_1_1MamdaTradeListener.html#function-getstddev)**() const |
| virtual double | **[getStdDevSum](classWombat_1_1MamdaTradeListener.html#function-getstddevsum)**() const |
| virtual double | **[getStdDevSumSquares](classWombat_1_1MamdaTradeListener.html#function-getstddevsumsquares)**() const |
| virtual const char * | **[getTradeUnits](classWombat_1_1MamdaTradeListener.html#function-gettradeunits)**() const |
| virtual mama_seqnum_t | **[getLastSeqNum](classWombat_1_1MamdaTradeListener.html#function-getlastseqnum)**() const |
| virtual mama_seqnum_t | **[getHighSeqNum](classWombat_1_1MamdaTradeListener.html#function-gethighseqnum)**() const |
| virtual mama_seqnum_t | **[getLowSeqNum](classWombat_1_1MamdaTradeListener.html#function-getlowseqnum)**() const |
| virtual mama_seqnum_t | **[getTotalVolumeSeqNum](classWombat_1_1MamdaTradeListener.html#function-gettotalvolumeseqnum)**() const |
| virtual const char * | **[getCurrencyCode](classWombat_1_1MamdaTradeListener.html#function-getcurrencycode)**() const |
| virtual const MamaPrice & | **[getSettlePrice](classWombat_1_1MamdaTradeListener.html#function-getsettleprice)**() const |
| virtual const MamaDateTime & | **[getSettleDate](classWombat_1_1MamdaTradeListener.html#function-getsettledate)**() const |
| virtual [MamdaTradeExecVenue](namespaceWombat.html#enum-mamdatradeexecvenue) | **[getTradeExecVenue](classWombat_1_1MamdaTradeListener.html#function-gettradeexecvenue)**() const |
| virtual const MamaPrice & | **[getOffExchangeTradePrice](classWombat_1_1MamdaTradeListener.html#function-getoffexchangetradeprice)**() const |
| virtual const MamaPrice & | **[getOnExchangeTradePrice](classWombat_1_1MamdaTradeListener.html#function-getonexchangetradeprice)**() const |
| virtual const MamaPrice & | **[getTradePrice](classWombat_1_1MamdaTradeListener.html#function-gettradeprice)**() const |
| virtual mama_quantity_t | **[getTradeVolume](classWombat_1_1MamdaTradeListener.html#function-gettradevolume)**() const |
| virtual const char * | **[getTradePartId](classWombat_1_1MamdaTradeListener.html#function-gettradepartid)**() const |
| virtual const char * | **[getTradeQual](classWombat_1_1MamdaTradeListener.html#function-gettradequal)**() const |
| virtual const char * | **[getTradeQualNative](classWombat_1_1MamdaTradeListener.html#function-gettradequalnative)**() const |
| virtual mama_u32_t | **[getTradeSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledays)**() const |
| virtual char | **[getTradeStopStock](classWombat_1_1MamdaTradeListener.html#function-gettradestopstock)**() const |
| virtual bool | **[getIsIrregular](classWombat_1_1MamdaTradeListener.html#function-getisirregular)**() const |
| virtual mama_u64_t | **[getOrderId](classWombat_1_1MamdaTradeListener.html#function-getorderid)**() const |
| virtual const char * | **[getUniqueId](classWombat_1_1MamdaTradeListener.html#function-getuniqueid)**() const |
| virtual const char * | **[getTradeId](classWombat_1_1MamdaTradeListener.html#function-gettradeid)**() const |
| virtual const char * | **[getCorrTradeId](classWombat_1_1MamdaTradeListener.html#function-getcorrtradeid)**() const |
| virtual const char * | **[getTradeAction](classWombat_1_1MamdaTradeListener.html#function-gettradeaction)**() const |
| virtual mama_seqnum_t | **[getBeginGapSeqNum](classWombat_1_1MamdaTradeListener.html#function-getbegingapseqnum)**() const |
| virtual mama_seqnum_t | **[getEndGapSeqNum](classWombat_1_1MamdaTradeListener.html#function-getendgapseqnum)**() const |
| virtual bool | **[getIsCancel](classWombat_1_1MamdaTradeListener.html#function-getiscancel)**() const |
| virtual mama_seqnum_t | **[getOrigSeqNum](classWombat_1_1MamdaTradeListener.html#function-getorigseqnum)**() const |
| virtual const MamaPrice & | **[getOrigPrice](classWombat_1_1MamdaTradeListener.html#function-getorigprice)**() const |
| virtual mama_quantity_t | **[getOrigVolume](classWombat_1_1MamdaTradeListener.html#function-getorigvolume)**() const |
| virtual const char * | **[getOrigPartId](classWombat_1_1MamdaTradeListener.html#function-getorigpartid)**() const |
| virtual const char * | **[getOrigQual](classWombat_1_1MamdaTradeListener.html#function-getorigqual)**() const |
| virtual const char * | **[getOrigQualNative](classWombat_1_1MamdaTradeListener.html#function-getorigqualnative)**() const |
| virtual mama_u32_t | **[getOrigSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-getorigsellerssaledays)**() const |
| virtual char | **[getOrigStopStock](classWombat_1_1MamdaTradeListener.html#function-getorigstopstock)**() const |
| virtual const char * | **[getOrigTradeId](classWombat_1_1MamdaTradeListener.html#function-getorigtradeid)**() const |
| virtual bool | **[getGenericFlag](classWombat_1_1MamdaTradeListener.html#function-getgenericflag)**() const |
| virtual char | **[getShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreaker)**() const |
| virtual char | **[getOrigShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreaker)**() const |
| virtual char | **[getCorrShortSaleCircuitBreaker](classWombat_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreaker)**() const |
| virtual const MamaPrice & | **[getCorrPrice](classWombat_1_1MamdaTradeListener.html#function-getcorrprice)**() const |
| virtual mama_quantity_t | **[getCorrVolume](classWombat_1_1MamdaTradeListener.html#function-getcorrvolume)**() const |
| virtual const char * | **[getCorrPartId](classWombat_1_1MamdaTradeListener.html#function-getcorrpartid)**() const |
| virtual const char * | **[getCorrQual](classWombat_1_1MamdaTradeListener.html#function-getcorrqual)**() const |
| virtual const char * | **[getCorrQualNative](classWombat_1_1MamdaTradeListener.html#function-getcorrqualnative)**() const |
| virtual mama_u32_t | **[getCorrSellersSaleDays](classWombat_1_1MamdaTradeListener.html#function-getcorrsellerssaledays)**() const |
| virtual char | **[getCorrStopStock](classWombat_1_1MamdaTradeListener.html#function-getcorrstopstock)**() const |
| virtual bool | **[getIsIndicative](classWombat_1_1MamdaTradeListener.html#function-getisindicative)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSymbolFieldState](classWombat_1_1MamdaTradeListener.html#function-getsymbolfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSrcTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsrctimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getActivityTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getactivitytimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLineTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlinetimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSendTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getsendtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getMsgQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getmsgqualfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPubIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getpubidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEventTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-geteventtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getlasttimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIrregTimeFieldState](classWombat_1_1MamdaTradeListener.html#function-getirregtimefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDateFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradedatefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSideFieldState](classWombat_1_1MamdaTradeListener.html#function-getsidefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeCounFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradecounfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getaccvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexaccvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExAccVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexaccvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getNetChangeFieldState](classWombat_1_1MamdaTradeListener.html#function-getnetchangefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPctChangeFieldState](classWombat_1_1MamdaTradeListener.html#function-getpctchangefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeDirectionFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradedirectionfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOpenPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getopenpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gethighpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getlowpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getclosepricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getprevclosepricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getAdjPrevClosePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getadjprevclosepricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getPrevCloseDateFieldState](classWombat_1_1MamdaTradeListener.html#function-getprevclosedatefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockCountFieldState](classWombat_1_1MamdaTradeListener.html#function-getblockcountfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBlockVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getblockvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getvwapfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexvwapfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExVwapFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexvwapfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-gettotalvaluefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffextotalvaluefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExTotalValueFieldState](classWombat_1_1MamdaTradeListener.html#function-getonextotalvaluefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevsumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getStdDevSumSquaresFieldState](classWombat_1_1MamdaTradeListener.html#function-getstddevsumsquaresfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeUnitsFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeunitsfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLastSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getlastseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getHighSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-gethighseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getLowSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getlowseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTotalVolumeSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-gettotalvolumeseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCurrencyCodeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcurrencycodefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettlePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getsettlepricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getSettleDateFieldState](classWombat_1_1MamdaTradeListener.html#function-getsettledatefieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeExecVenuFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeexecvenufieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOffExchangeTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getoffexchangetradepricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOnExchangeTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getonexchangetradepricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePriceFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradevolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradePartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradepartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradequalnativefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradesellerssaledaysfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradestopstockfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIrregularFieldState](classWombat_1_1MamdaTradeListener.html#function-getisirregularfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrderIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorderidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getUniqueIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getuniqueidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrtradeidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeActionFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeactionfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeExecVenueFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradeexecvenuefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getBeginGapSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getbegingapseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getEndGapSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getendgapseqnumfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsCancelFieldState](classWombat_1_1MamdaTradeListener.html#function-getiscancelfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSeqNumFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigseqnumfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigqualfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigqualnativefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigsellerssaledaysfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigstopstockfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPriceFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrpricefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrVolumeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrvolumefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrPartIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrpartidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrqualfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrQualNativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrqualnativefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrSellersSaleDaysFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrsellerssaledaysfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrStopStockFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrstopstockfieldstate)**() const |
| [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getIsIndicativeFieldState](classWombat_1_1MamdaTradeListener.html#function-getisindicativefieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getTradeCountFieldState](classWombat_1_1MamdaTradeListener.html#function-gettradecountfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigTradeIdFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigtradeidfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getGenericFlagFieldState](classWombat_1_1MamdaTradeListener.html#function-getgenericflagfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getshortsalecircuitbreakerfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getOrigShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getorigshortsalecircuitbreakerfieldstate)**() const |
| virtual [MamdaFieldState](namespaceWombat.html#enum-mamdafieldstate) | **[getCorrShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeListener.html#function-getcorrshortsalecircuitbreakerfieldstate)**() const |
| virtual void | **[onMsg](classWombat_1_1MamdaTradeListener.html#function-onmsg)**([MamdaSubscription](classWombat_1_1MamdaSubscription.html) * subscription, const MamaMsg & msg, short msgType) |
| void | **[assertEqual](classWombat_1_1MamdaTradeListener.html#function-assertequal)**([MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) * listener) |
| void | **[reset](classWombat_1_1MamdaTradeListener.html#function-reset)**(void ) |

## Additional inherited members

**Public Functions inherited from [Wombat::MamdaMsgListener](classWombat_1_1MamdaMsgListener.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaMsgListener](classWombat_1_1MamdaMsgListener.html#function-~mamdamsglistener)**() |

**Public Functions inherited from [Wombat::MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaTradeRecap](classWombat_1_1MamdaTradeRecap.html#function-~mamdatraderecap)**() |

**Public Functions inherited from [Wombat::MamdaTradeReport](classWombat_1_1MamdaTradeReport.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaTradeReport](classWombat_1_1MamdaTradeReport.html#function-~mamdatradereport)**() |

**Public Functions inherited from [Wombat::MamdaTradeGap](classWombat_1_1MamdaTradeGap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaTradeGap](classWombat_1_1MamdaTradeGap.html#function-~mamdatradegap)**() |

**Public Functions inherited from [Wombat::MamdaTradeCancelOrError](classWombat_1_1MamdaTradeCancelOrError.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaTradeCancelOrError](classWombat_1_1MamdaTradeCancelOrError.html#function-~mamdatradecancelorerror)**() |

**Public Functions inherited from [Wombat::MamdaTradeCorrection](classWombat_1_1MamdaTradeCorrection.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaTradeCorrection](classWombat_1_1MamdaTradeCorrection.html#function-~mamdatradecorrection)**() |

**Public Functions inherited from [Wombat::MamdaTradeClosing](classWombat_1_1MamdaTradeClosing.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaTradeClosing](classWombat_1_1MamdaTradeClosing.html#function-~mamdatradeclosing)**() |

**Public Functions inherited from [Wombat::MamdaTradeOutOfSequence](classWombat_1_1MamdaTradeOutOfSequence.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaTradeOutOfSequence](classWombat_1_1MamdaTradeOutOfSequence.html#function-~mamdatradeoutofsequence)**() |

**Public Functions inherited from [Wombat::MamdaTradePossiblyDuplicate](classWombat_1_1MamdaTradePossiblyDuplicate.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaTradePossiblyDuplicate](classWombat_1_1MamdaTradePossiblyDuplicate.html#function-~mamdatradepossiblyduplicate)**() |

**Public Functions inherited from [Wombat::MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicRecap](classWombat_1_1MamdaBasicRecap.html#function-~mamdabasicrecap)**() |

**Public Functions inherited from [Wombat::MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~MamdaBasicEvent](classWombat_1_1MamdaBasicEvent.html#function-~mamdabasicevent)**() |


## Detailed Description

```cpp
class Wombat::MamdaTradeListener;
```


[MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) is a class that specializes in handling trade updates. Developers provide their own implementation of the [MamdaTradeHandler](classWombat_1_1MamdaTradeHandler.html) interface and will be delivered notifications for trades, trade cancels/error/corrections, and trade closing prices. An obvious application for this MAMDA class is any kind of trade tick capture application.

Note: The [MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) class caches trade-related field values. Among other reasons, caching of these fields makes it possible to provide complete trade-related callbacks, even when the publisher (e.g., feed handler) is only publishing deltas containing modified fields.

For details on the accessor methods for the cache data see the description for the corresponding methods on the specific MamdaEvent derived classes.

[MamdaTradeListener](classWombat_1_1MamdaTradeListener.html) should initialize the [MamdaTradeFields](classWombat_1_1MamdaTradeFields.html) class prior to receiving the first message by calling MamdaTradeFields::setDictionary() with a valid dictionary object which contains Trade related fields. 

## Public Functions Documentation

### function MamdaTradeListener

```cpp
MamdaTradeListener()
```


### function ~MamdaTradeListener

```cpp
virtual ~MamdaTradeListener()
```


### function addHandler

```cpp
void addHandler(
    MamdaTradeHandler * handler
)
```


### function processPosDupAndOutOfSeqAsTransient

```cpp
void processPosDupAndOutOfSeqAsTransient(
    bool tf
)
```


### function resolvePossiblyDuplicate

```cpp
void resolvePossiblyDuplicate(
    bool tf
)
```


### function usePosDupAndOutOfSeqHandlers

```cpp
void usePosDupAndOutOfSeqHandlers(
    bool tf
)
```


### function setCheckUpdatesForTrades

```cpp
void setCheckUpdatesForTrades(
    bool check
)
```


### function getSide

```cpp
virtual const char * getSide() const
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

**Reimplements**: [Wombat::MamdaTradeRecap::getSide](classWombat_1_1MamdaTradeRecap.html#function-getside)


### function getSymbol

```cpp
virtual const char * getSymbol() const
```


**Return**: Symbol. This is the "well-known" symbol for the security, including any symbology mapping performed by the publisher. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSymbol](classWombat_1_1MamdaBasicEvent.html#function-getsymbol)


Get the instruments string symbol.


### function getPartId

```cpp
virtual const char * getPartId() const
```


**Return**: Participant ID. This may be an exchange identifier, a market maker ID, etc., or NULL (if this is not related to any specific participant). 

**Reimplements**: [Wombat::MamdaBasicEvent::getPartId](classWombat_1_1MamdaBasicEvent.html#function-getpartid)


Get the participant identifier.


### function getSrcTime

```cpp
virtual const MamaDateTime & getSrcTime() const
```


**Return**: Source time. Typically, the exchange generated feed time stamp. This is often the same as the "event time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTime](classWombat_1_1MamdaBasicEvent.html#function-getsrctime)


Get the source time.


### function getActivityTime

```cpp
virtual const MamaDateTime & getActivityTime() const
```


**Return**: Activity time. A feed handler generated time stamp representing when the data item was last updated. 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTime](classWombat_1_1MamdaBasicEvent.html#function-getactivitytime)


Get the activity time.


### function getLineTime

```cpp
virtual const MamaDateTime & getLineTime() const
```


**Return**: Line time. A feed handler (or similar publisher) time stamp representing the time that such publisher received the update message pertaining to the event. If clocks are properly synchronized and the source time (see above) is accurate enough, then the difference between the source time and line time is the latency between the data source and the feed handler. 

**Reimplements**: [Wombat::MamdaBasicEvent::getLineTime](classWombat_1_1MamdaBasicEvent.html#function-getlinetime)


Get the line time.


### function getSendTime

```cpp
virtual const MamaDateTime & getSendTime() const
```


**Return**: Send time. A feed handler (or similar publisher) time stamp representing the time that such publisher sent the current message. The difference between the line time and send time is the latency within the feed handler itself. Also, if clocks are properly synchronized then the difference between the send time and current time is the latency within the market data distribution framework (i.e. MAMA and the underlying middleware). See MAMA API: MamaDateTime::currentTime()). 

**Reimplements**: [Wombat::MamdaBasicEvent::getSendTime](classWombat_1_1MamdaBasicEvent.html#function-getsendtime)


Get the send time.


### function getMsgQual

```cpp
virtual const MamaMsgQual & getMsgQual() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQual](classWombat_1_1MamdaBasicEvent.html#function-getmsgqual)


Get the message qualifier.


### function getPubId

```cpp
const char * getPubId() const
```


### function getEventSeqNum

```cpp
virtual mama_seqnum_t getEventSeqNum() const
```


**Return**: Sequence number of trade. 

**Reimplements**: [Wombat::MamdaTradeRecap::getEventSeqNum](classWombat_1_1MamdaTradeRecap.html#function-geteventseqnum)


Sequence number of trade.


### function getEventTime

```cpp
virtual const MamaDateTime & getEventTime() const
```


**Return**: Event time. Typically, when the event actually occurred. This is often the same as the "source time", because many feeds do not distinguish between the actual event time and when the exchange sent the message. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTime](classWombat_1_1MamdaBasicEvent.html#function-geteventtime)


Get the event time.


### function getLastPrice

```cpp
virtual const MamaPrice & getLastPrice() const
```


**Return**: The last trade price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPrice](classWombat_1_1MamdaTradeRecap.html#function-getlastprice)


Monetary value of an individual share of the security at the time of the trade.


### function getLastVolume

```cpp
virtual mama_quantity_t getLastVolume() const
```


**Return**: The last trade volume. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastVolume](classWombat_1_1MamdaTradeRecap.html#function-getlastvolume)


Number of shares traded in a single transaction for an individual security.


### function getLastPartId

```cpp
virtual const char * getLastPartId() const
```


**Return**: The last trade participant identifier. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPartId](classWombat_1_1MamdaTradeRecap.html#function-getlastpartid)


Trade participant ID. This is typically an exchange ID, sometimes a market maker ID.


### function getLastTime

```cpp
virtual const MamaDateTime & getLastTime() const
```


**Return**: The last trade time. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastTime](classWombat_1_1MamdaTradeRecap.html#function-getlasttime)


Time corresponding to the last trade, as reported by the feed. The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.


### function getIrregPrice

```cpp
virtual const MamaPrice & getIrregPrice() const
```


**Return**: The last irregular trade price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPrice](classWombat_1_1MamdaTradeRecap.html#function-getirregprice)


Monetary value of an individual share of the security at the time of the last irregular trade.


### function getIrregVolume

```cpp
virtual mama_quantity_t getIrregVolume() const
```


**Return**: The last irregular trade volume. 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregVolume](classWombat_1_1MamdaTradeRecap.html#function-getirregvolume)


Number of shares traded in a single transaction for an individual security.


### function getIrregPartId

```cpp
virtual const char * getIrregPartId() const
```


**Return**: The last irregular trade participant identifier. 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPartId](classWombat_1_1MamdaTradeRecap.html#function-getirregpartid)


Irregular trade participant ID. This is typically an exchange ID, sometimes a market maker ID.


### function getIrregTime

```cpp
virtual const MamaDateTime & getIrregTime() const
```


**Return**: The last irregular trade time. 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregTime](classWombat_1_1MamdaTradeRecap.html#function-getirregtime)


Time corresponding to the last irregular trade, as reported by the feed. The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.


### function getTradeDate

```cpp
virtual const MamaDateTime & getTradeDate() const
```


**Return**: The last trade time. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDate](classWombat_1_1MamdaTradeRecap.html#function-gettradedate)


Time corresponding to the last trade, as reported by the feed. The exact time of the trade may not be available, since rules governing trade reporting allow for a trades to be reported within a specified time limit.


### function getTradeCount

```cpp
virtual mama_u32_t getTradeCount() const
```


**Return**: The number of trades so far today. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeCount](classWombat_1_1MamdaTradeRecap.html#function-gettradecount)


The number of trades today.


### function getAccVolume

```cpp
virtual mama_quantity_t getAccVolume() const
```


**Return**: Accumulated trade volume. 

**Reimplements**: [Wombat::MamdaTradeRecap::getAccVolume](classWombat_1_1MamdaTradeRecap.html#function-getaccvolume)


Total volume of shares traded in a security at the time it is disseminated.


### function getOffExAccVolume

```cpp
virtual mama_quantity_t getOffExAccVolume() const
```


**Return**: Accumulated off-exchange trade volume. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExAccVolume](classWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolume)


Total volume of off-exchange shares traded in a security at the time it is disseminated.


### function getOnExAccVolume

```cpp
virtual mama_quantity_t getOnExAccVolume() const
```


**Return**: Accumulated on-exhange trade volume. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExAccVolume](classWombat_1_1MamdaTradeRecap.html#function-getonexaccvolume)


Total volume of on-exchange shares traded in a security at the time it is disseminated.


### function getNetChange

```cpp
virtual const MamaPrice & getNetChange() const
```


**Return**: Price change compared to previous price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getNetChange](classWombat_1_1MamdaTradeRecap.html#function-getnetchange)


Change in price compared with the previous closing price (i.e. previous closing price - trade price).


### function getPctChange

```cpp
virtual double getPctChange() const
```


**Return**: Percentage price change compared to previous price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getPctChange](classWombat_1_1MamdaTradeRecap.html#function-getpctchange)


Percentage change in price compared with the previous closing price (i.e. previous closing price - trade price).


### function getTradeDirection

```cpp
virtual MamdaTradeDirection getTradeDirection() const
```


**Return**: The tick direction. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDirection](classWombat_1_1MamdaTradeRecap.html#function-gettradedirection)


Trade tick direction. See [MamdaTradeDirection.h] for details.


### function getOpenPrice

```cpp
virtual const MamaPrice & getOpenPrice() const
```


**Return**: The opening price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOpenPrice](classWombat_1_1MamdaTradeRecap.html#function-getopenprice)


The price of the first qualifying trade in the security during the current trading day.


### function getHighPrice

```cpp
virtual const MamaPrice & getHighPrice() const
```


**Return**: The highest trade price for the day. 

**Reimplements**: [Wombat::MamdaTradeRecap::getHighPrice](classWombat_1_1MamdaTradeRecap.html#function-gethighprice)


Highest price paid for security during the trading day.


### function getLowPrice

```cpp
virtual const MamaPrice & getLowPrice() const
```


**Return**: The lowest trade price for the day. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLowPrice](classWombat_1_1MamdaTradeRecap.html#function-getlowprice)


Lowest price paid for security during the trading day.


### function getClosePrice

```cpp
virtual const MamaPrice & getClosePrice() const
```


**Return**: The trade closing price. 

**Reimplements**: [Wombat::MamdaTradeClosing::getClosePrice](classWombat_1_1MamdaTradeClosing.html#function-getcloseprice)


Return the Close price Today's closing price. The close price is populated when official closing prices are sent by the feed after the session close.


### function getPrevClosePrice

```cpp
virtual const MamaPrice & getPrevClosePrice() const
```


**Return**: The last qualifying trade price on the previous trading day. 

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevClosePrice](classWombat_1_1MamdaTradeRecap.html#function-getprevcloseprice)


The last qualifying trade price on the previous trading day. This field may be copied from the close price field during the morning "roll" of records in the feedhandler, or it may be obtained from a secondary source, or it may be explicitly sent by the feed prior to the opening of trading for the current day.


### function getAdjPrevClosePrice

```cpp
virtual const MamaPrice & getAdjPrevClosePrice() const
```


**See**: [getPrevClosePrice()](classWombat_1_1MamdaTradeListener.html#function-getprevcloseprice)

**Return**: The adjusted previous closing price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getAdjPrevClosePrice](classWombat_1_1MamdaTradeRecap.html#function-getadjprevcloseprice)


The previous close price adjusted by corporate actions, such as dividends and stock splits on the ex-date.


### function getPrevCloseDate

```cpp
virtual const MamaDateTime & getPrevCloseDate() const
```


**See**: [getPrevClosePrice()](classWombat_1_1MamdaTradeListener.html#function-getprevcloseprice). 

**Return**: The closing price from the previous trading day. 

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevCloseDate](classWombat_1_1MamdaTradeRecap.html#function-getprevclosedate)


Date corresponding to wPrevClosePrice.


### function getBlockCount

```cpp
virtual mama_u32_t getBlockCount() const
```


**Return**: Number of block trades. 

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockCount](classWombat_1_1MamdaTradeRecap.html#function-getblockcount)


The number of block trades (at least 10,000 shares) today.


### function getBlockVolume

```cpp
virtual mama_quantity_t getBlockVolume() const
```


**Return**: Total volumn of block trades. 

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockVolume](classWombat_1_1MamdaTradeRecap.html#function-getblockvolume)


Total volume of block trades today.


### function getVwap

```cpp
virtual double getVwap() const
```


**Return**: The VWAP (Volume-weighted average price) 

**Reimplements**: [Wombat::MamdaTradeRecap::getVwap](classWombat_1_1MamdaTradeRecap.html#function-getvwap)


Volume-weighted average price of a security at the time it is disseminated. Equivalent to dividing total value by total volume.


### function getOffExVwap

```cpp
virtual double getOffExVwap() const
```


**Return**: The off-exchange VWAP (Volume-weighted average price) 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExVwap](classWombat_1_1MamdaTradeRecap.html#function-getoffexvwap)


Volume-weighted average price of an off-exchange security at the time it is disseminated. Equivalent to dividing the off-exchange total value by the off-exchange total volume.


### function getOnExVwap

```cpp
virtual double getOnExVwap() const
```


**Return**: The on-exchange VWAP (Volume-weighted average price) 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExVwap](classWombat_1_1MamdaTradeRecap.html#function-getonexvwap)


Volume-weighted average price of an on-exchange security at the time it is disseminated. Equivalent to dividing on-echange total value by the on-exchange total volume.


### function getTotalValue

```cpp
virtual double getTotalValue() const
```


**Return**: Total value of all instruments traded. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalValue](classWombat_1_1MamdaTradeRecap.html#function-gettotalvalue)


Total value of all shares traded in a security at the time it is disseminated. Calculated by summing the result of multiplying the trade price by trade volume for each qualifying trade.


### function getOffExTotalValue

```cpp
virtual double getOffExTotalValue() const
```


**Return**: Total value of all off-exhange instruments traded. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExTotalValue](classWombat_1_1MamdaTradeRecap.html#function-getoffextotalvalue)


Total value of all off-exchange shares traded in a security at the time it is disseminated. Calculated by summing the result of multiplying the trade price by trade volume for each qualifying trade.


### function getOnExTotalValue

```cpp
virtual double getOnExTotalValue() const
```


**Return**: Total value of all on-exchange instruments traded. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExTotalValue](classWombat_1_1MamdaTradeRecap.html#function-getonextotalvalue)


Total value of all on-exchange shares traded in a security at the time it is disseminated. Calculated by summing the result of multiplying the trade price by trade volume for each qualifying trade.


### function getStdDev

```cpp
virtual double getStdDev() const
```


**Return**: The standard deviation of last trade price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDev](classWombat_1_1MamdaTradeRecap.html#function-getstddev)


Standard deviation of last trade price of a security at the time it is disseminated.


### function getStdDevSum

```cpp
virtual double getStdDevSum() const
```


**Return**: The sum of the standard deviations. 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSum](classWombat_1_1MamdaTradeRecap.html#function-getstddevsum)


Sum of the standard deviations.


### function getStdDevSumSquares

```cpp
virtual double getStdDevSumSquares() const
```


**Return**: The square of the sum of the standard deviations. 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumSquares](classWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquares)


Square of the sum of the standard deviations.


### function getTradeUnits

```cpp
virtual const char * getTradeUnits() const
```


**Return**: Reuters trade units 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeUnits](classWombat_1_1MamdaTradeRecap.html#function-gettradeunits)


Reuters trade units. 


### function getLastSeqNum

```cpp
virtual mama_seqnum_t getLastSeqNum() const
```


**Return**: The sequence number of the last trade. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastSeqNum](classWombat_1_1MamdaTradeRecap.html#function-getlastseqnum)


Sequence number of the last trade.


### function getHighSeqNum

```cpp
virtual mama_seqnum_t getHighSeqNum() const
```


**Return**: Sequence number of incoming message which gives high value. 

**Reimplements**: [Wombat::MamdaTradeRecap::getHighSeqNum](classWombat_1_1MamdaTradeRecap.html#function-gethighseqnum)


Sequence number of incoming message which gives high value.


### function getLowSeqNum

```cpp
virtual mama_seqnum_t getLowSeqNum() const
```


**Return**: Sequence number of incoming message which gives low value. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLowSeqNum](classWombat_1_1MamdaTradeRecap.html#function-getlowseqnum)


Sequence number of incoming message which gives low value.


### function getTotalVolumeSeqNum

```cpp
virtual mama_seqnum_t getTotalVolumeSeqNum() const
```


**Reimplements**: [Wombat::MamdaTradeRecap::getTotalVolumeSeqNum](classWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnum)


### function getCurrencyCode

```cpp
virtual const char * getCurrencyCode() const
```


**Return**: Currency of the trade. 

**Reimplements**: [Wombat::MamdaTradeRecap::getCurrencyCode](classWombat_1_1MamdaTradeRecap.html#function-getcurrencycode)


Currency of the trade (eg US$)


### function getSettlePrice

```cpp
virtual const MamaPrice & getSettlePrice() const
```


**Return**: Settle price of trade. 

**Reimplements**: [Wombat::MamdaTradeRecap::getSettlePrice](classWombat_1_1MamdaTradeRecap.html#function-getsettleprice)


Settle price of trade.


### function getSettleDate

```cpp
virtual const MamaDateTime & getSettleDate() const
```


**Return**: Settle date of trade. 

**Reimplements**: [Wombat::MamdaTradeRecap::getSettleDate](classWombat_1_1MamdaTradeRecap.html#function-getsettledate)


Settle date of trade.


### function getTradeExecVenue

```cpp
virtual MamdaTradeExecVenue getTradeExecVenue() const
```


**Return**: The trade execution venue. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeExecVenue](classWombat_1_1MamdaTradeRecap.html#function-gettradeexecvenue)


Trade execution venue. See [MamdaTradeExecVenue.h] for details.


### function getOffExchangeTradePrice

```cpp
virtual const MamaPrice & getOffExchangeTradePrice() const
```


**Return**: The last off exchange trade price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExchangeTradePrice](classWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradeprice)


Monetary value of an individual share of the security off exchange at the time of the trade.


### function getOnExchangeTradePrice

```cpp
virtual const MamaPrice & getOnExchangeTradePrice() const
```


**Return**: The last on exchange trade price. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExchangeTradePrice](classWombat_1_1MamdaTradeRecap.html#function-getonexchangetradeprice)


Monetary value of an individual share of the security on exchange at the time of the trade.


### function getTradePrice

```cpp
virtual const MamaPrice & getTradePrice() const
```


**Return**: The monetary value of an individual share of the security at the time of the trade. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradePrice](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradeprice)


Get the trade price.


### function getTradeVolume

```cpp
virtual mama_quantity_t getTradeVolume() const
```


**Return**: The number of shares traded in a single transaction for an individual security. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradeVolume](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradevolume)


Get the trade volume. 


### function getTradePartId

```cpp
virtual const char * getTradePartId() const
```


**Return**: Trade participant ID. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradePartId](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradepartid)


Get the participant identifier for the trade. This is typically an exchange ID or a market maker ID. I


### function getTradeQual

```cpp
virtual const char * getTradeQual() const
```


**Return**: Trade qualifier. A normalized set of qualifiers for the current trade for the security. This field may contain multiple string values, separated by the colon(:) character.

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getTradeQual](classWombat_1_1MamdaTradeCancelOrError.html#function-gettradequal)


Get the wombat normalized trade qualifier. 
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


### function getTradeQualNative

```cpp
virtual const char * getTradeQualNative() const
```


**See**: [getTradeQual()](classWombat_1_1MamdaTradeListener.html#function-gettradequal)

**Return**: The Trade Condition. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradeQualNative](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradequalnative)


Get the Trade condition ("sale condition"). Feed-specific trade qualifier code(s). This field is provided primarily for completeness and/or troubleshooting. 


### function getTradeSellersSaleDays

```cpp
virtual mama_u32_t getTradeSellersSaleDays() const
```


**Return**: The Seller's sale days. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradeSellersSaleDays](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradesellerssaledays)


Get the seller's sale days. Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security.


### function getTradeStopStock

```cpp
virtual char getTradeStopStock() const
```


**Return**: Stopped stock indicator. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradeStopStock](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradestopstock)


Get the Stopped stock indicator. Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable)


### function getIsIrregular

```cpp
virtual bool getIsIrregular() const
```


**Return**: Whether or not the trade qualifies as an irregular trade. In general, only "regular" trades qualify to update the official last price and high/low prices. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getIsIrregular](classWombat_1_1MamdaTradeCancelOrError.html#function-getisirregular)


Get whether the trade is irregular. 


### function getOrderId

```cpp
virtual mama_u64_t getOrderId() const
```


**Return**: The trade message unique order id number (if available). 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getOrderId](classWombat_1_1MamdaTradeOutOfSequence.html#function-getorderid)


Get the trade's order id, if available. 


### function getUniqueId

```cpp
virtual const char * getUniqueId() const
```


**Return**: The unique ID 

**Reimplements**: [Wombat::MamdaTradeReport::getUniqueId](classWombat_1_1MamdaTradeReport.html#function-getuniqueid)


Get the unique ID 


### function getTradeId

```cpp
virtual const char * getTradeId() const
```


**Return**: the trade id 

**Reimplements**: [Wombat::MamdaTradeReport::getTradeId](classWombat_1_1MamdaTradeReport.html#function-gettradeid)


Get the trade id 


### function getCorrTradeId

```cpp
virtual const char * getCorrTradeId() const
```


**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrTradeId](classWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeid)


Get the corrected trade Id. 


### function getTradeAction

```cpp
virtual const char * getTradeAction() const
```


**Return**: The trade action 

**Reimplements**: [Wombat::MamdaTradeReport::getTradeAction](classWombat_1_1MamdaTradeReport.html#function-gettradeaction)


Get the trade action 


### function getBeginGapSeqNum

```cpp
virtual mama_seqnum_t getBeginGapSeqNum() const
```


**Return**: The start of the sequence number gap. 

**Reimplements**: [Wombat::MamdaTradeGap::getBeginGapSeqNum](classWombat_1_1MamdaTradeGap.html#function-getbegingapseqnum)


The starting sequence number of detected missing trades based on the trade count.


### function getEndGapSeqNum

```cpp
virtual mama_seqnum_t getEndGapSeqNum() const
```


**Return**: The end of the sequence number gap. 

**Reimplements**: [Wombat::MamdaTradeGap::getEndGapSeqNum](classWombat_1_1MamdaTradeGap.html#function-getendgapseqnum)


The end sequence number of detected missing trades based on the trade count.


### function getIsCancel

```cpp
virtual bool getIsCancel() const
```


**Return**: Whether this is a trade cancel. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getIsCancel](classWombat_1_1MamdaTradeCancelOrError.html#function-getiscancel)


Return whether this event is a trade cancel. If false, the event is a trade error.


### function getOrigSeqNum

```cpp
virtual mama_seqnum_t getOrigSeqNum() const
```


**Return**: The original sequence number. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigSeqNum](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnum)


Original feed-generated sequence for a correction/cancel/error.


### function getOrigPrice

```cpp
virtual const MamaPrice & getOrigPrice() const
```


**Return**: The original trade price. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigPrice](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigprice)


Original trade price in a correction/cancel/error.


### function getOrigVolume

```cpp
virtual mama_quantity_t getOrigVolume() const
```


**Return**: The original trade volume. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigVolume](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolume)


Original trade size in a correction/cancel/error.


### function getOrigPartId

```cpp
virtual const char * getOrigPartId() const
```


**Return**: The original trade participant identifier. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigPartId](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartid)


Original trade participant identifier in a correction/cancel/error.


### function getOrigQual

```cpp
virtual const char * getOrigQual() const
```


**Return**: The original trade qualifier. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigQual](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigqual)


A normalized set of qualifiers for the original trade for the security in a correction/cancel/error.


### function getOrigQualNative

```cpp
virtual const char * getOrigQualNative() const
```


**Return**: The original trade condition. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigQualNative](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnative)


Feed-specific trade qualifier code(s) for original trade. This field is provided primarily for completeness and/or troubleshooting.


### function getOrigSellersSaleDays

```cpp
virtual mama_u32_t getOrigSellersSaleDays() const
```


**Return**: The original seller's sale days. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigSellersSaleDays](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledays)


Seller's sale days for original trade. Used when the trade qualifier is "Seller". Specifies the number of days that may elapse before delivery of the security.


### function getOrigStopStock

```cpp
virtual char getOrigStopStock() const
```


**Return**: The original stopped stock indicator. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigStopStock](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstock)


Stopped stock indicator for original trade. Condition related to certain NYSE trading rules. This is not related to a halted security status. (0 == N/A; 1 == Applicable)


### function getOrigTradeId

```cpp
virtual const char * getOrigTradeId() const
```


**Return**: the original trade id 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigTradeId](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeid)


Get the original trade id 


### function getGenericFlag

```cpp
virtual bool getGenericFlag() const
```


**Reimplements**: [Wombat::MamdaTradeCancelOrError::getGenericFlag](classWombat_1_1MamdaTradeCancelOrError.html#function-getgenericflag)


### function getShortSaleCircuitBreaker

```cpp
virtual char getShortSaleCircuitBreaker() const
```


**Return**: ShortSaleCircuitBreaker 

* return values: 
* Blank: Short Sale Restriction Not in Effect. 
* A: Short Sale Restriction Activiated. 
* C: Short Sale Restriction Continued. 
* D: Sale Restriction Deactivated. 
* E: Sale Restriction in Effect. 

**Reimplements**: [Wombat::MamdaTradeRecap::getShortSaleCircuitBreaker](classWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreaker)


get the ShortSaleCircuitBreaker 


### function getOrigShortSaleCircuitBreaker

```cpp
virtual char getOrigShortSaleCircuitBreaker() const
```


**Return**: OrigShortSaleCircuitBreaker 

* return values: 
* Blank: Short Sale Restriction Not in Effect. 
* A: Short Sale Restriction Activiated. 
* C: Short Sale Restriction Continued. 
* D: Sale Restriction Deactivated. 
* E: Sale Restriction in Effect. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigShortSaleCircuitBreaker](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreaker)


get the OrigShortSaleCircuitBreaker 


### function getCorrShortSaleCircuitBreaker

```cpp
virtual char getCorrShortSaleCircuitBreaker() const
```


**Return**: CorrShortSaleCircuitBreaker 

* return values: 
* Blank: Short Sale Restriction Not in Effect. 
* A: Short Sale Restriction Activiated. 
* C: Short Sale Restriction Continued. 
* D: Sale Restriction Deactivated. 
* E: Sale Restriction in Effect. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrShortSaleCircuitBreaker](classWombat_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreaker)


get the CorrShortSaleCircuitBreaker 


### function getCorrPrice

```cpp
virtual const MamaPrice & getCorrPrice() const
```


**See**: [MamdaTradeReport::getTradePrice()](classWombat_1_1MamdaTradeReport.html#function-gettradeprice)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrPrice](classWombat_1_1MamdaTradeCorrection.html#function-getcorrprice)


Get the corrected trade price. 


### function getCorrVolume

```cpp
virtual mama_quantity_t getCorrVolume() const
```


**See**: [MamdaTradeReport::getTradeVolume()](classWombat_1_1MamdaTradeReport.html#function-gettradevolume)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrVolume](classWombat_1_1MamdaTradeCorrection.html#function-getcorrvolume)


Get the corrected trade volume. 


### function getCorrPartId

```cpp
virtual const char * getCorrPartId() const
```


**See**: [MamdaTradeReport::getTradePartId()](classWombat_1_1MamdaTradeReport.html#function-gettradepartid)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrPartId](classWombat_1_1MamdaTradeCorrection.html#function-getcorrpartid)


Get the corrected trade participant identifier. 


### function getCorrQual

```cpp
virtual const char * getCorrQual() const
```


**See**: [MamdaTradeReport::getTradeQual()](classWombat_1_1MamdaTradeReport.html#function-gettradequal)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrQual](classWombat_1_1MamdaTradeCorrection.html#function-getcorrqual)


Get corrected trade qualifier. 


### function getCorrQualNative

```cpp
virtual const char * getCorrQualNative() const
```


**See**: MamdaTradeReport::getTradeCondition() 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrQualNative](classWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnative)


Get corrected trade condition. 


### function getCorrSellersSaleDays

```cpp
virtual mama_u32_t getCorrSellersSaleDays() const
```


**See**: [MamdaTradeReport::getTradeSellersSaleDays()](classWombat_1_1MamdaTradeReport.html#function-gettradesellerssaledays)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrSellersSaleDays](classWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledays)


Get the corrected trade sellers days. 


### function getCorrStopStock

```cpp
virtual char getCorrStopStock() const
```


**See**: [MamdaTradeReport::getTradeStopStock()](classWombat_1_1MamdaTradeReport.html#function-gettradestopstock)

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrStopStock](classWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstock)


Get the original stock stop indicator. 


### function getIsIndicative

```cpp
virtual bool getIsIndicative() const
```


**Return**: Whether the closing price is indicative or otherwise. 

**Reimplements**: [Wombat::MamdaTradeClosing::getIsIndicative](classWombat_1_1MamdaTradeClosing.html#function-getisindicative)


Return whether this closing price is indicative or official.


### function getSymbolFieldState

```cpp
virtual MamdaFieldState getSymbolFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSymbolFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsymbolfieldstate)


Get the string symbol field state


### function getPartIdFieldState

```cpp
virtual MamdaFieldState getPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getPartIdFieldState](classWombat_1_1MamdaBasicEvent.html#function-getpartidfieldstate)


Get the participant identifier field state.


### function getSrcTimeFieldState

```cpp
virtual MamdaFieldState getSrcTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSrcTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsrctimefieldstate)


Get the source time field state


### function getActivityTimeFieldState

```cpp
virtual MamdaFieldState getActivityTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getActivityTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getactivitytimefieldstate)


Get the activity time field state


### function getLineTimeFieldState

```cpp
virtual MamdaFieldState getLineTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getLineTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getlinetimefieldstate)


Get the line time of the update.


### function getSendTimeFieldState

```cpp
virtual MamdaFieldState getSendTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getSendTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-getsendtimefieldstate)


Get the send time field state


### function getMsgQualFieldState

```cpp
virtual MamdaFieldState getMsgQualFieldState() const
```


**Return**: Message Qualifier. The message qualifier provides information in relation to messages duplicate, delayed or out-of-sequence status. 

**Reimplements**: [Wombat::MamdaBasicEvent::getMsgQualFieldState](classWombat_1_1MamdaBasicEvent.html#function-getmsgqualfieldstate)


Get the message qualifier field state.


### function getPubIdFieldState

```cpp
MamdaFieldState getPubIdFieldState() const
```


### function getEventSeqNumFieldState

```cpp
virtual MamdaFieldState getEventSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getEventSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-geteventseqnumfieldstate)


The event SeqNum Field State. 


### function getEventTimeFieldState

```cpp
virtual MamdaFieldState getEventTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaBasicEvent::getEventTimeFieldState](classWombat_1_1MamdaBasicEvent.html#function-geteventtimefieldstate)


Get the event time field state.


### function getLastPriceFieldState

```cpp
virtual MamdaFieldState getLastPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlastpricefieldstate)


The last trade price Field State. 


### function getLastVolumeFieldState

```cpp
virtual MamdaFieldState getLastVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlastvolumefieldstate)


The last volume Field State. 


### function getLastPartIdFieldState

```cpp
virtual MamdaFieldState getLastPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastPartIdFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlastpartidfieldstate)


The last part Id Field State. 


### function getLastTimeFieldState

```cpp
virtual MamdaFieldState getLastTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastTimeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlasttimefieldstate)


The last time Field State. 


### function getIrregPriceFieldState

```cpp
virtual MamdaFieldState getIrregPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getirregpricefieldstate)


The irreg price Field State. 


### function getIrregVolumeFieldState

```cpp
virtual MamdaFieldState getIrregVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getirregvolumefieldstate)


The irreg volume Field State. 


### function getIrregPartIdFieldState

```cpp
virtual MamdaFieldState getIrregPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregPartIdFieldState](classWombat_1_1MamdaTradeRecap.html#function-getirregpartidfieldstate)


The irreg part Id Field State. 


### function getIrregTimeFieldState

```cpp
virtual MamdaFieldState getIrregTimeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getIrregTimeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getirregtimefieldstate)


The irregular time Field State. 


### function getTradeDateFieldState

```cpp
virtual MamdaFieldState getTradeDateFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDateFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettradedatefieldstate)


The trade date Field State. 


### function getSideFieldState

```cpp
virtual MamdaFieldState getSideFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getSideFieldState](classWombat_1_1MamdaTradeRecap.html#function-getsidefieldstate)


The TradeSide or AggressorSide Field State. 


### function getTradeCounFieldState

```cpp
MamdaFieldState getTradeCounFieldState() const
```


### function getAccVolumeFieldState

```cpp
virtual MamdaFieldState getAccVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getAccVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getaccvolumefieldstate)


The accumulated volume Field State. 


### function getOffExAccVolumeFieldState

```cpp
virtual MamdaFieldState getOffExAccVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExAccVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getoffexaccvolumefieldstate)


The off exchange accumulated volume Field State. 


### function getOnExAccVolumeFieldState

```cpp
virtual MamdaFieldState getOnExAccVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExAccVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getonexaccvolumefieldstate)


The on exchange accumulated volume Field State. 


### function getNetChangeFieldState

```cpp
virtual MamdaFieldState getNetChangeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getNetChangeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getnetchangefieldstate)


The net change Field State. 


### function getPctChangeFieldState

```cpp
virtual MamdaFieldState getPctChangeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getPctChangeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getpctchangefieldstate)


The percentage change Field State. 


### function getTradeDirectionFieldState

```cpp
virtual MamdaFieldState getTradeDirectionFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeDirectionFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettradedirectionfieldstate)


The trade direction Field State. 


### function getOpenPriceFieldState

```cpp
virtual MamdaFieldState getOpenPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOpenPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getopenpricefieldstate)


The open price Field State. 


### function getHighPriceFieldState

```cpp
virtual MamdaFieldState getHighPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getHighPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-gethighpricefieldstate)


The high price Field State. 


### function getLowPriceFieldState

```cpp
virtual MamdaFieldState getLowPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLowPriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlowpricefieldstate)


The low price Field State. 


### function getClosePriceFieldState

```cpp
virtual MamdaFieldState getClosePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeClosing::getClosePriceFieldState](classWombat_1_1MamdaTradeClosing.html#function-getclosepricefieldstate)


Get the field state


### function getPrevClosePriceFieldState

```cpp
virtual MamdaFieldState getPrevClosePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevClosePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getprevclosepricefieldstate)


The previous close price Field State. 


### function getAdjPrevClosePriceFieldState

```cpp
virtual MamdaFieldState getAdjPrevClosePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getAdjPrevClosePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getadjprevclosepricefieldstate)


The adjusted previous close date Field State. 


### function getPrevCloseDateFieldState

```cpp
virtual MamdaFieldState getPrevCloseDateFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getPrevCloseDateFieldState](classWombat_1_1MamdaTradeRecap.html#function-getprevclosedatefieldstate)


The previous close date Field State. 


### function getBlockCountFieldState

```cpp
virtual MamdaFieldState getBlockCountFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockCountFieldState](classWombat_1_1MamdaTradeRecap.html#function-getblockcountfieldstate)


The block count Field State. 


### function getBlockVolumeFieldState

```cpp
virtual MamdaFieldState getBlockVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getBlockVolumeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getblockvolumefieldstate)


The block volume Field State. 


### function getVwapFieldState

```cpp
virtual MamdaFieldState getVwapFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getVwapFieldState](classWombat_1_1MamdaTradeRecap.html#function-getvwapfieldstate)


The Vwap Field State. 


### function getOffExVwapFieldState

```cpp
virtual MamdaFieldState getOffExVwapFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExVwapFieldState](classWombat_1_1MamdaTradeRecap.html#function-getoffexvwapfieldstate)


The off exchange Vwap Field State. 


### function getOnExVwapFieldState

```cpp
virtual MamdaFieldState getOnExVwapFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExVwapFieldState](classWombat_1_1MamdaTradeRecap.html#function-getonexvwapfieldstate)


The on exchange Vwap Field State. 


### function getTotalValueFieldState

```cpp
virtual MamdaFieldState getTotalValueFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalValueFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettotalvaluefieldstate)


The total value Field State. 


### function getOffExTotalValueFieldState

```cpp
virtual MamdaFieldState getOffExTotalValueFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExTotalValueFieldState](classWombat_1_1MamdaTradeRecap.html#function-getoffextotalvaluefieldstate)


The Off Exchange Total Value Field State. 


### function getOnExTotalValueFieldState

```cpp
virtual MamdaFieldState getOnExTotalValueFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExTotalValueFieldState](classWombat_1_1MamdaTradeRecap.html#function-getonextotalvaluefieldstate)


The On Exchange Total Value Field State. 


### function getStdDevFieldState

```cpp
virtual MamdaFieldState getStdDevFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevFieldState](classWombat_1_1MamdaTradeRecap.html#function-getstddevfieldstate)


The std deviation Field State. 


### function getStdDevSumFieldState

```cpp
virtual MamdaFieldState getStdDevSumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumFieldState](classWombat_1_1MamdaTradeRecap.html#function-getstddevsumfieldstate)


The std deviation sum Field State. 


### function getStdDevSumSquaresFieldState

```cpp
virtual MamdaFieldState getStdDevSumSquaresFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getStdDevSumSquaresFieldState](classWombat_1_1MamdaTradeRecap.html#function-getstddevsumsquaresfieldstate)


The StdDevSumSquares Field State. 


### function getTradeUnitsFieldState

```cpp
virtual MamdaFieldState getTradeUnitsFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeUnitsFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettradeunitsfieldstate)


The trade units Field State. 


### function getLastSeqNumFieldState

```cpp
virtual MamdaFieldState getLastSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLastSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlastseqnumfieldstate)


The last SeqNum Field State. 


### function getHighSeqNumFieldState

```cpp
virtual MamdaFieldState getHighSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getHighSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-gethighseqnumfieldstate)


The high seqNum Field State. 


### function getLowSeqNumFieldState

```cpp
virtual MamdaFieldState getLowSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getLowSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-getlowseqnumfieldstate)


The low SeqNum Field State. 


### function getTotalVolumeSeqNumFieldState

```cpp
virtual MamdaFieldState getTotalVolumeSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTotalVolumeSeqNumFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettotalvolumeseqnumfieldstate)


The total volume seqNum Field State. 


### function getCurrencyCodeFieldState

```cpp
virtual MamdaFieldState getCurrencyCodeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getCurrencyCodeFieldState](classWombat_1_1MamdaTradeRecap.html#function-getcurrencycodefieldstate)


The currency code Field State. 


### function getSettlePriceFieldState

```cpp
virtual MamdaFieldState getSettlePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getSettlePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getsettlepricefieldstate)


The settle price Field State. 


### function getSettleDateFieldState

```cpp
virtual MamdaFieldState getSettleDateFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getSettleDateFieldState](classWombat_1_1MamdaTradeRecap.html#function-getsettledatefieldstate)


The last trade price Field State. 


### function getTradeExecVenuFieldState

```cpp
MamdaFieldState getTradeExecVenuFieldState() const
```


### function getOffExchangeTradePriceFieldState

```cpp
virtual MamdaFieldState getOffExchangeTradePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOffExchangeTradePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getoffexchangetradepricefieldstate)


The settle date Field State. 


### function getOnExchangeTradePriceFieldState

```cpp
virtual MamdaFieldState getOnExchangeTradePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getOnExchangeTradePriceFieldState](classWombat_1_1MamdaTradeRecap.html#function-getonexchangetradepricefieldstate)


The onExchange trade price Field State. 


### function getTradePriceFieldState

```cpp
virtual MamdaFieldState getTradePriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradePriceFieldState](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradepricefieldstate)


Get the field state


### function getTradeVolumeFieldState

```cpp
virtual MamdaFieldState getTradeVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradeVolumeFieldState](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradevolumefieldstate)


Get the field state


### function getTradePartIdFieldState

```cpp
virtual MamdaFieldState getTradePartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradePartIdFieldState](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradepartidfieldstate)


Get the field state


### function getTradeQualFieldState

```cpp
virtual MamdaFieldState getTradeQualFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getTradeQualFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-gettradequalfieldstate)


The trade qual Field State. 


### function getTradeQualNativeFieldState

```cpp
virtual MamdaFieldState getTradeQualNativeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradeQualNativeFieldState](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradequalnativefieldstate)


Get the field state


### function getTradeSellersSaleDaysFieldState

```cpp
virtual MamdaFieldState getTradeSellersSaleDaysFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradeSellersSaleDaysFieldState](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradesellerssaledaysfieldstate)


Get the field state


### function getTradeStopStockFieldState

```cpp
virtual MamdaFieldState getTradeStopStockFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getTradeStopStockFieldState](classWombat_1_1MamdaTradeOutOfSequence.html#function-gettradestopstockfieldstate)


Get the field state


### function getIsIrregularFieldState

```cpp
virtual MamdaFieldState getIsIrregularFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getIsIrregularFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getisirregularfieldstate)


The isIrregular Field State. 


### function getOrderIdFieldState

```cpp
virtual MamdaFieldState getOrderIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeOutOfSequence::getOrderIdFieldState](classWombat_1_1MamdaTradeOutOfSequence.html#function-getorderidfieldstate)


Get the field state


### function getUniqueIdFieldState

```cpp
virtual MamdaFieldState getUniqueIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeReport::getUniqueIdFieldState](classWombat_1_1MamdaTradeReport.html#function-getuniqueidfieldstate)


The unique ID Field State. 


### function getTradeIdFieldState

```cpp
virtual MamdaFieldState getTradeIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeReport::getTradeIdFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradeidfieldstate)


The trade ID Field State. 


### function getCorrTradeIdFieldState

```cpp
virtual MamdaFieldState getCorrTradeIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrTradeIdFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrtradeidfieldstate)


Get the field state


### function getTradeActionFieldState

```cpp
virtual MamdaFieldState getTradeActionFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeReport::getTradeActionFieldState](classWombat_1_1MamdaTradeReport.html#function-gettradeactionfieldstate)


The trade action Field State. 


### function getTradeExecVenueFieldState

```cpp
MamdaFieldState getTradeExecVenueFieldState() const
```


### function getBeginGapSeqNumFieldState

```cpp
virtual MamdaFieldState getBeginGapSeqNumFieldState() const
```


**Return**: The Field State of the start of the sequence number gap. 

**Reimplements**: [Wombat::MamdaTradeGap::getBeginGapSeqNumFieldState](classWombat_1_1MamdaTradeGap.html#function-getbegingapseqnumfieldstate)


### function getEndGapSeqNumFieldState

```cpp
virtual MamdaFieldState getEndGapSeqNumFieldState() const
```


**Return**: The field state of the end of the sequence number gap. 

**Reimplements**: [Wombat::MamdaTradeGap::getEndGapSeqNumFieldState](classWombat_1_1MamdaTradeGap.html#function-getendgapseqnumfieldstate)


### function getIsCancelFieldState

```cpp
MamdaFieldState getIsCancelFieldState() const
```


### function getOrigSeqNumFieldState

```cpp
virtual MamdaFieldState getOrigSeqNumFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigSeqNumFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigseqnumfieldstate)


Get the field state


### function getOrigPriceFieldState

```cpp
virtual MamdaFieldState getOrigPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigPriceFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigpricefieldstate)


Get the field state


### function getOrigVolumeFieldState

```cpp
virtual MamdaFieldState getOrigVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigVolumeFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigvolumefieldstate)


Get the field state


### function getOrigPartIdFieldState

```cpp
virtual MamdaFieldState getOrigPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigPartIdFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigpartidfieldstate)


Get the field state


### function getOrigQualFieldState

```cpp
virtual MamdaFieldState getOrigQualFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigQualFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualfieldstate)


Get the field state


### function getOrigQualNativeFieldState

```cpp
virtual MamdaFieldState getOrigQualNativeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigQualNativeFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigqualnativefieldstate)


Get the field state


### function getOrigSellersSaleDaysFieldState

```cpp
virtual MamdaFieldState getOrigSellersSaleDaysFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigSellersSaleDaysFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigsellerssaledaysfieldstate)


Get the field state


### function getOrigStopStockFieldState

```cpp
virtual MamdaFieldState getOrigStopStockFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigStopStockFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigstopstockfieldstate)


Get the field state


### function getCorrPriceFieldState

```cpp
virtual MamdaFieldState getCorrPriceFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrPriceFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrpricefieldstate)


Get the field state


### function getCorrVolumeFieldState

```cpp
virtual MamdaFieldState getCorrVolumeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrVolumeFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrvolumefieldstate)


Get the field state


### function getCorrPartIdFieldState

```cpp
virtual MamdaFieldState getCorrPartIdFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrPartIdFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrpartidfieldstate)


Get the field state


### function getCorrQualFieldState

```cpp
virtual MamdaFieldState getCorrQualFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrQualFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrqualfieldstate)


Get the field state


### function getCorrQualNativeFieldState

```cpp
virtual MamdaFieldState getCorrQualNativeFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrQualNativeFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrqualnativefieldstate)


Get the field state


### function getCorrSellersSaleDaysFieldState

```cpp
virtual MamdaFieldState getCorrSellersSaleDaysFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrSellersSaleDaysFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrsellerssaledaysfieldstate)


Get the field state


### function getCorrStopStockFieldState

```cpp
virtual MamdaFieldState getCorrStopStockFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrStopStockFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrstopstockfieldstate)


Get the field state


### function getIsIndicativeFieldState

```cpp
MamdaFieldState getIsIndicativeFieldState() const
```


### function getTradeCountFieldState

```cpp
virtual MamdaFieldState getTradeCountFieldState() const
```


**Return**: MamdaFieldState. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getTradeCountFieldState](classWombat_1_1MamdaTradeRecap.html#function-gettradecountfieldstate)


The trade count Field State. 


### function getOrigTradeIdFieldState

```cpp
virtual MamdaFieldState getOrigTradeIdFieldState() const
```


**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigTradeIdFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigtradeidfieldstate)


### function getGenericFlagFieldState

```cpp
virtual MamdaFieldState getGenericFlagFieldState() const
```


**Reimplements**: [Wombat::MamdaTradeCancelOrError::getGenericFlagFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getgenericflagfieldstate)


### function getShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getShortSaleCircuitBreakerFieldState() const
```


**Return**: The ShortSaleCircuitBreaker Field State. An enumeration representing field state. 

**Reimplements**: [Wombat::MamdaTradeRecap::getShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeRecap.html#function-getshortsalecircuitbreakerfieldstate)


### function getOrigShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getOrigShortSaleCircuitBreakerFieldState() const
```


**Return**: The OrigShortSaleCircuitBreaker Field State. 

**Reimplements**: [Wombat::MamdaTradeCancelOrError::getOrigShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeCancelOrError.html#function-getorigshortsalecircuitbreakerfieldstate)


### function getCorrShortSaleCircuitBreakerFieldState

```cpp
virtual MamdaFieldState getCorrShortSaleCircuitBreakerFieldState() const
```


**Return**: The OrigShortSaleCircuitBreaker Field State. 

**Reimplements**: [Wombat::MamdaTradeCorrection::getCorrShortSaleCircuitBreakerFieldState](classWombat_1_1MamdaTradeCorrection.html#function-getcorrshortsalecircuitbreakerfieldstate)


### function onMsg

```cpp
virtual void onMsg(
    MamdaSubscription * subscription,
    const MamaMsg & msg,
    short msgType
)
```


**Reimplements**: [Wombat::MamdaMsgListener::onMsg](classWombat_1_1MamdaMsgListener.html#function-onmsg)


Implementation of MamdaListener interface. 


### function assertEqual

```cpp
void assertEqual(
    MamdaTradeListener * listener
)
```


### function reset

```cpp
void reset(
    void 
)
```


-------------------------------

Updated on 2023-03-31 at 15:29:59 +0100